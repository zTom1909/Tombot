const fs = require('node:fs');
const { Client, Collection, Intents, Permissions, MessageEmbed } = require('discord.js');
require("dotenv").config()
const { canalReportes } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES] });
const db = require("megadb");
const setPrefix = new db.crearDB("setPrefix")
const indexsetPrefix = new db.crearDB("setPrefix")
const setRecompensa1 = new db.crearDB("setRecompensa1")
const setRecompensa2 = new db.crearDB("setRecompensa2")
const setRecompensa3 = new db.crearDB("setRecompensa3")
const setReto1 = new db.crearDB("setReto1")
const setReto2 = new db.crearDB("setReto2")
const setReto3 = new db.crearDB("setReto3")
const setReport = new db.crearDB("setReport")
const indexsetReport = new db.crearDB("setReport")

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

comandoejecutado = true
canalOrigen = "1"
canalObjetivo = "1"

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


client.on("ready", () => {
    console.log("Bot iniciado con exito")

    client.user.setPresence({
        activity: {
            name: "en Olimpo Community",
            type: "PLAYING"
        },
        status: "online"
    });
});

client.on("messageCreate", async (message) => {

    let prefix;
    if(indexsetPrefix.has(message.guild.id)) {
        prefix = await indexsetPrefix.get(message.guild.id)
    } else {
        prefix = "*"
    }

    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(message.content.startsWith(prefix)) {
        if (command === "clear") {
            if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("**No tienes permiso para ejecutar este comando**");
            arrayClear = message.content.split(' ')
            if (arrayClear[1] <= 100)
                message.channel.bulkDelete(arrayClear[1], true)
            else (message.reply("No puedes eliminar mas de 100 mensajes!"))
        } else if (command === "report") {
            let canalReport;
            if(indexsetReport.has(message.guild.id)) {
                canalReport = await indexsetReport.get(message.guild.id)
            } else {
                canalReport = canalReportes
            }

            arrayReport = message.content.split(' ')
            arrayR = message.content.split(' ')
            arrayReport.shift()
            arrayR.shift()
            if (!message.mentions.members.size) return message.reply("**Debes mencionar a un usuario**")
            if (!arrayReport[1]) return message.reply("**Debes Proporcionar una razon**")
            var cortador = arrayR.splice(0,1)
            const EmbedReporte = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('**__Juzgado Oficial de Reportes de Olimpo__**')
                .setAuthor({ name: 'Un usuario ha sido reportado'})
                .setDescription(arrayReport[0])
                .addFields(
                    { name: 'Usuario que lo reporta', value: message.author.tag },
                    { name: 'Razon', value: arrayR.join(' ') },
                )
                .setTimestamp()
                client.channels.cache.get(canalReport).send({ embeds: [EmbedReporte] });
        } else if (command === "canal") {
            if (message.author.tag == "zTom1909#7395") {
                arrayMensaje = message.content.split(' ')
                canalOrigen = arrayMensaje[1]
                canalObjetivo = arrayMensaje[2]
                message.reply("**Has configurado el canal de origen como: ** ` " + canalOrigen + " ` **y el canal objetivo como:** ` " + canalObjetivo + " ` **con exito**")
            } else {
                message.reply("**No eres Tom, no puedes usar ese comando**");
            }
        } else if (command === "canales") {
            if (message.author.tag == "zTom1909#7395") {
                message.reply("**Canal de origen: **` " + canalOrigen + " `\n**Canal objetivo: ** ` " + canalObjetivo + " `")
            } else {
                message.reply("**No eres Tom, no puedes usar ese comando**");
            }
        } else if (command === "config") {
            if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply("**No tienes permiso para ejecutar este comando**");
            arrayConfig = message.content.split(' ')
            arrayC = message.content.split(' ')
            if (arrayConfig[1] == "setPrefix"){
                if(!arrayConfig[2]) return message.reply("**Por favor, espeficica un prefix**")
                if(setPrefix.set(message.guild.id, arrayConfig[2])) return message.reply("**Prefix cambiado a:** ` "+arrayConfig[2]+" `")
            } else if (arrayConfig[1] == "setMision") {
                if(!arrayConfig[2]) return message.reply("**Por favor, espeficica el numero de la mision**")
                if(!arrayConfig[3]) return message.reply("**Por favor, espeficica la recompensa**")
                if(!arrayConfig[4]) return message.reply("**Por favor, espeficica un reto**")
                var reto = arrayC.splice(0,4)
                if (arrayConfig[2] == "1") {
                    if(setRecompensa1.set(message.guild.id, arrayConfig[3])) {
                        if(setReto1.set(message.guild.id, arrayC.join(' '))) return message.reply("**La mision: **` "+arrayConfig[2]+" `** ha sido cambiada con exito**")               
                    }
                } else if (arrayConfig[2] == "2") {
                    if(setRecompensa2.set(message.guild.id, arrayConfig[3])) {
                        if(setReto2.set(message.guild.id, arrayC.join(' '))) return message.reply("**La mision: **` "+arrayConfig[2]+" `** ha sido cambiada con exito**")               
                    }
                } else if (arrayConfig[2] == "3") {
                    if(setRecompensa3.set(message.guild.id, arrayConfig[3])) {
                        if(setReto3.set(message.guild.id, arrayC.join(' '))) return message.reply("**La mision: **` "+arrayConfig[2]+" `** ha sido cambiada con exito**")               
                    }
                }
            } else if (arrayConfig[1] == "setReport") {
                if(!arrayConfig[2]) return message.reply("**Por favor, espeficica una id de canal**")
                if(setReport.set(message.guild.id, arrayConfig[2])) return message.reply("**Canal de reportes cambiado a:** ` "+arrayConfig[2]+" `")
            }
        }
    }
    if (message.channel.id == canalOrigen & message.author.tag == "zTom1909#7395"){
        if (command === "canal") return;
        client.channels.cache.get(canalObjetivo).send(message.content);
    }
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Se produjo un erorr al ejecutar este comando!', ephemeral: true });
	}
});

client.login()