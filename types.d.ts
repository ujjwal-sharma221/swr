type Pokemon = {
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

type PokemonPage = {
  results: { name: string }[];
  next: string | null;
  prev: string | null;
};
