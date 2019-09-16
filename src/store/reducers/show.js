import { ADD_COMMENT, CHANGE_GOOD } from "../cationType";
const inititalState = {
  show: [
    {
      img:
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/f50e4860-c62e-11e9-99fa-d9b98f91f971.jpg",
      id: "11",
      times: "12",
      goods: 159,
      isGood: ["myid"],
      styleType: "",
      type: "now",
      follow: "394",
      reply: "9",
      info: {
        img:
          "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/871bd330-c7b0-11e9-b830-331143d1bdec.jpg",
        author:
          "肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
        content:
          "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。",
        pics: [
          "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/8722d810-c7b0-11e9-b830-331143d1bdec.jpg",
          "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/8735c3d0-c7b0-11e9-b830-331143d1bdec.jpg",
          "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/872a2b10-c7b0-11e9-b830-331143d1bdec.jpg"
        ],
        comments: [
          {
            id: "111",
            author: "啊啊11",
            img: "https://coding.net/static/project_icon/scenery-10.png",
            time: "2016/8/12",
            content: "杨丽萍，很美1111111"
          },
          {
            id: "1112",
            author: "啊啊22",
            img: "https://coding.net/static/project_icon/scenery-10.png",
            time: "2016/8/12",
            content: "杨丽萍，很美222222"
          },
          {
            id: "1113",
            author: "啊啊33",
            img: "https://coding.net/static/project_icon/scenery-10.png",
            time: "2016/8/12",
            content: "杨丽萍，很美3333"
          },
          {
            id: "1114",
            author: "啊啊44",
            img: "https://coding.net/static/project_icon/scenery-10.png",
            time: "2016/8/12",
            content: "杨丽萍，很美4444"
          },
          {
            id: "1115",
            author: "啊啊55",
            img: "https://coding.net/static/project_icon/scenery-10.png",
            time: "2016/8/12",
            content: "杨丽萍，很美55555"
          }
        ]
      }
    },
    {
      img:
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/f519e120-c62e-11e9-99fa-d9b98f91f971.jpg",
      id: "12",
      times: "12",
      goods: 159,
      isGood: ["myid"],
      styleType: "",
      type: "now",
      follow: "394",
      reply: "9",
      info: [
        {
          author:
            "肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
          content:
            "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。"
        }
      ]
    },
    {
      img:
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/f525ef10-c62e-11e9-99fa-d9b98f91f971.jpg",
      id: "13",
      times: "12",
      goods: 159,
      isGood: [],
      styleType: "zhan",
      type: "now",
      follow: "394",
      reply: "9",
      info: [
        {
          author:
            "肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
          content:
            "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。"
        }
      ]
    },
    {
      img:
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/f52f16d0-c62e-11e9-99fa-d9b98f91f971.jpg",
      id: "14",
      times: "12",
      goods: 159,
      isGood: ["myid"],
      styleType: "wen",
      type: "now",
      follow: "394",
      reply: "9",
      info: [
        {
          author:
            "肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
          content:
            "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。"
        }
      ]
    },
    {
      img:
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/f5375430-c62e-11e9-99fa-d9b98f91f971.jpg",
      id: "15",
      times: "12",
      goods: 159,
      isGood: ["myid"],
      styleType: "wen",
      type: "now",
      follow: "394",
      reply: "9",
      info: [
        {
          author:
            "肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
          content:
            "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。"
        }
      ]
    },
    {
      img:
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/dbffc3a0-c631-11e9-99fa-d9b98f91f971.jpg",
      id: "21",
      times: "12",
      goods: 159,
      isGood: [],
      styleType: "wen",
      type: "will",
      follow: "394",
      reply: "9",
      info: [
        {
          author:
            "肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
          content:
            "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。"
        }
      ]
    },
    {
      img:
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/dc0fa220-c631-11e9-99fa-d9b98f91f971.jpg",
      id: "22",
      times: "12",
      goods: 159,
      isGood: ["myid"],
      styleType: "zhan",
      type: "will",
      follow: "394",
      reply: "9",
      info: [
        {
          author:
            "肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
          content:
            "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。"
        }
      ]
    },
    {
      img:
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/dc148420-c631-11e9-99fa-d9b98f91f971.jpg",
      id: "33",
      times: "12",
      goods: 159,
      isGood: [],
      styleType: "zhan",
      type: "will",
      follow: "394",
      reply: "9",
      info: {
        img:
          "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/c8587150-c7dd-11e9-9734-27c7b226d101.jpg",
        author:
          "曾梵志，1964年出生于湖北武汉市，1991年毕业于湖北美术学院油画系。从二十世纪九十年代起，曾梵志的创作以具有独特的语言风格和敏锐的社会批判，受到评论界广泛的赞誉，也得到社会民众的持续关注。",
        content:
          "9月19日，中国当代艺术家曾梵志迄今为止规模最大、涵盖最广泛的展览《散步》将在尤伦斯当代艺术中心举行。北京。9月19日，中国当代艺术家曾梵志迄今为止规模最大、涵盖最广泛的展览《散步》将在尤伦斯当代艺术中心举行。本次展览由UCCA馆长田霏宇与郭希联合策划，囊括以油彩、木材、金属、纸本等材料创作的60余件作品，反映了艺术家近30年的持续向创作概貌。",
        pics: [
          "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/c86346c0-c7dd-11e9-9734-27c7b226d101.jpg",
          "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/c86edf80-c7dd-11e9-9734-27c7b226d101.jpg",
          "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/c8601270-c7dd-11e9-9734-27c7b226d101.jpg",
          "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/c8752110-c7dd-11e9-9734-27c7b226d101.jpg"
        ],
        comments: [
          {
            id: "33111",
            author: "啊啊11",
            img: "https://coding.net/static/project_icon/scenery-10.png",
            time: "2016/8/12",
            content: "曾梵志 曾梵志"
          },
          {
            id: "331112",
            author: "啊啊22",
            img: "https://coding.net/static/project_icon/scenery-10.png",
            time: "2016/8/12",
            content: "曾梵志 曾梵志"
          },
          {
            id: "331113",
            author: "啊啊33",
            img: "https://coding.net/static/project_icon/scenery-10.png",
            time: "2016/8/12",
            content: "曾梵志 曾梵志 曾梵志"
          },
          {
            id: "331114",
            author: "啊啊44",
            img: "https://coding.net/static/project_icon/scenery-10.png",
            time: "2016/8/12",
            content: "曾梵志 曾梵志  ......"
          },
          {
            id: "331115",
            author: "啊啊55",
            img: "https://coding.net/static/project_icon/scenery-10.png",
            time: "2016/8/12",
            content: "曾梵志 哈哈哈哈哈哈"
          }
        ]
      }
    },
    {
      img:
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/dc1bd720-c631-11e9-99fa-d9b98f91f971.jpg",
      id: "44",
      times: "12",
      goods: 159,
      isGood: [],
      styleType: "zhan",
      type: "will",
      follow: "394",
      reply: "9",
      info: [
        {
          author:
            "肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
          content:
            "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。"
        }
      ]
    },
    {
      img:
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/dc167ff0-c631-11e9-99fa-d9b98f91f971.jpg",
      id: "55",
      times: "12",
      goods: 159,
      isGood: ["myid"],
      styleType: "wen",
      type: "will",
      follow: "394",
      reply: "9",
      info: [
        {
          author:
            "肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
          content:
            "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。"
        }
      ]
    }
  ]
};

export default (state = inititalState, action) => {
  const { newComment, callBack, id } = action;
  switch (action.type) {
    case ADD_COMMENT:
      const showFind = state.show.filter(item => item.id === id);
      // console.log(showCurrent);
      const newComments = [...showFind[0].info.comments, newComment];
      const infoCurrent = { ...showFind[0].info, comments: newComments };
      const showCurrent = { ...showFind[0], info: infoCurrent };
      const show = [...state.show.filter(item => item.id !== id)];
      show.push(showCurrent);
      callBack();
      return { show };
    case CHANGE_GOOD:
      const newState = { show: [...state.show] };
      const newObj = newState.show.find(item => item.id === id);
      if (newObj.isGood.length) {
        newObj.isGood = [];
        newObj.goods = newObj.goods - 1;
      } else {
        newObj.isGood.push("myid");
        newObj.goods = newObj.goods + 1;
      }
      return newState;
    default:
      return state;
  }
};
