//Agora estamos passando as propriedades nativas que ja vem com o buttom, incluindo o "onClick" através do gerenic
type Props = React.ComponentProps<"button"> & {
  name: string
}

/*
Podemos usar as props assim também:

export function Button(props: Props) {
  return <button>{props.name}</button>
}

}
*/


//Passando Métodos no Componente

export function Button({ name, onClick }: Props) {
  return <button onClick={onClick}>{name}</button>
}