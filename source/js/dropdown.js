window.onload = function(){

    var e = document.getElementById("menu-button");
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
