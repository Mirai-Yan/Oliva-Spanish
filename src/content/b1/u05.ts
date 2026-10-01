import type { Unit } from '../types'

export const u05: Unit = {
  id: 'b1-u05',
  level: 'B1',
  order: 5,
  title: '讲故事',
  titleEs: 'Contar historias',
  icon: '📖',
  goals: ['用过去完成时说“在过去某时之前已经发生的事”', '组合简单过去时、过去未完成时和过去完成时讲故事', '用 al + 原形、en ese momento、al cabo de 等连接情节', '讲一件趣事，并对别人的故事做出反应'],
  grammar: [
    {
      id: 'b1-plusc',
      title: '过去完成时',
      titleEs: 'El pretérito pluscuamperfecto',
      level: 'B1',
      summary: 'había, habías, había, habíamos, habíais, habían + 过去分词：表示过去某个时间点之前已经完成的动作。Cuando llegué, la película ya había empezado.',
      body: `### 构成：haber 的过去未完成时 + 过去分词
| 人称 | haber | + 过去分词 |
|---|---|---|
| yo | **había** | hablado / comido / vivido |
| tú | **habías** | |
| él / ella / usted | **había** | |
| nosotros | **habíamos** | |
| vosotros | **habíais** | |
| ellos / ustedes | **habían** | |

不规则过去分词和现在完成时一样：*hecho, dicho, visto, escrito, puesto, vuelto, roto, abierto, muerto, descubierto*

### 用法 1：“过去的过去”
两件事都发生在过去，**更早** 的那件用过去完成时：
*Cuando llegué al cine, la película **ya había empezado**.*
（我到电影院时，电影已经开始了。）

时间线：电影开始 ⟶ 我到达 ⟶ 现在

### 用法 2：到过去某时为止的经历
*Nunca **había visto** el mar hasta los veinte años.*（我二十岁之前从没见过大海。）
*Antes de venir a España, nunca **había probado** el jamón.*（来西班牙之前，我从没尝过火腿。）

### 常和这些词一起用
*ya*（已经）、*todavía no*（还没）、*nunca*（从未）、*antes*（之前）`,
      examples: [
        ['Cuando llegué al cine, la película ya había empezado.', '我到电影院时，电影已经开始了。'],
        ['Nunca había visto el mar hasta los veinte años.', '我二十岁之前从没见过大海。'],
        ['No pude entrar porque me había dejado las llaves en casa.', '我进不去，因为我把钥匙忘在家里了。'],
        ['Cuando llamé, ya se habían ido.', '我打电话的时候，他们已经走了。'],
        ['Me dijo que había perdido el tren.', '他告诉我他错过了火车。'],
      ],
      tables: [{ verbs: ['hacer', 'ver', 'volver'], tense: 'plusc' }],
      origin: `**pluscuamperfecto** 是拉丁语 *plus quam perfectum*「比完成更完成」——比“已经完成”还要早。

拉丁语原本有一个单词形式的过去完成时：*amaveram*（我曾经爱过）。它在西班牙语里没有消失，而是变成了 **虚拟式过去时的 -ra 形式**：*amaveram → amara*。中世纪西语里 *cantara* 还表示“我已经唱过”，今天的新闻语言中偶尔还能见到这种古老用法：*el que **fuera** presidente*（曾任总统的人）。`,
      pitfalls: ['❌ *Cuando llegué, la película ya empezaba.* ✅ *Cuando llegué, la película ya había empezado.*', '❌ *había hacido / había escribido / había rompido* ✅ *había hecho / había escrito / había roto*', '❌ *Habían muchas personas.* ✅ *Había muchas personas.*：表示“有”的 haber 永远用单数。'],
    },
    {
      id: 'b1-narrar',
      title: '讲故事：三个过去时态一起用',
      titleEs: 'Narrar en pasado',
      level: 'B1',
      summary: '简单过去时推进情节（发生了什么），过去未完成时描写背景（当时是什么样），过去完成时交代更早的事（之前发生过什么）。',
      body: `### 三个时态的分工
| 时态 | 作用 | 例句 |
|---|---|---|
| **简单过去时** | 情节：一件接一件发生的事 | *Abrí la puerta y **entré**.* |
| **过去未完成时** | 背景：天气、时间、状态、正在进行的事 | ***Eran** las doce y **llovía**.* |
| **过去完成时** | 回溯：在情节之前已经发生的事 | *Alguien **había dejado** la luz encendida.* |

### 一个完整的例子
*Eran las doce de la noche y **llovía** mucho. Cuando **llegué** a casa, **vi** que la puerta estaba abierta. Alguien **había entrado**…*

### 让故事流动起来的连接词
| 开头 | 推进 | 突发 | 结尾 |
|---|---|---|---|
| *Un día…* | *Al cabo de un rato…* | *De repente / De pronto…* | *Al final…* |
| *Hace unos años…* | *Poco después…* | *En ese momento…* | *Total, que…* |
| *Aquella mañana…* | *Luego / Entonces…* | *Justo cuando…* | *Por fin…* |

### al + 原形 = 当……的时候
***Al llegar** a casa, me di cuenta de que no tenía las llaves.* = *Cuando llegué a casa, …*`,
      examples: [
        ['Eran las doce y llovía mucho.', '那时是十二点，雨下得很大。'],
        ['Al llegar a casa, me di cuenta de que no tenía las llaves.', '一到家，我就发现自己没带钥匙。'],
        ['Estaba durmiendo cuando, de repente, sonó el teléfono.', '我正在睡觉，突然电话响了。'],
        ['Al cabo de una hora, llegaron los bomberos.', '一小时后，消防员来了。'],
        ['Al final, todo salió bien.', '最后一切顺利。'],
      ],
      origin: `**narrar** 来自拉丁语 *narrare*，它又来自 *gnarus*「知道的」——讲故事就是“让人知道”。英语 *narrate*、*ignorant*（不知道的）都和它有关。

**anécdota** 来自希腊语 *anékdota*「未发表的东西」。拜占庭历史学家普罗科匹厄斯写过一本关于宫廷秘闻的书，叫 *Anékdota*；后来这个词就指“有趣的小故事”。`,
      pitfalls: ['❌ *Al llegué a casa…* ✅ *Al llegar a casa…*：al 后面接原形。', '❌ *De niño, fui a la playa todos los veranos.*（过去的习惯）✅ *De niño, iba a la playa todos los veranos.*', '❌ *De repente sonaba el teléfono.*（突发事件）✅ *De repente sonó el teléfono.*'],
    },
    {
      id: 'b1-anecdota',
      title: '讲趣事和做出反应',
      titleEs: 'Contar una anécdota y reaccionar',
      level: 'B1',
      summary: '开头：¿Sabes qué me pasó? / Resulta que…；收尾：Total, que…；听的人回应：¡No me digas! ¡Qué fuerte! ¡Qué mala suerte! ¿Y qué pasó al final?',
      body: `### 讲的人
| 作用 | 表达 |
|---|---|
| 引起注意 | *¿Sabes qué me pasó ayer?* / *No te vas a creer lo que me pasó.* |
| 开始讲 | ***Resulta que…***（事情是这样的……） |
| 总结 | ***Total, que…***（总之……） |

### 听的人
| 情感 | 回应 |
|---|---|
| 惊讶 | *¡No me digas! / ¿En serio? / ¡Qué fuerte!* |
| 同情 | *¡Qué mala suerte! / ¡Pobrecito! / ¡Vaya!* |
| 好笑 | *¡Qué gracia! / ¡Qué risa!* |
| 着急想知道 | *¿Y qué pasó? / ¿Y al final qué hiciste?* |

### ¡Qué + 形容词 / 名词!
- ***¡Qué** susto!*（吓死了！）***¡Qué** vergüenza!*（太丢人了！）***¡Qué** casualidad!*（真巧！）
- ***¡Qué** raro!*（真奇怪！）***¡Qué** horror!*（太可怕了！）

注意这里的 **qué** 带重音（感叹词），和连词 *que* 不同。`,
      examples: [
        ['¿Sabes qué me pasó ayer?', '你知道我昨天遇到什么事了吗？'],
        ['Resulta que me quedé encerrado en el ascensor.', '事情是这样的：我被困在电梯里了。'],
        ['Total, que llegué dos horas tarde.', '总之，我迟到了两个小时。'],
        ['—Perdí el pasaporte en el aeropuerto. —¡Qué mala suerte!', '——我在机场把护照弄丢了。——真倒霉！'],
        ['¡Qué casualidad! Yo también soy de Hangzhou.', '真巧！我也是杭州人。'],
      ],
      origin: `**resultar** 来自拉丁语 *resultare*「弹回来」：*re*「回」+ *saltare*「跳」。一件事“弹回来”的样子，就是它的“结果”。所以 *Resulta que…* 字面意思是“结果是……”，在口语里变成了讲故事的开场白。

**casualidad**（巧合）来自 *casual*，源于拉丁语 *casus*「落下、偶然发生的事」——事情像骰子一样“掉”下来。英语 *case*、*casual* 同源。`,
      pitfalls: ['❌ *¡Que susto!* ✅ *¡Qué susto!*：感叹的 qué 要带重音。', '❌ *Resulta de que…* ✅ *Resulta que…*', '❌ *¡Qué fuerte!* 用在正式场合：这是西班牙年轻人的口语，正式场合说 *¡Qué sorprendente!*'],
      latam: '*¡Qué fuerte!* 是西班牙的说法；墨西哥人会说 *¡No manches!*，阿根廷人说 *¡No te puedo creer!*（都很口语）。',
    },
  ],
  words: [
    { id: 'anecdota', es: 'anécdota', zh: '趣事；轶事', pos: 'n', g: 'f', level: 'B1', tags: ['hobby'], ex: ['Mi abuelo siempre cuenta anécdotas de la guerra.', '我爷爷总讲战争年代的小故事。'] },
    { id: 'suceso', es: 'suceso', zh: '事件（多指意外、案件）', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['Leo la sección de sucesos del periódico.', '我看报纸的社会新闻版。'], en: '“假朋友”：suceso 是事件，英语 success（成功）是 éxito。' },
    { id: 'testigo', es: 'testigo', zh: '目击者；证人', pos: 'n', g: 'mf', level: 'B1', tags: ['people'], ex: ['Fui testigo del accidente.', '我目击了那场事故。'] },
    { id: 'sospechar', es: 'sospechar', zh: '怀疑', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Sospecho que alguien ha entrado en mi casa.', '我怀疑有人进过我家。'] },
    { id: 'sospechoso', es: 'sospechoso', zh: '可疑的；嫌疑人', pos: 'adj', f: 'sospechosa', level: 'B1', tags: ['people'], ex: ['Vi a un hombre sospechoso en el portal.', '我在门厅看到一个可疑的男人。'] },
    { id: 'misterio', es: 'misterio', zh: '谜；神秘的事', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['Es un misterio: nadie sabe dónde está.', '这是个谜：没人知道他在哪儿。'] },
    { id: 'misterioso', es: 'misterioso', zh: '神秘的', pos: 'adj', f: 'misteriosa', level: 'B1', tags: ['adj'], ex: ['Recibí una carta misteriosa.', '我收到一封神秘的信。'] },
    { id: 'desaparecer', es: 'desaparecer', zh: '消失', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Mi bicicleta ha desaparecido.', '我的自行车不见了。'], note: '-cer → -zco：desaparezco。' },
    { id: 'aparecer', es: 'aparecer', zh: '出现', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Al final, las llaves aparecieron en el coche.', '最后钥匙在车里找到了。'] },
    { id: 'huir', es: 'huir', zh: '逃跑', pos: 'v', level: 'B1', tags: ['verb'], ex: ['El ladrón huyó por la ventana.', '小偷从窗户逃走了。'], note: 'huyo, huyes…；过去时 huyó, huyeron。' },
    { id: 'robo', es: 'robo', zh: '盗窃', pos: 'n', g: 'm', level: 'B1', tags: ['city'], ex: ['Ha habido un robo en el banco.', '银行发生了一起盗窃。'] },
    { id: 'detener', es: 'detener', zh: '逮捕；使停下', pos: 'v', level: 'B1', tags: ['verb'], ex: ['La policía detuvo al ladrón.', '警察逮捕了小偷。'], note: '变位同 tener：detuvo。' },
    { id: 'denunciar', es: 'denunciar', zh: '报案；揭发', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Fui a la comisaría a denunciar el robo.', '我去警察局报案。'] },
    { id: 'denuncia', es: 'denuncia', zh: '报案；举报', pos: 'n', g: 'f', level: 'B1', tags: ['city'], ex: ['Tienes que poner una denuncia.', '你得去报案。'] },
    { id: 'suceder', es: 'suceder', zh: '发生；继承', pos: 'v', level: 'B1', tags: ['verb'], ex: ['¿Qué sucedió exactamente?', '到底发生了什么？'], note: '比 pasar 正式。' },
    { id: 'resulta-que', es: 'resulta que', zh: '事情是这样的；原来', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Resulta que el restaurante estaba cerrado.', '原来那家餐馆关门了。'] },
    { id: 'que-fuerte', es: '¡qué fuerte!', zh: '太夸张了！不会吧！（口语）', pos: 'interj', level: 'B1', tags: ['feel'], ex: ['¿Se ha casado en Las Vegas? ¡Qué fuerte!', '他在拉斯维加斯结婚了？太夸张了！'] },
    { id: 'al-cabo-de', es: 'al cabo de', zh: '……之后', pos: 'phr', level: 'B1', tags: ['time'], ex: ['Al cabo de un rato, volvió.', '过了一会儿，他回来了。'] },
    { id: 'de-pronto', es: 'de pronto', zh: '突然', pos: 'phr', level: 'B1', tags: ['time'], ex: ['De pronto se apagaron las luces.', '灯突然全灭了。'] },
    { id: 'poco-despues', es: 'poco después', zh: '不久之后', pos: 'phr', level: 'B1', tags: ['time'], ex: ['Poco después llegó la policía.', '不久警察就来了。'] },
    { id: 'en-ese-momento', es: 'en ese momento', zh: '就在那时', pos: 'phr', level: 'B1', tags: ['time'], ex: ['En ese momento sonó el teléfono.', '就在那时电话响了。'] },
    { id: 'casualidad', es: 'casualidad', zh: '巧合', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['¡Qué casualidad verte aquí!', '在这里遇到你真巧！'], note: 'por casualidad = 偶然地。' },
    { id: 'coincidencia', es: 'coincidencia', zh: '巧合；一致', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['No es una coincidencia.', '这不是巧合。'] },
    { id: 'despistado', es: 'despistado', zh: '心不在焉的；丢三落四的', pos: 'adj', f: 'despistada', level: 'B1', tags: ['feel'], ex: ['Soy tan despistado que siempre pierdo las llaves.', '我太丢三落四了，总是丢钥匙。'], ety: 'des- + pista「踪迹」：“丢了踪迹”的。' },
    { id: 'avergonzado', es: 'avergonzado', zh: '羞愧的；难为情的', pos: 'adj', f: 'avergonzada', level: 'B1', tags: ['feel'], ex: ['Me sentí muy avergonzado.', '我觉得很难为情。'], note: '这才是英语 embarrassed 的意思（不是 embarazada）。' },
    { id: 'asustado', es: 'asustado', zh: '受惊的；害怕的', pos: 'adj', f: 'asustada', level: 'B1', tags: ['feel'], ex: ['El niño estaba muy asustado.', '孩子吓坏了。'] },
    { id: 'sorprendido', es: 'sorprendido', zh: '惊讶的', pos: 'adj', f: 'sorprendida', level: 'B1', tags: ['feel'], ex: ['Me quedé sorprendido al verla.', '看到她我很惊讶。'] },
    { id: 'aliviado', es: 'aliviado', zh: '松了一口气的', pos: 'adj', f: 'aliviada', level: 'B1', tags: ['feel'], ex: ['Cuando encontré el pasaporte, me sentí aliviado.', '找到护照时，我松了一口气。'] },
    { id: 'golpe', es: 'golpe', zh: '撞击；一下（打击）', pos: 'n', g: 'm', level: 'B1', tags: ['body'], ex: ['Me di un golpe en la cabeza.', '我撞到了头。'], note: 'de golpe = 突然。' },
    { id: 'grito', es: 'grito', zh: '喊叫', pos: 'n', g: 'm', level: 'B1', tags: ['feel'], ex: ['De pronto oímos un grito.', '我们突然听到一声尖叫。'] },
    { id: 'oscuridad', es: 'oscuridad', zh: '黑暗', pos: 'n', g: 'f', level: 'B1', tags: ['weather'], ex: ['No veía nada en la oscuridad.', '黑暗中我什么也看不见。'] },
    { id: 'sombra', es: 'sombra', zh: '影子；阴凉处', pos: 'n', g: 'f', level: 'B1', tags: ['weather'], ex: ['Vi una sombra en la ventana.', '我看见窗户上有个影子。'] },
    { id: 'quedarse-encerrado', es: 'quedarse encerrado', zh: '被关在里面', pos: 'phr', level: 'B1', tags: ['home'], ex: ['Me quedé encerrado en el baño.', '我被关在卫生间里了。'] },
    { id: 'atrapado', es: 'atrapado', zh: '被困的', pos: 'adj', f: 'atrapada', level: 'B1', tags: ['adj'], ex: ['Estuvimos atrapados en el ascensor una hora.', '我们在电梯里被困了一个小时。'] },
    { id: 'rescatar', es: 'rescatar', zh: '营救', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Los bomberos rescataron al gato.', '消防员救出了那只猫。'] },
    { id: 'bombero', es: 'bombero', zh: '消防员', pos: 'n', g: 'm', f: 'bombera', level: 'B1', tags: ['job'], ex: ['Llamamos a los bomberos.', '我们叫了消防员。'], ety: '来自 bomba「水泵」：早期消防员负责操作水泵。', emoji: '🚒' },
    { id: 'investigar', es: 'investigar', zh: '调查；研究', pos: 'v', level: 'B1', tags: ['verb'], ex: ['La policía está investigando el caso.', '警察正在调查此案。'] },
    { id: 'pista', es: 'pista', zh: '线索；跑道；（运动）场', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['Dame una pista.', '给我点提示。'] },
    { id: 'huella', es: 'huella', zh: '痕迹；脚印；指纹', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['El ladrón no dejó huellas.', '小偷没有留下痕迹。'] },
    { id: 'culpable', es: 'culpable', zh: '有罪的；该负责的', pos: 'adj', level: 'B1', tags: ['people'], ex: ['¿Quién es el culpable?', '罪魁祸首是谁？'] },
    { id: 'inocente', es: 'inocente', zh: '无辜的；天真的', pos: 'adj', level: 'B1', tags: ['people'], ex: ['Él dice que es inocente.', '他说自己是无辜的。'], note: '12 月 28 日是西班牙的“愚人节”：Día de los Santos Inocentes。' },
    { id: 'confesar', es: 'confesar', zh: '承认；坦白', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Al final confesó la verdad.', '最后他说出了真相。'], note: 'e→ie：confieso。' },
    { id: 'choque', es: 'choque', zh: '碰撞', pos: 'n', g: 'm', level: 'B1', tags: ['travel'], ex: ['Hubo un choque entre dos coches.', '两辆车撞了。'] },
    { id: 'chocar', es: 'chocar', zh: '撞', pos: 'v', level: 'B1', tags: ['verb', 'travel'], ex: ['La moto chocó contra un árbol.', '摩托车撞上了一棵树。'], note: 'c→qu：choqué。' },
    { id: 'herido', es: 'herido', zh: '受伤的；伤员', pos: 'adj', f: 'herida', level: 'B1', tags: ['body'], ex: ['No hubo heridos.', '没有人受伤。'] },
    { id: 'salvar', es: 'salvar', zh: '救', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Le salvó la vida.', '他救了她的命。'], ety: '拉丁语 salvare，来自 salvus「安全的」。' },
  ],
  sentences: [
    { id: 's1', es: 'Cuando llegué al cine, la película ya había empezado.', zh: '我到电影院时，电影已经开始了。', g: ['b1-plusc'], distract: ['empezaba'] },
    { id: 's2', es: 'Nunca había visto el mar hasta los veinte años.', zh: '我二十岁之前从没见过大海。', g: ['b1-plusc'], distract: ['vido'] },
    { id: 's3', es: 'No pude entrar porque me había dejado las llaves en casa.', zh: '我进不去，因为我把钥匙忘在家里了。', g: ['b1-plusc'] },
    { id: 's4', es: 'Cuando llamé, ya se habían ido.', zh: '我打电话的时候，他们已经走了。', g: ['b1-plusc'] },
    { id: 's5', es: 'Me dijo que había perdido el tren.', zh: '他告诉我他错过了火车。', g: ['b1-plusc'] },
    { id: 's6', es: 'Eran las doce y llovía mucho.', zh: '那时是十二点，雨下得很大。', g: ['b1-narrar'] },
    { id: 's7', es: 'Al llegar a casa, me di cuenta de que no tenía las llaves.', zh: '一到家，我就发现没带钥匙。', g: ['b1-narrar'], distract: ['llegué'] },
    { id: 's8', es: 'Estaba durmiendo cuando, de repente, sonó el teléfono.', zh: '我正在睡觉，突然电话响了。', g: ['b1-narrar'], distract: ['sonaba'] },
    { id: 's9', es: 'Al cabo de una hora, llegaron los bomberos.', zh: '一小时后，消防员来了。', g: ['b1-narrar'] },
    { id: 's10', es: 'Al final, todo salió bien.', zh: '最后一切顺利。', g: ['b1-narrar'] },
    { id: 's11', es: '¿Sabes qué me pasó ayer?', zh: '你知道我昨天遇到什么事了吗？', g: ['b1-anecdota'] },
    { id: 's12', es: 'Resulta que me quedé encerrado en el ascensor.', zh: '事情是这样的：我被困在电梯里了。', g: ['b1-anecdota'] },
    { id: 's13', es: 'Total, que llegué dos horas tarde.', zh: '总之，我迟到了两个小时。', g: ['b1-anecdota'] },
    { id: 's14', es: '¡Qué casualidad! Yo también soy de Hangzhou.', zh: '真巧！我也是杭州人。', g: ['b1-anecdota'] },
    { id: 's15', es: '¡Qué mala suerte!', zh: '真倒霉！', g: ['b1-anecdota'] },
    { id: 's16', es: 'El ladrón huyó por la ventana.', zh: '小偷从窗户逃走了。' },
    { id: 's17', es: 'La policía detuvo al sospechoso.', zh: '警察逮捕了嫌疑人。' },
    { id: 's18', es: 'Alguien había dejado la puerta abierta.', zh: '有人没关门。', g: ['b1-plusc'] },
    { id: 's19', es: 'Cuando llegaron los bomberos, el fuego ya se había apagado.', zh: '消防员到的时候，火已经灭了。', g: ['b1-plusc'] },
    { id: 's20', es: 'Era la primera vez que viajaba sola.', zh: '那是她第一次一个人旅行。', g: ['b1-narrar'] },
    { id: 's21', es: 'De pronto se apagaron todas las luces.', zh: '突然所有的灯都灭了。', g: ['b1-narrar'] },
    { id: 's22', es: 'Había mucha gente en la plaza.', zh: '广场上有很多人。', g: ['b1-plusc'], distract: ['Habían'] },
    { id: 's23', es: 'Soy tan despistado que siempre pierdo las llaves.', zh: '我太丢三落四了，总是丢钥匙。' },
    { id: 's24', es: 'Fui a la comisaría a denunciar el robo.', zh: '我去警察局报案。' },
    { id: 's25', es: 'No te vas a creer lo que me pasó.', zh: '你不会相信我遇到了什么事。', g: ['b1-anecdota'] },
  ],
  cloze: [
    { id: 'c1', text: 'Cuando llegué, el tren ya ___.', answers: ['había salido'], options: ['había salido', 'salía', 'ha salido'], zh: '我到的时候，火车已经开走了。', g: ['b1-plusc'] },
    { id: 'c2', text: 'Nunca ___ (yo) tanta nieve antes de aquel invierno.', answers: ['había visto'], hint: 'ver', zh: '那个冬天之前，我从没见过那么多雪。', g: ['b1-plusc'] },
    { id: 'c3', text: 'Me dijo que ___ (él) los deberes.', answers: ['había hecho'], hint: 'hacer', zh: '他跟我说他已经做完作业了。', g: ['b1-plusc'] },
    { id: 'c4', text: 'Cuando volvimos, alguien ___ la ventana.', answers: ['había roto'], hint: 'romper', zh: '我们回来时，有人已经把窗户打破了。', g: ['b1-plusc'] },
    { id: 'c5', text: 'No tenía hambre porque ya ___ (yo).', answers: ['había comido'], hint: 'comer', zh: '我不饿，因为我已经吃过了。', g: ['b1-plusc'] },
    { id: 'c6', text: 'Cuando llamaste, mis padres ya ___ (volver).', answers: ['habían vuelto'], hint: 'volver', zh: '你打电话时，我父母已经回来了。', g: ['b1-plusc'] },
    { id: 'c7', text: '___ muchas personas en la fiesta.', answers: ['Había'], options: ['Había', 'Habían', 'Hubieron'], zh: '派对上有很多人。', g: ['b1-plusc'], explain: '表示“有”的 haber 永远用单数。' },
    { id: 'c8', text: '___ las diez de la noche cuando oímos el grito.', answers: ['Eran'], options: ['Eran', 'Fueron', 'Habían sido'], zh: '我们听到尖叫声时是晚上十点。', g: ['b1-narrar'], explain: '时间是背景，用过去未完成时。' },
    { id: 'c9', text: 'Estaba cocinando cuando, de repente, ___ la luz.', answers: ['se fue'], options: ['se fue', 'se iba', 'se ha ido'], zh: '我正在做饭，突然停电了。', g: ['b1-narrar'] },
    { id: 'c10', text: 'Al ___ al hotel, vimos que no había habitaciones.', answers: ['llegar'], options: ['llegar', 'llegamos', 'llegando'], zh: '到了酒店，我们发现没有房间了。', g: ['b1-narrar'] },
    { id: 'c11', text: 'Al ___ de dos horas, por fin nos rescataron.', answers: ['cabo'], options: ['cabo', 'final', 'fin'], zh: '两个小时后，我们终于获救了。', g: ['b1-narrar'] },
    { id: 'c12', text: 'Mientras yo ___, mi hermano jugaba con el ordenador.', answers: ['estudiaba'], hint: 'estudiar', zh: '我在学习的时候，我弟弟在玩电脑。', g: ['b1-narrar'] },
    { id: 'c13', text: '___ que el museo estaba cerrado.', answers: ['Resulta'], options: ['Resulta', 'Resultado', 'Resulta de'], zh: '原来博物馆关门了。', g: ['b1-anecdota'] },
    { id: 'c14', text: '___, que no fuimos a la playa.', answers: ['Total'], options: ['Total', 'Todo', 'Final'], zh: '总之，我们没去成海滩。', g: ['b1-anecdota'] },
    { id: 'c15', text: '—Me he quedado encerrado en el baño. —¡___ susto!', answers: ['Qué'], options: ['Qué', 'Que', 'Cuál'], zh: '——我被关在卫生间里了。——吓死了！', g: ['b1-anecdota'] },
    { id: 'c16', text: 'El ladrón ___ por la ventana.', answers: ['huyó'], hint: 'huir', zh: '小偷从窗户逃跑了。', g: ['b1-narrar'] },
    { id: 'c17', text: 'Cuando la policía llegó, los ladrones ya se ___ ido.', answers: ['habían'], hint: 'haber', zh: '警察赶到时，小偷们已经跑了。', g: ['b1-plusc'] },
    { id: 'c18', text: 'Era la primera vez que ___ (yo) en avión.', answers: ['viajaba'], hint: 'viajar', zh: '那是我第一次坐飞机。', g: ['b1-narrar'] },
  ],
  conj: [
    { verbs: ['hablar', 'comer', 'vivir', 'hacer', 'ver', 'decir', 'escribir', 'poner', 'volver', 'romper', 'abrir', 'morir'], tenses: ['plusc'], g: 'b1-plusc' },
    { verbs: ['huir', 'detener', 'caer', 'oír', 'leer', 'construir'], tenses: ['pret'], g: 'b1-narrar' },
  ],
  dialogues: [
    {
      id: 'b1-u05-d1',
      title: '倒霉的一天 · ¡Qué día!',
      lines: [
        { who: 'Lucas', es: '¿Sabes qué me pasó ayer? No te lo vas a creer.', zh: '你知道我昨天遇到什么事了吗？你肯定不信。' },
        { who: 'Mei', es: '¿Qué? Cuéntame.', zh: '什么事？快说。' },
        { who: 'Lucas', es: 'Resulta que volví a casa a las once de la noche y, al abrir la mochila, vi que no tenía las llaves. Me las había dejado en la oficina.', zh: '事情是这样的：我晚上十一点回家，一打开背包，发现没带钥匙。我把钥匙忘在办公室了。' },
        { who: 'Mei', es: '¡No me digas! ¿Y tu compañero de piso?', zh: '不会吧！那你的室友呢？' },
        { who: 'Lucas', es: 'Se había ido a Valencia el fin de semana. Y encima empezó a llover.', zh: '他周末去瓦伦西亚了。更糟的是，还开始下雨了。' },
        { who: 'Mei', es: '¡Qué mala suerte! ¿Y qué hiciste?', zh: '真倒霉！那你怎么办的？' },
        { who: 'Lucas', es: 'Llamé a un cerrajero. Al cabo de una hora llegó y abrió la puerta en dos minutos. ¡Me cobró ciento veinte euros!', zh: '我叫了个锁匠。一小时后他来了，两分钟就把门打开了。收了我一百二十欧！' },
        { who: 'Mei', es: '¡Qué fuerte! La próxima vez déjame una copia de tus llaves.', zh: '太夸张了！下次给我留一把你的备用钥匙吧。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r09',
      level: 'B1',
      title: 'El misterio de la bicicleta',
      titleZh: '自行车之谜',
      topic: '故事',
      paras: [
        [
          ['Era un lunes de noviembre y hacía mucho frío. Cuando Xiao Ming bajó a la calle para ir a clase, vio que su bicicleta no estaba. La había dejado atada a una farola la noche anterior.', '那是十一月的一个星期一，天很冷。小明下楼去上课时，发现自行车不见了。前一天晚上他把车锁在了一根路灯柱上。'],
        ],
        [
          ['Al principio pensó que alguien la había robado, así que fue a la comisaría a poner una denuncia. El policía le preguntó si había visto a alguien sospechoso, pero él no había visto a nadie.', '起初他以为车被偷了，于是去警察局报案。警察问他有没有看到可疑的人，可他谁也没看见。'],
        ],
        [
          ['Tres días después, al volver de la universidad, encontró la bicicleta en el portal con una nota: «Perdona. Anoche perdí el último autobús y mi madre estaba enferma. Tu candado estaba abierto. Gracias por ayudarme sin saberlo».', '三天后，他从大学回来时，在楼门口发现了自行车，上面有一张纸条：“对不起。那天晚上我错过了末班车，我妈妈病了。你的锁没锁上。谢谢你在不知情的情况下帮了我。”'],
          ['Xiao Ming se quedó sorprendido. Al final, decidió que no estaba enfadado: solo se compró un candado nuevo.', '小明愣住了。最后，他决定不生气了：只是买了一把新锁。'],
        ],
      ],
      gloss: { atada: '拴着的', farola: '路灯柱', anterior: '之前的', comisaría: '警察局', denuncia: '报案', sospechoso: '可疑的', nota: '纸条', candado: '挂锁', saberlo: '知道这件事' },
      questions: [
        { type: 'mc', q: '小明的自行车原本在哪里？', options: ['车库里', '锁在路灯柱上', '大学里'], answer: 1 },
        { type: 'mc', q: '借车的人为什么要用自行车？', options: ['想去旅行', '错过了末班车，妈妈病了', '要去上课'], answer: 1 },
        { type: 'tf', q: '最后小明很生气，又去了一次警察局。', answer: false, explain: 'decidió que no estaba enfadado' },
      ],
    },
    {
      id: 'b1-r10',
      level: 'B1',
      title: 'Recupera su cartera veinte años después',
      titleZh: '二十年后找回钱包',
      topic: '新闻',
      paras: [
        [
          ['Un vecino de Zaragoza recuperó ayer la cartera que había perdido hace veinte años en un cine de la ciudad.', '萨拉戈萨一位居民昨天找回了他二十年前在本市一家电影院丢失的钱包。'],
        ],
        [
          ['Unos obreros que estaban reformando el antiguo cine encontraron la cartera detrás de una pared. Dentro había una foto, un carné de biblioteca y un billete de mil pesetas, la moneda que se usaba en España antes del euro.', '几名正在翻修老电影院的工人在一堵墙后面发现了这个钱包。里面有一张照片、一张图书证和一张一千比塞塔的钞票——比塞塔是欧元之前西班牙使用的货币。'],
        ],
        [
          ['«Ya me había olvidado de ella», explicó el hombre, sorprendido. «Aquella noche había ido al cine con la que hoy es mi mujer. Era nuestra primera cita».', '“我早就把它忘了，”这位男士惊讶地说，“那天晚上我和现在的妻子去看电影。那是我们第一次约会。”'],
          ['Lo que más le emocionó fue la foto: era de los dos, en la playa, el verano en que se conocieron.', '最让他感动的是那张照片：是两人在海滩上的合影，摄于他们相识的那个夏天。'],
        ],
      ],
      gloss: { recuperó: '找回', obreros: '工人', reformando: '翻修', carné: '证件', pesetas: '比塞塔（旧货币）', moneda: '货币', cita: '约会', emocionó: '使感动' },
      questions: [
        { type: 'mc', q: '钱包是在哪里找到的？', options: ['海滩上', '旧电影院的墙后面', '图书馆里'], answer: 1 },
        { type: 'tf', q: '钱包里有一张欧元钞票。', answer: false, explain: 'un billete de mil pesetas' },
        { type: 'mc', q: '那天晚上这位男士在做什么？', options: ['和现在的妻子第一次约会', '和朋友喝酒', '在电影院工作'], answer: 0 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '讲一件你经历过的趣事或倒霉事（丢东西、迟到、巧遇……）：先交代背景（过去未完成时），再讲发生了什么（简单过去时），至少用两次过去完成时。', words: [90, 160], hints: ['Era… / Hacía… / Estaba…', 'Resulta que… / De repente…', '… porque ya había…', 'Al final… / Total, que…'] }],
}
