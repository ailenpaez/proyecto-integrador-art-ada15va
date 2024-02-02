import dotenv from "dotenv";
dotenv.config();
import { Artwork, ArtworkInfo } from "../interfaces/interfaces";

const urlApi = process.env.BASE_URL_API!;
const api = new URL(urlApi);

const getAllData = async (): Promise<any> => {
  try {
    const response = await fetch(api);

    if (response.status === 404) {
      throw new Error("ITEM_NOT_FOUND");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAllTitlesArts = async (): Promise<string[] | undefined> => {
  try {
    const data = await getAllData();

    if (data && data.data) {
      const artTitles: string[] = await data.data.map(
        (artwork: any) => artwork.title
      );
      return artTitles;
    } else {
      throw new Error("INVALID_ARTWORKS");
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllMappedArts = async (): Promise<ArtworkInfo[] | undefined> => {
  try {
    const data = await getAllData();

    if (data && data.data) {
      const mappedArtworks: ArtworkInfo[] = await data.data.map(
        (artwork: any) => ({
          id: artwork.id,
          title: artwork.title,
          department_title: artwork.department_title,
          dimensions: artwork.dimensions,
        })
      );
      return mappedArtworks;
    } else {
      throw new Error("INVALID_ARTWORK");
    }
  } catch (error) {
    console.log(error);
  }
};

const getPublicationHistoryById = async (
  id: number
): Promise<string | undefined> => {
  try {
    const data = await getAllData();

    if (data && data.data && data.data.length > 0) {
      const artwork: Artwork | undefined = data.data.find(
        (art: any) => art.id === id
      );

      if (artwork && artwork.publication_history) {
        return `PUBLICATION HISTORY TO ID ${id} - ${artwork.publication_history}`;
      } else {
        throw new Error("PUBLICATION_HISTORY_NOT_EXIST");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const getDateDisplayById = async (id: number): Promise<string | undefined> => {
  try {
    const data = await getAllData();

    if (data && data.data) {
      const artwork: Artwork | undefined = data.data.find(
        (art: any) => art.id === id
      );

      if (artwork && artwork.date_display) {
        return `DATE DISPLAY TO ID ${id} - YEAR -> ${artwork.date_display}.`;
      } else {
        throw new Error("DATE_DISPLAY_NOT_EXIST");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllData,
  getAllTitlesArts,
  getAllMappedArts,
  getPublicationHistoryById,
  getDateDisplayById,
};
