import { HomeContainer, SearchDataButton, SearchDataButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export function Home() {
  const { navigate } = useNavigation()

  return (
    <HomeContainer>
      <LottieView
        autoPlay
        source={require('../../assets/ant.json')}
      />
      <SearchDataButton>
        <SearchDataButtonText 
          onPress={() =>  navigate("racer")}
        >
          Buscar Dados
        </SearchDataButtonText>
      </SearchDataButton>
    </HomeContainer>
  );
}
