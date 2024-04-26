/**
 * 
 */

export default function(arr, property, val) {
	const breakpointIndex = arr.findIndex((breakpoint) => breakpoint[property] === val);
	return [breakpointIndex, arr[breakpointIndex]];
}