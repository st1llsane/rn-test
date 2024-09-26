import React from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import Container from './Container'
import { StackNavigationProp } from '@react-navigation/stack'

const data = [
	{
		name: 'Alex',
		age: 20,
	},
	{
		name: 'Sasha',
		age: 22,
	},
	{
		name: 'Alice',
		age: 19,
	},
]

interface HomeScreenProps {
	navigation: StackNavigationProp<any>
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
	return (
		<Container>
			<Text>HomeScreen</Text>
			<FlatList
				data={data}
				renderItem={({ item }) => <Text>{item.name}</Text>}
			/>
			<Button
				title='Перейти в Корзину'
				onPress={() => navigation.navigate('Cart')}
			/>
		</Container>
	)
}

export default HomeScreen
