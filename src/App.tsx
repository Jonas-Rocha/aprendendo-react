import "./global.css"
import { Button } from "./components/button"
import styles from "./app.module.css"
import { useMessage } from "./hooks/useMessage"






export function App() {
    const message = useMessage({name: "Jonas", age: 27})

    return (

            <div className={styles.container}>
                <Button name="Adicionar" onClick={() => message.show()}/>
                <span>0</span>
                <Button name="Remover"/>
            </div>

    )
}