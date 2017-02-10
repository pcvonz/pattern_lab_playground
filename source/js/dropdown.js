window.onload = function(){
   'use strict';

    var e = document.getElementById("menu-button"),
        openCtrl = document.getElementById('btn-search-close'),
        closeCtrl = document.getElementById('btn-search-close'),
        searchContainer = document.querySelector('.search'),
        inputSearch = searchContainer.querySelector('.search__input');

    var nav = e.parentNode.nextElementSibling;
    console.log(nav);

    e.addEventListener('click', function(event) {
        if(nav.className == 'is-expanded-vertical-dropdown'){
            nav.className = '';
        }
        else {
            nav.className = "is-expanded-vertical-dropdown";
        }
    });
}
