import React from 'react'
import { Button, Text, View } from 'react-native'
import { Navigation } from '../../shared/types'

interface NewsScreenProps {
	navigation: Navigation
}

export const NewsScreen = ({ navigation }: NewsScreenProps) => {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Button
				title='В Корзину'
				onPress={() => navigation.navigate('Cart')}
			/>
		</View>
	)
}

export default NewsScreen
