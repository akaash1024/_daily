import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

// export const Name = memo(({ name }) => {
//     const reffVal = useRef(0)
//     console.log(reffVal.current++)

//     return <p>THIS IS COMMING FROM COUNTER{name}</p>
// })


export const HeavyComputation = memo(({ fn }) => {
    return <p>THIS IS COMMING FROM HeavyComputation{fn}</p>
})

export function Counter() {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)



    // const heavyComputation = useMemo(() => {
    //     console.log("slow function running...");
    //     return num * num;
    // }, [num])


    const heavyComputation = useCallback(() => {
        console.log("slow function running...");
        return num * num
    }, [num])

    return (
        <>
            <h1>COUNT: {count}</h1>
            <button onClick={() => setCount(pre => pre + 1)}>+</button><br />
            <HeavyComputation fn={heavyComputation} />
            <button onClick={() => setNum(pre => pre + 1)}>NUM</button>

        </>
    )
}