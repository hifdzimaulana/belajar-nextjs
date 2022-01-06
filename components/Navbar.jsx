import Link from "next/link";
import Image from "next/image";

export default function Navbar(props) {
  return (
    <nav>
      <div className="logo">
        <Image src={"/next-js-logo.png"} width={77} height={77} />
      </div>

      <Link href={"/"}>
        <a>Home</a>
      </Link>

      <Link href={"/about"}>
        <a>About</a>
      </Link>

      <Link href={"/users"}>
        <a>Users</a>
      </Link>
    </nav>
  );
}
