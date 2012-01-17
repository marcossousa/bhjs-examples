/*

* Capitalize jQuery Plugin
* Created By Marcos Sousa falecomigo [at] marcossousa [dot] com
* Version: 1.0.0
* Release: 2012-01-12
*/
; (function($, window, document, undefined) {
    
    var methods = { 
        init : function(options) {
            
            var defaults = {
                forceLowerCase: false
            };

            var options = $.extend(defaults, options);
            
            return this.each(function() {
                var obj = $(this);
                var text = obj.text();
                
                obj.data('capitalize', text);
                
                if (options.forceLowerCase) {
                    text = text.toLowerCase();
                }
                text = text.charAt(0).toUpperCase() + text.slice(1);
                obj.text(text);
            });
        },
        restore : function() {
            return this.each(function() {
                var obj = $(this);
                var text = obj.data('capitalize');
                obj.text(text);
            });
        }
    }
    
    $.fn.capitalize = function(method) {
        if(methods[method]) {
            options = Array.prototype.slice.call(arguments, 1);
            return methods[method].apply(this, options);
        } else if ( typeof method == "object") {
            return methods.init.apply(this, arguments);
        } else {
            $.error("The method" + method + " doens't exist");
        }
    };

})(jQuery, window, document);