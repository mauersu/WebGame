///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测测你的未来“钱途”怎么样？",
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
                        text: "未来的你是个普通青年，还是个富有青年呢？每个人的性格里都会有一些成为富翁的潜质。比如毅力、坚强、聪敏，看看你有什么吧！",
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
                    },  {
                        type: "select",
                        id: 1,
                        text: "有没有朋友向你借了钱之后，没有还你的？",
                        select: [
                            {
                                text: "有",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[2];
                                    });
                                }
                            }, {
                                text: "没有",
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
                        text: "不管赚多少钱，你也不会满足吗？",
                        select: [
                             {
                                 text: "是",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[3];
                                     });
                                 }
                             }, {
                                 text: "不是",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[4];
                                     });
                                 }
                             }
                        ]
                    }, {
                        type: "select",
                        id: 3,
                        text: "你的兴趣爱好太广泛，以至于总是朝三暮四，没有一直让你坚持的吗？",
                        select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[4];
                                    });
                                }
                            }, {
                                text: "不是",
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
                        id: 4,
                        text: "你曾经在追逐梦想的路上被现实打击得很惨吗？",
                        select: [
                           {
                               text: "是的",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[6];
                                   });
                               }
                           }, {
                               text: "不是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[5];
                                   });
                               }
                           }, {
                               text: "没有梦想所以没有打击",
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
                        id: 5,
                        text: "虽然现在很穷，但是你觉得你以后总是会有很多钱的吗？",
                        select: [
                           {
                               text: "是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[7];
                                   });
                               }
                           }, {
                               text: "不是，很难说",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[6];
                                   });
                               }
                           }
                        ]
                    }, {
                        type: "select",
                        id: 6,
                        text: "你是一个很有偏财运的人吗？",
                        select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[8];
                                    });
                                }
                            }, {
                                text: "不是",
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
                        text: "你很害怕捉襟见肘的感觉吗？",
                        select: [
                            {
                                text: "怕，非常害怕",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[9];
                                    });
                                }
                            }, {
                                text: "一般般",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[8];
                                    });
                                }
                            }, {
                                text: "不害怕",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[10];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 8,
                        text: "你觉得自己的人生就是为了赚钱而存在的吗？",
                        select: [
                           {
                               text: "是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[9];
                                   });
                               }
                           }, {
                               text: "不是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[10];
                                   });
                               }
                           }
                        ]
                    },
                   {
                       type: "select",
                       id: 9,
                       text: "如果你在其他地方的钱赚得多，你会考虑不去参加一个正式的工作吗？",
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
                                       model.item = model.arr[12];
                                   });
                               }
                           }
                       ]
                   },
                     {
                         type: "select",
                         id: 10,
                         text: "读书时代，你一共打过几份工？",
                         select: [
                            {
                                text: "一两",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[11];
                                    });
                                }
                            }, {
                                text: "三份以上",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[12];
                                    });
                                }
                            }, {
                                text: "没打过",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[13];
                                    });
                                }
                            }
                         ]
                     },
                    {
                        type: "select",
                        id: 11,
                        text: "你在朋友之中，赚钱是赚得算多的吗？",
                        select: [
                           {
                               text: "是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[13];
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
                        type: "select",
                        id: 12,
                        text: "很赞同金钱是万恶之源吗？",
                        select: [
                           {
                               text: "是的",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[14];
                                   });
                               }
                           }, {
                               text: "不赞同",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[15];
                                   });
                               }
                           }
                        ]
                    },
                   {
                       type: "select",
                       id: 13,
                       text: "目前为止，你是不是觉得自己连个安慰奖也没中过？",
                       select: [
                           {
                               text: "是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[15];
                                   });
                               }
                           }, {
                               text: "不是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[16];
                                   });
                               }
                           }
                       ]
                   },
                 {
                     type: "select",
                     id: 14,
                     text: "其实自己有时候跟身边的很多人是格格不入的吗？",
                     select: [
                           {
                               text: "是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[16];
                                   });
                               }
                           }, {
                               text: "不是",
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
                        id: 15,
                        text: "想到下面的谁，你的赚钱动力会足一点？",
                        select: [
                             {
                                 text: "爱人",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[16];
                                     });
                                 }
                             }, {
                                 text: "家人",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[17];
                                     });
                                 }
                             }
                             , {
                                 text: "我自己",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[19];
                                     });
                                 }
                             }
                        ]
                    },
                  {
                      type: "select",
                      id: 16,
                      text: "对于未来的赚钱规划，你相当地有信心吗？",
                      select: [
                             {
                                 text: "是的",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[18];
                                     });
                                 }
                             }, {
                                 text: "不是 ",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[19];
                                     });
                                 }
                             }
                             , {
                                 text: "有时候会",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[20];
                                     });
                                 }
                             }
                      ]
                  },
                  {
                      type: "select",
                      id: 17,
                      text: "在商店，你看上的东西，总是超过你的预算吗？",
                      select: [
                             {
                                 text: "是的",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[18];
                                     });
                                 }
                             }, {
                                 text: "不是 ",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[20];
                                     });
                                 }
                             }
                             , {
                                 text: "有时候会",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[25];
                                     });
                                 }
                             }
                      ]
                  },
                  {
                      type: "select",
                      id: 18,
                      text: "如果在地铁里听到一首很好听的流浪歌手唱的歌，可是你没有零钱，你会？",
                      select: [
                            {
                                text: "取一张最小值的给歌手",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[21];
                                    });
                                }
                            }, {
                                text: "先不给，下回再给",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[24];
                                    });
                                }
                            }
                            , {
                                text: "去地铁便利站买点东西找零",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[22];
                                    });
                                }
                            }
                      ]
                  }, {
                      type: "select",
                      id: 19,
                      text: "如果你有一份巨额的钱财，你会？",
                      select: [
                             {
                                 text: "周游世界",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[25];
                                     });
                                 }
                             }, {
                                 text: "去做一些想做的事情",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[22];
                                     });
                                 }
                             }
                             , {
                                 text: "马上去投资，钱生钱",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[23];
                                     });
                                 }
                             }
                      ]
                  },
                  {
                      type: "select",
                      id: 20,
                      text: "如果此时你的眼前是马赛克的墙面或地面装修，你觉得面前的建筑会是？",
                      select: [
                            {
                                text: "厕所",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[24];
                                    });
                                }
                            }, {
                                text: "大街地面上",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[23];
                                    });
                                }
                            }
                            , {
                                text: "一栋建筑的外墙装修",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[21];
                                    });
                                }
                            }
                      ]
                  },
                    {
                        type: "result",
                        id: 21
                    }, {
                        type: "result",
                        id: 22
                    }, {
                        type: "result",
                        id: 23
                    }, {
                        type: "result",
                        id: 24
                    }, {
                        type: "result",
                        id: 25
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
                        tarShare((newval.id-20));
						return false;
                    };
                })
            });


			var ylist = [{
				"biao": "A",
				"t1": "有无忧的潜质",
				"t2": "你对现有的钱财状况颇感舒适，即使你目前不会拥有太多的存款与现金，你对未来的财富，仍然是抱着乐观的态度的。因为你是一个很有理财头脑的人，在赚钱的门道上也很有自己的一套。你相信自己可以完全控制成功的机会，并对成功地处理金钱问题深具信心。这样的你，只要付出自己的努力，就一定会有所回报。你有富贵的潜质，在未来的日子里，你应该不会为了金钱而烦心万分。",      
			},{
				"biao": "B",
				"t1": "没钱了再说",
				"t2": "你是一个对金钱没有多少概念的人，觉得够花就行，而幸运的你，在财运方面也有一定的好运气。不过这种幸运保得了你一时，却不可能保得你一世。等到中年而立了，各种需要花钱的地方都在向你伸手，你不得不开始觉得，哎，没有钱的确是一件麻烦事情。不过，你在那个时候仍旧没有什么赚大钱的途径，所以即使有所感触，但对金钱危机的缓解也没有太大的帮助。如果你能顺利渡过难关，在你渡过难关之后，你又会觉得钱什么的够用就好了。你总是会等到急需用钱的时候才会开始觉得忧心。",            
			},{
				"biao": "C",
				"t1": "不需要忧心",
				"t2": "只能说，你的命实在是太好了！虽然你个人的赚钱能力并不是太高。但是命好的你，有一个好的家庭，有一堆有钱的亲戚，还有许多对你忠肝义胆的朋友，更重要的是，你的对象也是奋斗型的人，会为你们的小日子闯出一片天……因此，即使30岁之后，有一段时间，你会因为钱的事情而抓破脑袋，你也不会真的跌倒在这一个难关。因为你的好命让很多人轻易就可以帮助你。因此，即使自己赚得不多，也是不需要为了钱而忧心的。",            
			},{
				"biao": "D",
				"t1": "你会为钱烦恼",
				"t2": "爱钱！谁不爱？你也是的，并且毫不忌讳亲口承认这一点。但是你爱钱，钱却未必爱你。其实你是一个很努力的人，尽管有时候自己努力地去赚钱，但运气总是差那么一点点，这也使得你总会觉得命运是如此不公平！同时，30岁之后，许多地方都会要花大钱，而自己的努力得来的，虽然不至于没有，但也是杯水车薪，远远不够用。看来30岁之后，你还是会为了钱财而感到忧心的啦。",            
			},{
				"biao": "E",
				"t1": "会有烦恼，但是来得比较迟",
				"t2": "你目前的经济能力让你买得起你想买的东西，在三十岁的时候，甚至还会让人小小地羡慕一把。但是钱财这种东西就是流动的，它不会永远陪伴着你。可能三十岁的时候，你还不必为了钱的事情担心，因为你还有一定的积蓄。但是你年龄更大一点的时候，可能会发现钱越来越难赚，甚至还可能会遇到破财的事情。其实这种隐患是由你年轻时花钱大手大脚埋下的。所以务必在年轻的时候就要管好自己的口袋与信用卡，可不要把自己的青春埋葬在挥霍之中哦。不然，它年老时会向你讨还的。",            
			}];
            document.body.className = "";
			function tarShare(score){
				  $('#tips').show();
				var	mebtnopenurl = "http://"+basedns+"/test/"+spid+"/result.html?s="+score;
				WeixinJSBridge.call("showOptionMenu");
				  
			    //var url = dataForWeixin.url+"list/share.html?spid="+spid+"&s=" +score+"&t=" + encodeURIComponent(dataForWeixin.title) + "&d=" +encodeURIComponent(dataForWeixin.desc) ;
				//location.href = url;
				return false;
			}
			function showAns(ans){
				ans = ans-1;
				if(ans<0 || ans>4){
					ans = 1;
				}
				$("#sans").show();
				$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
				$("#sec").html(ylist[ans].t2);
							shareCount(spid);
				scoreCount(spid,ans);
				
			}