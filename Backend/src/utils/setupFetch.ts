import { statSync, writeFile, existsSync, mkdir } from 'fs';
import path from 'path';

const YGO_API_BASE = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const BASE_DIR = path.resolve(__dirname, "../../cardData");
const IMAGE_DIR = path.resolve(__dirname, "../../cardData/Images");
const JSON_DIR = path.resolve(__dirname, "../../cardData/json");

const CheckForDirectories = () => {
    if(! existsSync(BASE_DIR)){
        console.log("cardData dir doesn't exist; generating.");
        mkdir(BASE_DIR, (err) => {
            console.log(err);
        });
    }
    if(! existsSync(IMAGE_DIR)){
        console.log("Image dir doesn't exist, generating.");
        mkdir(IMAGE_DIR, (err) => {
            console.log(err);
        });
    }
    if(! existsSync(JSON_DIR)){
        console.log("JSON dir doesn't exist, generating.");
        mkdir(JSON_DIR, (err) =>{
            console.log(err);
        })
    }
}

const CheckForJSON = async () => {
    const DATA_PATH = path.resolve(__dirname, "../../cardData/json/data.json");
    var oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate()-7);

    if((! existsSync(DATA_PATH)) || statSync(DATA_PATH).birthtime < oneWeekAgo){
        console.log("JSON is either non-existent, or out of date, generating...");
    
        const response = await fetch(YGO_API_BASE, {
            method: "GET",
            cache: "default"
        });
    
        const data = await response.json()

        writeFile(DATA_PATH, JSON.stringify(data), (err) =>{
            console.log(err);
        });

        console.log("Complete.");
    }
}

export const SetupServer = () => {
    console.log("Setting up!");
    console.log("Looking for dirs!")
    CheckForDirectories();
    console.log("Checking JSON");
    CheckForJSON();
}
