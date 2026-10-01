import type { Unit } from '../types'

export const u03: Unit = {
  id: 'b2-u03',
  level: 'B2',
  order: 3,
  title: '教育与成长',
  titleEs: 'Educar y crecer',
  icon: '🧒',
  goals: ['掌握时态呼应：主句时态决定虚拟式从句的时态', '用 me dijo que / me pidió que + 虚拟式过去时 转述过去的命令和请求', '用虚拟式现在完成时谈论“已经发生”的事', '比较不同年代、不同国家的教育方式'],
  grammar: [
    {
      id: 'b2-concordancia',
      title: '时态呼应：主句“现在”还是“过去”？',
      titleEs: 'La concordancia de tiempos',
      level: 'B2',
      summary: '主句是现在时、将来时、命令式或现在完成时 → 从句用虚拟式现在时（或现在完成时）；主句是过去时或条件式 → 从句用虚拟式过去时（或过去完成时）。',
      body: `### 一张表看懂
| 主句 | 从句（虚拟式） | 例句 |
|---|---|---|
| 现在时 | 现在时 | *Quiero que **estudies**.* |
| 将来时 | 现在时 | *Te pediré que me **ayudes**.* |
| 命令式 | 现在时 | *Dile que **venga**.* |
| 现在完成时 | 现在时 | *Me ha pedido que lo **llame**.* |
| 简单过去时 | **过去时** | *Me pidió que lo **llamara**.* |
| 过去未完成时 | **过去时** | *Quería que **estudiaras**.* |
| 过去完成时 | **过去时** | *Me había pedido que lo **llamara**.* |
| 条件式 | **过去时** | *Me gustaría que **vinieras**.* |

### 同一件事，两个时间
- *Mis padres **quieren** que **estudie** Derecho.*（现在）
- *Mis padres **querían** que **estudiara** Derecho.*（当时）

### 从句的动作更早发生
- 主句现在 → 虚拟式 **现在完成时**：*Me alegra que **hayas venido**.*
- 主句过去 → 虚拟式 **过去完成时**：*Me alegró que **hubieras venido**.*

### 口语里的例外
如果请求到现在仍然有效，口语（尤其在拉美）常保留现在时：*Me pidió que lo **llame**.*（他让我给他打电话——我还没打）。但在西班牙的正式语言中，用 *llamara* 最稳妥。`,
      examples: [
        ['Mis padres quieren que estudie Derecho.', '我父母希望我学法律。'],
        ['Mis padres querían que estudiara Derecho.', '我父母当时希望我学法律。'],
        ['Me alegra que hayas venido.', '你能来我很高兴。'],
        ['Me alegró que hubieras venido.', '你来了，我当时很高兴。'],
        ['Me gustaría que mis hijos aprendieran a tocar un instrumento.', '我希望我的孩子们学会一种乐器。'],
      ],
      origin: `拉丁语语法对时态呼应要求非常严格，罗马的学生都要背 *consecutio temporum* 的规则。西班牙语继承了这套逻辑，但更灵活：只要意思清楚，口语里常常“破例”。

**educar** 来自拉丁语 *educare*「养育、抚养」，和 *educere*「引出来」是亲戚——教育就是把孩子身上的潜能“引出来”。`,
      pitfalls: ['❌ *Quería que me ayudes.* ✅ *Quería que me ayudaras.*', '❌ *Me gustaría que vienes.* ✅ *Me gustaría que vinieras.*', '❌ *Quiero que estudiaras.* ✅ *Quiero que estudies.*'],
    },
    {
      id: 'b2-ordenes-pasado',
      title: '转述过去的命令和请求',
      titleEs: 'Transmitir órdenes y peticiones en pasado',
      level: 'B2',
      summary: 'dijo / pidió / ordenó / aconsejó / prohibió + que + 虚拟式过去时：«Ven.» → Me dijo que fuera. «No llegues tarde.» → Me pidió que no llegara tarde.',
      body: `### 命令式 → 虚拟式过去时
| 原话 | 转述 |
|---|---|
| *«**Ven** a las ocho.»* | *Me dijo que **fuera** a las ocho.* |
| *«No **llegues** tarde.»* | *Me pidió que no **llegara** tarde.* |
| *«**Haced** los deberes.»* | *Nos ordenó que **hiciéramos** los deberes.* |
| *«**Descanse**, señora.»* | *Le aconsejó que **descansara**.* |

> 注意 *venir* 常变成 *ir*，*traer* 常变成 *llevar*：说话的人已经不在原来的地方了。

### 选对引述动词
| 动词 | 语气 |
|---|---|
| *decir que* + 虚拟式 | 一般的要求 |
| *pedir / rogar que* | 请求 |
| *ordenar / mandar / exigir que* | 命令 |
| *aconsejar / recomendar / sugerir que* | 建议 |
| *prohibir / permitir que* | 禁止 / 允许 |
| *suplicar que* | 恳求 |

### 别和“告知”搞混
- *Me dijo que **estaba** cansado.*（告知 → 陈述式）
- *Me dijo que **descansara**.*（要求 → 虚拟式）`,
      examples: [
        ['Mi madre me dijo que fuera a comprar pan.', '我妈让我去买面包。'],
        ['La profesora nos pidió que no usáramos el móvil en clase.', '老师要求我们上课别用手机。'],
        ['El médico le aconsejó que hiciera más ejercicio.', '医生建议他多运动。'],
        ['Mis padres nunca me prohibieron que saliera con mis amigos.', '我父母从不禁止我和朋友出去玩。'],
        ['Le supliqué que no se lo contara a nadie.', '我求他别告诉任何人。'],
      ],
      tables: [{ verbs: ['ir', 'hacer', 'venir'], tense: 'subjImpf' }],
      origin: `**mandar** 来自拉丁语 *mandare*「托付、委托」，据说由 *manus*「手」+ *dare*「给」组成：把事情“交到别人手里”。英语 *command*、*demand* 同源。

**suplicar** 来自 *supplicare*「跪下请求」：*sub*「下面」+ *plicare*「弯曲」——弯下身子去求。`,
      pitfalls: ['❌ *Me dijo que venga ayer.* ✅ *Me dijo que fuera ayer.*（事情已经过去）', '❌ *Le pedí que me ayudaría.* ✅ *Le pedí que me ayudara.*', '❌ *Me dijo que estuviera cansado.*（告知）✅ *Me dijo que estaba cansado.*'],
    },
    {
      id: 'b2-subj-perfecto',
      title: '虚拟式现在完成时：haya hecho',
      titleEs: 'El pretérito perfecto de subjuntivo',
      level: 'B2',
      summary: 'haya, hayas, haya, hayamos, hayáis, hayan + 过去分词。主句是现在时，从句说的是已经发生（或将来某时之前会完成）的事：No creo que haya llegado. Cuando hayas terminado, avísame.',
      body: `### 构成
*haya, hayas, haya, hayamos, hayáis, hayan* + 过去分词

### 用法 1：对“已经发生”的事表达情感、怀疑、评价
| 陈述式 | 虚拟式 |
|---|---|
| *Ha aprobado.* | *Me alegra que **haya aprobado**.* |
| *Ya ha llegado.* | *No creo que **haya llegado** todavía.* |
| *Se ha ido.* | *Es raro que se **haya ido** sin decir nada.* |

### 用法 2：将来某时之前会完成的事
*Cuando **hayas terminado**, avísame.*（你做完了告诉我。）
*No saldrás hasta que **hayas recogido** tu cuarto.*（不收拾完房间不许出去。）

### 现在完成时 ↔ 过去完成时
| 现在 | 过去 |
|---|---|
| *No creo que **haya llegado**.* | *No creía que **hubiera llegado**.* |
| *Me alegra que **hayas venido**.* | *Me alegró que **hubieras venido**.* |`,
      examples: [
        ['Me alegra que hayas aprobado.', '你通过了，我很高兴。'],
        ['No creo que haya llegado todavía.', '我觉得他还没到。'],
        ['Es raro que se haya ido sin despedirse.', '他没打招呼就走了，真奇怪。'],
        ['Cuando hayas terminado los deberes, puedes jugar.', '你做完作业就可以玩。'],
        ['Espero que hayáis disfrutado del viaje.', '希望你们这趟旅行玩得开心。'],
      ],
      tables: [{ verbs: ['hacer', 'volver', 'poner'], tense: 'subjPerf' }],
      origin: `**haya** 来自拉丁语 *habeam*（*habere* 的虚拟式现在时）：*b* 和后面的 *e* 合在一起，变成了一个 *y* 音——*habeam → haya*。

说 *No creo que haya llegado*，其实是把“他到了”（*ha llegado*）这件事放进了“我不相信”的框框里——框框里的一切都要换成虚拟式。`,
      pitfalls: ['❌ *No creo que ha llegado.* ✅ *No creo que haya llegado.*', '❌ *Cuando habrás terminado…* ✅ *Cuando hayas terminado…*', '❌ *haiga* ✅ *haya*。'],
    },
  ],
  words: [
    { id: 'crianza', es: 'crianza', zh: '养育；（葡萄酒）陈酿', pos: 'n', g: 'f', level: 'B2', tags: ['family'], ex: ['La crianza de los hijos requiere paciencia.', '养育孩子需要耐心。'] },
    { id: 'criar', es: 'criar', zh: '养育；饲养', pos: 'v', level: 'B2', tags: ['verb', 'family'], ex: ['Me criaron mis abuelos.', '我是爷爷奶奶带大的。'], note: '重音：crío, crías。' },
    { id: 'educar', es: 'educar', zh: '教育；教养', pos: 'v', level: 'B2', tags: ['verb', 'school'], ex: ['Es difícil educar a un adolescente.', '教育一个青少年很难。'], note: 'c→qu：eduqué。' },
    { id: 'educativo', es: 'educativo', zh: '教育的', pos: 'adj', f: 'educativa', level: 'B2', tags: ['school'], ex: ['El sistema educativo ha cambiado mucho.', '教育体制变化很大。'] },
    { id: 'ensenanza', es: 'enseñanza', zh: '教学；教育', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['Trabajo en la enseñanza pública.', '我在公立教育系统工作。'] },
    { id: 'aprendizaje', es: 'aprendizaje', zh: '学习（过程）', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['El aprendizaje de un idioma lleva tiempo.', '学一门语言需要时间。'] },
    { id: 'alumno', es: 'alumno', zh: '学生', pos: 'n', g: 'm', f: 'alumna', level: 'B2', tags: ['school'], ex: ['Tiene treinta alumnos en clase.', '他班上有三十个学生。'], ety: '拉丁语 alumnus「被抚养的人」，来自 alere「养育」。' },
    { id: 'docente', es: 'docente', zh: '教师；教学的', pos: 'n', g: 'mf', level: 'B2', tags: ['school', 'job'], ex: ['Los docentes piden más recursos.', '教师们要求更多的资源。'] },
    { id: 'guarderia', es: 'guardería', zh: '托儿所', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['Llevo a mi hija a la guardería.', '我送女儿去托儿所。'] },
    { id: 'instituto', es: 'instituto', zh: '中学（公立高中）', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['En el instituto me encantaba la historia.', '中学时我特别喜欢历史。'], note: '西班牙：colegio = 小学（及私立学校），instituto = 公立中学。' },
    { id: 'bachillerato', es: 'bachillerato', zh: '高中（西班牙最后两年）', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Hice el bachillerato de ciencias.', '我高中读的是理科。'] },
    { id: 'disciplina', es: 'disciplina', zh: '纪律；学科', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['En mi colegio había mucha disciplina.', '我们学校纪律很严。'] },
    { id: 'castigo', es: 'castigo', zh: '惩罚', pos: 'n', g: 'm', level: 'B2', tags: ['family'], ex: ['El castigo fue no ver la tele en una semana.', '惩罚是一周不准看电视。'] },
    { id: 'castigar', es: 'castigar', zh: '惩罚', pos: 'v', level: 'B2', tags: ['verb', 'family'], ex: ['Mis padres nunca me castigaban.', '我父母从不惩罚我。'], note: 'g→gu：castigué。' },
    { id: 'recompensa', es: 'recompensa', zh: '奖赏；报酬', pos: 'n', g: 'f', level: 'B2', tags: ['family'], ex: ['El esfuerzo siempre tiene recompensa.', '努力总会有回报。'] },
    { id: 'mimar', es: 'mimar', zh: '宠爱；溺爱', pos: 'v', level: 'B2', tags: ['verb', 'family'], ex: ['Los abuelos siempre miman a los nietos.', '爷爷奶奶总是宠孙子孙女。'] },
    { id: 'consentido', es: 'consentido', zh: '被惯坏的', pos: 'adj', f: 'consentida', level: 'B2', tags: ['family'], ex: ['Es un niño muy consentido.', '这孩子被惯坏了。'] },
    { id: 'autoridad', es: 'autoridad', zh: '权威；当局', pos: 'n', g: 'f', pl: 'autoridades', level: 'B2', tags: ['family'], ex: ['Los profesores han perdido autoridad.', '老师们失去了权威。'] },
    { id: 'autoritario', es: 'autoritario', zh: '专制的；强势的', pos: 'adj', f: 'autoritaria', level: 'B2', tags: ['family'], ex: ['Mi padre era muy autoritario.', '我爸爸以前很专制。'] },
    { id: 'estricto', es: 'estricto', zh: '严格的', pos: 'adj', f: 'estricta', level: 'B2', tags: ['family'], ex: ['Tenía una profesora muy estricta.', '我有一位很严格的老师。'] },
    { id: 'permisivo', es: 'permisivo', zh: '宽容的；放任的', pos: 'adj', f: 'permisiva', level: 'B2', tags: ['family'], ex: ['Hoy los padres son más permisivos.', '现在的父母更宽容。'] },
    { id: 'limite', es: 'límite', zh: '限度；界限', pos: 'n', g: 'm', level: 'B2', tags: ['family'], ex: ['Los niños necesitan límites.', '孩子需要界限。'] },
    { id: 'desobedecer', es: 'desobedecer', zh: '不服从', pos: 'v', level: 'B2', tags: ['verb', 'family'], ex: ['Si desobedecías, te quedabas sin postre.', '要是不听话，就没甜点吃。'] },
    { id: 'rebelde', es: 'rebelde', zh: '叛逆的', pos: 'adj', level: 'B2', tags: ['family'], ex: ['Era un adolescente muy rebelde.', '他是个很叛逆的青少年。'] },
    { id: 'adolescencia', es: 'adolescencia', zh: '青春期', pos: 'n', g: 'f', level: 'B2', tags: ['family'], ex: ['La adolescencia es una etapa difícil.', '青春期是个艰难的阶段。'] },
    { id: 'etapa', es: 'etapa', zh: '阶段', pos: 'n', g: 'f', level: 'B2', tags: ['time'], ex: ['Fue una etapa muy feliz de mi vida.', '那是我人生中很幸福的一段时光。'] },
    { id: 'madurez', es: 'madurez', zh: '成熟', pos: 'n', g: 'f', level: 'B2', tags: ['family'], ex: ['Demostró mucha madurez.', '他表现得很成熟。'] },
    { id: 'independizarse', es: 'independizarse', zh: '独立（离开父母家）', pos: 'v', level: 'B2', tags: ['verb', 'family'], ex: ['En España los jóvenes se independizan tarde.', '西班牙的年轻人很晚才独立生活。'] },
    { id: 'autoestima', es: 'autoestima', zh: '自尊心；自信', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Tiene la autoestima muy baja.', '他很不自信。'] },
    { id: 'comunicacion', es: 'comunicación', zh: '沟通', pos: 'n', g: 'f', level: 'B2', tags: ['people'], ex: ['La comunicación en la familia es fundamental.', '家庭沟通至关重要。'] },
    { id: 'dialogo', es: 'diálogo', zh: '对话', pos: 'n', g: 'm', level: 'B2', tags: ['people'], ex: ['Con diálogo todo se soluciona.', '只要沟通，什么都能解决。'] },
    { id: 'conflicto', es: 'conflicto', zh: '冲突', pos: 'n', g: 'm', level: 'B2', tags: ['people'], ex: ['Hay conflictos en todas las familias.', '每个家庭都有矛盾。'] },
    { id: 'generacion', es: 'generación', zh: '一代人', pos: 'n', g: 'f', pl: 'generaciones', level: 'B2', tags: ['people'], ex: ['Mi generación creció con internet.', '我们这一代是伴随着互联网长大的。'] },
    { id: 'brecha-generacional', es: 'brecha generacional', zh: '代沟', pos: 'n', g: 'f', level: 'B2', tags: ['people'], ex: ['La tecnología aumenta la brecha generacional.', '科技加大了代沟。'] },
    { id: 'tolerancia', es: 'tolerancia', zh: '宽容', pos: 'n', g: 'f', level: 'B2', tags: ['people'], ex: ['Hay que educar en la tolerancia.', '要培养宽容精神。'] },
    { id: 'merito', es: 'mérito', zh: '功劳；价值', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Todo el mérito es suyo.', '功劳全是他的。'] },
    { id: 'talento', es: 'talento', zh: '天赋；人才', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Tiene mucho talento para la música.', '他很有音乐天赋。'], ety: '希腊语 talanton，古代的重量和货币单位；《圣经》“才干的比喻”让它有了“天赋”的意思。' },
    { id: 'fracaso-escolar', es: 'fracaso escolar', zh: '学业失败（辍学、留级等）', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['El fracaso escolar ha disminuido.', '学业失败率下降了。'] },
    { id: 'abandonar', es: 'abandonar', zh: '放弃；离开', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Abandonó los estudios a los dieciséis años.', '他十六岁就辍学了。'] },
    { id: 'repetir-curso', es: 'repetir curso', zh: '留级', pos: 'phr', level: 'B2', tags: ['school'], ex: ['Tuvo que repetir curso.', '他不得不留级。'] },
    { id: 'asignatura-pendiente', es: 'asignatura pendiente', zh: '补考科目；（比喻）一直没做成的事', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['Aprender a nadar es mi asignatura pendiente.', '学游泳是我一直没完成的心愿。'] },
    { id: 'actividad-extraescolar', es: 'actividad extraescolar', zh: '课外活动', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['Mis hijos hacen tres actividades extraescolares.', '我的孩子们上三门课外班。'] },
    { id: 'tutoria', es: 'tutoría', zh: '辅导课；（老师）答疑时间', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['Tengo tutoría con el profesor a las cinco.', '我五点要去找老师答疑。'] },
    { id: 'calificacion', es: 'calificación', zh: '分数；成绩', pos: 'n', g: 'f', pl: 'calificaciones', level: 'B2', tags: ['school'], ex: ['Ha sacado muy buenas calificaciones.', '他取得了很好的成绩。'] },
    { id: 'sobresaliente', es: 'sobresaliente', zh: '优秀（成绩，9–10 分）', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['¡He sacado un sobresaliente!', '我拿了个优！'], note: '西班牙成绩：suspenso (<5), aprobado (5–6), notable (7–8), sobresaliente (9–10)。' },
    { id: 'suspenso', es: 'suspenso', zh: '不及格', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Tengo dos suspensos.', '我有两门不及格。'], latam: '拉美的 suspenso 多指“悬念”；不及格常说 reprobado。' },
    { id: 'evaluacion', es: 'evaluación', zh: '评估；考核', pos: 'n', g: 'f', pl: 'evaluaciones', level: 'B2', tags: ['school'], ex: ['La evaluación es continua.', '考核是平时成绩制。'] },
    { id: 'razonar', es: 'razonar', zh: '推理；讲道理', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Hay que enseñar a los niños a razonar.', '要教孩子学会思考。'] },
    { id: 'reflexionar', es: 'reflexionar', zh: '反思；思考', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Necesito reflexionar antes de decidir.', '做决定之前我需要好好想想。'] },
    { id: 'espiritu-critico', es: 'espíritu crítico', zh: '批判性思维', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['La escuela debe fomentar el espíritu crítico.', '学校应当培养批判性思维。'] },
    { id: 'creatividad', es: 'creatividad', zh: '创造力', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['El arte desarrolla la creatividad.', '艺术能培养创造力。'] },
    { id: 'curiosidad', es: 'curiosidad', zh: '好奇心', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Siento curiosidad por saber qué pasó.', '我很好奇发生了什么。'] },
    { id: 'suplicar', es: 'suplicar', zh: '恳求', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Te suplico que me perdones.', '我求你原谅我。'], note: 'c→qu：supliqué。' },
  ],
  sentences: [
    { id: 's1', es: 'Mis padres querían que estudiara Derecho.', zh: '我父母当时希望我学法律。', g: ['b2-concordancia'], distract: ['estudie'] },
    { id: 's2', es: 'Me gustaría que mis hijos aprendieran a tocar un instrumento.', zh: '我希望我的孩子们学会一种乐器。', g: ['b2-concordancia'] },
    { id: 's3', es: 'Me alegra que hayas venido.', zh: '你能来我很高兴。', g: ['b2-concordancia', 'b2-subj-perfecto'] },
    { id: 's4', es: 'Mi madre me dijo que fuera a comprar pan.', zh: '我妈让我去买面包。', g: ['b2-ordenes-pasado'], distract: ['iba'] },
    { id: 's5', es: 'La profesora nos pidió que no usáramos el móvil en clase.', zh: '老师要求我们上课别用手机。', g: ['b2-ordenes-pasado'] },
    { id: 's6', es: 'El médico le aconsejó que hiciera más ejercicio.', zh: '医生建议他多运动。', g: ['b2-ordenes-pasado'], distract: ['haga'] },
    { id: 's7', es: 'Mis padres nunca me prohibieron que saliera con mis amigos.', zh: '我父母从不禁止我和朋友出去玩。', g: ['b2-ordenes-pasado'] },
    { id: 's8', es: 'No creo que haya llegado todavía.', zh: '我觉得他还没到。', g: ['b2-subj-perfecto'], distract: ['ha'] },
    { id: 's9', es: 'Es raro que se haya ido sin despedirse.', zh: '他没打招呼就走了，真奇怪。', g: ['b2-subj-perfecto'] },
    { id: 's10', es: 'Cuando hayas terminado los deberes, puedes jugar.', zh: '你做完作业就可以玩。', g: ['b2-subj-perfecto'], distract: ['habrás'] },
    { id: 's11', es: 'Espero que hayáis disfrutado del viaje.', zh: '希望你们这趟旅行玩得开心。', g: ['b2-subj-perfecto'] },
    { id: 's12', es: 'Me criaron mis abuelos.', zh: '我是爷爷奶奶带大的。' },
    { id: 's13', es: 'Los niños necesitan límites.', zh: '孩子需要界限。' },
    { id: 's14', es: 'En España los jóvenes se independizan tarde.', zh: '西班牙的年轻人很晚才独立生活。' },
    { id: 's15', es: 'Aprender a nadar es mi asignatura pendiente.', zh: '学游泳是我一直没完成的心愿。' },
    { id: 's16', es: 'La escuela debe fomentar el espíritu crítico.', zh: '学校应当培养批判性思维。' },
    { id: 's17', es: 'Le supliqué que no se lo contara a nadie.', zh: '我求他别告诉任何人。', g: ['b2-ordenes-pasado'] },
    { id: 's18', es: 'Quiero que me llames cuando llegues.', zh: '我希望你到了给我打电话。', g: ['b2-concordancia'] },
    { id: 's19', es: 'Me dijo que estaba cansado.', zh: '他告诉我他累了。', g: ['b2-ordenes-pasado'] },
    { id: 's20', es: 'Me dijo que descansara.', zh: '他让我休息。', g: ['b2-ordenes-pasado'] },
    { id: 's21', es: 'No saldrás hasta que hayas recogido tu cuarto.', zh: '不收拾完房间不许出去。', g: ['b2-subj-perfecto'] },
    { id: 's22', es: 'Era necesario que todos llegáramos a tiempo.', zh: '当时我们所有人都必须准时到。', g: ['b2-concordancia'] },
    { id: 's23', es: 'Tiene mucho talento para la música.', zh: '他很有音乐天赋。' },
    { id: 's24', es: '¡He sacado un sobresaliente!', zh: '我拿了个优！' },
    { id: 's25', es: 'Nos ha pedido que lo esperemos aquí.', zh: '他让我们在这儿等他。', g: ['b2-concordancia'] },
  ],
  cloze: [
    { id: 'c1', text: 'Mis profesores querían que ___ (nosotros) mucho.', answers: ['leyéramos', 'leyésemos'], hint: 'leer', zh: '老师们希望我们多读书。', g: ['b2-concordancia'] },
    { id: 'c2', text: 'Mis profesores quieren que ___ (nosotros) mucho.', answers: ['leamos'], hint: 'leer', zh: '老师们希望我们多读书。', g: ['b2-concordancia'] },
    { id: 'c3', text: 'Me gustaría que ___ (tú) más tiempo con la familia.', answers: ['pasaras', 'pasases'], hint: 'pasar', zh: '我希望你多花点时间陪家人。', g: ['b2-concordancia'] },
    { id: 'c4', text: 'Te pediré que me ___ (tú) con la mudanza.', answers: ['ayudes'], hint: 'ayudar', zh: '我会请你帮我搬家。', g: ['b2-concordancia'] },
    { id: 'c5', text: 'Mi padre me prohibió que ___ (yo) la moto.', answers: ['cogiera', 'cogiese'], hint: 'coger', zh: '我爸禁止我骑摩托车。', g: ['b2-ordenes-pasado'] },
    { id: 'c6', text: '«Ven a verme.» → Me dijo que ___ a verla.', answers: ['fuera', 'fuese'], hint: 'ir', zh: '她让我去看她。', g: ['b2-ordenes-pasado'] },
    { id: 'c7', text: '«No hagáis ruido.» → Nos pidió que no ___ ruido.', answers: ['hiciéramos', 'hiciésemos'], hint: 'hacer', zh: '他要我们别弄出声音。', g: ['b2-ordenes-pasado'] },
    { id: 'c8', text: '«Traiga los documentos.» → Le dijeron que ___ los documentos.', answers: ['llevara', 'llevase'], hint: 'llevar', zh: '他们让他把文件带去。', g: ['b2-ordenes-pasado'], explain: 'traer 转述时常变成 llevar：说话人已不在原地。' },
    { id: 'c9', text: 'El médico le aconsejó que ___ de fumar.', answers: ['dejara', 'dejase'], hint: 'dejar', zh: '医生建议他戒烟。', g: ['b2-ordenes-pasado'] },
    { id: 'c10', text: 'Me dijo que ___ muy cansada y se fue a dormir.', answers: ['estaba'], options: ['estaba', 'estuviera', 'esté'], zh: '她说她很累，就去睡了。', g: ['b2-ordenes-pasado'], explain: '这里是告知，不是要求，用陈述式。' },
    { id: 'c11', text: 'Me alegra que ___ (tú) el examen.', answers: ['hayas aprobado'], hint: 'aprobar', zh: '你考试通过了，我很高兴。', g: ['b2-subj-perfecto'] },
    { id: 'c12', text: 'No creo que ___ (ellos) todavía.', answers: ['hayan salido'], hint: 'salir', zh: '我觉得他们还没出发。', g: ['b2-subj-perfecto'] },
    { id: 'c13', text: 'Cuando ___ (tú) de comer, recoge la mesa.', answers: ['hayas terminado', 'termines'], hint: 'terminar', zh: '吃完饭把桌子收拾一下。', g: ['b2-subj-perfecto'] },
    { id: 'c14', text: 'Es una pena que no ___ (vosotros) venir.', answers: ['hayáis podido'], hint: 'poder', zh: '你们没能来真可惜。', g: ['b2-subj-perfecto'] },
    { id: 'c15', text: 'No creía que ___ (él) tan rápido.', answers: ['hubiera terminado', 'hubiese terminado'], hint: 'terminar', zh: '我当时不相信他这么快就做完了。', g: ['b2-subj-perfecto'] },
    { id: 'c16', text: 'Era importante que los alumnos ___ las normas.', answers: ['respetaran', 'respetasen'], hint: 'respetar', zh: '当时学生遵守规定很重要。', g: ['b2-concordancia'] },
    { id: 'c17', text: 'Dile que me ___ mañana.', answers: ['llame'], hint: 'llamar', zh: '告诉他明天给我打电话。', g: ['b2-concordancia'] },
    { id: 'c18', text: 'Mis abuelos me ___ cuando mis padres trabajaban.', answers: ['criaron'], hint: 'criar', zh: '我父母工作时，是爷爷奶奶带我的。' },
  ],
  conj: [
    { verbs: ['hacer', 'volver', 'poner', 'llegar', 'terminar', 'ver', 'decir'], tenses: ['subjPerf'], g: 'b2-subj-perfecto' },
    { verbs: ['ir', 'hacer', 'venir', 'traer', 'llevar', 'dejar', 'salir'], tenses: ['subjImpf'], g: 'b2-ordenes-pasado' },
  ],
  dialogues: [
    {
      id: 'b2-u03-d1',
      title: '奶奶那个年代 · En mis tiempos…',
      lines: [
        { who: 'Abuela', es: '¿Cómo que no vas a hacer los deberes? En mis tiempos, los maestros nos castigaban si no los hacíamos.', zh: '什么叫你不做作业？我那个年代，不做作业老师是要罚的。' },
        { who: 'Lucía', es: 'Ay, abuela, ya lo sé. Me lo cuentas siempre. ¿Pero de verdad era tan estricto?', zh: '哎呀奶奶，我知道。你老说。可真有那么严吗？' },
        { who: 'Abuela', es: 'Muchísimo. El maestro exigía que nos supiéramos de memoria todos los ríos de España. Y mis padres querían que dejara el colegio a los catorce para ayudar en la tienda.', zh: '严多了。老师要求我们把西班牙所有的河流都背下来。我父母还想让我十四岁就退学，去店里帮忙。' },
        { who: 'Lucía', es: '¿Y lo dejaste?', zh: '那你退学了吗？' },
        { who: 'Abuela', es: 'No. Le supliqué a mi padre que me dejara terminar. Al final aceptó, pero me pidió que trabajara los sábados.', zh: '没有。我求我爸让我把书读完。最后他答应了，但要我每个星期六去干活。' },
        { who: 'Lucía', es: 'Uf, ¡qué diferente! Mis padres solo me piden que saque buenas notas y que no pase todo el día con el móvil.', zh: '哇，差别好大！我爸妈只要求我成绩好，别整天玩手机。' },
        { who: 'Abuela', es: 'Pues me alegra que hayas tenido más suerte que yo. Pero eso no significa que no tengas que hacer los deberes, ¿eh?', zh: '那我很高兴你比我幸运。但这不代表你可以不做作业，嗯？' },
        { who: 'Lucía', es: 'Vale, vale… Cuando haya terminado, ¿me cuentas más cosas de tu colegio?', zh: '好吧好吧……等我做完了，你再给我讲讲你上学时候的事？' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r05',
      level: 'B2',
      title: 'La escuela de nuestros abuelos',
      titleZh: '我们祖辈的学校',
      topic: '教育',
      paras: [
        [
          ['Hace sesenta años, la escuela española era muy diferente de la actual. En muchos pueblos, niños de distintas edades compartían una sola aula y un solo maestro.', '六十年前，西班牙的学校和现在大不相同。在很多村子里，不同年龄的孩子挤在同一间教室，只有一位老师。'],
          ['Los maestros exigían que los alumnos memorizaran listas interminables: los reyes godos, los ríos, las capitales de provincia. Se daba por hecho que repetir era aprender.', '老师要求学生背诵没完没了的清单：西哥特诸王、河流、各省省会。人们想当然地认为，重复就是学习。'],
        ],
        [
          ['La disciplina era estricta. No se permitía que los alumnos hablaran sin levantar la mano, y los castigos físicos eran frecuentes. Muchos padres, además, no consideraban necesario que sus hijas estudiaran más allá de los catorce años.', '纪律很严格。学生不举手不准说话，体罚也很常见。而且很多家长认为，女儿读书读到十四岁以后没有必要。'],
        ],
        [
          ['Hoy los expertos piden que la escuela fomente la creatividad y el espíritu crítico, y que los alumnos aprendan a trabajar en equipo. Sin embargo, algunos docentes temen que se haya ido demasiado lejos y que se haya perdido el valor del esfuerzo.', '如今，专家们呼吁学校培养创造力和批判性思维，让学生学会团队合作。然而，一些老师担心改革走得太远，努力的价值被丢掉了。'],
          ['Quizá la escuela ideal no sea ni la de antes ni la de ahora, sino una que combine lo mejor de las dos.', '也许理想的学校既不是过去那样，也不是现在这样，而是能把两者的长处结合起来。'],
        ],
      ],
      gloss: { actual: '现在的', interminables: '没完没了的', godos: '哥特人', 'se daba por hecho': '被认为理所当然', frecuentes: '常见的', 'más allá de': '超过', fomente: '培养（虚拟式）', temen: '担心', combine: '结合（虚拟式）' },
      questions: [
        { type: 'mc', q: '六十年前很多村子的学校是什么样的？', options: ['每个年级一个老师', '不同年龄的孩子在同一间教室', '没有老师'], answer: 1 },
        { type: 'tf', q: '那时学生可以随时自由发言。', answer: false, explain: 'No se permitía que los alumnos hablaran sin levantar la mano' },
        { type: 'mc', q: '一些老师对现在的教育担心什么？', options: ['学生太累', '努力的价值被丢掉了', '作业太多'], answer: 1 },
      ],
    },
    {
      id: 'b2-r06',
      level: 'B2',
      title: 'Carta de una tutora a las familias',
      titleZh: '班主任致家长的一封信',
      topic: '教育',
      paras: [
        [
          ['Queridas familias: ahora que ha terminado el primer trimestre, me gustaría compartir con ustedes algunas reflexiones.', '亲爱的各位家长：第一学期结束了，我想和大家分享一些想法。'],
        ],
        [
          ['Me alegra mucho que la mayoría de los alumnos se haya adaptado bien al instituto. Sin embargo, me preocupa que algunos duerman muy poco: varios me han contado que se quedan con el móvil hasta las dos de la mañana.', '我很高兴大多数学生已经适应了中学生活。不过，我担心有些孩子睡得太少：好几个学生告诉我，他们玩手机玩到凌晨两点。'],
          ['Por eso, les pido que establezcan normas claras en casa. No se trata de prohibir, sino de que los chicos aprendan a gestionar su tiempo.', '所以，我请各位在家里定下明确的规矩。重点不是禁止，而是让孩子们学会管理自己的时间。'],
        ],
        [
          ['También les recomiendo que hablen con sus hijos sobre lo que hacen en clase, aunque solo sea diez minutos durante la cena. Cuando hayan leído los boletines de notas, no duden en pedir una tutoría conmigo.', '我也建议各位和孩子聊聊他们在课堂上做了什么，哪怕只是晚饭时聊十分钟。看完成绩单后，如果需要，请随时预约和我面谈。'],
          ['Un saludo cordial, Inés Romero, tutora de 1.º B', '诚挚问候，伊内斯·罗梅罗，初一 B 班班主任'],
        ],
      ],
      gloss: { trimestre: '学期（三个月）', reflexiones: '想法', 'se haya adaptado': '已适应（虚拟式）', establezcan: '建立（虚拟式）', 'se trata de': '关键在于', gestionar: '管理', boletines: '成绩单', 'no duden': '请不要犹豫' },
      questions: [
        { type: 'mc', q: '老师担心什么问题？', options: ['学生不适应学校', '有些学生睡得太少', '学生作业太多'], answer: 1 },
        { type: 'mc', q: '老师希望家长怎么做？', options: ['没收孩子的手机', '在家定下明确的规矩', '给孩子请家教'], answer: 1 },
        { type: 'tf', q: '老师建议家长每天花两个小时和孩子讨论功课。', answer: false, explain: 'aunque solo sea diez minutos durante la cena' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '比较你父母（或祖父母）那一代和你这一代的教育：他们的父母 / 老师要求他们做什么、不允许做什么（用过去时 + 虚拟式过去时），现在的情况怎样（现在时 + 虚拟式现在时），你更喜欢哪一种，为什么。', words: [130, 220], hints: ['Mis abuelos me han contado que sus maestros exigían que…', 'No se permitía que…', 'Hoy los padres quieren que sus hijos…', 'Me parece bien que… / No creo que…'] }],
}
