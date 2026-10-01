import type { Unit } from '../types'

export const u06: Unit = {
  id: 'b2-u06',
  level: 'B2',
  order: 6,
  title: '艺术与观看',
  titleEs: 'Mirar el arte',
  icon: '🖼️',
  goals: ['掌握和 ser / estar 搭配时意思不同的形容词', '区分 ser + 过去分词（被动动作）和 estar + 过去分词（结果状态）', '用 ser 表示事件的地点和时间，用 estar de 表示暂时的身份', '描述和评论一件艺术作品'],
  grammar: [
    {
      id: 'b2-ser-estar-adj',
      title: '换个动词，换个意思：ser listo / estar listo',
      titleEs: 'Adjetivos que cambian de significado',
      level: 'B2',
      summary: '有些形容词和 ser 连用表示性质，和 estar 连用表示状态，意思完全不同：ser listo（聪明）/ estar listo（准备好了）；ser rico（有钱）/ estar rico（好吃）。',
      body: `| 形容词 | ser + 形容词 | estar + 形容词 |
|---|---|---|
| *listo* | 聪明的 | 准备好了 |
| *malo* | 坏的、差劲的 | 生病了 |
| *bueno* | 好的、善良的 | 好吃的；（口语）很帅 / 很美 |
| *rico* | 有钱的 | 好吃的 |
| *aburrido* | 无聊的（让人觉得无聊） | 感到无聊的 |
| *despierto* | 机灵的 | 醒着的 |
| *atento* | 体贴的、有礼貌的 | 专心的 |
| *orgulloso* | 傲慢的 | 自豪的 |
| *interesado* | 自私的、只看利益的 | 感兴趣的 |
| *vivo* | 机灵的、活泼的 | 活着的 |
| *verde* | 绿色的 | 没熟的；（口语）没经验的 |
| *negro* | 黑色的 | （口语）气坏了、受够了 |

### 对比一下
- *Este libro **es** aburrido.*（这本书很无聊。）↔ ***Estoy** aburrido.*（我觉得很无聊。）
- *Mi abuelo **es** muy despierto.*（我爷爷脑子很灵光。）↔ *¿**Estás** despierto?*（你醒着吗？）
- ***Es** orgullosa.*（她很傲慢。）↔ ***Está** orgullosa de su hijo.*（她为儿子感到自豪。）`,
      examples: [
        ['¿Estás lista? Nos vamos.', '你准备好了吗？我们走了。'],
        ['Tu hermana es muy lista.', '你妹妹很聪明。'],
        ['Hoy no voy a clase: estoy malo.', '今天我不去上课：我病了。'],
        ['Esta paella está riquísima.', '这锅海鲜饭太好吃了。'],
        ['Está muy orgullosa de su hijo.', '她为儿子感到非常自豪。'],
      ],
      origin: `**estar** 来自拉丁语 *stare*「站着」——“站在某种状态里”，所以表示状态、位置。

**ser** 的来历更复杂：它是两个拉丁动词的“混血儿”。大部分形式来自 *esse*「是」（*es, era, fue*），但不定式 *ser* 和虚拟式 *sea* 来自 *sedere*「坐着」（*sedeat → sea*）。“坐”比“站”更稳定——也许这就是 *ser* 表示本质的一个有趣巧合。`,
      pitfalls: ['❌ *Soy aburrido en esta clase.*（想说“我觉得无聊”）✅ *Estoy aburrido en esta clase.*', '❌ *La sopa es muy rica.*（想说“今天这锅汤好喝”）✅ *La sopa está muy rica.*', '❌ *Soy listo, vamos.*（想说“我准备好了”）✅ *Estoy listo, vamos.*'],
    },
    {
      id: 'b2-estar-participio',
      title: 'ser + 过去分词 vs estar + 过去分词',
      titleEs: 'Pasiva de proceso y pasiva de resultado',
      level: 'B2',
      summary: 'ser + 过去分词：被动的动作（谁做的、什么时候做的）：El cuadro fue pintado en 1937. estar + 过去分词：动作完成后留下的状态：El museo está cerrado. 过去分词都要和主语性数一致。',
      body: `### 动作 vs 结果
| 被动的 **动作**（ser） | 动作的 **结果**（estar） |
|---|---|
| *La puerta **fue cerrada** por el guarda a las ocho.* | *La puerta **está cerrada**.* |
| *El cuadro **fue restaurado** en 2010.* | *El cuadro **está** muy bien **restaurado**.* |
| *La exposición **será inaugurada** por la ministra.* | *La exposición **está abierta** hasta junio.* |

> 用 *ser* 时，常常可以加上 *por + 动作者* 和具体时间；用 *estar* 时，只描述“现在是什么样子”。

### 描述作品：材料和姿势
- 材料：*La escultura **es de** bronce.* = *La escultura **está hecha de** bronce.*
- 姿势（用 estar + 过去分词）：*La mujer **está sentada**; el niño **está tumbado**; los soldados **están de pie**.*

### 别把 estar + 过去分词 和 现在完成时 搞混
- *La tienda **está cerrada**.*（商店关着门——状态）
- *La tienda **ha cerrado**.*（商店关门了——动作，可能是倒闭了）`,
      examples: [
        ['El Guernica fue pintado por Picasso en 1937.', '《格尔尼卡》是毕加索于 1937 年画的。'],
        ['El museo está cerrado los lunes.', '博物馆周一闭馆。'],
        ['La escultura está hecha de mármol.', '这座雕塑是大理石做的。'],
        ['En el cuadro, la mujer está sentada junto a la ventana.', '画中的女人坐在窗边。'],
        ['La exposición será inaugurada por la ministra de Cultura.', '展览将由文化部长揭幕。'],
      ],
      tables: [{ verbs: ['pintar', 'abrir', 'hacer'], tense: 'pret' }],
      origin: `西班牙语的过去分词 *-ado / -ido* 来自拉丁语的 *-atus / -itus*：*amatus → amado*，*vestitus → vestido*。在 *-ado* 结尾的词里，口语中的 *d* 常常几乎听不见（*cansao*），但书面上一定要写出来。

**escultura**（雕塑）来自拉丁语 *sculpere*「刻」；**pintura**（绘画）来自 *pingere*「涂、画」，*pinctura → pintura*。`,
      pitfalls: ['❌ *La puerta es cerrada.*（想说“门关着”）✅ *La puerta está cerrada.*', '❌ *El cuadro fue pintado de Picasso.* ✅ *El cuadro fue pintado por Picasso.*', '❌ *Las esculturas están hecho de bronce.* ✅ *Las esculturas están hechas de bronce.*'],
    },
    {
      id: 'b2-ser-estar-usos',
      title: '其他细节：事件用 ser，暂时的身份用 estar de',
      titleEs: 'Otros usos de ser y estar',
      level: 'B2',
      summary: '事件（fiesta, concierto, exposición…）发生的地点和时间用 ser：La fiesta es en mi casa. 物体和人的位置用 estar。estar de + 名词：暂时的身份或状态（estar de camarero / de vacaciones / de moda / de buen humor）。',
      body: `### 事件在哪里：ser
“举行、发生” 的意思用 **ser**：
- *La fiesta **es** en mi casa.*（派对在我家办。）
- *El concierto **fue** en el estadio.*
- *¿Dónde **es** la reunión?*

人和物的位置仍然用 **estar**：*Mi casa **está** en el centro.*

### estar de + 名词 / 形容词：暂时的状态或身份
| 表达 | 意思 |
|---|---|
| *estar de camarero / de profesora* | 暂时当服务员 / 老师（不是正式职业） |
| *estar de vacaciones / de viaje / de baja* | 在度假 / 在旅行 / 在休病假 |
| *estar de moda* | 正流行 |
| *estar de buen / mal humor* | 心情好 / 不好 |
| *estar de pie* | 站着 |
| *estar de acuerdo* | 同意 |

- *Es arquitecto, pero ahora **está de** camarero.*（他是建筑师，但现在在当服务员。）

### ser de：来源、材料、所属
*Este cuadro **es de** Goya.*（这幅画是戈雅的。）*La mesa **es de** madera.* *¿De dónde **eres**?*`,
      examples: [
        ['La fiesta es en mi casa a las nueve.', '派对九点在我家办。'],
        ['¿Dónde es la exposición de Sorolla?', '索罗利亚的画展在哪儿办？'],
        ['Es arquitecto, pero ahora está de camarero.', '他是建筑师，但现在在当服务员。'],
        ['Este verano los colores pastel están de moda.', '今年夏天流行马卡龙色。'],
        ['Hoy el jefe está de muy buen humor.', '今天老板心情特别好。'],
      ],
      origin: `为什么事件用 *ser*？因为这里的 *ser* 还保留着拉丁语 *esse* 的古老意思：“存在、发生”。*La fiesta es en mi casa* =“派对（这件事）发生在我家”。

**moda** 来自法语 *mode*，源于拉丁语 *modus*「方式」。*estar de moda* =“处在当下的方式里”——当然是暂时的，所以用 *estar*。`,
      pitfalls: ['❌ *La fiesta está en mi casa.* ✅ *La fiesta es en mi casa.*', '❌ *Es de vacaciones.* ✅ *Está de vacaciones.*', '❌ *Estoy de acuerdo de ti.* ✅ *Estoy de acuerdo contigo.*'],
    },
  ],
  words: [
    { id: 'obra-de-arte', es: 'obra de arte', zh: '艺术品', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['El museo tiene miles de obras de arte.', '博物馆有数千件艺术品。'] },
    { id: 'obra-maestra', es: 'obra maestra', zh: '杰作', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Las Meninas es una obra maestra.', '《宫娥》是一幅杰作。'] },
    { id: 'artista', es: 'artista', zh: '艺术家', pos: 'n', g: 'mf', level: 'B2', tags: ['hobby', 'job'], ex: ['Es una artista muy reconocida.', '她是一位很知名的艺术家。'] },
    { id: 'escultura', es: 'escultura', zh: '雕塑', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['La escultura es de bronce.', '这座雕塑是青铜的。'] },
    { id: 'escultor', es: 'escultor', zh: '雕塑家', pos: 'n', g: 'm', f: 'escultora', pl: 'escultores', level: 'B2', tags: ['hobby', 'job'], ex: ['Chillida fue un gran escultor vasco.', '奇利达是一位伟大的巴斯克雕塑家。'] },
    { id: 'pincel', es: 'pincel', zh: '画笔', pos: 'n', g: 'm', pl: 'pinceles', level: 'B2', tags: ['hobby'], ex: ['Pinta con pinceles muy finos.', '他用很细的画笔作画。'] },
    { id: 'lienzo', es: 'lienzo', zh: '画布', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Es un óleo sobre lienzo.', '这是一幅布面油画。'] },
    { id: 'oleo', es: 'óleo', zh: '油画', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Prefiero el óleo a la acuarela.', '比起水彩，我更喜欢油画。'], ety: '拉丁语 oleum「油」。' },
    { id: 'acuarela', es: 'acuarela', zh: '水彩画', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Pinta acuarelas de paisajes.', '他画风景水彩。'], ety: '来自意大利语 acquarella，源于 acqua「水」。' },
    { id: 'retrato', es: 'retrato', zh: '肖像', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Es un retrato de la familia real.', '这是一幅王室成员的肖像画。'] },
    { id: 'autorretrato', es: 'autorretrato', zh: '自画像', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Frida Kahlo pintó muchos autorretratos.', '弗里达·卡罗画了很多自画像。'] },
    { id: 'bodegon', es: 'bodegón', zh: '静物画', pos: 'n', g: 'm', pl: 'bodegones', level: 'B2', tags: ['hobby'], ex: ['Es un bodegón con frutas y una jarra.', '这是一幅画着水果和水罐的静物画。'] },
    { id: 'mural', es: 'mural', zh: '壁画', pos: 'n', g: 'm', pl: 'murales', level: 'B2', tags: ['hobby'], ex: ['Los murales de Diego Rivera son famosos.', '迭戈·里维拉的壁画很有名。'] },
    { id: 'grafiti', es: 'grafiti', zh: '涂鸦', pos: 'n', g: 'm', pl: 'grafitis', level: 'B2', tags: ['hobby'], ex: ['El barrio está lleno de grafitis.', '这个街区到处是涂鸦。'] },
    { id: 'arte-urbano', es: 'arte urbano', zh: '街头艺术', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['El arte urbano ha llegado a los museos.', '街头艺术已经进了博物馆。'] },
    { id: 'galeria', es: 'galería', zh: '画廊；走廊', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Expone en una galería del centro.', '他在市中心一家画廊办展。'] },
    { id: 'coleccionista', es: 'coleccionista', zh: '收藏家', pos: 'n', g: 'mf', level: 'B2', tags: ['hobby'], ex: ['El cuadro pertenece a un coleccionista privado.', '这幅画属于一位私人收藏家。'] },
    { id: 'coleccion', es: 'colección', zh: '收藏；系列', pos: 'n', g: 'f', pl: 'colecciones', level: 'B2', tags: ['hobby'], ex: ['El museo tiene una colección impresionante.', '博物馆的藏品令人惊叹。'] },
    { id: 'sala', es: 'sala', zh: '展厅；厅', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Las Meninas está en la sala 12.', '《宫娥》在第 12 展厅。'] },
    { id: 'comisario', es: 'comisario', zh: '策展人；警长', pos: 'n', g: 'm', f: 'comisaria', level: 'B2', tags: ['hobby', 'job'], ex: ['La comisaria de la exposición nos explicó las obras.', '展览的策展人给我们讲解了作品。'] },
    { id: 'inaugurar', es: 'inaugurar', zh: '开幕；落成', pos: 'v', level: 'B2', tags: ['verb'], ex: ['El museo se inauguró en 1997.', '博物馆于 1997 年开馆。'] },
    { id: 'inauguracion', es: 'inauguración', zh: '开幕式', pos: 'n', g: 'f', pl: 'inauguraciones', level: 'B2', tags: ['hobby'], ex: ['¿Vienes a la inauguración?', '你来开幕式吗？'] },
    { id: 'vanguardia', es: 'vanguardia', zh: '先锋派；前卫', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Las vanguardias cambiaron el arte del siglo XX.', '先锋派改变了二十世纪的艺术。'] },
    { id: 'surrealismo', es: 'surrealismo', zh: '超现实主义', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Dalí es el gran nombre del surrealismo.', '达利是超现实主义的代表人物。'] },
    { id: 'cubismo', es: 'cubismo', zh: '立体主义', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Picasso y Braque crearon el cubismo.', '毕加索和布拉克开创了立体主义。'] },
    { id: 'abstracto', es: 'abstracto', zh: '抽象的', pos: 'adj', f: 'abstracta', level: 'B2', tags: ['hobby'], ex: ['No entiendo el arte abstracto.', '我看不懂抽象艺术。'] },
    { id: 'figurativo', es: 'figurativo', zh: '具象的', pos: 'adj', f: 'figurativa', level: 'B2', tags: ['hobby'], ex: ['Prefiero la pintura figurativa.', '我更喜欢具象绘画。'] },
    { id: 'realista', es: 'realista', zh: '现实的；写实的', pos: 'adj', level: 'B2', tags: ['hobby'], ex: ['El retrato es tan realista que parece una foto.', '这幅肖像逼真得像照片。'] },
    { id: 'estilo', es: 'estilo', zh: '风格', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Tiene un estilo muy personal.', '他的风格很独特。'] },
    { id: 'tecnica', es: 'técnica', zh: '技巧；技术', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Usa una técnica muy original.', '他用了一种很独特的技法。'] },
    { id: 'tono', es: 'tono', zh: '色调；语气', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Predominan los tonos oscuros.', '画面以暗色调为主。'] },
    { id: 'contraste', es: 'contraste', zh: '对比', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Hay un fuerte contraste entre luz y sombra.', '光与影之间对比强烈。'] },
    { id: 'perspectiva', es: 'perspectiva', zh: '透视；视角', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Desde esta perspectiva, todo cambia.', '换个角度看，一切都变了。'] },
    { id: 'composicion', es: 'composición', zh: '构图；作文', pos: 'n', g: 'f', pl: 'composiciones', level: 'B2', tags: ['hobby'], ex: ['La composición del cuadro es muy equilibrada.', '这幅画的构图很平衡。'] },
    { id: 'fondo', es: 'fondo', zh: '背景；底部；资金', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Al fondo se ve un espejo.', '在背景里能看到一面镜子。'] },
    { id: 'primer-plano', es: 'primer plano', zh: '前景；特写', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['En primer plano aparece una niña.', '前景里有一个小女孩。'] },
    { id: 'detalle', es: 'detalle', zh: '细节；心意', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Fíjate en los detalles.', '注意看细节。'], note: '¡Qué detalle! = 你真有心！' },
    { id: 'restaurar', es: 'restaurar', zh: '修复', pos: 'v', level: 'B2', tags: ['verb', 'hobby'], ex: ['Están restaurando la catedral.', '他们正在修复大教堂。'] },
    { id: 'restauracion', es: 'restauración', zh: '修复；餐饮业', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['La restauración duró dos años.', '修复工作进行了两年。'] },
    { id: 'falsificacion', es: 'falsificación', zh: '赝品；伪造', pos: 'n', g: 'f', pl: 'falsificaciones', level: 'B2', tags: ['hobby'], ex: ['Resultó que el cuadro era una falsificación.', '结果那幅画是赝品。'] },
    { id: 'subasta', es: 'subasta', zh: '拍卖', pos: 'n', g: 'f', level: 'B2', tags: ['shop'], ex: ['El cuadro se vendió en una subasta por diez millones.', '这幅画在拍卖会上以一千万的价格售出。'] },
    { id: 'valioso', es: 'valioso', zh: '珍贵的', pos: 'adj', f: 'valiosa', level: 'B2', tags: ['adj'], ex: ['Es una pieza muy valiosa.', '这是一件非常珍贵的藏品。'] },
    { id: 'bronce', es: 'bronce', zh: '青铜', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Ganó la medalla de bronce.', '他赢得了铜牌。'] },
    { id: 'marmol', es: 'mármol', zh: '大理石', pos: 'n', g: 'm', pl: 'mármoles', level: 'B2', tags: ['func'], ex: ['La estatua está hecha de mármol blanco.', '雕像是白色大理石做的。'] },
    { id: 'ceramica', es: 'cerámica', zh: '陶瓷', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['En Talavera hay una larga tradición de cerámica.', '塔拉韦拉有悠久的陶瓷传统。'] },
    { id: 'interesado', es: 'interesado', zh: '感兴趣的（estar）；自私的（ser）', pos: 'adj', f: 'interesada', level: 'B2', tags: ['feel'], ex: ['Estoy muy interesada en el arte.', '我对艺术很感兴趣。'] },
    { id: 'despierto', es: 'despierto', zh: '醒着的（estar）；机灵的（ser）', pos: 'adj', f: 'despierta', level: 'B2', tags: ['feel'], ex: ['Es un niño muy despierto.', '这孩子很机灵。'] },
    { id: 'vivo', es: 'vivo', zh: '活着的（estar）；活泼机灵的（ser）', pos: 'adj', f: 'viva', level: 'B2', tags: ['feel'], ex: ['El pez todavía está vivo.', '鱼还活着。'] },
    { id: 'de-pie', es: 'de pie', zh: '站着', pos: 'phr', level: 'B2', tags: ['body'], ex: ['Estuvimos de pie todo el concierto.', '整场音乐会我们都站着。'] },
    { id: 'tumbado', es: 'tumbado', zh: '躺着的', pos: 'adj', f: 'tumbada', level: 'B2', tags: ['body'], ex: ['Está tumbado en el sofá.', '他躺在沙发上。'] },
    { id: 'sentado', es: 'sentado', zh: '坐着的', pos: 'adj', f: 'sentada', level: 'B2', tags: ['body'], ex: ['La mujer está sentada junto a la ventana.', '那个女人坐在窗边。'] },
    { id: 'de-moda', es: 'de moda', zh: '流行的', pos: 'phr', level: 'B2', tags: ['clothes'], ex: ['Este color está muy de moda.', '这个颜色很流行。'] },
    { id: 'de-buen-humor', es: 'de buen humor', zh: '心情好', pos: 'phr', level: 'B2', tags: ['feel'], ex: ['Hoy estás de muy buen humor.', '你今天心情真好。'] },
  ],
  sentences: [
    { id: 's1', es: '¿Estás lista? Nos vamos.', zh: '你准备好了吗？我们走了。', g: ['b2-ser-estar-adj'], distract: ['Eres'] },
    { id: 's2', es: 'Tu hermana es muy lista.', zh: '你妹妹很聪明。', g: ['b2-ser-estar-adj'], distract: ['está'] },
    { id: 's3', es: 'Hoy no voy a clase: estoy malo.', zh: '今天我不去上课：我病了。', g: ['b2-ser-estar-adj'] },
    { id: 's4', es: 'Esta paella está riquísima.', zh: '这锅海鲜饭太好吃了。', g: ['b2-ser-estar-adj'] },
    { id: 's5', es: 'Está muy orgullosa de su hijo.', zh: '她为儿子感到非常自豪。', g: ['b2-ser-estar-adj'] },
    { id: 's6', es: 'Esta película es aburridísima.', zh: '这部电影无聊透了。', g: ['b2-ser-estar-adj'] },
    { id: 's7', es: 'El Guernica fue pintado por Picasso en 1937.', zh: '《格尔尼卡》是毕加索于 1937 年画的。', g: ['b2-estar-participio'], distract: ['estuvo'] },
    { id: 's8', es: 'El museo está cerrado los lunes.', zh: '博物馆周一闭馆。', g: ['b2-estar-participio'], distract: ['es'] },
    { id: 's9', es: 'La escultura está hecha de mármol.', zh: '这座雕塑是大理石做的。', g: ['b2-estar-participio'] },
    { id: 's10', es: 'En el cuadro, la mujer está sentada junto a la ventana.', zh: '画中的女人坐在窗边。', g: ['b2-estar-participio'] },
    { id: 's11', es: 'La fiesta es en mi casa a las nueve.', zh: '派对九点在我家办。', g: ['b2-ser-estar-usos'], distract: ['está'] },
    { id: 's12', es: 'Es arquitecto, pero ahora está de camarero.', zh: '他是建筑师，但现在在当服务员。', g: ['b2-ser-estar-usos'] },
    { id: 's13', es: 'Este color está muy de moda.', zh: '这个颜色很流行。', g: ['b2-ser-estar-usos'] },
    { id: 's14', es: 'Hoy el jefe está de muy buen humor.', zh: '今天老板心情特别好。', g: ['b2-ser-estar-usos'] },
    { id: 's15', es: 'Este cuadro es de Goya.', zh: '这幅画是戈雅的。', g: ['b2-ser-estar-usos'] },
    { id: 's16', es: 'Fíjate en los detalles del fondo.', zh: '注意看背景里的细节。' },
    { id: 's17', es: 'Resultó que el cuadro era una falsificación.', zh: '结果那幅画是赝品。' },
    { id: 's18', es: 'No entiendo el arte abstracto.', zh: '我看不懂抽象艺术。' },
    { id: 's19', es: 'La catedral está siendo restaurada.', zh: '大教堂正在修复中。', g: ['b2-estar-participio'] },
    { id: 's20', es: '¿Dónde es la reunión?', zh: '会在哪儿开？', g: ['b2-ser-estar-usos'] },
    { id: 's21', es: 'Mi abuelo es muy despierto para su edad.', zh: '我爷爷这个年纪脑子还很灵光。', g: ['b2-ser-estar-adj'] },
    { id: 's22', es: 'Estuvimos de pie todo el concierto.', zh: '整场音乐会我们都站着。', g: ['b2-ser-estar-usos'] },
    { id: 's23', es: 'Las Meninas es una obra maestra.', zh: '《宫娥》是一幅杰作。' },
    { id: 's24', es: 'La tienda ha cerrado para siempre.', zh: '那家店永久关门了。', g: ['b2-estar-participio'] },
    { id: 's25', es: 'Estoy muy interesada en el arte contemporáneo.', zh: '我对当代艺术很感兴趣。', g: ['b2-ser-estar-adj'] },
  ],
  cloze: [
    { id: 'c1', text: '¿Ya ___ listos? El taxi está abajo.', answers: ['estáis'], options: ['estáis', 'sois', 'habéis'], zh: '你们准备好了吗？出租车在楼下。', g: ['b2-ser-estar-adj'] },
    { id: 'c2', text: 'Ese niño ___ muy listo: ya sabe leer.', answers: ['es'], options: ['es', 'está', 'ha'], zh: '那孩子很聪明：已经会认字了。', g: ['b2-ser-estar-adj'] },
    { id: 'c3', text: 'No puedo ir a trabajar: ___ mala.', answers: ['estoy'], options: ['estoy', 'soy', 'me pongo'], zh: '我不能去上班：我病了。', g: ['b2-ser-estar-adj'] },
    { id: 'c4', text: 'Su familia ___ muy rica: tienen tres casas.', answers: ['es'], options: ['es', 'está', 'tiene'], zh: '他家很有钱：有三套房子。', g: ['b2-ser-estar-adj'] },
    { id: 'c5', text: '¡Qué ___ está este gazpacho!', answers: ['rico'], options: ['rico', 'listo', 'malo'], zh: '这冷汤真好喝！', g: ['b2-ser-estar-adj'] },
    { id: 'c6', text: 'Me voy, ___ aburridísimo en esta fiesta.', answers: ['estoy'], options: ['estoy', 'soy', 'he'], zh: '我走了，这派对把我无聊死了。', g: ['b2-ser-estar-adj'] },
    { id: 'c7', text: 'El Guernica ___ pintado en 1937.', answers: ['fue'], options: ['fue', 'estuvo', 'era'], zh: '《格尔尼卡》画于 1937 年。', g: ['b2-estar-participio'] },
    { id: 'c8', text: 'Cuando llegamos, la puerta ya ___ abierta.', answers: ['estaba'], options: ['estaba', 'era', 'fue'], zh: '我们到的时候，门已经开着了。', g: ['b2-estar-participio'] },
    { id: 'c9', text: 'Estas esculturas están ___ de bronce.', answers: ['hechas'], options: ['hechas', 'hecho', 'hacidas'], zh: '这些雕塑是青铜做的。', g: ['b2-estar-participio'] },
    { id: 'c10', text: 'El cuadro fue restaurado ___ un equipo italiano.', answers: ['por'], options: ['por', 'de', 'con'], zh: '这幅画由一个意大利团队修复。', g: ['b2-estar-participio'] },
    { id: 'c11', text: 'En el cuadro, los soldados ___ de pie.', answers: ['están'], options: ['están', 'son', 'hay'], zh: '画中的士兵们站着。', g: ['b2-estar-participio'] },
    { id: 'c12', text: 'La boda ___ en una iglesia del siglo XII.', answers: ['fue'], options: ['fue', 'estuvo', 'había'], zh: '婚礼在一座十二世纪的教堂里举行。', g: ['b2-ser-estar-usos'] },
    { id: 'c13', text: 'El museo ___ en el centro de la ciudad.', answers: ['está'], options: ['está', 'es', 'hay'], zh: '博物馆在市中心。', g: ['b2-ser-estar-usos'] },
    { id: 'c14', text: 'Este verano ___ de camarera en un chiringuito.', answers: ['estoy'], options: ['estoy', 'soy', 'trabajo de'], zh: '今年夏天我在海滩酒吧当服务员。', g: ['b2-ser-estar-usos'] },
    { id: 'c15', text: 'Mis padres están ___ vacaciones en Mallorca.', answers: ['de'], options: ['de', 'en', 'a'], zh: '我父母正在马略卡度假。', g: ['b2-ser-estar-usos'] },
    { id: 'c16', text: 'Esta mesa ___ de madera de roble.', answers: ['es'], options: ['es', 'está', 'hay'], zh: '这张桌子是橡木的。', g: ['b2-ser-estar-usos'] },
    { id: 'c17', text: '¿Por qué ___ tan orgulloso? Nunca pide ayuda.', answers: ['es'], options: ['es', 'está', 'se pone'], zh: '他怎么那么傲慢？从来不求人帮忙。', g: ['b2-ser-estar-adj'] },
    { id: 'c18', text: 'La exposición estará ___ hasta el 30 de junio.', answers: ['abierta'], options: ['abierta', 'abierto', 'abrida'], zh: '展览开放到 6 月 30 日。', g: ['b2-estar-participio'] },
  ],
  conj: [
    { verbs: ['pintar', 'abrir', 'hacer', 'romper', 'cubrir', 'poner'], tenses: ['pret', 'pperf'], g: 'b2-estar-participio' },
    { verbs: ['ser', 'estar'], tenses: ['pres', 'impf', 'pret', 'subj'], g: 'b2-ser-estar-adj' },
  ],
  dialogues: [
    {
      id: 'b2-u06-d1',
      title: '在普拉多博物馆 · En el Prado',
      lines: [
        { who: 'Hao', es: 'Uf, llevo dos horas de pie. ¿Estás cansada?', zh: '唉，我站了两个小时了。你累吗？' },
        { who: 'Carmen', es: 'Un poco, pero no nos podemos ir sin ver Las Meninas. Está en la sala 12.', zh: '有点，但不看《宫娥》我们可不能走。在第 12 展厅。' },
        { who: 'Hao', es: '¡Aquí está! Es más grande de lo que pensaba. ¿Quién es la niña del centro?', zh: '在这儿！比我想象的大。中间的小女孩是谁？' },
        { who: 'Carmen', es: 'Es la infanta Margarita. Y el hombre del pincel es el propio Velázquez: se pintó a sí mismo mientras pintaba.', zh: '是玛格丽特公主。拿着画笔的那个人就是委拉斯开兹本人：他在画画的时候把自己也画了进去。' },
        { who: 'Hao', es: '¿Y qué está pintando? No se ve el lienzo.', zh: '那他在画什么？看不到画布正面。' },
        { who: 'Carmen', es: 'Esa es la gran pregunta. Fíjate en el espejo del fondo: ahí están reflejados los reyes. Quizá están donde estamos nosotros ahora.', zh: '这正是最大的谜题。注意看背景里的镜子：国王和王后映在镜子里。也许他们就站在我们现在站的位置。' },
        { who: 'Hao', es: '¡Qué listo era Velázquez! Es como si el cuadro nos estuviera mirando.', zh: '委拉斯开兹真聪明！就好像画在看着我们一样。' },
        { who: 'Carmen', es: 'Exacto. Por eso dicen que es una obra maestra. Bueno, ¿vamos a la cafetería? Ahora sí que estoy muerta.', zh: '没错。所以大家都说这是一幅杰作。好啦，我们去咖啡厅吧？现在我真是累死了。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r11',
      level: 'B2',
      title: 'Las Meninas: el cuadro que nos mira',
      titleZh: '《宫娥》：注视着我们的画',
      topic: '艺术',
      paras: [
        [
          ['Las Meninas fue pintado por Diego Velázquez en 1656 y está considerado uno de los cuadros más importantes de la historia del arte. Desde hace más de dos siglos está expuesto en el Museo del Prado de Madrid.', '《宫娥》由迭戈·委拉斯开兹于 1656 年绘成，被认为是艺术史上最重要的画作之一。两百多年来，它一直在马德里普拉多博物馆展出。'],
        ],
        [
          ['En el centro aparece la infanta Margarita, rodeada de sus damas de compañía, las «meninas». A la izquierda está el propio pintor, de pie delante de un enorme lienzo del que solo vemos la parte de atrás.', '画面中央是玛格丽特公主，身边围着她的侍女们——也就是“宫娥”。左边是画家本人，站在一块巨大的画布前，我们只能看到画布的背面。'],
          ['Al fondo, en un espejo, están reflejados el rey Felipe IV y la reina Mariana. ¿Son ellos los que están siendo retratados? ¿Están mirando la escena desde el lugar que ocupamos nosotros?', '在背景的镜子里，映出了国王腓力四世和王后马里亚纳。正在被画的是他们吗？他们是不是正站在我们所在的位置看着这一幕？'],
        ],
        [
          ['Esa es la genialidad del cuadro: no está claro quién mira y quién es mirado. Picasso estaba tan obsesionado con él que en 1957 pintó cincuenta y ocho versiones, que hoy están en el Museo Picasso de Barcelona.', '这正是这幅画的天才之处：分不清谁在看、谁在被看。毕加索对它着迷到在 1957 年画了五十八幅变体，如今收藏在巴塞罗那毕加索博物馆。'],
        ],
      ],
      gloss: { considerado: '被认为', expuesto: '展出', infanta: '公主', 'damas de compañía': '侍女', reflejados: '映出的', retratados: '被画像', genialidad: '天才之处', obsesionado: '着迷的', versiones: '版本' },
      questions: [
        { type: 'mc', q: '《宫娥》是哪一年画的？', options: ['1556', '1656', '1756'], answer: 1 },
        { type: 'mc', q: '镜子里映出的是谁？', options: ['画家本人', '国王和王后', '玛格丽特公主'], answer: 1 },
        { type: 'tf', q: '毕加索以《宫娥》为题画了五十八幅作品。', answer: true, explain: 'en 1957 pintó cincuenta y ocho versiones' },
      ],
    },
    {
      id: 'b2-r12',
      level: 'B2',
      title: 'El viaje del Guernica',
      titleZh: '《格尔尼卡》的旅程',
      topic: '艺术与历史',
      paras: [
        [
          ['El 26 de abril de 1937, en plena Guerra Civil española, la villa vasca de Guernica fue bombardeada por la aviación alemana e italiana, aliada del bando de Franco. Gran parte del pueblo fue destruido y murieron muchos civiles.', '1937 年 4 月 26 日，正值西班牙内战，巴斯克小镇格尔尼卡遭到佛朗哥一方的盟友——德国和意大利空军的轰炸。镇子大半被毁，许多平民丧生。'],
        ],
        [
          ['Picasso, que estaba viviendo en París, había recibido el encargo de pintar un gran cuadro para el pabellón de la República en la Exposición Internacional. Al leer las noticias, decidió que ese sería el tema. Lo terminó en poco más de un mes.', '当时住在巴黎的毕加索，受托为国际博览会的西班牙共和国展馆画一幅大画。读到新闻后，他决定以此为题材。他只用了一个多月就完成了。'],
          ['El cuadro, pintado solo en blanco, negro y gris, está lleno de figuras que gritan: una madre con su hijo muerto, un caballo herido, un hombre con los brazos levantados.', '这幅画只用了黑、白、灰三色，满是呐喊的身影：抱着死去孩子的母亲、受伤的马、高举双臂的人。'],
        ],
        [
          ['Picasso no quiso que el Guernica estuviera en España mientras no hubiera democracia. Durante décadas fue guardado en el Museo de Arte Moderno de Nueva York, y no volvió a Madrid hasta 1981. Hoy está expuesto en el Museo Reina Sofía y sigue siendo un símbolo universal contra la guerra.', '毕加索不希望在西班牙没有民主的时候让《格尔尼卡》回到西班牙。几十年间它一直存放在纽约现代艺术博物馆，直到 1981 年才回到马德里。如今它在索菲亚王后艺术中心展出，至今仍是全世界反战的象征。'],
        ],
      ],
      gloss: { 'en plena': '正值', villa: '小镇', bombardeada: '被轰炸', aviación: '空军', aliada: '盟友', bando: '阵营', encargo: '委托', pabellón: '展馆', figuras: '人物', guardado: '保存' },
      questions: [
        { type: 'mc', q: '格尔尼卡是在什么时期被轰炸的？', options: ['第一次世界大战', '西班牙内战', '第二次世界大战结束后'], answer: 1 },
        { type: 'mc', q: '《格尔尼卡》用了哪些颜色？', options: ['红、黄、蓝', '只有黑、白、灰', '各种颜色'], answer: 1 },
        { type: 'tf', q: '《格尔尼卡》1981 年才回到马德里。', answer: true, explain: 'no volvió a Madrid hasta 1981' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '选一件你喜欢的艺术作品（画、雕塑、建筑、照片都可以），写一段介绍：它是谁、什么时候创作的（ser + 过去分词），现在在哪里（estar），画面里有什么、人物在做什么（estar + 过去分词 / 副动词），你的感受是什么。', words: [120, 200], hints: ['Este cuadro fue pintado por… en…', 'Está expuesto en…', 'En primer plano… / Al fondo…', 'Lo que más me gusta es… / Me hace sentir…'] }],
}
