// ● Todas tendrán que tener un método que obtenga la data que puede llamarse:
// getAllData().
// ● getAllData() se utilizará dentro de todos los métodos.
// 1. getAllTitlesArts() - Retorna un array de strings con solo los títulos de todas las
// obras.
// 2. getAllMappedArts() - Retorna un array con todos los trabajos pero solo mostrando:
// id, title, department_title y dimensions en cada objeto.
// 3. getPublicationHistoryById(Id) - Retorna un string con la publicación histórica de la
// obra correspondiente al ID pasado por parámetro.
// 4. getDateDisplayById(id) - Retorna un string con la fecha indicada correspondiente
// al ID pasado por parámetro.

import dotenv from "dotenv";
dotenv.config();

const urlApi = process.env.BASE_URL_API;
const art = process.argv[2];
const urlParams = new URL(`${urlApi}`);

const getAllData = async () => {
  const response = fetch(urlParams);
  const data = (await response).json();
  const result = await data;
  console.log(result);
};

getAllData();
