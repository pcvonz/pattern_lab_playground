window.onload = function(){

    var e = document.getElementsByClassName("dropdown");

    for(var i = 0; i < e.length; i++) {
        e[i].addEventListener('click', function(event) {
            if(event.target.nextElementSibling.className == ''){
                event.target.nextElementSibling.className = 'close';
            }
            else {
                event.target.nextElementSibling.className = '';
            }
        });
    }
}
