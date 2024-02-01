import { getAllData, getAllTitlesArts } from "./model/artModel";

const main = async () => {
  const params = process.argv[2];

  const data = await getAllData();

  const titles = await getAllTitlesArts();
  console.log( titles);

//  console.log(data);
};
main();
