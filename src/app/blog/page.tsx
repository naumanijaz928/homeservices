import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { FC } from "react";
import { PostType } from "../types/PostType";

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const Blog: FC = async () => {
  const posts: PostType[] = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
