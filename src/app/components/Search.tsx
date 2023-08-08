"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const router: AppRouterInstance = useRouter();

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    search.length ? router.push(`/${search}/`) : null;
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="input-group ws-form__container">
        <input
          type="search"
          className="form-control ws-form__input"
          id="exampleInputEmail1"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Uncomment button  */}
        {/* <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Search
        </button> */}
      </div>
    </form>
  );
};

export default Search;
