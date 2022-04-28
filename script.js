$("button").click(function(){
    let variable1 = $(".A"). val();
    let variable2 = $(".B"). val();
    let variable3 = $(".C"). val();
        
    let variable4= variable3 *12 *58;
    
    $(".fortune-display").append(variable1+ " you will eat " +variable2+ variable4 + "times by 2080.");
    
   console.log(variable1,variable2,variable3); 
    
    
    
});
