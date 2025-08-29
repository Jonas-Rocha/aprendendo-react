import { Button } from "./components/button"



export function App(){
  /*
  Eu não poderia colocar dois button no return pois existe uma regra onde
  não se pode ter mais de um elemento pai, por isso podemos resolver isso
  "encaixotando o componente dentro de uma tag div(ou um elemento fragment <>"vazio", por exemplo.), por exemplo."
  */
  return (
    <div>
      <Button name="Criar" onClick={() => alert("Criar")}/>
      <Button name="Editar"/>
      <Button name="Remover"/>
    </div>
  )
}
