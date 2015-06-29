///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测测你的发胖指数",
desc: "很准的呦,都来试试吧"
};
		
		function showQ(){
			$("#zhao").hide();
		}
		

            var ID = getQueryString("sid") || Date.now() + "" + Math.floor(Math.random() * 1000);
            var fen = 0;
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
            var model = avalon.define("test", function (vm) {
					vm.arr = [{
						type: "hello",
						text: "你是否有好的饮食方式和生活习惯，如果你体内已经囤积了多余的脂肪，再不采取行动的话，会越来越胖。根据下列题目进行回答",
						text1: "点击开始测试咯~  请先选择性别",
						select: [{
							img: "http://storage.jcloud.com/osimage/sex1.jpg?Expires=1729669140&AccessKey=185a64bb82664ae298c2aa5368673ae8&Signature=1eCf0itZuNFezhER0glbKIttoaE%3D",
							text: "男生",
							active: false,
							error: true,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[1];
									model.result.sex = 0;
								});
							}
						},
						{
							img: "http://storage.jcloud.com/osimage/sex0.jpg?Expires=1729669105&AccessKey=185a64bb82664ae298c2aa5368673ae8&Signature=cF62MK7Cd8BcEn3e8MXiS7o2Ykk%3D",
							text: "女生",
							active: false,
							error: true,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[1];
									model.result.sex = 1;
								});
							}
						}]
					}, {
						type: "select",
						id: 1,
						text: "现在比18岁时的体重重了5公斤以上",
						select: [{
							text: "A 是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									fen += 10;
									model.item = model.arr[2];
								});
							}
						},
						{
							text: "B 不是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[2];
								});
							}
						}]
					},
					{
						type: "select",
						id: 2,
						text: "吃饭快，一下扫光餐盘中所有的东西",
						select: [{
							text: "A 是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									fen += 10;
									model.item = model.arr[3];
								});
							}
						},
						{
							text: "B 不是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[3];
								});
							}
						}]
					},
					{
						type: "select",
						id: 3,
						text: "上班是一直坐着的",
						select: [{
							text: "A 是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									fen += 10;
									model.item = model.arr[4];
								});
							}
						},
						{
							text: "B 不是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[4];
								});
							}
						}]
					},
					{
						type: "select",
						id: 4,
						text: "体重没变，但肌肉却越来越松弛了",
						select: [{
							text: "A 是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									fen += 10;
									model.item = model.arr[5];
								});
							}
						},
						{
							text: "B 不是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[5];
								});
							}
						}]
					},
					{
						type: "select",
						id: 5,
						text: "总是吃个不停，包里总能找到零食",
						select: [{
							text: "A 是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									fen += 10;
									model.item = model.arr[6];
								});
							}
						},
						{
							text: "B 不是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[6];
								});
							}
						}]
					},
					{
						type: "select",
						id: 6,
						text: "爱吃油炸食物",
						select: [{
							text: "A 是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									fen += 10;
									model.item = model.arr[7];
								});
							}
						},
						{
							text: "B 不是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[7];
								});
							}
						}]
					},
					{
						type: "select",
						id: 7,
						text: "腰围、臀围的比值大于0.76",
						select: [{
							text: "A 是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									fen += 10;
									model.item = model.arr[8];
								});
							}
						},
						{
							text: "B 不是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[8];
								});
							}
						}]
					},
					{
						type: "select",
						id: 8,
						text: "即使是从一楼到二楼也得搭乘电梯",
						select: [{
							text: "A 是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									fen += 10;
									model.item = model.arr[9];
								});
							}
						},
						{
							text: "B 不是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[9];
								});
							}
						}]
					},
					{
						type: "select",
						id: 9,
						text: "总是不断地减肥，又不断地反弹",
						select: [{
							text: "A 是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									fen += 10;
									model.item = model.arr[10];
								});
							}
						},
						{
							text: "B 不是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[10];
								});
							}
						}]
					},
					{
						type: "select",
						id: 10,
						text: "有爱吃宵夜的习惯",
						select: [{
							text: "A 是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									fen += 10;
									testEnd();
								});
							}
						},
						{
							text: "B 不是",
							active: false,
							error: false,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									testEnd();
								});
							}
						}]
					},
                    {
                        type: "result",
                        id: 11
                    }, {
                        type: "result",
                        id: 12
                    }, {
                        type: "result",
                        id: 13
                    }, {
                        type: "result",
                        id: 14
                    }
                ];
                vm.item = vm.arr[0];
                vm.result = {
                    sex: 0
                }
                vm.shared = false;
                vm.sharebox = function () {
                    model.showshare = true;
                }
                vm.livetip = false;
                vm.hidelivetip = function () {
                    model.livetip = false;
                }
                vm.livenow = function () {

                }
                vm.showxz = function () {
                    model.xunzhang = true;
                }
               vm.$watch("item", function (newval) {
                    if (newval.type == 'result') {
                        tarShare((newval.id-16));
						return false;
                    };
                })
            });
			var ylist = [{
				"biao": "A",
				"t1": "脂肪率在10%以下",
				"t2": "脂肪率在10%以下。你有很好的饮食习惯以及作息时间，希望能够再接再厉，危险指数：0",      
			},{
				"biao": "B",
				"t1": "脂肪率在10-25%之间",
				"t2": "脂肪率在10-25%之间。虽然目前你仍很苗条，但保持好的饮食方式和生活习惯是保持你良好身材的最佳途径。危险指数：2",            
			},{
				"biao": "C",
				"t1": "脂肪率在25%-30%之间",
				"t2": "你的体内脂肪率在25%-30%之间。你看起来虽然不胖，但很结实。这可能也说明你正一步步向肥胖靠近，赶快改变饮食方式与生活习惯，并开始做运动。危险指数：5",            
			},{
				"biao": "D",
				"t1": "脂肪率在30%以上",
				"t2": "说明你身体的脂肪率在30%以上。你体内已经囤积了多余的脂肪，再不采取行动的话，你会越来越胖。危险指数：8",            
			}];
            document.body.className = "";
			function tarShare(score){
				  $('#tips').show();
		var	mebtnopenurl = basedns+"/test/"+spid+"/result.html?s="+score;
		WeixinJSBridge.call("showOptionMenu");
				  
			    //var url = dataForWeixin.url+"list/share.html?spid=10-25-4&s=" +score+"&t=" + encodeURIComponent(dataForWeixin.title) + "&d=" +encodeURIComponent(dataForWeixin.desc) ;
				//location.href = url;
				return false;
			}
			function showAns(ans){
				ans = ans-1;
				if(ans<0 || ans>5){
					ans = 1;
				}
				$("#sans").show();
				$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
				$("#sec").html(ylist[ans].t2);
				shareCount(spid);
				scoreCount(spid,ans);
			}
			function testEnd() {
				if (fen >= 80) {
					var scores = 4;
				} else if (fen >=50) {
					var scores = 3;
				} else if (fen >=20) {
					var scores = 2;
				} else {
					var scores = 1;
				}
				tarShare(scores);
			}
 