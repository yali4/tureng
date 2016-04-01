(function(){

	var Classes = {
		"container" : "translate-dialog-container",
		"loading" : "translate-dialog-loading",
		"message" : "translate-dialog-message"
	};
	
	var LoadingIcon = chrome.extension.getURL("images/loading.gif");
	
	function Dialog()
	{
		this.container = TurengHelper.createElement("div", { "class" : Classes.container });
	}

    Dialog.prototype.getContext = function()
    {
        return this.container;
    };
	
	Dialog.prototype.loading = function()
	{
		this.empty();
	
		var loading = TurengHelper.createElement("img", { "class" : Classes.loading, "src" : LoadingIcon });

		this.container.appendChild(loading);
		
		return this;
	};
	
	Dialog.prototype.message = function(message)
	{
		this.empty();
	
		var dialog = TurengHelper.createElement("strong", { "class" : Classes.message, "html" : message });
		
		this.container.appendChild(dialog);
		
		return this;
	};
	
	Dialog.prototype.appendTo = function(parentNode)
	{
		parentNode.appendChild(this.container);
	};
	
	Dialog.prototype.remove = function()
	{
		TurengHelper.removeElement(this.container);
	};
	
	Dialog.prototype.empty = function()
	{
		TurengHelper.removeChildren(this.container);
	};
	
	window.TurengDialog = Dialog;
	
})();