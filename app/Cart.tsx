import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { Navigation } from './shared/types'

interface HomeScreenProps {
	navigation: Navigation
}

const CartScreen = ({ navigation }: HomeScreenProps) => {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Button
				title='На главную'
				onPress={() => navigation.navigate('Home')}
			/>
		</View>
	)
}

export default CartScreen
