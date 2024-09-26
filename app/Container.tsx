import React, { PropsWithChildren } from 'react'
import { SafeAreaView, View, ViewStyle } from 'react-native'
import { SafeAreaViewProps } from 'react-native-safe-area-context'

interface ContainerProps extends PropsWithChildren<SafeAreaViewProps> {
	style?: ViewStyle
}

const Container = ({ children, style, ...rest }: ContainerProps) => {
	return (
		<SafeAreaView>
			<View
				style={[
					{
						margin: 15,
					},
					style,
				]}
				{...rest}
			>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default Container
