import "./global.css";
import { useState, useEffect } from "react";
import { Button } from "./components/button";
import styles from "./app.module.css";
import { useMessage } from "./hooks/useMessage"

export function App() {
  const [count /*estado*/, setCount /*função que atualiza o estado*/] =
    useState(0);

  const message = useMessage({name: "Jonas", age: 27})
  // const { show } = useMessage()



    useEffect(() => {
        console.log("Oi!") // toda vez que eu atualizar a tela, ele vai disparar o console.log("Oi!")

    }, []) //Dois parametros, 1 - a lógica, 2 - as dependencias. se não tem nenhuma dependencia(array vazio), significa que vai executar uma vez só(toda vez que o componente for renderizado).

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
