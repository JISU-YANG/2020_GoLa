var coinA = 1;
var sumA = 0;
var playerA = new Array();
var coinB = 1;
var sumB = 0;
var playerB = new Array();
function throwA() {
    var numPlus = Math.floor(Math.random() * 6)+1;
    var numMinus = Math.floor(Math.random() * -6);
    var numRandom = Math.floor(Math.random() * 2)+1;
    if(coinA < 6){
        if(numRandom == 1){
            switch (numPlus){
                case 1:
                    $("#oneA").css('display','block');
                    $("#two1A").css('display','none');
                    $("#two2A").css('display','none');
                    $("#four1A").css('display','none');
                    $("#four2A").css('display','none');
                    $("#six1A").css('display','none');
                    $("#six2A").css('display','none');
                    break;
                case 2:
                    $("#oneA").css('display','none');
                    $("#two1A").css('display','block');
                    $("#two2A").css('display','block');
                    $("#four1A").css('display','none');
                    $("#four2A").css('display','none');
                    $("#six1A").css('display','none');
                    $("#six2A").css('display','none');
                    break;
                case 3:
                    $("#oneA").css('display','block');
                    $("#two1A").css('display','block');
                    $("#two2A").css('display','block');
                    $("#four1A").css('display','none');
                    $("#four2A").css('display','none');
                    $("#six1A").css('display','none');
                    $("#six2A").css('display','none');
                    break;
                case 4:
                    $("#oneA").css('display','none');
                    $("#two1A").css('display','block');
                    $("#two2A").css('display','block');
                    $("#four1A").css('display','block');
                    $("#four2A").css('display','block');
                    $("#six1A").css('display','none');
                    $("#six2A").css('display','none');
                    break;
                case 5:
                    $("#oneA").css('display','block');
                    $("#two1A").css('display','block');
                    $("#two2A").css('display','block');
                    $("#four1A").css('display','block');
                    $("#four2A").css('display','block');
                    $("#six1A").css('display','none');
                    $("#six2A").css('display','none');
                    break;
                case 6:
                    $("#oneA").css('display','none');
                    $("#two1A").css('display','block');
                    $("#two2A").css('display','block');
                    $("#four1A").css('display','block');
                    $("#four2A").css('display','block');
                    $("#six1A").css('display','block');
                    $("#six2A").css('display','block');
                    break;
            }
            document.getElementById("dpA").innerHTML += "+" + numPlus + "&nbsp;&nbsp;&nbsp;";
            console.log(numPlus);
            playerA.push(numPlus);
            sumA = sumA + numPlus;
            coinA++;
        }else{
            switch (numMinus){
                case -1:
                    $("#oneA").css('display','block');
                    $("#two1A").css('display','none');
                    $("#two2A").css('display','none');
                    $("#four1A").css('display','none');
                    $("#four2A").css('display','none');
                    $("#six1A").css('display','none');
                    $("#six2A").css('display','none');
                    break;
                case -2:
                    $("#oneA").css('display','none');
                    $("#two1A").css('display','block');
                    $("#two2A").css('display','block');
                    $("#four1A").css('display','none');
                    $("#four2A").css('display','none');
                    $("#six1A").css('display','none');
                    $("#six2A").css('display','none');
                    break;
                case -3:
                    $("#oneA").css('display','block');
                    $("#two1A").css('display','block');
                    $("#two2A").css('display','block');
                    $("#four1A").css('display','none');
                    $("#four2A").css('display','none');
                    $("#six1A").css('display','none');
                    $("#six2A").css('display','none');
                    break;
                case -4:
                    $("#oneA").css('display','none');
                    $("#two1A").css('display','block');
                    $("#two2A").css('display','block');
                    $("#four1A").css('display','block');
                    $("#four2A").css('display','block');
                    $("#six1A").css('display','none');
                    $("#six2A").css('display','none');
                    break;
                case -5:
                    $("#oneA").css('display','block');
                    $("#two1A").css('display','block');
                    $("#two2A").css('display','block');
                    $("#four1A").css('display','block');
                    $("#four2A").css('display','block');
                    $("#six1A").css('display','none');
                    $("#six2A").css('display','none');
                    break;
                case -6:
                    $("#oneA").css('display','none');
                    $("#two1A").css('display','block');
                    $("#two2A").css('display','block');
                    $("#four1A").css('display','block');
                    $("#four2A").css('display','block');
                    $("#six1A").css('display','block');
                    $("#six2A").css('display','block');
                    break;
            }
            document.getElementById("dpA").innerHTML += numMinus + "&nbsp;&nbsp;&nbsp";
            console.log(numMinus);

            playerA.push(numMinus);
            sumA = sumA + numMinus;
            coinA++;
        }
    }
    $(".CountA").eq(coinA-2).css('display','none');
    if(coinA == 6){
        document.getElementById("dpSumA").innerHTML = sumA;
    }
}

function throwB() {
    var numPlus = Math.floor(Math.random() * 6)+1;
    var numMinus = Math.floor(Math.random() * -6);
    var numRandom = Math.floor(Math.random() * 2)+1;
    if(coinB < 6){
        if(numRandom == 1){
            switch (numPlus){
                case 1:
                    $("#oneB").css('display','block');
                    $("#two1B").css('display','none');
                    $("#two2B").css('display','none');
                    $("#four1B").css('display','none');
                    $("#four2B").css('display','none');
                    $("#six1B").css('display','none');
                    $("#six2B").css('display','none');
                    break;
                case 2:
                    $("#oneB").css('display','none');
                    $("#two1B").css('display','block');
                    $("#two2B").css('display','block');
                    $("#four1B").css('display','none');
                    $("#four2B").css('display','none');
                    $("#six1B").css('display','none');
                    $("#six2B").css('display','none');
                    break;
                case 3:
                    $("#oneB").css('display','block');
                    $("#two1B").css('display','block');
                    $("#two2B").css('display','block');
                    $("#four1B").css('display','none');
                    $("#four2B").css('display','none');
                    $("#six1B").css('display','none');
                    $("#six2B").css('display','none');
                    break;
                case 4:
                    $("#oneB").css('display','none');
                    $("#two1B").css('display','block');
                    $("#two2B").css('display','block');
                    $("#four1B").css('display','block');
                    $("#four2B").css('display','block');
                    $("#six1B").css('display','none');
                    $("#six2B").css('display','none');
                    break;
                case 5:
                    $("#oneB").css('display','block');
                    $("#two1B").css('display','block');
                    $("#two2B").css('display','block');
                    $("#four1B").css('display','block');
                    $("#four2B").css('display','block');
                    $("#six1B").css('display','none');
                    $("#six2B").css('display','none');
                    break;
                case 6:
                    $("#oneB").css('display','none');
                    $("#two1B").css('display','block');
                    $("#two2B").css('display','block');
                    $("#four1B").css('display','block');
                    $("#four2B").css('display','block');
                    $("#six1B").css('display','block');
                    $("#six2B").css('display','block');
                    break;
            }
            document.getElementById("dpB").innerHTML += "+" + numPlus + "&nbsp;&nbsp;&nbsp;";
            console.log(numPlus);
            playerB.push(numPlus);
            sumB = sumB + numPlus;
            coinB++;
        }else{
            switch (numMinus){
                case -1:
                    $("#oneB").css('display','block');
                    $("#two1B").css('display','none');
                    $("#two2B").css('display','none');
                    $("#four1B").css('display','none');
                    $("#four2B").css('display','none');
                    $("#six1B").css('display','none');
                    $("#six2B").css('display','none');
                    break;
                case -2:
                    $("#oneB").css('display','none');
                    $("#two1B").css('display','block');
                    $("#two2B").css('display','block');
                    $("#four1B").css('display','none');
                    $("#four2B").css('display','none');
                    $("#six1B").css('display','none');
                    $("#six2B").css('display','none');
                    break;
                case -3:
                    $("#oneB").css('display','block');
                    $("#two1B").css('display','block');
                    $("#two2B").css('display','block');
                    $("#four1B").css('display','none');
                    $("#four2B").css('display','none');
                    $("#six1B").css('display','none');
                    $("#six2B").css('display','none');
                    break;
                case -4:
                    $("#oneB").css('display','none');
                    $("#two1B").css('display','block');
                    $("#two2B").css('display','block');
                    $("#four1B").css('display','block');
                    $("#four2B").css('display','block');
                    $("#six1B").css('display','none');
                    $("#six2B").css('display','none');
                    break;
                case -5:
                    $("#oneB").css('display','block');
                    $("#two1B").css('display','block');
                    $("#two2B").css('display','block');
                    $("#four1B").css('display','block');
                    $("#four2B").css('display','block');
                    $("#six1B").css('display','none');
                    $("#six2B").css('display','none');
                    break;
                case -6:
                    $("#oneB").css('display','none');
                    $("#two1B").css('display','block');
                    $("#two2B").css('display','block');
                    $("#four1B").css('display','block');
                    $("#four2B").css('display','block');
                    $("#six1B").css('display','block');
                    $("#six2B").css('display','block');
                    break;
            }
            document.getElementById("dpB").innerHTML += numMinus + "&nbsp;&nbsp;&nbsp";
            console.log(numMinus);

            playerB.push(numMinus);
            sumB = sumB + numMinus;
            coinB++;
        }
    }
    $(".CountB").eq(coinB-2).css('display','none');
    if(coinB == 6){
        document.getElementById("dpSumB").innerHTML = sumB;
    }
}