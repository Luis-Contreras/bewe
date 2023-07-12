export type variantTypes = "outlined" | "contained"


export interface buttonTypes
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variantTypes;
  testId?: string
}