const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection, Intents, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES] });
const db = require("megadb")
const setRecompensa1 = new db.crearDB("setRecompensa1")
const setRecompensa2 = new db.crearDB("setRecompensa2")
const setRecompensa3 = new db.crearDB("setRecompensa3")
const setReto1 = new db.crearDB("setReto1")
const setReto2 = new db.crearDB("setReto2")
const setReto3 = new db.crearDB("setReto3")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('misiones')
		.setDescription('Muestra las misiones de OLYMPs'),
	async execute(interaction) {

		let recompensa1;
		if(setRecompensa1.has(interaction.guild.id)) {
			recompensa1 = await setRecompensa1.get(interaction.guild.id)
		} else {
			recompensa1 = "1"
		}
		let recompensa2;
		if(setRecompensa2.has(interaction.guild.id)) {
			recompensa2 = await setRecompensa2.get(interaction.guild.id)
		} else {
			recompensa2 = "2"
		}
		let recompensa3;
		if(setRecompensa3.has(interaction.guild.id)) {
			recompensa3 = await setRecompensa3.get(interaction.guild.id)
		} else {
			recompensa3 = "5"
		}
		let reto1;
		if(setReto1.has(interaction.guild.id)) {
			reto1 = await setReto1.get(interaction.guild.id)
		} else {
			reto1 = "Placeholder"
		}
		let reto2;
		if(setReto2.has(interaction.guild.id)) {
			reto2 = await setReto2.get(interaction.guild.id)
		} else {
			reto2 = "Placeholder"
		}
		let reto3;
		if(setReto3.has(interaction.guild.id)) {
			reto3 = await setReto3.get(interaction.guild.id)
		} else {
			reto3 = "Placeholder"
		}
		const EmbedOlimpocoin = new MessageEmbed()
			.setColor('#2fc14c')
			.setTitle('Misiones de OlimpoCoins')
			//.setURL('https://discord.js.org/')
			.setAuthor({ name: '༻༺ 🪐 Ωlım₱o 🪐 ༻༺'})
			.setDescription('> Completa misiones para ganar OlimpoCoins!')
			.setThumbnail('https://i.imgur.com/EKBLLjC.jpg')
			.addFields(
				//{ name: 'Regular field title', value: 'Some value here' },
				//{ name: '\u200B', value: '\u200B' },
				{ name: 'Mision #1 - '+recompensa1+' OLYMP', value: '> '+reto1, inline: false },
				{ name: 'Mision #2 - '+recompensa2+' OLYMP', value: '> '+reto2, inline: false },
				{ name: 'Mision #3 - '+recompensa3+' OLYMP', value: '> '+reto3, inline: false },
			)
			//.addField('Inline field title', 'Some value here', true)
			.setImage('https://i.imgur.com/SJQVLgD.png')
			//.setTimestamp()
			.setFooter({ text: 'Usa OLYMP para comprar cosas en Olimpo!'});

		interaction.reply({ embeds: [EmbedOlimpocoin] });
	},
};