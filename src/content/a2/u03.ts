import type { Unit } from '../types'

export const u03: Unit = {
  id: 'a2-u03',
  level: 'A2',
  order: 3,
  title: '旅行故事',
  titleEs: 'De viaje',
  icon: '🧳',
  goals: ['讲述一次旅行', '掌握简单过去时的不规则动词', '区分 ser / ir 的过去时', '谈论旅途中的问题和感受'],
  grammar: [
    {
      id: 'a2-indef-fuerte',
      title: '简单过去时：强变化动词',
      titleEs: 'Pretéritos irregulares fuertes',
      level: 'A2',
      summary: 'tener → tuve、estar → estuve、hacer → hice、poder → pude、venir → vine…：特殊词根 + -e, -iste, -o, -imos, -isteis, -ieron，没有重音。',
      body: `一组常用动词在简单过去时用 **特殊词根**，词尾也和规则的不同：**-e, -iste, -o, -imos, -isteis, -ieron**，而且 **不带重音**。

| 不定式 | 词根 | yo | él / ella | ellos |
|---|---|---|---|---|
| tener | **tuv-** | tuve | tuvo | tuvieron |
| estar | **estuv-** | estuve | estuvo | estuvieron |
| andar | **anduv-** | anduve | anduvo | anduvieron |
| poder | **pud-** | pude | pudo | pudieron |
| poner | **pus-** | puse | puso | pusieron |
| saber | **sup-** | supe | supo | supieron |
| querer | **quis-** | quise | quiso | quisieron |
| venir | **vin-** | vine | vino | vinieron |
| hacer | **hic-** | hice | **hizo** | hicieron |
| decir | **dij-** | dije | dijo | **dijeron** |
| traer | **traj-** | traje | trajo | **trajeron** |
| conducir | **conduj-** | conduje | condujo | **condujeron** |

### 两个小规律
- *hacer* 的第三人称是 **hizo**（c → z，为了保持读音）
- 词根以 **j** 结尾的，第三人称复数是 **-eron**，不是 -ieron：*dijeron、trajeron、condujeron*

### 意思上的小变化
- *supe*：（那时）得知了：*Ayer supe la noticia.*（我昨天得知了这个消息。）
- *no pude*：（试了但）没能：*No pude dormir.*（我没能睡着。）`,
      examples: [
        ['El verano pasado estuve en Perú.', '去年夏天我去了秘鲁。'],
        ['Tuvimos un problema con el vuelo.', '我们的航班出了问题。'],
        ['¿Qué hiciste el fin de semana?', '你周末做了什么？'],
        ['No pude dormir en el avión.', '我在飞机上没能睡着。'],
        ['Mis amigos vinieron a verme y me trajeron un regalo.', '我的朋友们来看我，还给我带了礼物。'],
      ],
      tables: [{ verbs: ['tener', 'estar', 'hacer', 'decir'], tense: 'pret' }],
      origin: `这些“强变化”过去时直接继承自 **拉丁语的完成时**，那时它们就已经不规则了：
- *habui → hube*，*tenui → tuve*（受 *hube* 类推）
- *posui → puse*，*potui → pude*
- *feci → hice*，*fecit → hizo*
- *dixi → dije*，*veni → vine*

它们的重音落在 **词根** 上（*TU-ve, PU-de*），所以叫“强变化”；规则动词重音在词尾（*ha-BLÉ*）。这也是为什么强变化形式不需要重音符号。`,
      pitfalls: ['给强变化加重音：❌ *tuvé, hizó* ✅ *tuve, hizo*。', '❌ *hació* ✅ *hizo*；❌ *dijieron* ✅ *dijeron*；❌ *tenió* ✅ *tuvo*。'],
    },
    {
      id: 'a2-ser-ir-pret',
      title: 'ser、ir、dar、ver 的过去时',
      titleEs: 'Ser, ir, dar y ver en indefinido',
      level: 'A2',
      summary: 'ser 和 ir 的简单过去时完全一样：fui, fuiste, fue…；dar：di, dio；ver：vi, vio（都没有重音）。',
      body: `| 人称 | ser / ir | dar | ver |
|---|---|---|---|
| yo | **fui** | di | vi |
| tú | **fuiste** | diste | viste |
| él / ella / usted | **fue** | dio | vio |
| nosotros | **fuimos** | dimos | vimos |
| vosotros | **fuisteis** | disteis | visteis |
| ellos / ustedes | **fueron** | dieron | vieron |

### ser 还是 ir？看上下文
- ***Fui** a Barcelona.*（我去了巴塞罗那。）——后面有 **a + 地点**，是 ir
- *El viaje **fue** muy bonito.*（那次旅行很美好。）——描述评价，是 ser
- *¿Cómo **fue** el examen?*（考试怎么样？）——ser

### 用 ser 评价过去的经历
*Fue un viaje increíble.*（那是一次难以置信的旅行。）
*¿Qué tal fue la fiesta? — **Fue** genial.*（聚会怎么样？——棒极了。）

> 单音节形式 *fui, fue, di, dio, vi, vio* 都 **不带重音符号**。`,
      examples: [
        ['El año pasado fuimos a Cuba.', '去年我们去了古巴。'],
        ['El concierto fue fantástico.', '音乐会太精彩了。'],
        ['¿Adónde fuiste de vacaciones?', '你去哪儿度假了？'],
        ['Mi abuelo me dio este reloj.', '这块表是我爷爷给我的。'],
        ['Anoche vimos una película de miedo.', '昨晚我们看了一部恐怖片。'],
      ],
      tables: [{ verbs: ['ir', 'dar', 'ver'], tense: 'pret' }],
      origin: `**为什么 ser 和 ir 的过去时一样？** *fui* 本来是拉丁语 *esse*（是）的完成时：*fui*（我曾是）。在通俗拉丁语里，“我曾在某地” → “我去过某地”，于是 *fui* 也被 *ir* 借用了。拉丁语的 *ire*（去）原本的完成时 *ii* 太短，很早就消失了。

所以 *ir* 一个动词混合了三个来源：*vadere*（voy）、*ire*（ir）和 *esse*（fui）。`,
      pitfalls: ['❌ *fué, dió, vió*（2010 年前有人这样写）✅ *fue, dio, vio*。', '❌ *Fui en Madrid.*（我曾在……的意思应该用 estar）✅ *Estuve en Madrid.* / *Fui a Madrid.*'],
    },
    {
      id: 'a2-indef-ei',
      title: '第三人称词根变化：pidió, durmió',
      titleEs: 'Cambios vocálicos en tercera persona',
      level: 'A2',
      summary: '词根变化的 -ir 动词在过去时第三人称变：e → i（pidió, sintió），o → u（durmió, murió）。',
      body: `现在时的“靴子”动词里，**-ar 和 -er 动词在过去时是规则的**（*pensé, volví*）。但 **-ir 动词** 在第三人称（单数和复数）有变化：

| | pedir | sentir | dormir |
|---|---|---|---|
| yo | pedí | sentí | dormí |
| tú | pediste | sentiste | dormiste |
| él / ella | p**i**dió | s**i**ntió | d**u**rmió |
| nosotros | pedimos | sentimos | dormimos |
| vosotros | pedisteis | sentisteis | dormisteis |
| ellos | p**i**dieron | s**i**ntieron | d**u**rmieron |

- **e → i**：*pedir, servir, repetir, seguir, vestirse, preferir, sentir, divertirse*
- **o → u**：*dormir, morir*

### 元音词根的 y
*leer → leyó, leyeron*；*oír → oyó, oyeron*；*construir → construyó*；*caer → cayó*`,
      examples: [
        ['Mi hermano pidió una pizza.', '我弟弟点了一个披萨。'],
        ['Los niños durmieron en el coche.', '孩子们在车里睡着了。'],
        ['Nos divertimos mucho, pero Juan no se divirtió.', '我们玩得很开心，但胡安没玩好。'],
        ['El camarero nos sirvió la cena muy tarde.', '服务员上晚饭上得很晚。'],
        ['¿Oíste ese ruido? — Sí, lo oyó todo el mundo.', '你听到那个声音了吗？——大家都听到了。'],
      ],
      tables: [{ verbs: ['pedir', 'dormir'], tense: 'pret' }],
      origin: `规律还是“后面有没有重读的 i”：*pedí, pedimos* 的词尾有重读 i，词根保持 e；而 *pidió、pidieron* 的词尾是 *-ió、-ieron*（i 不重读，变成了半元音），词根就变成了 i。*dormir → durmió* 同理。（第 A1-10 单元讲过这个规律。）`,
      pitfalls: ['❌ *pedió* ✅ *pidió*；❌ *dormió* ✅ *durmió*。', '把变化用到所有人称：❌ *pidí* ✅ *pedí*。'],
    },
  ],
  words: [
    { id: 'vuelo', es: 'vuelo', zh: '航班；飞行', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['El vuelo salió con retraso.', '航班晚点起飞了。'], ety: '来自 volar「飞」< 拉丁语 volare。', emoji: '🛫' },
    { id: 'reservar', es: 'reservar', zh: '预订', pos: 'v', level: 'A2', tags: ['verb', 'travel'], ex: ['Reservé una habitación doble.', '我订了一间双人房。'] },
    { id: 'reserva', es: 'reserva', zh: '预订', pos: 'n', g: 'f', level: 'A2', tags: ['travel'], ex: ['Tengo una reserva a nombre de Li.', '我有一个以李姓名义的预订。'] },
    { id: 'alojamiento', es: 'alojamiento', zh: '住宿', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['El alojamiento fue muy barato.', '住宿很便宜。'] },
    { id: 'albergue', es: 'albergue', zh: '青年旅舍', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['Dormimos en un albergue.', '我们住在一家青旅。'] },
    { id: 'equipaje', es: 'equipaje', zh: '行李', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['Perdieron mi equipaje.', '他们把我的行李弄丢了。'], emoji: '🧳' },
    { id: 'retraso', es: 'retraso', zh: '晚点；延误', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['El tren llegó con una hora de retraso.', '火车晚点一小时到达。'] },
    { id: 'aterrizar', es: 'aterrizar', zh: '降落', pos: 'v', level: 'A2', tags: ['verb', 'travel'], ex: ['El avión aterrizó a las tres.', '飞机三点降落。'], ety: 'a- + tierra「陆地」。' },
    { id: 'despegar', es: 'despegar', zh: '起飞', pos: 'v', level: 'A2', tags: ['verb', 'travel'], ex: ['El avión despegó tarde.', '飞机起飞晚了。'] },
    { id: 'excursion', es: 'excursión', zh: '短途旅行；郊游', pos: 'n', g: 'f', pl: 'excursiones', level: 'A2', tags: ['travel'], ex: ['Hicimos una excursión a la montaña.', '我们去山里郊游了。'] },
    { id: 'guia', es: 'guía', zh: '导游；指南', pos: 'n', g: 'mf', level: 'A2', tags: ['travel', 'job'], ex: ['El guía nos explicó la historia del castillo.', '导游给我们讲了城堡的历史。'], note: 'el / la guía 指导游；la guía 也指旅游指南书。' },
    { id: 'turista', es: 'turista', zh: '游客', pos: 'n', g: 'mf', level: 'A2', tags: ['travel'], ex: ['Había muchos turistas.', '游客很多。'] },
    { id: 'monumento', es: 'monumento', zh: '名胜古迹；纪念碑', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['Visitamos los monumentos más famosos.', '我们参观了最有名的古迹。'] },
    { id: 'catedral', es: 'catedral', zh: '大教堂', pos: 'n', g: 'f', pl: 'catedrales', level: 'A2', tags: ['travel', 'city'], ex: ['La catedral de Sevilla es enorme.', '塞维利亚大教堂非常大。'], ety: '来自 cátedra「主教座」：有主教座位的教堂。', emoji: '⛪' },
    { id: 'museo', es: 'museo', zh: '博物馆', pos: 'n', g: 'm', level: 'A2', tags: ['travel', 'city'], ex: ['Fuimos al Museo del Prado.', '我们去了普拉多博物馆。'], ety: '希腊语 mouseîon「缪斯的殿堂」。', emoji: '🏛️' },
    { id: 'castillo', es: 'castillo', zh: '城堡', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['En Segovia hay un castillo precioso.', '塞哥维亚有一座漂亮的城堡。'], ety: '拉丁语 castellum。卡斯蒂利亚（Castilla）就是“城堡之地”。', emoji: '🏰' },
    { id: 'paisaje', es: 'paisaje', zh: '风景', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['El paisaje fue increíble.', '风景美得难以置信。'] },
    { id: 'recuerdo', es: 'recuerdo', zh: '纪念品；回忆', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['Te traje un recuerdo de México.', '我给你带了墨西哥的纪念品。'] },
    { id: 'sacar-fotos', es: 'sacar fotos', zh: '拍照', pos: 'phr', level: 'A2', tags: ['travel', 'hobby'], ex: ['Sacamos muchas fotos.', '我们拍了很多照片。'], note: '也说 hacer fotos。' },
    { id: 'quedarse', es: 'quedarse', zh: '待；留下', pos: 'v', level: 'A2', tags: ['verb', 'travel'], ex: ['Nos quedamos tres días en Granada.', '我们在格拉纳达待了三天。'] },
    { id: 'divertirse', es: 'divertirse', zh: '玩得开心', pos: 'v', level: 'A2', tags: ['verb', 'feel'], ex: ['¡Nos divertimos mucho!', '我们玩得很开心！'], note: 'e→ie / e→i：me divierto；se divirtió。' },
    { id: 'pasarlo-bien', es: 'pasarlo bien', zh: '过得愉快', pos: 'phr', level: 'A2', tags: ['feel'], ex: ['Lo pasamos muy bien en la playa.', '我们在海边玩得很开心。'] },
    { id: 'sentirse', es: 'sentirse', zh: '感觉', pos: 'v', level: 'A2', tags: ['verb', 'feel'], ex: ['Me sentí un poco mal en el barco.', '我在船上觉得有点不舒服。'], note: 'e→ie / e→i：me siento；se sintió。' },
    { id: 'barco', es: 'barco', zh: '船', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['Fuimos a Ibiza en barco.', '我们坐船去了伊维萨岛。'], emoji: '⛴️' },
    { id: 'isla', es: 'isla', zh: '岛', pos: 'n', g: 'f', level: 'A2', tags: ['travel'], ex: ['Mallorca es una isla muy bonita.', '马略卡是个很美的岛。'], ety: '拉丁语 insula。英语 isle、insulate 同源。', emoji: '🏝️' },
    { id: 'costa', es: 'costa', zh: '海岸', pos: 'n', g: 'f', level: 'A2', tags: ['travel'], ex: ['Recorrimos la costa en coche.', '我们开车沿着海岸走了一圈。'] },
    { id: 'frontera', es: 'frontera', zh: '边境', pos: 'n', g: 'f', level: 'A2', tags: ['travel'], ex: ['Cruzamos la frontera con Portugal.', '我们越过了和葡萄牙的边境。'] },
    { id: 'oficina-turismo', es: 'oficina de turismo', zh: '游客中心', pos: 'n', g: 'f', level: 'A2', tags: ['travel'], ex: ['En la oficina de turismo nos dieron un mapa.', '游客中心给了我们一张地图。'] },
    { id: 'tarjeta-embarque', es: 'tarjeta de embarque', zh: '登机牌', pos: 'n', g: 'f', level: 'A2', tags: ['travel'], ex: ['¿Dónde está mi tarjeta de embarque?', '我的登机牌在哪儿？'] },
    { id: 'recepcion', es: 'recepción', zh: '前台', pos: 'n', g: 'f', pl: 'recepciones', level: 'A2', tags: ['travel'], ex: ['Dejamos las maletas en recepción.', '我们把行李寄存在前台。'] },
    { id: 'habitacion-doble', es: 'habitación doble', zh: '双人房', pos: 'n', g: 'f', level: 'A2', tags: ['travel'], ex: ['Reservamos una habitación doble.', '我们订了一间双人房。'] },
    { id: 'recorrer', es: 'recorrer', zh: '游历；走遍', pos: 'v', level: 'A2', tags: ['verb', 'travel'], ex: ['Recorrimos Andalucía en una semana.', '我们一周游遍了安达卢西亚。'] },
    { id: 'increible', es: 'increíble', zh: '难以置信的；了不起的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['¡Fue un viaje increíble!', '那是一次了不起的旅行！'] },
    { id: 'genial', es: 'genial', pl: 'geniales', zh: '棒极了的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['La fiesta fue genial.', '聚会棒极了。'] },
    { id: 'horrible', es: 'horrible', zh: '可怕的；糟糕的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['El hotel fue horrible.', '那家酒店糟透了。'] },
    { id: 'precioso', es: 'precioso', f: 'preciosa', zh: '非常美的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['Es un pueblo precioso.', '这是个非常美的村子。'] },
    { id: 'enorme', es: 'enorme', zh: '巨大的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['La catedral es enorme.', '大教堂非常大。'] },
    { id: 'ruido', es: 'ruido', zh: '噪音', pos: 'n', g: 'm', level: 'A2', tags: ['home'], ex: ['Había mucho ruido en el hotel.', '酒店里很吵。'] },
  ],
  sentences: [
    { id: 's1', es: 'El verano pasado estuve en Perú.', zh: '去年夏天我去了秘鲁。', g: ['a2-indef-fuerte'], distract: ['estuvé', 'fui'] },
    { id: 's2', es: 'Tuvimos un problema con el vuelo.', zh: '我们的航班出了问题。', g: ['a2-indef-fuerte'], distract: ['tenimos'] },
    { id: 's3', es: '¿Qué hiciste el fin de semana?', zh: '你周末做了什么？', g: ['a2-indef-fuerte'], distract: ['haciste'] },
    { id: 's4', es: 'No pude dormir en el avión.', zh: '我在飞机上没能睡着。', g: ['a2-indef-fuerte'] },
    { id: 's5', es: 'Mis amigos vinieron a verme.', zh: '我的朋友们来看我了。', g: ['a2-indef-fuerte'] },
    { id: 's6', es: 'Me dijeron que el hotel era bueno.', zh: '他们跟我说那家酒店不错。', g: ['a2-indef-fuerte'], distract: ['dijieron'] },
    { id: 's7', es: 'Mi madre hizo una paella buenísima.', zh: '我妈妈做了一份超好吃的海鲜饭。', g: ['a2-indef-fuerte'], distract: ['hació'] },
    { id: 's8', es: 'Puse las maletas en el coche.', zh: '我把行李放进了车里。', g: ['a2-indef-fuerte'] },
    { id: 's9', es: 'El año pasado fuimos a Cuba.', zh: '去年我们去了古巴。', g: ['a2-ser-ir-pret'] },
    { id: 's10', es: 'El concierto fue fantástico.', zh: '音乐会太精彩了。', g: ['a2-ser-ir-pret'] },
    { id: 's11', es: '¿Adónde fuiste de vacaciones?', zh: '你去哪儿度假了？', g: ['a2-ser-ir-pret'] },
    { id: 's12', es: 'Mi abuelo me dio este reloj.', zh: '这块表是我爷爷给我的。', g: ['a2-ser-ir-pret'] },
    { id: 's13', es: 'Anoche vimos una película de miedo.', zh: '昨晚我们看了一部恐怖片。', g: ['a2-ser-ir-pret'] },
    { id: 's14', es: 'Fue un viaje increíble.', zh: '那是一次了不起的旅行。', g: ['a2-ser-ir-pret'] },
    { id: 's15', es: 'Mi hermano pidió una pizza.', zh: '我弟弟点了一个披萨。', g: ['a2-indef-ei'], distract: ['pedió'] },
    { id: 's16', es: 'Los niños durmieron en el coche.', zh: '孩子们在车里睡着了。', g: ['a2-indef-ei'], distract: ['dormieron'] },
    { id: 's17', es: 'Nos divertimos mucho en la fiesta.', zh: '我们在聚会上玩得很开心。', g: ['a2-indef-ei'] },
    { id: 's18', es: 'Ella se sintió mal en el barco.', zh: '她在船上觉得不舒服。', g: ['a2-indef-ei'] },
    { id: 's19', es: 'Nos quedamos tres días en Granada.', zh: '我们在格拉纳达待了三天。', g: ['a2-indef-fuerte'] },
    { id: 's20', es: 'Lo pasamos muy bien.', zh: '我们玩得很开心。', g: ['a2-ser-ir-pret'] },
    { id: 's21', es: 'El avión aterrizó con retraso.', zh: '飞机晚点降落。', g: ['a2-indef-ei'] },
    { id: 's22', es: '¿Cómo fue el viaje?', zh: '旅行怎么样？', g: ['a2-ser-ir-pret'] },
  ],
  cloze: [
    { id: 'c1', text: 'Ayer ___ (yo) un día horrible.', answers: ['tuve'], hint: 'tener', zh: '我昨天过了糟糕的一天。', g: ['a2-indef-fuerte'] },
    { id: 'c2', text: '¿Dónde ___ (tú) el verano pasado?', answers: ['estuviste'], hint: 'estar', zh: '你去年夏天在哪儿？', g: ['a2-indef-fuerte'] },
    { id: 'c3', text: 'Mi hermana ___ la cena anoche.', answers: ['hizo'], hint: 'hacer', zh: '我姐姐昨晚做的晚饭。', g: ['a2-indef-fuerte'] },
    { id: 'c4', text: 'No ___ (nosotros) entrar en el museo: estaba cerrado.', answers: ['pudimos'], hint: 'poder', zh: '我们没能进博物馆：关门了。', g: ['a2-indef-fuerte'] },
    { id: 'c5', text: 'Mis padres ___ a visitarme en mayo.', answers: ['vinieron'], hint: 'venir', zh: '我父母五月来看我了。', g: ['a2-indef-fuerte'] },
    { id: 'c6', text: 'Ellos no me ___ la verdad.', answers: ['dijeron'], hint: 'decir', zh: '他们没跟我说实话。', g: ['a2-indef-fuerte'], explain: '词根以 j 结尾，第三人称复数用 -eron。' },
    { id: 'c7', text: '¿Quién ___ el pastel? — Lo trajo Ana.', answers: ['trajo'], hint: 'traer', zh: '谁带的蛋糕？——安娜带的。', g: ['a2-indef-fuerte'] },
    { id: 'c8', text: 'Ayer ___ (yo) que tienes un perro nuevo.', answers: ['supe'], hint: 'saber', zh: '我昨天才知道你养了新狗。', g: ['a2-indef-fuerte'] },
    { id: 'c9', text: 'El año pasado ___ (nosotros) a Japón.', answers: ['fuimos'], hint: 'ir', zh: '去年我们去了日本。', g: ['a2-ser-ir-pret'] },
    { id: 'c10', text: 'La fiesta ___ muy divertida.', answers: ['fue'], options: ['fue', 'fué', 'estuvo'], zh: '聚会很有意思。', g: ['a2-ser-ir-pret'] },
    { id: 'c11', text: '¿Qué película ___ (vosotros) anoche?', answers: ['visteis'], hint: 'ver', zh: '你们昨晚看了什么电影？', g: ['a2-ser-ir-pret'] },
    { id: 'c12', text: 'Mi abuela me ___ cien euros por mi cumpleaños.', answers: ['dio'], options: ['dio', 'dió', 'dé'], zh: '奶奶给了我一百欧当生日礼物。', g: ['a2-ser-ir-pret'] },
    { id: 'c13', text: 'Mi novia ___ un café con leche.', answers: ['pidió'], hint: 'pedir', zh: '我女朋友点了一杯牛奶咖啡。', g: ['a2-indef-ei'] },
    { id: 'c14', text: 'Los niños ___ nueve horas.', answers: ['durmieron'], hint: 'dormir', zh: '孩子们睡了九个小时。', g: ['a2-indef-ei'] },
    { id: 'c15', text: 'Ella ___ el libro en dos días.', answers: ['leyó'], hint: 'leer', zh: '她两天就读完了那本书。', g: ['a2-indef-ei'] },
    { id: 'c16', text: 'Yo ___ pescado y mi marido pidió carne.', answers: ['pedí'], hint: 'pedir', zh: '我点了鱼，我丈夫点了肉。', g: ['a2-indef-ei'], explain: '第一人称不变：pedí；第三人称才是 pidió。' },
    { id: 'c17', text: 'El camarero nos ___ muy rápido.', answers: ['sirvió'], hint: 'servir', zh: '服务员上菜很快。', g: ['a2-indef-ei'] },
    { id: 'c18', text: 'Mi abuelo ___ en 2015.', answers: ['murió'], hint: 'morir', zh: '我爷爷 2015 年去世了。', g: ['a2-indef-ei'] },
  ],
  conj: [
    { verbs: ['tener', 'estar', 'poder', 'poner', 'hacer', 'venir', 'decir', 'traer', 'querer', 'saber'], tenses: ['pret'], g: 'a2-indef-fuerte' },
    { verbs: ['ser', 'ir', 'dar', 'ver'], tenses: ['pret'], g: 'a2-ser-ir-pret' },
    { verbs: ['pedir', 'dormir', 'servir', 'sentir', 'preferir'], tenses: ['pret'], persons: [2, 5], g: 'a2-indef-ei' },
  ],
  dialogues: [
    {
      id: 'a2-u03-d1',
      title: '假期回来了 · De vuelta de vacaciones',
      lines: [
        { who: 'Elena', es: '¡Por fin has vuelto! ¿Qué tal el viaje a Andalucía?', zh: '你终于回来了！安达卢西亚之行怎么样？' },
        { who: 'Liu Yang', es: '¡Fue increíble! Estuve diez días y visité Sevilla, Córdoba y Granada.', zh: '太棒了！我待了十天，去了塞维利亚、科尔多瓦和格拉纳达。' },
        { who: 'Elena', es: '¿Y qué fue lo que más te gustó?', zh: '你最喜欢什么？' },
        { who: 'Liu Yang', es: 'La Alhambra. Fuimos por la noche y fue mágico.', zh: '阿尔罕布拉宫。我们晚上去的，感觉很神奇。' },
        { who: 'Elena', es: '¿Tuviste algún problema?', zh: '有没有遇到什么问题？' },
        { who: 'Liu Yang', es: 'Bueno, el primer día perdieron mi maleta en el aeropuerto. Tuve que comprar ropa nueva.', zh: '嗯，第一天机场把我的箱子弄丢了。我只好买了新衣服。' },
        { who: 'Elena', es: '¡Qué horror! ¿Y al final la encontraron?', zh: '太可怕了！最后找到了吗？' },
        { who: 'Liu Yang', es: 'Sí, me la trajeron al hotel dos días después. Al final lo pasé genial.', zh: '找到了，两天后送到了酒店。总的来说我玩得超开心。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a2-r05',
      level: 'A2',
      title: 'Un viaje desastroso',
      titleZh: '一次糟糕透顶的旅行',
      topic: '旅行',
      paras: [
        [
          ['El mes pasado mi novio y yo fuimos a Lisboa para celebrar nuestro aniversario.', '上个月我和男朋友去里斯本庆祝恋爱纪念日。'],
          ['Pero todo salió mal desde el principio.', '但从一开始就一切都不顺。'],
        ],
        [
          ['Primero, el vuelo salió con tres horas de retraso.', '首先，航班晚点了三个小时。'],
          ['Cuando por fin llegamos, el hotel no tenía nuestra reserva.', '等我们终于到了，酒店却没有我们的预订。'],
          ['Tuvimos que buscar otro alojamiento a las once de la noche.', '晚上十一点，我们不得不另找住处。'],
        ],
        [
          ['Al día siguiente llovió todo el día y no pudimos hacer la excursión en barco.', '第二天下了一整天雨，我们没能坐船出游。'],
          ['Por la noche fuimos a un restaurante muy famoso, pero mi novio pidió un plato de marisco y se sintió fatal toda la noche.', '晚上我们去了一家很有名的餐馆，但我男朋友点了一盘海鲜，结果整晚都很难受。'],
        ],
        [
          ['¿Lo peor? ¡Me olvidé el móvil en el taxi!', '最糟的是？我把手机落在出租车上了！'],
          ['Ahora nos reímos mucho cuando recordamos aquel viaje.', '现在回想起那次旅行，我们都会笑得不行。'],
        ],
      ],
      gloss: { aniversario: '周年纪念日', salió: '结果（salir 过去时）', principio: '开始', tenía: '有（过去未完成时）', siguiente: '下一个的', llovió: '下雨了', marisco: '海鲜', fatal: '糟糕地', peor: '最糟的', olvidé: '忘了', reímos: '笑', recordamos: '回想', aquel: '那个' },
      questions: [
        { type: 'mc', q: '他们为什么去里斯本？', options: ['出差', '庆祝纪念日', '看朋友'], answer: 1 },
        { type: 'tf', q: '酒店有他们的预订。', answer: false, explain: 'El hotel no tenía nuestra reserva.' },
        { type: 'mc', q: '第二天为什么没能坐船出游？', options: ['船坏了', '下雨了', '男朋友病了'], answer: 1 },
        { type: 'mc', q: '作者把手机落在哪里了？', options: ['餐馆', '酒店', '出租车上'], answer: 2 },
      ],
    },
    {
      id: 'a2-r06',
      level: 'A2',
      title: 'El Camino de Santiago',
      titleZh: '圣地亚哥朝圣之路',
      topic: '旅行与文化',
      paras: [
        [
          ['El año pasado hice el Camino de Santiago con mi hermano.', '去年我和哥哥走了圣地亚哥朝圣之路。'],
          ['Empezamos en Sarria, a unos cien kilómetros de Santiago de Compostela.', '我们从萨里亚出发，离圣地亚哥-德孔波斯特拉大约一百公里。'],
        ],
        [
          ['Caminamos entre veinte y veinticinco kilómetros cada día.', '我们每天走二十到二十五公里。'],
          ['Dormimos en albergues y conocimos a peregrinos de todo el mundo.', '我们住在青旅，认识了来自世界各地的朝圣者。'],
          ['El tercer día me dolieron mucho los pies, pero no quise parar.', '第三天我脚很疼，但我不想停下来。'],
        ],
        [
          ['Después de cinco días, llegamos a la catedral de Santiago.', '五天后，我们到达了圣地亚哥大教堂。'],
          ['Fue un momento muy emocionante. ¡Estuvimos media hora en silencio delante de la catedral!', '那一刻非常激动。我们在大教堂前静静地站了半个小时！'],
        ],
      ],
      gloss: { Camino: '道路', unos: '大约', kilómetros: '公里', cada: '每个', peregrinos: '朝圣者', tercer: '第三', dolieron: '疼（过去时）', quise: '想（querer 过去时）', parar: '停下', emocionante: '令人激动的', silencio: '安静' },
      questions: [
        { type: 'mc', q: '作者从哪里出发？', options: ['圣地亚哥', '萨里亚', '马德里'], answer: 1 },
        { type: 'mc', q: '他们每天大约走多少公里？', options: ['10 公里', '20–25 公里', '50 公里'], answer: 1 },
        { type: 'tf', q: '作者第三天因为脚疼停下了。', answer: false, explain: 'No quise parar.' },
        { type: 'tf', q: '他们走了五天到达大教堂。', answer: true },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '讲一次你难忘的旅行：去了哪里、和谁一起、怎么去的、做了什么、遇到了什么问题，感觉怎么样。', words: [60, 120], hints: ['El año pasado fui a… con…', 'Estuvimos… días. Visitamos… / Hicimos…', 'Fue un viaje…'] }],
}
