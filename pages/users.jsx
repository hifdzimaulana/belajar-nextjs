import styles from "../styles/Users.module.css";

export async function getStaticProps(context) {
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
        <div key={user.id}>
          <a className={styles["single"]}>
            <h3>{user.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Users;
