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
        console.log(data);
        break;

      case "allTitles":
        const titles = await getAllTitlesArts();
        console.log(titles);
        break;

      case "allArts":
        const arts = await getAllMappedArts();
        console.log(arts);
        break;

      case "publicationHistory":
        const history = await getPublicationHistoryById(Number(param));
        console.log(history);
        break;

      case "displayDate":
        const date = await getDateDisplayById(Number(param));
        console.log(date);
        break;

      default:
        console.log("INVALID_COMMAND!");
    }
  } catch (error: any) {
    return error;
  }
};

main();
