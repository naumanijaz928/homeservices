import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import { FC } from "react";
import { PostType } from "@/app/types/PostType";
const PostCard = ({post} : PostType) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/6441083/pexels-photo-6441083.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Post"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>21.02.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href="/blog/post" className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
