///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://" +basedns +"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "假如能穿越回去高考，你是当学霸or学渣？",
desc: "很准的呦,都来试试吧"
};

            var model = avalon.define("test", function (vm) {
					vm.arr = [{
						type: "hello",
						text: "高考既是人生的一个重要的转折点，也是人生美好的一段回忆，不管成绩如何都不会留有遗憾。如果现在能有一次机会穿越回去高考，你能考上理想的学校，当一个学霸或者学渣呢。赶快来测试一下吧！测试题只是一种娱乐内容，只希望能给大家带来快乐；如果不喜欢的话，也不要动怒，还有更多别的好玩的哦",
						text1: "点击开始测试咯~   请先选择性别",
						select: [{
							img: "../image/sex1.jpg",
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
							img: "../image/sex0.jpg",
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
                          text: "平时你总是很注意控制自己的脾气吗？",
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
                      }, {
                          type: "select",
                          id: 2,
                          text: "你总在微信或是微博上发自己的照片吗？",
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
                                          model.item = model.arr[3];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 3,
                          text: "你喜欢一个人的旅行吗？",
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
                          text: "你有没有为喜欢的人写过情书？",
                          select: [
                              {
                                  text: "有过",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[6];
                                      });
                                  }
                              }, {
                                  text: "没有",
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
                          text: "你对网上征友陪吃饭陪看电影的作法怎么看？",
                          select: [
                              {
                                  text: "很正常",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[7];
                                      });
                                  }
                              }, {
                                  text: "无所谓",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[6];
                                      });
                                  }
                              }, {
                                  text: "很无聊",
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
                          id: 6,
                          text: "你对父母的意见会积极采纳吗？",
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
                                          model.item = model.arr[8];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 7,
                          text: "你有没有暗恋过学长或是学妹？",
                          select: [
                              {
                                  text: "是",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[10];
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
                          text: "你平时都是早睡早起吗？",
                          select: [
                              {
                                  text: "是的",
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
                                          model.item = model.arr[10];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 9,
                          text: "你觉得自己的生活习惯正常吗？",
                          select: [
                              {
                                  text: "不正常",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[11];
                                      });
                                  }
                              }, {
                                  text: "一般",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[12];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 10,
                          text: "你觉得自己的思想越来越现实了吗？",
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
                                          model.item = model.arr[12];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 11,
                          text: "你的微信里是朋友多还是陌生人多？",
                          select: [
                              {
                                  text: "朋友多",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[14];
                                      });
                                  }
                              }, {
                                  text: "都差不多",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[13];
                                      });
                                  }
                              }, {
                                  text: "陌生人多",
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
                          id: 12,
                          text: "是否有一座城市是你心底的疼痛？",
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
                      }, {
                          type: "select",
                          id: 13,
                          text: "是否因为一个人，害怕听首音乐吃某样食物？",
                          select: [
                              {
                                  text: "是",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[17];
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
                      }, {
                          type: "select",
                          id: 14,
                          text: "你觉得走入社会的自己，对物质越来越期盼了吗？",
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
                                          model.item = model.arr[17];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 15,
                          text: "你是一个很怀旧的人吗？",
                          select: [
                              {
                                  text: "一般",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[17];
                                      });
                                  }
                              }, {
                                  text: "是的",
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
                                          model.item = model.arr[18];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 16,
                          text: "你觉得下哪种状态是最恐怖的？",
                          select: [
                              {
                                  text: " 孤单",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[17];
                                      });
                                  }
                              }, {
                                  text: "城市很大，却没有属于自己的地方",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[18];
                                      });
                                  }
                              }, {
                                  text: "恋人不爱自己",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[19];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 17,
                          text: "你的空间写的东西都是属于？",
                          select: [
                              {
                                  text: "小说故事",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[19];
                                      });
                                  }
                              }, {
                                  text: "心情日记",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[22];
                                      });
                                  }
                              }, {
                                  text: "游记影评",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[23];
                                      });
                                  }
                              }, {
                                  text: "杂七杂八",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[20];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 18,
                          text: "你讨厌参加同学聚会的原因是？",
                          select: [
                              {
                                  text: "害怕攀比",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[20];
                                      });
                                  }
                              }, {
                                  text: "怕遇到尴尬的人",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[22];
                                      });
                                  }
                              }, {
                                  text: "因为无聊",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[23];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 19,
                          text: "你有没有暗示恋过某人，直到现在TA还不知道？",
                          select: [
                              {
                                  text: "没有",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[21];
                                      });
                                  }
                              }, {
                                  text: "有",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[23];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 20,
                          text: "回家的路，你希望会是哪种景象的呢？",
                          select: [
                              {
                                  text: "满是绿植的路",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[24];
                                      });
                                  }
                              }, {
                                  text: "铺满落叶的路",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[25];
                                      });
                                  }
                              }, {
                                  text: "开满鲜花的路",
                                  active: false,
                                  tap: function (ele, select) {
                                      tap(ele, select, function () {
                                          model.item = model.arr[26];
                                      });
                                  }
                              }
                          ]
                      }, {
                          type: "select",
                          id: 21,
                          text: "你觉得自己是一个内敛的人吗？",
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
                                          model.item = model.arr[24];
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
				"t1": "重回高考，我考了500分",
				"t2": "即使你想回去再重新高考，你也坐不住八小时的课桌了，走入社会，东跑西颠，学习的心早就没了，饱经沧桑的老腰也支撑不住了，一颗自由飘荡的心去踏踏实实写作业听课根本是不可能的了，而且你的身体也可能吃不消了。只能当成一个梦，偶尔怀念一下就可以了。",      
			},{
				"biao": "B",
				"t1": "重回高考，我考了400分",
				"t2": "想当年，起早贪黑学习的生活让你回想起来都寒颤，对你来说应该是段像恶梦一样的生活，你根本不会想回到高中那种冲刺的生活。学习好的同学也未必有出息，上好的大学也不会改变什么，即使回去重考，你可考的还不如从前呢。所以这种假设问题，你根本都不会去想。",            
			},{
				"biao": "C",
				"t1": "重回高考，我考了700分",
				"t2": "自信又开朗的你，即使重回高考岁月来说，也不算什么，你可能会考的更好，因为你比原来更加的自信，更加有把握。学习对你来说根本不算什么，你需要的是机会，甚至你可能总是回想，当初为什么没有努力或是报考心仪的学校。不过，还是想想就得了，眼前的生活更重要不是吗？",            
			},{
				"biao": "D",
				"t1": "重回高考，我考了600分",
				"t2": "沉闷又阴郁的你，对于高中的岁月，可能让你想起来的只有老师或是某个人，甚至你可能暗恋过某个老师或是某个同学，如果重回高考岁月，你想你肯定不会像曾经那样闷在心里不说，你现在的胆子比原来大多了，什么话都敢说了，回到高考，你可能会勇敢表白。",            
			},{
				"biao": "E",
				"t1": "重回高考，我考了700分",
				"t2": "高中时代的你可能就没心思学习，对于学长学妹充满了无限遐想。走入社会之后，你仍然是桃花朵朵开。如今单身或是非单身却还心怀不轨的人你，回到高考时代，也只是为了恋爱，那种纯真又干净的爱情是如今找不到了。所以还是不要重回高考了，你会耽误同学前途的。",            
			}];
            document.body.className = "";

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