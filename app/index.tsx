import '../gesture-handler'
import '../global.css'
import 'react-native-reanimated'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { GluestackUIProvider } from '@ui/gluestack-ui-provider/GluestackUIProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native' // Import NavigationContainer
import Header from '@components/header'
import LibraryScreen from './library/library-screen'
import ProfileScreen from './profile/profile-screen'
import HomeScreen from './home/home-screen'
import { createStackNavigator } from '@react-navigation/stack'
import { Box } from '@components/ui/box/box'
import { Text, Button } from 'react-native'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
				tabBarStyle: { height: 56 },
				tabBarIcon: ({ focused, color, size }) => {
					let iconName: keyof typeof Ionicons.glyphMap =
						'information-circle-outline'

					if (route.name === 'home') {
						iconName = focused ? 'home' : 'home-outline'
					} else if (route.name === 'library') {
						iconName = focused ? 'book' : 'book-outline'
					} else if (route.name === 'profile') {
						iconName = focused ? 'person-circle' : 'person-circle-outline'
					}

					return <Ionicons name={iconName} size={size} color={color} />
				},
			})}
		>
			<Tab.Screen
				name='home'
				component={HomeScreen}
				options={{
					header: () => <Header title='Главная' />,
				}}
			/>
			<Tab.Screen
				name='library'
				component={LibraryScreen}
				options={{
					header: () => <Header title='Библиотека' />,
				}}
			/>
			<Tab.Screen
				name='profile'
				component={ProfileScreen}
				options={{
					header: () => <Header title='Профиль' />,
				}}
			/>
		</Tab.Navigator>
	)
}

const App = () => {
	return (
		<GluestackUIProvider mode='dark'>
			<SafeAreaProvider>
				<Stack.Navigator>
					<Stack.Screen
						name='nav-tabs'
						component={TabNavigator}
						options={{ headerShown: false }}
					/>
					{/* <Stack.Screen
					// 	name='modal'
					// 	component={ModalScreen}
					// 	options={{
					// 		headerShown: false,
					// 		presentation: 'modal',
					// 		gestureEnabled: true,
					// 		cardStyle: { marginTop: 40 },
					// 	}}
					// /> */}
				</Stack.Navigator>
			</SafeAreaProvider>
		</GluestackUIProvider>
	)
}

export default App

export function ModalScreen({ navigation }: any) {
	return (
		<Box className='h-full flex items-center justify-center bg-white'>
			<Text style={{ fontSize: 30 }}>Это модальное окно!</Text>
			<Button onPress={() => navigation.goBack()} title='Закрыть' />
			<Button
				onPress={() => navigation.navigate('home')}
				title='Закрыть'
			/>
		</Box>
	)
}
