window.Readily = window.Readily || {};

(function(Readily){
	
	function Callback(status, param) {
		this.status = status;
		this.param = param;
	}
	
	function httpCallback(verb, url, param, callback) {
		// appel JQUERY
	}
	
	function Connection() {
		
		this.login = function(login, password, callback) {
			httpCall("POST", "/api/login", {login:login, password:password}, callback);
		};
		
	}

	Readily.Connection = new Connection();
	
})(window.Readily);
