const cnt = request.getParameter('cnt');
cntCheck(4,cnt);
const startChk = false;
$("#displayCnt").append("인원 " + cnt + "명");
$("#btn-reset").hide();

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    let tmpRows = new Array(cnt);
    data.addColumn('string', 'Bottle');
    data.addColumn('number', 'Slices');
    for (let i = 0; i < cnt; i++) {
        tmpRows[i] = ['a',1];
    }
    // data.addRows([tempRows]);
    data.addRows(tmpRows);

    // Set chart options
    var options = {
        tooltip: { trigger: 'none' },
        legend: 'none',
        pieSliceText: 'none',
        backgroundColor: 'transparent'
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chartBox'));
    chart.draw(data, options);
}

function startBottle() {
    let angle = 360*10+Math.floor(Math.random()*360);

    let rotate = "rotate(" + angle + "deg)";
    let trans = "all 2s ease-out";
    $("#imgBox>img").css({
        "-webkit-transform": rotate,
        "-moz-transform": rotate,
        "-o-transform": rotate,
        "msTransform": rotate,
        "transform": rotate,
        "-webkit-transition": trans,
        "-moz-transition": trans,
        "-o-transition": trans,
        "transition": trans
    });
    $("#btn-start").hide();
    $("#btn-reset").show();
}
function resetBottle(){
    history.go(0);
}