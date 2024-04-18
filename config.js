module.exports = {
	helpCmdPerPage: 10, //- Number of commands per page of help command
	lyricsMaxResults: 5, //- Number of results for lyrics command (Do not touch this value if you don't know what you are doing)
	adminId: "1103388964485869609", //- Replace UserId with the Discord ID of the admin of the bot
	token: process.env.token || "", //- Bot's Token
	clientId: process.env.clientId || "", //- ID of the bot
	clientSecret: process.env.clientSecret || "", //- Client Secret of the bot
	port: process.env.PORT || "", //- Port of the API and Dashboard
	scopes: ["identify", "guilds", "applications.commands"], //- Discord OAuth2 Scopes
	inviteScopes: ["bot", "applications.commands"], // Invite link scopes
	serverDeafen: true, //- If you want bot to stay deafened
	defaultVolume: 100, //- Sets the default volume of the bot, You can change this number anywhere from 1 to 100
	supportServer: process.env.supportServer || "", //- Support Server Link
	Issues: "https://github.com/MDCYT/Discord-MusicBot/issues", //- Bug Report Link
	permissions: 277083450689, //- Bot Inviting Permissions
	disconnectTime: 30000, //- How long should the bot wait before disconnecting from the voice channel (in miliseconds). Set to 1 for instant disconnect.
	twentyFourSeven: false, //- When set to true, the bot will never disconnect from the voice channel
	autoQueue: false, //- When set to true, related songs will automatically be added to the queue
	autoPause: true, //- When set to true, music will automatically be paused if everyone leaves the voice channel
	autoLeave: false, //- When set to true, the bot will automatically leave when no one is in the voice channel (can be combined with 24/7 to always be in voice channel until everyone leaves; if 24/7 is on disconnectTime will add a disconnect delay after everyone leaves.)
	debug: true, //- Debug mode
	cookieSecret: process.env.cookieSecret || "CodingWithSudhan is epic", //- Cookie Secret
	website: `http://music.any-bot.xyz`, //- without the / at the end
	// You need a lavalink server for this bot to work!!!!
	// Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
	nodes: [
		{ 
			identifier: "Akshtt - v4 Free", 
		 	password: "admin", 
		 	host: "lava.akshat.tech", 
		 	port: 443, 
		 	secure: true,
		 	retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
		},
		{
  			identifier: "AjieDev - Lavalink [SSL | UK]",
  			password: "https://dsc.gg/ajidevserver",
  			host: "lava-v3.ajieblogs.eu.org",
  			port: 443,
  			secure: true,
		 	retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
		},
		{
			identifier: "Lexnet.cc - NA",
			password: "lexn3tl@val!nk",
			host: "lavalink.lexnet.cc",
			port: 2333,
			secure: false,
		 	retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
		},
		{
			identifier: "Lexnet.cc - NA",
			password: "24.199.73.68",
			host: "lavalink.lexnet.cc",
			port: 80,
			secure: false,
		 	retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
		},
		{
			identifier: "Lexnet.cc - EU",
			password: "lexn3tl@val!nk",
			host: "eu-lavalink.lexnet.cc",
			port: 2333,
			secure: false,
		 	retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
		},
		{
			identifier: "Creavite US1 Lavalink",
			password: "auto.creavite.co",
			host: "us1.lavalink.creavite.co",
			port: 20080,
			secure: false,
		 	retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
		},
		{
			identifier: "GlassHost - NY1",
			password: "glasshost1984",
			host: "n1.ll.darrennathanael.com",
			port: 2269,
			secure: false,
		 	retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
		}
	],
	embedColor: "#2f3136", //- Color of the embeds, hex supported
	presence: {
		// PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
		status: "online", //- You can have online, idle, dnd and invisible (Note: invisible makes people think the bot is offline)
		activities: [
			{
				name: "Music", //- Status Text
				type: "LISTENING", //- PLAYING, WATCHING, LISTENING, STREAMING
			},
		],
	},
	iconURL: "https://cdn.darrennathanael.com/icons/spinning_disk.gif", //- This icon will be in every embed's author field
};
