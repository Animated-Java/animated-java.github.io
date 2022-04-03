import { app } from "../../../util/firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
export default async function apiEndpoint(req, res) {
  const storage = getStorage(app);
  const location = ref(storage, `builds/main/animated_java.js`);
  const url = await getDownloadURL(location);
  res.redirect(url);
}
