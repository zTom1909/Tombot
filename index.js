const { Client, Collection, Intents, Permissions, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const { canalReportes, token } = require('./config.json');
const db = require("megadb");
const fs = require('node:fs');
require("dotenv").config()


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}


const setPrefix = new db.crearDB("setPrefix")
const indexsetPrefix = new db.crearDB("setPrefix")
const setMision1 = new db.crearDB("setMision1")
const setMision2 = new db.crearDB("setMision2")
const setMision3 = new db.crearDB("setMision3")
const setReport = new db.crearDB("setReport")
const indexsetReport = new db.crearDB("setReport")
const setReportes = new db.crearDB("setReportes")

canalOrigen = "1"
canalObjetivo = "1"



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

    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;

    
    let prefix;
    if (indexsetPrefix.has(message.guild.id)) prefix = await indexsetPrefix.get(message.guild.id)
    else prefix = "*"

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (message.content.startsWith(prefix)) {

        if (command === "clear") {
            
            if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("**No tienes permiso para ejecutar este comando**");

            arrayClear = message.content.split(' ')

            if (arrayClear[1] <= 100) message.channel.bulkDelete(arrayClear[1], true)
            else message.reply("No puedes eliminar mas de 100 mensajes!")
        
        }

        if (command === "report") {

            let canalReport;
            if (indexsetReport.has(message.guild.id)) canalReport = await indexsetReport.get(message.guild.id)
            else canalReport = canalReportes
            
            arrayReport = message.content.split(' ')
            arrayR = message.content.split(' ')
            arrayReport.shift()
            arrayR.shift()
            var cortador = arrayR.splice(0, 1)

            if (!arrayReport[0]) return message.reply("**Debes mencionar a un usuario**")
            if (!arrayReport[1]) return message.reply("**Debes Proporcionar una razon**")         

            
            if (arrayReport[0].startsWith('<@') && arrayReport[0].endsWith('>')) arrayReport[0] = arrayReport[0].slice(2, -1);
            let userId = arrayReport[0]
               
            let reportes;
            if (setReportes.has(userId)) reportes = await setReportes.get(userId)
            else reportes = 0
            
            reportesSum = reportes + 1

            const EmbedReporte = new MessageEmbed()

                .setColor('#ff0000')
                .setTitle('**__Juzgado Oficial de Reportes de Olimpo__**')
                .setAuthor({ name: '⚖️ Un usuario ha sido reportado ⚖️' })
                .setDescription('Numero de reportes: '+reportesSum)
                .addFields(
                    { name: 'Usuario reportado: ', value: '<@'+arrayReport[0]+'>' },
                    { name: 'Razon', value: arrayR.join(' ') },
                )
                .setTimestamp()
                .setFooter({ text: 'Usuario reportado por ' + message.author.tag });

            client.channels.cache.get(canalReport).send({ embeds: [EmbedReporte] }); 
            message.reply("**Usuario reportado con exito**") 

            if (setReportes.set(userId, reportesSum)) return  
        }

        if (command === "canal") {

            if (message.author.id == "708119235238297661") {

                arrayMensaje = message.content.split(' ')
    
                canalOrigen = arrayMensaje[1]
                canalObjetivo = arrayMensaje[2]

                if (!canalOrigen) {

                    message.reply("**Por favor, espeficica un canal de origen**")
                    canalOrigen = 1
                    canalObjetivo = 1
                    return

                } 

                if (!canalObjetivo) {

                    message.reply("**Por favor, espeficica un canal de objetivo**")
                    canalObjetivo = 1
                    return

                }
                
                if (canalOrigen.startsWith('<#') && canalOrigen.endsWith('>')) canalOrigen = canalOrigen.slice(2, -1);
                if (canalObjetivo.startsWith('<#') && canalObjetivo.endsWith('>')) canalObjetivo = canalObjetivo.slice(2, -1);

                message.reply("**Has configurado el canal de origen como: ** <#" + canalOrigen + "> **y el canal objetivo como:** <#" + canalObjetivo + "> **con exito**")
            
            } else message.reply("**No eres Tom, no puedes usar ese comando**");
        }

        if (command === "canales") {

            if (message.author.id == "708119235238297661") message.reply("**Canal de origen: ** <#" + canalOrigen + ">\n**Canal objetivo: ** <#" + canalObjetivo + ">")
            else message.reply("**No eres Tom, no puedes usar ese comando**");

        }

        if (command === "config") {

            if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply("**No tienes permiso para ejecutar este comando**");

            arrayConfig = message.content.split(' ')
            arrayC = message.content.split(' ')

            let subcommand = arrayConfig[1]

            if (!subcommand) return message.reply("**Por favor, espeficica un subcomando**")


            if (subcommand == "setPrefix") {
                
                if (!arrayConfig[2]) return message.reply("**Por favor, espeficica un prefix**")

                if (setPrefix.set(message.guild.id, arrayConfig[2])) return message.reply("**Prefix cambiado a:** ` " + arrayConfig[2] + " `")
            
            }
            
            if (subcommand == "setMision") {

                if (!arrayConfig[2]) return message.reply("**Por favor, espeficica el numero de la mision**")
                if (!arrayConfig[3]) return message.reply("**Por favor, espeficica la recompensa**")
                if (!arrayConfig[4]) return message.reply("**Por favor, espeficica un reto**")

                var mision = arrayC.splice(0, 3)

                if (arrayConfig[2] == "1") if (setMision1.set(message.guild.id, arrayC.join(' '))) return message.reply("**La mision: **` " + arrayConfig[2] + " `** ha sido cambiada con exito**")
                if (arrayConfig[2] == "2") if (setMision2.set(message.guild.id, arrayC.join(' '))) return message.reply("**La mision: **` " + arrayConfig[2] + " `** ha sido cambiada con exito**")
                if (arrayConfig[2] == "3") if (setMision3.set(message.guild.id, arrayC.join(' '))) return message.reply("**La mision: **` " + arrayConfig[2] + " `** ha sido cambiada con exito**")
            
            }
            
            if (subcommand == "setReport") {
                
                if (!arrayConfig[2]) return message.reply("**Por favor, espeficica un canal**")

                if (arrayConfig[2].startsWith('<#') && arrayConfig[2].endsWith('>')) arrayC[2] = arrayC[2].slice(2, -1);
                    

                if (setReport.set(message.guild.id, arrayC[2])) return message.reply("**Canal de reportes cambiado a:** " + arrayConfig[2])
            
            }

            if (subcommand == "clearReports") {

                if (!arrayConfig[2]) return message.reply("**Debes mencionar a un usuario**")

                if (arrayConfig[2].startsWith('<@') && arrayConfig[2].endsWith('>')) arrayConfig[2] = arrayConfig[2].slice(2, -1);
                let userId = arrayConfig[2]

                let reportes;
                if (setReportes.has(userId)) reportes = await setReportes.get(userId)
                else reportes = 0
            
                if (setReportes.set(userId, 0)) return message.reply("**Reportes de ** <@"+userId+"> **limpiados con exito**")
            }

            if (subcommand == "viewReports") {

                if (!arrayConfig[2]) return message.reply("**Debes mencionar a un usuario**")

                if (arrayConfig[2].startsWith('<@') && arrayConfig[2].endsWith('>')) arrayConfig[2] = arrayConfig[2].slice(2, -1);
                let userId = arrayConfig[2]

                let reportes;
                if (setReportes.has(userId)) reportes = await setReportes.get(userId)
                else reportes = 0
            
                message.reply("**El usuario** <@"+userId+"> **posee** ` "+reportes+" ` **reportes**")
            }
        }
    }


    if (message.channel.id == canalOrigen & message.author.id == "708119235238297661") {

        if (message.content.startsWith(prefix)) return;
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



client.login(token)