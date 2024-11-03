import { Button, ButtonIcon } from './ui/button/Button'
import { AlignJustify } from 'lucide-react-native'
import { HStack } from './ui/hstack/HStack'
import { Text } from './ui/text/text'

interface HeaderProps {
	title: string
}

const Header = ({ title }: HeaderProps) => {
	return (
		<HStack className='bg-background w-full min-h-12 gap-x-3 relative'>
			<Button>
				<ButtonIcon as={AlignJustify} className='color-accent w-8 h-8' />
			</Button>
			<Text className='color-foreground text-2xl font-medium text-center absolute inset-x-0'>
				{title}
			</Text>
		</HStack>
	)
}

export default Header
