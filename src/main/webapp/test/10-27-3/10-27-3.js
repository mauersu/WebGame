///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测测你的幸福指数有多高？",
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
                        text: "马上要踏进2015“大门”，当然要样样都称心又如意！当然无论哪样，只要把握好属于自己的那份小幸福也是相当不错了呢~马上来做个测试看看你的幸福指数有多高吧。",
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
                        text: "当欢聚一堂的时候，当朝朝暮暮的时候，你觉得幸福不可说，说出来了幸福就会消失吗？",
                        select: [
                            {
                                text: "是的",
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
                                        model.item = model.arr[2];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 2,
                        text: "如果在这个选择当中自己认为事业方面的筹码要比爱情的筹码高的多的时候，怎样选择？如果在事业与爱情之间选择一下，你还是会选？",
                        select: [
                           {
                               text: "事业",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[4];
                                   });
                               }
                           }, {
                               text: "爱情",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[3];
                                   });
                               }
                           }
                        ]
                    }, {
                        type: "select",
                        id: 3,
                        text: "常常觉得，别人信手拈来的幸福，轮到你了总是觉得遥不可及的吗？",
                        select: [
                          {
                              text: "不是",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[5];
                                  });
                              }
                          }, {
                              text: "是的",
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
                        id: 4,
                        text: "人生必须经历一些事情来历练自己，但往往也不如人意，如果你总是运气很差，你的心态是？",
                        select: [
                           {
                               text: "消极",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[5];
                                   });
                               }
                           }, {
                               text: "想办法转运",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[6];
                                   });
                               }
                           }, {
                               text: "我是一个很开朗的人",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[6];
                                   });
                               }
                           }
                           , {
                               text: "淡定，习以为常了",
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
                        text: "你是一个很容易感怀伤时的人吗？",
                        select: [
                          {
                              text: "不是",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[6];
                                  });
                              }
                          }, {
                              text: "是的",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[7];
                                  });
                              }
                          },{
                              text: "有时候是，有时候不是",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[6];
                                  });
                              }
                          }, 
                        ]
                    }, {
                        type: "select",
                        id: 6,
                        text: "吃饭的时候，面前摆着一杯果汁与一份冰淇淋，你会选哪种？",
                        select: [
                           {
                               text: "果汁",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[8];
                                   });
                               }
                           }, {
                               text: "冰淇淋",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[9];
                                   });
                               }
                           } ,{
                               text: "都不爱吃",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[8];
                                   });
                               }
                           }
                        ]
                    }, {
                        type: "select",
                        id: 7,
                        text: "不开心的时候，你会找找谁排解？",
                        select: [
                          {
                              text: "死党",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[9];
                                  });
                              }
                          }, {
                              text: "其他人",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[8];
                                  });
                              }
                          },  {
                              text: "家人",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[8];
                                  });
                              }
                          },{
                              text: "谁也不找",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[10];
                                  });
                               }
                           }, {
                              text: "好朋友",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[8];
                                  });
                              }
                           }
                        ]
                    }, {
                        type: "select",
                        id: 8,
                        text: "有时候你宁可攒着钱买一件好的衣服，也不愿意买质量差的衣服吗？",
                        select: [
                           {
                               text: "不是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[11];
                                   });
                               }
                           }, {
                               text: "是的",
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
                        text: "你觉得让你选择跟恋人要去的一个公共场所，最好是？",
                        select: [
                          {
                              text: "公园",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[13];
                                  });
                              }
                          }, {
                              text: "电影院",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[11];
                                  });
                              }
                          }, {
                              text: "KTV",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[12];
                                  });
                              }
                          }, {
                              text: "户外",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[11];
                                  });
                              }
                          }
                        ]
                    },
                     {
                        type: "select",
                        id: 10,
                        text: "你不喜欢的一位同事要结婚了，邀请了你去参加其婚礼，你会去吗？",
                        select: [
                          {
                              text: "还是去吧",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[13];
                                  });
                              }
                          }, {
                              text: "不会，借口推托",
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
                        id: 11,
                        text: "你很容易就把自己陷在某种纠结里了吗？",
                        select: [
                          {
                              text: "不是",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[15];
                                  });
                              }
                          }, {
                              text: "是的",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[14];
                                  });
                              }
                          }, {
                              text: "时常是",
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
                        text: "周末如果有时间，你会选择哪种方式陪家人？",
                        select: [
                           {
                               text: "就呆在家里聊聊天",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[13];
                                   });
                               }
                           }, {
                               text: "陪他们去逛街",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[14];
                                   });
                               }
                           }
                           , {
                               text: "陪他们在公园散步",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[24];
                                   });
                               }
                           }
                        ]
                    },
                   {
                        type: "select",
                        id: 13,
                        text: "每当看到一对老年人在夕阳的辉映之中挽着手散步时，你的内心想法是？",
                        select: [
                          {
                              text: "感动",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[19];
                                  });
                              }
                          }, {
                              text: "期待",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[21];
                                  });
                              }
                          },  {
                              text: "伤感",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[21];
                                  });
                              }
                          }, {
                              text: "羡慕",
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
                        id: 14,
                        text: "合租的时候，你最不喜欢什么样的室友？",
                        select: [
                          {
                              text: "总是带很多朋友过来玩的",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[20];
                                  });
                              }
                          }, {
                              text: "不讲卫生的",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[15];
                                  });
                              }
                          }, {
                              text: "冷若冰霜的",
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
                        id: 15,
                        text: "如果你是女生，男友要送件礼物给你，你最希望他送你什么？",
                        select: [
                           {
                               text: "戒指",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[18];
                                   });
                               }
                           }, {
                               text: "服饰",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[17];
                                   });
                               }
                           }, {
                               text: "银行卡",
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
                        id: 16,
                        text: "其实，你是一个很容易满足的人吗？",
                        select: [
                          {
                              text: "不是，需要足够多的幸福",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[23];
                                  });
                              }
                          }, {
                              text: "是的，没有啥野心",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[25];
                                  });
                              }
                          }, {
                              text: "一般般",
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
                        id: 17,
                        text: "你经常会去城市的角落小巷子里搜寻一些便宜又地道美味的小吃吗？",
                        select: [
                          {
                              text: "几乎没去过",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[22];
                                  });
                              }
                          }, {
                              text: "不经常去",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[26];
                                  });
                              }
                          }, {
                              text: "会，经常去",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[27];
                                  });
                              }
                          }
                        ]
                    },
                    {
                        type: "result",
                        id: 18
                    }, {
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
                    }, {
                        type: "result",
                        id: 23
                    }, {
                        type: "result",
                        id: 24
                    }, {
                        type: "result",
                        id: 25
                    }, {
                        type: "result",
                        id: 26
                    }, {
                        type: "result",
                        id: 27
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
                        tarShare((newval.id-17));
						return false;
                    };
                })
            });
var ylist = [{
				"biao": "A",
				"t1": "幸福指数：78%，有爱即幸福",
				"t2": "一直在追求着一份真正爱情的你，其实离爱情也是最远的，在你的心中，只有找到了自己的爱情，才会变得幸福起来。其他的即便是有亲情温暖，有一帮子朋友嘻嘻哈哈在一起，日子过得也很快乐，但是爱情是却是无可替代的，缺少了爱情，幸福也将缺失掉一大半。所以如果明年，可以找到爱情，那么或许你才会感觉到幸福降临。",      
			},{
				"biao": "B",
				"t1": "幸福指数：31%，幸福是浮云",
				"t2": "曾经天真地以为，幸福就近在咫尺，只要自己伸出双手，就可以拥抱到他。可是一朝肥皂泡破灭，你才真正看清，原来幸福就像是天上飘着的浮云，看以看见，但也只能看到它越飘越远。经历了以前的种种，你越来越觉得自己看得清，幸福不过是浮云，即使是到了现在或以后，这种状况也不会有什么改变，倒不如不要有什么期盼地好。",            
			},{
				"biao": "C",
				"t1": "幸福指数：23%，幸福不存在",
				"t2": "所谓幸福，各人自有各的看法。而你对幸福，却早已经没有什么概念。越来越觉得，人生没有什么趣味的你，早就认定自己是得不到什么幸福的了，所以这日子过一天也就算一天吧。这种处于积极与消极之间的思想已经在你的心中根深蒂固了，除非以后，你真的感受到了前所未有的幸福畅快感觉，你才会认同这个世界上属于你的幸福会存在。",            
			},{
				"biao": "D",
				"t1": "我的幸福指数：47%，幸福在前方",
				"t2": "虽然你在过去的一年里遭遇了许多狗血的事情，但是不管怎么样，你始终相信着自己总有一天会变得越来越顺利，就如你坚信着自己总有一天会得到幸福一样。在你的自信与坚强之下，脚下的路即使目前还坷坎，但也会走走越平坦，幸福离自己也越来越近。乌云即将散去，迎接你的将是温暖灿烂的阳光。",            
			},{
				"biao": "E",
				"t1": "我的幸福指数：13%，幸福是什么",
				"t2": "幸福？请问什么是幸福？大概当别人提及这两个字的时候，你胸中的怒火便似乎要喷出来了，因为在你的心中，幸福什么的早就已经远离自己而去了。过去的经历让你已经变得不再相信什么幸福狗屁玩艺，幸福什么的就是注定要被丢进太平洋的，跟自己半毛钱关系也没有。所以在未来的一年里，还不如现实一些，追求着现实的人民币。",            
			},{
				"biao": "F",
				"t1": "我的幸福指数：43%，追求着幸福",
				"t2": "你是一个非常独立且聪明的人，你很清楚地知道自己想要的是什么，所以你会朝着这个目标，一步步奋进，或许在这之前，你注定是要经历一些风雨的，但是你相信在最后一定会幸福。接下来，你所追求的东西，或许还不能真的实现，但是不管怎么样你都会继续在路上努力，虽然看起来还会坎坷，但或许拼搏着的时候，也会有种成就的幸福感吧。",            
			},{
				"biao": "G",
				"t1": "我的幸福指数：50%，看淡的幸福",
				"t2": "看起来有些参透人生真悟的你，是有些通佛性参禅意的，对幸福的认识，也赞同所谓幸福都是相对于不幸来说的。对于平淡的日子之中不存在什么不幸，一切照旧，那么也将没有什么幸福可言。但是正是看得淡了，要求低了，对幸福的感知也越来越深。都说能吃是福，对你来说，身体健康，家人平安，你就幸福了。",            
			},{
				"biao": "H",
				"t1": "我的幸福指数：90%，物质小幸福",
				"t2": "你是一个相当注重物质生活的人，然而现代社会的变化常常让人无所适从，不断上涨的物价房价，却唯独不涨工资，这样压力之下的都市生活，难免也使你对自己目前的生活品质喜忧参半，接下来，也不会有所进步，不过好在，你会觉得目前的生活虽然与自己理想中的还是有一定距离，但也算不错了。",            
			},{
				"biao": "I",
				"t1": "我的幸福指数：65%，平淡的幸福",
				"t2": "目前来说，你的心境是成熟且平淡的，你知道很多事情并不是自己能够强求而来的，所以还不如就近选择，过着平平淡淡却不失幸福的日子。对幸福的定义，你也由之前追求的物质享受，变成了跟自己喜欢的人呆在一起，虽然也会柴米油盐地变得越来越平庸，但是倘若自己可以平静地享受，那么此时的自己就是幸福的。",            
			},{
				"biao": "J",
				"t1": "我的幸福指数：86%，努力要幸福",
				"t2": "有的人注定是要拥有有爱自己的人陪在身边，才会觉得幸福，但是也有的人，他才不会管什么爱情不爱情，爱情都是一阵风，刮过了就算了。不过，你也不是轻易会放弃自己的人，所以提及幸福二字，情路不顺的你，不管有没有爱情，都会让自己的生活过得有规律，去做喜欢做的事情，看喜欢的风景，吃好吃的食物，也许这也是一种幸福。",            
			}];
            document.body.className = "";
			function tarShare(score){
				  $('#tips').show();
				  mebtnopenurl = "http://" +basedns+"/test/"+spid+"/result.html?s="+score;
				  WeixinJSBridge.call('showOptionMenu');
				  
			    //var url = dataForWeixin.url+"list/share.html?spid="+spid+"&s=" +score+"&t=" + encodeURIComponent(dataForWeixin.title) + "&d=" +encodeURIComponent(dataForWeixin.desc) ;
				//location.href = url;
				return false;
			}
			function showAns(ans){
				ans = ans-1;
				if(ans<0 || ans>9){
					ans = 1;
				}
				$("#sans").show();
				$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
				$("#sec").html(ylist[ans].t2);
				shareCount(spid);
				scoreCount(spid,ans);
			}

