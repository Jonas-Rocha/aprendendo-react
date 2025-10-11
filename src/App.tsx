import "./global.css";
import { useState, useEffect } from "react";
import { Button } from "./components/button";
import styles from "./app.module.css";
// import { useMessage } from "./hooks/useMessage"

export function App() {
  const [count /*estado*/, setCount /*função que atualiza o estado*/] =
    useState(0);

  // const message = useMessage({name: "Jonas", age: 27})
  // const { show } = useMessage()

    function handleAdd() {
        setCount((prevState) => prevState + 1)
    }


    function handleRemove() {
      if (count > 0)
      setCount((prevState) => prevState - 1)
    }



    useEffect(() => {
      if (count > 0) {
        console.log("O valor mudou para" + count)
      }
         

    }, [count]) //Dois parametros, 1 - a lógica, 2 - as dependencias. se não tem nenhuma dependencia(array vazio), significa que vai executar uma vez só(toda vez que o componente for renderizado).

  return (
    <div className={styles.container}>
      {/* /* isso não acontece com uma função comum pois o react precisa verificar a mudança(estado) no componente para poder re-renderizar o DOM virtual na tela do usuário. por isso preciso do hook "useState", ele verifica isso para o react.*/}
      <Button
        name="Adicionar"
        onClick={() => {
         handleAdd()
        }}
      />
      <span>{count}</span>
      {/* isso não acontece com uma função comum pois o react precisa verificar a mudança(estado) no componente para poder re-renderizar o DOM virtual na tela do usuário. por isso preciso do hook "useState", ele verifica isso para o react.*/}
      <Button
        name="Remover"
        onClick={() => {
          handleRemove()
        }}
      />
    </div>
  );
}
