///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "你会读心术吗?太可怕了，超准的测试!",
desc: "很准的呦,都来试试吧"
};



///////////////////////////////////////////////////////////////

var ID = getQueryString("sid") || Date.now() + "" + Math.floor(Math.random() * 1000);
var fen = 0;

document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {WeixinJSBridge.call('hideOptionMenu');});


function tap(elemvm, select, cb) {
var a = false;
for (var i = 0; i < select.length; i++) {
a = a || select[i].active;
};
if (!a) {
elemvm.active = true;
setTimeout(function () {
cb && cb()
}, 500)
}
}
function getQueryString(name) {
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
var r = location.search.substr(1).match(reg);
if (r != null) return unescape(decodeURI(r[2])); return null;
}

/////////////////////////////////////////



	var da=[];
	var dui=0;
	var dbt="测测你的读心能力！"
	var xlist = [{
                    "wen": "./image/c31.jpg",
					"a": "生气",
					"b": "紧张",
					"c": "伤心",
                    "d": "2"                 
                },{
                    "wen": "./image/c32.jpg",
					"a": "疲劳",
					"b": "不耐烦",
					"c": "开心",
                    "d": "3"                 
                },{
                    "wen": "./image/c33.jpg",
					"a": "害怕",
					"b": "愤怒",
					"c": "疑问",
                    "d": "2"                 
                },{
                    "wen": "./image/c34.jpg",
					"a": "疲劳",
					"b": "生气",
					"c": "悲伤",
                    "d": "3"                 
                },{
                    "wen": "./image/c35.jpg",
					"a": "伤心",
					"b": "期待",
					"c": "生气",
                    "d": "2"                 
                },{
                    "wen": "./image/c36.jpg",
					"a": "伤心",
					"b": "生气",
					"c": "反感",
                    "d": "1"                 
                },{
                    "wen": "./image/c37.jpg",
					"a": "疲惫",
					"b": "紧张",
					"c": "悲哀",
                    "d": "3"                 
                },{
                    "wen": "./image/c38.jpg",
					"a": "生气",
					"b": "愉快",
					"c": "惊讶",
                    "d": "2"                 
                },{
                    "wen": "./image/c39.jpg",
					"a": "期待",
					"b": "伤心",
					"c": "疑惑",
                    "d": "1"                 
                },{
                    "wen": "./image/c310.jpg",
					"a": "惊喜",
					"b": "愉快",
					"c": "疑惑",
                    "d": "1"                 
                },{
                    "wen": "./image/c311.jpg",
					"a": "不耐烦",
					"b": "紧张",
					"c": "疑惑",
                    "d": "1"                 
                },{
                    "wen": "./image/c312.jpg",
					"a": "惊喜",
					"b": "害怕",
					"c": "紧张",
                    "d": "1"                 
                },{
                    "wen": "./image/c313.jpg",
					"a": "害怕",
					"b": "好奇",
					"c": "失望",
                    "d": "1"                 
                },{
                    "wen": "./image/c314.jpg",
					"a": "不耐烦 ",
					"b": "憎恶",
					"c": "疑惑",
                    "d": "2"                 
                },{
                    "wen": "./image/c315.jpg",
					"a": "不满",
					"b": "紧张",
					"c": "失落",
                    "d": "3"                 
                }];
	var ylist = [{
                    "biao": "D",
					"t1": "恭喜：答对1-5个",
					"t2": "沟通起来略吃力，相对的别人也不太懂得他。",            
                },{
                    "biao": "C",
					"t1": "恭喜：答对6-9个",
					"t2": "大部分的人在这一区间，可以自如的和别人交流，讲道理，好沟通",            
                },{
                    "biao": "B",
					"t1": "恭喜：答对9-13个",
					"t2": "情商高，成熟，善于察言观色，能很快地感知到别人的情绪，随时知道别人在想什么。",            
                },{
                    "biao": "A",
					"t1": "恭喜：答对14-15个",
					"t2": "读心高手，可以敏感的捕捉到别人最细微的情绪，洞察一切，什么都不要想瞒过他。",            
                }
				];
				var tishu=xlist.length
function tii(i){
	$(".t-s").removeClass("active");
	$("#picti").attr("src",xlist[i].wen);
	$("#ti1").html(xlist[i].a);
	$("#ti2").html(xlist[i].b);
	$("#ti3").html(xlist[i].c);
	
}

function paduan(i){
	i=parseInt(i)
	if(i==0){
			$("#ti").css("display","block");
			$("#ks").css("display","none");
			tii(0);
		}
	if(i>0){
		da.push(i+"");
		
		if(tishu==da.length)
		{
		dui=0;
		for(var i=0;i<tishu;i++){if(xlist[i].d==da[i]){dui+=1}};	
			if(dui>=14){
				pii(1, 1)
			}else if(dui<14&&dui>9){
				pii(2, 1)
			}else if(dui<=9&&dui>5){
				pii(3, 1)
			}else{
				pii(4, 1)
			}
		}else{tii(da.length)}
		
	}
}


 	$("#toptit").css("top",parseInt(parseInt($('#btimg').css("height"))/3));
	$("#dbt").html(dbt);
	$("#dbts").html(dbt);
	document.title=dbt;	
	$("#cehua").css("display","block");
	$(".t-s").click(function(){
		var dj=$(this);
		$(".t-s").removeClass("active");
		dj.addClass("active");
		setTimeout(function () {
	paduan(dj.attr('vel'))
	 }, 500)}) 	
function pii(score, isShow){
	if(isShow==1){
	   $('#tips').show();
		mebtnopenurl = "http://"+basedns+"/test/"+spid+"/result.html?s="+score;
		WeixinJSBridge.call("showOptionMenu");
		return false;
	}else{
		$("#firstD").hide();
		$("#secondD").show();
		$("#daa").css("display","block")
		if(score==4){
			$("#t22").html(ylist[0].t2);
			$("#t11").html(ylist[0].t1);
			$("#biao11").html(ylist[0].biao)
		}
		if(score=='3'){
			$("#t22").html(ylist[1].t2);
			$("#t11").html(ylist[1].t1);
			$("#biao11").html(ylist[1].biao)
		}
		if(score=='2'){
			$("#t22").html(ylist[2].t2);
			$("#t11").html(ylist[2].t1);
			$("#biao11").html(ylist[2].biao)
		}
		if(score=='1'){
			$("#t22").html(ylist[3].t2);
			$("#t11").html(ylist[3].t1);
			$("#biao11").html(ylist[3].biao)
		}
	}
}

////////////////////
