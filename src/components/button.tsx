type Props = {
  name: string
  onClick?: () => void
}

/*
Podemos usar as props assim também:

export function Button(props: Props) {
  return <button>{props.name}</button>
}

}
*/


//Passando Métodos no Componente

/*
Aprenda a passar métodos como propriedades para componentes React. 
Veja como criar uma prop onClick opcional que recebe uma função,
 repassá-la para um botão nativo e executá-la, demonstrando a flexibilidade na comunicação entre componentes.
*/
export function Button({ name, onClick }: Props) {
  return <button onClick={onClick}>{name}</button>
}