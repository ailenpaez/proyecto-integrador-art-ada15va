import { ArtworkInfo } from "./interfaces/interfaces";
import {
  getAllData,
  getAllTitlesArts,
  getAllMappedArts,
  getPublicationHistoryById,
  getDateDisplayById,
} from "./model/artModel";

const main = async (): Promise<
  string | string[] | undefined | ArtworkInfo[] | Error | null
> => {
  try {
    const key = process.argv[2];
    const param = process.argv[3];

    switch (key) {
      case "allData":
        const data = await getAllData();
        return data;

      case "allTitles":
        const titles = await getAllTitlesArts();
        return titles;

      case "allArts":
        const arts = await getAllMappedArts();
        return arts;

      case "publicationHistory":
        const history = await getPublicationHistoryById(Number(param));
        return history;

      case "displayDate":
        const date = await getDateDisplayById(Number(param));
        return date;

      default:
        return "INVALID_COMMAND!";
    }
  } catch (error: any) {
    return error;
  }
};

//IIFE - autoinvocación.

(async () =>{
  try {
    const response = await main();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})()

