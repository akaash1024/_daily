import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { User } from './User'
import { Counter } from './Counter'

// function App() {


//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log("Component Rendered")
//   },[count])


//   return (

//     <>
//       <h1>{count}</h1>

//       <button onClick={() => setCount(pre => pre + 1)}>+</button>

//     </>
//   )
// }

// function App() {
//   const [show, setShow] = useState(true)

//   return (
//     <>
//       <button onClick={() => setShow(!show)}>Toggle</button>

//       {show && <Counter />}

//     </>
//   )
// }


// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const res = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       const data = await res.json();

//       setUsers(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <>
//       <h1>Users</h1>

//       {users.map((user) => (
//         <div key={user.id}>
//           <h3>{user.name}</h3>
//           <p>{user.email}</p>
//           <p>{user.phone}</p>
//         </div>
//       ))}
//     </>
//   );
// }

// function App() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [isAsc, setIsAsc] = useState(true);

//     const fetchUsers = async () => {
//         try {
//             const res = await fetch(
//                 "https://jsonplaceholder.typicode.com/users"
//             );

//             const data = await res.json();
//             setUsers(data);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const displayedUsers = [...users]
//         .filter(user =>
//             user.name.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//         .sort((a, b) =>
//             isAsc
//                 ? a.name.localeCompare(b.name)
//                 : b.name.localeCompare(a.name)
//         );

//     if (loading) {
//         return <h1>Loading...</h1>;
//     }

//     return (
//         <>
//             <h1>User List</h1>

//             <button onClick={() => setIsAsc(prev => !prev)}>
//                 {isAsc ? "ASC" : "DESC"}
//             </button>
//             <input
//                 type="text"
//                 placeholder="Search user..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />

//             {displayedUsers.map(user => (
//                 <div key={user.id}>
//                     <h3>{user.name}</h3>
//                     <p>{user.email}</p>
//                 </div>
//             ))}
//         </>
//     );
// }


// function App() {
//     const [count, setCount] = useState(0);
//     const prevCount = useRef();

//     useEffect(() => {
//         prevCount.current = count;
//     }, [count]);

//     return (
//         <>
//             <h2>Current: {count}</h2>
//             <h2>Previous: {prevCount.current}</h2>
//             <button onClick={()=>setCount(pre=>pre+1)}>+</button>
//         </>
//     );
// }




export default App;

