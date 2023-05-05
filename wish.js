$(document).on('click','.send_form', function(){
    var walink = 'https://web.whatsapp.com/send';
    var phone = '62895708130200';
    
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
    }
    
     /* Call Input Form */
    var input_textarea1 = $("#wa_textarea").val();
    
    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + input_textarea1;
    
    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');

});