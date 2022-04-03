import djs from "discord.js";

export default async function DiscordGuildInfo(req,res){
    await new Promise((resolve)=>{
        const client = new djs.Client({
            intents:[
                djs.Intents.FLAGS.GUILDS
            ]
        });
        client.on("ready",()=>{
            client.guilds.fetch("785339959518953482").then(guild=>{
                // res.setHeader(`Cache-Control`,`s-maxage=3600`)
                res.writeHead(200,{
                    "Cache-Control": `s-maxage=3600, stale-while-revalidate=59`
                })
                res.write(JSON.stringify({members:guild.memberCount}));
                res.end();
                client.destroy();
                resolve();
            })
        });
        client.login(process.env.DISCORD_BOT_TOKEN);
    })
}