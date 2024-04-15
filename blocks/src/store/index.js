/**
 * WordPress Imports
 */

import { createReduxStore } from '@wordpress/data';

/**
 * Store
 */

export default createReduxStore("h2ml/grid-data", {
	reducer(state = {
		isUpdating: {
			value: null
		},
	}, action) {
		switch (action.type) {
			case "SET_IS_UPDATING": {
				return {
					...state,
					isUpdating: {
						...state.selected,
						value: action.value
					}
				};
			}
		}
		return state;
	},
	actions: {
		setIsUpdating(clientID) {
			return {
				type: "SET_IS_UPDATING",
				value: clientID
			};
		}
	},
	selectors: {
		isUpdating(state) {
			return state.isUpdating.value;
		}
	}
});