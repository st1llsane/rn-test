import { View } from 'react-native'
import { GluestackUIProvider } from '../components/ui/gluestack-ui-provider/GluestackUIProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ReactNode } from 'react'

interface RootLayoutProps {
	children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<View className='w-full h-full'>
			<GluestackUIProvider mode='dark'>
				<SafeAreaProvider>{children}</SafeAreaProvider>
			</GluestackUIProvider>
		</View>
	)
}

export default RootLayout
