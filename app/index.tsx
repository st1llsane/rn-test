import '../gesture-handler'
import '../global.css'
import 'react-native-reanimated'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { GluestackUIProvider } from '../components/ui/gluestack-ui-provider/GluestackUIProvider'
// import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '@components/Header'
import LibraryScreen from './(library)'
import ProfileScreen from './(profile)'
import HomeScreen from './(home)'

const Tab = createBottomTabNavigator()

const App = () => {
	return (
		<View className='w-full h-full'>
			{/* <StatusBar style='dark' /> */}
			<GluestackUIProvider mode='dark'>
				<SafeAreaProvider>
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

								return (
									<Ionicons name={iconName} size={size} color={color} />
								)
							},
						})}
					>
						<Tab.Screen
							name='HomeScreen'
							component={HomeScreen}
							options={{
								header: () => <Header title='Главная' />,
								tabBarLabel: 'Главная',
							}}
						/>
						<Tab.Screen
							name='LibraryScreen'
							component={LibraryScreen}
							options={{ tabBarLabel: 'Настройки' }}
						/>
						<Tab.Screen
							name='ProfileScreen'
							component={ProfileScreen}
							options={{ tabBarLabel: 'Корзина' }}
						/>
					</Tab.Navigator>
				</SafeAreaProvider>
			</GluestackUIProvider>
		</View>
	)
}

export default App
