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
			identifier: "1", //- Used for indentifier in stats commands.
			host: "lavalink.oryzen.xyz", //- The host name or IP of the lavalink server.
			port: 80, // The port that lavalink is listening to. This must be a number!
			password: "DevamOP", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "2", //- Used for indentifier in stats commands.
			host: "212.192.29.91", //- The host name or IP of the lavalink server.
			port: 25529, // The port that lavalink is listening to. This must be a number!
			password: "reedrouxv4lavalink", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "3", //- Used for indentifier in stats commands.
			host: "jirayu-lavalink.rlss.in.th", //- The host name or IP of the lavalink server.
			port: 2353, // The port that lavalink is listening to. This must be a number!
			password: "FuqW7CB2f8Kcwp36xADV5N", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "4", //- Used for indentifier in stats commands.
			host: "lavalink.devamop.in", //- The host name or IP of the lavalink server.
			port: 80, // The port that lavalink is listening to. This must be a number!
			password: "DevamOP", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "5", //- Used for indentifier in stats commands.
			host: "us1.lavalink.creavite.co", //- The host name or IP of the lavalink server.
			port: 20080, // The port that lavalink is listening to. This must be a number!
			password: "auto.creavite.co", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "6", //- Used for indentifier in stats commands.
			host: "lava-v3.ajieblogs.eu.org", //- The host name or IP of the lavalink server.
			port: 80, // The port that lavalink is listening to. This must be a number!
			password: "https://dsc.gg/ajidevserver", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "7", //- Used for indentifier in stats commands.
			host: "lava-v4.ajieblogs.eu.org", //- The host name or IP of the lavalink server.
			port: 80, // The port that lavalink is listening to. This must be a number!
			password: "https://dsc.gg/ajidevserver", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "8", //- Used for indentifier in stats commands.
			host: "lavalink1.albinhakanson.se", //- The host name or IP of the lavalink server.
			port: 1141, // The port that lavalink is listening to. This must be a number!
			password: "albinhakanson.se", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "9", //- Used for indentifier in stats commands.
			host: "lavalink.api.timelessnesses.me", //- The host name or IP of the lavalink server.
			port: 80, // The port that lavalink is listening to. This must be a number!
			password: "youshallnotpass", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "10", //- Used for indentifier in stats commands.
			host: "four.lavalink.api.timelessnesses.me", //- The host name or IP of the lavalink server.
			port: 80, // The port that lavalink is listening to. This must be a number!
			password: "youshallnotpass", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "11", //- Used for indentifier in stats commands.
			host: "va-1.riseservers.net", //- The host name or IP of the lavalink server.
			port: 2333, // The port that lavalink is listening to. This must be a number!
			password: "ilovemonkeys", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "12", //- Used for indentifier in stats commands.
			host: "ny-1.riseservers.net", //- The host name or IP of the lavalink server.
			port: 2333, // The port that lavalink is listening to. This must be a number!
			password: "monkeysrule", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "13", //- Used for indentifier in stats commands.
			host: "tx-1.riseservers.net", //- The host name or IP of the lavalink server.
			port: 2333, // The port that lavalink is listening to. This must be a number!
			password: "pizzaslice", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "14", //- Used for indentifier in stats commands.
			host: "lavalink.sillydev.co.uk", //- The host name or IP of the lavalink server.
			port: 6023, // The port that lavalink is listening to. This must be a number!
			password: "discord.gg/sillydev", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "15", //- Used for indentifier in stats commands.
			host: "45.137.70.68", //- The host name or IP of the lavalink server.
			port: 8028, // The port that lavalink is listening to. This must be a number!
			password: "hanmetaforce", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "16", //- Used for indentifier in stats commands.
			host: "lavalink.clxud.dev", //- The host name or IP of the lavalink server.
			port: 2333, // The port that lavalink is listening to. This must be a number!
			password: "youshallnotpass", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "17", //- Used for indentifier in stats commands.
			host: "lavalink.lexnet.cc", //- The host name or IP of the lavalink server.
			port: 2333, // The port that lavalink is listening to. This must be a number!
			password: "lexn3tl@val!nk", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "18", //- Used for indentifier in stats commands.
			host: "eu-lavalink.lexnet.cc", //- The host name or IP of the lavalink server.
			port: 2333, // The port that lavalink is listening to. This must be a number!
			password: "lexn3tl@val!nk", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "19", //- Used for indentifier in stats commands.
			host: "lavalink4.alfari.id", //- The host name or IP of the lavalink server.
			port: 80, // The port that lavalink is listening to. This must be a number!
			password: "catfein", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "20", //- Used for indentifier in stats commands.
			host: "lavalink3.alfari.id", //- The host name or IP of the lavalink server.
			port: 80, // The port that lavalink is listening to. This must be a number!
			password: "catfein", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "21", //- Used for indentifier in stats commands.
			host: "lavalink.ddns.net", //- The host name or IP of the lavalink server.
			port: 2433, // The port that lavalink is listening to. This must be a number!
			password: "discord.gg/FqEQtEtUc9", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "22", //- Used for indentifier in stats commands.
			host: "charmony.miruku.host", //- The host name or IP of the lavalink server.
			port: 5050, // The port that lavalink is listening to. This must be a number!
			password: "youshallnotpass", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "23", //- Used for indentifier in stats commands.
			host: "lavalink.devamop.in", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "DevamOP", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "24", //- Used for indentifier in stats commands.
			host: "lava-v3.ajieblogs.eu.org", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "https://dsc.gg/ajidevserver", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "25", //- Used for indentifier in stats commands.
			host: "lava-v4.ajieblogs.eu.org", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "https://dsc.gg/ajidevserver", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "26", //- Used for indentifier in stats commands.
			host: "lavalink.lexnet.cc", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "lexn3tl@val!nk", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "27", //- Used for indentifier in stats commands.
			host: "eu-lavalink.lexnet.cc", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "lexn3tl@val!nk", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "28", //- Used for indentifier in stats commands.
			host: "oce-lavalink.lexnet.cc", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "lexn3tl@val!nk", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "29", //- Used for indentifier in stats commands.
			host: "lavalink4.alfari.id", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "catfein", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "30", //- Used for indentifier in stats commands.
			host: "lavalink3.alfari.id", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "catfein", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "31", //- Used for indentifier in stats commands.
			host: "ll.sleepyinsomniac.eu.org", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "youshallnotpass", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
		{
			identifier: "32", //- Used for indentifier in stats commands.
			host: "buses.sleepyinsomniac.eu.org", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "youshallnotpass", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
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
