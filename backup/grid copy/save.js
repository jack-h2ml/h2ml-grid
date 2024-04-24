/**
 * Wordpress Dependencies
 */

import { 
	useBlockProps, 
	useInnerBlocksProps 
} from '@wordpress/block-editor';

import {
	__
} from '@wordpress/i18n';


/**
 * Internal Dependencies
 */



/**
 * 
 */

export default function Save(props) {

	//
	const {
		colCount,
		rowCount,
		colDefinitions,
		rowDefinitions
	} = props.attributes;

	//
	const style = {
		gridTemplateColumns: colDefinitions.join(' '),
		gridTemplateRows: rowDefinitions.join(' ')
	}

	//
	const blockProps = useBlockProps.save({style});
	const innerBlockProps = useInnerBlocksProps.save(blockProps);

	//
	return (
		<div {...innerBlockProps}/>
	);
}