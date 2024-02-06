import dotenv from "dotenv";
dotenv.config();
import { Artwork, ArtworkInfo } from "../interfaces/interfaces";

const urlApi = process.env.BASE_URL_API!;
const api = new URL(urlApi);

const getAllData = async (): Promise<any | Error> => {
  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error("API_NOT_FOUND");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    return error;
  }
};

const getAllTitlesArts = async (): Promise<string[] | undefined | Error> => {
  try {
    const data = await getAllData();

    if (data.data) {
      const artTitles: string[] = await data.data.map(
        (artwork: any) => artwork.title
      );
      return artTitles;
    } else {
      throw new Error("INVALID_ARTWORKS");
    }
  } catch (error: any) {
    return error;
  }
};

const getAllMappedArts = async (): Promise<
  ArtworkInfo[] | undefined | Error
> => {
  try {
    const data = await getAllData();

    if (data.data) {
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
      throw new Error("ARTWORKS_NOT_FOUND");
    }
  } catch (error: any) {
    return error;
  }
};

const getPublicationHistoryById = async (
  id: number
): Promise<string | undefined | null | Error> => {
  try {
    const data = await getAllData();

    if (data) {
      const artwork: Artwork | undefined = data.data.find(
        (art: any) => art.id === id
      );

      if (artwork) {
        return `PUBLICATION HISTORY TO ID ${id} - ${artwork.publication_history}`;
      } else {
        throw new Error("PUBLICATION_HISTORY_NOT_EXIST");
      }
    }
  } catch (error: any) {
    return error;
  }
};

const getDateDisplayById = async (
  id: number
): Promise<string | undefined | Error> => {
  try {
    const data = await getAllData();

    if (data) {
      const artwork: Artwork | undefined = data.data.find(
        (art: any) => art.id === id
      );

      if (artwork) {
        return `DATE DISPLAY TO ID ${id} - YEAR -> ${artwork.date_display}.`;
      } else {
        throw new Error("DATE_DISPLAY_NOT_EXIST");
      }
    }
  } catch (error: any) {
    return error;
  }
};

export {
  getAllData,
  getAllTitlesArts,
  getAllMappedArts,
  getPublicationHistoryById,
  getDateDisplayById,
};
