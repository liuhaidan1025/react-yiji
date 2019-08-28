import { ADD_COMMENT, CHANGE_GOOD } from "../cationType";
const inititalState = {
  show: [
    {
      img:
        "https://coding-net-production-file-ci.codehub.cn/f50e4860-c62e-11e9-99fa-d9b98f91f971.jpg?sign=/QNo8U5R7k8Z3P23B79wvjnan9VhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODQwMDYyJnQ9MTU2NjYyNDA2MiZyPTU2MzI2OTA4JmY9L2Y1MGU0ODYwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
          "https://coding-net-production-file-ci.codehub.cn/871bd330-c7b0-11e9-b830-331143d1bdec.jpg?sign=K1YaFIin7cSlI3fesknCTKW+CvlhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MDA1NjY0JnQ9MTU2Njc4OTY2NCZyPTQ3Nzk0NDI2JmY9Lzg3MWJkMzMwLWM3YjAtMTFlOS1iODMwLTMzMTE0M2QxYmRlYy5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        author:
          "肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
        content:
          "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。",
        pics: [
          "https://coding-net-production-file-ci.codehub.cn/8722d810-c7b0-11e9-b830-331143d1bdec.jpg?sign=RZ1dYx7ppuftIIE7lo/0K5iADyhhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MDA1NzYzJnQ9MTU2Njc4OTc2MyZyPTkxMDM5NTEmZj0vODcyMmQ4MTAtYzdiMC0xMWU5LWI4MzAtMzMxMTQzZDFiZGVjLmpwZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl",
          "https://coding-net-production-file-ci.codehub.cn/8735c3d0-c7b0-11e9-b830-331143d1bdec.jpg?sign=HPz1P5zRrYJxXO7/RM9o/bkE5OlhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MDA1Nzg1JnQ9MTU2Njc4OTc4NSZyPTQ3NTIyMTY5JmY9Lzg3MzVjM2QwLWM3YjAtMTFlOS1iODMwLTMzMTE0M2QxYmRlYy5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
          "https://coding-net-production-file-ci.codehub.cn/872a2b10-c7b0-11e9-b830-331143d1bdec.jpg?sign=m79n4Zbif8GQmVmPx+bUa0kvIddhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MDA1ODA3JnQ9MTU2Njc4OTgwNyZyPTQwMjU0MDImZj0vODcyYTJiMTAtYzdiMC0xMWU5LWI4MzAtMzMxMTQzZDFiZGVjLmpwZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl"
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
        "https://coding-net-production-file-ci.codehub.cn/f519e120-c62e-11e9-99fa-d9b98f91f971.jpg?sign=5NUrKhB+fQ9Xa+JYCPpvpAFfEpFhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODQwMDg3JnQ9MTU2NjYyNDA4NyZyPTUxMjQ4MjgzJmY9L2Y1MTllMTIwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
        "https://coding-net-production-file-ci.codehub.cn/f525ef10-c62e-11e9-99fa-d9b98f91f971.jpg?sign=U3fUIo9dCPjDoMQOaV0EifHYHxRhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODQwMTEyJnQ9MTU2NjYyNDExMiZyPTg1ODUxNjg4JmY9L2Y1MjVlZjEwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
      id: "13",
      times: "12",
      goods: 159,
      isGood: [],
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
        "https://coding-net-production-file-ci.codehub.cn/f5375430-c62e-11e9-99fa-d9b98f91f971.jpg?sign=12OcDOEh/7T7FtoSBeU6yKCPQa5hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODQwMTIyJnQ9MTU2NjYyNDEyMiZyPTgxODc3NjYyJmY9L2Y1Mzc1NDMwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
      id: "14",
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
        "https://coding-net-production-file-ci.codehub.cn/f52f16d0-c62e-11e9-99fa-d9b98f91f971.jpg?sign=+ecDVZCGEmb/tOXAPOOk0OP0EUZhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODQwMTUzJnQ9MTU2NjYyNDE1MyZyPTYxNzgxNzEzJmY9L2Y1MmYxNmQwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
        "https://coding-net-production-file-ci.codehub.cn/dbffc3a0-c631-11e9-99fa-d9b98f91f971.jpg?sign=SyIPq6f9ohLWDVGP9VaWIWdzkLNhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODQxMzE5JnQ9MTU2NjYyNTMxOSZyPTk5MjM4MDYwJmY9L2RiZmZjM2EwLWM2MzEtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
        "https://coding-net-production-file-ci.codehub.cn/dc0fa220-c631-11e9-99fa-d9b98f91f971.jpg?sign=i3pFpKLIpyqMcJrTtRQNRdie3F9hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODQxMzc3JnQ9MTU2NjYyNTM3NyZyPTIxMjQxNDMmZj0vZGMwZmEyMjAtYzYzMS0xMWU5LTk5ZmEtZDliOThmOTFmOTcxLmpwZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl",
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
        "https://coding-net-production-file-ci.codehub.cn/dc148420-c631-11e9-99fa-d9b98f91f971.jpg?sign=jesJAalH04Yl4BGODg9hj6r792ZhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODQxNDA0JnQ9MTU2NjYyNTQwNCZyPTYxNTk4NTgzJmY9L2RjMTQ4NDIwLWM2MzEtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
          "https://coding-net-production-file-ci.codehub.cn/c8587150-c7dd-11e9-9734-27c7b226d101.jpg?sign=9hY6ysoUmGHQoW9NmnJLkcKYQYFhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MDI1MTA0JnQ9MTU2NjgwOTEwNCZyPTEwNDkwMzEyJmY9L2M4NTg3MTUwLWM3ZGQtMTFlOS05NzM0LTI3YzdiMjI2ZDEwMS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        author:
          "曾梵志，1964年出生于湖北武汉市，1991年毕业于湖北美术学院油画系。从二十世纪九十年代起，曾梵志的创作以具有独特的语言风格和敏锐的社会批判，受到评论界广泛的赞誉，也得到社会民众的持续关注。",
        content:
          "9月19日，中国当代艺术家曾梵志迄今为止规模最大、涵盖最广泛的展览《散步》将在尤伦斯当代艺术中心举行。北京。9月19日，中国当代艺术家曾梵志迄今为止规模最大、涵盖最广泛的展览《散步》将在尤伦斯当代艺术中心举行。本次展览由UCCA馆长田霏宇与郭希联合策划，囊括以油彩、木材、金属、纸本等材料创作的60余件作品，反映了艺术家近30年的持续向创作概貌。",
        pics: [
          "https://coding-net-production-file-ci.codehub.cn/c86346c0-c7dd-11e9-9734-27c7b226d101.jpg?sign=tONpudxuQQYG5377RdkPq1xCq/dhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MDI1MjMyJnQ9MTU2NjgwOTIzMiZyPTExOTkzMjk4JmY9L2M4NjM0NmMwLWM3ZGQtMTFlOS05NzM0LTI3YzdiMjI2ZDEwMS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
          "https://coding-net-production-file-ci.codehub.cn/c86edf80-c7dd-11e9-9734-27c7b226d101.jpg?sign=TmaHh8jS2h+ESk1WONl4hCnPqMxhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MDI1MjU3JnQ9MTU2NjgwOTI1NyZyPTYyMzg4NzA1JmY9L2M4NmVkZjgwLWM3ZGQtMTFlOS05NzM0LTI3YzdiMjI2ZDEwMS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
          "https://coding-net-production-file-ci.codehub.cn/c8601270-c7dd-11e9-9734-27c7b226d101.jpg?sign=jim/z76sVanAVJJrFBFnkPsomHphPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MDI1Mjc3JnQ9MTU2NjgwOTI3NyZyPTg0NTgyOTA4JmY9L2M4NjAxMjcwLWM3ZGQtMTFlOS05NzM0LTI3YzdiMjI2ZDEwMS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
          "https://coding-net-production-file-ci.codehub.cn/c8752110-c7dd-11e9-9734-27c7b226d101.jpg?sign=jBy6GGkmj8Yug7M6zLzB2WD5rBphPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MDI1MzAwJnQ9MTU2NjgwOTMwMCZyPTQ2Mzk0MzA2JmY9L2M4NzUyMTEwLWM3ZGQtMTFlOS05NzM0LTI3YzdiMjI2ZDEwMS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
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
        "https://coding-net-production-file-ci.codehub.cn/dc167ff0-c631-11e9-99fa-d9b98f91f971.jpg?sign=i61LJf5h3bS14w0YJtjXQHS9h3phPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODQxNDM4JnQ9MTU2NjYyNTQzOCZyPTIxNTM3OTMyJmY9L2RjMTY3ZmYwLWM2MzEtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
        "https://coding-net-production-file-ci.codehub.cn/dc1bd720-c631-11e9-99fa-d9b98f91f971.jpg?sign=4cXtdsVEoCentCJynyxJBCCAfrlhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODQxNDYxJnQ9MTU2NjYyNTQ2MSZyPTY5ODg5ODAyJmY9L2RjMWJkNzIwLWM2MzEtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
