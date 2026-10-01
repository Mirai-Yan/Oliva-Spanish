import type { Unit } from '../types'

export const u10: Unit = {
  id: 'b1-u10',
  level: 'B1',
  order: 10,
  title: '风俗习惯',
  titleEs: 'Costumbres',
  icon: '🎎',
  goals: ['用无人称 se 说“人们一般怎么做”', '用被动 se 和 ser + 过去分词 说“某物被……”', '熟练使用 gustar 类动词：apetecer, caer bien, interesar, costar…', '比较西班牙和中国的风俗，谈论文化差异'],
  grammar: [
    {
      id: 'b1-se-impersonal',
      title: '无人称 se：“人们……”',
      titleEs: 'La forma impersonal con se',
      level: 'B1',
      summary: 'se + 第三人称单数动词，表示泛指的“人们、大家”：En España se cena tarde. ¿Cómo se dice…? 动词永远用单数。',
      body: `当我们不关心 **谁** 做某事，只说“一般怎么做”时，用 **se + 第三人称单数**：

| 例句 | 意思 |
|---|---|
| *En España **se cena** muy tarde.* | 在西班牙，人们晚饭吃得很晚。 |
| *Aquí **se vive** muy bien.* | 这里生活得很舒服。 |
| *¿Cómo **se dice** «谢谢» en español?* | “谢谢”用西班牙语怎么说？ |
| *¿Por dónde **se va** a la estación?* | 去车站怎么走？ |
| *No **se puede** fumar aquí.* | 这里不能抽烟。 |

### 其他表示“泛指”的方法
- 第三人称复数：*Dicen que va a llover.*（听说要下雨。）
- 第二人称 tú（口语）：*En Madrid, si **sales** de noche, **ves** gente por todas partes.*
- *la gente* + 单数动词：*La gente **es** muy amable.*

### 注意
无人称 se 的动词 **永远是单数**：
*Se **habla** de muchas cosas.* —— 即使后面是复数（因为 *de* 后面的不是主语）`,
      examples: [
        ['En España se cena muy tarde.', '在西班牙，人们晚饭吃得很晚。'],
        ['¿Cómo se dice «gracias» en chino?', '“谢谢”用中文怎么说？'],
        ['Aquí se vive muy bien.', '这里生活得很舒服。'],
        ['¿Por dónde se va al museo?', '去博物馆怎么走？'],
        ['En los hospitales no se puede hacer ruido.', '在医院里不能大声喧哗。'],
      ],
      origin: `拉丁语有一套单词形式的被动语态：*amatur*「被爱」、*dicitur*「据说」。它在通俗拉丁语里消失了，人们就借用反身代词 **se** 来补位：*se dice*（字面：“它说它自己”）→“据说、人们说”。

中文用“人们说”“据说”，英语用 *one / people / they*，西班牙语则用一个小小的 **se** 解决。`,
      pitfalls: ['❌ *Se viven bien aquí.* ✅ *Se vive bien aquí.*', '❌ *¿Cómo se dicen «gracias»?* ✅ *¿Cómo se dice «gracias»?*', '❌ *Uno se puede fumar aquí.* ✅ *Se puede fumar aquí.*'],
    },
    {
      id: 'b1-se-pasiva',
      title: '被动：se venden pisos / fue construido por…',
      titleEs: 'La pasiva refleja y la pasiva con ser',
      level: 'B1',
      summary: '被动 se：se + 动词（和后面的名词保持单复数一致）：Se vende piso. Se venden pisos. ser + 过去分词 + por：La Alhambra fue construida en el siglo XIII.（多用于书面和历史）',
      body: `### 被动 se（口语和书面都很常用）
动词要和 **后面的名词** 保持一致：

| 单数 | 复数 |
|---|---|
| *Se **vende** piso.* | *Se **venden** pisos.* |
| *Se **alquila** habitación.* | *Se **alquilan** habitaciones.* |
| *Se **necesita** camarero.* | *Se **necesitan** camareros.* |
| *En Paraguay se **habla** guaraní.* | *En España se **hablan** cuatro lenguas oficiales.* |

### ser + 过去分词（+ por + 动作者）
多见于新闻、历史和正式语言，**过去分词要和主语性数一致**：
- *La Alhambra **fue construida** por los nazaríes.*
- *El Quijote **fue escrito** por Cervantes.*
- *Los ganadores **serán anunciados** mañana.*

### 怎么选？
| 想强调谁做的 → *ser + 过去分词 + por* | 不提谁做的 → *se* |
|---|---|
| *El puente fue diseñado **por** un arquitecto famoso.* | *El puente **se construyó** en 1890.* |

口语里最自然的往往是主动句：*Cervantes **escribió** el Quijote.*`,
      examples: [
        ['Se alquilan habitaciones para estudiantes.', '出租学生房间。'],
        ['En España se hablan cuatro lenguas oficiales.', '西班牙有四种官方语言。'],
        ['La Alhambra fue construida por los nazaríes.', '阿尔罕布拉宫是纳斯里德王朝建造的。'],
        ['El Quijote fue escrito por Cervantes.', '《堂吉诃德》是塞万提斯写的。'],
        ['El puente se construyó en 1890.', '这座桥建于 1890 年。'],
      ],
      tables: [{ verbs: ['construir', 'escribir', 'descubrir'], tense: 'pret' }],
      origin: `**ser + 过去分词** 的被动来自拉丁语的完成被动态：*amatus est*「他被爱了」。拉丁语里只有完成时这么说，到西班牙语里扩展到了所有时态。

西班牙语天生不太喜欢被动句——比起英语，西语更爱用主动句或 *se*。所以如果你写的西语里到处都是 *fue + 过去分词*，读起来就会有“翻译腔”。`,
      pitfalls: ['❌ *Se vende pisos.* ✅ *Se venden pisos.*（广告里常见这个错误）', '❌ *La casa fue construido.* ✅ *La casa fue construida.*：过去分词要和主语一致。', '❌ *El libro fue escribido.* ✅ *El libro fue escrito.*'],
    },
    {
      id: 'b1-verbos-gustar',
      title: 'gustar 类动词',
      titleEs: 'Verbos como gustar',
      level: 'B1',
      summary: '感受的人用间接宾语代词（me, te, le…），喜欢 / 关心的东西是主语，动词和它一致：Me interesan las culturas. Me cae bien tu hermano. Me cuesta levantarme.',
      body: `### 结构
**(A + 人) + 间接宾语代词 + 动词 + 主语**
*(A mí) **me** encanta**n** las fiestas.*　*(A Lucas) **le** duele la cabeza.*

### 常用 gustar 类动词
| 动词 | 意思 | 例句 |
|---|---|---|
| *apetecer* | 想（做 / 吃） | *¿Te **apetece** un café?* |
| *interesar* | 让人感兴趣 | *Me **interesan** mucho las culturas.* |
| *importar* | 在乎；介意 | *¿Te **importa** si abro la ventana?* |
| *caer bien / mal* | （对人）有好感 / 没好感 | *Tu hermano me **cae** muy bien.* |
| *costar* | 对……来说很难 | *Me **cuesta** levantarme temprano.* |
| *quedar bien / mal* | （衣服）合适 / 不合适 | *Esa chaqueta te **queda** genial.* |
| *faltar / sobrar* | 缺 / 剩 | *Nos **faltan** dos sillas.* |
| *dar igual / vergüenza / miedo* | 无所谓 / 难为情 / 害怕 | *Me **da** vergüenza bailar.* |

### 单数还是复数？
- 名词复数 → 动词复数：*Me interes**an** **los idiomas**.*
- 原形（一个或几个）→ 永远单数：*Me gust**a** **bailar y cantar**.*

### 强调和对比时加 a + 人
*A mí me encanta el flamenco, pero **a mi novia** no **le** gusta nada.*
*—Me apetece una cerveza. —**A mí también**. / **A mí no**.*`,
      examples: [
        ['¿Te apetece un café?', '你想来杯咖啡吗？'],
        ['Tu hermano me cae muy bien.', '我对你哥哥很有好感。'],
        ['Me cuesta mucho levantarme temprano.', '早起对我来说很难。'],
        ['¿Te importa si abro la ventana?', '你介意我开窗吗？'],
        ['A mí me encanta el flamenco, pero a mi novia no le gusta nada.', '我超爱弗拉明戈，可我女朋友一点也不喜欢。'],
      ],
      origin: `**gustar** 原本的意思是“品尝”（拉丁语 *gustare*），是个普通的及物动词：*gustar el vino* = 品酒。后来意思从“我尝它”变成了“它合我的口味”，结构也翻了过来：*el vino me gusta*。英语 *disgust*（厌恶，“不合口味”）同源。

**apetecer** 来自 *appetere*「渴望」，和英语 *appetite*（食欲）同源——所以 *¿Te apetece…?* 原本就是“你有胃口要……吗？”。`,
      pitfalls: ['❌ *Yo gusto el chocolate.* ✅ *Me gusta el chocolate.*', '❌ *Me gustan bailar y cantar.* ✅ *Me gusta bailar y cantar.*', '❌ *A mí me interesa mucho las noticias.* ✅ *A mí me interesan mucho las noticias.*', '❌ *Yo caigo bien a tu madre.* ✅ *Le caigo bien a tu madre.*'],
      latam: '*apetecer* 主要在西班牙用。拉美常说 *tener ganas de*；在哥伦比亚、委内瑞拉、秘鲁还会说 *¿Te provoca un café?*',
    },
  ],
  words: [
    { id: 'costumbre', es: 'costumbre', zh: '习俗；习惯', pos: 'n', g: 'f', level: 'B1', tags: ['people'], ex: ['Es una costumbre muy española.', '这是很西班牙的习俗。'], ety: '拉丁语 consuetudo「习惯」。英语 custom、costume（服装，原指“习惯的穿着”）同源。' },
    { id: 'tradicion', es: 'tradición', zh: '传统', pos: 'n', g: 'f', pl: 'tradiciones', level: 'B1', tags: ['people'], ex: ['Es una tradición familiar.', '这是家族传统。'], ety: '拉丁语 traditio「交出、传下去」。' },
    { id: 'siesta', es: 'siesta', zh: '午睡', pos: 'n', g: 'f', level: 'B1', tags: ['time'], ex: ['Los domingos duermo la siesta.', '我星期天睡午觉。'], ety: '拉丁语 sexta (hora)「第六个小时」：从日出算起的第六个小时，也就是中午。', emoji: '😴' },
    { id: 'sobremesa', es: 'sobremesa', zh: '饭后闲聊时间', pos: 'n', g: 'f', level: 'B1', tags: ['food'], ex: ['La sobremesa duró dos horas.', '饭后大家聊了两个小时。'], note: '吃完饭还坐在桌边聊天，是西班牙人很珍惜的时光。' },
    { id: 'puntualidad', es: 'puntualidad', zh: '守时', pos: 'n', g: 'f', level: 'B1', tags: ['people'], ex: ['En el trabajo se valora la puntualidad.', '工作中很看重守时。'] },
    { id: 'darse-la-mano', es: 'darse la mano', zh: '握手', pos: 'phr', level: 'B1', tags: ['greet'], ex: ['Los hombres suelen darse la mano.', '男士之间通常握手。'] },
    { id: 'tutear', es: 'tutear', zh: '用 tú 称呼', pos: 'v', level: 'B1', tags: ['verb', 'greet'], ex: ['¿Nos tuteamos?', '我们用“你”互称吧？'], latam: '西班牙用 tú 比拉美普遍得多；很多拉美国家对陌生人、长辈更常用 usted；阿根廷用 vos。' },
    { id: 'tratar-de-usted', es: 'tratar de usted', zh: '用“您”称呼', pos: 'phr', level: 'B1', tags: ['greet'], ex: ['A los clientes hay que tratarlos de usted.', '对客户要用“您”。'] },
    { id: 'cortesia', es: 'cortesía', zh: '礼貌', pos: 'n', g: 'f', level: 'B1', tags: ['people'], ex: ['Es una cuestión de cortesía.', '这是礼貌问题。'], ety: '来自 corte「宫廷」：在宫廷里该有的举止。英语 courtesy 同源。' },
    { id: 'educacion', es: 'educación', zh: '教育；教养', pos: 'n', g: 'f', level: 'B1', tags: ['school', 'people'], ex: ['Es de mala educación hablar con la boca llena.', '嘴里塞满东西说话很没教养。'], note: '注意：tener educación 常指“有教养、有礼貌”。' },
    { id: 'gesto', es: 'gesto', zh: '手势；举动', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['Fue un gesto muy bonito.', '这是个很暖心的举动。'] },
    { id: 'regatear', es: 'regatear', zh: '讨价还价', pos: 'v', level: 'B1', tags: ['verb', 'shop'], ex: ['En las tiendas españolas no se regatea.', '在西班牙的商店里不讲价。'] },
    { id: 'pagar-a-medias', es: 'pagar a medias', zh: 'AA 制；平摊', pos: 'phr', level: 'B1', tags: ['shop'], ex: ['¿Pagamos a medias?', '我们平摊吧？'], note: '朋友一起吃饭也常说 pagar a escote（每人付自己那份）。' },
    { id: 'apetecer', es: 'apetecer', zh: '想要（做 / 吃）', pos: 'v', level: 'B1', tags: ['verb', 'feel'], ex: ['¿Te apetece ir al cine?', '你想去看电影吗？'], note: '和 gustar 同结构；-cer → -zco。' },
    { id: 'caer-bien', es: 'caer bien', zh: '（某人）让人有好感', pos: 'phr', level: 'B1', tags: ['people'], ex: ['Me cae muy bien tu novio.', '我对你男朋友很有好感。'] },
    { id: 'caer-mal', es: 'caer mal', zh: '（某人）让人反感', pos: 'phr', level: 'B1', tags: ['people'], ex: ['No sé por qué, pero me cae mal.', '我也不知道为什么，就是对他没好感。'] },
    { id: 'interesar', es: 'interesar', zh: '使感兴趣', pos: 'v', level: 'B1', tags: ['verb', 'feel'], ex: ['Me interesa mucho la historia.', '我对历史很感兴趣。'] },
    { id: 'topico', es: 'tópico', zh: '老生常谈；刻板印象', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['Es un tópico que los españoles siempre llegan tarde.', '“西班牙人总迟到”是个刻板印象。'], en: '“假朋友”：tópico 常指“陈词滥调”，英语 topic（话题）是 tema。' },
    { id: 'estereotipo', es: 'estereotipo', zh: '刻板印象', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['Hay que romper los estereotipos.', '要打破刻板印象。'] },
    { id: 'cultura', es: 'cultura', zh: '文化', pos: 'n', g: 'f', level: 'B1', tags: ['people'], ex: ['Me encanta la cultura mexicana.', '我很喜欢墨西哥文化。'], ety: '拉丁语 cultura「耕种」：文化就是对心灵的“耕种”。' },
    { id: 'choque-cultural', es: 'choque cultural', zh: '文化冲击', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['Al principio sufrí un choque cultural.', '刚开始我经历了文化冲击。'] },
    { id: 'adaptarse', es: 'adaptarse', zh: '适应', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Me he adaptado bien a la vida aquí.', '我已经很好地适应了这里的生活。'] },
    { id: 'acostumbrarse', es: 'acostumbrarse', zh: '习惯（于）', pos: 'v', level: 'B1', tags: ['verb'], ex: ['No me acostumbro a cenar tan tarde.', '我还是不习惯这么晚吃晚饭。'], note: 'acostumbrarse a + 名词 / 原形。' },
    { id: 'integrarse', es: 'integrarse', zh: '融入', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Hablar el idioma ayuda a integrarse.', '会说当地语言有助于融入。'] },
    { id: 'acento', es: 'acento', zh: '口音；重音', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['Tiene acento andaluz.', '他有安达卢西亚口音。'] },
    { id: 'feria', es: 'feria', zh: '集市；节庆；博览会', pos: 'n', g: 'f', level: 'B1', tags: ['hobby'], ex: ['La Feria de Abril de Sevilla es famosísima.', '塞维利亚的四月节非常有名。'] },
    { id: 'procesion', es: 'procesión', zh: '（宗教）游行', pos: 'n', g: 'f', pl: 'procesiones', level: 'B1', tags: ['hobby'], ex: ['En Semana Santa hay procesiones por las calles.', '复活节圣周期间街上有宗教游行。'] },
    { id: 'disfraz', es: 'disfraz', zh: '化装服', pos: 'n', g: 'm', pl: 'disfraces', level: 'B1', tags: ['hobby', 'clothes'], ex: ['—¿De qué vas a ir disfrazado? —De pirata: ya tengo el disfraz.', '——你打算扮成什么？——海盗：服装我都准备好了。'] },
    { id: 'disfrazarse', es: 'disfrazarse', zh: '化装；乔装', pos: 'v', level: 'B1', tags: ['verb', 'hobby'], ex: ['En Carnaval todo el mundo se disfraza.', '狂欢节时大家都化装。'] },
    { id: 'fuegos-artificiales', es: 'fuegos artificiales', zh: '烟花', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['A medianoche hay fuegos artificiales.', '午夜有烟花。'], emoji: '🎆' },
    { id: 'desfile', es: 'desfile', zh: '游行；（时装）秀', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['El desfile empieza a las seis.', '游行六点开始。'] },
    { id: 'abanico', es: 'abanico', zh: '扇子', pos: 'n', g: 'm', level: 'B1', tags: ['clothes'], ex: ['En verano mi abuela siempre lleva abanico.', '夏天我奶奶总带着扇子。'] },
    { id: 'flamenco', es: 'flamenco', zh: '弗拉明戈（音乐、舞蹈）', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['El flamenco es Patrimonio de la Humanidad.', '弗拉明戈是人类非物质文化遗产。'], note: 'flamenco 也是“火烈鸟”和“佛兰德人”的意思。' },
    { id: 'cubiertos', es: 'cubiertos', zh: '餐具（刀叉勺）', pos: 'n', g: 'm', level: 'B1', tags: ['food'], ex: ['Los cubiertos están en el cajón.', '餐具在抽屉里。'] },
    { id: 'churro', es: 'churro', zh: '吉事果（油条状甜点）', pos: 'n', g: 'm', level: 'B1', tags: ['food'], ex: ['Desayunamos chocolate con churros.', '我们早餐吃了热巧克力配吉事果。'], note: '口语 ser un churro = 做得很糟糕。' },
    { id: 'turron', es: 'turrón', zh: '杏仁糖（圣诞甜点）', pos: 'n', g: 'm', pl: 'turrones', level: 'B1', tags: ['food'], ex: ['En Navidad siempre comemos turrón.', '圣诞节我们总吃杏仁糖。'] },
    { id: 'villancico', es: 'villancico', zh: '圣诞颂歌', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['Los niños cantan villancicos.', '孩子们在唱圣诞歌。'], ety: '来自 villano「村民」：原指乡间的民歌。' },
    { id: 'nochebuena', es: 'Nochebuena', zh: '平安夜', pos: 'n', g: 'f', level: 'B1', tags: ['time'], ex: ['En Nochebuena cenamos en familia.', '平安夜我们全家一起吃晚饭。'] },
    { id: 'santo', es: 'santo', zh: '圣徒；命名日', pos: 'n', g: 'm', f: 'santa', level: 'B1', tags: ['time'], ex: ['Hoy es mi santo.', '今天是我的命名日。'], note: '很多西班牙人除了生日，还会庆祝和自己同名圣徒的日子。' },
    { id: 'patrimonio', es: 'patrimonio', zh: '遗产；财产', pos: 'n', g: 'm', level: 'B1', tags: ['city'], ex: ['Es Patrimonio de la Humanidad.', '这是世界遗产。'] },
    { id: 'orgullo', es: 'orgullo', zh: '骄傲；自豪', pos: 'n', g: 'm', level: 'B1', tags: ['feel'], ex: ['Lo dice con mucho orgullo.', '他说这话时很自豪。'] },
    { id: 'respetuoso', es: 'respetuoso', zh: '尊重人的；有礼貌的', pos: 'adj', f: 'respetuosa', level: 'B1', tags: ['feel'], ex: ['Hay que ser respetuoso con otras culturas.', '要尊重其他文化。'] },
    { id: 'castellano', es: 'castellano', zh: '卡斯蒂利亚语（西班牙语）', pos: 'n', g: 'm', level: 'B1', tags: ['country'], ex: ['En España se dice castellano o español.', '在西班牙，既说 castellano 也说 español。'] },
    { id: 'catalan', es: 'catalán', zh: '加泰罗尼亚语；加泰罗尼亚人', pos: 'n', g: 'm', f: 'catalana', pl: 'catalanes', level: 'B1', tags: ['country'], ex: ['En Barcelona se habla catalán y castellano.', '巴塞罗那说加泰罗尼亚语和西班牙语。'] },
    { id: 'gallego', es: 'gallego', zh: '加利西亚语；加利西亚人', pos: 'n', g: 'm', f: 'gallega', level: 'B1', tags: ['country'], ex: ['El gallego se parece mucho al portugués.', '加利西亚语和葡萄牙语很像。'], latam: '在阿根廷等地，gallego 常被用来泛指所有西班牙人。' },
    { id: 'vasco', es: 'vasco', zh: '巴斯克语（euskera）；巴斯克人', pos: 'n', g: 'm', f: 'vasca', level: 'B1', tags: ['country'], ex: ['El vasco no se parece a ninguna otra lengua.', '巴斯克语和其他任何语言都不像。'], note: '巴斯克语不属于印欧语系，起源至今是个谜。' },
  ],
  sentences: [
    { id: 's1', es: 'En España se cena muy tarde.', zh: '在西班牙，人们晚饭吃得很晚。', g: ['b1-se-impersonal'], distract: ['cenan'] },
    { id: 's2', es: '¿Cómo se dice «gracias» en chino?', zh: '“谢谢”用中文怎么说？', g: ['b1-se-impersonal'] },
    { id: 's3', es: 'Aquí se vive muy bien.', zh: '这里生活得很舒服。', g: ['b1-se-impersonal'], distract: ['viven'] },
    { id: 's4', es: '¿Por dónde se va al museo?', zh: '去博物馆怎么走？', g: ['b1-se-impersonal'] },
    { id: 's5', es: 'En los hospitales no se puede hacer ruido.', zh: '在医院里不能大声喧哗。', g: ['b1-se-impersonal'] },
    { id: 's6', es: 'Se alquilan habitaciones para estudiantes.', zh: '出租学生房间。', g: ['b1-se-pasiva'], distract: ['alquila'] },
    { id: 's7', es: 'En España se hablan cuatro lenguas oficiales.', zh: '西班牙有四种官方语言。', g: ['b1-se-pasiva'] },
    { id: 's8', es: 'La Alhambra fue construida por los nazaríes.', zh: '阿尔罕布拉宫是纳斯里德王朝建造的。', g: ['b1-se-pasiva'], distract: ['construido'] },
    { id: 's9', es: 'El Quijote fue escrito por Cervantes.', zh: '《堂吉诃德》是塞万提斯写的。', g: ['b1-se-pasiva'] },
    { id: 's10', es: 'El puente se construyó en 1890.', zh: '这座桥建于 1890 年。', g: ['b1-se-pasiva'] },
    { id: 's11', es: '¿Te apetece un café?', zh: '你想来杯咖啡吗？', g: ['b1-verbos-gustar'] },
    { id: 's12', es: 'Tu hermano me cae muy bien.', zh: '我对你哥哥很有好感。', g: ['b1-verbos-gustar'] },
    { id: 's13', es: 'Me cuesta mucho levantarme temprano.', zh: '早起对我来说很难。', g: ['b1-verbos-gustar'] },
    { id: 's14', es: '¿Te importa si abro la ventana?', zh: '你介意我开窗吗？', g: ['b1-verbos-gustar'] },
    { id: 's15', es: 'Me interesan mucho otras culturas.', zh: '我对其他文化很感兴趣。', g: ['b1-verbos-gustar'], distract: ['interesa'] },
    { id: 's16', es: 'No me acostumbro a cenar tan tarde.', zh: '我还是不习惯这么晚吃晚饭。' },
    { id: 's17', es: 'En las tiendas españolas no se regatea.', zh: '在西班牙的商店里不讲价。', g: ['b1-se-impersonal'] },
    { id: 's18', es: 'La sobremesa duró dos horas.', zh: '饭后大家聊了两个小时。' },
    { id: 's19', es: 'Esa chaqueta te queda genial.', zh: '那件外套你穿着很好看。', g: ['b1-verbos-gustar'] },
    { id: 's20', es: 'Nos faltan dos sillas.', zh: '我们还缺两把椅子。', g: ['b1-verbos-gustar'] },
    { id: 's21', es: 'Se necesita camarero con experiencia.', zh: '招聘有经验的服务员。', g: ['b1-se-pasiva'] },
    { id: 's22', es: 'Al principio sufrí un choque cultural.', zh: '刚开始我经历了文化冲击。' },
    { id: 's23', es: 'Dicen que va a llover.', zh: '听说要下雨。', g: ['b1-se-impersonal'] },
    { id: 's24', es: 'Me da vergüenza bailar en público.', zh: '当众跳舞让我难为情。', g: ['b1-verbos-gustar'] },
    { id: 's25', es: 'Es de mala educación hablar con la boca llena.', zh: '嘴里塞满东西说话很没教养。' },
  ],
  cloze: [
    { id: 'c1', text: 'En España ___ come a las dos.', answers: ['se'], options: ['se', 'le', 'lo'], zh: '在西班牙，人们两点吃午饭。', g: ['b1-se-impersonal'] },
    { id: 'c2', text: '¿Cómo se ___ esto en español?', answers: ['dice'], options: ['dice', 'dicen', 'decimos'], zh: '这个用西班牙语怎么说？', g: ['b1-se-impersonal'] },
    { id: 'c3', text: 'En esta empresa se ___ muy bien.', answers: ['trabaja'], options: ['trabaja', 'trabajan', 'trabajamos'], zh: '在这家公司工作很舒心。', g: ['b1-se-impersonal'] },
    { id: 'c4', text: 'Se ___ pisos en el centro.', answers: ['venden'], options: ['venden', 'vende', 'vendes'], zh: '出售市中心的公寓。', g: ['b1-se-pasiva'] },
    { id: 'c5', text: 'Se ___ profesor de chino.', answers: ['busca'], options: ['busca', 'buscan', 'buscado'], zh: '招聘中文老师。', g: ['b1-se-pasiva'] },
    { id: 'c6', text: 'La catedral fue ___ en el siglo XV.', answers: ['construida'], options: ['construida', 'construido', 'construyó'], zh: '这座大教堂建于十五世纪。', g: ['b1-se-pasiva'] },
    { id: 'c7', text: 'Las cartas fueron ___ por el rey.', answers: ['escritas'], options: ['escritas', 'escrito', 'escribidas'], zh: '这些信是国王写的。', g: ['b1-se-pasiva'] },
    { id: 'c8', text: 'América ___ descubierta por los europeos en 1492.', answers: ['fue'], options: ['fue', 'era', 'estuvo'], zh: '1492 年欧洲人到达美洲。', g: ['b1-se-pasiva'] },
    { id: 'c9', text: '¿Te ___ ir al cine esta noche?', answers: ['apetece'], options: ['apetece', 'apeteces', 'apetecen'], zh: '你今晚想去看电影吗？', g: ['b1-verbos-gustar'] },
    { id: 'c10', text: 'A mis padres les ___ mucho los viajes.', answers: ['interesan'], options: ['interesan', 'interesa', 'interesamos'], zh: '我父母对旅行很感兴趣。', g: ['b1-verbos-gustar'] },
    { id: 'c11', text: 'Me ___ bailar y cantar.', answers: ['encanta'], options: ['encanta', 'encantan', 'encanto'], zh: '我很喜欢跳舞和唱歌。', g: ['b1-verbos-gustar'], explain: '主语是原形，动词用单数。' },
    { id: 'c12', text: 'Tus amigos me ___ muy bien.', answers: ['caen'], options: ['caen', 'cae', 'caigo'], zh: '我对你的朋友们很有好感。', g: ['b1-verbos-gustar'] },
    { id: 'c13', text: 'A Lucas ___ cuesta mucho hablar en público.', answers: ['le'], options: ['le', 'lo', 'se'], zh: '对卢卡斯来说，当众讲话很难。', g: ['b1-verbos-gustar'] },
    { id: 'c14', text: '—Me encanta el flamenco. —A mí ___.', answers: ['también'], options: ['también', 'tampoco', 'sí'], zh: '——我超爱弗拉明戈。——我也是。', g: ['b1-verbos-gustar'] },
    { id: 'c15', text: '—No me gusta el fútbol. —A mí ___.', answers: ['tampoco'], options: ['tampoco', 'también', 'no'], zh: '——我不喜欢足球。——我也不喜欢。', g: ['b1-verbos-gustar'] },
    { id: 'c16', text: 'No me ___ a cenar tan tarde.', answers: ['acostumbro'], hint: 'acostumbrarse', zh: '我不习惯这么晚吃晚饭。' },
    { id: 'c17', text: '¿Te ___ si fumo? (importar)', answers: ['importa'], hint: 'importar', zh: '你介意我抽烟吗？', g: ['b1-verbos-gustar'] },
    { id: 'c18', text: 'En Paraguay se ___ guaraní y español.', answers: ['hablan'], options: ['hablan', 'habla', 'hablado'], zh: '巴拉圭人说瓜拉尼语和西班牙语。', g: ['b1-se-pasiva'] },
  ],
  conj: [
    { verbs: ['construir', 'escribir', 'descubrir', 'pintar', 'fundar', 'inventar'], tenses: ['pret'], g: 'b1-se-pasiva' },
    { verbs: ['caer', 'parecer', 'apetecer', 'doler', 'costar'], tenses: ['pres'], g: 'b1-verbos-gustar' },
  ],
  dialogues: [
    {
      id: 'b1-u10-d1',
      title: '西班牙人家里做客 · Una cena en casa de Paula',
      lines: [
        { who: 'Mei', es: 'Paula, el sábado ceno con tu familia y estoy un poco nerviosa. ¿Qué se lleva cuando te invitan a cenar?', zh: '葆拉，星期六我要去你家吃晚饭，有点紧张。被邀请吃饭时一般带什么？' },
        { who: 'Paula', es: 'Tranquila, mi familia es muy sencilla. Normalmente se lleva una botella de vino o un postre.', zh: '别紧张，我家人很随和。一般带一瓶葡萄酒或者一份甜点。' },
        { who: 'Mei', es: '¿Y a qué hora se llega? En China llegamos un poco antes.', zh: '那几点到？在中国我们会早一点到。' },
        { who: 'Paula', es: '¡Aquí ni se te ocurra! Si dicen a las nueve, se llega a las nueve y cuarto más o menos.', zh: '在这儿可千万别早到！如果说九点，一般九点一刻左右到。' },
        { who: 'Mei', es: '¿Y cómo saludo a tus padres? ¿Les doy la mano?', zh: '那我怎么跟你父母打招呼？和他们握手吗？' },
        { who: 'Paula', es: 'Lo normal es dar dos besos. Pero si te da vergüenza, no pasa nada. Por cierto, a mi padre le encanta hablar de fútbol.', zh: '一般是亲两下脸颊。不过如果你不好意思，也没关系。对了，我爸超爱聊足球。' },
        { who: 'Mei', es: 'Uf, a mí el fútbol no me interesa nada…', zh: '唉，我对足球一点兴趣都没有……' },
        { who: 'Paula', es: 'No te preocupes: le caes bien a todo el mundo. Y después de cenar viene la sobremesa. ¡Prepárate para hablar hasta la una!', zh: '别担心：大家都喜欢你。吃完饭还有饭后闲聊时间。准备好聊到一点吧！' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r19',
      level: 'B1',
      title: 'Pequeña guía de costumbres españolas',
      titleZh: '西班牙习俗小指南',
      topic: '文化',
      paras: [
        [
          ['Saludos. Entre amigos y familiares se dan dos besos en la mejilla, primero en la derecha. En situaciones de trabajo se suele dar la mano.', '打招呼：朋友和家人之间亲两下脸颊，先右边。工作场合一般握手。'],
        ],
        [
          ['Horarios. En España se come entre las dos y las tres y se cena a partir de las nueve. Muchas tiendas pequeñas cierran a mediodía y vuelven a abrir a las cinco.', '作息：西班牙人两点到三点吃午饭，九点以后吃晚饭。很多小商店中午关门，五点再开门。'],
          ['Aunque mucha gente cree que todos los españoles duermen la siesta, en realidad es un tópico: entre semana, la mayoría no tiene tiempo.', '虽然很多人以为西班牙人都睡午觉，但其实这是个刻板印象：工作日大多数人根本没时间。'],
        ],
        [
          ['En el bar. Se pide en la barra y, en algunas ciudades como Granada, con cada bebida te ponen una tapa gratis. No es obligatorio dejar propina, pero se deja algo si el servicio ha sido bueno.', '在酒吧：在吧台点单。在格拉纳达等一些城市，每点一杯饮料都会免费送一份下酒小菜。小费不是必须的，但服务好的话大家会留一点。'],
          ['Y una última cosa: a los españoles les encanta hablar alto. ¡No se están peleando, solo están conversando!', '最后一点：西班牙人很爱大声说话。他们不是在吵架，只是在聊天！'],
        ],
      ],
      gloss: { mejilla: '脸颊', suele: '通常', 'a partir de': '从……开始', mayoría: '大多数', barra: '吧台', gratis: '免费', servicio: '服务', peleando: '吵架', conversando: '聊天' },
      questions: [
        { type: 'mc', q: '朋友之间打招呼，先亲哪边脸颊？', options: ['左边', '右边', '无所谓'], answer: 1 },
        { type: 'tf', q: '文章说所有西班牙人每天都睡午觉。', answer: false, explain: 'en realidad es un tópico' },
        { type: 'mc', q: '在格拉纳达，点饮料时会怎样？', options: ['必须给小费', '免费送一份下酒小菜', '要提前预订'], answer: 1 },
      ],
    },
    {
      id: 'b1-r20',
      level: 'B1',
      title: 'La Alhambra, un palacio con historia',
      titleZh: '阿尔罕布拉宫：一座有故事的宫殿',
      topic: '历史',
      paras: [
        [
          ['La Alhambra, en Granada, es uno de los monumentos más visitados de España. Fue construida principalmente en los siglos XIII y XIV por la dinastía nazarí, la última dinastía musulmana de la península.', '格拉纳达的阿尔罕布拉宫是西班牙游客最多的古迹之一。它主要建于十三、十四世纪，由纳斯里德王朝建造——那是伊比利亚半岛上最后一个穆斯林王朝。'],
        ],
        [
          ['Su nombre viene del árabe y significa «la roja», probablemente por el color de sus muros. En sus paredes se pueden leer poemas escritos en árabe.', '它的名字来自阿拉伯语，意思是“红色的（城堡）”，大概是因为城墙的颜色。墙上还能读到用阿拉伯文写的诗。'],
          ['En 1492 la ciudad fue conquistada por los Reyes Católicos. Años después, Carlos V mandó construir un palacio renacentista dentro del recinto.', '1492 年，这座城市被天主教双王攻占。多年后，卡洛斯五世下令在宫殿群内建造了一座文艺复兴风格的宫殿。'],
        ],
        [
          ['Durante siglos, la Alhambra estuvo casi abandonada. En el siglo XIX, el escritor estadounidense Washington Irving vivió allí y escribió sus famosos «Cuentos de la Alhambra», que la hicieron famosa en todo el mundo.', '几个世纪里，阿尔罕布拉宫几乎被废弃。十九世纪，美国作家华盛顿·欧文在那里住过，写下了著名的《阿尔罕布拉的故事》，让它闻名世界。'],
          ['En 1984 fue declarada Patrimonio de la Humanidad. Hoy se recomienda comprar las entradas con meses de antelación.', '1984 年，它被列为世界遗产。如今建议提前几个月买票。'],
        ],
      ],
      gloss: { principalmente: '主要地', dinastía: '王朝', musulmana: '穆斯林的', península: '半岛', muros: '城墙', conquistada: '被攻占', renacentista: '文艺复兴的', recinto: '园区', abandonada: '被遗弃的', antelación: '提前' },
      questions: [
        { type: 'mc', q: '“Alhambra”在阿拉伯语里是什么意思？', options: ['红色的', '美丽的', '宫殿'], answer: 0 },
        { type: 'mc', q: '谁让阿尔罕布拉宫闻名世界？', options: ['卡洛斯五世', '华盛顿·欧文', '天主教双王'], answer: 1 },
        { type: 'tf', q: '阿尔罕布拉宫在 1492 年被列为世界遗产。', answer: false, explain: 'En 1984 fue declarada Patrimonio de la Humanidad.' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '给一个要来中国的西班牙朋友写一份“中国习俗小指南”：用无人称 se 介绍吃饭、打招呼、送礼等习惯，用 gustar 类动词说说中国人喜欢什么、你自己对西班牙的什么习俗还不习惯。', words: [90, 160], hints: ['En China se… / No se suele…', 'Cuando te invitan a comer, se…', 'A los chinos nos encanta…', 'A mí todavía me cuesta…'] }],
}
