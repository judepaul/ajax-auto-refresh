// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
	
	
$(document).ready(function () {
	// will call refreshPartial every 1 min
		setInterval(refreshPartial, 60000)
});

// calls action refreshing the partial
function refreshPartial() {
	var article_id = $('#article_id').val();
	$.ajax({
  		beforeSend: function(request) {
  			request.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
  		},
		type: "POST",
  		// url: 'get_comments_by_article',
  		url: 'get_comments_by_article',
		data: 'article_id=' + article_id,
		success: function( response ) {
		}
		
	 })
}
