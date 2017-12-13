//for loader
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#loading').hide(); // will first fade out the loading animation 

});





//for alarm



$("#button").click(function(){
     var x=document.getElementById("hrs").value*1;
    var y=document.getElementById("min").value*1;
    if(x>23 || y>59){
        alert("Please Enter Valid Time")
    }
    if(x<24 || y<60){
        myfunction();
    };
    });

    function myfunction(){
          var x=document.getElementById("hrs").value*1;
          var y=document.getElementById("min").value*1;
           var k=document.getElementById("sighnal");
           var forset=document.getElementById("set");
          k.innerHTML="Alarm is now ON";
          var mhand=document.getElementById("m-hand").style;
          var hhand=document.getElementById("h-hand").style;
          mhand.transform="rotate("+y*6+"deg)";
            hhand.transform="rotate("+(x*30+y*0.5)+"deg)";   
        
        //for set
        
          if(x>12){
              j=x-12;
              if(y<10){
                   forset.innerHTML="You set alarm Time at "  +j+":"+"0"+y+" PM";
              }
             else{
                  forset.innerHTML="You set alarm Time at "  +j+":"+y+" PM";
             }
          }
        if(x==12){
            j=x-0;
            if(y<10){
                   forset.innerHTML="You set alarm Time at "  +j+":"+"0"+y+" PM";
              }
             else{
                  forset.innerHTML="You set alarm Time at "  +j+":"+y+" PM";
             }
        }
        if(x<12){
            j=x;
            if(y<10){
                   forset.innerHTML="You set alarm Time at "  +j+":"+"0"+y+" AM";
              }
             else{
                  forset.innerHTML="You set alarm Time at "  +j+":"+y+" AM";
             }
        }
        if(x==0){
            j=x+12;
            if(y<10){
                   forset.innerHTML="You set alarm Time at "  +j+":"+"0"+y+" AM";
              }
             else{
                  forset.innerHTML="You set alarm Time at "  +j+":"+y+" AM";
             }
        };
        
        
        
        
        
           function hd(){
            var date=new Date();
          updateClock(date);
        }
        setInterval(hd,1000);
             function updateClock(date){
            var timediv=document.getElementById("h");
            var time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
            var hr=date.getHours();
            var mn=date.getMinutes();
            var sec=date.getSeconds(); 
                 if(x==hr && y==mn && sec==0){
                    k.innerHTML="Alarm is now OFF";
            var bleep=new Audio();
           bleep.src="audio/s.mp3";
           bleep.play();
        };
        };
            };

$(document).ready(function(){
    
     $start = setInterval(hd,1000);
      function hd(){
             $date=new Date();
          updateClock($date);
        }
             function updateClock(date){
            var sechand=document.getElementById("sc-hand").style;
            var minhand=document.getElementById("mn-hand").style;
            var hrhand=document.getElementById("hr-hand").style;
            sechand.transform="rotate("+date.getSeconds()*6+"deg)";
            minhand.transform="rotate("+date.getMinutes()*6+"deg)";
            hrhand.transform="rotate("+(date.getHours()*30+date.getMinutes()*0.5)+"deg)";
        }
        
    
})


        ///analog clock