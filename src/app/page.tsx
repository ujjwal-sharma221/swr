"use client";

import PokemonEntry from "@/components/pokemon-entry";
import { SearchForm } from "@/components/search-form";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { getPokemonPage } from "@/network/pokemon-api";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page")?.toString() || "1";
  const pageNo = parseInt(page);

  const { data, isLoading } = useSWR(["getPokemonPage", page], () =>
    getPokemonPage(pageNo)
  );

  if (isLoading) return <Loader></Loader>;
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div>
          <SearchForm></SearchForm>
        </div>
        <div className="flex gap-4">
          <Button
            disabled={pageNo === 1}
            variant="outline"
            onClick={() => router.push(`/?page=${pageNo - 1}`)}
          >
            Prev
          </Button>
          <Button
            onClick={() => router.push(`/?page=${pageNo + 1}`)}
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>

      <div className="m-20 grid gap-4 md:grid-cols-3 sm:grid-cols-2">
        {data?.results.map((entry) => (
          <div key={entry.name}>
            <PokemonEntry name={entry.name}></PokemonEntry>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
