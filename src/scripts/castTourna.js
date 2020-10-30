const cnt = request.getParameter('cnt');
cntCheck2(1, cnt);

$("#displayCnt").append("인원 " + cnt + "명");

printInput();
let NameBox = new Array(cnt);

// 화면 구성 설정
function setPreset() {
	let fixedHeith;
	let fixedMargin;
	let imgUrl;

	fixedMargin = (($(".jb-table").css("width").replace("px", "")) - 260) / 2;

	if (cnt == 4) {
		fixedHeith = 212;
		imgUrl = '../images/castTourna/4.png';
	} else {
		fixedHeith = 302;
		imgUrl = '../images/castTourna/8.png';
	}

	$(".jb-table").css("width", 260);
	$(".jb-table").css("height", fixedHeith);
	$(".jb-table").css("margin-left", fixedMargin);
	$(".jb-table").css({"background": "url(" + imgUrl + ")"});
	$(".jb-table").css({"background-position": "center center"});
	$(".jb-table").css({"background-size": "100% 100%"});
}

function printInput() {
	for (let i = cnt; i > 0; i--) {
		let textPenaltyCode =
			"                    <div class=\"text-penalty input-style input-style-2 input-required\">\n" +
			"                            <span class=\"color-highlight input-style-1-active input-style-1-inactive\">이름 " + i + "</span>\n" +
			"                            <em><i class=\"fa fa-exclamation-triangle color-red-light\"></i></em>\n" +
			"                            <input class=\"name\" type=\"text\" placeholder=\"이름입력\" value=''>\n" +
			"                        </div>";

		$(".textBox").prepend(textPenaltyCode);
	}
}

function setName() {
	//입력한 이름 배열에 넣기
	for (let i = 0; i < cnt; i++) {
		NameBox[i] = $(".name").eq(i).val();
		if ($(".name").eq(i).val() == "") {
			NameBox[i] = "-";
		}
	}
}

function setPrint() {

	let squareRoot = 0,
		block = cnt;

	while (true) {
		if (block == 1) break;
		block = block / 2;
		squareRoot++;
	}

	let numHeight = 2 * (squareRoot * 2) + 1; //세로칸 갯수
	let numWidth = cnt - 1; //가로칸 갯수
	let NumNameBox = 0; //배열인덱스
	let center = Math.floor(numWidth / 2);//중간값

	//전체칸 뿌리기
	for (let i = 0; i < numHeight; i++) {
		$(".jb-table").append("<div class='jb-table-row'></div>");
		for (let j = 0; j < numWidth; j++) {
			$(".jb-table-row").eq(i).append("<div class='jb-table-cell'></div>");

		}
	}

	//인원 뿌리기
	for (let i = 0; i < cnt * 2; i++) {
		if (i % 2 == 1) {
			if (NumNameBox < (cnt / 2)) {
				$(".jb-table-row").eq(0).find(".jb-table-cell").eq(i - 1).text(NameBox[NumNameBox++]);
			} else {
				$(".jb-table-row").eq(numHeight - 1).find(".jb-table-cell").eq(i - cnt - 1).text(NameBox[NumNameBox++]);
			}
		}
	}


	for (let i = 0; i < numWidth; i++) {
		//클래스바꾸기
		$(".jb-table-row").eq(0).find(".jb-table-cell").eq(i).attr("class", "jb-table-cell-value");
		$(".jb-table-row").eq(numHeight - 1).find(".jb-table-cell").eq(i).attr("class", "jb-table-cell-value");

		if (i % 3 == 1 && cnt >= 8) {
			$(".jb-table-row").eq(2).find(".jb-table-cell").eq(i).attr("class", "jb-table-cell-value");
			$(".jb-table-row").eq(numHeight - 3).find(".jb-table-cell").eq(i).attr("class", "jb-table-cell-value");
		}
		if (i % 7 == 3 && cnt >= 16) {
			$(".jb-table-row").eq(4).find(".jb-table-cell").eq(i).attr("class", "jb-table-cell-value");
			$(".jb-table-row").eq(numHeight - 5).find(".jb-table-cell").eq(i).attr("class", "jb-table-cell-value");
		}
	}

	for (let i = 0; i < numHeight; i++) {
		if (((numHeight / 2) + 2) >= i && ((numHeight / 2) - 3) <= i && i % 2 == 0) {
			$(".jb-table-row").eq(i).find(".jb-table-cell").eq(center).attr("class", "jb-table-cell-value");
		}
	}

	for (let i = 2; i < 11; i++) {
		if (i % 2 == 0 && cnt == 4 && i < 7) {
			$(".jb-table-row").eq(i).find(".jb-table-cell-value").text("-");
		} else if (i % 2 == 0 && cnt == 8) {
			$(".jb-table-row").eq(i).find(".jb-table-cell-value").text("-");
		}

	}


	//빈라인 클래스바꾸기
	for (let i = 0; i < numHeight; i++) {
		if (i > 0 && i % 1 == 0) {
			$(".jb-table-row").eq(i).attr("class", "jb-table-row-none");
		}
	}

	winnerUp();
}
function startTourna() {
	setPreset();
	setName();

	// 이름 섞기
	shuffle();
	$(".textBox").remove();
	$("#btn-start").attr('onclick', 'rePlay()');
	$("#btn-start").text('다시하기');
	$("#btn-start").attr('id', 'btn-reset');

	setPrint();
}


//섞기 함수
function shuffle() {
	let j, x, y;
	for (let i = 0; i < 999; i++) {
		j = Math.floor(Math.random() * cnt);
		y = j - 1;
		x = NameBox[j];
		if (y < 0) {
			y = cnt - 1;
		}
		NameBox[j] = NameBox[y];
		NameBox[y] = x;
	}
}

//클릭이벤트 함수
function winnerUp() {
	//8명일때
	if (cnt == 8) {
		//상단클릭
		//8강클릭
		$(".jb-table-row").eq(0).find(".jb-table-cell-value").click(function () {
			let indexNo = $(this).index();
			if (indexNo == 0 || indexNo == 2) {
				$(".jb-table-row").eq(1).find(".jb-table-cell-value").eq(0).text($(this).text());
				if (indexNo == 0) {
					$(".jb-table-row").eq(0).find(".jb-table-cell-value").eq(0).text('-');
				} else {
					$(".jb-table-row").eq(0).find(".jb-table-cell-value").eq(1).text('-');
				}
				for (let i = 0; i < 2; i++) {
					$(".jb-table-row").eq(0).find(".jb-table-cell-value").eq(i).off('click');
				}
			} else if (indexNo == 4 || indexNo == 6) {
				$(".jb-table-row").eq(1).find(".jb-table-cell-value").eq(1).text($(this).text());
				if (indexNo == 4) {
					$(".jb-table-row").eq(0).find(".jb-table-cell-value").eq(2).text('-');
				} else {
					$(".jb-table-row").eq(0).find(".jb-table-cell-value").eq(3).text('-');
				}
				for (let i = 2; i < 4; i++) {
					$(".jb-table-row").eq(0).find(".jb-table-cell-value").eq(i).off('click');
				}
			}

		});
		//4강클릭
		$(".jb-table-row").eq(1).find(".jb-table-cell-value").click(function () {
			let indexNo = $(this).index();
			if (indexNo == 1 || indexNo == 5) {
				if ($(".jb-table-row").eq(1).find(".jb-table-cell-value").eq(0).text() == "-" || $(".jb-table-row").eq(1).find(".jb-table-cell-value").eq(1).text() == "-") {
				} else {
					$(".jb-table-row").eq(2).find(".jb-table-cell-value").eq(0).text($(this).text());
					if (indexNo == 1) {
						$(".jb-table-row").eq(1).find(".jb-table-cell-value").eq(0).text('-');
					} else {
						$(".jb-table-row").eq(1).find(".jb-table-cell-value").eq(1).text('-');
					}
					for (let i = 0; i < 2; i++) {
						$(".jb-table-row").eq(1).find(".jb-table-cell-value").eq(i).off('click');
					}
				}
			}
		});


		//하단클릭
		//8강클릭
		$(".jb-table-row").eq(6).find(".jb-table-cell-value").click(function () {
			let indexNo = $(this).index();
			if (indexNo == 0 || indexNo == 2) {
				$(".jb-table-row").eq(5).find(".jb-table-cell-value").eq(0).text($(this).text());
				if (indexNo == 0) {
					$(".jb-table-row").eq(6).find(".jb-table-cell-value").eq(0).text('-');
				} else {
					$(".jb-table-row").eq(6).find(".jb-table-cell-value").eq(1).text('-');
				}
				for (let i = 0; i < 2; i++) {
					$(".jb-table-row").eq(6).find(".jb-table-cell-value").eq(i).off('click');
				}
			} else if (indexNo == 4 || indexNo == 6) {
				$(".jb-table-row").eq(5).find(".jb-table-cell-value").eq(1).text($(this).text());
				if (indexNo == 0) {
					$(".jb-table-row").eq(6).find(".jb-table-cell-value").eq(2).text('-');
				} else {
					$(".jb-table-row").eq(6).find(".jb-table-cell-value").eq(3).text('-');
				}
				for (let i = 2; i < 4; i++) {
					$(".jb-table-row").eq(6).find(".jb-table-cell-value").eq(i).off('click');
				}
			}
		});

		//4강클릭
		$(".jb-table-row").eq(5).find(".jb-table-cell-value").click(function () {
			let indexNo = $(this).index();
			if (indexNo == 1 || indexNo == 5) {
				if ($(".jb-table-row").eq(5).find(".jb-table-cell-value").eq(0).text() == "-" || $(".jb-table-row").eq(5).find(".jb-table-cell-value").eq(1).text() == "-") {
				} else {
					$(".jb-table-row").eq(4).find(".jb-table-cell-value").eq(0).text($(this).text());
					if (indexNo == 1) {
						$(".jb-table-row").eq(5).find(".jb-table-cell-value").eq(0).text('-');
					} else {
						$(".jb-table-row").eq(5).find(".jb-table-cell-value").eq(1).text('-');
					}
					for (let i = 0; i < 2; i++) {
						$(".jb-table-row").eq(5).find(".jb-table-cell-value").eq(i).off('click');
					}
				}

			}
		});

		//결승클릭
		$(".jb-table-row").eq(2).find(".jb-table-cell-value").click(function () {
			if ($(".jb-table-row").eq(4).find(".jb-table-cell-value").text() == "-") {
			} else {
				$(".jb-table-row").eq(3).find(".jb-table-cell-value").eq(0).text($(this).text()).css('font-weight', '900').css('font-size', '10px');
				$(".jb-table-row").eq(2).find(".jb-table-cell-value").eq(0).text('-');
				$(".jb-table-cell-value").off('click');
			}
		});
		$(".jb-table-row").eq(4).find(".jb-table-cell-value").click(function () {
			if ($(".jb-table-row").eq(2).find(".jb-table-cell-value").text() == "-") {
			} else {
				$(".jb-table-row").eq(3).find(".jb-table-cell-value").eq(0).text($(this).text()).css('font-weight', '900').css('font-size', '10px');
				$(".jb-table-row").eq(4).find(".jb-table-cell-value").eq(0).text('-');
				$(".jb-table-cell-value").off('click');
			}

		});
	}

	//4명일때
	if (cnt == 4) {
		//4강클릭
		$(".jb-table-row").eq(0).find(".jb-table-cell-value").click(function () {
			let indexNo = $(this).index();
			if (indexNo == 0 || indexNo == 2) {
				$(".jb-table-row").eq(1).find(".jb-table-cell-value").eq(0).text($(this).text());
				if (indexNo == 0) {
					$(".jb-table-row").eq(0).find(".jb-table-cell-value").eq(0).text('-');
				} else {
					$(".jb-table-row").eq(0).find(".jb-table-cell-value").eq(1).text('-');
				}
				for (let i = 0; i < 2; i++) {
					$(".jb-table-row").eq(0).find(".jb-table-cell-value").eq(i).off('click');
				}
			}
		});
		$(".jb-table-row").eq(4).find(".jb-table-cell-value").click(function () {
			let indexNo = $(this).index();
			if (indexNo == 0 || indexNo == 2) {
				$(".jb-table-row").eq(3).find(".jb-table-cell-value").eq(0).text($(this).text());
				if (indexNo == 0) {
					$(".jb-table-row").eq(4).find(".jb-table-cell-value").eq(0).text('-');
				} else {
					$(".jb-table-row").eq(4).find(".jb-table-cell-value").eq(1).text('-');
				}
				for (let i = 0; i < 2; i++) {
					$(".jb-table-row").eq(4).find(".jb-table-cell-value").eq(i).off('click');
				}
			}
		});

		//결승클릭
		$(".jb-table-row").eq(1).find(".jb-table-cell-value").click(function () {
			if ($(".jb-table-row").eq(3).find(".jb-table-cell-value").text() == "-") {
			} else {
				$(".jb-table-row").eq(2).find(".jb-table-cell-value").eq(0).text($(this).text()).css('font-weight', '900').css('font-size', '10px');
				$(".jb-table-row").eq(1).find(".jb-table-cell-value").eq(0).text('-');
				$(".jb-table-cell-value").off('click');
			}
		});
		$(".jb-table-row").eq(3).find(".jb-table-cell-value").click(function () {
			if ($(".jb-table-row").eq(1).find(".jb-table-cell-value").text() == "-") {
			} else {
				$(".jb-table-row").eq(2).find(".jb-table-cell-value").eq(0).text($(this).text()).css('font-weight', '900').css('font-size', '10px');
				$(".jb-table-row").eq(3).find(".jb-table-cell-value").eq(0).text('-');
				$(".jb-table-cell-value").off('click');
			}
		});
	}
}

function rePlay() {
	$(".jb-table").empty();
	setPrint();
}