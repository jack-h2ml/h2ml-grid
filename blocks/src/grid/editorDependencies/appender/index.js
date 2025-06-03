/**
 * Wordpress Dependencies
 */

import {
	useState,
	useEffect
} from '@wordpress/element';

import {
	__
} from '@wordpress/i18n';

import {
	Button
} from '@wordpress/components';

import {
	plus
} from '@wordpress/icons';

/**
 * Internal Dependencies
 */

import GuideArea from './guideArea.js';
import GuideAppenderPreview from './definingGridAreaPreview.js';
import GuideAppenderToolbar from './guideAppenderToolbar.js';

/**
 * Main
 */

export default function({colCount, rowCount, definingGridArea,  start, confirm, cancel}) {

	//
	const [dragging, setDragging] = useState(null);
	
	//
	const [appendingStart, setAppendingStart] = useState(null);
	const [appendingCurrent, setAppendingCurrent] = useState(null);

	//
	const canAppend = !dragging && (appendingStart && appendingCurrent);

	//
	const columnStart = (appendingStart && appendingCurrent) && Math.min(appendingStart[0], appendingCurrent[0]);
	const columnEnd = (appendingStart && appendingCurrent) && Math.max(appendingStart[0], appendingCurrent[0]) + 1;
	const rowStart = (appendingStart && appendingCurrent) && Math.min(appendingStart[1], appendingCurrent[1]);
	const rowEnd = (appendingStart && appendingCurrent) && Math.max(appendingStart[1], appendingCurrent[1]) + 1;

	//
	const helpText = definingGridArea && definingGridArea.gridAreaClientId 
		? __('Click and drag above to update this grid area.', 'h2ml')
		: __('Click and drag above to define a new grid area.', 'h2ml');

	const addNewText = __('Add new Grid Area', 'h2ml');
	const cancelText = __('Cancel', 'h2ml');
	const confirmText = __('Confirm', 'h2ml');
	const unassignedGridAreasTitle = __('Unassigned Grid Areas', 'h2ml');

	//
	useEffect(() => {
		if(definingGridArea) {
			setAppendingStart(null);
			setAppendingCurrent(null);
		}
	}, [definingGridArea]);

	//
	return (<>
		{Array.from({length: (colCount * rowCount)}, (_, i) => {
			//
			const colRefrence = (i % colCount) + 1;
			const rowRefrence = Math.floor((i / colCount) + 1);		

			//
			return (
				<GuideArea
					disabled={(!definingGridArea)}
					colRefrence={colRefrence}
					rowRefrence={rowRefrence}
					onMouseDown={(e) => {
						e.preventDefault();
						e.stopPropagation();
						setDragging(true);
						setAppendingStart([colRefrence, rowRefrence]);
						setAppendingCurrent([colRefrence, rowRefrence]);
					}}
					onMouseEnter={() => {
						if(dragging) setAppendingCurrent([colRefrence, rowRefrence]);
					}}
					onMouseUp={() => {
						setDragging(false);
					}}
				/>
			);
		})}
		{(!definingGridArea) && (
			<Button
				variant="link"
				className='wp-block-h2ml-grid--appender--add-new-grid-area'
				icon={plus}
				label={addNewText}
				onClick={start}
			/>
		)}
		{(definingGridArea) && (<>
			{appendingStart && (
				<GuideAppenderPreview
					columnStart={columnStart}
					columnEnd={columnEnd}
					rowStart={rowStart}
					rowEnd={rowEnd}
				/>
			)}
			<GuideAppenderToolbar
				helpText={() => (<p>{helpText}</p>)}
				cancelAppend={() => (
					<Button
						variant="link"
						label={cancelText}
						onClick={cancel}
					>{cancelText}</Button>
				)}
				confirmAppend={() => (
					<Button
						variant="primary"
						label={confirmText}
						onClick={() => confirm(columnStart, columnEnd, rowStart, rowEnd)}
						disabled={!canAppend}
					>{confirmText}</Button>
				)}
			/>
		</>)}
	</>);
}