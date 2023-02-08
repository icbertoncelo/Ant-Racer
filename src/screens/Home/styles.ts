import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0 ${props => props.theme.FONT_SIZE.LG};
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.COLORS.GRAY_400};

`

export const HomeTitle = styled.Text`
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