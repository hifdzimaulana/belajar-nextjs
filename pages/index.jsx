import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles["title"]}>Homepage</h1>
      <p className={styles["text"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque
        amet esse dolore molestias, eaque, rerum accusamus animi, commodi unde
        suscipit! Natus, laboriosam. Esse fugit aperiam cupiditate officia nihil
        ab odit commodi quaerat nobis sit?
      </p>
      <p className={styles["text"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt non
        voluptatibus, consectetur possimus aliquid quod asperiores perspiciatis
        est? Veritatis, quasi beatae! Fugiat itaque atque iure nesciunt officiis
        explicabo, tenetur quasi!
      </p>
      <Link href={"/other"}>
        <a className={styles["btn"]}>See other listings</a>
      </Link>
    </div>
  );
}
