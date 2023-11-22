

$(document).ready(function () {

    checkNavbarWidth();
    $(window).on('resize', function () {
        checkNavbarWidth();
    });
    var flag =true;
    function checkNavbarWidth() {
        if ($('.navbar').width() < 800) {
            $('.navbar ul').hide(500);
            if(flag===true){
                $('.append').append(`
                <div class="btn-group">
                <button  class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-bars"></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
                </div>
                `
                );
            }
            flag=false;
        } else {
            $('.navbar ul').show();
            $('.btn-group').remove();
            flag=true;
        }
    }
});
$('.navbar .btn-group').click(function (e) { 
    $('.dropdown-menu').show();
});