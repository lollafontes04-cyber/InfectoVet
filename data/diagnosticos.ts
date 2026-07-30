export type Diagnostico = {

  id: string;

  nome: string;

  categoria: string;

  tipo: string;

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
  id: "elisa",

  nome: "ELISA",

  categoria: "Método Sorológico",

  tipo: "Indireto",

  finalidade: [
    "Triagem"
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

}


];