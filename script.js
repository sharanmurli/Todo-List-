$(document).ready(function() {
    $('.example_f').click(function() {
        if ($('#text').val().length != 0) {
            var x = $('.container').html();
            var y =
`<div  class="alert alert-info style1 alert-dismissible fade in">
<a href="#" class="close" data-dismiss="alert" aria-label="close"><i style="font-size:28px" class="fa">&#xf014;</i></a>
                ` + $('#text').val() + `</div>`;
            $('.container').html(y + x);
            $('#text').val("");
        } else alert("Enter something!!!!!!");
    });

    $(document).on('click', '.alert', function() {
        if ($(this).css('text-decoration-line') == "none")
            $(this).css('text-decoration-line', 'line-through ');
        else
            $(this).css('text-decoration-line', 'none');
    });
});

function refresh(){
    window.location.reload();

}

const d = new Date();
document.getElementById("date").innerHTML = d;