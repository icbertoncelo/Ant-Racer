export interface IAnt {
  name: string
  length: number
  color: ColorTypes
  weight: number
  status: AntStatusTypes
  probability: number
}

export type ColorTypes = "RED" | "BLACK" | "SILVER"
export type RaceStatusTypes = 'not yet run' | 'in progress' | 'all calculated'
export type AntStatusTypes = 'not yet run' | 'in progress' | 'calculated'
