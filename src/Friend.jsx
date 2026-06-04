export default function Friend({ friend }) {
  const { name, email, username, phone, company } = friend;
  return (
    <div className="card">
      <h4>Name: {name} </h4>
      <h4>Email: {email} </h4>
      <h4>Usernam: {username} </h4>
      <p>Phone: {phone}</p>
      <p>Company Name: {company.name}</p>
    </div>
  );
}
