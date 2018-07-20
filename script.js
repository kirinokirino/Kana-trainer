$("#button-run").click( function() {
	var target = [];
	var base = [];
	$("table td a.is-selected").each( function() {
		if ( $("#hiragana").parent().hasClass("is-active") ) {
			target.push($(this).prop("title"));

			for (var i = translation.length - 1; i >= 0; i--) {
				if (translation[i].hiragana == $(this).prop("title")) {
					if ($("#english").parent().hasClass("is-active")) base.push(translation[i].english);
					else base.push(translation[i].russian);
				}
			}
		}

		else if ( $("#katakana").parent().hasClass("is-active") ) {
			target.push($(this).prop("title"));

			for (var i = translation.length - 1; i >= 0; i--) {
				if (translation[i].katakana == $(this).prop("title")) {
					if ($("#english").parent().hasClass("is-active")) base.push(translation[i].english);
					else base.push(translation[i].russian);
				}
			}
		}
	});

	console.log("Replace this: " + base);
	console.log("With this: " + target);

	var text = $("#text").val();
	var resultText = text;
	for (var i = base.length - 1; i >= 0; i--) {
		var reg = new RegExp(base[i], "gi");
		resultText = resultText.replace(reg, target[i]);
	}

	$("#text").text(resultText);
});

$("#hiragana").click( function() {
	selectHiraganaTable();
});

$("#katakana").click( function() {
	selectKatakanaTable();
});

$("#english").click( function() {
	$("#english").parent().addClass("is-active");
	$("#russian").parent().removeClass("is-active");
});

$("#russian").click( function() {
	$("#russian").parent().addClass("is-active");
	$("#english").parent().removeClass("is-active");
});

function createButtons() {
	$("table td a").addClass("button is-rounded");
	$("table td a").click(function(){
		$(this).toggleClass("is-selected has-background-info");
		console.log("Toggled " +$(this).prop("title") + " button");
	});
}
var translation = [
    { hiragana: 'あ', katakana: 'ア', english: 'a ', russian: 'а ' },
    { hiragana: 'か', katakana: 'カ', english: 'ka', russian: 'ка' },
    { hiragana: 'さ', katakana: 'サ', english: 'sa', russian: 'са' },
    { hiragana: 'た', katakana: 'タ', english: 'ta', russian: 'та' },
    { hiragana: 'な', katakana: 'ナ', english: 'na', russian: 'на' },
    { hiragana: 'は', katakana: 'ハ', english: 'ha', russian: 'ха' },
    { hiragana: 'ま', katakana: 'マ', english: 'ma', russian: 'ма' },
    { hiragana: 'や', katakana: 'ヤ', english: 'ya', russian: 'я' },
    { hiragana: 'ら', katakana: 'ラ', english: 'ra', russian: 'ра' },
    { hiragana: 'わ', katakana: 'ワ', english: 'wa', russian: 'ва' },

    { hiragana: 'い', katakana: 'イ', english: 'i ', russian: 'и ' },
    { hiragana: 'き', katakana: 'キ', english: 'ki', russian: 'ки' },
    { hiragana: 'し', katakana: 'シ', english: 'si', russian: 'си' },
    { hiragana: 'ち', katakana: 'チ', english: 'ti', russian: 'ти' },
    { hiragana: 'に', katakana: 'ニ', english: 'ni', russian: 'ни' },
    { hiragana: 'ひ', katakana: 'ヒ', english: 'hi', russian: 'хи' },
    { hiragana: 'み', katakana: 'ミ', english: 'mi', russian: 'ми' },
    { hiragana: 'り', katakana: 'リ', english: 'ri', russian: 'ри' },
    { hiragana: 'ゐ', katakana: 'ヰ', english: 'wi', russian: 'ви' },

    { hiragana: 'う', katakana: 'ウ', english: 'u ', russian: 'у ' },
    { hiragana: 'く', katakana: 'ク', english: 'ku', russian: 'ку' },
    { hiragana: 'す', katakana: 'ス', english: 'su', russian: 'су' },
    { hiragana: 'つ', katakana: 'ツ', english: 'tu', russian: 'ту' },
    { hiragana: 'ぬ', katakana: 'ヌ', english: 'nu', russian: 'ну' },
    { hiragana: 'ふ', katakana: 'フ', english: 'hu', russian: 'ху' },
    { hiragana: 'む', katakana: 'ム', english: 'mu', russian: 'му' },
    { hiragana: 'ゆ', katakana: 'ユ', english: 'yu', russian: 'ю' },
    { hiragana: 'る', katakana: 'ル', english: 'ru', russian: 'ру' },

    { hiragana: 'え', katakana: 'エ', english: 'e ', russian: 'е ' },
    { hiragana: 'け', katakana: 'ケ', english: 'ke', russian: 'ке' },
    { hiragana: 'せ', katakana: 'セ', english: 'se', russian: 'се' },
    { hiragana: 'て', katakana: 'テ', english: 'te', russian: 'те' },
    { hiragana: 'ね', katakana: 'ネ', english: 'ne', russian: 'не' },
    { hiragana: 'へ', katakana: 'ヘ', english: 'he', russian: 'хе' },
    { hiragana: 'め', katakana: 'メ', english: 'me', russian: 'ме' },
    { hiragana: 'れ', katakana: 'レ', english: 're', russian: 'ре' },
    { hiragana: 'ゑ', katakana: 'ヱ', english: 'we', russian: 'ве' },

    { hiragana: 'お', katakana: 'オ', english: 'o ', russian: 'о ' },
    { hiragana: 'こ', katakana: 'コ', english: 'ko', russian: 'ко' },
    { hiragana: 'そ', katakana: 'ソ', english: 'so', russian: 'со' },
    { hiragana: 'と', katakana: 'ト', english: 'to', russian: 'то' },
    { hiragana: 'の', katakana: 'ノ', english: 'no', russian: 'но' },
    { hiragana: 'ほ', katakana: 'ホ', english: 'ho', russian: 'хо' },
    { hiragana: 'も', katakana: 'モ', english: 'mo', russian: 'мо' },
    { hiragana: 'よ', katakana: 'ヨ', english: 'yo', russian: 'ё' },
    { hiragana: 'ろ', katakana: 'ロ', english: 'ro', russian: 'ро' },
    { hiragana: 'を', katakana: 'ヲ', english: 'wo', russian: 'во' },
];

function selectHiraganaTable() {
	$("#hiragana").parent().addClass("is-active");
	$("#katakana").parent().removeClass("is-active");
	$("#current-table").html(`<div id="hiragana-table" class="level">
		<table class="table is-bordered level-item">
			<tbody>
				<tr>
					<th></th>
					<th title="single vowels">–</th>
					<th>k</th>
					<th>s</th>
					<th>t</th>
					<th>n</th>
					<th>h</th>
					<th>m</th>
					<th>y</th>
					<th>r</th>
					<th>w</th>
				</tr>
				<tr>
					<th>a</th>
					<td><a href="#あ" title="あ">あ</a></td>
					<td><a href="#か" title="か">か</a></td>
					<td><a href="#さ" title="さ">さ</a></td>
					<td><a href="#た" title="た">た</a></td>
					<td><a href="#な" title="な">な</a></td>
					<td><a href="#は" title="は">は</a></td>
					<td><a href="#ま" title="ま">ま</a></td>
					<td><a href="#や" title="や">や</a></td>
					<td><a href="#ら" title="ら">ら</a></td>
					<td><a href="#わ" title="わ">わ</a></td>
				</tr>
				<tr>
					<th>i</th>
					<td><a href="#い" title="い">い</a></td>
					<td><a href="#き" title="き">き</a></td>
					<td><a href="#し" title="し">し</a></td>
					<td><a href="#ち" title="ち">ち</a></td>
					<td><a href="#に" title="に">に</a></td>
					<td><a href="#ひ" title="ひ">ひ</a></td>
					<td><a href="#み" title="み">み</a></td>
					<td></td>
					<td><a href="#り" title="り">り</a></td>
					<td><a href="#ゐ" title="ゐ">ゐ</a></td>
				</tr>
				<tr>
					<th>u</th>
					<td><a href="#う" title="う">う</a></td>
					<td><a href="#く" title="く">く</a></td>
					<td><a href="#す" title="す">す</a></td>
					<td><a href="#つ" title="つ">つ</a></td>
					<td><a href="#ぬ" title="ぬ">ぬ</a></td>
					<td><a href="#ふ" title="ふ">ふ</a></td>
					<td><a href="#む" title="む">む</a></td>
					<td><a href="#ゆ" title="ゆ">ゆ</a></td>
					<td><a href="#る" title="る">る</a></td>
					<td></td>
				</tr>
				<tr>
					<th>e</th>
					<td><a href="#え" title="え">え</a></td>
					<td><a href="#け" title="け">け</a></td>
					<td><a href="#せ" title="せ">せ</a></td>
					<td><a href="#て" title="て">て</a></td>
					<td><a href="#ね" title="ね">ね</a></td>
					<td><a href="#へ" title="へ">へ</a></td>
					<td><a href="#め" title="め">め</a></td>
					<td></td>
					<td><a href="#れ" title="れ">れ</a></td>
					<td><a href="#ゑ" title="ゑ">ゑ</a></td>
				</tr>
				<tr>
					<th>o</th>
					<td><a href="#お" title="お">お</a></td>
					<td><a href="#こ" title="こ">こ</a></td>
					<td><a href="#そ" title="そ">そ</a></td>
					<td><a href="#と" title="と">と</a></td>
					<td><a href="#の" title="の">の</a></td>
					<td><a href="#ほ" title="ほ">ほ</a></td>
					<td><a href="#も" title="も">も</a></td>
					<td><a href="#よ" title="よ">よ</a></td>
					<td><a href="#ろ" title="ろ">ろ</a></td>
					<td><a href="#を" title="を">を</a></td>
				</tr>
			</tbody>
		</table>
	</div>`);
	console.log("Hiragana training is selected");
	createButtons();
}

function selectKatakanaTable() {
	$("#katakana").parent().addClass("is-active");
	$("#hiragana").parent().removeClass("is-active");
	$("#current-table").html(`<div id="katakana-table" class="level">
		<table class="table is-bordered level-item">
			<tbody>
				<tr>
					<th></th>
					<th title="single vowels">–</th>
					<th>k</th>
					<th>s</th>
					<th>t</th>
					<th>n</th>
					<th>h</th>
					<th>m</th>
					<th>y</th>
					<th>r</th>
					<th>w</th>
				</tr>
				<tr>
					<th>a</th>
					<td><a href="#ア" title="ア">ア</a></td>
					<td><a href="#カ" title="カ">カ</a></td>
					<td><a href="#サ" title="サ">サ</a></td>
					<td><a href="#タ" title="タ">タ</a></td>
					<td><a href="#ナ" title="ナ">ナ</a></td>
					<td><a href="#ハ" title="ハ">ハ</a></td>
					<td><a href="#マ" title="マ">マ</a></td>
					<td><a href="#ヤ" title="ヤ">ヤ</a></td>
					<td><a href="#ラ" title="ラ">ラ</a></td>
					<td><a href="#ワ" title="ワ">ワ</a></td>
				</tr>
				<tr>
					<th>i</th>
					<td><a href="#イ" title="イ">イ</a></td>
					<td><a href="#キ" title="キ">キ</a></td>
					<td><a href="#シ" title="シ">シ</a></td>
					<td><a href="#チ" title="チ">チ</a></td>
					<td><a href="#ニ" title="ニ">ニ</a></td>
					<td><a href="#ヒ" title="ヒ">ヒ</a></td>
					<td><a href="#ミ" title="ミ">ミ</a></td>
					<td></td>
					<td><a href="#リ" title="リ">リ</a></td>
					<td><a href="#ヰ" title="ヰ">ヰ</a></td>
				</tr>
				<tr>
					<th>u</th>
					<td><a href="#ウ" title="ウ">ウ</a></td>
					<td><a href="#ク" title="ク">ク</a></td>
					<td><a href="#ス" title="ス">ス</a></td>
					<td><a href="#ツ" title="ツ">ツ</a></td>
					<td><a href="#ヌ" title="ヌ">ヌ</a></td>
					<td><a href="#フ" title="フ">フ</a></td>
					<td><a href="#ム" title="ム">ム</a></td>
					<td><a href="#ユ" title="ユ">ユ</a></td>
					<td><a href="#ル" title="ル">ル</a></td>
					<td></td>
				</tr>
				<tr>
					<th>e</th>
					<td><a href="#エ" title="エ">エ</a></td>
					<td><a href="#ケ" title="ケ">ケ</a></td>
					<td><a href="#セ" title="セ">セ</a></td>
					<td><a href="#テ" title="テ">テ</a></td>
					<td><a href="#ネ" title="ネ">ネ</a></td>
					<td><a href="#ヘ" title="ヘ">ヘ</a></td>
					<td><a href="#メ" title="メ">メ</a></td>
					<td></td>
					<td><a href="#レ" title="レ">レ</a></td>
					<td><a href="#ヱ" title="ヱ">ヱ</a></td>
				</tr>
				<tr>
					<th>o</th>
					<td><a href="#オ" title="オ">オ</a></td>
					<td><a href="#コ" title="コ">コ</a></td>
					<td><a href="#ソ" title="ソ">ソ</a></td>
					<td><a href="#ト" title="ト">ト</a></td>
					<td><a href="#ノ" title="ノ">ノ</a></td>
					<td><a href="#ホ" title="ホ">ホ</a></td>
					<td><a href="#モ" title="モ">モ</a></td>
					<td><a href="#ヨ" title="ヨ">ヨ</a></td>
					<td><a href="#ロ" title="ロ">ロ</a></td>
					<td><a href="#ヲ" title="ヲ">ヲ</a></td>
				</tr>
			</tbody>
		</table>
	</div>`);
	console.log("Katakana training is selected");
	createButtons();
}