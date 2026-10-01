import type { Unit } from '../types'

export const u05: Unit = {
  id: 'a2-u05',
  level: 'A2',
  order: 5,
  title: '讲故事',
  titleEs: 'Contar historias',
  icon: '📖',
  goals: ['分清简单过去时和过去未完成时', '用 estaba + 副动词描述“当时正在做”', '用连接词把故事讲得连贯', '讲述一件发生在你身上的事'],
  grammar: [
    {
      id: 'a2-contraste',
      title: '简单过去时 vs 过去未完成时',
      titleEs: 'Indefinido e imperfecto',
      level: 'A2',
      summary: '简单过去时讲“发生了什么”（事件、推动情节）；过去未完成时讲“当时的情况”（背景、描述、习惯）。',
      body: `讲故事时两个时态配合使用：

| 过去未完成时（imperfecto） | 简单过去时（indefinido） |
|---|---|
| **背景**：时间、天气、地点、人物状态 | **事件**：发生了什么 |
| *Era sábado. Hacía sol.* | *Fui a la playa.* |
| **描述**：人和物是什么样 | **完成的动作**：一次性的、有结果的 |
| *La chica era alta y llevaba gafas.* | *Me dio su número.* |
| **正在进行中** 的动作 | **打断** 它的动作 |
| *Yo leía…* | *…cuando sonó el teléfono.* |
| **习惯** | **有明确次数 / 时长** |
| *Iba al gimnasio todos los días.* | *Fui al gimnasio tres veces.* |

### 一个形象的比喻
想象拍电影：**imperfecto** 是 **布景和背景音乐**，**indefinido** 是 **演员的动作**。
*Eran las once de la noche y llovía mucho. De repente, alguien **llamó** a la puerta.*
（晚上十一点，下着大雨。突然，有人敲门。）

### 同一个动词，不同的意思
- *Conocía a Ana.*（我那时就认识安娜。）/ *Conocí a Ana en 2020.*（我 2020 年认识了安娜。）
- *Tenía que estudiar*（我本该学习——不知道学没学）/ *Tuve que estudiar*（我不得不学了——学了）`,
      examples: [
        ['Hacía buen tiempo, así que fuimos a la playa.', '天气很好，所以我们去了海边。'],
        ['Mientras cocinaba, se fue la luz.', '我做饭的时候，停电了。'],
        ['Cuando llegué a casa, mi hermano dormía.', '我到家的时候，弟弟在睡觉。'],
        ['Era una noche oscura y no había nadie en la calle.', '那是一个漆黑的夜晚，街上一个人也没有。'],
        ['Conocí a mi mejor amiga cuando tenía quince años.', '我十五岁时认识了我最好的朋友。'],
      ],
      origin: `两个时态在拉丁语里就已分工：**拉丁语完成时**（*amavi*）表示“完成的动作”，**未完成时**（*amabam*）表示“过去持续或反复的动作”。西语完整地继承了这种“体”（aspecto）的区别，而中文主要靠“了、着、过”和上下文来表达类似的意思：*fui* ≈“去了”，*iba* ≈“（那时常）去 / 正去着”。`,
      pitfalls: ['背景用简单过去时：❌ *Fue sábado y hizo sol.* ✅ *Era sábado y hacía sol.*', '主要事件用过去未完成时：❌ *De repente, alguien llamaba a la puerta.* ✅ *De repente, alguien llamó a la puerta.*'],
    },
    {
      id: 'a2-estaba-gerundio',
      title: 'estaba + 副动词：当时正在做',
      titleEs: 'Estaba + gerundio',
      level: 'A2',
      summary: '过去某一刻正在进行的动作：Estaba durmiendo cuando sonó el teléfono.',
      body: `**estar**（过去未完成时）+ **副动词** = 过去某一时刻 **正在进行** 的动作：

| 人称 | |
|---|---|
| yo | **estaba** comiendo |
| tú | **estabas** leyendo |
| él / ella | **estaba** durmiendo |
| nosotros | **estábamos** viendo la tele |
| vosotros | **estabais** jugando |
| ellos | **estaban** hablando |

### 被打断的动作
*Estaba duchándome **cuando** sonó el timbre.*（我正在洗澡的时候，门铃响了。）
***Mientras*** *estábamos cenando, se fue la luz.*（我们正在吃晚饭的时候停电了。）

### 和普通的过去未完成时有什么不同？
*Leía un libro* 和 *Estaba leyendo un libro* 意思很接近；*estaba + 副动词* 更强调“就在那一刻正在做”。`,
      examples: [
        ['¿Qué estabas haciendo a las diez?', '你十点的时候在做什么？'],
        ['Estaba durmiendo cuando sonó el teléfono.', '电话响的时候我正在睡觉。'],
        ['Estábamos viendo una película y se fue la luz.', '我们正在看电影，突然停电了。'],
        ['Los niños estaban jugando en el parque.', '孩子们正在公园里玩。'],
      ],
      tables: [{ verbs: ['estar'], tense: 'impf' }],
      origin: `**gerundio** 来自拉丁语的“动名词夺格”（*cantando* = “通过唱歌”）。“处于（estar）+ 正在做的方式（gerundio）”逐渐固定为进行体。西语的进行体在中世纪还用得不多，到近代才大量使用。`,
      pitfalls: ['❌ *Estuve durmiendo cuando sonó…* ✅ *Estaba durmiendo cuando sonó…*', '❌ *Estaba leiendo* ✅ *Estaba leyendo*。'],
    },
    {
      id: 'a2-conectores',
      title: '讲故事的连接词',
      titleEs: 'Conectores para contar historias',
      level: 'A2',
      summary: 'Un día…, de repente, entonces, mientras, al final, por eso, así que…',
      body: `| 作用 | 西语 | 中文 |
|---|---|---|
| 开头 | **Un día…** / **Una vez…** / **Hace unos años…** | 有一天 / 有一次 / 几年前 |
| 顺序 | **primero**, **luego**, **después**, **más tarde** | 首先、然后、之后、后来 |
| 同时 | **mientras** | 在……的同时 |
| 突发 | **de repente** / **de pronto** | 突然 |
| 接着 | **entonces** | 于是、这时 |
| 结果 | **por eso** / **así que** | 所以 |
| 结尾 | **al final** / **finalmente** | 最后 |
| 一会儿后 | **al cabo de un rato** / **poco después** | 过了一会儿 |

### 讲故事的“公式”
1. 背景（imperfecto）：*Era verano y yo estaba de vacaciones en Sevilla.*
2. 事件（indefinido）+ 连接词：*Un día, fui a un bar… **De repente**, alguien me llamó…*
3. 结尾：***Al final**, nos hicimos amigos.*

### 回应别人的故事
*¿De verdad?*（真的吗？）· *¡No me digas!*（不会吧！）· *¡Qué susto!*（吓死了！）· *¡Qué mala suerte!*（真倒霉！）· *¿Y qué pasó después?*（后来呢？）`,
      examples: [
        ['Un día, mientras paseaba por el parque, encontré una cartera.', '有一天我在公园散步时，捡到一个钱包。'],
        ['De repente, empezó a llover.', '突然开始下雨了。'],
        ['No tenía dinero, así que volví a casa andando.', '我没钱了，所以走回了家。'],
        ['Al final, todo salió bien.', '最后一切都好。'],
        ['¡No me digas! ¿Y qué pasó después?', '不会吧！后来呢？'],
      ],
      origin: `**de repente** 来自拉丁语 *repens*（突然的）。**entonces** 来自通俗拉丁语 *in tunce*（在那时），和古西语 *estonces* 有关。**así que** = *así*（这样）+ *que*：“既然这样，所以……”。`,
      pitfalls: ['❌ *De repentemente* ✅ *De repente*。', '“所以”连用 entonces 太多，可以换成 *así que、por eso*。'],
    },
  ],
  words: [
    { id: 'de-repente', es: 'de repente', zh: '突然', pos: 'phr', level: 'A2', tags: ['func'], ex: ['De repente, se fue la luz.', '突然停电了。'] },
    { id: 'asi-que', es: 'así que', zh: '所以', pos: 'conj', level: 'A2', tags: ['func'], ex: ['Llovía, así que cogimos un taxi.', '下雨了，所以我们打了车。'] },
    { id: 'por-eso', es: 'por eso', zh: '因此', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Estaba cansado, por eso me acosté pronto.', '我累了，所以早早睡了。'] },
    { id: 'al-final', es: 'al final', zh: '最后', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Al final, encontramos el hotel.', '最后我们找到了酒店。'] },
    { id: 'una-vez', es: 'una vez', zh: '一次；有一次', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Una vez me perdí en Tokio.', '有一次我在东京迷路了。'] },
    { id: 'sonar', es: 'sonar', zh: '响；听起来', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Sonó el despertador a las seis.', '闹钟六点响了。'], ety: '拉丁语 sonare。英语 sound 同源。', note: 'o→ue：suena。' },
    { id: 'timbre', es: 'timbre', zh: '门铃', pos: 'n', g: 'm', level: 'A2', tags: ['home'], ex: ['Sonó el timbre.', '门铃响了。'] },
    { id: 'llamar-puerta', es: 'llamar a la puerta', zh: '敲门', pos: 'phr', level: 'A2', tags: ['home'], ex: ['Alguien llamó a la puerta.', '有人敲门。'] },
    { id: 'irse-luz', es: 'irse la luz', zh: '停电', pos: 'phr', level: 'A2', tags: ['home'], ex: ['Anoche se fue la luz.', '昨晚停电了。'] },
    { id: 'luz', es: 'luz', zh: '光；电；灯', pos: 'n', g: 'f', pl: 'luces', level: 'A2', tags: ['home'], ex: ['Apaga la luz, por favor.', '请关灯。'], ety: '拉丁语 lucem。英语 lucid 同源。', emoji: '💡' },
    { id: 'pasear', es: 'pasear', zh: '散步', pos: 'v', level: 'A2', tags: ['verb', 'hobby'], ex: ['Paseábamos por el parque.', '我们在公园散步。'] },
    { id: 'cartera', es: 'cartera', zh: '钱包；公文包', pos: 'n', g: 'f', level: 'A2', tags: ['shop'], ex: ['Perdí la cartera en el metro.', '我在地铁上丢了钱包。'], emoji: '👛' },
    { id: 'robar', es: 'robar', zh: '偷；抢', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Me robaron el móvil.', '我的手机被偷了。'], ety: '日耳曼语 *raubōn。英语 rob 同源。' },
    { id: 'ladron', es: 'ladrón', f: 'ladrona', zh: '小偷', pos: 'n', g: 'm', pl: 'ladrones', level: 'A2', tags: ['people'], ex: ['La policía detuvo al ladrón.', '警察抓住了小偷。'] },
    { id: 'policia', es: 'policía', zh: '警察；警方', pos: 'n', g: 'mf', level: 'A2', tags: ['job'], ex: ['Llamamos a la policía.', '我们报了警。'], note: 'el / la policía 指警察（人）；la policía 也指警方。', emoji: '👮' },
    { id: 'accidente', es: 'accidente', zh: '事故', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['Tuvo un accidente de coche.', '他出了车祸。'] },
    { id: 'susto', es: 'susto', zh: '惊吓', pos: 'n', g: 'm', level: 'A2', tags: ['feel'], ex: ['¡Qué susto!', '吓死我了！'] },
    { id: 'suerte', es: 'suerte', zh: '运气', pos: 'n', g: 'f', level: 'A2', tags: ['feel'], ex: ['¡Qué mala suerte!', '真倒霉！'], ety: '拉丁语 sortem「签，命运」。' },
    { id: 'ocurrir', es: 'ocurrir', zh: '发生', pos: 'v', level: 'A2', tags: ['verb'], ex: ['¿Qué ocurrió?', '发生了什么？'], ety: '拉丁语 occurrere「迎面跑来」。' },
    { id: 'gritar', es: 'gritar', zh: '喊叫', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Todo el mundo empezó a gritar.', '所有人都开始尖叫。'] },
    { id: 'caerse', es: 'caerse', zh: '摔倒；掉下', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Me caí en la calle.', '我在街上摔倒了。'], note: '过去时 me caí, se cayó。' },
    { id: 'romperse', es: 'romperse', zh: '（自己）断；坏', pos: 'v', level: 'A2', tags: ['verb', 'body'], ex: ['Se rompió la pierna esquiando.', '他滑雪时摔断了腿。'] },
    { id: 'oscuro', es: 'oscuro', f: 'oscura', zh: '黑暗的；深色的', pos: 'adj', level: 'A2', tags: ['adj', 'color'], ex: ['La calle estaba muy oscura.', '街上很黑。'] },
    { id: 'extrano', es: 'extraño', f: 'extraña', zh: '奇怪的；陌生的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['Oí un ruido extraño.', '我听到一个奇怪的声音。'] },
    { id: 'raro', es: 'raro', f: 'rara', zh: '奇怪的；罕见的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['¡Qué raro!', '真奇怪！'] },
    { id: 'desconocido', es: 'desconocido', f: 'desconocida', zh: '陌生的；陌生人', pos: 'adj', level: 'A2', tags: ['people'], ex: ['Un desconocido me ayudó.', '一个陌生人帮了我。'] },
    { id: 'ayuda', es: 'ayuda', zh: '帮助', pos: 'n', g: 'f', level: 'A2', tags: ['func'], ex: ['¡Ayuda!', '救命！'] },
    { id: 'coger', es: 'coger', zh: '拿；乘坐；抓', pos: 'v', level: 'A2', tags: ['verb', 'travel'], ex: ['Cogimos un taxi.', '我们打了一辆车。'], note: '第一人称 cojo。', latam: '在很多拉美国家 coger 是粗俗词，“乘坐”要说 tomar。' },
    { id: 'darse-cuenta', es: 'darse cuenta de', zh: '意识到；发现', pos: 'phr', level: 'A2', tags: ['verb'], ex: ['Me di cuenta de que no tenía las llaves.', '我发现我没带钥匙。'] },
    { id: 'dejarse', es: 'dejarse', zh: '落下（东西）', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Me dejé el paraguas en el bar.', '我把伞落在酒吧了。'] },
    { id: 'encontrarse', es: 'encontrarse con', zh: '偶遇', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Me encontré con un viejo amigo.', '我偶遇了一个老朋友。'] },
    { id: 'hacerse-amigos', es: 'hacerse amigos', zh: '成为朋友', pos: 'phr', level: 'A2', tags: ['people'], ex: ['Al final nos hicimos amigos.', '最后我们成了朋友。'] },
    { id: 'de-verdad', es: '¿de verdad?', zh: '真的吗？', pos: 'phr', level: 'A2', tags: ['greet'], ex: ['—Me tocó la lotería. —¿De verdad?', '——我中彩票了。——真的吗？'] },
    { id: 'no-me-digas', es: '¡no me digas!', zh: '不会吧！', pos: 'phr', level: 'A2', tags: ['greet'] },
  ],
  sentences: [
    { id: 's1', es: 'Hacía buen tiempo, así que fuimos a la playa.', zh: '天气很好，所以我们去了海边。', g: ['a2-contraste', 'a2-conectores'], distract: ['hizo', 'íbamos'] },
    { id: 's2', es: 'Cuando llegué a casa, mi hermano dormía.', zh: '我到家的时候，弟弟在睡觉。', g: ['a2-contraste'], distract: ['llegaba', 'durmió'] },
    { id: 's3', es: 'Era una noche oscura y no había nadie.', zh: '那是一个漆黑的夜晚，一个人也没有。', g: ['a2-contraste'] },
    { id: 's4', es: 'Conocí a mi mejor amiga cuando tenía quince años.', zh: '我十五岁时认识了最好的朋友。', g: ['a2-contraste'] },
    { id: 's5', es: 'Iba al gimnasio todos los días.', zh: '我（那时）每天去健身房。', g: ['a2-contraste'] },
    { id: 's6', es: 'Fui al gimnasio tres veces la semana pasada.', zh: '上周我去了三次健身房。', g: ['a2-contraste'] },
    { id: 's7', es: 'Estaba durmiendo cuando sonó el teléfono.', zh: '电话响的时候我正在睡觉。', g: ['a2-estaba-gerundio'], distract: ['estuve'] },
    { id: 's8', es: '¿Qué estabas haciendo a las diez?', zh: '你十点的时候在做什么？', g: ['a2-estaba-gerundio'] },
    { id: 's9', es: 'Estábamos cenando y se fue la luz.', zh: '我们正在吃晚饭，突然停电了。', g: ['a2-estaba-gerundio'] },
    { id: 's10', es: 'Los niños estaban jugando en el parque.', zh: '孩子们正在公园里玩。', g: ['a2-estaba-gerundio'] },
    { id: 's11', es: 'Mientras paseaba, encontré una cartera.', zh: '我散步时捡到一个钱包。', g: ['a2-conectores', 'a2-contraste'] },
    { id: 's12', es: 'De repente, empezó a llover.', zh: '突然开始下雨了。', g: ['a2-conectores'] },
    { id: 's13', es: 'Al final, todo salió bien.', zh: '最后一切都好。', g: ['a2-conectores'] },
    { id: 's14', es: 'Me di cuenta de que no tenía las llaves.', zh: '我发现我没带钥匙。', g: ['a2-conectores'] },
    { id: 's15', es: 'Me robaron el móvil en el metro.', zh: '我的手机在地铁上被偷了。', g: ['a2-contraste'] },
    { id: 's16', es: '¡Qué mala suerte!', zh: '真倒霉！', g: ['a2-conectores'] },
    { id: 's17', es: '¿Y qué pasó después?', zh: '后来呢？', g: ['a2-conectores'] },
    { id: 's18', es: 'Un desconocido me ayudó.', zh: '一个陌生人帮了我。', g: ['a2-contraste'] },
    { id: 's19', es: 'No tenía dinero, así que volví andando.', zh: '我没钱了，所以走回去的。', g: ['a2-conectores'] },
    { id: 's20', es: 'Al final nos hicimos amigos.', zh: '最后我们成了朋友。', g: ['a2-conectores'] },
  ],
  cloze: [
    { id: 'c1', text: '___ las once de la noche cuando llegamos al hotel.', answers: ['Eran'], options: ['Eran', 'Fueron', 'Estaban'], zh: '我们到酒店时是晚上十一点。', g: ['a2-contraste'], explain: '时间背景用过去未完成时。' },
    { id: 'c2', text: 'Ayer ___ (yo) a mi profesor en el supermercado.', answers: ['vi'], options: ['vi', 'veía', 'vía'], zh: '昨天我在超市碰见了老师。', g: ['a2-contraste'] },
    { id: 'c3', text: 'Mientras yo ___ , mi madre llamó por teléfono.', answers: ['cocinaba'], options: ['cocinaba', 'cociné', 'cocino'], zh: '我做饭的时候，妈妈打来了电话。', g: ['a2-contraste'], explain: '正在进行的背景动作用过去未完成时。' },
    { id: 'c4', text: 'Cuando era pequeño, ___ mucho miedo de los perros.', answers: ['tenía'], options: ['tenía', 'tuve', 'tengo'], zh: '我小时候很怕狗。', g: ['a2-contraste'] },
    { id: 'c5', text: 'La semana pasada ___ (nosotros) al cine dos veces.', answers: ['fuimos'], options: ['fuimos', 'íbamos', 'vamos'], zh: '上周我们去了两次电影院。', g: ['a2-contraste'], explain: '有明确次数，用简单过去时。' },
    { id: 'c6', text: 'La casa ___ grande y tenía un jardín.', answers: ['era'], options: ['era', 'fue', 'estuvo'], zh: '那栋房子很大，有一个花园。', g: ['a2-contraste'] },
    { id: 'c7', text: 'De repente, ___ un ruido muy fuerte.', answers: ['oímos'], options: ['oímos', 'oíamos', 'oyemos'], zh: '突然我们听到一声巨响。', g: ['a2-contraste'] },
    { id: 'c8', text: '___ durmiendo cuando sonó el despertador.', answers: ['Estaba'], options: ['Estaba', 'Estuve', 'Estoy'], zh: '闹钟响的时候我正在睡觉。', g: ['a2-estaba-gerundio'] },
    { id: 'c9', text: '¿Qué estabais ___ cuando llegó la policía?', answers: ['haciendo'], hint: 'hacer', zh: '警察到的时候你们在做什么？', g: ['a2-estaba-gerundio'] },
    { id: 'c10', text: 'Los niños estaban ___ un libro.', answers: ['leyendo'], hint: 'leer', zh: '孩子们正在读书。', g: ['a2-estaba-gerundio'] },
    { id: 'c11', text: 'Nosotros ___ viendo la tele cuando se fue la luz.', answers: ['estábamos'], hint: 'estar', zh: '我们正在看电视时停电了。', g: ['a2-estaba-gerundio'] },
    { id: 'c12', text: 'Llovía mucho, ___ nos quedamos en casa.', answers: ['así que'], options: ['así que', 'mientras', 'de repente'], zh: '雨下得很大，所以我们待在家里。', g: ['a2-conectores'] },
    { id: 'c13', text: '___, el ladrón salió corriendo.', answers: ['De repente'], options: ['De repente', 'Mientras', 'Así que'], zh: '突然，小偷跑掉了。', g: ['a2-conectores'] },
    { id: 'c14', text: 'Busqué las llaves toda la tarde y ___ las encontré en el coche.', answers: ['al final'], options: ['al final', 'mientras', 'de repente'], zh: '我找了一下午钥匙，最后在车里找到了。', g: ['a2-conectores'] },
    { id: 'c15', text: '___ mi madre cocinaba, yo ponía la mesa.', answers: ['Mientras'], options: ['Mientras', 'Entonces', 'Así que'], zh: '妈妈做饭的同时，我摆好餐桌。', g: ['a2-conectores'] },
  ],
  conj: [{ verbs: ['estar'], tenses: ['impf'], g: 'a2-estaba-gerundio' }],
  dialogues: [
    {
      id: 'a2-u05-d1',
      title: '你猜我昨天遇到了什么 · ¿A que no sabes qué me pasó?',
      lines: [
        { who: 'Andrea', es: '¿A que no sabes qué me pasó ayer?', zh: '你肯定猜不到我昨天遇到了什么！' },
        { who: 'Lin', es: '¡Cuéntame!', zh: '快说说！' },
        { who: 'Andrea', es: 'Estaba esperando el autobús y empezó a llover muchísimo. No tenía paraguas.', zh: '我在等公交车，突然下起了大雨。我没带伞。' },
        { who: 'Lin', es: '¡Qué mala suerte!', zh: '真倒霉！' },
        { who: 'Andrea', es: 'Entonces un chico me ofreció su paraguas. Era muy simpático y hablaba chino.', zh: '这时一个男生把伞借给了我。他人很好，还会说中文。' },
        { who: 'Lin', es: '¿De verdad? ¿Y qué pasó después?', zh: '真的吗？后来呢？' },
        { who: 'Andrea', es: 'Fuimos juntos a tomar un café y hablamos durante dos horas.', zh: '我们一起去喝了杯咖啡，聊了两个小时。' },
        { who: 'Lin', es: '¡No me digas! ¿Y lo vas a ver otra vez?', zh: '不会吧！你还要再见他吗？' },
        { who: 'Andrea', es: 'Sí, el sábado. ¡Y esta vez llevo paraguas!', zh: '要，星期六。这次我带伞！' },
      ],
    },
  ],
  readings: [
    {
      id: 'a2-r09',
      level: 'A2',
      title: 'La cartera perdida',
      titleZh: '丢失的钱包',
      topic: '故事',
      paras: [
        [
          ['Era un lunes de diciembre y hacía mucho frío.', '那是十二月的一个星期一，天很冷。'],
          ['Yo iba en el metro, escuchaba música y pensaba en mi examen.', '我坐在地铁里，听着音乐，想着我的考试。'],
          ['Cuando llegué a la universidad, me di cuenta de que no tenía la cartera.', '到了大学，我发现钱包不见了。'],
        ],
        [
          ['Dentro estaban mi tarjeta de estudiante, cincuenta euros y una foto de mi familia.', '里面有我的学生卡、五十欧元和一张全家福。'],
          ['Volví a la estación, pero no la encontré.', '我回到车站，但没找到。'],
          ['Estaba muy triste y no pude concentrarme en el examen.', '我很难过，考试时没法集中注意力。'],
        ],
        [
          ['Dos días después, me llamaron de la oficina de objetos perdidos.', '两天后，失物招领处给我打来电话。'],
          ['Una señora mayor encontró mi cartera en el asiento y la llevó allí.', '一位老太太在座位上捡到了我的钱包，把它交到了那里。'],
          ['¡No faltaba nada! Desde entonces creo que hay mucha gente buena en el mundo.', '什么都没少！从那以后我相信世界上有很多好人。'],
        ],
      ],
      gloss: { iba: '去，在路上（ir 过去未完成时）', pensaba: '想着', Dentro: '在里面', concentrarme: '集中注意力', objetos: '物品', perdidos: '丢失的', asiento: '座位', llevó: '带去了', faltaba: '缺少', creo: '我相信' },
      questions: [
        { type: 'mc', q: '故事发生在什么时候？', options: ['十二月的一个星期一', '夏天的周末', '考试结束后'], answer: 0 },
        { type: 'mc', q: '钱包里没有什么？', options: ['学生卡', '五十欧元', '手机'], answer: 2 },
        { type: 'tf', q: '作者回车站时找到了钱包。', answer: false, explain: 'Volví a la estación, pero no la encontré.' },
        { type: 'mc', q: '谁捡到了钱包？', options: ['一个学生', '一位老太太', '警察'], answer: 1 },
      ],
    },
    {
      id: 'a2-r10',
      level: 'A2',
      title: 'Una noche en el museo',
      titleZh: '博物馆之夜',
      topic: '故事',
      paras: [
        [
          ['Hace dos años trabajaba como guardia de seguridad en un museo de Madrid.', '两年前我在马德里的一家博物馆当保安。'],
          ['Una noche, mientras hacía mi ronda, oí un ruido extraño en la sala de pintura.', '一天晚上，我巡逻时在绘画展厅听到一个奇怪的声音。'],
        ],
        [
          ['La sala estaba oscura y no había nadie.', '展厅里很黑，一个人也没有。'],
          ['Encendí la linterna y, de repente, vi algo que se movía detrás de un cuadro.', '我打开手电筒，突然看到一幅画后面有东西在动。'],
          ['Tenía mucho miedo, pero me acerqué despacio.', '我很害怕，但还是慢慢走了过去。'],
        ],
        [
          ['¿Sabes qué era? ¡Un gato! Entró por una ventana abierta y no podía salir.', '你知道是什么吗？一只猫！它从一扇开着的窗户进来，出不去了。'],
          ['Al final, el gato se quedó a vivir en el museo. Ahora todos lo llaman «Velázquez».', '最后那只猫留在博物馆住下了。现在大家都叫它“委拉斯开兹”。'],
        ],
      ],
      gloss: { como: '作为', guardia: '警卫', seguridad: '安全', ronda: '巡逻', sala: '展厅', pintura: '绘画', Encendí: '我打开了', linterna: '手电筒', movía: '在动', acerqué: '走近', Entró: '进来了', podía: '能', quedó: '留下了', lo: '它', llaman: '叫' },
      questions: [
        { type: 'mc', q: '作者当时的工作是？', options: ['导游', '保安', '画家'], answer: 1 },
        { type: 'tf', q: '展厅里灯开着，有很多人。', answer: false, explain: 'La sala estaba oscura y no había nadie.' },
        { type: 'mc', q: '画后面的是什么？', options: ['小偷', '一只猫', '一只狗'], answer: 1 },
        { type: 'tf', q: '那只猫后来留在了博物馆。', answer: true },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '讲一件发生在你身上的有趣、奇怪或倒霉的事：先描述背景（时间、地点、天气、你在做什么），再讲发生了什么、最后怎么样。', words: [70, 130], hints: ['Era… / Hacía… / Estaba…', 'De repente… / Entonces…', 'Al final…'] }],
}
