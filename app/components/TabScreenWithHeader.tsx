import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Header from './Header'

interface TabScreenWithHeaderProps {
	name: string
	component: React.ComponentType<any>
	headerTitle: string
}

const Tab = createBottomTabNavigator()

const TabScreenWithHeader = ({
	name,
	component,
	headerTitle,
}: TabScreenWithHeaderProps) => {
	return (
		<Tab.Screen
			name={name}
			component={component}
			options={{ header: () => <Header title={headerTitle} /> }}
		/>
	)
}

export default TabScreenWithHeader
