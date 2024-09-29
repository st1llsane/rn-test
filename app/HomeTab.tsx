import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Navigation } from './shared/types'
import HomeScreen from './screens/Home/Home'
import NewsScreen from './screens/Home/News'
import WallerScreen from './screens/Home/Wallet'

const data = [
	{
		name: 'Alex',
		age: 20,
	},
	{
		name: 'Sasha',
		age: 22,
	},
	{
		name: 'Alice',
		age: 19,
	},
]

interface HomeTabProps {
	navigation: Navigation
}

const Stack = createStackNavigator()

const HomeTab = ({ navigation }: HomeTabProps) => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{ title: 'Главная' }}
			/>
			<Stack.Screen
				name='News'
				component={NewsScreen}
				options={{ title: 'Новости' }}
			/>
			<Stack.Screen
				name='Wallet'
				component={WallerScreen}
				options={{ title: 'Кошелек' }}
			/>
		</Stack.Navigator>
	)
}

export default HomeTab
