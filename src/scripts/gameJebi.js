cntCheck(1, cnt);

let pNum = $("#displayCnt").text().replace(/[^0-9]/g,'');//사람인원수
let kkwang = 1; //꽝갯수
let kkwangList = new Array(pNum); //랜덤담은 리스트

$("#boardJebi>p").text("1~"+(cnt-1)+"개의 꽝을 포함할 수 있습니다.");

//다시섞기
function resetJebi() {
    $(".jebiPaper").remove();
    passOrKkwang();
    jebiRemake();
    shake();
    $(".jebiPaper").click(function(){
        let indexNo = $(this).index();
        if(kkwangList[indexNo] == "통과"){
            indexNo = indexNo +1;
            $(this).attr("src","../images/gameJebi/lots"+indexNo+"-1.png");
        }else{
            indexNo = indexNo +1;
            $(this).attr("src","../images/gameJebi/lots"+indexNo+"-2.png");
        }
    });
}

//제비섞기
function shuffle(){
    kkwang = $("#kkwang").val();
    if(kkwang>=1 && kkwang <= (cnt-1)){
        $("#boardJebi").remove();
        $("#boardResult").show();
        $("#papers").css("height",cnt<=4?100:200);
        //꽝, 통과 만들기
        passOrKkwang();

        //기존 제비 제거
        $(".unJebiPaper").remove();
        $(".jebiPaper").remove();

        //새 제비 생성
        jebiRemake();

        //제비흔들기
        shake();


        $("#shuffle").attr("onclick","replay()");
        $("#shuffle").text("다시하기");
        $("#shuffle").attr("id","replay");


        //제비오픈
        $(".jebiPaper").click(function(){
            let indexNo = $(this).index();
            if(kkwangList[indexNo] == "통과"){
                indexNo = indexNo +1;
                $(this).attr("src","../images/gameJebi/lots"+indexNo+"-1.png");
            }else{
                indexNo = indexNo +1;
                $(this).attr("src","../images/gameJebi/lots"+indexNo+"-2.png");
            }
        });
    }else{
        alert("꽝 개수를 다시 설정해주세요.");
    }
}

//꽝 통과 배정, 섞기
function passOrKkwang(){
    for(let i=0; i<pNum; i++){
        kkwangList[i] = "통과";
    }
    for(let i=0; i<kkwang; i++){
        kkwangList[i] = "꽝";
    }

    let j, x, y; /*[꽝][꽝][당첨][당첨][당첨]*/
    for(let i=0; i<999; i++){
        j = Math.floor(Math.random() * pNum);
        y = j-1;
        x = kkwangList[j];
        if(y < 0){
            y = pNum-1;
        }
        kkwangList[j] = kkwangList[y];
        kkwangList[y] = x;
    }
}

//다시하기
function replay(){
    $(".jebiPaper").attr("src","../images/gameJebi/unlots.png");
    $(".jebiPaper").attr("class","unJebiPaper");
    $("#replay").text("제비섞기");
    $("#replay").attr("onclick","shuffle()");
    $("#replay").attr("id","shuffle");
    $(".unJebiPaper").off('click');
}

//제비만들기
function jebiRemake(){
    for(let i=1; i<=pNum; i++){
    let jebiPaper = "<img class='jebiPaper' src='../images/gameJebi/lots"+i+".png' style='width:65px; float:left;'>";
        $("#papers").append(jebiPaper);
    }
}

//제비흔들기 효과
function shake(){
    let degNum = [10,-10,0];
    let duraNum = [300,450,300];
    for(let i = 0; i<3; i++){
        $('.jebiPaper').animate(
            { deg: degNum[i] },
            { duration: duraNum[i], step: function(now) {
                $(this).css({
                    transform: 'rotate(' + now + 'deg)' });
                }
            }
        );
    }
}
