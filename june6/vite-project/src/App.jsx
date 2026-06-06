import { useRef, useState } from "react";
import "./App.css";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");
//   const [editId, setEditId] = useState(null);

//   const addTodo = () => {
//     if (!input.trim()) return;

//     if (editId) {
//       // UPDATE MODE
//       setTodos((prev) =>
//         prev.map((todo) =>
//           todo.id === editId ? { ...todo, text: input } : todo
//         )
//       );
//       setEditId(null);
//     } else {
//       // ADD MODE
//       const newTodo = {
//         id: Date.now(),
//         text: input,
//         isCompleted: false,
//       };

//       setTodos((prev) => [...prev, newTodo]);
//     }

//     setInput("");
//   };

//   const toggleTodo = (id) => {
//     setTodos((prev) =>
//       prev.map((todo) =>
//         todo.id === id
//           ? { ...todo, isCompleted: !todo.isCompleted }
//           : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   const handleEdit = (todo) => {
//     setInput(todo.text);
//     setEditId(todo.id);
//   };

//   return (
//     <>
//       <h1>Todo App</h1>

//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter todo"
//       />

//       <button onClick={addTodo}>
//         {editId ? "Update" : "Add"}
//       </button>

//       <div>
//         {todos.map((todo) => (
//           <div key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.isCompleted}
//               onChange={() => toggleTodo(todo.id)}
//             />

//             <span
//               onClick={() => handleEdit(todo)}
//               style={{
//                 textDecoration: todo.isCompleted ? "line-through" : "none",
//                 cursor: "pointer",
//               }}
//             >
//               {todo.text}
//             </span>

//             <button onClick={() => deleteTodo(todo.id)}>❌</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

function App() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  return <button onClick={handleClick}>Click</button>;
}

export default App;