import { useEffect, useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect", count);

        return () => {
            console.log("Cleanup", count);
        };
    }, [count]);


    return <button onClick={() => setCount(pre => pre + 1)}>Hit</button>
}