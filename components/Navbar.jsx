import Link from "next/link";

export default function Navbar(props) {
  return (
    <nav>
      <div className="logo">
        <h1>My List</h1>
      </div>

      <Link href={"/"}>
        <a>Home</a>
      </Link>

      <Link href={"about"}>
        <a>About</a>
      </Link>

      <Link href={"my-listing"}>
        <a>My Listing</a>
      </Link>
    </nav>
  );
}
