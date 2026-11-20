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
    "( ) O carbúnculo sintomático é causado principalmente por C. chauvoei, embora outras espécies de Clostridium possam produzir quadros semelhantes.",

  alternativas: [
    "A) V; F; F; F; F",
    "B) F; V; V; V; F",
    "C) F; F; V; F; V",
    "D) V; V; F; F; V",
    "E) V; V; V; F; F"
  ],

  resposta: "D",

  comentario:
    "A sequência correta é V; V; F; F; V. Clostridium perfringens está associado a diferentes formas de enterotoxemia, conforme o tipo toxigênico envolvido. Equinos são suscetíveis a diferentes neurotoxinas botulínicas, enquanto os tipos C e D têm importância na doença em bovinos. A vacinação não é a principal medida de controle da infecção por C. difficile. A afirmação sobre a sensibilidade de gatos, caprinos e ovinos à toxina tetânica está incorreta, pois a suscetibilidade varia entre as espécies. O carbúnculo sintomático está principalmente associado a C. chauvoei."
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
    "Assinale a alternativa que apresenta corretamente uma vantagem do método diagnóstico utilizado na investigação da leptospirose:",

  alternativas: [
    "A) A visualização direta da Leptospira ao microscópio óptico permite identificar com precisão o sorovar infectante.",
    "B) A cultura para isolamento bacteriano apresenta resultados rápidos e não sofre interferência da administração prévia de antimicrobianos.",
    "C) A reação em cadeia da polimerase (PCR) pode detectar o material genético da Leptospira durante a fase de leptospiremia, antes da produção de anticorpos detectáveis.",
    "D) O ELISA identifica diretamente a bactéria e permite determinar o sorovar responsável pela infecção.",
    "E) A soroaglutinação microscópica (MAT) confirma a infecção em qualquer fase da doença por meio de uma única amostra, independentemente do momento da coleta."
  ],

  resposta: "C",

  comentario:
    "A PCR é um método direto que detecta o material genético da Leptospira. Durante a fase de leptospiremia, pode identificar o agente antes da soroconversão. A cultura é demorada e pode apresentar menor sensibilidade após o uso de antimicrobianos. A MAT e os testes sorológicos detectam a resposta de anticorpos e devem ser interpretados considerando o estágio da infecção e o momento da coleta."
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
    "A alternativa correta é A. As afirmações I, II e III estão relacionadas às características epidemiológicas e sanitárias da febre aftosa. A afirmação IV está incorreta pois o Paraná só conquistou esse reconhecimento de zona livre sem vacinação em 2021."
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
  categoria: "Diagnóstico e Conceitos Gerais",
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
  categoria: "Diagnóstico e Conceitos Gerais",
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
  categoria: "Epidemiologia e Saúde Coletiva",
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
  categoria: "Epidemiologia e Saúde Coletiva",
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
  categoria: "Epidemiologia e Saúde Coletiva",
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
  categoria: "Epidemiologia e Saúde Coletiva",
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
  categoria: "Epidemiologia e Saúde Coletiva",
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
  id: 160,
  categoria: "Parasitárias",
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
  categoria: "Parasitárias",
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
  categoria: "Parasitárias",
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
  categoria: "Parasitárias",
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
  categoria: "Parasitárias",
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
  categoria: "Parasitárias",
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


{
  id: 176,
  categoria: "Virais",
  doencaId: "febre-aftosa",
  doenca: "Febre Aftosa",
  pergunta: `O Programa Nacional de Erradicação e Prevenção da Febre Aftosa (PNEFA) determina as normas e exigências para controle e erradicação da doença no país. De acordo com o programa, considere as seguintes afirmações:

I. Bovinos, bubalinos, ovinos, caprinos, suínos, ruminantes silvestres e outros nos quais a infecção foi demonstrada cientificamente, são os animais suscetíveis à doença no Brasil.

II. Área de proteção sanitária: área geográfica estabelecida em torno dos focos de febre aftosa, de acordo com a estratégia para contenção e eliminação do agente infeccioso.

III. Doença vesicular infecciosa é um conjunto de doenças transmissíveis caracterizadas, principalmente, por febre e pela síndrome de claudicação e sialorréia, decorrente de vesículas ou lesões vesiculares nas regiões da boca, focinho ou patas, podendo também ser encontradas na região do úbere.

Está correto o que se afirma em:`,
  alternativas: [
    "A) apenas alternativas II e III estão corretas.",
    "B) apenas alternativas I e II estão corretas.",
    "C) apenas alternativas I e III estão corretas.",
    "D) todas as alternativas estão falsas.",
    "E) todas as alternativas estão corretas."
  ],
  resposta: "E",
  comentario: "A questão apresenta três afirmações sobre o PNEFA, os animais suscetíveis e a caracterização das doenças vesiculares."
},


{
  id: 177,
  categoria: "Diagnóstico e Conceitos Gerais",
  doencaId: "geral",
  doenca: "Diagnóstico",

  pergunta:
    "Com relação ao estudo das doenças infecciosas e parasitárias, a coleta de material para envio ao laboratório muitas vezes será fundamental para o sucesso do diagnóstico. Com relação às técnicas de diagnóstico usuais para cada agente etiológico, marque a correta:",

  alternativas: [
    "A) Sintomas como diarreia, vômito e dores abdominais marcam a maioria das doenças parasitárias em pequenos animais, sendo imprescindível enviar o material sorológico coletado para o laboratório, a fim de realizar a coprocultura.",
    "B) O padrão-ouro para diagnóstico de doenças infecciosas será, quase sempre, o exame físico juntamente com a correta anamnese do animal.",
    "C) Métodos sorológicos, como ELISA e imunofluorescência indireta, podem ser utilizados na investigação de infecções virais por meio da detecção de anticorpos específicos, conforme o agente e a fase da infecção.",
    "D) Quando a suspeita for de doença causada por vírus, o material deverá ser encaminhado ao laboratório para cultivo dos vírus e observação destes à microscopia óptica.",
    "E) Doenças de pele causadas por dermatófitos geralmente são caracterizadas por prurido, alopecia e vermelhidão. O diagnóstico de predileção neste caso é o PCR."
  ],

  resposta: "C",

  comentario:
    "A alternativa C está correta. ELISA e imunofluorescência indireta podem detectar anticorpos específicos contra determinados agentes virais. A interpretação depende do agente investigado, do momento da coleta e do histórico vacinal. A anamnese e o exame físico são fundamentais, mas não constituem, isoladamente, o padrão-ouro para a maioria das doenças infecciosas."
},

{
  id: 179,
  categoria: "Bacterianas",
  doencaId: "mormo",
  doenca: "Mormo",
  pergunta: `Enfermidade infecciosa, causada pela bactéria Burkholderia mallei que acomete os equídeos e eventualmente o homem e outros animais. Os equídeos apresentam nós subcutâneos nas mucosas nasais, pulmões e gânglios linfáticos, catarro e pneumonia. A transmissão ocorre através da pele e das mucosas dos olhos e nariz, por fômites e secreções. A enfermidade descrita é:`,
  alternativas: [
    "A) Febre aftosa",
    "B) Linfadenite caseosa",
    "C) Mormo",
    "D) Adenite equina",
    "E) Anemia infecciosa equina"
  ],
  resposta: "C",
  comentario: "O mormo é uma enfermidade infecciosa causada por Burkholderia mallei, que acomete principalmente equídeos e possui potencial zoonótico."
},



{
  id: 180,
  categoria: "Bacterianas",
  doencaId: "mormo",
  doenca: "Mormo",

  pergunta:
    "De acordo com as diretrizes brasileiras para o diagnóstico laboratorial do mormo, assinale a alternativa correta:",

  alternativas: [
    "A) A fixação de complemento ou o ELISA podem ser utilizados como testes de triagem, enquanto o Western Blotting é empregado como teste complementar.",
    "B) A maleinização é o único método laboratorial oficial de triagem para todos os equídeos.",
    "C) A soroaglutinação microscópica é o teste confirmatório obrigatório para o diagnóstico do mormo.",
    "D) O Western Blotting é utilizado exclusivamente como teste de triagem, sendo a fixação de complemento o único método confirmatório.",
    "E) A cultura bacteriana é o único método permitido para a investigação de animais suspeitos."
  ],

  resposta: "A",

  comentario:
    "A alternativa A está correta. Conforme a regulamentação brasileira, a fixação de complemento ou o ELISA podem ser utilizados como testes de triagem, e o Western Blotting é o teste complementar. A maleinização intrapalpebral possui indicação restrita a equídeos com menos de seis meses, com sinais clínicos compatíveis e mediante autorização do serviço oficial."
},

{
  id: 181,
  categoria: "Bacterianas",
  doencaId: "tuberculose",
  doenca: "Tuberculose Bovina",

  pergunta:
    "A tuberculose bovina é causada principalmente pelo Mycobacterium bovis e acomete comumente animais estabulados. Considerando que é uma zoonose e acomete outras espécies, indique a principal forma de controle desta enfermidade:",

  alternativas: [
    "A) Prova de tuberculina e aplicação anual de vermífugo no rebanho.",
    "B) Prova de tuberculina e vacinação anual do rebanho.",
    "C) Vacinação anual do rebanho.",
    "D) Realização de testes de diagnóstico e abate sanitário dos animais considerados positivos, conforme as medidas previstas pelo PNCEBT.",
    "E) Vacinação anual do rebanho e abate sanitário dos animais positivos."
  ],

  resposta: "D",

  comentario:
    "A alternativa D está correta. O controle da tuberculose bovina no âmbito do PNCEBT envolve a identificação dos animais infectados por meio de testes diagnósticos e a adoção das medidas sanitárias oficiais, incluindo o abate sanitário dos animais positivos. Não existe vacinação de rotina autorizada para bovinos no programa."
},



{
  id: 183,
  categoria: "Parasitárias",
  doencaId: "geral",
  doenca: "Sarna Demodécica",
  pergunta: `A sarna provocada por um ácaro escavador comensal da pele do animal, que habita folículos pilosos e glândulas sebáceas, e que é transmitida pela mãe durante o parto normal ou amamentação é a:`,
  alternativas: [
    "A) sarna otodécica.",
    "B) sarna demodécica.",
    "C) sarna psoróptica.",
    "D) sarna sarcóptica.",
    "E) sarna notoédrica."
  ],
  resposta: "B",
  comentario: "A demodicose está associada a ácaros do gênero Demodex, que habitam os folículos pilosos e as glândulas sebáceas."
},
{
  id: 184,
  categoria: "Bacterianas",
  doencaId: "clostridioses",
  doenca: "Clostridioses",
  pergunta:
    "As clostridioses são um grupo de doenças causadas por bactérias do tipo Clostridium, sendo as mais importantes em rebanhos bovinos o tétano e o botulismo. Acerca destas duas doenças, assinale a alternativa correta:",
  alternativas: [
    "A) Não existem vacinas disponíveis para ambas as doenças, sendo o manejo profilático baseado na higienização.",
    "B) O botulismo ocorre pela inibição da liberação de acetilcolina nas terminações nervosas pré-sinápticas, enquanto o tétano bloqueia a liberação de neurotransmissores inibitórios no sistema nervoso central.",
    "C) O tétano atinge somente bovinos, não sendo encontrado em outras espécies.",
    "D) O botulismo caracteriza-se por paralisia espástica, posição em cavalete, protusão de terceira pálpebra e enrijecimento de pescoço.",
    "E) São doenças de curso crônico e lento."
  ],
  resposta: "B",
  comentario:
    "A alternativa B está correta. A toxina botulínica impede a liberação de acetilcolina nas terminações nervosas pré-sinápticas, provocando paralisia flácida. Já a toxina tetânica impede a liberação de neurotransmissores inibitórios, principalmente GABA e glicina, causando hiperatividade dos neurônios motores e paralisia espástica."
},
{
  id: 185,
  categoria: "Parasitárias",
  doencaId: "babesiose",
  doenca: "Babesiose",
  pergunta:
    "Protozoários do gênero Babesia transmitidos por carrapatos a equídeos, bovinos, cães, gatos e humanos. São sinais clínicos da babesiose, exceto:",
  alternativas: [
    "A) Diarreia.",
    "B) Icterícia.",
    "C) Melena.",
    "D) Anemia hemolítica.",
    "E) Edema."
  ],
  resposta: "C",
  comentario:
"A melena, que corresponde à presença de sangue digerido nas fezes, não é uma manifestação clínica típica da babesiose."
},
{
  id: 186,
  categoria: "Virais",
  doencaId: "anemia-infecciosa-equina",
  doenca: "Anemia Infecciosa Equina",
  pergunta: `A Anemia Infecciosa Equina (AIE) é uma doença cosmopolita causada por um RNA vírus. Para entrada de equinos em eventos agropecuários, são requisitos obrigatórios:

I. Guia de Trânsito Animal (GTA).

II. Exame negativo para anemia infecciosa equina (IDGA).

III. Comprovante de vacinação contra AIE.

Está correto o que se afirma em:`,
  alternativas: [
    "A) I, II e III.",
    "B) I e II, apenas.",
    "C) I e III, apenas.",
    "D) III, apenas.",
    "E) II, apenas."
  ],
  resposta: "B",
  comentario: "A questão apresenta requisitos sanitários para o trânsito e ingresso de equídeos em eventos. As exigências devem ser conferidas conforme a regulamentação vigente."
},
{
  id: 187,
  categoria: "Diagnóstico e Conceitos Gerais",
  doencaId: "geral",
  doenca: "Testes Diagnósticos",
  pergunta: `Os testes diagnósticos são amplamente utilizados na rotina médico veterinária. Acerca dos principais testes diagnósticos, assinale a correta:`,
  alternativas: [
    "A) Testes diretos baseiam-se na detecção de resposta imunológica gerada pelo paciente.",
    "B) Testes de triagem possuem alta especificidade e os confirmatórios alta sensibilidade.",
    "C) A reação em cadeia de polimerase (PCR) é um método diagnóstico direto que detecta material genético.",
    "D) São métodos indiretos: ELISA, cultura bacteriana, provas bioquímicas e RIFI.",
    "E) O AAT é um teste diagnóstico indireto confirmatório para brucelose."
  ],
  resposta: "C",
  comentario: "A PCR é um método direto, pois detecta material genético do agente infeccioso na amostra."
},
{
  id: 188,
  categoria: "Bacterianas",
  doencaId: "leptospirose",
  doenca: "Leptospirose",
  pergunta: `A leptospirose é uma zoonose causada por bactérias do gênero Leptospira. Sobre a leptospirose, é INCORRETO afirmar que:`,
  alternativas: [
    "A) A transmissão pode ocorrer por contato direto com urina e/ou órgãos de animais portadores (via venérea, transplacentária e mamária).",
    "B) Caracteriza-se por quadro clínico de mieloencefalite com sinais neurológicos, agressividade e morte após curta evolução de 7 a 10 dias.",
    "C) Como teste padrão-ouro indicado pela OIE, temos a soroaglutinação microscópica (MAT).",
    "D) É uma bactéria aeróbica obrigatória de distribuição mundial.",
    "E) A classificação sorológica é baseada na expressão dos antígenos lipopolissacarídeos."
  ],
  resposta: "B",
  comentario: "A alternativa B apresenta uma descrição que não corresponde à apresentação clínica típica da leptospirose."
},
{
  id: 189,
  categoria: "Diagnóstico e Conceitos Gerais",
  doencaId: "geral",
  doenca: "Doenças Infecciosas e Parasitárias",
  pergunta: `As doenças infecciosas e parasitárias representam um grande desafio para a saúde pública. Assinale a alternativa INCORRETA em relação às características gerais:`,
  alternativas: [
    "A) A profilaxia é essencial para controlar a disseminação.",
    "B) Doenças parasitárias são geralmente causadas por organismos que vivem às custas de um hospedeiro.",
    "C) O período de incubação é o intervalo entre a infecção e o aparecimento dos sintomas.",
    "D) A transmissão de doenças infecciosas ocorre exclusivamente por contato direto entre animais.",
    "E) Podem ser causadas por vírus, bactérias, fungos e protozoários."
  ],
  resposta: "D",
  comentario: "A transmissão de doenças infecciosas não ocorre exclusivamente por contato direto. Pode ocorrer também por vias indiretas, vetores, água, alimentos e outras formas."
},


{
  id: 190,
  categoria: "Bacterianas",
  doencaId: "brucelose",
  doenca: "Brucelose Bovina",

  pergunta: `Um pequeno produtor de leite adquiriu três fêmeas da raça holandesa, com idades de 6 meses, 18 meses e 4 anos, respectivamente. O proprietário informou que nenhum animal foi vacinado contra brucelose. Nesse caso, o médico veterinário deve orientar o proprietário a:

I. Imunizar a fêmea de 6 meses de idade com a vacina B19.

II. Adotar as medidas sanitárias previstas para os animais adultos com diagnóstico confirmado de brucelose.

III. Aguardar que a fêmea de 18 meses atinja 24 meses de idade para realizar o teste sorológico.

IV. Vacinar a fêmea de 4 anos de idade com a vacina B19, caso seja considerada negativa no teste sorológico.

Nessa situação é correto o que se afirma apenas em:`,

  alternativas: [
    "A) II e IV.",
    "B) II e III.",
    "C) I e II.",
    "D) III e IV.",
    "E) I e III."
  ],

  resposta: "C",

  comentario:
    "As afirmativas I e II estão corretas. A vacina B19 é indicada para fêmeas bovinas e bubalinas entre 3 e 8 meses de idade. Animais adultos com diagnóstico confirmado devem ser submetidos às medidas sanitárias previstas pelo PNCEBT. A afirmativa III está incorreta, pois fêmeas não vacinadas podem ser testadas a partir dos 8 meses. A afirmativa IV está incorreta porque a B19 não é indicada para vacinação de fêmeas adultas."
},

{
  id: 191,
  categoria: "Bacterianas",
  doencaId: "clostridioses",
  doenca: "Clostridioses em Ruminantes",

  pergunta: `As clostridioses são um grupo de doenças causadas por bactérias do tipo Clostridium, sendo as mais importantes em rebanhos bovinos o tétano e o botulismo. Acerca destas duas doenças e sua importância em Medicina Veterinária, assinale a alternativa correta:`,

  alternativas: [
    "A) O tétano atinge somente bovinos, não sendo encontrado em outras espécies animais.",
    "B) Não existem vacinas disponíveis para ambas as doenças, sendo o manejo profilático baseado na higienização do ambiente.",
    "C) São doenças de curso crônico e lento, cujos sintomas demoram a aparecer e deixam os animais fracos durante um longo período de tempo.",
    "D) O botulismo caracteriza-se por uma paralisia espástica, sendo os sintomas mais comuns em cavalo, a posição em cavalete, protusão de terceira pálpebra e enrijecimento de pescoço.",
    "E) Tanto o botulismo quanto o tétano são doenças causadas pelas toxinas produzidas pelas bactérias C. botulinum e C. tetani, respectivamente. A toxina botulínica inibe a liberação de acetilcolina, enquanto a toxina tetânica bloqueia a liberação de neurotransmissores inibitórios no sistema nervoso central."
  ],

  resposta: "E",

  comentario:
    "A alternativa E está correta. A toxina botulínica impede a liberação de acetilcolina nas terminações nervosas pré-sinápticas, provocando paralisia flácida. Já a toxina tetânica bloqueia a liberação de neurotransmissores inibitórios, principalmente GABA e glicina, causando hiperatividade dos neurônios motores e paralisia espástica. As demais alternativas apresentam erros sobre a distribuição da doença, a prevenção ou as manifestações clínicas."
},

{
  id: 192,
  categoria: "Virais",
  doencaId: "geral",
  doenca: "Febre Aftosa e Estomatite Vesicular",

  pergunta: `Durante investigação em uma propriedade de criação mista no Centro-Oeste, bovinos e equinos apresentaram sinais de apatia, anorexia, salivação intensa e vesículas erosivas na mucosa oral e na região interdigital. O técnico da defesa agropecuária alertou para a necessidade de distinguir entre Febre Aftosa (FA) e Estomatite Vesicular (EV). Analise as sentenças:

I. A presença de lesões vesiculares em equinos é compatível com Estomatite Vesicular, visto que essa espécie não é suscetível ao vírus da Febre Aftosa.

II. A Febre Aftosa é uma doença de alta morbidade e baixa letalidade, com grande impacto econômico e sanitário.

III. O diagnóstico definitivo depende de exames laboratoriais, sendo a soroneutralização a técnica de escolha nos estágios iniciais.`,

  alternativas: [
    "A) I, II e III estão corretas.",
    "B) I e II estão corretas.",
    "C) Somente I está correta.",
    "D) I e III estão corretas.",
    "E) II e III estão corretas."
  ],

  resposta: "B",

  comentario:
    "As afirmativas I e II estão corretas. Os equinos são suscetíveis à estomatite vesicular, mas não à febre aftosa. A febre aftosa apresenta alta morbidade e grande impacto econômico e sanitário. A afirmativa III está incorreta porque a confirmação laboratorial de doenças vesiculares depende de métodos definidos para a investigação, incluindo técnicas de detecção viral e caracterização do agente, não sendo a soroneutralização a técnica universal de escolha para os estágios iniciais."
},


{
  id: 193,
  categoria: "Diagnóstico e Conceitos Gerais",
  doencaId: "geral",
  doenca: "Testes Diagnósticos Veterinários",

  pergunta: `Os testes diagnósticos são amplamente utilizados na rotina médico-veterinária e caracterizam-se pela identificação da doença circulante na região. Acerca dos principais testes sorológicos utilizados em medicina veterinária, assinale a alternativa correta:`,

  alternativas: [
    "A) Caracterizam-se como métodos diagnósticos indiretos: o ensaio imunoenzimático (ELISA), cultura bacteriana, provas bioquímicas e imunofluorescência indireta (RIFI).",
    "B) A reação em cadeia de polimerase (PCR) é um método diagnóstico direto que detecta o material genético do agente infeccioso de interesse (DNA ou RNA) na amostra estudada.",
    "C) O Antígeno Acidificado Tamponado (AAT) é um teste diagnóstico indireto confirmatório utilizado no diagnóstico da brucelose bovina.",
    "D) Os testes diagnósticos diretos baseiam-se na detecção de uma resposta imunológica gerada pelo paciente, frente à presença do agente etiológico.",
    "E) Testes diagnósticos de triagem geralmente possuem alta especificidade, enquanto testes diagnósticos confirmatórios geralmente possuem uma alta sensibilidade."
  ],

  resposta: "B",

  comentario:
    "A alternativa B está correta. A PCR é um método direto porque detecta o material genético do agente infeccioso na amostra. A alternativa A está incorreta porque cultura bacteriana e provas bioquímicas são métodos diretos de investigação do agente. A alternativa C está incorreta porque o AAT é um teste de triagem para brucelose, não confirmatório. A alternativa D descreve métodos indiretos, e a alternativa E inverte a característica geralmente desejada: testes de triagem priorizam sensibilidade, enquanto testes confirmatórios priorizam especificidade."
},



{
  id: 194,
  categoria: "Epidemiologia e Saúde Coletiva",
  doencaId: "geral",
  doenca: "Cadeia Epidemiológica",
  pergunta: `A cadeia epidemiológica de transmissão das doenças é o processo de identificação dos mecanismos envolvidos nos processos de propagação das enfermidades, e das relações que existem entre os diferentes elementos que levam ao seu aparecimento. Assim, marque abaixo a alternativa CORRETA:`,
  alternativas: [
    "A) A tríade epidemiológica representa as interações entre hospedeiro, agente patogênico e ambiente. Alterações em qualquer dos fatores leva ao desequilíbrio desta, resultando em surtos de enfermidades.",
    "B) A principal via de eliminação de um agente patogênico pelo hospedeiro é através da utilização de antimicrobianos ou antifúngicos.",
    "C) Fatores genéticos, estado nutricional, idade e sexo são fatores relacionados ao agente patogênico, e sua capacidade de causar enfermidade em um hospedeiro suscetível.",
    "D) Virulência é uma doença transmissível causada por vírus.",
    "E) A cadeia epidemiológica é um processo linear, que não precisa ser conhecida para que seja realizada a prevenção da enfermidade, e a eliminação do agente patogênico do ambiente."
  ],
  resposta: "A",
  comentario: "A tríade epidemiológica é formada pela interação entre agente, hospedeiro e ambiente."
},

{
  id: 196,
  categoria: "Virais",
  doencaId: "febre-aftosa",
  doenca: "Febre Aftosa",

  pergunta: `O Brasil recebeu, em maio de 2025, o reconhecimento internacional de país livre de febre aftosa sem vacinação. Considerando as estratégias necessárias para manter esse status sanitário, qual das alternativas apresenta uma medida importante para evitar a reintrodução do vírus?`,

  alternativas: [
    "A) Administração preventiva de antibióticos aos animais suscetíveis.",
    "B) Controle do trânsito de animais, fiscalização de fronteiras e vigilância epidemiológica.",
    "C) Implementação de campanhas de vermifugação em animais suscetíveis.",
    "D) Realização de vacinação anual obrigatória em todos os bovinos e bubalinos.",
    "E) Redução da densidade populacional de bovinos nas regiões de fronteira."
  ],

  resposta: "B",

  comentario:
    "A alternativa B está correta. Após o reconhecimento do Brasil como país livre de febre aftosa sem vacinação, a manutenção do status depende de vigilância epidemiológica, fiscalização do trânsito de animais e produtos de origem animal, controle de fronteiras e capacidade de resposta rápida diante de suspeitas."
},


{
  id: 198,
  categoria: "Epidemiologia e Saúde Coletiva",
  doencaId: "geral",
  doenca: "Vigilância Sanitária",
  pergunta: `As ações da Vigilância em Saúde se distribuem entre a Vigilância Epidemiológica, a Vigilância Sanitária, a Vigilância Ambiental em Saúde e a Vigilância em Saúde do Trabalhador. Nesse sentido, a Lei 8.080/90 (Lei Orgânica da Saúde) definiu a vigilância sanitária como:`,
  alternativas: [
    "A) Uma atividade analítica de qualidade desenvolvida pelas autoridades sanitárias no exercício da função.",
    "B) O efeito da ação da sociedade sobre o estado.",
    "C) Um conjunto de ações capazes de aumentar ou prevenir riscos à saúde.",
    "D) Um conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários.",
    "E) Um conjunto de ações que o estado reservou ainda como de sua responsabilidade."
  ],
  resposta: "D",
  comentario: "A alternativa D corresponde à definição de vigilância sanitária apresentada na Lei 8.080/90."
},
{
  id: 199,
  categoria: "Parasitárias",
  doencaId: "leishmaniose",
  doenca: "Leishmaniose Visceral Americana",
  pergunta: `A leishmaniose visceral americana é de notificação compulsória devido ao seu alto potencial zoonótico. Os cães domésticos são considerados os reservatórios urbanos mais importantes e podem ser assintomáticos e sintomáticos. Quando presentes, os sintomas mais evidenciados são:`,
  alternativas: [
    "A) Caquexia, insuficiência cardíaca crônica e alopecia periocular.",
    "B) Alopecia generalizada, caquexia, síndrome nefrótica e dermatite.",
    "C) Epistaxe, síndrome nefrótica, febre alta e convulsões.",
    "D) Alopecia periorbital, onicogrifose, caquexia e epistaxe.",
    "E) Linfadenopatia, insuficiência cardíaca crônica, anorexia e febre."
  ],
  resposta: "D",
  comentario: "Alternativa D, que reúne manifestações clínicas frequentemente associadas à leishmaniose visceral canina."
},


{
  id: 200,
  categoria: "Virais",
  doencaId: "geral",
  doenca: "Gastroenterites Virais em Pequenos Animais",

  pergunta: `Os vírus causadores de gastroenterites virais infecciosas em pequenos animais possuem comportamento diferente quanto ao seu hospedeiro animal. Em relação à apresentação das doenças nos cães e gatos, assinale a alternativa correta:`,

  alternativas: [
    "A) O tratamento dos animais com parvovirose e coronavirose baseia-se principalmente no controle da carga viral através de medicamentos antirretrovirais.",
    "B) O coronavírus canino e felino possuem apresentação clínica mista semelhante ao SARS-CoV-2.",
    "C) O vírus da panleucopenia felina pode provocar imunossupressão devido à destruição de células em divisão rápida, incluindo células da medula óssea e tecidos linfoides.",
    "D) O parvovírus felino, causador da PIF, acomete gatos de todas as idades, sendo mais grave nos jovens.",
    "E) A parvovirose canina caracteriza-se pela destruição do ápice das vilosidades intestinais, resultando em má absorção e diarreia moderada com ausência de sangue."
  ],

  resposta: "C",

  comentario:
    "A alternativa C está correta. O vírus da panleucopenia felina apresenta tropismo por células em intensa divisão, como as células da medula óssea, tecidos linfoides e criptas intestinais. A destruição dessas células pode provocar leucopenia, comprometimento da resposta imune e alterações gastrointestinais. A PIF, por sua vez, está associada ao coronavírus felino, e não ao parvovírus."
},


{
  id: 201,
  categoria: "Virais",
  doencaId: "febre-aftosa",
  doenca: "Febre Aftosa",

  pergunta: `A febre aftosa é uma doença viral altamente contagiosa, de grande importância para a defesa sanitária animal. Considerando as medidas de vigilância e resposta a uma suspeita da doença no Brasil, assinale a alternativa correta:`,

  alternativas: [
    "A) Não existe vacinação contra a doença, sendo o controle feito exclusivamente por meio de tratamento antimicrobiano.",
    "B) A febre aftosa provoca lesões vesiculares em bovinos e equinos, sendo ambas as espécies igualmente suscetíveis.",
    "C) Diante de suspeita de doença vesicular, deve ocorrer notificação imediata ao Serviço Veterinário Oficial, que realizará investigação, interdição e coleta de amostras, adotando as medidas sanitárias cabíveis.",
    "D) É uma doença de notificação facultativa, cuja vigilância é realizada somente durante campanhas de vacinação.",
    "E) O tratamento clínico dos animais é a principal estratégia de controle e erradicação da febre aftosa."
  ],

  resposta: "C",

  comentario:
    "A alternativa C está correta. A suspeita de doença vesicular deve ser comunicada imediatamente ao Serviço Veterinário Oficial. A investigação envolve avaliação clínica e epidemiológica, interdição da unidade quando indicada, coleta de amostras e realização de exames laboratoriais. As medidas de contenção e erradicação são definidas pelo serviço oficial."
},

{
  id: 202,
  categoria: "Virais",
  doencaId: "anemia-infecciosa-equina",
  doenca: "Anemia Infecciosa Equina",

  pergunta: `Um equino adulto apresenta resultado positivo em exame laboratorial para Anemia Infecciosa Equina (AIE). Considerando as características da doença e as medidas gerais de controle sanitário, assinale a alternativa correta:`,

  alternativas: [
    "A) A doença pode ser eliminada por meio de tratamento antiviral específico, dispensando medidas de isolamento.",
    "B) A vacinação anual é a principal medida de prevenção e controle da AIE.",
    "C) A doença é causada por uma bactéria do gênero Burkholderia e apresenta tratamento antimicrobiano específico.",
    "D) A AIE é uma enfermidade viral que pode acometer equídeos de qualquer idade e sexo, não possuindo tratamento ou vacina eficaz para sua prevenção e controle.",
    "E) A transmissão ocorre exclusivamente pela picada de mosquitos, não sendo necessária a adoção de medidas de biossegurança."
  ],

  resposta: "D",

  comentario:
    "A alternativa D está correta. A anemia infecciosa equina é causada por um lentivírus e pode acometer equinos, asininos e muares de qualquer idade e sexo. Não existe tratamento ou vacina eficaz. O controle depende de diagnóstico laboratorial, medidas de biossegurança, controle do trânsito e cumprimento das determinações do Serviço Veterinário Oficial."
},
{
  id: 203,
  categoria: "Virais",
  doencaId: "parvovirose",
  doenca: "Parvovirose Canina",

  pergunta: `A parvovirose é uma doença gastrentérica altamente contagiosa que acomete cães em todo o mundo, principalmente filhotes. Com relação a esta enfermidade, é correto afirmar que:`,

  alternativas: [
    "A) A forma neurológica é a apresentação clínica mais comum e grave da parvovirose canina.",
    "B) A vacinação dos filhotes, iniciada a partir de aproximadamente 6 a 8 semanas de idade e realizada conforme o esquema completo recomendado, é uma das principais medidas de prevenção.",
    "C) Apesar de ser uma doença gastrentérica, os cães acometidos apresentam fezes com aspecto normal.",
    "D) O vírus apresenta tropismo por qualquer tipo de célula, independentemente de sua atividade mitótica.",
    "E) Uma única dose de vacina aplicada no filhote garante proteção completa e duradoura contra a doença."
  ],

  resposta: "B",

  comentario:
    "A alternativa B está correta. A vacinação é a principal medida de prevenção da parvovirose canina. O esquema deve incluir doses seriadas durante a fase de filhote, com a última dose aplicada em idade adequada para reduzir a interferência dos anticorpos maternos. Uma única dose não garante proteção completa."
},



{
  id: 206,
  categoria: "Epidemiologia e Saúde Coletiva",
  doencaId: "geral",
  doenca: "Testes Diagnósticos",
  pergunta: `Durante a investigação de uma enfermidade infecciosa em um rebanho bovino, um animal que apresentava sinais clínicos compatíveis foi submetido a um teste diagnóstico. O resultado foi positivo e, posteriormente, a confirmação por um método de referência demonstrou que o animal realmente estava infectado.

Considerando a classificação dos resultados dos testes diagnósticos, assinale a alternativa correta:`,
  alternativas: [
    "A) O resultado é considerado falso positivo, pois o teste inicial não representa necessariamente a confirmação definitiva da enfermidade.",
    "B) O resultado é considerado verdadeiro negativo, uma vez que houve confirmação por um segundo método diagnóstico.",
    "C) O resultado é considerado verdadeiro positivo, pois o teste identificou corretamente um animal que realmente apresentava a enfermidade.",
    "D) O resultado é considerado falso negativo, pois a confirmação foi realizada por outro método diagnóstico.",
    "E) O resultado não pode ser classificado, pois a presença de sinais clínicos interfere na interpretação do teste."
  ],
  resposta: "C",
  comentario: "O verdadeiro positivo corresponde à situação em que o teste apresenta resultado positivo em um indivíduo que realmente possui a enfermidade. A confirmação por um método de referência demonstra que o resultado inicial estava correto. A classificação depende da comparação entre o resultado do teste e a condição real do animal."
},
{
  id: 207,
  categoria: "Epidemiologia e Saúde Coletiva",
  doencaId: "geral",
  doenca: "Testes Diagnósticos",
  pergunta: `Em um programa de vigilância sanitária, determinado teste é utilizado para identificar animais livres de uma enfermidade antes de sua movimentação entre propriedades. Um bovino apresenta resultado negativo no exame e, após investigação complementar, confirma-se que ele realmente não estava infectado.

Com base nessa situação, assinale a alternativa que classifica corretamente o resultado obtido:`,
  alternativas: [
    "A) Falso negativo, pois o teste não identificou a presença do agente etiológico.",
    "B) Verdadeiro negativo, pois o resultado negativo corresponde à ausência real da enfermidade.",
    "C) Falso positivo, pois a ausência de sinais clínicos não comprova a ausência de infecção.",
    "D) Verdadeiro positivo, pois o animal foi corretamente identificado como livre da enfermidade.",
    "E) Resultado inconclusivo, pois testes negativos não permitem avaliar a condição sanitária do animal."
  ],
  resposta: "B",
  comentario: "O verdadeiro negativo ocorre quando o teste apresenta resultado negativo em um indivíduo que realmente não possui a enfermidade. É importante compreender que um resultado negativo não é automaticamente um verdadeiro negativo: é necessário considerar a condição real do animal."
},
{
  id: 208,
  categoria: "Epidemiologia e Saúde Coletiva",
  doencaId: "geral",
  doenca: "Testes Diagnósticos",
  pergunta: `Em uma propriedade com histórico de determinada doença infecciosa, vários animais foram submetidos a um teste sorológico. Um dos bovinos apresentou resultado positivo, mas a investigação complementar demonstrou que ele não estava infectado. Uma possível explicação para esse resultado seria a ocorrência de reação cruzada com anticorpos produzidos contra outro agente.

Nesse contexto, como deve ser classificado o resultado do teste?`,
  alternativas: [
    "A) Verdadeiro positivo, pois a presença de anticorpos demonstra necessariamente infecção ativa.",
    "B) Verdadeiro negativo, pois a investigação complementar descartou a enfermidade.",
    "C) Falso negativo, pois o teste não conseguiu identificar corretamente a condição sanitária do animal.",
    "D) Falso positivo, pois o teste indicou a presença da enfermidade em um animal que não estava infectado.",
    "E) Resultado inconclusivo, pois reações cruzadas não interferem na interpretação dos testes sorológicos."
  ],
  resposta: "D",
  comentario: "O falso positivo ocorre quando o teste apresenta resultado positivo em um indivíduo que não possui a condição investigada. Reações cruzadas podem comprometer a especificidade de determinados testes, levando à identificação incorreta de animais como positivos."
},
{
  id: 209,
  categoria: "Epidemiologia e Saúde Coletiva",
  doencaId: "geral",
  doenca: "Testes Diagnósticos",
  pergunta: `Um cão apresenta sinais clínicos sugestivos de uma enfermidade transmitida por vetores. Entretanto, o teste diagnóstico realizado inicialmente apresenta resultado negativo. Diante da persistência da suspeita clínica, o médico-veterinário solicita novos exames, que confirmam a presença da infecção.

Considerando a discordância entre o resultado inicial e a condição real do paciente, assinale a alternativa correta:`,
  alternativas: [
    "A) O primeiro resultado foi um falso negativo, situação que pode ocorrer quando o animal está infectado, mas o teste não consegue detectar a doença.",
    "B) O primeiro resultado foi um falso positivo, pois o exame não identificou corretamente a presença da enfermidade.",
    "C) O primeiro resultado foi um verdadeiro negativo, pois exames iniciais negativos devem ser considerados conclusivos.",
    "D) O primeiro resultado foi um verdadeiro positivo, pois a suspeita clínica já indicava a presença da infecção.",
    "E) O primeiro resultado não pode ser classificado, pois testes realizados em momentos diferentes não podem ser comparados."
  ],
  resposta: "A",
  comentario: "O falso negativo ocorre quando o teste apresenta resultado negativo em um indivíduo que realmente está infectado. Entre as possíveis causas estão a realização do exame durante a janela diagnóstica, baixa carga do agente, quantidade insuficiente de material na amostra e limitações de sensibilidade do método."
},
{
  id: 210,
  categoria: "Epidemiologia e Saúde Coletiva",
  doencaId: "geral",
  doenca: "Testes Diagnósticos",
  pergunta: `Durante uma aula de diagnóstico veterinário, foram apresentados quatro resultados possíveis da comparação entre um teste diagnóstico e a condição real de um animal.

Analise as afirmativas:

I. Um verdadeiro positivo ocorre quando o teste identifica corretamente um animal que apresenta a enfermidade.

II. Um verdadeiro negativo ocorre quando o teste identifica corretamente um animal que não apresenta a enfermidade.

III. Um falso positivo corresponde a um resultado negativo em um animal que realmente está infectado.

IV. Um falso negativo pode ocorrer quando um animal infectado apresenta resultado negativo no teste diagnóstico.

V. A ocorrência de falsos positivos e falsos negativos demonstra que os testes diagnósticos possuem limitações e devem ser interpretados considerando o contexto clínico e epidemiológico.

Assinale a alternativa correta:`,
  alternativas: [
    "A) Apenas as afirmativas I, II e III estão corretas.",
    "B) Apenas as afirmativas I, III e IV estão corretas.",
    "C) Apenas as afirmativas II, III e V estão corretas.",
    "D) Apenas as afirmativas I, II, IV e V estão corretas.",
    "E) Todas as afirmativas estão corretas."
  ],
  resposta: "D",
  comentario: "As afirmativas I, II, IV e V estão corretas. A afirmativa III está incorreta porque descreve o falso negativo. O falso positivo ocorre quando o teste apresenta resultado positivo em um indivíduo que não possui a enfermidade. A interpretação dos resultados deve considerar as limitações do método, a suspeita clínica e o contexto epidemiológico."
},


{
  id: 211,
  categoria: "Prionicas",
  doencaId: "bse",
  doenca: "Encefalopatia Espongiforme Bovina (BSE)",
  pergunta: `Em uma propriedade de criação de bovinos, um animal adulto passou a apresentar alterações comportamentais progressivas, hiperestesia ao toque e aos estímulos sonoros, além de incoordenação motora. O médico-veterinário, considerando o caráter progressivo dos sinais neurológicos, levantou a suspeita de Encefalopatia Espongiforme Bovina (EEB).

A respeito da etiopatogenia dessa enfermidade, assinale a alternativa correta:`,
  alternativas: [
    "A) A doença é causada por um vírus neurotrópico que provoca inflamação intensa do tecido nervoso e destruição neuronal.",
    "B) O agente etiológico é uma bactéria resistente aos antimicrobianos, capaz de alcançar o sistema nervoso central por disseminação hematógena.",
    "C) A enfermidade é causada por uma proteína priônica anormal, denominada PrPSc, que induz a conversão de proteínas priônicas celulares normais em conformações anormais, promovendo seu acúmulo no sistema nervoso central.",
    "D) A doença é causada por um protozoário intracelular que invade os neurônios e provoca formação de vacúolos por multiplicação parasitária.",
    "E) O agente etiológico é uma toxina de origem alimentar que provoca alterações neurológicas reversíveis após sua eliminação do organismo."
  ],
  resposta: "C",
  comentario: "A EEB é uma encefalopatia espongiforme transmissível causada por príons. A proteína anormal PrPSc induz alterações conformacionais na proteína priônica celular normal (PrPC), favorecendo o acúmulo de proteínas anormais no sistema nervoso central e o desenvolvimento de alterações neurodegenerativas. Príons não possuem material genético, diferentemente de vírus, bactérias e protozoários."
},

{
  id: 212,
  categoria: "Prionicas",
  doencaId: "bse",
  doenca: "Encefalopatia Espongiforme Bovina (BSE)",
  pergunta: `A ocorrência de casos de Encefalopatia Espongiforme Bovina no Reino Unido, na década de 1980, esteve associada a práticas de alimentação animal que permitiam a exposição dos bovinos a tecidos contaminados por príons. Como medida de controle, foram implementadas restrições ao uso de determinados ingredientes de origem animal na alimentação de ruminantes.

Considerando a epidemiologia e as medidas de prevenção da EEB, analise as afirmativas:

I. A ingestão de alimentos contaminados por príons está associada à transmissão da forma clássica da EEB.

II. A proibição do fornecimento de determinadas proteínas de origem animal aos ruminantes constitui uma medida importante de prevenção.

III. A transmissão da EEB clássica ocorre predominantemente pelo contato direto entre bovinos infectados e suscetíveis.

IV. O controle da fabricação e da composição das rações contribui para reduzir o risco de circulação do agente na cadeia produtiva.

Assinale a alternativa correta:`,
  alternativas: [
    "A) Apenas I e II estão corretas.",
    "B) Apenas II e III estão corretas.",
    "C) Apenas I, III e IV estão corretas.",
    "D) Apenas I, II e IV estão corretas.",
    "E) Todas as afirmativas estão corretas."
  ],
  resposta: "D",
  comentario: "As afirmativas I, II e IV estão corretas. A forma clássica da EEB está associada principalmente à ingestão de alimentos contaminados por príons. O controle da alimentação de ruminantes e da fabricação de rações é essencial para prevenir a exposição ao agente. A afirmativa III está incorreta, pois o contato direto entre bovinos não representa a principal via de transmissão da forma clássica."
},

{
  id: 213,
  categoria: "Prionicas",
  doencaId: "bse",
  doenca: "Encefalopatia Espongiforme Bovina (BSE)",
  pergunta: `Um bovino adulto apresenta sinais neurológicos progressivos, incluindo ataxia, hiperestesia e alterações comportamentais. Diante da suspeita de EEB, o animal é submetido aos procedimentos de investigação sanitária. Após sua morte, amostras do sistema nervoso central são encaminhadas para análise laboratorial.

Considerando os métodos utilizados na investigação da enfermidade, assinale a alternativa que apresenta uma abordagem adequada para a confirmação laboratorial:`,
  alternativas: [
    "A) Cultura bacteriana do líquido cefalorraquidiano, seguida de antibiograma para identificação do agente.",
    "B) Detecção da proteína priônica anormal em tecido encefálico por métodos como imuno-histoquímica ou Western blot.",
    "C) Hemograma completo, pois a presença de leucocitose é um achado específico da EEB.",
    "D) Pesquisa de anticorpos séricos específicos, uma vez que os príons induzem resposta humoral característica e facilmente detectável.",
    "E) Exame parasitológico de fezes, utilizado para identificar a forma infectante responsável pela neurodegeneração."
  ],
  resposta: "B",
  comentario: "A confirmação laboratorial da EEB é realizada principalmente pela detecção da proteína priônica anormal em tecidos do sistema nervoso central. Métodos como imuno-histoquímica e Western blot são utilizados nessa investigação. A avaliação clínica permite estabelecer a suspeita, mas não confirma isoladamente a enfermidade. Não há teste sorológico convencional baseado em anticorpos que seja utilizado para confirmar a EEB."
},

{
  id: 214,
  categoria: "Prionicas",
  doencaId: "bse",
  doenca: "Encefalopatia Espongiforme Bovina (BSE)",
  pergunta: `As encefalopatias espongiformes transmissíveis são caracterizadas por alterações neurodegenerativas associadas ao acúmulo de proteínas priônicas anormais. Na EEB, a análise histopatológica do sistema nervoso central pode revelar alterações características.

A respeito dos achados anatomopatológicos dessa enfermidade, assinale a alternativa correta:`,
  alternativas: [
    "A) Observa-se principalmente infiltrado purulento intenso, com formação de abscessos disseminados no encéfalo.",
    "B) A principal alteração é a presença de granulomas multifocais, característicos de infecções bacterianas crônicas.",
    "C) A lesão característica consiste em necrose hemorrágica extensa do tecido nervoso, associada à intensa infiltração de neutrófilos.",
    "D) A principal alteração é a formação de cistos parasitários no neurópilo, acompanhada de reação inflamatória eosinofílica.",
    "E) A doença apresenta vacuolização do neurópilo e dos corpos celulares neuronais, conferindo ao tecido nervoso aspecto espongiforme."
  ],
  resposta: "E",
  comentario: "A EEB caracteriza-se histopatologicamente pela vacuolização do neurópilo e dos corpos celulares neuronais, conferindo ao tecido nervoso aspecto espongiforme. Essas alterações estão relacionadas ao processo neurodegenerativo associado ao acúmulo de proteína priônica anormal. Não se trata de uma enfermidade caracterizada por processo inflamatório purulento ou formação de granulomas."
},

{
  id: 215,
  categoria: "Prionicas",
  doencaId: "bse",
  doenca: "Encefalopatia Espongiforme Bovina (BSE)",
  pergunta: `A Encefalopatia Espongiforme Bovina apresenta importância sanitária e econômica, além de relevância para a saúde pública. A forma clássica da enfermidade está relacionada à ocorrência da variante da doença de Creutzfeldt-Jakob em humanos.

Considerando a abordagem de Saúde Única e as medidas de vigilância da EEB, analise as afirmativas:

I. A forma clássica da EEB apresenta importância zoonótica, estando associada à variante da doença de Creutzfeldt-Jakob em humanos.

II. A suspeita de EEB deve ser comunicada ao Serviço Veterinário Oficial para investigação e adoção das medidas sanitárias pertinentes.

III. A ausência de tratamento curativo torna desnecessária a investigação laboratorial dos animais suspeitos.

IV. A vigilância epidemiológica e o controle de subprodutos de origem animal são fundamentais para prevenir a circulação do agente.

V. Os príons apresentam elevada resistência a procedimentos convencionais de inativação, exigindo cuidados específicos de biossegurança.

Assinale a alternativa correta:`,
  alternativas: [
    "A) Apenas I, II e III estão corretas.",
    "B) Apenas I, III e IV estão corretas.",
    "C) Apenas I, II, IV e V estão corretas.",
    "D) Apenas II, III e V estão corretas.",
    "E) Todas as afirmativas estão corretas."
  ],
  resposta: "C",
  comentario: "As afirmativas I, II, IV e V estão corretas. A forma clássica da EEB está associada à variante da doença de Creutzfeldt-Jakob em humanos. A suspeita deve ser comunicada ao Serviço Veterinário Oficial, e a vigilância, o controle alimentar e o controle de subprodutos são medidas essenciais. A afirmativa III está incorreta: mesmo sem tratamento curativo, a investigação laboratorial é indispensável para a confirmação e o controle sanitário da enfermidade."
},


{
  id: 216,
  categoria: "Prionicas",
  doencaId: "scrapie",
  doenca: "Scrapie (Tremor Epizoótico)",
  pergunta: `Em uma propriedade de criação de ovinos, um animal adulto apresenta prurido intenso, perda de lã, tremores e dificuldade progressiva de locomoção. O produtor relata que o animal frequentemente esfrega o corpo contra cercas e estruturas da instalação, provocando lesões na pele.

Considerando a apresentação clínica da Scrapie, assinale a alternativa correta:`,
  alternativas: [
    "A) O prurido ocorre exclusivamente devido à presença de ectoparasitas, sendo incompatível com enfermidades priônicas.",
    "B) A doença caracteriza-se por alterações neurológicas progressivas, podendo apresentar prurido intenso, perda de lã, tremores e ataxia.",
    "C) A principal manifestação clínica é a ocorrência de diarreia hemorrágica aguda, acompanhada de febre elevada.",
    "D) A enfermidade apresenta evolução rápida, com recuperação espontânea após a eliminação do agente infeccioso.",
    "E) A perda de lã é provocada diretamente pela invasão de fungos nos folículos pilosos, sem comprometimento neurológico."
  ],
  resposta: "B",
  comentario: "A Scrapie é uma encefalopatia espongiforme transmissível que apresenta evolução progressiva e fatal. Na forma clássica, o prurido intenso é uma manifestação característica, podendo provocar atrito contra objetos, perda de lã e lesões cutâneas secundárias. Tremores e ataxia também podem ocorrer. Os sinais clínicos devem ser associados à investigação epidemiológica e laboratorial."
},

{
  id: 217,
  categoria: "Prionicas",
  doencaId: "scrapie",
  doenca: "Scrapie (Tremor Epizoótico)",
  pergunta: `Em um rebanho ovino, foram identificados animais com suspeita de Scrapie. Durante a investigação epidemiológica, o médico-veterinário observou que a ocorrência de casos estava relacionada a áreas utilizadas para parição de fêmeas infectadas.

Sobre a transmissão da forma clássica da Scrapie, analise as afirmativas:

I. Placenta e líquidos fetais de animais infectados podem representar fontes de contaminação.

II. O ambiente de parição pode permanecer contaminado por príons, expondo outros animais suscetíveis.

III. A transmissão ocorre exclusivamente por picadas de artrópodes hematófagos.

IV. O contato com materiais contaminados durante o período perinatal apresenta importância epidemiológica.

Assinale a alternativa correta:`,
  alternativas: [
    "A) Apenas I e II estão corretas.",
    "B) Apenas I e III estão corretas.",
    "C) Apenas II e III estão corretas.",
    "D) Apenas I, II e IV estão corretas.",
    "E) Todas as afirmativas estão corretas."
  ],
  resposta: "D",
  comentario: "As afirmativas I, II e IV estão corretas. Na forma clássica da Scrapie, a exposição a placenta, líquidos fetais e outros materiais contaminados durante o período perinatal tem grande importância. Os príons podem persistir no ambiente e favorecer a transmissão. A afirmativa III está incorreta porque artrópodes hematófagos não representam a via de transmissão característica da enfermidade."
},

{
  id: 218,
  categoria: "Prionicas",
  doencaId: "scrapie",
  doenca: "Scrapie (Tremor Epizoótico)",
  pergunta: `Uma propriedade iniciou um programa de melhoramento genético de ovinos após a identificação de casos de Scrapie na região. O médico-veterinário orientou a avaliação de polimorfismos no gene PRNP, relacionados à susceptibilidade dos animais à enfermidade.

A respeito dessa estratégia, assinale a alternativa correta:`,
  alternativas: [
    "A) A análise genética permite identificar diretamente a presença de príons no sistema nervoso central.",
    "B) Todos os ovinos apresentam a mesma susceptibilidade à Scrapie, independentemente de seu genótipo.",
    "C) Determinados genótipos do gene PRNP estão associados à maior resistência ou susceptibilidade, podendo auxiliar em programas de seleção genética.",
    "D) A seleção genética substitui completamente a vigilância epidemiológica e os cuidados de biossegurança.",
    "E) A presença de um genótipo associado à resistência garante que o animal nunca entre em contato com o agente."
  ],
  resposta: "C",
  comentario: "Polimorfismos no gene PRNP influenciam a susceptibilidade dos ovinos à Scrapie. A seleção de animais com genótipos associados à resistência pode ser utilizada como ferramenta complementar de controle. Entretanto, essa estratégia não substitui a vigilância, o manejo sanitário e a prevenção da exposição ao agente."
},

{
  id: 219,
  categoria: "Prionicas",
  doencaId: "scrapie",
  doenca: "Scrapie (Tremor Epizoótico)",
  pergunta: `Um ovino apresenta sinais neurológicos progressivos e histórico compatível com exposição à Scrapie. Após a morte do animal, amostras de encéfalo são encaminhadas ao laboratório para investigação.

Considerando os métodos diagnósticos utilizados para a enfermidade, assinale a alternativa correta:`,
  alternativas: [
    "A) A confirmação é realizada exclusivamente por cultura bacteriana do tecido encefálico.",
    "B) A identificação de anticorpos séricos específicos é o principal método confirmatório.",
    "C) A presença de leucocitose intensa é considerada patognomônica da doença.",
    "D) O diagnóstico depende da identificação de ovos do agente em amostras fecais.",
    "E) A imuno-histoquímica e o Western blot podem ser utilizados para detectar a proteína priônica anormal nos tecidos."
  ],
  resposta: "E",
  comentario: "A confirmação laboratorial da Scrapie envolve a detecção da proteína priônica anormal (PrPSc). Métodos como imuno-histoquímica e Western blot são utilizados nessa investigação. A histopatologia também pode revelar vacuolização neuronal e do neurópilo. Não se trata de uma infecção bacteriana ou parasitária, e a sorologia convencional não é utilizada como método confirmatório."
},

{
  id: 220,
  categoria: "Prionicas",
  doencaId: "scrapie",
  doenca: "Scrapie (Tremor Epizoótico)",
  pergunta: `Durante uma atividade de vigilância sanitária, foram discutidas as diferenças entre as formas clássica e atípica da Scrapie. O médico-veterinário destacou que essas apresentações possuem características epidemiológicas distintas.

Sobre as formas da enfermidade, assinale a alternativa correta:`,
  alternativas: [
    "A) A forma clássica está associada à transmissão entre animais e à exposição a materiais contaminados, enquanto a forma atípica apresenta características epidemiológicas distintas e é frequentemente identificada em animais mais velhos.",
    "B) A forma atípica é transmitida exclusivamente por artrópodes, enquanto a forma clássica é causada por bactérias.",
    "C) Ambas as formas são causadas por vírus diferentes e apresentam resposta satisfatória ao tratamento antiviral.",
    "D) A forma clássica ocorre exclusivamente em caprinos, enquanto a forma atípica acomete somente bovinos.",
    "E) A forma atípica é obrigatoriamente transmitida por contato direto, apresentando maior capacidade de disseminação entre animais que a forma clássica."
  ],
  resposta: "A",
  comentario: "A Scrapie clássica é uma forma transmissível, associada à exposição a materiais contaminados e à transmissão no período perinatal. A forma atípica apresenta características epidemiológicas distintas, sendo frequentemente identificada em animais mais velhos e sem evidência consistente de transmissão natural entre animais. Ambas são enfermidades priônicas."
},

{
  id: 221,
  categoria: "Prionicas",
  doencaId: "cwd",
  doenca: "Doença Debilitante Crônica (CWD)",
  pergunta: `Em uma região de criação de cervídeos, um animal adulto passou a apresentar emagrecimento progressivo, apatia, hipersalivação e incoordenação motora. O histórico epidemiológico revelou que outros animais da região também apresentavam alterações semelhantes.

Considerando a apresentação clínica da Doença Debilitante Crônica (CWD), assinale a alternativa correta:`,
  alternativas: [
    "A) A enfermidade caracteriza-se por episódios agudos de febre e diarreia, com recuperação espontânea.",
    "B) O emagrecimento ocorre exclusivamente por deficiência nutricional, não estando associado a alterações neurológicas.",
    "C) A hipersalivação é um sinal exclusivo de intoxicação por plantas e descarta a possibilidade de doença priônica.",
    "D) A CWD pode provocar emagrecimento progressivo, alterações comportamentais, hipersalivação e sinais neurológicos, apresentando evolução fatal.",
    "E) A doença acomete exclusivamente bovinos jovens e não apresenta importância para populações de cervídeos."
  ],
  resposta: "D",
  comentario: "A CWD é uma encefalopatia espongiforme transmissível que acomete diferentes espécies de cervídeos. Entre suas manifestações estão emagrecimento progressivo, apatia, alterações comportamentais, hipersalivação, aumento da ingestão de água e incoordenação motora. A enfermidade apresenta evolução progressiva e fatal."
},

{
  id: 222,
  categoria: "Prionicas",
  doencaId: "cwd",
  doenca: "Doença Debilitante Crônica (CWD)",
  pergunta: `Uma equipe de vigilância identificou casos de CWD em uma população de cervídeos de vida livre. Durante a investigação, observou-se que animais suscetíveis frequentavam áreas de alimentação e dessedentação utilizadas anteriormente por indivíduos infectados.

Considerando a epidemiologia da enfermidade, analise as afirmativas:

I. A transmissão pode ocorrer por contato direto entre animais infectados e suscetíveis.

II. Saliva, urina e fezes podem contribuir para a contaminação ambiental.

III. Os príons podem persistir no ambiente, favorecendo a exposição de animais suscetíveis.

IV. A transmissão ocorre exclusivamente pela ingestão de carne contaminada, não existindo transmissão ambiental.

Assinale a alternativa correta:`,
  alternativas: [
    "A) Apenas I e II estão corretas.",
    "B) Apenas II e IV estão corretas.",
    "C) Apenas I, II e III estão corretas.",
    "D) Apenas I, III e IV estão corretas.",
    "E) Todas as afirmativas estão corretas."
  ],
  resposta: "C",
  comentario: "As afirmativas I, II e III estão corretas. A CWD pode ser transmitida pelo contato direto e pela exposição a secreções, excreções e ambientes contaminados. Os príons apresentam elevada persistência ambiental, podendo permanecer no solo e em outros componentes do ambiente por períodos prolongados. A afirmativa IV está incorreta porque a transmissão ambiental é epidemiologicamente importante."
},

{
  id: 223,
  categoria: "Prionicas",
  doencaId: "cwd",
  doenca: "Doença Debilitante Crônica (CWD)",
  pergunta: `Um cervídeo encontrado morto em uma área com ocorrência de CWD foi encaminhado para investigação laboratorial. O laboratório recebeu amostras do tronco encefálico e de tecidos linfoides para pesquisa da proteína priônica anormal.

Sobre o diagnóstico laboratorial da CWD, assinale a alternativa correta:`,
  alternativas: [
    "A) O diagnóstico é confirmado pela identificação de bactérias no líquido cefalorraquidiano.",
    "B) A detecção da proteína priônica anormal pode ser realizada por métodos como imuno-histoquímica e ELISA, utilizando tecidos apropriados, como o óbex e linfonodos retrofaríngeos.",
    "C) A confirmação depende exclusivamente da identificação de anticorpos específicos no soro.",
    "D) A cultura viral do tecido nervoso é o método de eleição para identificação do agente.",
    "E) A presença de eosinofilia intensa no hemograma confirma a enfermidade."
  ],
  resposta: "B",
  comentario: "A confirmação da CWD depende da detecção da proteína priônica anormal em tecidos apropriados. O óbex, localizado no tronco encefálico, e os linfonodos retrofaríngeos são amostras importantes para a investigação. Imuno-histoquímica e ELISA são métodos utilizados nos protocolos diagnósticos. A escolha das amostras e dos testes deve seguir as orientações laboratoriais oficiais."
},

{
  id: 224,
  categoria: "Prionicas",
  doencaId: "cwd",
  doenca: "Doença Debilitante Crônica (CWD)",
  pergunta: `Em uma área de ocorrência de CWD, pesquisadores identificaram que a proteína priônica anormal pode permanecer no solo e contribuir para a exposição de cervídeos suscetíveis. Essa característica representa um desafio para os programas de controle da enfermidade.

A respeito da persistência ambiental dos príons, assinale a alternativa correta:`,
  alternativas: [
    "A) Os príons são rapidamente destruídos pela exposição ambiental, não representando risco após a eliminação do animal infectado.",
    "B) A contaminação ambiental ocorre exclusivamente por aerossóis produzidos durante a respiração dos animais.",
    "C) A permanência dos príons no ambiente é dependente da multiplicação bacteriana no solo.",
    "D) A lavagem convencional das instalações garante a eliminação completa da infectividade dos príons.",
    "E) A elevada resistência dos príons à degradação ambiental pode favorecer a manutenção da infectividade no solo e dificultar o controle da doença."
  ],
  resposta: "E",
  comentario: "Os príons apresentam elevada resistência a processos convencionais de degradação e podem permanecer associados ao solo e a outros componentes ambientais por períodos prolongados. Essa característica favorece a exposição de animais suscetíveis e dificulta o controle da CWD, tornando a prevenção da contaminação ambiental uma medida importante."
},

{
  id: 225,
  categoria: "Prionicas",
  doencaId: "cwd",
  doenca: "Doença Debilitante Crônica (CWD)",
  pergunta: `A CWD apresenta importância para a conservação de populações de cervídeos e para a saúde pública. Embora não existam casos confirmados de infecção humana pela doença, autoridades sanitárias recomendam medidas preventivas relacionadas ao manejo e ao consumo de animais provenientes de áreas afetadas.

Considerando a abordagem de Saúde Única, analise as afirmativas:

I. A CWD acomete diferentes espécies de cervídeos, incluindo cervos, alces e renas.

II. A vigilância epidemiológica e o monitoramento laboratorial são importantes para identificar a circulação do agente.

III. A ausência de casos humanos confirmados significa que o consumo de carne de animais positivos é considerado seguro.

IV. Recomenda-se evitar o consumo de carne de animais com suspeita ou confirmação de CWD.

V. O controle da movimentação de animais e a redução da contaminação ambiental são medidas importantes de prevenção.

Assinale a alternativa correta:`,
  alternativas: [
    "A) Apenas I, II e III estão corretas.",
    "B) Apenas II, III e IV estão corretas.",
    "C) Apenas I, III e V estão corretas.",
    "D) Apenas I, II, IV e V estão corretas.",
    "E) Todas as afirmativas estão corretas."
  ],
  resposta: "D",
  comentario: "As afirmativas I, II, IV e V estão corretas. A CWD acomete diferentes cervídeos e exige vigilância epidemiológica, monitoramento laboratorial e medidas de controle ambiental. Embora não existam casos confirmados de infecção humana, a possibilidade de transmissão entre espécies não foi definitivamente descartada. Por precaução, recomenda-se não consumir carne de animais positivos ou suspeitos."
},


{
  id: 226,
  categoria: "Prionicas",
  doencaId: "bse",
  doenca: "Encefalopatia Espongiforme Bovina (BSE)",
  pergunta: `A Encefalopatia Espongiforme Bovina (BSE), conhecida popularmente como doença da vaca louca, é uma enfermidade priônica de grande importância sanitária e econômica. Considerando as medidas de prevenção e controle dessa doença, assinale a alternativa correta:`,
  alternativas: [
    "A) A vacinação periódica do rebanho é a principal medida para impedir a circulação do agente priônico.",
    "B) A utilização de farinhas de carne e ossos de origem animal na alimentação de bovinos é recomendada para reduzir o risco de transmissão.",
    "C) O controle da alimentação animal, com a proibição do fornecimento de proteínas de origem animal proibidas para ruminantes, associado à vigilância epidemiológica e à rastreabilidade dos animais, constitui medida fundamental de prevenção.",
    "D) A prevenção depende exclusivamente do tratamento dos animais infectados com medicamentos antiparasitários.",
    "E) A pasteurização convencional dos alimentos destinados aos bovinos é suficiente para eliminar completamente os príons e impedir a transmissão."
  ],
  resposta: "C",
  comentario: "A prevenção da BSE depende principalmente do controle rigoroso da alimentação dos bovinos, especialmente da proibição do fornecimento de proteínas de origem animal proibidas para ruminantes, como farinhas de carne e ossos contaminadas. Também são fundamentais a vigilância epidemiológica, a rastreabilidade dos animais, o controle de ingredientes utilizados na fabricação de rações e a remoção de materiais de risco especificados da cadeia alimentar. Não existe vacina ou tratamento capaz de eliminar a infecção priônica."
},

];

