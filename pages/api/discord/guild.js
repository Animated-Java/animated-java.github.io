import djs from "discord.js";

export default async function DiscordGuildInfo(req,res){
    await new Promise((resolve)=>{
        const client = new djs.Client({
            intents:[
                djs.Intents.FLAGS.GUILDS
            ]
        });
        client.on("ready",(c)=>{
            c.guilds.fetch("785339959518953482").then(guild=>{
                res.send(JSON.stringify({members:guild.memberCount}));
                client.destroy();
                resolve();
            })
        });
        client.login(process.env.DISCORD_BOT_TOKEN);
    })
}