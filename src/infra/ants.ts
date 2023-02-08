import { api } from "../services/api";
import { IAnt } from "@utils/interfaces/ants";

export class AntsApi {
  async getAnts(): Promise<IAnt[]> {
    try {
      const response = await api.get("ants")

      const ants = response.data.ants.map((ant: IAnt) => ({
        ...ant,
        status: "not yet run",
        probability: 0
      }))

      return ants
    } catch (error) {
      throw error
    }
  }
}