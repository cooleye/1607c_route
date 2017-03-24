define([
    'text!./list.html',
    'jquery',
    'css!./list.css'
], function(html,$) {
    'use strict';

      function add (){
            $("#container").html(html)
        }

        return {
            add : add
        }
    
});