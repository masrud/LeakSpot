
				<li>
					<div class="view">
						<label class="dijitInline inline_edit"
						 data-dojo-attach-point="editBox"
						 data-dojo-attach-event="onChange: onEditBoxChange"
						 data-dojo-type="todo/form/InlineEditBox"
						 data-dojo-props="value: at('rel:', 'title'), editor: 'dijit/form/TextBox', autosave: true"></label>
						<input class="toggle" type="checkbox"
						 data-dojo-type="dijit/form/CheckBox"
						 data-dojo-props="checked: at('rel:', 'completed')">
						<button class="destroy" data-dojo-attach-event="onclick: onRemoveClick"></button>
					</div> 
				</li>
			