///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测试你被一见钟情的可能性？",
desc: "很准的呦,都来试试吧"
};

            var model = avalon.define("test", function (vm) {
                vm.arr = [
                    {
                        type: "hello",
                        text: "一见钟情，给我们一种“缘来是你”的亲切感。不过，如今的社会略显浮躁，真爱都不可信了，你还相信一见钟情吗？也许幸运的你，体验过电光石火、妙不可言、以目定情的瞬间，那么现在，你还有可能被一见钟情吗？",
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
                    },{
                        type: "select",
                        id: 1,
                        text: "你懂茶艺吗？",
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
                        text: "你对画画感兴趣吗？",
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
                        text: "你知道彼岸花实际上是什么吗？",
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
                        text: "你小时候练过书法吗",
                        select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[5];
                                    });
                                }
                            }, {
                                text: "不是",
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
                        id: 5,
                        text: " 若月色很好，你会想去赏月吗？",
                        select: [
                            {
                                text: "是",
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
                                        model.item = model.arr[7];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 6,
                        text: "你睡觉时会习惯性地缩成一只小猫一样的吗？",
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
                                text: "不是",
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
                        text: "你喜欢看美食节目吗？",
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
                        id: 8,
                        text: "你曾经离家出走过吗？",
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
                       text: "你更喜欢妈妈还是爸爸？",
                       select: [
                             {
                                 text: "妈妈",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[10];
                                     });
                                 }
                             }, {
                                 text: "爸爸",
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
                         text: "平时喜欢佩戴手表吗？",
                         select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[12];
                                    });
                                }
                            }, {
                                text: "不是",
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
                         id: 11,
                         text: "你觉得天空与大海，哪个更让你觉得广阔？",
                         select: [
                            {
                                text: "天空",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[13];
                                    });
                                }
                            }, {
                                text: "大海",
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
                         id: 12,
                         text: "作为一名女生，你认为你心中也有女神？",
                         select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[14];
                                    });
                                }
                            }, {
                                text: "不是",
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
                         text: "如果你玩乐时造一座房子，你会首选哪类房子来造？",
                         select: [
                            {
                                text: "沙滩房子",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[16];
                                    });
                                }
                            }, {
                                text: "冰雕房子",
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
                         id: 14,
                         text: "你更喜欢甜美可爱系的女生吗？",
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
                                        model.item = model.arr[15];
                                    });
                                }
                            }
                         ]
                     },
                     {
                         type: "select",
                         id: 15,
                         text: "你会在空间微博上晒一些自拍照吗？",
                         select: [
                           {
                               text: "是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[18];
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
                         id: 16,
                         text: "你觉得哪个季节跟家人一起旅行最佳？",
                         select: [
                            {
                                text: "春季",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[17];
                                    });
                                }
                            }, {
                                text: "夏季",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[18];
                                    });
                                }
                            }
                            , {
                                text: "秋季",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[19];
                                    });
                                }
                            }
                            , {
                                text: "冬季",
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
                         text: "若你在林中行走，听到有人抚琴，你觉得那个人是？",
                         select: [
                            {
                                text: "美丽女子",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[25];
                                    });
                                }
                            }, {
                                text: "中年雅士",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[23];
                                    });
                                }
                            }, {
                                text: "白发老翁",
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
                         id: 18,
                         text: "你认为一个女孩子去沙滩不能缺少哪一件服饰？",
                         select: [
                           {
                               text: "帽子",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[25];
                                   });
                               }
                           }, {
                               text: "长裙",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[21];
                                   });
                               }
                           }, {
                               text: "墨镜",
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
                         id: 19,
                         text: "若你是武侠导演，你会首选在哪里拍打斗戏？",
                         select: [
                          {
                              text: "竹林中",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[22];
                                  });
                              }
                          }, {
                              text: "沙漠里",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[23];
                                  });
                              }
                          }, {
                              text: "水面上",
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
                         id: 20,
                         text: "若你画一个会魔法的少女，你会把她的瞳孔画成哪一种颜色？",
                         select: [
                          {
                              text: "绿色",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[24];
                                  });
                              }
                          }, {
                              text: "紫色",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[21];
                                  });
                              }
                          }, {
                              text: "蓝色",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[22];
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
				"t1": "一见钟情指数：60%",
				"t2": "人与人相识最初阶段是外表的认知，所谓一见钟情，大多被外表和谈吐吸引，这是感性化的表现，在你看来没什么大惊小怪的，因此被人一见钟情，也是很正常的事情。因为你有这样的自信，给人十分良好的印象。加之你后天，尤其是现在，也十分注重提升自己的品位与谈吐，外表更是会注重，所以你还是很容易被人一见钟情的。而你也因为见识蛮广，所以就算被人一见钟情了，你也不会轻易地让感情付出相对应的部分，除非你也对对方一见钟情了。",      
			},{
				"biao": "B",
				"t1": "一见钟情指数：50%",
				"t2": "很多人都觉得，一见钟情是年轻青春时才会发生的事情，那个时候人是自然的单纯的，像天然无污染的风景一般，自然也容易被人一见钟情。而随着人渐渐长大，眼睛中不再天真无邪，有时候工作、学业、生活、赚钱、感情之类的问题，也会让人的灵气消磨殆尽，又哪里还有能量能吸引人来一见钟情？不过这个问题在你这里就是一个例外了。因为有的人一见钟是冲着单纯无邪，而你的成熟与优雅，照样是杀人于无形的特质，让人一见钟情，并不是难事哦。",            
			},{
				"biao": "C",
				"t1": "一见钟情指数：40%",
				"t2": "你是一个没有什么安全感的人，在见到陌生人时，往往会本能地在心里建筑起一道防御工事，有时候甚至不惜以挫伤人家的自尊心为代价。为此，你很难让对方看到你的优秀的一面，当然，倘若你是长得倾国倾城，那另当别论，但作为芸芸众生中的一员，这种情况也会让你对对方表现出抗拒的一面，对方极难长驱直入，直指你心，对你产生一见钟情的火花。不过也不是不可能被人一见钟情上，毕竟你只是对人有一些距离，而眼缘却不需要太近的距离，倘若遇到了那种保护欲望非常强烈的类型，你还是很有可能被对方一见钟情的哦。",            
			},{
				"biao": "D",
				"t1": "一见钟情指数：30%",
				"t2": "作为一个颜控，别人对你一见钟情不钟情是其次，你对别人一见钟情很重要。而因为眼光还算不错，所以你对别人一见钟情的概率还是很高的。每次一见钟情，你都能从对方那里嗅到一阵芳香，心中激起一阵荡漾。觉得对方就算什么都不说，你只要静静地看着他，你的人生在，那一刻天地清朗，你的嘴角也不觉绽出欢欣的笑容。这种节奏，说穿了，你是容易犯花痴的类型。不过你也知道，你一见钟情只是钟情人家的浮面上的东西，并不会非君不嫁的那种无底线钟情。",            
			},{
				"biao": "E",
				"t1": "一见钟情指数：20%",
				"t2": "有的人，见到了陌生人，便会生出一个念头，便是要把自己最好的一面展现给对方，让对方也注意到，甚至也喜欢上你。这种人不管好坏对错，最终一定会被人一见钟情，因为她的心中有这样的理想与意念，各方面也会相对应地表现出来。但是你这类型的，则是懒得费尽心机要让人一见钟情。生活中有些随意的你，会觉得，一见钟情之类的实在不必要，因为知人知面不知心，感情中也不寄托于一见钟情，所以还是把平时的一面表现出来就好了。倘若这种情况有人对你一见钟情，那一定是真爱。",            
			}];
            document.body.className = "";

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