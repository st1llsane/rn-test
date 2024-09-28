import React from 'react'
import { Button, Text, View } from 'react-native'
import { Navigation } from '../../shared/types'

interface HomeScreenProps {
	navigation: Navigation
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Button
				title='Новости'
				onPress={() => navigation.navigate('News')}
			/>
			<Button
				title='Кошелек'
				onPress={() => navigation.navigate('Wallet')}
			/>
		</View>
	)
}

export default HomeScreen
