import type { Unit } from '../types'

export const u07: Unit = {
  id: 'a1-u07',
  level: 'A1',
  order: 7,
  title: '去购物',
  titleEs: 'De compras',
  icon: '🛍️',
  goals: ['用“这个、那个”指东西', '描述衣服的颜色和尺码', '说出大数字和价格', '在商店里问价、试穿、付款'],
  grammar: [
    {
      id: 'a1-demostrativos',
      title: '指示词：este, ese, aquel',
      titleEs: 'Los demostrativos',
      level: 'A1',
      summary: '离我近用 este，离你近或稍远用 ese，离两人都远用 aquel；都要和名词性数一致。',
      body: `西语的“这 / 那”分 **三个距离**：

| 距离 | 阳性单数 | 阴性单数 | 阳性复数 | 阴性复数 |
|---|---|---|---|---|
| 这（离我近） | **este** | **esta** | **estos** | **estas** |
| 那（离你近 / 不太远） | **ese** | **esa** | **esos** | **esas** |
| 那（离我们都远） | **aquel** | **aquella** | **aquellos** | **aquellas** |

- 放在名词前：*esta camiseta*（这件T恤）、*esos zapatos*（那双鞋）
- 也可以单独用，代替名词：*¿Te gusta esta? — No, prefiero **esa**.*（你喜欢这件吗？——不，我更喜欢那件。）

### 中性：esto, eso, aquello
不知道是什么东西，或者指一件事时，用中性形式（没有复数）：
- *¿Qué es **esto**?*（这是什么？）
- ***Eso** es muy caro.*（那个太贵了。）

### 和地点副词对应
*este* ↔ **aquí**（这里）· *ese* ↔ **ahí**（那里，离你近）· *aquel* ↔ **allí**（那边，远）`,
      examples: [
        ['¿Cuánto cuesta esta camiseta?', '这件T恤多少钱？'],
        ['Me gustan esos zapatos.', '我喜欢那双鞋。'],
        ['Aquella tienda es muy barata.', '那边那家店很便宜。'],
        ['¿Qué es esto?', '这是什么？'],
        ['No quiero esta, quiero esa.', '我不要这件，我要那件。'],
      ],
      origin: `西语的三个指示词来自三个不同的拉丁语词：
- **este** ← *iste*（在拉丁语里原本是“你那边的那个”）
- **ese** ← *ipse*（“他本人，正是那个”）
- **aquel** ← *eccu ille*（“瞧，那个”），*eccu* 是加强语气的“瞧”

拉丁语原本的“这个” *hic* 在西语里几乎消失了，只留在 *aquí*（eccu hic，“瞧，这里”）等词里。`,
      pitfalls: ['性数不一致：❌ *este camiseta* ✅ *esta camiseta*；❌ *estes zapatos* ✅ *estos zapatos*。', '把 *esto*（中性）用在名词前：❌ *esto libro* ✅ *este libro*。'],
    },
    {
      id: 'a1-colores',
      title: '颜色和衣服',
      titleEs: 'Los colores y la ropa',
      level: 'A1',
      summary: '颜色是形容词，放在名词后，大部分要和名词性数一致；rosa、naranja 等通常不变。',
      body: `| 颜色 | 阳性 | 阴性 | 复数 |
|---|---|---|---|
| 红 | **rojo** | roja | rojos / rojas |
| 黄 | **amarillo** | amarilla | amarillos / amarillas |
| 白 | **blanco** | blanca | blancos / blancas |
| 黑 | **negro** | negra | negros / negras |
| 紫 | **morado** | morada | morados / moradas |
| 绿 | **verde** | verde | verdes |
| 蓝 | **azul** | azul | azules |
| 灰 | **gris** | gris | grises |
| 棕 | **marrón** | marrón | marrones |
| 粉 | **rosa** | rosa | rosa（常不变） |
| 橙 | **naranja** | naranja | naranja（常不变） |

### 用法
- 放在名词 **后面**：*una camisa blanca*（一件白衬衫）、*unos pantalones negros*（一条黑裤子）
- 问颜色：*¿De qué color es? — Es azul.*（是什么颜色？——蓝色。）
- *rosa、naranja* 原本是花和水果的名字，作颜色时通常不变复数：*unos calcetines rosa*

### 衣服的尺码
*¿Qué talla usa?*（您穿什么尺码？）— *La M / la 38.*
鞋码说 **número**：*¿Qué número tiene? — El 40.*

> 注意：裤子 *pantalones*、短裤 *pantalones cortos* 常用复数，一条裤子也说 *unos pantalones*。`,
      examples: [
        ['Busco una camiseta blanca.', '我在找一件白T恤。'],
        ['Tengo unos zapatos negros.', '我有一双黑鞋。'],
        ['¿De qué color es tu abrigo?', '你的大衣是什么颜色？'],
        ['Me gusta el vestido rojo.', '我喜欢那条红裙子。'],
        ['Los pantalones grises son más baratos.', '灰色的裤子更便宜。'],
      ],
      origin: `颜色词是西语历史的缩影：
- **rojo** ← 拉丁语 *russeus*（红色的）；**blanco** ← 日耳曼语 *blank*（发亮的）——取代了拉丁语 *albus*（只留在 *álbum* 里）
- **azul** ← 阿拉伯语 *lāzaward* ← 波斯语，指“青金石”。阿拉伯语进入西语时，*l-* 被当成冠词去掉了
- **naranja** ← 阿拉伯语 *nāranj*，颜色名直接用了水果名
- **marrón** ← 法语 *marron*（栗子）；**morado** ← *mora*（桑葚）
- **amarillo** ← 晚期拉丁语 *amarellus*（有点苦的、发黄的）`,
      pitfalls: ['颜色放在名词前：❌ *una blanca camisa* ✅ *una camisa blanca*。', '颜色忘了配合：❌ *una falda negro* ✅ *una falda negra*。'],
    },
    {
      id: 'a1-numeros-grandes',
      title: '大数字与价格',
      titleEs: 'Los números a partir de 100',
      level: 'A1',
      summary: '100 = cien，101 = ciento uno；200–900 要和名词阴阳性一致；1000 = mil，100万 = un millón de。',
      body: `| 数字 | 西语 |
|---|---|
| 100 | **cien** |
| 101 | **ciento** uno |
| 200 | doscientos / doscient**as** |
| 300 | trescientos |
| 400 | cuatrocientos |
| 500 | **quinientos** |
| 600 | seiscientos |
| 700 | **setecientos** |
| 800 | ochocientos |
| 900 | **novecientos** |
| 1000 | **mil** |
| 2000 | dos mil |
| 1 000 000 | **un millón** |

### 规律
- 正好 100 说 **cien**，101–199 用 **ciento**：*ciento cincuenta*（150）
- 200–900 要和名词 **阴阳性一致**：*trescientos euros*、*trescientas personas*
- **mil** 不变复数：*dos mil, diez mil*；“一千”直接说 *mil*，不说 *un mil*
- **millón** 是名词，后面接 **de**：*un millón **de** habitantes*，*dos millones de euros*
- 不规则的三个：*quinientos*（不是 ❌ *cincocientos*）、*setecientos*、*novecientos*

### 价格
*¿Cuánto cuesta? — Cuesta veinte euros con cincuenta (céntimos).*（20.50 欧元）
西语里小数点和千位分隔符与中文相反：**1.500** 是一千五百，**2,5** 是二点五（现在 RAE 也接受用空格分千位：1 500）。`,
      examples: [
        ['El abrigo cuesta ciento veinte euros.', '这件大衣一百二十欧。'],
        ['En mi pueblo hay quinientas personas.', '我们村有五百个人。'],
        ['El billete cuesta mil doscientos yuanes.', '机票一千二百元。'],
        ['Madrid tiene más de tres millones de habitantes.', '马德里有三百多万居民。'],
      ],
      origin: `- **cien / ciento** ← 拉丁语 *centum*；**mil** ← *mille*（英语 *millennium* 同源）
- **quinientos** ← 拉丁语 *quingentos*：保留了拉丁语本来的形式，所以和 *cinco* 长得不一样；*setecientos、novecientos* 也是从 *siete、nueve* 变来的不规则形式
- **millón** 是比较晚的词，来自意大利语 *milione*（“大的一千”），中世纪意大利银行家常用`,
      pitfalls: ['❌ *cincocientos* ✅ *quinientos*；❌ *sietecientos* ✅ *setecientos*；❌ *nuevecientos* ✅ *novecientos*。', '❌ *un mil* ✅ *mil*；❌ *dos miles* ✅ *dos mil*。', '❌ *un millón habitantes* ✅ *un millón de habitantes*。'],
    },
    {
      id: 'a1-compras',
      title: '在商店',
      titleEs: 'En la tienda',
      level: 'A1',
      summary: '¿Puedo probármelo? ¿Tienen otra talla? Me lo llevo. ¿Con tarjeta o en efectivo?',
      body: `| 顾客 | 店员 |
|---|---|
| *Hola, busco una chaqueta.* 你好，我想找一件夹克。 | *¿De qué color?* 什么颜色的？ |
| *¿Tienen esta camiseta en azul?* 这件T恤有蓝色的吗？ | *Sí, aquí tiene.* 有，给您。 |
| *¿Puedo probármela?* 我可以试一下吗？ | *Claro, los probadores están al fondo.* 当然，试衣间在里面。 |
| *Me queda pequeña. ¿Tienen una talla más grande?* 有点小，有大一号的吗？ | *Sí, la L.* 有，L 码。 |
| *¿Cuánto cuesta?* 多少钱？ | *Treinta y cinco euros.* 三十五欧。 |
| *Me la llevo.* 我买了。 | *¿Con tarjeta o en efectivo?* 刷卡还是现金？ |

### 几个实用结构（先当固定说法记）
- **me queda bien / grande / pequeño**：（这件衣服）我穿着合适 / 大 / 小
- **me lo llevo / me la llevo**：我买这个（lo / la 代替刚才说的衣服，A2 会细讲）
- **barato / caro**：便宜 / 贵；**rebajas**：打折季`,
      examples: [
        ['Busco unos zapatos para correr.', '我想找一双跑步鞋。'],
        ['¿Tienen esta falda en la talla 38?', '这条裙子有 38 码的吗？'],
        ['Me queda un poco grande.', '我穿有点大。'],
        ['Es muy caro. ¿Tienen algo más barato?', '太贵了。有便宜点的吗？'],
        ['Me lo llevo.', '我买了。'],
      ],
      origin: `**rebajas**（打折）来自动词 *rebajar*（降低）＝ *re-* + *bajar*（降下），词根就是 *bajo*（低的）。西班牙每年 1 月和 7 月有全国性的打折季。

**efectivo**（现金）原意是“实际的、有效的”，*pagar en efectivo* 就是“用实打实的钱付款”。`,
      pitfalls: ['“我穿着小”说成 ❌ *Es pequeño para mí* 不算错，但更地道的是 ✅ *Me queda pequeño*。'],
    },
  ],
  words: [
    { id: 'ropa', es: 'ropa', zh: '衣服', pos: 'n', g: 'f', level: 'A1', tags: ['clothes'], ex: ['Compro ropa en las rebajas.', '我在打折季买衣服。'], ety: '来自日耳曼语 *raupa「战利品」，后来指“衣物”。英语 robe 同源。', note: '集合名词，一般用单数。', emoji: '👚' },
    { id: 'camiseta', es: 'camiseta', zh: 'T恤', pos: 'n', g: 'f', level: 'A1', tags: ['clothes'], ex: ['Esta camiseta es muy bonita.', '这件T恤很好看。'], ety: 'camisa「衬衫」+ 指小后缀 -eta。', emoji: '👕' },
    { id: 'camisa', es: 'camisa', zh: '衬衫', pos: 'n', g: 'f', level: 'A1', tags: ['clothes'], ex: ['Una camisa blanca para el trabajo.', '一件上班穿的白衬衫。'], ety: '晚期拉丁语 camisia，可能源自凯尔特语。英语 chemise 同源。', emoji: '👔' },
    { id: 'pantalones', es: 'pantalones', zh: '裤子', pos: 'n', g: 'm', level: 'A1', tags: ['clothes'], ex: ['Necesito unos pantalones negros.', '我需要一条黑裤子。'], ety: '来自意大利即兴喜剧中的人物 Pantalone，他总穿着长裤。英语 pants 同源。', note: '一般用复数：unos pantalones = 一条裤子。', emoji: '👖' },
    { id: 'falda', es: 'falda', zh: '裙子（半身裙）', pos: 'n', g: 'f', level: 'A1', tags: ['clothes'], ex: ['Me gusta esa falda roja.', '我喜欢那条红裙子。'], ety: '来自日耳曼语 *falda「褶皱」。', emoji: '👗' },
    { id: 'vestido', es: 'vestido', zh: '连衣裙', pos: 'n', g: 'm', level: 'A1', tags: ['clothes'], ex: ['Un vestido para la boda.', '一条婚礼上穿的连衣裙。'], ety: '来自 vestir「穿衣」< 拉丁语 vestire。英语 vest 同源。', emoji: '👗' },
    { id: 'zapato', es: 'zapato', zh: '鞋', pos: 'n', g: 'm', level: 'A1', tags: ['clothes'], ex: ['Estos zapatos son cómodos.', '这双鞋很舒服。'], ety: '来源不确定，可能来自土耳其语或波斯语。', emoji: '👞' },
    { id: 'zapatillas', es: 'zapatillas', zh: '运动鞋；拖鞋', pos: 'n', g: 'f', level: 'A1', tags: ['clothes'], ex: ['Unas zapatillas para correr.', '一双跑鞋。'], ety: 'zapato「鞋」+ 指小后缀 -illa。', latam: '拉美运动鞋多说 tenis 或 zapatos deportivos。', emoji: '👟' },
    { id: 'abrigo', es: 'abrigo', zh: '大衣', pos: 'n', g: 'm', level: 'A1', tags: ['clothes', 'weather'], ex: ['Hace frío: lleva el abrigo.', '天冷，穿上大衣。'], ety: '来自 abrigar「遮蔽，保暖」< 拉丁语 apricare「晒太阳取暖」。', emoji: '🧥' },
    { id: 'chaqueta', es: 'chaqueta', zh: '夹克；外套', pos: 'n', g: 'f', level: 'A1', tags: ['clothes'], ex: ['Esta chaqueta es de cuero.', '这件夹克是皮的。'], ety: '来自法语 jaquette。英语 jacket 同源。', emoji: '🧥' },
    { id: 'jersey', es: 'jersey', zh: '毛衣', pos: 'n', g: 'm', pl: 'jerséis', level: 'A1', tags: ['clothes'], ex: ['Un jersey de lana.', '一件羊毛衫。'], ety: '来自英国的泽西岛（Jersey），那里以出产毛衣闻名。', latam: '拉美说 suéter。' },
    { id: 'bolso', es: 'bolso', zh: '包；手提包', pos: 'n', g: 'm', level: 'A1', tags: ['clothes'], ex: ['Mi bolso es negro.', '我的包是黑色的。'], ety: '来自拉丁语 bursa「皮袋」。英语 purse 同源。', latam: '拉美很多地方说 bolsa 或 cartera。', emoji: '👜' },
    { id: 'talla', es: 'talla', zh: '尺码；身高', pos: 'n', g: 'f', level: 'A1', tags: ['clothes', 'shop'], ex: ['¿Qué talla usa?', '您穿什么尺码？'], ety: '来自 tallar「雕刻，裁切」。' },
    { id: 'precio', es: 'precio', zh: '价格', pos: 'n', g: 'm', level: 'A1', tags: ['shop'], ex: ['El precio es muy bueno.', '价格很不错。'], ety: '拉丁语 pretium。英语 price、precious 同源。', emoji: '🏷️' },
    { id: 'euro', es: 'euro', zh: '欧元', pos: 'n', g: 'm', level: 'A1', tags: ['shop', 'number'], ex: ['Cuesta diez euros.', '十欧元。'], emoji: '💶' },
    { id: 'tarjeta', es: 'tarjeta', zh: '卡；银行卡', pos: 'n', g: 'f', level: 'A1', tags: ['shop'], ex: ['¿Puedo pagar con tarjeta?', '我可以刷卡吗？'], ety: '来自法语 targette「小盾牌」。', emoji: '💳' },
    { id: 'efectivo', es: 'efectivo', zh: '现金', pos: 'n', g: 'm', level: 'A1', tags: ['shop'], ex: ['Pago en efectivo.', '我付现金。'], ety: '拉丁语 effectivus「有效的」。' },
    { id: 'barato', es: 'barato', f: 'barata', zh: '便宜的', pos: 'adj', level: 'A1', tags: ['shop', 'adj'], ex: ['Esta tienda es muy barata.', '这家店很便宜。'], ety: '来自 baratar「做买卖」，词源不完全确定。' },
    { id: 'caro', es: 'caro', f: 'cara', zh: '贵的', pos: 'adj', level: 'A1', tags: ['shop', 'adj'], ex: ['El jamón es caro.', '火腿很贵。'], ety: '拉丁语 carus「昂贵的；亲爱的」。现在信件开头的 querido 以前也说 caro。' },
    { id: 'rebajas', es: 'rebajas', zh: '打折季；降价', pos: 'n', g: 'f', level: 'A1', tags: ['shop'], ex: ['En enero hay rebajas.', '一月有打折季。'], ety: 're- + bajar「降低」。' },
    { id: 'rojo', es: 'rojo', f: 'roja', zh: '红色的', pos: 'adj', level: 'A1', tags: ['color'], ex: ['Un vestido rojo.', '一条红裙子。'], ety: '拉丁语 russeus「红色的」。', emoji: '🔴' },
    { id: 'amarillo', es: 'amarillo', f: 'amarilla', zh: '黄色的', pos: 'adj', level: 'A1', tags: ['color'], ex: ['Los taxis de Nueva York son amarillos.', '纽约的出租车是黄色的。'], ety: '晚期拉丁语 amarellus「略苦的；发黄的」。', emoji: '🟡' },
    { id: 'blanco', es: 'blanco', f: 'blanca', zh: '白色的', pos: 'adj', level: 'A1', tags: ['color'], ex: ['Una camisa blanca.', '一件白衬衫。'], ety: '日耳曼语 *blank「发亮的」。英语 blank 同源。', emoji: '⚪' },
    { id: 'negro', es: 'negro', f: 'negra', zh: '黑色的', pos: 'adj', level: 'A1', tags: ['color'], ex: ['Mi gato es negro.', '我的猫是黑色的。'], ety: '拉丁语 nigrum。', emoji: '⚫' },
    { id: 'verde', es: 'verde', zh: '绿色的', pos: 'adj', level: 'A1', tags: ['color'], ex: ['Me gusta el té verde.', '我喜欢绿茶。'], ety: '拉丁语 viridis。', emoji: '🟢' },
    { id: 'azul', es: 'azul', pl: 'azules', zh: '蓝色的', pos: 'adj', level: 'A1', tags: ['color'], ex: ['El cielo es azul.', '天空是蓝色的。'], ety: '阿拉伯语 lāzaward「青金石」< 波斯语。l- 被误当成冠词去掉了。', emoji: '🔵' },
    { id: 'gris', es: 'gris', pl: 'grises', zh: '灰色的', pos: 'adj', level: 'A1', tags: ['color'], ex: ['Hoy el cielo está gris.', '今天天空灰蒙蒙的。'], ety: '来自日耳曼语 *grīs。英语 grey 同源。', emoji: '🩶' },
    { id: 'marron', es: 'marrón', pl: 'marrones', zh: '棕色的', pos: 'adj', level: 'A1', tags: ['color'], ex: ['Unos zapatos marrones.', '一双棕色的鞋。'], ety: '来自法语 marron「栗子」。', latam: '很多拉美国家说 café。', emoji: '🟤' },
    { id: 'rosa', es: 'rosa', zh: '粉色的；玫瑰', pos: 'adj', level: 'A1', tags: ['color'], ex: ['Una camiseta rosa.', '一件粉色T恤。'], ety: '拉丁语 rosa「玫瑰」。', emoji: '🩷' },
    { id: 'morado', es: 'morado', f: 'morada', zh: '紫色的', pos: 'adj', level: 'A1', tags: ['color'], ex: ['Una falda morada.', '一条紫色的裙子。'], ety: '来自 mora「桑葚，黑莓」：像桑葚的颜色。', emoji: '🟣' },
    { id: 'color', es: 'color', zh: '颜色', pos: 'n', g: 'm', pl: 'colores', level: 'A1', tags: ['color'], ex: ['¿De qué color es?', '是什么颜色？'], ety: '拉丁语 color。', note: '阳性：el color。', emoji: '🎨' },
    { id: 'este', es: 'este', f: 'esta', zh: '这个', pos: 'det', level: 'A1', tags: ['func'], ex: ['Este jersey es bonito.', '这件毛衣很好看。'], ety: '拉丁语 iste。', note: '复数：estos, estas；中性：esto。' },
    { id: 'ese', es: 'ese', f: 'esa', zh: '那个（较近）', pos: 'det', level: 'A1', tags: ['func'], ex: ['¿Cuánto cuesta ese bolso?', '那个包多少钱？'], ety: '拉丁语 ipse「正是那个」。', note: '复数：esos, esas；中性：eso。' },
    { id: 'aquel', es: 'aquel', f: 'aquella', zh: '那个（较远）', pos: 'det', level: 'A1', tags: ['func'], ex: ['Aquella tienda es nueva.', '那边那家店是新开的。'], ety: '拉丁语 eccu ille「瞧，那个」。', note: '复数：aquellos, aquellas；中性：aquello。' },
    { id: 'mil', es: 'mil', zh: '一千', pos: 'num', level: 'A1', tags: ['number'], ex: ['Cuesta mil euros.', '一千欧元。'], ety: '拉丁语 mille。' },
    { id: 'millon', es: 'millón', zh: '一百万', pos: 'n', g: 'm', pl: 'millones', level: 'A1', tags: ['number'], ex: ['Un millón de personas.', '一百万人。'], ety: '来自意大利语 milione「大的一千」。' },
    { id: 'buscar', es: 'buscar', zh: '寻找', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Busco una camisa azul.', '我在找一件蓝衬衫。'], ety: '来源不确定。', note: '过去时第一人称：busqué。' },
    { id: 'llevar', es: 'llevar', zh: '带；穿着；买下', pos: 'v', level: 'A1', tags: ['verb', 'clothes'], ex: ['Hoy llevo un vestido verde.', '今天我穿了一条绿裙子。'], ety: '拉丁语 levare「举起」。', note: 'Me lo llevo = 我买了（我带走）。' },
    { id: 'comprar', es: 'comprar', zh: '买', pos: 'v', level: 'A1', tags: ['verb', 'shop'], ex: ['Compro fruta en el mercado.', '我在市场买水果。'], ety: '拉丁语 comparare「准备，获得」。' },
    { id: 'probarse', es: 'probarse', zh: '试穿', pos: 'v', level: 'A1', tags: ['verb', 'clothes'], ex: ['¿Puedo probarme estos pantalones?', '我可以试一下这条裤子吗？'], ety: '拉丁语 probare「检验」。英语 prove、probe 同源。', note: 'o→ue：me pruebo…' },
    { id: 'quedar', es: 'quedar', zh: '（衣服）合身；剩下；约见', pos: 'v', level: 'A1', tags: ['verb', 'clothes'], ex: ['Te queda muy bien.', '你穿着很合适。'], ety: '拉丁语 quietare「使安静」。' },
  ],
  sentences: [
    { id: 's1', es: '¿Cuánto cuesta esta camiseta?', zh: '这件T恤多少钱？', g: ['a1-demostrativos'], distract: ['este'] },
    { id: 's2', es: 'Me gustan esos zapatos.', zh: '我喜欢那双鞋。', g: ['a1-demostrativos'], distract: ['esas'] },
    { id: 's3', es: 'Aquella tienda es muy cara.', zh: '那边那家店很贵。', g: ['a1-demostrativos'] },
    { id: 's4', es: '¿Qué es esto?', zh: '这是什么？', g: ['a1-demostrativos'], distract: ['este'] },
    { id: 's5', es: 'No quiero esta, prefiero esa.', zh: '我不要这件，我更喜欢那件。', g: ['a1-demostrativos'] },
    { id: 's6', es: 'Este jersey es de lana.', zh: '这件毛衣是羊毛的。', g: ['a1-demostrativos'] },
    { id: 's7', es: 'Busco una camisa blanca.', zh: '我在找一件白衬衫。', g: ['a1-colores'], distract: ['blanco'] },
    { id: 's8', es: 'Tengo unos pantalones negros.', zh: '我有一条黑裤子。', g: ['a1-colores'] },
    { id: 's9', es: '¿De qué color es tu bolso?', zh: '你的包是什么颜色的？', g: ['a1-colores'] },
    { id: 's10', es: 'Me gusta el vestido rojo.', zh: '我喜欢那条红裙子。', g: ['a1-colores'] },
    { id: 's11', es: 'Las zapatillas azules son cómodas.', zh: '这双蓝色运动鞋很舒服。', g: ['a1-colores'] },
    { id: 's12', es: 'El abrigo cuesta ciento veinte euros.', zh: '这件大衣一百二十欧。', g: ['a1-numeros-grandes'] },
    { id: 's13', es: 'En mi pueblo hay quinientas personas.', zh: '我们村有五百个人。', g: ['a1-numeros-grandes'], distract: ['quinientos'] },
    { id: 's14', es: 'Madrid tiene tres millones de habitantes.', zh: '马德里有三百万居民。', g: ['a1-numeros-grandes'] },
    { id: 's15', es: 'Este móvil cuesta mil euros.', zh: '这部手机一千欧。', g: ['a1-numeros-grandes'], distract: ['un'] },
    { id: 's16', es: '¿Tienen esta falda en la talla M?', zh: '这条裙子有 M 码的吗？', g: ['a1-compras'] },
    { id: 's17', es: '¿Puedo probarme estos pantalones?', zh: '我可以试一下这条裤子吗？', g: ['a1-compras'] },
    { id: 's18', es: 'Me queda un poco grande.', zh: '我穿有点大。', g: ['a1-compras'] },
    { id: 's19', es: 'Es muy caro. ¿Tienen algo más barato?', zh: '太贵了。有便宜点的吗？', g: ['a1-compras'] },
    { id: 's20', es: 'Me lo llevo.', zh: '我买了。', g: ['a1-compras'] },
    { id: 's21', es: '¿Con tarjeta o en efectivo?', zh: '刷卡还是付现金？', g: ['a1-compras'] },
    { id: 's22', es: 'Te queda muy bien.', zh: '你穿着很合适。', g: ['a1-compras'] },
  ],
  cloze: [
    { id: 'c1', text: '¿Cuánto cuesta ___ chaqueta? (这件)', answers: ['esta'], options: ['esta', 'este', 'esto'], zh: '这件夹克多少钱？', g: ['a1-demostrativos'] },
    { id: 'c2', text: 'Me gustan ___ zapatos. (那双)', answers: ['esos'], options: ['esos', 'esas', 'eso'], zh: '我喜欢那双鞋。', g: ['a1-demostrativos'] },
    { id: 'c3', text: '___ montañas de allí son muy altas.', answers: ['Aquellas'], options: ['Aquellas', 'Aquellos', 'Estas'], zh: '远处那些山很高。', g: ['a1-demostrativos'] },
    { id: 'c4', text: '¿Qué es ___? — Es un regalo para ti.', answers: ['esto'], options: ['esto', 'este', 'esta'], zh: '这是什么？——是给你的礼物。', g: ['a1-demostrativos'], explain: '不知道是什么东西时，用中性的 esto。' },
    { id: 'c5', text: 'Quiero una falda ___.', answers: ['negra'], options: ['negra', 'negro', 'negras'], zh: '我想要一条黑裙子。', g: ['a1-colores'] },
    { id: 'c6', text: 'Tengo dos camisas ___.', answers: ['blancas'], options: ['blancas', 'blancos', 'blanca'], zh: '我有两件白衬衫。', g: ['a1-colores'] },
    { id: 'c7', text: 'Los coches ___ son bonitos.', answers: ['azules'], options: ['azules', 'azul', 'azuls'], zh: '蓝色的车很漂亮。', g: ['a1-colores'] },
    { id: 'c8', text: '¿De qué ___ es tu coche?', answers: ['color'], options: ['color', 'colora', 'talla'], zh: '你的车是什么颜色的？', g: ['a1-colores'] },
    { id: 'c9', text: 'Cuesta ___ euros. (100)', answers: ['cien'], options: ['cien', 'ciento', 'un cien'], zh: '一百欧。', g: ['a1-numeros-grandes'] },
    { id: 'c10', text: 'Cuesta ___ treinta euros. (130)', answers: ['ciento'], options: ['ciento', 'cien', 'cientos'], zh: '一百三十欧。', g: ['a1-numeros-grandes'] },
    { id: 'c11', text: 'Hay ___ personas en el concierto. (500)', answers: ['quinientas'], options: ['quinientas', 'quinientos', 'cincocientas'], zh: '音乐会上有五百人。', g: ['a1-numeros-grandes'], explain: 'personas 是阴性，所以用 quinientas。' },
    { id: 'c12', text: 'El ordenador cuesta ___ euros. (1000)', answers: ['mil'], options: ['mil', 'un mil', 'miles'], zh: '电脑一千欧。', g: ['a1-numeros-grandes'] },
    { id: 'c13', text: 'Shanghái tiene veinticuatro millones ___ habitantes.', answers: ['de'], options: ['de', 'en', '—'], zh: '上海有两千四百万居民。', g: ['a1-numeros-grandes'] },
    { id: 'c14', text: 'Son ___ euros. (700)', answers: ['setecientos'], hint: '700', zh: '七百欧。', g: ['a1-numeros-grandes'] },
    { id: 'c15', text: 'Esta camiseta me ___ pequeña.', answers: ['queda'], options: ['queda', 'es', 'tiene'], zh: '这件T恤我穿有点小。', g: ['a1-compras'] },
    { id: 'c16', text: '¿Puedo ___ con tarjeta?', answers: ['pagar'], options: ['pagar', 'pago', 'comprar'], zh: '我可以刷卡吗？', g: ['a1-compras'] },
    { id: 'c17', text: 'Es demasiado ___: no tengo mucho dinero.', answers: ['caro'], options: ['caro', 'barato', 'grande'], zh: '太贵了：我钱不多。', g: ['a1-compras'] },
    { id: 'c18', text: '¿Qué ___ usa? — La 40.', answers: ['talla'], options: ['talla', 'número', 'color'], zh: '您穿什么尺码？——40。', g: ['a1-compras'] },
  ],
  conj: [{ verbs: ['comprar', 'buscar', 'llevar', 'pagar'], tenses: ['pres'], g: 'a1-compras' }],
  dialogues: [
    {
      id: 'a1-u07-d1',
      title: '在服装店 · En una tienda de ropa',
      lines: [
        { who: 'Dependienta', es: 'Hola, buenos días. ¿Necesita ayuda?', zh: '您好，早上好。需要帮忙吗？' },
        { who: 'Lin', es: 'Sí, busco un jersey para el invierno.', zh: '是的，我想找一件冬天穿的毛衣。' },
        { who: 'Dependienta', es: '¿De qué color lo quiere?', zh: '您想要什么颜色的？' },
        { who: 'Lin', es: 'Gris o azul. ¿Cuánto cuesta este?', zh: '灰色或者蓝色。这件多少钱？' },
        { who: 'Dependienta', es: 'Cuarenta y cinco euros. Pero esos de allí están en rebajas: veintinueve euros.', zh: '四十五欧。不过那边那些在打折：二十九欧。' },
        { who: 'Lin', es: '¿Puedo probarme aquel azul?', zh: '我可以试一下那件蓝色的吗？' },
        { who: 'Dependienta', es: 'Claro. Los probadores están al fondo.', zh: '当然。试衣间在里面。' },
        { who: 'Lin', es: 'Me queda muy bien. Me lo llevo.', zh: '很合身。我买了。' },
        { who: 'Dependienta', es: 'Perfecto. ¿Con tarjeta o en efectivo?', zh: '好的。刷卡还是现金？' },
      ],
    },
  ],
  readings: [
    {
      id: 'a1-r11',
      level: 'A1',
      title: 'Las rebajas de enero',
      titleZh: '一月的打折季',
      topic: '购物',
      paras: [
        [
          ['En España, las rebajas de invierno empiezan el siete de enero.', '在西班牙，冬季打折从一月七号开始。'],
          ['Las tiendas de ropa están llenas de gente.', '服装店里挤满了人。'],
          ['Los precios bajan un treinta, un cincuenta y hasta un setenta por ciento.', '价格降低百分之三十、百分之五十，甚至百分之七十。'],
        ],
        [
          ['Sara quiere un abrigo nuevo.', '萨拉想要一件新大衣。'],
          ['Normalmente, el abrigo negro de su tienda favorita cuesta ciento ochenta euros.', '平时，她最喜欢的店里那件黑大衣要一百八十欧。'],
          ['Hoy cuesta solo noventa.', '今天只要九十欧。'],
        ],
        [
          ['Pero hay un problema: no tienen su talla.', '但是有个问题：没有她的尺码。'],
          ['Solo hay tallas grandes.', '只有大码。'],
          ['Al final, Sara compra una bufanda roja de doce euros y está muy contenta.', '最后萨拉买了一条十二欧的红围巾，她很开心。'],
        ],
      ],
      gloss: { invierno: '冬天', llenas: '满的（阴性复数）', bajan: '下降（他们）', hasta: '甚至；直到', 'por': '每', ciento: '一百', nuevo: '新的', favorita: '最喜欢的', solo: '只', noventa: '九十', final: '最后', bufanda: '围巾', contenta: '高兴的（阴性）' },
      questions: [
        { type: 'mc', q: '西班牙冬季打折从什么时候开始？', options: ['1 月 1 日', '1 月 7 日', '7 月 1 日'], answer: 1 },
        { type: 'mc', q: '打折时黑大衣多少钱？', options: ['180 欧', '90 欧', '12 欧'], answer: 1 },
        { type: 'tf', q: '萨拉最后买了那件大衣。', answer: false, explain: '没有她的尺码，她买了一条围巾。' },
        { type: 'tf', q: '萨拉最后很开心。', answer: true },
      ],
    },
    {
      id: 'a1-r12',
      level: 'A1',
      title: 'El Rastro de Madrid',
      titleZh: '马德里跳蚤市场',
      topic: '城市',
      paras: [
        [
          ['El Rastro es un mercado muy famoso en el centro de Madrid.', '“拉斯特罗”是马德里市中心一个很有名的市场。'],
          ['Está abierto todos los domingos por la mañana.', '每个星期天上午开放。'],
        ],
        [
          ['Allí hay más de mil puestos.', '那里有一千多个摊位。'],
          ['Venden ropa, libros viejos, discos, cuadros y muchas cosas más.', '卖衣服、旧书、唱片、画，还有很多别的东西。'],
          ['Muchas cosas son baratas, pero hay que mirar bien.', '很多东西很便宜，但要仔细挑。'],
        ],
        [
          ['Después de comprar, la gente toma unas cañas en los bares de La Latina.', '买完东西，人们在拉拉蒂纳区的酒吧喝几杯小啤酒。'],
          ['¡Es una mañana perfecta!', '这是一个完美的上午！'],
        ],
      ],
      gloss: { famoso: '有名的', abierto: '开放的', puestos: '摊位', Venden: '（他们）卖', viejos: '旧的', discos: '唱片', cuadros: '画', cosas: '东西', 'hay': '有', mirar: '看', cañas: '小杯啤酒', perfecta: '完美的' },
      questions: [
        { type: 'mc', q: 'El Rastro 什么时候开放？', options: ['每天', '每个星期天上午', '每个星期六晚上'], answer: 1 },
        { type: 'tf', q: '市场只卖衣服。', answer: false, explain: 'Venden ropa, libros viejos, discos, cuadros…' },
        { type: 'mc', q: '买完东西人们常做什么？', options: ['回家', '去酒吧喝点啤酒', '去博物馆'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '描述你今天穿的衣服（颜色、款式），再写一写你最近想买的一件东西和它的价格。', words: [30, 70], hints: ['Hoy llevo una camiseta… y unos pantalones…', 'Quiero comprar…', 'Cuesta… euros / yuanes.'] }],
}
