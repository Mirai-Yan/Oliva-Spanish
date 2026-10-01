import type { Unit } from '../types'

export const u07: Unit = {
  id: 'a2-u07',
  level: 'A2',
  order: 7,
  title: '建议与指令',
  titleEs: 'Consejos e instrucciones',
  icon: '🩺',
  goals: ['用肯定命令式给指令、提建议', '给 tú / usted / vosotros / ustedes 下指令', '把代词连在命令式后面：dímelo、siéntate', '表达义务：tener que、hay que、deber'],
  grammar: [
    {
      id: 'a2-imperativo',
      title: '肯定命令式',
      titleEs: 'El imperativo afirmativo',
      level: 'A2',
      summary: 'tú = 现在时第三人称（habla）；vosotros = 原形去 r 加 d（hablad）；usted / ustedes 用虚拟式（hable / hablen）。',
      body: `| | hablar | comer | escribir |
|---|---|---|---|
| **tú** | habla | come | escribe |
| **usted** | hable | coma | escriba |
| **vosotros** | hablad | comed | escribid |
| **ustedes** | hablen | coman | escriban |

### 怎么变？
- **tú**：和现在时的“他 / 她”形式一样：*él habla → ¡habla!*；词根变化也保留：*piensa, duerme, pide*
- **vosotros**：原形把 **-r** 换成 **-d**：*hablar → hablad*、*venir → venid*（没有不规则！）
- **usted / ustedes**：-ar 动词换成 **e**，-er / -ir 动词换成 **a**（“元音互换”）：*hablar → hable*、*comer → coma*。这其实是虚拟式（B1 会学），如果 yo 形式不规则，它也跟着不规则：*tengo → tenga*、*hago → haga*、*conozco → conozca*

### tú 的 8 个不规则形式（必背）
| decir | hacer | ir | poner | salir | ser | tener | venir |
|---|---|---|---|---|---|---|---|
| **di** | **haz** | **ve** | **pon** | **sal** | **sé** | **ten** | **ven** |

### usted 的常见不规则
*ir → vaya*、*ser → sea*、*estar → esté*、*dar → dé*、*saber → sepa*

### 用途
- 指令和说明：*Gira a la derecha.*（向右转。）
- 建议：*Bebe mucha agua.*（多喝水。）
- 请求（加 *por favor*）：*Cierra la ventana, por favor.*
- 邀请：*Pasa, pasa.*（请进，请进。）`,
      examples: [
        ['Abre la ventana, por favor.', '请打开窗户。'],
        ['Pase, por favor. Siéntese.', '请进。请坐。'],
        ['Haz los deberes antes de cenar.', '吃晚饭前把作业写完。'],
        ['Venid a mi casa el sábado.', '星期六来我家吧（你们）。'],
        ['Tome estas pastillas tres veces al día.', '这些药一天吃三次（您）。'],
      ],
      tables: [
        { verbs: ['hablar', 'comer', 'decir', 'hacer'], tense: 'imp' },
      ],
      origin: `- **tú** 的命令式直接来自 **拉丁语命令式** *canta、time、audi*，所以和第三人称现在时（*canta*）长得一样。
- 不规则的 **di, haz, pon, sal, ten, ven** 是拉丁语命令式“截短”的结果：*dic → di*、*fac → haz*、*pone → pon*、*tene → ten*。
- **vosotros** 的 *-ad / -ed / -id* 来自拉丁语复数命令式 *-ate / -ete / -ite*：*cantate → cantad*。
- **usted** 本来是“您的恩典”（第三人称），所以用第三人称的 **虚拟式** 表示请求：“愿您的恩典说……”。`,
      pitfalls: ['❌ *Hace los deberes.*（这是陈述句）✅ *Haz los deberes.*', '❌ *Dice la verdad.* ✅ *Di la verdad.*', '给 usted 用 tú 的形式：❌ *Señora, pasa.* ✅ *Señora, pase.*'],
      latam: '拉美不用 vosotros，对多人一律用 ustedes 形式：*¡Vengan!*（你们来吧！）',
    },
    {
      id: 'a2-imperativo-pron',
      title: '命令式 + 代词',
      titleEs: 'Imperativo con pronombres',
      level: 'A2',
      summary: '肯定命令式里，代词必须连在动词后面，常要加重音：dímelo, siéntate, cómpralo, levantaos。',
      body: `肯定命令式里，宾语代词和自反代词 **连在动词后面**，写成一个词：

| 原来 | 命令式 |
|---|---|
| *Me lo dices.* | **Dímelo.**（告诉我。） |
| *Te sientas.* | **Siéntate.**（坐下。） |
| *Lo compras.* | **Cómpralo.**（买下它。） |
| *Se levanta.*（usted） | **Levántese.**（请起来。） |
| *Os sentáis.* | **Sentaos.**（你们坐吧。） |
| *Nos vamos.* | **Vámonos.**（我们走吧。） |

### 加重音的规则
连上代词后，单词变长了，原来的重读音节不变，按重音规则可能要 **加重音符号**：
*compra* → *cómpra-lo*（三个音节，重音在倒数第三个）→ **cómpralo**
单音节的 *di, haz, pon* 连一个代词不用加：*dime, hazlo, ponlo*；连两个就要加：*dímelo, házmelo*

### 两个特殊变化
- **vosotros + os**：去掉 d：*sentad + os → **sentaos***；-ir 动词要加重音：*vestíos*；例外 *idos*（走吧）
- **nosotros + nos**：去掉 s：*sentemos + nos → **sentémonos***`,
      examples: [
        ['Siéntate, por favor.', '请坐。'],
        ['¿El libro? Dámelo.', '书吗？给我吧。'],
        ['Levántese despacio.', '您慢慢起来。'],
        ['Póntelo, hace frío.', '穿上它，天冷。'],
        ['Chicos, lavaos las manos.', '孩子们，去洗手。'],
      ],
      tables: [{ verbs: ['sentarse', 'levantarse'], tense: 'imp' }],
      origin: `代词连写在动词后面（**后附**，*enclisis*）是古西语的常见现象：中世纪的人甚至写 *dixole*（他对他说）。现代西语只在 **肯定命令式、原形和副动词** 里保留了这种写法。`,
      pitfalls: ['代词放前面：❌ *¡Me lo di!* ✅ *¡Dímelo!*', '忘记重音：❌ *sientate* ✅ *siéntate*；❌ *compralo* ✅ *cómpralo*。', '❌ *sentados*（这是“坐着的”）✅ *sentaos*。'],
    },
    {
      id: 'a2-obligacion',
      title: '义务和建议：tener que, hay que, deber',
      titleEs: 'Expresar obligación y dar consejos',
      level: 'A2',
      summary: 'tener que（必须，针对个人）· hay que（大家都得，无人称）· deber（应该）· ¿Por qué no…?（为什么不……）',
      body: `| 表达 | 意思 | 例句 |
|---|---|---|
| **tener que** + 原形 | 必须（某人） | *Tengo que estudiar.* |
| **hay que** + 原形 | 必须（泛指所有人） | *Hay que llevar mascarilla.* |
| **deber** + 原形 | 应该 | *Debes descansar más.* |
| **es necesario / importante** + 原形 | 有必要 / 重要的是 | *Es importante dormir bien.* |
| **¿Por qué no** + 现在时？ | 为什么不……（建议） | *¿Por qué no vas al médico?* |
| **Te recomiendo / aconsejo** + 原形 | 我建议你…… | *Te recomiendo beber agua.* |

### 否定
- *No tienes que venir.*（你不必来。）——不是“不许”
- *No debes fumar.*（你不应该抽烟。）
- *No hay que pagar.*（不用付钱。）

### 委婉的建议（条件式，A2 第 9 单元细讲）
*Deberías dormir más.*（你应该多睡点。）——比 *debes* 更客气`,
      examples: [
        ['Tengo que ir al dentista mañana.', '我明天得去看牙医。'],
        ['Para entrar hay que tener entrada.', '入场必须有票。'],
        ['Debes beber más agua.', '你应该多喝水。'],
        ['¿Por qué no te tomas unos días de vacaciones?', '你为什么不休几天假呢？'],
        ['No tienes que traer nada.', '你什么都不用带。'],
      ],
      origin: `- **deber** 来自拉丁语 *debere*（欠），“欠着要做”→“应该”。英语 *debt*（债）同源。
- **hay que** 用 *haber* 的无人称形式，所以不说是谁，表示“一般规则”。
- **tener que** 是西语特有的发展：从“有（某件事）要做”变成“必须做”，英语 *have to* 是同样的思路。`,
      pitfalls: ['❌ *Tengo de estudiar.* ✅ *Tengo que estudiar.*', '❌ *Hay que tú estudies.* ✅ *Tienes que estudiar.*（针对具体某人用 tener que）', '❌ *No tienes que fumar*（不必抽烟）想说“不许抽”应该是 ✅ *No debes fumar / No fumes*。'],
    },
  ],
  words: [
    { id: 'consejo', es: 'consejo', zh: '建议；委员会', pos: 'n', g: 'm', level: 'A2', tags: ['func'], ex: ['¿Me das un consejo?', '你能给我一个建议吗？'], ety: '拉丁语 consilium。英语 counsel 同源。' },
    { id: 'aconsejar', es: 'aconsejar', zh: '建议；劝', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Te aconsejo descansar.', '我建议你休息一下。'] },
    { id: 'recomendar', es: 'recomendar', zh: '推荐；建议', pos: 'v', level: 'A2', tags: ['verb'], ex: ['¿Me recomiendas algún restaurante?', '你能给我推荐一家餐馆吗？'], note: 'e→ie：recomiendo。' },
    { id: 'deber', es: 'deber', zh: '应该；欠', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Debes dormir más.', '你应该多睡点。'], ety: '拉丁语 debere「欠」。英语 debt 同源。' },
    { id: 'hay-que', es: 'hay que', zh: '必须（泛指）', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Hay que reservar mesa.', '得订座。'] },
    { id: 'tener-que', es: 'tener que', zh: '必须；不得不', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Tengo que trabajar el sábado.', '我星期六得上班。'] },
    { id: 'salud', es: 'salud', zh: '健康', pos: 'n', g: 'f', level: 'A2', tags: ['body'], ex: ['La salud es lo más importante.', '健康最重要。'], ety: '拉丁语 salutem。', note: '干杯时说 ¡Salud!；别人打喷嚏也说 ¡Salud!' },
    { id: 'sano', es: 'sano', f: 'sana', zh: '健康的', pos: 'adj', level: 'A2', tags: ['body', 'adj'], ex: ['Lleva una vida muy sana.', '他过着很健康的生活。'] },
    { id: 'saludable', es: 'saludable', zh: '有益健康的', pos: 'adj', level: 'A2', tags: ['body', 'food'], ex: ['La comida mediterránea es muy saludable.', '地中海饮食很健康。'] },
    { id: 'dieta', es: 'dieta', zh: '饮食；节食', pos: 'n', g: 'f', level: 'A2', tags: ['food', 'body'], ex: ['Estoy a dieta.', '我在节食。'] },
    { id: 'estres', es: 'estrés', zh: '压力', pos: 'n', g: 'm', level: 'A2', tags: ['feel'], ex: ['Tengo mucho estrés en el trabajo.', '我工作压力很大。'] },
    { id: 'pastilla', es: 'pastilla', zh: '药片', pos: 'n', g: 'f', level: 'A2', tags: ['body'], ex: ['Tómate una pastilla.', '吃片药吧。'], emoji: '💊' },
    { id: 'medicina', es: 'medicina', zh: '药；医学', pos: 'n', g: 'f', level: 'A2', tags: ['body'], ex: ['¿Ya has tomado la medicina?', '你吃药了吗？'] },
    { id: 'jarabe', es: 'jarabe', zh: '糖浆', pos: 'n', g: 'm', level: 'A2', tags: ['body'], ex: ['Un jarabe para la tos.', '一瓶止咳糖浆。'], ety: '阿拉伯语 šarāb「饮料」。英语 syrup、sherbet 同源。' },
    { id: 'cita', es: 'cita', zh: '预约；约会', pos: 'n', g: 'f', level: 'A2', tags: ['body'], ex: ['Tengo cita con el médico a las diez.', '我约了十点看医生。'] },
    { id: 'dentista', es: 'dentista', zh: '牙医', pos: 'n', g: 'mf', level: 'A2', tags: ['body', 'job'], ex: ['Tengo que ir al dentista.', '我得去看牙医。'], emoji: '🦷' },
    { id: 'tos', es: 'tos', zh: '咳嗽', pos: 'n', g: 'f', level: 'A2', tags: ['body'], ex: ['Tengo tos desde hace una semana.', '我咳嗽一个星期了。'] },
    { id: 'gripe', es: 'gripe', zh: '流感', pos: 'n', g: 'f', level: 'A2', tags: ['body'], ex: ['Tiene la gripe.', '他得了流感。'] },
    { id: 'resfriado', es: 'resfriado', zh: '感冒', pos: 'n', g: 'm', level: 'A2', tags: ['body'], ex: ['Es solo un resfriado.', '只是感冒而已。'] },
    { id: 'alergia', es: 'alergia', zh: '过敏', pos: 'n', g: 'f', level: 'A2', tags: ['body'], ex: ['Tengo alergia a los frutos secos.', '我对坚果过敏。'] },
    { id: 'sentarse', es: 'sentarse', zh: '坐下', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Siéntate aquí.', '坐这儿吧。'], note: 'e→ie：me siento（我坐下）。' },
    { id: 'tumbarse', es: 'tumbarse', zh: '躺下', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Túmbese en la camilla.', '请躺到诊床上。'] },
    { id: 'girar', es: 'girar', zh: '转弯；旋转', pos: 'v', level: 'A2', tags: ['verb', 'travel'], ex: ['Gira a la izquierda.', '向左转。'] },
    { id: 'cruzar', es: 'cruzar', zh: '穿过；过（马路）', pos: 'v', level: 'A2', tags: ['verb', 'travel'], ex: ['Cruza la calle por el paso de peatones.', '走人行横道过马路。'], note: '过去时第一人称 crucé。' },
    { id: 'apagar', es: 'apagar', zh: '关掉；熄灭', pos: 'v', level: 'A2', tags: ['verb', 'home'], ex: ['Apaga el móvil, por favor.', '请关掉手机。'] },
    { id: 'encender', es: 'encender', zh: '打开（电器）；点燃', pos: 'v', level: 'A2', tags: ['verb', 'home'], ex: ['Enciende la luz.', '开灯。'], note: 'e→ie：enciendo。' },
    { id: 'cuidarse', es: 'cuidarse', zh: '保重；照顾自己', pos: 'v', level: 'A2', tags: ['verb', 'body'], ex: ['¡Cuídate mucho!', '多保重！'] },
    { id: 'relajarse', es: 'relajarse', zh: '放松', pos: 'v', level: 'A2', tags: ['verb', 'feel'], ex: ['Relájate y respira hondo.', '放松，深呼吸。'] },
    { id: 'respirar', es: 'respirar', zh: '呼吸', pos: 'v', level: 'A2', tags: ['verb', 'body'], ex: ['Respire profundamente.', '请深呼吸。'] },
    { id: 'evitar', es: 'evitar', zh: '避免', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Evita el café por la noche.', '晚上别喝咖啡。'] },
    { id: 'paso-peatones', es: 'paso de peatones', zh: '人行横道', pos: 'n', g: 'm', level: 'A2', tags: ['city'], ex: ['Cruza por el paso de peatones.', '走人行横道。'] },
    { id: 'semaforo', es: 'semáforo', zh: '红绿灯', pos: 'n', g: 'm', level: 'A2', tags: ['city'], ex: ['Gira en el segundo semáforo.', '在第二个红绿灯转弯。'], ety: '希腊语 sêma「信号」+ phorós「携带的」。', emoji: '🚦' },
    { id: 'esquina', es: 'esquina', zh: '街角', pos: 'n', g: 'f', level: 'A2', tags: ['city'], ex: ['La farmacia está en la esquina.', '药店在街角。'] },
    { id: 'todo-recto', es: 'todo recto', zh: '一直往前', pos: 'phr', level: 'A2', tags: ['travel'], ex: ['Sigue todo recto.', '一直往前走。'], latam: '拉美多说 todo derecho。' },
  ],
  sentences: [
    { id: 's1', es: 'Abre la ventana, por favor.', zh: '请打开窗户。', g: ['a2-imperativo'], distract: ['abra', 'abres'] },
    { id: 's2', es: 'Haz los deberes antes de cenar.', zh: '吃晚饭前把作业写完。', g: ['a2-imperativo'], distract: ['hace'] },
    { id: 's3', es: 'Ven aquí, por favor.', zh: '请到这儿来。', g: ['a2-imperativo'], distract: ['viene'] },
    { id: 's4', es: 'Di la verdad.', zh: '说实话。', g: ['a2-imperativo'], distract: ['dice'] },
    { id: 's5', es: 'Pase, por favor.', zh: '请进（您）。', g: ['a2-imperativo'], distract: ['pasa'] },
    { id: 's6', es: 'Venid a mi casa el sábado.', zh: '你们星期六来我家吧。', g: ['a2-imperativo'] },
    { id: 's7', es: 'Tome estas pastillas tres veces al día.', zh: '这些药一天吃三次（您）。', g: ['a2-imperativo'] },
    { id: 's8', es: 'Gira a la derecha en la esquina.', zh: '在街角向右转。', g: ['a2-imperativo'] },
    { id: 's9', es: 'Siéntate, por favor.', zh: '请坐。', g: ['a2-imperativo-pron'], distract: ['te', 'sienta'] },
    { id: 's10', es: 'Dímelo.', zh: '告诉我。', g: ['a2-imperativo-pron'] },
    { id: 's11', es: 'Levántese despacio.', zh: '您慢慢起来。', g: ['a2-imperativo-pron'] },
    { id: 's12', es: '¿El abrigo? Póntelo, hace frío.', zh: '大衣吗？穿上吧，天冷。', g: ['a2-imperativo-pron'] },
    { id: 's13', es: 'Chicos, lavaos las manos.', zh: '孩子们，去洗手。', g: ['a2-imperativo-pron'] },
    { id: 's14', es: '¡Cuídate mucho!', zh: '多保重！', g: ['a2-imperativo-pron'] },
    { id: 's15', es: 'Tengo que ir al dentista mañana.', zh: '我明天得去看牙医。', g: ['a2-obligacion'] },
    { id: 's16', es: 'Hay que reservar mesa.', zh: '得订座。', g: ['a2-obligacion'] },
    { id: 's17', es: 'Debes beber más agua.', zh: '你应该多喝水。', g: ['a2-obligacion'] },
    { id: 's18', es: '¿Por qué no vas al médico?', zh: '你为什么不去看医生呢？', g: ['a2-obligacion'] },
    { id: 's19', es: 'No tienes que traer nada.', zh: '你什么都不用带。', g: ['a2-obligacion'] },
    { id: 's20', es: 'Te recomiendo descansar unos días.', zh: '我建议你休息几天。', g: ['a2-obligacion'] },
  ],
  cloze: [
    { id: 'c1', text: '___ la puerta, por favor. (cerrar, tú)', answers: ['Cierra'], options: ['Cierra', 'Cerra', 'Cierre'], zh: '请关门。', g: ['a2-imperativo'] },
    { id: 'c2', text: '___ los deberes ahora. (hacer, tú)', answers: ['Haz'], options: ['Haz', 'Hace', 'Haga'], zh: '现在去写作业。', g: ['a2-imperativo'] },
    { id: 'c3', text: '___ aquí, por favor. (venir, tú)', answers: ['Ven'], options: ['Ven', 'Viene', 'Venga'], zh: '请到这儿来。', g: ['a2-imperativo'] },
    { id: 'c4', text: 'Señora, ___ por aquí. (pasar, usted)', answers: ['pase'], options: ['pase', 'pasa', 'pasad'], zh: '女士，这边请。', g: ['a2-imperativo'] },
    { id: 'c5', text: 'Chicos, ___ vuestros libros. (abrir)', answers: ['abrid'], options: ['abrid', 'abran', 'abre'], zh: '孩子们，打开你们的书。', g: ['a2-imperativo'] },
    { id: 'c6', text: 'Señores, ___ la mano si tienen preguntas. (levantar)', answers: ['levanten'], hint: 'levantar, ustedes', zh: '各位，有问题请举手。', g: ['a2-imperativo'] },
    { id: 'c7', text: '___ la verdad. (decir, tú)', answers: ['Di'], options: ['Di', 'Dice', 'Diga'], zh: '说实话。', g: ['a2-imperativo'] },
    { id: 'c8', text: '___ esta medicina dos veces al día. (tomar, usted)', answers: ['Tome'], options: ['Tome', 'Toma', 'Tomad'], zh: '这种药一天吃两次（您）。', g: ['a2-imperativo'] },
    { id: 'c9', text: 'Estás cansado: ___ un rato. (sentarse, tú)', answers: ['siéntate'], options: ['siéntate', 'te sienta', 'sientate'], zh: '你累了，坐一会儿吧。', g: ['a2-imperativo-pron'] },
    { id: 'c10', text: '¿El libro? ___, por favor. (dar a mí)', answers: ['Dámelo'], options: ['Dámelo', 'Me lo da', 'Damelo'], zh: '书吗？请给我。', g: ['a2-imperativo-pron'] },
    { id: 'c11', text: 'Niños, ___ las manos antes de comer. (lavarse)', answers: ['lavaos'], options: ['lavaos', 'lavados', 'lavad'], zh: '孩子们，饭前洗手。', g: ['a2-imperativo-pron'] },
    { id: 'c12', text: 'Para entrar ___ que enseñar el pasaporte.', answers: ['hay'], options: ['hay', 'tiene', 'debe'], zh: '入境要出示护照。', g: ['a2-obligacion'] },
    { id: 'c13', text: 'Mañana ___ que trabajar temprano. (yo)', answers: ['tengo'], options: ['tengo', 'hay', 'debo de'], zh: '我明天得早上班。', g: ['a2-obligacion'] },
    { id: 'c14', text: 'No ___ fumar: es malo para la salud.', answers: ['debes'], options: ['debes', 'tienes', 'hay'], zh: '你不应该抽烟：对健康不好。', g: ['a2-obligacion'] },
    { id: 'c15', text: '¿Por qué no ___ al médico? Tienes mala cara.', answers: ['vas'], options: ['vas', 've', 'ir'], zh: '你为什么不去看医生？你脸色很差。', g: ['a2-obligacion'] },
  ],
  conj: [{ verbs: ['hablar', 'comer', 'abrir', 'cerrar', 'pedir', 'dormir', 'tener', 'poner', 'salir', 'ir', 'venir', 'hacer', 'decir', 'ser'], tenses: ['imp'], persons: [1, 2, 4, 5], g: 'a2-imperativo' }],
  dialogues: [
    {
      id: 'a2-u07-d1',
      title: '在诊所 · En la consulta',
      lines: [
        { who: 'Doctora', es: 'Pase, pase. Siéntese. ¿Qué le pasa?', zh: '请进，请进。请坐。您哪里不舒服？' },
        { who: 'Luis', es: 'Tengo mucha tos y me duele la garganta desde hace cuatro días.', zh: '我咳得很厉害，嗓子疼了四天了。' },
        { who: 'Doctora', es: 'A ver… Abra la boca. Respire hondo… Otra vez.', zh: '我看看……张开嘴。深呼吸……再来一次。' },
        { who: 'Luis', es: '¿Es grave?', zh: '严重吗？' },
        { who: 'Doctora', es: 'No, es un resfriado. Tome este jarabe tres veces al día y beba mucha agua.', zh: '不严重，是感冒。这个糖浆一天喝三次，多喝水。' },
        { who: 'Luis', es: '¿Tengo que quedarme en casa?', zh: '我需要待在家里吗？' },
        { who: 'Doctora', es: 'Sí, descanse dos o tres días. Y no fume, por favor.', zh: '是的，休息两三天。还有，请不要抽烟。' },
        { who: 'Luis', es: 'Muy bien. Muchas gracias, doctora.', zh: '好的。非常感谢，医生。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a2-r13',
      level: 'A2',
      title: 'Diez consejos para dormir mejor',
      titleZh: '睡得更好的十个建议',
      topic: '健康',
      paras: [
        [
          ['¿Duermes mal? Muchas personas tienen problemas para dormir. Aquí tienes algunos consejos.', '你睡不好吗？很多人都有睡眠问题。这里有一些建议。'],
        ],
        [
          ['Acuéstate y levántate siempre a la misma hora, también los fines de semana.', '每天在同一时间睡觉和起床，周末也一样。'],
          ['No tomes café después de las cinco de la tarde.', '下午五点以后别喝咖啡。'],
          ['Haz ejercicio, pero no justo antes de dormir.', '多运动，但别在睡前马上运动。'],
          ['Cena ligero y no muy tarde.', '晚饭吃清淡点，别太晚。'],
        ],
        [
          ['Apaga el móvil y el ordenador una hora antes de acostarte.', '睡前一小时关掉手机和电脑。'],
          ['Lee un libro o escucha música tranquila.', '读读书或听听舒缓的音乐。'],
          ['Si no puedes dormir, levántate y haz algo relajante.', '如果睡不着，就起来做点让人放松的事。'],
        ],
        [
          ['Y lo más importante: no te preocupes. ¡Mañana será otro día!', '最重要的是：别担心。明天又是新的一天！'],
        ],
      ],
      gloss: { algunos: '一些', Acuéstate: '去睡觉（命令式）', misma: '同一个', tomes: '你喝（否定命令式）', justo: '正好', ligero: '清淡的', acostarte: '你上床', relajante: '令人放松的', preocupes: '你担心（否定命令式）', será: '将是' },
      questions: [
        { type: 'tf', q: '周末可以睡懒觉，晚点起。', answer: false, explain: '也要在同一时间起床：también los fines de semana。' },
        { type: 'mc', q: '几点以后不要喝咖啡？', options: ['中午 12 点', '下午 5 点', '晚上 9 点'], answer: 1 },
        { type: 'mc', q: '睡不着的时候建议做什么？', options: ['看手机', '起来做点放松的事', '吃点东西'], answer: 1 },
      ],
    },
    {
      id: 'a2-r14',
      level: 'A2',
      title: 'Cómo llegar a mi casa',
      titleZh: '怎么到我家',
      topic: '城市',
      paras: [
        [
          ['¡Hola, Mei! Te explico cómo llegar a mi casa para la fiesta del sábado.', '嗨，小美！我告诉你怎么来我家参加星期六的聚会。'],
          ['Coge la línea 3 del metro y baja en la estación de Lavapiés.', '坐地铁三号线，在拉瓦皮耶斯站下车。'],
        ],
        [
          ['Sal por la salida de la calle Argumosa y sigue todo recto unos cien metros.', '从阿古莫萨街出口出来，一直往前走大约一百米。'],
          ['En el segundo semáforo, gira a la izquierda.', '在第二个红绿灯处向左转。'],
          ['Mi casa está en la esquina, al lado de una frutería. Es el número 12, tercero B.', '我家在街角，在一家水果店旁边。12 号，三楼 B 座。'],
        ],
        [
          ['Llama al timbre y te abro. Si te pierdes, llámame. ¡Hasta el sábado!', '按门铃我给你开门。如果迷路了，给我打电话。星期六见！'],
        ],
      ],
      gloss: { línea: '线路', baja: '下车（命令式）', salida: '出口', metros: '米', frutería: '水果店', tercero: '三楼', abro: '我开门', pierdes: '你迷路', llámame: '给我打电话' },
      questions: [
        { type: 'mc', q: '要坐地铁几号线？', options: ['1 号线', '3 号线', '5 号线'], answer: 1 },
        { type: 'mc', q: '在第二个红绿灯处怎么走？', options: ['向右转', '向左转', '一直走'], answer: 1 },
        { type: 'tf', q: '朋友家在一家面包店旁边。', answer: false, explain: 'Al lado de una frutería. 在水果店旁边。' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '你的朋友总是很累、压力很大。给他 / 她写一条消息，用命令式和 tener que / deber 给出至少五条建议。', words: [60, 120], hints: ['Duerme… / Haz… / No tomes…', 'Tienes que… / Deberías…', '¿Por qué no…?'] }],
}
