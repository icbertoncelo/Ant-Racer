import { useEffect, useState } from 'react';
import { AntsApi } from '@infra/ants';
import { RaceContainer, RaceStatus, RaceStatusContainer, RaceStatusTitle, SearchDataButton, SearchDataButtonText } from './styles';
import { IAnt } from '@utils/interfaces/ants';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { Ant } from '@components/Ant';

export function Racer() {
  const [ants, setAnts] = useState<IAnt[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function getAnts() {
    const antsApi = new AntsApi()

    setIsLoading(true)
    const antsData = await antsApi.getAnts()

    setAnts(antsData)
    setIsLoading(false)
  }

  useEffect(() => {
    getAnts()
  }, [])

  return (
    <RaceContainer>
      <RaceStatusContainer>
        <RaceStatusTitle>Race Status</RaceStatusTitle>
        <RaceStatus>not yet run</RaceStatus>
      </RaceStatusContainer>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={ants}
          keyExtractor={item => item.name}
          renderItem={({item}) => <Ant data={item}/>}
          showsVerticalScrollIndicator={false}
          style={{
            width: "100%"
          }}
          ListEmptyComponent={() => <Text>No Ants</Text>}
        />
      )}
      <SearchDataButton>
        <SearchDataButtonText>Start</SearchDataButtonText>
      </SearchDataButton>
    </RaceContainer>
  );
}
