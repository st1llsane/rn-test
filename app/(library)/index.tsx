import React from 'react'
import { Button } from 'react-native'
import { Navigation } from '../../shared/types'
import { Box } from '@components/ui/box/Box'

interface LibraryScreenProps {
	navigation: Navigation
}

export const LibraryScreen = ({ navigation }: LibraryScreenProps) => {
	return (
		<Box>
			<Button
				title='Новости'
				onPress={() => navigation.navigate('News')}
			/>
			<Button
				title='Кошелек'
				onPress={() => navigation.navigate('Wallet')}
			/>
		</Box>
	)
}

export default LibraryScreen
