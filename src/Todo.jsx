export default function Todo({ todo }) {
  const { title, completed, userId } = todo;

  return (
    <div className="card">
      <h4 className="">Title: {title}</h4>
      <p>UserId: {userId} </p>
      <p>Status: {completed ? "completed" : "Not completed"} </p>
    </div>
  );
}
