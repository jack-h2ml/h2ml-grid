/**
 * Main
 */

export default function({colRefrence, rowRefrence, disabled, onMouseDown, onMouseEnter, onMouseUp}) {
	
	//
	const style = {
		gridColumn: colRefrence, 
		gridRow: rowRefrence,
		...(disabled && {pointerEvents: 'none'})
	};

	//
	return (
		<div 
			className="wp-block-h2ml-grid-editor-grid-guide" 
			style={style}
			onMouseDown={onMouseDown}
			onMouseEnter={onMouseEnter}
			onMouseUp={onMouseUp}
		>
			<div>
				<div>Col: <span>{colRefrence}</span></div>
				<div>Row: <span>{rowRefrence}</span></div>
			</div>
		</div>
	)
}