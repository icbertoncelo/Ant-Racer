import styled from "styled-components/native"

export const MainButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.COLORS.GREEN_700};
  height: 48px;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  margin-top: auto;
`

export const MainButtonText = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_100};
  font-size: ${props => props.theme.FONT_SIZE.LG};
`