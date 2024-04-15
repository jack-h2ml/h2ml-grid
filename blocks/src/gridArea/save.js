/**
 * Wordpress Dependencies
 */

import { 
	useBlockProps, 
	useInnerBlocksProps 
} from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */



/**
 * 
 */

export default function Save({attributes}) {

	//
	const innerBlocksProps = useInnerBlocksProps.save(useBlockProps.save({style: {
		gridColumnStart: attributes.colStart,
		gridColumnEnd: attributes.colEnd,
		gridRowStart: attributes.rowStart,
		gridRowEnd: attributes.rowEnd
	}}));

	//
	return (
		<div { ...innerBlocksProps}/>
	);
}