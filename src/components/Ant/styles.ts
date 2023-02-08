import styled from "styled-components/native";

export const AntContainer = styled.View`
  margin-top: 8px;
  background: ${props => props.theme.COLORS.GRAY_100};
  border-radius: 4px;
  padding: 4px;
`

export const AntHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const ANT_COLORS = {
  'BLACK': 'BLACK',
  'RED': 'RED_DARK',
  'SILVER': 'GRAY_300',
} as const

interface IAntColor {
  color: keyof typeof ANT_COLORS
}

export const AntColor = styled.View<IAntColor>`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background: ${props => props.theme.COLORS[ANT_COLORS[props.color]]};
`

export const AntName = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.MD};
`

export const AntData = styled.View`
  margin-top: 2px;
  flex-direction: row;
  justify-content: space-between;
`
export const AntSubtitle = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.SM};
`

const STATUS_COLORS = {
  'not yet run': 'GRAY_700',
  'in progress': 'RED',
  'calculated': 'GREEN_500',
} as const

interface IAntStatus {
  color: keyof typeof STATUS_COLORS
}

export const AntStatus = styled.Text<IAntStatus>`
  color: ${props => props.theme.COLORS[STATUS_COLORS[props.color]]};
  margin-top: 8px;
`