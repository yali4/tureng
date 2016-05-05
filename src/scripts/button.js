(function(){

	var Classes = { "button" : "translate-button", "visible" : "visible-translate-button", "icon" : "translate-button-icon" };

	var ButtonIcon = chrome.extension.getURL("icons/24x24.png");

	function Button()
	{
		this.button = TurengHelper.createElement("a", { "class" : Classes.button, "href" : "" });

        this.icon = TurengHelper.createElement("img", { "class" : Classes.icon, "src" : ButtonIcon });

        this.icon.onload = function()
        {
            this.style.width = this.naturalWidth + "px";
            this.style.height = this.naturalHeight + "px";
        };

        this.button.appendChild(this.icon);

		document.body.appendChild(this.button);	
	}
	
	Button.prototype.getContext = function()
	{
		return this.button;
	};

	Button.prototype.hide = function()
	{
		this.button.classList.remove(Classes.visible);
		
		return this;
	};
	
	Button.prototype.show = function()
	{
		this.button.classList.add(Classes.visible);
		
		return this;
	};
	
	Button.prototype.move = function(rects)
	{
		var rect = Array.prototype.slice.call(rects).pop();
		
		var top = window.scrollY + rect.top;
		
		var left = window.scrollX + rect.left + rect.width + 10;

        var height = this.button.offsetHeight;
		
		if ( height > rect.height )
		{
			top -= Math.round((height - rect.height) / 2);
		}
		else if ( rect.height > height )
		{
			top += Math.round((rect.height - height) / 2);
		}
		
		this.button.style.top = top + "px";
		
		this.button.style.left = left + "px";

		return this;
	};
	
	window.TurengButton = Button;
	
})();