import "./global.css";
import { useState } from "react";
import { Button } from "./components/button";
import styles from "./app.module.css";
// import { useMessage } from "./hooks/useMessage"

export function App() {
  const [count /*estado*/, setCount /*função que atualiza o estado*/] =
    useState(0);

  // const { show } = useMessage({name: "Jonas", age: 27})
  // const { show } = useMessage()

  return (
    <div className={styles.container}>
      {/* /* isso não acontece com uma função comum pois o react precisa verificar a mudança(estado) no componente para poder re-renderizar o DOM virtual na tela do usuário. por isso preciso do hook "useState", ele verifica isso para o react.*/}
      <Button
        name="Adicionar"
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <span>{count}</span>
      {/* isso não acontece com uma função comum pois o react precisa verificar a mudança(estado) no componente para poder re-renderizar o DOM virtual na tela do usuário. por isso preciso do hook "useState", ele verifica isso para o react.*/}
      <Button
        name="Remover"
        onClick={() => {
          setCount(count - 1);
        }}
      />
    </div>
  );
}
