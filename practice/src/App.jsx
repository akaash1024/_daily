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


// function App() {




//   const [name, setName] = useState("")
//   const handleFormSubmit = (e) => {
//     e.preventDefault()

//     console.log(name)
//   }

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   return (
//     <>
//       <h1>Controlled Component</h1>

//       <form onSubmit={handleFormSubmit}>
//         <label >Name
//           <input type="text" id="inputName" name="name" value={name} onChange={handleChange} />
//         </label>

//         <br />

//         <button type="submit">Submit</button>

//       </form>

//     </>
//   )
// }

// function App() {

//   const inputRef = useRef();

//   const handleFormSubmit = (e) => {
//     e.preventDefault()
//     console.log(inputRef.current.value);
//   }

//   return (
//     <>
//       <h1>Uncontrolled Component</h1>

//       <form onSubmit={handleFormSubmit}>
//         <label >Name
//     <input type="text" ref={inputRef} />
//         </label>

//         <br />

//         <button type="submit">Submit</button>

//       </form>

//     </>
//   )
// }



// function App() {
//   const [count, setCount] = useState(0)
//   const [step, setStep] = useState(0)

//   const handleIncrease = () => {
//     setCount(pre => pre + step)
//   }

//   const handleDecrease = () => {
//     setCount(pre => pre - step)
//   }

//   const handleReset = () => {
//     setCount(0)
//   }

//   return (
//     <>
//       <input type="number" onChange={(e) => setStep(Number(e.target.value))} />
//       <pre><code>COUNT: {count}</code></pre>
//       <button onClick={handleIncrease} disabled={count>=100}>+</button>
//       <button onClick={handleReset}>Reset</button>
//       <button onClick={handleDecrease} disabled={count <= 0}>-</button>

//     </>
//   )
// }


// function App() {
//   const initialState = {
//     firstName: "", // ! input { name : firstName } // both must match when working with forms/ object
//     lastName: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//   }
//   const [user, setUser] = useState(initialState);


//   const handleFormSubmit = (e) => {
//     e.preventDefault()
//     // console.log({ firstName, lastName, email, password, phoneNumber })
//     console.log(user)
//   }

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;

//   //   switch (name) {
//   //     case "firstName":
//   //       setFirstName(value);
//   //       break;

//   //     case "lastName":
//   //       setLastName(value);
//   //       break;

//   //     case "email":
//   //       setEmail(value);
//   //       break;

//   //     case "password":
//   //       setPassword(value);
//   //       break;

//   //     case "phone":
//   //       setPhoneNumber(value);
//   //       break;
//   //   }
//   // };


//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setUser(preState => ({ ...preState, [name]: value }))

//   }
//   return (
//     <>
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <h1>Sign up</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatum!</p>
//         </div>

//         <div>
//           <label htmlFor="firstName">
//             <b>First Name</b>
//           </label>
//           <input type="text"
//             name="firstName"
//             placeholder="Enter First Name"
//             required
//             value={user.firstName}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="lastName">
//             <b>Last Name</b>
//           </label>

//           <input type={"text"}
//             name="lastName"
//             placeholder="Enter lastName"
//             required
//             value={user.lastName}
//             onChange={handleInputChange}
//           />
//         </div>


//         <label htmlFor="email">
//           <b>Email</b>
//         </label>
//         <input type="text"
//           placeholder="Enter Email"
//           name="email"
//           required
//           value={user.email}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="password">
//           <b>Password</b>
//         </label>
//         <input
//           type="password"
//           placeholder="Enter Password"
//           name="password"
//           required
//           value={user.password}
//           onChange={handleInputChange}
//         />

//         <label htmlFor="phone">
//           <b>Phone Number</b>
//         </label>

//         <input
//           type="number"
//           name="phoneNumber"
//           placeholder="9876543211"
//           required
//           value={user.phoneNumber}
//           onChange={handleInputChange}
//         />




//         <div>
//           <button type="submit">Submit</button>
//         </div>






//       </form>
//     </>
//   )
// }

function App() {

  const initialState = {
    email: "",
    password: ""
  }


  function handleFormSubmit() { }


  return (
    <>
      <div>

        <div>
          <h1>Login Form</h1>


          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" required placeholder="please enter your email" name = "email" onChange={(e)=> } />
            </div>
          </form>
        </div>




      </div>

    </>
  )


}







export default App;



