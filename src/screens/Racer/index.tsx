import { useEffect, useState } from 'react';
import { AntsApi } from '@infra/ants';
import { RaceContainer, RaceStatus, RaceStatusContainer, RaceStatusTitle, SearchDataButton, SearchDataButtonText } from './styles';
import { AntStatusTypes, IAnt, RaceStatusTypes } from '@utils/interfaces/ants';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { Ant } from '@components/Ant';


export function Racer() {
  const [ants, setAnts] = useState<IAnt[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [raceStatus, setRaceStatus] = useState<RaceStatusTypes>('not yet run')

  async function getAnts() {
    setIsLoading(true)
    
    const antsApi = new AntsApi() 
    const antsData = await antsApi.getAnts()

    setAnts(antsData)
    setIsLoading(false)
  }

  function generateAntWinLikelihoodCalculator() {
    const delay = 7000 + Math.random() * 7000;
    const likelihoodOfAntWinning = Math.random();
      
    return (callback: any) => {
      setTimeout(() => { 
        callback(likelihoodOfAntWinning);
      }, delay);
    };
  }

  function handleStartRace() {
    setRaceStatus("in progress")

    const newAnts = ants.map(ant => ({
      ...ant,
      status: "in progress" as AntStatusTypes
    }))

    setAnts(newAnts)

    newAnts.forEach((ant) => {
      const calculator = generateAntWinLikelihoodCalculator()
      calculator((likelihoodOfAntWinning: any) => {  
          
        setAnts(prevAnts => {
          const auxAnts = [...prevAnts]
          const indexToChange = auxAnts.findIndex(prev => prev.name === ant.name)

          auxAnts[indexToChange] = {
            ...ant,
            status: "calculated" as AntStatusTypes,
            probability: likelihoodOfAntWinning
          }

          auxAnts.sort((a,b) => b.probability - a.probability)

          return auxAnts
        })
      })
    })
  }

  useEffect(() => {
    setRaceStatus("not yet run")
    getAnts()
  }, [])

  useEffect(() => {
    if(!!ants.length && ants.every(ant => ant.status === "calculated")) {
      setRaceStatus("all calculated")
    }
  }, [ants])


  return (
    <RaceContainer>
      <RaceStatusContainer>
        <RaceStatusTitle>Race Status</RaceStatusTitle>
        <RaceStatus color={raceStatus}>{raceStatus}</RaceStatus>
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
      <SearchDataButton 
          onPress={handleStartRace}
        >
        <SearchDataButtonText>
          Start
        </SearchDataButtonText>
      </SearchDataButton>
    </RaceContainer>
  );
}
