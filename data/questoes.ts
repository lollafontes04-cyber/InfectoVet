export const questoes = [

{
  id: 1,
  categoria: "Bacterianas",
  doencaId: "clostridioses",
  doenca: "Clostridioses",

  pergunta:
    "As Clostridioses estão entre as principais enfermidades que acometem os animais domésticos no país com altas taxas de morbidade e letalidade, acarretando grandes prejuízos econômicos ao setor produtivo. Quais alternativas relacionadas à doença são verdadeiras (V) ou falsas (F)?\n\n" +
    "( ) O Clostridium perfringens é o agente causador da Enterotoxemia dos Bovinos Adultos, Doença do Rim Pulposo e da Enterotoxemia Hemorrágica.\n" +
    "( ) Os equinos parecem ser sensíveis a todos os sorotipos de neurotoxinas botulínicas, porém os bovinos são susceptíveis aos tipos C e D.\n" +
    "( ) O Clostridium difficile é agente causador de diarreia em suínos e equinos, sendo a vacinação a principal forma de controle.\n" +
    "( ) Gatos, caprinos e ovinos apresentam maior sensibilidade à neurotoxina de C. tetani.\n" +
    "( ) O carbúnculo sintomático é causado exclusivamente por C. chauvoei.",

  alternativas: [
    "A) V; F; F; F; F",
    "B) F; V; V; V; F",
    "C) F; F; V; F; V",
    "D) V; V; F; F; V",
    "E) V; V; V; F; F"
  ],

  resposta: "D",

  comentario:
    "A sequência correta é D. Algumas afirmações estão incorretas porque o Clostridium difficile não tem vacinação como principal controle e o carbúnculo sintomático está principalmente associado ao C. chauvoei, mas a afirmação utiliza o termo 'exclusivamente', tornando-a inadequada."
},


{
  id: 3,
  categoria: "Virais",
  doencaId: "raiva",
  doenca: "Viroses em cães e gatos",

  pergunta:
    "As infecções virais em cães e gatos são importantes moléstias causadoras de mortes em muitos animais. Marque como verdadeiras (V) ou falsas (F) as seguintes informações.",

  alternativas: [
    "A) F; V; V; F; V",
    "B) V; V; F; V; F",
    "C) F; F; V; V; F",
    "D) V; V; V; F; V",
    "E) F; F; F; V; V"
  ],

  resposta: "B",

  comentario:
    "A sequência correta é B. O período de incubação da raiva pode variar amplamente, a cinomose acomete principalmente cães jovens e a vacinação contra calicivírus felino pode utilizar diferentes vias. As demais afirmações apresentam erros conceituais."
},


{
  id: 4,
  categoria: "Virais",
  doencaId: "raiva",
  doenca: "Raiva",

  pergunta:
    "Entre as encefalopatias, a raiva é uma das mais importantes, pois além de afetar os animais de produção, caracteriza-se como uma zoonose fatal. Todas as afirmativas em relação à raiva são verdadeiras, EXCETO:",

  alternativas: [
    "A) No Brasil, o cão continua sendo uma importante espécie transmissora da raiva ao ser humano.",
    "B) Identificações positivas do vírus da raiva já foram descritas em diversos animais silvestres brasileiros.",
    "C) A raiva dos herbívoros é endêmica no mundo todo, em função dos reservatórios silvestres.",
    "D) Animais primovacinados devem ser revacinados 30 dias após a primeira vacinação.",
    "E) A raiva é uma enfermidade de notificação compulsória."
  ],

  resposta: "C",

  comentario:
    "A alternativa C é a incorreta. A distribuição e epidemiologia da raiva dos herbívoros variam conforme a região e os reservatórios envolvidos, não sendo considerada endêmica no mundo todo dessa forma."
},
{
  id: 5,
  categoria: "Bacterianas",
  doencaId: "mormo",
  doenca: "Mormo",

  pergunta:
    "O mormo é uma doença infectocontagiosa que acomete os equídeos e também pode afetar o homem. Todas as afirmativas em relação ao mormo estão corretas, EXCETO:",

  alternativas: [
    "A) Já foram confirmados casos de mormo em praticamente todo o país, sendo apenas PR, SC e RS considerados livres da doença.",
    "B) O mormo agudo é mais frequente em burros e mulas, sendo fatal em poucos dias ou semanas.",
    "C) A fase crônica do mormo pode apresentar formas nasal, pulmonar ou cutânea.",
    "D) Animal positivo é aquele reagente ao teste de fixação de complemento e confirmado por teste complementar.",
    "E) Burkholderia mallei é considerada um possível agente de bioterrorismo."
  ],

  resposta: "A",

  comentario:
    "A alternativa A é a exceção. A afirmação apresenta informação incorreta sobre a situação epidemiológica dos estados livres de mormo."
},


{
  id: 26,
  categoria: "Bacterianas",
  doencaId: "leptospirose",
  doenca: "Leptospirose",

  pergunta:
    "Assinale a alternativa que contém o método diagnóstico para a leptospirose e sua respectiva vantagem.",

  alternativas: [
    "A) A visualização direta da Leptospira ao microscópio óptico permite a identificação do respectivo serovar.",
    "B) A cultura para isolamento bacteriano da Leptospira pode ser realizada após terapia antimicrobiana.",
    "C) O teste de reação em cadeia da polimerase (PCR) possui acurácia mesmo antes da produção de anticorpos antileptospira.",
    "D) O teste de imunoensaio enzimático ELISA permite a obtenção do resultado em poucas horas.",
    "E) O teste de aglutinação microscópica (MAT) tem sensibilidade maior que o teste ELISA."
  ],

  resposta: "D",

  comentario:
    "O ELISA apresenta como vantagem a rapidez na obtenção dos resultados, podendo fornecer diagnóstico em poucas horas. A visualização direta da bactéria não permite identificação do sorovar, a cultura apresenta limitações devido ao crescimento lento da Leptospira e o uso de antimicrobianos pode interferir no isolamento. O MAT é um teste sorológico importante, porém não apresenta necessariamente maior sensibilidade que o ELISA."
},


{
  id: 6,
  categoria: "Bacterianas",
  doencaId: "brucelose",
  doenca: "Brucelose",

  pergunta:
    "A brucelose causada pela Brucella abortus está disseminada por todo o território nacional, sendo a principal forma de entrada da doença em um rebanho a introdução de animais infectados. Em relação à epidemiologia da brucelose, é CORRETO afirmar:",

  alternativas: [
    "A) O período de incubação é relativamente curto sendo diretamente proporcional ao período de gestação.",
    "B) A porta de entrada mais importante no organismo animal é o trato digestivo, iniciando-se quando o animal ingere água e alimentos contaminados ou lambe crias recém-nascidas.",
    "C) A transmissão pelo coito é de grande importância sendo considerado o principal mecanismo de transmissão da doença.",
    "D) A bactéria não sobrevive por muito tempo no meio ambiente, sendo necessário contato direto entre animais para ocorrer transmissão.",
    "E) O leite é uma fonte de infecção para o bezerro."
  ],

  resposta: "B",

  comentario:
    "A principal porta de entrada da Brucella abortus é a via digestiva, principalmente pela ingestão de materiais contaminados, como restos de aborto, secreções uterinas e leite contaminado. A bactéria também possui capacidade de permanecer no ambiente, favorecendo a transmissão indireta."
},


{
  id: 7,
  categoria: "Bacterianas",
  doencaId: "tuberculose",
  doenca: "Tuberculose bovina",

  pergunta:
    "A estratégia do Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose (PNCEBT) consiste de um conjunto de medidas sanitárias compulsórias, associadas a ações de adesão voluntária. Dentre as provas de diagnóstico preconizadas pelo PNCEBT para tuberculose em rebanhos bovinos de leite é utilizada a seguinte sequência:",

  alternativas: [
    "A) Teste cervical simples para triagem e bacteriologia como confirmatório.",
    "B) Teste da prega caudal para triagem e bacteriologia como confirmatório.",
    "C) Teste cervical simples para triagem e teste cervical comparativo como confirmatório.",
    "D) Teste da prega caudal para triagem e teste cervical comparativo como confirmatório.",
    "E) Teste cervical simples para triagem, teste cervical comparativo e bacteriologia como confirmatório."
  ],

  resposta: "C",

  comentario:
    "No PNCEBT, o teste cervical simples pode ser utilizado como teste de triagem e o teste cervical comparativo é utilizado como teste confirmatório em rebanhos bovinos."
},


{
  id: 8,
  categoria: "Bacterianas",
  doencaId: "tuberculose",
  doenca: "Tuberculose por Mycobacterium bovis",

  pergunta:
    "Bovinos infectados podem ser responsáveis por parte dos casos de tuberculose humana causada pelo Mycobacterium bovis. Avalie as afirmações como verdadeiras (V) ou falsas (F):",

  alternativas: [
    "A) Verdadeira / Falsa / Falsa",
    "B) Falsa / Verdadeira / Verdadeira",
    "C) Falsa / Verdadeira / Falsa",
    "D) Verdadeira / Verdadeira / Falsa",
    "E) Falsa / Falsa / Verdadeira"
  ],

  resposta: "E",

  comentario:
    "A sequência correta é E. A pasteurização do leite foi um fator importante para reduzir a transmissão de Mycobacterium bovis para humanos."
},


{
  id: 10,
  categoria: "Bacterianas",
  doencaId: "brucelose",
  doenca: "Brucelose",

  pergunta:
    "A Brucelose bovina, causada principalmente pela Brucella abortus, é uma das principais doenças reprodutivas em bovinos. Todas as alternativas destacam os principais sintomas em bovinos, EXCETO:",

  alternativas: [
    "A) Aborto após o quinto mês de gestação.",
    "B) Orquite uni ou bilateral, transitória ou permanente.",
    "C) Sinovite e lesões articulares.",
    "D) Retenção de placenta e metrite.",
    "E) Mastite e fístulas na cernelha."
  ],

  resposta: "E",

  comentario:
    "A brucelose bovina apresenta principalmente sinais reprodutivos, como aborto, retenção de placenta e problemas de fertilidade. Mastite e fístulas na cernelha não são manifestações típicas da Brucella abortus."
},
{
  id: 11,
  categoria: "Bacterianas",
  doencaId: "tuberculose",
  doenca: "Tuberculose bovina",

  pergunta:
    "A Tuberculose causada pelo Mycobacterium bovis é uma doença de grande importância que acomete várias espécies de animais, inclusive o homem. Quais alternativas relacionadas à doença são verdadeiras (V) ou falsas (F)?",

  alternativas: [
    "A) V; F; F; F; F",
    "B) F; V; V; V; F",
    "C) F; F; V; F; V",
    "D) V; V; V; F; F",
    "E) V; V; F; F; V"
  ],

  resposta: "E",

  comentario:
    "A sequência correta é E. O gado zebuíno apresenta maior resistência relativa à tuberculose, fêmeas próximas ao parto possuem menor resposta ao teste tuberculínico e a anergia pode ocorrer em animais com doença avançada devido à imunossupressão específica."
},


{
  id: 15,
  categoria: "Virais",
  doencaId: "raiva",
  doenca: "Raiva",

  pergunta:
    "A raiva é uma das zoonoses de maior importância na maioria dos países do mundo, acometendo praticamente todos os animais pecuários. Todas as afirmativas em relação à raiva são verdadeiras, EXCETO:",

  alternativas: [
    "A) A vacinação dos herbívoros deve ser realizada com vacina contendo vírus inativado, na dosagem de 2 ml por animal, aplicada por via subcutânea ou intramuscular.",
    "B) Em herbívoros suspeitos de raiva devem ser coletadas amostras do Sistema Nervoso Central para diagnóstico laboratorial.",
    "C) Na Europa, a raiva silvestre tem como principal vetor a raposa-vermelha.",
    "D) Na América do Sul o morcego hematófago é importante na transmissão da raiva em bovinos.",
    "E) Em bovídeos e equídeos, animais com idade inferior a três meses nunca podem ser vacinados."
  ],

  resposta: "E",

  comentario:
    "A alternativa E é incorreta. Animais jovens podem ser vacinados em determinadas situações, conforme avaliação técnica e condições epidemiológicas."
},


{
  id: 17,
  categoria: "Virais",
  doencaId: "febre-aftosa",
  doenca: "Febre aftosa",

  pergunta:
    "O Programa Nacional de Erradicação e Prevenção da Febre Aftosa (PNEFA) determina normas e exigências para controle e erradicação da doença no país. Considere as afirmações:\n\nI - Bovinos, bubalinos, ovinos, caprinos, suínos e outros animais suscetíveis podem ser acometidos pela doença.\nII - Área de proteção sanitária é uma área geográfica estabelecida em torno dos focos da doença.\nIII - Doença vesicular infecciosa caracteriza-se principalmente por febre, claudicação e sialorreia decorrentes de lesões vesiculares.\nIV - Santa Catarina e Paraná eram considerados áreas livres sem vacinação em 2015.\n\nEstão CORRETAS:",

  alternativas: [
    "A) Apenas I, II e III.",
    "B) Apenas II e III.",
    "C) Apenas I e IV.",
    "D) Apenas I, II e IV.",
    "E) Apenas I e II."
  ],

  resposta: "A",

  comentario:
    "A alternativa correta é A. As afirmações I, II e III estão relacionadas às características epidemiológicas e sanitárias da febre aftosa. A afirmação IV está incorreta conforme a classificação apresentada na prova."
},


{
  id: 18,
  categoria: "Bacterianas",
  doencaId: "leptospirose",
  doenca: "Leptospirose",

  pergunta:
    "A leptospirose é uma enfermidade infecciosa causada por bactérias do gênero Leptospira, apresentando importância econômica e sanitária. Sobre a doença, assinale a alternativa correta:",

  alternativas: [
    "A) A transmissão ocorre exclusivamente pelo contato direto entre animais infectados.",
    "B) Os roedores são considerados hospedeiros acidentais e não possuem importância epidemiológica.",
    "C) A bactéria permanece apenas em tecidos animais, não sobrevivendo no ambiente.",
    "D) A infecção pode ocorrer pela penetração da bactéria em mucosas ou pele lesionada, sendo a urina uma importante fonte de contaminação.",
    "E) A vacinação elimina completamente a possibilidade de infecção por qualquer sorovar de Leptospira."
  ],

  resposta: "D",

  comentario:
    "A transmissão da leptospirose ocorre principalmente pelo contato com urina de animais infectados, especialmente através de água e ambientes contaminados. A bactéria pode penetrar por mucosas ou pele lesionada. A vacinação reduz a ocorrência da doença, mas não elimina totalmente a possibilidade de infecção por todos os sorovares."
},


{
  id: 25,
  categoria: "Bacterianas",
  doencaId: "leptospirose",
  doenca: "Leptospirose",

  pergunta:
    "Sobre o diagnóstico da leptospirose em animais, assinale a alternativa CORRETA:",

  alternativas: [
    "A) O teste de aglutinação microscópica (MAT) é um dos principais testes sorológicos utilizados para diagnóstico da leptospirose.",
    "B) A cultura bacteriana é um método rápido e de alta sensibilidade para confirmação da doença.",
    "C) O diagnóstico clínico isolado é suficiente para identificar o sorovar envolvido.",
    "D) A presença de anticorpos indica necessariamente infecção ativa no animal.",
    "E) A PCR não apresenta utilidade no diagnóstico da leptospirose."
  ],

  resposta: "A",

  comentario:
    "O MAT (teste de aglutinação microscópica) é um dos principais métodos sorológicos utilizados no diagnóstico da leptospirose, permitindo a detecção de anticorpos contra diferentes sorovares."
},

{
  id: 100,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "A brucelose é uma antropozoonose conhecida desde épocas remotas. A doença em bovinos é causada pela Brucella abortus. Em rebanhos afetados a brucelose pode resultar em diminuição da fertilidade, redução na produção de leite, abortamentos e degeneração testicular em touros. Sobre a brucelose bovina é correto afirmar:",


  alternativas: [

    "A) A infecção ocorre com maior frequência por contato venéreo, penetração em lesões de pele, inalação ou transmissão placentária.",

    "B) No tratamento de bovinos utilizam-se aminoglicosídeos, como a gentamicina associada à doxiciclina ou à minociclina, por quatro semanas.",

    "C) O teste do antígeno acidificado tamponado pode ser utilizado como teste de rotina no diagnóstico indireto dessa doença.",

    "D) Como medida de controle, é obrigatória a vacinação de fêmeas com idade superior a oito meses, por atingir a maturidade sexual."

  ],


  resposta: "C",


  comentario:
    "O teste do antígeno acidificado tamponado (AAT) é utilizado como teste de diagnóstico indireto da brucelose bovina. A vacinação não é indicada para fêmeas acima de oito meses, e o controle da doença não é baseado em tratamento antibiótico."
},



{
  id: 101,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "Analise as seguintes afirmativas sobre a brucelose:\n\nI. Uma das características da Brucella sp é a capacidade de resistir aos mecanismos de destruição das células fagocitárias, podendo sobreviver dentro de macrófagos por longos períodos. Em razão disso, os programas de controle dessa enfermidade indicam vacinas indutoras de imunidade humoral.\n\nII. A principal manifestação clínica em bovinos e bubalinos é o aborto, sendo frequente o aparecimento de broncopneumonia no feto abortado.\n\nIII. O controle da brucelose bovina apoia-se, basicamente, na vacinação das fêmeas e no diagnóstico e sacrifício de animais positivos.\n\nQuais estão corretas?",


  alternativas: [

    "A) Apenas I.",

    "B) Apenas I e II.",

    "C) Apenas I e III.",

    "D) Apenas II e III.",

    "E) I, II e III."

  ],


  resposta: "C",


  comentario:
    "As afirmativas I e III estão corretas. A Brucella possui capacidade de sobreviver dentro de macrófagos, e o controle da brucelose envolve vacinação de fêmeas e identificação/eliminação de animais positivos. A afirmativa II está incorreta porque a broncopneumonia no feto abortado não é uma manifestação característica da doença."
},



{
  id: 102,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "Assinale a alternativa que apresenta a doença infecciosa responsável por afetar a reprodução de rebanhos bovinos e de controle oficial, segundo o Ministério da Agricultura e Pecuária (MAPA).",


  alternativas: [

    "A) Tricomonose bovina.",

    "B) Rinotraqueíte Infecciosa Bovina (IBR).",

    "C) Diarreia Viral Bovina (BVD).",

    "D) Brucelose bovina.",

    "E) Leptospirose."

  ],


  resposta: "D",


  comentario:
    "A brucelose bovina é uma enfermidade de controle oficial no Brasil, fazendo parte do Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose Animal (PNCEBT)."
},
{
  id: 103,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "A brucelose é uma doença infectocontagiosa de caráter crônico causada por bactérias do gênero Brucella, que acomete diversas espécies de animais e o homem. Sendo uma zoonose de distribuição mundial, acarreta problemas sanitários e prejuízos econômicos importantes. Em relação à brucelose bovina assinale a assertiva incorreta.",


  alternativas: [

    "A) É causada pela Brucella abortus, sendo que os bovinos não apresentam suscetibilidade a outras espécies de brucelas. A principal forma de entrada da brucelose em uma propriedade é pela introdução de animais infectados. Quanto maior a frequência de introdução de animais, maior o risco de entrada da doença no rebanho.",

    "B) A vacina B19 é a recomendada para a vacinação de fêmeas bovinas de 3 a 8 meses de idade, podendo ser substituída pela vacina RB51. A vacina RB51 é elaborada com uma amostra de Brucella abortus rugosa atenuada, por isso não induz à formação de anticorpos anti-LPS liso, não interferindo no diagnóstico sorológico da doença.",

    "C) A principal fonte de infecção é representada pela vaca prenhe, que elimina grandes quantidades do agente no parto ou aborto e em todo o período puerperal, contaminando as pastagens, a água, os alimentos e os fômites. Essas bactérias podem permanecer viáveis no meio ambiente por longos períodos, dependendo das condições ambientais.",

    "D) Nos bovinos a principal manifestação clínica é o aborto, que ocorre no terço final de gestação devido ao desenvolvimento de placentite necrótica, sendo comum a retenção de placenta. Com o desenvolvimento de imunidade celular após o primeiro aborto, há uma diminuição de lesões placentárias nas gestações subsequentes."

  ],


  resposta: "A",


  comentario:
    "A alternativa A é a incorreta porque afirma que bovinos não apresentam suscetibilidade a outras espécies de Brucella. Embora Brucella abortus seja a principal espécie envolvida em bovinos, outras espécies podem eventualmente infectar diferentes hospedeiros."
},



{
  id: 104,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "Uma das portas de entrada de doenças em uma fazenda leiteira é por meio da introdução de animais portadores de doenças infecciosas. Assinale a alternativa que apresenta a medida que pode ser utilizada para evitar a introdução de doenças.",


  alternativas: [

    "A) Adquirir, somente, animais de regiões distantes pois, durante o transporte, os agentes causadores de doenças são eliminados.",

    "B) Todos os animais comprados devem receber tratamento preventivo das principais doenças infecciosas antes da introdução ao rebanho.",

    "C) Comprar animais somente de rebanhos com comprovação de vacinações, registros de ocorrência de doenças e tratamentos para reduzir o risco de introdução de doenças infecciosas.",

    "D) Introduzir os animais comprados, imediatamente após a compra, para aumentar a capacidade de adaptação ao novo ambiente e o aumento da imunidade natural.",

    "E) Fazer o tratamento de todos os animais positivos para tuberculose e brucelose antes da introdução no rebanho."

  ],


  resposta: "C",


  comentario:
    "A prevenção da entrada de doenças em um rebanho depende de medidas de biossegurança, incluindo aquisição de animais de origem conhecida, com histórico sanitário e controle de vacinação."
},



{
  id: 105,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "A brucelose é uma zoonose que possui caráter ocupacional por:",


  alternativas: [

    "A) ocorrer pela ingestão de leite cru e derivados não submetidos ao tratamento térmico.",

    "B) suceder da ingestão de carne crua com restos de tecido linfático e sangue com bactérias viáveis.",

    "C) envolver profissionais que manipulam restos placentários, fluidos fetais e carcaças de animais.",

    "D) alcançar médicos veterinários e vacinadores durante o manuseio das vacinas B51 e RB19, que são patogênicas para os seres humanos."

  ],


  resposta: "C",


  comentario:
    "A brucelose é considerada uma zoonose ocupacional principalmente pelo risco de exposição de profissionais que manipulam animais infectados, restos placentários, fluidos fetais e carcaças contaminadas."
},

{
  id: 106,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "Caso o resultado do teste do anel em leite (TAL) seja reagente, todos os bovinos e bubalinos do estabelecimento deverão ser submetidos a testes sorológicos individuais para a confirmação do diagnóstico de brucelose.",


  alternativas: [

    "A) Certo",

    "B) Errado"

  ],


  resposta: "A",


  comentario:
    "O teste do anel em leite (TAL) é utilizado como teste de triagem em propriedades leiteiras. Quando apresenta resultado reagente, deve ser realizada investigação individual dos animais para confirmação diagnóstica."
},



{
  id: 107,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "De acordo com o Regulamento do Programa Nacional de Controle e Erradicação da Brucelose e da Tuberculose Animal (PNCEBT):",


  alternativas: [

    "A) É facultada ao produtor a vacinação de fêmeas bovinas com idade superior a oito meses utilizando-se a vacina contra brucelose não indutora da formação de anticorpos aglutinantes, amostra RB51.",

    "B) A utilização da vacina B19 poderá ser substituída pela vacina contra brucelose não indutora da formação de anticorpos aglutinantes, amostra RB51, na espécie bubalina.",

    "C) A marcação das fêmeas vacinadas entre três e oito meses de idade é obrigatória, utilizando-se ferro candente ou nitrogênio líquido, no lado direito da cara.",

    "D) É obrigatória a vacinação de todas as fêmeas das espécies bovina e bubalina, na faixa etária de três a oito meses, utilizando-se dose única de vacina liofilizada, elaborada com amostra 19 de Brucella melitensis (B19)."

  ],


  resposta: "B",


  comentario:
    "A vacina B19 pode ser substituída pela RB51 conforme as normas do PNCEBT. A alternativa D está incorreta porque a vacina B19 é elaborada com Brucella abortus, e não Brucella melitensis."
},



{
  id: 108,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "A brucelose é uma doença infectocontagiosa causada por bactérias do gênero Brucella. Sobre essa doença em bovinos, é correto afirmar que:\n\nI. Abortamento em terço final da gestação.\n\nII. Abortamento em terço inicial da gestação.\n\nIII. Machos adultos podem desenvolver orquite uni ou bilateral e epididimite.\n\nIV. A brucelose pode ser causa de infertilidade apenas nas fêmeas.",


  alternativas: [

    "A) Apenas I, III e IV estão corretas.",

    "B) Apenas I e III estão corretas.",

    "C) Apenas II e III estão corretas.",

    "D) Apenas II, III e IV estão corretas."

  ],


  resposta: "B",


  comentario:
    "Na brucelose bovina, o aborto ocorre principalmente no terço final da gestação e machos podem apresentar orquite e epididimite. A infertilidade não ocorre apenas em fêmeas, pois machos também podem ser afetados."
},
{
  id: 109,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "A brucelose canina, doença causada pela Brucella canis, tem sido relatada em diversos países. Assim como a Brucella ovis, a B. canis também produz colônias com superfície ________________. O diagnóstico sorológico pode ser realizado, tanto nos cães como nos ovinos, empregando o teste de ______________________.\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima.",


  alternativas: [

    "A) lisa – soroaglutinação",

    "B) rugosa – imunodifusão em gel de ágar",

    "C) amarelada – imuno-histoquímica",

    "D) irregular – coloração de Gram",

    "E) lisa – impregnação com prata"

  ],


  resposta: "B",


  comentario:
    "A Brucella canis apresenta colônia de superfície rugosa, assim como a Brucella ovis. O diagnóstico sorológico pode ser realizado utilizando testes como a imunodifusão em gel de ágar."
},



{
  id: 110,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "A brucelose é uma zoonose amplamente difundida que afeta tanto animais quanto seres humanos. Causada por bactérias do gênero Brucella, essa doença é responsável por significativos prejuízos econômicos na pecuária devido à queda na produção, abortos e infertilidade. Em uma fazenda, uma vaca leiteira apresentou aborto no terceiro trimestre de gestação, e o veterinário foi chamado para investigar a causa. Durante a anamnese, foi relatado que outros animais apresentaram febre intermitente e queda na produção de leite. Com base no caso descrito, qual seria o protocolo correto para o manejo da suspeita de brucelose nessa fazenda?",


  alternativas: [

    "A) Realizar o diagnóstico clínico baseado apenas nos sinais observados e vacinar imediatamente todos os animais.",

    "B) Priorizar o consumo do leite pasteurizado dos animais assintomáticos e manter a produção sem restrições.",

    "C) Coletar sangue para sorologia, isolar os animais com sinais clínicos e notificar o serviço de defesa sanitária.",

    "D) Administrar antibióticos para todos os animais infectados e aumentar a frequência de ordenha para reduzir a carga bacteriana."

  ],


  resposta: "C",


  comentario:
    "Em casos suspeitos de brucelose, deve-se realizar investigação diagnóstica, coletar amostras para exames, isolar animais suspeitos e comunicar o serviço veterinário oficial conforme as normas sanitárias."
},



{
  id: 111,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "Analise as afirmativas a seguir:\n\nI. A Brucelose é uma doença zoonótica, causada por vírus do gênero Brucella sp. A sintomatologia da brucelose é, muitas vezes inespecífica.\n\nII. Pode ser transmitida ao ser humano pelo contato direto (manejo) ou indireto (consumo de alimentos lácteos não pasteurizados) de animais de produção, como bois, vacas, ovelhas, búfalos, porcos, entre outros ou pelo contato com animais de companhia.\n\nMarque a alternativa CORRETA:",


  alternativas: [

    "A) As duas afirmativas são verdadeiras.",

    "B) A afirmativa I é verdadeira, e a II é falsa.",

    "C) A afirmativa II é verdadeira, e a I é falsa.",

    "D) As duas afirmativas são falsas."

  ],


  resposta: "C",


  comentario:
    "A afirmativa I está incorreta porque a brucelose é causada por bactérias do gênero Brucella, e não por vírus. A afirmativa II está correta, pois a doença pode ser transmitida por contato com animais infectados ou consumo de produtos contaminados."
},
{
  id: 112,

  categoria: "Bacterianas",

  doencaId: "brucelose",

  doenca: "Brucelose",


  pergunta:
    "Doença que requer notificação imediata de qualquer caso suspeito, conforme a Instrução Normativa n° 50, de 24/09/2013:",


  alternativas: [

    "A) Tuberculose",

    "B) Brucelose",

    "C) Clamidiose Aviária",

    "D) Doença de Newcastle"

  ],


  resposta: "B",


  comentario:
    "A brucelose é uma enfermidade de notificação obrigatória conforme as normas de defesa sanitária animal. Casos suspeitos devem ser comunicados ao serviço veterinário oficial."
}
];