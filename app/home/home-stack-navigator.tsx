import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './home-screen'
import { ModalScreen } from '..'

const Stack = createStackNavigator()

const HomeStackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='modal'>
			<Stack.Screen
				name='home'
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='modal'
				component={ModalScreen}
				options={{
					headerShown: false,
					presentation: 'modal',
					gestureEnabled: true,
					cardStyle: { marginTop: 40 },
				}}
			/>
		</Stack.Navigator>
	)
}

export default HomeStackNavigator
