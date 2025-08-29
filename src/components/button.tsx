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

export function Button({ name, ...rest }: Props) {
  //Rest Operator

  /*
  Nesta aula, mostrei uma abordagem diferente para lidar com propriedades em um componente. 
  Em vez de passar o onClick explicitamente, utilizei o operador rest (...) para pegar todas as propriedades restantes de uma vez.
  Isso simplifica o código e garante que todas as funcionalidades do botão sejam mantidas. 
  Ao clicar em "criar", tudo funciona normalmente, pois estamos repassando todas as propriedades de forma eficiente. 
  Essa técnica é bem útil para otimizar nosso trabalho com componentes!
  */
  return <button {...rest}>{name}</button>
}

