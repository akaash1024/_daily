import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [isStart, setIsStart] = useState(false);

//   useEffect(() => {
//     if (!isStart) return;

//     const timer = setInterval(() => {
//       setCount(prev => prev + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [isStart]);

//   return (
//     <>
//       <h1>{count}</h1>

//       <button onClick={() => setIsStart(true)}>
//         START
//       </button>

//       <button onClick={() => setIsStart(false)}>
//         PAUSE
//       </button>

//       <button onClick={() => setCount(0)}>
//         RESET
//       </button>
//     </>
//   );
// }


function App() {




  const [name, setName] = useState("")
  const handleFormSubmit = (e) => {
    e.preventDefault()

    console.log(name)
  }

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>Controlled Component</h1>

      <form onSubmit={handleFormSubmit}>
        <label >Name
          <input type="text" id="inputName" name="name" value={name} onChange={handleChange} />
        </label>

        <br />

        <button type="submit">Submit</button>

      </form>

    </>
  )
}

function App() {

  const inputRef = useRef();
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value);
  }

  return (
    <>
      <h1>Uncontrolled Component</h1>

      <form onSubmit={handleFormSubmit}>
        <label >Name
    <input type="text" ref={inputRef} />
        </label>

        <br />

        <button type="submit">Submit</button>

      </form>

    </>
  )
}

export default App;



