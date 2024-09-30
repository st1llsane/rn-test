import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '.'
import NewsScreen from './news'
import WallerScreen from './wallet'

const Stack = createStackNavigator()

const HomeLayout = () => {
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

export default HomeLayout
