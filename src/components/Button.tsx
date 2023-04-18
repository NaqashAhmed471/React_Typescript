type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void
}

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event,1)}>Click</button>
  )
}
