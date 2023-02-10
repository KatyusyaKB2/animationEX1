
console.log("main.js!!");

// ボタンイベント
$("#btnA").click(()=>{
	doAnimation("#my_target", "animate__bounce");// Bounce
});

$("#btnB").click(()=>{
	doAnimation("#my_target", "animate__flash");// Flash
});

$("#btnC").click(()=>{
	doAnimation("#my_target", "animate__pulse");// Pulse
});

$("#btnD").click(()=>{
	doAnimation("#my_target", "animate__rubberBand");// RubberBand
});

$("#btnE").click(()=>{
	doAnimation("#my_target", "animate__shakeX");// ShakeX
});

$("#btnF").click(()=>{
	doAnimation("#my_target", "animate__zoomOut");// ShakeX
});

$("#btnG").click(()=>{
	doAnimation("#my_target", "animate__flip");// ShakeX
});

// アニメーション
function doAnimation(id, type){
	const elem = $(id);
	elem.addClass("animate__animated");
	elem.addClass(type);
	elem.on("animationend", ()=>{
		elem.off("animationend");
		elem.removeAttr("class");
	});
}