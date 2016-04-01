(function(){

	var Classes = {
		"modal" : "translate-modal-container",
		"header" : "translate-modal-header",
		"content" : "translate-modal-content",
		"image" : "translate-modal-image",
		"title" : "translate-modal-title"
	};

	var ModalIcon = chrome.extension.getURL("images/tureng.png");

	function Modal()
	{
		this.modal = TurengHelper.createElement("div", { "class" : Classes.modal });
			
		this.header = TurengHelper.createElement("div", { "class" : Classes.header });
		
		var image = TurengHelper.createElement("img", { "class" : Classes.image, "src" : ModalIcon });
		
		this.header.appendChild(image);
		
		this.title = TurengHelper.createElement("div", { "class" : Classes.title, "html" : "" });
		
		this.header.appendChild(this.title);
		
		this.modal.appendChild(this.header);
				
		this.content = TurengHelper.createElement("div", { "class" : Classes.content });
		
		this.modal.appendChild(this.content);
	}
	
	Modal.prototype.getContext = function()
	{
		return this.modal;
	};

	Modal.prototype.renderTitle = function(title, total)
	{
		this.title.innerHTML = "&ldquo;" + title + "&rdquo; teriminin sözlükteki anlamları: " + total + " sonuç";
	};
	
	Modal.prototype.renderRow = function(order, element)
	{
		var row = TurengHelper.createElement("div", { "class" : "translate-table-row" });

		var order = TurengHelper.createElement("div", { "class" : "translate-order-column", "html" : order });
		
		row.appendChild(order);
		
		var first = TurengHelper.createElement("div", { "class" : "translate-first-column", "html" : element.first });
		
		row.appendChild(first);
		
		var second = TurengHelper.createElement("div", { "class" : "translate-second-column", "html" : element.second });
		
		row.appendChild(second);

		var purpose = TurengHelper.createElement("div", { "class" : "translate-purpose-column", "html" : element.purpose });
		
		row.appendChild(purpose);
		
		return row;
	};
	
	Modal.prototype.renderContent = function(elements)
	{
		var self = this;
	
		elements.forEach(function(response){
		
			var order = 0;
			
			var responseTable = TurengHelper.createElement("div", { "class" : "translate-table-container" });
			
			for ( var category in response )
			{
				var translatedHeader = TurengHelper.createElement("div", { "class" : "translate-table-header", "html" : category });
			
				responseTable.appendChild(translatedHeader);
				
				var translatedWrapper = TurengHelper.createElement("div", { "class" : "translate-table-content" });
				
				responseTable.appendChild(translatedWrapper);
				
				response[category].forEach(function(element){
				
					order++;
					
					translatedWrapper.appendChild(self.renderRow(order, element));
					
				});
				
			}
			
			self.content.appendChild(responseTable);
		
		});		
	};
	
	Modal.prototype.render = function(title, total, elements)
	{
		this.empty();

		this.renderTitle(title, total);
		
		this.renderContent(elements);
	
		return this;
	};
	
	Modal.prototype.appendTo = function(parentNode)
	{
		parentNode.appendChild(this.modal);
	};
	
	Modal.prototype.remove = function()
	{
		TurengHelper.removeElement(this.modal);
	};
	
	Modal.prototype.empty = function()
	{
		TurengHelper.removeChildren(this.title);
		
		TurengHelper.removeChildren(this.content);
	};
	
	window.TurengModal = Modal;
	
})();