import HomeScreen from '@/(home)'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const ProfileLayout = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{ title: 'Главная' }}
			/>
		</Stack.Navigator>
	)
}

export default ProfileLayout
