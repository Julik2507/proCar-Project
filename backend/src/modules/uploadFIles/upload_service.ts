import * as uuid from "uuid"
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url"

export async function saveImg(img:any) {
    console.log(img);
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    let fileName = uuid.v4() + ".jpg";
    img.img.mv(path.resolve(__dirname, "../../", "static", fileName));
    return fileName;
}