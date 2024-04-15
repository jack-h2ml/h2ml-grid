/**
 * Main
 */

export default function({helpText: HelpText, confirmAppend: ConfirmAppend, cancelAppend: CancelAppend}) {
	return (
		<div className="wp-block-h2ml-grid-editor-appender">
			<HelpText/>
			<div>
				<CancelAppend/>
				<ConfirmAppend/>
			</div>
		</div>
	);
}