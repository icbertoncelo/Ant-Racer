import { api } from "../services/api";
import { IAnt } from "@utils/interfaces/ants";

export class AntsApi {
  async getAnts(): Promise<IAnt[]> {
    try {
      const response = await api.get("ants")

      return response.data.ants
    } catch (error) {
      throw error
    }
  }
}