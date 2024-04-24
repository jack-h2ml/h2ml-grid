/**
 * Wordpress Dependencies
 */

import {
	__experimentalHeading as Heading,
	TextControl,
	__experimentalNumberControl as NumberControl,
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

export default function({name, definition}) {

	//
	const title = __('Grid Breakpoint Settings', 'h2ml');
	const breakpointNameLabel = __('Name', 'h2ml');
	const priorityLabel = __('Priority', 'h2ml');
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
					onChange={(value) => console.log(value)}
					value={'test name'}
				/>
				<NumberControl
					label={priorityLabel}
					onChange={(value) => console.log(value)}
					value={0}
					min={0}
				/>
				<TextareaControl
					label={breakpointMediaQueryLabel}
					onChange={(value) => console.log(value)}
					value={'test media query'}
					rows={2}
				/>
			</CustomPanel>
		</SpacerWithBorder>
	)
}