import useSwr from "swr";

import { getPokemon } from "@/network/pokemon-api";
import { AxiosError } from "axios";

export default function usePokemon(name: string) {
  const { data, isLoading } = useSwr(name, async () => {
    try {
      return await getPokemon(name);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        return null;
      } else {
        throw error;
      }
    }
  });

  return {
    pokemon: data,
    loadingPokemon: isLoading,
  };
}
