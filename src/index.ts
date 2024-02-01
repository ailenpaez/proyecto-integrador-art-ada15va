import {
  getAllData,
  getAllTitlesArts,
  getAllMappedArts,
} from "./model/artModel";

const main = async () => {
  const params = process.argv[2];

  const data = await getAllData();

  const titles = await getAllTitlesArts();

  const dataArtworks = await getAllMappedArts();

  console.log(dataArtworks);

  //  console.log(data);
  //  console.log(titles);
};
main();
