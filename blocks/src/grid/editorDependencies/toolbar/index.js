/**
 * Wordpress Dependencies
 */

import { 
	BlockControls
} from '@wordpress/block-editor';

import {
    ToolbarButton,
    ToolbarGroup
} from '@wordpress/components';

import {
	sprintf,
	__
} from '@wordpress/i18n';

import { 
	plus,
	trash,
	chevronLeft,
	chevronRight,
	blockDefault
} from '@wordpress/icons';

/**
 * Main
 */

export default function({ 
	breakpoints, 
	activeBreakpointId, 
	activeBreakpointName, 
	setActiveBreakpointId, 
	createBreakpoint,
	reorderBreakpoint, 
	deleteBreakpoint,
}) {

	const deleteLabel = sprintf(__('Delete "%s"', 'h2ml'), activeBreakpointName);
	const decreasePriorityLabel = __('Decrease Priority', 'h2ml');
	const increasePriorityLabel = __('Increase Priority', 'h2ml');

	return (<BlockControls>
		<ToolbarGroup>
			<ToolbarButton
				icon={plus}
				label={__('Add Breakpoint', 'h2ml')}
				onClick={createBreakpoint}
				showTooltip={true}
			/>
			{breakpoints.map((breakpoint, index) => {
				const isCurrentBreakpoint = activeBreakpointId === breakpoint.id;
				return (
					<div className={`wp-block-h2ml-grid--toolbar--active-breakpoint-group ${isCurrentBreakpoint ? 'active' : ''}`}>
						{(isCurrentBreakpoint) && (<ToolbarButton
							icon={chevronLeft}
							onClick={() => reorderBreakpoint(-1)}
							disabled={index === 0}
							label={decreasePriorityLabel}
						/>)}
						<ToolbarButton
							icon={blockDefault}
							label={isCurrentBreakpoint 
								? sprintf('%s "%s"', __('Currently Editing', 'h2ml'), breakpoint.name)
								: sprintf('%s "%s"', __('Edit', 'h2ml'), breakpoint.name)
							}
							onClick={() => !isCurrentBreakpoint && setActiveBreakpointId(breakpoint.id)}
							showTooltip={true}
						/>
						{(isCurrentBreakpoint) && (<ToolbarButton
							icon={chevronRight}
							onClick={() => reorderBreakpoint(1)}
							disabled={index === breakpoints.length - 1}
							label={increasePriorityLabel}
						/>)}
					</div>
				)}
			)}
			{(breakpoints.length > 1) && (<ToolbarButton
				label={deleteLabel}
				onClick={deleteBreakpoint}
				showTooltip={true}
				icon={trash}
			/>)}
		</ToolbarGroup>
	</BlockControls>);
}