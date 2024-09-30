import React, { PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'
import { SafeAreaViewProps } from 'react-native-safe-area-context'

interface ContainerProps extends PropsWithChildren<SafeAreaViewProps> {
	style?: ViewStyle
}

const Container = ({ children, style, ...rest }: ContainerProps) => {
	return (
		<View className='m-4' {...rest}>
			{children}
		</View>
	)
}

export default Container
