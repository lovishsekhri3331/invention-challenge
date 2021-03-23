// this is the file used for the jquery editing in the file
//Author: Lovish Sekhri

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'right'});
    var elemts = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elemts, options);
});

// Or with jQuery

$(document).ready(function(){
$('.sidenav').sidenav();
$('.parallax').parallax();
});