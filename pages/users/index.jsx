import styles from "../../styles/Users.module.css";
import Link from "next/link";

export async function getServerSideProps(ctx) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { data },
  };
}

function Users({ data }) {
  return (
    <div>
      <h1>All users</h1>
      {data.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <a className={styles["single"]}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Users;
