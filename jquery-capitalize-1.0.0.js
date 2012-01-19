/*

* Capitalize jQuery Plugin
* Created By Marcos Sousa falecomigo [at] marcossousa [dot] com
* Version: 1.0.0
* Release: 2012-01-12
*/
; (function($, window, document, undefined) {
    
    $.widget( "marcossousa.capitalize" , {
        options: {
            forceLowerCase: false
        },
        _init : function() {
            var obj = this.element;
            var text = obj.text();
            
            this.originalText = text;
            
            if (this.options.forceLowerCase) {
                text = text.toLowerCase();
            }
            text = text.charAt(0).toUpperCase() + text.slice(1);
            obj.text(text);
        },
        restore: function( event ) {
            var obj = this.element;
            obj.text(this.originalText);
        },
    });
})(jQuery, window, document);