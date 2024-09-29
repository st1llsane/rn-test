import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import SettingsScreen from './Settings'
import CartScreen from './Cart'
import HomeTab from './HomeTab'
import Header from './components/Header'
import '../global.css'

const Tab = createBottomTabNavigator()

const RootLayout = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
				tabBarIcon: ({ focused, color, size }) => {
					let iconName: keyof typeof Ionicons.glyphMap =
						'information-circle-outline'

					if (route.name === 'Home') {
						iconName = focused
							? 'information-circle'
							: 'information-circle-outline'
					} else if (route.name === 'Settings') {
						iconName = focused ? 'list' : 'list-outline'
					}

					return <Ionicons name={iconName} size={size} color={color} />
				},
			})}
		>
			<Tab.Screen
				name='HomeTab'
				component={HomeTab}
				options={{
					header: () => <Header title='Главная' />,
					tabBarLabel: 'Главная',
				}}
			/>
			<Tab.Screen
				name='Settings'
				component={SettingsScreen}
				options={{ tabBarLabel: 'Настройки' }}
			/>
			<Tab.Screen
				name='Cart'
				component={CartScreen}
				options={{ tabBarLabel: 'Корзина' }}
			/>
		</Tab.Navigator>
	)
}

export default RootLayout
