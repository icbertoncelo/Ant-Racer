import { TouchableOpacityProps } from "react-native";
import { MainButtonContainer, MainButtonText } from "./styles";

interface IMainButtonProps extends TouchableOpacityProps {}

export function MainButton({ children, ...rest }: IMainButtonProps) {
return (
  <MainButtonContainer {...rest}>
    <MainButtonText>
      {children}
    </MainButtonText>
  </MainButtonContainer>
)
}