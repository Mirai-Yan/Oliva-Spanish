import type { Unit } from '../types'

export const u01: Unit = {
  id: 'b1-u01',
  level: 'B1',
  order: 1,
  title: '祝愿与希望',
  titleEs: 'Deseos y esperanzas',
  icon: '🌠',
  goals: ['掌握虚拟式现在时的变位', '用 ojalá 和 ¡Que…! 表达祝愿', '区分 querer + 原形 和 querer que + 虚拟式', '在生日、婚礼、告别等场合说得体的祝福'],
  grammar: [
    {
      id: 'b1-subj',
      title: '虚拟式现在时的构成',
      titleEs: 'El presente de subjuntivo',
      level: 'B1',
      summary: '以现在时 yo 形式为基础，去掉 -o，元音“对调”：-ar 动词换成 e，-er / -ir 动词换成 a。六个完全不规则：sea, esté, vaya, haya, sepa, dé。',
      body: `### 什么是虚拟式？
到目前为止你学的都是 **陈述式**（indicativo）：陈述事实。**虚拟式**（subjuntivo）用来表达 **愿望、要求、情感、怀疑** 等“不是在陈述事实”的内容，大多出现在 *que* 后面的从句里。

### 构成三步
1. 取现在时 **yo** 的形式：*hablo, como, vivo, tengo*
2. 去掉 **-o**：*habl-, com-, viv-, teng-*
3. 加上“对调”的词尾：**-ar → e**，**-er / -ir → a**

| 人称 | hablar | comer | vivir |
|---|---|---|---|
| yo | habl**e** | com**a** | viv**a** |
| tú | habl**es** | com**as** | viv**as** |
| él / ella / usted | habl**e** | com**a** | viv**a** |
| nosotros | habl**emos** | com**amos** | viv**amos** |
| vosotros | habl**éis** | com**áis** | viv**áis** |
| ellos / ustedes | habl**en** | com**an** | viv**an** |

### yo 形式不规则的动词，整个虚拟式都“继承”它
*tengo → **tenga***，*hago → **haga***，*digo → **diga***，*salgo → **salga***，*pongo → **ponga***，*vengo → **venga***，*conozco → **conozca***，*oigo → **oiga***，*traigo → **traiga***

### 词根变化动词
- **-ar / -er**：和现在时一样是“靴子型”（nosotros / vosotros 不变）：*piense, pienses, piense, **pensemos, penséis**, piensen*
- **-ir**：nosotros / vosotros 也要变（e→i，o→u）：*sienta → **sintamos***，*duerma → **durmamos***，*pida → **pidamos***

### 六个完全不规则（首字母口诀：D-I-S-H-E-S）
| **D**ar | **I**r | **S**er | **H**aber | **E**star | **S**aber |
|---|---|---|---|---|---|
| dé | vaya | sea | haya | esté | sepa |

### 拼写变化（为了保持读音）
*buscar → **busque***，*llegar → **llegue***，*empezar → **empiece***，*coger → **coja***`,
      examples: [
        ['Ojalá tengas suerte.', '祝你好运。'],
        ['Quiero que vengas a mi fiesta.', '我想让你来我的派对。'],
        ['Espero que estés bien.', '希望你一切都好。'],
        ['Ojalá sepa la respuesta.', '但愿他知道答案。'],
        ['No quiero que te vayas.', '我不想让你走。'],
      ],
      tables: [
        { verbs: ['hablar', 'comer', 'vivir'], tense: 'subj' },
        { verbs: ['ser', 'estar', 'ir'], tense: 'subj' },
      ],
      origin: `**subjuntivo** 来自拉丁语 *subiunctivus*「连接在下面的」——它是“从属句的语气”，常常挂在 *que* 后面。

“元音对调”不是西班牙人的发明，而是直接继承拉丁语：
- 第一变位：*amem, ames, amet* → **ame, ames, ame**
- 第二、三变位：*vivam, vivas* → **viva, vivas**；*habeam* → **haya**

**sepa** 的来历很有趣：拉丁语 *sapiam* 里的 i 跑到了 a 前面（*saipa*），ai 合成 e，就成了 **sepa**。

为什么以 yo 形式为基础？拉丁语 *teneo*（我有）和 *teneam*（虚拟式）里都有一个 e/i 音，它在两个词里引起了同样的音变，于是 **tengo** 和 **tenga** 一起长出了 g。*hago / haga*（*facio / faciam*）也是一样。`,
      pitfalls: ['❌ *haiga* ✅ *haya*（haiga 是不规范的说法）。', '❌ *vaiga* ✅ *vaya*。', '❌ *pensamos*（虚拟式）✅ *pensemos*：-ar 动词的虚拟式词尾里是 e。', '❌ *dormamos* ✅ *durmamos*：-ir 动词 nosotros 也要变。'],
    },
    {
      id: 'b1-ojala',
      title: 'ojalá 与 ¡Que…!：表达祝愿',
      titleEs: 'Ojalá y que + subjuntivo',
      level: 'B1',
      summary: 'Ojalá (que) + 虚拟式 = 但愿……；¡Que + 虚拟式! 是各种场合的祝福语：¡Que te mejores! ¡Que tengas buen viaje!',
      body: `### ojalá (que) + 虚拟式
表示说话人的希望，**后面永远用虚拟式**。*que* 可加可不加：
- ***Ojalá** **haga** buen tiempo mañana.*（但愿明天天气好。）
- ***Ojalá que** **apruebes**.*（但愿你能通过。）

### ¡Que + 虚拟式!：现成的祝福语
这些句子其实省略了 *(Deseo) que…*，在西班牙每天都会听到：

| 场合 | 祝福 | 意思 |
|---|---|---|
| 有人生病 | *¡Que te mejores!* | 早日康复！ |
| 出门旅行 | *¡Que tengas buen viaje!* | 一路顺风！ |
| 去参加聚会 | *¡Que lo pases bien!* | 玩得开心！ |
| 睡觉前 | *¡Que descanses!* | 好好休息！ |
| 生日 | *¡Que cumplas muchos más!* | 长命百岁！ |
| 考试、面试 | *¡Que te vaya bien!* / *¡Que tengas suerte!* | 祝顺利！ |
| 吃饭 | *¡Que aproveche!* | 慢慢吃！ |
| 婚礼 | *¡Que seáis muy felices!* | 祝你们幸福！ |

### 回答祝福
*—¡Que te vaya bien! —**Gracias, igualmente.***（谢谢，你也是。）`,
      examples: [
        ['Ojalá haga buen tiempo el sábado.', '但愿周六天气好。'],
        ['¡Que te mejores pronto!', '祝你早日康复！'],
        ['¡Que tengáis un buen viaje!', '祝你们一路顺风！'],
        ['Ojalá que nos veamos pronto.', '希望我们很快再见。'],
        ['¡Que cumplas muchos más!', '祝你长命百岁！'],
      ],
      origin: `**ojalá** 来自安达卢斯阿拉伯语 *law šá lláh*「如果真主愿意」。阿拉伯人在伊比利亚半岛生活了近八百年，给西班牙语留下了数千个词，尤其是以 *al-* 开头的（*almohada, alfombra, algodón*……）。

因为 **ojalá** 本身就是一个“愿望”，所以后面一定跟虚拟式。至于 *¡Que te mejores!*，它是 *Deseo que te mejores* 省掉了主句——就像中文“祝你早日康复”也常常只说“早日康复！”。`,
      pitfalls: ['❌ *Ojalá tienes suerte.* ✅ *Ojalá tengas suerte.*', '❌ *¡Qué te mejores!* ✅ *¡Que te mejores!*：这里的 que 是连词，不带重音。', '❌ *Ojalá que mañana hace sol.* ✅ *Ojalá que mañana haga sol.*'],
      latam: '拉美没有 vosotros，祝福一群人时说 *¡Que tengan buen viaje!*、*¡Que sean muy felices!*。',
    },
    {
      id: 'b1-querer-que',
      title: 'querer / esperar / preferir + 原形 还是 que + 虚拟式？',
      titleEs: 'Querer + infinitivo / querer que + subjuntivo',
      level: 'B1',
      summary: '主语相同 → 原形：Quiero viajar. 主语不同 → que + 虚拟式：Quiero que viajes.',
      body: `表达愿望的动词：*querer, esperar, preferir, desear, necesitar*

| 情况 | 结构 | 例句 |
|---|---|---|
| **同一个人**想做、做事 | 动词 + **原形** | *Quiero **viajar**.*（我想旅行。） |
| **我**想让**别人**做 | 动词 + **que + 虚拟式** | *Quiero que **viajes**.*（我想让你旅行。） |

更多对比：
- *Espero **aprobar**.*（我希望我能通过。）↔ *Espero que **apruebes**.*（我希望你能通过。）
- *Prefiero **quedarme** en casa.* ↔ *Prefiero que **te quedes** en casa.*
- *Necesito **hablar** contigo.* ↔ *Necesito que me **ayudes**.*

### 注意
主句动词本身用 **陈述式**：*Quiero que…*，*Espero que…*；只有 *que* 后面的从句用虚拟式。`,
      examples: [
        ['Mis padres quieren que estudie medicina.', '我父母想让我学医。'],
        ['Quiero ser médico.', '我想当医生。'],
        ['Espero que todos aprueben el examen.', '我希望大家考试都通过。'],
        ['Prefiero que nos veamos el lunes.', '我更希望我们周一见面。'],
        ['Necesito que me ayudes con la mudanza.', '我需要你帮我搬家。'],
      ],
      origin: `**querer** 来自拉丁语 *quaerere*「寻找、追求」：人想要什么，就去“寻找”什么。英语 *query*（询问）、*quest*（探求）、*require*（需要）都是它的亲戚。

**esperar** 来自 *sperare*「希望」，所以西语里“等待”和“希望”是同一个词：*Te espero*（我等你）、*Espero que vengas*（我希望你来）。`,
      pitfalls: ['❌ *Quiero que estudiar.* ✅ *Quiero estudiar.* / *Quiero que estudies.*', '❌ *Quiero que yo vaya.* ✅ *Quiero ir.*（主语相同就用原形）', '❌ *Espero que vienes.* ✅ *Espero que vengas.*'],
    },
  ],
  words: [
    { id: 'deseo', es: 'deseo', zh: '愿望', pos: 'n', g: 'm', level: 'B1', tags: ['feel'], ex: ['Pide un deseo antes de soplar las velas.', '吹蜡烛前许个愿吧。'], ety: '拉丁语 desiderium「思念、渴望」。' },
    { id: 'desear', es: 'desear', zh: '希望；祝愿', pos: 'v', level: 'B1', tags: ['verb', 'feel'], ex: ['Te deseo mucha suerte.', '祝你好运。'], ety: '拉丁语 desiderare，可能源于 de + sidus「星星」：本义“盼望星辰（带来好运）”。' },
    { id: 'esperanza', es: 'esperanza', zh: '希望', pos: 'n', g: 'f', level: 'B1', tags: ['feel'], ex: ['Nunca pierdas la esperanza.', '永远不要失去希望。'], ety: '来自 esperar（拉丁语 sperare）。' },
    { id: 'ojala', es: 'ojalá', zh: '但愿', pos: 'interj', level: 'B1', tags: ['func'], ex: ['¡Ojalá llueva!', '但愿下雨！'], ety: '安达卢斯阿拉伯语 law šá lláh「如果真主愿意」。', emoji: '🤞' },
    { id: 'exito', es: 'éxito', zh: '成功', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['¡Mucho éxito en tu nuevo trabajo!', '祝你新工作顺利！'], ety: '拉丁语 exitus「出口；结局」，后来专指“好结局”。', en: '“假朋友”：éxito 是成功，英语 exit（出口）是 salida。' },
    { id: 'felicidad', es: 'felicidad', zh: '幸福', pos: 'n', g: 'f', pl: 'felicidades', level: 'B1', tags: ['feel'], ex: ['Os deseo mucha felicidad.', '祝你们幸福美满。'], ety: '拉丁语 felicitas。' },
    { id: 'enhorabuena', es: 'enhorabuena', zh: '恭喜（对成就的祝贺）', pos: 'interj', level: 'B1', tags: ['greet'], ex: ['¡Enhorabuena por el nuevo trabajo!', '恭喜你找到新工作！'], ety: 'en hora buena「在好时辰」连写而成。', note: '祝贺某人取得成就（考试、升职、生孩子）说 ¡Enhorabuena!；生日、节日说 ¡Felicidades!。' },
    { id: 'brindis', es: 'brindis', zh: '祝酒；干杯', pos: 'n', g: 'm', pl: 'brindis', level: 'B1', tags: ['food'], ex: ['Hagamos un brindis por los novios.', '我们为新郎新娘干一杯吧。'], ety: '来自德语 bring dir\'s「我敬你（这一杯）」，16 世纪由德国雇佣兵带入西班牙。', emoji: '🥂' },
    { id: 'brindar', es: 'brindar', zh: '祝酒；提供', pos: 'v', level: 'B1', tags: ['verb', 'food'], ex: ['¡Brindemos por el futuro!', '为未来干杯！'] },
    { id: 'aniversario', es: 'aniversario', zh: '周年纪念', pos: 'n', g: 'm', level: 'B1', tags: ['time'], ex: ['Hoy es nuestro aniversario de boda.', '今天是我们的结婚纪念日。'], ety: '拉丁语 anniversarius「每年回来的」：annus「年」+ vertere「转」。' },
    { id: 'nacimiento', es: 'nacimiento', zh: '出生；诞生', pos: 'n', g: 'm', level: 'B1', tags: ['family'], ex: ['¡Enhorabuena por el nacimiento de vuestra hija!', '恭喜你们女儿出生！'], note: '在西班牙，nacimiento 也指圣诞节摆的耶稣诞生场景（belén）。' },
    { id: 'jubilacion', es: 'jubilación', zh: '退休；养老金', pos: 'n', g: 'f', pl: 'jubilaciones', level: 'B1', tags: ['job'], ex: ['Mi abuelo celebró su jubilación con una gran fiesta.', '我爷爷办了个盛大的派对庆祝退休。'], ety: '拉丁语 iubilare「欢呼」：退休是值得欢呼的事。英语 jubilant（欢腾的）同源。' },
    { id: 'mudanza', es: 'mudanza', zh: '搬家', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['¿Me ayudas con la mudanza?', '你能帮我搬家吗？'], ety: '来自 mudar「改变」（拉丁语 mutare）。英语 mutation 同源。' },
    { id: 'despedida', es: 'despedida', zh: '告别；送别会', pos: 'n', g: 'f', level: 'B1', tags: ['people'], ex: ['El viernes hacemos una despedida para Javier.', '星期五我们给哈维尔办送别会。'], note: 'despedida de soltero / soltera = 单身告别派对。' },
    { id: 'tarta', es: 'tarta', zh: '蛋糕（大蛋糕）', pos: 'n', g: 'f', level: 'B1', tags: ['food'], ex: ['La tarta de cumpleaños es de chocolate.', '生日蛋糕是巧克力味的。'], emoji: '🎂', latam: '拉美多说 pastel、torta 或 queque。' },
    { id: 'vela', es: 'vela', zh: '蜡烛；帆', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['Sopla las velas.', '吹蜡烛吧。'], emoji: '🕯️', ety: '来自 velar「守夜」：蜡烛是守夜时点的。' },
    { id: 'soplar', es: 'soplar', zh: '吹', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Hoy sopla mucho viento.', '今天风很大。'], ety: '拉丁语 sufflare。' },
    { id: 'pedir-un-deseo', es: 'pedir un deseo', zh: '许愿', pos: 'phr', level: 'B1', tags: ['feel'], ex: ['Cierra los ojos y pide un deseo.', '闭上眼睛许个愿。'] },
    { id: 'meta', es: 'meta', zh: '目标；终点', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Mi meta es hablar español con fluidez.', '我的目标是流利地说西班牙语。'], ety: '拉丁语 meta：古罗马赛车场两端的标柱。' },
    { id: 'lograr', es: 'lograr', zh: '实现；达成', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Por fin logró su sueño.', '他终于实现了梦想。'], ety: '拉丁语 lucrari「获利」。英语 lucre（钱财）同源。' },
    { id: 'alcanzar', es: 'alcanzar', zh: '达到；赶上；够得着', pos: 'v', level: 'B1', tags: ['verb'], ex: ['No alcanzo el estante de arriba.', '我够不着最上面那层搁板。'], note: 'z→c：alcance（虚拟式）。' },
    { id: 'cumplirse', es: 'cumplirse', zh: '（愿望）实现；（时间）满', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Ojalá se cumplan todos tus deseos.', '愿你所有的愿望都实现。'] },
    { id: 'mejorarse', es: 'mejorarse', zh: '康复；好转', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['¡Que te mejores!', '早日康复！'] },
    { id: 'recuperarse', es: 'recuperarse', zh: '恢复', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['Se está recuperando de la operación.', '他正在从手术中恢复。'], ety: '拉丁语 recuperare「找回」。' },
    { id: 'salir-bien', es: 'salir bien', zh: '（事情）顺利；结果好', pos: 'phr', level: 'B1', tags: ['func'], ex: ['¡Que te salga bien la entrevista!', '祝你面试顺利！'], note: '反义：salir mal。' },
    { id: 'disfrutar', es: 'disfrutar', zh: '享受', pos: 'v', level: 'B1', tags: ['verb', 'hobby'], ex: ['Disfruta de las vacaciones.', '好好享受假期。'], note: '常用 disfrutar de algo。', ety: 'dis- + fruto「果实」：享用果实。' },
    { id: 'buen-viaje', es: '¡buen viaje!', zh: '一路顺风！', pos: 'interj', level: 'B1', tags: ['travel'], ex: ['¡Buen viaje y escríbenos!', '一路顺风，记得给我们写信！'] },
    { id: 'paz', es: 'paz', zh: '和平；平静', pos: 'n', g: 'f', pl: 'paces', level: 'B1', tags: ['feel'], ex: ['Ojalá haya paz en el mundo.', '愿世界和平。'], ety: '拉丁语 pacem。英语 peace 同源。', emoji: '🕊️' },
    { id: 'prosperidad', es: 'prosperidad', zh: '繁荣；兴旺', pos: 'n', g: 'f', level: 'B1', tags: ['feel'], ex: ['Os deseo salud y prosperidad.', '祝你们健康兴旺。'] },
    { id: 'celebracion', es: 'celebración', zh: '庆祝；庆典', pos: 'n', g: 'f', pl: 'celebraciones', level: 'B1', tags: ['time'], ex: ['La celebración fue en un jardín.', '庆典在一个花园里举行。'] },
    { id: 'anfitrion', es: 'anfitrión', zh: '主人（东道主）', pos: 'n', g: 'm', f: 'anfitriona', pl: 'anfitriones', level: 'B1', tags: ['people'], ex: ['Los anfitriones nos recibieron con una sonrisa.', '主人笑着接待了我们。'], ety: '来自古希腊神话人物 Amphitryon，莫里哀的喜剧里他大摆宴席，名字就成了“请客的主人”。' },
    { id: 'felicitar', es: 'felicitar', zh: '祝贺', pos: 'v', level: 'B1', tags: ['verb', 'greet'], ex: ['Te llamo para felicitarte.', '我打电话来祝贺你。'] },
    { id: 'agradecer', es: 'agradecer', zh: '感谢', pos: 'v', level: 'B1', tags: ['verb', 'greet'], ex: ['Te agradezco mucho tu ayuda.', '非常感谢你的帮助。'], note: '-cer → -zco：agradezco，虚拟式 agradezca。' },
    { id: 'pesame', es: 'pésame', zh: '哀悼；吊唁', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['Te doy mi más sentido pésame.', '向你致以最深切的哀悼。'], ety: '来自 me pesa「（这事）让我难过」。' },
    { id: 'porvenir', es: 'porvenir', zh: '前途；未来', pos: 'n', g: 'm', level: 'B1', tags: ['time'], ex: ['Es un joven con mucho porvenir.', '他是个很有前途的年轻人。'], ety: 'por venir「将要到来的」。' },
    { id: 'graduacion', es: 'graduación', zh: '毕业典礼；（酒的）度数', pos: 'n', g: 'f', pl: 'graduaciones', level: 'B1', tags: ['school'], ex: ['Mis padres vinieron a mi graduación.', '我父母来参加了我的毕业典礼。'] },
    { id: 'matrimonio', es: 'matrimonio', zh: '婚姻；夫妇', pos: 'n', g: 'm', level: 'B1', tags: ['family'], ex: ['Llevan treinta años de matrimonio.', '他们结婚三十年了。'], ety: '拉丁语 matrimonium，来自 mater「母亲」。' },
    { id: 'embarazada', es: 'embarazada', zh: '怀孕的', pos: 'adj', level: 'B1', tags: ['family'], ex: ['Mi hermana está embarazada.', '我姐姐怀孕了。'], en: '“假朋友”：embarazada 是怀孕，不是 embarrassed（尴尬 = avergonzado）。' },
    { id: 'dar-a-luz', es: 'dar a luz', zh: '分娩；生孩子', pos: 'phr', level: 'B1', tags: ['family'], ex: ['Dio a luz a una niña preciosa.', '她生了一个漂亮的女孩。'], note: '字面意思“带到光明中”。' },
    { id: 'prometido', es: 'prometido', zh: '未婚夫', pos: 'n', g: 'm', f: 'prometida', level: 'B1', tags: ['family'], ex: ['Te presento a mi prometida.', '给你介绍一下我的未婚妻。'], note: '来自 prometer「许诺」：许下婚约的人。' },
    { id: 'compromiso', es: 'compromiso', zh: '承诺；订婚；为难的处境', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['Es un compromiso importante.', '这是个重要的承诺。'], en: '“假朋友”：compromiso 主要是承诺、约定，英语 compromise（妥协）多说 acuerdo / término medio。' },
    { id: 'ceremonia', es: 'ceremonia', zh: '仪式；典礼', pos: 'n', g: 'f', level: 'B1', tags: ['time'], ex: ['La ceremonia empieza a las doce.', '仪式十二点开始。'] },
    { id: 'banquete', es: 'banquete', zh: '宴会', pos: 'n', g: 'm', level: 'B1', tags: ['food'], ex: ['Después de la ceremonia hay un banquete.', '仪式之后有宴会。'], ety: '意大利语 banchetto「小长凳」：宴会时大家坐在长凳上。' },
    { id: 'emocionarse', es: 'emocionarse', zh: '感动；激动', pos: 'v', level: 'B1', tags: ['verb', 'feel'], ex: ['Mi madre se emocionó al ver el regalo.', '我妈妈看到礼物很感动。'] },
    { id: 'lagrima', es: 'lágrima', zh: '眼泪', pos: 'n', g: 'f', level: 'B1', tags: ['body', 'feel'], ex: ['Lloró lágrimas de alegría.', '她流下了喜悦的泪水。'], ety: '拉丁语 lacrima。' },
  ],
  sentences: [
    { id: 's1', es: 'Ojalá haga buen tiempo mañana.', zh: '但愿明天天气好。', g: ['b1-ojala'], distract: ['hace'] },
    { id: 's2', es: '¡Que tengas un buen viaje!', zh: '祝你旅途愉快！', g: ['b1-ojala'], distract: ['tienes'] },
    { id: 's3', es: '¡Que te mejores pronto!', zh: '祝你早日康复！', g: ['b1-ojala'] },
    { id: 's4', es: 'Espero que todos aprueben el examen.', zh: '我希望大家考试都通过。', g: ['b1-querer-que'], distract: ['aprueban'] },
    { id: 's5', es: 'Quiero que vengas a mi fiesta.', zh: '我想让你来我的派对。', g: ['b1-querer-que'], distract: ['vienes'] },
    { id: 's6', es: 'Mis padres quieren que estudie medicina.', zh: '我父母想让我学医。', g: ['b1-querer-que'] },
    { id: 's7', es: 'Prefiero que nos veamos el lunes.', zh: '我更希望我们周一见。', g: ['b1-querer-que'] },
    { id: 's8', es: 'Ojalá consigas el trabajo.', zh: '但愿你能得到那份工作。', g: ['b1-ojala'], distract: ['consigues'] },
    { id: 's9', es: '¡Que cumplas muchos más!', zh: '祝你长命百岁！', g: ['b1-ojala'] },
    { id: 's10', es: '¡Que lo paséis muy bien!', zh: '祝你们玩得开心！', g: ['b1-ojala'] },
    { id: 's11', es: 'Espero que no llueva el día de la boda.', zh: '我希望婚礼那天别下雨。', g: ['b1-querer-que'] },
    { id: 's12', es: 'Deseo que seáis muy felices.', zh: '祝你们非常幸福。', g: ['b1-querer-que'], distract: ['sois'] },
    { id: 's13', es: 'Quiero ser médico.', zh: '我想当医生。', g: ['b1-querer-que'] },
    { id: 's14', es: 'Espero verte pronto.', zh: '希望很快见到你。', g: ['b1-querer-que'] },
    { id: 's15', es: 'Ojalá sepa la respuesta.', zh: '但愿他知道答案。', g: ['b1-subj'], distract: ['sabe'] },
    { id: 's16', es: 'Es tu cumpleaños: pide un deseo y sopla las velas.', zh: '今天你生日：许个愿，吹蜡烛吧。' },
    { id: 's17', es: 'Ojalá vaya todo bien.', zh: '但愿一切顺利。', g: ['b1-subj'] },
    { id: 's18', es: '¡Que te vaya bien en la entrevista!', zh: '祝你面试顺利！', g: ['b1-ojala'] },
    { id: 's19', es: 'Te deseo mucha suerte en tu nuevo trabajo.', zh: '祝你新工作好运。' },
    { id: 's20', es: '¡Enhorabuena por el nuevo trabajo!', zh: '恭喜你找到新工作！' },
    { id: 's21', es: 'Ojalá estés aquí el año que viene.', zh: '但愿你明年还在这里。', g: ['b1-subj'] },
    { id: 's22', es: 'No quiero que te vayas.', zh: '我不想让你走。', g: ['b1-querer-que'], distract: ['vas'] },
    { id: 's23', es: 'Mis amigos esperan que les escriba desde China.', zh: '朋友们希望我从中国给他们写信。', g: ['b1-querer-que'] },
    { id: 's24', es: '¡Que descanses!', zh: '好好休息！', g: ['b1-ojala'] },
    { id: 's25', es: 'Brindemos por los novios.', zh: '让我们为新人干杯。', g: ['b1-subj'] },
    { id: 's26', es: 'Necesito que me ayudes con la mudanza.', zh: '我需要你帮我搬家。', g: ['b1-querer-que'] },
  ],
  cloze: [
    { id: 'c1', text: 'Ojalá ___ (tú) el examen.', answers: ['apruebes'], hint: 'aprobar', zh: '但愿你考试通过。', g: ['b1-ojala'] },
    { id: 'c2', text: '¡Que ___ (vosotros) un buen viaje!', answers: ['tengáis'], hint: 'tener', zh: '祝你们一路顺风！', g: ['b1-ojala'] },
    { id: 'c3', text: 'Espero que mañana ___ sol.', answers: ['haga'], hint: 'hacer', zh: '我希望明天出太阳。', g: ['b1-querer-que'] },
    { id: 'c4', text: 'Quiero que mis hijos ___ felices.', answers: ['sean'], hint: 'ser', zh: '我希望我的孩子们幸福。', g: ['b1-subj'] },
    { id: 'c5', text: 'Ojalá ___ (él) en casa ahora.', answers: ['esté'], hint: 'estar', zh: '但愿他现在在家。', g: ['b1-subj'] },
    { id: 'c6', text: 'Mis padres quieren que ___ (yo) a la universidad.', answers: ['vaya'], hint: 'ir', zh: '我父母想让我上大学。', g: ['b1-subj'] },
    { id: 'c7', text: 'Espero que ___ (ellos) la verdad.', answers: ['sepan'], hint: 'saber', zh: '我希望他们知道真相。', g: ['b1-subj'] },
    { id: 'c8', text: '¡Que te ___ pronto!', answers: ['mejores'], hint: 'mejorarse', zh: '祝你早日康复！', g: ['b1-ojala'] },
    { id: 'c9', text: 'Prefiero ___ en casa esta noche.', answers: ['quedarme'], options: ['quedarme', 'que me quede', 'me quede'], zh: '我今晚更想待在家里。', g: ['b1-querer-que'], explain: '主语相同（我更想 + 我待着），用原形。' },
    { id: 'c10', text: 'Quiero que ___ (tú) conmigo.', answers: ['vengas'], hint: 'venir', zh: '我想让你跟我一起来。', g: ['b1-subj'] },
    { id: 'c11', text: 'Ojalá ___ (nosotros) tiempo para visitar Toledo.', answers: ['tengamos'], hint: 'tener', zh: '但愿我们有时间去托莱多看看。', g: ['b1-ojala'] },
    { id: 'c12', text: 'El profesor espera que ___ (nosotros) más.', answers: ['leamos'], hint: 'leer', zh: '老师希望我们多读书。', g: ['b1-querer-que'] },
    { id: 'c13', text: '¡Que ___ muy bien en la fiesta!', answers: ['lo pases'], options: ['lo pases', 'lo pasas', 'lo pasar'], zh: '祝你在派对上玩得开心！', g: ['b1-ojala'] },
    { id: 'c14', text: 'Ojalá no ___ mañana.', answers: ['llueva'], hint: 'llover', zh: '但愿明天别下雨。', g: ['b1-ojala'] },
    { id: 'c15', text: 'Espero que ___ (tú) bien esta noche.', answers: ['duermas'], hint: 'dormir', zh: '希望你今晚睡个好觉。', g: ['b1-subj'] },
    { id: 'c16', text: 'Mi madre quiere que ___ (nosotros) la mesa.', answers: ['pongamos'], hint: 'poner', zh: '我妈妈想让我们摆桌子。', g: ['b1-subj'] },
    { id: 'c17', text: 'Deseo que ___ (vosotros) muy felices.', answers: ['seáis'], hint: 'ser', zh: '祝你们非常幸福。', g: ['b1-subj'] },
    { id: 'c18', text: '¿Quieres que te ___ (yo) con las maletas?', answers: ['ayude'], hint: 'ayudar', zh: '要我帮你拿行李吗？', g: ['b1-querer-que'] },
    { id: 'c19', text: 'Te ___ mucha suerte.', answers: ['deseo'], options: ['deseo', 'desee', 'desea'], zh: '祝你好运。', g: ['b1-querer-que'], explain: '主句陈述“我祝愿”，用陈述式。' },
    { id: 'c20', text: 'Ojalá ___ (nosotros) pronto.', answers: ['nos veamos'], options: ['nos veamos', 'nos vemos', 'vernos'], zh: '希望我们很快见面。', g: ['b1-ojala'] },
  ],
  conj: [
    { verbs: ['hablar', 'comer', 'vivir', 'tener', 'hacer', 'decir', 'salir', 'venir', 'conocer'], tenses: ['subj'], g: 'b1-subj' },
    { verbs: ['ser', 'estar', 'ir', 'haber', 'saber', 'dar'], tenses: ['subj'], g: 'b1-subj' },
    { verbs: ['pensar', 'volver', 'pedir', 'dormir', 'sentir', 'llegar', 'buscar', 'empezar'], tenses: ['subj'], g: 'b1-subj' },
  ],
  dialogues: [
    {
      id: 'b1-u01-d1',
      title: '送别会 · La despedida de Javier',
      lines: [
        { who: 'Paula', es: '¡Atención, todos! Vamos a hacer un brindis por Javier.', zh: '大家注意！我们为哈维尔干一杯。' },
        { who: 'Javier', es: 'Gracias, de verdad. Os voy a echar mucho de menos.', zh: '真的谢谢大家。我会很想你们的。' },
        { who: 'Elena', es: 'Y nosotros a ti. ¿Cuándo sale tu vuelo?', zh: '我们也会想你。你的航班什么时候起飞？' },
        { who: 'Javier', es: 'El domingo por la mañana. Todavía tengo que hacer la maleta.', zh: '星期天上午。我还得收拾行李。' },
        { who: 'Xiao Yu', es: 'Te he escrito una lista de restaurantes en Shanghái. ¡Ojalá te guste la comida!', zh: '我给你写了一张上海餐馆的清单。希望你喜欢那边的菜！' },
        { who: 'Javier', es: '¡Seguro que sí! Espero que vengáis a visitarme.', zh: '肯定会的！希望你们来看我。' },
        { who: 'Paula', es: 'Claro que iremos. Bueno, ¡que tengas mucho éxito en tu nuevo trabajo!', zh: '我们当然会去。好啦，祝你新工作大获成功！' },
        { who: 'Todos', es: '¡Por Javier! ¡Salud!', zh: '敬哈维尔！干杯！' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r01',
      level: 'B1',
      title: 'Mis deseos para el nuevo año',
      titleZh: '我的新年愿望',
      topic: '愿望',
      paras: [
        [
          ['Es el 31 de diciembre y, como cada año, escribo mis deseos para el año que empieza.', '今天是 12 月 31 日，像每年一样，我写下新一年的愿望。'],
          ['Dicen que, si los escribes, es más fácil que se cumplan.', '人们说，把愿望写下来，就更容易实现。'],
        ],
        [
          ['Para mí, quiero tres cosas: aprobar el examen DELE, correr una media maratón y aprender a cocinar una buena paella.', '对我自己，我想要三件事：通过 DELE 考试，跑一次半程马拉松，学会做一锅好吃的海鲜饭。'],
          ['Para mi familia, espero que mis abuelos tengan buena salud y que mi hermana encuentre un trabajo que le guste.', '对我的家人，我希望爷爷奶奶身体健康，希望姐姐找到一份她喜欢的工作。'],
        ],
        [
          ['Y para el mundo, ojalá haya menos guerras y más paz, y ojalá todos cuidemos mejor el planeta.', '对这个世界，但愿战争少一些、和平多一些，但愿我们都能更好地爱护地球。'],
          ['Sé que no todo depende de mí, pero tener esperanza es el primer paso. ¿Y tú? ¿Qué deseas para este año?', '我知道不是所有事都取决于我，但心怀希望是第一步。你呢？你今年有什么愿望？'],
        ],
      ],
      gloss: { 'cumplan': '实现（虚拟式）', 'media': '半', 'maratón': '马拉松', 'encuentre': '找到（虚拟式）', 'guerras': '战争', 'cuidemos': '爱护（虚拟式）', 'depende': '取决于', 'paso': '步' },
      questions: [
        { type: 'mc', q: '作者为什么把愿望写下来？', options: ['老师要求的', '据说这样更容易实现', '为了发到网上'], answer: 1 },
        { type: 'tf', q: '作者希望自己的姐姐找到喜欢的工作。', answer: true, explain: 'que mi hermana encuentre un trabajo que le guste' },
        { type: 'mc', q: '下面哪一项不是作者给自己的愿望？', options: ['通过考试', '跑半程马拉松', '去中国旅行'], answer: 2 },
      ],
    },
    {
      id: 'b1-r02',
      level: 'B1',
      title: 'Un mensaje para cada ocasión',
      titleZh: '不同场合的留言',
      topic: '祝福语',
      paras: [
        [
          ['Para Marta, que acaba de tener un bebé: «¡Enhorabuena, mamá! Que la pequeña crezca sana y feliz. Ya tengo ganas de conocerla».', '给刚生完宝宝的玛尔塔：“恭喜你当妈妈啦！愿小宝贝健康快乐地长大。真想快点见到她。”'],
        ],
        [
          ['Para Luis, que está en el hospital: «Nos hemos enterado de que te han operado. ¡Que te mejores pronto! Si necesitas algo, llámanos».', '给住院的路易斯：“听说你做了手术。祝你早日康复！需要什么就给我们打电话。”'],
        ],
        [
          ['Para Ana y Pedro, que se casan el sábado: «Os deseamos toda la felicidad del mundo. ¡Que seáis muy felices y que viajéis mucho juntos!».', '给周六结婚的安娜和佩德罗：“祝你们拥有世上所有的幸福。愿你们幸福美满，一起去很多地方旅行！”'],
        ],
        [
          ['Para mi compañero Hao, que empieza un trabajo nuevo: «Te vamos a echar de menos en la oficina. ¡Mucho éxito y que te vaya genial!».', '给开始新工作的同事浩：“办公室会想你的。祝你大获成功，一切顺利！”'],
        ],
      ],
      gloss: { 'crezca': '成长（虚拟式）', 'sana': '健康的', 'ganas': '渴望', 'enterado': '得知', 'operado': '做手术', 'llámanos': '给我们打电话', 'juntos': '一起', 'genial': '棒极了' },
      questions: [
        { type: 'mc', q: '路易斯怎么了？', options: ['刚结婚', '做了手术', '换了工作'], answer: 1 },
        { type: 'mc', q: '给新婚夫妇的祝福里用了哪个结构？', options: ['Que + 虚拟式', 'Si + 现在时', 'ir a + 原形'], answer: 0 },
        { type: 'tf', q: '浩要离开办公室去新的工作岗位。', answer: true, explain: 'empieza un trabajo nuevo; te vamos a echar de menos en la oficina' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一张卡片：给要出国的朋友、刚结婚的同事或生病的家人（任选一位），写出至少 5 句祝福，用上 ojalá、espero que 和 ¡Que…!。', words: [60, 120], hints: ['¡Enhorabuena por…! / Querido…:', 'Ojalá…', 'Espero que…', '¡Que…!'] }],
}
