import styled from "styled-components/native";

export const AntContainer = styled.View`
  margin-top: 8px;
  background: ${props => props.theme.COLORS.GRAY_100};
  border-radius: 4px;
  padding: 4px;
`

export const AntName = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.MD};
`

export const AntData = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const AntSubtitle = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.SM};
`
