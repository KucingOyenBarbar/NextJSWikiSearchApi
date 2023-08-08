import type { Metadata } from "next";
import Search from "./components/Search";
import Welcome from "./components/Welcome";

export const metadata: Metadata = {
  title: "Welcome Next Wiki Search",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <>
      <div className="row justify-content-start g-2  py-5 mt-5 pt-5">
        <div className="col">
          <Welcome title=" Welcome Back, To WikiSearch👋" />
          <hr className="text-white-50" />
          <div className="row justify-content-center align-content-center g-2 py-5">
            <div className="col-12 col-lg-6">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
