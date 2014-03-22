(function(Readily){

	Readily.Navigation.mkRoute("/login", "#login", "login_tmpl.html", function(domId, template) {
		$(domId).html(template());
	});

})(window.Readily);