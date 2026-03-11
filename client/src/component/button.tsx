import type { Button } from "../types/ButtonType";

export default function Button({onClick,typeButton, name, classN}: Button) {
  return (
    <button onClick={onClick} className={classN} type={typeButton} >{name}</button>
  )
}
