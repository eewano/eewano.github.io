(function($) {
    $(function() {
        $('.flex-tabs').each(function() {
            var t = jQuery(this),
                tab = t.find('.tab-list li a'),
                tabs = t.find('.tab');

            tab.click(function(e) {
                var x = jQuery(this),
                    y = x.data('tab');

                tab.removeClass('active');
                x.addClass('active');

                tabs.removeClass('active');
                t.find('.' + y).addClass('active');

                e.preventDefault();
            });
        });
    });
})(jQuery);