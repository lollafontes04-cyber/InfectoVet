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
},
{
  id: 113,
  categoria: "Virais",
  doencaId: "parvovirose",
  doenca: "Parvovirose canina",

  pergunta:
    "Sobre as características do agente etiológico da parvovirose canina, assinale a alternativa correta:",

  alternativas: [
    "A) É um vírus envelopado, com RNA de fita simples, pertencente à família Coronaviridae.",
    "B) É o Carnivore protoparvovirus 2 (CPV-2), não envelopado, com capsídeo icosaédrico e DNA de fita simples.",
    "C) É uma bactéria Gram-negativa, pertencente à família Parvoviridae.",
    "D) É um vírus envelopado, com DNA de fita dupla, pertencente ao gênero Protoparvovirus.",
    "E) É um fungo oportunista que apresenta capsídeo icosaédrico."
  ],

  resposta: "B",

  comentario:
    "O CPV-2 pertence à família Parvoviridae e ao gênero Protoparvovirus. É um vírus não envelopado, com capsídeo icosaédrico e genoma constituído por DNA de fita simples (ssDNA)."
},
{
  id: 114,
  categoria: "Virais",
  doencaId: "parvovirose",
  doenca: "Parvovirose canina",

  pergunta:
    "Qual é o período de incubação da parvovirose canina?",

  alternativas: [
    "A) 12 a 24 horas.",
    "B) 18 a 73 horas.",
    "C) 2 a 14 dias, sendo mais comum entre 4 e 7 dias.",
    "D) 15 a 30 dias.",
    "E) 30 a 60 dias."
  ],

  resposta: "C",

  comentario:
    "O período de incubação varia de 2 a 14 dias, com ocorrência mais frequente entre 4 e 7 dias."
},
{
  id: 115,
  categoria: "Virais",
  doencaId: "parvovirose",
  doenca: "Parvovirose canina",

  pergunta:
    "Após a exposição oro-nasal ao CPV-2, qual sequência representa a disseminação do agente e parte das alterações decorrentes da infecção?",

  alternativas: [
    "A) Replicação inicial nos rins, seguida de eliminação urinária e desenvolvimento de anemia hemolítica.",
    "B) Entrada pela pele íntegra, replicação exclusiva no fígado e desenvolvimento de icterícia.",
    "C) Exposição oro-nasal, chegada aos tecidos linfoides da orofaringe, viremia e disseminação para medula óssea, órgãos linfoides, jejuno e íleo.",
    "D) Replicação exclusiva no sistema nervoso central, seguida de paralisia flácida.",
    "E) Multiplicação inicial nos pulmões, seguida de pneumonia bacteriana primária."
  ],

  resposta: "C",

  comentario:
    "Exposição oro-nasal, o alcance dos tecidos linfoides da orofaringe e, posteriormente, a viremia, com disseminação para a medula óssea, órgãos linfoides, jejuno, íleo e outros tecidos."
},
{
  id: 116,
  categoria: "Virais",
  doencaId: "parvovirose",
  doenca: "Parvovirose canina",

  pergunta:
    "A necrose das criptas intestinais no jejuno e no íleo, causada pela parvovirose, está relacionada principalmente a qual consequência?",

  alternativas: [
    "A) Aumento da absorção intestinal e constipação.",
    "B) Diarreia por má absorção, favorecendo infecções secundárias.",
    "C) Produção excessiva de bile e icterícia.",
    "D) Insuficiência pancreática como manifestação inicial obrigatória.",
    "E) Lesão renal que impede a filtração glomerular."
  ],

  resposta: "B",

  comentario:
    "A necrose das criptas no jejuno e no íleo provoca diarreia por má absorção e favorece infecções secundárias. Nas formas severas, pode ocorrer sepse e coagulação intravascular disseminada (CID)."
},
{
  id: 117,
  categoria: "Virais",
  doencaId: "parvovirose",
  doenca: "Parvovirose canina",

  pergunta:
    "Qual alternativa descreve a apresentação clínica de gastroenterite hemorrágica associada à parvovirose canina?",

  alternativas: [
    "A) Tosse seca, secreção nasal e dispneia progressiva, sem alterações gastrointestinais.",
    "B) Prurido intenso, alopecia e lesões cutâneas crostosas.",
    "C) Súbita prostração, anorexia, vômitos frequentes, sialorreia, febre, dor abdominal e diarreia hemorrágica.",
    "D) Claudicação, vesículas na cavidade oral e lesões nos cascos.",
    "E) Poliúria, polidipsia e evolução exclusivamente crônica."
  ],

  resposta: "C",

  comentario:
    "A gastroenterite hemorrágica ocorre principalmente em cães jovens não vacinados, com prostração súbita, anorexia, vômitos frequentes, sialorreia, febre, dor abdominal e diarreia hemorrágica. A evolução pode ocorrer entre 12 e 24 horas."
},
{
  id: 118,
  categoria: "Virais",
  doencaId: "parvovirose",
  doenca: "Parvovirose canina",

  pergunta:
    "Sobre o diagnóstico da parvovirose canina, assinale a alternativa correta:",

  alternativas: [
    "A) O diagnóstico presuntivo considera histórico, sinais clínicos e hemograma; entre os métodos laboratoriais citados estão ELISA para antígeno fecal, SNAP Parvo Test, hemaglutinação e isolamento viral em células MDCK.",
    "B) O diagnóstico é exclusivamente clínico, sem necessidade de exames laboratoriais.",
    "C) A confirmação é realizada somente por cultura bacteriana de sangue.",
    "D) O SNAP Parvo Test é utilizado exclusivamente para detectar anticorpos contra bactérias.",
    "E) A hemaglutinação e o isolamento viral não são citados como métodos laboratoriais."
  ],

  resposta: "A",

  comentario:
    "Diagnóstico clínico presuntivo, baseado na rotina clínica, histórico, sinais clínicos e hemograma, do diagnóstico laboratorial definitivo. ELISA para antígeno nas fezes, SNAP Parvo Test, hemaglutinação (HA) e isolamento viral em células MDCK."
},
{
  id: 119,
  categoria: "Virais",
  doencaId: "parvovirose",
  doenca: "Parvovirose canina",

  pergunta:
    "Quais medidas de suporte para o tratamento da parvovirose canina?",

  alternativas: [
    "A) Apenas vacinação e vermifugação.",
    "B) Fluidoterapia, antibioticoterapia para infecções secundárias, antiemético, controle da hipoglicemia e hipocalemia e possibilidade de transfusão sanguínea ou plasma.",
    "C) Somente administração de anti-inflamatórios.",
    "D) Tratamento cirúrgico das criptas intestinais.",
    "E) Antibioticoterapia como tratamento antiviral específico, sem necessidade de suporte."
  ],

  resposta: "B",

  comentario:
    "O tratamento é de suporte e inclui fluidoterapia, antibioticoterapia para infecções secundárias, antiemético, controle de hipoglicemia e hipocalemia e transfusão sanguínea ou de plasma."
},

{
  id: 121,
  categoria: "Virais",
  doencaId: "parvovirose",
  doenca: "Parvovirose canina",

  pergunta:
    "Qual protocolo de primovacinação de filhotes contra parvovirose?",

  alternativas: [
    "A) Uma dose única ao nascimento, sem reforços.",
    "B) Duas doses com intervalo de seis meses.",
    "C) Três doses: a primeira entre 6 e 12 semanas, a segunda quatro semanas depois e a terceira mais quatro semanas depois; em alguns casos, pode ser indicada uma quarta dose.",
    "D) Três doses aplicadas semanalmente, iniciando aos dois meses.",
    "E) Vacinação somente após um ano de idade."
  ],

  resposta: "C",

  comentario:
    "A primovacinação acontece em três doses: primeira entre 6 e 12 semanas, segunda quatro semanas depois e terceira após mais quatro semanas. Existe também a possibilidade de uma quarta dose em alguns casos e reforço anual."
},


  {
    id: 122,
    categoria: "Bacterianas",
    doencaId: "brucelose",
    doenca: "Brucelose",

    pergunta:
      "Em uma propriedade leiteira, foram observados abortamentos no terço final da gestação, retenção de placenta e nascimento de bezerros fracos. Considerando a principal suspeita clínica, assinale a alternativa correta:",

    alternativas: [
      "A) A transmissão ocorre exclusivamente por vetores hematófagos.",
      "B) A bactéria apresenta capacidade de sobrevivência intracelular, especialmente em células fagocíticas.",
      "C) O principal sinal clínico é a formação de vesículas na mucosa oral.",
      "D) A enfermidade não apresenta importância para a saúde pública.",
      "E) O tratamento antimicrobiano individual é a principal estratégia oficial de erradicação."
    ],

    resposta: "B",

    comentario:
      "A Brucella apresenta capacidade de sobrevivência intracelular, especialmente em macrófagos, favorecendo a persistência da infecção. A doença provoca alterações reprodutivas importantes e possui caráter zoonótico."
  },

  {
    id: 123,
    categoria: "Bacterianas",
    doencaId: "tuberculose",
    doenca: "Tuberculose bovina",

    pergunta:
      "Um bovino adulto apresenta emagrecimento progressivo, tosse persistente e queda na produtividade. Durante a necropsia, são identificadas lesões granulomatosas com necrose caseosa. Qual agente está mais associado a esse quadro?",

    alternativas: [
      "A) Brucella abortus.",
      "B) Mycobacterium bovis.",
      "C) Anaplasma marginale.",
      "D) Bacillus anthracis.",
      "E) Rhodococcus equi."
    ],

    resposta: "B",

    comentario:
      "Mycobacterium bovis é o agente etiológico da tuberculose bovina. A enfermidade é caracterizada pela formação de granulomas, frequentemente acompanhados de necrose caseosa, podendo acometer diferentes espécies animais e seres humanos."
  },

  {
    id: 124,
    categoria: "Bacterianas",
    doencaId: "tuberculose",
    doenca: "Tuberculose bovina",

    pergunta:
      "Sobre o diagnóstico da tuberculose bovina, analise as afirmativas:\n\nI. Os testes de tuberculinização avaliam a resposta imunológica celular do animal.\n\nII. O Teste Cervical Comparativo utiliza tuberculina bovina e aviária.\n\nIII. A PCR e a cultura bacteriológica podem contribuir para a identificação direta do agente.\n\nEstá correto o que se afirma em:",

    alternativas: [
      "A) I, apenas.",
      "B) II, apenas.",
      "C) I e II, apenas.",
      "D) I e III, apenas.",
      "E) I, II e III."
    ],

    resposta: "E",

    comentario:
      "Os testes de tuberculinização avaliam a resposta de hipersensibilidade tardia, relacionada à imunidade celular. O Teste Cervical Comparativo utiliza tuberculina bovina e aviária. Métodos como PCR e cultura bacteriológica também podem contribuir para a identificação do agente."
  },

  {
    id: 125,
    categoria: "Virais",
    doencaId: "anemia-infecciosa-equina",
    doenca: "Anemia Infecciosa Equina",

    pergunta:
      "Um equino apresenta episódios recorrentes de febre, anemia, edema ventral e perda de peso. O proprietário relata que outros animais da propriedade também foram submetidos a procedimentos com materiais perfurocortantes compartilhados. Sobre a enfermidade, assinale a alternativa correta:",

    alternativas: [
      "A) É causada por uma bactéria transmitida exclusivamente por via respiratória.",
      "B) É uma doença viral causada por um lentivírus, com possibilidade de infecção persistente por toda a vida.",
      "C) Possui vacina comercial eficaz utilizada rotineiramente no Brasil.",
      "D) Não apresenta animais portadores assintomáticos.",
      "E) Não possui importância para o controle sanitário do trânsito de equídeos."
    ],

    resposta: "B",

    comentario:
      "A Anemia Infecciosa Equina é causada pelo EIAV, um lentivírus da família Retroviridae. Os animais infectados permanecem portadores do vírus por toda a vida, mesmo quando não apresentam manifestações clínicas. A transmissão pode ocorrer por sangue contaminado e insetos hematófagos."
  },

  {
    id: 126,
    categoria: "Virais",
    doencaId: "anemia-infecciosa-equina",
    doenca: "Anemia Infecciosa Equina",

    pergunta:
      "O teste de Coggins é amplamente conhecido no diagnóstico da Anemia Infecciosa Equina. Ele corresponde a:",

    alternativas: [
      "A) Reação de fixação de complemento.",
      "B) Imunodifusão em gel de ágar (IDGA).",
      "C) Reação de hemaglutinação indireta.",
      "D) Teste de hipersensibilidade tardia.",
      "E) Cultura viral em células sanguíneas."
    ],

    resposta: "B",

    comentario:
      "O teste de Coggins corresponde à Imunodifusão em Gel de Ágar (IDGA), método sorológico amplamente utilizado e reconhecido como teste de referência para o diagnóstico da Anemia Infecciosa Equina. A fixação de complemento também é um método sorológico, mas não corresponde ao teste de Coggins."
  },

  {
    id: 127,
    categoria: "Virais",
    doencaId: "cinomose",
    doenca: "Cinomose",

    pergunta:
      "Um cão jovem, sem vacinação adequada, apresenta secreção ocular e nasal, tosse, diarreia, mioclonias e convulsões. A manifestação neurológica está relacionada principalmente:",

    alternativas: [
      "A) À destruição exclusiva dos eritrócitos.",
      "B) À formação de granulomas no fígado.",
      "C) Ao comprometimento do sistema nervoso central, podendo ocorrer desmielinização.",
      "D) À multiplicação bacteriana na medula óssea.",
      "E) À presença de parasitas adultos no intestino."
    ],

    resposta: "C",

    comentario:
      "O vírus da cinomose pode comprometer o sistema nervoso central, provocando alterações neurológicas como mioclonias, convulsões, ataxia e paresia. A desmielinização é uma das alterações patológicas associadas à infecção."
  },

  {
    id: 128,
    categoria: "Virais",
    doencaId: "parvovirose",
    doenca: "Parvovirose canina",

    pergunta:
      "Um filhote não vacinado apresenta vômitos, diarreia hemorrágica, desidratação e leucopenia acentuada. A patogenia da doença está relacionada principalmente:",

    alternativas: [
      "A) À infecção de células com elevada atividade mitótica, especialmente nas criptas intestinais.",
      "B) À destruição exclusiva dos hepatócitos.",
      "C) À formação de cistos nos músculos esqueléticos.",
      "D) À inflamação das meninges por bactérias.",
      "E) À destruição dos eritrócitos por hemólise imunomediada."
    ],

    resposta: "A",

    comentario:
      "O parvovírus canino apresenta tropismo por células em intensa divisão, especialmente nas criptas intestinais e na medula óssea. A destruição dessas células provoca alterações gastrointestinais, leucopenia e favorece infecções secundárias."
  },

  {
    id: 129,
    categoria: "Virais",
    doencaId: "panleucopenia-felina",
    doenca: "Panleucopenia felina",

    pergunta:
      "Um gatil apresenta elevada mortalidade entre filhotes. Os animais apresentam febre, vômitos, diarreia e leucopenia intensa. Sobre a panleucopenia felina, assinale a alternativa correta:",

    alternativas: [
      "A) É causada por um coronavírus envelopado.",
      "B) É causada por um parvovírus que apresenta tropismo por células em divisão.",
      "C) É uma doença exclusivamente respiratória.",
      "D) A vacinação não possui importância na prevenção.",
      "E) É uma zoonose de transmissão direta para humanos."
    ],

    resposta: "B",

    comentario:
      "A panleucopenia felina é causada pelo parvovírus felino, que apresenta tropismo por células de rápida multiplicação. A infecção pode provocar lesões intestinais, comprometimento da medula óssea e leucopenia intensa."
  },

  {
    id: 130,
    categoria: "Virais",
    doencaId: "pif",
    doenca: "Peritonite Infecciosa Felina",

    pergunta:
      "Um gato jovem apresenta febre persistente, perda de peso, apatia e aumento progressivo do volume abdominal. Na avaliação clínica, observa-se líquido abdominal amarelado e rico em proteínas. O quadro é mais compatível com:",

    alternativas: [
      "A) Panleucopenia felina.",
      "B) PIF não efusiva.",
      "C) PIF efusiva.",
      "D) Leishmaniose visceral.",
      "E) Erliquiose felina."
    ],

    resposta: "C",

    comentario:
      "A forma efusiva da Peritonite Infecciosa Felina é caracterizada pelo acúmulo de líquido rico em proteínas nas cavidades corporais, principalmente abdominal e torácica. Pode provocar distensão abdominal e dificuldade respiratória."
  },

  {
    id: 131,
    categoria: "Virais",
    doencaId: "pif",
    doenca: "Peritonite Infecciosa Felina",

    pergunta:
      "Sobre o diagnóstico da Peritonite Infecciosa Felina, assinale a alternativa correta:",

    alternativas: [
      "A) Um teste sorológico positivo para coronavírus felino, isoladamente, confirma PIF.",
      "B) A presença de efusão abdominal confirma obrigatoriamente PIF.",
      "C) O diagnóstico deve considerar histórico, sinais clínicos, características da efusão, exames laboratoriais e, quando possível, métodos confirmatórios.",
      "D) A doença é confirmada exclusivamente por hemograma.",
      "E) A ausência de efusão exclui a possibilidade de PIF."
    ],

    resposta: "C",

    comentario:
      "O diagnóstico da PIF é complexo e deve considerar o conjunto de informações clínicas e laboratoriais. A sorologia positiva para coronavírus felino não confirma isoladamente a doença, pois muitos gatos podem apresentar anticorpos contra o vírus sem desenvolver PIF."
  },

  {
    id: 132,
    categoria: "Virais",
    doencaId: "raiva",
    doenca: "Raiva",

    pergunta:
      "Um cão apresenta alteração comportamental, hipersalivação, dificuldade de deglutição e evolução para paralisia. Há histórico de contato com um morcego. Considerando a suspeita de raiva, a conduta mais adequada é:",

    alternativas: [
      "A) Realizar tratamento sintomático e liberar o animal após melhora.",
      "B) Ignorar o histórico de contato, pois morcegos não participam do ciclo epidemiológico.",
      "C) Adotar medidas de isolamento e biossegurança, comunicar o serviço veterinário oficial e seguir o protocolo de investigação.",
      "D) Administrar antibióticos como tratamento específico.",
      "E) Vacinar imediatamente e dispensar investigação."
    ],

    resposta: "C",

    comentario:
      "A raiva é uma zoonose de elevada gravidade e evolução geralmente fatal. Diante de suspeita, devem ser adotadas medidas de biossegurança, isolamento e comunicação ao serviço veterinário oficial, seguindo os protocolos de investigação e diagnóstico."
  },

  {
    id: 133,
    categoria: "Virais",
    doencaId: "febre-aftosa",
    doenca: "Febre aftosa",

    pergunta:
      "Em uma propriedade com bovinos e suínos, vários animais apresentam febre, salivação intensa, vesículas e erosões na cavidade oral e nos cascos. A principal suspeita é:",

    alternativas: [
      "A) Varíola bovina.",
      "B) Febre aftosa.",
      "C) Anemia infecciosa equina.",
      "D) Raiva.",
      "E) Tuberculose bovina."
    ],

    resposta: "B",

    comentario:
      "A febre aftosa é uma enfermidade viral altamente contagiosa que acomete animais biungulados. É caracterizada por febre e formação de vesículas, principalmente na cavidade oral, língua, focinho, úbere e região dos cascos."
  },

  {
    id: 134,
    categoria: "Virais",
    doencaId: "estomatite-vesicular",
    doenca: "Estomatite vesicular",

    pergunta:
      "A estomatite vesicular apresenta importância sanitária porque:",

    alternativas: [
      "A) É uma doença priônica exclusiva de bovinos.",
      "B) Pode provocar sinais vesiculares semelhantes aos da febre aftosa e possui potencial zoonótico.",
      "C) É causada por helmintos que migram para a cavidade oral.",
      "D) Acomete exclusivamente equinos e não possui importância em saúde pública.",
      "E) É causada por uma bactéria intracelular obrigatória."
    ],

    resposta: "B",

    comentario:
      "A estomatite vesicular é uma enfermidade viral que pode acometer equinos, bovinos e suínos, produzindo lesões vesiculares semelhantes às observadas na febre aftosa. Também possui potencial zoonótico."
  },

  {
    id: 135,
    categoria: "Virais",
    doencaId: "variola-bovina",
    doenca: "Varíola bovina",

    pergunta:
      "Um trabalhador rural apresenta lesões cutâneas após contato direto com lesões mamárias de bovinos durante a ordenha. Qual característica epidemiológica merece destaque?",

    alternativas: [
      "A) Ausência de transmissão entre animais.",
      "B) Potencial zoonótico, com possibilidade de transmissão por contato com lesões contaminadas.",
      "C) Transmissão exclusivamente por ingestão de carne.",
      "D) Transmissão exclusivamente transplacentária.",
      "E) Ausência de risco ocupacional para ordenhadores."
    ],

    resposta: "B",

    comentario:
      "A varíola bovina possui importância zoonótica e pode ser transmitida ao ser humano pelo contato direto com lesões de animais infectados. Ordenhadores e profissionais que manipulam animais acometidos apresentam maior risco de exposição."
  },

  {
    id: 136,
    categoria: "Parasitárias",
    doencaId: "leishmaniose",
    doenca: "Leishmaniose",

    pergunta:
      "A leishmaniose visceral canina é uma zoonose cujo agente é transmitido principalmente por:",

    alternativas: [
      "A) Carrapatos do gênero Rhipicephalus.",
      "B) Mosquitos do gênero Aedes.",
      "C) Flebotomíneos, conhecidos popularmente como mosquito-palha.",
      "D) Moscas hematófagas do gênero Tabanus.",
      "E) Pulgas do gênero Ctenocephalides."
    ],

    resposta: "C",

    comentario:
      "A transmissão da leishmaniose ocorre pela picada de flebotomíneos infectados, conhecidos popularmente como mosquito-palha. A doença possui importância para a saúde pública devido ao seu caráter zoonótico."
  },

  {
    id: 137,
    categoria: "Parasitárias",
    doencaId: "dirofilariose",
    doenca: "Dirofilariose",

    pergunta:
      "Um cão que vive em região litorânea apresenta intolerância ao exercício, tosse e sinais de insuficiência cardíaca direita. O exame parasitológico identifica estruturas compatíveis com microfilárias. O agente etiológico mais provável é:",

    alternativas: [
      "A) Dirofilaria immitis.",
      "B) Haemonchus contortus.",
      "C) Moniezia spp.",
      "D) Trichostrongylus spp.",
      "E) Dipylidium caninum."
    ],

    resposta: "A",

    comentario:
      "Dirofilaria immitis é o nematódeo conhecido como verme do coração. É transmitido por mosquitos e pode provocar alterações cardiopulmonares importantes, especialmente no lado direito do coração e nas artérias pulmonares."
  },

  {
    id: 138,
    categoria: "Parasitárias",
    doencaId: "haemoncose",
    doenca: "Haemoncose",

    pergunta:
      "Em um rebanho de ovinos, vários animais apresentam anemia, edema submandibular e perda de peso. A análise epidemiológica sugere elevada carga parasitária gastrointestinal. Qual agente está mais associado ao quadro?",

    alternativas: [
      "A) Moniezia expansa.",
      "B) Haemonchus contortus.",
      "C) Dirofilaria immitis.",
      "D) Ehrlichia canis.",
      "E) Babesia canis."
    ],

    resposta: "B",

    comentario:
      "Haemonchus contortus é um nematódeo hematófago que parasita o abomaso de pequenos ruminantes. Sua alimentação baseada em sangue pode provocar anemia intensa, hipoproteinemia e edema submandibular."
  },

  {
    id: 139,
    categoria: "Parasitárias",
    doencaId: "monieziose",
    doenca: "Monieziose",

    pergunta:
      "A monieziose é uma helmintose que acomete principalmente pequenos ruminantes. Seu agente pertence ao grupo:",

    alternativas: [
      "A) Nematódeos.",
      "B) Trematódeos.",
      "C) Cestódeos.",
      "D) Protozoários.",
      "E) Artrópodes."
    ],

    resposta: "C",

    comentario:
      "Moniezia é um gênero de cestódeo que parasita o intestino delgado de ruminantes. São vermes achatados e segmentados, que apresentam ciclo indireto com participação de ácaros oribatídeos."
  },

  {
    id: 140,
    categoria: "Parasitárias",
    doencaId: "tricostrongilose",
    doenca: "Tricostrongilose",

    pergunta:
      "A tricostrongilose está relacionada a nematódeos do gênero Trichostrongylus. Sua transmissão ocorre principalmente:",

    alternativas: [
      "A) Pela ingestão de ovos ou larvas infectantes presentes em pastagens contaminadas.",
      "B) Pela picada de mosquitos infectados.",
      "C) Por transmissão sexual.",
      "D) Pela inalação de aerossóis.",
      "E) Por contato direto com sangue contaminado."
    ],

    resposta: "A",

    comentario:
      "A infecção por Trichostrongylus ocorre principalmente pela ingestão de larvas infectantes presentes nas pastagens contaminadas por fezes de animais parasitados."
  },

  {
    id: 141,
    categoria: "Parasitárias",
    doencaId: "babesiose",
    doenca: "Babesiose",

    pergunta:
      "Um cão apresenta febre, apatia, mucosas pálidas, icterícia e hemoglobinúria. O exame sanguíneo demonstra estruturas parasitárias intraeritrocitárias. A principal suspeita é:",

    alternativas: [
      "A) Erliquiose.",
      "B) Babesiose.",
      "C) Leishmaniose.",
      "D) Dirofilariose.",
      "E) Haemoncose."
    ],

    resposta: "B",

    comentario:
      "Babesia é um protozoário que parasita os eritrócitos, podendo provocar hemólise e anemia. Os sinais clínicos incluem febre, apatia, palidez de mucosas, icterícia e, em alguns casos, hemoglobinúria."
  },

  {
    id: 142,
    categoria: "Parasitárias",
    doencaId: "anaplasmose",
    doenca: "Anaplasmose",

    pergunta:
      "A anaplasmose bovina pode provocar anemia e icterícia. O agente Anaplasma marginale apresenta como característica:",

    alternativas: [
      "A) Multiplicação exclusiva no intestino delgado.",
      "B) Presença de inclusões marginais nos eritrócitos.",
      "C) Formação de cistos musculares.",
      "D) Multiplicação exclusiva no sistema nervoso central.",
      "E) Formação de ovos eliminados nas fezes."
    ],

    resposta: "B",

    comentario:
      "Anaplasma marginale é uma bactéria que parasita os eritrócitos dos bovinos. As inclusões podem ser observadas próximas à margem das hemácias, sendo uma característica morfológica importante para sua identificação."
  },

  {
    id: 143,
    categoria: "Parasitárias",
    doencaId: "erliquiose",
    doenca: "Erliquiose",

    pergunta:
      "Um cão apresenta apatia, febre, linfadenomegalia, trombocitopenia e histórico de infestação por carrapatos. A principal suspeita é erliquiose monocítica canina, frequentemente associada a:",

    alternativas: [
      "A) Ehrlichia canis.",
      "B) Brucella abortus.",
      "C) Mycobacterium bovis.",
      "D) Leishmania infantum.",
      "E) Rhodococcus equi."
    ],

    resposta: "A",

    comentario:
      "Ehrlichia canis é o agente classicamente associado à erliquiose monocítica canina. A transmissão ocorre principalmente pelo carrapato Rhipicephalus sanguineus, e a trombocitopenia é uma alteração hematológica frequente."
  },

  {
    id: 144,
    categoria: "Priônicas",
    doencaId: "encefalopatia-espongiforme-bovina",
    doenca: "Encefalopatia Espongiforme Bovina",

    pergunta:
      "A Encefalopatia Espongiforme Bovina é causada por príons. Sobre essas partículas infecciosas, assinale a alternativa correta:",

    alternativas: [
      "A) São bactérias Gram-positivas.",
      "B) São vírus envelopados com RNA.",
      "C) São proteínas infecciosas associadas ao dobramento anormal da proteína priônica.",
      "D) São protozoários intracelulares.",
      "E) São helmintos que parasitam o sistema nervoso."
    ],

    resposta: "C",

    comentario:
      "Os príons são proteínas infecciosas com conformação anormal, capazes de induzir alterações no dobramento de proteínas priônicas normais. Não possuem material genético como vírus ou bactérias."
  },

  {
    id: 145,
    categoria: "Priônicas",
    doencaId: "scrapie",
    doenca: "Scrapie e Doença Debilitante Crônica",

    pergunta:
      "Scrapie e Doença Debilitante Crônica (CWD) são enfermidades que apresentam como característica comum:",

    alternativas: [
      "A) Serem causadas por bactérias do gênero Clostridium.",
      "B) Comprometerem o sistema nervoso e estarem associadas a príons.",
      "C) Serem transmitidas exclusivamente por mosquitos.",
      "D) Possuírem vacinas comerciais eficazes.",
      "E) Serem doenças bacterianas de evolução aguda."
    ],

    resposta: "B",

    comentario:
      "Scrapie e Chronic Wasting Disease (CWD) são encefalopatias espongiformes transmissíveis associadas a príons. Ambas comprometem o sistema nervoso e apresentam evolução progressiva."
  },

  {
    id: 146,
    categoria: "Bacterianas",
    doencaId: "rhodococcus-equi",
    doenca: "Rhodococcus equi",

    pergunta:
      "Um potro de quatro meses apresenta febre, tosse, dificuldade respiratória e pneumonia com formação de abscessos pulmonares. A propriedade apresenta criação de equinos em ambiente com grande quantidade de poeira e solo seco. O agente mais provável é:",

    alternativas: [
      "A) Rhodococcus equi.",
      "B) Brucella canis.",
      "C) Anaplasma marginale.",
      "D) Mycobacterium bovis.",
      "E) Ehrlichia canis."
    ],

    resposta: "A",

    comentario:
      "Rhodococcus equi é uma bactéria associada principalmente à pneumonia piogranulomatosa em potros, podendo provocar abscessos pulmonares. A exposição ocorre principalmente pela inalação de partículas de poeira contaminadas com o agente."
  },
{
  id: 147,
  categoria: "Bacterianas",
  doencaId: "mormo",
  doenca: "Mormo",
  pergunta: "O mormo é uma enfermidade infectocontagiosa de importância para a defesa sanitária animal. Sobre essa doença, assinale a alternativa correta:",
  alternativas: [
    "A) É causada por um vírus da família Retroviridae e acomete exclusivamente equinos.",
    "B) É causada pela bactéria Burkholderia mallei e acomete principalmente equídeos, podendo também infectar seres humanos.",
    "C) É causada por uma bactéria do gênero Brucella e apresenta como principal manifestação a ocorrência de abortos.",
    "D) É uma enfermidade parasitária transmitida exclusivamente por carrapatos.",
    "E) É causada por um fungo que acomete principalmente o sistema respiratório dos equinos."
  ],
  resposta: "B",
  comentario: "O mormo é uma doença bacteriana causada por Burkholderia mallei. Acomete principalmente equídeos e possui caráter zoonótico, podendo ser transmitida por secreções, contato com animais infectados e fômites contaminados."
},
{
  id: 148,
  categoria: "Diagnóstico",
  doencaId: "geral",
  doenca: "Diagnóstico laboratorial",
  pergunta: "Os métodos diagnósticos podem ser classificados em diretos e indiretos, de acordo com aquilo que detectam. Assinale a alternativa que apresenta um método diagnóstico direto:",
  alternativas: [
    "A) ELISA para detecção de anticorpos.",
    "B) Reação de imunofluorescência indireta.",
    "C) Reação em cadeia da polimerase (PCR).",
    "D) Soroaglutinação microscópica.",
    "E) Pesquisa de anticorpos por sorologia."
  ],
  resposta: "C",
  comentario: "A PCR é um método diagnóstico direto, pois permite detectar o material genético do agente infeccioso presente na amostra. Já os métodos sorológicos geralmente identificam a resposta imunológica do hospedeiro."
},
{
  id: 149,
  categoria: "Diagnóstico",
  doencaId: "geral",
  doenca: "Diagnóstico laboratorial",
  pergunta: "Na rotina de diagnóstico das enfermidades infecciosas, diferentes técnicas laboratoriais são utilizadas. Assinale a alternativa que apresenta exclusivamente métodos indiretos:",
  alternativas: [
    "A) PCR, isolamento bacteriano e cultivo viral.",
    "B) Cultura bacteriana, provas bioquímicas e PCR.",
    "C) ELISA para anticorpos, imunofluorescência indireta e soroaglutinação.",
    "D) PCR, isolamento do agente e microscopia direta.",
    "E) Cultivo celular, isolamento bacteriano e provas bioquímicas."
  ],
  resposta: "C",
  comentario: "Os métodos indiretos identificam a resposta imunológica do hospedeiro frente ao agente infeccioso. ELISA para anticorpos, imunofluorescência indireta e soroaglutinação são exemplos de técnicas sorológicas."
},
{
  id: 150,
  categoria: "Conceitos gerais",
  doencaId: "geral",
  doenca: "Conceitos epidemiológicos",
  pergunta: "Na epidemiologia das doenças infecciosas e parasitárias, os termos infecção e infestação possuem significados distintos. Assinale a alternativa correta:",
  alternativas: [
    "A) Infecção é a presença de ectoparasitas na superfície corporal do hospedeiro.",
    "B) Infestação refere-se exclusivamente à invasão do organismo por vírus e bactérias.",
    "C) Infecção está relacionada à invasão e multiplicação de agentes infecciosos no organismo, enquanto infestação é frequentemente utilizada para a presença de ectoparasitas.",
    "D) Infecção e infestação são termos sinônimos e podem ser utilizados indistintamente.",
    "E) Infestação ocorre somente em animais domésticos, enquanto infecção ocorre em animais silvestres."
  ],
  resposta: "C",
  comentario: "Infecção corresponde à invasão e multiplicação de agentes infecciosos no organismo do hospedeiro. O termo infestação é frequentemente empregado para a presença de ectoparasitas, como carrapatos, pulgas e ácaros."
},
{
  id: 151,
  categoria: "Conceitos gerais",
  doencaId: "geral",
  doenca: "Conceitos epidemiológicos",
  pergunta: "A infectividade é uma característica importante na compreensão da capacidade de um agente etiológico provocar infecções. Esse conceito corresponde:",
  alternativas: [
    "A) À capacidade do agente de provocar lesões graves no hospedeiro.",
    "B) À capacidade do agente de se instalar e multiplicar em determinado hospedeiro.",
    "C) À resistência do hospedeiro contra determinado agente infeccioso.",
    "D) À capacidade do agente de sobreviver exclusivamente no ambiente.",
    "E) À capacidade de produzir toxinas responsáveis pelos sinais clínicos."
  ],
  resposta: "B",
  comentario: "Infectividade é a capacidade de um agente etiológico penetrar, instalar-se e multiplicar-se em determinado hospedeiro. Não deve ser confundida com virulência, que está relacionada à intensidade dos danos provocados."
},
{
  id: 152,
  categoria: "Conceitos gerais",
  doencaId: "geral",
  doenca: "Conceitos epidemiológicos",
  pergunta: "O tropismo de um agente infeccioso corresponde:",
  alternativas: [
    "A) À capacidade de resistir aos desinfetantes utilizados no ambiente.",
    "B) À facilidade de transmissão entre animais de espécies diferentes.",
    "C) À predileção do agente por determinadas células, tecidos ou órgãos do hospedeiro.",
    "D) À capacidade de provocar doença em todos os animais expostos.",
    "E) Ao período entre a entrada do agente e o aparecimento dos primeiros sinais clínicos."
  ],
  resposta: "C",
  comentario: "Tropismo é a preferência de determinado agente infeccioso por células, tecidos ou órgãos específicos. Essa característica influencia a distribuição das lesões e as manifestações clínicas da doença."
},
{
  id: 153,
  categoria: "Bacterianas",
  doencaId: "geral",
  doenca: "Enfermidades bacterianas",
  pergunta: "Associe as enfermidades bacterianas às suas respectivas características:\n\n1. Mastite bacteriana\n2. Febre maculosa\n3. Listeriose\n4. Linfadenite caseosa\n\nA. Doença associada à formação de abscessos, especialmente em linfonodos de ovinos.\nB. Enfermidade transmitida por carrapatos, causada por bactérias do gênero Rickettsia.\nC. Infecção da glândula mamária, frequentemente associada a agentes como Staphylococcus aureus e Streptococcus agalactiae.\nD. Doença que pode apresentar manifestações neurológicas.",
  alternativas: [
    "A) 1-A; 2-C; 3-B; 4-D.",
    "B) 1-C; 2-B; 3-D; 4-A.",
    "C) 1-B; 2-D; 3-A; 4-C.",
    "D) 1-D; 2-A; 3-C; 4-B.",
    "E) 1-C; 2-A; 3-B; 4-D."
  ],
  resposta: "B",
  comentario: "A mastite bacteriana acomete a glândula mamária; a febre maculosa é transmitida por carrapatos e causada por Rickettsia; a listeriose pode provocar manifestações neurológicas; e a linfadenite caseosa é caracterizada pela formação de abscessos, principalmente nos linfonodos de ovinos."
},
{
  id: 154,
  categoria: "Parasitárias",
  doencaId: "geral",
  doenca: "Demodicose",
  pergunta: "A sarna demodécica é causada por ácaros que habitam estruturas específicas da pele dos animais. Sobre essa enfermidade, assinale a alternativa correta:",
  alternativas: [
    "A) É causada por ácaros que habitam exclusivamente o conduto auditivo externo.",
    "B) Os ácaros habitam os folículos pilosos e as glândulas sebáceas, podendo ocorrer transmissão da mãe para os filhotes no período neonatal.",
    "C) É transmitida exclusivamente por carrapatos infectados.",
    "D) É causada por fungos que invadem a camada córnea da epiderme.",
    "E) Os ácaros são encontrados exclusivamente na superfície da pele, sem atingir estruturas cutâneas."
  ],
  resposta: "B",
  comentario: "A demodicose é causada por ácaros do gênero Demodex, que habitam principalmente os folículos pilosos e as glândulas sebáceas. A transmissão ocorre principalmente pelo contato próximo entre a mãe e os filhotes nos primeiros dias de vida."
},
{
  id: 155,
  categoria: "Bacterianas",
  doencaId: "leptospirose",
  doenca: "Leptospirose",
  pergunta: "A leptospirose é uma zoonose de distribuição mundial causada por bactérias do gênero Leptospira. Sobre essa enfermidade, assinale a alternativa INCORRETA:",
  alternativas: [
    "A) A transmissão pode ocorrer pelo contato com urina de animais infectados.",
    "B) A transmissão também pode ocorrer por vias vertical e sexual.",
    "C) A soroaglutinação microscópica (MAT) é utilizada no diagnóstico sorológico.",
    "D) As leptospiras são bactérias aeróbias obrigatórias.",
    "E) A doença caracteriza-se principalmente por provocar mieloencefalite com agressividade e sinais neurológicos como manifestação típica."
  ],
  resposta: "E",
  comentario: "A leptospirose pode provocar alterações renais, hepáticas e reprodutivas, entre outras manifestações. O quadro de mieloencefalite com agressividade não representa sua apresentação clínica característica."
},
{
  id: 156,
  categoria: "Conceitos gerais",
  doencaId: "geral",
  doenca: "Epidemiologia",
  pergunta: "A tríade epidemiológica é utilizada para compreender os fatores envolvidos no desenvolvimento das doenças. Ela é formada pela interação entre:",
  alternativas: [
    "A) Hospedeiro, agente etiológico e ambiente.",
    "B) Diagnóstico, tratamento e prognóstico.",
    "C) Vacinação, isolamento e tratamento.",
    "D) Vetor, medicamento e hospedeiro.",
    "E) Agente etiológico, diagnóstico e sinais clínicos."
  ],
  resposta: "A",
  comentario: "A tríade epidemiológica é composta por hospedeiro, agente etiológico e ambiente. A interação entre esses três elementos influencia a ocorrência e a disseminação das enfermidades."
},
{
  id: 157,
  categoria: "Conceitos gerais",
  doencaId: "geral",
  doenca: "Epidemiologia",
  pergunta: "Na epidemiologia das enfermidades infecciosas, a virulência representa:",
  alternativas: [
    "A) A capacidade de um agente infeccioso sobreviver fora do hospedeiro.",
    "B) A capacidade de um agente se instalar e multiplicar no organismo.",
    "C) O grau de patogenicidade ou intensidade dos danos provocados pelo agente no hospedeiro.",
    "D) A resistência do hospedeiro à infecção.",
    "E) A capacidade de transmissão exclusivamente por vetores."
  ],
  resposta: "C",
  comentario: "A virulência está relacionada ao grau de patogenicidade de um agente e à intensidade dos danos que ele provoca no hospedeiro. É diferente de infectividade, que corresponde à capacidade de instalação e multiplicação."
},
{
  id: 158,
  categoria: "Conceitos gerais",
  doencaId: "geral",
  doenca: "História natural da doença",
  pergunta: "Na história natural das doenças, a convalescença corresponde à fase em que:",
  alternativas: [
    "A) Os primeiros sinais clínicos começam a aparecer.",
    "B) O agente infeccioso inicia sua multiplicação no organismo.",
    "C) A doença atinge sua manifestação clínica mais grave.",
    "D) O animal apresenta recuperação gradual, com diminuição dos sinais clínicos.",
    "E) O agente infeccioso é transmitido para outros hospedeiros."
  ],
  resposta: "D",
  comentario: "A convalescença é a fase de recuperação progressiva do indivíduo após o período de doença, caracterizada pela diminuição dos sinais clínicos e retomada gradual das condições normais."
},
{
  id: 159,
  categoria: "Saúde coletiva",
  doencaId: "geral",
  doenca: "Vigilância sanitária",
  pergunta: "De acordo com a Lei nº 8.080/1990, a vigilância sanitária é definida como:",
  alternativas: [
    "A) Um conjunto de ações voltadas exclusivamente à fiscalização de hospitais e clínicas.",
    "B) Uma atividade destinada somente à investigação de surtos de doenças infecciosas.",
    "C) Um conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários.",
    "D) Um conjunto de medidas restrito ao controle de medicamentos e vacinas.",
    "E) Uma atividade realizada exclusivamente por instituições privadas."
  ],
  resposta: "C",
  comentario: "A Lei nº 8.080/1990 define a vigilância sanitária como um conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde."
},


{
  id: 160,
  categoria: "Protozooses",
  doencaId: "leishmaniose",
  doenca: "Leishmaniose",
  pergunta:
    "Um cão proveniente de região endêmica para leishmaniose visceral apresenta emagrecimento progressivo, onicogrifose, alopecia periocular, dermatite esfoliativa e linfadenomegalia. Diante da suspeita clínica, o médico-veterinário solicita exames laboratoriais para investigação da doença. Considerando os métodos diagnósticos disponíveis, assinale a alternativa correta.",
  alternativas: [
    "A) A avaliação clínica isolada é suficiente para confirmar a infecção por Leishmania infantum.",
    "B) A pesquisa parasitológica pode identificar formas amastigotas do parasito em amostras de tecidos, enquanto a PCR permite detectar seu material genético.",
    "C) A sorologia negativa exclui definitivamente a possibilidade de infecção, independentemente do estágio clínico.",
    "D) A PCR é um método exclusivamente sorológico, utilizado para detectar anticorpos contra o parasito.",
    "E) A citologia não apresenta utilidade diagnóstica, pois as formas amastigotas não são visualizadas em amostras biológicas."
  ],
  resposta: "B",
  comentario:
    "O diagnóstico deve integrar avaliação clínica, histórico epidemiológico e exames laboratoriais. A pesquisa parasitológica permite visualizar formas amastigotas, enquanto a PCR detecta DNA do parasito. Nenhum resultado deve ser interpretado isoladamente."
},

{
  id: 161,
  categoria: "Protozooses",
  doencaId: "leishmaniose",
  doenca: "Leishmaniose",
  pergunta:
    "Durante a investigação de um cão suspeito de leishmaniose visceral, foram solicitados exames sorológicos e parasitológicos. O médico-veterinário explicou ao tutor que os testes possuem finalidades diferentes e devem ser interpretados em conjunto. Sobre esses métodos, assinale a alternativa correta.",
  alternativas: [
    "A) A RIFI e o ELISA detectam diretamente formas amastigotas nos tecidos.",
    "B) A imunocromatografia identifica exclusivamente o DNA de Leishmania infantum.",
    "C) Os métodos sorológicos detectam anticorpos contra o parasito, enquanto os métodos parasitológicos buscam demonstrar sua presença nas amostras.",
    "D) A PCR detecta anticorpos circulantes e, por isso, é considerada um teste sorológico.",
    "E) A pesquisa parasitológica é incapaz de confirmar a infecção, sendo utilizada apenas para avaliar a resposta imunológica."
  ],
  resposta: "C",
  comentario:
    "RIFI e ELISA são métodos sorológicos que detectam anticorpos. A imunocromatografia é utilizada como teste rápido de triagem. Já a citologia, a histopatologia e a pesquisa parasitológica buscam demonstrar o agente, enquanto a PCR detecta seu material genético."
},

{
  id: 162,
  categoria: "Protozooses",
  doencaId: "leishmaniose",
  doenca: "Leishmaniose",
  pergunta:
    "Um cão apresenta sorologia reagente para Leishmania infantum, mas não demonstra alterações clínicas ou laboratoriais. Na investigação complementar, um exame parasitológico ou molecular identifica o parasito. De acordo com as Diretrizes Brasileish 2025, a interpretação desse quadro deve considerar que:",
  alternativas: [
    "A) Todo animal sororreagente apresenta obrigatoriamente doença clínica moderada ou grave.",
    "B) A ausência de sinais clínicos exclui a possibilidade de infecção pelo parasito.",
    "C) A identificação do parasito em um animal sem manifestações clínicas é compatível com a classificação de infectado sadio.",
    "D) O resultado positivo demonstra que o animal está em estágio terminal da doença.",
    "E) A presença de anticorpos impede a realização de exames parasitológicos e moleculares."
  ],
  resposta: "C",
  comentario:
    "As diretrizes diferenciam exposição, infecção sem doença clínica e doença manifesta. Um cão pode apresentar evidência parasitológica ou molecular de infecção mesmo sem sinais clínicos ou alterações laboratoriais. A classificação depende da integração dos resultados."
},

{
  id: 163,
  categoria: "Protozooses",
  doencaId: "leishmaniose",
  doenca: "Leishmaniose",
  pergunta:
    "Durante o acompanhamento de um cão com leishmaniose visceral, o médico-veterinário identifica anemia não regenerativa, hiperglobulinemia, hipoalbuminemia e proteinúria. Considerando a fisiopatologia e a avaliação clínica da doença, assinale a alternativa que melhor interpreta esses achados.",
  alternativas: [
    "A) São alterações incompatíveis com a leishmaniose visceral, indicando necessariamente uma doença viral.",
    "B) A hiperglobulinemia e a hipoalbuminemia podem estar associadas à resposta inflamatória e imunológica, enquanto a proteinúria exige investigação do comprometimento renal.",
    "C) A proteinúria é um achado sem importância clínica e não deve ser considerada no estadiamento.",
    "D) A anemia não regenerativa demonstra que o parasito está restrito ao sistema nervoso central.",
    "E) A hiperglobulinemia exclui a possibilidade de comprometimento renal associado à doença."
  ],
  resposta: "B",
  comentario:
    "A leishmaniose visceral pode provocar alterações hematológicas e bioquímicas importantes. Hiperglobulinemia, hipoalbuminemia e anemia podem acompanhar a doença. A proteinúria merece atenção especial, pois pode indicar comprometimento renal, sendo necessária a avaliação da função renal e da razão proteína-creatinina urinária."
},

{
  id: 164,
  categoria: "Protozooses",
  doencaId: "leishmaniose",
  doenca: "Leishmaniose",
  pergunta:
    "Um cão diagnosticado com leishmaniose visceral apresenta lesões cutâneas difusas, onicogrifose, ulcerações, anorexia e emagrecimento. Os exames laboratoriais também revelam alterações hematológicas, porém o perfil renal permanece preservado. Considerando o estadiamento clínico proposto pelas Diretrizes Brasileish 2025, esse quadro é mais compatível com:",
  alternativas: [
    "A) Estágio I - Exposto.",
    "B) Estágio II - Infectado sadio.",
    "C) Estágio III - Doença leve.",
    "D) Estágio IV - Doença moderada.",
    "E) Estágio V - Doença muito grave."
  ],
  resposta: "D",
  comentario:
    "O estágio IV corresponde à doença moderada, caracterizada por sinais clínicos mais expressivos, como lesões cutâneas difusas, onicogrifose, ulcerações, anorexia e emagrecimento. Podem ocorrer alterações laboratoriais, com subdivisão conforme a presença ou ausência de alterações no perfil renal."
},

{
  id: 165,
  categoria: "Protozooses",
  doencaId: "leishmaniose",
  doenca: "Leishmaniose",
  pergunta:
    "Um cão em acompanhamento por leishmaniose visceral apresenta melhora clínica após o tratamento. O tutor acredita que a ausência de lesões e a redução dos sinais clínicos significam que o animal está completamente livre do parasito e não necessita mais de acompanhamento. Considerando as recomendações para o manejo da doença, assinale a alternativa correta.",
  alternativas: [
    "A) A melhora clínica comprova a eliminação completa do parasito, dispensando novos exames.",
    "B) O acompanhamento deve ser mantido, incluindo avaliações clínicas e laboratoriais, pois a melhora dos sinais não comprova cura parasitológica estéril.",
    "C) Após o desaparecimento das lesões, o animal deixa de apresentar qualquer possibilidade de transmissão.",
    "D) A avaliação renal é desnecessária após o início do tratamento.",
    "E) A sorologia deve ser utilizada isoladamente para determinar a cura definitiva."
  ],
  resposta: "B",
  comentario:
    "O tratamento pode promover melhora clínica e redução da carga parasitária, mas não garante a eliminação completa do agente. O acompanhamento periódico é fundamental para avaliar a evolução clínica, os parâmetros laboratoriais e a resposta ao tratamento."
},

];

