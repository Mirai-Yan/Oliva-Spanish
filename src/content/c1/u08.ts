import type { Unit } from '../types'

export const u08: Unit = {
  id: 'c1-u08',
  level: 'C1',
  order: 8,
  title: '言外之意',
  titleEs: 'Entre líneas',
  icon: '🎭',
  goals: ['用过去未完成时、条件式、指小词等方式缓和语气', '认识和使用委婉语，听懂反语和讽刺', '辨认比喻、夸张、反问等修辞手法', '读懂“话里有话”，做出得体的回应'],
  grammar: [
    {
      id: 'c1-atenuacion',
      title: '缓和语气：quería pedirte…, un momentito',
      titleEs: 'La atenuación',
      level: 'C1',
      summary: '礼貌请求的常见手段：过去未完成时（Quería pedirte un favor）、条件式（¿Te importaría…?）、指小词（un momentito, un favorcito）、借口（es que…）、问句代替命令（¿Me pasas la sal?）、无人称化（Se ha roto el jarrón）。',
      body: `### 时态往“后”退一步，语气就软一步
| 直接 | 缓和 |
|---|---|
| *Quiero pedirte un favor.* | ***Quería** pedirte un favor.*（过去未完成时） |
| *¿Puedes ayudarme?* | *¿**Podrías** ayudarme? / ¿Te **importaría** ayudarme?* |
| *Vengo a preguntar por…* | ***Venía** a preguntar por…* |

### 其他常见手段
| 手段 | 例句 |
|---|---|
| 指小词 | *Espera **un momentito**. / ¿Me haces **un favorcito**?* |
| 量的弱化 | *Es **un poco** caro. / Tengo **un poquito** de prisa.* |
| es que…（找借口） | ***Es que** mañana no puedo…* |
| 问句代替命令 | *¿**Me pasas** la sal?*（比 *Pásame la sal* 柔和） |
| 无人称化 | ***Se ha roto** el jarrón.*（不说 *Lo has roto*） |
| 先铺垫 | ***Si no es mucha molestia**, … / **No sé si** sería posible…* |
| 用“我们”代替“你” | ***Podríamos** revisar esto otra vez.*（其实是“你得改”） |

### 西班牙人的“直接”
注意：西班牙人在熟人之间说话往往比中国人直接，*Pásame la sal* 在家里一点也不失礼。缓和的程度要看 **关系和场合**。`,
      examples: [
        ['Quería pedirte un favor.', '我想请你帮个忙。'],
        ['¿Te importaría cerrar la ventana?', '你介意关一下窗吗？'],
        ['Espera un momentito, que ahora vuelvo.', '稍等一下，我马上回来。'],
        ['Es que mañana tengo médico…', '是这样的，我明天要去看医生……'],
        ['No sé si sería posible cambiar la fecha.', '不知道能不能改个日期。'],
      ],
      origin: `为什么“过去时”更礼貌？说 *Quería pedirte…*，好像这个愿望属于“刚才”，是一个已经说出口、可以被拒绝的想法，而不是现在强加给对方的要求。英语的 *I was wondering if…*、中文的“我本来想……”都是同样的策略。

**cortesía**（礼貌）来自 *corte*「宫廷」：宫廷里该有的举止，就是“礼貌”。`,
      pitfalls: ['❌ *Quiero que me ayudes.*（对上司）✅ *Quería pedirle que me ayudara.*', '❌ *¿Te importaría de cerrar la ventana?* ✅ *¿Te importaría cerrar la ventana?*', '❌ 对家人朋友也说 *¿Sería usted tan amable de…?*（太生分）✅ 熟人之间 *¿Me pasas…?* 就够了。'],
    },
    {
      id: 'c1-eufemismos-ironia',
      title: '委婉语和反语',
      titleEs: 'Eufemismos e ironía',
      level: 'C1',
      summary: '委婉语用柔和的说法代替刺耳的词：fallecer（去世）、tercera edad（老年）、reajuste de plantilla（裁员）。反语说的和想的相反，靠语调和语境判断：¡Qué bien! / ¡Muy bonito! / ¡Lo que faltaba!',
      body: `### 常见委婉语
| 直说 | 委婉 |
|---|---|
| *morir* | *fallecer, irse, faltar, pasar a mejor vida* |
| *viejos* | *personas mayores, tercera edad* |
| *despidos* | *reajuste de plantilla, regulación de empleo* |
| *gordo* | *fuerte, rellenito* |
| *pobre* | *con pocos recursos, desfavorecido* |
| *subida de precios* | *actualización de tarifas* |
| *ir al baño* | *ir al servicio, ir a lavarse las manos* |

> 吊唁时说：*Lamento mucho **el fallecimiento** de tu padre.*

### 反语：说反话
反语的意思靠 **语调、表情和语境**：
- *¡**Qué bien**! Otra vez se ha ido la luz.*（真“好”啊！又停电了。）
- *¡**Muy bonito**! ¿Así tratas a tu madre?*（可真“好看”！你就这么对你妈？）——责备
- *¡**Lo que faltaba**!*（就差这个了！雪上加霜。）
- *¡**Vaya** día!*（这一天可真够呛！）

### 讽刺的信号
*Sí, claro… / Ya, ya… / Encima… / Para colmo… / Menos mal que…*（反话）`,
      examples: [
        ['Lamento mucho el fallecimiento de tu padre.', '对你父亲的离世，我深感悲痛。'],
        ['La empresa anunció un reajuste de plantilla.', '公司宣布了人员调整（裁员）。'],
        ['¡Qué bien! Otra vez se ha ido la luz.', '真“好”啊！又停电了。'],
        ['Y para colmo, empezó a llover. ¡Lo que faltaba!', '更糟的是，还下起了雨。真是雪上加霜！'],
        ['—Te espero a las siete. —Sí, claro, como siempre…', '——我七点等你。——是啊，当然，跟往常一样……'],
      ],
      origin: `**eufemismo** 来自希腊语 *euphemismos*：*eu*「好」+ *phemi*「说」——“好好地说”。

**ironía** 来自希腊语 *eironeia*「假装不知道」。苏格拉底常常装作什么都不懂，向别人请教，最后让对方自己露出破绽——这就是著名的“苏格拉底式反讽”。`,
      pitfalls: ['❌ 在吊唁信里写 *Siento que tu padre se haya muerto.*（太直白）✅ *Lamento mucho el fallecimiento de tu padre.*', '❌ 把反话当真：听到 *¡Muy bonito!* 以为是夸奖 ✅ 注意语调和场合。', '❌ 在正式文章中用 *pasar a mejor vida*（口语化）✅ *fallecer*'],
    },
    {
      id: 'c1-figuras-retoricas',
      title: '修辞手法',
      titleEs: 'Figuras retóricas',
      level: 'C1',
      summary: '比喻（metáfora: Eres un sol）、明喻（símil: blanco como la nieve）、夸张（hipérbole: Te lo he dicho mil veces）、拟人、反问（pregunta retórica）、反语、对照（antítesis）、排比（anáfora）、曲言（lítote: No es tonto）。',
      body: `| 手法 | 定义 | 例句 |
|---|---|---|
| **metáfora** 隐喻 | 直接把 A 说成 B | *Eres **un sol**.*（你真是个小太阳。） |
| **símil / comparación** 明喻 | 用 *como* 比较 | *Es **blanco como la nieve**.* |
| **hipérbole** 夸张 | 故意夸大 | *Te lo he dicho **mil veces**.* / ***Me muero** de hambre.* |
| **personificación** 拟人 | 把物当人写 | *El viento **susurraba** entre los árboles.* |
| **pregunta retórica** 反问 | 不需要回答的问题 | *¿**Quién** no ha tenido miedo alguna vez?* |
| **antítesis** 对照 | 把相反的东西放在一起 | *Es tan **corto** el amor y tan **largo** el olvido.* |
| **anáfora** 排比 | 句首重复 | ***Sin** ti no hay luz, **sin** ti no hay calma.* |
| **lítote** 曲言 | 用否定表示肯定 | *No es **tonto**.*（= 他挺聪明的） |
| **ironía** 反语 | 说反话 | *¡**Qué** puntual! Solo una hora tarde.* |

### 日常语言里到处是修辞
*Estoy **muerta** de cansancio.*（夸张）*Tiene **un corazón de oro**.*（隐喻）*Hace **un frío que pela**.*（夸张）

### 文学里的经典
克维多（Quevedo）有一首著名的十四行诗，开头写道：*Érase un hombre a una nariz pegado*（从前有个人，粘在一个鼻子上）——不是鼻子长在人身上，而是人粘在鼻子上，这就是夸张的极致。`,
      examples: [
        ['Te lo he dicho mil veces.', '我跟你说过一千遍了。'],
        ['Tiene un corazón de oro.', '他有一颗金子般的心。'],
        ['¿Quién no ha tenido miedo alguna vez?', '谁没有害怕过呢？'],
        ['No es tonto: sabe muy bien lo que hace.', '他可不傻：他很清楚自己在做什么。'],
        ['Hace un frío que pela.', '冷得要命。'],
      ],
      origin: `**metáfora** 来自希腊语 *metaphora*「转移、搬运」：把一个词的意思“搬”到另一个东西上。**hipérbole** 来自希腊语 *hyperbole*「扔过头」——和数学里的“双曲线”是同一个词。

西班牙语的修辞传统深受古罗马演说家西塞罗和昆体良的影响；到了 17 世纪的“黄金世纪”，贡戈拉和克维多把修辞推向了巅峰。`,
      pitfalls: ['❌ 把夸张当真：*Me muero de hambre* 不是真的要饿死。', '❌ 明喻和隐喻混用：*Eres como un sol*（明喻）/ *Eres un sol*（隐喻）——两种都对，但修辞效果不同。', '❌ *Es tan blanco como nieve.* ✅ *Es blanco como la nieve.*'],
    },
  ],
  words: [
    { id: 'cortes', es: 'cortés', zh: '有礼貌的', pos: 'adj', pl: 'corteses', level: 'C1', tags: ['feel'], ex: ['Fue muy cortés con nosotros.', '他对我们很有礼貌。'] },
    { id: 'descortes', es: 'descortés', zh: '失礼的', pos: 'adj', pl: 'descorteses', level: 'C1', tags: ['feel'], ex: ['No quería parecer descortés.', '我不想显得失礼。'] },
    { id: 'atenuar', es: 'atenuar', zh: '减轻；缓和', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Usó un diminutivo para atenuar la crítica.', '他用了一个指小词来缓和批评。'], note: '重音：atenúo。' },
    { id: 'suavizar', es: 'suavizar', zh: '使柔和', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Intenta suavizar un poco el tono.', '试着把语气放软一点。'] },
    { id: 'eufemismo', es: 'eufemismo', zh: '委婉语', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['«Tercera edad» es un eufemismo de «vejez».', '“第三年龄”是“老年”的委婉说法。'] },
    { id: 'ironia', es: 'ironía', zh: '反语；讽刺', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Lo dijo con mucha ironía.', '他说这话时带着很强的讽刺意味。'] },
    { id: 'ironico', es: 'irónico', zh: '讽刺的', pos: 'adj', f: 'irónica', level: 'C1', tags: ['func'], ex: ['No te enfades, era un comentario irónico.', '别生气，那是句反话。'] },
    { id: 'sarcasmo', es: 'sarcasmo', zh: '挖苦', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['Respondió con sarcasmo.', '他挖苦地回答。'], ety: '希腊语 sarkazein「撕肉」——尖刻得像在撕咬。' },
    { id: 'sarcastico', es: 'sarcástico', zh: '挖苦的', pos: 'adj', f: 'sarcástica', level: 'C1', tags: ['func'], ex: ['Tiene un humor muy sarcástico.', '他的幽默很尖刻。'] },
    { id: 'retorica', es: 'retórica', zh: '修辞学；空话', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Eso es pura retórica.', '那全是空话。'] },
    { id: 'metafora', es: 'metáfora', zh: '隐喻', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['«La vida es un viaje» es una metáfora.', '“人生是一场旅行”是一个隐喻。'] },
    { id: 'metaforico', es: 'metafórico', zh: '比喻的', pos: 'adj', f: 'metafórica', level: 'C1', tags: ['func'], ex: ['Lo dije en sentido metafórico.', '我是打个比方。'] },
    { id: 'simil', es: 'símil', zh: '明喻；比较', pos: 'n', g: 'm', pl: 'símiles', level: 'C1', tags: ['func'], ex: ['Usa un símil para explicarlo.', '他用了一个比喻来解释。'] },
    { id: 'hiperbole', es: 'hipérbole', zh: '夸张', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['«Te he llamado mil veces» es una hipérbole.', '“我给你打了一千次电话”是夸张。'] },
    { id: 'exagerar', es: 'exagerar', zh: '夸张；夸大', pos: 'v', level: 'C1', tags: ['verb'], ex: ['¡No exageres!', '别夸张了！'] },
    { id: 'exageracion', es: 'exageración', zh: '夸张', pos: 'n', g: 'f', pl: 'exageraciones', level: 'C1', tags: ['func'], ex: ['Eso es una exageración.', '那太夸张了。'] },
    { id: 'personificacion', es: 'personificación', zh: '拟人', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Es una personificación del viento.', '这是把风拟人化了。'] },
    { id: 'paradoja', es: 'paradoja', zh: '悖论；反常的事', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Es una paradoja: cuanto más tengo, menos tiempo tengo.', '这是个悖论：我拥有的越多，时间就越少。'] },
    { id: 'antitesis', es: 'antítesis', zh: '对照；对立面', pos: 'n', g: 'f', pl: 'antítesis', level: 'C1', tags: ['func'], ex: ['Es la antítesis de su hermano.', '他和他哥哥完全相反。'] },
    { id: 'pregunta-retorica', es: 'pregunta retórica', zh: '反问', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['No esperaba respuesta: era una pregunta retórica.', '他不期待回答：那是个反问。'] },
    { id: 'sentido-figurado', es: 'sentido figurado', zh: '比喻义', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['«Romper el hielo» se usa en sentido figurado.', '“打破冰层”是比喻用法。'] },
    { id: 'doble-sentido', es: 'doble sentido', zh: '双关；言外之意', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['Ese chiste tiene doble sentido.', '那个笑话一语双关。'] },
    { id: 'connotacion', es: 'connotación', zh: '内涵意义；色彩', pos: 'n', g: 'f', pl: 'connotaciones', level: 'C1', tags: ['func'], ex: ['La palabra tiene una connotación negativa.', '这个词带有贬义色彩。'] },
    { id: 'indirecta', es: 'indirecta', zh: '暗示；指桑骂槐的话', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['¿Eso ha sido una indirecta?', '你这是在暗示我吗？'] },
    { id: 'echar-una-indirecta', es: 'echar una indirecta', zh: '话里有话；旁敲侧击', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Me echó una indirecta sobre mi puntualidad.', '他拐弯抹角地说我不守时。'] },
    { id: 'tacto', es: 'tacto', zh: '分寸；触觉', pos: 'n', g: 'm', level: 'C1', tags: ['feel'], ex: ['Hay que decírselo con mucho tacto.', '得很有分寸地告诉他。'] },
    { id: 'delicadeza', es: 'delicadeza', zh: '细腻；体贴', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Le dio la noticia con delicadeza.', '他很体贴地把消息告诉了她。'] },
    { id: 'diplomatico', es: 'diplomático', zh: '圆滑的；外交官', pos: 'adj', f: 'diplomática', level: 'C1', tags: ['feel'], ex: ['Fue muy diplomático en su respuesta.', '他的回答很得体。'] },
    { id: 'diplomacia', es: 'diplomacia', zh: '外交；圆滑', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Hace falta mucha diplomacia.', '需要很讲究方式方法。'] },
    { id: 'franqueza', es: 'franqueza', zh: '坦率', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Te lo digo con toda franqueza.', '我坦白跟你说。'] },
    { id: 'franco', es: 'franco', zh: '坦率的', pos: 'adj', f: 'franca', level: 'C1', tags: ['feel'], ex: ['Para serte franco, no me gusta.', '坦白说，我不喜欢。'] },
    { id: 'directo', es: 'directo', zh: '直接的', pos: 'adj', f: 'directa', level: 'C1', tags: ['feel'], ex: ['Los españoles suelen ser muy directos.', '西班牙人通常很直接。'] },
    { id: 'brusco', es: 'brusco', zh: '粗鲁的；突然的', pos: 'adj', f: 'brusca', level: 'C1', tags: ['feel'], ex: ['Su respuesta fue un poco brusca.', '他的回答有点生硬。'] },
    { id: 'ofensivo', es: 'ofensivo', zh: '冒犯的', pos: 'adj', f: 'ofensiva', level: 'C1', tags: ['feel'], ex: ['Ese comentario es ofensivo.', '那句话很冒犯人。'] },
    { id: 'malsonante', es: 'malsonante', zh: '粗俗的（词语）', pos: 'adj', level: 'C1', tags: ['func'], ex: ['Evita las palabras malsonantes.', '避免说粗话。'] },
    { id: 'palabrota', es: 'palabrota', zh: '脏话', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['No digas palabrotas delante de los niños.', '别在孩子面前说脏话。'] },
    { id: 'tabu', es: 'tabú', zh: '禁忌', pos: 'n', g: 'm', pl: 'tabúes', level: 'C1', tags: ['func'], ex: ['La muerte sigue siendo un tabú.', '死亡仍然是个禁忌话题。'] },
    { id: 'fallecer', es: 'fallecer', zh: '去世', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Su abuelo falleció el año pasado.', '他爷爷去年去世了。'], note: '-cer → -zco：fallezco。' },
    { id: 'fallecimiento', es: 'fallecimiento', zh: '去世', pos: 'n', g: 'm', level: 'C1', tags: ['family'], ex: ['Lamento el fallecimiento de tu madre.', '对你母亲的去世，我深感悲痛。'] },
    { id: 'tercera-edad', es: 'tercera edad', zh: '老年（委婉）', pos: 'n', g: 'f', level: 'C1', tags: ['people'], ex: ['Hay descuentos para la tercera edad.', '老年人有优惠。'] },
    { id: 'reajuste-de-plantilla', es: 'reajuste de plantilla', zh: '人员调整（裁员的委婉说法）', pos: 'n', g: 'm', level: 'C1', tags: ['job'], ex: ['El reajuste de plantilla afectará a cien personas.', '人员调整将涉及一百人。'] },
    { id: 'pasar-a-mejor-vida', es: 'pasar a mejor vida', zh: '去世（委婉，口语）', pos: 'phr', level: 'C1', tags: ['family'], ex: ['Mi vieja lavadora pasó a mejor vida.', '我那台旧洗衣机“寿终正寝”了。'] },
    { id: 'lo-que-faltaba', es: '¡lo que faltaba!', zh: '真是雪上加霜！', pos: 'interj', level: 'C1', tags: ['feel'], ex: ['¿Ahora llueve? ¡Lo que faltaba!', '现在又下雨了？真是雪上加霜！'] },
    { id: 'para-colmo', es: 'para colmo', zh: '更糟的是', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Perdí el tren y, para colmo, empezó a llover.', '我错过了火车，更糟的是，还下起了雨。'] },
    { id: 'encima', es: 'encima', zh: '而且；（不仅……）还', pos: 'adv', level: 'C1', tags: ['func'], ex: ['Llega tarde y encima se queja.', '他迟到了，还抱怨。'] },
    { id: 'favorcito', es: 'favorcito', zh: '小忙（指小词）', pos: 'n', g: 'm', level: 'C1', tags: ['people'], ex: ['¿Me haces un favorcito?', '能帮我个小忙吗？'] },
  ],
  sentences: [
    { id: 's1', es: 'Quería pedirte un favor.', zh: '我想请你帮个忙。', g: ['c1-atenuacion'], distract: ['Quiero'] },
    { id: 's2', es: '¿Te importaría cerrar la ventana?', zh: '你介意关一下窗吗？', g: ['c1-atenuacion'] },
    { id: 's3', es: 'Espera un momentito, que ahora vuelvo.', zh: '稍等一下，我马上回来。', g: ['c1-atenuacion'] },
    { id: 's4', es: 'Es que mañana tengo médico.', zh: '是这样的，我明天要去看医生。', g: ['c1-atenuacion'] },
    { id: 's5', es: 'No sé si sería posible cambiar la fecha.', zh: '不知道能不能改个日期。', g: ['c1-atenuacion'] },
    { id: 's6', es: 'Lamento mucho el fallecimiento de tu padre.', zh: '对你父亲的离世，我深感悲痛。', g: ['c1-eufemismos-ironia'] },
    { id: 's7', es: '¡Qué bien! Otra vez se ha ido la luz.', zh: '真“好”啊！又停电了。', g: ['c1-eufemismos-ironia'] },
    { id: 's8', es: 'Y para colmo, empezó a llover.', zh: '更糟的是，还下起了雨。', g: ['c1-eufemismos-ironia'] },
    { id: 's9', es: 'La empresa anunció un reajuste de plantilla.', zh: '公司宣布了人员调整。', g: ['c1-eufemismos-ironia'] },
    { id: 's10', es: 'Te lo he dicho mil veces.', zh: '我跟你说过一千遍了。', g: ['c1-figuras-retoricas'] },
    { id: 's11', es: 'Tiene un corazón de oro.', zh: '他有一颗金子般的心。', g: ['c1-figuras-retoricas'] },
    { id: 's12', es: '¿Quién no ha tenido miedo alguna vez?', zh: '谁没有害怕过呢？', g: ['c1-figuras-retoricas'] },
    { id: 's13', es: 'No es tonto: sabe muy bien lo que hace.', zh: '他可不傻：他很清楚自己在做什么。', g: ['c1-figuras-retoricas'] },
    { id: 's14', es: 'Hace un frío que pela.', zh: '冷得要命。', g: ['c1-figuras-retoricas'] },
    { id: 's15', es: 'Hay que decírselo con mucho tacto.', zh: '得很有分寸地告诉他。' },
    { id: 's16', es: 'Para serte franco, no me gusta nada.', zh: '坦白说，我一点也不喜欢。' },
    { id: 's17', es: '¿Eso ha sido una indirecta?', zh: '你这是在暗示我吗？' },
    { id: 's18', es: 'Llega tarde y encima se queja.', zh: '他迟到了，还抱怨。', g: ['c1-eufemismos-ironia'] },
    { id: 's19', es: '¿Me haces un favorcito?', zh: '能帮我个小忙吗？', g: ['c1-atenuacion'] },
    { id: 's20', es: 'Se ha roto el jarrón.', zh: '花瓶碎了。', g: ['c1-atenuacion'] },
    { id: 's21', es: 'La muerte sigue siendo un tabú.', zh: '死亡仍然是个禁忌话题。' },
    { id: 's22', es: 'No digas palabrotas delante de los niños.', zh: '别在孩子面前说脏话。' },
    { id: 's23', es: 'Estoy muerta de cansancio.', zh: '我累死了。', g: ['c1-figuras-retoricas'] },
    { id: 's24', es: '¡No exageres!', zh: '别夸张了！' },
    { id: 's25', es: 'Lo dije en sentido figurado.', zh: '我是打个比方。' },
  ],
  cloze: [
    { id: 'c1', text: '___ preguntarle si tiene un momento. (más cortés que «quiero»)', answers: ['Quería'], options: ['Quería', 'Quiero', 'Querré'], zh: '我想问问您有没有空。', g: ['c1-atenuacion'] },
    { id: 'c2', text: '¿Te ___ ayudarme con las cajas?', answers: ['importaría'], options: ['importaría', 'importa de', 'importas'], zh: '你介意帮我搬一下箱子吗？', g: ['c1-atenuacion'] },
    { id: 'c3', text: 'Espera un ___, ahora mismo te atiendo.', answers: ['momentito'], options: ['momentito', 'momentote', 'momentazo'], zh: '稍等一下，我马上来接待您。', g: ['c1-atenuacion'] },
    { id: 'c4', text: '—¿Vienes al cine? —___ que tengo que estudiar…', answers: ['Es'], options: ['Es', 'Está', 'Porque'], zh: '——来看电影吗？——是这样的，我得学习……', g: ['c1-atenuacion'] },
    { id: 'c5', text: 'Si no es mucha ___, ¿podría repetirlo?', answers: ['molestia'], options: ['molestia', 'problema', 'pena'], zh: '如果不太麻烦的话，您能再说一遍吗？', g: ['c1-atenuacion'] },
    { id: 'c6', text: 'Lamento profundamente el ___ de su esposa.', answers: ['fallecimiento'], options: ['fallecimiento', 'muerto', 'morir'], zh: '对您妻子的离世，我深感悲痛。', g: ['c1-eufemismos-ironia'] },
    { id: 'c7', text: 'Hay descuentos para personas de la tercera ___.', answers: ['edad'], options: ['edad', 'vida', 'época'], zh: '老年人有优惠。', g: ['c1-eufemismos-ironia'] },
    { id: 'c8', text: 'Perdí las llaves y, para ___, empezó a llover.', answers: ['colmo'], options: ['colmo', 'final', 'peor'], zh: '我丢了钥匙，更糟的是，还下起了雨。', g: ['c1-eufemismos-ironia'] },
    { id: 'c9', text: '¿Ahora se va la luz? ¡Lo que ___!', answers: ['faltaba'], options: ['faltaba', 'falta', 'sobraba'], zh: '现在又停电了？真是雪上加霜！', g: ['c1-eufemismos-ironia'] },
    { id: 'c10', text: 'No ha hecho nada en todo el día y ___ se queja de estar cansado.', answers: ['encima'], options: ['encima', 'además de', 'sobre'], zh: '他一整天什么都没干，还抱怨累。', g: ['c1-eufemismos-ironia'] },
    { id: 'c11', text: '«Eres un sol» es una ___.', answers: ['metáfora'], options: ['metáfora', 'hipérbole', 'pregunta retórica'], zh: '“你是一个太阳”是一个隐喻。', g: ['c1-figuras-retoricas'] },
    { id: 'c12', text: '«Te he llamado un millón de veces» es una ___.', answers: ['hipérbole'], options: ['hipérbole', 'metáfora', 'antítesis'], zh: '“我给你打了一百万次电话”是夸张。', g: ['c1-figuras-retoricas'] },
    { id: 'c13', text: '«Blanco como la nieve» es un ___.', answers: ['símil'], options: ['símil', 'eufemismo', 'tabú'], zh: '“像雪一样白”是一个明喻。', g: ['c1-figuras-retoricas'] },
    { id: 'c14', text: 'Hace un frío que ___.', answers: ['pela'], options: ['pela', 'muerde', 'pica'], zh: '冷得要命。', g: ['c1-figuras-retoricas'] },
    { id: 'c15', text: 'Tiene un corazón de ___: siempre ayuda a todos.', answers: ['oro'], options: ['oro', 'plata', 'piedra'], zh: '他有一颗金子般的心：总是帮助所有人。', g: ['c1-figuras-retoricas'] },
    { id: 'c16', text: 'Hay que darle la noticia con mucho ___.', answers: ['tacto'], options: ['tacto', 'contacto', 'toque'], zh: '得很有分寸地告诉他这个消息。' },
    { id: 'c17', text: 'Para serte ___, prefiero no ir.', answers: ['franco'], options: ['franco', 'directo de', 'claro de'], zh: '坦白说，我更想不去。' },
    { id: 'c18', text: 'Me echó una ___ sobre lo tarde que llegué.', answers: ['indirecta'], options: ['indirecta', 'directa', 'pregunta'], zh: '他拐弯抹角地说我来得太晚。' },
  ],
  conj: [
    { verbs: ['querer', 'venir', 'deber', 'poder'], tenses: ['impf', 'cond'], g: 'c1-atenuacion' },
    { verbs: ['fallecer', 'exagerar', 'suavizar', 'atenuar'], tenses: ['pres', 'pret'], g: 'c1-eufemismos-ironia' },
  ],
  dialogues: [
    {
      id: 'c1-u08-d1',
      title: '话里有话 · Lo que no se dice',
      lines: [
        { who: 'Carmen', es: 'Oye, Mei, quería comentarte una cosita sobre el informe…', zh: '哎，美，关于那份报告，我想跟你说点小事……' },
        { who: 'Mei', es: 'Claro, dime. ¿Hay algún problema?', zh: '当然，你说。有什么问题吗？' },
        { who: 'Carmen', es: 'No, no, problema no. Es que… a lo mejor podríamos revisar un poquito la conclusión. Quizá es algo larga.', zh: '没有没有，不是问题。就是……也许我们可以稍微再看看结论。可能有点长。' },
        { who: 'Mei', es: 'Ah, ya entiendo. O sea, que hay que reescribirla entera.', zh: '哦，我明白了。也就是说，得整个重写。' },
        { who: 'Carmen', es: 'Ja, ja. Yo no he dicho eso… pero no sería mala idea.', zh: '哈哈。我可没这么说……不过这主意倒也不坏。' },
        { who: 'Mei', es: 'Vale. ¿Y el resto? ¿Está bien?', zh: '好的。那其他部分呢？还行吗？' },
        { who: 'Carmen', es: 'El resto no está nada mal. Bueno, menos los gráficos, que son un pelín confusos.', zh: '其他部分还真不赖。嗯，除了图表，有一丢丢让人看不懂。' },
        { who: 'Mei', es: '¡Muy bonito! Así que «no está nada mal», menos la conclusión y los gráficos. Menos mal que me lo dices con tanto tacto.', zh: '可真“好”！所以“还真不赖”，除了结论和图表。幸好你说得这么有分寸。' },
      ],
    },
  ],
  readings: [
    {
      id: 'c1-r15',
      level: 'C1',
      title: '¿Son maleducados los españoles?',
      titleZh: '西班牙人没礼貌吗？',
      topic: '跨文化交际',
      paras: [
        [
          ['Muchos visitantes extranjeros se sorprenden al oír a los españoles pedir en un bar: «Ponme un café». Ni «por favor» ni «¿podría…?». ¿Significa eso que son maleducados? Los especialistas en cortesía responden que no.', '很多外国游客听到西班牙人在酒吧里点单时说“给我来杯咖啡”，都会很惊讶。既没有“请”，也没有“您能……吗”。这是否意味着他们没礼貌？研究礼貌的专家说：不是。'],
        ],
        [
          ['En la cultura española, la confianza y la cercanía son valores muy apreciados. Tratar a alguien con demasiada formalidad puede interpretarse como distancia o frialdad. Por eso, entre conocidos, ser directo no se considera descortés, sino natural.', '在西班牙文化中，亲近和熟络是很受重视的价值。对别人过分客气，反而可能被理解为疏远或冷淡。所以在熟人之间，直截了当并不被视为失礼，而是很自然。'],
          ['Eso no significa que no exista la atenuación. Cuando el tema es delicado, los españoles recurren a un amplio repertorio de estrategias: el imperfecto de cortesía, los diminutivos, el «es que…» o las preguntas en lugar de órdenes.', '这并不意味着他们不会委婉。遇到敏感话题时，西班牙人会动用一整套策略：表示礼貌的过去未完成时、指小词、“是这样的……”，或者用问句代替命令。'],
        ],
        [
          ['Para un estudiante chino, acostumbrado a una cortesía basada en la modestia y la indirecta, el reto es doble: aprender a no ofenderse ante la franqueza española y, al mismo tiempo, saber cuándo hace falta suavizar el mensaje.', '对习惯了以谦逊和委婉为基础的礼貌的中国学生来说，挑战是双重的：既要学会不被西班牙人的直率冒犯，又要知道什么时候需要把话说得柔和一些。'],
        ],
      ],
      gloss: { visitantes: '游客', cercanía: '亲近', apreciados: '受重视的', formalidad: '拘礼', frialdad: '冷淡', delicado: '敏感的', repertorio: '全套', estrategias: '策略', modestia: '谦逊', reto: '挑战' },
      questions: [
        { type: 'mc', q: '为什么西班牙人在熟人之间很直接？', options: ['因为他们没礼貌', '因为亲近和熟络很受重视', '因为他们很忙'], answer: 1 },
        { type: 'tf', q: '文章说西班牙人从不用委婉的说法。', answer: false, explain: 'Eso no significa que no exista la atenuación.' },
        { type: 'mc', q: '中国学生面临的“双重挑战”是什么？', options: ['学发音和语法', '不被直率冒犯，同时知道何时要委婉', '学会说脏话'], answer: 1 },
      ],
    },
    {
      id: 'c1-r16',
      level: 'C1',
      title: 'Una nariz de leyenda',
      titleZh: '传奇的鼻子',
      topic: '文学',
      paras: [
        [
          ['En el siglo XVII, Francisco de Quevedo escribió uno de los sonetos más famosos de la literatura española. Empieza así: «Érase un hombre a una nariz pegado». No dice que el hombre tenía una nariz grande, sino que el hombre estaba pegado a la nariz: la nariz es lo principal, y el hombre, un simple accesorio.', '十七世纪，弗朗西斯科·德·克维多写下了西班牙文学中最著名的十四行诗之一。开头是：“从前有个人，粘在一个鼻子上。”他没说这个人有个大鼻子，而是说人粘在了鼻子上：鼻子才是主体，人只是个附件。'],
        ],
        [
          ['El resto del poema es una cadena de hipérboles y metáforas cada vez más disparatadas. La nariz se compara con todo tipo de objetos enormes, hasta el punto de que el lector acaba imaginando una nariz del tamaño de un barco.', '诗的其余部分是一连串越来越荒诞的夸张和比喻。鼻子被比作各种巨大的东西，到最后，读者想象出的鼻子简直有一艘船那么大。'],
          ['Se suele decir que el poema iba dirigido contra su gran rival literario, Luis de Góngora, aunque no hay pruebas definitivas. Lo que sí es seguro es que la rivalidad entre ambos fue feroz y produjo algunos de los versos más ingeniosos del Siglo de Oro.', '人们常说这首诗是针对他的文坛死对头路易斯·德·贡戈拉的，不过并没有确凿的证据。可以肯定的是，两人之间的竞争十分激烈，催生了黄金世纪一些最妙趣横生的诗句。'],
        ],
        [
          ['Cuatro siglos después, el soneto sigue estudiándose en los institutos como ejemplo perfecto de hipérbole. Y demuestra que el humor y la ironía también pueden ser grandes literatura.', '四个世纪后，这首十四行诗仍是中学课堂上夸张手法的绝佳范例。它也证明了：幽默和反讽同样可以成为伟大的文学。'],
        ],
      ],
      gloss: { sonetos: '十四行诗', pegado: '粘着的', accesorio: '附件', cadena: '一连串', disparatadas: '荒诞的', rival: '对手', feroz: '激烈的', ingeniosos: '机智的', 'Siglo de Oro': '黄金世纪' },
      questions: [
        { type: 'mc', q: '这首诗主要用了什么修辞手法？', options: ['反问', '夸张和比喻', '排比'], answer: 1 },
        { type: 'tf', q: '文章确定这首诗就是写给贡戈拉的。', answer: false, explain: 'Se suele decir…, aunque no hay pruebas definitivas.' },
        { type: 'mc', q: '诗的第一句有什么特别之处？', options: ['说人有个大鼻子', '说人粘在鼻子上', '没有提到鼻子'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一封邮件给同事 / 室友，委婉地提出一个敏感的问题（他 / 她的报告写得不好、总是不打扫、借钱不还……）。要求：至少用四种缓和语气的手段，同时把意思表达清楚。写完后再用一两句话说明你用了哪些手段。', words: [150, 220], hints: ['Quería comentarte una cosita…', 'Es que… / A lo mejor podríamos…', 'No sé si sería posible…', 'Si no es mucha molestia, …'] }],
}
