import type { Unit } from '../types'

export const u2: Unit = {
  id: 'a0-u2',
  level: 'A0',
  order: 2,
  title: '颤音与清浊音',
  titleEs: 'La erre y las consonantes sonoras',
  icon: '🗣️',
  goals: ['分清单击音 r 和大舌颤音 rr', '分清 l、n、r', '发出汉语里没有的浊辅音 b、d、g', '知道 b 和 v 在西语里读音相同'],
  grammar: [
    {
      id: 'a0-r',
      title: 'r 和 rr：单击音与颤音',
      titleEs: 'La r y la rr',
      level: 'A0',
      summary: '元音之间的 r 舌尖轻弹一下；rr 和词首的 r 要连续颤动（大舌音）。',
      body: `西语有两种 r，而且能区分意思：*pero*（但是）和 *perro*（狗）。

### 单击音 [ɾ]：舌尖轻轻弹一下
出现在 **两个元音之间** 或 **辅音后**（除 n、l、s 外）、**词尾**：
*pero、cara、tres、hablar*
> 要领：舌尖在上齿龈快速弹一下，和快速说“得了”时的“得”很像。美式英语 *water、ladder* 中间那个快速的音也几乎一样。

### 颤音 [r]：大舌音
出现在：
- 拼写为 **rr** 时：*perro、carro、tierra*
- **词首的 r**：*rosa、Roma、rojo*
- **n、l、s 后面的 r**：*Enrique、alrededor、Israel*
> 要领：舌尖放在上齿龈后面，放松，让气流把舌尖吹得连续颤动。

### 练习大舌音的小技巧
1. 先快速重复单击音：“得得得得” → 越来越快，舌头放松。
2. 用 **tr、dr** 找舌尖的位置：先读 *tres、drama*（这里是弹一下），再保持舌尖放松，把“弹一下”延长成连续颤动。
3. 想象发动机：“drrrrr”。
4. 学不会也别着急，很多母语者小时候也要练很久；先保证单击音清楚。`,
      examples: [
        ['El perro corre en la carretera.', '狗在公路上跑。'],
        ['Pero la rosa es roja.', '但是这朵玫瑰是红色的。'],
        ['Tres tristes tigres.', '三只忧伤的老虎。（绕口令）'],
      ],
      origin: `拉丁语就区分单 *r* 和双 *rr*（如 *carrus* 车、*terra* 土地），西语完整保留了这个区别。词首 r 读颤音也是继承来的：拉丁语 *rosa*、*rota* 词首的 r 本来就发得很强。`,
      pitfalls: ['把 r 发成英语卷舌的 [ɹ] 或汉语的 “r（日）”。西语的 r 舌尖不卷、要“弹”。', '把 *pero* 读成 *perro*：在元音之间只弹一下。'],
    },
    {
      id: 'a0-lnr',
      title: 'l、n、r 分清楚',
      titleEs: 'La l, la n y la r',
      level: 'A0',
      summary: 'l 是舌侧音、n 是鼻音、r 是弹音——南方同学特别注意别混。',
      body: `有些方言区的同学容易混淆 **l / n**，也有人把 **l / r** 读成一样，西语里这三个音都能区分词义：

| 对比 | 例词 |
|---|---|
| l / n | *lata*（罐头）— *nata*（奶油） |
| l / r | *hola*（你好）— *hora*（小时） |
| l / r | *pelo*（头发）— *pero*（但是） |

### 发音要领
- **l**：舌尖抵住上齿龈，气流从 **舌头两侧** 出来。西语的 l 永远是“清亮”的，词尾也不要吞掉：*sol、papel*。
- **n**：舌尖抵住上齿龈，气流从 **鼻腔** 出来。可以捏住鼻子试试，n 会发不出来。
- **r**：舌尖 **弹** 一下，不持续接触。

### 词尾的 n
西语词尾的 *n* 是舌尖音，不要读成汉语后鼻音“ng”：*pan* 接近“盘”而不是“旁”。`,
      examples: [
        ['Hola, ¿qué hora es?', '你好，现在几点？'],
        ['La lata no tiene nata.', '罐子里没有奶油。'],
        ['El sol sale.', '太阳升起来了。'],
      ],
      pitfalls: ['把词尾 *-n* 读成后鼻音：*pan、tren、son* 都是前鼻音 n。', '把 *hola* 读成 *hora*：l 的时候舌头贴住不动。'],
    },
    {
      id: 'a0-sonoras',
      title: '清音与浊音：p/b、t/d、k/g',
      titleEs: 'Consonantes sordas y sonoras',
      level: 'A0',
      summary: '西语 p/t/k 不送气（像拼音 b/d/g）；b/d/g 声带振动——这是中国学生最容易忽略的一点。',
      body: `汉语普通话用“送气 / 不送气”区分 p 和 b，而西语用“声带振动 / 不振动”区分：

| 西语 | 声带 | 听起来像 | 例词 |
|---|---|---|---|
| **p** | 不振动，不送气 | 拼音 **b** | *peso* 重量 |
| **b / v** | **振动** | 汉语没有 | *beso* 吻 |
| **t** | 不振动，不送气 | 拼音 **d** | *tos* 咳嗽 |
| **d** | **振动** | 汉语没有 | *dos* 二 |
| **c / k / qu** | 不振动，不送气 | 拼音 **g** | *casa* 家 |
| **g** | **振动** | 汉语没有 | *gasa* 纱布 |

### 怎么发浊音？
把手指放在喉咙上，先长长地发 “mmmm”，感觉到振动，然后保持振动嘴唇一张开，就是 **b**。同理 “nnnn” → **d**。

### 两个元音之间会变“软”
在元音之间，**b / v、d、g** 会变成摩擦音，嘴唇或舌头不完全闭合：
- *lobo*（狼）的 b 双唇轻轻靠近
- *todo*（全部）的 d 很像英语 *this* 的 th
- *agua*（水）的 g 很轻
词尾的 **d** 更弱，甚至几乎听不见：*Madrid、usted、ciudad*。

### b 和 v 读音完全一样
西语里 **b 和 v 没有区别**，都按上面的 b 来读。*vino*（葡萄酒）和 *bino* 读音相同。v 不要咬下唇！`,
      examples: [
        ['En España se dan dos besos.', '在西班牙，见面要行两次贴面礼。'],
        ['Todo el vino es bueno.', '所有的葡萄酒都很好。'],
        ['El gato bebe agua.', '猫在喝水。'],
      ],
      origin: `**为什么 b 和 v 读音一样？** 在古西班牙语中，两个音逐渐合并。现在写 b 还是 v，基本取决于这个词在 **拉丁语** 里怎么写：
- 拉丁语 *vivere* → **vivir**（生活）
- 拉丁语 *bibere* → **beber**（喝）
- 拉丁语 *vinum* → **vino**（葡萄酒）

所以记 b/v 拼写时，联想英语同源词很有帮助：*vino – wine*，*voz – voice*，*beber – beverage*。`,
      pitfalls: ['把 **b** 读成拼音 b（清音），结果听起来像 *p*：*beso* 被听成 *peso*。一定要让声带振动。', '把 **p、t、k** 送气读成拼音 p、t、k，听起来很“冲”。', 'v 咬下唇读成英语的 [v]。'],
    },
  ],
  words: [],
  sentences: [],
  cloze: [],
  readings: [],
  pron: [
    { g: 'a0-r', type: 'pair', a: 'pero', b: 'perro', focus: 'r / rr' },
    { g: 'a0-r', type: 'pair', a: 'caro', b: 'carro', focus: 'r / rr' },
    { g: 'a0-r', type: 'pair', a: 'cero', b: 'cerro', focus: 'r / rr' },
    { g: 'a0-r', type: 'pair', a: 'para', b: 'parra', focus: 'r / rr' },
    { g: 'a0-r', type: 'pair', a: 'coro', b: 'corro', focus: 'r / rr' },
    { g: 'a0-r', type: 'spell', word: 'perro', zh: '狗' },
    { g: 'a0-r', type: 'spell', word: 'rosa', zh: '玫瑰' },
    { g: 'a0-r', type: 'spell', word: 'tres', zh: '三' },
    { g: 'a0-r', type: 'spell', word: 'tierra', zh: '土地' },
    { g: 'a0-r', type: 'spell', word: 'cara', zh: '脸' },
    { g: 'a0-r', type: 'spell', word: 'rojo', zh: '红色的' },
    { g: 'a0-r', type: 'spell', word: 'guitarra', zh: '吉他' },
    { g: 'a0-r', type: 'spell', word: 'hablar', zh: '说话' },
    { g: 'a0-r', type: 'stress', word: 'carretera' },
    { g: 'a0-lnr', type: 'pair', a: 'hola', b: 'hora', focus: 'l / r' },
    { g: 'a0-lnr', type: 'pair', a: 'pelo', b: 'pero', focus: 'l / r' },
    { g: 'a0-lnr', type: 'pair', a: 'lata', b: 'nata', focus: 'l / n' },
    { g: 'a0-lnr', type: 'pair', a: 'cala', b: 'cara', focus: 'l / r' },
    { g: 'a0-lnr', type: 'pair', a: 'lana', b: 'nana', focus: 'l / n' },
    { g: 'a0-lnr', type: 'pair', a: 'lata', b: 'rata', focus: 'l / r（词首 r 是颤音）' },
    { g: 'a0-lnr', type: 'spell', word: 'sol', zh: '太阳' },
    { g: 'a0-lnr', type: 'spell', word: 'papel', zh: '纸' },
    { g: 'a0-lnr', type: 'spell', word: 'pan', zh: '面包' },
    { g: 'a0-lnr', type: 'spell', word: 'tren', zh: '火车' },
    { g: 'a0-lnr', type: 'spell', word: 'leche', zh: '牛奶' },
    { g: 'a0-lnr', type: 'spell', word: 'nombre', zh: '名字' },
    { g: 'a0-sonoras', type: 'pair', a: 'peso', b: 'beso', focus: 'p / b' },
    { g: 'a0-sonoras', type: 'pair', a: 'pata', b: 'bata', focus: 'p / b' },
    { g: 'a0-sonoras', type: 'pair', a: 'pino', b: 'vino', focus: 'p / v（v 读作 b）' },
    { g: 'a0-sonoras', type: 'pair', a: 'tos', b: 'dos', focus: 't / d' },
    { g: 'a0-sonoras', type: 'pair', a: 'tía', b: 'día', focus: 't / d' },
    { g: 'a0-sonoras', type: 'pair', a: 'casa', b: 'gasa', focus: 'c / g' },
    { g: 'a0-sonoras', type: 'pair', a: 'coma', b: 'goma', focus: 'c / g' },
    { g: 'a0-sonoras', type: 'pair', a: 'cana', b: 'gana', focus: 'c / g' },
    { g: 'a0-sonoras', type: 'spell', word: 'vino', zh: '葡萄酒' },
    { g: 'a0-sonoras', type: 'spell', word: 'bueno', zh: '好的' },
    { g: 'a0-sonoras', type: 'spell', word: 'todo', zh: '全部' },
    { g: 'a0-sonoras', type: 'spell', word: 'agua', zh: '水' },
    { g: 'a0-sonoras', type: 'spell', word: 'lobo', zh: '狼' },
    { g: 'a0-sonoras', type: 'spell', word: 'Madrid', zh: '马德里' },
    { g: 'a0-sonoras', type: 'spell', word: 'gato', zh: '猫' },
    { g: 'a0-sonoras', type: 'spell', word: 'dedo', zh: '手指' },
  ],
}
