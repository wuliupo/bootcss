jQuery(document).ready(function () {

	// HIDE BROWSER BAR ON LOAD
	window.addEventListener("load",function() {
		setTimeout(function(){
		  window.scrollTo(0, 1);
	    }, 0);
	});

	// ACTIVATE CHOSEN PLUGIN
	jQuery(".chzn-select").chosen();
	
	// SHOW CONTENT BASED ON SELECT OPTION VALUE
    jQuery(function () {
        jQuery('#color_filter').change(function () {
            var selected = $(this).find(':selected').val();
            jQuery(".swatches").hide();
            jQuery('#' + selected).show();
        }).change();
    });

});
