/*

* Capitalize jQuery Plugin
* Created By Marcos Sousa falecomigo [at] marcossousa [dot] com
* Version: 1.0.0
* Release: 2012-01-12
*/

 (function($) {
    $.fn.capitalize = function(options) {

        var defaults = {
            forceLowerCase: false
        };

        var options = $.extend(defaults, options);

        return this.each(function() {
            var obj = $(this);
            var text = obj.text();
            if (options.forceLowerCase) {
                text = text.toLowerCase();
            }
            text = text.charAt(0).toUpperCase() + text.slice(1);
            obj.text(text);
        });
    };

})(jQuery);