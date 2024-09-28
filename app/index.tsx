import '../gesture-handler'
import 'react-native-reanimated'
import { NavigationContainer } from '@react-navigation/native'
import RootLayout from './_layout'

const App = () => {
	return (
		<NavigationContainer>
			<RootLayout />
		</NavigationContainer>
	)
}

export default App
