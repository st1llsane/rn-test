import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from './Home'
import SettingsScreen from './Settings'
import CartScreen from './Cart'

const Tab = createBottomTabNavigator()

const RootLayout = () => {
	return (
		<Tab.Navigator
			initialRouteName='Settings'
			screenOptions={({ route }) => ({
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
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
			})}
		>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen name='Settings' component={SettingsScreen} />
			<Tab.Screen name='Cart' component={CartScreen} />
		</Tab.Navigator>
	)
}

export default RootLayout
