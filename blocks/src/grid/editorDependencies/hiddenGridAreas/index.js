/**
 * Wordpress Dependencies
 */

import {
	serialize
} from '@wordpress/blocks';

import {
	useBlockProps,
	useInnerBlocksProps,
	BlockPreview
} from '@wordpress/block-editor';

import { parse } from '@wordpress/block-serialization-default-parser';

import {
	__
} from '@wordpress/i18n';

import {
	select,
	dispatch,
	useDispatch
} from '@wordpress/data';

import {
	useMemo
} from '@wordpress/element';

/**
 * 
 */

export default function HiddenGridAreas ({gridAreas, activeBreakpointId, clientId: gridClientId}) {

	const { __unstableMarkNextChangeAsNotPersistent } = useDispatch('core/block-editor');
	
	const updateGridArea = (clientId, breakpoints) => {
		__unstableMarkNextChangeAsNotPersistent();
		dispatch('core/block-editor').updateBlockAttributes(gridClientId, {
			definingGridArea: {
				gridAreaClientId: clientId,
				existingBreakpoints: breakpoints
			}
		});
	}

	const hiddenGridAreas = useMemo(() => {
		return gridAreas.filter(({attributes: {breakpoints}}) => {
			return Object.keys(breakpoints[activeBreakpointId] ?? {}).length;
		}).map((hiddenGridArea) => {
			const { clientId, attributes: {breakpoints} } = hiddenGridArea;
			console.log(breakpoints);
			return {
				clientId,
				breakpoints,
				__html: serialize(hiddenGridArea).replace(/<style>.*<\/style>/s, '')
			}
		});
	}, [gridAreas]);

	//
	const hiddenGridAreasTitle = __('Hidden Grid Areas', 'h2ml')

	//
	return ((hiddenGridAreas.length) ? (
			<div className='wp-block-h2ml-grid--hidden-grid-areas--container'>
				<p className='wp-block-h2ml-grid--hidden-grid-areas--title'>{hiddenGridAreasTitle}</p>
				<div className='wp-block-h2ml-grid--hidden-grid-areas--wrapper'>
					{hiddenGridAreas.map(({clientId, breakpoints, ...hiddenGridAreaHTML}) => {	
						const callback = () => updateGridArea(clientId, breakpoints);	
						return (<div
							className='wp-block-h2ml-grid--hidden-grid-areas--grid-area-wrapper'
							tabIndex={0}
							role="button"
							onClick={callback}
							onKeyPress={callback}
							dangerouslySetInnerHTML={hiddenGridAreaHTML}
						/>);
						
					})}
				</div>
			</div>
		) : ''
	)
}

