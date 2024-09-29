'use client'
import { vars } from 'nativewind'

export const config = {
	light: vars({
		'--color-foreground': '#000000',
		'--color-background': '#181C14',
		'--color-accent': '#697565',
		'--color-secondary': '#3C3D37',
	}),
	dark: vars({
		'--color-background': '#222831',
		'--color-foreground': '#EEEEEE',
		'--color-accent': '#76ABAE',
		'--color-secondary': '#31363F',
	}),
}
