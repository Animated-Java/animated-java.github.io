import { patreon as patreonAPI } from "patreon";
const patreonAPIClient = patreonAPI(process.env.PATREON_CREATOR_ACCESS_TOKEN);
export default async function DiscordGuildInfo(req, res) {
  patreonAPIClient("/current_user/campaigns").then(({ store, rawJson }) => {
    console.log(rawJson);
    res.send(JSON.stringify(rawJson, null, 2));
    debugger;
  });
}
