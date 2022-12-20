import React from 'react';
// import { existsSync, writeFile } from 'fs';

const DATA_PATH = '../../public/cardData/';
const IMAGE_PATH = DATA_PATH + 'Images/';
const YGO_API_BASE = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const FNAME_ENDPOINT = "&fname=";
const ID_ENDPOINT = "&id=";

export const CheckForCard = (id: string) =>{
    const response = fetch(
        (YGO_API_BASE + FNAME_ENDPOINT + id), {

        }
    );
};

export const GetNewBlob = async () =>{
    // if(!( existsSync(DATA_PATH + "data.json") )){
    //     const response = await fetch((YGO_API_BASE),{
    //         method: 'GET',
    //         cache: 'default'
    //     });
    

    // }
    // else{
    //     console.log("JSON already exists :)");
    // }
    console.log("chugma");
}
