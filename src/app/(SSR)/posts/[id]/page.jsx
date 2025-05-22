export const getPostDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const id = (await params).id;

  // fetch post information
  const post = await getPostDetails(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostDetails({ params }) {
  const postId = params.id;
  const postDetails = await getPostDetails(postId);
  return (
    <div>
      <div className="card bg-white text-black  shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{postDetails.title}</h2>
          <p>{postDetails.body}</p>
        </div>
      </div>
    </div>
  );
}
