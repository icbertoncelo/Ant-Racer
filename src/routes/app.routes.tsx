import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@screens/Home"
import { Racer } from "@screens/Racer"

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerBackTitleVisible: false,
      headerTitle: "Ant Racer",
      headerTintColor: "#E1E1E6",
      headerTitleStyle: {
        fontSize: 24
      },
      headerStyle: {
        backgroundColor: "#323238"
      }
    }}>
      <Screen name="home" component={Home} />
      <Screen name="racer" component={Racer} />
    </Navigator>
  )
}