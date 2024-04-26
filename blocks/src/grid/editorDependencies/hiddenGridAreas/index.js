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
 * Internal Imports
 */

import findByProperty from '../../dependencies/findByProperty';

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
			const [_, breakpoint] = findByProperty(breakpoints, 'id', activeBreakpointId);
			return Object.keys(breakpoint).length <= 2;
		}).map((hiddenGridArea) => {
			const { clientId, attributes: {breakpoints} } = hiddenGridArea;
			return {
				clientId,
				breakpoints,
				__html: serialize(hiddenGridArea).replace(/<style>.*<\/style>/s, '')
			}
		});
	}, [gridAreas, activeBreakpointId]);

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

