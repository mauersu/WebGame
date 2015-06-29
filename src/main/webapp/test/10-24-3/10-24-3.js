///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测测你是《西游记》里的谁？",
desc: "很准的呦,都来试试吧"
};

            var model = avalon.define("test", function (vm) {
                vm.arr = [
                    {
                        type: "hello",
                        text: "自小就看《西游记》长大的你，有没有在过家家的时候扮演过其中的角色呢。会七十二变的孙悟空，色色的大耳朵猪八戒，忠厚正直的沙悟净，还有调皮的红孩儿和木纳善良的唐僧，肯定都给你留下了非常深刻的印象。进入测试，来看看你的性格最像其中的谁？",
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
                        text: "如果给你一个去西天取经的机会，你会去吗?",
                        select: [
                            {
                                text: "会",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[2];
                                    });
                                }
                            }, {
                                text: "不会",
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
                        text: "你是个不会怕生的人?",
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
                                         model.item = model.arr[3];
                                     });
                                 }
                             }
                        ]
                    }, {
                        type: "select",
                        id: 3,
                        text: "即使遇到困难，你也会一往无前?",
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
                        id: 4,
                        text: "你曾经独自旅行过?",
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
                                         model.item = model.arr[5];
                                     });
                                 }
                             } 
                        ]
                    }, {
                        type: "select",
                        id: 5,
                        text: "你是一个很能抵御诱惑的人?",
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
                                        model.item = model.arr[6];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 6,
                        text: "你是否觉得早上叠被子是浪费时间?",
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
                    }, {
                        type: "select",
                        id: 7,
                        text: "你是否曾对一件事情热衷到忘我的地步?",
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
                                        model.item = model.arr[10];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 8,
                        text: "你是否曾有短暂失忆的经历？",
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
                                       model.item = model.arr[9];
                                   });
                               }
                           }
                        ]
                    },
                   {
                        type: "select",
                        id: 9,
                        text: "你认为自己的好奇心比别人旺盛？",
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
                                       model.item = model.arr[10];
                                   });
                               }
                           }
                        ]
                    },
                     {
                        type: "select",
                        id: 10,
                        text: "你觉得自己是个很浪费的人?",
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
                        id: 11,
                        text: "其实你是个很喜欢撒娇的人?",
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
                                       model.item = model.arr[12];
                                   });
                               }
                           }
                        ]
                    },
                    {
                        type: "select",
                        id: 12,
                        text: "你是否会被别人说自己很任性?",
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
                                       model.item = model.arr[13];
                                   });
                               }
                           }
                        ]
                    },
                   {
                        type: "select",
                        id: 13,
                        text: "你认为障碍越多越有挑战性?",
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
                        id: 14,
                        text: "从装傻和坦白来看，你觉得自己比较适合装傻?",
                        select: [
                           {
                               text: "是",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[21];
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
                        text: "你会把桌上的东西吃得一干二净?",
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
                                       model.item = model.arr[19];
                                   });
                               }
                           }
                        ]
                    },
                  {
                        type: "select",
                        id: 16,
                        text: "你是否拥有一些别人看来莫名其妙的东西?",
                        select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[19];
                                    });
                                }
                            }, {
                                text: "不是",
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
                      text: "你是个会被动物喜欢的人?",
                      select: [
                          {
                              text: "是",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[21];
                                  });
                              }
                          }, {
                              text: "不是",
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
                      text: "你曾因犯过大错而被关过禁闭?",
                      select: [
                          {
                              text: "是",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[22];
                                  });
                              }
                          }, {
                              text: "不是",
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
                      id: 19,
                      text: "你觉得没有风险的人生就太无趣?",
                      select: [
                          {
                              text: "是",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[24];
                                  });
                              }
                          }, {
                              text: "不是",
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
                      id: 20,
                      text: "你认为适度的妥协是智慧的表现?",
                      select: [
                          {
                              text: "是",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[26];
                                  });
                              }
                          }, {
                              text: "不是",
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
                      type: "select",
                      id: 21,
                      text: "你是否对自己的笑容很有信心?",
                      select: [
                          {
                              text: "是",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[28];
                                  });
                              }
                          }, {
                              text: "不是",
                              active: false,
                              tap: function (ele, select) {
                                  tap(ele, select, function () {
                                      model.item = model.arr[29];
                                  });
                              }
                          }
                      ]
                  },
                    {
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
                    }, {
                        type: "result",
                        id: 28
                    }, {
                        type: "result",
                        id: 29
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
                        tarShare((newval.id-21));
						return false;
                    };
                })
            });

			var ylist = [{
				"biao": "A",
				"t1": "孙悟空",
				"t2": "以行动为先的你属于悟空一类人，虽然你周围的人会因为你独特的个性而时常陷入麻烦中，但你却有着被人喜欢的独特魅力。",      
			},{
				"biao": "B",
				"t1": "唐僧",
				"t2": "你富有责任感，会为别人着想，虽然有时会因为过于认真而碰到麻烦，但因为你有优秀的领导能力，所以能够带领身边的人解决困难。",            
			},{
				"biao": "C",
				"t1": "六耳猕猴",
				"t2": "你的脑子动得非常快，也善于隐藏自己。但是偶尔会行为怪异，让你身边的人对你敬而远之。如果你能够更阳光一点，你的朋友自然会多起来。",            
			},{
				"biao": "D",
				"t1": "白龙马",
				"t2": "你会永远忠于自己的意愿，会不知不觉中对一件事非常执著，但在人际关系方面却可能无法坦白自己。放下心防吧，用真诚去打动别人的心。",            
			},{
				"biao": "E",
				"t1": "沙和尚",
				"t2": "你是一个个性爽朗可靠的人。平时默默无闻的你，却有许多不为人知的才能，天长日久，身边的人会发现他们已经离不开你。",            
			},{
				"biao": "F",
				"t1": "哪吒",
				"t2": "虽然与好朋友在一起时你也会开怀大笑，但是平时的你却有点儿冷酷，很容易被人误会。正因如此你才更需要一些体贴的知交，和你共同前进。",            
			},{
				"biao": "G",
				"t1": "猪八戒",
				"t2": "拥有迷人悠闲的笑容如八戒般的你，喜欢照顾身边的人，因而会被人所喜欢。你的幽默感和笑容是你的法宝之一，危机时你也能冷静分析的优点会帮你渡过难关。 ",            
			},{
				"biao": "H",
				"t1": "牛魔王",
				"t2": "你是一个性情中人，有时会因为冲动而乱来，因无法克制自己，可能给周围的人造成麻烦。学会克制自己的情感，你会更加让人喜欢。",            
			}];
       document.body.className = "";

						function showAns(ans){
				ans = ans-1;
				if(ans<0 || ans>7){
					ans = 1;
				}
				$("#sans").show();
				$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
				$("#sec").html(ylist[ans].t2);
			}