$(document).ready(function(){
   let x=0;
   $("div").scroll(function(){
      $("span").text(x+=1)
   })
})

