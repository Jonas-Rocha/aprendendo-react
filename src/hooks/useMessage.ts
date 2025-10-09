// type Props = {
//     name: string,
//     age: number
// }



export function useMessage(/*{ name, age } : Props*/) {
    function show(message: string) {
        console.log(message)
    }

    return { show }
}
