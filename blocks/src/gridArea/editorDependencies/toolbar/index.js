/**
 * 
 */

import {
	BlockControls
} from '@wordpress/block-editor';

import {
	ToolbarGroup, 
	ToolbarButton
} from '@wordpress/components';

import {
	__
} from '@wordpress/i18n';

import { resizeCornerNE } from '@wordpress/icons';

/**
 * Main
 */

export default function({ 
	updateGridArea,
	hideGridArea
}) {

	const resizeLabel = __('Resize Grid Area', 'h2ml');
	const hideLabel = __('Hides Grid Area for current breakpoint', 'h2ml');
	const hideText = __('Hide', 'h2ml');

	return (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon={resizeCornerNE}
					label={resizeLabel}
					onClick={updateGridArea}
				/>
				<ToolbarButton
					label={hideLabel}
					showTooltip={true}
					onClick={hideGridArea}
				>
					{hideText}
				</ToolbarButton>
			</ToolbarGroup>
		</BlockControls>
	);
}