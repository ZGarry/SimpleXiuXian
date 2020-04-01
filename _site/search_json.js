window.ydoc_plugin_search_json = {
  "快速开始": [
    {
      "title": "简单修仙系统",
      "content": "此方案待填充",
      "url": "\\begin\\index.html",
      "children": []
    }
  ],
  "百科全书": [
    {
      "title": "百科全书",
      "content": "嘿！伙计，你知道么，在过去～王者荣耀尚未流行起来的时候，我们的童年是怎么度过的呢？那时候，我们最流行的就是互相讲故事。我们在故事中无所不能，创造各种各样的宝藏，探寻想象中最幽暗的领域。接下来，就是讲述你作为勇者，打败恶龙的故事！有请我们的讲述人————面粉团姑娘～",
      "url": "\\story\\index.html",
      "children": []
    },
    {
      "title": "面粉团",
      "content": "没有讲述人，发生在脑海里的故事就没法继续。面粉团就是我们的讲述人。",
      "url": "\\story\\1\\mft.html",
      "children": [
        {
          "title": "介绍",
          "url": "\\story\\1\\mft.html#介绍",
          "content": "介绍面粉团（半脸人的粉丝团）是一个萌哒可爱胖乎乎的小肉团，不可以吃！目前性别为女，13岁。前身是上古时期女希氏先灵圣贤女娲在补天时嫌弃不要扔在凡间的石头。\n...因为还不是完全体，有点小智障。主人是高冷帅得贼溜的群主，目前团子被寄养在我家。（毕竟是我开发的2333）"
        },
        {
          "title": "名称由来",
          "url": "\\story\\1\\mft.html#名称由来",
          "content": "名称由来我的好朋友，半脸哭半脸笑在一头扎进了小说事业，组建了一个书友群。本软件最开始是开发出来供书友群娱乐的。其实，谁来做讲述人无非是抓阄抓出来的。面粉团的真实身份是，你邻居家的小女儿。你们通过猜拳选出了谁来做讲述人，剩下的便都能如愿以偿,扮演勇者。"
        }
      ]
    },
    {
      "title": "玩家面板",
      "content": "理解这个条目对于后续十分重要。你面前的是一个玩家面板。\n基本面\n\nID\n修为\n境界\n金币\n\n\n\n三相\n\n体质，初始50。反应你身体的健壮程度，这个数值越高，修炼越快。战斗也会越有力。\n疯狂，初始5。疯狂让你的修炼极度不稳定。疯狂高到一定程度后可能会走火入魔。\n幸运，初始0。\n\n\n\n进阶\n\n物品栏\n装备面板(武器、防具、饰品)\n状态栏\n\n\n通过灵活的配置三相，例如，人为的进入衰弱状态，然后一次性吞服与体质相关的药剂，这会让你获得双倍体质。三相和灵活切换装备的存在，让游戏十分具有策略性。在任何时候，你可以使用查看命令，来获取你的基本数据。查看#装备栏，让你可以查看当前的装备。",
      "url": "\\story\\2\\property.html",
      "children": []
    },
    {
      "title": "判定",
      "content": "理解判定，对理解游戏有极大帮助。随机是这个游戏很重要的一个部分。本游戏实现随机的方法主要是通过判定。这有点像跑团，想象下面这样的场景。哦，你就要被一辆失控的马车迎面撞死了！\n现在，你到底会不会被撞死呢？让我们来进行一次判定！\n然后主持人，拿出了一个有100个面的骰子，投了下去。\n哦！是16，小于你的幸运值20，哦！\n那辆车子的主人千钧一发之际，控制住了马车！你得救了！\n我们游戏中的判定也大概是这样。当然，一般情况下你都不知道判定进行了。当然，三相也被巧妙的融入到其中。",
      "url": "\\story\\2\\random.html",
      "children": [
        {
          "title": "通过判定",
          "url": "\\story\\2\\random.html#通过判定",
          "content": "通过判定描述：用20（或者其他数字）进行一次通过判定执行：投一个1-100的骰子，如果结果小于20，则你通过。备注：通过判定结果，会自动减去幸运值，例如你抛出了28，并且你有10点幸运。那么，18才是你的最终结果。"
        },
        {
          "title": "严格判定",
          "url": "\\story\\2\\random.html#严格判定",
          "content": "严格判定和通过判定一样，只不过幸运值在此不起效果。"
        },
        {
          "title": "判定表",
          "url": "\\story\\2\\random.html#判定表",
          "content": "判定表现在，你已经明白了所谓判定是怎么一回事。下面是一个判定表。\n\n名称\n方法\n常用场景\n\n\n\n\n体质判定\n返回一个0~体质之间的随机数\n修炼、挑战时\n\n\n疯狂判定\n返回-疯狂~+疯狂之间的随机数字\n需要随机性时\n\n\n幸运判定\n用幸运数值进行一次严格判定，返回是否通过\n是否获得双倍金币，战力翻倍等\n\n\n挫败判定\n+5疯狂指数；单独用你的幸运值进行严格判定，若成功，你越挫越勇，修为*1.5倍；若失败，体质/1.1\n惨败的时候触发\n\n\n完成不可能判定\n+20疯狂，判定一次疯狂，你获得其平方！\n完成了不可能的事件\n\n\n美德判定\n进行一次体质判定，疯狂减去对应数值；如果数值已经减为0，改为增加到体质上。\n做了一些好事情时\n\n\n"
        }
      ]
    },
    {
      "title": "等级",
      "content": "斗皇之下，都是蝼蚁！\n斗尊强者竟然恐怖如斯。\n在修炼的道路上你也会不断成长，希望你能不断追求更高峰！当你到了一些新等级之后，我们会为你开放一些新功能，例如，双修。",
      "url": "\\story\\2\\level.html",
      "children": [
        {
          "title": "等级表",
          "url": "\\story\\2\\level.html#等级表",
          "content": "等级表\n\n境界等级\n境界\n分数下界\nslogan\n渡劫概率\n渡劫失败惩罚\n备注\n\n\n\n\n0\n凡人境\n-9999\n普通的感觉\n100\n0\n\n\n\n1\n入灵境\n333\n初窥门槛\n100\n0\n\n\n\n2\n虚灵境\n666\n力量在体内流动\n100\n0\n\n\n\n3\n乞灵境\n999\n乞灵之下，皆为凡人\n40\n-100\n开启：双修\n\n\n4\n唤灵境\n1999\n水木草石，始知形意\n71\n-500\n体质翻倍！\n\n\n5\n通灵境\n3500\n通天灵力，移山填海\n69\n-560\n选取修炼方向\n\n\n6\n问灵境\n6000\n探幽寻微，法力无边\n44\n-777\n\n\n\n7\n寻灵境\n10000\n寻天问道，初登大堂\n25\n-314\n开启：可以收徒\n\n\n8\n叩灵境\n15000\n道前一叩，生死由天\n20\n-324\n\n\n\n9\n化灵境\n30000\n灵气化体，身融天地\n15\n-2000\n\n\n\n10\n地灵境\n60000\n天地有灵，由谁执掌\n10\n-9999\n\n\n\n11\n天灵境\n120000\n天地有灵，吾执掌之\n5\n-9999\n\n\n\n12\n仙境\n240000\n仙人抚顶，羽化飞升\n0\n-4444\n\n\n\n"
        },
        {
          "title": "说明",
          "url": "\\story\\2\\level.html#说明",
          "content": "说明你在签到后，若修为达到下一级别，就会触发渡劫。\n渡劫时，会用渡劫概率进行通过判定，通过成功则渡劫，反之扣除修为作为惩罚。\n⚠有且只有在签到时，你才有可能渡劫。\n"
        }
      ]
    },
    {
      "title": "行为",
      "content": "玩家的行为是逐步开放的。我们总应该以签到，来开始游戏。其实签到就是修炼的意思。如果你是第一次签到，签到就会为你创建一个用户。其他常见的操作还有，挑战@某角色，抽奖，购买#物品名，出售#物品名，使用#物品名。你可能会觉得这串名单有点长，但放心，很多功能是逐步开放的，并不会过于难以学习。",
      "url": "\\story\\3\\signin.html",
      "children": [
        {
          "title": "签到",
          "url": "\\story\\3\\signin.html#签到",
          "content": "签到签到是最基础的获得修为的方式。"
        },
        {
          "title": "基础",
          "url": "\\story\\3\\signin.html#签到-基础",
          "content": "基础一天可以签到一次。\n每次签到你都会获得一枚金币。幸运判定通过时翻倍。\n如果一周均进行了签到，额外获得一枚金币。\n节假日的签到额外获得100点修为。\n签到会触发一些事件。\n"
        },
        {
          "title": "修为计算",
          "url": "\\story\\3\\signin.html#签到-修为计算",
          "content": "修为计算签到获取的修为，为下列数字之和：体质的数值，幸运判定通过时翻倍。\n进行两次疯狂判定，修为加减其乘。\n当前修为的1%。\n"
        },
        {
          "title": "备注",
          "url": "\\story\\3\\signin.html#备注",
          "content": "备注注意，有且仅有签到会带来渡劫事件。其他情况下，即使你的修为已经超过当前境界，你仍旧不会进行渡劫。"
        }
      ]
    },
    {
      "title": "挑战",
      "content": "@一名角色，和该角色进行战斗。挑战是很重要的交互方式。",
      "url": "\\story\\3\\fight.html",
      "children": [
        {
          "title": "战力计算",
          "url": "\\story\\3\\fight.html#战力计算",
          "content": "战力计算\n战力=(修为+233.3)*发挥系数。\n\n\n发挥系数=(体质判定+疯狂判定)/100。\n\n\n进攻者判定一次幸运，通过则战力翻倍。\n\n"
        },
        {
          "title": "结算",
          "url": "\\story\\3\\fight.html#结算",
          "content": "结算战力比r=我方战力/对方战力九死一生：r<0.1，修为-30%，判定一次挫折。\n螳臂当车：0.1<=r<0.6，疯狂+1，体质-2，进行一次体质判定，被对方夺取对应修为。\n略输一筹：0.6<=r<0.9，用20作普通判定，若通过则体质+2。否则进行一次体质判定，被夺取判定结果一半的修为。\n和：0.9<=r<1.1，判定一次体质，双方均获得其之和。\n小胜三分：1.1<=r<2，用20作普通判定，若通过则体质+4。否则进行一次体质判定，夺取对方对应的修为。\n旗开得胜：2<=r<4，判定两次体质，求和，夺取对方对应修为。\n易如反掌：4<=r<6，判定一次体质，夺取对方对应修为。\n辣手摧花：6<=r，疯狂+1，你判定一次疯狂，失去等于其绝对值的数值，对方判定一次挫败。\n负数除以负数将会非常有趣，谁负得多，谁反而更强；以及，如果你遇到了对方是负数，你也会挑战不过他，毕竟没人可以打败疯子。当然，如果你是开发人员，我郑重的提醒您：不要尝试除以0！"
        }
      ]
    },
    {
      "title": "查看",
      "content": "数值游戏离不开数值，数值离不开随机性，也应该有多种多样的查看方法。最基本的查看方法就是直接用查看。此时，面粉团就会告诉你，你的个人信息。包括境界、修为、三相、物品。也有10%概率同时中二的念一遍你所在境界的slogan。",
      "url": "\\story\\3\\look.html",
      "children": [
        {
          "title": "查看表",
          "url": "\\story\\3\\look.html#查看表",
          "content": "查看表\n\n命令\n反馈\n\n\n\n\n看大佬\n展示玩家中修为最高的三位\n\n\n装备栏\n查看你当前的装备\n\n\n查看#物品名\n查看一个物品的描述\n\n\n商店\n进入商店\n\n\n菜单\n显示大部分命令\n\n\n任务\n显示你当前的任务\n\n\n交易所\n进入珠宝交易所\n\n\n"
        }
      ]
    },
    {
      "title": "购买",
      "content": "游戏中有商店，也有珠宝交易所。购买和出售，都是必须的指令。\n\n指令\n效果\n\n\n\n\n购买#物品名\n支付对应金币，从商店买入一个道具（宝石将从宝石交易所购买）\n\n\n出售#物品名\n目前仅可以出售宝石\n\n\n使用#物品名\n以某种方式使用消耗品、兑换券\n\n\n装备#装备名\n装备某个装备，同类型装备最多同时装备一个\n\n\n抽奖\n支付三枚金币，随机抽取一个道具（等级越低的道具，越有可能被抽到！）\n\n\n",
      "url": "\\story\\3\\buy.html",
      "children": []
    },
    {
      "title": "双修",
      "content": "两个人一起玩耍才是真正的快乐。两个人要做到彼此不互相背叛，一直坚守，本来就是一件不容易的事情呢。",
      "url": "\\story\\3\\two-players.html",
      "children": [
        {
          "title": "等级约束",
          "url": "\\story\\3\\two-players.html#等级约束",
          "content": "等级约束必须达到乞灵境才能开启双修。"
        },
        {
          "title": "选择伴侣",
          "url": "\\story\\3\\two-players.html#选择伴侣",
          "content": "选择伴侣双修@某人，对方也双修@你时，获得双修奖励d。d初始值=5，每次双修+5。当对方双修@向别人的时候，这个数值置为零。"
        }
      ]
    },
    {
      "title": "闭关闭关奖励其他",
      "content": "你必须持有「藏书阁钥匙」，才可以使用闭关。闭关后你会到藏书阁仔细研究书籍，66天为一个闭关周期。闭关时长从第二天计算起！闭关期间，你不会被挑战，不能签到。总而言之，你无法参与一切事务。闭关奖励十分丰厚！如果你总共闭关了n天，那么你的奖励将是，+N点体质，获得N*N点修为！出关命令可以结束闭关。这个指令比较适合真正的在闭关的高三党。",
      "url": "\\story\\3\\inhome.html",
      "children": []
    },
    {
      "title": "作弊码",
      "content": "看似面粉团是铁面无私的讲述人。其实她在暗中支持你。你和她约定，当你在屏幕上打出作弊码#X的时候，你就可以对她做想做的事情。X等于，你的QQ号求和的尾数*今天是几号。接着，你就可以获得丰厚奖励。",
      "url": "\\story\\3\\cheat.html",
      "children": []
    },
    {
      "title": "商店",
      "content": "商店是这个游戏很重要的地点。你的抽奖、买入、卖出行为都发生在这里。每天零点，商店会刷新出三种商品。你可以阅读物品大全来了解每个商品的价格。C级别物品刷出几率80%，B级别10%，A级别9%，S级别1%。你支付了对应金币，买入了对应商品后，哪个物品就将进入你的背包。请耐心等待商店打特价的时候。目前来说，商店的商品是没有数量限制一说的，未来可能会自走棋，加入数量限制。",
      "url": "\\story\\3.5\\shop.html",
      "children": []
    },
    {
      "title": "交易所",
      "content": "宝石交易所，这是一个类似于股市的地方。这儿只能买入或者买出一种东西————宝石！",
      "url": "\\story\\3.5\\block.html",
      "children": [
        {
          "title": "开放时间",
          "url": "\\story\\3.5\\block.html#开放时间",
          "content": "开放时间游戏进行到第三十天的时候，此时交易所会开放。"
        },
        {
          "title": "开盘时间",
          "url": "\\story\\3.5\\block.html#开盘时间",
          "content": "开盘时间每日上午9-11点，下午1-3点是开盘时间。节假日等不开盘。"
        },
        {
          "title": "价格",
          "url": "\\story\\3.5\\block.html#价格",
          "content": "价格宝石的价格是浮动的，其某个时刻的价格=基本价格+浮差。基本价格（初始8.0）\n浮差（±2）\n真实价格会忽略尾数。\n"
        },
        {
          "title": "影响价格的因素",
          "url": "\\story\\3.5\\block.html#影响价格的因素",
          "content": "影响价格的因素每发生一次买入，基本价格 +0.5\n每发生一次卖出，基本价格 -0.5\n分红对价格的影响\n"
        },
        {
          "title": "价格刷新",
          "url": "\\story\\3.5\\block.html#价格刷新",
          "content": "价格刷新一下这些时候，宝石价格会刷新买入时\n卖出时\n开盘时\n"
        },
        {
          "title": "手续费",
          "url": "\\story\\3.5\\block.html#手续费",
          "content": "手续费采取后端收费，卖出时收取一枚金币作为手续费"
        },
        {
          "title": "分红",
          "url": "\\story\\3.5\\block.html#分红",
          "content": "分红每个月27号中午12点，持有的宝石都会自动分红。一般而言，是派息分红。每次分红宝石当前价值的10%（向上取整），红利直接打到玩家账户。同时，市面上的宝石价格除权对应价格。也有4%的概率进行一次转赠。一派一。同时，市面上的宝石价格减半。"
        }
      ]
    },
    {
      "title": "婚恋所",
      "content": "一般而言，到这儿是为了查看两对修仙情侣的甜蜜指数。初次之外没有别的功能。",
      "url": "\\story\\3.5\\love-place.html",
      "children": []
    },
    {
      "title": "关于物品使用",
      "content": "显而易见，你只能使用你持有的东西。使用指令使用#物品，你就可以使用你的背包中的某个物品。物品按等级分为S、A、B、C，以及一些其他特殊道具。希望你玩的开心。",
      "url": "\\story\\4\\use.html",
      "children": []
    },
    {
      "title": "C级道具",
      "content": "具有一定价值，但只要愿意花钱买，总能买到的。C级道具以丹药和石头为主，相对容易获得，但对修炼者的提升仍旧很大。",
      "url": "\\story\\4\\C-items.html",
      "children": [
        {
          "title": "丹药类",
          "url": "\\story\\4\\C-items.html#丹药类",
          "content": "丹药类\n\n道具名\n图标\n价格\n类别\n作用\n描述\n\n\n\n\n回气丹\n\n5～12\n消耗品\n体力+5\n修炼者必备，用于快速回复\n\n\n伤药\n\n4～8\n消耗品\n持有伤药的时候，抵消一次修为减少\n务必理性用药\n\n\n红药水\n\n9～11\n消耗品\n疯狂+3，体力+9\n疯狂，躁动，反应\n\n\n聚魔瓶\n\n4～4\n消耗品\n聚集魔力指示物到12后，随机获得一个S级道具\n闪烁着诡异的光泽\n\n\n增幅药剂\n\n8～9\n消耗品\n疯狂+4，你下次获取修为的时候，翻倍\n俗称“大力丸”\n\n\n复合药\n\n3～33\n消耗品\n体力+2，疯狂-2，修为+10\n一针入，一针出\n\n\n序列I\n\n3～33\n消耗品\n50%概率幸运+1，20%概率获得4金币，1%概率获取100金币\n梦幻\n\n\n序列X\n\n7～17\n消耗\n做一次疯狂判定，取平方。70%失去修为，30%获得修为。若失去修为，会重新获得此物品。\n诱惑\n\n\n"
        },
        {
          "title": "石头类",
          "url": "\\story\\4\\C-items.html#石头类",
          "content": "石头类| 道具名| 图标\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t| 价格\t| 类别\t| 作用\t\t\t\t\t\t\t\t\t| 描述\t\t\t\t\t\t\t\t| :----: | :---:\t|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t| ------| :----:| :------------------------------:\t\t| :--------------:\t\t\t\t\t|\n| 月石\t| | 1～7\t| 消耗品| 体力+2，满月十分有额外效果\t\t\t|  一闪一闪亮晶晶\t\t\t\t\t|\n| 邪气石| | 1～2\t| 消耗品|              疯狂+3，每有10点疯狂，金币+1\t\t\t\t\t| 黑暗府邸的产物\t\t\t\t\t|\n| 黑金属| | 2～9\t| 消耗品|              修为+100，有概率+300\t\t| 其中蕴含着灵气，只是不大好消化\t|\n| 闪回石| | 7～9\t| 消耗品|              疯狂-7，超过部分加体质\t| 其上有闪电回文\t\t\t\t\t|"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "\\story\\4\\B-items.html",
      "children": [
        {
          "title": "B级道具",
          "url": "\\story\\4\\B-items.html#b级道具",
          "content": "B级道具人类智慧的结晶，一些工艺品，一些名贵药剂。"
        },
        {
          "title": "装备类",
          "url": "\\story\\4\\B-items.html#b级道具-装备类",
          "content": "装备类\n\n道具名\n图标\n价格\n类别\n作用\n描述\n\n\n\n\n木剑\n\n2～12\n持有物\n现在，你在战斗方面，幸运计算翻倍\n\n\n\n木盾\n\n2～12\n持有物\n你不会再被挑战夺取修为了\n\n\n\n铁盾\n\n17～27\n持有物\n每次被挑战，触发一次体质判定，增加对应数值\n擅守者，无所攻\n\n\n铁剑\n\n17～27\n持有物\n挑战比自己强的对手时，50%概率体质+3\n擅攻者，无所不攻\n\n\n护身符\n\n22\n持有物\n幸运+5\n\n\n\n银剑\n\n33～56\n持有物\n挑战并获取修为时，双倍获取\n\n\n\n银盾\n\n33～56\n持有物\n\n\n\n\n"
        },
        {
          "title": "道具类",
          "url": "\\story\\4\\B-items.html#b级道具-道具类",
          "content": "道具类\n\n道具名\n图标\n价格\n类别\n作用\n描述\n\n\n\n\n藏书阁钥匙\n\n12～56\n持有物\n使用后可以闭关一次\n人类进步阶梯的...会员卡\n\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "\\story\\4\\A-items.html",
      "children": [
        {
          "title": "A级道具",
          "url": "\\story\\4\\A-items.html#a级道具",
          "content": "A级道具久经过人工雕琢之物，能提供极大的价值。A级别道具总共4个，"
        },
        {
          "title": "武器类",
          "url": "\\story\\4\\A-items.html#武器类",
          "content": "武器类\n\n道具名\n图标\n价格\n类别\n作用\n描述\n\n\n\n\n勋爵\n\n107\n价格消耗品\n\n作用一闪一闪亮晶晶\n\n\n|  序列9\t\t|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|1～240\t|消耗品\t| 体质-50，幸运+5\t\t\t\t\t\t\t\t|凋零\t\t\t\t\t\t\t\t|  序列2\t\t|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|1～240\t|消耗品\t|  立即进行一次美德判定\t\t\t\t\t\t\t|真挚\t\t\t\t\t\t\t\t|\n|  序列3\t\t|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|1～240\t|消耗品\t|  修为+333\t\t\t\t\t\t\t\t\t\t|质朴\t\t\t\t\t\t\t\t|\n|  迷迭草\t\t| | 1～17\t|  消耗\t|        @一个目标，50%对方体力-10，50%你入坑了\t|           做那件事情前的辅佐药剂\t|\n|  笑粉\t\t\t| | 1～17\t|  消耗\t|           @一个目标，让他十个小时内无法操作\t|           五颜六色，开怀大笑\t\t|"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "\\story\\4\\S-items.html",
      "children": [
        {
          "title": "S级宝物",
          "url": "\\story\\4\\S-items.html#s级宝物",
          "content": "S级宝物具有特殊意义的道具"
        },
        {
          "title": "武器类",
          "url": "\\story\\4\\S-items.html#武器类",
          "content": "武器类| :----:\t| :----------------------------------------------------------:\t| ------| :--------:| :----:\t\t| :----------------:|  会员卡\t|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|100\t|持有物\t\t|商店购买费用-1\t|\t\t\t\t\t|"
        }
      ]
    }
  ]
}