// ==UserScript==
// @name           tunein auto reflash
// @namespace      http://mymengyu.github.com/
// @description    Auto reflash
// @author         Zac http://mymengyu.github.com
// @match          http://tunein.com/radio/*
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @version        0.4
// ==/UserScript==
 
var autoReflash = function () {
    $.ajax(window.location.href)
        .done(function(result){
            var content = $(result).find('#sd_topics_schedule #tab0');
            if (typeof content.html() === 'undefined') {
                return false;
            }
            $('#sd_topics_schedule #tab0').html(content.html());
            $('._lazy').each(function(){
                var original = $(this).data('original')
                $(this).prop('src', original);
            });
    	});
};
 
 
$(function (){
    self.setInterval(function(){autoReflash()},300000);
});