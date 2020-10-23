const cnt = request.getParameter('cnt');
cntCheck(2, cnt);

let coin = [1,1];//플레이어의 코인상황
let sum = [0,0];//플레이어의 주사위 총 합산

//주사위 던지기
function throwDice(player) {
    let numType = (player=='A'?0:1); //버튼값의 타입
    let numPlus = Math.floor(Math.random() * 6)+1; //+랜덤함수
    let numMinus = Math.floor(Math.random() * -6); //-랜덤함수
    let numRandom = Math.floor(Math.random() * 2)+1; // + or -

    //코인 5번 미만의 처리
    if(coin[numType] < 6){
        setDice(player, (numRandom==1? numPlus : numMinus));
        document.getElementById("dp"+player).innerHTML += (numRandom==1?"+" + numPlus : numMinus) + "&nbsp;&nbsp;&nbsp";
        sum[numType] = sum[numType] + (numRandom==1? numPlus : numMinus);
        coin[numType]++;
    }

    $(".Count"+player).eq(coin[numType]-2).css('display','none'); //횟수 차감

    //코인 모두 소진시 최종 합산
    if(coin[numType] == 6){
        document.getElementById("dpSum"+player).innerHTML = sum[numType];
        $("#autoButton").text('다시하기');
        $("#autoButton").attr('onclick','location.reload();');
    }

    //플레이어A,B의 코인 모두 소진시 승자 결과표기
    if(coin[0]==6 && coin[1]==6){
        if(sum[0]>sum[1]){
            $(".Player1").css('background','blue');
            $(".Player2").css('border','');
        }else if(sum[0]<sum[1]){
            $(".Player1").css('border','');
            $(".Player2").css('background','blue');
        }else{
            $(".Player1").css('border','');
            $(".Player2").css('border','');
        }
    }

    //플레이어A,B의 중간 합산 후 높은쪽 표기
    if(coin[0]!=1 && coin[1]!=1){
        if(sum[0]>sum[1]){
            $(".Player1").css('border','1px solid blue');
            $(".Player2").css('border','');
        }else if(sum[0]<sum[1]){
            $(".Player1").css('border','');
            $(".Player2").css('border','1px solid blue');
        }else{
            $(".Player1").css('border','');
            $(".Player2").css('border','');
        }
    }
}
//오토플레이
function autoPlay(){
    setInterval(function(){
        throwDice('A');
        throwDice('B');
    },1000);
}

//랜덤값에 따른 주사위표시
function setDice(typeDice, countDice){
    switch (Math.abs(countDice)){
        case 1:
            $("#one"+typeDice).css('display','block');
            $("#two1"+typeDice).css('display','none');
            $("#two2"+typeDice).css('display','none');
            $("#four1"+typeDice).css('display','none');
            $("#four2"+typeDice).css('display','none');
            $("#six1"+typeDice).css('display','none');
            $("#six2"+typeDice).css('display','none');
            break;
        case 2:
            $("#one"+typeDice).css('display','none');
            $("#two1"+typeDice).css('display','block');
            $("#two2"+typeDice).css('display','block');
            $("#four1"+typeDice).css('display','none');
            $("#four2"+typeDice).css('display','none');
            $("#six1"+typeDice).css('display','none');
            $("#six2"+typeDice).css('display','none');
            break;
        case 3:
            $("#one"+typeDice).css('display','block');
            $("#two1"+typeDice).css('display','block');
            $("#two2"+typeDice).css('display','block');
            $("#four1"+typeDice).css('display','none');
            $("#four2"+typeDice).css('display','none');
            $("#six1"+typeDice).css('display','none');
            break;
        case 4:
            $("#one"+typeDice).css('display','none');
            $("#two1"+typeDice).css('display','block');
            $("#two2"+typeDice).css('display','block');
            $("#four1"+typeDice).css('display','block');
            $("#four2"+typeDice).css('display','block');
            $("#six1"+typeDice).css('display','none');
            $("#six2"+typeDice).css('display','none');
            break;
        case 5:
            $("#one"+typeDice).css('display','block');
            $("#two1"+typeDice).css('display','block');
            $("#two2"+typeDice).css('display','block');
            $("#four1"+typeDice).css('display','block');
            $("#four2"+typeDice).css('display','block');
            $("#six1"+typeDice).css('display','none');
            $("#six2"+typeDice).css('display','none');
            break;
        case 6:
            $("#one"+typeDice).css('display','none');
            $("#two1"+typeDice).css('display','block');
            $("#two2"+typeDice).css('display','block');
            $("#four1"+typeDice).css('display','block');
            $("#four2"+typeDice).css('display','block');
            $("#six1"+typeDice).css('display','block');
            $("#six2"+typeDice).css('display','block');
            break;
    }
}