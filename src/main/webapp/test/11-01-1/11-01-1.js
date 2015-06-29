///////////////first setting//////////////////////////////
var basedns = location.hostname+"/game";
var mebtnopenurl = "http://"+basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测测什么穿衣风格比较适合你，超准的测试!",
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
						text: "你不经意的服饰选择，展现了自己的风格与时尚观，更透露了你的性格秘密!怎么穿最适合你?快快完成这个测验，开始探索你的风格!",
						text1: "点击开始测试咯~",
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
                        text: "你的脸型比较接近哪一种？ ",
                        select: [{
                            text: " 圆型或瓜子型",
                            active: false,
                            error: false,
                            tap: function (ele, select) {
                                tap(ele, select,
								function () {
								    model.item = model.arr[3];
								});
                            }
                        },
						{
						    text: "方型或长条型",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[2];
								});
						    }
						}]
                    },
					{
					    type: "select",
					    id: 2,
					    text: "嘴唇的颜色是？",
					    select: [
                         {
                             text: "偏无色或淡淡的粉红色 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[6];
                                 });
                             }
                         },
                         {
                             text: "偏红色或柔和的桃红色",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[5];
                                 });
                             }
                         }]
					},
					{
					    type: "select",
					    id: 3,
					    text: "和深红比起来，比较喜欢有点淡淡的粉红色？",
					    select: [
                         {
                             text: "是 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[7];
                                 });
                             }
                         },
                         {
                             text: "不是 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[4];
                                 });
                             }
                         }]
					},
					{
					    type: "select",
					    id: 4,
					    text: "银色饰品和金色饰品中，比较喜欢金色的饰品？",
					    select: [
                          {
                              text: "是 ",
                              active: false,
                              error: false,
                              tap: function (ele, select) {
                                  tap(ele, select,
                                  function () {
                                      model.item = model.arr[8];
                                  });
                              }
                          },
                          {
                              text: "不是",
                              active: false,
                              error: false,
                              tap: function (ele, select) {
                                  tap(ele, select,
                                  function () {
                                      model.item = model.arr[5];
                                  });
                              }
                          }]
					},
					{
					    type: "select",
					    id: 5,
					    text: "眼珠的颜色是哪一种？",
					    select: [
                          {
                              text: "黑色或深咖啡色 ",
                              active: false,
                              error: false,
                              tap: function (ele, select) {
                                  tap(ele, select,
                                  function () {
                                      model.item = model.arr[9];
                                  });
                              }
                          },
                          {
                              text: "带点绿色的黑或浅咖啡色",
                              active: false,
                              error: false,
                              tap: function (ele, select) {
                                  tap(ele, select,
                                  function () {
                                      model.item = model.arr[8];
                                  });
                              }
                          }]
					},
					{
					    type: "select",
					    id: 6,
					    text: "不常被人说比实际年龄成熟，反而常被人说和年龄相仿或是更小？",
					    select: [{
					        text: "是的",
					        active: false,
					        error: false,
					        tap: function (ele, select) {
					            tap(ele, select,
								function () {
								    model.item = model.arr[5];
								});
					        }
					    },
                         {
                             text: "不是",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[10];
 
                                 });
                             }
                         }]
					},
					{
					    type: "select",
					    id: 7,
					    text: "比起夏天的制服，你比较喜欢冬天的衣服？",
					    select: [
                          {
                              text: "是的 ",
                              active: false,
                              error: false,
                              tap: function (ele, select) {
                                  tap(ele, select,
                                  function () {
                                      model.item = model.arr[8];
                                  });
                              }
                          },
                          {
                              text: "不是",
                              active: false,
                              error: false,
                              tap: function (ele, select) {
                                  tap(ele, select,
                                  function () {
                                      model.item = model.arr[11];
                                  });
                              }
                          }]
					},
					{
					    type: "select",
					    id: 8,
					    text: "你比较适合短发或长发？",
					    select: [
                         {
                             text: "短发 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[9];
                                 });
                             }
                         },
                         {
                             text: "长发",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[12];
                                 });
                             }
                         }]
					},
                    {
                        type: "select",
                        id: 9,
                        text: "一晒太阳，脸不会变红，而会马上变黑。",
                        select: [
                         {
                             text: "是的 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[10];
                                 });
                             }
                         },
                         {
                             text: "不是",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[13];
                                 });
                             }
                         }]
                    },
                    {
                        type: "select",
                        id: 10,
                        text: "你哪一种衣服比较多？",
                        select: [{
                            text: "衬衫",
                            active: false,
                            error: false,
                            tap: function (ele, select) {
                                tap(ele, select,
								function () {
								    model.item = model.arr[14];
								});
                            }
                        },
						{
						    text: "针织毛衣",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[13];
								});
						    }
						}]
                    },
                    {
                        type: "select",
                        id: 11,
                        text: "天气一变冷，你的脸就会变红？",
                        select: [{
                            text: "是的",
                            active: false,
                            error: false,
                            tap: function (ele, select) {
                                tap(ele, select,
								function () {
								    model.item = model.arr[15];
								});
                            }
                        },
						{
						    text: "不是",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[12];
								});
						    }
						}]
                    },
                    {
                        type: "select",
                        id: 12,
                        text: "仔细一看你的头发，好像有点带咖啡色？",
                        select: [
                          {
                              text: " 是的 ",
                              active: false,
                              error: false,
                              tap: function (ele, select) {
                                  tap(ele, select,
                                  function () {
                                      model.item = model.arr[16];
                                  });
                              }
                          },
                          {
                              text: "不是",
                              active: false,
                              error: false,
                              tap: function (ele, select) {
                                  tap(ele, select,
                                  function () {
                                      model.item = model.arr[15];
                                  });
                              }
                          }]
                    }, {
                        type: "select",
                        id: 13,
                        text: "常有人说你适合黑衣服，或是你很喜欢而常常穿？",
                        select: [
                         {
                             text: "是的 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[17];
                                 });
                             }
                         },
                         {
                             text: "不是 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[12];
                                 });
                             }
                         }]
                    },
                    {
                        type: "select",
                        id: 14,
                        text: "你的五官是属于？",
                        select: [
                         {
                             text: "很有女孩味、温柔的脸 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[13];
                                 });
                             }
                         },
                         {
                             text: "像小男孩般、很有个性的脸 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[18];
                                 });
                             }
                         }]
                    },
                    {
                        type: "select",
                        id: 15,
                        text: "你认为你的个性比较属于哪一种？",
                        select: [
                         {
                             text: "开朗活泼 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[19];
                                 });
                             }
                         },
                         {
                             text: "成熟稳重 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[16];
                                 });
                             }
                         }]
                    },
                    {
                        type: "select",
                        id: 16,
                        text: "脸颊的颜色是？",
                        select: [
                         {
                             text: "没有什么颜色 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[20];
                                 });
                             }
                         },
                         {
                             text: "平常就是粉红色 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[17];
                                 });
                             }
                         }]
                    },
                    {
                        type: "select",
                        id: 17,
                        text: "你的腿型接近哪一种？",
                        select: [
                         {
                             text: "修长而笔直的长腿 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[21];
                                 });
                             }
                         },
                         {
                             text: "略粗的双腿 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[18];
                                 });
                             }
                         }]
                    },
                    {
                        type: "select",
                        id: 18,
                        text: "你比较喜欢以下哪种打扮？",
                        select: [
                         {
                             text: "中性化的打扮 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[22];
                                 });
                             }
                         },
                         {
                             text: " 充满女人味的打扮 ",
                             active: false,
                             error: false,
                             tap: function (ele, select) {
                                 tap(ele, select,
                                 function () {
                                     model.item = model.arr[21];
                                 });
                             }
                         }]
                    },
                    {
                        type: "result",
                        id: 19
                    }, {
                        type: "result",
                        id: 20
                    }, {
                        type: "result",
                        id: 21
                    }, {
                        type: "result",
                        id: 22
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
                        tarShare((newval.id-18));
						return false;
                    };
                })
            });
	
var ylist = [{
				"biao": "A",
				"t1": "选择像春天飞舞的蝴蝶的可爱装扮！",
				"t2": "你给人的印象是很可爱的、很开朗的，所以比较适合年轻、充满朝气的打扮，像是粉色系的衣服，组合缀有蕾丝花边的可爱洋A装，如果再配上一双大头娃娃鞋，就会变成很出色的装扮了。大多数的A型人不管几岁看起来都很年轻，所以即使年纪大了也很适合可爱的装扮喔！",      
			},{
				"biao": "B",
				"t1": "搭配充满女人味的套装让你更出色！",
				"t2": "你给人的感觉是气质高雅而有女人味的，是不是有很多年轻的男孩或女孩都很仰慕你呢？所以，以剪裁合身、可以展现你曼妙曲线的服装，或是套装，再配上一双有点跟的尖头少女鞋，这种打扮相当适合你。不过其实你也很适合各种不同的打扮，是这四种当中最吃香的类型。",            
			},{
				"biao": "C",
				"t1": "不妨选择成熟稳重的高雅装扮吧！",
				"t2": "你这类型的人大多拥有像陶器般光滑的美丽肌肤，如果能搭配以衣料较为柔软，类似丝质或绸缎为主的服装，鞋子则以可以带出整体感的高跟鞋为主，将能让你的肤色衬托的更美。 你看起来虽比实际年龄成熟，但却也是被认为好女人最多的类型，不妨就从现在开始改变吧！",            
			},{
				"biao": "D",
				"t1": "和大权在的人打交道可以通财路",
				"t2": "对于脸色略为白皙透明的你来说，最适合充满帅气的服装及颜色的打扮了，你可以说是现代版“酷妹”的最佳代表人物。 因此，像是比较中性化的西装套装，或是极帅气的衬衫配领带的搭配，如果再配上一双酷劲十足的咖啡色小牛皮马靴，一定会给旁人眼睛一亮的感觉。",            
			}];
            document.body.className = "";
			function tarShare(score){
				  $('#tips').show();
		mebtnopenurl = "http://"+basedns+"/test/"+spid+"/result.html?s="+score;
		WeixinJSBridge.call("showOptionMenu");
				  
				return false;
			}
		function showAns(ans){
				ans = ans-1;
				if(ans<0 || ans>3){
					ans = 1;
				}
				$("#sans").show();
				$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
				$("#sec").html(ylist[ans].t2);
			//	shareCount(spid);
			//	scoreCount(spid,ans);
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
