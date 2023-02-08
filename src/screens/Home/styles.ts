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