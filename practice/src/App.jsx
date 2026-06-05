import { useRef } from "react";
import { Todo } from "./Todo";




// function App() {

//   const username = useRef(null)
//   const password = useRef(null)


//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log({
//       username: username.current.value,
//       password: password.current.value
//     })
//   }

//   return (
//     <>

//       <form onSubmit={handleSubmit}>
//         <input type="text" ref={username} />
//         <input type="text" ref={password} />
//         <button type="submit">Submit</button>
//       </form>

//     </>
//   )


// }


function App() {
  return <Todo />
}
export default App;