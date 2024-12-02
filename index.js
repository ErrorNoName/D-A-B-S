require('dotenv').config();
const readline = require('readline');
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Fonction pour demander une entrée utilisateur dans la console
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const channel = await client.channels.fetch(process.env.BUMP_CHANNEL);

    // Fonction pour envoyer la commande de bump
    async function bump() {
        try {
            await channel.sendSlash('302050872383242240', 'bump'); // Disboard bot ID
            console.count('Bumped!');
        } catch (error) {
            console.error('Erreur lors du bump:', error);
        }
    }

    // Fonction pour attendre un délai
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Fonction pour gérer le délai entre les bump
    async function loop() {
        // Délai entre 2 heures (7200000 ms) et 2 heures et 2 minutes (7320000 ms)
        const minDelay = 2 * 60 * 60 * 1000; // 2 heures
        const maxDelay = minDelay + (2 * 60 * 1000); // 2 heures + 2 minutes
        const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

        console.log(`Prochain bump dans ${Math.floor(randomDelay / 1000 / 60)} minutes.`);
        await wait(randomDelay);
        await bump();
        loop();
    }

    // Panneau interactif au lancement
    const alreadyBumped = await askQuestion(
        'Avez-vous déjà bumpé récemment ? (oui/non) : '
    );

    if (alreadyBumped.toLowerCase() === 'oui') {
        const timeLeft = parseInt(
            await askQuestion('Combien de minutes restantes avant de pouvoir rebump ? : '),
            10
        );

        if (!isNaN(timeLeft) && timeLeft > 0) {
            console.log(`Attente de ${timeLeft} minutes avant le premier bump.`);
            await wait(timeLeft * 60 * 1000); // Convertir minutes en millisecondes
        }
        console.log('Premier bump après le délai.');
    } else {
        console.log('Bump immédiat.');
        await bump();
    }

    // Lancer la boucle après le premier bump
    loop();

    rl.close();
});

client.login(process.env.TOKEN);
