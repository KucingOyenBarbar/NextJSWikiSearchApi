import Link from "next/link";
import Image from "next/image";

type Props = { result: Result };

export default function SearchResultItem({ result }: Props) {
  const ResultTitle = () => (
    <div className="px-0 mx-0 d-block position-relative pt-3">
      <Link
        href={`https://en.wikipedia.org/?curid=${result.pageid}`}
        target="_blank"
        rel="noopener"
        aria-label="Read More Wikipedia"
        className="link-offset-2 link-underline link-underline-opacity-0 card-title text-start text-white text-capitalize fst-normal fs-5 "
      >
        {result?.title}
      </Link>
    </div>
  );

  const ResultThumbnail = () => (
    <div>
      <Image
        src={result.thumbnail?.source ? result.thumbnail?.source : ""}
        width={result?.thumbnail?.width}
        height={result?.thumbnail?.height}
        alt={result?.title}
        priority
      />
    </div>
  );

  const ResultTextContent = () => (
    <div className="py-3 px-0 mx-0 d-block position-relative">
      <p className="text-start text-white-50 fst-normal fs-6">
        {result?.extract}
      </p>
    </div>
  );

  const SearchResultItemList = () => {
    return (
      <div className="card rounded mb-3">
        <div className="card-body">
          {result?.thumbnail?.source ? (
            <>
              <ResultThumbnail />
              <ResultTitle />
            </>
          ) : (
            <ResultTitle />
          )}
          <ResultTextContent />

          <div className="py-3 px-0 mx-0 d-block position-relative">
            <Link
              className="stretched-link link-secondary link-offset-2 link-underline link-underline-opacity-0 "
              href={`https://en.wikipedia.org/?curid=${result.pageid}`}
              target="_blank"
              rel="noopener"
              aria-label="Read More Wikipedia"
            >
              <span className="fst-italic">Read More Wikipedia</span>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return <SearchResultItemList />;
}
