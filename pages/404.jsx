import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound(props) {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>Seems that page cannot be found 😥</h2>
      <p>
        Go back to the&nbsp;
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}
