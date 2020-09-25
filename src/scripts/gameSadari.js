const cnt = request.getParameter('cnt');
cntCheck(0,cnt);

const len = 15
const sizeTop = 10;
const sizeLeft = 32;
let widthPx = ((Number.parseInt(cnt)+2)*30);
let arIconTp = new Array(cnt);
let arIconLt = new Array(cnt);
let sadari = makeSadari(cnt);

// 화면구성
$("#displayCnt").append("인원 "+cnt+"명");
$("#lineBox").css("width",widthPx);
$("#btn-reset").hide();
printInput();

function startSadari() {
    drawSadari(sadari);
    setIcon();
    printText();
    $("#btn-start").hide();
    $(".text-penalty").hide();
    $("#btn-reset").show();
}

function resetSadari() {
    $("#lineBox").empty();
    $(".baseIconImg").remove();
    sadari = makeSadari(cnt);
    drawSadari(sadari);
    setIcon();
}

function printInput() {
    for (let i = cnt; i > 0; i--) {
        let textPenaltyCode =
            "                    <div class=\"text-penalty input-style input-style-2 input-required\">\n" +
            "                            <span class=\"color-highlight input-style-1-active input-style-1-inactive\">내기 "+i+"</span>\n" +
            "                            <em><i class=\"fa fa-exclamation-triangle color-red-light\"></i></em>\n" +
            "                            <input type=\"text\" placeholder=\"내기입력\">\n" +
            "                        </div>";

        $(".textBox").prepend(textPenaltyCode);
    }
}

function printText(){
    let textCode = "";
    for (let i = 0; i < cnt; i++) {
        let text = $("input").eq(i).val();
        textCode +=
            "<div class='textPenalty' style='top:"+(arIconTp[i]+160)+"px;left:"+(arIconLt[i]-15)+"px;'>"+text+"</div>";
    }
    $(".textBox").append(textCode);
}

// 사다리 배열 생성
// 방향
// x : 세로선, 1 : 가로선, 2 : 대각선 오른쪽, 3 : 대각선 왼쪽
function makeSadari(num){
    const number = 2*num+1;
    let arSadari = new Array(number);

    for (let i = 0; i < number; i++) {
        arSadari[i] = new Array(len);

        for (let j = 0; j < len; j++) {
            arSadari[i][j] = 0;
            if(i%2==1){
                arSadari[i][j] = 'x';
            }
        }
    }

    // 랜덤 숫자 방향 입력
    let sfCnt = 1;
    let tempLine = 0;
    while(true){
        let rdLine = (Math.floor(Math.random() * (num-1)))*2+2;
        if(tempLine==rdLine)continue;
        arSadari[rdLine][sfCnt] = Math.floor(Math.random() * 3 + 1);
        tempLine = rdLine;
        sfCnt++;
        if(sfCnt==len-1)break;
    }
    return arSadari;
}


// 경로 분석
function findSadari(arSadari,focusLine) {
    let x = focusLine*2-1;
    let y = 1;
    let arDistance = new Array(len*2);
    let tempDistance = "";

    while (true){
        if(arSadari[x-1][y]=='0'&&arSadari[x+1][y]=='0'){
            tempDistance += 2;
            y++;
        }else{
            if(arSadari[x-1][y]=='1'){
                tempDistance += 4;
                x-=2;
            }else if (arSadari[x-1][y]=='2'){
                tempDistance += 7;
                x-=2;
            }else if(arSadari[x-1][y]=='3'){
                tempDistance += 1;
                x-=2;
            }else{
                if(arSadari[x+1][y]=='1'){
                    tempDistance += 6;
                    x+=2;
                }else if(arSadari[x+1][y]=='2'){
                    tempDistance += 3;
                    x+=2;
                }else if(arSadari[x+1][y]=='3'){
                    tempDistance += 9;
                    x+=2;
                }
            }
            tempDistance += 2;
            y++;
        }
        if(y>=len)break;
    }

    // 대각선 보정
    tempDistance = tempDistance.replaceAll('12','1');
    tempDistance = tempDistance.replaceAll('32','3');
    tempDistance = tempDistance.replaceAll('7','27');
    tempDistance = tempDistance.replaceAll('9','29');
    for (let i = 0; i < tempDistance.length; i++) {
        arDistance[i] = Number.parseInt(tempDistance.charAt(i));
    }

    return arDistance;
}

function printSadari(arSadari) {
    let result = '';
    for (let i = 0; i < arSadari[0].length; i++) {
        for (let j = 0; j < arSadari.length; j++) {
            result += arSadari[j][i];
        }
        result += '\n';
    }
    return result;
}

// 화면에 추가하기
function drawSadari(arSadari){
    let addLineCode = "<div class=\"addLine\"><div></div></div>";
    let jumpLineLeftCode = "<div class=\"jumpLine\"><div class=\"jumpLineLeft\"></div></div>";
    let jumpLineRightCode = "<div class=\"jumpLine\"><div class=\"jumpLineRight\"></div></div>";
    let whiteLineCode = "<div class=\"whiteLine\"></div>";
    let lineCode = "<div class=\"baseLine\"></div>";
    let resultHtml = '';

    for (let i = 0; i < arSadari[0].length; i++) {
        for (let j = 0; j < arSadari.length; j++) {
            switch (arSadari[j][i]){
                case 0 : resultHtml += whiteLineCode; break;
                case 1 : resultHtml += addLineCode; break;
                case 2 : resultHtml += jumpLineLeftCode; break;
                case 3 : resultHtml += jumpLineRightCode; break;
                case 'x' : resultHtml += lineCode; break;
            }
        }
        resultHtml += '<br/>';
    }
    $("#lineBox").append(resultHtml);
}

function setIcon() {
    let iconCode = "";
    let iconImage = new Array(cnt);
    let iconCnt = 0;
    let iconTempNum = 0;
    let iconImageTemp = "";

    while (true){
        if(iconCnt==cnt) break;
        iconTempNum = Math.floor(Math.random()*25) + 1 + '';
        if(iconImageTemp.indexOf(iconTempNum)==-1){
            iconImageTemp += iconTempNum;
            iconImage[iconCnt++] = iconTempNum;
        }
    }

    for (let i = 0; i < cnt; i++) {
        arIconTp[i] = $(".baseLine").eq(i).offset().top - 94;
        arIconLt[i] = $(".baseLine").eq(i).offset().left - 14;
        iconCode += "<img class='baseIconImg' onclick='doMove("+(i+1)+")' style='top:"+arIconTp[i]+"px; left:"+arIconLt[i]+"px;' src='../images/animal/icon"+iconImage[i]+".png'>\n";
    };

    $("#container").append(iconCode);
}

function doMove(lineNum){
    let arDistance = findSadari(sadari,lineNum);
    moveDown(lineNum);
    for (let i = 0; i < arDistance.length; i++) {
        switch (arDistance[i]){
            case 1 : moveJump(lineNum,1); break;
            case 2 : moveDown(lineNum); break;
            case 3 : moveJump(lineNum,3); break;
            case 4 : moveSide(lineNum,"l"); break;
            case 6 : moveSide(lineNum,"r"); break;
            case 7 : moveJump(lineNum,7); break;
            case 9 : moveJump(lineNum,9); break;
        }
    }

}
// 이동 방향
// 7   9
// 4   6
// 1 2 3
function moveDown(typeNumber){
    let target = $(".baseIconImg").eq(typeNumber-1);
    arIconTp[typeNumber-1] += sizeTop;
    target.delay(200).animate({top: arIconTp[typeNumber-1]},{duration:100});
}

function moveSide(typeNumber, moveDistance){
    let target = $(".baseIconImg").eq(typeNumber-1);
    switch (moveDistance){
        case "l": arIconLt[typeNumber-1] -= sizeLeft; break;
        case "r": arIconLt[typeNumber-1] += sizeLeft; break;
    }
    target.delay(200).animate({left: arIconLt[typeNumber-1]},{duration:100});
}

function moveJump(typeNumber, moveDistance){
    let target = $(".baseIconImg").eq(typeNumber-1);

    switch (moveDistance){
        case 1: arIconTp[typeNumber-1] += sizeTop; arIconLt[typeNumber-1] -= sizeLeft; break;
        case 3: arIconTp[typeNumber-1] += sizeTop; arIconLt[typeNumber-1] += sizeLeft; break;
        case 7: arIconTp[typeNumber-1] -= sizeTop; arIconLt[typeNumber-1] -= sizeLeft; break;
        case 9: arIconTp[typeNumber-1] -= sizeTop; arIconLt[typeNumber-1] += sizeLeft; break;
    }
    target.delay(200).animate({top: arIconTp[typeNumber-1],left: arIconLt[typeNumber-1]},{duration:100});
}