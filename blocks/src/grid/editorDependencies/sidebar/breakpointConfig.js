/**
 * Wordpress Dependencies
 */

import {
	__experimentalHeading as Heading,
	TextControl,
	TextareaControl,
} from '@wordpress/components';

import {
	__,
	_x,
	_nx,
	sprintf
} from '@wordpress/i18n';

/**
 * Internal Dependencies
 */

import { CustomPanel, SpacerWithBorder } from './styledComponents'

/**
 * Main
 */

export default function({name, nameSetter, mediaQuery, mediaQuerySetter}) {

	//
	const title = __('Grid Breakpoint Settings', 'h2ml');
	const breakpointNameLabel = __('Name', 'h2ml');
	const breakpointMediaQueryLabel = __('Media Query', 'h2ml');

	return (
		<SpacerWithBorder 
			padding={4}
		>
			<CustomPanel
				spacing={4}
			>
				<Heading>{title}</Heading>
				<TextControl
					label={breakpointNameLabel}
					onChange={nameSetter}
					value={name}
				/>
				<TextareaControl
					label={breakpointMediaQueryLabel}
					onChange={mediaQuerySetter}
					value={mediaQuery}
					rows={2}
				/>
			</CustomPanel>
		</SpacerWithBorder>
	)
}