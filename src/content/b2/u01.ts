import type { Unit } from '../types'

export const u01: Unit = {
  id: 'b2-u01',
  level: 'B2',
  order: 1,
  title: '假如……',
  titleEs: 'Si yo fuera…',
  icon: '💭',
  goals: ['掌握虚拟式过去未完成时的两种形式（-ra / -se）', '用 si + 虚拟式过去时 + 条件式 谈论假设', '用 ojalá、¡quién pudiera!、me gustaría que 表达不太可能实现的愿望', '畅想“如果中了彩票”“如果能重来”'],
  grammar: [
    {
      id: 'b2-subj-imperfecto',
      title: '虚拟式过去未完成时的构成',
      titleEs: 'El pretérito imperfecto de subjuntivo',
      level: 'B2',
      summary: '取简单过去时第三人称复数（tuvieron），去掉 -ron，加 -ra / -ras / -ra / -ramos / -rais / -ran（或 -se 系列）。nosotros 要加重音：tuviéramos。',
      body: `### 一条规则搞定所有动词
1. 取 **简单过去时 ellos** 的形式：*hablaron, comieron, tuvieron, fueron, dijeron*
2. 去掉 **-ron**：*habla-, comie-, tuvie-, fue-, dije-*
3. 加词尾：

| 人称 | -ra 形式 | -se 形式 |
|---|---|---|
| yo | tuvie**ra** | tuvie**se** |
| tú | tuvie**ras** | tuvie**ses** |
| él / ella / usted | tuvie**ra** | tuvie**se** |
| nosotros | tuvié**ramos** | tuvié**semos** |
| vosotros | tuvie**rais** | tuvie**seis** |
| ellos / ustedes | tuvie**ran** | tuvie**sen** |

所以 简单过去时的所有不规则 **都会继承**：
*ser / ir → **fuera***，*hacer → **hiciera***，*decir → **dijera***，*poder → **pudiera***，*saber → **supiera***，*dormir → **durmiera***，*leer → **leyera***

### -ra 还是 -se？
意思完全一样。西班牙两种都用（-ra 更常见），拉美几乎只用 -ra。**先学 -ra，能认出 -se 就够了。**

### 什么时候用？
主句是 **过去时或条件式** 时，从句里本该用虚拟式现在时的地方，都换成过去时：
- *Quiero que **vengas**.* → *Quería que **vinieras**.*
- *Me alegra que **estés** aquí.* → *Me alegró que **estuvieras** aquí.*
- *Me gustaría que **vinieras**.*（条件式 + 过去虚拟式）`,
      examples: [
        ['Quería que vinieras a mi fiesta.', '我那时想让你来我的派对。'],
        ['Me gustaría que me ayudaras con esto.', '我希望你能帮我弄一下这个。'],
        ['Mis padres no querían que estudiara Bellas Artes.', '我父母当时不想让我学美术。'],
        ['Fue una pena que no pudierais venir.', '你们没能来真遗憾。'],
        ['Quisiera hacerle una pregunta.', '我想问您一个问题。'],
      ],
      tables: [
        { verbs: ['hablar', 'tener', 'ser'], tense: 'subjImpf' },
        { verbs: ['hacer', 'decir', 'poder'], tense: 'subjImpfSe' },
      ],
      origin: `-ra 和 -se 看起来是一对双胞胎，其实来自 **两个不同的拉丁语时态**：
- **-ra** ← 拉丁语 **陈述式过去完成时** *amaveram*（我曾爱过）
- **-se** ← 拉丁语 **虚拟式过去完成时** *amavissem*

-ra 形式慢慢“搬家”进了虚拟式，最后两种形式意思合流。这也解释了为什么在书面语中，*-ra* 偶尔还保留“过去完成”的旧意思：*el edificio que **construyera** Gaudí*（高迪曾经建造的那栋楼）。

**quisiera** 是 *querer* 的过去虚拟式，作为最客气的“我想要”保留了下来：*Quisiera un café*，比 *Quiero* 和 *Querría* 都更委婉。`,
      pitfalls: ['❌ *tuvieramos* ✅ *tuviéramos*：nosotros 形式一定要加重音。', '❌ *dijiera / trajiera* ✅ *dijera / trajera*：过去时 dijeron、trajeron 里没有 i。', '❌ *Quería que vienes.* ✅ *Quería que vinieras.*', '❌ *hiciera* 写成 *haciera* ✅ *hiciera*（来自 hicieron）。'],
      latam: '拉美日常几乎只用 -ra 形式（*tuviera*）；-se 形式（*tuviese*）主要出现在西班牙和书面语中。',
    },
    {
      id: 'b2-si-irreal',
      title: '非真实条件句：si tuviera…, viajaría',
      titleEs: 'Condicionales irreales en presente',
      level: 'B2',
      summary: 'si + 虚拟式过去未完成时，条件式：谈论现在不真实或将来不太可能的假设。Si tuviera tiempo, aprendería a tocar el piano.',
      body: `### 三种条件句的对比
| 类型 | 结构 | 例句 | 说话人怎么看 |
|---|---|---|---|
| 真实 | *si* + 现在时，将来时 / 现在时 | *Si **tengo** tiempo, **iré**.* | 很可能发生 |
| **假设** | ***si* + 虚拟式过去时，条件式** | *Si **tuviera** tiempo, **iría**.* | 不太可能 / 与现实相反 |
| 过去的假设 | *si* + 虚拟式过去完成时，复合条件式 | *Si **hubiera tenido** tiempo, **habría ido**.* | 已经不可能（下个单元） |

### 与现实相反
*Si **fuera** tú, no lo **haría**.*（我要是你，就不这么做。——但我不是你）
*Si **viviera** en la playa, **nadaría** todos los días.*（我要是住在海边……——但我不住在海边）

### 不太可能的将来
*Si me **tocara** la lotería, **dejaría** de trabajar.*（要是中了彩票，我就不上班了。）

### 顺序可以换
*¿Qué **harías** si **pudieras** viajar en el tiempo?*

### 记住
***si* 后面永远不用条件式，也不用虚拟式现在时。**`,
      examples: [
        ['Si tuviera más tiempo, aprendería a tocar el piano.', '如果我有更多时间，我会学弹钢琴。'],
        ['Si fuera tú, no aceptaría ese trabajo.', '我要是你，就不接受那份工作。'],
        ['¿Qué harías si te tocara la lotería?', '如果你中了彩票，你会做什么？'],
        ['Si viviéramos en el campo, tendríamos un perro.', '如果我们住在乡下，就会养条狗。'],
        ['Si supiera la respuesta, te la diría.', '要是我知道答案，我就告诉你了。'],
      ],
      tables: [{ verbs: ['poder', 'saber', 'vivir'], tense: 'subjImpf' }],
      origin: `拉丁语的假设句两边都用虚拟式：*si haberem, darem*（如果我有，我就给）。古西班牙语也是这样：***si tuviera, diera***——今天在诗歌和一些方言里还能听到。后来主句换成了更清楚的 **条件式**（*daría*），从句保留了虚拟式。

条件式本身就是“过去的将来”：*daría* = *dar* + *(hab)ía*。所以假设句的逻辑是：“如果（过去的某种可能）成立，那么（会）……”。`,
      pitfalls: ['❌ *Si tendría dinero, viajaría.* ✅ *Si tuviera dinero, viajaría.*（西班牙北部口语中常听到 si tendría，但不规范。）', '❌ *Si tenga dinero…* ✅ *Si tengo / Si tuviera dinero…*', '❌ *Si fuera yo tú…* ✅ *Si yo fuera tú… / Yo que tú…*'],
    },
    {
      id: 'b2-deseos-irreales',
      title: '不太可能的愿望：ojalá + 过去虚拟式，¡quién pudiera!',
      titleEs: 'Deseos poco probables o imposibles',
      level: 'B2',
      summary: 'ojalá + 虚拟式现在时 = 可能实现；ojalá + 虚拟式过去时 = 不太可能 / 不可能。¡Quién pudiera…! = 要是我能……就好了。me gustaría / preferiría que + 虚拟式过去时。',
      body: `### ojalá：时态显示“可能性”
| 结构 | 说话人觉得 | 例句 |
|---|---|---|
| *ojalá* + 虚拟式现在时 | 有可能 | *Ojalá **haga** sol mañana.* |
| *ojalá* + 虚拟式过去时 | 不太可能 / 与现实相反 | *Ojalá **hiciera** sol, pero está lloviendo.* |
| *ojalá* + 虚拟式过去完成时 | 过去的遗憾（下个单元） | *Ojalá **hubiera venido**.* |

*Ojalá **estuvieras** aquí.*（要是你在这儿就好了。——你不在）

### ¡Quién + 虚拟式过去时!：羡慕、渴望
*—Me voy un mes a Bali. —¡**Quién pudiera**!*（——我要去巴厘岛一个月。——真羡慕！）
*¡**Quién tuviera** veinte años otra vez!*（要是能重回二十岁就好了！）

### 条件式 + que + 虚拟式过去时
- *Me **gustaría** que **vinieras** conmigo.*
- ***Preferiría** que no se lo **dijeras** a nadie.*
- ***Sería** mejor que **habláramos** mañana.*

### 礼貌请求的阶梯
*Quiero… → Querría… → **Quisiera**…*（最客气）`,
      examples: [
        ['Ojalá estuvieras aquí.', '要是你在这儿就好了。'],
        ['Ojalá fuera viernes.', '要是今天是星期五就好了。'],
        ['—Me voy un mes a Bali. —¡Quién pudiera!', '——我要去巴厘岛一个月。——真羡慕！'],
        ['Preferiría que no se lo dijeras a nadie.', '我希望你别告诉任何人。'],
        ['Sería mejor que habláramos mañana con calma.', '我们最好明天再好好谈。'],
      ],
      origin: `**¡Quién pudiera!** 是一个省略句：完整的意思是“谁能（做到）啊！”——问“谁能”，言下之意是“我要是能就好了”。

**anhelar**（渴望）来自拉丁语 *anhelare*「喘气」：渴望到喘不过气来。**añorar**（怀念）则来自加泰罗尼亚语 *enyorar*，源于拉丁语 *ignorare*「不知道」——不知道心爱的人或地方现在怎么样，于是思念。`,
      pitfalls: ['❌ *Ojalá tendría más tiempo.* ✅ *Ojalá tuviera más tiempo.*', '❌ *Me gustaría que vienes.* ✅ *Me gustaría que vinieras.*', '❌ *¡Quién puede!* 表达羡慕 ✅ *¡Quién pudiera!*'],
    },
  ],
  words: [
    { id: 'loteria', es: 'lotería', zh: '彩票', pos: 'n', g: 'f', level: 'B2', tags: ['shop'], ex: ['Juego a la lotería todas las Navidades.', '我每年圣诞节都买彩票。'] },
    { id: 'tocar-la-loteria', es: 'tocar la lotería', zh: '中彩票', pos: 'phr', level: 'B2', tags: ['shop'], ex: ['Si me tocara la lotería, me compraría una casa en la playa.', '要是中了彩票，我就在海边买套房子。'], note: '结构和 gustar 一样：Me ha tocado la lotería。' },
    { id: 'millonario', es: 'millonario', zh: '百万富翁', pos: 'n', g: 'm', f: 'millonaria', level: 'B2', tags: ['shop'], ex: ['Se hizo millonario con una aplicación.', '他靠一款应用成了百万富翁。'] },
    { id: 'fortuna', es: 'fortuna', zh: '财富；运气', pos: 'n', g: 'f', level: 'B2', tags: ['shop'], ex: ['Ganó una fortuna en la bolsa.', '他在股市赚了一大笔钱。'], ety: '拉丁语 Fortuna，罗马的命运女神。' },
    { id: 'herencia', es: 'herencia', zh: '遗产；继承', pos: 'n', g: 'f', level: 'B2', tags: ['family'], ex: ['Recibió una herencia de su tía.', '他从姑姑那里继承了一笔遗产。'] },
    { id: 'heredar', es: 'heredar', zh: '继承', pos: 'v', level: 'B2', tags: ['verb', 'family'], ex: ['He heredado los ojos de mi abuela.', '我遗传了奶奶的眼睛。'] },
    { id: 'invertir', es: 'invertir', zh: '投资；颠倒', pos: 'v', level: 'B2', tags: ['verb', 'shop'], ex: ['Invirtió todos sus ahorros en el negocio.', '他把所有积蓄都投进了生意里。'], note: 'e→ie / i：invierto，invirtió。' },
    { id: 'inversion', es: 'inversión', zh: '投资', pos: 'n', g: 'f', pl: 'inversiones', level: 'B2', tags: ['shop'], ex: ['Estudiar idiomas es una buena inversión.', '学外语是一项很好的投资。'] },
    { id: 'derrochar', es: 'derrochar', zh: '挥霍；浪费', pos: 'v', level: 'B2', tags: ['verb', 'shop'], ex: ['Derrocha el dinero en caprichos.', '他把钱都挥霍在一时兴起的东西上。'] },
    { id: 'lujo', es: 'lujo', zh: '奢侈；豪华', pos: 'n', g: 'm', level: 'B2', tags: ['shop'], ex: ['No me puedo permitir ese lujo.', '我享受不起这种奢侈。'], ety: '拉丁语 luxus「过度」。英语 luxury 同源。' },
    { id: 'lujoso', es: 'lujoso', zh: '豪华的', pos: 'adj', f: 'lujosa', level: 'B2', tags: ['shop'], ex: ['Se alojaron en un hotel lujoso.', '他们住进了一家豪华酒店。'] },
    { id: 'mansion', es: 'mansión', zh: '豪宅', pos: 'n', g: 'f', pl: 'mansiones', level: 'B2', tags: ['home'], ex: ['Vive en una mansión con piscina.', '他住在一栋带游泳池的豪宅里。'] },
    { id: 'isla-desierta', es: 'isla desierta', zh: '荒岛', pos: 'n', g: 'f', level: 'B2', tags: ['travel'], ex: ['¿Qué tres cosas te llevarías a una isla desierta?', '如果去荒岛，你会带哪三样东西？'] },
    { id: 'superpoder', es: 'superpoder', zh: '超能力', pos: 'n', g: 'm', pl: 'superpoderes', level: 'B2', tags: ['hobby'], ex: ['Si tuvieras un superpoder, ¿cuál elegirías?', '如果你能拥有一种超能力，你会选哪个？'] },
    { id: 'invisible', es: 'invisible', zh: '隐形的；看不见的', pos: 'adj', level: 'B2', tags: ['adj'], ex: ['Me gustaría ser invisible un día.', '我想隐身一天。'] },
    { id: 'maquina-del-tiempo', es: 'máquina del tiempo', zh: '时光机', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Si existiera una máquina del tiempo, iría al siglo XVI.', '如果有时光机，我会去十六世纪。'] },
    { id: 'utopia', es: 'utopía', zh: '乌托邦；空想', pos: 'n', g: 'f', level: 'B2', tags: ['func'], ex: ['Un mundo sin guerras no es una utopía.', '没有战争的世界不是空想。'], ety: '托马斯·莫尔 1516 年造的词：希腊语 ou「没有」+ topos「地方」——“不存在的地方”。' },
    { id: 'utopico', es: 'utópico', zh: '空想的；理想化的', pos: 'adj', f: 'utópica', level: 'B2', tags: ['func'], ex: ['Tu plan me parece un poco utópico.', '我觉得你的计划有点理想化。'] },
    { id: 'imaginar', es: 'imaginar', zh: '想象', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Imagina que no existiera internet.', '想象一下如果没有互联网。'] },
    { id: 'fantasear', es: 'fantasear', zh: '幻想', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Fantaseo con vivir en una isla.', '我幻想着住在一座岛上。'] },
    { id: 'sonar-despierto', es: 'soñar despierto', zh: '做白日梦', pos: 'phr', level: 'B2', tags: ['feel'], ex: ['Deja de soñar despierto y ponte a trabajar.', '别做白日梦了，干活吧。'] },
    { id: 'hipotetico', es: 'hipotético', zh: '假设的', pos: 'adj', f: 'hipotética', level: 'B2', tags: ['func'], ex: ['Es una situación hipotética.', '这是一种假设的情况。'] },
    { id: 'inalcanzable', es: 'inalcanzable', zh: '遥不可及的', pos: 'adj', level: 'B2', tags: ['func'], ex: ['Parecía un sueño inalcanzable.', '那看起来是个遥不可及的梦。'] },
    { id: 'ambicion', es: 'ambición', zh: '雄心；野心', pos: 'n', g: 'f', pl: 'ambiciones', level: 'B2', tags: ['feel'], ex: ['Tiene mucha ambición.', '他很有抱负。'], ety: '拉丁语 ambitio：古罗马候选人“四处走动”（ambire）拉选票。' },
    { id: 'aspiracion', es: 'aspiración', zh: '志向；吸入', pos: 'n', g: 'f', pl: 'aspiraciones', level: 'B2', tags: ['feel'], ex: ['Mi aspiración es ser traductora.', '我的志向是当翻译。'] },
    { id: 'aspirar', es: 'aspirar', zh: '渴望；吸入', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Aspira a ganar una medalla.', '他渴望赢得一枚奖牌。'], note: 'aspirar a + 名词 / 原形。' },
    { id: 'anhelar', es: 'anhelar', zh: '渴望', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['Anhelaba volver a su tierra.', '他渴望回到故乡。'] },
    { id: 'anhelo', es: 'anhelo', zh: '渴望', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Su mayor anhelo era ser libre.', '他最大的渴望是自由。'] },
    { id: 'anorar', es: 'añorar', zh: '怀念', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['Añoro la comida de mi madre.', '我怀念妈妈做的饭。'] },
    { id: 'capricho', es: 'capricho', zh: '一时兴起；任性', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Me di un capricho y me compré unas botas.', '我一时兴起，给自己买了双靴子。'] },
    { id: 'caprichoso', es: 'caprichoso', zh: '任性的；反复无常的', pos: 'adj', f: 'caprichosa', level: 'B2', tags: ['feel'], ex: ['Es un niño muy caprichoso.', '这孩子很任性。'] },
    { id: 'renunciar', es: 'renunciar', zh: '放弃；辞去', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Renunció a un buen sueldo para viajar.', '他放弃了高薪去旅行。'], note: 'renunciar a algo。' },
    { id: 'arriesgarse', es: 'arriesgarse', zh: '冒险', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Si no te arriesgas, nunca lo sabrás.', '不冒险，你就永远不会知道。'] },
    { id: 'arriesgado', es: 'arriesgado', zh: '有风险的', pos: 'adj', f: 'arriesgada', level: 'B2', tags: ['func'], ex: ['Es una decisión muy arriesgada.', '这是个很冒险的决定。'] },
    { id: 'atrevido', es: 'atrevido', zh: '大胆的', pos: 'adj', f: 'atrevida', level: 'B2', tags: ['feel'], ex: ['Fue una propuesta muy atrevida.', '这是个很大胆的提议。'] },
    { id: 'prudente', es: 'prudente', zh: '谨慎的', pos: 'adj', level: 'B2', tags: ['feel'], ex: ['Sé prudente con el dinero.', '花钱要谨慎。'] },
    { id: 'imprudente', es: 'imprudente', zh: '轻率的', pos: 'adj', level: 'B2', tags: ['feel'], ex: ['Fue imprudente conducir con tanta niebla.', '雾这么大还开车太轻率了。'] },
    { id: 'locura', es: 'locura', zh: '疯狂；疯狂的事', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['¡Dejar el trabajo ahora es una locura!', '现在辞职简直是疯了！'] },
    { id: 'disparate', es: 'disparate', zh: '荒唐话；荒唐事', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['No digas disparates.', '别胡说八道。'] },
    { id: 'azar', es: 'azar', zh: '偶然；运气', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Nos conocimos por azar.', '我们是偶然认识的。'], ety: '阿拉伯语 az-zahr「骰子」。英语 hazard 同源。' },
    { id: 'sorteo', es: 'sorteo', zh: '抽奖；抽签', pos: 'n', g: 'm', level: 'B2', tags: ['shop'], ex: ['El sorteo es el 22 de diciembre.', '开奖在 12 月 22 日。'] },
    { id: 'decimo', es: 'décimo', zh: '（西班牙彩票的）一张票；第十', pos: 'n', g: 'm', level: 'B2', tags: ['shop'], ex: ['He comprado un décimo con mis compañeros.', '我和同事们合买了一张彩票。'], note: '圣诞彩票一张完整的票（billete）分成十份，每份叫 décimo。' },
    { id: 'donativo', es: 'donativo', zh: '捐款', pos: 'n', g: 'm', level: 'B2', tags: ['people'], ex: ['Hizo un donativo a una ONG.', '他给一个公益组织捐了款。'] },
    { id: 'causa', es: 'causa', zh: '原因；事业', pos: 'n', g: 'f', level: 'B2', tags: ['func'], ex: ['Donó el dinero a una buena causa.', '他把钱捐给了一项公益事业。'] },
    { id: 'dar-la-vuelta-al-mundo', es: 'dar la vuelta al mundo', zh: '环游世界', pos: 'phr', level: 'B2', tags: ['travel'], ex: ['Si pudiera, daría la vuelta al mundo.', '要是可以，我就去环游世界。'] },
    { id: 'ano-sabatico', es: 'año sabático', zh: '间隔年；休假年', pos: 'n', g: 'm', level: 'B2', tags: ['job'], ex: ['Me tomé un año sabático para viajar.', '我休了一年假去旅行。'] },
    { id: 'cambiar-de-vida', es: 'cambiar de vida', zh: '换一种生活', pos: 'phr', level: 'B2', tags: ['feel'], ex: ['A los cuarenta decidió cambiar de vida.', '四十岁时他决定换一种活法。'] },
    { id: 'rutina', es: 'rutina', zh: '日常；例行公事', pos: 'n', g: 'f', level: 'B2', tags: ['time'], ex: ['Estoy harto de la rutina.', '我受够了一成不变的生活。'] },
    { id: 'monotonia', es: 'monotonía', zh: '单调', pos: 'n', g: 'f', level: 'B2', tags: ['time'], ex: ['La monotonía me aburre.', '单调让我觉得无聊。'] },
    { id: 'estresante', es: 'estresante', zh: '让人有压力的', pos: 'adj', level: 'B2', tags: ['feel'], ex: ['Tengo un trabajo muy estresante.', '我的工作压力很大。'] },
    { id: 'calidad-de-vida', es: 'calidad de vida', zh: '生活质量', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['En los pueblos hay más calidad de vida.', '小镇的生活质量更高。'] },
    { id: 'prioridad', es: 'prioridad', zh: '优先事项', pos: 'n', g: 'f', pl: 'prioridades', level: 'B2', tags: ['func'], ex: ['Mi familia es mi prioridad.', '家人是我的第一位。'] },
    { id: 'valor', es: 'valor', zh: '价值；勇气', pos: 'n', g: 'm', pl: 'valores', level: 'B2', tags: ['feel'], ex: ['No tuve valor para decírselo.', '我没有勇气告诉他。'] },
    { id: 'libertad', es: 'libertad', zh: '自由', pos: 'n', g: 'f', pl: 'libertades', level: 'B2', tags: ['feel'], ex: ['Para mí, viajar es libertad.', '对我来说，旅行就是自由。'] },
    { id: 'estabilidad', es: 'estabilidad', zh: '稳定', pos: 'n', g: 'f', level: 'B2', tags: ['job'], ex: ['Busco estabilidad laboral.', '我想要稳定的工作。'] },
    { id: 'aventurero', es: 'aventurero', zh: '爱冒险的；冒险家', pos: 'adj', f: 'aventurera', level: 'B2', tags: ['feel'], ex: ['Tiene un espíritu muy aventurero.', '他很有冒险精神。'] },
    { id: 'conformista', es: 'conformista', zh: '随大流的；安于现状的', pos: 'adj', level: 'B2', tags: ['feel'], ex: ['No seas tan conformista.', '别那么安于现状。'] },
  ],
  sentences: [
    { id: 's1', es: 'Quería que vinieras a mi fiesta.', zh: '我那时想让你来我的派对。', g: ['b2-subj-imperfecto'], distract: ['vengas'] },
    { id: 's2', es: 'Me gustaría que me ayudaras con esto.', zh: '我希望你能帮我弄一下这个。', g: ['b2-subj-imperfecto'], distract: ['ayudas'] },
    { id: 's3', es: 'Mis padres no querían que estudiara Bellas Artes.', zh: '我父母当时不想让我学美术。', g: ['b2-subj-imperfecto'] },
    { id: 's4', es: 'Fue una pena que no pudierais venir.', zh: '你们没能来真遗憾。', g: ['b2-subj-imperfecto'] },
    { id: 's5', es: 'Quisiera hacerle una pregunta.', zh: '我想问您一个问题。', g: ['b2-subj-imperfecto'] },
    { id: 's6', es: 'Si tuviera más tiempo, aprendería a tocar el piano.', zh: '如果我有更多时间，我会学弹钢琴。', g: ['b2-si-irreal'], distract: ['tendría'] },
    { id: 's7', es: 'Si fuera tú, no aceptaría ese trabajo.', zh: '我要是你，就不接受那份工作。', g: ['b2-si-irreal'] },
    { id: 's8', es: '¿Qué harías si te tocara la lotería?', zh: '如果你中了彩票，你会做什么？', g: ['b2-si-irreal'], distract: ['toca'] },
    { id: 's9', es: 'Si viviéramos en el campo, tendríamos un perro.', zh: '如果我们住在乡下，就会养条狗。', g: ['b2-si-irreal'] },
    { id: 's10', es: 'Si supiera la respuesta, te la diría.', zh: '要是我知道答案，就告诉你了。', g: ['b2-si-irreal'] },
    { id: 's11', es: 'Ojalá estuvieras aquí.', zh: '要是你在这儿就好了。', g: ['b2-deseos-irreales'], distract: ['estás'] },
    { id: 's12', es: 'Ojalá fuera viernes.', zh: '要是今天是星期五就好了。', g: ['b2-deseos-irreales'] },
    { id: 's13', es: '¡Quién pudiera!', zh: '真羡慕！（要是我也能就好了！）', g: ['b2-deseos-irreales'] },
    { id: 's14', es: 'Preferiría que no se lo dijeras a nadie.', zh: '我希望你别告诉任何人。', g: ['b2-deseos-irreales'] },
    { id: 's15', es: 'Sería mejor que habláramos mañana.', zh: '我们最好明天再谈。', g: ['b2-deseos-irreales'] },
    { id: 's16', es: 'Si pudiera, daría la vuelta al mundo.', zh: '要是可以，我就去环游世界。', g: ['b2-si-irreal'] },
    { id: 's17', es: 'Me tomé un año sabático para viajar.', zh: '我休了一年假去旅行。' },
    { id: 's18', es: 'Estoy harto de la rutina.', zh: '我受够了一成不变的生活。' },
    { id: 's19', es: 'Renunció a un buen sueldo para cambiar de vida.', zh: '他放弃了高薪，换了一种活法。' },
    { id: 's20', es: 'Si no te arriesgas, nunca lo sabrás.', zh: '不冒险，你就永远不会知道。' },
    { id: 's21', es: 'Si existiera una máquina del tiempo, iría al siglo XVI.', zh: '如果有时光机，我会去十六世纪。', g: ['b2-si-irreal'] },
    { id: 's22', es: '¡Quién tuviera veinte años otra vez!', zh: '要是能重回二十岁就好了！', g: ['b2-deseos-irreales'] },
    { id: 's23', es: 'Me pidió que le llamara al día siguiente.', zh: '他让我第二天给他打电话。', g: ['b2-subj-imperfecto'] },
    { id: 's24', es: 'Nos conocimos por azar.', zh: '我们是偶然认识的。' },
    { id: 's25', es: 'No me puedo permitir ese lujo.', zh: '我享受不起这种奢侈。' },
  ],
  cloze: [
    { id: 'c1', text: 'Mi madre quería que ___ (yo) médico.', answers: ['fuera', 'fuese'], hint: 'ser', zh: '我妈妈曾希望我当医生。', g: ['b2-subj-imperfecto'] },
    { id: 'c2', text: 'Me gustaría que ___ (tú) conmigo al concierto.', answers: ['vinieras', 'vinieses'], hint: 'venir', zh: '我希望你和我一起去音乐会。', g: ['b2-subj-imperfecto'] },
    { id: 'c3', text: 'El profesor nos pidió que ___ el texto en voz alta.', answers: ['leyéramos', 'leyésemos'], hint: 'leer', zh: '老师让我们大声朗读课文。', g: ['b2-subj-imperfecto'] },
    { id: 'c4', text: 'No creía que ___ (ellos) la verdad.', answers: ['dijeran', 'dijesen'], hint: 'decir', zh: '我当时不相信他们说的是实话。', g: ['b2-subj-imperfecto'] },
    { id: 'c5', text: 'Fue increíble que ___ (nosotros) tanto tiempo en la cola.', answers: ['estuviéramos', 'estuviésemos'], hint: 'estar', zh: '我们居然排了那么久的队，真不可思议。', g: ['b2-subj-imperfecto'] },
    { id: 'c6', text: 'Si ___ (yo) dinero, me compraría una casa en la playa.', answers: ['tuviera', 'tuviese'], hint: 'tener', zh: '如果我有钱，就在海边买套房子。', g: ['b2-si-irreal'] },
    { id: 'c7', text: 'Si fuera tú, no ___ ese trabajo.', answers: ['aceptaría'], hint: 'aceptar', zh: '我要是你，就不接受那份工作。', g: ['b2-si-irreal'] },
    { id: 'c8', text: '¿Qué ___ (tú) si pudieras viajar en el tiempo?', answers: ['harías'], hint: 'hacer', zh: '如果能穿越时空，你会做什么？', g: ['b2-si-irreal'] },
    { id: 'c9', text: 'Si ___ (yo) hablar con un animal, elegiría a mi gato.', answers: ['pudiera', 'pudiese'], hint: 'poder', zh: '如果我能和一种动物说话，我会选我的猫。', g: ['b2-si-irreal'] },
    { id: 'c10', text: 'Si mañana ___ sol, iremos a la playa.', answers: ['hace'], options: ['hace', 'hiciera', 'haría'], zh: '如果明天出太阳，我们就去海滩。', g: ['b2-si-irreal'], explain: '有可能发生的条件，用陈述式现在时。' },
    { id: 'c11', text: 'Si no ___ tan tarde, te acompañaría.', answers: ['fuera'], options: ['fuera', 'sería', 'es'], zh: '要是没这么晚，我就陪你去了。', g: ['b2-si-irreal'] },
    { id: 'c12', text: 'Ojalá ___ (yo) más alto.', answers: ['fuera', 'fuese'], hint: 'ser', zh: '要是我再高一点就好了。', g: ['b2-deseos-irreales'] },
    { id: 'c13', text: 'Ojalá ___ (tú) aquí conmigo.', answers: ['estuvieras', 'estuvieses'], hint: 'estar', zh: '要是你在我身边就好了。', g: ['b2-deseos-irreales'] },
    { id: 'c14', text: 'Ojalá mañana ___ buen tiempo: tengo una excursión.', answers: ['haga'], options: ['haga', 'hace', 'hará'], zh: '但愿明天天气好：我要去郊游。', g: ['b2-deseos-irreales'], explain: '有可能实现的愿望，用虚拟式现在时。' },
    { id: 'c15', text: '—Me voy a vivir a Hawái. —¡Quién ___!', answers: ['pudiera'], options: ['pudiera', 'puede', 'podría'], zh: '——我要搬去夏威夷住了。——真羡慕！', g: ['b2-deseos-irreales'] },
    { id: 'c16', text: 'Preferiría que no ___ (tú) a nadie.', answers: ['se lo dijeras', 'se lo dijeses'], options: ['se lo dijeras', 'se lo digas', 'se lo dices'], zh: '我希望你别告诉任何人。', g: ['b2-deseos-irreales'] },
    { id: 'c17', text: 'Sería mejor que ___ (nosotros) un taxi.', answers: ['cogiéramos', 'cogiésemos'], hint: 'coger', zh: '我们最好打个车。', g: ['b2-deseos-irreales'] },
    { id: 'c18', text: '___ un café con leche, por favor.', answers: ['Quisiera'], options: ['Quisiera', 'Quisiese', 'Quiera'], zh: '我想要一杯牛奶咖啡，谢谢。', g: ['b2-subj-imperfecto'] },
    { id: 'c19', text: 'Si me ___ la lotería, dejaría de trabajar.', answers: ['tocara', 'tocase'], hint: 'tocar', zh: '要是中了彩票，我就不上班了。', g: ['b2-si-irreal'] },
  ],
  conj: [
    { verbs: ['hablar', 'comer', 'vivir', 'tener', 'ser', 'hacer', 'decir', 'poder', 'saber', 'estar', 'venir', 'querer'], tenses: ['subjImpf'], g: 'b2-subj-imperfecto' },
    { verbs: ['leer', 'dormir', 'pedir', 'traer', 'conducir', 'oír', 'dar', 'ir'], tenses: ['subjImpf', 'subjImpfSe'], g: 'b2-subj-imperfecto' },
    { verbs: ['tener', 'hacer', 'poder', 'salir', 'decir'], tenses: ['cond'], g: 'b2-si-irreal' },
  ],
  dialogues: [
    {
      id: 'b2-u01-d1',
      title: '如果中了彩票 · Si nos tocara el Gordo',
      lines: [
        { who: 'Elena', es: 'Oye, en la oficina hemos comprado un décimo entre todos. ¿Qué harías tú si nos tocara el Gordo?', zh: '哎，办公室里大家合买了一张彩票。要是我们中了头奖，你会做什么？' },
        { who: 'Wang Lei', es: 'Uf, lo primero, dejaría de trabajar. Bueno, no… si dejara de trabajar, me aburriría muchísimo.', zh: '哇，首先我就不上班了。呃，不对……要是不上班，我会无聊死的。' },
        { who: 'Elena', es: '¡Ja! Yo lo tengo clarísimo: me tomaría un año sabático y daría la vuelta al mundo.', zh: '哈！我早就想好了：休一年假，环游世界。' },
        { who: 'Wang Lei', es: '¡Quién pudiera! Yo, si tuviera mucho dinero, ayudaría a mis padres a comprarse una casa y montaría un pequeño restaurante.', zh: '真羡慕！我要是有很多钱，就帮我爸妈买套房，再开一家小餐馆。' },
        { who: 'Elena', es: '¿Un restaurante? Pero si dices siempre que el estrés te mata…', zh: '餐馆？你不是总说压力大得要命吗……' },
        { who: 'Wang Lei', es: 'Ya, pero sería mío. Y no lo haría por dinero, sino por el placer de cocinar para la gente.', zh: '是啊，但那是我自己的。而且我不是为了赚钱，而是为了给大家做饭的乐趣。' },
        { who: 'Elena', es: 'Pues ojalá nos tocara, aunque solo fuera la pedrea. Por lo menos recuperaríamos el dinero.', zh: '那但愿我们能中，哪怕只是个小奖。至少能把本钱赚回来。' },
        { who: 'Wang Lei', es: 'Bueno, si no nos toca, siempre nos quedará la salud, como dicen aquí.', zh: '好啦，就算没中，至少还有健康嘛，就像这儿的人常说的。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r01',
      level: 'B2',
      title: 'El Gordo: la lotería que paraliza España',
      titleZh: '“大胖子”：让西班牙停下来的彩票',
      topic: '文化',
      paras: [
        [
          ['Cada 22 de diciembre, millones de españoles encienden la televisión o la radio para seguir el sorteo de la Lotería de Navidad, que se celebra ininterrumpidamente desde 1812.', '每年 12 月 22 日，数百万西班牙人打开电视或收音机，收看圣诞彩票的开奖。这项彩票自 1812 年以来从未中断。'],
          ['Los números y los premios los cantan, con una melodía inconfundible, los niños del colegio madrileño de San Ildefonso.', '号码和奖金由马德里圣伊尔德丰索学校的孩子们用一种独一无二的调子唱出来。'],
        ],
        [
          ['Lo curioso es que casi nadie juega solo. Se compran décimos entre compañeros de trabajo, en el bar del barrio o con la familia, de modo que, si toca, toca a muchos a la vez.', '有趣的是，几乎没人一个人买。大家和同事、在街坊的酒吧或和家人合买，所以如果中了，一下子就有很多人中奖。'],
          ['Por eso, el verdadero miedo no es que no te toque, sino que le toque al resto de la oficina y tú no hayas comprado.', '所以，真正让人害怕的不是自己没中，而是整个办公室都中了，偏偏你没买。'],
        ],
        [
          ['Las probabilidades de ganar el primer premio, el famoso Gordo, son de una entre cien mil. Aun así, si preguntas a cualquiera qué haría si le tocara, tendrá la respuesta preparada: «Tapar agujeros», dicen muchos, es decir, pagar la hipoteca y las deudas.', '中头奖——著名的“大胖子”——的概率是十万分之一。即便如此，你随便问一个人中奖了会做什么，他都早就想好了答案。很多人会说：“补窟窿”，也就是还房贷、还债。'],
          ['Y si no toca, siempre queda el consuelo nacional: «Lo importante es la salud».', '如果没中，总还有全国通用的安慰：“健康最重要。”'],
        ],
      ],
      gloss: { paraliza: '使停顿', ininterrumpidamente: '不间断地', melodía: '旋律', inconfundible: '独一无二的', 'a la vez': '同时', resto: '其余的', 'tapar agujeros': '补窟窿（还债）', consuelo: '安慰' },
      questions: [
        { type: 'mc', q: '谁来唱出中奖号码？', options: ['电视主持人', '圣伊尔德丰索学校的孩子们', '国王'], answer: 1 },
        { type: 'mc', q: '文章说人们真正害怕的是什么？', options: ['自己没中奖', '同事们都中了而自己没买', '中奖后要交税'], answer: 1 },
        { type: 'tf', q: '“tapar agujeros” 的意思是用奖金去旅行。', answer: false, explain: 'es decir, pagar la hipoteca y las deudas' },
      ],
    },
    {
      id: 'b2-r02',
      level: 'B2',
      title: 'Si pudiera volver a los veinte',
      titleZh: '如果能回到二十岁',
      topic: '人生',
      paras: [
        [
          ['Mi abuela, que acaba de cumplir ochenta y cinco años, dice que si pudiera volver a los veinte, no cambiaría casi nada. «Bueno, quizá una cosa», añade siempre con una sonrisa.', '我奶奶刚满八十五岁。她说如果能回到二十岁，她几乎什么都不会改变。“嗯，也许有一件事，”她总会笑着补充道。'],
        ],
        [
          ['«Si tuviera otra vez veinte años, me preocuparía mucho menos por lo que piensan los demás. Me pondría la ropa que me diera la gana, viajaría sola y estudiaría una carrera, aunque mis padres no quisieran».', '“如果我能再回到二十岁，我会少在乎别人的想法。我想穿什么就穿什么，一个人去旅行，去上大学，哪怕父母不同意。”'],
          ['En su época, explica, las chicas de su pueblo no iban a la universidad. Sus padres querían que se casara pronto y que se quedara cerca de casa.', '她解释说，在她那个年代，村里的女孩不上大学。父母希望她早点结婚，留在家附近。'],
        ],
        [
          ['«Pero no me quejo», dice. «Si hubiera hecho las cosas de otra manera, no tendría a tu abuelo, ni a tu madre, ni a ti». Y entonces se ríe y me pregunta: «¿Y tú? ¿Qué harías si tuvieras mi edad?».', '“但我不抱怨，”她说，“如果当初换一种活法，我就不会有你爷爷，不会有你妈妈，也不会有你。”然后她笑着问我：“那你呢？要是你到了我这个年纪，你会做什么？”'],
        ],
      ],
      gloss: { 'los demás': '别人', 'me diera la gana': '我想（随我心意）', carrera: '大学专业', época: '时代', 'me quejo': '我抱怨', 'de otra manera': '以另一种方式', edad: '年龄' },
      questions: [
        { type: 'mc', q: '奶奶如果回到二十岁，最想改变什么？', options: ['换一个丈夫', '少在乎别人的看法', '搬到大城市'], answer: 1 },
        { type: 'tf', q: '在奶奶那个年代，村里的女孩通常会上大学。', answer: false, explain: 'las chicas de su pueblo no iban a la universidad' },
        { type: 'mc', q: '为什么奶奶说“我不抱怨”？', options: ['因为她很有钱', '因为那样就不会有现在的家人', '因为她不记得了'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '选一个假设话题写一篇短文：“如果我中了彩票”“如果我能拥有一种超能力”或“如果我能在另一个国家生活一年”。至少用五个 si + 虚拟式过去时 的句子，一次 ojalá + 过去虚拟式，一次 me gustaría que。', words: [120, 200], hints: ['Si me tocara…, lo primero que haría sería…', 'Si pudiera…, …', 'Ojalá fuera / tuviera…', 'Me gustaría que mi familia…'] }],
}
