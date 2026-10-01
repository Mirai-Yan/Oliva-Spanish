import type { Unit } from '../types'

export const u02: Unit = {
  id: 'c1-u02',
  level: 'C1',
  order: 2,
  title: '无论如何',
  titleEs: 'Pase lo que pase',
  icon: '⚓',
  goals: ['用重复结构表达“不管……都……”：digan lo que digan, pase lo que pase', '用 como + 虚拟式、a no ser que、siempre y cuando 等表达特殊条件', '使用独立的虚拟式：Que pase el siguiente. ¡Viva! Que yo sepa…', '谈论承诺、忠诚和合同里的“小字”'],
  grammar: [
    {
      id: 'c1-reduplicativas',
      title: '重复结构：digan lo que digan',
      titleEs: 'Oraciones concesivas reduplicadas',
      level: 'C1',
      summary: '虚拟式 + 关系词（lo que, donde, como, quien, cuando…）+ 同一个动词的虚拟式 = “不管……都……”：Digan lo que digan, lo haré. Vayas donde vayas, te encontraré. 过去：Dijeran lo que dijeran, lo hizo.',
      body: `### 结构
**动词（虚拟式）+ 关系词 + 同一动词（虚拟式）**

| 例句 | 意思 |
|---|---|
| ***Digan lo que digan**, voy a hacerlo.* | 不管别人说什么，我都要做。 |
| ***Pase lo que pase**, estaré contigo.* | 无论发生什么，我都会陪着你。 |
| ***Vayas donde vayas**, te encontraré.* | 不管你去哪儿，我都会找到你。 |
| ***Sea como sea**, hay que terminarlo hoy.* | 不管怎样，今天都得做完。 |
| ***Cueste lo que cueste**, lo conseguiremos.* | 不惜一切代价，我们都会做到。 |
| ***Haga el tiempo que haga**, salimos mañana.* | 不管天气如何，我们明天都出发。 |

### 另一种：动词 + o no
***Quieras o no**, tendrás que ir.*（不管你愿不愿意，都得去。）
*Le **guste o no**, es la verdad.*

### 过去时
主句是过去时，就用虚拟式过去时：
***Dijeran lo que dijeran**, ella siguió adelante.*（不管别人说什么，她都坚持下去。）`,
      examples: [
        ['Digan lo que digan, voy a estudiar Bellas Artes.', '不管别人说什么，我都要学美术。'],
        ['Pase lo que pase, estaré a tu lado.', '无论发生什么，我都会在你身边。'],
        ['Vayas donde vayas, llévate el paraguas.', '不管你去哪儿，都带上伞。'],
        ['Quieras o no, tendrás que hablar con él.', '不管你愿不愿意，都得跟他谈谈。'],
        ['Dijeran lo que dijeran, ella siguió adelante.', '不管别人说什么，她都坚持了下去。'],
      ],
      tables: [{ verbs: ['pasar', 'decir', 'costar'], tense: 'subj' }],
      origin: `这种“重复结构”在语法书里叫 *concesiva reduplicada*（重叠式让步句）。它和英语的 *come what may*（= *venga lo que venga*）、中文的“说什么也……”“走到哪儿都……”异曲同工：用一个“开放的”关系从句表示“所有可能性”。

**pase** 来自 *pasar*，词根是拉丁语 *passus*「一步」——*pase lo que pase* 字面上是“走到哪一步就算哪一步”。`,
      pitfalls: ['❌ *Digan lo que dicen…* ✅ *Digan lo que digan…*：两个动词都用虚拟式。', '❌ *Pase lo que pasa…* ✅ *Pase lo que pase…*', '❌ *Quieres o no, …* ✅ *Quieras o no, …*'],
    },
    {
      id: 'c1-condicionales-especiales',
      title: '特殊的条件：como, a no ser que, siempre y cuando…',
      titleEs: 'Otras estructuras condicionales',
      level: 'C1',
      summary: 'como + 虚拟式（警告、威胁：要是……就……）；a no ser que / a menos que / salvo que + 虚拟式（除非）；siempre y cuando / con tal de que + 虚拟式（只要）；en el supuesto de que + 虚拟式（假如，正式）；de + 原形（Si 的简洁说法）；por si + 陈述式（以防）。',
      body: `### como + 虚拟式：带警告的条件
***Como no vengas**, me enfado.*（你要是不来，我就生气了。）
***Como** **vuelvas** a llegar tarde, te quedas sin postre.*

> 注意：*como* + **陈述式** 放在句首是“因为”：*Como no vienes, me voy.*（既然你不来，我就走了。）

### 除非 / 只要
| 连接词 | 意思 | 例句 |
|---|---|---|
| *a no ser que / a menos que* | 除非 | *Iremos a la playa, **a no ser que llueva**.* |
| *salvo que / excepto que* | 除非（正式） | *El contrato se renovará, **salvo que** alguna de las partes **se oponga**.* |
| *siempre y cuando* | 只要（强调条件） | *Puedes usar el coche **siempre y cuando** lo **devuelvas** limpio.* |
| *en el supuesto de que / en caso de que* | 假如（正式） | ***En el supuesto de que** **surja** algún problema, contacte con nosotros.* |

### de + 原形：条件的简洁写法
***De seguir** así, perderemos el partido.* = *Si seguimos así, …*
***De haberlo sabido**, no habría venido.* = *Si lo hubiera sabido, …*

### por si (acaso)：以防万一（+ 陈述式）
*Llévate el abrigo **por si** hace frío.*（带上外套，以防天冷。）
*Lo apunté **por si acaso** se me olvidaba.*`,
      examples: [
        ['Como no me devuelvas el libro, no te presto nada más.', '你要是不还我书，我就什么都不借你了。'],
        ['Iremos a la playa, a no ser que llueva.', '我们去海边，除非下雨。'],
        ['Puedes usar el coche siempre y cuando lo devuelvas limpio.', '只要你把车干干净净地还回来，就可以用。'],
        ['De seguir así, perderemos el partido.', '再这样下去，我们会输掉比赛。'],
        ['Llévate el abrigo por si hace frío.', '带上外套，以防天冷。'],
      ],
      origin: `**salvo** 来自拉丁语 *salvus*「安全的、完好的」：*todos salvo uno* 字面上是“除了那一个被‘保全’下来不算”。**excepto** 来自 *exceptus*「被拿出来的」。

**siempre y cuando** 是“总是而且当……时”两个词叠在一起，强调“只有满足这个条件才行”，比 *siempre que* 更严格。`,
      pitfalls: ['❌ *Como no vienes, me enfado.*（想表达警告）✅ *Como no vengas, me enfado.*', '❌ *A no ser que llueve…* ✅ *A no ser que llueva…*', '❌ *Siempre y cuando que…* ✅ *Siempre y cuando…*', '❌ *Por si acaso llueva.*（规范用法）✅ *Por si acaso llueve.*'],
    },
    {
      id: 'c1-subjuntivo-independiente',
      title: '独立使用的虚拟式',
      titleEs: 'El subjuntivo en oraciones independientes',
      level: 'C1',
      summary: 'Que + 虚拟式：转达命令或表达愿望（Que pase el siguiente. ¡Que te calles!）。固定说法：¡Viva!, Sea., Que yo sepa / Que yo recuerde（据我所知），que digamos（委婉否定：No es muy simpático que digamos）。',
      body: `### Que + 虚拟式
| 用法 | 例句 |
|---|---|
| 间接命令（第三人称） | *¡**Que pase** el siguiente!*（下一位请进！） |
| 不耐烦的命令 | *¡**Que te calles**!*（我叫你闭嘴！） |
| 祝愿（复习） | *¡**Que** te **vaya** bien!* |
| 让别人去做 | *—Juan quiere hablar contigo. —**Que me llame** luego.* |

### 固定表达
| 表达 | 意思 | 例句 |
|---|---|---|
| ***¡Viva…!*** | ……万岁！ | *¡**Vivan** los novios!* |
| ***que yo sepa*** | 据我所知 | *No ha llamado nadie, **que yo sepa**.* |
| ***que yo recuerde*** | 我记得的话 | ***Que yo recuerde**, nunca ha venido.* |
| ***que digamos*** | 委婉否定（并不怎么……） | *No es muy puntual **que digamos**.*（他可不怎么守时。） |
| ***sea*** | 好吧，就这样 | *—¿Lo dejamos para mañana? —**Sea**.* |
| ***digamos*** | 比如说；可以说 | *Llegó, **digamos**, un poco tarde.* |
| ***¡Dios te oiga!*** | 但愿如此！ | *—Seguro que apruebas. —¡**Dios te oiga**!* |`,
      examples: [
        ['¡Que pase el siguiente, por favor!', '下一位请进！'],
        ['—Juan quiere hablar contigo. —Que me llame luego.', '——胡安想跟你谈谈。——让他待会儿给我打电话。'],
        ['No ha llamado nadie, que yo sepa.', '据我所知，没有人打过电话。'],
        ['No es muy puntual que digamos.', '他可不怎么守时。'],
        ['¡Vivan los novios!', '新郎新娘万岁！'],
      ],
      origin: `这些独立的虚拟式其实都是“省略句”：*¡Que pase!* = *(Digo / Quiero) que pase*。省掉的主句，留下的虚拟式依然在表达“意愿”。

**¡Viva!** 就是 *vivir* 的虚拟式：*¡Viva el rey!* =「愿国王长寿！」——和中文的“万岁”思路完全一样。复数要说 *¡Vivan!*。`,
      pitfalls: ['❌ *¡Viva los novios!* ✅ *¡Vivan los novios!*：动词和后面的复数一致。', '❌ *Que yo sé, no ha venido.* ✅ *Que yo sepa, no ha venido.*', '❌ *¡Que te callas!* ✅ *¡Que te calles!*'],
    },
  ],
  words: [
    { id: 'lealtad', es: 'lealtad', zh: '忠诚', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Su lealtad al equipo es admirable.', '他对球队的忠诚令人钦佩。'] },
    { id: 'fidelidad', es: 'fidelidad', zh: '忠实；保真度', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['La fidelidad de los clientes es clave.', '客户的忠诚度是关键。'] },
    { id: 'promesa', es: 'promesa', zh: '承诺；新星', pos: 'n', g: 'f', level: 'C1', tags: ['people'], ex: ['Cumplió su promesa.', '他兑现了承诺。'], note: 'una joven promesa del tenis = 网球界的一颗新星。' },
    { id: 'juramento', es: 'juramento', zh: '誓言', pos: 'n', g: 'm', level: 'C1', tags: ['people'], ex: ['Hizo un juramento solemne.', '他庄严宣誓。'] },
    { id: 'jurar', es: 'jurar', zh: '发誓', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Te juro que no lo sabía.', '我发誓我不知道。'] },
    { id: 'incondicional', es: 'incondicional', zh: '无条件的；死忠的', pos: 'adj', level: 'C1', tags: ['feel'], ex: ['Es un seguidor incondicional del Betis.', '他是贝蒂斯队的死忠球迷。'] },
    { id: 'inquebrantable', es: 'inquebrantable', zh: '坚定不移的', pos: 'adj', level: 'C1', tags: ['feel'], ex: ['Tiene una fe inquebrantable.', '他有着坚定不移的信念。'] },
    { id: 'firmeza', es: 'firmeza', zh: '坚定', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Respondió con firmeza.', '他坚定地回答。'] },
    { id: 'terquedad', es: 'terquedad', zh: '固执', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Su terquedad le trajo problemas.', '他的固执给他带来了麻烦。'] },
    { id: 'obstinado', es: 'obstinado', zh: '执拗的', pos: 'adj', f: 'obstinada', level: 'C1', tags: ['feel'], ex: ['Es tan obstinado que nunca cambia de opinión.', '他执拗得从不改变主意。'] },
    { id: 'claudicar', es: 'claudicar', zh: '屈服；放弃原则', pos: 'v', level: 'C1', tags: ['verb'], ex: ['No pienso claudicar.', '我不打算屈服。'], ety: '拉丁语 claudicare「跛行」：原指走路一瘸一拐，后指“立场站不稳”。' },
    { id: 'transigir', es: 'transigir', zh: '妥协；让步', pos: 'v', level: 'C1', tags: ['verb'], ex: ['No transijo con la mentira.', '我对谎言绝不妥协。'], note: 'g→j：transijo。' },
    { id: 'intransigente', es: 'intransigente', zh: '不妥协的', pos: 'adj', level: 'C1', tags: ['feel'], ex: ['Se mostró intransigente en la negociación.', '他在谈判中寸步不让。'] },
    { id: 'flexible', es: 'flexible', zh: '灵活的', pos: 'adj', level: 'C1', tags: ['feel'], ex: ['Hay que ser flexible.', '要灵活一点。'] },
    { id: 'voluble', es: 'voluble', zh: '反复无常的', pos: 'adj', level: 'C1', tags: ['feel'], ex: ['Tiene un carácter muy voluble.', '他性格反复无常。'] },
    { id: 'incertidumbre', es: 'incertidumbre', zh: '不确定性', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Vivimos tiempos de incertidumbre.', '我们生活在充满不确定性的时代。'] },
    { id: 'imprevisible', es: 'imprevisible', zh: '不可预测的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['El resultado es imprevisible.', '结果无法预测。'] },
    { id: 'apuesta', es: 'apuesta', zh: '赌注；押宝', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Fue una apuesta arriesgada.', '这是一次冒险的押注。'] },
    { id: 'apostar-por', es: 'apostar por', zh: '押宝于；大力支持', pos: 'phr', level: 'C1', tags: ['func'], ex: ['La empresa apuesta por las energías renovables.', '公司大力押注可再生能源。'] },
    { id: 'jugarse', es: 'jugarse', zh: '冒（险）；赌上', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Se jugó la vida para salvarlos.', '他冒着生命危险救了他们。'] },
    { id: 'arriesgar', es: 'arriesgar', zh: '冒……的风险', pos: 'v', level: 'C1', tags: ['verb'], ex: ['No quiero arriesgar mis ahorros.', '我不想拿积蓄冒险。'] },
    { id: 'ultimatum', es: 'ultimátum', zh: '最后通牒', pos: 'n', g: 'm', pl: 'ultimátums', level: 'C1', tags: ['func'], ex: ['Le dio un ultimátum.', '他给了对方最后通牒。'] },
    { id: 'chantaje', es: 'chantaje', zh: '勒索；要挟', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['Eso es un chantaje emocional.', '这是情感勒索。'], ety: '来自法语 chantage，源于 chanter「唱」：让人“唱”出秘密。' },
    { id: 'condicion', es: 'condición', zh: '条件；状况', pos: 'n', g: 'f', pl: 'condiciones', level: 'C1', tags: ['func'], ex: ['Acepto con una condición.', '我接受，但有一个条件。'] },
    { id: 'condicionar', es: 'condicionar', zh: '制约；以……为条件', pos: 'v', level: 'C1', tags: ['verb'], ex: ['El clima condiciona la economía de la zona.', '气候制约着该地区的经济。'] },
    { id: 'excepcion', es: 'excepción', zh: '例外', pos: 'n', g: 'f', pl: 'excepciones', level: 'C1', tags: ['func'], ex: ['No hay regla sin excepción.', '凡事都有例外。'] },
    { id: 'salvo', es: 'salvo', zh: '除了；安全的', pos: 'prep', level: 'C1', tags: ['func'], ex: ['Vinieron todos salvo Pedro.', '除了佩德罗大家都来了。'], note: 'sano y salvo = 安然无恙。' },
    { id: 'excepto', es: 'excepto', zh: '除了', pos: 'prep', level: 'C1', tags: ['func'], ex: ['Abrimos todos los días excepto el lunes.', '除周一外每天营业。'] },
    { id: 'a-no-ser-que', es: 'a no ser que', zh: '除非', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Iré, a no ser que me llames.', '除非你给我打电话，否则我就去。'] },
    { id: 'a-menos-que', es: 'a menos que', zh: '除非', pos: 'phr', level: 'C1', tags: ['func'], ex: ['No lo sabrán a menos que se lo digas.', '除非你告诉他们，否则他们不会知道。'] },
    { id: 'siempre-y-cuando', es: 'siempre y cuando', zh: '只要（条件）', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Puedes salir siempre y cuando vuelvas antes de las doce.', '只要十二点前回来，你就可以出去。'] },
    { id: 'por-si-acaso', es: 'por si acaso', zh: '以防万一', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Llévate dinero por si acaso.', '带点钱以防万一。'] },
    { id: 'en-el-supuesto-de-que', es: 'en el supuesto de que', zh: '假如（正式）', pos: 'phr', level: 'C1', tags: ['func'], ex: ['En el supuesto de que no pueda asistir, avísenos.', '如您无法出席，请告知我们。'] },
    { id: 'pase-lo-que-pase', es: 'pase lo que pase', zh: '无论发生什么', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Pase lo que pase, no te rindas.', '无论发生什么，都别放弃。'] },
    { id: 'cueste-lo-que-cueste', es: 'cueste lo que cueste', zh: '不惜一切代价', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Lo conseguiré cueste lo que cueste.', '我不惜一切代价也要做到。'] },
    { id: 'sea-como-sea', es: 'sea como sea', zh: '不管怎样', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Sea como sea, hay que decidir hoy.', '不管怎样，今天必须做决定。'] },
    { id: 'quieras-o-no', es: 'quieras o no', zh: '不管你愿不愿意', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Quieras o no, es tu responsabilidad.', '不管你愿不愿意，这都是你的责任。'] },
    { id: 'que-yo-sepa', es: 'que yo sepa', zh: '据我所知', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Que yo sepa, la reunión sigue en pie.', '据我所知，会议照常进行。'] },
    { id: 'que-digamos', es: 'que digamos', zh: '（委婉否定）并不怎么', pos: 'phr', level: 'C1', tags: ['func'], ex: ['No es muy generoso que digamos.', '他可不怎么大方。'] },
    { id: 'viva', es: '¡viva!', zh: '万岁！', pos: 'interj', level: 'C1', tags: ['greet'], ex: ['¡Viva la fiesta!', '派对万岁！'] },
    { id: 'desafiar', es: 'desafiar', zh: '挑战；违抗', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Desafió a las autoridades.', '他公然违抗当局。'], note: '重音：desafío。' },
    { id: 'encarar', es: 'encarar', zh: '面对；正视', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Hay que encarar los problemas.', '要正视问题。'] },
    { id: 'contra-viento-y-marea', es: 'contra viento y marea', zh: '排除万难', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Siguió con su proyecto contra viento y marea.', '他排除万难坚持自己的项目。'] },
    { id: 'a-toda-costa', es: 'a toda costa', zh: '不惜代价', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Quiere ganar a toda costa.', '他不惜代价要赢。'] },
    { id: 'de-una-vez-por-todas', es: 'de una vez por todas', zh: '一劳永逸地；彻底地', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Decídete de una vez por todas.', '你就痛痛快快地做个决定吧。'] },
    { id: 'tarde-o-temprano', es: 'tarde o temprano', zh: '迟早', pos: 'phr', level: 'C1', tags: ['time'], ex: ['Tarde o temprano se sabrá la verdad.', '真相迟早会大白。'] },
    { id: 'hincha', es: 'hincha', zh: '（球队的）狂热球迷', pos: 'n', g: 'mf', level: 'C1', tags: ['hobby'], ex: ['Los hinchas cantaron durante todo el partido.', '球迷们整场比赛都在唱歌。'] },
    { id: 'persuadir', es: 'persuadir', zh: '说服', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Intenté persuadirla, pero fue inútil.', '我试着说服她，但没用。'] },
    { id: 'disuadir', es: 'disuadir', zh: '劝阻', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Nadie pudo disuadirle de su idea.', '没人能劝他打消念头。'] },
    { id: 'reconsiderar', es: 'reconsiderar', zh: '重新考虑', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Le pido que reconsidere su decisión.', '请您重新考虑您的决定。'] },
    { id: 'letra-pequena', es: 'letra pequeña', zh: '（合同里的）小字条款', pos: 'n', g: 'f', level: 'C1', tags: ['shop'], ex: ['Lee siempre la letra pequeña.', '一定要看清合同里的小字。'] },
    { id: 'clausula', es: 'cláusula', zh: '条款', pos: 'n', g: 'f', level: 'C1', tags: ['shop'], ex: ['Hay una cláusula de permanencia de un año.', '合同里有一年的最低使用期条款。'] },
  ],
  sentences: [
    { id: 's1', es: 'Digan lo que digan, voy a estudiar Bellas Artes.', zh: '不管别人说什么，我都要学美术。', g: ['c1-reduplicativas'], distract: ['dicen'] },
    { id: 's2', es: 'Pase lo que pase, estaré a tu lado.', zh: '无论发生什么，我都会在你身边。', g: ['c1-reduplicativas'], distract: ['pasa'] },
    { id: 's3', es: 'Vayas donde vayas, llévate el paraguas.', zh: '不管你去哪儿，都带上伞。', g: ['c1-reduplicativas'] },
    { id: 's4', es: 'Quieras o no, tendrás que hablar con él.', zh: '不管你愿不愿意，都得跟他谈谈。', g: ['c1-reduplicativas'] },
    { id: 's5', es: 'Dijeran lo que dijeran, ella siguió adelante.', zh: '不管别人说什么，她都坚持了下去。', g: ['c1-reduplicativas'] },
    { id: 's6', es: 'Como no me devuelvas el libro, no te presto nada más.', zh: '你要是不还我书，我就什么都不借你了。', g: ['c1-condicionales-especiales'], distract: ['devuelves'] },
    { id: 's7', es: 'Iremos a la playa, a no ser que llueva.', zh: '我们去海边，除非下雨。', g: ['c1-condicionales-especiales'] },
    { id: 's8', es: 'Puedes usar el coche siempre y cuando lo devuelvas limpio.', zh: '只要你把车干干净净地还回来，就可以用。', g: ['c1-condicionales-especiales'] },
    { id: 's9', es: 'De seguir así, perderemos el partido.', zh: '再这样下去，我们会输掉比赛。', g: ['c1-condicionales-especiales'] },
    { id: 's10', es: 'Llévate el abrigo por si hace frío.', zh: '带上外套，以防天冷。', g: ['c1-condicionales-especiales'] },
    { id: 's11', es: '¡Que pase el siguiente, por favor!', zh: '下一位请进！', g: ['c1-subjuntivo-independiente'] },
    { id: 's12', es: 'No ha llamado nadie, que yo sepa.', zh: '据我所知，没有人打过电话。', g: ['c1-subjuntivo-independiente'], distract: ['sé'] },
    { id: 's13', es: 'No es muy puntual que digamos.', zh: '他可不怎么守时。', g: ['c1-subjuntivo-independiente'] },
    { id: 's14', es: '¡Vivan los novios!', zh: '新郎新娘万岁！', g: ['c1-subjuntivo-independiente'], distract: ['Viva'] },
    { id: 's15', es: 'Lee siempre la letra pequeña.', zh: '一定要看清合同里的小字。' },
    { id: 's16', es: 'Tarde o temprano se sabrá la verdad.', zh: '真相迟早会大白。' },
    { id: 's17', es: 'Siguió con su proyecto contra viento y marea.', zh: '他排除万难坚持自己的项目。' },
    { id: 's18', es: 'Cumplió su promesa.', zh: '他兑现了承诺。' },
    { id: 's19', es: 'Cueste lo que cueste, lo conseguiremos.', zh: '不惜一切代价，我们都会做到。', g: ['c1-reduplicativas'] },
    { id: 's20', es: 'En el supuesto de que surja algún problema, contacte con nosotros.', zh: '如遇任何问题，请与我们联系。', g: ['c1-condicionales-especiales'] },
    { id: 's21', es: '—Juan quiere hablar contigo. —Que me llame luego.', zh: '——胡安想跟你谈谈。——让他待会儿给我打电话。', g: ['c1-subjuntivo-independiente'] },
    { id: 's22', es: 'No hay regla sin excepción.', zh: '凡事都有例外。' },
    { id: 's23', es: 'Te juro que no lo sabía.', zh: '我发誓我不知道。' },
    { id: 's24', es: 'Vinieron todos salvo Pedro.', zh: '除了佩德罗大家都来了。' },
    { id: 's25', es: 'Como vuelvas a llegar tarde, te quedas sin postre.', zh: '你要是再迟到，就别想吃甜点了。', g: ['c1-condicionales-especiales'] },
  ],
  cloze: [
    { id: 'c1', text: '___ lo que digan, no voy a cambiar de opinión.', answers: ['Digan'], hint: 'decir', zh: '不管他们说什么，我都不会改变主意。', g: ['c1-reduplicativas'] },
    { id: 'c2', text: 'Pase lo que ___, te esperaré.', answers: ['pase'], hint: 'pasar', zh: '无论发生什么，我都会等你。', g: ['c1-reduplicativas'] },
    { id: 'c3', text: 'Hagas lo que ___, hazlo bien.', answers: ['hagas'], hint: 'hacer', zh: '不管你做什么，都要做好。', g: ['c1-reduplicativas'] },
    { id: 'c4', text: 'Sea ___ sea, mañana lo terminamos.', answers: ['como'], options: ['como', 'que', 'cual'], zh: '不管怎样，我们明天把它做完。', g: ['c1-reduplicativas'] },
    { id: 'c5', text: '___ o no, tienes que ir al médico.', answers: ['Quieras'], hint: 'querer', zh: '不管你愿不愿意，都得去看医生。', g: ['c1-reduplicativas'] },
    { id: 'c6', text: 'Hiciera el tiempo que ___, salía a correr cada mañana.', answers: ['hiciera', 'hiciese'], hint: 'hacer', zh: '不管天气如何，他每天早上都出去跑步。', g: ['c1-reduplicativas'] },
    { id: 'c7', text: 'Como no ___ (tú) los deberes, no ves la tele.', answers: ['hagas'], hint: 'hacer', zh: '你要是不做作业，就别看电视。', g: ['c1-condicionales-especiales'] },
    { id: 'c8', text: 'Como no ___ (tú), me voy sin ti.', answers: ['vienes'], options: ['vienes', 'vengas', 'vinieras'], zh: '既然你不来，那我就自己走了。', g: ['c1-condicionales-especiales'], explain: '句首的 como + 陈述式 = “既然”。' },
    { id: 'c9', text: 'Saldremos a las ocho, a no ser que ___ (llover).', answers: ['llueva'], hint: 'llover', zh: '我们八点出发，除非下雨。', g: ['c1-condicionales-especiales'] },
    { id: 'c10', text: 'Te lo presto siempre y ___ me lo devuelvas.', answers: ['cuando'], options: ['cuando', 'que', 'si'], zh: '只要你还我，我就借给你。', g: ['c1-condicionales-especiales'] },
    { id: 'c11', text: '___ seguir así, nos quedaremos sin dinero.', answers: ['De'], options: ['De', 'Si', 'Por'], zh: '再这样下去，我们的钱就要花光了。', g: ['c1-condicionales-especiales'] },
    { id: 'c12', text: 'Coge el paraguas por si ___.', answers: ['llueve'], options: ['llueve', 'llueva', 'lloverá'], zh: '带上伞，以防下雨。', g: ['c1-condicionales-especiales'] },
    { id: 'c13', text: 'No se lo diremos a menos que nos lo ___.', answers: ['pregunte'], hint: 'preguntar', zh: '除非他问，否则我们不会告诉他。', g: ['c1-condicionales-especiales'] },
    { id: 'c14', text: '—Tu jefe ha llamado. —Que ___ más tarde.', answers: ['llame'], hint: 'llamar', zh: '——你老板来电话了。——让他晚点再打。', g: ['c1-subjuntivo-independiente'] },
    { id: 'c15', text: 'Que yo ___, el examen es el viernes.', answers: ['sepa'], hint: 'saber', zh: '据我所知，考试在星期五。', g: ['c1-subjuntivo-independiente'] },
    { id: 'c16', text: 'No es muy ordenado que ___.', answers: ['digamos'], options: ['digamos', 'decimos', 'diremos'], zh: '他可不怎么爱整洁。', g: ['c1-subjuntivo-independiente'] },
    { id: 'c17', text: '¡___ los novios!', answers: ['Vivan'], options: ['Vivan', 'Viva', 'Viven'], zh: '新郎新娘万岁！', g: ['c1-subjuntivo-independiente'] },
    { id: 'c18', text: 'Siempre lee la letra ___ antes de firmar.', answers: ['pequeña'], options: ['pequeña', 'menuda', 'corta'], zh: '签字前他总会看清小字条款。' },
  ],
  conj: [
    { verbs: ['pasar', 'decir', 'costar', 'hacer', 'querer', 'ir', 'ser'], tenses: ['subj', 'subjImpf'], g: 'c1-reduplicativas' },
    { verbs: ['transigir', 'desafiar', 'persuadir', 'jurar'], tenses: ['pres', 'subj'], g: 'c1-condicionales-especiales' },
  ],
  dialogues: [
    {
      id: 'c1-u02-d1',
      title: '签合同之前 · Antes de firmar',
      lines: [
        { who: 'Comercial', es: 'Bueno, pues si le parece bien, firmamos y mañana mismo le instalamos la fibra.', zh: '好，如果您觉得没问题，我们就签合同，明天就给您装光纤。' },
        { who: 'Lucía', es: 'Un momento. Antes quiero leer la letra pequeña. Que yo sepa, la oferta era de veinte euros al mes.', zh: '等一下。我想先看看小字条款。据我所知，优惠价是每月二十欧。' },
        { who: 'Comercial', es: 'Sí, siempre y cuando contrate también el paquete de televisión. Si no, son treinta y cinco.', zh: '是的，前提是您同时开通电视套餐。否则是三十五欧。' },
        { who: 'Lucía', es: 'Ya veo. ¿Y esta cláusula de permanencia? ¿Qué pasa si me cambio de compañía?', zh: '我明白了。那这个最低使用期条款呢？如果我换运营商会怎样？' },
        { who: 'Comercial', es: 'En el supuesto de que se dé de baja antes de un año, tendría que pagar una penalización, salvo que se mude a una zona sin cobertura.', zh: '如果您在一年内退订，需要支付违约金，除非您搬到没有覆盖的地区。' },
        { who: 'Lucía', es: 'Pues no me convence mucho que digamos. Como me suban el precio dentro de seis meses, me voy, pase lo que pase.', zh: '我可不怎么满意。要是六个月后你们给我涨价，不管怎样我都要走。' },
        { who: 'Comercial', es: 'Le garantizo el precio durante todo el contrato. Lo pone aquí, en la cláusula cuarta.', zh: '我保证整个合同期内价格不变。这里写着呢，第四条。' },
        { who: 'Lucía', es: 'Vale. Déjeme la copia y lo consulto con la almohada. Si me convence, le llamo mañana.', zh: '好的。把复印件留给我，我睡一觉再决定。如果觉得可以，明天给您打电话。' },
      ],
    },
  ],
  readings: [
    {
      id: 'c1-r03',
      level: 'C1',
      title: 'Ganen o pierdan',
      titleZh: '输赢都爱',
      topic: '体育与身份',
      paras: [
        [
          ['En España, cambiar de pareja, de trabajo o incluso de ideas políticas se considera normal. Cambiar de equipo de fútbol, en cambio, es casi una traición. «Uno puede cambiar de todo menos de equipo», dice un viejo refrán de los aficionados.', '在西班牙，换伴侣、换工作，甚至换政治立场都被认为很正常。可换支持的足球队，几乎等于背叛。球迷之间有句老话：“什么都能换，就是球队不能换。”'],
        ],
        [
          ['Para muchos hinchas, la lealtad al club es incondicional: ganen o pierdan, suban o bajen de categoría, ellos estarán en el estadio. Hay familias en las que el carné de socio se hereda de padres a hijos, como un apellido.', '对很多球迷来说，对俱乐部的忠诚是无条件的：输也好赢也罢，升级也好降级也罢，他们都会出现在球场。有的家庭里，会员卡像姓氏一样父传子、子传孙。'],
          ['Los sociólogos explican que el fútbol ofrece algo que escasea en la sociedad moderna: un sentimiento de pertenencia que no depende del éxito. «Quien no lo haya vivido difícilmente lo entenderá», resume un socio con cincuenta años de antigüedad.', '社会学家解释说，足球提供了现代社会中稀缺的东西：一种不取决于成败的归属感。一位有五十年会龄的会员总结道：“没亲身经历过的人，很难理解。”'],
        ],
        [
          ['Esa fidelidad, sin embargo, tiene un límite. Cuando los clubes suben el precio de las entradas sin escuchar a su afición, las protestas no se hacen esperar. Al fin y al cabo, los jugadores y los directivos pasan; la afición, pase lo que pase, se queda.', '然而，这种忠诚也有限度。当俱乐部不听球迷意见就提高票价时，抗议很快就来了。说到底，球员和管理层来来去去，而球迷，无论发生什么，都会留下来。'],
        ],
      ],
      gloss: { traición: '背叛', categoría: '级别', 'carné de socio': '会员卡', escasea: '稀缺', pertenencia: '归属', antigüedad: '资历', directivos: '管理层', 'no se hacen esperar': '马上就来' },
      questions: [
        { type: 'mc', q: '在西班牙球迷看来，什么几乎等于背叛？', options: ['换工作', '换支持的球队', '换城市'], answer: 1 },
        { type: 'mc', q: '社会学家认为足球提供了什么？', options: ['赚钱的机会', '不取决于成败的归属感', '运动健身'], answer: 1 },
        { type: 'tf', q: '文章认为球迷的忠诚没有任何限度。', answer: false, explain: 'Esa fidelidad, sin embargo, tiene un límite.' },
      ],
    },
    {
      id: 'c1-r04',
      level: 'C1',
      title: 'La letra pequeña',
      titleZh: '合同里的小字',
      topic: '消费',
      paras: [
        [
          ['«Gimnasio a diez euros al mes». El anuncio parecía irresistible, y Andrés firmó sin pensarlo dos veces. Tres meses después, cuando quiso darse de baja, descubrió que el contrato tenía una permanencia mínima de un año, a no ser que presentara un certificado médico.', '“健身房每月只要十欧。”这则广告看起来无法抗拒，安德烈斯想都没想就签了。三个月后，他想退会时才发现，合同规定最低使用期为一年，除非他能出示医生证明。'],
        ],
        [
          ['No es un caso aislado. Muchas empresas ofrecen precios muy atractivos «siempre y cuando» el cliente acepte condiciones que aparecen en cláusulas difíciles de leer. Expresiones como «salvo que», «en el supuesto de que» o «sin perjuicio de» esconden a menudo las verdaderas obligaciones.', '这不是个别现象。很多公司提供非常诱人的价格，“前提是”客户接受那些写在难以阅读的条款里的条件。“除非”“如果”“在不影响……的情况下”这类说法，往往掩盖了真正的义务。'],
          ['Las asociaciones de consumidores insisten en que, por mucha prisa que se tenga, conviene leer el contrato entero y preguntar por todo lo que no se entienda.', '消费者协会坚持认为，不管多着急，都应该把合同从头读到尾，不明白的地方一定要问。'],
        ],
        [
          ['La ley obliga a que las condiciones sean claras y comprensibles. De no serlo, el cliente puede reclamar. Sea como sea, el mejor consejo sigue siendo el más antiguo: no firmes nada que no hayas leído.', '法律规定条款必须清晰易懂。如果不是这样，客户可以投诉。不管怎样，最好的建议依然是最古老的那一条：没读过的东西，什么都别签。'],
        ],
      ],
      gloss: { irresistible: '无法抗拒的', 'darse de baja': '退订', permanencia: '最低使用期', aislado: '孤立的', atractivos: '诱人的', 'sin perjuicio de': '在不影响……的情况下', esconden: '隐藏', comprensibles: '易懂的' },
      questions: [
        { type: 'mc', q: '安德烈斯在什么情况下可以提前退会？', options: ['付违约金', '出示医生证明', '搬家'], answer: 1 },
        { type: 'mc', q: '消费者协会建议怎么做？', options: ['只看价格', '读完整个合同，不懂就问', '只签一个月'], answer: 1 },
        { type: 'tf', q: '法律要求合同条款清晰易懂。', answer: true, explain: 'La ley obliga a que las condiciones sean claras y comprensibles.' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一段“我的原则”：说说无论如何你都会坚持的三件事（用 pase lo que pase / digan lo que digan 等重复结构），以及你在什么条件下愿意让步（siempre y cuando / a no ser que / salvo que）。', words: [150, 220], hints: ['Pase lo que pase, siempre…', 'Digan lo que digan, …', 'Estoy dispuesto/a a ceder siempre y cuando…', 'No cambiaré de opinión, a no ser que…'] }],
}
