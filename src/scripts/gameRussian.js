cntCheck(3, cnt);

let rotation = 3660; //회전각도
let bang = [1,0,0,0,0,0]; //임의의 총알
let count = 0; //발사횟수


//총알 섞기
function shuffle(){
    let j, x, y;
    for(let i=0; i<999; i++){
        j = Math.floor(Math.random() * 6);
        y = j-1;
        x = bang[j];
        if(y < 0){
            y = 5;
        }
        bang[j] = bang[y];
        bang[y] = x;
    }
}

//탄창 빈탄창으로 이미지 교체
     //총알 각각 넣기
//시작버튼
function Start(){
     $('#bullet').animate(
         { deg: 3600 },
         { duration: 3000, step: function(now) {
             $(this).css({
                 transform: 'rotate(' + now + 'deg)' });
             }
         }
     );
     setTimeout(function(){
          $("#bullet").attr('src','../images/gameRussian/emptyBullet.png');
          $(".bulletOne").css('display','block');
     },3000);

     shuffle();
     $("#Start").text('발사');
     $("#Start").attr('onclick','Fire()');
     $("#Start").attr('id','Fire');

}

//발사
function Fire(){
    //탄창 회전 애니메이션
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
        $(".backArea").css('background','red');
        $("#title").text("사망!");
        $("#Fire").attr('onclick','rePlay()');
        $("#Fire").text('다시하기');
        $("#Fire").attr('id','rePlay');
    }
    count++;
}

//다시하기
function rePlay(){
    rotation = 3660;
    count = 0;
     $('#bullet').animate(
             { deg: 0 },
             { duration: 1, step: function(now) {
                 $(this).css({
                     transform: 'rotate(' + now + 'deg)' });
                 }
             }
         );
//    $("#bullet").css('transform','rotate(3600deg)');
    $(".backArea").css('background','white');
    $("#title").text("");
    $("#bullet").attr('src','../images/gameRussian/Bullet.png');
    $(".bulletOne").css('display','none');
    $("#rePlay").attr('onclick','Start()');
    $("#rePlay").text('시작');
    $("#rePlay").attr('id','Start');
}