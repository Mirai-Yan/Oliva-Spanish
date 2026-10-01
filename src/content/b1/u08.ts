import type { Unit } from '../types'

export const u08: Unit = {
  id: 'b1-u08',
  level: 'B1',
  order: 8,
  title: '留学与办手续',
  titleEs: 'Estudiar en el extranjero',
  icon: '🎓',
  goals: ['用 cuando + 虚拟式谈论将来要发生的事', '用 antes de que、hasta que、en cuanto 等连接时间', '用 para + 原形 / para que + 虚拟式 表达目的', '在西班牙办理入学、居留、开户等手续'],
  grammar: [
    {
      id: 'b1-cuando-subj',
      title: 'cuando + 虚拟式：说将来',
      titleEs: 'Cuando + subjuntivo',
      level: 'B1',
      summary: '说将来的事：cuando + 虚拟式（Cuando llegue, te llamo）。说习惯或过去的事：cuando + 陈述式（Cuando llego, … / Cuando llegué, …）。疑问句 ¿Cuándo…? 用陈述式。',
      body: `### 同一个 cuando，三种时间
| 时间 | cuando 从句 | 例句 |
|---|---|---|
| **将来**（还没发生） | **虚拟式** | *Cuando **llegue** a Madrid, te **llamaré**.* |
| **习惯**（经常发生） | 陈述式现在时 | *Cuando **llego** a casa, siempre **me ducho**.* |
| **过去**（已经发生） | 陈述式过去时 | *Cuando **llegué** a Madrid, **llovía**.* |

### 为什么说将来要用虚拟式？
西语里 **cuando 后面不能用将来时**。说将来的事时，那件事还没发生，只是“设想中的时间点”，所以用虚拟式：
❌ *Cuando **tendré** dinero…* ✅ *Cuando **tenga** dinero, **viajaré** por América.*

主句可以是将来时、现在时、命令式或 *ir a*：
- *Cuando **termines**, **avísame**.*（你做完了告诉我。）
- *Cuando **sea** mayor, **voy a ser** médica.*（我长大了要当医生。）

### 疑问句不一样
***¿Cuándo vienes?*** ——疑问词 *cuándo* 带重音，后面用陈述式。`,
      examples: [
        ['Cuando llegue a Madrid, te llamaré.', '我到了马德里就给你打电话。'],
        ['Cuando llego a casa, siempre me ducho.', '我一到家总是先洗澡。'],
        ['Cuando llegué a Madrid, llovía.', '我到马德里的时候在下雨。'],
        ['Cuando tenga dinero, viajaré por América.', '等我有钱了，我要去美洲旅行。'],
        ['Cuando termines, avísame.', '你做完了告诉我。'],
      ],
      tables: [{ verbs: ['llegar', 'terminar', 'tener'], tense: 'subj' }],
      origin: `**cuando** 来自拉丁语 *quando*，两千年几乎原封不动。

中世纪西班牙语说将来时，用的是一种专门的 **虚拟式将来时**：*cuando **vinieres***（当你将来到的时候）。今天它只留在法律条文和谚语里，比如这句相当于“入乡随俗”的老话：
***Adonde fueres, haz lo que vieres.***（不论你去哪里，就照你在那里看到的去做。）
其中 *fueres, vieres* 就是虚拟式将来时——C1 会再见到它。`,
      pitfalls: ['❌ *Cuando llegaré, te llamo.* ✅ *Cuando llegue, te llamo.*', '❌ *Cuando seré mayor…* ✅ *Cuando sea mayor…*', '❌ *¿Cuándo vengas?* ✅ *¿Cuándo vienes?*：疑问句用陈述式。'],
    },
    {
      id: 'b1-temporales',
      title: '其他时间连词：antes de que, hasta que, en cuanto…',
      titleEs: 'Oraciones temporales',
      level: 'B1',
      summary: 'antes de + 原形（同一主语）/ antes de que + 虚拟式（永远）；después de + 原形 / después de que；hasta que、en cuanto、mientras、tan pronto como 的规则和 cuando 一样。',
      body: `### 和 cuando 规则一样（将来 → 虚拟式）
| 连词 | 意思 | 例句 |
|---|---|---|
| *en cuanto / tan pronto como* | 一……就…… | *En cuanto **tenga** el visado, compro el billete.* |
| *hasta que* | 直到 | *No me voy hasta que **termines**.* |
| *mientras* | 在……期间 | *Mientras **estés** aquí, puedes usar mi bici.* |
| *cada vez que* | 每次 | *Cada vez que **vengas**, tráeme pan.* |
| *después de que* | 在……之后 | *Después de que **se vayan** los invitados, limpiamos.* |

### antes de que：永远用虚拟式
因为“在某事之前”，那件事一定 **还没发生**：
*Quiero terminar **antes de que vuelvan** mis padres.*（我想在爸妈回来之前做完。）

### 原形还是从句？
| 主语相同 → 原形 | 主语不同 → que + 虚拟式 |
|---|---|
| ***Antes de salir**, cierro la ventana.* | *Cierra la ventana **antes de que salgamos**.* |
| ***Después de comer**, duermo la siesta.* | *Lo hablamos **después de que comas**.* |

### desde que：从……以来（陈述式）
*Desde que **vivo** en España, como más tarde.*（自从住在西班牙，我吃饭更晚了。）`,
      examples: [
        ['En cuanto tenga el visado, compro el billete.', '一拿到签证，我就买机票。'],
        ['No me voy hasta que termines.', '你不做完我就不走。'],
        ['Antes de salir, cierra la ventana.', '出门前把窗户关上。'],
        ['Quiero ordenar la casa antes de que vuelvan mis padres.', '我想在爸妈回来之前把家收拾好。'],
        ['Desde que vivo en España, ceno más tarde.', '自从住在西班牙，我晚饭吃得更晚了。'],
      ],
      origin: `**mientras** 的祖先是拉丁语 *dum interim*「在这期间」，中世纪写作 *domientre*，后来变成 *mientre*，最后加上副词常见的 *-s*：**mientras**。

**hasta** 来自阿拉伯语 *ḥattà*「直到」——又一个摩尔人留下的词。`,
      pitfalls: ['❌ *Antes de que salgo…* ✅ *Antes de que salga…*', '❌ *Antes de que yo salga, yo cierro la puerta.* ✅ *Antes de salir, cierro la puerta.*（主语相同用原形）', '❌ *En cuanto llegaré, te escribo.* ✅ *En cuanto llegue, te escribo.*'],
    },
    {
      id: 'b1-para-que',
      title: '目的：para + 原形 / para que + 虚拟式；sin / sin que',
      titleEs: 'Para (que) y sin (que)',
      level: 'B1',
      summary: '主语相同 → para + 原形：Estudio para aprender. 主语不同 → para que + 虚拟式：Te lo explico para que lo entiendas. sin / sin que 规则相同。',
      body: `### para：目的
| 主语 | 结构 | 例句 |
|---|---|---|
| 相同 | *para* + **原形** | *Ahorro **para comprar** un coche.*（我攒钱是为了买车。） |
| 不同 | *para que* + **虚拟式** | *Te lo explico **para que lo entiendas**.*（我解释给你，好让你明白。） |

正式场合也说 ***a fin de que** + 虚拟式*：*Les enviamos el formulario a fin de que lo **rellenen**.*

### 问目的：¿Para qué…? + 陈述式
*¿Para qué **necesitas** el certificado?* —*Para solicitar la beca.*

### sin / sin que：没有……
| 主语相同 | 主语不同 |
|---|---|
| *Salió **sin decir** nada.*（他一句话没说就走了。） | *Siempre sale **sin que** nadie lo **vea**.*（他总是悄悄出门，没人看见。） |

### 目的 vs 原因
- ***Para que** te acuerdes*：为了让你记住（目的，虚拟式）
- ***Porque** te acuerdas*：因为你记得（原因，陈述式）`,
      examples: [
        ['Ahorro para comprarme un coche.', '我攒钱是为了买辆车。'],
        ['Te lo explico para que lo entiendas.', '我解释给你，好让你明白。'],
        ['¿Para qué necesitas el certificado?', '你要这个证明做什么？'],
        ['Mis padres trabajan mucho para que yo pueda estudiar fuera.', '我父母拼命工作，好让我能出国读书。'],
        ['Salió de casa sin desayunar.', '他没吃早饭就出门了。'],
      ],
      origin: `**para** 来自古西语 *pora*，再往前是拉丁语 *pro ad*「为了 + 朝向」——两个介词叠在一起，表示“朝着某个目标”。

目的从句用虚拟式的道理和愿望一样：目的是 **想要达到但还没实现** 的结果。`,
      pitfalls: ['❌ *Estudio para que aprender.* ✅ *Estudio para aprender.*', '❌ *Te lo digo para que lo sabes.* ✅ *Te lo digo para que lo sepas.*', '❌ *Para yo entender…* ✅ *Para entender…*（同一主语）/ *Para que yo entienda…*'],
    },
  ],
  words: [
    { id: 'tramite', es: 'trámite', zh: '手续', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['Tengo que hacer muchos trámites.', '我得办很多手续。'], ety: '拉丁语 trames「小路」：手续就是要一步一步走完的路。' },
    { id: 'solicitud', es: 'solicitud', zh: '申请；申请表', pos: 'n', g: 'f', pl: 'solicitudes', level: 'B1', tags: ['job'], ex: ['He enviado la solicitud de beca.', '我已经提交了奖学金申请。'] },
    { id: 'solicitar', es: 'solicitar', zh: '申请；请求', pos: 'v', level: 'B1', tags: ['verb', 'job'], ex: ['Quiero solicitar una beca.', '我想申请奖学金。'], note: '比 pedir 正式。' },
    { id: 'formulario', es: 'formulario', zh: '表格', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['Rellene este formulario, por favor.', '请填这张表。'] },
    { id: 'impreso', es: 'impreso', zh: '（印好的）表格；印刷品', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['¿Dónde puedo coger el impreso?', '在哪里能拿到表格？'] },
    { id: 'rellenar', es: 'rellenar', zh: '填写；填满', pos: 'v', level: 'B1', tags: ['verb', 'job'], ex: ['Hay que rellenar todos los datos.', '所有信息都要填。'], latam: '拉美多说 llenar un formulario。' },
    { id: 'plazo', es: 'plazo', zh: '期限；分期', pos: 'n', g: 'm', level: 'B1', tags: ['time'], ex: ['El plazo termina el viernes.', '期限到星期五截止。'], note: 'a plazos = 分期付款。' },
    { id: 'documento', es: 'documento', zh: '文件；证件', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['Traiga todos los documentos originales.', '请带上所有原件。'] },
    { id: 'certificado', es: 'certificado', zh: '证明；证书', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['Necesito un certificado de notas.', '我需要一份成绩证明。'] },
    { id: 'matricula', es: 'matrícula', zh: '注册；学费；车牌', pos: 'n', g: 'f', level: 'B1', tags: ['school'], ex: ['¿Cuánto cuesta la matrícula?', '注册费多少钱？'], latam: '学校注册在拉美也常说 inscripción。' },
    { id: 'matricularse', es: 'matricularse', zh: '注册（入学）', pos: 'v', level: 'B1', tags: ['verb', 'school'], ex: ['Me he matriculado en un curso de español.', '我报了一门西班牙语课。'] },
    { id: 'empadronarse', es: 'empadronarse', zh: '登记住址（户籍登记）', pos: 'v', level: 'B1', tags: ['verb', 'job'], ex: ['Para empadronarte necesitas el contrato de alquiler.', '登记住址需要租房合同。'], note: '西班牙特有：在市政府的 padrón（居民名册）上登记。' },
    { id: 'residencia', es: 'residencia', zh: '居留；（学生）公寓', pos: 'n', g: 'f', level: 'B1', tags: ['job', 'home'], ex: ['Estoy esperando el permiso de residencia.', '我在等居留许可。'] },
    { id: 'visado', es: 'visado', zh: '签证', pos: 'n', g: 'm', level: 'B1', tags: ['travel'], ex: ['Necesitas un visado de estudiante.', '你需要学生签证。'], latam: '拉美说 visa（阴性：la visa）。' },
    { id: 'consulado', es: 'consulado', zh: '领事馆', pos: 'n', g: 'm', level: 'B1', tags: ['city'], ex: ['Pedí cita en el consulado de España en Shanghái.', '我在西班牙驻上海总领事馆预约了。'] },
    { id: 'embajada', es: 'embajada', zh: '大使馆', pos: 'n', g: 'f', level: 'B1', tags: ['city'], ex: ['La embajada está cerrada los domingos.', '大使馆周日不开门。'] },
    { id: 'extranjero', es: 'extranjero', zh: '外国人；国外', pos: 'n', g: 'm', f: 'extranjera', level: 'B1', tags: ['people', 'travel'], ex: ['Quiero estudiar en el extranjero.', '我想出国留学。'], note: 'en el extranjero = 在国外。', ety: '来自古法语 estrangier，源于拉丁语 extraneus「外面的」。英语 stranger 同源。' },
    { id: 'fotocopia', es: 'fotocopia', zh: '复印件', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Traiga el pasaporte y una fotocopia.', '请带护照和一份复印件。'] },
    { id: 'original', es: 'original', zh: '原件；原创的', pos: 'adj', level: 'B1', tags: ['job'], ex: ['¿Tiene el documento original?', '您有原件吗？'] },
    { id: 'cita-previa', es: 'cita previa', zh: '提前预约', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Sin cita previa no te atienden.', '没有预约就不接待。'] },
    { id: 'cola', es: 'cola', zh: '队伍；尾巴；胶水', pos: 'n', g: 'f', level: 'B1', tags: ['city'], ex: ['Hay una cola enorme.', '排了好长的队。'], note: 'hacer cola = 排队。', latam: '拉美多说 fila：hacer fila。' },
    { id: 'entregar', es: 'entregar', zh: '交付；提交', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Hay que entregar el trabajo antes del lunes.', '作业要在星期一之前交。'], note: 'g→gu：entregué，虚拟式 entregue。' },
    { id: 'presentar', es: 'presentar', zh: '提交；介绍；呈现', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Tienes que presentar la solicitud en persona.', '你得亲自提交申请。'] },
    { id: 'renovar', es: 'renovar', zh: '更新；续签', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Tengo que renovar el pasaporte.', '我得换新护照。'], note: 'o→ue：renuevo。' },
    { id: 'caducar', es: 'caducar', zh: '过期', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Mi visado caduca en junio.', '我的签证六月到期。'], note: 'c→qu：caducó，虚拟式 caduque。' },
    { id: 'vigente', es: 'vigente', zh: '有效的；现行的', pos: 'adj', level: 'B1', tags: ['job'], ex: ['Necesitas un pasaporte vigente.', '你需要一本有效的护照。'] },
    { id: 'seguro-medico', es: 'seguro médico', zh: '医疗保险', pos: 'n', g: 'm', level: 'B1', tags: ['body'], ex: ['El seguro médico es obligatorio.', '医疗保险是必须的。'] },
    { id: 'cuenta-bancaria', es: 'cuenta bancaria', zh: '银行账户', pos: 'n', g: 'f', level: 'B1', tags: ['shop'], ex: ['Quiero abrir una cuenta bancaria.', '我想开个银行账户。'] },
    { id: 'intercambio', es: 'intercambio', zh: '交换；交流', pos: 'n', g: 'm', level: 'B1', tags: ['school'], ex: ['Estoy de intercambio en Granada.', '我在格拉纳达做交换生。'] },
    { id: 'expediente', es: 'expediente', zh: '档案；成绩单', pos: 'n', g: 'm', level: 'B1', tags: ['school'], ex: ['Tiene un expediente académico excelente.', '他的学业成绩非常优秀。'] },
    { id: 'convalidar', es: 'convalidar', zh: '认证；（学分）互认', pos: 'v', level: 'B1', tags: ['verb', 'school'], ex: ['Quiero convalidar mis asignaturas.', '我想把我修的课程学分转过来。'] },
    { id: 'nivel', es: 'nivel', zh: '水平；级别', pos: 'n', g: 'm', pl: 'niveles', level: 'B1', tags: ['school'], ex: ['Tengo un nivel B1 de español.', '我的西班牙语是 B1 水平。'] },
    { id: 'curso', es: 'curso', zh: '课程；学年', pos: 'n', g: 'm', level: 'B1', tags: ['school'], ex: ['El curso empieza en septiembre.', '学年九月开始。'] },
    { id: 'semestre', es: 'semestre', zh: '学期（半年）', pos: 'n', g: 'm', level: 'B1', tags: ['school'], ex: ['Voy a estudiar un semestre en México.', '我要去墨西哥学习一个学期。'], note: '西班牙大学多说 cuatrimestre（四个月的学期）。' },
    { id: 'credito', es: 'crédito', zh: '学分；信用；贷款', pos: 'n', g: 'm', level: 'B1', tags: ['school'], ex: ['Esta asignatura tiene seis créditos.', '这门课六个学分。'] },
    { id: 'tutor', es: 'tutor', zh: '导师；监护人', pos: 'n', g: 'm', f: 'tutora', pl: 'tutores', level: 'B1', tags: ['school'], ex: ['Mi tutora me ayuda con el trabajo final.', '我的导师帮我写毕业论文。'] },
    { id: 'campus', es: 'campus', zh: '校园', pos: 'n', g: 'm', pl: 'campus', level: 'B1', tags: ['school'], ex: ['La residencia está dentro del campus.', '宿舍在校园里。'] },
    { id: 'facultad', es: 'facultad', zh: '学院；能力', pos: 'n', g: 'f', pl: 'facultades', level: 'B1', tags: ['school'], ex: ['La Facultad de Letras está al lado.', '文学院就在旁边。'] },
    { id: 'en-cuanto', es: 'en cuanto', zh: '一……就……', pos: 'phr', level: 'B1', tags: ['func'], ex: ['En cuanto llegue, te aviso.', '我一到就告诉你。'] },
    { id: 'tan-pronto-como', es: 'tan pronto como', zh: '一……就……', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Te escribo tan pronto como pueda.', '我一有空就给你写信。'] },
    { id: 'a-fin-de-que', es: 'a fin de que', zh: '为了（正式）', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Le enviamos el formulario a fin de que lo rellene.', '我们把表格发给您，以便您填写。'] },
    { id: 'lio', es: 'lío', zh: '乱子；麻烦（口语）', pos: 'n', g: 'm', level: 'B1', tags: ['func'], ex: ['¡Qué lío de papeles!', '这堆文件真够乱的！'] },
    { id: 'burocracia', es: 'burocracia', zh: '官僚作风；繁琐手续', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['La burocracia en España es muy lenta.', '西班牙的手续办得很慢。'], ety: '法语 bureau「办公桌」+ 希腊语 -kratia「统治」：“办公桌的统治”。' },
    { id: 'paciencia', es: 'paciencia', zh: '耐心', pos: 'n', g: 'f', level: 'B1', tags: ['feel'], ex: ['Hay que tener paciencia.', '要有耐心。'] },
  ],
  sentences: [
    { id: 's1', es: 'Cuando llegue a Madrid, te llamaré.', zh: '我到了马德里就给你打电话。', g: ['b1-cuando-subj'], distract: ['llegaré'] },
    { id: 's2', es: 'Cuando llego a casa, siempre me ducho.', zh: '我一到家总是先洗澡。', g: ['b1-cuando-subj'] },
    { id: 's3', es: 'Cuando llegué a Madrid, llovía.', zh: '我到马德里的时候在下雨。', g: ['b1-cuando-subj'] },
    { id: 's4', es: 'Cuando tenga dinero, viajaré por América.', zh: '等我有钱了，我要去美洲旅行。', g: ['b1-cuando-subj'], distract: ['tendré'] },
    { id: 's5', es: 'Cuando termines, avísame.', zh: '你做完了告诉我。', g: ['b1-cuando-subj'] },
    { id: 's6', es: 'En cuanto tenga el visado, compro el billete.', zh: '一拿到签证，我就买机票。', g: ['b1-temporales'] },
    { id: 's7', es: 'No me voy hasta que termines.', zh: '你不做完我就不走。', g: ['b1-temporales'], distract: ['terminas'] },
    { id: 's8', es: 'Antes de salir, cierra la ventana.', zh: '出门前把窗户关上。', g: ['b1-temporales'] },
    { id: 's9', es: 'Quiero ordenar la casa antes de que vuelvan mis padres.', zh: '我想在爸妈回来之前把家收拾好。', g: ['b1-temporales'], distract: ['vuelven'] },
    { id: 's10', es: 'Desde que vivo en España, ceno más tarde.', zh: '自从住在西班牙，我晚饭吃得更晚了。', g: ['b1-temporales'] },
    { id: 's11', es: 'Ahorro para comprarme un coche.', zh: '我攒钱是为了买辆车。', g: ['b1-para-que'] },
    { id: 's12', es: 'Te lo explico para que lo entiendas.', zh: '我解释给你，好让你明白。', g: ['b1-para-que'], distract: ['entiendes'] },
    { id: 's13', es: '¿Para qué necesitas el certificado?', zh: '你要这个证明做什么？', g: ['b1-para-que'] },
    { id: 's14', es: 'Mis padres trabajan mucho para que yo pueda estudiar fuera.', zh: '我父母拼命工作，好让我能出国读书。', g: ['b1-para-que'] },
    { id: 's15', es: 'Salió de casa sin desayunar.', zh: '他没吃早饭就出门了。', g: ['b1-para-que'] },
    { id: 's16', es: 'Hay que rellenar este formulario.', zh: '要填这张表。' },
    { id: 's17', es: 'El plazo termina el viernes.', zh: '期限到星期五截止。' },
    { id: 's18', es: 'Sin cita previa no te atienden.', zh: '没有预约就不接待。' },
    { id: 's19', es: 'Mi visado caduca en junio.', zh: '我的签证六月到期。' },
    { id: 's20', es: 'Quiero estudiar un año en el extranjero.', zh: '我想出国学习一年。' },
    { id: 's21', es: 'Mientras estés aquí, puedes usar mi bicicleta.', zh: '你在这儿的时候，可以用我的自行车。', g: ['b1-temporales'] },
    { id: 's22', es: 'Te escribo tan pronto como pueda.', zh: '我一有空就给你写信。', g: ['b1-temporales'] },
    { id: 's23', es: 'Cuando sea mayor, voy a ser médica.', zh: '我长大了要当医生。', g: ['b1-cuando-subj'] },
    { id: 's24', es: 'Habla más alto para que te oigan todos.', zh: '说大声点，好让大家都听见。', g: ['b1-para-que'] },
    { id: 's25', es: 'Hay que tener paciencia con la burocracia.', zh: '对付繁琐的手续要有耐心。' },
  ],
  cloze: [
    { id: 'c1', text: 'Cuando ___ (yo) el máster, volveré a China.', answers: ['termine'], hint: 'terminar', zh: '等我读完硕士，就回中国。', g: ['b1-cuando-subj'] },
    { id: 'c2', text: 'Cuando ___ (yo) pequeño, vivía en un pueblo.', answers: ['era'], options: ['era', 'sea', 'seré'], zh: '我小时候住在一个村子里。', g: ['b1-cuando-subj'], explain: '说过去的事，用陈述式。' },
    { id: 'c3', text: 'Cuando ___ (tú) a Sevilla, tienes que probar el gazpacho.', answers: ['vayas'], hint: 'ir', zh: '你去塞维利亚的时候，一定要尝尝西班牙冷汤。', g: ['b1-cuando-subj'] },
    { id: 'c4', text: 'Cuando ___ (yo) tiempo, siempre leo.', answers: ['tengo'], options: ['tengo', 'tenga', 'tendré'], zh: '我有时间的时候总是看书。', g: ['b1-cuando-subj'], explain: '习惯，用陈述式。' },
    { id: 'c5', text: '¿Cuándo ___ (tú) a visitarnos?', answers: ['vienes', 'vendrás'], hint: 'venir', zh: '你什么时候来看我们？', g: ['b1-cuando-subj'] },
    { id: 'c6', text: 'En cuanto ___ (ellos) los resultados, te llamo.', answers: ['publiquen'], hint: 'publicar', zh: '他们一公布结果，我就给你打电话。', g: ['b1-temporales'] },
    { id: 'c7', text: 'Espera aquí hasta que ___ (yo).', answers: ['vuelva'], hint: 'volver', zh: '在这儿等我回来。', g: ['b1-temporales'] },
    { id: 'c8', text: 'Antes de ___, lávate las manos.', answers: ['comer'], options: ['comer', 'que comas', 'comes'], zh: '吃饭前先洗手。', g: ['b1-temporales'] },
    { id: 'c9', text: 'Tenemos que irnos antes de que ___ a llover.', answers: ['empiece'], hint: 'empezar', zh: '我们得在开始下雨之前走。', g: ['b1-temporales'] },
    { id: 'c10', text: 'Desde que ___ (yo) en Madrid, hablo mejor español.', answers: ['vivo'], options: ['vivo', 'viva', 'viviré'], zh: '自从住在马德里，我的西班牙语说得更好了。', g: ['b1-temporales'] },
    { id: 'c11', text: 'Mientras ___ (tú) la cena, yo pongo la mesa.', answers: ['preparas'], options: ['preparas', 'prepares', 'preparar'], zh: '你做晚饭，我来摆桌子。', g: ['b1-temporales'], explain: '这里说的是现在同时进行的事，用陈述式。' },
    { id: 'c12', text: 'Estudio español para ___ en Barcelona.', answers: ['trabajar'], options: ['trabajar', 'que trabaje', 'trabajo'], zh: '我学西班牙语是为了在巴塞罗那工作。', g: ['b1-para-que'] },
    { id: 'c13', text: 'Te dejo mis apuntes para que ___ (tú) el examen.', answers: ['apruebes'], hint: 'aprobar', zh: '我把笔记借给你，好让你通过考试。', g: ['b1-para-que'] },
    { id: 'c14', text: 'Habla despacio para que todos te ___.', answers: ['entiendan'], hint: 'entender', zh: '说慢点，好让大家都听懂。', g: ['b1-para-que'] },
    { id: 'c15', text: 'Se fue sin ___ adiós.', answers: ['decir'], options: ['decir', 'que diga', 'dice'], zh: '他没说再见就走了。', g: ['b1-para-que'] },
    { id: 'c16', text: '¿Para qué ___ (tú) el pasaporte?', answers: ['necesitas'], options: ['necesitas', 'necesites', 'necesitar'], zh: '你要护照做什么？', g: ['b1-para-que'] },
    { id: 'c17', text: 'Después de ___ el formulario, entréguelo en la ventanilla.', answers: ['rellenar'], options: ['rellenar', 'que rellene', 'rellenado'], zh: '填完表格后，请交到窗口。', g: ['b1-temporales'] },
    { id: 'c18', text: 'Le enviamos la información a fin de que ___ (usted) la solicitud.', answers: ['complete'], hint: 'completar', zh: '我们把资料发给您，以便您完成申请。', g: ['b1-para-que'] },
  ],
  conj: [
    { verbs: ['llegar', 'terminar', 'salir', 'volver', 'acabar', 'tener', 'poder', 'ver', 'empezar'], tenses: ['subj'], g: 'b1-cuando-subj' },
    { verbs: ['entender', 'oír', 'traer', 'entregar', 'renovar', 'caducar'], tenses: ['subj'], g: 'b1-para-que' },
  ],
  dialogues: [
    {
      id: 'b1-u08-d1',
      title: '国际处 · En la oficina internacional',
      lines: [
        { who: 'Funcionaria', es: 'Buenos días. ¿En qué puedo ayudarte?', zh: '早上好。有什么可以帮你的？' },
        { who: 'Hao', es: 'Hola. Soy estudiante de intercambio y quiero matricularme en dos asignaturas más.', zh: '你好。我是交换生，想再注册两门课。' },
        { who: 'Funcionaria', es: 'Vale. Para que podamos hacer la matrícula, necesito tu pasaporte y el acuerdo de estudios firmado.', zh: '好的。我们要给你办注册，需要你的护照和签好字的学习协议。' },
        { who: 'Hao', es: 'El pasaporte lo tengo aquí, pero el acuerdo… mi tutora todavía no lo ha firmado.', zh: '护照我带了，但是协议……我的导师还没签。' },
        { who: 'Funcionaria', es: 'Entonces, en cuanto lo firme, tráelo. El plazo termina el viernes, así que date prisa.', zh: '那她一签你就拿过来。期限到星期五截止，所以抓紧。' },
        { who: 'Hao', es: 'De acuerdo. Y otra pregunta: ¿qué tengo que hacer para renovar el permiso de residencia?', zh: '好的。还有一个问题：续签居留许可要怎么办？' },
        { who: 'Funcionaria', es: 'Tienes que pedir cita previa en extranjería antes de que caduque. Te recomiendo que lo hagas ya, porque tardan semanas en dar cita.', zh: '你得在过期之前去外国人管理处预约。建议你现在就约，因为预约要等好几周。' },
        { who: 'Hao', es: '¡Uf, cuánta burocracia! Muchas gracias por la ayuda.', zh: '唉，手续可真多！非常感谢你的帮助。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r15',
      level: 'B1',
      title: 'Guía rápida para estudiantes internacionales',
      titleZh: '国际学生快速指南',
      topic: '手续',
      paras: [
        [
          ['Antes de viajar: solicita el visado de estudiante en el consulado con tiempo suficiente. Es importante que hagas una fotocopia de todos tus documentos.', '出发前：提前在领事馆申请学生签证。一定要把所有文件都复印一份。'],
        ],
        [
          ['Cuando llegues a la ciudad: lo primero es buscar alojamiento. En cuanto tengas un contrato de alquiler, ve al ayuntamiento para empadronarte.', '到达城市后：第一件事是找住处。一签好租房合同，就去市政府登记住址。'],
          ['Después de empadronarte, podrás abrir una cuenta bancaria y pedir la tarjeta de residente.', '登记好住址后，你就能开银行账户、申请居留卡了。'],
        ],
        [
          ['Durante el curso: guarda todos los papeles hasta que termines tus estudios. Si tienes problemas, habla con la oficina internacional: está para que no te sientas solo.', '学年期间：所有文件都要保存到你学业结束。如果遇到问题，就去国际处：它的存在就是为了让你不觉得孤单。'],
          ['Y sobre todo, ten paciencia: la burocracia puede ser lenta, pero al final todo se soluciona.', '最重要的是，要有耐心：手续可能很慢，但最后总能解决。'],
        ],
      ],
      gloss: { suficiente: '足够的', alojamiento: '住处', empadronarte: '登记住址', residente: '居民', guarda: '保存', sientas: '感到（虚拟式）', lenta: '慢的', soluciona: '解决' },
      questions: [
        { type: 'mc', q: '去市政府登记住址需要先有什么？', options: ['银行账户', '租房合同', '学生证'], answer: 1 },
        { type: 'mc', q: '文件要保存到什么时候？', options: ['登记完住址', '拿到签证', '学业结束'], answer: 2 },
        { type: 'tf', q: '文章说手续很快，不需要耐心。', answer: false, explain: 'ten paciencia: la burocracia puede ser lenta' },
      ],
    },
    {
      id: 'b1-r16',
      level: 'B1',
      title: 'Mi primer año en Salamanca',
      titleZh: '我在萨拉曼卡的第一年',
      topic: '留学',
      paras: [
        [
          ['Cuando llegué a Salamanca, hace un año, casi no entendía nada. La gente hablaba muy rápido y yo tenía miedo de hablar.', '一年前我刚到萨拉曼卡的时候，几乎什么都听不懂。大家说话很快，我不敢开口。'],
          ['Pero desde que vivo en una residencia con estudiantes españoles, mi español ha mejorado muchísimo.', '但自从我住进有西班牙学生的宿舍，我的西班牙语进步非常大。'],
        ],
        [
          ['Cada vez que cometo un error, mis compañeros me corrigen con mucha paciencia. Y yo les enseño chino para que puedan pedir comida cuando viajen a Pekín.', '每次我说错，室友们都很耐心地纠正我。我也教他们中文，好让他们以后去北京旅行时能自己点菜。'],
        ],
        [
          ['Antes de que termine el curso, quiero hacer dos cosas: aprobar el examen DELE B2 y recorrer el Camino de Santiago.', '学年结束之前，我想做两件事：通过 DELE B2 考试，走一趟圣地亚哥朝圣之路。'],
          ['Cuando vuelva a China, voy a echar de menos las tapas, las plazas llenas de gente… y hasta la burocracia.', '等我回到中国，我会想念西班牙的下酒小菜、挤满人的广场……甚至还有那些繁琐的手续。'],
        ],
      ],
      gloss: { residencia: '宿舍', mejorado: '进步', cometo: '犯（错）', corrigen: '纠正', recorrer: '走遍', Camino: '路', 'echar de menos': '想念', hasta: '甚至' },
      questions: [
        { type: 'mc', q: '作者的西班牙语为什么进步很大？', options: ['上了很多课', '和西班牙学生住在一起', '看了很多电视'], answer: 1 },
        { type: 'mc', q: '作者为什么教室友中文？', options: ['为了赚钱', '为了让他们在北京能点菜', '老师要求的'], answer: 1 },
        { type: 'tf', q: '作者打算在回国之前走圣地亚哥之路。', answer: true, explain: 'Antes de que termine el curso, quiero… recorrer el Camino de Santiago.' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一写你的留学或长期旅行计划：出发前要做什么、到了以后先做什么、一年后想达到什么目标。至少用三个时间连词（cuando、en cuanto、antes de que…）和一次 para que。', words: [80, 150], hints: ['Antes de viajar, tengo que…', 'Cuando llegue a…, …', 'En cuanto tenga…, …', '… para que mis padres…'] }],
}
