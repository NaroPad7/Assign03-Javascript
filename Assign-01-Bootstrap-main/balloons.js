$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
     // uncheck all checkboxes (FireFox)
     $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
    //adding attention seeker to a array and randomizing it
    const animateAnimations = [
        'animate__bounce',
        'animate__flash',
        'animate__pulse',
        'animate__rubberBand',
        'animate__shakeX',
        'animate__shakeY',
        'animate__headShake',
        'animate__swing',
        'animate__tada',
        'animate__wobble',
        'animate__jello',
        'animate__heartBeat'
    ]
    
    let num = Math.floor(Math.random() * animateAnimations.length);
    
     $('h1').addClass(animateAnimations[num]);

    
    //create a toast when submit button is clicked
    $('#submit').click(function(){
        //make it do a toast
        if (!$('.form-check-input:checked').length > 0) {
            alert("Please select at least one balloon before submitting.");
    }})
    //all checkboxes selected
    $('#checkAll').click(function(){
        $('.form-check-input').prop("checked",true);
        $('.form-check-input').each(function () {
            // make the image visible
            $('#' + this.id + 'Img').css('visibility', 'visible');
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
        });
        
    })
    $('#checkNone').click(function(){
        $('.form-check-input').prop("checked",false);
        $('.form-check-input').each(function () {
            // make the image visible
            $('#' + this.id + 'Img').css('visibility', 'hidden');
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
        });
        
    })
   

    


    //mouse hover
    $('.form-check-label').on('mouseover', function(){
        $('h1').css("color", $(this).data('color'));        
    });
    $('.form-check-label').on('mouseout', function(){
        $('h1').css("color", 'slategray');        
    });
});
    
    


