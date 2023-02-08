import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const RaceContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0 ${props => props.theme.FONT_SIZE.LG};
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.COLORS.GRAY_400};
`

export const RaceTitle = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_100};
  font-size: ${props => props.theme.FONT_SIZE.XL};
  font-weight: bold;
`

export const SearchDataButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.COLORS.GREEN_700};
  height: 48px;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  margin-top: auto;
`

export const SearchDataButtonText = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_100};
  font-size: ${props => props.theme.FONT_SIZE.LG};
`

export const RaceStatusContainer = styled.View`
  margin-bottom: 24px;
  align-items: center;
`

export const RaceStatusTitle = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.LG};
  color: ${props => props.theme.COLORS.GRAY_100};
  margin-bottom: 4px;
`
const STATUS_COLORS = {
  'not yet run': 'GRAY_100',
  'in progress': 'RED',
  'all calculated': 'GREEN_500',
} as const

interface IRaceStatus {
  color: keyof typeof STATUS_COLORS
}

export const RaceStatus = styled.Text<IRaceStatus>`
  color: ${props => props.theme.COLORS[STATUS_COLORS[props.color]]};
`
