import type { Input } from "../types/InputType.ts"

export default function Input({value ,className, typeInput, placeholderInput, setValue, required }: Input) {
    return (
        <input onChange={(e) => setValue!(e.target.value)} className={className} type={typeInput} value={value} placeholder={placeholderInput} required={required} />
    )
}
