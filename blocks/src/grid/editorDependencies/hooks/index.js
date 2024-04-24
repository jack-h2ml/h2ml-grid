/**
 * Wordpress Dependencies
 */

import {
	useEffect,
	useRef
} from '@wordpress/element';

import {
	dispatch,
} from '@wordpress/data';

/**
 * Stateful Update
 */

export function useStatefulEffect(callback, dependencies = []) {
	const firstUpdate = useRef(true);
	useEffect(() => {
		if(firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		callback();
	}, dependencies);
}

/**
 * Updates all Grid-Areas when a breakpoint is created, edited, or deleted.
 */

export function useUpdatedBreakpoints(gridAreas, breakpoints) {
	useStatefulEffect(() => {
		gridAreas.forEach(({clientId: gridAreaClientId, attributes: {breakpoints: existingBreakpoints}}) => {
			dispatch('core/block-editor').updateBlockAttributes(gridAreaClientId, {
				breakpoints: Object.fromEntries(breakpoints.map(({id: breakpointId, mediaQuery}) => [breakpointId, {
					...existingBreakpoints[breakpointId],
					mediaQuery
				}]))
			});
		});
	}, [breakpoints]);
}

