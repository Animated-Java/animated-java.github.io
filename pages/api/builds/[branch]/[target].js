import { app } from "../../../../util/firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
export default async function apiEndpoint(req, res) {
  if (req.query.target !== "animated_java.js") {
    return res.send("Sorry, Nothing to see here");
  }
  const storage = getStorage(app);
  const location = ref(storage, `builds/${req.query.branch}/animated_java.js`);
  const url = await getDownloadURL(location);
  res.redirect(url);
}
