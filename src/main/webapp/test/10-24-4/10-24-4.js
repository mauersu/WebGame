///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测测你是三国杀里的谁",
desc: "很准的呦,都来试试吧"
};
            var model = avalon.define("test", function (vm) {
                vm.arr = [
                    {
                        type: "hello",
                        text: "测测你是斯文有礼、谦逊有加的陆逊还是若即若离、出奇制胜的黄月英，小伙伴们快来加入角色~！",
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
                        text: "比起循规蹈矩但有理可据的常规工作，你更喜欢去做些含有风险性但收益可观的创造性活动。",
                        select: [
                            {
                                text: "a.是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[2];
                                    });
                                }
                            }, {
                                text: "b.否",
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
                        text: "当你对一个约会觉得放心时，你偏向谈论",
                        select: [
                            {
                                text: "a.未来，关于改进或发明事物和生活的种种可能性。例如，你也许会谈论一个新的科学发明，或一个更好的方法来表达你的感受",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[4];
                                    });
                                }
                            }, {
                                text: "b.实际的、具体的、关于“此时此地”的事物。例如，你也许会谈论品酒的好方法，或你即将要参加的新奇旅程",
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
                        text: "你认为你更偏向于",
                        select: [
                            {
                                text: "a.强势进取，志在必得",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[6];
                                    });
                                }
                            }, {
                                text: "b.保守稳健，居安思危",
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
                        text: "你认为哪种约会形式是你更能欣然接受的",
                        select: [
                            {
                                text: "a.事先知道约会的行程：要去哪里、有谁参加、你会在那里多久、该如何打扮",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[8];
                                    });
                                }
                            }, {
                                text: "b.让约会自然的发生，不做太多事先的计划",
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
                        text: "你会替不是自己的过错所造成的损失承担责任么",
                        select: [
                            {
                                text: "a.会根据形势考虑是否委曲求全",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[10];
                                    });
                                }
                            }, {
                                text: "b.痛恨被人冤枉，绝不会做替罪羔羊",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[11];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 6,
                        text: "在与外部环境交流的过程中，你更喜欢",
                        select: [
                            {
                                text: "a.下定决心并且做出最后肯定的结论",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[12];
                                    });
                                }
                            }, {
                                text: "b.放宽你的选择面并持续收集信息",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[13];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 7,
                        text: "你倾向通过以下哪种方式收集信息",
                        select: [
                            {
                                text: "a.你对有可能发生之事的想象和期望",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[14];
                                    });
                                }
                            }, {
                                text: "b.你对目前状况的实际认知",
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
                        text: "如果要你以牺牲健康为代价，换取数量可观的金钱或者荣誉，你会如何抉择",
                        select: [
                            {
                                text: "a.宁可透支身体和精力，也要过上富足或者荣耀的生活",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[16];
                                    });
                                }
                            }, {
                                text: "b.身体是革（蟹）命的本钱，如果太多的金钱名利会令人疲劳损害健康，那我甘愿放弃那些不必要的东西。",
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
                        text: "在事态的发展进程中，你会如何把握主动权",
                        select: [
                            {
                                text: "a.可以控制的话，会考虑把主动权紧握在手",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[18];
                                    });
                                }
                            }, {
                                text: "b.顺其自然，即便被动也可以应付自如。",
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
                        id: 10,
                        text: "你喜欢独自旅行",
                        select: [
                            {
                                text: "a.是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[20];
                                    });
                                }
                            }, {
                                text: "b.否。",
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
                        type: "select",
                        id: 11,
                        text: "对于死刑，你认为下列哪种解释更符合其内涵",
                        select: [
                            {
                                text: "a.同态复仇，将痛苦施加到犯罪人身上，作为惩罚",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[32];
                                    });
                                }
                            }, {
                                text: "b.遏制罪恶继续发生，从根本上预防更多罪行。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[33];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 12,
                        text: "你是否乐意一劳永逸",
                        select: [
                            {
                                text: "a.是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[34];
                                    });
                                }
                            }, {
                                text: "b.不是。",
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
                        type: "select",
                        id: 13,
                        text: "你是哪种人",
                        select: [
                            {
                                text: "a.喜欢先纵观全局 ",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[35];
                                    });
                                }
                            }, {
                                text: "b.喜欢先掌握细节。",
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
                        id: 14,
                        text: "月生活费还有结余时，你会优先考虑怎样处理",
                        select: [
                            {
                                text: "a.留到下个月接着花",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[24];
                                    });
                                }
                            }, {
                                text: "b.把结余留作他用。",
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
                        id: 15,
                        text: "打篮球时你比较偏向斗牛和传统赛两者中的",
                        select: [
                            {
                                text: "a.斗牛",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[26];
                                    });
                                }
                            }, {
                                text: "b.传统赛。",
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
                        id: 16,
                        text: "看一部电影，主角孤身犯险，被重创到奄奄一息，这时你认为剧情应当如何进展",
                        select: [
                            {
                                text: "a.同伴适时出现，拯救主角",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[28];
                                    });
                                }
                            }, {
                                text: "b.主角凭借自己的力量起死回生，击败对手。",
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
                        id: 17,
                        text: "你有收藏的爱好或习惯么",
                        select: [
                            {
                                text: "a.会特别留意一些自己感兴趣的事物并收藏起来",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[36];
                                    });
                                }
                            }, {
                                text: "b.没有收藏的习惯，觉得很麻烦。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[18];
                                    });
                                }
                            }
                        ]
                    },
                   {
                        type: "select",
                        id: 18,
                        text: "你把大部分和别人相遇视为",
                        select: [
                            {
                                text: "a.友善及重要的",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[37];
                                    });
                                }
                            }, {
                                text: "b.另有目的。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[38];
                                    });
                                }
                            }
                        ]
                    },
                   {
                        type: "select",
                        id: 19,
                        text: "在做任何事情之前，你会考虑到自己是否留有斡旋的余地",
                        select: [
                            {
                                text: "a.是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[39];
                                    });
                                }
                            }, {
                                text: "b.不是。",
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
                        type: "select",
                        id: 20,
                        text: "对于社会上的一些现象，你的看法是",
                        select: [
                            {
                                text: "a.认为一些不公正的现象也是一种生存的方式，同流合污也无所谓",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[29];
                                    });
                                }
                            }, {
                                text: "b.鄙视一劳永逸，对于唯利是图的人敬而远之。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[40];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 21,
                        text: "你喜欢做有十足把握的事情",
                        select: [
                            {
                                text: "a.是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[30];
                                    });
                                }
                            }, {
                                text: "b.不是。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[41];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 22,
                        text: "谋事在人，成事在天。你认为所谓的“天”指的是什么",
                        select: [
                            {
                                text: "a.风水、时运",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[42];
                                    });
                                }
                            }, {
                                text: "b.依旧是事在人为的一些外部因素干扰。",
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
                        id: 23,
                        text: "你通常",
                        select: [
                            {
                                text: "a.偏向于去想象一大堆关于即将来临的约会的事情",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[43];
                                    });
                                }
                            }, {
                                text: "b.偏向于拘谨地想象即将来临的约会，只期待让它自然地发生。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[44];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 24,
                        text: "你是否赞同进攻是最好的防守",
                        select: [
                            {
                                text: "a.是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[45];
                                    });
                                }
                            }, {
                                text: "b.否。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[46];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 25,
                        text: "对于生活中的睚眦必报，你作何理解",
                        select: [
                            {
                                text: "a.这是一种很现实的生存方式",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[47];
                                    });
                                }
                            }, {
                                text: "b.太小心眼了，完全没有必要。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[31];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 26,
                        text: "你喜欢魔术多于杂技",
                        select: [
                            {
                                text: "a.是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[48];
                                    });
                                }
                            }, {
                                text: "b.否。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[31];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 27,
                        text: "你认为一个社团持久运行下去的原动力来自",
                        select: [
                            {
                                text: "a.源源不绝的财力物力支持",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[49];
                                    });
                                }
                            }, {
                                text: "b.人际关系的稳定和健全的沟通机制。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[50];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 28,
                        text: "哪一项是较常见",
                        select: [
                            {
                                text: "a.你准时出席而其他人都迟到",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[51];
                                    });
                                }
                            }, {
                                text: "b.其他人都准时出席而你迟到。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[52];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 29,
                        text: "看到自己的仇家落难，你会",
                        select: [
                            {
                                text: "a.幸灾乐祸",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[53];
                                    });
                                }
                            }, {
                                text: "b.保持淡定。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[26];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 30,
                        text: "你认为经济是爱情的保障",
                        select: [
                            {
                                text: "a.是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[54];
                                    });
                                }
                            }, {
                                text: "b.不是。",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[55];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 31,
                        text: "你喜欢凡事比别人知道的多一点",
                        select: [
                            {
                                text: "a.是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[56];
                                    });
                                }
                            }, {
                                text: "b.否。",
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
                        id: 32,
                        text: "你相信自己的某个举动会改变世界吗",
                        select: [
                            {
                                text: "a.相信",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[57];
                                    });
                                }
                            }, {
                                text: "b.不相信。",
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
                        id: 33,
                        text: "你更偏向于",
                        select: [
                            {
                                text: "a.会以统筹者的姿态热忱的参与到身边的各种活动",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[58];
                                    });
                                }
                            }, {
                                text: "b.独善其身，对于周边事务没太多兴趣。",
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
                        id: 34,
                        text: "你认为最强大的力量是",
                        select: [
                            {
                                text: "a.兼容并蓄的无懈可击",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[59];
                                    });
                                }
                            }, {
                                text: "b.万事万物间的游刃有余。",
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
                        id: 35,
                        text: "你认为釜底抽薪是解决问题最有效的途径",
                        select: [
                            {
                                text: "a.是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[60];
                                    });
                                }
                            }, {
                                text: "b.否。",
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
                        id: 36
                    }, {
                        type: "result",
                        id: 37
                    }, {
                        type: "result",
                        id: 38
                    }, {
                        type: "result",
                        id: 39
                    }, {
                        type: "result",
                        id: 41
                    }, {
                        type: "result",
                        id: 42
                    }, {
                        type: "result",
                        id: 43
                    }, {
                        type: "result",
                        id: 44
                    }, {
                        type: "result",
                        id: 45
                    }, {
                        type: "result",
                        id: 46
                    }, {
                        type: "result",
                        id: 47
                    }, {
                        type: "result",
                        id: 48
                    }, {
                        type: "result",
                        id: 49
                    }, {
                        type: "result",
                        id: 50
                    }, {
                        type: "result",
                        id: 51
                    }, {
                        type: "result",
                        id: 52
                    }, {
                        type: "result",
                        id: 53
                    }, {
                        type: "result",
                        id: 54
                    }, {
                        type: "result",
                        id: 55
                    }, {
                        type: "result",
                        id: 56
                    }, {
                        type: "result",
                        id: 57
                    }, {
                        type: "result",
                        id: 58
                    }, {
                        type: "result",
                        id: 59
                    }, {
                        type: "result",
                        id: 60
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
                        tarShare((newval.id-35));
						return false;
                    };
                })
            });
   		var ylist = [{
				"biao": "A",
				"t1": "吕蒙",
				"t2": "你是一个富有志向而又深谋远虑的人，喜欢为自己制定高瞻远瞩的长远目标，为实现最终的胜利甘愿选择隐忍的生活方式，不管过程有多艰辛多漫长你都甘之如饴。你享受生活带来的充实感，善于观察生活中的细节，做事会带有很明确的目的性。你用深藏不露诠释了一种最深邃的进取。",      
			},{
				"biao": "B",
				"t1": "孙尚香",
				"t2": "你善良、开朗并带有一种阳光的气质，热忱而富有亲和力的性格是你最吸引人的地方。你喜欢为别人服务，有着旺盛的公益心，坚信付出本身就意味着回报。你顺应形势，懂得把握时机，有一种以不变应万变的淡定，却往往在形势峰回路转的时局抢占先机。你温暖的笑容，可以让不少人融化。",            
			},{
				"biao": "C",
				"t1": "黄月英",
				"t2": "你带有若即若离的神秘感，往往在悄无声息之中出奇制胜。你看似随遇而安，实则有着敏锐的直觉，细心洞察着身边的大事小情。你喜欢富有延展性的事物，喜欢推理，喜欢利用逻辑做出决定，也敢于承担风险。与其把命运交付给别人，你更喜欢把命运牢牢掌握在自己手中的那种成就感。",            
			},{
				"biao": "D",
				"t1": "甄姬",
				"t2": "你随性而带点机灵，洒脱但不失心机，崇尚顺其自然。你毫无野心，悄然而立，这不是漠然，而是涵养。你喜欢随性所至的浪漫，凡事不强求，豁达而明智，然而背后深藏的处变不惊的智慧，也能令人心悦诚服。你以简约为锋芒，于进退间游刃有余，闲庭信步之间彰显着别样的从容和淡定。",            
			},{
				"biao": "E",
				"t1": "陆逊",
				"t2": "你斯文有礼，谦逊有加，是个不可多得的有修养的人。你喜欢无拘无束的自由，又谙熟能屈能伸之奥义，永远保持内心的纯净，却也能得心应手的游走在理想和现实之间。你热爱生活，感恩于现实中的每一刻欢愉，同时追求纯粹而鲜活的内心世界，向往清爽恬淡的生活。宽容与执着是你最根深蒂固的本质。",            
			},{
				"biao": "F",
				"t1": "张飞",
				"t2": "你是一个坚定的理想主义者，笃信于绝对的力量，富有冒险精神，对于新鲜事物跃跃欲试，时刻保持着旺盛的精力与活力。你生性带着一种粗糙的幽默感，享受“横冲直撞”带来的刺激感，但纯真的个性里没有杀伤力。你对自己充满自信，有着坚强的意志力和不服输的拼劲，用行动力营造充实的每一天。",            
			},{
				"biao": "G",
				"t1": "马超",
				"t2": "你意气风发，锐不可当，喜欢向困难发起挑战，有着誓死拼搏的雄心和霸气。你天性乐观淳朴，光明磊落，天生怀抱着崇高的理想，能够全力以赴，发挥旺盛的生命力，为周遭的人、为弱者或正义而战。你对自己很有自信，擅长组织事务，喜欢有秩序，习惯凡事亲历亲为，你热忱的心意可以融化坚冰。 ",            
			},{
				"biao": "H",
				"t1": "周瑜",
				"t2": "你有着全神贯注般犀利的直觉，并将这种与生俱来的天赋发挥到极致。你细心周到，谨慎而富有条理性，有着旺盛的批判精神，追求无懈可击的完美境界。你强调完整性，不喜欢半途而废，对任何事都有一套详细的规划，喜欢全身心的投入到细小的工作中，以严格的标准要求并审视自己的一言一行。",            
			},{
				"biao": "I",
				"t1": "貂蝉",
				"t2": "你蕴涵着无穷尽的智慧，追求新锐与变通，才思敏捷而又善于交际，有着无法捉摸的灵性和难以限量的才华。你所决定的事毋庸置疑，会矢志不渝的兑现自己内心的承诺，一旦抉择便义无反顾，也会为达目的而选择更加巧妙的方式。你典雅的举手投足，往往会引来无数旁人的心旌荡漾。",            
			},{
				"biao": "J",
				"t1": "关羽",
				"t2": "你是个当机则断、精明干练的人，积极进取形容你的确恰如其分。但同时你更是个值得依靠的人，习惯把事情控制在自己可以支配的范围内，喜欢细水长流的经营自己的事业，往往不经意间就构建出百年大计。你不会放纵自己，也不会因不值得的事情虐待自己。无论何时，你都流露出动静皆宜的吸引力。",            
			},{
				"biao": "K",
				"t1": "赵云",
				"t2": "你的稳健可谓是从容不迫，凡事都讲求规则和合理性，做出的决定讲求中庸却又无可挑剔，在你身上看不到浮夸与或者求甚解的言行。你坚信对别人的负责便是对自己的忠诚，面对**能够很好的把持住自己，具有不为外力所动的耐力和持久力。你信奉“能活着就该好好活着”的道理，唯实际主义至上。",            
			},{
				"biao": "L",
				"t1": "夏侯惇",
				"t2": "你有着令旁人咋舌的强烈第六感，也有着不屈不挠的强悍性格，让你妥协实在是很困难的事。你争强好胜，但又习惯以自我为中心，因而注重自我保护，往往以冷漠示人，让异己产生距离感。你往往通过对自己要求的超越，不断填补内心深处的激进欲望，在决定行动时会表现的大胆积极，敢爱敢恨。",            
			},{
				"biao": "M",
				"t1": "孙权",
				"t2": "你生性善解人意，感情丰富，喜欢通过自己的平衡去化解不稳定的因素。你重视感情关系中的和谐，喜欢对他人表示善意，很会顾及别人的感受。你有情却不多情，你可以改变却不善变，你喜欢亲身去经历一些传奇的故事，会很向往居高临下的那份成就，然而真实的目的是为了以更包容的姿态去体贴世人。",            
			},{
				"biao": "N",
				"t1": "华佗",
				"t2": "你喜欢稳定而有保障的生活，内心往往有着不为人所知的不安全感。你注重修缮和身边每一个人的关系，也甘愿做任劳任怨的支持者，并不是你在乎他们的感受，而是你需要通过这种方式维系自己情感世界的完整。你有着很强的物质追求，喜欢通过自己的努力保障衣食住行的富足乃至奢华。",            
			},{
				"biao": "O",
				"t1": "刘备",
				"t2": "你永远是众人之中最与世无争的那个，却也是最周到体贴令人依赖的那个。你沉默、优雅，有一种发自内在的亲和气质，令人感觉舒服，在岁月的沉淀中更散发出不可抵挡的魅力。在你身边的每一个人，都会感受到你的优美与友善，无关外貌，亦无关年龄，只是沁人心脾的魅力。",            
			},{
				"biao": "P",
				"t1": "郭嘉",
				"t2": "你有着平易近人的亲和品质，含蓄内敛不张扬，但始终以很高的标准严格要求甚至苛求自己。通常都会看到你很无私的帮助别人，实际上你内心深处也很需要别人的关怀和照顾。你喜欢人群，不爱孤单，终生都追求着心灵的归属，一个永远的避风港。你情愿倾尽所有，换取一个厮守一生的知己。",            
			},{
				"biao": "Q",
				"t1": "黄盖",
				"t2": "你是个勇者无畏的探险家，喜欢孤身犯险的一往无前，更喜欢释放天性的无拘无束，是个典型的享乐主义派。你对于成功有着过度的渴求，任何时地都不会放弃希望和理想，然而你的成功又倚赖于亲密无间的伙伴。每当你感受到被压力束缚，你逃得比谁都快，这份自私的根源在于你对自由难以遏制的向往。",            
			},{
				"biao": "R",
				"t1": "大乔",
				"t2": "你是个异常现实而又精明世故的弄潮儿，有着泼辣无畏的性情，也有着不计代价的果断。你喜欢彰显自己精明强干的一面，你的光芒往往无人可以遮盖。你是个犀利而略显腹黑的人，你讨厌各种冠冕堂皇的教条，比起礼义廉耻和所谓原则，你认为实际好处才更有发言权。",            
			},{
				"biao": "S",
				"t1": "许褚",
				"t2": "你对于生活有着独到的见地，是个冷静沉着不急于暴露实力的人，但往往厚积薄发，在最适合的时机便会一鸣惊人。你青睐于稳扎稳打的生活模式，乐意从事自己有经验的事物，比较喜欢低调而与世无争，但始终很明确自己的目标，有很强的责任意识，只是容易给人留下刻薄无情的印象。",            
			},{
				"biao": "T",
				"t1": "甘宁",
				"t2": "你是个外表浮夸内心坚忍的强者，看似率性天真，实则运筹帷幄，有着深思熟虑的大智慧。你敢做敢当，向来敢于为自己的行为承担责任，也从不怨天尤人。你喜欢冲锋于时代的先列，为后人探索出一条光明坦途，却也不计较自己所要付出的代价，在争名逐利的时代中，你显得格外可贵。",            
			},{
				"biao": "U",
				"t1": "诸葛亮",
				"t2": "你淡泊名利，不求光耀一时，却能居安思危，凡事都力争稳妥。你有着未卜先知般的灵验，而这完全来源于你对生活谨慎的度量，和日积月累的悉心储备，而你也喜欢被人恭维为智者。你精益求精，通晓时局，有着以不变应万变的从容和自信。你喜欢灵魂的透澈与透彻，用心细如尘去注解仁慈与博爱。",            
			},{
				"biao": "V",
				"t1": "曹操",
				"t2": "你有着爱憎分明的鲜明性格，更有着功成名就的雄心壮志。你喜欢使自己具有权威性，因而你善于与他人沟通，同时你野心很大，通常对自己和伴侣的要求会很高。你具有审判律师的个性，享受热烈的辩论，不会轻易认输，凡事都力争寻求到真相。你相信因果循环报应不爽的理论，因而做事也会患得患失。",            
			},{
				"biao": "W",
				"t1": "司马懿",
				"t2": "你的品格中有着格物致知的精确，也有着止戈为武的睿智。你喜欢热情的参与到周遭环境之中与他人互动，有比较旺盛的控制欲望，会有意气用事的一面，但更多时候会显示出城府和心计。你会非常注重自己的个人空间，同时也能用清晰的眼光看世间的纷扰，却不刻意逃避，敢于直面各种尖锐的问题。",            
			},{
				"biao": "X",
				"t1": "吕布",
				"t2": "你崇尚绝对的力量，坚信真正的强盛可以无坚不摧，对于自己的生命有使命感。你喜欢被人肯定，格外钟情于稳操胜券的优越感，开朗而富有领袖潜质，做事干脆利落，斩钉截铁，向来不会拖泥带水。平日里的你悠闲中流露优雅，即使忙碌为之奔驰，也能在日日如是的工作中散发魅力。",            
			},{
				"biao": "Y",
				"t1": "张辽",
				"t2": "你具有高瞻远瞩的领袖气魄，却也有着刨根问底的敬业精神。你在抉择之际会表现出异于常人的果断，凡事都力求有备无患，喜欢在掌握先机之后直切主题。你有着较强的判断意识，也有着比较独到的处理方式，习惯思考如何把隐患降低到最小，用冷静和理智去看生活中的春去春来。",            
			}];         
            document.body.className = "";

					function showAns(ans){
				ans = ans-1;
				if(ans<0 || ans>25){
					ans = 1;
				}
				$("#sans").show();
				$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
				$("#sec").html(ylist[ans].t2);
			}