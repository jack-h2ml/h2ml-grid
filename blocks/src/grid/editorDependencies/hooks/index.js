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

