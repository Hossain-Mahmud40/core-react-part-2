import Counter from "./Counter";
import "./App.css";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import Posts from "./Posts";
import Todos from "./Todos";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json(),
// );

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
};

function App() {
  // const friendsPromise = fetchFriends();

  const todosPromise = fetchTodos();
  const postsPromise = fetchPosts();

  let i = 1;

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  function handleClick() {
    alert("Button clicked " + i + " times");
    i++;
  }
  const handleClick3 = () => {
    alert("Button clicked " + i + " times");
    i++;
  };

  return (
    <div id="center">
      <h1>Vite + React</h1>
      {/* <Suspense fallback={<h4>Todo List is coming....</h4>}>
        <Todos todosPromise={todosPromise}></Todos>
      </Suspense> */}

      {/* <Suspense fallback={<h4>Posts are coming.........</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3 className="">Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3 className="card">Friends are coming....</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Batsman></Batsman> */}
      <Counter></Counter>
      <button onClick={handleClick} className="counter">
        Click me
      </button>
      <button onClick={handleClick3} className="counter">
        Click me 2
      </button>
      <button
        onClick={function handleClick2() {
          alert("Button clicked " + i + " times");
          i++;
        }}
        className="counter"
      >
        Click me 3
      </button>
      <button onClick={() => alert("click 4")} className="counter">
        Click me 4
      </button>
      <button onClick={() => handleAdd5(10)}>Click to Add 5</button>
    </div>
  );
}

export default App;
