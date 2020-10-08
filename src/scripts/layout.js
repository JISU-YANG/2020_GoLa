function layoutSetting() {
    var headerCode =
        "<div class=\"header header-fixed header-logo-center header-auto-show\">\n" +
        "        <a href=\"index.html\" class=\"header-title\" id=\"header-title\">GOLA</a>\n" +
        "        <a href=\"#\" data-back-button class=\"header-icon header-icon-1\"><i class=\"fas fa-chevron-left\"></i></a>\n" +
        "        <a href=\"#\" data-menu=\"menu-main\" class=\"header-icon header-icon-4\"><i class=\"fas fa-bars\"></i></a>\n" +
        "        <a href=\"#\" data-toggle-theme class=\"header-icon header-icon-3 show-on-theme-dark\"><i class=\"fas fa-sun\"></i></a>\n" +
        "        <a href=\"#\" data-toggle-theme class=\"header-icon header-icon-3 show-on-theme-light\"><i class=\"fas fa-moon\"></i></a>\n" +
        "</div>\n" +
        "\n" +
        "<div id=\"footer-bar\" class=\"footer-bar-6\">\n" +
        "        <a href=\"index.html\" target=\"_self\" class=\"circle-nav\"><i class=\"fas fa-gamepad\"></i></a>\n" +
        "</div>\n" +
        "\n" +
        "<div class=\"page-title page-title-fixed\">\n" +
        "        <h1 id=\"page-title-name\">GOLA</h1>\n" +
        "        <h1></h1>\n" +
        "        <a href=\"#\" class=\"page-title-icon shadow-xl bg-theme color-theme show-on-theme-light\" data-toggle-theme><i class=\"fa fa-moon\"></i></a>\n" +
        "        <a href=\"#\" class=\"page-title-icon shadow-xl bg-theme color-theme show-on-theme-dark\" data-toggle-theme><i class=\"fa fa-lightbulb color-yellow-dark\"></i></a>\n" +
        "        <a href=\"#\" class=\"page-title-icon shadow-xl bg-theme color-theme\" data-menu=\"menu-main\"><i class=\"fa fa-bars\"></i></a>\n" +
        "</div>\n" +
        "<div class=\"page-title-clear\"></div>";

    var menuCode =
        "<!-- Main Menu-->\n" +
        "    <div id=\"menu-main\" class=\"menu menu-box-left rounded-0\" data-menu-width=\"280\" data-menu-active=\"nav-pages\">\n" +
        "        <div class=\"card rounded-0 bg-6\" data-card-height=\"150\">\n" +
        "            <div class=\"card-top\">\n" +
        "                <a href=\"#\" class=\"close-menu float-right mr-2 text-center mt-3 icon-40 notch-clear\"><i class=\"fa fa-times color-white\"></i></a>\n" +
        "            </div>\n" +
        "            <div class=\"card-bottom\">\n" +
        "                <h1 id=\"card-bottom-title\" class=\"color-white pl-3 mb-n1 font-20\">GOLA</h1>\n" +
        "                <p class=\"mb-2 pl-3 font-12 color-white opacity-50\">Welcome to the Game!</p>\n" +
        "            </div>\n" +
        "            <div class=\"card-overlay bg-gradient\"></div>\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\"mt-4\"></div>\n" +
        "\n" +
        "        <h6 class=\"menu-divider\">게임</h6>\n" +
        "        <div class=\"list-group list-custom-small list-menu\">\n";

    for (let i = 0; i < arTitle.length; i++) {
        menuCode +=
        "            <a href=\"#\" data-menu=\"menu-"+arFileName[i]+"\">\n" +
        "                <i class=\""+arIcon[i]+" gradient-"+arColor[i]+" color-white\"></i>\n" +
        "                <span>"+arTitle[i]+"</span>\n" +
        "                <i class=\"fa fa-angle-right\"></i>\n" +
        "            </a>\n";
    }

    menuCode +=
        "        </div>\n" +
        "\n" +
        "        <div class=\"mt-4\"></div>\n" +
        "\n" +
        "        <h6 class=\"menu-divider\">배정</h6>\n" +
        "        <div class=\"list-group list-custom-small list-menu\">\n";

    for (let j = 0; j < arTitle2.length; j++) {
        menuCode +=
            "            <a href=\"#\" data-menu=\"menu-"+arFileName2[j]+"\">\n" +
            "                <i class=\""+arIcon2[j]+" gradient-"+arColor2[j]+" color-white\"></i>\n" +
            "                <span>"+arTitle2[j]+"</span>\n" +
            "                <i class=\"fa fa-angle-right\"></i>\n" +
            "            </a>\n";
    }

    menuCode +=
        "\n" +
        "        </div>\n" +
        "\n" +
        "        <h6 class=\"menu-divider mt-4\">문의</h6>\n" +
        "        <div class=\"list-group list-custom-small list-menu\">\n" +
        "            <a href=\"#\">\n" +
        "                <img src=\"../images/pictures/1s.jpg\">\n" +
        "                <span>이창훈</span>\n" +
        "                <i class=\"fa fa-angle-right\"></i>\n" +
        "            </a>\n" +
        "            <a href=\"#\">\n" +
        "                <img src=\"../images/pictures/5s.jpg\">\n" +
        "                <span>양지수</span>\n" +
        "                <i class=\"fa fa-angle-right\"></i>\n" +
        "            </a>\n" +
        "\n" +
        "        </div>\n" +
        "\n" +
        "        <h6 class=\"menu-divider font-10 mt-4\">Made with </i> by 가짜개발자 in <span class=\"copyright-year\"></span></h6>\n" +
        "    </div>";

    $("#page").prepend(headerCode);
    $("#page").append(menuCode);
}

function numberSetting() {
// 인원수 선택 리스트 생성

    for(var i=0; i<arFileName.length;i++){
        var menuOption = "";
        for(var j=0; j<arrCountNum[i].length;j++){
            menuOption += "                <a target=\"_self\" href=\""+arFileName[i]+".html?cnt="+arrCountNum[i][j]+"\"><span>"+arrCountNum[i][j]+"명</span><i class=\"fa fa-angle-right\"></i></a>\n";
        }
        var countList =
            "<div id=\"menu-"+arFileName[i]+"\"\n" +
            "         class=\"menu menu-box-modal rounded-m\"\n" +
            "         data-menu-height=\""+(100+(arrCountNum[i].length)*50)+"\"\n" +
            "         data-menu-width=\"300\">\n" +
            "        <div class=\"menu-title\">\n" +
            "            <h1 class=\"font-24\">참가인원</h1>\n" +
            "            <a href=\"#\" class=\"close-menu\"><i class=\"fa fa-times-circle\"></i></a>\n" +
            "        </div>\n" +
            "        <div class=\"mr-3 ml-3 mt-3\">\n" +
            "            <div class=\"list-group list-custom-small\">\n" + menuOption +
            "            </div>\n" +
            "            <div class=\"clear\"></div>\n" +
            "        </div>\n" +
            "    </div>";
        $("#page").append(countList);
    }
}

layoutSetting();
numberSetting();

// 인원수 검사
function cntCheck(gameType, cnt){
    let isCheck = false;

    for (let i = 0; i < arrCountNum[gameType].length; i++) {
        if (arrCountNum[gameType][i] == cnt) isCheck = true;
    }
    if(!isCheck){
        alert("인원을 다시 설정해주세요.");
        history.back();
    }
    return isCheck;
}

// 배정 인원수 검사
function cntCheck2(gameType, cnt){
    let isCheck = false;

    for (let i = 0; i < arrCountNum2[gameType].length; i++) {
        if (arrCountNum2[gameType][i] == cnt) isCheck = true;
    }
    if(!isCheck){
        alert("인원을 다시 설정해주세요.");
        history.back();
    }
    return isCheck;
}