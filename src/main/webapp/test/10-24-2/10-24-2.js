///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测测你是《水浒传》中的哪个人物？",
desc: "很准的呦,都来试试吧"
};
		document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {WeixinJSBridge.call('hideOptionMenu');});
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
                vm.arr = [
                    {
                        type: "hello",
                        text: "来测测你是水浒传里的哪个人吧？是这些英雄人物呢…还是妻妾成群、依然喜欢走街逛巷嫖宿偷情的西门庆；抑或是那妖冶风骚、耐不住寂寞的潘金莲",
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
                        text: "比起循规蹈矩但有理可据的常规工作，你更喜欢去做些含有风险性但收益可观的创造性活动。",
                        select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[2];
                                    });
                                }
                            }, {
                                text: "不是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[3];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 2,
                        text: "当你对一个约会觉得放心时，你偏向谈论：",
                        select: [
                             {
                                 text: "未来，关于改进或发明事物和生活的种种可能性。例如，你也许会谈论一个新的科学发明，或一个更好的方法来表达你的感受。",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[4];
                                     });
                                 }
                             }, {
                                 text: "实际的、具体的、关于“此时此地”的事物。例如，你也许会谈论品酒的好方法，或你即将要参加的新奇旅程。",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[5];
                                     });
                                 }
                             }
                        ]
                    }, {
                        type: "select",
                        id: 3,
                        text: "你认为你更偏向于：",
                        select: [
                          {
                              text: "强势进取，志在必得。",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[6];
                                  });
                              }
                          }, {
                              text: "保守稳健，居安思危。",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[7];
                                  });
                              }
                          }
                        ]
                    }, {
                        type: "select",
                        id: 4,
                        text: "你认为哪种约会形式是你更能欣然接受的：",
                        select: [
                             {
                                 text: "事先知道约会的行程：要去哪里、有谁参加、你会在那里多久、该如何打扮。",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[8];
                                     });
                                 }
                             }, {
                                 text: "让约会自然的发生，不做太多事先的计划。",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[9];
                                     });
                                 }
                             } 
                        ]
                    }, {
                        type: "select",
                        id: 5,
                        text: "你会替不是自己的过错所造成的损失承担责任么：",
                        select: [
                            {
                                text: "会根据形势考虑是否委曲求全。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[10];
                                    });
                                }
                            }, {
                                text: "痛恨被人冤枉，绝不会做替罪羔羊。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[9];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 6,
                        text: "在与外部环境交流的过程中，你更喜欢：",
                        select: [
                            {
                                text: "下定决心并且做出最后肯定的结论。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[10];
                                    });
                                }
                            }, {
                                text: "放宽你的选择面并持续收集信息。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[9];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 7,
                        text: "你倾向通过以下哪种方式收集信息：",
                        select: [
                            {
                                text: "你对有可能发生之事的想象和期望。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[10];
                                    });
                                }
                            }, {
                                text: "你对目前状况的实际认知。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[15];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 8,
                        text: "如果要你以牺牲健康为代价，换取数量可观的金钱或者荣誉，你会如何抉择：",
                        select: [
                           {
                               text: "宁可透支身体和精力，也要过上富足或者荣耀的生活。",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[16];
                                   });
                               }
                           }, {
                               text: "身体是革命的本钱，如果太多的金钱名利会令人疲劳损害健康，那我甘愿放弃那些不必要的东西。",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[17];
                                   });
                               }
                           }
                        ]
                    },
                   {
                        type: "select",
                        id: 9,
                        text: "在事态的发展进程中，你会如何把握主动权：",
                        select: [
                           {
                               text: "可以控制的话，会考虑把主动权紧握在手。",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[13];
                                   });
                               }
                           }, {
                               text: "顺其自然，即便被动也可以应付自如。",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[12];
                                   });
                               }
                           }
                        ]
                    },
                     {
                        type: "select",
                        id: 10,
                        text: "你喜欢独自旅行：",
                        select: [
                           {
                               text: "是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[11];
                                   });
                               }
                           }, {
                               text: "不是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[14];
                                   });
                               }
                           }
                        ]
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
                    }, {
                        type: "result",
                        id: 15
                    }, {
                        type: "result",
                        id: 16
                    }, {
                        type: "result",
                        id: 17
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
                        tarShare((newval.id-10));
						return false;
                    };
                })
            });
			var ylist = [{
				"biao": "A",
				"t1": "宋江",
				"t2": "你是一个富有志向而又深谋远虑的人，喜欢为自己制定高瞻远瞩的长远目标，为实现 最终的胜利甘愿选择隐忍的生活方式，不管过程有多艰辛多漫长你都甘之如饴。 新版电视剧宋江扮演者张涵予，据传网游水浒传张涵予也参与了制作！",      
			},{
				"biao": "B",
				"t1": "孙二娘",
				"t2": "你善良、开朗并带有一种阳光的气质，热忱而富有亲和力的性格是你最吸引人的地方 。你喜欢为别人服务，有着旺盛的公益心，坚信付出本身就意味着回报。",            
			},{
				"biao": "C",
				"t1": "潘金莲",
				"t2": "你带有若即若离的神秘感，往往在悄无声息之中出奇制胜。你看似随遇而安，实则有着敏锐的直觉，细心洞察着身边的大事小情。",            
			},{
				"biao": "D",
				"t1": "鲁智深",
				"t2": "你随性而带点机灵，洒脱但不失心机，崇尚顺其自然。你毫无野心，悄然而立，这不是漠然，而是涵养。",            
			},{
				"biao": "E",
				"t1": "林冲",
				"t2": "你斯文有礼，谦逊有加，是个不可多得的有修养的人。你喜欢无拘无束的自由，又谙熟能屈能伸之奥义，永远保持内心的纯净，却也能得心应手的游走在理想和现实之间",            
			},{
				"biao": "F",
				"t1": "武松",
				"t2": "你是一个坚定的理想主义者，笃信于绝对的力量，富有冒险精神，对于新鲜事物跃跃欲试，时刻保持着旺盛的精力与活力。",            
			},{
				"biao": "G",
				"t1": "西门庆",
				"t2": "你意气风发，锐不可当，喜欢向困难发起挑战，有着誓死拼搏的雄心和霸气。你对自己很有自信，擅长组织事务，喜欢有秩序，习惯凡事亲历亲为，你热忱的心意可以融化坚冰。",            
			}];
            document.body.className = "";
			function tarShare(score){
				$('#tips').show();
				var	mebtnopenurl = "http://"+basedns+"/test/"+spid+"/result.html?s="+score;
				WeixinJSBridge.call("showOptionMenu");
				  
				return false;
			}
			function showAns(ans){
				ans = ans-1;
				if(ans<0 || ans>6){
					ans = 1;
				}
				$("#sans").show();
				$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
				$("#sec").html(ylist[ans].t2);
			}
			    