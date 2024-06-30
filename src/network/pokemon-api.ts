import axiosInstance from "./axios-instance";

export async function getPokemon(name: string) {
  const res = await axiosInstance.get<Pokemon>(`pokemon/${name}`);
  return res.data;
}

export async function getPokemonPage(page: number) {
  const pageSize = 12;
  const response = await axiosInstance.get<PokemonPage>(
    `/pokemon?limit=${pageSize}&offset=${pageSize * (page - 1)}`
  );
  return response.data;
}
