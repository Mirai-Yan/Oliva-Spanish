import type { Unit } from '../types'

export const u1: Unit = {
  id: 'a0-u1',
  level: 'A0',
  order: 1,
  title: '字母与元音',
  titleEs: 'El alfabeto y las vocales',
  icon: '🔤',
  goals: ['认识西班牙语的 27 个字母和它们的名称', '准确发出 a e i o u 五个元音', '学会“怎么写就怎么读”的拼读方法', '掌握重音规则，看到单词就知道重读哪里'],
  grammar: [
    {
      id: 'a0-alfabeto',
      title: '西班牙语字母表',
      titleEs: 'El alfabeto',
      level: 'A0',
      summary: '27 个字母，比英语多一个 ñ；k 和 w 只出现在外来词里。',
      body: `西班牙语用拉丁字母，一共 **27** 个字母。好消息是：西班牙语基本上 **怎么写就怎么读**，学会字母和拼读规则，几乎所有单词都能读出来。

| 字母 | 名称 | 字母 | 名称 | 字母 | 名称 |
|---|---|---|---|---|---|
| A a | a | J j | jota | R r | erre |
| B b | be | K k | ka | S s | ese |
| C c | ce | L l | ele | T t | te |
| D d | de | M m | eme | U u | u |
| E e | e | N n | ene | V v | uve |
| F f | efe | Ñ ñ | eñe | W w | uve doble |
| G g | ge | O o | o | X x | equis |
| H h | hache | P p | pe | Y y | ye |
| I i | i | Q q | cu | Z z | zeta |

### 几个要点
- **ñ** 是西班牙语最有代表性的字母。它是 **一个** 音：舌面（不是舌尖）贴住上腭发鼻音，很像“娘 niáng”开头那一下：**España**、**niño**。
- **ch** 和 **ll** 以前被当作独立字母，2010 年起不再算字母，但仍然是固定组合：*ch* 像英语 *church* 的 ch（舌尖不卷、气流弱），*ll* 像“耶 yē”开头的 y。
- **k** 和 **w** 只用在外来词里：**kilo**、*wifi*。
- 单独的 **h** 不发音：**hola** 读作 “o-la”（*ch* 里的 h 例外；极少数外来词如 *hámster* 的 h 读成送气音）。
- 字母名称是阴性名词：*la a*、*la be*。拼写名字时会用到：“¿Cómo se escribe? — Con be de Barcelona.”`,
      examples: [
        ['¿Cómo se escribe tu nombre?', '你的名字怎么拼写？'],
        ['Se escribe con hache.', '要写一个 h。'],
        ['«España» se escribe con eñe.', '“España”要写一个 ñ。'],
      ],
      origin: `**ñ 是怎么来的？** 中世纪抄写员抄书时，为了省纸，把双写的 *nn* 写成一个 *n*，再在上面加一个小 *n* 作为缩写记号。久而久之，这个小 *n* 变成了波浪号“~”，*ñ* 就诞生了。
- 拉丁语 *annus*（年）→ 西语 **año**
- 拉丁语 *somnus*（睡眠）→ **sueño**
- 拉丁语 *Hispania* → **España**（ni + 元音也变成了 ñ）

**h 为什么不发音？** 西语里很多 h 原本是拉丁语的 **f**：*facere* → **hacer**（做），*filius* → **hijo**（儿子），*farina* → **harina**（面粉）。中世纪时这个 f 先变成送气的 [h]，后来连送气也消失了，只留下拼写。`,
      pitfalls: ['看到 **h** 就想读出来。记住：*hola, hotel, hora* 里的 h 都不发音。', '把 **j** 读成英语的 “j”。西语的 *j* 读音接近汉语拼音 **h**（喝），但更靠后、更有摩擦：**Juan**、**jamón**。'],
    },
    {
      id: 'a0-vocales',
      title: '五个元音：a e i o u',
      titleEs: 'Las vocales',
      level: 'A0',
      summary: '西语只有 5 个元音，每个都短促、饱满、不变调，不像英语那样滑动。',
      body: `西班牙语只有 5 个元音，而且 **不管在哪里都读得一样**。这是西语发音最简单、也最重要的一步。

| 元音 | 接近的汉语音 | 发音要领 | 例词 |
|---|---|---|---|
| **a** | 啊 | 嘴张大，舌头放平 | *casa* 家 |
| **e** | 诶（但不滑向 i） | 嘴角略向两边拉，舌头中高 | *mesa* 桌子 |
| **i** | 衣 | 嘴角向两边拉开 | *sí* 是的 |
| **o** | 哦 ò（口型不变） | 嘴唇圆，不要滑成“欧 ou” | *oso* 熊 |
| **u** | 乌 | 嘴唇撮圆向前突出 | *uno* 一 |

### 关键：干净、不滑动
- 汉语的“欧 ou”、英语的 *no* 都是从 o 滑向 u 的双元音；西语的 **o** 从头到尾保持同一个口型。
- 西语的 **e** 也不要读成“ei”：*mesa* 不是 “mei-sa”。
- 非重读元音也要读清楚，不能像英语那样弱化成含糊的 [ə]：*chocolate* 是 cho-co-la-te，四个元音都清清楚楚。

### 强元音和弱元音
- **强元音**：a、e、o
- **弱元音**：i、u

强+弱 或 弱+强 会连成一个音节，叫 **二重元音**（diptongo）：*bueno*（bue-no）、*aire*（ai-re）、*ciudad*（ciu-dad）。
两个强元音相遇则分开读，叫 **元音分立**（hiato）：*leer*（le-er）、*museo*（mu-se-o）。`,
      examples: [
        ['La casa es bonita.', '房子很漂亮。'],
        ['Ana come una pera.', '安娜吃一个梨。'],
        ['Uno, dos, tres.', '一、二、三。'],
        ['Bueno, adiós.', '好的，再见。'],
      ],
      origin: `**为什么只有 5 个元音？** 古典拉丁语的元音分长短，共 10 个。到了民间口语（通俗拉丁语）里，长短的区别消失了，西语最后只保留了 a e i o u 五个。

**顺便剧透一个以后的语法现象：** 拉丁语里重读的短 *e* 和短 *o*，在西语里分别变成了 **ie** 和 **ue**：
- *terra* → **tierra**（土地），*petra* → **piedra**（石头）
- *porta* → **puerta**（门），*novus* → **nuevo**（新的）

这就是以后会学到的 *pensar → pienso*、*poder → puedo* 这类“词根变化动词”的来源——重读时变成 ie / ue，不重读时保持 e / o。`,
      pitfalls: ['把 *no* 读成英语的 “nou”，把 *mesa* 读成 “mei-sa”。西语元音要短而稳。', '把 **u** 读得太松。*uno*、*luna* 里的 u 要双唇撮圆向前。'],
    },
    {
      id: 'a0-pinyin',
      title: '拼读规则：怎么写就怎么读',
      titleEs: 'Deletreo y lectura',
      level: 'A0',
      summary: '辅音 + 元音直接拼读；大部分辅音和汉语拼音、英语很接近。',
      body: `西语的拼读非常规律：**辅音 + 元音** 直接拼起来读。

### 和汉语拼音接近的辅音
| 字母 | 读音提示 | 例词 |
|---|---|---|
| **m** | 同拼音 m | *mamá* 妈妈 |
| **n** | 同拼音 n | *no* 不 |
| **f** | 同拼音 f | *foto* 照片 |
| **l** | 同拼音 l | *lana* 羊毛 |
| **s** | 同拼音 s | *sol* 太阳 |
| **ch** | 像英语 *church* 的 ch：舌尖不卷，比“七”舌位略后，气流弱 | *chico* 男孩 |
| **y**（在元音前） | 像“耶 yē”开头的 y，带一点摩擦 | *yo* 我 |

### 注意：p、t、k 不送气
汉语拼音的 p、t、k 发音时会喷出一股气（送气音），**西语的 p、t、c/k 不送气**，听起来更接近拼音的 **b、d、g**：
- *papá* 听起来像“巴巴”
- *taco* 听起来像“搭沟”
- *casa* 听起来像“嘎萨”

而西语的 **b、d、g** 是真正的“浊音”——发音时声带要振动，汉语里没有，下一单元专门练。

### 音节划分（读长单词的秘诀）
1. 两个元音之间只有一个辅音，辅音归后面：*ca-sa*、*me-sa*
2. 两个辅音分开：*can-tar*、*ar-te*
3. 但 **pl, pr, bl, br, cl, cr, dr, fl, fr, gl, gr, tr** 不分开：*ha-blar*、*li-bro*、*o-tro*
4. **ch, ll, rr** 算一个辅音：*mu-cha-cho*、*ca-lle*、*pe-rro*`,
      examples: [
        ['Mi papá toma café.', '我爸爸喝咖啡。'],
        ['El chico habla mucho.', '那个男孩话很多。'],
        ['Yo como un taco.', '我吃一个塔可饼。'],
      ],
      origin: `西语拼写这么规律，要归功于 **西班牙皇家学院（RAE）** 从 18 世纪起几次拼写改革：去掉不发音的双写字母（如 *ph → f*：*philosophia → filosofía*，*th → t*：*theatro → teatro*），让拼写尽量贴近读音。所以同样来自希腊语，英语是 *philosophy*，西语是 **filosofía**。`,
      pitfalls: ['p、t、k 送气太重，听起来像在“喷”。试着把手放在嘴前，读 *papá* 时手上几乎感觉不到气流。'],
    },
    {
      id: 'a0-acento',
      title: '重音规则和重音符号',
      titleEs: 'Las reglas de acentuación',
      level: 'A0',
      summary: '以元音、n、s 结尾重读倒数第二音节，否则重读最后一个音节；不符合规则的就标重音符号。',
      body: `每个西语单词都有一个 **重读音节**，读得更响、更长一点。只需要记住 **两条规则 + 一个例外**：

1. 以 **元音、n 或 s** 结尾的词，重读 **倒数第二个** 音节：
   *ca*-sa、*ha*-blan、*li*-bros
2. 以 **其他辅音** 结尾的词，重读 **最后一个** 音节：
   ha-*blar*、ciu-*dad*、re-*loj*
3. 不符合上面规则的词，**用重音符号 ´ 标出** 重读的元音：
   ca-*fé*、*ár*-bol、te-*lé*-fo-no、can-*ción*

### 重音符号还有“区分词义”的作用
有些词拼写相同，靠重音符号区分：
| 有符号 | 无符号 |
|---|---|
| **tú** 你 | **tu** 你的 |
| **él** 他 | **el** （阳性定冠词） |
| **sí** 是的 | **si** 如果 |
| **qué** 什么（疑问） | **que** （连词） |

### 重音位置能改变意思！
- **papa** 土豆 — **papá** 爸爸（*papa* 是拉美和加那利群岛的说法，西班牙本土说 **patata**）
- **hablo** 我说 — **habló** 他说了`,
      examples: [
        ['Mi papá come papas.', '我爸爸吃土豆。'],
        ['¿Tú tienes tu libro?', '你带着你的书吗？'],
        ['El café está en la mesa.', '咖啡在桌子上。'],
      ],
      origin: `西语的重音位置大多直接继承自拉丁语。拉丁语的规则是：倒数第二个音节“重”就重读它，否则往前一个音节。很多拉丁词在变成西语时 **丢掉了最后的元音**，重音却留在原地，于是就出现了重读最后一个音节的词：
- 拉丁语 *cantāre*（重音在 tā）→ **cantar**，重音一直在 ta 上
- 拉丁语 *cīvitātem*（重音在 tā）→ **ciudad**（城市），丢掉词尾后重音落在最后一个音节

所以“以辅音结尾就重读最后一个音节”其实是拉丁语的历史痕迹。`,
      pitfalls: ['忽略重音符号。*papa* 和 *papá*、*hablo* 和 *habló* 意思完全不同，书写时一定要标。', '把所有音节读得一样重、一样长。西语是有明显轻重节奏的语言。'],
    },
  ],
  words: [],
  sentences: [],
  cloze: [],
  readings: [],
  pron: [
    // vowels
    { g: 'a0-vocales', type: 'spell', word: 'casa', zh: '家；房子' },
    { g: 'a0-vocales', type: 'spell', word: 'mesa', zh: '桌子' },
    { g: 'a0-vocales', type: 'spell', word: 'oso', zh: '熊' },
    { g: 'a0-vocales', type: 'spell', word: 'uno', zh: '一' },
    { g: 'a0-vocales', type: 'spell', word: 'isla', zh: '岛' },
    { g: 'a0-vocales', type: 'spell', word: 'luna', zh: '月亮' },
    { g: 'a0-vocales', type: 'spell', word: 'pelo', zh: '头发' },
    { g: 'a0-vocales', type: 'spell', word: 'bueno', zh: '好的' },
    { g: 'a0-vocales', type: 'spell', word: 'museo', zh: '博物馆' },
    { g: 'a0-vocales', type: 'pair', a: 'casa', b: 'cosa', focus: 'a / o' },
    { g: 'a0-vocales', type: 'pair', a: 'mesa', b: 'misa', focus: 'e / i' },
    { g: 'a0-vocales', type: 'pair', a: 'peso', b: 'paso', focus: 'e / a' },
    { g: 'a0-vocales', type: 'pair', a: 'luna', b: 'lana', focus: 'u / a' },
    { g: 'a0-vocales', type: 'pair', a: 'mono', b: 'mano', focus: 'o / a' },
    { g: 'a0-vocales', type: 'pair', a: 'pelo', b: 'palo', focus: 'e / a' },
    // alphabet
    { g: 'a0-alfabeto', type: 'spell', word: 'hola', zh: '你好（h 不发音）' },
    { g: 'a0-alfabeto', type: 'spell', word: 'hotel', zh: '酒店' },
    { g: 'a0-alfabeto', type: 'spell', word: 'España', zh: '西班牙' },
    { g: 'a0-alfabeto', type: 'spell', word: 'niño', zh: '男孩；孩子' },
    { g: 'a0-alfabeto', type: 'spell', word: 'kilo', zh: '公斤' },
    { g: 'a0-alfabeto', type: 'spell', word: 'jamón', zh: '火腿' },
    { g: 'a0-alfabeto', type: 'spell', word: 'año', zh: '年' },
    { g: 'a0-alfabeto', type: 'spell', word: 'hijo', zh: '儿子' },
    { g: 'a0-alfabeto', type: 'pair', a: 'mono', b: 'moño', focus: 'n / ñ' },
    // reading
    { g: 'a0-pinyin', type: 'spell', word: 'mamá', zh: '妈妈' },
    { g: 'a0-pinyin', type: 'spell', word: 'papá', zh: '爸爸' },
    { g: 'a0-pinyin', type: 'spell', word: 'taco', zh: '塔可饼' },
    { g: 'a0-pinyin', type: 'spell', word: 'foto', zh: '照片' },
    { g: 'a0-pinyin', type: 'spell', word: 'chico', zh: '男孩' },
    { g: 'a0-pinyin', type: 'spell', word: 'hablar', zh: '说话' },
    { g: 'a0-pinyin', type: 'spell', word: 'libro', zh: '书' },
    { g: 'a0-pinyin', type: 'spell', word: 'mucho', zh: '很多' },
    { g: 'a0-pinyin', type: 'spell', word: 'sopa', zh: '汤' },
    { g: 'a0-pinyin', type: 'spell', word: 'plato', zh: '盘子' },
    { g: 'a0-pinyin', type: 'stress', word: 'plátano' },
    { g: 'a0-pinyin', type: 'stress', word: 'chocolate' },
    // stress
    { g: 'a0-acento', type: 'stress', word: 'casa' },
    { g: 'a0-acento', type: 'stress', word: 'hablar' },
    { g: 'a0-acento', type: 'stress', word: 'teléfono' },
    { g: 'a0-acento', type: 'stress', word: 'examen' },
    { g: 'a0-acento', type: 'stress', word: 'reloj' },
    { g: 'a0-acento', type: 'stress', word: 'café' },
    { g: 'a0-acento', type: 'stress', word: 'árbol' },
    { g: 'a0-acento', type: 'stress', word: 'música' },
    { g: 'a0-acento', type: 'stress', word: 'ciudad' },
    { g: 'a0-acento', type: 'stress', word: 'universidad' },
    { g: 'a0-acento', type: 'stress', word: 'película' },
    { g: 'a0-acento', type: 'stress', word: 'joven' },
    { g: 'a0-acento', type: 'stress', word: 'canción' },
    { g: 'a0-acento', type: 'pair', a: 'papa', b: 'papá', focus: '重音位置：土豆 / 爸爸' },
    { g: 'a0-acento', type: 'pair', a: 'hablo', b: 'habló', focus: '重音位置：我说 / 他说了' },
    { g: 'a0-acento', type: 'pair', a: 'esta', b: 'está', focus: '重音位置：这个 / 在' },
  ],
}
