const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES] });

const db = require("megadb")

const setMision1 = new db.crearDB("setMision1")
const setMision2 = new db.crearDB("setMision2")
const setMision3 = new db.crearDB("setMision3")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('misiones')
		.setDescription('Muestra las misiones de OLYMPs'),
	async execute(interaction) {

		let plhmision1;
		if(setMision1.has(interaction.guild.id)) plhmision1 = await setMision1.get(interaction.guild.id)
		else plhmision1 = "1 Placeholder"
			
		let plhmision2;
		if(setMision2.has(interaction.guild.id)) plhmision2 = await setMision2.get(interaction.guild.id)
		else plhmision2 = "1 Placeholder"

		let plhmision3;
		if(setMision3.has(interaction.guild.id)) plhmision3 = await setMision3.get(interaction.guild.id)
		else plhmision3 = "1 Placeholder"	

		const mision1 = plhmision1.split(/ +/);
		const mision2 = plhmision2.split(/ +/);
		const mision3 = plhmision3.split(/ +/);

		var recompensa1 = mision1.splice(0,1)
		var recompensa2 = mision2.splice(0,1)
		var recompensa3 = mision3.splice(0,1)

		
		const EmbedMisiones = new MessageEmbed()

			.setColor('#2fc14c')
			.setTitle('Misiones de OlimpoCoins')
			.setAuthor({ name: '༻༺ 🪐 Ωlım₱o 🪐 ༻༺'})
			.setDescription('> Completa misiones para ganar OlimpoCoins!')
			.setThumbnail('https://i.imgur.com/EKBLLjC.jpg')
			.addFields(
				{ name: 'Mision #1 - '+recompensa1+' OLYMP', value: '> '+mision1.join(' '), inline: false },
				{ name: 'Mision #2 - '+recompensa2+' OLYMP', value: '> '+mision2.join(' '), inline: false },
				{ name: 'Mision #3 - '+recompensa3+' OLYMP', value: '> '+mision3.join(' '), inline: false },
			)
			.setImage('https://i.imgur.com/SJQVLgD.png')
			.setFooter({ text: 'Usa OLYMP para comprar cosas en Olimpo!'});

		interaction.reply({ embeds: [EmbedMisiones] });
	},
};