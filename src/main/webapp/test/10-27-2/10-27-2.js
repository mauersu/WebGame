///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "你把金钱看的有多重要？",
desc: "很准的呦,都来试试吧"
};

            var model = avalon.define("test", function (vm) {
                vm.arr = [
                    {
                        type: "hello",
                        text: "俗话说“有钱能使鬼推磨”，那么你把金钱看的有多重要呢？快来测试一下就知道了！",
                        select: [
                            {
                                text: "开始测试",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[1];
                                        model.result.sex = 0;
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 1,
                        text: "假设你驾着一辆轿车正要进入隧道，当过完隧道后，你觉得会是什么风景呢？",
                        select: [
                            {
                                text: "小村庄",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[2];
                                    });
                                }
                            }, {
                                text: "山",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[3];
                                    });
                                }
                            }, {
                                text: "又一个隧道",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[4];
                                    });
                                }
                            }, {
                                text: "海边",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[5];
                                    });
                                }
                            }, {
                                text: "枫树林",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[6];
                                    });
                                }
                            }
                            
                         
                        ]
                    },
                    {
                        type: "result",
                        id: 2
                    }, {
                        type: "result",
                        id: 3
                    }, {
                        type: "result",
                        id: 4
                    }, {
                        type: "result",
                        id: 5
                    }, {
                        type: "result",
                        id: 6
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
                        tarShare((newval.id-1));
						return false;
                    };
                })
            });

			var ylist = [{
				"biao": "A",
				"t1": "你是钱的管理者",
				"t2": "很朴素又很不耀眼，可是却很实在，知道如何运用钱，也懂得储蓄之道，不会任意花钱，对每一分钱的花用，都能够详加计划，也不喜欢玩乐的事，只喜欢质朴的生活，所以会被人认为很小气，也会因此而失掉赚钱的机会，改变一下自己略小气的脾气，对你很有帮助。",      
			},{
				"biao": "B",
				"t1": "不懂节俭的你",
				"t2": "很会存钱，看起来好像是个不懂节俭的人，但常在不知不觉的情形下，存了很多钱，而且方法也很合理。你对金钱的态度，认为该花时就不该太吝啬，但不用花的钱，你也不会花，是个心胸相当大的人。",            
			},{
				"biao": "C",
				"t1": "对钱相当敏锐的你",
				"t2": "个性强，很能得人信赖的人，对钱的感觉度敏锐，对于理财技资的经验相当丰富，很擅长投资，认为与其一点一点地存，不如大量的技资，赚取更多的金钱。投资在股票、奖券、赌博等，会让你赚取很多的钱，但相对的，你也会付出相当多的金额，如果能善加利用，好好储蓄，钱会像滚雪球一样，愈滚愈大。",            
			},{
				"biao": "D",
				"t1": "钱是要用来花的",
				"t2": "在你的观念里，认为钱是要用来花的，而不是用来存的，所以，只要是你想要的东西，就不会计较金钱而非买不可。你赚多少钱就会花多少，不会把钱留下来，又加上你的审美观很丰富，所以买的东西价位都相当高。你的个性稍微有点爱好虚荣，所以要特别注意，同时要改掉浪费的坏习惯。",            
			},{
				"biao": "E",
				"t1": "你对钱很不在意",
				"t2": "你是个很浪漫的人，生活态度也像梦般虚幻。对钱很不在意，只有在感觉钱是很重要的时候，才会加以储蓄。对金钱的运用漫不经心，常会丢掉钱包，借给别人的钱也常常会忘记。由于你浪漫的个性，所以不要等到要救急时才存钱，更要有计划的管理钱财，这样对你才会有帮助。",            
			}	];
            document.body.className = "";

	
function showAns(ans){
				ans = ans-1;
				if(ans<0 || ans>5){
					ans = 1;
				}
				$("#sans").show();
				$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
				$("#sec").html(ylist[ans].t2);
						
				}