export type Diagnostico = {

  id: string;

  nome: string;

  categoria: string;

  tipo: string;
  
 caracteristicas?: string[];
 
  finalidade: string[];

  descricao: string;

  principio: string;

  aplicacao: string[];

  vantagens: string[];

  limitacoes: string[];

  imagem: string;

  doencasRelacionadas: string[];
  

};




export const diagnosticos: Diagnostico[] = [



{
  id: "pcr",

  nome: "PCR (Reação em Cadeia da Polimerase)",

  categoria: "Diagnóstico Molecular",

  tipo: "Direto",

  finalidade: [
    "Confirmatório"
  ],
caracteristicas: [
  "Amplificação de DNA/RNA",
  "Detecção direta do agente"
],
  descricao:
    "Método molecular baseado na detecção do material genético do agente infeccioso.",

  principio:
    "Realiza amplificação de sequências específicas de DNA ou RNA permitindo a identificação do agente.",

  aplicacao: [

    "Detecção de vírus",

    "Detecção de bactérias",

    "Identificação de agentes infecciosos"

  ],

  vantagens: [

    "Alta sensibilidade",

    "Alta especificidade",

    "Detecção rápida do agente"

  ],

  limitacoes: [

    "Necessita equipamento especializado",

    "Depende da qualidade da amostra"

  ],

  imagem:
    "/images/diagnosticos/pcr.jpg",

  doencasRelacionadas: [

    "Cinomose",

    "PIF (Peritonite Infecciosa Felina)",

    "Leptospirose",

    "Brucelose",

    "Mormo",

    "Anemia infecciosa equina",

    "Parvovirose",

    "Panleucopenia felina"

  ]

},






{
  id: "cultura-bacteriologica",

  nome: "Cultura Bacteriológica",

  categoria: "Diagnóstico Microbiológico",

  tipo: "Direto",

  finalidade: [
    "Confirmatório"
  ],

  caracteristicas: [
  "Isolamento do agente",
  "Crescimento bacteriano"
],

  descricao:
    "Método utilizado para isolamento e identificação de bactérias presentes em amostras biológicas.",

  principio:
    "Baseia-se no crescimento bacteriano em meios específicos seguido da identificação do agente.",

  aplicacao: [

    "Isolamento bacteriano",

    "Identificação do agente",

    "Antibiograma"

  ],

  vantagens: [

    "Permite identificar o agente causador",

    "Avalia sensibilidade aos antimicrobianos"

  ],

  limitacoes: [

    "Resultado pode ser demorado",

    "Necessita coleta adequada"

  ],

  imagem:
    "/images/diagnosticos/cultura-bacteriologica.jpg",

  doencasRelacionadas: [

    "Brucelose",

    "Mormo",

    "Garrotilho",

    "Leptospirose"

  ]

},




{
  id: "maleina",

  nome: "Teste da Maleína",

  categoria: "Teste Imunológico",

  tipo: "Indireto",

  finalidade: [
    "Triagem"
  ],

  caracteristicas: [
    "Hipersensibilidade tardia",
    "Resposta imunológica celular"
  ],

  descricao:
    "Teste baseado na resposta de hipersensibilidade tardia após a aplicação de maleína, utilizado como método auxiliar na identificação de animais suspeitos de mormo.",

  principio:
    "A maleína, derivada de proteínas de Burkholderia mallei, é aplicada no animal e a resposta inflamatória local indica sensibilização imunológica ao agente.",

  aplicacao: [

    "Triagem de animais suspeitos de mormo",

    "Programas de controle sanitário",

    "Investigação epidemiológica"

  ],

  vantagens: [

    "Método clássico para investigação do mormo",

    "Auxilia na identificação de animais suspeitos"

  ],

  limitacoes: [

    "Pode apresentar resultados influenciados pelo estado imunológico do animal",

    "Necessita interpretação junto a outros exames",

    "Não substitui métodos confirmatórios"

  ],

  imagem:
    "/images/diagnosticos/maleina.jpg",

  doencasRelacionadas: [

    "Mormo"

  ]

},



{
  id: "elisa",

  nome: "ELISA",

  categoria: "Método Sorológico",

  tipo: "Indireto",

  finalidade: [
    "Triagem"
  ],
caracteristicas: [
  "Reagente marcado",
  "Reação antígeno-anticorpo"
],
  descricao:
    "Teste imunoenzimático utilizado para detectar antígenos ou anticorpos relacionados a agentes infecciosos.",

  principio:
    "Baseia-se na ligação entre antígeno e anticorpo associada a uma reação enzimática que gera um sinal detectável.",

  aplicacao: [

    "Detecção de anticorpos",

    "Detecção de antígenos",

    "Avaliação sorológica"

  ],

  vantagens: [

    "Boa sensibilidade",

    "Permite análise de várias amostras simultaneamente"

  ],

  limitacoes: [

    "Pode ocorrer reação cruzada",

    "Depende do momento da coleta"

  ],

  imagem:
    "/images/diagnosticos/elisa.jpg",

  doencasRelacionadas: [

    "Leishmaniose",

    "Leptospirose",

    "Brucelose",

    "Anemia infecciosa equina",

    "Cinomose",

    "Parvovirose",

    "Panleucopenia felina"

  ]

},
{
  id: "famacha",

  nome: "FAMACHA®",

  categoria: "Avaliação Clínico-Parasitológica",

  tipo: "Clínico",

  finalidade: [
    "Triagem"
  ],
caracteristicas: [
  "Avaliação clínica",
  "Método visual"
],
  descricao:
    "Método utilizado para avaliar o grau de anemia em pequenos ruminantes por meio da coloração da conjuntiva ocular.",

  principio:
    "Compara a coloração da mucosa ocular com uma escala visual relacionada ao grau de anemia causada principalmente por Haemonchus contortus.",

  aplicacao: [

    "Controle de verminoses em ovinos e caprinos",

    "Tratamento seletivo de animais",

    "Monitoramento de rebanhos"

  ],

  vantagens: [

    "Baixo custo",

    "Resultado rápido",

    "Reduz tratamentos desnecessários"

  ],

  limitacoes: [

    "Não identifica diretamente o parasita",

    "Depende da avaliação do observador"

  ],

  imagem:
    "/images/diagnosticos/famacha.jpg",

  doencasRelacionadas: [

    "Haemoncose"

  ]

},







{
  id: "opg",

  nome: "OPG (Ovos por Grama de Fezes)",

  categoria: "Diagnóstico Parasitológico",

  tipo: "Direto",

  finalidade: [
    "Confirmatório"
  ],
caracteristicas: [
  "Contagem de ovos",
  "Diagnóstico parasitológico"
],
  descricao:
    "Exame parasitológico utilizado para quantificar ovos de helmintos presentes nas fezes dos animais.",

  principio:
    "Baseia-se na contagem de ovos eliminados nas fezes para estimar a carga parasitária.",

  aplicacao: [

    "Diagnóstico de helmintoses",

    "Monitoramento de rebanhos",

    "Avaliação de tratamentos antiparasitários"

  ],

  vantagens: [

    "Método simples",

    "Auxilia no controle de verminoses",

    "Permite acompanhamento do rebanho"

  ],

  limitacoes: [

    "Nem sempre identifica a espécie do parasita",

    "Necessita interpretação junto aos sinais clínicos"

  ],

  imagem:
    "/images/diagnosticos/opg.jpg",

  doencasRelacionadas: [

    "Haemoncose",

    "Tricostrongilose",

    "Monieziose"

  ]

},







{
  id: "microscopia",

  nome: "Microscopia",

  categoria: "Diagnóstico Laboratorial",

  tipo: "Direto",

  finalidade: [
    "Confirmatório"
  ],
caracteristicas: [
  "Visualização direta",

],
  descricao:
    "Método baseado na observação direta de agentes ou estruturas presentes nas amostras.",

  principio:
    "Utiliza equipamentos ópticos para visualização e identificação de estruturas microscópicas.",

  aplicacao: [

    "Pesquisa de parasitas",

    "Avaliação celular",

    "Identificação de estruturas infecciosas"

  ],

  vantagens: [

    "Método direto",

    "Pode fornecer diagnóstico rápido"

  ],

  limitacoes: [

    "Depende da experiência do avaliador",

    "Sensibilidade variável"

  ],

  imagem:
    "/images/diagnosticos/microscopia.jpg",

  doencasRelacionadas: [

    "Babesiose",

    "Anaplasmose",

    "Haemoncose",

    "Tricostrongilose",

    "Monieziose"

  ]

},
{
  id: "imunocromatografia",

  nome: "Teste Imunocromatográfico",

  categoria: "Método Sorológico",

  tipo: "Indireto",

  finalidade: [
    "Triagem"
  ],
caracteristicas: [
  "Reagente marcado",
  "Teste rápido"
],
  descricao:
    "Teste rápido utilizado para detecção de antígenos ou anticorpos em amostras biológicas.",

  principio:
    "Baseia-se na migração da amostra por uma membrana contendo reagentes específicos que geram um resultado visual.",

  aplicacao: [

    "Triagem de doenças infecciosas",

    "Testes rápidos em campo",

    "Detecção de antígenos ou anticorpos"

  ],

  vantagens: [

    "Resultado rápido",

    "Fácil execução",

    "Pode ser realizado fora do laboratório"

  ],

  limitacoes: [

    "Pode apresentar menor sensibilidade",

    "Alguns resultados necessitam confirmação"

  ],

  imagem:
    "/images/diagnosticos/imunocromatografia.jpg",

  doencasRelacionadas: [

    "Leishmaniose",

    "Cinomose",

    "Parvovirose",

    "Panleucopenia felina"

  ]

},






{
  id: "imunodifusao",

  nome: "Imunodifusão em Gel de Agarose (IDGA)",

  categoria: "Método Sorológico",

  tipo: "Indireto",

 caracteristicas: [
  "Reagente não marcado",
  "Precipitação"
],

  finalidade: [
    "Confirmatório"
  ],

  descricao:
    "Método baseado na reação entre antígenos e anticorpos em meio gelificado.",

  principio:
    "A formação de linhas de precipitação indica uma reação específica entre antígeno e anticorpo.",

  aplicacao: [

    "Diagnóstico sorológico",

    "Detecção de anticorpos específicos",

    "Controle sanitário"

  ],

  vantagens: [

    "Boa especificidade",

    "Método consolidado"

  ],

  limitacoes: [

    "Resultado mais lento",

    "Necessita interpretação técnica"

  ],

  imagem:
    "/images/diagnosticos/imunodifusao.jpg",

  doencasRelacionadas: [

    "Anemia infecciosa equina"

  ]

},







{
  id: "aat",

  nome: "Antígeno Acidificado Tamponado (AAT)",

  categoria: "Método Sorológico",

  tipo: "Indireto",

  finalidade: [
    "Triagem"
  ],
caracteristicas: [
  "Aglutinação",
  "Reagente não marcado"
],
  descricao:
    "Teste sorológico utilizado como método de triagem para diagnóstico da brucelose.",

  principio:
    "Baseia-se na aglutinação de anticorpos presentes no soro com antígenos específicos de Brucella spp.",

  aplicacao: [

    "Triagem de brucelose",

    "Programas sanitários",

    "Controle de rebanhos"

  ],

  vantagens: [

    "Alta sensibilidade",

    "Execução simples",

    "Resultado rápido"

  ],

  limitacoes: [

    "Necessita confirmação em resultados positivos",

    "Pode ocorrer reação cruzada"

  ],

  imagem:
    "/images/diagnosticos/aat.jpg",

  doencasRelacionadas: [

    "Brucelose"

  ]

},
{
  id: "2-mercaptoetanol",

  nome: "2-MercaptoEtanol",

  categoria: "Método Sorológico",

  tipo: "Indireto",

  finalidade: [
    "Confirmatório"
  ],
caracteristicas: [
  "Aglutinação",
  "Reagente não marcado"
],
  descricao:
    "Teste sorológico utilizado como confirmação da brucelose após testes de triagem.",

  principio:
    "Avalia a presença de anticorpos específicos após tratamento do soro com 2-mercaptoetanol.",

  aplicacao: [

    "Confirmação de brucelose",

    "Avaliação sorológica"

  ],

  vantagens: [

    "Maior especificidade",

    "Auxilia na confirmação diagnóstica"

  ],

  limitacoes: [

    "Necessita laboratório especializado",

    "Interpretação técnica necessária"

  ],

  imagem:
    "/images/diagnosticos/2-mercaptoetanol.jpg",

  doencasRelacionadas: [

    "Brucelose"

  ]

},






{
  id: "mat",

  nome: "MAT (Teste de Microaglutinação)",

  categoria: "Método Sorológico",

  tipo: "Indireto",

  finalidade: [
    "Confirmatório"
  ],
caracteristicas: [
  "Microaglutinação",
  "Reagente não marcado"
],
  descricao:
    "Teste sorológico utilizado para detecção de anticorpos contra Leptospira spp.",

  principio:
    "Baseia-se na reação entre anticorpos presentes no soro e antígenos de diferentes sorovares de Leptospira.",

  aplicacao: [

    "Diagnóstico de leptospirose",

    "Identificação de sorovares",

    "Avaliação epidemiológica"

  ],

  vantagens: [

    "Amplamente utilizado",

    "Permite avaliar diferentes sorovares"

  ],

  limitacoes: [

    "Pode apresentar reações cruzadas",

    "Necessita interpretação especializada"

  ],

  imagem:
    "/images/diagnosticos/mat.jpg",

  doencasRelacionadas: [

    "Leptospirose"

  ]

},






{
  id: "hipersensibilidade-tardia",

  nome: "Hipersensibilidade Tardia",

  categoria: "Teste Imunológico",

  tipo: "Indireto",

  finalidade: [
    "Triagem"
  ],
caracteristicas: [
  "Resposta celular",
  "Reação imunológica tardia"
],
  descricao:
    "Avaliação da resposta imunológica celular após exposição a determinado antígeno.",

  principio:
    "Observa a reação inflamatória mediada por células após contato com o antígeno.",

  aplicacao: [

    "Tuberculinização",

    "Avaliação da resposta celular"

  ],

  vantagens: [

    "Utilizado em programas sanitários",

    "Avalia resposta imunológica celular"

  ],

  limitacoes: [

    "Necessita interpretação correta",

    "Pode sofrer influência do estado imunológico"

  ],

  imagem:
    "/images/diagnosticos/hipersensibilidade.jpg",

  doencasRelacionadas: [

    "Tuberculose"

  ]

},

{
  id: "fixacao-complemento",

  nome: "Fixação de Complemento",

  categoria: "Método Sorológico",

  tipo: "Indireto",

  finalidade: [
    "Confirmatório"
  ],
caracteristicas: [
  "Detecção de anticorpos",
  "Reagente marcado"
],
  descricao:
    "Teste sorológico baseado na capacidade de anticorpos específicos presentes no soro do animal em fixar o complemento na presença de antígenos correspondentes.",

  principio:
    "A reação ocorre em duas etapas: inicialmente o anticorpo presente na amostra reage com o antígeno específico e fixa o complemento. A ausência ou presença de hemólise indica se houve fixação do complemento.",

  aplicacao: [

    "Detecção de anticorpos específicos",

    "Diagnóstico de doenças infecciosas",

    "Avaliação sorológica"

  ],

  vantagens: [

    "Boa especificidade quando bem padronizado",

    "Método clássico utilizado em diagnósticos sorológicos"

  ],

  limitacoes: [

    "Técnica mais complexa",

    "Necessita laboratório especializado",

    "Pode apresentar interferência por anticorpos não específicos"

  ],

  imagem:
    "/images/diagnosticos/fixacao-complemento.jpg",

  doencasRelacionadas: [

    "Brucelose",

    "Leptospirose",

    "Mormo"

  ]

},
{
  id: "coombs",

  nome: "Teste de Coombs",

  categoria: "Método Sorológico",

  tipo: "Indireto",

  finalidade: [
    "Confirmatório"
  ],
caracteristicas: [
  "Detecção de anticorpos",
  "Reagente marcado"
],
  descricao:
    "Teste imunológico utilizado para detectar anticorpos ou componentes do complemento associados à superfície das hemácias.",

  principio:
    "Baseia-se na utilização do reagente de Coombs (antiglobulina) que promove a aglutinação das hemácias quando há anticorpos ou complemento aderidos à sua membrana.",

  aplicacao: [

    "Diagnóstico de anemias hemolíticas imunomediadas",

    "Detecção de anticorpos antieritrocitários",

    "Avaliação de processos imunológicos envolvendo hemácias"

  ],

  vantagens: [

    "Auxilia na identificação de mecanismos imunomediados",

    "Método específico para detecção de imunoglobulinas e complemento associados às hemácias"

  ],

  limitacoes: [

    "Pode apresentar resultados falso-negativos",

    "Necessita interpretação junto aos achados clínicos",

    "Requer técnica laboratorial adequada"

  ],

  imagem:
    "/images/diagnosticos/coombs.jpg",

  doencasRelacionadas: [

    "Anemia hemolítica imunomediada"

  ]

},

{
  id: "anel-leite",

  nome: "Teste do Anel em Leite(TAL)",

  categoria: "Teste Sorológico",

  tipo: "Indireto",

  finalidade: [
    "Triagem"
  ],

  caracteristicas: [
    "Aglutinação"
  ],

  descricao:
    "Método utilizado para para detectar anticorpos da brucelose em rebanhos leiteiros, identificar propriedades com animais doentes e monitorar a qualidade do leite cru.",

  principio:
    "Baseia-se na reação imunológica em que anticorpos presentes no leite se ligam a um antígeno corado com hematoxilina (azul), fazendo com que os glóbulos de gordura subam para a superfície e formem um anel azulado distinto no topo do tubo, enquanto o leite abaixo fica esbranquiçado.",

  aplicacao: [

    "Diagnóstico de brucelose bovina",

  ],

  vantagens: [

    "Triagem coletiva eficaz",

    "Baixo custo"

  ],

  limitacoes: [

    "Apresenta taxas relevantes de leituras falso-negativas ou falso-positivas quando aplicado de forma isolada em animais únicos",

    " Demanda obrigatoriamente exames de sangue complementares e confirmatórios em animais ou rebanhos apontados como reagentes."


  ],

  imagem:
    "/images/diagnosticos/anel-leite.jpg",

  doencasRelacionadas: [

    "Brucelose"

  ]

},
{
  id: "imuno-histoquimica",

  nome: "Imuno-histoquímica",

  categoria: "Teste Imunológico",

  tipo: "Direto",

  finalidade: [
    "Confirmatório"
  ],

  caracteristicas: [
    "Reagente marcado",
    "Detecção de proteínas específicas"
  ],

  descricao:
    "Método utilizado para identificar a presença de antígenos ou proteínas específicas em tecidos por meio da ligação com anticorpos marcados.",

  principio:
    "Baseia-se na ligação de anticorpos específicos ao alvo presente no tecido, permitindo sua visualização por meio de marcadores associados ao anticorpo.",

  aplicacao: [

    "Diagnóstico de doenças priônicas",

    "Detecção de proteínas específicas em tecidos",

    "Avaliação histopatológica"

  ],

  vantagens: [

    "Permite localizar o agente ou proteína no tecido",

    "Alta especificidade quando utilizado com anticorpos adequados"

  ],

  limitacoes: [

    "Necessita processamento adequado da amostra",

    "Depende da qualidade dos anticorpos utilizados",

    "Requer interpretação especializada"

  ],

  imagem:
    "/images/diagnosticos/imuno-histoquimica.jpg",

  doencasRelacionadas: [

    "Encefalopatia Espongiforme Bovina"

  ]

},
{
  id: "hemaglutinacao",

  nome: "Teste de Hemaglutinação e Inibição da Hemaglutinação (HA/HI)",

  categoria: "Método Sorológico",

  tipo: "Indireto",

  finalidade: [
    "Triagem",
  
  ],

  caracteristicas: [
    "Aglutinação",
    "Reagente não marcado",
    "Detecção de anticorpos"
  ],

  descricao:
    "Métodos sorológicos baseados na interação entre antígenos, anticorpos e hemácias. A hemaglutinação permite observar a capacidade de determinados agentes aglutinarem hemácias, enquanto a inibição da hemaglutinação detecta anticorpos capazes de bloquear essa reação.",

  principio:
    "Na hemaglutinação, o agente ou antígeno promove a aglutinação das hemácias, formando uma rede visível. Na inibição da hemaglutinação, anticorpos presentes na amostra impedem essa ligação, bloqueando a aglutinação quando ocorre uma reação positiva.",

  aplicacao: [

    "Detecção de anticorpos específicos",

    "Diagnóstico sorológico de infecções virais",

    "Avaliação de resposta vacinal",

    "Identificação de agentes com capacidade hemaglutinante"

  ],

  vantagens: [

    "Método simples e de baixo custo",

    "Boa especificidade em testes padronizados",

    "Amplamente utilizado em virologia"

  ],

  limitacoes: [

    "Necessita padronização dos antígenos",

    "Pode ocorrer interferência por anticorpos inespecíficos",

    "Sensibilidade depende do agente avaliado"

  ],

  imagem:
    "/images/diagnosticos/hemaglutinacao-4.jpg",

  doencasRelacionadas: [

    "Doença de Newcastle",

    "Influenza Aviária",

    "Parvovirose"

  ]

},
];