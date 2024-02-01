// ● Todas tendrán que tener un método que obtenga la data que puede llamarse:
// getAllData().
// ● getAllData() se utilizará dentro de todos los métodos.

import dotenv from "dotenv";
dotenv.config();

const urlApi = process.env.BASE_URL_API!;
const api = new URL(urlApi);

const getAllData = async () => {
  try {
    const response = await fetch(api);

    if (response.status === 404) {
      throw new Error("ITEM_NOT_FOUND");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

// 1. getAllTitlesArts() - Retorna un array de strings con solo los títulos de todas las
// obras.

const getAllTitlesArts = async () => {
  try {
    const data = await getAllData();

    if (data.data) {
      const artTitles = await data.data.map((artwork: any) => artwork.title);
      return artTitles;
    } else {
      throw new Error("INVALID_ARTWORKS");
    }
  } catch (error) {
    return error;
  }
};

export { getAllData, getAllTitlesArts };

// 2. getAllMappedArts() - Retorna un array con todos los trabajos pero solo mostrando:
// id, title, department_title y dimensions en cada objeto.
// 3. getPublicationHistoryById(Id) - Retorna un string con la publicación histórica de la
// obra correspondiente al ID pasado por parámetro.
// 4. getDateDisplayById(id) - Retorna un string con la fecha indicada correspondiente
// al ID pasado por parámetro.
