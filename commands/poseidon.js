const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poseidon')
		.setDescription('Muestra las misiones del clan Poseidon'),
	async execute(interaction) {

		const EmbedPoseidon = new MessageEmbed()
		
			.setColor('#2197b5')
			.setTitle('๐๐๐๐๐๐ ๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐๐๐')
			.setAuthor({ name: 'เผปเผบ ๐ช ฮฉlฤฑmโฑo ๐ช เผปเผบ'})
			.setDescription('ใ๐๐๐๐๐๐๐ใ')
			.setThumbnail('https://i.imgur.com/EKBLLjC.jpg')
			.addFields(
				{ name: '๐๐ข๐ฌ๐ข๐จ๐ง๐๐ฌ', value: '> โ  Mortal: Realizar granja de experiencia, comida y combustible todo en uno.\n> โ  Cobre: Construcciรณn de su casa en parcelas de la temรกtica de su clan de 20x20.\n> โ  Hierro: Granja de Caรฑa & de Cactus Automรกtica.\n> โ  Oro: Granja de Oro & de Hierro Automรกtica. \n> โ  Diamante: MiniTorneo del mejor mecanismo automico\n> โ  Netherite: Hacer un mecanismo tรฉcnico de nivel avanzado (A Mayor Escala) en la base. \n**Nota: Subir pruebas en el canal de #๐ฐ-ะผฮนัฮนฯฮทัั-๐ฐ.  Sin capturas No serรกn validas!**', inline: false },
			)
			.setImage('https://i.imgur.com/SJQVLgD.png')
			.setFooter({ text: 'Completa las misiones de Poseidon para subir de rango!'});

		interaction.reply({ embeds: [EmbedPoseidon] });
	},
};