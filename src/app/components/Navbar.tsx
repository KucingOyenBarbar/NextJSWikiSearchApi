import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-0">
      <div className="container">
        <Link
          className="navbar-brand user-select-none mx-lg-0 mx-auto"
          href="/"
          aria-label="Home"
        >
          <Image
            src={"/next.svg"}
            alt="Search Wiki Logo"
            width="120"
            height="50"
            priority
          />
        </Link>
      </div>
    </nav>
  );
}
