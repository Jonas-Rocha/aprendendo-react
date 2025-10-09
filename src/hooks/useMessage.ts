type Props = {
    name: string,
    age: number
}



export function useMessage({ name, age } : Props) {
    function show() {
        console.log(name, age, "Mensagem do meu próprio Hook!")
    }

    return { show }
}
