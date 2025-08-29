type Props = {
  name: string
}

/*
Podemos usar as props assim também:

export function Button({ name }: Props) {
  return <button>{name}</button>
}
*/

export function Button(props: Props) {
  return <button>{props.name}</button>
}