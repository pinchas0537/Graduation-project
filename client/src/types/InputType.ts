export type Input = {
    typeInput?: string,
    placeholderInput?: string,
    className?:string
    setValue?: (value: string) => void,
    required?:boolean
    value?:string
    accept?:string
}