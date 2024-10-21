
// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

//contact form

$(document).ready(function () {
    $('#btn').click(function () {
        var email = $('#email').val();
        var name = $('#name').val();
        var title = $('#title').val();
        var msg = $('#msg').val();
        var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(name==""||email==""||title==""||msg==""){
            // $('#error').text("Sorry, all fields are required")
            $('#result').addClass("error").text("Sorry, all fields are required")
        }else if(name.length<5 || title.length<5 || msg.length<5){
            // $('#error').text("please enter min 5 char")
            $('#result').addClass("error").text("please enter at least 5 characters")

        }else if(filter.test(email)){
            // $("#error").text(""); 
            // $("#result").text("Thank you for contacting us. We will contact you as soon as possible");
            $('#result').removeClass("error").addClass("success").text("Thank you for contacting us. We will contact you as soon as possible")
        }else{
            // $("#result").text(""); 
            // $("#error").text("your email is not valid!");
            $('#result').removeClass("success").addClass("error").text("Sorry your email is not valid!")

        }


    });
});

