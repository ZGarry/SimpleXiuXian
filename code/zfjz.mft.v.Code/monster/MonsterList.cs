﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zfjz.mft.v.Code.monster
{
    //怪物列表-其他地方就只需要存储怪物的名字，可以来这儿寻找怪物
    static public class MonsterList
    {
        static public Dictionary<string, Monster> Monsters = new Dictionary<string, Monster>
        {
            {      "小雷龙", new 小雷龙()},
            {      "天雷阵", new 天雷阵()},
            {      "闪电雷龙", new 闪电雷龙()},


            {      "小海妖", new 小海妖()},
            {      "无知渔民", new 无知渔民()},

            {      "花语y", new 花语y()},
            {      "采集客", new 采集客()},
            {      "雇佣兵", new 雇佣兵()},

            {      "骸骨大将", new 骸骨大将()},
            {      "蝙蝠群", new 蝙蝠群()},
            {      "绞首巨蟒", new 绞首巨蟒()},


            {      "晴空号", new 晴空号()},
            {      "地下迷宫", new 地下迷宫()},
            {      "眼中钉", new 眼中钉()},

        };
    }
}
