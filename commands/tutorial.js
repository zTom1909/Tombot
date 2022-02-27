const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tutorial')
		.setDescription('Muestra como instalar la wallet'),
	async execute(interaction) {

		const EmbedOlimpocoin = new MessageEmbed()
		
			.setColor('#2fc14c')
			.setTitle('Como instalar la wallet para las OLYMP')
			.setAuthor({ name: '༻༺ 🪐 Ωlım₱o 🪐 ༻༺'})
			.setDescription('> Guia de instalacion de la wallet')
			.setThumbnail('https://i.imgur.com/EKBLLjC.jpg')
			.addFields(
				{ name: 'Instalacion', value: '> - Abrir cmd como Administrador\n> 1- curl https://release.solana.com/v1.9.5/solana-install-init-x86_64-pc-windows-msvc.exe --output C:\solana-install-tmp\solana-install-init.exe --create-dirs\n> 2- C:\solana-install-tmp\solana-install-init.exe v1.9.5', inline: false },
				{ name: 'Generar Wallet', value: '> 3- cd C:\solana\n> 4- solana-keygen new --outfile C:\solana\keypair.json', inline: false },
                { name: 'Conectar wallet', value: '> https://phantom.app/download\n> - Conectar con frase del comando 4\n> - Agregar wallet con clave privada del archivo keypair.json\n> - Poner en devnet', inline: false },
                { name: 'Configurar wallet', value: '> 5- solana config set --url https://api.devnet.solana.com/\n> 6- solana config set --keypair C:\solana\keypair.json', inline: false },
                { name: 'Enviar 1 SOL', value: '> 7- solana airdrop 1 [tu_wallet] --url https://api.devnet.solana.com/', inline: false },
                { name: 'Crear cuenta para el token', value: '> 8- spl-token create-account BGy1k3pPTG9XbjvT32bjpAfi13AbZv4yeASKMi9ayrXM', inline: false },
			)
			.setImage('https://i.imgur.com/SJQVLgD.png')
			.setFooter({ text: 'Si tienes dudas, habla con zTom1909#7395'});

		interaction.reply({ embeds: [EmbedOlimpocoin] });
	},
};