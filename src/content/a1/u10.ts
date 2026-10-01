import type { Unit } from '../types'

export const u10: Unit = {
  id: 'a1-u10',
  level: 'A1',
  order: 10,
  title: '此时此刻',
  titleEs: 'Ahora mismo',
  icon: '📱',
  goals: ['用 estar + 副动词说“正在做……”', '掌握第一人称不规则的常用动词', '区分 saber 和 conocer，使用人称前置词 a', '掌握 e→i 词根变化动词'],
  grammar: [
    {
      id: 'a1-gerundio',
      title: 'estar + 副动词：正在做',
      titleEs: 'Estar + gerundio',
      level: 'A1',
      summary: '-ar → -ando，-er / -ir → -iendo：Estoy hablando. 表示此刻正在进行的动作。',
      body: `### 副动词（gerundio）的构成
| 不定式 | 副动词 |
|---|---|
| habl**ar** | habl**ando** |
| com**er** | com**iendo** |
| escrib**ir** | escrib**iendo** |

### 常见不规则副动词
- 元音 + *-er / -ir*：**-yendo**：*leer → leyendo*、*oír → oyendo*、*construir → construyendo*
- e→i、o→u：*pedir → pidiendo*、*decir → diciendo*、*dormir → durmiendo*、*venir → viniendo*
- *ir → yendo*、*poder → pudiendo*

### estar + 副动词
| | |
|---|---|
| *¿Qué **estás haciendo**?* | 你在做什么？ |
| ***Estoy estudiando**.* | 我在学习。 |
| *Los niños **están durmiendo**.* | 孩子们在睡觉。 |
| ***Está lloviendo**.* | 正在下雨。 |

### 和中文的区别
西语只在 **此刻正在进行** 时才用这个结构。习惯性的动作用一般现在时：
*Trabajo en un banco.*（我在银行工作。）——不说 *Estoy trabajando en un banco*，除非强调“这段时间暂时在”

### 代词的位置
*Me estoy duchando.* = *Estoy duchándome.*（我在洗澡。）——连在后面时副动词要加重音符号`,
      examples: [
        ['¿Qué estás haciendo?', '你在做什么？'],
        ['Estoy viendo una serie.', '我在看剧。'],
        ['Mi madre está cocinando.', '我妈妈在做饭。'],
        ['No puedo hablar ahora, estoy conduciendo.', '我现在不能说话，在开车。'],
        ['Está lloviendo mucho.', '雨下得很大。'],
      ],
      origin: `西语副动词来自拉丁语的 **动名词夺格**：*cantando*（通过唱歌）、*legendo*（通过阅读）。拉丁语 *-endo* 在西语里变成了 *-iendo*（重读的 e 变 ie）。

*estar + 副动词* 字面意思是“处在……之中”：*estoy hablando* ≈“我正站在说话的状态里”。这和英语 *I am speaking* 的进行时思路一样。`,
      pitfalls: ['习惯性动作用进行时：❌ *Estoy viviendo en Pekín*（除非是暂时的）✅ *Vivo en Pekín.*', '❌ *leiendo* ✅ *leyendo*；❌ *dormiendo* ✅ *durmiendo*。', '漏掉 estar：❌ *Yo comiendo.* ✅ *Estoy comiendo.*'],
    },
    {
      id: 'a1-yo-irregular',
      title: '第一人称不规则的动词',
      titleEs: 'Verbos irregulares en primera persona',
      level: 'A1',
      summary: '只有 yo 不规则：hago, pongo, salgo, traigo, conozco, sé, veo, doy；其他人称规则。',
      body: `这些动词只有 **第一人称单数（yo）** 不规则，其余人称都按规则变：

| 不定式 | yo | tú（规则） | 中文 |
|---|---|---|---|
| hacer | **hago** | haces | 做 |
| poner | **pongo** | pones | 放 |
| salir | **salgo** | sales | 出去 |
| traer | **traigo** | traes | 带来 |
| conocer | **conozco** | conoces | 认识 |
| saber | **sé** | sabes | 知道 |
| ver | **veo** | ves | 看 |
| dar | **doy** | das | 给 |

### 规律
- **-go 组**：*hacer → hago、poner → pongo、salir → salgo、traer → traigo*（还有学过的 *tener → tengo、venir → vengo、decir → digo*）
- **-zco 组**：元音 + *-cer / -cir* 的动词：*conocer → conozco、conducir → conduzco、traducir → traduzco、parecer → parezco*
- **特殊**：*saber → sé*（带重音，区别于代词 se）、*dar → doy*、*ver → veo*

### 一些常用说法
*Hago deporte.*（我做运动。）· *Pongo la mesa.*（我摆餐桌。）· *Salgo de casa a las ocho.*（我八点出门。）· *No sé.*（我不知道。）· *Te doy mi número.*（我给你我的号码。）`,
      examples: [
        ['¿Qué haces los domingos? — Hago la compra.', '你周日做什么？——我去采购。'],
        ['Salgo de casa a las ocho.', '我八点出门。'],
        ['Siempre traigo la comida de casa.', '我总是从家里带饭。'],
        ['No conozco a tu hermano.', '我不认识你哥哥。'],
        ['No sé dónde está mi móvil.', '我不知道我的手机在哪儿。'],
      ],
      tables: [{ verbs: ['hacer', 'poner', 'salir', 'conocer'], tense: 'pres' }],
      origin: `**-zco 是怎么来的？** 拉丁语有一类动词带 *-sc-*，表示“开始变得……”，叫“起始动词”：*cognoscere*（认识）、*parescere*（出现）。西语保留了第一人称里的 *-sc-*，写成 *-zc-*：*conozco*、*parezco*。

**-go 的扩散**：*digo*（拉丁语 *dico*）、*hago*（*facio*）本来就有 g 或 c，后来 *tengo、pongo、salgo、vengo* 也“学”着加上了 g。`,
      pitfalls: ['❌ *haco* / *hacio* ✅ *hago*；❌ *conoco* ✅ *conozco*。', '把 *sé*（我知道）写成 *se*（自反代词）。'],
    },
    {
      id: 'a1-saber-conocer',
      title: 'saber 和 conocer；人称前置词 a',
      titleEs: 'Saber y conocer',
      level: 'A1',
      summary: 'saber：知道信息、会做某事；conocer：认识人、去过 / 熟悉某地。宾语是具体的人时加 a。',
      body: `| saber | conocer |
|---|---|
| 知道 **信息、事实** | **认识** 人 |
| *Sé su número.*（我知道他的号码。） | *Conozco a Ana.*（我认识安娜。） |
| *¿Sabes dónde está?*（你知道在哪儿吗？） | **去过、熟悉** 某地 |
| **会** 做某事（+ 原形） | *Conozco Barcelona.*（我去过巴塞罗那。） |
| *Sé nadar.*（我会游泳。） | 了解某作品 / 事物 |
| | *¿Conoces esta canción?*（你听过这首歌吗？） |

> *saber + 原形* = 掌握一项技能。“能不能”（条件允许）用 *poder*：*Sé nadar, pero hoy no puedo: estoy enfermo.*（我会游泳，但今天不能去：我病了。）

### 人称前置词 a
直接宾语是 **具体的人**（或当成家人的宠物）时，前面要加 **a**：
- *Conozco **a** tu hermana.*（我认识你妹妹。）
- *Veo **a** mis abuelos los domingos.*（我每周日去看祖父母。）
- *Busco **a** mi perro.*（我在找我的狗。）
- 对比：*Veo **la** tele.*（我看电视。）——东西不加 a`,
      examples: [
        ['¿Sabes hablar inglés?', '你会说英语吗？'],
        ['No sé dónde vive.', '我不知道他住在哪里。'],
        ['¿Conoces a mi novio?', '你认识我男朋友吗？'],
        ['Conozco muy bien Madrid.', '我对马德里很熟。'],
        ['Mi hijo sabe leer.', '我儿子会读书了。'],
      ],
      tables: [{ verbs: ['saber', 'conocer'], tense: 'pres' }],
      origin: `- **saber** 来自拉丁语 *sapere*（尝味道，有见识），所以 *saber* 还有“有……味道”的意思：*Sabe a chocolate.*（尝起来像巧克力。）英语 *sapient*、拉丁学名 *Homo sapiens*（有智慧的人）同源。
- **conocer** 来自 *cognoscere*（认识），英语 *recognize、cognitive* 同源。

**人称 a** 是西语的一个特色：它让句子在语序灵活时也能看出谁是宾语。拉丁语靠词尾变格区分主宾，西语丢掉了变格，就用 *a* 来标记“受动的人”。`,
      pitfalls: ['❌ *Conozco nadar.* ✅ *Sé nadar.*', '❌ *Sé a María.* ✅ *Conozco a María.*', '漏掉人称 a：❌ *Conozco tu hermano.* ✅ *Conozco a tu hermano.*'],
    },
    {
      id: 'a1-e-i',
      title: '词根变化动词 e → i',
      titleEs: 'Verbos irregulares e > i',
      level: 'A1',
      summary: 'pedir, servir, repetir, seguir, vestirse：重读时 e 变成 i（只有 -ir 动词）。',
      body: `第三种“靴子”动词：**e → i**，只出现在 *-ir* 动词里。

| 人称 | pedir 要，点（菜） | repetir 重复 | seguir 跟随，继续 |
|---|---|---|---|
| yo | p**i**do | rep**i**to | s**i**go |
| tú | p**i**des | rep**i**tes | s**i**gues |
| él / ella / usted | p**i**de | rep**i**te | s**i**gue |
| nosotros | pedimos | repetimos | seguimos |
| vosotros | pedís | repetís | seguís |
| ellos / ustedes | p**i**den | rep**i**ten | s**i**guen |

### 常见 e→i 动词
*pedir*（要求，点菜）· *servir*（服务，盛）· *repetir*（重复）· *seguir*（跟随，继续）· *vestirse*（穿衣）· *elegir*（选择：*elijo*）· *decir*（说：*digo, dices*）

### pedir 和 preguntar
- **pedir**：要东西、请求：*Pido un café.*（我点一杯咖啡。）
- **preguntar**：问问题：*Pregunto la hora.*（我问时间。）

### 课堂常用
*¿Puede repetir, por favor?*（您能重复一遍吗？）
*Más despacio, por favor.*（请慢一点。）`,
      examples: [
        ['Siempre pido paella en este restaurante.', '在这家餐馆我总点海鲜饭。'],
        ['¿Puede repetir, por favor?', '您能再说一遍吗？'],
        ['Seguimos en clase hasta las dos.', '我们一直上课到两点。'],
        ['Mi hija se viste sola.', '我女儿自己穿衣服。'],
        ['¿Qué pedís?', '你们点什么？'],
      ],
      tables: [{ verbs: ['pedir', 'seguir'], tense: 'pres' }],
      origin: `**为什么有的是 e→ie，有的是 e→i？**
- **e→ie** 来自拉丁语 **重读短 e** 的二重元音化：*quaerere → quiero*。
- **e→i** 只出现在 *pedir、servir* 这类 **-ir** 动词里：古西语时期，词根的 e 受到后面音节元音的影响被“抬高”成了 i。规律是：后面紧跟的音节里有 **重读的 i**（*pedimos、pedís、pedir*）时，词根保持 e；否则变成 i（*pido、pides、pidió*）。所以 nosotros、vosotros 依然不变。

**seguir** 来自拉丁语 *sequi*（跟随），英语 *sequence、consequence* 同源。`,
      pitfalls: ['❌ *pedo* 是个尴尬的错误（意思是“屁”）！✅ *pido*。', '❌ *pidimos* ✅ *pedimos*（nosotros 不变）。', '把 *pedir* 和 *preguntar* 混用：❌ *Pido una pregunta.* ✅ *Hago una pregunta.*'],
    },
  ],
  words: [
    { id: 'ahora', es: 'ahora', zh: '现在', pos: 'adv', level: 'A1', tags: ['time'], ex: ['Ahora estoy en casa.', '我现在在家。'], ety: '拉丁语 hac hora「在这个时刻」。', note: 'ahora mismo = 此时此刻；马上。' },
    { id: 'poner', es: 'poner', zh: '放；摆', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Pongo las llaves en la mesa.', '我把钥匙放在桌上。'], ety: '拉丁语 ponere「放置」。英语 position、compose 同源。', note: '第一人称 pongo；过去分词 puesto。' },
    { id: 'traer', es: 'traer', zh: '带来', pos: 'v', level: 'A1', tags: ['verb'], ex: ['¿Me traes un vaso de agua?', '你给我拿杯水来好吗？'], ety: '拉丁语 trahere「拉」。英语 tractor、attract 同源。', note: '第一人称 traigo。' },
    { id: 'conocer', es: 'conocer', zh: '认识；了解', pos: 'v', level: 'A1', tags: ['verb'], ex: ['¿Conoces a mi hermana?', '你认识我妹妹吗？'], ety: '拉丁语 cognoscere。英语 recognize 同源。', note: '第一人称 conozco；人作宾语加 a。' },
    { id: 'saber', es: 'saber', zh: '知道；会；有……味道', pos: 'v', level: 'A1', tags: ['verb'], ex: ['No sé.', '我不知道。'], ety: '拉丁语 sapere「品尝；有见识」。', note: '第一人称 sé（带重音）。' },
    { id: 'dar', es: 'dar', zh: '给', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Te doy mi número de teléfono.', '我把电话号码给你。'], ety: '拉丁语 dare。英语 donate、data 同源。', note: '第一人称 doy。' },
    { id: 'pedir', es: 'pedir', zh: '要；请求；点（菜）', pos: 'v', level: 'A1', tags: ['verb', 'food'], ex: ['Pido un café con leche.', '我点一杯牛奶咖啡。'], ety: '拉丁语 petere「寻求」。英语 petition 同源。', note: 'e→i：pido, pides…' },
    { id: 'servir', es: 'servir', zh: '服务；盛（饭）；有用', pos: 'v', level: 'A1', tags: ['verb'], ex: ['¿Para qué sirve esto?', '这个是干什么用的？'], ety: '拉丁语 servire。英语 serve 同源。', note: 'e→i：sirvo, sirves…' },
    { id: 'repetir', es: 'repetir', zh: '重复', pos: 'v', level: 'A1', tags: ['verb', 'school'], ex: ['¿Puede repetir, por favor?', '您能再说一遍吗？'], ety: '拉丁语 repetere。英语 repeat 同源。', note: 'e→i：repito, repites…' },
    { id: 'seguir', es: 'seguir', zh: '跟随；继续', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Sigue todo recto.', '一直往前走。'], ety: '拉丁语 sequi。英语 sequence 同源。', note: 'e→i，且 gu→g：sigo, sigues…' },
    { id: 'vestirse', es: 'vestirse', zh: '穿衣服', pos: 'v', level: 'A1', tags: ['verb', 'clothes'], ex: ['Me visto en cinco minutos.', '我五分钟就穿好衣服。'], ety: '拉丁语 vestire。英语 vest 同源。', note: 'e→i：me visto, te vistes…' },
    { id: 'preguntar', es: 'preguntar', zh: '问', pos: 'v', level: 'A1', tags: ['verb', 'school'], ex: ['¿Puedo preguntar algo?', '我可以问个问题吗？'], ety: '拉丁语 percontari「探问」。' },
    { id: 'esperar', es: 'esperar', zh: '等；希望', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Te espero en la puerta.', '我在门口等你。'], ety: '拉丁语 sperare「希望」，词首加了 e。' },
    { id: 'mirar', es: 'mirar', zh: '看；瞧', pos: 'v', level: 'A1', tags: ['verb'], ex: ['¡Mira qué bonito!', '瞧，多漂亮！'], ety: '拉丁语 mirari「惊奇地看」。英语 mirror、miracle 同源。', note: 'mirar 是“有意去看”，ver 是“看见”。' },
    { id: 'escuchar', es: 'escuchar', zh: '听', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Escucho música en el metro.', '我在地铁上听音乐。'], ety: '拉丁语 auscultare「仔细听」。', note: 'escuchar 是“有意去听”，oír 是“听见”。', emoji: '🎧' },
    { id: 'cocinar', es: 'cocinar', zh: '做饭', pos: 'v', level: 'A1', tags: ['verb', 'food'], ex: ['Mi padre cocina muy bien.', '我爸爸饭做得很好。'], ety: '来自 cocina「厨房」。', emoji: '🧑‍🍳' },
    { id: 'limpiar', es: 'limpiar', zh: '打扫；清洁', pos: 'v', level: 'A1', tags: ['verb', 'home'], ex: ['Los sábados limpio la casa.', '我每周六打扫房子。'], ety: '来自 limpio「干净的」< 拉丁语 limpidus「清澈的」。', emoji: '🧹' },
    { id: 'llamar', es: 'llamar', zh: '打电话；叫', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Te llamo esta noche.', '我今晚给你打电话。'], ety: '拉丁语 clamare「喊」。', emoji: '📞' },
    { id: 'conducir', es: 'conducir', zh: '开车；驾驶', pos: 'v', level: 'A1', tags: ['verb', 'travel'], ex: ['No sé conducir.', '我不会开车。'], ety: '拉丁语 conducere「引导」。英语 conduct 同源。', note: '第一人称 conduzco。', latam: '拉美多说 manejar。', emoji: '🚗' },
    { id: 'movil', es: 'móvil', zh: '手机', pos: 'n', g: 'm', pl: 'móviles', level: 'A1', tags: ['home'], ex: ['¿Dónde está mi móvil?', '我的手机在哪儿？'], ety: '来自 teléfono móvil「移动电话」，móvil < 拉丁语 mobilis「可移动的」。', latam: '拉美说 celular。', emoji: '📱' },
    { id: 'ordenador', es: 'ordenador', zh: '电脑', pos: 'n', g: 'm', level: 'A1', tags: ['home', 'school'], ex: ['Trabajo con el ordenador.', '我用电脑工作。'], ety: '来自 ordenar「整理，排序」，借自法语 ordinateur。', latam: '拉美说 computadora 或 computador。', emoji: '💻' },
    { id: 'mensaje', es: 'mensaje', zh: '消息；短信', pos: 'n', g: 'm', level: 'A1', tags: ['home'], ex: ['Te mando un mensaje.', '我给你发条消息。'], ety: '来自古奥克语 messatge，词根是拉丁语 missus「被派出的」。英语 message 同源。', emoji: '💬' },
    { id: 'television', es: 'televisión', zh: '电视', pos: 'n', g: 'f', pl: 'televisiones', level: 'A1', tags: ['home', 'hobby'], ex: ['Veo la televisión por la noche.', '我晚上看电视。'], ety: '希腊语 tēle「远」+ 拉丁语 visio「看」。', note: '口语常说 la tele。', emoji: '📺' },
    { id: 'noticia', es: 'noticia', zh: '新闻；消息', pos: 'n', g: 'f', level: 'A1', tags: ['home'], ex: ['¡Tengo una buena noticia!', '我有个好消息！'], ety: '拉丁语 notitia「认识，知晓」。英语 notice 同源。', emoji: '📰' },
    { id: 'llave', es: 'llave', zh: '钥匙', pos: 'n', g: 'f', level: 'A1', tags: ['home'], ex: ['No encuentro las llaves.', '我找不到钥匙。'], ety: '拉丁语 clavem，cl- 变成 ll-。英语 clavicle（锁骨）同源。', emoji: '🔑' },
    { id: 'despacio', es: 'despacio', zh: '慢慢地', pos: 'adv', level: 'A1', tags: ['func'], ex: ['Más despacio, por favor.', '请慢一点。'], ety: 'de + espacio「空间；间隔」。' },
    { id: 'rapido', es: 'rápido', f: 'rápida', zh: '快的；快地', pos: 'adj', level: 'A1', tags: ['adj'], ex: ['Hablas muy rápido.', '你说得太快了。'], ety: '拉丁语 rapidus。英语 rapid 同源。' },
    { id: 'algo', es: 'algo', zh: '某事；一点', pos: 'pron', level: 'A1', tags: ['func'], ex: ['¿Quieres algo?', '你要点什么吗？'], ety: '拉丁语 aliquod「某物」。' },
    { id: 'nada', es: 'nada', zh: '什么也没有', pos: 'pron', level: 'A1', tags: ['func'], ex: ['No hago nada.', '我什么也没做。'], ety: '拉丁语 (res) nata「生出的东西」，在否定句中渐渐变成“什么都没有”。', note: '放在动词后要加 no：No quiero nada.' },
    { id: 'alguien', es: 'alguien', zh: '某人', pos: 'pron', level: 'A1', tags: ['func'], ex: ['¿Hay alguien en casa?', '家里有人吗？'], ety: '拉丁语 aliquem「某人」。' },
    { id: 'nadie', es: 'nadie', zh: '没有人', pos: 'pron', level: 'A1', tags: ['func'], ex: ['No hay nadie en la clase.', '教室里没有人。'], ety: '古西语 nadi，由 (homines) nati「出生的人」演变而来，与 nada 同类。' },
  ],
  sentences: [
    { id: 's1', es: '¿Qué estás haciendo?', zh: '你在做什么？', g: ['a1-gerundio'], distract: ['haces'] },
    { id: 's2', es: 'Estoy viendo una serie.', zh: '我在看剧。', g: ['a1-gerundio'], distract: ['veo'] },
    { id: 's3', es: 'Mi madre está cocinando.', zh: '我妈妈在做饭。', g: ['a1-gerundio'] },
    { id: 's4', es: 'Los niños están durmiendo.', zh: '孩子们在睡觉。', g: ['a1-gerundio'], distract: ['dormiendo'] },
    { id: 's5', es: 'Está lloviendo mucho.', zh: '雨下得很大。', g: ['a1-gerundio'] },
    { id: 's6', es: 'Estamos esperando el autobús.', zh: '我们在等公交车。', g: ['a1-gerundio'] },
    { id: 's7', es: 'No puedo hablar, estoy conduciendo.', zh: '我不能说话，在开车。', g: ['a1-gerundio'] },
    { id: 's8', es: 'Hago deporte los martes.', zh: '我每周二运动。', g: ['a1-yo-irregular'], distract: ['haco'] },
    { id: 's9', es: 'Salgo de casa a las ocho.', zh: '我八点出门。', g: ['a1-yo-irregular'], distract: ['salo'] },
    { id: 's10', es: 'Pongo las llaves en la mesa.', zh: '我把钥匙放在桌上。', g: ['a1-yo-irregular'] },
    { id: 's11', es: 'Siempre traigo la comida de casa.', zh: '我总是从家里带饭。', g: ['a1-yo-irregular'] },
    { id: 's12', es: 'Te doy mi número.', zh: '我把号码给你。', g: ['a1-yo-irregular'] },
    { id: 's13', es: 'No sé dónde está mi móvil.', zh: '我不知道我的手机在哪儿。', g: ['a1-yo-irregular', 'a1-saber-conocer'] },
    { id: 's14', es: '¿Sabes nadar?', zh: '你会游泳吗？', g: ['a1-saber-conocer'], distract: ['conoces'] },
    { id: 's15', es: '¿Conoces a mi hermana?', zh: '你认识我妹妹吗？', g: ['a1-saber-conocer'], distract: ['sabes'] },
    { id: 's16', es: 'Conozco muy bien Barcelona.', zh: '我对巴塞罗那很熟。', g: ['a1-saber-conocer'] },
    { id: 's17', es: 'Veo a mis abuelos los domingos.', zh: '我每周日去看祖父母。', g: ['a1-saber-conocer'] },
    { id: 's18', es: 'Mi hijo ya sabe leer.', zh: '我儿子已经会读书了。', g: ['a1-saber-conocer'] },
    { id: 's19', es: 'Siempre pido paella.', zh: '我总是点海鲜饭。', g: ['a1-e-i'], distract: ['pedo'] },
    { id: 's20', es: '¿Puede repetir, por favor?', zh: '您能再说一遍吗？', g: ['a1-e-i'] },
    { id: 's21', es: 'Sigue todo recto.', zh: '一直往前走。', g: ['a1-e-i'] },
    { id: 's22', es: 'Mi hija se viste sola.', zh: '我女儿自己穿衣服。', g: ['a1-e-i'] },
    { id: 's23', es: '¿Qué pedimos?', zh: '我们点什么？', g: ['a1-e-i'], distract: ['pidimos'] },
    { id: 's24', es: 'Más despacio, por favor.', zh: '请慢一点。', g: ['a1-e-i'] },
  ],
  cloze: [
    { id: 'c1', text: 'Ahora estoy ___ un libro.', answers: ['leyendo'], options: ['leyendo', 'leiendo', 'leendo'], zh: '我现在在看书。', g: ['a1-gerundio'] },
    { id: 'c2', text: 'Los niños están ___ en el parque.', answers: ['jugando'], hint: 'jugar', zh: '孩子们在公园里玩。', g: ['a1-gerundio'] },
    { id: 'c3', text: '¿Qué ___ haciendo? — Estudiando.', answers: ['estás'], options: ['estás', 'eres', 'haces'], zh: '你在做什么？——在学习。', g: ['a1-gerundio'] },
    { id: 'c4', text: 'Mi abuelo está ___. No hagas ruido.', answers: ['durmiendo'], options: ['durmiendo', 'dormiendo', 'duermiendo'], zh: '我爷爷在睡觉，别出声。', g: ['a1-gerundio'] },
    { id: 'c5', text: 'Estamos ___ la cena.', answers: ['preparando'], hint: 'preparar', zh: '我们在准备晚饭。', g: ['a1-gerundio'] },
    { id: 'c6', text: 'Yo ___ la cama todas las mañanas.', answers: ['hago'], hint: 'hacer', zh: '我每天早上铺床。', g: ['a1-yo-irregular'] },
    { id: 'c7', text: 'Yo ___ de casa a las siete y media.', answers: ['salgo'], hint: 'salir', zh: '我七点半出门。', g: ['a1-yo-irregular'] },
    { id: 'c8', text: 'Yo no ___ a nadie en esta ciudad.', answers: ['conozco'], hint: 'conocer', zh: '在这座城市我谁也不认识。', g: ['a1-yo-irregular'] },
    { id: 'c9', text: 'Yo ___ el móvil en el bolso.', answers: ['pongo'], hint: 'poner', zh: '我把手机放在包里。', g: ['a1-yo-irregular'] },
    { id: 'c10', text: '¿Dónde está Juan? — No ___.', answers: ['sé'], options: ['sé', 'se', 'sabo'], zh: '胡安在哪儿？——我不知道。', g: ['a1-yo-irregular'] },
    { id: 'c11', text: '¿___ tocar la guitarra?', answers: ['Sabes'], options: ['Sabes', 'Conoces', 'Puedes'], zh: '你会弹吉他吗？', g: ['a1-saber-conocer'], explain: '会做某事（技能）用 saber + 原形。' },
    { id: 'c12', text: '¿___ a mi profesora de español?', answers: ['Conoces'], options: ['Conoces', 'Sabes', 'Ves'], zh: '你认识我的西语老师吗？', g: ['a1-saber-conocer'] },
    { id: 'c13', text: 'No ___ dónde vive Luis.', answers: ['sé'], options: ['sé', 'conozco', 'veo'], zh: '我不知道路易斯住在哪儿。', g: ['a1-saber-conocer'] },
    { id: 'c14', text: 'Visito ___ mis abuelos cada semana.', answers: ['a'], options: ['a', '—', 'en'], zh: '我每周去看望祖父母。', g: ['a1-saber-conocer'], explain: '宾语是具体的人，要加人称前置词 a。' },
    { id: 'c15', text: 'Yo siempre ___ pescado en este restaurante.', answers: ['pido'], hint: 'pedir', zh: '在这家餐馆我总点鱼。', g: ['a1-e-i'] },
    { id: 'c16', text: 'Nosotros ___ una mesa para cuatro.', answers: ['pedimos'], hint: 'pedir', zh: '我们要一张四人桌。', g: ['a1-e-i'], explain: 'nosotros 不变：pedimos。' },
    { id: 'c17', text: 'El profesor ___ la pregunta dos veces.', answers: ['repite'], hint: 'repetir', zh: '老师把问题重复了两遍。', g: ['a1-e-i'] },
    { id: 'c18', text: '¿Me ___? — Sí, te sigo.', answers: ['sigues'], options: ['sigues', 'segues', 'siges'], zh: '你跟得上吗？——跟得上。', g: ['a1-e-i'] },
  ],
  conj: [
    { verbs: ['hacer', 'poner', 'salir', 'traer', 'conocer', 'saber', 'dar', 'ver'], tenses: ['pres'], persons: [0], g: 'a1-yo-irregular' },
    { verbs: ['pedir', 'servir', 'repetir', 'seguir'], tenses: ['pres'], g: 'a1-e-i' },
  ],
  dialogues: [
    {
      id: 'a1-u10-d1',
      title: '打电话 · Una llamada',
      lines: [
        { who: 'Mamá', es: '¡Hola, cariño! ¿Qué estás haciendo?', zh: '你好，宝贝！你在做什么呢？' },
        { who: 'Lin', es: 'Hola, mamá. Estoy estudiando en la biblioteca.', zh: '你好，妈妈。我在图书馆学习。' },
        { who: 'Mamá', es: '¿Y tu hermano? No contesta al teléfono.', zh: '那你弟弟呢？他不接电话。' },
        { who: 'Lin', es: 'No sé. Creo que está jugando al fútbol con sus amigos.', zh: '不知道。我觉得他在和朋友踢足球。' },
        { who: 'Mamá', es: 'Bueno. Oye, ¿conoces a la nueva vecina?', zh: '好吧。对了，你认识新来的邻居吗？' },
        { who: 'Lin', es: 'Sí, la conozco. Es muy simpática y sabe hablar chino.', zh: '认识。她人很好，还会说中文。' },
        { who: 'Mamá', es: '¡Qué bien! Bueno, te dejo. Sigue estudiando.', zh: '太好了！好啦，不打扰你了。继续学习吧。' },
        { who: 'Lin', es: 'Vale, un beso. Hasta luego.', zh: '好的，亲一个。回头见。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a1-r17',
      level: 'A1',
      title: 'Las ocho de la tarde en mi edificio',
      titleZh: '晚上八点的公寓楼',
      topic: '日常',
      paras: [
        [
          ['Son las ocho de la tarde y todos mis vecinos están en casa.', '晚上八点，我所有的邻居都在家。'],
          ['En el primer piso, el señor Ruiz está viendo el fútbol en la tele.', '一楼的鲁伊斯先生在看电视上的足球比赛。'],
          ['Su mujer está cocinando: ¡huele a tortilla!', '他妻子在做饭：闻起来是土豆饼的味道！'],
        ],
        [
          ['En el segundo piso viven unos estudiantes.', '二楼住着几个学生。'],
          ['Uno está tocando la guitarra y los otros están cantando.', '一个在弹吉他，其他人在唱歌。'],
          ['En el tercer piso, la pequeña Alba está haciendo los deberes con su padre.', '三楼的小阿尔瓦在和爸爸一起写作业。'],
        ],
        [
          ['¿Y yo? Yo estoy escribiendo este texto en el balcón.', '那我呢？我正在阳台上写这篇文章。'],
          ['Desde aquí veo y escucho a todo el edificio. ¡Es como una película!', '从这里我能看到、听到整栋楼。就像一部电影！'],
        ],
      ],
      gloss: { todos: '所有的', vecinos: '邻居们', primer: '第一', huele: '闻起来（oler 第三人称）', segundo: '第二', otros: '其他的', tercer: '第三', pequeña: '小的', deberes: '作业', texto: '文章', balcón: '阳台', Desde: '从', edificio: '楼', como: '像' },
      questions: [
        { type: 'mc', q: '鲁伊斯先生在做什么？', options: ['做饭', '看足球', '弹吉他'], answer: 1 },
        { type: 'tf', q: '二楼的学生在学习。', answer: false, explain: '一个在弹吉他，其他人在唱歌。' },
        { type: 'mc', q: 'Alba 在做什么？', options: ['写作业', '睡觉', '看电视'], answer: 0 },
        { type: 'mc', q: '作者在哪里？', options: ['客厅', '厨房', '阳台'], answer: 2 },
      ],
    },
    {
      id: 'a1-r18',
      level: 'A1',
      title: 'Un mensaje de Hao',
      titleZh: '浩的一条消息',
      topic: '交际',
      paras: [
        [
          ['¡Hola, Sofía! ¿Qué tal?', '你好，索菲亚！最近怎么样？'],
          ['Te escribo desde el tren. Estoy volviendo a Madrid después de una semana en Granada.', '我在火车上给你写信。在格拉纳达待了一周，正在回马德里的路上。'],
        ],
        [
          ['Granada es preciosa. Ahora conozco la Alhambra y sé decir muchas palabras andaluzas.', '格拉纳达美极了。现在我去过阿尔罕布拉宫了，还会说很多安达卢西亚的词。'],
          ['Te traigo un regalo: un libro de recetas de tapas.', '我给你带了个礼物：一本塔帕斯菜谱。'],
        ],
        [
          ['¿Sabes qué? En el tren hay una chica china que conoce a tu hermano.', '你知道吗？火车上有个中国女孩认识你哥哥。'],
          ['¡El mundo es un pañuelo!', '世界真小！'],
          ['Llego a las nueve. ¿Hacemos algo mañana? Un beso.', '我九点到。明天我们一起做点什么吧？亲一个。'],
        ],
      ],
      gloss: { escribo: '我写', desde: '从', tren: '火车', volviendo: '回来（副动词）', preciosa: '非常美的', palabras: '词语', andaluzas: '安达卢西亚的', regalo: '礼物', recetas: '菜谱', mundo: '世界', pañuelo: '手帕（el mundo es un pañuelo：世界真小）', beso: '吻' },
      questions: [
        { type: 'mc', q: '浩现在在哪里？', options: ['格拉纳达', '火车上', '马德里'], answer: 1 },
        { type: 'mc', q: '浩给索菲亚带了什么？', options: ['一本菜谱', '一件衣服', '一些塔帕斯'], answer: 0 },
        { type: 'tf', q: '火车上的女孩认识索菲亚的哥哥。', answer: true },
        { type: 'mc', q: '“El mundo es un pañuelo” 的意思是？', options: ['世界很大', '世界真小', '天气很冷'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '想象你在给朋友发消息：说说你现在在哪里、正在做什么，身边的人在做什么；再问问朋友会不会某件事、认不认识某个人。', words: [40, 80], hints: ['Ahora estoy en… Estoy…', 'Mi compañero/a está…', '¿Sabes…? ¿Conoces a…?'] }],
}
