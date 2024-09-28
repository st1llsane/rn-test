import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

interface HeaderProps {
	title: string
}

const Header = ({ title }: HeaderProps) => {
	return (
		<SafeAreaView style={{ backgroundColor: '#6200EE' }}>
			<View
				style={{
					height: 40,
					justifyContent: 'center',
				}}
			>
				<Text
					style={{ color: 'white', fontSize: 20, textAlign: 'center' }}
				>
					{title}
				</Text>
			</View>
		</SafeAreaView>
	)
}

export default Header
