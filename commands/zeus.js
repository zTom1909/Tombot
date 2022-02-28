const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('zeus')
		.setDescription('Muestra las misiones del clan Zeus'),
	async execute(interaction) {

		const EmbedZeus = new MessageEmbed()
		
			.setColor('#f7f72b')
			.setTitle('⚡𝐑𝐄𝐓𝐎𝐒 𝐃𝐄𝐋 𝐂𝐋𝐀𝐍 𝐙𝐄𝐔𝐒⚡')
			.setAuthor({ name: '༻༺ 🪐 Ωlım₱o 🪐 ༻༺'})
			.setDescription('《𝐂𝐎𝐍𝐒𝐓𝐑𝐔𝐂𝐂𝐈𝐎𝐍》')
			.setThumbnail('https://i.imgur.com/EKBLLjC.jpg')
			.addFields(
				{ name: '𝐌𝐢𝐬𝐢𝐨𝐧𝐞𝐬', value: '> ↠ Mortal: PixelArt de protección 20x20\n> ↠ Cobre: Construcción de su casa en parcelas de la temática de su clan de 20x20.\n> ↠ Hierro: Mini estatua o construcción con temática de OLIMPO\n> ↠ Oro: Realizar la mejor estatua en un 10x20.\n> ↠ Diamante: Realizar un proyecto de su mega construcción a través de un mini plano en creativo con la temática que se le de.\n> ↠ Netherite: Ejecutar el proyecto planeado en Diamante.\n**Nota: Subir pruebas en el canal de #🔰-мιѕισηєѕ-🔰.  Sin capturas No serán validas!**', inline: false },
        	)
			.setImage('https://i.imgur.com/SJQVLgD.png')
			.setFooter({ text: 'Completa las misiones de Zeus para subir de rango!'});

		interaction.reply({ embeds: [EmbedZeus] });
	},
};