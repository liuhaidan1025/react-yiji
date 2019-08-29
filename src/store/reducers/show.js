import { ADD_COMMENT, CHANGE_GOOD } from "../cationType";
const inititalState = {
  show: [
    {
      img:
        "https://coding-net-production-file-ci.codehub.cn/f50e4860-c62e-11e9-99fa-d9b98f91f971.jpg?sign=IzXJRpqP/247citVs6SBbK8EN/FhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxMzkwJnQ9MTU2NzA0NTM5MCZyPTY4OTQ0NzgwJmY9L2Y1MGU0ODYwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
          "https://coding-net-production-file-ci.codehub.cn/871bd330-c7b0-11e9-b830-331143d1bdec.jpg?sign=vx2wuV2chX1RuqedbJ5FpbSDlwthPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxOTc5JnQ9MTU2NzA0NTk3OSZyPTUwODA2OTEzJmY9Lzg3MWJkMzMwLWM3YjAtMTFlOS1iODMwLTMzMTE0M2QxYmRlYy5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        author:
          "肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师”。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
        content:
          "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。",
        pics: [
          "https://coding-net-production-file-ci.codehub.cn/8722d810-c7b0-11e9-b830-331143d1bdec.jpg?sign=fhjUtUWS1LeUwT8ORlsowAE+GHdhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxOTMwJnQ9MTU2NzA0NTkzMCZyPTg3MTcxNzk1JmY9Lzg3MjJkODEwLWM3YjAtMTFlOS1iODMwLTMzMTE0M2QxYmRlYy5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
          "https://coding-net-production-file-ci.codehub.cn/8735c3d0-c7b0-11e9-b830-331143d1bdec.jpg?sign=S66jHKUo9AJH5FBB1RFQB2clDzdhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYyMDI0JnQ9MTU2NzA0NjAyNCZyPTk0MjI1NDgyJmY9Lzg3MzVjM2QwLWM3YjAtMTFlOS1iODMwLTMzMTE0M2QxYmRlYy5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
          "https://coding-net-production-file-ci.codehub.cn/872a2b10-c7b0-11e9-b830-331143d1bdec.jpg?sign=/IE7HRX2q9vfKi8g1icReDNPPdxhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYyMDAyJnQ9MTU2NzA0NjAwMiZyPTQxOTM2MDA3JmY9Lzg3MmEyYjEwLWM3YjAtMTFlOS1iODMwLTMzMTE0M2QxYmRlYy5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
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
        "https://coding-net-production-file-ci.codehub.cn/f519e120-c62e-11e9-99fa-d9b98f91f971.jpg?sign=xXwIB3aR1isdhuWDIDq4ovRRkQ5hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxNTM3JnQ9MTU2NzA0NTUzNyZyPTYyNzMyMTMwJmY9L2Y1MTllMTIwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
        "https://coding-net-production-file-ci.codehub.cn/f525ef10-c62e-11e9-99fa-d9b98f91f971.jpg?sign=GaSZoKJduoE1Qz0oX2xRkH+BXwVhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxNTY0JnQ9MTU2NzA0NTU2NCZyPTg3NzU5ODA1JmY9L2Y1MjVlZjEwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
        "https://coding-net-production-file-ci.codehub.cn/f5375430-c62e-11e9-99fa-d9b98f91f971.jpg?sign=iaX9bheUty5zNy+tf+IJffnc/XlhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxNjEwJnQ9MTU2NzA0NTYxMCZyPTc3ODgyNjAmZj0vZjUzNzU0MzAtYzYyZS0xMWU5LTk5ZmEtZDliOThmOTFmOTcxLmpwZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl",
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
        "https://coding-net-production-file-ci.codehub.cn/f52f16d0-c62e-11e9-99fa-d9b98f91f971.jpg?sign=XZ4BPU7R8KuIMPEpsRXO6FUU4pxhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxNjM3JnQ9MTU2NzA0NTYzNyZyPTUwOTUzMjMyJmY9L2Y1MmYxNmQwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
        "https://coding-net-production-file-ci.codehub.cn/dbffc3a0-c631-11e9-99fa-d9b98f91f971.jpg?sign=+IGo9Aal6QitORVaBULApaRIEvBhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxNjg2JnQ9MTU2NzA0NTY4NiZyPTYzNDAyNjQzJmY9L2RiZmZjM2EwLWM2MzEtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
        "https://coding-net-production-file-ci.codehub.cn/dc0fa220-c631-11e9-99fa-d9b98f91f971.jpg?sign=ZBMZVXId0siJ1P81LjnjBc4RG8JhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxNzE1JnQ9MTU2NzA0NTcxNSZyPTE2NjI2NDMmZj0vZGMwZmEyMjAtYzYzMS0xMWU5LTk5ZmEtZDliOThmOTFmOTcxLmpwZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl",
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
        "https://coding-net-production-file-ci.codehub.cn/dc148420-c631-11e9-99fa-d9b98f91f971.jpg?sign=nA/geTgRAYtAStIMaFcbOhFYZ7thPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxNzU0JnQ9MTU2NzA0NTc1NCZyPTk0NjIzNDU4JmY9L2RjMTQ4NDIwLWM2MzEtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
          "https://coding-net-production-file-ci.codehub.cn/c8587150-c7dd-11e9-9734-27c7b226d101.jpg?sign=QN61foh7cLt9933DmZFXMS2wMSZhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjY0MDg1JnQ9MTU2NzA0ODA4NSZyPTk2OTY0ODIzJmY9L2M4NTg3MTUwLWM3ZGQtMTFlOS05NzM0LTI3YzdiMjI2ZDEwMS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        author:
          "曾梵志，1964年出生于湖北武汉市，1991年毕业于湖北美术学院油画系。从二十世纪九十年代起，曾梵志的创作以具有独特的语言风格和敏锐的社会批判，受到评论界广泛的赞誉，也得到社会民众的持续关注。",
        content:
          "9月19日，中国当代艺术家曾梵志迄今为止规模最大、涵盖最广泛的展览《散步》将在尤伦斯当代艺术中心举行。北京。9月19日，中国当代艺术家曾梵志迄今为止规模最大、涵盖最广泛的展览《散步》将在尤伦斯当代艺术中心举行。本次展览由UCCA馆长田霏宇与郭希联合策划，囊括以油彩、木材、金属、纸本等材料创作的60余件作品，反映了艺术家近30年的持续向创作概貌。",
        pics: [
          "https://coding-net-production-file-ci.codehub.cn/c86346c0-c7dd-11e9-9734-27c7b226d101.jpg?sign=75rA0Ixj27Y9+zLqWI2xqrNa/D5hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjY0MTIzJnQ9MTU2NzA0ODEyMyZyPTU1MzkyMDQwJmY9L2M4NjM0NmMwLWM3ZGQtMTFlOS05NzM0LTI3YzdiMjI2ZDEwMS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
          "https://coding-net-production-file-ci.codehub.cn/c86edf80-c7dd-11e9-9734-27c7b226d101.jpg?sign=iE2dy2wK2fi+Dx830yr++HEIdV9hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjY0MTQ5JnQ9MTU2NzA0ODE0OSZyPTgxODY3NTAzJmY9L2M4NmVkZjgwLWM3ZGQtMTFlOS05NzM0LTI3YzdiMjI2ZDEwMS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
          "https://coding-net-production-file-ci.codehub.cn/c8601270-c7dd-11e9-9734-27c7b226d101.jpg?sign=uafpzJmcfvXrMEQI+Pv7osSAoZBhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjY0MTczJnQ9MTU2NzA0ODE3MyZyPTUxNTE2NjE1JmY9L2M4NjAxMjcwLWM3ZGQtMTFlOS05NzM0LTI3YzdiMjI2ZDEwMS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
          "https://coding-net-production-file-ci.codehub.cn/c8752110-c7dd-11e9-9734-27c7b226d101.jpg?sign=Yg3tXo1GRZjXZxEgVmxPYV0AnexhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjY0MTg5JnQ9MTU2NzA0ODE4OSZyPTc2MzY2MTE2JmY9L2M4NzUyMTEwLWM3ZGQtMTFlOS05NzM0LTI3YzdiMjI2ZDEwMS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
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
        "https://coding-net-production-file-ci.codehub.cn/dc167ff0-c631-11e9-99fa-d9b98f91f971.jpg?sign=hqfInm5Yl9iNHpic77AYV4Vfo8dhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxNzk1JnQ9MTU2NzA0NTc5NSZyPTYzODg4MTg3JmY9L2RjMTY3ZmYwLWM2MzEtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
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
        "https://coding-net-production-file-ci.codehub.cn/dcd737e0-c631-11e9-99fa-d9b98f91f971.jpg?sign=cxutZiA2pouwDNZGKrg5MxnCx+5hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxODE3JnQ9MTU2NzA0NTgxNyZyPTg3MDI0MTgmZj0vZGNkNzM3ZTAtYzYzMS0xMWU5LTk5ZmEtZDliOThmOTFmOTcxLmpwZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl",
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
