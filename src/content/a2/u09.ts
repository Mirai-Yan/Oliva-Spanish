import type { Unit } from '../types'

export const u09: Unit = {
  id: 'a2-u09',
  level: 'A2',
  order: 9,
  title: '展望未来',
  titleEs: 'El futuro',
  icon: '🔮',
  goals: ['用将来时谈论计划、预测和承诺', '用条件式礼貌地提出请求和愿望', '用 si 句表达“如果……就……”', '谈论学习和工作的规划'],
  grammar: [
    {
      id: 'a2-futuro',
      title: '将来未完成时（简单将来时）',
      titleEs: 'El futuro simple',
      level: 'A2',
      summary: '原形 + é, ás, á, emos, éis, án（三类动词共用）；12 个常用动词词根不规则：tendré, haré, diré…',
      body: `### 规则：直接在 **原形** 后面加词尾
| 人称 | 词尾 | hablar | comer | vivir |
|---|---|---|---|---|
| yo | **-é** | hablar**é** | comer**é** | vivir**é** |
| tú | **-ás** | hablar**ás** | comer**ás** | vivir**ás** |
| él / ella | **-á** | hablar**á** | comer**á** | vivir**á** |
| nosotros | **-emos** | hablar**emos** | comer**emos** | vivir**emos** |
| vosotros | **-éis** | hablar**éis** | comer**éis** | vivir**éis** |
| ellos | **-án** | hablar**án** | comer**án** | vivir**án** |

### 不规则词根（词尾不变）
| 去掉元音 | 换成 d | 特殊 |
|---|---|---|
| poder → **podr**é | tener → **tendr**é | hacer → **har**é |
| saber → **sabr**é | poner → **pondr**é | decir → **dir**é |
| haber → **habr**á | salir → **saldr**é | |
| querer → **querr**é | venir → **vendr**é | |
| caber → **cabr**é | valer → **valdr**é | |

### 用法
- **预测**：*Mañana **lloverá** en el norte.*（明天北部有雨。）
- **较远的计划**：*Algún día **viviré** en España.*（总有一天我要住在西班牙。）
- **承诺**：*Te **llamaré** esta noche.*（我今晚给你打电话。）

### 将来时 vs ir a + 原形
口语里说具体、确定的近期计划多用 *ir a*：*Esta tarde voy a estudiar.* 将来时更多用于预测、承诺和较远的未来。`,
      examples: [
        ['El año que viene estudiaré un máster en España.', '明年我要去西班牙读硕士。'],
        ['¿Qué harás después de terminar la carrera?', '大学毕业后你打算做什么？'],
        ['Mañana hará sol en todo el país.', '明天全国都是晴天。'],
        ['Te lo diré cuando llegue el momento.', '时候到了我会告诉你。'],
        ['Dentro de diez años, los coches serán eléctricos.', '十年后汽车都会是电动的。'],
      ],
      tables: [
        { verbs: ['hablar', 'tener', 'hacer'], tense: 'fut' },
      ],
      origin: `**将来时是“原形 + haber”拼出来的！** 古典拉丁语的将来时（*amabo*）在通俗拉丁语里消失了，人们改说 *amare habeo*，意思是“我有（义务）去爱”→“我将爱”。慢慢地 *habeo* 变成了词尾：
*cantar + he → cantaré*、*cantar + has → cantarás*、*cantar + ha → cantará*

证据就在中世纪西语里：那时代词可以插在中间，写成 **cantar lo he**（我将唱它）！这就是为什么将来时的词尾和 *haber* 的现在时（*he, has, ha, hemos, habéis, han*）几乎一模一样。

不规则形式是原形读快了以后省略元音造成的：*tenerá → tenrá → tendrá*（为了好读加了 d）。`,
      pitfalls: ['❌ *teneré, poneré, saliré* ✅ *tendré, pondré, saldré*。', '❌ *hablaré*、*hablare* 混淆：将来时第一人称要有重音 ✅ *hablaré*。', '❌ *haceré* ✅ *haré*；❌ *deciré* ✅ *diré*。'],
    },
    {
      id: 'a2-condicional',
      title: '条件式：礼貌请求和愿望',
      titleEs: 'El condicional de cortesía',
      level: 'A2',
      summary: '原形 + ía, ías, ía, íamos, íais, ían（不规则词根同将来时）：¿Podría…? Me gustaría… Deberías…',
      body: `### 构成：原形 + 过去未完成时的 -er 词尾
| 人称 | hablar | poder | hacer |
|---|---|---|---|
| yo | hablar**ía** | podr**ía** | har**ía** |
| tú | hablar**ías** | podr**ías** | har**ías** |
| él / ella / usted | hablar**ía** | podr**ía** | har**ía** |
| nosotros | hablar**íamos** | podr**íamos** | har**íamos** |
| vosotros | hablar**íais** | podr**íais** | har**íais** |
| ellos | hablar**ían** | podr**ían** | har**ían** |

> 不规则词根和将来时完全相同：*tendría, pondría, saldría, vendría, sabría, querría, diría…*

### A2 阶段最常用的三种用法
1. **礼貌请求**：*¿**Podría** ayudarme?*（您能帮我一下吗？）*¿Te **importaría** cerrar la ventana?*（你介意关一下窗吗？）
2. **愿望**：*Me **gustaría** viajar a Perú.*（我很想去秘鲁旅行。）*Me **encantaría**.*（我非常乐意。）
3. **建议**：*Deberías descansar.*（你应该休息。）***Yo que tú**, iría al médico.*（我要是你，就去看医生。）

### 对比
| 直接 | 礼貌 |
|---|---|
| *Quiero un café.* | *Querría / Me gustaría un café.* |
| *¿Puedes…?* | *¿Podrías…?* |`,
      examples: [
        ['¿Podría hablar más despacio, por favor?', '您能说慢一点吗？'],
        ['Me gustaría trabajar en una empresa internacional.', '我很想在一家国际公司工作。'],
        ['Deberías dormir más.', '你应该多睡一点。'],
        ['Yo que tú, aceptaría el trabajo.', '我要是你，就接受这份工作。'],
        ['¿Te importaría ayudarme con las maletas?', '你介意帮我拿一下行李吗？'],
      ],
      tables: [{ verbs: ['poder', 'gustar'], tense: 'cond' }],
      origin: `条件式和将来时是“双胞胎”：将来时 = 原形 + *haber* 的现在时（*he*），条件式 = 原形 + *haber* 的过去未完成时（*(hab)ía*）：
*cantar + (hab)ía → cantaría* ——“我那时有（义务）去唱”→“我会唱”。所以它常表示“在某种条件下才会发生”的事，也就有了委婉、客气的语气。`,
      pitfalls: ['❌ *Me gustaría que* + 原形… 先记住 ✅ *Me gustaría* + 原形。', '❌ *podería* ✅ *podría*；❌ *teneria* ✅ *tendría*。'],
    },
    {
      id: 'a2-si-futuro',
      title: '真实条件句：si + 现在时',
      titleEs: 'Oraciones condicionales reales',
      level: 'A2',
      summary: 'Si + 现在时, 将来时 / 现在时 / 命令式：Si llueve, nos quedaremos en casa. si 后面不能用将来时。',
      body: `表示 **有可能发生** 的条件：

| si 从句 | 主句 | 例句 |
|---|---|---|
| **si + 现在时** | 将来时 | *Si estudias, **aprobarás**.* |
| **si + 现在时** | 现在时 | *Si quieres, te **ayudo**.* |
| **si + 现在时** | 命令式 | *Si tienes hambre, **come** algo.* |
| **si + 现在时** | ir a + 原形 | *Si hace sol, **vamos a ir** a la playa.* |

### 最重要的规则
**si 后面不能用将来时**（中文“如果明天下雨”里也没有“将”字）：
❌ *Si lloverá mañana…* ✅ *Si llueve mañana, no iremos.*

### 顺序可以换
*No iremos **si** llueve.* —— 主句在前时不用逗号

### 注意 si 和 sí
**si**（如果）不带重音；**sí**（是的）带重音。`,
      examples: [
        ['Si llueve, nos quedaremos en casa.', '如果下雨，我们就待在家里。'],
        ['Si tienes tiempo, llámame.', '你有空的话给我打电话。'],
        ['Si quieres, te acompaño.', '你愿意的话我陪你去。'],
        ['Si apruebo el examen, haré una fiesta.', '如果考试通过，我就办个派对。'],
        ['No saldremos si hace mucho frío.', '如果太冷我们就不出去了。'],
      ],
      origin: `**si** 来自拉丁语 *si*（如果），两千年来几乎没变。表示“是的”的 **sí** 来自 *sic*（这样），两个词本来不一样，现在读音相同，所以用重音符号区分。`,
      pitfalls: ['❌ *Si tendré tiempo, iré.* ✅ *Si tengo tiempo, iré.*', '把 si 写成 sí：❌ *Sí llueve…* ✅ *Si llueve…*'],
    },
  ],
  words: [
    { id: 'futuro', es: 'futuro', zh: '未来；将来', pos: 'n', g: 'm', level: 'A2', tags: ['time'], ex: ['¿Qué planes tienes para el futuro?', '你对未来有什么打算？'] },
    { id: 'algun-dia', es: 'algún día', zh: '总有一天', pos: 'phr', level: 'A2', tags: ['time'], ex: ['Algún día viviré junto al mar.', '总有一天我要住在海边。'] },
    { id: 'dentro-de', es: 'dentro de', zh: '……之后；在……里面', pos: 'prep', level: 'A2', tags: ['time'], ex: ['Volveré dentro de dos semanas.', '我两周后回来。'] },
    { id: 'quizas', es: 'quizás', zh: '也许', pos: 'adv', level: 'A2', tags: ['func'], ex: ['Quizás iré a la fiesta.', '也许我会去聚会。'], note: '也写作 quizá。' },
    { id: 'seguramente', es: 'seguramente', zh: '很可能；肯定', pos: 'adv', level: 'A2', tags: ['func'], ex: ['Seguramente lloverá mañana.', '明天很可能下雨。'] },
    { id: 'probablemente', es: 'probablemente', zh: '可能', pos: 'adv', level: 'A2', tags: ['func'], ex: ['Probablemente llegaré tarde.', '我可能会晚到。'] },
    { id: 'plan', es: 'plan', zh: '计划', pos: 'n', g: 'm', pl: 'planes', level: 'A2', tags: ['func'], ex: ['¿Tienes planes para el verano?', '你夏天有什么计划吗？'] },
    { id: 'objetivo', es: 'objetivo', zh: '目标', pos: 'n', g: 'm', level: 'A2', tags: ['func'], ex: ['Mi objetivo es aprobar el DELE.', '我的目标是通过 DELE 考试。'] },
    { id: 'profesion', es: 'profesión', zh: '职业', pos: 'n', g: 'f', pl: 'profesiones', level: 'A2', tags: ['job'], ex: ['¿Cuál es tu profesión?', '你的职业是什么？'] },
    { id: 'empleo', es: 'empleo', zh: '工作；就业', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Busco empleo como ingeniera.', '我在找工程师的工作。'] },
    { id: 'paro', es: 'paro', zh: '失业', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Mi primo está en el paro.', '我表哥失业了。'], latam: '拉美多说 desempleo 或 estar desempleado。' },
    { id: 'sueldo', es: 'sueldo', zh: '工资', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['El sueldo es bastante bueno.', '工资相当不错。'], ety: '拉丁语 solidus（一种金币）。英语 soldier（领军饷的人）同源。' },
    { id: 'entrevista', es: 'entrevista', zh: '面试；采访', pos: 'n', g: 'f', level: 'A2', tags: ['job'], ex: ['Mañana tengo una entrevista de trabajo.', '我明天有个工作面试。'] },
    { id: 'curriculum', es: 'currículum', zh: '简历', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Te mandaré mi currículum.', '我会把简历发给你。'], note: '也写作 currículo；简称 CV。' },
    { id: 'contrato', es: 'contrato', zh: '合同', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Firmaré el contrato la semana que viene.', '我下周签合同。'] },
    { id: 'master', es: 'máster', zh: '硕士课程', pos: 'n', g: 'm', pl: 'másteres', level: 'A2', tags: ['school'], ex: ['Quiero hacer un máster en Barcelona.', '我想在巴塞罗那读硕士。'] },
    { id: 'beca', es: 'beca', zh: '奖学金', pos: 'n', g: 'f', level: 'A2', tags: ['school'], ex: ['Me han dado una beca para estudiar en México.', '我拿到了去墨西哥留学的奖学金。'] },
    { id: 'aprobar', es: 'aprobar', zh: '通过（考试）；批准', pos: 'v', level: 'A2', tags: ['verb', 'school'], ex: ['Si estudias, aprobarás.', '你好好学就能通过。'], note: 'o→ue：apruebo。' },
    { id: 'suspender', es: 'suspender', zh: '（考试）不及格；暂停', pos: 'v', level: 'A2', tags: ['verb', 'school'], ex: ['Suspendí el examen de conducir.', '我驾照考试没过。'], latam: '拉美多说 reprobar。' },
    { id: 'nota', es: 'nota', zh: '分数；笔记', pos: 'n', g: 'f', level: 'A2', tags: ['school'], ex: ['Saqué buena nota en el examen.', '我考试得了好成绩。'] },
    { id: 'titulo', es: 'título', zh: '学位；标题', pos: 'n', g: 'm', level: 'A2', tags: ['school'], ex: ['Tengo el título de Derecho.', '我有法学学位。'] },
    { id: 'ahorrar', es: 'ahorrar', zh: '存钱；节省', pos: 'v', level: 'A2', tags: ['verb', 'shop'], ex: ['Ahorraré para comprar un coche.', '我要存钱买车。'] },
    { id: 'gastar', es: 'gastar', zh: '花（钱）', pos: 'v', level: 'A2', tags: ['verb', 'shop'], ex: ['Gasto mucho en ropa.', '我在衣服上花很多钱。'] },
    { id: 'tecnologia', es: 'tecnología', zh: '技术；科技', pos: 'n', g: 'f', level: 'A2', tags: ['school'], ex: ['La tecnología cambia muy rápido.', '科技变化得很快。'] },
    { id: 'robot', es: 'robot', zh: '机器人', pos: 'n', g: 'm', pl: 'robots', level: 'A2', tags: ['school'], ex: ['En el futuro los robots harán muchos trabajos.', '将来机器人会做很多工作。'], emoji: '🤖' },
    { id: 'electrico', es: 'eléctrico', f: 'eléctrica', zh: '电的；电动的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['Me compraré un coche eléctrico.', '我要买一辆电动车。'] },
    { id: 'planeta', es: 'planeta', zh: '行星；地球', pos: 'n', g: 'm', level: 'A2', tags: ['weather'], ex: ['Tenemos que cuidar el planeta.', '我们得爱护地球。'], note: '以 -a 结尾，但是阳性：el planeta。' },
    { id: 'me-gustaria', es: 'me gustaría', zh: '我很想；我希望', pos: 'phr', level: 'A2', tags: ['feel'], ex: ['Me gustaría aprender a bailar.', '我很想学跳舞。'] },
    { id: 'importar', es: 'importar', zh: '在乎；介意；进口', pos: 'v', level: 'A2', tags: ['verb'], ex: ['¿Te importa si abro la ventana?', '我开窗你介意吗？'], note: '用法像 gustar：me importa, te importa…' },
    { id: 'aceptar', es: 'aceptar', zh: '接受', pos: 'v', level: 'A2', tags: ['verb'], ex: ['¿Aceptarás la oferta?', '你会接受这个工作邀请吗？'] },
    { id: 'acompanar', es: 'acompañar', zh: '陪伴', pos: 'v', level: 'A2', tags: ['verb'], ex: ['¿Quieres que te acompañe?', '要我陪你去吗？'] },
    { id: 'yo-que-tu', es: 'yo que tú', zh: '我要是你', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Yo que tú, iría al médico.', '我要是你，就去看医生。'] },
  ],
  sentences: [
    { id: 's1', es: 'El año que viene estudiaré un máster.', zh: '明年我要读硕士。', g: ['a2-futuro'], distract: ['estudio'] },
    { id: 's2', es: '¿Qué harás después de la carrera?', zh: '大学毕业后你打算做什么？', g: ['a2-futuro'], distract: ['hacerás'] },
    { id: 's3', es: 'Mañana hará sol en todo el país.', zh: '明天全国都是晴天。', g: ['a2-futuro'] },
    { id: 's4', es: 'Te llamaré esta noche.', zh: '我今晚给你打电话。', g: ['a2-futuro'] },
    { id: 's5', es: 'Algún día viviré en España.', zh: '总有一天我要住在西班牙。', g: ['a2-futuro'] },
    { id: 's6', es: 'No podré ir a tu fiesta.', zh: '我去不了你的聚会了。', g: ['a2-futuro'], distract: ['poderé'] },
    { id: 's7', es: 'Volveré dentro de dos semanas.', zh: '我两周后回来。', g: ['a2-futuro'] },
    { id: 's8', es: 'Mis padres vendrán en verano.', zh: '我父母夏天会来。', g: ['a2-futuro'], distract: ['venirán'] },
    { id: 's9', es: '¿Podría ayudarme, por favor?', zh: '您能帮我一下吗？', g: ['a2-condicional'] },
    { id: 's10', es: 'Me gustaría trabajar en el extranjero.', zh: '我很想去国外工作。', g: ['a2-condicional'] },
    { id: 's11', es: 'Deberías dormir más.', zh: '你应该多睡一点。', g: ['a2-condicional'] },
    { id: 's12', es: 'Yo que tú, aceptaría el trabajo.', zh: '我要是你，就接受这份工作。', g: ['a2-condicional'] },
    { id: 's13', es: '¿Te importaría cerrar la ventana?', zh: '你介意关一下窗吗？', g: ['a2-condicional'] },
    { id: 's14', es: 'Querría un café con leche, por favor.', zh: '我想要一杯牛奶咖啡。', g: ['a2-condicional'] },
    { id: 's15', es: 'Si llueve, nos quedaremos en casa.', zh: '如果下雨，我们就待在家里。', g: ['a2-si-futuro'], distract: ['lloverá'] },
    { id: 's16', es: 'Si tienes tiempo, llámame.', zh: '你有空的话给我打电话。', g: ['a2-si-futuro'] },
    { id: 's17', es: 'Si quieres, te acompaño.', zh: '你愿意的话我陪你去。', g: ['a2-si-futuro'] },
    { id: 's18', es: 'Si apruebo, haré una fiesta.', zh: '如果我考过了，就办个派对。', g: ['a2-si-futuro'] },
    { id: 's19', es: 'No saldremos si hace frío.', zh: '如果冷的话我们就不出去了。', g: ['a2-si-futuro'] },
  ],
  cloze: [
    { id: 'c1', text: 'El próximo verano ___ (yo) a Argentina.', answers: ['viajaré'], hint: 'viajar', zh: '明年夏天我要去阿根廷旅行。', g: ['a2-futuro'] },
    { id: 'c2', text: 'Mañana ___ (llover) en el norte.', answers: ['lloverá'], hint: 'llover', zh: '明天北部有雨。', g: ['a2-futuro'] },
    { id: 'c3', text: '¿Qué ___ (tú) el fin de semana?', answers: ['harás'], hint: 'hacer', zh: '你周末要做什么？', g: ['a2-futuro'] },
    { id: 'c4', text: 'No te preocupes, te lo ___ (yo) mañana.', answers: ['diré'], hint: 'decir', zh: '别担心，我明天告诉你。', g: ['a2-futuro'] },
    { id: 'c5', text: 'Mis amigos ___ a las ocho.', answers: ['vendrán'], hint: 'venir', zh: '我的朋友们八点会来。', g: ['a2-futuro'] },
    { id: 'c6', text: 'Nosotros ___ que trabajar el sábado.', answers: ['tendremos'], hint: 'tener', zh: '我们星期六得上班。', g: ['a2-futuro'] },
    { id: 'c7', text: '¿___ (tú) venir a mi casa mañana?', answers: ['Podrás'], hint: 'poder', zh: '你明天能来我家吗？', g: ['a2-futuro'] },
    { id: 'c8', text: '¿___ hablar más despacio, por favor? (usted)', answers: ['Podría'], options: ['Podría', 'Podrá', 'Puede de'], zh: '您能说慢一点吗？', g: ['a2-condicional'] },
    { id: 'c9', text: 'Me ___ visitar Machu Picchu.', answers: ['gustaría'], options: ['gustaría', 'gustará', 'gusto'], zh: '我很想去马丘比丘看看。', g: ['a2-condicional'] },
    { id: 'c10', text: 'Estás muy cansado: ___ descansar.', answers: ['deberías'], options: ['deberías', 'deberás', 'debías'], zh: '你很累了：应该休息一下。', g: ['a2-condicional'] },
    { id: 'c11', text: 'Yo que tú, no ___ ese coche: es carísimo.', answers: ['compraría'], hint: 'comprar', zh: '我要是你，就不买那辆车：太贵了。', g: ['a2-condicional'] },
    { id: 'c12', text: 'Si ___ (llover), no iremos a la playa.', answers: ['llueve'], options: ['llueve', 'lloverá', 'llovería'], zh: '如果下雨，我们就不去海边。', g: ['a2-si-futuro'], explain: 'si 后面用现在时，不用将来时。' },
    { id: 'c13', text: 'Si tienes hambre, ___ algo. (comer, tú)', answers: ['come'], options: ['come', 'comerás', 'comes'], zh: '饿了就吃点东西。', g: ['a2-si-futuro'] },
    { id: 'c14', text: 'Si estudias mucho, ___ el examen.', answers: ['aprobarás'], hint: 'aprobar', zh: '你好好学，就能通过考试。', g: ['a2-si-futuro'] },
    { id: 'c15', text: '___ quieres, te llevo a la estación.', answers: ['Si'], options: ['Si', 'Sí', 'Se'], zh: '你愿意的话，我送你去车站。', g: ['a2-si-futuro'] },
  ],
  conj: [
    { verbs: ['hablar', 'comer', 'vivir', 'tener', 'hacer', 'decir', 'poder', 'salir', 'venir', 'poner', 'saber', 'querer'], tenses: ['fut'], g: 'a2-futuro' },
    { verbs: ['poder', 'deber', 'querer', 'tener', 'hacer', 'ser'], tenses: ['cond'], g: 'a2-condicional' },
  ],
  dialogues: [
    {
      id: 'a2-u09-d1',
      title: '毕业以后 · Después de la carrera',
      lines: [
        { who: 'Paula', es: 'Ya casi terminamos la carrera. ¿Qué harás el año que viene?', zh: '我们快毕业了。明年你打算做什么？' },
        { who: 'Xiao Yu', es: 'Me gustaría hacer un máster en Barcelona. He pedido una beca.', zh: '我很想去巴塞罗那读硕士。我申请了奖学金。' },
        { who: 'Paula', es: '¡Qué bien! ¿Y si no te la dan?', zh: '太好了！那如果没拿到呢？' },
        { who: 'Xiao Yu', es: 'Si no me la dan, trabajaré un año y ahorraré dinero. ¿Y tú?', zh: '如果没拿到，我就工作一年攒点钱。你呢？' },
        { who: 'Paula', es: 'Yo tengo una entrevista en una empresa de Madrid la semana que viene.', zh: '我下周在马德里一家公司有个面试。' },
        { who: 'Xiao Yu', es: '¡Seguro que te irá muy bien! Yo que tú, practicaría las preguntas típicas.', zh: '你肯定没问题！我要是你，就先练练常见问题。' },
        { who: 'Paula', es: 'Buena idea. ¿Me ayudarías a practicar?', zh: '好主意。你能帮我练练吗？' },
        { who: 'Xiao Yu', es: '¡Claro! Mañana quedamos y lo hacemos.', zh: '当然！明天我们约个时间一起练。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a2-r17',
      level: 'A2',
      title: '¿Cómo será la vida en 2050?',
      titleZh: '2050 年的生活会是什么样？',
      topic: '未来',
      paras: [
        [
          ['Muchos expertos creen que en 2050 la vida será muy diferente.', '很多专家认为，2050 年的生活会大不一样。'],
          ['Casi todos los coches serán eléctricos y muchos no tendrán conductor.', '几乎所有汽车都会是电动的，很多车将没有司机。'],
        ],
        [
          ['Los robots harán muchas tareas de la casa: limpiarán, cocinarán y cuidarán a las personas mayores.', '机器人会做很多家务：打扫、做饭、照顾老人。'],
          ['Trabajaremos menos horas y, seguramente, muchas personas trabajarán desde casa.', '我们的工作时间会更短，很可能很多人都在家办公。'],
        ],
        [
          ['Pero también habrá problemas: si no cuidamos el planeta, hará más calor y habrá menos agua.', '但也会有问题：如果我们不爱护地球，天气会更热，水会更少。'],
          ['¿Y tú qué crees? ¿Cómo será tu vida dentro de veinticinco años?', '你怎么看？二十五年后你的生活会是什么样？'],
        ],
      ],
      gloss: { expertos: '专家们', creen: '认为', conductor: '司机', tareas: '任务；家务', cuidarán: '将照顾', mayores: '年长的', habrá: '将会有', cuidamos: '我们爱护' },
      questions: [
        { type: 'mc', q: '根据文章，2050 年的汽车会怎么样？', options: ['更大', '几乎都是电动的', '更便宜'], answer: 1 },
        { type: 'tf', q: '人们的工作时间会更长。', answer: false, explain: 'Trabajaremos menos horas.' },
        { type: 'mc', q: '如果不爱护地球，会发生什么？', options: ['更冷', '更热、水更少', '机器人会更多'], answer: 1 },
      ],
    },
    {
      id: 'a2-r18',
      level: 'A2',
      title: 'Mis propósitos de Año Nuevo',
      titleZh: '我的新年计划',
      topic: '计划',
      paras: [
        [
          ['Todos los años escribo una lista de propósitos para el Año Nuevo. Este año, ¡los cumpliré todos!', '我每年都会写一张新年计划清单。今年，我要全部完成！'],
        ],
        [
          ['Primero, haré deporte tres veces por semana.', '第一，我每周运动三次。'],
          ['Segundo, leeré un libro en español cada mes.', '第二，我每个月读一本西班牙语书。'],
          ['Tercero, ahorraré dinero para viajar a México en verano.', '第三，我要存钱夏天去墨西哥旅行。'],
          ['Y cuarto, pasaré menos tiempo con el móvil.', '第四，我要少玩手机。'],
        ],
        [
          ['Mi madre dice que todos los años digo lo mismo y que en febrero ya no me acordaré.', '我妈妈说我每年都这么说，到了二月就忘光了。'],
          ['Pero esta vez será diferente. Bueno… eso espero.', '但这次不一样。嗯……我希望如此。'],
        ],
      ],
      gloss: { lista: '清单', propósitos: '决心；计划', cumpliré: '我将完成', cada: '每个', pasaré: '我将度过', mismo: '同样的（lo mismo 同样的话）', acordaré: '我将记得', espero: '我希望' },
      questions: [
        { type: 'mc', q: '作者打算每周运动几次？', options: ['一次', '三次', '每天'], answer: 1 },
        { type: 'mc', q: '作者为什么要存钱？', options: ['买车', '夏天去墨西哥旅行', '读硕士'], answer: 1 },
        { type: 'tf', q: '作者的妈妈相信这次作者会完成所有计划。', answer: false, explain: '妈妈说到了二月就忘了。' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一写你五年后的生活：你会住在哪里、做什么工作、会说什么语言；再写两句“如果……就……”。', words: [70, 130], hints: ['Dentro de cinco años viviré en…', 'Trabajaré como… / Hablaré…', 'Si…, …'] }],
}
