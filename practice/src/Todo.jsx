import { useState } from "react"



export const Todo = () => {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || []

    const todoPayload = [payload, setPayload] = useState()





    return (
        <>
            <div>
                <input type="text" value={payload} onChange={() => setPayload(e.target.value)} />
                <button>Add</button>
            </div>


            {
                todoList.map((todo, index) => {
                    <div key={index}>
                        <p>todo</p>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                })
            }
        </>
    )
}