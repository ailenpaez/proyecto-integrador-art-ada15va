import {
  getAllData,
  getAllTitlesArts,
  getAllMappedArts,
  getPublicationHistoryById,
  getDateDisplayById
} from "./model/artModel";

const main = async () => {
  const params = Number(process.argv[2]);

  const data = await getAllData();
  //  console.log(data);

  const titles = await getAllTitlesArts();
  //  console.log(titles);

  const dataArtworks = await getAllMappedArts();
    //  console.log(dataArtworks);

  const anioPublicacion = await getPublicationHistoryById(params);
    console.log(anioPublicacion);

  const dispalyDate = await getDateDisplayById(params);
  console.log(dispalyDate);
};
main();
