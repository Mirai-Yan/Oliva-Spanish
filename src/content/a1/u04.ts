import type { Unit } from '../types'

export const u04: Unit = {
  id: 'a1-u04',
  level: 'A1',
  order: 4,
  title: '我的家和街区',
  titleEs: 'Mi casa, mi barrio',
  icon: '🏠',
  goals: ['描述自己的家和房间', '说出街区里有什么', '用 hay 和 estar 说“有……”和“在哪里”', '问路和说明位置'],
  grammar: [
    {
      id: 'a1-hay',
      title: 'hay：有（存在）',
      titleEs: 'El verbo haber: hay',
      level: 'A1',
      summary: 'hay 表示“某处有某物”，单复数都用 hay，后面常跟 un / una / 数字 / 不带冠词的名词。',
      body: `**hay** 相当于中文的“（某地）有……”，只有这一个形式，单数复数都一样：

- *En mi barrio **hay** un parque.*（我家那片有一个公园。）
- *En la mesa **hay** tres libros.*（桌子上有三本书。）
- *¿**Hay** un banco cerca?*（附近有银行吗？）
- *No **hay** leche.*（没有牛奶了。）

### hay 后面跟什么？
| 可以 | 不可以 |
|---|---|
| **un / una / unos / unas** + 名词 | ❌ el / la / los / las |
| 数字：*hay dos baños* | ❌ mi / tu / su |
| **mucho / poco / algún** + 名词 | |
| 不带冠词的名词：*hay agua*、*hay gente* | |

> 也就是说，**hay** 用来介绍“新的、不确定的”东西：有没有、有多少。

### 疑问词
- *¿Qué hay en tu habitación?*（你房间里有什么？）
- *¿Cuántos dormitorios hay?*（有几间卧室？）`,
      examples: [
        ['En mi casa hay dos dormitorios.', '我家有两间卧室。'],
        ['¿Hay un supermercado por aquí?', '这附近有超市吗？'],
        ['En la calle hay mucha gente.', '街上有很多人。'],
        ['No hay sillas en la cocina.', '厨房里没有椅子。'],
      ],
      origin: `**hay = ha + y**。*ha* 是动词 *haber* 的第三人称单数，*y* 是古西语的副词，意思是“那里”，来自拉丁语 *ibi*。所以 *hay* 的字面意思是“那里有”。

这和法语的 *il y a* 结构几乎一样：*y* 也来自 *ibi*，*a* 也是 *avoir*（有）的第三人称。`,
      pitfalls: ['hay 后面加定冠词：❌ *Hay el parque.* ✅ *Hay un parque.*', '复数时想改变形式：❌ *Hayn tres sillas.* ✅ 单复数永远是 **hay**：*Hay tres sillas.*'],
    },
    {
      id: 'a1-estar-lugar',
      title: 'estar：在哪里',
      titleEs: 'El verbo estar (ubicación)',
      level: 'A1',
      summary: 'estoy · estás · está · estamos · estáis · están；说已知的人或东西“在哪儿”用 estar。',
      body: `| 人称 | estar |
|---|---|
| yo | **estoy** |
| tú | **estás** |
| él / ella / usted | **está** |
| nosotros | **estamos** |
| vosotros | **estáis** |
| ellos / ustedes | **están** |

### 说位置用 estar
- *¿Dónde **está** el baño?*（洗手间在哪里？）
- *Mi casa **está** cerca del parque.*（我家在公园附近。）
- *Los niños **están** en el colegio.*（孩子们在学校。）

### hay 还是 estar？
| hay | estar |
|---|---|
| 说“有没有”，东西是 **新提到的、不确定的** | 说“在哪里”，东西是 **已知的、确定的** |
| *Hay **un** banco en la plaza.* | ***El** banco está en la plaza.* |
| *¿Hay **una** farmacia cerca?* | *¿Dónde está **la** farmacia?* |

> 判断方法：名词前是 *un / una / 数字 / 无冠词* → **hay**；名词前是 *el / la / mi / 名字* → **estar**。`,
      examples: [
        ['¿Dónde está la estación?', '车站在哪里？'],
        ['Estoy en casa.', '我在家。'],
        ['El sofá está en el salón.', '沙发在客厅里。'],
        ['Madrid está en el centro de España.', '马德里在西班牙中部。'],
        ['¿Dónde estáis? — Estamos en la plaza.', '你们在哪儿？——我们在广场上。'],
      ],
      tables: [{ verbs: ['estar'], tense: 'pres' }],
      origin: `**estar** 来自拉丁语 *stare*（站立）。“站在某处”→“在某处”→“处于某种状态”，所以 *estar* 既表示位置，也表示状态（以后学的 *estoy cansado* 我累了）。英语 *stand、state、station* 都是它的亲戚。

西语、葡萄牙语都把“是”分成 *ser* 和 *estar* 两个动词，而法语、意大利语主要只用一个，这是伊比利亚语言的一大特色。

*estoy* 的 *-y* 和 *soy、voy、doy、hay* 一样，一般认为是后加的“那里”（*ibi*）。`,
      pitfalls: ['说位置用 ser：❌ *El baño es allí.* ✅ *El baño está allí.*', 'hay 和 estar 混用：❌ *Está un banco en la calle.* ✅ *Hay un banco en la calle.*'],
    },
    {
      id: 'a1-preposiciones',
      title: '方位介词',
      titleEs: 'Preposiciones de lugar',
      level: 'A1',
      summary: 'en, encima de, debajo de, delante de, detrás de, al lado de, entre, cerca de, lejos de…',
      body: `| 西语 | 中文 |
|---|---|
| **en** | 在……里 / 上 |
| **encima de** | 在……上面 |
| **debajo de** | 在……下面 |
| **delante de** | 在……前面 |
| **detrás de** | 在……后面 |
| **al lado de** | 在……旁边 |
| **enfrente de** | 在……对面 |
| **entre … y …** | 在……和……之间 |
| **cerca de** | 离……近 |
| **lejos de** | 离……远 |
| **a la derecha de** | 在……右边 |
| **a la izquierda de** | 在……左边 |

### 别忘了 de + el = del
*El gato está debajo **del** sofá.*（猫在沙发底下。）
*La farmacia está al lado **del** banco.*（药店在银行旁边。）

### en 很万能
*en* 可以表示“在……里”和“在……上”：*en la mesa*（在桌子上）、*en la caja*（在盒子里）、*en Madrid*（在马德里）。`,
      examples: [
        ['El libro está encima de la mesa.', '书在桌子上面。'],
        ['El gato está debajo de la cama.', '猫在床底下。'],
        ['La farmacia está al lado del supermercado.', '药店在超市旁边。'],
        ['Mi casa está entre el banco y el parque.', '我家在银行和公园之间。'],
        ['El colegio está lejos de aquí.', '学校离这儿很远。'],
      ],
      origin: `- **izquierda**（左）是西语里少见的 **巴斯克语** 借词，来自巴斯克语 *ezker*。拉丁语的“左” *sinister* 带有“不吉利”的意思（英语 *sinister* 即“阴险的”），大概因此被人们避开了。
- **derecha**（右）来自拉丁语 *directa*（直的、正确的），英语 *direct、right* 也都兼有“正确”和“右”的意思。
- **cerca** 来自拉丁语 *circa*（在周围），**lejos** 来自 *laxius*（更松散地 → 更远）。`,
      pitfalls: ['漏掉 de：❌ *al lado el banco* ✅ *al lado del banco*。', '把 *derecha*（右）和 *derecho*（直走；权利）搞混：*todo recto / todo derecho* 是“一直往前走”。'],
    },
  ],
  words: [
    { id: 'casa', es: 'casa', zh: '房子；家', pos: 'n', g: 'f', level: 'A1', tags: ['home'], ex: ['Estoy en casa.', '我在家。'], ety: '拉丁语 casa「茅屋」，取代了拉丁语正式的 domus（房屋）。', note: '“在家”说 en casa，不加冠词。', emoji: '🏠' },
    { id: 'piso', es: 'piso', zh: '公寓；楼层', pos: 'n', g: 'm', level: 'A1', tags: ['home'], ex: ['Vivo en un piso pequeño.', '我住在一套小公寓里。'], ety: '来自 pisar「踩」：原指脚踩的“地面”，后来指“楼层”，再指一层楼里的“一套住房”。', latam: '拉美多说 departamento 或 apartamento。', emoji: '🏢' },
    { id: 'habitacion', es: 'habitación', zh: '房间', pos: 'n', g: 'f', pl: 'habitaciones', level: 'A1', tags: ['home'], ex: ['Mi habitación es pequeña.', '我的房间很小。'], ety: '拉丁语 habitationem「居住」，来自 habitare「居住」。英语 habitat 同源。', latam: '墨西哥等地也说 cuarto 或 recámara。' },
    { id: 'dormitorio', es: 'dormitorio', zh: '卧室', pos: 'n', g: 'm', level: 'A1', tags: ['home'], ex: ['El piso tiene tres dormitorios.', '这套公寓有三间卧室。'], ety: '拉丁语 dormitorium，来自 dormire「睡觉」。英语 dormitory（宿舍）同源。', emoji: '🛏️' },
    { id: 'cocina', es: 'cocina', zh: '厨房；烹饪', pos: 'n', g: 'f', level: 'A1', tags: ['home', 'food'], ex: ['La cocina es muy grande.', '厨房很大。'], ety: '拉丁语 coquina，来自 coquere「煮」。英语 cook、kitchen 同源。', emoji: '🍳' },
    { id: 'bano', es: 'baño', zh: '浴室；洗手间', pos: 'n', g: 'm', level: 'A1', tags: ['home'], ex: ['¿Dónde está el baño?', '洗手间在哪儿？'], ety: '拉丁语 balneum「浴室」。', emoji: '🛁' },
    { id: 'salon', es: 'salón', zh: '客厅', pos: 'n', g: 'm', pl: 'salones', level: 'A1', tags: ['home'], ex: ['La tele está en el salón.', '电视在客厅里。'], ety: '来自意大利语 salone「大厅」，词根 sala 源自日耳曼语。', latam: '拉美多说 sala。', emoji: '🛋️' },
    { id: 'terraza', es: 'terraza', zh: '阳台；露台', pos: 'n', g: 'f', level: 'A1', tags: ['home'], ex: ['Tenemos una terraza con plantas.', '我们有一个种着植物的露台。'], ety: '来自古奥克语 terrassa，词根是 terra「土地」。英语 terrace 同源。' },
    { id: 'jardin', es: 'jardín', zh: '花园', pos: 'n', g: 'm', pl: 'jardines', level: 'A1', tags: ['home', 'weather'], ex: ['La casa tiene un jardín pequeño.', '房子有一个小花园。'], ety: '来自法语 jardin，源自法兰克语 *gard「围起来的地」。英语 garden、yard 同源。', emoji: '🌷' },
    { id: 'mesa', es: 'mesa', zh: '桌子', pos: 'n', g: 'f', level: 'A1', tags: ['home'], ex: ['Las llaves están en la mesa.', '钥匙在桌子上。'], ety: '拉丁语 mensa「餐桌」。', emoji: '🪑' },
    { id: 'silla', es: 'silla', zh: '椅子', pos: 'n', g: 'f', level: 'A1', tags: ['home'], ex: ['Hay cuatro sillas en la cocina.', '厨房里有四把椅子。'], ety: '拉丁语 sella「座位」。', emoji: '🪑' },
    { id: 'cama', es: 'cama', zh: '床', pos: 'n', g: 'f', level: 'A1', tags: ['home'], ex: ['El gato duerme en mi cama.', '猫睡在我床上。'], ety: '晚期拉丁语 cama，最早见于 7 世纪塞维利亚的圣伊西多尔的记载，可能源自半岛上更古老的语言。', emoji: '🛏️' },
    { id: 'sofa', es: 'sofá', zh: '沙发', pos: 'n', g: 'm', pl: 'sofás', level: 'A1', tags: ['home'], ex: ['El perro está en el sofá.', '狗在沙发上。'], ety: '经法语 sofa、土耳其语，最终来自阿拉伯语 ṣuffa「长凳」。', emoji: '🛋️' },
    { id: 'armario', es: 'armario', zh: '衣柜；柜子', pos: 'n', g: 'm', level: 'A1', tags: ['home'], ex: ['La ropa está en el armario.', '衣服在衣柜里。'], ety: '拉丁语 armarium，原指放武器（arma）的柜子。' },
    { id: 'ventana', es: 'ventana', zh: '窗户', pos: 'n', g: 'f', level: 'A1', tags: ['home'], ex: ['Mi habitación tiene una ventana grande.', '我的房间有一扇大窗户。'], ety: '来自拉丁语 ventus「风」：“通风的开口”。英语 ventilate 同源。', emoji: '🪟' },
    { id: 'puerta', es: 'puerta', zh: '门', pos: 'n', g: 'f', level: 'A1', tags: ['home'], ex: ['La puerta está abierta.', '门开着。'], ety: '拉丁语 porta，重读的 o 变成 ue。英语 port、portal 同源。', emoji: '🚪' },
    { id: 'barrio', es: 'barrio', zh: '街区；社区', pos: 'n', g: 'm', level: 'A1', tags: ['city'], ex: ['Mi barrio es muy tranquilo.', '我住的街区很安静。'], ety: '来自阿拉伯语 barrī「外面的，城外的」。' },
    { id: 'calle', es: 'calle', zh: '街道', pos: 'n', g: 'f', level: 'A1', tags: ['city'], ex: ['Vivo en la calle Mayor.', '我住在马约尔街。'], ety: '拉丁语 callem「小路」。', emoji: '🛣️' },
    { id: 'plaza', es: 'plaza', zh: '广场', pos: 'n', g: 'f', level: 'A1', tags: ['city'], ex: ['Hay un mercado en la plaza.', '广场上有一个市场。'], ety: '拉丁语 platea「宽阔的街道」。英语 place、意大利语 piazza 同源。' },
    { id: 'parque', es: 'parque', zh: '公园', pos: 'n', g: 'm', level: 'A1', tags: ['city'], ex: ['Los niños juegan en el parque.', '孩子们在公园里玩。'], ety: '来自法语 parc「围起来的园子」。英语 park 同源。', emoji: '🌳' },
    { id: 'tienda', es: 'tienda', zh: '商店', pos: 'n', g: 'f', level: 'A1', tags: ['city', 'shop'], ex: ['Hay muchas tiendas en el centro.', '市中心有很多商店。'], ety: '原意是“帐篷”，来自拉丁语 tendere「撑开」——早期的商贩在帐篷里摆摊。', emoji: '🏪' },
    { id: 'supermercado', es: 'supermercado', zh: '超市', pos: 'n', g: 'm', level: 'A1', tags: ['city', 'shop'], ex: ['El supermercado está cerca de mi casa.', '超市离我家很近。'], ety: 'super-「超级」+ mercado「市场」< 拉丁语 mercatum。英语 market 同源。', emoji: '🛒' },
    { id: 'farmacia', es: 'farmacia', zh: '药店', pos: 'n', g: 'f', level: 'A1', tags: ['city', 'body'], ex: ['¿Hay una farmacia por aquí?', '这附近有药店吗？'], ety: '希腊语 pharmakeía「用药」。英语 pharmacy 同源。', emoji: '💊' },
    { id: 'banco', es: 'banco', zh: '银行；长凳', pos: 'n', g: 'm', level: 'A1', tags: ['city'], ex: ['El banco abre a las nueve.', '银行九点开门。'], ety: '源自日耳曼语 *bank「长凳」：中世纪意大利的钱币兑换商坐在长凳旁做生意，于是“长凳”变成了“银行”。', emoji: '🏦' },
    { id: 'restaurante', es: 'restaurante', zh: '餐馆', pos: 'n', g: 'm', level: 'A1', tags: ['city', 'food'], ex: ['Hay un restaurante chino en mi calle.', '我住的那条街上有一家中餐馆。'], ety: '来自法语 restaurant，原意是“恢复体力的（汤）”。', emoji: '🍽️' },
    { id: 'hospital', es: 'hospital', zh: '医院', pos: 'n', g: 'm', pl: 'hospitales', level: 'A1', tags: ['city', 'body'], ex: ['El hospital está lejos.', '医院很远。'], ety: '拉丁语 hospitalis「招待客人的」，来自 hospes「客人」。英语 hospital、hotel 同源。', emoji: '🏥' },
    { id: 'colegio', es: 'colegio', zh: '（中小）学校', pos: 'n', g: 'm', level: 'A1', tags: ['city', 'school'], ex: ['Mi hijo va al colegio a pie.', '我儿子走路去上学。'], ety: '拉丁语 collegium「团体，同僚」。英语 college 同源，但意思不同。', en: '注意：colegio 是中小学，不是英语的 college（大学）。', emoji: '🏫' },
    { id: 'estacion', es: 'estación', zh: '车站；季节', pos: 'n', g: 'f', pl: 'estaciones', level: 'A1', tags: ['city', 'travel'], ex: ['La estación de tren está en el centro.', '火车站在市中心。'], ety: '拉丁语 stationem「停留的地方」，来自 stare「站立」。', emoji: '🚉' },
    { id: 'centro', es: 'centro', zh: '中心；市中心', pos: 'n', g: 'm', level: 'A1', tags: ['city'], ex: ['Vivo en el centro de la ciudad.', '我住在市中心。'], ety: '希腊语 kéntron「圆规的尖」，经拉丁语 centrum。' },
    { id: 'estar', es: 'estar', zh: '在；处于（某种状态）', pos: 'v', level: 'A1', tags: ['verb'], ex: ['¿Dónde está la estación?', '车站在哪里？'], ety: '拉丁语 stare「站立」。英语 stand、state 同源。', note: '不规则：estoy, estás, está, estamos, estáis, están' },
    { id: 'hay', es: 'hay', zh: '有（存在）', pos: 'v', level: 'A1', tags: ['verb', 'func'], ex: ['Hay un parque cerca.', '附近有一个公园。'], ety: 'ha（haber）+ y「那里」< 拉丁语 ibi。法语 il y a 是同样的结构。', note: '单复数都用 hay。' },
    { id: 'donde', es: '¿dónde?', zh: '在哪里？', pos: 'adv', level: 'A1', tags: ['func'], ex: ['¿Dónde está mi móvil?', '我的手机在哪儿？'], ety: '拉丁语 de unde「从哪里」。' },
    { id: 'aqui', es: 'aquí', zh: '这里', pos: 'adv', level: 'A1', tags: ['func'], ex: ['Mi casa está aquí.', '我家在这里。'], ety: '拉丁语 eccum hic「瞧，这里」。' },
    { id: 'alli', es: 'allí', zh: '那里', pos: 'adv', level: 'A1', tags: ['func'], ex: ['El banco está allí.', '银行在那边。'], ety: '拉丁语 ad illic「到那里」。' },
    { id: 'cerca', es: 'cerca', zh: '近；在附近', pos: 'adv', level: 'A1', tags: ['func'], ex: ['El metro está muy cerca.', '地铁站很近。'], ety: '拉丁语 circa「在周围」。', note: '“离……近”是 cerca de。' },
    { id: 'lejos', es: 'lejos', zh: '远', pos: 'adv', level: 'A1', tags: ['func'], ex: ['La playa está lejos de aquí.', '海滩离这儿很远。'], ety: '拉丁语 laxius「更松散地」。' },
    { id: 'encima-de', es: 'encima de', zh: '在……上面', pos: 'prep', level: 'A1', tags: ['func'], ex: ['El gato está encima de la mesa.', '猫在桌子上面。'], ety: 'en + cima「顶端」。' },
    { id: 'debajo-de', es: 'debajo de', zh: '在……下面', pos: 'prep', level: 'A1', tags: ['func'], ex: ['Los zapatos están debajo de la cama.', '鞋子在床底下。'], ety: 'de + bajo「低」。' },
    { id: 'delante-de', es: 'delante de', zh: '在……前面', pos: 'prep', level: 'A1', tags: ['func'], ex: ['Hay un árbol delante de mi casa.', '我家门前有一棵树。'], ety: 'de + en + ante「在前」。' },
    { id: 'detras-de', es: 'detrás de', zh: '在……后面', pos: 'prep', level: 'A1', tags: ['func'], ex: ['El parque está detrás del colegio.', '公园在学校后面。'], ety: 'de + tras「在后」< 拉丁语 trans。' },
    { id: 'al-lado-de', es: 'al lado de', zh: '在……旁边', pos: 'prep', level: 'A1', tags: ['func'], ex: ['El banco está al lado de la farmacia.', '银行在药店旁边。'], ety: 'lado「侧面」< 拉丁语 latus。英语 lateral 同源。' },
    { id: 'enfrente-de', es: 'enfrente de', zh: '在……对面', pos: 'prep', level: 'A1', tags: ['func'], ex: ['El bar está enfrente de la estación.', '酒吧在车站对面。'], ety: 'en + frente「前额，正面」< 拉丁语 frontem。' },
    { id: 'entre', es: 'entre', zh: '在……之间', pos: 'prep', level: 'A1', tags: ['func'], ex: ['La tienda está entre el bar y el banco.', '商店在酒吧和银行之间。'], ety: '拉丁语 inter。英语 inter- 同源。' },
    { id: 'derecha', es: 'derecha', zh: '右边', pos: 'n', g: 'f', level: 'A1', tags: ['func', 'travel'], ex: ['El baño está a la derecha.', '洗手间在右边。'], ety: '拉丁语 directa「直的，正确的」。' },
    { id: 'izquierda', es: 'izquierda', zh: '左边', pos: 'n', g: 'f', level: 'A1', tags: ['func', 'travel'], ex: ['Gira a la izquierda.', '向左转。'], ety: '来自巴斯克语 ezker「左」，是西语中少有的巴斯克语借词。' },
  ],
  sentences: [
    { id: 's1', es: 'En mi casa hay dos dormitorios.', zh: '我家有两间卧室。', g: ['a1-hay'] },
    { id: 's2', es: '¿Hay un banco por aquí?', zh: '这附近有银行吗？', g: ['a1-hay'], distract: ['el', 'está'] },
    { id: 's3', es: 'En mi barrio hay muchas tiendas.', zh: '我住的街区有很多商店。', g: ['a1-hay'] },
    { id: 's4', es: 'No hay leche en casa.', zh: '家里没有牛奶了。', g: ['a1-hay'] },
    { id: 's5', es: '¿Qué hay en tu habitación?', zh: '你房间里有什么？', g: ['a1-hay'] },
    { id: 's6', es: 'Hay un parque cerca de mi casa.', zh: '我家附近有一个公园。', g: ['a1-hay', 'a1-preposiciones'] },
    { id: 's7', es: '¿Dónde está el baño?', zh: '洗手间在哪里？', g: ['a1-estar-lugar'], distract: ['hay', 'es'] },
    { id: 's8', es: 'Estoy en casa.', zh: '我在家。', alt: ['Yo estoy en casa'], g: ['a1-estar-lugar'] },
    { id: 's9', es: 'Mis padres están en el salón.', zh: '我父母在客厅里。', g: ['a1-estar-lugar'] },
    { id: 's10', es: 'La farmacia está en la plaza.', zh: '药店在广场上。', g: ['a1-estar-lugar'] },
    { id: 's11', es: '¿Dónde estáis?', zh: '你们在哪儿？', alt: ['¿Dónde estáis vosotros?'], g: ['a1-estar-lugar'] },
    { id: 's12', es: 'Madrid está en el centro de España.', zh: '马德里在西班牙中部。', g: ['a1-estar-lugar'] },
    { id: 's13', es: 'El gato está debajo de la cama.', zh: '猫在床底下。', g: ['a1-preposiciones'] },
    { id: 's14', es: 'El libro está encima de la mesa.', zh: '书在桌子上面。', g: ['a1-preposiciones'] },
    { id: 's15', es: 'El banco está al lado del supermercado.', zh: '银行在超市旁边。', g: ['a1-preposiciones'], distract: ['de el'] },
    { id: 's16', es: 'Mi casa está lejos del centro.', zh: '我家离市中心很远。', g: ['a1-preposiciones'] },
    { id: 's17', es: 'La estación está enfrente del hospital.', zh: '车站在医院对面。', g: ['a1-preposiciones'] },
    { id: 's18', es: 'El baño está a la derecha.', zh: '洗手间在右边。', g: ['a1-preposiciones'], distract: ['izquierda'] },
    { id: 's19', es: 'La tienda está entre el bar y el banco.', zh: '商店在酒吧和银行之间。', g: ['a1-preposiciones'] },
    { id: 's20', es: 'Vivo en un piso pequeño en el centro.', zh: '我住在市中心的一套小公寓里。', g: ['a1-hay'] },
    { id: 's21', es: 'Mi habitación tiene una ventana grande.', zh: '我的房间有一扇大窗户。', g: ['a1-hay'] },
    { id: 's22', es: 'Hay un restaurante chino en mi calle.', zh: '我那条街上有一家中餐馆。', g: ['a1-hay'] },
    { id: 's23', es: 'El colegio está detrás del parque.', zh: '学校在公园后面。', g: ['a1-preposiciones'] },
    { id: 's24', es: '¿Está lejos la estación?', zh: '车站远吗？', alt: ['¿La estación está lejos?'], g: ['a1-estar-lugar'] },
  ],
  cloze: [
    { id: 'c1', text: 'En la plaza ___ una farmacia.', answers: ['hay'], options: ['hay', 'está', 'es'], zh: '广场上有一家药店。', g: ['a1-hay', 'a1-estar-lugar'], explain: '“una farmacia”是新提到的东西，用 hay。' },
    { id: 'c2', text: 'La farmacia ___ en la plaza.', answers: ['está'], options: ['está', 'hay', 'es'], zh: '药店在广场上。', g: ['a1-estar-lugar'], explain: '“la farmacia”是确定的东西，说它在哪儿用 estar。' },
    { id: 'c3', text: '¿___ un supermercado cerca?', answers: ['Hay'], options: ['Hay', 'Está', 'Es'], zh: '附近有超市吗？', g: ['a1-hay'] },
    { id: 'c4', text: '¿Dónde ___ mis llaves?', answers: ['están'], options: ['están', 'hay', 'son'], zh: '我的钥匙在哪儿？', g: ['a1-estar-lugar'] },
    { id: 'c5', text: 'En mi clase ___ veinte estudiantes.', answers: ['hay'], options: ['hay', 'están', 'son'], zh: '我们班有二十个学生。', g: ['a1-hay'] },
    { id: 'c6', text: 'Yo ___ en la biblioteca.', answers: ['estoy'], hint: 'estar', zh: '我在图书馆。', g: ['a1-estar-lugar'] },
    { id: 'c7', text: '¿Tú ___ en casa ahora?', answers: ['estás'], hint: 'estar', zh: '你现在在家吗？', g: ['a1-estar-lugar'] },
    { id: 'c8', text: 'Nosotros ___ en el parque.', answers: ['estamos'], hint: 'estar', zh: '我们在公园里。', g: ['a1-estar-lugar'] },
    { id: 'c9', text: 'Los niños ___ en el colegio.', answers: ['están'], hint: 'estar', zh: '孩子们在学校。', g: ['a1-estar-lugar'] },
    { id: 'c10', text: 'El gato está ___ la cama.', answers: ['debajo de'], options: ['debajo de', 'debajo', 'en de'], zh: '猫在床底下。', g: ['a1-preposiciones'] },
    { id: 'c11', text: 'La tele está al lado ___ sofá.', answers: ['del'], options: ['del', 'de el', 'de'], zh: '电视在沙发旁边。', g: ['a1-preposiciones'], explain: 'de + el = del。' },
    { id: 'c12', text: 'Mi casa está ___ del centro: 30 minutos en coche.', answers: ['lejos'], options: ['lejos', 'cerca', 'encima'], zh: '我家离市中心很远：开车要 30 分钟。', g: ['a1-preposiciones'] },
    { id: 'c13', text: 'El banco está ___ la farmacia y el bar.', answers: ['entre'], options: ['entre', 'al lado', 'en'], zh: '银行在药店和酒吧之间。', g: ['a1-preposiciones'] },
    { id: 'c14', text: 'El baño está a la ___.', answers: ['izquierda'], hint: '左边', zh: '洗手间在左边。', g: ['a1-preposiciones'] },
    { id: 'c15', text: 'Hay ___ sofá muy grande en el salón.', answers: ['un'], options: ['un', 'el', 'una'], zh: '客厅里有一张很大的沙发。', g: ['a1-hay'], explain: 'hay 后面不用定冠词。' },
    { id: 'c16', text: '¿Dónde ___ Barcelona? — En el noreste de España.', answers: ['está'], options: ['está', 'es', 'hay'], zh: '巴塞罗那在哪儿？——在西班牙东北部。', g: ['a1-estar-lugar'] },
    { id: 'c17', text: 'En mi calle no ___ restaurantes.', answers: ['hay'], hint: 'haber', zh: '我那条街上没有餐馆。', g: ['a1-hay'] },
    { id: 'c18', text: 'El parque está ___ de mi casa: a dos minutos.', answers: ['cerca'], options: ['cerca', 'lejos', 'debajo'], zh: '公园离我家很近：两分钟路程。', g: ['a1-preposiciones'] },
  ],
  conj: [{ verbs: ['estar'], tenses: ['pres'], g: 'a1-estar-lugar' }],
  dialogues: [
    {
      id: 'a1-u04-d1',
      title: '问路 · ¿Dónde está la farmacia?',
      lines: [
        { who: 'Lucía', es: 'Perdone, ¿hay una farmacia por aquí?', zh: '打扰一下，这附近有药店吗？' },
        { who: 'Señor', es: 'Sí, hay una en la plaza Mayor.', zh: '有，马约尔广场上有一家。' },
        { who: 'Lucía', es: '¿Y dónde está la plaza Mayor? ¿Está lejos?', zh: '那马约尔广场在哪儿？远吗？' },
        { who: 'Señor', es: 'No, está muy cerca. Todo recto y, después, la segunda calle a la derecha.', zh: '不远，很近。一直往前走，然后第二条街右转。' },
        { who: 'Lucía', es: '¿La farmacia está al lado del banco?', zh: '药店在银行旁边吗？' },
        { who: 'Señor', es: 'Exacto, entre el banco y un bar.', zh: '没错，在银行和一家酒吧之间。' },
        { who: 'Lucía', es: '¡Muchas gracias!', zh: '非常感谢！' },
        { who: 'Señor', es: 'De nada.', zh: '不客气。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a1-r05',
      level: 'A1',
      title: 'Mi piso en Barcelona',
      titleZh: '我在巴塞罗那的公寓',
      topic: '住所',
      paras: [
        [
          ['Me llamo Wang Fang y estudio en Barcelona.', '我叫王芳，在巴塞罗那读书。'],
          ['Vivo en un piso con dos chicas españolas.', '我和两个西班牙女孩合住一套公寓。'],
          ['El piso no es muy grande, pero es bonito.', '公寓不大，但是很漂亮。'],
        ],
        [
          ['Hay tres dormitorios, una cocina, un baño y un salón pequeño.', '有三间卧室、一个厨房、一个浴室和一个小客厅。'],
          ['Mi habitación está al lado de la cocina.', '我的房间在厨房旁边。'],
          ['En mi habitación hay una cama, una mesa, una silla y un armario.', '我房间里有一张床、一张桌子、一把椅子和一个衣柜。'],
          ['La ventana es grande y hay mucha luz.', '窗户很大，光线很好。'],
        ],
        [
          ['El piso está en el centro, cerca de la universidad.', '公寓在市中心，离大学很近。'],
          ['Enfrente de mi casa hay un supermercado y un bar muy simpático.', '我家对面有一个超市和一家很亲切的小酒吧。'],
        ],
      ],
      gloss: { estudio: '我学习', Vivo: '我住', con: '和', españolas: '西班牙的（阴性复数）', pero: '但是', bonito: '漂亮的', luz: '光', universidad: '大学' },
      questions: [
        { type: 'mc', q: '王芳和谁住在一起？', options: ['她的家人', '两个西班牙女孩', '一个中国朋友'], answer: 1 },
        { type: 'mc', q: '公寓里有几间卧室？', options: ['两间', '三间', '四间'], answer: 1 },
        { type: 'tf', q: '王芳的房间在浴室旁边。', answer: false, explain: 'Mi habitación está al lado de la cocina. 在厨房旁边。' },
        { type: 'tf', q: '公寓离大学很近。', answer: true },
      ],
    },
    {
      id: 'a1-r06',
      level: 'A1',
      title: 'Un barrio con de todo',
      titleZh: '什么都有的街区',
      topic: '城市',
      paras: [
        [
          ['Mi barrio se llama Lavapiés y está en el centro de Madrid.', '我住的街区叫拉瓦皮耶斯，在马德里市中心。'],
          ['Es un barrio muy internacional: hay gente de muchos países.', '这是一个很国际化的街区：有来自很多国家的人。'],
        ],
        [
          ['En mi calle hay un restaurante indio, una tienda china y un bar español.', '我那条街上有一家印度餐馆、一家中国商店和一家西班牙小酒吧。'],
          ['El mercado está en la plaza, al lado de la estación de metro.', '市场在广场上，在地铁站旁边。'],
          ['No hay un parque grande, pero hay una plaza con árboles.', '没有大公园，但有一个种着树的广场。'],
        ],
        [
          ['¿Lo malo? Hay mucho ruido por la noche.', '缺点呢？晚上很吵。'],
          ['¿Lo bueno? ¡Todo está cerca!', '优点呢？什么都很近！'],
        ],
      ],
      gloss: { internacional: '国际化的', gente: '人们', indio: '印度的', mercado: '市场', metro: '地铁', árboles: '树（复数）', Lo: '……的东西（中性冠词）', malo: '坏的', ruido: '噪音', bueno: '好的', Todo: '一切', mucho: '很多' },
      questions: [
        { type: 'mc', q: 'Lavapiés 在哪里？', options: ['巴塞罗那', '马德里市中心', '马德里郊区'], answer: 1 },
        { type: 'tf', q: '街区里有一个很大的公园。', answer: false, explain: 'No hay un parque grande.' },
        { type: 'mc', q: '市场在哪里？', options: ['在地铁站旁边', '在餐馆对面', '在公园里'], answer: 0 },
        { type: 'mc', q: '这个街区的缺点是什么？', options: ['离市中心远', '晚上很吵', '没有商店'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '描述你的家（或宿舍）和你住的街区：有几个房间、你的房间里有什么、附近有什么。', words: [30, 70], hints: ['Vivo en un piso / una casa…', 'En mi habitación hay…', 'Cerca de mi casa hay… / El supermercado está…'] }],
}
