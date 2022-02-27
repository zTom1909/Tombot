const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poseidon')
		.setDescription('Muestra las misiones del clan Poseidon'),
	async execute(interaction) {

		const EmbedOlimpocoin = new MessageEmbed()
		
			.setColor('#2197b5')
			.setTitle('🌊𝐑𝐄𝐓𝐎𝐒 𝐃𝐄𝐋 𝐂𝐋𝐀𝐍 𝐏𝐎𝐒𝐄𝐈𝐃𝐎𝐍🌊')
			.setAuthor({ name: '༻༺ 🪐 Ωlım₱o 🪐 ༻༺'})
			.setDescription('《𝐓𝐄𝐂𝐍𝐈𝐂𝐎》')
			.setThumbnail('https://i.imgur.com/EKBLLjC.jpg')
			.addFields(
				{ name: '𝐌𝐢𝐬𝐢𝐨𝐧𝐞𝐬', value: '> ↠ Mortal: Realizar granja de experiencia, comida y combustible todo en uno.\n> ↠ Cobre: Construcción de su casa en parcelas de la temática de su clan de 20x20.\n> ↠ Hierro: Granja de Caña & de Cactus Automática.\n> ↠ Oro: Granja de Oro & de Hierro Automática. \n> ↠ Diamante: MiniTorneo del mejor mecanismo automico\n> ↠ Netherite: Hacer un mecanismo técnico de nivel avanzado (A Mayor Escala) en la base. \n**Nota: Subir pruebas en el canal de #🔰-мιѕισηєѕ-🔰.  Sin capturas No serán validas!**', inline: false },
			)
			.setImage('https://i.imgur.com/SJQVLgD.png')
			.setFooter({ text: 'Completa las misiones de Poseidon para subir de rango!'});

		interaction.reply({ embeds: [EmbedOlimpocoin] });
	},
};