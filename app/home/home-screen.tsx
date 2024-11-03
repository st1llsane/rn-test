import React from 'react'
import { Button } from 'react-native'
import { Navigation } from '../../shared/types'
import { Box } from '@components/ui/box/box'
import { Text } from '@components/ui/text/text'

interface HomeScreenProps {
	navigation: Navigation
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
	return (
		<Box className='h-full flex items-center justify-center'>
			<Button
				title='Перейти в Профиль'
				onPress={() => navigation.navigate('profile')}
			/>
			<Button
				title='Открыть модальное окно'
				onPress={() => navigation.navigate('modal')}
			/>
		</Box>
	)
}

export default HomeScreen
