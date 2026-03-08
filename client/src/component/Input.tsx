import type { Input } from "../types/InputType.ts"

export default function Input({ typeInput, placeholderInput ,setValue}: Input) {
    return (
        <input onChange={(e) => setValue!(e.target.value)} className="input" type={typeInput} placeholder={placeholderInput} required />
    )
}
