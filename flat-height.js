(function( $ ) {
    $.fn.flatHeight = function() {
        this.each(function() {
            var eleHeight = $(this).height();
            var eleNextHeight = $(this).next().height();
            if( eleHeight > eleNextHeight ){
                $(this).next().height(eleHeight);
            } else {
                $(this).height(eleNextHeight);
            }
        });
    };
})( jQuery );
