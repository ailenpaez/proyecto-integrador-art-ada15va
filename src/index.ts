import { getAllData } from "./model/artModel";

const main = async () => {
    const data = await getAllData();
    console.log(data);
  };
  main();