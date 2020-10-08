function defaultListSet(){

// 게임 리스트 생성
    for (var i = 0; i< arTitle.length; i++){
        var gameList="" +
            "            <div class=\"card card-style\">\n" +
            "                <div class=\"content\">\n" +
            "                    <div class=\"row mb-0\">\n" +
            "                        <div class=\"col-8\">\n" +
            "                            <h3 class=\"mb-2\">"+arTitle[i]+"</h3>\n" +
            "                        </div>\n" +
            "                        <div class=\"col-4\">\n" +
            "                            <a href=\"#\" data-menu=\"menu-"+arFileName[i]+"\" class=\"btn btn-full btn-s font-600 font-12 rounded-m gradient-"+arColor[i]+"\">시작</a>\n" +
            "                        </div>\n" +
            "                        <div class=\"col-10\">\n" +
            "                            <span class=\"badge bg-"+arColor[i]+"-dark pm-1\">"+arCount[i]+"</span><span class=\"badge pm-2\">벌칙 : "+arKill[i]+" · "+arMission[i]+"</span>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>";
        $("#tab-1").append(gameList);
    }

// 배정 리스트 생성
    castList = "" +
        "           <div class=\"card card-style\">\n" +
        "                <div class=\"content\">\n" +
        "                    <h2>"+arTitle2[0]+"</h2>\n" +
        "                    <h5 class=\"font-11 opacity-30 line-height-s mb-3\">"+arSummary[0]+"</h5>\n" +
        "                    <div class=\"row mb-0\">\n" +
        "                        <div class=\"col-8\">\n" +
        "                            <span class=\"badge bg-"+arColor2[0]+"-dark pm1\">"+arCount2[0]+"</span>\n" +
        "                        </div>\n" +
        "                        <div class=\"col-4\">\n" +
        "                            <a href=\"../html/castTeam.html\" target=\"_self\" class=\"btn btn-full btn-s font-600 font-12 rounded-m gradient-"+arColor2[0]+"\">시작</a>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

    for(var i = 1; i < arTitle2.length; i++) {
        castList += "" +
            "           <div class=\"card card-style\">\n" +
            "                <div class=\"content\">\n" +
            "                    <h2>"+arTitle2[i]+"</h2>\n" +
            "                    <h5 class=\"font-11 opacity-30 line-height-s mb-3\">"+arSummary[i]+"</h5>\n" +
            "                    <div class=\"row mb-0\">\n" +
            "                        <div class=\"col-8\">\n" +
            "                            <span class=\"badge bg-"+arColor2[i]+"-dark pm1\">"+arCount2[i]+"</span>\n" +
            "                        </div>\n" +
            "                        <div class=\"col-4\">\n" +
            "                            <a href=\"#\" data-menu=\"menu-"+arFileName2[i]+"\" target=\"_self\" class=\"btn btn-full btn-s font-600 font-12 rounded-m gradient-"+arColor2[i]+"\">시작</a>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>";
        $("#tab-2").append(castList);
    }
}

window.onload = defaultListSet();