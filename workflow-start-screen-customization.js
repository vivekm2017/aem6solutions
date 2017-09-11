;(function($, ns, channel, window, undefined) {
    "use strict";
var START_WORKFLOW_SUBMIT_SELECTOR = ".js-cq-WorkflowStart-submit";
var MY_WORKFLOW_FIELD_SELECTOR = ".MY-workflow-datepicker,.MY-workflow-userpicker";
var START_WORKFLOW_MODEL_SELECTOR = "coral-select.MY-workflow-select .coral3-Select-label";
var submitButton = document.querySelector(START_WORKFLOW_SUBMIT_SELECTOR);
$(document).on('DOMSubtreeModified', START_WORKFLOW_MODEL_SELECTOR, function(e) {
	var val = $(START_WORKFLOW_MODEL_SELECTOR).html();
	// Handle value selection in models field
	if (val.toLowerCase().indexOf('MY') > -1) {
		$(MY_WORKFLOW_FIELD_SELECTOR).parent().show();
		submitButton.setAttribute("disabled", "disabled");
	} else {
		$(MY_WORKFLOW_FIELD_SELECTOR).parent().hide();
	}
});
$(document).on("foundation-contentloaded", function() {
	if ($(".MY-workflow-userpicker").length) {
		// Handle value selection in reviewer field
		$(".MY-workflow-userpicker").on('selected', function(event) {
			submitButton.removeAttribute("disabled");
		});
		// Handle manual typing in reviewer field
		$(".MY-workflow-userpicker-input").on("keyup", function(e) {
			var val = e.target.value;
			if (!val.length) {
				submitButton.setAttribute("disabled", "disabled");
			}
		});
	}
});
}(jQuery, Granite.author, jQuery(document), this));
