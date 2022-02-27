const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hades')
		.setDescription('Muestra las misiones del clan Hades'),
	async execute(interaction) {

		const EmbedOlimpocoin = new MessageEmbed()
		
			.setColor('#b52121')
			.setTitle('⚔️𝐑𝐄𝐓𝐎𝐒 𝐃𝐄𝐋 𝐂𝐋𝐀𝐍 𝐇𝐀𝐃𝐄𝐒⚔️')
			.setAuthor({ name: '༻༺ 🪐 Ωlım₱o 🪐 ༻༺'})
			.setDescription('《𝐏𝐕𝐏》')
			.setThumbnail('https://i.imgur.com/EKBLLjC.jpg')
			.addFields(
				{ name: '𝐌𝐢𝐬𝐢𝐨𝐧𝐞𝐬', value: '> ↠ Mortal: Matar 40 personas sin morir validez en el KDR (PvP no valido contra integrantes del clan. Deberán tomar captura del antes y después de su KDR)\n> ↠ Cobre: Construcción de su casa en parcelas de la temática de su clan de 20x20.\n> ↠ Hierro: Tener dos cofre dobles por cada poción existente de PvP y enseñar o aprender PvP Básico a Avanzado.\n> ↠ Oro: Ganar 5 PvP a personas distintas en un 1v1 en la Cúpula del Spawn contra miembros fuera del clan full Netherite.\n> ↠ Diamante: Raidear 2 bases de otros clanes (No valen casas), mini torneo de PvP y el ganador sube de rango\n> ↠ Netherite: Realizar un Clan vs Clan & Entrenar a los novatos.\n**Nota: Subir pruebas en el canal de #🔰-мιѕισηєѕ-🔰.  Sin capturas No serán validas!**', inline: false },
			)
			.setImage('https://i.imgur.com/SJQVLgD.png')
			.setFooter({ text: 'Completa las misiones de Hades para subir de rango!'});

		interaction.reply({ embeds: [EmbedOlimpocoin] });
	},
};