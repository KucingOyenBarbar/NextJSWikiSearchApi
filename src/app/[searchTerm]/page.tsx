import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import getWikiResults from "@/lib/getWikiResults";
import Search from "../components/Search";
import SearchResultItem from "./components/SearchResultItem";
import SearchResultNotFound from "./components/SearchResultNotFound";

type Props = { params: { searchTerm: string } };

export async function generateMetadata({
  params: { searchTerm },
}: Props): Promise<Metadata> {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const wiki: SearchResult = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", "");

  if (!wiki?.query?.pages) return { title: `${displayTerm} Not Found.` };

  return {
    title: `Results ${displayTerm}`,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchTerm({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const wiki: SearchResult = await wikiData;
  const results: Result[] | undefined = wiki?.query?.pages;

  return (
    <div className="row justify-content-start g-2 py-5">
      <div className="col-12">
        <div className="d-flex justify-content-start py-3">
          <Link
            className="link-secondary link-offset-2 link-underline link-underline-opacity-0"
            href="/"
            aria-label="Back To Home"
          >
            Back To Home
          </Link>
        </div>
        <div className="d-flex justify-content-start">
          <h1 className="text-start text-white text-capitalize fs-3 fst-normal lh-1">
            Results: {searchTerm}
          </h1>
        </div>

        <hr className="text-white-50" />

        <div className="row justify-content-center align-content-center g-2 py-3">
          <div className="col-12 col-md-10 col-sm-12">
            <div className="py-5 px-0 mx-0 position-relative">
              <Search />
            </div>

            {results ? (
              Object.values(results).map((result) => (
                <Suspense
                  key={result.pageid}
                  fallback={
                    <div className="text-center text-capitalize fst-normal fs-6">
                      Loading...
                    </div>
                  }
                >
                  <SearchResultItem key={result.pageid} result={result} />
                </Suspense>
              ))
            ) : (
              <SearchResultNotFound
                message={`Upps ${searchTerm} not found...`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
