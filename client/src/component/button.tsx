import type { Button } from "../types/ButtonType";

export default function Button({typeButton, name, classN}: Button) {
  return (
    <button className={classN} type={typeButton} >{name}</button>
  )
}
