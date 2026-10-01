import type { Unit } from '../types'

export const u09: Unit = {
  id: 'b1-u09',
  level: 'B1',
  order: 9,
  title: '健康生活',
  titleEs: 'Cuídate',
  icon: '🩺',
  goals: ['用 si、en caso de que、siempre que 表达条件', '用多种方式提建议：deberías、yo que tú、lo mejor es que', '熟练使用带代词的肯定和否定命令式：dámelo, no me lo des', '看病、描述症状、给出健康建议'],
  grammar: [
    {
      id: 'b1-condiciones',
      title: '条件：si + 陈述式；en caso de que / siempre que + 虚拟式',
      titleEs: 'Expresar condiciones',
      level: 'B1',
      summary: 'si + 现在时（不能用将来时、也不能用虚拟式现在时）。en caso de que（万一）、siempre que（只要）、con tal de que（只要）+ 虚拟式。',
      body: `### si + 陈述式现在时（复习）
*Si **tienes** fiebre, **quédate** en casa.*（如果你发烧，就待在家里。）
*Si no **duermes** bien, **estarás** cansado.*

> **si** 后面永远不用虚拟式现在时：❌ *Si tengas…*

### 其他条件连词 + 虚拟式
| 连词 | 意思 | 例句 |
|---|---|---|
| ***en caso de que*** | 万一、如果 | *En caso de que **tengas** fiebre, llámame.* |
| ***siempre que*** | 只要（条件） | *Puedes hacer deporte siempre que no te **duela**.* |
| ***con tal de que*** | 只要（能……就行） | *Hago lo que sea con tal de que **te mejores**.* |

### 注意 siempre que 的两个意思
- *Siempre que **vengo**, llueve.*（每次我来都下雨。）→ 陈述式 = 每当
- *Te lo presto siempre que me lo **devuelvas**.*（只要你还我，我就借给你。）→ 虚拟式 = 只要

### en caso de + 名词 / 原形
*En caso de **emergencia**, llame al 112.*（紧急情况请拨打 112。）`,
      examples: [
        ['Si tienes fiebre, quédate en casa.', '如果你发烧，就待在家里。'],
        ['En caso de que te duela, toma una pastilla.', '万一疼的话，就吃一片药。'],
        ['Puedes correr siempre que no te duela la rodilla.', '只要膝盖不疼，你就可以跑步。'],
        ['Siempre que vengo a esta ciudad, llueve.', '每次我来这座城市都下雨。'],
        ['En caso de emergencia, llame al 112.', '紧急情况请拨打 112。'],
      ],
      origin: `**caso** 来自拉丁语 *casus*「落下；发生的事」，和上个单元的 *casualidad*（巧合）是一家。*en caso de que* 就是“如果这件事‘掉’下来、真的发生了”。

**siempre** 来自拉丁语 *semper*「总是」。*siempre que* 从“每当”引申出“只要”：每次都满足这个条件，结果就会发生。`,
      pitfalls: ['❌ *Si tengas tiempo, llámame.* ✅ *Si tienes tiempo, llámame.*', '❌ *En caso de que llueve…* ✅ *En caso de que llueva…*', '❌ *Si lloverá, no saldremos.* ✅ *Si llueve, no saldremos.*'],
    },
    {
      id: 'b1-consejos',
      title: '提建议的多种方式',
      titleEs: 'Dar consejos',
      level: 'B1',
      summary: 'deberías / tendrías que + 原形；yo que tú / yo en tu lugar + 条件式；lo mejor es + 原形 / que + 虚拟式；te aconsejo que + 虚拟式；¿Por qué no…?',
      body: `### 从委婉到直接
| 结构 | 例句 |
|---|---|
| *¿Por qué no…?* + 现在时 | *¿Por qué no **pruebas** el yoga?* |
| *Podrías* + 原形 | ***Podrías** caminar un poco cada día.* |
| *Deberías / Tendrías que* + 原形 | ***Deberías** dormir más.* |
| *Yo que tú / Yo en tu lugar* + 条件式 | ***Yo en tu lugar, iría** al médico.* |
| *Lo mejor es* + 原形 | ***Lo mejor es** descansar.* |
| *Lo mejor es que* + 虚拟式 | ***Lo mejor es que** te **quedes** en la cama.* |
| *Te aconsejo / recomiendo que* + 虚拟式 | ***Te aconsejo que** **bebas** más agua.* |
| 命令式（最直接） | ***Acuéstate** pronto.* |

### 回应建议
- 接受：*Tienes razón, lo voy a intentar.* / *Buena idea.*
- 婉拒：*Ya lo he probado, pero no funciona.* / *No sé, no me convence.*`,
      examples: [
        ['Deberías dormir al menos siete horas.', '你应该至少睡七个小时。'],
        ['Yo en tu lugar, iría al médico.', '我要是你，就去看医生。'],
        ['Lo mejor es que te quedes en la cama hoy.', '你今天最好躺在床上休息。'],
        ['¿Por qué no pruebas a meditar?', '你为什么不试试冥想呢？'],
        ['Te aconsejo que bebas más agua.', '我建议你多喝水。'],
      ],
      tables: [{ verbs: ['deber', 'tener', 'poder'], tense: 'cond' }],
      origin: `**consejo** 来自拉丁语 *consilium*「商议；计划」——古罗马的 *consilium* 是一群人坐下来一起商量的会议。英语 *counsel*（建议）、*council*（委员会）都来自同一个根。

为什么 *deberías* 比 *debes* 更客气？条件式让建议听起来是“在某种条件下”才成立的，不是命令。中文的“你也许可以……”也是同样的道理。`,
      pitfalls: ['❌ *Deberías de ir al médico.* ✅ *Deberías ir al médico.*', '❌ *Yo que tú, voy al médico.* ✅ *Yo que tú, iría al médico.*', '❌ *Lo mejor es que descansas.* ✅ *Lo mejor es que descanses.*'],
    },
    {
      id: 'b1-imperativo-pronombres',
      title: '命令式 + 代词：tómatelo, no te lo tomes',
      titleEs: 'El imperativo con pronombres',
      level: 'B1',
      summary: '肯定命令式：代词连在动词后面写成一个词（常需加重音）：dámelo, acuéstate, tómeselo。否定命令式：代词放在动词前面：no me lo des, no te acuestes。',
      body: `### 肯定：代词“粘”在后面
| 原形 | 命令式 | + 代词 |
|---|---|---|
| tomar (tú) | toma | **tómatelo**（把它吃了） |
| dar (tú) | da | **dámelo**（给我） |
| acostarse (tú) | acuesta | **acuéstate**（去睡吧） |
| tomar (usted) | tome | **tómeselo** |
| ponerse (vosotros) | poned | **poneos**（-d 去掉） |
| sentarse (nosotros) | sentemos | **sentémonos**（-s 去掉） |

> 加上代词后重音位置不变，所以常常要 **补写重音符号**：*toma → tómalo*。

### 否定：代词放在前面，用虚拟式
*No **me lo** des.*　*No **te** acuestes tarde.*　*No **se lo** tome con el estómago vacío.*

### 两个代词的顺序：间接（人）在前，直接（物）在后
*Dá**me** **lo**.* → **dámelo**

### le / les + lo / la → se lo / se la
❌ *Le lo doy.* ✅ ***Se lo** doy.*（我把它给他。）
*Dáselo a tu madre.*（把它给你妈妈。）`,
      examples: [
        ['Tómate esta pastilla después de comer.', '饭后吃这片药。'],
        ['No te acuestes tan tarde.', '别睡这么晚。'],
        ['Tómeselo con agua, por favor.', '请用水送服。'],
        ['Dáselo a tu madre.', '把这个给你妈妈。'],
        ['No me lo digas, ¡ya lo sé!', '别告诉我，我已经知道了！'],
      ],
      origin: `**imperativo** 来自拉丁语 *imperare*「命令」，罗马皇帝 *imperator* 就是“下命令的人”。

在古西班牙语里，代词可以粘在很多动词形式后面：*díxole*（他对他说）、*fuese*（他走了）。今天这个习惯只保留在 **肯定命令式、原形和副动词** 里，所以我们说 *dímelo* 和 *quiero decírtelo*，但说 *me lo dijo*。

*le lo* 变 *se lo* 是因为中世纪的 *ge lo*（来自拉丁语 *illi illum*）读起来像 *se lo*，后来就直接写成了 *se*。`,
      pitfalls: ['❌ *No te acuéstate.* ✅ *No te acuestes.*', '❌ *Dame lo.* ✅ *Dámelo.*：写成一个词，还要加重音。', '❌ *Le lo doy.* ✅ *Se lo doy.*', '❌ *Sentémosnos.* ✅ *Sentémonos.*'],
    },
  ],
  words: [
    { id: 'dolor', es: 'dolor', zh: '疼痛', pos: 'n', g: 'm', pl: 'dolores', level: 'B1', tags: ['body'], ex: ['Tengo dolor de cabeza.', '我头疼。'], ety: '拉丁语 dolor。' },
    { id: 'bienestar', es: 'bienestar', zh: '健康；福祉', pos: 'n', g: 'm', level: 'B1', tags: ['body'], ex: ['El deporte mejora el bienestar.', '运动能提升身心健康。'], ety: 'bien「好」+ estar「处于」。' },
    { id: 'habito', es: 'hábito', zh: '习惯', pos: 'n', g: 'm', level: 'B1', tags: ['body'], ex: ['Tiene hábitos muy sanos.', '他的生活习惯很健康。'], note: '修女、修士的衣服也叫 hábito。' },
    { id: 'sedentario', es: 'sedentario', zh: '久坐的；不爱运动的', pos: 'adj', f: 'sedentaria', level: 'B1', tags: ['body'], ex: ['Llevo una vida muy sedentaria.', '我的生活方式太缺乏运动了。'], ety: '拉丁语 sedere「坐」。' },
    { id: 'insomnio', es: 'insomnio', zh: '失眠', pos: 'n', g: 'm', level: 'B1', tags: ['body'], ex: ['Sufro de insomnio.', '我失眠。'], ety: 'in「不」+ somnus「睡眠」。' },
    { id: 'sintoma', es: 'síntoma', zh: '症状', pos: 'n', g: 'm', level: 'B1', tags: ['body'], ex: ['¿Qué síntomas tiene?', '您有什么症状？'], note: '以 -a 结尾的阳性名词：el síntoma。' },
    { id: 'tratamiento', es: 'tratamiento', zh: '治疗', pos: 'n', g: 'm', level: 'B1', tags: ['body'], ex: ['El tratamiento dura dos semanas.', '疗程是两周。'] },
    { id: 'recetar', es: 'recetar', zh: '开（药方）', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['El médico me ha recetado unos antibióticos.', '医生给我开了抗生素。'] },
    { id: 'vacuna', es: 'vacuna', zh: '疫苗', pos: 'n', g: 'f', level: 'B1', tags: ['body'], ex: ['¿Te has puesto la vacuna de la gripe?', '你打流感疫苗了吗？'], ety: '来自 vaca「奶牛」：第一种疫苗是用牛痘做的。', emoji: '💉' },
    { id: 'vacunarse', es: 'vacunarse', zh: '接种疫苗', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['Me vacuné el mes pasado.', '我上个月打了疫苗。'] },
    { id: 'analisis', es: 'análisis', zh: '化验；分析', pos: 'n', g: 'm', pl: 'análisis', level: 'B1', tags: ['body'], ex: ['Tengo que hacerme un análisis de sangre.', '我得验个血。'] },
    { id: 'operacion', es: 'operación', zh: '手术；运算', pos: 'n', g: 'f', pl: 'operaciones', level: 'B1', tags: ['body'], ex: ['La operación salió bien.', '手术很顺利。'] },
    { id: 'operar', es: 'operar', zh: '做手术；运作', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['Lo operan mañana de la rodilla.', '他明天做膝盖手术。'] },
    { id: 'consulta', es: 'consulta', zh: '门诊；咨询', pos: 'n', g: 'f', level: 'B1', tags: ['body'], ex: ['La doctora pasa consulta por las mañanas.', '这位医生上午出诊。'] },
    { id: 'centro-de-salud', es: 'centro de salud', zh: '社区医疗中心', pos: 'n', g: 'm', level: 'B1', tags: ['body', 'city'], ex: ['Pide cita en tu centro de salud.', '去你的社区医疗中心预约。'], note: '西班牙公立医疗的第一站，有家庭医生（médico de cabecera）。' },
    { id: 'enfermedad', es: 'enfermedad', zh: '疾病', pos: 'n', g: 'f', pl: 'enfermedades', level: 'B1', tags: ['body'], ex: ['Es una enfermedad muy común.', '这是一种很常见的病。'] },
    { id: 'contagiar', es: 'contagiar', zh: '传染', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['No quiero contagiarte.', '我不想传染给你。'] },
    { id: 'contagioso', es: 'contagioso', zh: '传染性的', pos: 'adj', f: 'contagiosa', level: 'B1', tags: ['body'], ex: ['La risa es contagiosa.', '笑是会传染的。'] },
    { id: 'mareado', es: 'mareado', zh: '头晕的；晕车 / 晕船的', pos: 'adj', f: 'mareada', level: 'B1', tags: ['body'], ex: ['Estoy un poco mareado.', '我有点头晕。'], ety: '来自 mar「海」：最初指晕船。' },
    { id: 'toser', es: 'toser', zh: '咳嗽', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['No para de toser.', '他咳个不停。'] },
    { id: 'estornudar', es: 'estornudar', zh: '打喷嚏', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['Cuando estornudo, mi abuela siempre dice «¡Jesús!».', '我一打喷嚏，奶奶总会说“长命百岁！”。'], note: '别人打喷嚏时，西班牙人说 ¡Jesús! 或 ¡Salud!' },
    { id: 'sudar', es: 'sudar', zh: '出汗', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['Sudo mucho cuando corro.', '我跑步时出很多汗。'] },
    { id: 'cansancio', es: 'cansancio', zh: '疲劳', pos: 'n', g: 'm', level: 'B1', tags: ['body'], ex: ['Siento mucho cansancio.', '我觉得很疲劳。'] },
    { id: 'agotado', es: 'agotado', zh: '筋疲力尽的；售罄的', pos: 'adj', f: 'agotada', level: 'B1', tags: ['body', 'feel'], ex: ['Estoy agotado después del viaje.', '旅途过后我累坏了。'], note: 'Las entradas están agotadas. = 票卖光了。' },
    { id: 'en-forma', es: 'en forma', zh: '身体状态好', pos: 'phr', level: 'B1', tags: ['body'], ex: ['Quiero ponerme en forma.', '我想把身体练好。'] },
    { id: 'engordar', es: 'engordar', zh: '长胖', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['He engordado tres kilos.', '我胖了三公斤。'] },
    { id: 'adelgazar', es: 'adelgazar', zh: '减肥；变瘦', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['Quiere adelgazar antes del verano.', '他想在夏天之前减肥。'], latam: '拉美也常说 bajar de peso。' },
    { id: 'peso', es: 'peso', zh: '体重；重量；比索', pos: 'n', g: 'm', level: 'B1', tags: ['body'], ex: ['Tienes que controlar tu peso.', '你得控制体重。'], note: '墨西哥、阿根廷等国的货币也叫 peso。' },
    { id: 'alimentacion', es: 'alimentación', zh: '饮食；营养', pos: 'n', g: 'f', level: 'B1', tags: ['food', 'body'], ex: ['Una buena alimentación es fundamental.', '良好的饮食是根本。'] },
    { id: 'grasa', es: 'grasa', zh: '脂肪；油脂', pos: 'n', g: 'f', level: 'B1', tags: ['food', 'body'], ex: ['Esta comida tiene mucha grasa.', '这道菜很油。'] },
    { id: 'vitamina', es: 'vitamina', zh: '维生素', pos: 'n', g: 'f', level: 'B1', tags: ['food', 'body'], ex: ['Las naranjas tienen mucha vitamina C.', '橙子含有大量维生素 C。'] },
    { id: 'hidratarse', es: 'hidratarse', zh: '补水', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['En verano hay que hidratarse bien.', '夏天要多补水。'] },
    { id: 'estirar', es: 'estirar', zh: '拉伸；伸展', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['Estira las piernas antes de correr.', '跑步前拉伸一下腿。'] },
    { id: 'meditar', es: 'meditar', zh: '冥想；沉思', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['Medito diez minutos cada mañana.', '我每天早上冥想十分钟。'] },
    { id: 'respiracion', es: 'respiración', zh: '呼吸', pos: 'n', g: 'f', level: 'B1', tags: ['body'], ex: ['Concéntrate en tu respiración.', '专注于你的呼吸。'] },
    { id: 'postura', es: 'postura', zh: '姿势；立场', pos: 'n', g: 'f', level: 'B1', tags: ['body'], ex: ['Tienes muy mala postura.', '你的姿势很不好。'] },
    { id: 'equilibrio', es: 'equilibrio', zh: '平衡', pos: 'n', g: 'm', level: 'B1', tags: ['body'], ex: ['Hay que buscar un equilibrio entre trabajo y vida.', '要在工作和生活之间找到平衡。'], ety: '拉丁语 aequilibrium：aequus「相等」+ libra「天平」。' },
    { id: 'alcohol', es: 'alcohol', zh: '酒精', pos: 'n', g: 'm', level: 'B1', tags: ['food', 'body'], ex: ['No bebo alcohol.', '我不喝酒。'], ety: '阿拉伯语 al-kuḥl「（化妆用的）细粉」，后来指“提炼出的精华”。' },
    { id: 'tabaco', es: 'tabaco', zh: '烟草', pos: 'n', g: 'm', level: 'B1', tags: ['body'], ex: ['El tabaco es malo para la salud.', '烟草有害健康。'], ety: '来自加勒比的泰诺语。' },
    { id: 'prevenir', es: 'prevenir', zh: '预防', pos: 'v', level: 'B1', tags: ['verb', 'body'], ex: ['Más vale prevenir que curar.', '预防胜于治疗。'], note: '变位同 venir：prevengo。' },
    { id: 'pediatra', es: 'pediatra', zh: '儿科医生', pos: 'n', g: 'mf', level: 'B1', tags: ['body', 'job'], ex: ['Llevamos al niño al pediatra.', '我们带孩子去看儿科医生。'] },
    { id: 'grave', es: 'grave', zh: '严重的；（声音）低沉的', pos: 'adj', level: 'B1', tags: ['body'], ex: ['No es nada grave.', '一点也不严重。'] },
    { id: 'leve', es: 'leve', zh: '轻微的', pos: 'adj', level: 'B1', tags: ['body'], ex: ['Solo tiene una herida leve.', '他只受了点轻伤。'] },
    { id: 'en-caso-de-que', es: 'en caso de que', zh: '万一；如果', pos: 'phr', level: 'B1', tags: ['func'], ex: ['En caso de que llueva, la fiesta será dentro.', '万一下雨，派对就在室内举行。'] },
    { id: 'con-tal-de-que', es: 'con tal de que', zh: '只要', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Haré lo que sea con tal de que estés bien.', '只要你好好的，我做什么都行。'] },
    { id: 'siempre-que', es: 'siempre que', zh: '每当；只要', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Te lo dejo siempre que me lo devuelvas.', '只要你还我，我就借给你。'] },
  ],
  sentences: [
    { id: 's1', es: 'Si tienes fiebre, quédate en casa.', zh: '如果你发烧，就待在家里。', g: ['b1-condiciones'], distract: ['tengas'] },
    { id: 's2', es: 'En caso de que te duela, toma una pastilla.', zh: '万一疼的话，就吃一片药。', g: ['b1-condiciones'], distract: ['duele'] },
    { id: 's3', es: 'Puedes correr siempre que no te duela la rodilla.', zh: '只要膝盖不疼，你就可以跑步。', g: ['b1-condiciones'] },
    { id: 's4', es: 'Siempre que vengo a esta ciudad, llueve.', zh: '每次我来这座城市都下雨。', g: ['b1-condiciones'] },
    { id: 's5', es: 'En caso de emergencia, llame al 112.', zh: '紧急情况请拨打 112。', g: ['b1-condiciones'] },
    { id: 's6', es: 'Deberías dormir al menos siete horas.', zh: '你应该至少睡七个小时。', g: ['b1-consejos'] },
    { id: 's7', es: 'Yo en tu lugar, iría al médico.', zh: '我要是你，就去看医生。', g: ['b1-consejos'], distract: ['voy'] },
    { id: 's8', es: 'Lo mejor es que te quedes en la cama.', zh: '你最好躺在床上休息。', g: ['b1-consejos'], distract: ['quedas'] },
    { id: 's9', es: '¿Por qué no pruebas a meditar?', zh: '你为什么不试试冥想呢？', g: ['b1-consejos'] },
    { id: 's10', es: 'Te aconsejo que bebas más agua.', zh: '我建议你多喝水。', g: ['b1-consejos'] },
    { id: 's11', es: 'Tómate esta pastilla después de comer.', zh: '饭后吃这片药。', g: ['b1-imperativo-pronombres'] },
    { id: 's12', es: 'No te acuestes tan tarde.', zh: '别睡这么晚。', g: ['b1-imperativo-pronombres'], distract: ['acuéstate'] },
    { id: 's13', es: 'Tómeselo con agua, por favor.', zh: '请用水送服。', g: ['b1-imperativo-pronombres'] },
    { id: 's14', es: 'Dáselo a tu madre.', zh: '把这个给你妈妈。', g: ['b1-imperativo-pronombres'] },
    { id: 's15', es: 'No me lo digas, ¡ya lo sé!', zh: '别告诉我，我已经知道了！', g: ['b1-imperativo-pronombres'] },
    { id: 's16', es: 'Tengo dolor de cabeza desde ayer.', zh: '我从昨天开始头疼。' },
    { id: 's17', es: 'Estoy un poco mareado.', zh: '我有点头晕。' },
    { id: 's18', es: 'No es nada grave.', zh: '一点也不严重。' },
    { id: 's19', es: 'Más vale prevenir que curar.', zh: '预防胜于治疗。' },
    { id: 's20', es: 'Quiero ponerme en forma este año.', zh: '我今年想把身体练好。' },
    { id: 's21', es: 'Llevo una vida muy sedentaria.', zh: '我的生活方式太缺乏运动了。' },
    { id: 's22', es: 'No se lo tome con el estómago vacío.', zh: '别空腹服用。', g: ['b1-imperativo-pronombres'] },
    { id: 's23', es: 'Haré lo que sea con tal de que te mejores.', zh: '只要你能好起来，我做什么都行。', g: ['b1-condiciones'] },
    { id: 's24', es: 'Tendrías que hacer más ejercicio.', zh: '你应该多运动。', g: ['b1-consejos'] },
    { id: 's25', es: 'Sentémonos aquí un momento.', zh: '我们在这儿坐一会儿吧。', g: ['b1-imperativo-pronombres'] },
  ],
  cloze: [
    { id: 'c1', text: 'Si ___ (tú) tos, bebe agua caliente con miel.', answers: ['tienes'], options: ['tienes', 'tengas', 'tendrás'], zh: '如果你咳嗽，就喝蜂蜜热水。', g: ['b1-condiciones'] },
    { id: 'c2', text: 'En caso de que ___ (tú) fiebre, llámame.', answers: ['tengas'], hint: 'tener', zh: '万一你发烧，就给我打电话。', g: ['b1-condiciones'] },
    { id: 'c3', text: 'Puedes salir siempre que ___ (tú) antes de las diez.', answers: ['vuelvas'], hint: 'volver', zh: '只要十点前回来，你就可以出去。', g: ['b1-condiciones'] },
    { id: 'c4', text: 'Si no ___ (tú) bien, estarás cansado todo el día.', answers: ['duermes'], hint: 'dormir', zh: '如果你睡不好，一整天都会很累。', g: ['b1-condiciones'] },
    { id: 'c5', text: 'Te presto el coche con tal de que ___ (tú) con cuidado.', answers: ['conduzcas'], hint: 'conducir', zh: '只要你小心开，我就把车借给你。', g: ['b1-condiciones'] },
    { id: 'c6', text: 'Estás muy cansado: ___ descansar.', answers: ['deberías'], options: ['deberías', 'deberías de', 'debiste'], zh: '你很累了：应该休息一下。', g: ['b1-consejos'] },
    { id: 'c7', text: 'Yo que tú, ___ al médico.', answers: ['iría'], hint: 'ir', zh: '我要是你，就去看医生。', g: ['b1-consejos'] },
    { id: 'c8', text: 'Lo mejor es que ___ (tú) en casa hoy.', answers: ['te quedes'], options: ['te quedes', 'te quedas', 'quedarte'], zh: '你今天最好待在家里。', g: ['b1-consejos'] },
    { id: 'c9', text: 'Te recomiendo que ___ (tú) menos café.', answers: ['tomes'], hint: 'tomar', zh: '我建议你少喝咖啡。', g: ['b1-consejos'] },
    { id: 'c10', text: '¿Por qué no ___ (tú) yoga?', answers: ['haces'], hint: 'hacer', zh: '你为什么不做做瑜伽？', g: ['b1-consejos'] },
    { id: 'c11', text: 'Esta pastilla, ___ después de cenar. (tú)', answers: ['tómatela'], options: ['tómatela', 'te la toma', 'tómala te'], zh: '这片药，晚饭后吃。', g: ['b1-imperativo-pronombres'] },
    { id: 'c12', text: 'No ___ tan tarde. (tú, acostarse)', answers: ['te acuestes'], options: ['te acuestes', 'acuéstate', 'te acuestas'], zh: '别睡这么晚。', g: ['b1-imperativo-pronombres'] },
    { id: 'c13', text: 'El libro es de Ana: ___ mañana.', answers: ['dáselo'], options: ['dáselo', 'dalelo', 'dálelo'], zh: '书是安娜的：明天还给她。', g: ['b1-imperativo-pronombres'], explain: 'le + lo → se lo。' },
    { id: 'c14', text: 'No ___ digas a nadie, es un secreto.', answers: ['se lo'], options: ['se lo', 'le lo', 'lo le'], zh: '别告诉任何人，这是个秘密。', g: ['b1-imperativo-pronombres'] },
    { id: 'c15', text: 'Señora, ___ un momento, por favor. (sentarse)', answers: ['siéntese'], options: ['siéntese', 'siéntate', 'se siente'], zh: '女士，请坐一会儿。', g: ['b1-imperativo-pronombres'] },
    { id: 'c16', text: 'Niños, ___ el abrigo, que hace frío. (vosotros, ponerse)', answers: ['poneos'], options: ['poneos', 'ponedos', 'poneros'], zh: '孩子们，穿上外套，天冷。', g: ['b1-imperativo-pronombres'] },
    { id: 'c17', text: 'Más vale ___ que curar.', answers: ['prevenir'], options: ['prevenir', 'prevengas', 'previene'], zh: '预防胜于治疗。', g: ['b1-condiciones'] },
    { id: 'c18', text: 'Siempre que ___ (yo) nervioso, me duele el estómago.', answers: ['estoy'], options: ['estoy', 'esté', 'estaré'], zh: '每次我紧张，胃就疼。', g: ['b1-condiciones'], explain: '“每当”的意思，用陈述式。' },
  ],
  conj: [
    { verbs: ['tomar', 'acostarse', 'ponerse', 'decir', 'hacer', 'ir', 'tener', 'salir', 'sentarse'], tenses: ['imp', 'impNeg'], g: 'b1-imperativo-pronombres' },
    { verbs: ['deber', 'tener', 'poder', 'ir', 'hacer'], tenses: ['cond'], g: 'b1-consejos' },
  ],
  dialogues: [
    {
      id: 'b1-u09-d1',
      title: '看医生 · En la consulta',
      lines: [
        { who: 'Doctora', es: 'Buenos días. Siéntese, por favor. ¿Qué le pasa?', zh: '早上好。请坐。哪里不舒服？' },
        { who: 'Wang Lei', es: 'Desde hace tres días me duele mucho la garganta y tengo tos. Esta noche he tenido un poco de fiebre.', zh: '三天前开始嗓子很疼，还咳嗽。昨晚有点发烧。' },
        { who: 'Doctora', es: 'A ver, abra la boca… Sí, tiene la garganta muy roja. ¿Es alérgico a algún medicamento?', zh: '我看看，张开嘴……嗯，喉咙很红。您对什么药过敏吗？' },
        { who: 'Wang Lei', es: 'No, que yo sepa.', zh: '据我所知没有。' },
        { who: 'Doctora', es: 'Bien. Le voy a recetar un jarabe para la tos y unas pastillas para el dolor. Tómeselas cada ocho horas, pero no se las tome con el estómago vacío.', zh: '好。我给您开一瓶止咳糖浆和止痛药。每八小时吃一次，但别空腹吃。' },
        { who: 'Wang Lei', es: '¿Puedo ir a trabajar?', zh: '我能去上班吗？' },
        { who: 'Doctora', es: 'Yo en su lugar, me quedaría en casa dos o tres días. Beba mucha agua y descanse. En caso de que la fiebre suba de 39, vuelva enseguida.', zh: '我要是您，就在家休息两三天。多喝水，多休息。万一烧到 39 度以上，马上再来。' },
        { who: 'Wang Lei', es: 'Muy bien. Muchas gracias, doctora.', zh: '好的。非常感谢，医生。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r17',
      level: 'B1',
      title: 'Siete consejos para dormir mejor',
      titleZh: '睡得更好的七条建议',
      topic: '健康',
      paras: [
        [
          ['¿Te cuesta dormirte? ¿Te despiertas cansado? No eres el único: según los expertos, uno de cada tres adultos duerme mal. Aquí tienes algunos consejos.', '你难以入睡吗？醒来还觉得累吗？你不是一个人：专家说，每三个成年人中就有一个睡不好。这里有一些建议。'],
        ],
        [
          ['1. Acuéstate y levántate siempre a la misma hora, también los fines de semana. 2. No tomes café después de las cinco de la tarde. 3. Si cenas, hazlo al menos dos horas antes de dormir.', '1. 每天在同一时间睡觉和起床，周末也一样。2. 下午五点以后别喝咖啡。3. 吃晚饭的话，至少在睡前两小时吃完。'],
          ['4. Apaga el móvil una hora antes de acostarte: la luz de la pantalla engaña al cerebro. Si lo usas como despertador, déjalo lejos de la cama.', '4. 睡前一小时关掉手机：屏幕的光会欺骗大脑。如果你用它当闹钟，就把它放得离床远一点。'],
        ],
        [
          ['5. Haz ejercicio, pero no justo antes de dormir. 6. Mantén tu habitación oscura, silenciosa y fresca. 7. En caso de que no puedas dormir, no te quedes en la cama dando vueltas: levántate, lee un poco y vuelve cuando tengas sueño.', '5. 要运动，但别在睡前运动。6. 保持卧室黑暗、安静、凉爽。7. 万一睡不着，别在床上翻来覆去：起来看会儿书，等困了再回去睡。'],
          ['Si el insomnio continúa más de un mes, lo mejor es que consultes a tu médico.', '如果失眠持续一个多月，最好去咨询医生。'],
        ],
      ],
      gloss: { cuesta: '（对某人来说）困难', único: '唯一的', engaña: '欺骗', cerebro: '大脑', 'déjalo': '把它放', mantén: '保持', silenciosa: '安静的', 'dando vueltas': '翻来覆去', consultes: '咨询（虚拟式）' },
      questions: [
        { type: 'mc', q: '文章建议几点以后不要喝咖啡？', options: ['中午十二点', '下午五点', '晚上九点'], answer: 1 },
        { type: 'tf', q: '睡不着的时候应该一直躺在床上。', answer: false, explain: 'no te quedes en la cama dando vueltas: levántate' },
        { type: 'mc', q: '什么情况下应该去看医生？', options: ['失眠超过一个月', '晚上做梦', '周末起得晚'], answer: 0 },
      ],
    },
    {
      id: 'b1-r18',
      level: 'B1',
      title: 'Consultorio: los nervios de los exámenes',
      titleZh: '咨询信箱：考试焦虑',
      topic: '健康',
      paras: [
        [
          ['«Tengo diecisiete años y en junio hago la selectividad. Últimamente no duermo, me duele el estómago y siempre que abro un libro me pongo a llorar. ¿Qué puedo hacer?» — Lin', '“我十七岁，六月要参加高考。最近我睡不着，胃疼，每次一打开书就想哭。我该怎么办？”——林'],
        ],
        [
          ['Querida Lin: lo que te pasa es muy normal, y tiene solución. Lo primero, no estudies muchas horas seguidas: haz una pausa de diez minutos cada hora y sal a caminar un poco.', '亲爱的林：你遇到的情况很正常，而且有办法解决。首先，不要连续学习很多个小时：每小时休息十分钟，出去走一走。'],
          ['Yo en tu lugar, haría un plan realista para cada semana. Si te organizas bien, te sentirás más tranquila.', '我要是你，就给每周定一个切实可行的计划。如果安排得好，你就会更踏实。'],
        ],
        [
          ['Habla con tus padres o con un amigo: no te guardes los nervios para ti. Y, sobre todo, recuerda que un examen no decide toda tu vida.', '和父母或朋友聊聊：别把焦虑憋在心里。最重要的是，记住一场考试不能决定你的一生。'],
          ['En caso de que los dolores de estómago continúen, ve al médico. ¡Mucho ánimo!', '万一胃疼一直不好，就去看医生。加油！'],
        ],
      ],
      gloss: { selectividad: '（西班牙）大学入学考试', 'me pongo a llorar': '我开始哭', seguidas: '连续的', pausa: '休息', realista: '现实的', organizas: '安排', guardes: '藏（虚拟式）', ánimo: '加油；勇气' },
      questions: [
        { type: 'mc', q: '林有什么症状？', options: ['头疼和发烧', '失眠和胃疼', '咳嗽和头晕'], answer: 1 },
        { type: 'mc', q: '专栏作者建议每学一小时做什么？', options: ['喝咖啡', '休息十分钟，出去走走', '睡一觉'], answer: 1 },
        { type: 'tf', q: '作者认为一场考试决定整个人生。', answer: false, explain: 'un examen no decide toda tu vida' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '你的朋友最近压力很大、睡不好、不运动。给他 / 她写一条消息：表达关心，给出至少四条建议（用不同的结构），并说明在什么情况下应该去看医生。', words: [80, 140], hints: ['Me preocupa que…', 'Deberías… / Yo que tú, …', 'Lo mejor es que…', 'En caso de que…, ve al médico.'] }],
}
