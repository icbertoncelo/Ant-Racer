import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { MainButton } from '@components/MainButton';

import { HomeContainer } from './styles';

export function Home() {
  const { navigate } = useNavigation()

  return (
    <HomeContainer>
      <LottieView
        autoPlay
        source={require('../../assets/ant.json')}
      />
      <MainButton onPress={() =>  navigate("racer")}>
        Buscar Dados
      </MainButton>
    </HomeContainer>
  );
}
