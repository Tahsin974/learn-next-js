import Link from "next/link";
import style from "./posts.module.css";
export const metadata = {
  title: "Posts",
};

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  return data;
};
const Posts = async () => {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-3 gap-5 pt-20">
      {posts.map((post) => (
        <div
          key={post.id}
          className={`card bg-white text-black  ${style.pbody}`}
        >
          <div className={`card-body `}>
            <h2 className={`card-title ${style["post-title"]}`}>
              {post.title}
            </h2>
            <p>{post.body}</p>
            <div className="justify-end card-actions">
              <Link href={`/posts/${post.id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
