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
      "content": "理解这个条目对于后续十分重要。你面前的是一个玩家面板。\n基本面\n\nID\n修为\n境界\n金币\n\n\n\n三相\n\n体质，初始50。反应你身体的健壮程度，这个数值越高，修炼越快。战斗也会越有力。\n疯狂，初始5。疯狂让你的修炼极度不稳定。疯狂高到一定程度后可能会走火入魔。\n幸运，初始0。\n\n\n\n物品栏\n\n通过灵活的配置三相，例如，人为的进入缩小状态，然后一次性吞服与修为相关的药剂，这会让你获得双倍修为。三相和灵活使用道具的存在，让游戏十分具有策略性。在任何时候，你可以使用查看命令，来获取你的基本数据。",
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
          "content": "判定表现在，你已经明白了所谓判定是怎么一回事。下面是一个判定表。\n\n名称\n方法\n常用场景\n\n\n\n\n体质判定\n构造一个μ=体质/2，σ=体质/6的正态分布。随机返回一个值\n修炼、挑战时\n\n\n疯狂判定\n返回-疯狂~+疯狂之间的随机数字\n需要随机性时\n\n\n幸运判定\n用幸运数值进行一次严格判定，返回是否通过\n是否获得双倍金币，战力翻倍等\n\n\n挫败判定\n+5疯狂指数；单独用你的幸运值进行严格判定，若成功，你越挫越勇，修为*1.5倍；若失败，体质/1.1\n惨败的时候触发\n\n\n完成不可能判定\n+20疯狂，判定一次疯狂，你获得其平方！\n完成了不可能的事件\n\n\n美德判定\n体质判定结果/4+5。疯狂减去对应数值；如果数值已经减为0，改为增加到体质上。\n做了一些好事情时\n\n\n"
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
          "content": "等级表\n\n境界等级\n境界\n分数下界\nslogan\n渡劫概率\n渡劫失败惩罚\n备注\n\n\n\n\n0\n凡人境\n-9999\n普通的感觉\n100\n0\n\n\n\n1\n入灵境\n333\n初窥门槛\n100\n0\n\n\n\n2\n虚灵境\n666\n力量在体内流动\n100\n0\n\n\n\n3\n乞灵境\n999\n乞灵之下，皆为凡人\n40\n-100\n\n\n\n4\n唤灵境\n1999\n水木草石，始知形意\n71\n-500\n开启双修\n\n\n5\n通灵境\n3500\n通天灵力，移山填海\n44\n-777\n\n\n\n6\n问灵境\n6000\n探幽寻微，法力无边\n69\n-560\n可以闭关\n\n\n7\n寻灵境\n10000\n寻天问道，初登大堂\n25\n-314\n可以赠送东西\n\n\n8\n叩灵境\n15000\n道前一叩，生死由天\n20\n-324\n每日签到金币+1\n\n\n9\n化灵境\n30000\n灵气化体，身融天地\n15\n-2000\n每日签到疯狂-1\n\n\n10\n地灵境\n60000\n天地有灵，由谁执掌\n10\n-9999\n每日签到之直接抽奖一次\n\n\n11\n天灵境\n120000\n天地有灵，吾执掌之\n5\n-9999\n\n\n\n12\n仙境\n240000\n仙人抚顶，羽化飞升\n0\n-4444\n\n\n\n"
        },
        {
          "title": "说明",
          "url": "\\story\\2\\level.html#说明",
          "content": "说明你在签到后，若修为达到下一级别，就会触发渡劫。\n渡劫时，会用渡劫概率进行通过判定，通过成功则渡劫，反之扣除修为作为惩罚。\n⚠有且只有在签到时，你才有可能渡劫。\n有时候，你可以服用一些其他药物来增加修为，使得修为看似可以升级了，但是，这是不会触发渡劫的。\n"
        }
      ]
    },
    {
      "title": "数值改变带来的后果",
      "content": "",
      "url": "\\story\\2\\result.html",
      "children": [
        {
          "title": "体质改变",
          "url": "\\story\\2\\result.html#体质改变",
          "content": "体质改变通常，体质改变会让你更强。体质上不封顶。你可能在随后的战斗中会遇到一些修为一般，但体质超强的敌人。但是，如果你体质降低到了20及以下，你随时可能有死亡的风险。【濒死】（我们用扣除大量修为来替代死亡）请好自为之。"
        },
        {
          "title": "疯狂改变",
          "url": "\\story\\2\\result.html#疯狂改变",
          "content": "疯狂改变通常，降低疯狂会让你更稳定。适当提升疯狂，也能让你获取一些额外的好处。想要降低疯狂可并不容易，还是尽量减少使用带疯狂的物品吧~疯狂的最小值是0。在0的时候，如果你还降低疯狂，降低的部分就会加到体质上。当你的疯狂到了44后，你每日签到都有可能失败。例如你的疯狂时70，那么你的失败概率就是70%。当你的疯狂超过60之后，当你还继续增加这个数值的时候，你都会干出一点傻事！【走火入魔】千万谨慎！"
        },
        {
          "title": "幸运改变",
          "url": "\\story\\2\\result.html#幸运改变",
          "content": "幸运改变通常，好运总是越多越好。但幸运也是这个游戏最难获得的属性。幸运在突破，抽奖方面好处多多。"
        },
        {
          "title": "修为改变",
          "url": "\\story\\2\\result.html#修为改变",
          "content": "修为改变作为修炼者，修为总是越高越好。如果你修为太低甚至到了负数，我们也不会说什么，但这意味着你需要努力啦！而如果你修为很高，甚至到了榜首，那简直不要太棒！而每次你签到之后，如果你的修为已经可以突破到下一个境界了，你将进行一次突破。"
        },
        {
          "title": "金币改变",
          "url": "\\story\\2\\result.html#金币改变",
          "content": "金币改变金币不是一种容易获得资源。我们建议您多多签到，以及多多瞄准商店的折扣商品。还有一些道具，以及宝石交易所都可以获得金币，关键看你有没有商业思维啦！"
        }
      ]
    },
    {
      "title": "行为",
      "content": "玩家的行为是逐步开放的。我们总应该以签到，来开始游戏。其实签到就是修炼的意思。如果你是第一次签到，签到就会为你创建一个用户。其他常见的操作还有，挑战@某角色，抽奖，购买#物品名，出售#物品名，使用#物品名。你可能会觉得这串名单有点长，但放心，很多功能是逐步开放的，并不会过于难以学习。使用菜单这个指令也许帮助你快速开始游戏。",
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
          "content": "基础一天可以签到一次。\n每次签到你都会获得一枚金币。幸运判定通过时翻倍。\n如果一周均进行了签到，额外获得一枚金币。\n节假日的签到额外获得100点修为。\n"
        },
        {
          "title": "修为计算",
          "url": "\\story\\3\\signin.html#签到-修为计算",
          "content": "修为计算签到获取的修为，为下列数字之和：体质的数值，幸运判定通过时翻倍。\n进行两次疯狂判定，修为加减其乘。\n当前修为的1%。\n-疯狂值。\n"
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
          "content": "战力计算\n战力=(修为+233.3)*发挥系数。\n\n\n发挥系数=(体质判定+疯狂判定)/100。\n\n\n进攻者判定一次幸运，通过则触发暴击，战力翻倍。\n\n\n战力最少也是100点\n\n我不会告诉你，这是因为我不想进行除以0的判断的"
        },
        {
          "title": "结算",
          "url": "\\story\\3\\fight.html#结算",
          "content": "结算战力比r=我方战力/对方战力九死一生：r<0.1，判定一次挫折。\n螳臂当车：0.1<=r<0.6，疯狂+1，体质-2，进行一次体质判定，被对方夺取对应修为。\n略输一筹：0.6<=r<0.9，用20作普通判定，若通过则体质+2。否则进行一次体质判定，被夺取判定结果一半的修为。\n和：0.9<=r<1.1，判定一次体质，双方均获得其之和。\n小胜三分：1.1<=r<2，用20作普通判定，若通过则体质+4。否则进行一次体质判定，夺取对方对应的修为。\n旗开得胜：2<=r<4，判定两次体质，求和，夺取对方对应修为。\n易如反掌：4<=r<7，判定一次体质，夺取对方对应修为。\n辣手摧花：7<=r，失去两百点修为\n如你所见，战力的波动只来自于疯狂，降低疯狂到0，然后和一个人一起互相挑战彼此成长吧！"
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
          "content": "查看表\n\n命令\n反馈\n\n\n\n\n看大佬\n展示玩家修为排行榜\n\n\n查看#物品名\n查看一个物品的描述\n\n\n商店\n进入商店\n\n\n菜单\n显示大部分命令\n\n\n交易所\n进入珠宝交易所\n\n\n成就榜\n查看所有被实现的成就\n\n\n查看#怪物名\n查看一个怪物的描述\n\n\n遗迹\n查看当前位于的遗迹\n\n\n游戏\n你可以体验一款'蜘蛛地雷'的小游戏\n\n\n"
        }
      ]
    },
    {
      "title": "购买",
      "content": "游戏中有商店，也有珠宝交易所。购买和出售，都是必须的指令。\n\n指令\n效果\n\n\n\n\n购买#物品名\n支付对应金币，从商店买入一个道具（宝石将从宝石交易所购买）\n\n\n卖出#物品名\n目前仅可以出售宝石\n\n\n使用#物品名\n以某种方式使用消耗品、兑换券\n\n\n抽奖\n支付三枚金币，随机抽取一个道具（等级越低的道具，越有可能被抽到！）（价格会越抽越高！）\n\n\n",
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
          "content": "选择伴侣双修@某人，对方也双修@你时，获得双修奖励d。d初始值=5，每次双修+5。当对方双修@向别人的时候，这个数值置为零。d不会超过80。"
        }
      ]
    },
    {
      "title": "闭关闭关奖励其他",
      "content": "闭关后你会到藏书阁仔细研究书籍，66天为一个闭关周期（超过66天可以继续闭关，但是没有更多奖励了）。至少闭关10天，才能出关。闭关期间，你不会被挑战，不能签到。总而言之，你无法参与一切事务。闭关奖励十分丰厚！如果你总共闭关了n天，那么你的奖励将是，+N点体质，获得N*N点修为！'出关命令'可以结束闭关。这个指令比较适合真正的在闭关的高三党。",
      "url": "\\story\\3\\inhome.html",
      "children": []
    },
    {
      "title": "其他",
      "content": "这儿是所有其他关键词荟萃。成就榜 显示所有取得了成就的人\n赠送#物品名 选择自己背包里面有的一个物品，赠与和自己双修亲热度>=50的角色\n遗迹 每周周六周日，可以查看当前遗迹\n挑衅#怪物名 挑衅一个怪物\n",
      "url": "\\story\\3\\other.html",
      "children": []
    },
    {
      "title": "作弊码",
      "content": "看似面粉团是铁面无私的讲述人。其实她在暗中支持你。你和她约定，当你在屏幕上打出作弊码#X的时候，你就可以对她做想做的事情。X等于，你的QQ号求和*今天是几号。接着，你就可以获得丰厚奖励。",
      "url": "\\story\\3\\cheat.html",
      "children": []
    },
    {
      "title": "商店",
      "content": "第一次访问商店的时，刷出三种商品。之后每次购入商品时，加入一种新商品。每天0点商店价格会减半。",
      "url": "\\story\\3.5\\shop.html",
      "children": []
    },
    {
      "title": "交易所",
      "content": "宝石交易所，这是一个类似于股市的地方。这儿只能买入或者买出一种东西————宝石！",
      "url": "\\story\\3.5\\block.html",
      "children": [
        {
          "title": "开盘时间",
          "url": "\\story\\3.5\\block.html#开盘时间",
          "content": "开盘时间每日上午9-11点，下午1-3点是开盘时间。节假日等不开盘。"
        },
        {
          "title": "价格",
          "url": "\\story\\3.5\\block.html#价格",
          "content": "价格宝石的价格是浮动的，其某个时刻的价格=基本价格+浮差。基本价格（初始8.0）\n浮差（±1）\n真实价格会忽略尾数。\n"
        },
        {
          "title": "影响价格的因素",
          "url": "\\story\\3.5\\block.html#影响价格的因素",
          "content": "影响价格的因素每发生一次买入，基本价格 +0.6\n每发生一次卖出，基本价格 -0.5\n分红对价格的影响\n开盘的影响\n"
        },
        {
          "title": "开盘的影响",
          "url": "\\story\\3.5\\block.html#开盘的影响",
          "content": "开盘的影响倾向因子r=0，-40<=r=<+40开盘时，昨日若无任何交易行为，基本价格 -1\n若前两日均涨，r增加10。均跌r减少10。一跌一涨r归零。\n涨跌判定：涨的概率为（50+r）%，反之则为跌。涨时基本价格上升（50+r）/100。跌时基本价格下降（50-r）/100\n"
        },
        {
          "title": "价格刷新",
          "url": "\\story\\3.5\\block.html#价格刷新",
          "content": "价格刷新以下这些时候，宝石价格会刷新买入时\n卖出时\n开盘时\n"
        },
        {
          "title": "手续费",
          "url": "\\story\\3.5\\block.html#手续费",
          "content": "手续费采取后端收费，卖出时收取一枚金币作为手续费"
        },
        {
          "title": "卖出",
          "url": "\\story\\3.5\\block.html#卖出",
          "content": "卖出卖出所得将在下个交易日开盘时，玩家进入交易所后发放"
        },
        {
          "title": "分红",
          "url": "\\story\\3.5\\block.html#分红",
          "content": "分红每个月27号时，持有的宝石都会自动分红。注意，当然交易所可能不开放，但是会正常分红。一般而言，是派息分红。每次分红宝石当前价值的10%（向上取整），红利直接打到玩家账户。同时，市面上的宝石价格除权对应价格。也有4%的概率进行一次转赠。一派一。同时，市面上的宝石价格减半。"
        },
        {
          "title": "名词解释",
          "url": "\\story\\3.5\\block.html#名词解释",
          "content": "名词解释涨是指，收盘价格高于开盘价。反之为跌。\n除权，分红后一种特殊的股市行为，将股票价格下调x，x为分红金额。\n"
        }
      ]
    },
    {
      "title": "成就榜",
      "content": "实现了成就的修仙者，是真正征服过这片大陆的人！我们希望你有一天可以进入到这个榜单中，名垂千古！使用'成就榜'来查看所有人取得的成就。",
      "url": "\\story\\3.5\\ache.html",
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
      "content": "具有一定价值，但只要愿意花钱买，总能买到的。C级道具以丹药和石头为主，相对容易获得，但对修炼者的提升仍旧很大。\n这些道具的基准价格是5。",
      "url": "\\story\\4\\C-items.html",
      "children": [
        {
          "title": "道具",
          "url": "\\story\\4\\C-items.html#道具",
          "content": "道具\n\n道具名\n图标\n价格\n作用\n描述\n\n\n\n\n回气丹\n\n5～5\n体质+5\n修炼者必备，用于快速回复\n\n\n伤药\n\n2～8\n服用后，抵消下一次修为减少\n务必理性用药\n\n\n红药水\n\n6～6\n疯狂+3，体质+9\n疯狂，躁动，反应\n\n\n增幅药剂\n\n2～8\n疯狂+2，你下次获取修为的时候，翻倍\n俗称“大力丸”\n\n\n复合药\n\n1～1\n体质+2，疯狂-2，修为+10\n家中常备\n\n\n序列I\n\n2～2\n50%概率获得4金币，10%概率幸运+1，0.2%概率获取100金币\n梦幻\n\n\n月石\n\n1～7\n月光越盛，月石效果越强！\n一闪一闪亮晶晶\n\n\n邪气石\n\n1～2\n疯狂+3，每有5点疯狂，金币+1(最多加10)\n黑暗府邸的产物\n\n\n灵石\n\n1～7\n70%概率修为+100，30%概率+300\n其中蕴含着灵气，只是不大好消化\n\n\n闪回石\n\n7～7\n疯狂-7，超过部分加体质\n其上有闪电回文\n\n\n小钱袋\n\n1～6\n投一颗骰子（1-6），获得等量金币与疯狂\n嘿，这是我的自来水厂\n\n\n小树苗\n\n2～9\n种下五天后，小树苗就会成熟\n众所周知这是个收菜游戏\n\n\n润肺露\n\n12～15\n增加一定体质（随月份），疯狂-1，修为+5\n春斗酒，夏读书，秋结社，冬染病\n\n\n"
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
          "content": "B级道具人类智慧的结晶，一些工艺品，一些名贵药剂。B级道具的基准价格是15。"
        },
        {
          "title": "道具",
          "url": "\\story\\4\\B-items.html#b级道具-道具",
          "content": "道具\n\n道具名\n图标\n价格\n作用\n描述\n\n\n\n\n九转丹\n\n33～33\n体质在60以下的+26，否则+13\n昂贵，但十分有效\n\n\n序列9\n\n1～14\n体质-9，幸运+1\n薄幸\n\n\n序列3\n\n1～14\n修为+333\n质朴\n\n\n小红花\n\n1～1\n立即做一件好事！\n幼儿园里用来奖励好孩子的道具\n\n\n护身符\n\n12~12\n24h之内！幸运+5！\n全球限量·寺庙之光·内置写真·守计大师·开光版\n\n\n灵芝\n\n12~12\n体质-13，疯狂-13。失去700修为，获得700点修为。\n活血清毒，激发潜能\n\n\n混乱药剂\n\n12~13\n立即使用一瓶随机药水\n他们叫我加入，我就加入了！\n\n\n序列X\n\n7～17\n做一次疯狂判定，取平方。70%失去修为，30%获得修为。若失去修为，会重新获得此物品。\n诱惑\n\n\n窃贼指环\n\n11～22\n商店最低价商品和最高价商品，交换价格\n是...是置换反应！\n\n\n疾跑药水\n\n2～13\n重置今日签到次数\n多喝些一氧化二氢吧！\n\n\n"
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
          "content": "A级道具久经过人工雕琢之物，能提供极大的价值。这一等级开始出现宝物。这一等级的道具基准价格是40。"
        },
        {
          "title": "道具",
          "url": "\\story\\4\\A-items.html#道具",
          "content": "道具\n\n道具名\n图标\n价格\n作用\n描述\n\n\n\n\n小猪钱罐\n\n200～200\n现在你每次签到，都有50%机会获得2枚金币。使用金币后失效\n谁还不是一个有梦想的人呢\n\n\n圣水\n\n40～40\n如果疯狂刚好等于1，幸运+1，修为+800，否则疯狂-11\n服用即庇护\n\n\n倍金配方\n\n22～88\n投入一枚金币进行研究，成功获得100枚金币。失败再次获得此配方。\n参悟成功即可点石成金\n\n\n神偷手套\n\n22～88\n'偷取@一名角色' 立即偷取对方上次获得的修为\n金霞山论极谁主英雄\n\n\n天山雪莲\n\n7~33\n增加修为到能整除1000\n登人任歌指羽，长卷应天能怜\n\n\n药书\n\n22～88\n将你的每枚金币都变成一颗灵芝\n看上去是个医生的呱太\n\n\n缩小药片\n\n437～437\n修为减半！4h后你将复原！\n头脑虽然变小了，身体却依旧灵活！\n\n\n"
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
          "content": "S级宝物不可多得！强大！瑰宝！"
        },
        {
          "title": "道具",
          "url": "\\story\\4\\S-items.html#道具",
          "content": "道具\n\n道具名\n图标\n价格\n作用\n描述\n\n\n\n\n传家宝\n\n999～999\n立即获得当前商店中所有商品！\n每个家庭都有一个传家宝，当然其中有一些可能是地摊货\n\n\n一沓假钞\n\n999～999\n疯狂+30。金币+999，30s后，失去全部金币！\n为我们的苦难复仇！\n\n\n序列V\n\n999～999\n贪婪之神将为你服务！\n想在舞会上击倒恶魔，需要一点点技巧\n\n\n收税卡\n\n999～999\n所有玩家(修为超过你的）立即给你一个金币\n5000元是中华人民共和国个税起征点\n\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "\\story\\4\\sp-items.html",
      "children": [
        {
          "title": "特殊道具",
          "url": "\\story\\4\\sp-items.html#特殊道具",
          "content": "特殊道具非常规的，特别的商品。"
        },
        {
          "title": "道具",
          "url": "\\story\\4\\sp-items.html#道具",
          "content": "道具\n\n道具名\n图标\n价格\n作用\n描述\n\n\n\n\n许愿币\n\n1～1\n使用后，进行一次许愿\n众知杯秘\n\n\n小金箔\n\n1～1\n熔断后，刚好价值一个金币\n为了荣誉而赠。\n\n\n宝石\n\n1～1\nRuby、Sapphire、Spinel、Cobalt、Jadeite、Agate、ANDMORE\n大自然美轮美奂\n\n\n饮料币\n\n1~1\n获得5枚金币\n经法定程序判决后，可以兑换一瓶饮料\n\n\n序列IV\n\n4~44\n修为-4444，获得44枚金币\n机遇\n\n\n人参\n\n12~17\n体质+20，三天之内修为无法变化\n萃取精华后可以炼制九转丹\n\n\n焚血\n\n999～999\n每周一次，体质+500维持5分钟 -- 传说中的名剑\n我要焚烧这个世界，然后统治他们的灰烬\n\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "\\story\\4\\ban-items.html",
      "children": [
        {
          "title": "违禁品",
          "url": "\\story\\4\\ban-items.html#违禁品",
          "content": "违禁品以下这些道具，因为造成数值变化过大，或其他方面等原因，商店和抽奖中将不会再出现他们。使用关键词'违禁品'来查看之。"
        },
        {
          "title": "道具",
          "url": "\\story\\4\\ban-items.html#道具",
          "content": "道具\n\n道具名\n图标\n价格\n作用\n描述\n\n\n\n\n归零膏\n\n23~123\n让你的负数修为归零，每因此增加100点修为，获得一枚金币\n禁止谐音梗！\n\n\n放大药水\n\n133～146\n进入放大状态！1h后你将复原！\n配合巨化术可以8000斩\n\n\n缩小药水\n\n133～146\n进入缩小状态！1h后你将复原！\n与空气炮，记忆面包同一时间出土\n\n\n灵火\n\n37～37\n体质-2，今天内每次失去修为，体质都+1\n伤痛，是最好的特效药\n\n\n大力丸\n\n17～27\n下一次战斗战力*1.3（可以服用多颗）\n连吃13颗可以毁天灭地！\n\n\n玻璃碎刃\n\n1~1\n疯狂+5，下一次攻击必定暴击\n谁还没有小时候踢球踢碎过一面镜子呢\n\n\n忘忧草\n\n123~123\n重置体质为50，疯狂为5\n从头再来\n\n\n聚魔瓶\n\n4～4\n未知\n闪烁着诡异的光泽\n\n\n"
        }
      ]
    },
    {
      "title": "怪兽入侵",
      "content": "有时候，野怪会突然出现！他们由强大的首领率领，尝试击杀他们的首领！这样，下次他们就不会来犯！",
      "url": "\\story\\5\\happen.html",
      "children": [
        {
          "title": "规则",
          "url": "\\story\\5\\happen.html#规则",
          "content": "规则每周周六、周日晚七点-八点时，一组遗迹将开放。全部玩家均可使用\"挑衅#怪物名\"的方式来攻击怪物。每次开放中，可以挑战一次。怪物分为三种，小兵（弱小，不值一提）（无限个）\n队长（中规中矩的强大）（无限个）\n首领（不可一世！）（1个）\n一般而，被小兵打败无惩罚。被队长打败疯狂+5。被首领打败，疯狂+25！"
        }
      ]
    },
    {
      "title": "怪物组",
      "content": "修仙大陆有很多很多怪物，有的雄踞一方，也有的遥远宛如传说...下边，异常生物采集社将为您报道他们所采集到的一些异常生物。",
      "url": "\\story\\5\\monster1.html",
      "children": [
        {
          "title": "北境雷山",
          "url": "\\story\\5\\monster1.html#北境雷山",
          "content": "北境雷山横亘在北方的巨大山脉，土地黝黑，寸草不生，天雷滚滚。上缚一龙，不见其首尾，终日嘶吼！首领-闪电雷龙 感受大自然的闪电风暴吧！\n//本社按：因闪电雷龙释放出的电弧，高度影响电磁场，我们未能为其拍摄到照片。修为：7k三相：体质3k | 疯狂1k | 幸运5战斗效果：参战双方战力，均乘以疯狂值掉落：闪回石*22，缩小药水，忘忧草成就：屠龙者！队长-天雷阵\n修为：100三相：体质10 | 疯狂0 | 幸运0战斗效果：交换双方修为，战后复原掉落：随机B级道具小兵-雷龙\n修为：1k三相：体质100 | 疯狂10 | 幸运5战斗效果：无掉落：闪回石"
        },
        {
          "title": "海妖弧岛",
          "url": "\\story\\5\\monster1.html#海妖弧岛",
          "content": "海妖弧岛南部地区海船流传着这么一个传说...风暴过后，船只可能误打误撞进入一片弧形的岛屿周围的海域。那儿有赤裸乳房的女人，也有世界上最好听的歌声，但去过的人都没再回来...首领-深海女皇 请君听一曲~\n修为：10w三相：体质400 | 疯狂40 | 幸运100战斗效果：玩家疯狂+100。移除玩家身上所有状态！掉落：传家宝，金币*200成就：击杀海妖女皇！队长-小海妖\n修为：1k三相：体质200 | 疯狂40 | 幸运80战斗效果：玩家疯狂+10。掉落：随机B级道具小兵-无知渔民\n修为：600三相：体质100 | 疯狂400 | 幸运0战斗效果：无掉落：随机C级道具"
        },
        {
          "title": "鲜花城堡",
          "url": "\\story\\5\\monster1.html#鲜花城堡",
          "content": "鲜花城堡据说，西北部城区有一个地下机构，叫做鲜花城堡。黑市，妓院，赌坊，雇佣兵，杀手，乱匠...这儿应有尽有。据说...还有一个性别不明的...主人。年龄不详，性别未定，只知道TA的一个签名...花语y。首领-花语y 让世界再多一点点爱~\n//本社按：花语y接受了采访，但强烈要求我们用这片旗子替代Ta的真容。修为：88888三相：体质200 | 疯狂40 | 幸运10战斗效果：使用百宝箱！以及...随时跑路！（只有11.23后才可击杀此BOSS）掉落：花语y的百宝箱成就：辣手摧花！队长-采集客\n修为：1k三相：体质100 | 疯狂40 | 幸运60战斗效果：对你使用一次‘神偷手套’掉落：随机B级道具小兵-雇佣兵\n修为：8k三相：体质800 | 疯狂0 | 幸运0战斗效果：无掉落：10枚金币"
        }
      ]
    },
    {
      "title": "怪物组",
      "content": "异常生物采集社按，上一次采集情报致使本社几乎被团灭，这一次我们尝试进入一些较为温和的地区来采集情报。如果你志于成为我们的一员，欢迎投递你的简历！unnomorlmonsterfinderclub@gmail.com",
      "url": "\\story\\5\\monster2.html",
      "children": [
        {
          "title": "滴血洞窟",
          "url": "\\story\\5\\monster2.html#滴血洞窟",
          "content": "滴血洞窟西北高纬地区向来干燥少雨，那里的人民不服教管，迷信，喜好丧葬事宜，在雷山左翼喀斯特地貌处立起迷宫般的坟冢。。。好吧，此行我们是去做盗墓贼的。。。首领-骸骨大将 要么加入我的身体，要么退出此地！\n修为：-2k三相：体质1k | 疯狂100 | 幸运0战斗效果：计算战力时，双方修为均乘以-1掉落：焚血成就：令其死亡！队长-蝙蝠群\n修为：400*蝙蝠数三相：体质70 | 疯狂100 | 幸运0战斗效果：你可能面对一群蝙蝠！掉落：1G/每只蝙蝠小兵-绞首巨蟒\n修为：370*你的物品数三相：体质100 | 疯狂10 | 幸运5战斗效果：此怪物战力会乘上挑衅者物品数掉落：随机B/C级道具"
        },
        {
          "title": "废弃神殿",
          "url": "\\story\\5\\monster2.html#废弃神殿",
          "content": "废弃神殿西北部城区，隐蔽树林密道处，可进入一个半截入土的废弃圣殿。黑道上传闻，那里在进行一些足以推翻当局的大动作。。。首领-晴空号 腾飞时耸入云霄，陨落时大地震颤。\n修为：100三相：体质4w | 疯狂0 | 幸运0战斗效果：双方以体质与修为之比参战掉落：神偷手套*3成就：焚毁晴空号！队长-地下迷宫\n修为：1三相：体质1 | 疯狂1 | 幸运1战斗效果：玩家必败！除非这是你第7*k（k∈N）次挑衅！掉落：随机S级道具小兵-眼中钉\n修为：8三相：体质0 | 疯狂0 | 幸运0战斗效果：战斗仅比较修为尾数掉落：随机A级道具"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "\\story\\0\\copyright.html",
      "children": [
        {
          "title": "软件信息",
          "url": "\\story\\0\\copyright.html#软件信息",
          "content": "软件信息\n\n项目\n***\n\n\n\n\n软件版本\nv0.7\n\n\n代号\nMFT\n\n\n开发者\n蒸发杰作\n\n\n项目地址\ngithub\n\n\n鸣谢\n@群主，@半脸人\n\n\n提供援助\n\n\n\n"
        }
      ]
    },
    {
      "title": "放弃的想法",
      "content": "因为也是初次开发游戏。对很多具体内容并不足够熟悉。例如数值平衡，游戏性等等。中间有过很多想法，后来有不少想法放弃了，这儿罗列一下，以供抛砖引玉。",
      "url": "\\story\\0\\quit.html",
      "children": [
        {
          "title": "统计数据",
          "url": "\\story\\0\\quit.html#统计数据",
          "content": "统计数据这个开发很简单。最终能做到的是每个用户查看他们的抽奖次数，或者其他数据，以及所有玩家的发言数等等。因为没有必要，最终没有开发。"
        },
        {
          "title": "任务系统",
          "url": "\\story\\0\\quit.html#任务系统",
          "content": "任务系统任务系统非常难以开发。一开始我考虑个人任务和全体任务可以并行。但因为额外任务量过大，而且需要在原有系统系统上开发新的分支，最终放弃。（实际上，后期任务量都用来去加道具去了。）"
        },
        {
          "title": "事件系统",
          "url": "\\story\\0\\quit.html#事件系统",
          "content": "事件系统本来还打算创建一些可能随时触发的事件。后取消。"
        },
        {
          "title": "其他后续版本中可以加入的东西",
          "url": "\\story\\0\\quit.html#事件系统-其他后续版本中可以加入的东西",
          "content": "其他后续版本中可以加入的东西当前版本不再加入任何新功能。"
        }
      ]
    }
  ]
}