export default function Post({ post }) {
  return (
    <div className="card">
      <h4 className="">{post.title}</h4>
      <p className="">{post.body}</p>
    </div>
  );
}
