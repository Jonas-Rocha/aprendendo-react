type Props = {
    name: string,
    age: number
}

import { useEffect } from "react"

export function useMessage({ name, age } : Props) {
    function show() {
        console.log(name, age)
    }
    //Usando o useEffect dentro de um hook customizado.
    useEffect(() => {
        console.log("useEffect do hook customizado!")
    }, [])

    return { show }
}



