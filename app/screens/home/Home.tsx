import React from 'react'
import { Button, View } from 'react-native'
import { Navigation } from '../../shared/types'

interface HomeScreenProps {
	navigation: Navigation
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
	return (
		<View>
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
