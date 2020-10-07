var coin = [1,1];
var sum = [0,0];
function throwDice(player) {
    var numType = (player=='A'?0:1);
    var numPlus = Math.floor(Math.random() * 6)+1;
    var numMinus = Math.floor(Math.random() * -6);
    var numRandom = Math.floor(Math.random() * 2)+1;
    if(coin[numType] < 6){
        setDice(player, numMinus);
        document.getElementById("dp"+player).innerHTML += (numRandom==1?"+" + numPlus : numMinus) + "&nbsp;&nbsp;&nbsp";
        sum[numType] = sum[numType] + (numRandom==1? numPlus : numMinus);
        coin[numType]++;
    }
    $(".Count"+player).eq(coin[numType]-2).css('display','none');
    if(coin[numType] == 6){
        document.getElementById("dpSum"+player).innerHTML = sum[numType];
    }
}

function autoPlay(){
    setInterval(function(){
        throwDice('A');
        throwDice('B');
    },1000);
}

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
            $("#six2"+typeDice).css('display','none');
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