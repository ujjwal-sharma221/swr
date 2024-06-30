"use client";

import Link from "next/link";
import Image from "next/image";

import usePokemon from "@/hooks/usePokemon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";


const PokemonEntry = ({ name }: { name: string }) => {
  const { pokemon, loadingPokemon } = usePokemon(name);
  if (!pokemon) return null;
  return (
    <div>
      <div>
        <div></div>
      </div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="">
            <Image
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt="Pokemon Image"
              width={200}
              height={200}
              className="mt-2"
            ></Image>
          </CardTitle>
          <CardTitle>{pokemon.name}</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex items-center">
            <Link
              className="hover:underline hover:underline-offset-4"
              href={`/${pokemon?.name}`}
            >
              More Info
            </Link>
            <ArrowRight className="size-5"></ArrowRight>{" "}
          </div>

          <div></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PokemonEntry;
