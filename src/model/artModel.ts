// ● Todas tendrán que tener un método que obtenga la data que puede llamarse:
// getAllData().
// ● getAllData() se utilizará dentro de todos los métodos.

import dotenv from "dotenv";
dotenv.config();
import { Artwork } from "../interfaces/interfaces";

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

    if (data && data.data) {
      const artTitles = await data.data.map((artwork: any) => artwork.title);
      return artTitles;
    } else {
      throw new Error("INVALID_ARTWORKS");
    }
  } catch (error) {
    return error;
  }
};

// 2. getAllMappedArts() - Retorna un array con todos los trabajos pero solo mostrando:
// id, title, department_title y dimensions en cada objeto.

const getAllMappedArts = async () => {
  try {
    const data = await getAllData();

    if (data && data.data) {
      const mappedArtworks = await data.data.map((artwork: any) => ({
        id: artwork.id,
        title: artwork.title,
        department_title: artwork.department_title,
        dimensions: artwork.dimensions,
      }));
      return mappedArtworks;
    } else {
      throw new Error("INVALID_ARTWORK");
    }
  } catch (error) {
    return error;
  }
};

// 3. getPublicationHistoryById(Id) - Retorna un string con la publicación histórica de la
// obra correspondiente al ID pasado por parámetro.

const getPublicationHistoryById = async (id: number) => {
  try {
    const data = await getAllData();

    if (data && data.data && data.data.length > 0) {
      const artwork = data.data.find((art: any) => art.id === id);

      if (artwork && artwork.publication_history) {
        return `PUBLICATION HISTORY TO ID ${id} - ${artwork.publication_history}`;
      } else {
        throw new Error("PUBLICATION_HISTORY_NOT_EXIST");
      }
    }
  } catch (error) {
    return error
    }
};

// 4. getDateDisplayById(id) - Retorna un string con la fecha indicada correspondiente
// al ID pasado por parámetro.

const getDateDisplayById = async (id: number) => {
  try {
    const data = await getAllData();

    if (data && data.data) {
      const artwork = data.data.find((art: any) => art.id === id);

      if (artwork && artwork.date_display) {
        return `DATE DISPLAY TO ID ${id} - YEAR -> ${artwork.date_display}.`;
      } else {
        throw new Error("DATE_DISPLAY_NOT_EXIST");
      }
    }
  } catch (error) {
    return error
    }
};

export {
  getAllData,
  getAllTitlesArts,
  getAllMappedArts,
  getPublicationHistoryById,
  getDateDisplayById,
};
