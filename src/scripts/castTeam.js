let cnt = 1;
let arName;

function startTeam() {
    $("input[value='']").remove();
    let cnt = $("input[type=number]").val();

    if (cnt >= 2 && cnt <= 8) {
        arName = new Array($("input").length - 1);
        for (let i = 0; i < $("input").length - 1; i++) {
            arName[i] = $("input").eq(i).val();
        }
        printTeam(makeTeam(arName, $("input:last").val()));
    } else {
        alert("2 ~ 8 팀만 설정할 수 있습니다.");
    }


}

function addInput() {
    let inputCode =
        "                    <div class=\"input-team-name input-style input-style-2\" id='input-team-name" + cnt + "'>\n" +
        "                            <span class=\"color-highlight input-style-1-active input-style-1-inactive\">팀원 " + cnt + "</span>\n" +
        "                            <input type=\"text\" placeholder=\"이름을 입력해주세요.\" onkeyup='addInputCheck(" + cnt + ")' onfocusout='deleteInputCheck(" + cnt++ + ")' required=\"required\">\n" +
        "                        </div>";

    $(".textBox").append(inputCode);
}

function deleteInput(i) {
    let target = $("#input-team-name" + i).remove();
    cnt--;
}

function deleteInputCheck(i) {
    let target = $("#input-team-name" + (i + 1) + " > input");
    setTimeout(function () {
        if (target.length && target.val().length == 0) {
            deleteInput(i + 1);
        }
    }, 1000);

}

function addInputCheck(i) {
    // 현재 작성하고 있는 인풋의 글자가 입력되면
    let targetPre = $("#input-team-name" + (i - 1)).length;
    let target = $("#input-team-name" + i + " > input");
    let targetNext = $("#input-team-name" + (i + 1)).length;
    if (targetPre) {
        $("#input-team-name" + (i - 1) + " > input").attr("readonly", true);
    }
    if (target.val().length > 0) {
        if (!targetNext) {
            addInput();
        }
    } else {
        if (targetNext) {
            deleteInput(i + 1);
        }

    }

}

// 인원 이름 받아오기
// arName = ['김범수', '나얼', '박효신', '이수', '신용재'];

//printTeam(makeTeam(arName, 2));

function printTeam(arTeam) {
    $("#setTeam").remove();
    $("#teamArea").empty();
    let codeList = '';

    for (let i = 0; i < arTeam.length; i++) {
        codeList += '<div class="teamBox">' +
            '<div class="teamTitle text-uppercase font-900 bg-' + arColor[(i % 5)] + '-light">Team ' + (i + 1) + '</div>';
        for (let j = 0; j < arTeam[0].length; j++) {
            if (arTeam[i][j] == undefined) continue;
            codeList += '<div class="teamList border-' + arColor[(i % 5)] + '-dark">' + arTeam[i][j] + '</div>';
        }
        codeList += '</div><br/>';
    }
    codeList += '<a href="#" onclick="history.go(0);" class="btn btn-3d btn-m btn-full mb-3 rounded-xs text-uppercase font-900 shadow-s  border-red-dark bg-red-light">다시하기</a>\n';

    $("#teamArea").append(codeList);
}

// arName : 전체 인원 리스트, numTeam : 나눌 팀의 수
// return: array[팀][인원] 2차원 배열
function makeTeam(arName, numTeam) {
    arName = shuffle(arName);

    // 팀 설정
    let arrTeam = new Array(numTeam - 1);
    for (let i = 0; i < numTeam; i++) {
        arrTeam[i] = new Array(Math.ceil(arName.length / numTeam));
    }
    let x = 0,
        y = 0;
    for (let i = 0; i < arName.length; i++) {
        if (i != 0 && i % numTeam == 0) [x, y] = [0, y + 1];
        arrTeam[x++][y] = arName[i];
    }

    return arrTeam;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

$(document).ready(function () {
    addInput();

    $('input[type="number"]').on('keyup', function () {
        v = parseInt($(this).val());
        min = parseInt($(this).attr('min'));
        max = parseInt($(this).attr('max'));

        /*if (v < min){
            $(this).val(min);
        } else */
        if (v > max) {
            $(this).val(max);
        }
    })
})