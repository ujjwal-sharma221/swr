"use client";

import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import usePokemon from "@/hooks/usePokemon";

const Page = () => {
  const params = useParams<{ pokemon: string }>();
  const pokemonName = params.pokemon;

  const { pokemon, loadingPokemon } = usePokemon(pokemonName);

  return (
    <>
      <div>
        <div>
          <Button className="text-xl" variant="link" asChild>
            <Link href="/" className="">
              <ArrowLeft className="size-4 mr-2" />
              Pokedex
            </Link>
          </Button>
          {loadingPokemon && <Loader></Loader>}
        </div>
        {!pokemon && (
          <div className="flex items-center justify-center h-screen">
            {" "}
            Pokemon with this name does not exit!
          </div>
        )}
        {pokemon && (
          <div className="flex justify-center flex-col items-center mt-12 text-4xl capitalize">
            <h1 className="font-bold flex justify-center">{pokemon.name}</h1>
            <div className="flex items-center gap-4 md:flex-row flex-col">
              <Image
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt="Pokemon Image"
                width={400}
                height={400}
                className="mt-2"
              ></Image>

              <Card>
                <CardHeader>
                  <CardTitle>Pokemon Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <Separator></Separator>
                  <div className="text-lg text-muted-foreground mt-2">
                    <span className="font-semibold text-[#030637]">Types:</span>{" "}
                    {pokemon.types.map((type) => type.type.name).join(", ")}{" "}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {" "}
                    <span className="font-semibold  text-[#3C0753]">
                      Height:{" "}
                    </span>{" "}
                    {pokemon.height * 10} cm
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {" "}
                    <span className="font-semibold text-[#720455]">
                      Weight:
                    </span>{" "}
                    {pokemon.weight / 10} kg
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
