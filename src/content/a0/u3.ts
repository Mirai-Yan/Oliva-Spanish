import type { Unit } from '../types'

export const u3: Unit = {
  id: 'a0-u3',
  level: 'A0',
  order: 3,
  title: '字母组合与特殊拼读',
  titleEs: 'Letras con varios sonidos',
  icon: '🧩',
  goals: ['掌握 c、z、s、qu 的读音（包括西班牙的 θ 音）', '掌握 g、j、gu、gü 的读音', '掌握 ll、y、ñ、ch、x 的读音', '能根据读音正确拼写单词'],
  grammar: [
    {
      id: 'a0-czs',
      title: 'c、z、s、qu：一个音多种写法',
      titleEs: 'La c, la z, la s y la qu',
      level: 'A0',
      summary: 'ca/co/cu、que/qui 读 [k]；ce/ci 和 z 在西班牙读咬舌音 [θ]，拉美读 [s]。',
      body: `### c 的两种读法
| 拼写 | 读音 | 例词 |
|---|---|---|
| **ca, co, cu** | [k]（像拼音 g） | *casa、cosa、cuna* |
| **ce, ci** | [θ]（西班牙）/ [s]（拉美） | *cena、cine* |
| **que, qui** | [k]，**u 不发音** | *queso、aquí* |
| **za, zo, zu** | [θ] / [s] | *zapato、zorro、azul* |

### [θ] 怎么发？
和英语 *think* 的 **th** 一样：舌尖轻轻伸到上下齿之间，吹气。*cinco*（五）在西班牙读 “θin-ko”。

### s 永远读 [s]
*sopa、casa、mes*。s 在元音之间也 **不** 变成 [z]（和英语不同）：*casa* 不读 “ka-za”。

### 西班牙 vs 拉美
在西班牙大部分地区，*casa*（家）和 *caza*（打猎）读音不同；而在拉美、加那利群岛和安达卢西亚部分地区，**ce/ci/z 都读成 [s]**，这叫 **seseo**，两个词读音相同。两种读法都是标准的，本课程以西班牙读法为主。`,
      examples: [
        ['Ceno en casa a las diez.', '我十点在家吃晚饭。'],
        ['Quiero queso, por favor.', '请给我奶酪。'],
        ['Mi zapato es azul.', '我的鞋子是蓝色的。'],
      ],
      origin: `**西班牙的 [θ] 音从哪里来？** 古西班牙语里有 /ts/（写作 *ç* 或 *c*）和 /dz/（写作 *z*）两个音。16 世纪前后，卡斯蒂利亚中北部把它们变成了 [θ]，而南部塞维利亚一带把它们和 [s] 合并了——而前往美洲的移民和船只大多从塞维利亚出发，所以 **拉美西语继承了 [s] 的读法**。

**ç 去哪了？** 字母 *ç*（带尾巴的 c）在古西语里很常用（如 *coraçón*），18 世纪的拼写改革把它换成了 *z* 和 *c*：**corazón**。`,
      latam: '拉美、加那利群岛和安达卢西亚部分地区把 ce / ci / z 读成 [s]（seseo），这同样是标准读音。',
      pitfalls: ['把 *que、qui* 里的 u 读出来。*queso* 读 “ke-so”，不是 “kwe-so”。', '元音之间的 s 读成 [z]：*casa、mesa* 都是清音 s。'],
    },
    {
      id: 'a0-gj',
      title: 'g、j、gu、gü',
      titleEs: 'La g y la j',
      level: 'A0',
      summary: 'ga/go/gu、gue/gui 读 [g]；ge/gi 和 j 读 [x]（像加重的拼音 h）；güe/güi 的 u 要读出来。',
      body: `| 拼写 | 读音 | 例词 |
|---|---|---|
| **ga, go, gu** | [g] 浊音 | *gato、gordo、guapo* |
| **gue, gui** | [g]，**u 不发音** | *guerra、guitarra* |
| **güe, güi** | [gw]，u 要读 | *pingüino、bilingüe* |
| **ge, gi** | [x] | *gente、girasol* |
| **ja, je, ji, jo, ju** | [x] | *jamón、ajo、jugo* |

### [x] 怎么发？
和拼音 **h**（喝）很像，但舌根更抬高，摩擦更强，有点像清嗓子。*jota* 读 “ho-ta” 的感觉。

### 规律
为了在 e、i 前面保留 [g] 音，要插入一个不发音的 u：*ga → gue*。如果这个 u 需要读出来，就加两点：**ü**。`,
      examples: [
        ['La gente come ajo.', '人们吃大蒜。'],
        ['El pingüino toca la guitarra.', '企鹅在弹吉他。'],
        ['Juan juega con el gato.', '胡安在和猫玩。'],
      ],
      origin: `**j 为什么读 [x]？** 古西语的 *x、j、g(e,i)* 原本读作 [ʃ]（像“诗”）和 [ʒ] 音。16–17 世纪这些音向后移，变成了现在的 [x]。这就是为什么《堂吉诃德》原来写作 *Don Quixote*，后来改拼 **Quijote**；而 **México、Texas** 保留了旧拼写 x，却读 [x]：“Mé-hi-co”。`,
      pitfalls: ['把 *gente* 读成 “gen-te”。ge / gi 读 [x]：“hen-te”。', '忘记 *guitarra* 里的 u 不发音。'],
    },
    {
      id: 'a0-llyn',
      title: 'll、y、ñ、ch、x',
      titleEs: 'La ll, la y, la ñ, la ch y la x',
      level: 'A0',
      summary: 'll 和 y 大多数人读得一样；ñ 像“你”；ch 像“吃”但不卷舌；x 一般读 [ks]。',
      body: `| 拼写 | 读音提示 | 例词 |
|---|---|---|
| **ll** | 像“耶”开头的 y，略带摩擦 | *llamar、calle、pollo* |
| **y**（元音前） | 同 ll | *yo、playa、mayo* |
| **y**（词尾或单独） | 就是元音 i | *hoy、muy、y* |
| **ñ** | 像“你”的 n + i 连读 | *niño、año、mañana* |
| **ch** | 介于“吃”和“七”之间，舌头不卷 | *chocolate、noche* |
| **x** | 一般读 [ks] | *taxi、examen* |

### ll 和 y：yeísmo
今天绝大多数西语母语者把 **ll** 和 **y** 读得一样，这叫 *yeísmo*，是标准读音。阿根廷、乌拉圭人把它们读成类似“诗”或英语 *she* 的音：*yo* 听起来像 “sho”。

### ñ 要一口气读
*año* 读成 “a-nio”，不是 “an-yo”，n 和 i 融成一个音。`,
      examples: [
        ['Hoy llamo a mi amigo.', '今天我给朋友打电话。'],
        ['Mañana voy a la playa.', '明天我去海滩。'],
        ['Tomo un taxi por la noche.', '我晚上打车。'],
      ],
      origin: `**ll 的来源**：很多 *ll* 来自拉丁语词首的 **cl-、pl-、fl-**：
- *clamare* → **llamar**（叫）
- *plorare* → **llorar**（哭）
- *flamma* → **llama**（火焰）

对比意大利语 *chiamare*、葡萄牙语 *chamar*，你会发现它们是同一个词的不同变化。`,
      latam: '阿根廷、乌拉圭把 ll / y 读成 [ʃ] 或 [ʒ]：*calle* 听起来像 “ca-she”。',
      pitfalls: ['把 *ch* 卷舌读成“吃”。西语 ch 舌尖不卷，更接近“七”。', '把 *muy、hoy* 词尾的 y 读成辅音。'],
    },
  ],
  words: [],
  sentences: [],
  cloze: [],
  readings: [],
  pron: [
    { g: 'a0-czs', type: 'pair', a: 'casa', b: 'caza', focus: 's / z（西班牙读音）' },
    { g: 'a0-czs', type: 'pair', a: 'coser', b: 'cocer', focus: 's / c（西班牙读音）' },
    { g: 'a0-czs', type: 'pair', a: 'masa', b: 'maza', focus: 's / z（西班牙读音）' },
    { g: 'a0-czs', type: 'spell', word: 'cena', zh: '晚饭' },
    { g: 'a0-czs', type: 'spell', word: 'cine', zh: '电影院' },
    { g: 'a0-czs', type: 'spell', word: 'queso', zh: '奶酪' },
    { g: 'a0-czs', type: 'spell', word: 'aquí', zh: '这里' },
    { g: 'a0-czs', type: 'spell', word: 'zapato', zh: '鞋' },
    { g: 'a0-czs', type: 'spell', word: 'azul', zh: '蓝色的' },
    { g: 'a0-czs', type: 'spell', word: 'cinco', zh: '五' },
    { g: 'a0-czs', type: 'spell', word: 'diez', zh: '十' },
    { g: 'a0-czs', type: 'spell', word: 'cuna', zh: '摇篮' },
    { g: 'a0-czs', type: 'stress', word: 'corazón' },
    { g: 'a0-gj', type: 'pair', a: 'hijo', b: 'higo', focus: 'j / g' },
    { g: 'a0-gj', type: 'pair', a: 'paja', b: 'paga', focus: 'j / g' },
    { g: 'a0-gj', type: 'pair', a: 'ajo', b: 'hago', focus: 'j / g' },
    { g: 'a0-gj', type: 'pair', a: 'gota', b: 'jota', focus: 'g / j' },
    { g: 'a0-gj', type: 'spell', word: 'gente', zh: '人们' },
    { g: 'a0-gj', type: 'spell', word: 'jamón', zh: '火腿' },
    { g: 'a0-gj', type: 'spell', word: 'guitarra', zh: '吉他' },
    { g: 'a0-gj', type: 'spell', word: 'pingüino', zh: '企鹅' },
    { g: 'a0-gj', type: 'spell', word: 'guapo', zh: '帅气的' },
    { g: 'a0-gj', type: 'spell', word: 'girasol', zh: '向日葵' },
    { g: 'a0-gj', type: 'spell', word: 'jugo', zh: '果汁' },
    { g: 'a0-gj', type: 'spell', word: 'juego', zh: '游戏' },
    { g: 'a0-gj', type: 'stress', word: 'bilingüe' },
    { g: 'a0-llyn', type: 'pair', a: 'cana', b: 'caña', focus: 'n / ñ' },
    { g: 'a0-llyn', type: 'pair', a: 'pena', b: 'peña', focus: 'n / ñ' },
    { g: 'a0-llyn', type: 'pair', a: 'una', b: 'uña', focus: 'n / ñ' },
    { g: 'a0-llyn', type: 'pair', a: 'sonar', b: 'soñar', focus: 'n / ñ' },
    { g: 'a0-llyn', type: 'spell', word: 'calle', zh: '街道' },
    { g: 'a0-llyn', type: 'spell', word: 'pollo', zh: '鸡肉' },
    { g: 'a0-llyn', type: 'spell', word: 'playa', zh: '海滩' },
    { g: 'a0-llyn', type: 'spell', word: 'mañana', zh: '明天；早上' },
    { g: 'a0-llyn', type: 'spell', word: 'noche', zh: '夜晚' },
    { g: 'a0-llyn', type: 'spell', word: 'taxi', zh: '出租车' },
    { g: 'a0-llyn', type: 'spell', word: 'muy', zh: '很' },
    { g: 'a0-llyn', type: 'spell', word: 'llamar', zh: '叫；打电话' },
    { g: 'a0-llyn', type: 'stress', word: 'examen' },
    { g: 'a0-llyn', type: 'stress', word: 'mañana' },
  ],
}
