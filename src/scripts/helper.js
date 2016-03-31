(function(){

    var Helper = {

        createElement: function(tagName, attributes)
        {
            var element = document.createElement(tagName);

            if ( attributes !== undefined )
            {
                if ( "html" in attributes )
                {
                    element.innerHTML = attributes["html"];

                    delete attributes["html"];
                }

                for ( var attribute in attributes )
                {
                    element.setAttribute(attribute, attributes[attribute]);
                }
            }

            return element;
        },

        removeChildren: function(parentNode)
        {
            while (parentNode.firstChild)
            {
                parentNode.removeChild(parentNode.firstChild);
            }

            return parentNode;
        },

        removeElement: function(childNode)
        {
            if ( childNode.parentNode )
            {
                childNode.parentNode.removeChild(childNode);
            }
        }

    };

    window.TurengHelper = Helper;

})();