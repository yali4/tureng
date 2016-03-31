(function(){

	var Classes = {
		"overlay" : "translate-overlay-wrapper",
		"visible" : "visible-translate-overlay-wrapper",
		"container" : "translate-overlay-container",
		"content" : "translate-overlay-content"
	};

	function Overlay()
	{
		this.overlay = TurengHelper.createElement("div", { "class" : Classes.overlay });

		this.container = TurengHelper.createElement("div", { "class" : Classes.container });
	
		this.overlay.appendChild(this.container);
	
		this.content = TurengHelper.createElement("div", { "class" : Classes.content });

		this.container.appendChild(this.content);
		
		document.body.appendChild(this.overlay);	
	}
	
	Overlay.prototype.getContext = function()
	{
		return this.overlay;
	};
	
	Overlay.prototype.getContent = function()
	{
		return this.content;
	};
	
	Overlay.prototype.hide = function()
	{
		this.overlay.classList.remove(Classes.visible);
		
		return this;
	};
	
	Overlay.prototype.show = function()
	{
		this.overlay.classList.add(Classes.visible);
		
		return this;
	};
	
	Overlay.prototype.empty = function()
	{
		TurengHelper.removeChildren(this.content);
		
		return this;
	};

	window.TurengOverlay = Overlay;
	
})();