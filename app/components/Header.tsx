import { SafeAreaView, View } from 'react-native'
import { Box } from './ui/box/Box'
import { Text } from './ui/text/Text'

interface HeaderProps {
	title: string
}

const Header = ({ title }: HeaderProps) => {
	return (
		<SafeAreaView style={{ backgroundColor: '#6200EE' }}>
			<Box className='h-10 justify-center'>
				<Text className='color-white text-xl font-medium text-center'>
					{title}
				</Text>
			</Box>
		</SafeAreaView>
	)
}

export default Header
