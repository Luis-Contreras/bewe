export type typesLabel = "title" | "subtitle" | "normal"


export interface labelTypes {
  type: typesLabel
  testId?: string
  children: string | JSX.Element
}