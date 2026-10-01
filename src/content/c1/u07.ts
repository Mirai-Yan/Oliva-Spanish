import type { Unit } from '../types'

export const u07: Unit = {
  id: 'c1-u07',
  level: 'C1',
  order: 7,
  title: '西语的多样性',
  titleEs: 'Un idioma, muchas voces',
  icon: '🗺️',
  goals: ['听懂并认出 voseo（vos sos, vos tenés）', '了解 seseo、yeísmo、送气 s 等主要发音差异', '掌握西班牙和拉美最常见的词汇差异', '理解“没有哪种西班牙语更标准”的多中心观念'],
  grammar: [
    {
      id: 'c1-voseo',
      title: 'voseo：vos sos, vos tenés',
      titleEs: 'El voseo',
      level: 'C1',
      summary: '在阿根廷、乌拉圭、巴拉圭和中美洲大部分地区，非正式的“你”用 vos。现在时重音在词尾：vos hablás, comés, vivís；ser → vos sos。命令式：hablá, comé, viví, vení, decí。宾语和反身代词仍用 te：Vos te llamás…',
      body: `### 现在时：重音后移
| 原形 | tú | **vos** |
|---|---|---|
| hablar | hablas | **hablás** |
| comer | comes | **comés** |
| vivir | vives | **vivís** |
| tener | tienes | **tenés**（不变 e→ie） |
| poder | puedes | **podés** |
| querer | quieres | **querés** |
| ser | eres | **sos** |
| ir | vas | **vas** |

> 词根不变：*vos **tenés**, **querés**, **podés***——没有 *ie / ue* 变化。

### 命令式：去掉原形的 -r，重音在最后
*¡**Hablá**! ¡**Comé**! ¡**Viví**! ¡**Vení**! ¡**Decí**! ¡**Tené** cuidado!*
否定命令用虚拟式：*No **hables** / No **hablés**.*（两种都有）

### 其他形式和 tú 一样或几乎一样
*Vos **te** llamás Ana. ¿**Tu** casa? Esto es para **vos**.*（介词后用 *vos*：*para vos, con vos*）

### ustedes 代替 vosotros
**整个拉美**（以及加那利群岛和安达卢西亚西部）都不用 *vosotros*，复数的“你们”一律说 ***ustedes***：*¿Ustedes vienen?*（你们来吗？）`,
      examples: [
        ['¿Vos sos de Buenos Aires?', '你是布宜诺斯艾利斯人吗？'],
        ['¿Qué querés tomar?', '你想喝点什么？'],
        ['Vení, sentate acá.', '来，坐这儿。'],
        ['Vos tenés razón, che.', '你说得对，伙计。'],
        ['¿Ustedes vienen a la fiesta?', '你们来派对吗？'],
      ],
      origin: `**vos** 在中世纪西语里原本是 **尊称** 的“您”（类似法语的 *vous*）。后来 *vuestra merced*（阁下）缩成了 *usted*，成为新的尊称，*vos* 地位下降，在西班牙逐渐消失。

但在离西班牙宫廷较远的殖民地，比如拉普拉塔河地区和中美洲，*vos* 保留了下来，并变成了最亲近的“你”。所以阿根廷人的 *vos tenés* 其实是一块保存至今的“古董”。`,
      pitfalls: ['❌ *Vos eres…* ✅ *Vos sos…*', '❌ *Vos tienes / vos tiénes* ✅ *Vos tenés*：词根不变，重音在词尾。', '❌ 同一段话里混用 *vosotros* 和 *ustedes* ✅ 选定一种并保持一致。'],
      latam: '在墨西哥、秘鲁、哥伦比亚大部分地区和加勒比，日常用的是 *tú*，不是 *vos*；在智利，口语里有一种特别的 voseo：*¿Cómo estái?*',
    },
    {
      id: 'c1-pronunciacion-variedades',
      title: '发音差异：seseo、yeísmo、送气 s',
      titleEs: 'Variedades de pronunciación',
      level: 'C1',
      summary: 'seseo：z / ce / ci 读成 s（拉美、加那利、安达卢西亚大部分）。distinción：区分 /θ/ 和 /s/（西班牙中北部）。yeísmo：ll 和 y 读音相同（绝大多数地区）；拉普拉塔河地区读成 [ʃ]。加勒比和安达卢西亚：词尾 s 送气或脱落，j 读得很轻（[h]）。',
      body: `### z / c 怎么读？
| 现象 | 地区 | *casa* / *caza* |
|---|---|---|
| **distinción** | 西班牙中部和北部 | [ˈkasa] / [ˈkaθa]（不同） |
| **seseo** | 拉美、加那利、安达卢西亚大部分 | [ˈkasa] / [ˈkasa]（相同） |
| **ceceo** | 安达卢西亚部分地区 | [ˈkaθa] / [ˈkaθa] |

> 全世界 **约九成** 的西语使用者都是 seseo。两种都是标准发音。

### ll 和 y
- **yeísmo**（绝大多数地区）：*pollo* 和 *poyo* 读音相同。
- **拉普拉塔河地区**：*yo, calle, playa* 里的 *y / ll* 读成 [ʃ] 或 [ʒ]，像“输”的声母：*sho, cashe, plasha*。

### 词尾的 s 和 j
在加勒比、安达卢西亚和加那利，音节末尾的 *s* 常常 **送气** 或 **脱落**：
*los niños* → [loh ˈniɲoh] 或 [lo ˈniɲo]
*j* 在这些地区读得很轻，像英语的 *h*：*jamón* [haˈmon]

### 学习者怎么办？
**选一种发音并保持一致**，同时多听各地口音。理解所有口音比模仿所有口音更重要。`,
      examples: [
        ['En Andalucía y en América se practica el seseo.', '安达卢西亚和美洲普遍读 seseo。'],
        ['En Buenos Aires, «yo me llamo» suena casi como «sho me shamo».', '在布宜诺斯艾利斯，“yo me llamo”听起来几乎像“sho me shamo”。'],
        ['En el Caribe muchas veces no se pronuncia la ese final.', '在加勒比，词尾的 s 常常不发音。'],
        ['Las dos pronunciaciones son correctas.', '两种发音都是正确的。'],
        ['Lo importante es entender todos los acentos.', '重要的是听懂所有口音。'],
      ],
      origin: `为什么美洲是 seseo？15、16 世纪的移民大多从 **塞维利亚** 和 **加的斯** 出发，而安达卢西亚当时已经开始把 *z* 和 *s* 合并。这种发音随着船只和移民，传到了加那利群岛和整个美洲。

西班牙中部的 *z* 读 [θ]，是 16 世纪以后才固定下来的。所以“咬舌头的西班牙语”反而是比较“年轻”的发音。`,
      pitfalls: ['❌ 认为 seseo 是“错误发音” ✅ seseo 和 distinción 都是标准发音。', '❌ 在同一个词里时而 seseo、时而 distinción ✅ 选一种并保持一致。', '❌ 模仿口音时把 *s* 全吞掉，却不会其他特征 ✅ 先学好清晰的发音，再慢慢熟悉各地口音。'],
    },
    {
      id: 'c1-lexico-variedades',
      title: '词汇差异：coche, carro, auto',
      titleEs: 'Diferencias léxicas',
      level: 'C1',
      summary: '同一个东西，不同国家叫法不同：coche / carro / auto，ordenador / computadora，móvil / celular，zumo / jugo，patata / papa，conducir / manejar。注意禁忌词：coger 在墨西哥、阿根廷等地是粗话，要用 tomar / agarrar。',
      body: `### 常见差异
| 西班牙 | 拉美（常见） | 中文 |
|---|---|---|
| *coche* | *carro*（墨西哥、哥伦比亚、加勒比）/ *auto*（南锥体） | 汽车 |
| *ordenador* | *computadora / computador* | 电脑 |
| *móvil* | *celular* | 手机 |
| *zumo* | *jugo* | 果汁 |
| *patata* | *papa* | 土豆 |
| *gafas* | *lentes / anteojos* | 眼镜 |
| *conducir* | *manejar* | 开车 |
| *billete* | *boleto* | 票 |
| *autobús* | *camión*（墨西哥）/ *colectivo*（阿根廷）/ *guagua*（加勒比、加那利） | 公交车 |
| *aparcar* | *estacionar* | 停车 |
| *piso* | *departamento / apartamento* | 公寓 |
| *guay* | *chévere*（加勒比）/ *padre*（墨西哥）/ *copado*（阿根廷） | 酷、棒 |

### 小心禁忌词
- ***coger***：在西班牙 = 拿、坐（车）；在墨西哥、阿根廷等地是粗话。在拉美说 ***tomar el autobús***、***agarrar***。
- ***concha, pisar*** 等词在某些国家也有粗俗含义——遇到拿不准的词，先听当地人怎么说。

### 时态习惯
西班牙常说 *Hoy **he comido** paella*；拉美大多说 *Hoy **comí** paella*。

### 指小词
拉美（尤其墨西哥）很爱用指小词：*ahorita*（马上 / 待会儿）、*cafecito*、*un momentito*。`,
      examples: [
        ['En México se dice «carro» y en Argentina, «auto».', '在墨西哥说 carro，在阿根廷说 auto。'],
        ['¿Me prestas tu celular?', '能借我用一下你的手机吗？'],
        ['En Buenos Aires tomé el colectivo para ir al centro.', '在布宜诺斯艾利斯，我坐公交车去市中心。'],
        ['Ahorita vengo.', '我待会儿就来。'],
        ['¡Qué chévere tu camisa!', '你的衬衫真酷！'],
      ],
      origin: `**ordenador** 是西班牙从法语 *ordinateur* 借来的；拉美则从英语 *computer* 造出了 *computadora*。

**guagua**（公交车）在加那利群岛和加勒比使用，词源有争议，一种说法认为来自英语 *wagon*。而在安第斯地区，*guagua* 却是“婴儿”的意思（来自克丘亚语）——同一个词，在不同地方指完全不同的东西。`,
      pitfalls: ['❌ 在墨西哥说 *Voy a coger el autobús.* ✅ *Voy a tomar el camión.*', '❌ 认为某国的词“不正确” ✅ 每个国家的用词在当地都是标准的。', '❌ 在阿根廷说 *ordenador* 也能懂，但更自然的是 ✅ *computadora*。'],
    },
  ],
  words: [
    { id: 'variedad', es: 'variedad', zh: '变体；多样性', pos: 'n', g: 'f', pl: 'variedades', level: 'C1', tags: ['country'], ex: ['El español tiene muchas variedades.', '西班牙语有很多变体。'] },
    { id: 'dialecto', es: 'dialecto', zh: '方言', pos: 'n', g: 'm', level: 'C1', tags: ['country'], ex: ['El andaluz no es una lengua, sino un dialecto.', '安达卢西亚话不是一门语言，而是一种方言。'] },
    { id: 'seseo', es: 'seseo', zh: '把 z / c 读作 s', pos: 'n', g: 'm', level: 'C1', tags: ['country'], ex: ['El seseo es general en América.', '在美洲，seseo 很普遍。'] },
    { id: 'ceceo', es: 'ceceo', zh: '把 s 读作 z', pos: 'n', g: 'm', level: 'C1', tags: ['country'], ex: ['El ceceo se da en algunas zonas de Andalucía.', 'ceceo 出现在安达卢西亚的一些地区。'] },
    { id: 'yeismo', es: 'yeísmo', zh: 'll 和 y 不分', pos: 'n', g: 'm', level: 'C1', tags: ['country'], ex: ['El yeísmo es mayoritario en el mundo hispano.', '在西语世界，ll 和 y 不分是主流。'] },
    { id: 'voseo', es: 'voseo', zh: '用 vos 称呼', pos: 'n', g: 'm', level: 'C1', tags: ['country'], ex: ['El voseo es típico de Argentina y Uruguay.', 'voseo 是阿根廷和乌拉圭的特色。'] },
    { id: 'hablante', es: 'hablante', zh: '说话者；使用者', pos: 'n', g: 'mf', level: 'C1', tags: ['country'], ex: ['El español tiene casi 500 millones de hablantes nativos.', '西班牙语有近五亿母语使用者。'] },
    { id: 'hispanohablante', es: 'hispanohablante', zh: '说西班牙语的（人）', pos: 'n', g: 'mf', level: 'C1', tags: ['country'], ex: ['Es un país hispanohablante.', '这是一个说西班牙语的国家。'] },
    { id: 'nativo', es: 'nativo', zh: '母语者；本地的', pos: 'adj', f: 'nativa', level: 'C1', tags: ['country'], ex: ['Busco un profesor nativo.', '我在找一位母语老师。'] },
    { id: 'lengua-materna', es: 'lengua materna', zh: '母语', pos: 'n', g: 'f', level: 'C1', tags: ['country'], ex: ['Mi lengua materna es el chino.', '我的母语是中文。'] },
    { id: 'bilingue', es: 'bilingüe', zh: '双语的', pos: 'adj', level: 'C1', tags: ['country'], ex: ['Se crio en una familia bilingüe.', '他在一个双语家庭长大。'] },
    { id: 'bilinguismo', es: 'bilingüismo', zh: '双语现象', pos: 'n', g: 'm', level: 'C1', tags: ['country'], ex: ['En Paraguay hay un bilingüismo muy extendido.', '巴拉圭的双语现象非常普遍。'] },
    { id: 'cooficial', es: 'cooficial', zh: '（与官方语言）同为官方的', pos: 'adj', level: 'C1', tags: ['country'], ex: ['El catalán es lengua cooficial en Cataluña.', '加泰罗尼亚语是加泰罗尼亚的共同官方语言。'] },
    { id: 'guarani', es: 'guaraní', zh: '瓜拉尼语', pos: 'n', g: 'm', level: 'C1', tags: ['country'], ex: ['En Paraguay se habla español y guaraní.', '巴拉圭人说西班牙语和瓜拉尼语。'] },
    { id: 'quechua', es: 'quechua', zh: '克丘亚语', pos: 'n', g: 'm', level: 'C1', tags: ['country'], ex: ['Millones de personas hablan quechua en los Andes.', '安第斯山区有数百万人说克丘亚语。'] },
    { id: 'nahuatl', es: 'náhuatl', zh: '纳瓦特语', pos: 'n', g: 'm', level: 'C1', tags: ['country'], ex: ['«Chocolate» y «tomate» vienen del náhuatl.', '“巧克力”和“番茄”来自纳瓦特语。'] },
    { id: 'andaluz', es: 'andaluz', zh: '安达卢西亚的（人）', pos: 'adj', f: 'andaluza', pl: 'andaluces', level: 'C1', tags: ['country'], ex: ['Me encanta el acento andaluz.', '我很喜欢安达卢西亚口音。'] },
    { id: 'canario', es: 'canario', zh: '加那利的（人）；金丝雀', pos: 'adj', f: 'canaria', level: 'C1', tags: ['country'], ex: ['El español canario se parece al caribeño.', '加那利的西班牙语和加勒比的很像。'] },
    { id: 'rioplatense', es: 'rioplatense', zh: '拉普拉塔河地区的', pos: 'adj', level: 'C1', tags: ['country'], ex: ['El español rioplatense tiene mucha influencia italiana.', '拉普拉塔河地区的西班牙语受意大利语影响很大。'] },
    { id: 'caribeno', es: 'caribeño', zh: '加勒比的', pos: 'adj', f: 'caribeña', level: 'C1', tags: ['country'], ex: ['La música caribeña es muy alegre.', '加勒比音乐很欢快。'] },
    { id: 'andino', es: 'andino', zh: '安第斯的', pos: 'adj', f: 'andina', level: 'C1', tags: ['country'], ex: ['Las culturas andinas son muy antiguas.', '安第斯文化历史悠久。'] },
    { id: 'argentino', es: 'argentino', zh: '阿根廷的（人）', pos: 'adj', f: 'argentina', level: 'C1', tags: ['country'], ex: ['El tango es argentino y uruguayo.', '探戈是阿根廷和乌拉圭的。'] },
    { id: 'chileno', es: 'chileno', zh: '智利的（人）', pos: 'adj', f: 'chilena', level: 'C1', tags: ['country'], ex: ['El español chileno es muy rápido.', '智利西班牙语语速很快。'] },
    { id: 'colombiano', es: 'colombiano', zh: '哥伦比亚的（人）', pos: 'adj', f: 'colombiana', level: 'C1', tags: ['country'], ex: ['El café colombiano es famoso.', '哥伦比亚咖啡很有名。'] },
    { id: 'peruano', es: 'peruano', zh: '秘鲁的（人）', pos: 'adj', f: 'peruana', level: 'C1', tags: ['country'], ex: ['La cocina peruana tiene influencia china.', '秘鲁菜受到中国菜的影响。'] },
    { id: 'cubano', es: 'cubano', zh: '古巴的（人）', pos: 'adj', f: 'cubana', level: 'C1', tags: ['country'], ex: ['La música cubana es famosa en todo el mundo.', '古巴音乐闻名全世界。'] },
    { id: 'venezolano', es: 'venezolano', zh: '委内瑞拉的（人）', pos: 'adj', f: 'venezolana', level: 'C1', tags: ['country'], ex: ['Tengo una compañera venezolana.', '我有一个委内瑞拉同事。'] },
    { id: 'latinoamericano', es: 'latinoamericano', zh: '拉丁美洲的（人）', pos: 'adj', f: 'latinoamericana', level: 'C1', tags: ['country'], ex: ['Me interesa la literatura latinoamericana.', '我对拉美文学感兴趣。'] },
    { id: 'carro', es: 'carro', zh: '汽车（拉美）；手推车（西班牙）', pos: 'n', g: 'm', level: 'C1', tags: ['travel'], ex: ['Dejé el carro en el estacionamiento.', '我把车停在停车场了。'], note: '在西班牙，carro 多指超市手推车（carro de la compra）。' },
    { id: 'computadora', es: 'computadora', zh: '电脑（拉美）', pos: 'n', g: 'f', level: 'C1', tags: ['hobby'], ex: ['Se me apagó la computadora.', '我的电脑关机了。'] },
    { id: 'celular', es: 'celular', zh: '手机（拉美）', pos: 'n', g: 'm', pl: 'celulares', level: 'C1', tags: ['hobby'], ex: ['Mándame un mensaje al celular.', '给我手机发个消息。'] },
    { id: 'jugo', es: 'jugo', zh: '果汁（拉美）', pos: 'n', g: 'm', level: 'C1', tags: ['food'], ex: ['Un jugo de naranja, por favor.', '请来一杯橙汁。'] },
    { id: 'papa', es: 'papa', zh: '土豆（拉美、加那利）', pos: 'n', g: 'f', level: 'C1', tags: ['food'], ex: ['Las papas son originarias de los Andes.', '土豆原产于安第斯山区。'], note: 'el papa = 教皇；la papa = 土豆。' },
    { id: 'lentes', es: 'lentes', zh: '眼镜（拉美）', pos: 'n', g: 'm', level: 'C1', tags: ['clothes'], ex: ['No veo nada sin lentes.', '不戴眼镜我什么都看不见。'] },
    { id: 'manejar', es: 'manejar', zh: '开车（拉美）；操作；管理', pos: 'v', level: 'C1', tags: ['verb', 'travel'], ex: ['¿Sabés manejar?', '你会开车吗？'] },
    { id: 'agarrar', es: 'agarrar', zh: '抓住；（拉美）拿、搭乘', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Agarra un taxi, que es tarde.', '打个车吧，太晚了。'] },
    { id: 'boleto', es: 'boleto', zh: '票（拉美）', pos: 'n', g: 'm', level: 'C1', tags: ['travel'], ex: ['Compré el boleto de avión por internet.', '我在网上买了机票。'] },
    { id: 'colectivo', es: 'colectivo', zh: '公交车（阿根廷）；集体', pos: 'n', g: 'm', level: 'C1', tags: ['travel'], ex: ['Me tomo el colectivo en la esquina.', '我在拐角坐公交车。'] },
    { id: 'guagua', es: 'guagua', zh: '公交车（加勒比、加那利）；婴儿（安第斯）', pos: 'n', g: 'f', level: 'C1', tags: ['travel'], ex: ['La guagua pasa cada media hora.', '公交车每半小时一班。'] },
    { id: 'estacionar', es: 'estacionar', zh: '停车（拉美）', pos: 'v', level: 'C1', tags: ['verb', 'travel'], ex: ['No se puede estacionar aquí.', '这里不能停车。'] },
    { id: 'chevere', es: 'chévere', zh: '酷；棒（加勒比口语）', pos: 'adj', level: 'C1', tags: ['feel'], ex: ['¡Qué chévere tu camisa!', '你的衬衫真酷！'] },
    { id: 'guay', es: 'guay', zh: '酷；棒（西班牙口语）', pos: 'adj', level: 'C1', tags: ['feel'], ex: ['¡Qué guay! ¿Dónde lo has comprado?', '太酷了！你在哪儿买的？'] },
    { id: 'ahorita', es: 'ahorita', zh: '马上；待会儿（墨西哥等）', pos: 'adv', level: 'C1', tags: ['time'], ex: ['Ahorita te llamo.', '我待会儿给你打电话。'], note: '在墨西哥，ahorita 可能是“马上”，也可能是“过一会儿”——要看语境。' },
    { id: 'che', es: 'che', zh: '喂；伙计（阿根廷口语）', pos: 'interj', level: 'C1', tags: ['greet'], ex: ['Che, ¿vamos a tomar algo?', '喂，去喝一杯吗？'] },
    { id: 'orale', es: 'órale', zh: '好的；快点；哇（墨西哥口语）', pos: 'interj', level: 'C1', tags: ['greet'], ex: ['¡Órale, vámonos!', '好嘞，咱们走吧！'] },
    { id: 'pibe', es: 'pibe', zh: '小伙子（阿根廷口语）', pos: 'n', g: 'm', f: 'piba', level: 'C1', tags: ['people'], ex: ['Es un pibe muy simpático.', '他是个很好的小伙子。'] },
    { id: 'hispano', es: 'hispano', zh: '西班牙语世界的；拉美裔的', pos: 'adj', f: 'hispana', level: 'C1', tags: ['country'], ex: ['En Estados Unidos hay más de sesenta millones de hispanos.', '美国有六千多万拉美裔。'] },
    { id: 'variante', es: 'variante', zh: '变体；变种', pos: 'n', g: 'f', level: 'C1', tags: ['country'], ex: ['Es una variante regional.', '这是一种地区变体。'] },
    { id: 'regionalismo', es: 'regionalismo', zh: '地方用语', pos: 'n', g: 'm', level: 'C1', tags: ['country'], ex: ['«Guagua» es un regionalismo canario y caribeño.', '“guagua”是加那利和加勒比的地方用语。'] },
    { id: 'anglicismo', es: 'anglicismo', zh: '英语借词', pos: 'n', g: 'm', level: 'C1', tags: ['country'], ex: ['«Email» es un anglicismo muy extendido.', '“email”是一个很普遍的英语借词。'] },
  ],
  sentences: [
    { id: 's1', es: '¿Vos sos de Buenos Aires?', zh: '你是布宜诺斯艾利斯人吗？', g: ['c1-voseo'], distract: ['eres'] },
    { id: 's2', es: '¿Qué querés tomar?', zh: '你想喝点什么？', g: ['c1-voseo'], distract: ['quieres'] },
    { id: 's3', es: 'Vení, sentate acá.', zh: '来，坐这儿。', g: ['c1-voseo'] },
    { id: 's4', es: 'Vos tenés razón, che.', zh: '你说得对，伙计。', g: ['c1-voseo'] },
    { id: 's5', es: '¿Ustedes vienen a la fiesta?', zh: '你们来派对吗？', g: ['c1-voseo'] },
    { id: 's6', es: 'En Andalucía y en América se practica el seseo.', zh: '安达卢西亚和美洲普遍读 seseo。', g: ['c1-pronunciacion-variedades'] },
    { id: 's7', es: 'En el Caribe muchas veces no se pronuncia la ese final.', zh: '在加勒比，词尾的 s 常常不发音。', g: ['c1-pronunciacion-variedades'] },
    { id: 's8', es: 'Las dos pronunciaciones son correctas.', zh: '两种发音都是正确的。', g: ['c1-pronunciacion-variedades'] },
    { id: 's9', es: 'En México se dice «carro» y en Argentina, «auto».', zh: '在墨西哥说 carro，在阿根廷说 auto。', g: ['c1-lexico-variedades'] },
    { id: 's10', es: '¿Me prestas tu celular?', zh: '能借我用一下你的手机吗？', g: ['c1-lexico-variedades'] },
    { id: 's11', es: 'Ahorita vengo.', zh: '我待会儿就来。', g: ['c1-lexico-variedades'] },
    { id: 's12', es: '¡Qué chévere tu camisa!', zh: '你的衬衫真酷！', g: ['c1-lexico-variedades'] },
    { id: 's13', es: 'Mi lengua materna es el chino.', zh: '我的母语是中文。' },
    { id: 's14', es: 'En Paraguay se habla español y guaraní.', zh: '巴拉圭人说西班牙语和瓜拉尼语。' },
    { id: 's15', es: 'Me encanta el acento andaluz.', zh: '我很喜欢安达卢西亚口音。' },
    { id: 's16', es: 'La guagua pasa cada media hora.', zh: '公交车每半小时一班。', g: ['c1-lexico-variedades'] },
    { id: 's17', es: '¿Sabés manejar?', zh: '你会开车吗？', g: ['c1-voseo'] },
    { id: 's18', es: 'Las papas son originarias de los Andes.', zh: '土豆原产于安第斯山区。' },
    { id: 's19', es: 'Lo importante es entender todos los acentos.', zh: '重要的是听懂所有口音。', g: ['c1-pronunciacion-variedades'] },
    { id: 's20', es: 'Esto es para vos.', zh: '这是给你的。', g: ['c1-voseo'] },
    { id: 's21', es: 'Hoy comí con mis abuelos.', zh: '我今天和爷爷奶奶一起吃的饭。', g: ['c1-lexico-variedades'] },
    { id: 's22', es: 'Se crio en una familia bilingüe.', zh: '他在一个双语家庭长大。' },
    { id: 's23', es: 'No se puede estacionar aquí.', zh: '这里不能停车。' },
    { id: 's24', es: 'Es un país hispanohablante.', zh: '这是一个说西班牙语的国家。' },
    { id: 's25', es: 'Che, ¿vamos a tomar algo?', zh: '喂，去喝一杯吗？', g: ['c1-voseo'] },
  ],
  cloze: [
    { id: 'c1', text: '¿Vos ___ argentina? (ser)', answers: ['sos'], options: ['sos', 'eres', 'sois'], zh: '你是阿根廷人吗？', g: ['c1-voseo'] },
    { id: 'c2', text: '¿Vos ___ hermanos? (tener)', answers: ['tenés'], options: ['tenés', 'tienes', 'tiénes'], zh: '你有兄弟姐妹吗？', g: ['c1-voseo'] },
    { id: 'c3', text: '¿Qué ___ hacer el sábado? (vos, querer)', answers: ['querés'], options: ['querés', 'quieres', 'quierés'], zh: '你星期六想做什么？', g: ['c1-voseo'] },
    { id: 'c4', text: '¡___ acá, que te quiero mostrar algo! (vos, venir)', answers: ['Vení'], options: ['Vení', 'Ven', 'Venís'], zh: '过来，我想给你看个东西！', g: ['c1-voseo'] },
    { id: 'c5', text: 'Vos ___ llamás Lucía, ¿no?', answers: ['te'], options: ['te', 'vos', 'se'], zh: '你叫露西亚，对吧？', g: ['c1-voseo'] },
    { id: 'c6', text: 'En México, en lugar de «vosotros», se dice «___».', answers: ['ustedes'], options: ['ustedes', 'vos', 'tú'], zh: '在墨西哥，不说 vosotros，而说 ustedes。', g: ['c1-voseo'] },
    { id: 'c7', text: 'Pronunciar «caza» igual que «casa» se llama ___.', answers: ['seseo'], options: ['seseo', 'ceceo', 'yeísmo'], zh: '把 caza 和 casa 读得一样叫 seseo。', g: ['c1-pronunciacion-variedades'] },
    { id: 'c8', text: 'Pronunciar igual «pollo» y «poyo» se llama ___.', answers: ['yeísmo'], options: ['yeísmo', 'seseo', 'voseo'], zh: '把 pollo 和 poyo 读得一样叫 yeísmo。', g: ['c1-pronunciacion-variedades'] },
    { id: 'c9', text: 'El seseo vino a América con los emigrantes que salían de ___.', answers: ['Sevilla'], options: ['Sevilla', 'Madrid', 'Barcelona'], zh: 'seseo 随着从塞维利亚出发的移民来到了美洲。', g: ['c1-pronunciacion-variedades'] },
    { id: 'c10', text: 'En Argentina se dice «auto» y en España, «___».', answers: ['coche'], options: ['coche', 'carro', 'camión'], zh: '在阿根廷说 auto，在西班牙说 coche。', g: ['c1-lexico-variedades'] },
    { id: 'c11', text: 'En Colombia no se dice «zumo», sino «___».', answers: ['jugo'], options: ['jugo', 'batido', 'refresco'], zh: '在哥伦比亚不说 zumo，而说 jugo。', g: ['c1-lexico-variedades'] },
    { id: 'c12', text: 'En México es mejor decir «___ el autobús» en lugar de «coger».', answers: ['tomar'], options: ['tomar', 'agarrar de', 'subir de'], zh: '在墨西哥最好说 tomar el autobús，而不是 coger。', g: ['c1-lexico-variedades'] },
    { id: 'c13', text: 'En Canarias, el autobús se llama ___.', answers: ['guagua'], options: ['guagua', 'colectivo', 'camión'], zh: '在加那利群岛，公交车叫 guagua。', g: ['c1-lexico-variedades'] },
    { id: 'c14', text: 'En España se dice «ordenador»; en América, «___».', answers: ['computadora'], options: ['computadora', 'calculadora', 'celular'], zh: '西班牙说 ordenador，美洲说 computadora。', g: ['c1-lexico-variedades'] },
    { id: 'c15', text: '«___ vengo» significa «vengo enseguida» en México.', answers: ['Ahorita'], options: ['Ahorita', 'Ahorota', 'Agorita'], zh: '在墨西哥，“ahorita vengo”的意思是“我马上来”。', g: ['c1-lexico-variedades'] },
    { id: 'c16', text: 'Mi lengua ___ es el cantonés.', answers: ['materna'], options: ['materna', 'madre', 'nativa de'], zh: '我的母语是粤语。' },
    { id: 'c17', text: 'El catalán es lengua ___ en Cataluña.', answers: ['cooficial'], options: ['cooficial', 'extranjera', 'muerta'], zh: '加泰罗尼亚语是加泰罗尼亚的共同官方语言。' },
    { id: 'c18', text: 'En Paraguay, mucha gente es ___: habla español y guaraní.', answers: ['bilingüe'], options: ['bilingüe', 'bilingue', 'nativa'], zh: '在巴拉圭，很多人是双语者：说西班牙语和瓜拉尼语。' },
  ],
  conj: [
    { verbs: ['manejar', 'agarrar', 'estacionar'], tenses: ['pres', 'pret'], g: 'c1-lexico-variedades' },
  ],
  dialogues: [
    {
      id: 'c1-u07-d1',
      title: '布宜诺斯艾利斯的第一天 · Primer día en Buenos Aires',
      lines: [
        { who: 'Martín', es: '¡Hola, che! ¿Vos sos Hao, el chico de Madrid? Yo soy Martín, tu compañero de departamento.', zh: '嗨，伙计！你就是浩，从马德里来的那个吧？我是马丁，你的室友。' },
        { who: 'Hao', es: 'Sí, encantado. Perdona, ¿«departamento» es lo mismo que «piso»?', zh: '对，很高兴认识你。不好意思，“departamento”就是“piso”的意思吗？' },
        { who: 'Martín', es: 'Exacto. Acá decimos departamento. ¿Querés un mate? Vení, sentate.', zh: '没错。我们这儿说 departamento。你想喝马黛茶吗？来，坐。' },
        { who: 'Hao', es: 'Gracias. Oye, ¿cómo voy mañana a la universidad? ¿Cojo el autobús?', zh: '谢谢。哎，我明天怎么去大学？坐公交车吗？' },
        { who: 'Martín', es: '¡Ja, ja! Acá no digas «coger», que suena muy mal. Decí «tomar el colectivo». El 152 te deja en la puerta.', zh: '哈哈！在这儿可别说“coger”，听起来很粗。说“tomar el colectivo”。152 路就到门口。' },
        { who: 'Hao', es: 'Uy, qué vergüenza. Menos mal que me lo dices. En Madrid es lo más normal del mundo.', zh: '哎呀，真丢人。幸好你告诉我。在马德里这再正常不过了。' },
        { who: 'Martín', es: 'Tranqui, todos los españoles caen en eso. Y vos, ¿cómo decís «yo»? Nosotros decimos «sho».', zh: '别担心，西班牙人都会中招。那你怎么说“yo”？我们说“sho”。' },
        { who: 'Hao', es: 'Yo digo «yo», pero creo que en un mes voy a terminar hablando como vos.', zh: '我说“yo”，不过我觉得一个月以后我说话就会跟你一样了。' },
      ],
    },
  ],
  readings: [
    {
      id: 'c1-r13',
      level: 'C1',
      title: '¿Dónde se habla el mejor español?',
      titleZh: '哪里的西班牙语最标准？',
      topic: '语言',
      paras: [
        [
          ['Es una de las preguntas que más se repiten entre los estudiantes extranjeros: ¿qué español debo aprender, el de España o el de América? ¿Dónde se habla «mejor»?', '这是外国学生最常问的问题之一：我该学哪种西班牙语，西班牙的还是美洲的？哪里说得“更好”？'],
        ],
        [
          ['La respuesta de los lingüistas es clara: no existe un español mejor que otro. El español es una lengua pluricéntrica, con varias normas cultas igualmente válidas: la de Madrid, la de México, la de Bogotá o la de Buenos Aires.', '语言学家的回答很明确：没有哪种西班牙语比另一种更好。西班牙语是一门多中心语言，有好几种同样有效的规范标准：马德里的、墨西哥城的、波哥大的、布宜诺斯艾利斯的。'],
          ['De hecho, la Real Academia Española trabaja junto con más de veinte academias de América, Filipinas y Guinea Ecuatorial. Los diccionarios y gramáticas actuales recogen las variantes de todos los países, y ya no consideran «incorrecto» lo que es normal en una región.', '事实上，西班牙皇家学院与美洲、菲律宾和赤道几内亚的二十多家语言学院合作。如今的词典和语法书收录了所有国家的变体，不再把某个地区的正常说法视为“错误”。'],
        ],
        [
          ['Para el estudiante, lo más práctico es elegir una variedad como modelo, la que más le sirva por sus planes o sus contactos, y acostumbrarse a escuchar todas las demás. Al fin y al cabo, casi quinientos millones de personas se entienden perfectamente entre ellas, digan «coche», «carro» o «auto».', '对学习者来说，最实用的是选一种变体作为模仿对象——选对自己的计划或人际关系最有用的那一种——同时习惯听其他所有变体。毕竟，近五亿人彼此交流毫无障碍，不管他们说的是 coche、carro 还是 auto。'],
        ],
      ],
      gloss: { lingüistas: '语言学家', pluricéntrica: '多中心的', 'normas cultas': '标准规范', válidas: '有效的', recogen: '收录', acostumbrarse: '习惯', 'entre ellas': '彼此之间' },
      questions: [
        { type: 'mc', q: '语言学家怎么看“最好的西班牙语”？', options: ['马德里的最好', '墨西哥的最好', '没有哪种更好'], answer: 2 },
        { type: 'mc', q: '文章给学习者什么建议？', options: ['只学西班牙的', '选一种作模型，同时习惯听其他的', '每种都要会说'], answer: 1 },
        { type: 'tf', q: '西班牙皇家学院独自制定所有规则。', answer: false, explain: 'trabaja junto con más de veinte academias' },
      ],
    },
    {
      id: 'c1-r14',
      level: 'C1',
      title: 'Una palabra, tres países',
      titleZh: '一个词，三个国家',
      topic: '文化',
      paras: [
        [
          ['Lin aprendió español en Salamanca, así que cuando llegó a Ciudad de México para hacer prácticas, pensaba que no tendría ningún problema. Se equivocaba.', '林是在萨拉曼卡学的西班牙语，所以她到墨西哥城实习时，以为不会有任何问题。她错了。'],
          ['El primer día pidió un «zumo» en una cafetería y la camarera tardó un segundo en entenderla: «Ah, ¿un jugo?». Al salir, preguntó dónde podía coger el autobús, y dos chicos se echaron a reír.', '第一天，她在咖啡馆点了一杯“zumo”，女服务员愣了一下才明白：“哦，你是说 jugo？”出门时，她问在哪里可以“coger”公交车，两个男生笑出了声。'],
        ],
        [
          ['Con el tiempo, Lin fue construyendo su propio diccionario: el autobús era el «camión», el móvil, el «celular», y «ahorita» podía significar «ahora mismo» o «dentro de un rato», según quién lo dijera.', '慢慢地，林建立起了自己的小词典：公交车叫“camión”，手机叫“celular”，而“ahorita”既可能是“马上”，也可能是“过一会儿”，取决于是谁说的。'],
          ['Un año después la enviaron a Buenos Aires, y tuvo que empezar otra vez: el autobús era ahora el «colectivo», sus compañeros la trataban de «vos» y todos le ofrecían mate.', '一年后，她被派到布宜诺斯艾利斯，又得从头开始：公交车现在叫“colectivo”，同事们用“vos”称呼她，人人都请她喝马黛茶。'],
        ],
        [
          ['Hoy Lin trabaja como traductora y dice que esos «errores» fueron sus mejores clases. «No hablo el español de un país», explica. «Hablo un español que ha viajado».', '如今林是一名翻译。她说，那些“错误”是她上过的最好的课。“我说的不是某一个国家的西班牙语，”她解释道，“我说的是一种旅行过的西班牙语。”'],
        ],
      ],
      gloss: { prácticas: '实习', 'se equivocaba': '她错了', tardó: '花了（时间）', 'se echaron a reír': '笑了起来', 'dentro de un rato': '过一会儿', trataban: '称呼', mate: '马黛茶' },
      questions: [
        { type: 'mc', q: '林在墨西哥点“zumo”时发生了什么？', options: ['服务员不懂', '服务员愣了一下才明白', '服务员笑了'], answer: 1 },
        { type: 'mc', q: '在布宜诺斯艾利斯，公交车叫什么？', options: ['camión', 'guagua', 'colectivo'], answer: 2 },
        { type: 'tf', q: '林认为那些“错误”是她最好的课。', answer: true, explain: 'esos «errores» fueron sus mejores clases' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '你会选择学习哪一种西班牙语作为“模型”？为什么？写一篇短文，结合你的学习目标（去哪里留学、工作、旅行），并谈谈你对 voseo、seseo 或词汇差异的看法。', words: [150, 220], hints: ['Yo he elegido como modelo el español de…, porque…', 'Lo que más me sorprende de… es…', 'Aunque…, creo que lo importante es…', 'En definitiva, …'] }],
}
