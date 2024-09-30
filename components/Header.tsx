import { Text } from './ui/text/Text'
import { Button, ButtonIcon } from './ui/button/Button'
import { AlignJustify } from 'lucide-react-native'
import { HStack } from './ui/hstack/HStack'

interface HeaderProps {
	title: string
}

const Header = ({ title }: HeaderProps) => {
	return (
		<HStack className='bg-background w-full gap-x-3 py-1 relative'>
			<Button>
				<ButtonIcon as={AlignJustify} className='color-accent w-7 h-7' />
			</Button>
			<Text className='color-foreground text-xl font-medium text-center absolute inset-x-0'>
				{title}
			</Text>
		</HStack>
	)
}

export default Header
