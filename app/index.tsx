import '../gesture-handler'
import '../global.css'
import 'react-native-reanimated'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
// import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { GluestackUIProvider } from '@ui/gluestack-ui-provider/GluestackUIProvider'
import HomeScreen from './home/home-screen'
import LibraryScreen from './library/library-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '@components/Header'
import ProfileScreen from './profile/profile-screen'

const Tab = createBottomTabNavigator()

const App = () => {
	return (
		<View className='w-full h-full'>
			<GluestackUIProvider mode='dark'>
				<SafeAreaProvider>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarActiveTintColor: 'tomato',
							tabBarInactiveTintColor: 'gray',
							tabBarIcon: ({ focused, color, size }) => {
								let iconName: keyof typeof Ionicons.glyphMap =
									'information-circle-outline'

								if (route.name === 'home') {
									iconName = focused ? 'home' : 'home-outline'
								} else if (route.name === 'library') {
									iconName = focused ? 'book' : 'book-outline'
								} else if (route.name === 'profile') {
									iconName = focused
										? 'person-circle'
										: 'person-circle-outline'
								}

								return (
									<Ionicons name={iconName} size={size} color={color} />
								)
							},
						})}
					>
						<Tab.Screen
							name='home'
							component={HomeScreen}
							options={{
								header: () => <Header title='Главная' />,
								tabBarLabel: 'Главная',
							}}
						/>
						<Tab.Screen
							name='library'
							component={LibraryScreen}
							options={{ tabBarLabel: 'Библиотека' }}
						/>
						<Tab.Screen
							name='profile'
							component={ProfileScreen}
							options={{ tabBarLabel: 'Профиль' }}
						/>
					</Tab.Navigator>
				</SafeAreaProvider>
			</GluestackUIProvider>
			{/* <SafeAreaView>
			<Text>fjslkfjlds</Text>
		</SafeAreaView> */}
		</View>
	)
}

export default App
