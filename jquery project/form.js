
    $(document).ready(function(){ 
      
      $( '#myform' ).validate({
        rules: {
          fname: {
             required: true,
              minlength: 3,
              
      },
      
          email: {
            required: true,
            email: true,   
      },
      
          mobnum: {
            required: true,
            number: true,
            minlength: 10,
            maxlength: 10 ,
            
      },
      
  }
  });
  $("input[type='radio']").change(function(){
    if($(this).val()=="eng")
    {
    $("#engfield").show();
    }
    else
    {
    $("#engfield").hide();
    }
    });
    $("input[type='radio']").change(function(){
    if($(this).val()=="bsc")
    {
    $("#bscfield").show();
    }
    else
    {
    $("#bscfield").hide();
    }
    });
    $("input[type='radio']").change(function(){
      if($(this).val()=="medical")
      {
      $("#medicalfield").show();
      }
      else
      {
      $("#medicalfield").hide();
      }
      });
   
    $("#submit").click(function(){
    
      if($('#fname').val() =="" &&  $('#email').val()=="" && $('#mobnum').val()==""){
      alert("please fill the require fields.");
      }
    
      if($('#fname').val() !=="" &&  $('#email').val()!=="" && $('#mobnum').val()!==""){
        alert("Congratulations! Your form is submitted.");
    
      }
      });
});



  
