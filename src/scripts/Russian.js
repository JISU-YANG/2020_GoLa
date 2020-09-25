var rotation = 3660; //회전각도
var bang = [1,0,0,0,0,0];
var count = 0;



var j, x, y;
for(var i=0; i<999; i++){
    j = Math.floor(Math.random() * 6);
    y = j-1;
    x = bang[j];
    if(y < 0){
        y = 5;
    }
    bang[j] = bang[y];
    bang[y] = x;
}



$("#Start").click(function(){
     $('#bullet').animate(
         { deg: 3600 },
         { duration: 3000, step: function(now) {
             $(this).css({
                 transform: 'rotate(' + now + 'deg)' });
             }
         }
     );
     setTimeout(function(){
          $("#bullet").attr('src','../images/Russian/emptyBullet.png');
          $(".bulletOne").css('display','block');
     },3000);

     $("#Start").text('발사');
     $("#Start").attr('id','fire');

    $("#handle").click(function(){
         $('#bullet').animate(
             { deg: rotation },
             { duration: 300, step: function(now) {
                 $(this).css({
                     transform: 'rotate(' + now + 'deg)' });
                 }
             }
         );
         rotation = rotation + 60;
         if(count < 2){
            $(".bulletOne").eq(count).delay(350).fadeOut( 'slow' );
         }
         else if(count > 2){
             $(".bulletOne").eq(count-1).delay(350).fadeOut( 'slow' );
         }
         if(bang[count] == 0){
            $("#title").text("생존!");
         }else{
            $(".divider").css('background','red');
            $("#title").text("사망!");
            $("#handle").off('click');
         }

         count++;

    });
});
