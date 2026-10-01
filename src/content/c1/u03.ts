import type { Unit } from '../types'

export const u03: Unit = {
  id: 'c1-u03',
  level: 'C1',
  order: 3,
  title: '法律与公文',
  titleEs: 'El lenguaje jurídico',
  icon: '⚖️',
  goals: ['认识虚拟式将来时（fuere, hubiere）及其在法律文本和谚语中的用法', '读懂合同、规章和公文的常用套语', '正确使用表示命令的将来时，避免错误的副动词用法', '写一份正式的申请书（Expone / Solicita）'],
  grammar: [
    {
      id: 'c1-subj-futuro',
      title: '虚拟式将来时：fuere, tuviere, hubiere',
      titleEs: 'El futuro de subjuntivo',
      level: 'C1',
      summary: '构成：简单过去时 ellos 形式去掉 -ron，加 -re, -res, -re, -remos, -reis, -ren（tuviere, fuere, hiciere）。今天只出现在法律文本、正式公文、谚语和固定说法里；日常语言用虚拟式现在时或陈述式代替。',
      body: `### 构成（和虚拟式过去时同一个词根）
| 人称 | tener | ser / ir | 复合形式 |
|---|---|---|---|
| yo | tuvie**re** | fue**re** | hubie**re** + 过去分词 |
| tú | tuvie**res** | fue**res** | hubie**res** |
| él / ella / usted | tuvie**re** | fue**re** | hubie**re** |
| nosotros | tuvié**remos** | fué**remos** | hubié**remos** |
| vosotros | tuvie**reis** | fue**reis** | hubie**reis** |
| ellos / ustedes | tuvie**ren** | fue**ren** | hubie**ren** |

### 今天在哪里还能见到？
**1. 法律和公文**（表示将来可能发生的假设情况）
*Si el arrendatario no **abonare** la renta en el plazo establecido, …*
*Quien **causare** daño a otro estará obligado a repararlo.*

**2. 谚语**
***Adonde fueres**, haz lo que **vieres**.*（入乡随俗。）

**3. 固定说法**
*sea cual **fuere** el resultado*（不管结果如何）、*sea lo que **fuere***

### 日常说法
日常说话时，用虚拟式现在时或陈述式代替：
*Si el inquilino no **paga**…*　*Sea cual **sea** el resultado…*`,
      examples: [
        ['Adonde fueres, haz lo que vieres.', '入乡随俗。'],
        ['Si el arrendatario no abonare la renta, el contrato quedará rescindido.', '如承租人未支付租金，合同即行解除。'],
        ['Sea cual fuere el resultado, lo aceptaremos.', '不管结果如何，我们都会接受。'],
        ['Quien causare daño a otro estará obligado a repararlo.', '致他人损害者，应负赔偿责任。'],
        ['En caso de que hubiere alguna duda, consulte el reglamento.', '如有任何疑问，请查阅相关规定。'],
      ],
      tables: [{ verbs: ['tener', 'ser', 'hacer'], tense: 'subjFut' }],
      origin: `虚拟式将来时来自拉丁语的 **将来完成时** *amavero*（我将已爱过）和 **虚拟式完成时** *amaverim* 的合流：*amaverit → amare*。在塞万提斯的时代它还很常用，18 世纪以后在口语中逐渐消失，只在法律和谚语里“冻结”了下来。

所以读到 *fuere*、*hubiere*，就像在现代西班牙语里看到了一块“语言化石”。`,
      pitfalls: ['❌ 日常对话里说 *Si tuvieres tiempo, llámame.*（显得古怪）✅ *Si tienes tiempo, llámame.*', '❌ *Sea cual fuera el resultado*（混用）✅ *Sea cual fuere / sea cual sea el resultado*', '❌ *Adonde fueras, haz lo que vieras.* ✅ *Adonde fueres, haz lo que vieres.*（谚语要按原样）'],
    },
    {
      id: 'c1-lenguaje-juridico',
      title: '法律和公文的套语',
      titleEs: 'Fórmulas del lenguaje jurídico y administrativo',
      level: 'C1',
      summary: '公文语言大量使用无人称和被动结构（se procederá a, queda prohibido）、名词化、固定介词短语（en virtud de, conforme a, a efectos de, sin perjuicio de, en su caso）。申请书（instancia）的结构是：本人信息 + EXPONE（陈述）+ SOLICITA（请求）。',
      body: `### 常见套语
| 套语 | 意思 | 例句 |
|---|---|---|
| *en virtud de* | 根据、依照 | *En virtud del artículo 5, …* |
| *conforme a / de conformidad con* | 按照 | *Conforme a la normativa vigente, …* |
| *a efectos de* | 为了……之目的 | *A efectos de notificación, …* |
| *sin perjuicio de* | 不影响…… | *…sin perjuicio de las sanciones que correspondan.* |
| *en su caso* | 如有需要；视情况 | *…y, en su caso, el pago de la multa.* |
| *por la presente* | 特此 | *Por la presente le comunico…* |
| *se procederá a* | 将进行 | *Se procederá a la devolución del importe.* |
| *queda prohibido / queda terminantemente prohibido* | 禁止 | *Queda prohibido fumar en el recinto.* |
| *el / la abajo firmante* | 下方签名人 | *El abajo firmante declara que…* |

### 申请书（instancia）的结构
> **D.ª** Wang Lin, con NIE X1234567Z y domicilio en…
> **EXPONE:** Que el pasado 3 de marzo presentó la solicitud de…
> **SOLICITA:** Que se le conceda una prórroga de…
> En Madrid, a 10 de mayo de 2026. Firma.

注意：*EXPONE* 和 *SOLICITA* 后面都用 **que** 引出内容，以第三人称叙述自己。`,
      examples: [
        ['Conforme a la normativa vigente, queda prohibido fumar en el recinto.', '根据现行规定，场地内禁止吸烟。'],
        ['En virtud del artículo 12, el plazo podrá prorrogarse.', '根据第 12 条，期限可以延长。'],
        ['Se procederá a la devolución del importe en un plazo de quince días.', '将在十五日内退还款项。'],
        ['El abajo firmante declara que los datos son ciertos.', '下方签名人声明所填信息属实。'],
        ['Solicita que se le conceda una prórroga de dos meses.', '申请人请求准予延期两个月。'],
      ],
      origin: `**abogado** 来自拉丁语 *advocatus*「被叫来（帮忙）的人」：*ad*「向」+ *vocare*「叫」。英语 *advocate* 同源。

**notario** 来自 *notarius*「速记员」——古罗马负责记录口供和契约的人，后来成了专门证明文件真实性的公证人。`,
      pitfalls: ['❌ *En base a la ley…*（不推荐）✅ *Conforme a la ley… / Según la ley…*', '❌ *De acuerdo a la normativa*（拉美常见，西班牙更常用）✅ *De acuerdo con la normativa*', '❌ *Expone que yo presenté…* ✅ *Expone que presentó…*：申请书用第三人称。'],
    },
    {
      id: 'c1-futuro-gerundio',
      title: '命令式的将来时与副动词的误用',
      titleEs: 'Futuro de mandato y usos incorrectos del gerundio',
      level: 'C1',
      summary: '规章和法律中常用将来时表示命令：El arrendatario abonará la renta… / No matarás. 正式写作中要避免“表示后续动作的副动词”（❌ Estudió en Madrid, trasladándose luego a Londres）和“像形容词一样修饰名词的副动词”（❌ una caja conteniendo libros）。',
      body: `### 将来时 = 命令、义务
在法律、规章、考试说明里，将来时常常表示 **必须**：
- *El inquilino **abonará** la renta los cinco primeros días de cada mes.*
- *Los candidatos **deberán** presentar el pasaporte.*
- *No **matarás**.*（十诫：不可杀人。）

### 副动词的两个常见错误
**1. 表示“之后”的副动词**
副动词表示的动作应当和主要动作 **同时或之前**，不能表示“之后才发生”：
❌ *Estudió Derecho en Madrid, **trasladándose** después a Londres.*
✅ *Estudió Derecho en Madrid **y después se trasladó** a Londres.*

**2. 修饰名词的副动词（英语式写法）**
❌ *Recibimos una caja **conteniendo** libros.*（英语 *containing*）
✅ *Recibimos una caja **que contenía** libros.*
❌ *Se busca secretaria **hablando** inglés.*
✅ *Se busca secretaria **que hable** inglés.*

### 正确的副动词用法（复习）
- 方式：*Salió **dando** un portazo.*（他摔门而出。）
- 原因：***Siendo** tan tarde, decidimos quedarnos.*
- 条件：***Estudiando** un poco cada día, aprobarás.*`,
      examples: [
        ['El inquilino abonará la renta los cinco primeros días de cada mes.', '承租人须在每月前五日内支付租金。'],
        ['Los candidatos deberán presentar el pasaporte original.', '应试者须出示护照原件。'],
        ['Estudió Derecho en Madrid y después se trasladó a Londres.', '他在马德里学了法律，后来去了伦敦。'],
        ['Recibimos una caja que contenía libros antiguos.', '我们收到一个装着旧书的箱子。'],
        ['Estudiando un poco cada día, aprobarás sin problemas.', '每天学一点，你一定能通过。'],
      ],
      origin: `**gerundio** 来自拉丁语 *gerundium*，源于 *gerere*「进行、执行」——它表示的是 **正在进行** 的动作，所以天然和主要动作“同时”。用它来表示“之后”的动作，就违背了它的本义。

“表示形容词的副动词”是受英语、法语影响的“公文腔”。西班牙皇家学院专门批评过这种用法，但在商业广告里仍很常见。`,
      pitfalls: ['❌ *Estudió en Madrid, trasladándose luego a Londres.* ✅ *Estudió en Madrid y luego se trasladó a Londres.*', '❌ *una caja conteniendo libros* ✅ *una caja que contenía libros*', '❌ *Se necesita camarero sabiendo inglés.* ✅ *Se necesita camarero que sepa inglés.*'],
    },
  ],
  words: [
    { id: 'normativa', es: 'normativa', zh: '法规；规章制度', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['Conforme a la normativa vigente…', '根据现行法规……'] },
    { id: 'reglamento', es: 'reglamento', zh: '规章；条例', pos: 'n', g: 'm', level: 'C1', tags: ['city'], ex: ['Consulte el reglamento interno.', '请查阅内部规章。'] },
    { id: 'decreto', es: 'decreto', zh: '法令', pos: 'n', g: 'm', level: 'C1', tags: ['city'], ex: ['El gobierno aprobó un nuevo decreto.', '政府通过了一项新法令。'] },
    { id: 'articulo', es: 'artículo', zh: '（法律）条款；文章；物品', pos: 'n', g: 'm', level: 'C1', tags: ['city'], ex: ['Según el artículo 14 de la Constitución…', '根据宪法第 14 条……'] },
    { id: 'apartado', es: 'apartado', zh: '款；项；段落', pos: 'n', g: 'm', level: 'C1', tags: ['city'], ex: ['Lea el apartado tercero.', '请阅读第三款。'] },
    { id: 'disposicion', es: 'disposición', zh: '规定；安排；支配', pos: 'n', g: 'f', pl: 'disposiciones', level: 'C1', tags: ['city'], ex: ['Estoy a su disposición.', '我随时听候您的安排。'] },
    { id: 'arrendatario', es: 'arrendatario', zh: '承租人', pos: 'n', g: 'm', f: 'arrendataria', level: 'C1', tags: ['home'], ex: ['El arrendatario abonará la renta mensualmente.', '承租人按月支付租金。'] },
    { id: 'arrendador', es: 'arrendador', zh: '出租人', pos: 'n', g: 'm', f: 'arrendadora', pl: 'arrendadores', level: 'C1', tags: ['home'], ex: ['El arrendador se compromete a realizar las reparaciones.', '出租人承诺负责维修。'] },
    { id: 'abonar', es: 'abonar', zh: '支付（正式）；施肥', pos: 'v', level: 'C1', tags: ['verb', 'shop'], ex: ['Deberá abonar la cantidad en diez días.', '须在十日内支付该款项。'] },
    { id: 'cuantia', es: 'cuantía', zh: '金额；数额', pos: 'n', g: 'f', level: 'C1', tags: ['shop'], ex: ['La cuantía de la multa es de 300 euros.', '罚款金额为 300 欧元。'] },
    { id: 'importe', es: 'importe', zh: '金额', pos: 'n', g: 'm', level: 'C1', tags: ['shop'], ex: ['Le devolveremos el importe íntegro.', '我们将全额退款。'] },
    { id: 'prorroga', es: 'prórroga', zh: '延期；（比赛）加时', pos: 'n', g: 'f', level: 'C1', tags: ['time'], ex: ['Solicitó una prórroga de dos meses.', '他申请延期两个月。'] },
    { id: 'prorrogar', es: 'prorrogar', zh: '延长', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Han prorrogado el plazo hasta junio.', '期限已延长至六月。'] },
    { id: 'rescindir', es: 'rescindir', zh: '解除（合同）', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Rescindieron el contrato por incumplimiento.', '因违约，他们解除了合同。'] },
    { id: 'rescision', es: 'rescisión', zh: '（合同）解除', pos: 'n', g: 'f', level: 'C1', tags: ['shop'], ex: ['La rescisión del contrato tiene un coste.', '解除合同需要付费。'] },
    { id: 'vigencia', es: 'vigencia', zh: '有效期；效力', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['El contrato tiene una vigencia de un año.', '合同有效期一年。'] },
    { id: 'entrar-en-vigor', es: 'entrar en vigor', zh: '生效', pos: 'phr', level: 'C1', tags: ['city'], ex: ['La ley entrará en vigor el 1 de enero.', '该法将于 1 月 1 日生效。'] },
    { id: 'derogar', es: 'derogar', zh: '废除（法律）', pos: 'v', level: 'C1', tags: ['verb'], ex: ['La ley fue derogada en 2015.', '该法于 2015 年被废除。'] },
    { id: 'infraccion', es: 'infracción', zh: '违法；违规', pos: 'n', g: 'f', pl: 'infracciones', level: 'C1', tags: ['city'], ex: ['Es una infracción grave.', '这是严重违规。'] },
    { id: 'infractor', es: 'infractor', zh: '违法者', pos: 'n', g: 'm', f: 'infractora', pl: 'infractores', level: 'C1', tags: ['city'], ex: ['Los infractores serán sancionados.', '违者将受处罚。'] },
    { id: 'interponer', es: 'interponer', zh: '提出（上诉等）', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Interpuso un recurso contra la multa.', '他对罚款提出了申诉。'], note: '变位同 poner。' },
    { id: 'alegacion', es: 'alegación', zh: '申辩；陈述理由', pos: 'n', g: 'f', pl: 'alegaciones', level: 'C1', tags: ['city'], ex: ['Tiene diez días para presentar alegaciones.', '您有十天时间提出申辩。'] },
    { id: 'demandante', es: 'demandante', zh: '原告', pos: 'n', g: 'mf', level: 'C1', tags: ['city'], ex: ['El demandante reclama una indemnización.', '原告要求赔偿。'] },
    { id: 'demandado', es: 'demandado', zh: '被告', pos: 'n', g: 'm', f: 'demandada', level: 'C1', tags: ['city'], ex: ['El demandado no se presentó.', '被告没有出庭。'] },
    { id: 'acusado', es: 'acusado', zh: '被告人（刑事）', pos: 'n', g: 'm', f: 'acusada', level: 'C1', tags: ['city'], ex: ['El acusado se declaró inocente.', '被告人声称自己无罪。'] },
    { id: 'notario', es: 'notario', zh: '公证人', pos: 'n', g: 'm', f: 'notaria', level: 'C1', tags: ['job'], ex: ['Firmamos la compra ante notario.', '我们在公证人面前签了购房合同。'] },
    { id: 'escritura', es: 'escritura', zh: '（房产等）契约；书写', pos: 'n', g: 'f', level: 'C1', tags: ['home'], ex: ['Ya tenemos la escritura del piso.', '我们已经拿到房产契约了。'] },
    { id: 'heredero', es: 'heredero', zh: '继承人', pos: 'n', g: 'm', f: 'heredera', level: 'C1', tags: ['family'], ex: ['Es el único heredero.', '他是唯一的继承人。'] },
    { id: 'testamento', es: 'testamento', zh: '遗嘱', pos: 'n', g: 'm', level: 'C1', tags: ['family'], ex: ['Hizo testamento ante notario.', '他在公证人面前立了遗嘱。'] },
    { id: 'firmante', es: 'firmante', zh: '签署人', pos: 'n', g: 'mf', level: 'C1', tags: ['job'], ex: ['Los firmantes se comprometen a…', '签署各方承诺……'] },
    { id: 'el-abajo-firmante', es: 'el abajo firmante', zh: '下方签名人（公文用语）', pos: 'phr', level: 'C1', tags: ['job'], ex: ['El abajo firmante declara que los datos son ciertos.', '下方签名人声明所填信息属实。'] },
    { id: 'en-virtud-de', es: 'en virtud de', zh: '根据；凭借', pos: 'phr', level: 'C1', tags: ['func'], ex: ['En virtud de lo dispuesto en el artículo 5…', '根据第 5 条之规定……'] },
    { id: 'conforme-a', es: 'conforme a', zh: '按照', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Conforme a lo acordado, le enviamos el contrato.', '按照约定，现将合同发给您。'] },
    { id: 'a-efectos-de', es: 'a efectos de', zh: '为了……（之目的）', pos: 'phr', level: 'C1', tags: ['func'], ex: ['A efectos de notificación, indique su dirección.', '为便于通知，请注明您的地址。'] },
    { id: 'en-su-caso', es: 'en su caso', zh: '如有需要；视情况', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Adjunte el certificado y, en su caso, el título.', '请附上证明，如有需要，附上学历证书。'] },
    { id: 'de-conformidad-con', es: 'de conformidad con', zh: '依照', pos: 'phr', level: 'C1', tags: ['func'], ex: ['De conformidad con la ley, le informamos de que…', '依照法律，特此告知……'] },
    { id: 'sin-perjuicio-de', es: 'sin perjuicio de', zh: '不影响……', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Todo ello sin perjuicio de las sanciones que correspondan.', '以上均不影响相应的处罚。'] },
    { id: 'por-la-presente', es: 'por la presente', zh: '特此', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Por la presente le comunico mi dimisión.', '特此通知您我的辞职决定。'] },
    { id: 'exponer', es: 'exponer', zh: '陈述；展出；使面临', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Expuso sus argumentos con claridad.', '他清楚地陈述了自己的论点。'], note: '变位同 poner。' },
    { id: 'procedente', es: 'procedente', zh: '合理的；来自……的', pos: 'adj', level: 'C1', tags: ['city'], ex: ['El tren procedente de Sevilla llega con retraso.', '来自塞维利亚的列车晚点。'] },
    { id: 'improcedente', es: 'improcedente', zh: '不合法的；不恰当的', pos: 'adj', level: 'C1', tags: ['city'], ex: ['El juez declaró el despido improcedente.', '法官宣布这次解雇不合法。'] },
    { id: 'cumplimentar', es: 'cumplimentar', zh: '填写（表格，正式）', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Cumplimente el formulario en mayúsculas.', '请用大写字母填写表格。'] },
    { id: 'cumplimiento', es: 'cumplimiento', zh: '履行；遵守', pos: 'n', g: 'm', level: 'C1', tags: ['city'], ex: ['Velamos por el cumplimiento de la ley.', '我们监督法律的执行。'] },
    { id: 'estipular', es: 'estipular', zh: '规定；约定', pos: 'v', level: 'C1', tags: ['verb'], ex: ['El contrato estipula un plazo de tres meses.', '合同规定期限为三个月。'] },
    { id: 'juridico', es: 'jurídico', zh: '法律的', pos: 'adj', f: 'jurídica', level: 'C1', tags: ['city'], ex: ['Necesito asesoramiento jurídico.', '我需要法律咨询。'] },
    { id: 'presunto', es: 'presunto', zh: '涉嫌的；推定的', pos: 'adj', f: 'presunta', level: 'C1', tags: ['city'], ex: ['El presunto autor del robo fue detenido.', '盗窃案的嫌疑人已被逮捕。'] },
    { id: 'absolver', es: 'absolver', zh: '宣告无罪', pos: 'v', level: 'C1', tags: ['verb'], ex: ['El tribunal lo absolvió.', '法庭宣告他无罪。'], note: 'o→ue；过去分词 absuelto。' },
    { id: 'condenar', es: 'condenar', zh: '判刑；谴责', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Lo condenaron a dos años de prisión.', '他被判两年徒刑。'] },
    { id: 'condena', es: 'condena', zh: '判刑；谴责', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['Cumplió su condena.', '他服满了刑期。'] },
    { id: 'indulto', es: 'indulto', zh: '赦免', pos: 'n', g: 'm', level: 'C1', tags: ['city'], ex: ['El gobierno le concedió el indulto.', '政府赦免了他。'] },
  ],
  sentences: [
    { id: 's1', es: 'Adonde fueres, haz lo que vieres.', zh: '入乡随俗。', g: ['c1-subj-futuro'] },
    { id: 's2', es: 'Sea cual fuere el resultado, lo aceptaremos.', zh: '不管结果如何，我们都会接受。', g: ['c1-subj-futuro'] },
    { id: 's3', es: 'Quien causare daño a otro estará obligado a repararlo.', zh: '致他人损害者，应负赔偿责任。', g: ['c1-subj-futuro'] },
    { id: 's4', es: 'Conforme a la normativa vigente, queda prohibido fumar.', zh: '根据现行规定，禁止吸烟。', g: ['c1-lenguaje-juridico'] },
    { id: 's5', es: 'En virtud del artículo 12, el plazo podrá prorrogarse.', zh: '根据第 12 条，期限可以延长。', g: ['c1-lenguaje-juridico'] },
    { id: 's6', es: 'Se procederá a la devolución del importe.', zh: '将退还款项。', g: ['c1-lenguaje-juridico'] },
    { id: 's7', es: 'El abajo firmante declara que los datos son ciertos.', zh: '下方签名人声明所填信息属实。', g: ['c1-lenguaje-juridico'] },
    { id: 's8', es: 'Por la presente le comunico mi dimisión.', zh: '特此通知您我的辞职决定。', g: ['c1-lenguaje-juridico'] },
    { id: 's9', es: 'El inquilino abonará la renta los cinco primeros días de cada mes.', zh: '承租人须在每月前五日内支付租金。', g: ['c1-futuro-gerundio'] },
    { id: 's10', es: 'Los candidatos deberán presentar el pasaporte original.', zh: '应试者须出示护照原件。', g: ['c1-futuro-gerundio'] },
    { id: 's11', es: 'Estudió Derecho en Madrid y después se trasladó a Londres.', zh: '他在马德里学了法律，后来去了伦敦。', g: ['c1-futuro-gerundio'], distract: ['trasladándose'] },
    { id: 's12', es: 'Recibimos una caja que contenía libros antiguos.', zh: '我们收到一个装着旧书的箱子。', g: ['c1-futuro-gerundio'], distract: ['conteniendo'] },
    { id: 's13', es: 'Se busca secretaria que hable inglés.', zh: '招聘会说英语的秘书。', g: ['c1-futuro-gerundio'], distract: ['hablando'] },
    { id: 's14', es: 'La ley entrará en vigor el 1 de enero.', zh: '该法将于 1 月 1 日生效。' },
    { id: 's15', es: 'Interpuso un recurso contra la multa.', zh: '他对罚款提出了申诉。' },
    { id: 's16', es: 'Tiene diez días para presentar alegaciones.', zh: '您有十天时间提出申辩。' },
    { id: 's17', es: 'El juez declaró el despido improcedente.', zh: '法官宣布这次解雇不合法。' },
    { id: 's18', es: 'Firmamos la compra ante notario.', zh: '我们在公证人面前签了购房合同。' },
    { id: 's19', es: 'El presunto autor del robo fue detenido ayer.', zh: '盗窃案的嫌疑人昨天被捕。' },
    { id: 's20', es: 'Solicita que se le conceda una prórroga de dos meses.', zh: '申请人请求准予延期两个月。', g: ['c1-lenguaje-juridico'] },
    { id: 's21', es: 'Salió de la reunión dando un portazo.', zh: '他摔门离开了会议。', g: ['c1-futuro-gerundio'] },
    { id: 's22', es: 'Cumplimente el formulario en mayúsculas.', zh: '请用大写字母填写表格。' },
    { id: 's23', es: 'El contrato estipula un plazo de tres meses.', zh: '合同规定期限为三个月。' },
    { id: 's24', es: 'Estoy a su entera disposición.', zh: '我随时听候您的安排。' },
    { id: 's25', es: 'No matarás.', zh: '不可杀人。', g: ['c1-futuro-gerundio'] },
  ],
  cloze: [
    { id: 'c1', text: 'Adonde ___, haz lo que vieres.', answers: ['fueres'], options: ['fueres', 'fueras', 'vayas'], zh: '入乡随俗。', g: ['c1-subj-futuro'] },
    { id: 'c2', text: 'Sea cual ___ la decisión, la respetaremos.', answers: ['fuere', 'sea'], options: ['fuere', 'fuera', 'es'], zh: '不管决定是什么，我们都会尊重。', g: ['c1-subj-futuro'] },
    { id: 'c3', text: 'Si el comprador no ___ el importe, la venta quedará anulada.', answers: ['abonare', 'abona'], options: ['abonare', 'abonaría', 'abonase de'], zh: '如买方未付款，交易即行作废。', g: ['c1-subj-futuro'] },
    { id: 'c4', text: 'En ___ del artículo 3, se le impone una multa.', answers: ['virtud'], options: ['virtud', 'base', 'razón'], zh: '根据第 3 条，对您处以罚款。', g: ['c1-lenguaje-juridico'] },
    { id: 'c5', text: '___ a la normativa vigente, el plazo es de un mes.', answers: ['Conforme'], options: ['Conforme', 'En base', 'Según a'], zh: '根据现行规定，期限为一个月。', g: ['c1-lenguaje-juridico'] },
    { id: 'c6', text: 'Todo ello sin ___ de las acciones legales que correspondan.', answers: ['perjuicio'], options: ['perjuicio', 'prejuicio', 'daño'], zh: '以上均不影响可采取的相应法律行动。', g: ['c1-lenguaje-juridico'] },
    { id: 'c7', text: 'Queda terminantemente ___ el acceso a personas ajenas.', answers: ['prohibido'], options: ['prohibido', 'prohibida', 'prohíbe'], zh: '无关人员严禁入内。', g: ['c1-lenguaje-juridico'] },
    { id: 'c8', text: 'Se ___ a la apertura de las ofertas el día 5.', answers: ['procederá'], options: ['procederá', 'procedería', 'proceda'], zh: '将于 5 日开标。', g: ['c1-lenguaje-juridico'] },
    { id: 'c9', text: 'A ___ de notificación, indique un correo electrónico.', answers: ['efectos'], options: ['efectos', 'fines de', 'causa'], zh: '为便于通知，请注明电子邮箱。', g: ['c1-lenguaje-juridico'] },
    { id: 'c10', text: 'Los alumnos ___ entregar el trabajo antes del día 15.', answers: ['deberán'], options: ['deberán', 'deberían', 'debían'], zh: '学生须在 15 日前交作业。', g: ['c1-futuro-gerundio'] },
    { id: 'c11', text: 'Nació en Toledo en 1920 y ___ en Madrid en 1990.', answers: ['murió'], options: ['murió', 'muriendo', 'morirá'], zh: '他 1920 年生于托莱多，1990 年卒于马德里。', g: ['c1-futuro-gerundio'], explain: '后续动作不能用副动词表达。' },
    { id: 'c12', text: 'Necesitamos un técnico que ___ experiencia en redes.', answers: ['tenga'], options: ['tenga', 'teniendo', 'tiene de'], zh: '我们需要一名有网络经验的技术员。', g: ['c1-futuro-gerundio'] },
    { id: 'c13', text: 'Recibí un sobre que ___ dos entradas.', answers: ['contenía'], options: ['contenía', 'conteniendo', 'contuviera'], zh: '我收到一个装着两张票的信封。', g: ['c1-futuro-gerundio'] },
    { id: 'c14', text: 'La nueva ley entrará en ___ mañana.', answers: ['vigor'], options: ['vigor', 'vigencia', 'fuerza'], zh: '新法明天生效。' },
    { id: 'c15', text: 'Tiene quince días para ___ un recurso.', answers: ['interponer'], options: ['interponer', 'hacer de', 'poner a'], zh: '您有十五天时间提出申诉。' },
    { id: 'c16', text: 'El tribunal lo ___ por falta de pruebas.', answers: ['absolvió'], hint: 'absolver', zh: '法庭因证据不足宣告他无罪。' },
    { id: 'c17', text: 'Por la ___ le comunico que he decidido dejar la empresa.', answers: ['presente'], options: ['presente', 'carta', 'misma'], zh: '特此通知您，我决定离开公司。', g: ['c1-lenguaje-juridico'] },
    { id: 'c18', text: 'Han ___ el plazo de matrícula hasta el lunes.', answers: ['prorrogado'], hint: 'prorrogar', zh: '注册期限已延长至星期一。' },
  ],
  conj: [
    { verbs: ['tener', 'ser', 'hacer', 'haber', 'poder', 'decir'], tenses: ['subjFut'], g: 'c1-subj-futuro' },
    { verbs: ['abonar', 'deber', 'presentar', 'interponer', 'exponer'], tenses: ['fut'], g: 'c1-futuro-gerundio' },
  ],
  dialogues: [
    {
      id: 'c1-u03-d1',
      title: '看不懂的合同 · Un contrato indescifrable',
      lines: [
        { who: 'Wang Lin', es: 'Elena, ¿me ayudas? Me han mandado el contrato de alquiler y no entiendo la mitad.', zh: '埃莱娜，能帮我个忙吗？他们把租房合同发给我了，我一半都看不懂。' },
        { who: 'Elena', es: 'A ver… «Si el arrendatario no abonare la renta en el plazo estipulado…». Esto es futuro de subjuntivo; hoy solo se usa en textos legales. Significa «si no pagas».', zh: '我看看……“如承租人未在约定期限内支付租金……”这是虚拟式将来时，现在只在法律文本里用。意思就是“如果你不付钱”。' },
        { who: 'Wang Lin', es: '¡Ah! ¿Y esto de «sin perjuicio de las acciones legales que correspondan»?', zh: '啊！那这句“不影响可采取的相应法律行动”呢？' },
        { who: 'Elena', es: 'Que, además de echarte, te pueden denunciar. Tranquila, es una fórmula que aparece en todos los contratos.', zh: '意思是除了把你赶出去，还可以起诉你。别担心，这是所有合同里都有的套话。' },
        { who: 'Wang Lin', es: 'Vale. Aquí pone que la fianza se devolverá «una vez comprobado el estado de la vivienda». ¿Es normal?', zh: '好的。这里写着押金会在“确认房屋状况后”退还。这正常吗？' },
        { who: 'Elena', es: 'Sí, pero haz fotos de todo el piso el primer día, por si acaso. Y fíjate en la cláusula siete: dice que cualquier reforma deberá ser autorizada por escrito.', zh: '正常，但第一天把整套房子都拍下来，以防万一。还要注意第七条：任何装修都必须获得书面许可。' },
        { who: 'Wang Lin', es: '¿Por qué escriben así? ¡Parece otro idioma!', zh: '他们为什么要这样写？简直像另一种语言！' },
        { who: 'Elena', es: 'Es el castellano de los abogados. Hasta los españoles necesitamos a veces un traductor.', zh: '这就是律师的西班牙语。连我们西班牙人有时都需要个“翻译”。' },
      ],
    },
  ],
  readings: [
    {
      id: 'c1-r05',
      level: 'C1',
      title: 'Por un lenguaje jurídico claro',
      titleZh: '让法律语言更清晰',
      topic: '语言与社会',
      paras: [
        [
          ['Frases interminables, gerundios encadenados, latinismos y fórmulas del siglo XIX: el lenguaje jurídico español tiene fama de ser incomprensible para el ciudadano medio. Y, en gran medida, la fama es merecida.', '没完没了的长句、一个接一个的副动词、拉丁语借词、十九世纪的套话：西班牙的法律语言素以普通公民看不懂而闻名。这个名声在很大程度上并不冤枉。'],
        ],
        [
          ['En 2011, una comisión creada por el Ministerio de Justicia publicó un informe con recomendaciones para modernizarlo. Entre otras cosas, proponía evitar las oraciones demasiado largas, eliminar los gerundios innecesarios y sustituir expresiones arcaicas por otras de uso común.', '2011 年，司法部设立的一个委员会发布了一份报告，提出了让法律语言现代化的建议。其中包括：避免过长的句子，删除不必要的副动词，用常用说法代替古旧的表达。'],
          ['Los defensores del lenguaje claro sostienen que, si los ciudadanos no entienden las leyes que deben cumplir, difícilmente podrán ejercer sus derechos.', '“清晰语言”的支持者认为，如果公民看不懂他们必须遵守的法律，他们就很难行使自己的权利。'],
        ],
        [
          ['Otros juristas advierten de que la precisión exige a veces cierta complejidad: cada término técnico tiene un significado exacto que una palabra corriente no siempre recoge.', '另一些法律界人士则提醒说，精确有时需要一定的复杂性：每个专业术语都有确切的含义，普通词汇未必能表达。'],
          ['Sea como fuere, la tendencia parece clara. Cada vez más administraciones redactan sus documentos pensando en quien los va a leer, y no solo en quien los va a firmar.', '无论如何，趋势似乎已经很清楚。越来越多的行政机构在起草文件时，考虑的是读文件的人，而不只是签文件的人。'],
        ],
      ],
      gloss: { encadenados: '一连串的', latinismos: '拉丁语借词', 'ciudadano medio': '普通公民', merecida: '应得的', comisión: '委员会', arcaicas: '古旧的', ejercer: '行使', juristas: '法学家', redactan: '起草' },
      questions: [
        { type: 'mc', q: '2011 年的报告提出了什么建议？', options: ['多用拉丁语借词', '避免过长的句子和不必要的副动词', '所有法律都用英语写'], answer: 1 },
        { type: 'mc', q: '一些法学家为什么为法律语言的复杂性辩护？', options: ['为了显得专业', '精确有时需要专业术语', '因为传统'], answer: 1 },
        { type: 'tf', q: '文章认为越来越多的机构在写文件时考虑读者。', answer: true, explain: 'redactan sus documentos pensando en quien los va a leer' },
      ],
    },
    {
      id: 'c1-r06',
      level: 'C1',
      title: 'Un tiempo verbal en peligro de extinción',
      titleZh: '一个濒临灭绝的时态',
      topic: '语言史',
      paras: [
        [
          ['En el Quijote, este tiempo aparece con total naturalidad en boca de los personajes. Cuatro siglos después, el futuro de subjuntivo ha desaparecido del habla cotidiana y casi nadie sabría conjugarlo sin pensar.', '在《堂吉诃德》里，人物们说话时用起它来再自然不过。四个世纪后，虚拟式将来时已经从日常口语中消失，几乎没人能不假思索地变位。'],
        ],
        [
          ['Sin embargo, no ha muerto del todo. Sobrevive en tres refugios: los textos legales, que lo mantienen por tradición; algunos refranes, como «adonde fueres, haz lo que vieres»; y unas pocas expresiones fijas, como «sea cual fuere».', '然而，它并没有完全消亡。它在三个“避难所”里幸存了下来：出于传统而保留它的法律文本；一些谚语，比如“入乡随俗”；以及少数固定说法，比如“不管是什么”。'],
          ['Curiosamente, en algunas zonas rurales de Canarias y del Caribe todavía se registraban usos espontáneos en el siglo XX, lo que demuestra que la lengua cambia a ritmos distintos según el lugar.', '有意思的是，在加那利群岛和加勒比的一些乡村地区，二十世纪时仍有人自然地使用它，这说明语言在不同地方以不同的速度变化。'],
        ],
        [
          ['Para el estudiante de nivel C1, no hace falta producirlo, pero sí reconocerlo. Quien lo encuentre en un contrato o en un refrán sabrá que no se trata de una errata, sino de una pieza de museo que sigue funcionando.', '对 C1 学习者来说，不需要会用它，但需要认得它。在合同或谚语里遇到它的人会知道，这不是印刷错误，而是一件仍在运转的“博物馆展品”。'],
        ],
      ],
      gloss: { naturalidad: '自然', 'del todo': '完全', refugios: '避难所', registraban: '记录到', espontáneos: '自发的', ritmos: '节奏', errata: '印刷错误', pieza: '展品' },
      questions: [
        { type: 'mc', q: '虚拟式将来时如今在哪里幸存？', options: ['年轻人的口语', '法律文本、谚语和固定说法', '电视广告'], answer: 1 },
        { type: 'tf', q: '文章认为 C1 学习者必须会熟练使用这个时态。', answer: false, explain: 'no hace falta producirlo, pero sí reconocerlo' },
        { type: 'mc', q: '二十世纪时哪些地方仍有人自然地使用它？', options: ['马德里和巴塞罗那', '加那利群岛和加勒比的乡村', '阿根廷的大城市'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一份正式申请书（instancia），向大学或政府部门申请延期（交论文、交材料、续签居留……）。按格式写：申请人信息、EXPONE（用第三人称陈述理由）、SOLICITA（提出请求），并使用至少三个本单元的公文套语。', words: [150, 220], hints: ['D./D.ª …, con NIE … y domicilio en …', 'EXPONE: Que…', 'SOLICITA: Que se le conceda…', 'En virtud de… / Conforme a… / En … , a … de … de 2026.'] }],
}
