export interface IAnt {
  name: string
  length: number
  color: string
  weight: number
  status: AntStatusTypes
  probability: number
}

export type RaceStatusTypes = 'not yet run' | 'in progress' | 'all calculated'
export type AntStatusTypes = 'not yet run' | 'in progress' | 'calculated'
