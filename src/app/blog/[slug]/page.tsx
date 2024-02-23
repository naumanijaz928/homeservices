import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = ({ params }: any) => {

  console.log(params)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/6441083/pexels-photo-6441083.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Post"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/6441083/pexels-photo-6441083.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Post"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Nauman Ijaz</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>28.09.2022</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          voluptate doloremque dolorem vel officia cumque iste neque ad ipsum
          et.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
