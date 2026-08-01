export type BlocoConteudo = {
  emoji: string;
  titulo: string;
  texto: string;
};

type Referencia = {
  titulo: string;
  autores: string;
  fonte: string;
  ano: string;
  link?: string;
};

export type Doenca = {

  id: string;

  nome: string;

  agente: string;

  categoria: 
    | "Bacterianas"
    | "Virais"
    | "Protozooses"
    | "Helmintoses"
    | "Ectoparasitoses"
    | "Prionicas";

  icone: string;

  zoonose: boolean;

  vacina: boolean;

  eutanasia: boolean;

  notificacaoObrigatoria: boolean;

  hospedeiros: string[];

  palavrasChave: string[];

  imagem: string;
  
  imagens?: {

  src: string;

  titulo: string;

  categoria: string;

  descricao: string;

}[];
  

visaoGeral:
  | string
  | {
      introducao: string;

      cards: {
        titulo: string;
        itens: string[];
        emoji?: string;
      }[];
    };

  etiologia:
  | string
  | {
      introducao: string;

      listas?: {
        titulo: string;
        emoji: string;
        itens: string[];
      }[];

      tabelas?: {
        titulo: string;
        emoji: string;
        colunas: string[];
        linhas: string[][];
      }[];

      blocos?: {
        titulo: string;
        emoji: string;
        itens: string[];
      }[];
    };

  patogenia: string | {
  introducao: string;
  blocos: BlocoConteudo[];
};

  epidemiologia:
  | string
  | {
      introducao: string;
      blocos: {
        emoji: string;
        titulo: string;
        texto: string;
      }[];
    };

sinaisClinicos:
  | string
  | {
      introducao: string;
      blocos: {
        emoji: string;
        titulo: string;
        itens: string[];
      }[];
    };
  diagnostico: string | {
  introducao: string;
  metodos: string[];
};

  tratamento: string | {
  introducao: string;
  blocos: BlocoConteudo[];
};

  prevencao:
| string
| {
    introducao: string;

    blocos: {

      emoji: string;

      titulo: string;

      texto: string;

      destaque?: boolean;


      informacoes?: {

        titulo: string;

        texto: string;

      }[];

    }[];

    };

referencias?: Referencia[];

   casosClinicos?: {

    id: string;

    titulo: string;

    especie: string;

    idade?: string;

    historico: string;

    sinais: string[];

    exames?: string;

    diagnostico: string;

    discussao: string;

  }[];

};




export const doencas: Doenca[] = [



{
  id: "brucelose",

  nome: "Brucelose",

  agente: "Brucella spp.",

  categoria: "Bacterianas",

  icone: "🧫",

  zoonose: true,

  vacina: true,

  eutanasia: true,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Bovinos",
    "Suínos"
  ],

  palavrasChave: [
    "brucelose",
    "brucella",
    "boi",
    "vaca",
    "gado",
    "suíno",
    "porco"
  ],

imagem: "/images/doencas/brucelose.jpg",


imagens: [

  {
    src: "/images/doencas/brucelose/01-vaca-com-aborto.jpg",
    titulo: "Fêmea bovina com aborto",
    categoria: "Apresentação clínica",
    descricao:
      "Aborto no terço final da gestação, um dos principais sinais associados à brucelose bovina."
  },


  {
    src: "/images/doencas/brucelose/02-feto-abortado-brucelose.jpg",
    titulo: "Feto abortado",
    categoria: "Lesão macroscópica",
    descricao:
      "Alterações associadas à infecção por Brucella spp."
  },

{
    src: "/images/doencas/brucelose/orquite-brucelose.jpg",
    titulo: "Orquite",
    categoria: "Apresentação clínica",
    descricao:
"Inflamação dos testículos e do epidídimo causada por bactérias do gênero Brucella"  },
  {
    src: "/images/doencas/brucelose/03-placenta-com-lesoes.jpg",
    titulo: "Alterações placentárias",
    categoria: "Patologia reprodutiva",
    descricao:
      "A Brucella apresenta tropismo pelo trato reprodutivo, podendo causar placentite."
  },


  {
    src: "/images/doencas/brucelose/04-teste-diagnostico-brucelose.jpg",
    titulo: "Teste diagnóstico",
    categoria: "Diagnóstico",
    descricao:
      "Métodos utilizados para identificação de animais infectados."
  },


  {
    src: "/images/doencas/brucelose/05-brucella-spp-microscopia.jpg",
    titulo: "Brucella spp.",
    categoria: "Agente etiológico",
    descricao:
      "Bactéria responsável pela brucelose em diferentes espécies animais."
  },


  {
    src: "/images/doencas/brucelose/06-ciclo-transmissao-brucelose.jpg",
    titulo: "Ciclo de transmissão",
    categoria: "Epidemiologia",
    descricao:
      "Principais vias de transmissão e manutenção da enfermidade."
  }

],

visaoGeral: {

  introducao:
    "A brucelose é uma doença infectocontagiosa crônica de grande importância veterinária, caracterizada principalmente por alterações reprodutivas, perdas econômicas e necessidade de controle sanitário oficial.",


  cards: [

    {
      emoji: "⭐",
      titulo: "Destaques",
      itens: [
        "Doença infectocontagiosa de evolução crônica",
        "Relacionada principalmente a problemas reprodutivos",
        "Importante causa de perdas econômicas na produção animal",
        "Enfermidade incluída em programas oficiais de controle sanitário"
      ]
    },


    {
      emoji: "🦠",
      titulo: "Características",
      itens: [
        "Bactéria Gram-negativa",
        "Cocobacilo pequeno e imóvel",
        "Bactéria intracelular facultativa",
        "Possui capacidade de sobreviver dentro de células do hospedeiro"
      ]
    },


    {
      emoji: "💡",
      titulo: "Informações relevantes",
      itens: [
        "Apresenta elevada resistência ambiental",
        "Pode permanecer viável em materiais contaminados, como restos fetais e secreções",
        "Maior sobrevivência em ambientes úmidos e protegidos da luz solar",
        "Sensível à ação de desinfetantes adequados e tratamentos térmicos"
      ]
    }

  ]


    },

  etiologia: {

  introducao:
    "A brucelose é causada por bactérias pertencentes ao gênero Brucella, apresentando diferentes espécies associadas aos animais domésticos e silvestres.",


  listas: [

    {
      emoji: "🦠",
      titulo: "Espécies do gênero Brucella",

      itens: [
        "Brucella melitensis",
        "Brucella abortus",
        "Brucella suis",
        "Brucella ovis",
        "Brucella neotomae",
        "Brucella canis"
      ]
    }

  ],


  tabelas: [

    {
      emoji: "🇧🇷",
      titulo: "Brucellas confirmadas no Brasil",

      colunas: [
        "Espécie",
        "Biovar"
      ],

      linhas: [
        ["B. abortus", "Biovares 1, 2 e 3"],
        ["B. suis", "Biovar 1"],
        ["B. ovis", "-"],
        ["B. canis", "-"]
      ]

    },


    {
      emoji: "🐄",
      titulo: "Relação espécie e hospedeiro",

      colunas: [
        "Espécie",
        "Hospedeiro"
      ],

      linhas: [
        ["B. abortus", "Bovinos e bubalinos"],
        ["B. melitensis", "Caprinos e ovinos"],
        ["B. suis", "Suínos"],
        ["B. canis", "Cães"]
      ]

    }

  ],


  blocos: [

    {
      emoji: "🌊",
      titulo: "Isolamentos em mamíferos marinhos",

      itens: [
        "1994 – Escócia: isolamento em mamíferos marinhos",
        "Proposta Brucella cetaceae – isolamentos em cetáceos",
        "Proposta Brucella pinnipediae – isolamentos em focas"
      ]

    }

  ]

},

  patogenia: {

  introducao:
  "A brucelose é uma enfermidade infecciosa causada por bactérias do gênero Brucella, caracterizada pela capacidade do agente de invadir células do hospedeiro, sobreviver no ambiente intracelular e estabelecer uma infecção persistente.",


  blocos: [

    {
      emoji: "🦠",
      titulo: "Entrada e infecção inicial",
      texto:
      "Após a entrada no organismo, através do trato digestivo (ingestão de leite não pasteurizado ou água e pastagem contaminadas), pele ferida ou mucosas, a Brucella invade células do hospedeiro, principalmente macrófagos, iniciando o processo infeccioso."
    },

    {
      emoji: "🧬",
      titulo: "Sobrevivência intracelular",
      texto:
      "A capacidade de permanecer dentro de células fagocíticas favorece a persistência da bactéria e o desenvolvimento de uma infecção crônica."
    },

    {
      emoji: "🩸",
      titulo: "Disseminação pelo organismo",
      texto:
      "O agente pode se disseminar para diferentes tecidos, apresentando predileção por órgãos associados ao sistema reprodutivo."
    },

    {
      emoji: "🐄",
      titulo: "Comprometimento reprodutivo",
      texto:
      "A multiplicação bacteriana nos tecidos reprodutivos está relacionada a aborto, infertilidade, retenção de placenta e nascimento de crias fracas."
    }

  ]

},

 epidemiologia: {

  introducao:
    "A brucelose apresenta distribuição mundial, com maior prevalência em países em desenvolvimento. Alguns países desenvolvidos apresentam programas de controle que permitiram sua erradicação ou redução da ocorrência.",


  blocos: [

    {
      emoji: "🌎",
      titulo: "Distribuição",

      texto:
        "A enfermidade possui ocorrência mundial, apresentando maior importância em regiões onde as medidas de controle sanitário são limitadas."
    },


    {
      emoji: "🐄",
      titulo: "Fonte de infecção",

      texto:
        "Animais infectados representam a principal fonte de infecção, podendo eliminar a bactéria por diferentes secreções e produtos."
    },


    {
      emoji: "🧫",
      titulo: "Vias de eliminação",

      texto:
        "A Brucella é eliminada principalmente por feto e anexos fetais, secreções vaginais, leite, sêmen, fezes e urina."
    },


    {
      emoji: "🔄",
      titulo: "Vias de transmissão",

      texto:
        "A transmissão ocorre pelo contato com materiais contaminados, como água, pastagens, fômites, sêmen e pelo consumo de leite e derivados crus."
    },


    {
      emoji: "🚪",
      titulo: "Portas de entrada",

      texto:
        "A entrada do agente ocorre principalmente pelas vias orofaríngea, mucosas conjuntival, respiratória e genital, além de pele com solução de continuidade."
    }

  ]

},



  sinaisClinicos: {

  introducao:
    "A brucelose apresenta evolução geralmente crônica, podendo ocorrer infecções sem sinais aparentes. Quando manifesta sinais clínicos, os principais envolvem alterações reprodutivas.",

  blocos: [

    {
      emoji: "🐄",
      titulo: "Fêmeas",
      itens: [
        "Aborto, principalmente no terço final da gestação",
        "Retenção de placenta",
        "Metrite",
        "Nascimento de animais fracos",
        "Redução da fertilidade"
      ]
    },

    {
      emoji: "🐂",
      titulo: "Machos",
      itens: [
        "Orquite",
        "Epididimite",
        "Alterações reprodutivas",
        "Redução da fertilidade"
      ]
    },

    {
      emoji: "⚠️",
      titulo: "Características da infecção",
      itens: [
        "Infecções podem ocorrer sem sinais clínicos aparentes",
        "Animais infectados podem eliminar a bactéria",
        "Importante causa de perdas reprodutivas e econômicas"
      ]
    }

  ]
},
  
  diagnostico: {

  introducao:
  "O diagnóstico da brucelose pode envolver métodos sorológicos, moleculares e microbiológicos.",

  metodos: [
  "aat",
  "2-mercaptoetanol",
  "elisa",
  "pcr",
  "cultura-bacteriologica",
  "fixacao-complemento",
  "imuno-histoquimica"
]

},
 tratamento: {

  introducao:
  "O tratamento da brucelose animal apresenta limitações devido ao caráter crônico da infecção e à capacidade da Brucella de sobreviver no interior das células do hospedeiro. Dessa forma, o controle da enfermidade é baseado principalmente em medidas sanitárias e epidemiológicas.",


  blocos: [

    {

      emoji: "🩺",

      titulo: "Manejo da enfermidade",

      texto:
      "Embora existam estudos envolvendo o uso de antimicrobianos, o tratamento individual não representa a principal estratégia para controle da brucelose nos rebanhos. A dificuldade de eliminação completa do agente está relacionada à sua capacidade de persistir no organismo do hospedeiro."

    },


    {

      emoji: "🐄",

      titulo: "Animais positivos",

      texto:
      "Animais diagnosticados como positivos devem ser identificados e manejados conforme os programas oficiais de controle, evitando a permanência de fontes de infecção dentro do rebanho."

    },


    {

      emoji: "🧹",

      titulo: "Controle da contaminação",

      texto:
      "A remoção adequada de fetos abortados, placentas e materiais contaminados é fundamental, pois esses materiais apresentam grande importância na disseminação da Brucella no ambiente."

    },


    {

      emoji: "📋",

      titulo: "Controle sanitário",

      texto:
      "O controle da brucelose depende da associação entre diagnóstico dos animais infectados, medidas de manejo, vacinação e acompanhamento sanitário do rebanho."

    }

  ]

},
prevencao: {

introducao:
"A prevenção da brucelose é baseada em medidas sanitárias integradas que envolvem vacinação, diagnóstico, controle de animais positivos e adoção de práticas de biossegurança.",


blocos:[


{
emoji:"💉",

titulo:"Vacinação com B19",

destaque:true,

texto:
"A vacinação contra brucelose bovina é uma medida obrigatória de controle sanitário. A vacina com amostra B19 deve ser aplicada em fêmeas bovinas e bubalinas entre 3 e 8 meses de idade, conforme as normas do PNCEBT."
,


informacoes:[

{
titulo:"Vacina RB51",

texto:
"Na espécie bovina, a vacina com amostra RB51 pode substituir a B19. Diferentemente da B19, a RB51 não induz a formação de anticorpos aglutinantes, permitindo melhor diferenciação em testes sorológicos."
},


{
titulo:"Responsabilidade pela aplicação",

texto:
"A vacinação com B19 ou RB51 deve ser realizada sob responsabilidade de médicos veterinários cadastrados no Serviço Veterinário Oficial (SVO) do estado de atuação."
}


]


},



{
emoji:"🔬",

titulo:"Diagnóstico e vigilância",

texto:
"O controle depende da identificação dos animais infectados por meio de testes diagnósticos e acompanhamento sanitário do rebanho."

},



{
emoji:"🚫",

titulo:"Controle de animais positivos",

texto:
"Animais diagnosticados como positivos devem ser manejados conforme os programas oficiais de controle sanitário."

},



{
emoji:"🐄",

titulo:"Biossegurança no rebanho",

texto:
"Medidas de higiene, manejo adequado de materiais contaminados e controle da movimentação dos animais reduzem a disseminação da Brucella."

}


]


},
  referencias: [
  {
    titulo:
      "Brucellosis: epidemiology, pathogenesis, diagnosis and treatment–a comprehensive review",

    autores:
      "Qureshi, Kamal A., Adil Parvez, Nada A. Fahmy, Bassant H. Abdel Hady, Shweta Kumar, Anusmita Ganguly, Akhtar Atiya, et al.",

    fonte:
      "Annals of Medicine 55 (2)",

    ano:
      "2023",

       link:
    "https://www.tandfonline.com/doi/full/10.1080/07853890.2023.2295398#d1e408",
  },




  {
    titulo:
      "Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose Animal (PNCEBT)",

    autores:
      "Ministério da Agricultura e Pecuária (MAPA)",

    fonte:
      "Manual Técnico",

    ano:
      "Atualizado",

      link: "https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/pncebt/controle-e-erradicacao-da-brucelose-e-tuberculose-pncebt"
  },


  

],

 casosClinicos: [

  {
    id: "brucelose-caso-01",

    titulo:
      "Aborto no terço final da gestação em rebanho bovino",

    especie:
      "Bovino",

    idade:
      "Fêmea adulta em idade reprodutiva",

    historico:
      "Propriedade leiteira com histórico de falhas reprodutivas e ocorrência de abortamentos principalmente no terço final da gestação. O produtor relatou aumento do intervalo entre partos e redução do desempenho reprodutivo do rebanho.",

    sinais: [
      "Aborto no terço final da gestação",
      "Retenção de placenta",
      "Nascimento de bezerros fracos"
    ],

    exames:
      "Foi realizada investigação sorológica dos animais suspeitos para identificação de animais positivos.",

    diagnostico:
      "Brucelose bovina associada à infecção por Brucella abortus.",

    discussao:
      "A ocorrência de abortos no terço final da gestação é uma das principais manifestações clínicas da brucelose bovina. A investigação deve envolver avaliação epidemiológica, testes diagnósticos e medidas de controle para evitar a disseminação no rebanho."
  },



  {
    id: "brucelose-caso-02",

    titulo:
      "Investigação sanitária após aumento de abortamentos no rebanho",

    especie:
      "Bovinos",

    idade:
      "Vacas adultas",

    historico:
      "Rebanho apresentou aumento inesperado de abortamentos e problemas reprodutivos. Após investigação sanitária, foi realizada avaliação dos animais e coleta de amostras para diagnóstico.",

    sinais: [
      "Abortamentos recorrentes",
      "Problemas reprodutivos",
      "Queda dos índices produtivos"
    ],

    exames:
      "Foram utilizados testes sorológicos recomendados para investigação da brucelose bovina.",

    diagnostico:
      "Infecção por Brucella spp. compatível com quadro de brucelose bovina.",

    discussao:
      "A identificação de animais infectados é fundamental para o controle da doença. A brucelose possui importância econômica e sanitária devido aos prejuízos reprodutivos e ao potencial zoonótico."
  },



  {
    id: "brucelose-caso-03",

    titulo:
      "Bovino com suspeita de brucelose durante avaliação reprodutiva",

    especie:
      "Bovino",

    idade:
      "Fêmea adulta",

    historico:
      "Durante avaliação reprodutiva de rotina, uma vaca apresentou histórico de perda gestacional anterior. O veterinário realizou investigação considerando doenças infecciosas como possíveis causas.",

    sinais: [
      "Histórico de aborto anterior",
      "Alteração dos índices reprodutivos",
      "Suspeita de enfermidade infecciosa"
    ],

    exames:
      "Foram solicitados exames laboratoriais para confirmação da suspeita clínica.",

    diagnostico:
      "Caso simulado para treinamento: suspeita confirmada de brucelose bovina.",

    discussao:
      "Casos reprodutivos devem sempre ser investigados de forma sistemática. A associação entre histórico, sinais clínicos, epidemiologia e exames laboratoriais permite estabelecer um diagnóstico mais preciso."
  }

]

},



{
  id: "clostridioses",

  nome: "Clostridioses",

  agente: "Clostridium spp.",

  categoria: "Bacterianas",

  icone: "🧫",

  zoonose: false,

  vacina: true,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Bovinos",
    "Ovinos",
    "Caprinos"
  ],

  palavrasChave: [
    "clostridioses",
    "clostridium",
    "boi",
    "vaca",
    "gado",
    "ovino",
    "ovelha",
    "caprino",
    "cabra"
  ],

  imagem: "/images/doencas/clostridioses.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},




{
  id: "garrotilho",

  nome: "Garrotilho",

  agente: "Streptococcus equi",

  categoria: "Bacterianas",

  icone: "🧫",

  zoonose: false,

  vacina: true,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Equinos"
  ],

  palavrasChave: [
    "garrotilho",
    "streptococcus equi",
    "cavalo",
    "equino"
  ],

  imagem: "/images/doencas/garrotilho.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},
{
  id: "leptospirose",

  nome: "Leptospirose",

  agente: "Leptospira spp.",

  categoria: "Bacterianas",

  icone: "🧫",

  zoonose: true,

  vacina: true,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Bovinos",
    "Suínos",
    "Cães"
  ],

  palavrasChave: [
    "leptospirose",
    "leptospira",
    "cão",
    "cao",
    "cachorro",
    "canino",
    "boi",
    "vaca",
    "gado",
    "suíno",
    "porco"
  ],

  imagem: "/images/doencas/leptospirose.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "mormo",

  nome: "Mormo",

  agente: "Burkholderia mallei",

  categoria: "Bacterianas",

  icone: "🧫",

  zoonose: true,

  vacina: false,

  eutanasia: true,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Equinos",
    "Humanos"
  ],

  palavrasChave: [
    "mormo",
    "burkholderia mallei",
    "cavalo",
    "cavalos",
    "equino",
    "zoonose"
  ],

  imagem: "/images/doencas/mormo.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "tuberculose",

  nome: "Tuberculose",

  agente: "Mycobacterium bovis",

  categoria: "Bacterianas",

  icone: "🧫",

  zoonose: true,

  vacina: false,

  eutanasia: true,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Bovinos",
    "Humanos"
  ],

  palavrasChave: [
    "tuberculose",
    "mycobacterium bovis",
    "boi",
    "vaca",
    "gado",
    "bovino"
  ],

  imagem: "/images/doencas/tuberculose.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},
// 🦠 VIRAIS


{
  id: "anemia-infecciosa-equina",

  nome: "Anemia infecciosa equina",

  agente: "Vírus da anemia infecciosa equina",

  categoria: "Virais",

  icone: "🦠",

  zoonose: false,

  vacina: false,

  eutanasia: true,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Equinos"
  ],

  palavrasChave: [
    "anemia infecciosa equina",
    "aie",
    "cavalo",
    "equino"
  ],

  imagem: "/images/doencas/anemia-infecciosa-equina.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},




{
  id: "cinomose",

  nome: "Cinomose",

  agente: "Vírus da cinomose canina",

  categoria: "Virais",

  icone: "🦠",

  zoonose: false,

  vacina: true,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Cães"
  ],

  palavrasChave: [
    "cinomose",
    "cão",
    "cao",
    "cachorro",
    "canino"
  ],

  imagem: "/images/doencas/cinomose.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "coronavirose-canina",

  nome: "Coronavirose canina",

  agente: "Coronavírus canino",

  categoria: "Virais",

  icone: "🦠",

  zoonose: false,

  vacina: true,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Cães"
  ],

  palavrasChave: [
    "coronavirose",
    "coronavirus canino",
    "cão",
    "cao",
    "cachorro",
    "canino"
  ],

  imagem: "/images/doencas/coronavirose-canina.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "estomatite-vesicular",

  nome: "Estomatite vesicular",

  agente: "Vírus da estomatite vesicular",

  categoria: "Virais",

  icone: "🦠",

  zoonose: true,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Bovinos",
    "Equinos",
    "Suínos"
  ],

  palavrasChave: [
    "estomatite vesicular",
    "boi",
    "vaca",
    "cavalo",
    "equino",
    "porco"
  ],

  imagem: "/images/doencas/estomatite-vesicular.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "febre-aftosa",

  nome: "Febre aftosa",

  agente: "Vírus da febre aftosa",

  categoria: "Virais",

  icone: "🦠",

  zoonose: false,

  vacina: true,

  eutanasia: true,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Bovinos",
    "Suínos",
    "Ovinos",
    "Caprinos"
  ],

  palavrasChave: [
    "febre aftosa",
    "aftosa",
    "boi",
    "vaca",
    "gado",
    "porco",
    "ovelha",
    "cabra"
  ],

  imagem: "/images/doencas/febre-aftosa.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},
{
  id: "panleucopenia-felina",

  nome: "Panleucopenia felina",

  agente: "Parvovírus felino",

  categoria: "Virais",

  icone: "🦠",

  zoonose: false,

  vacina: true,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Felinos"
  ],

  palavrasChave: [
    "panleucopenia",
    "gato",
    "gatos",
    "felino",
    "felinos"
  ],

  imagem: "/images/doencas/panleucopenia-felina.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "parvovirose",

  nome: "Parvovirose",

  agente: "Parvovírus canino",

  categoria: "Virais",

  icone: "🦠",

  zoonose: false,

  vacina: true,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Cães"
  ],

  palavrasChave: [
    "parvovirose",
    "parvovirus",
    "cão",
    "cao",
    "cachorro"
  ],

  imagem: "/images/doencas/parvovirose.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "pif",

  nome: "PIF (Peritonite Infecciosa Felina)",

  agente: "Coronavírus felino",

  categoria: "Virais",

  icone: "🦠",

  zoonose: false,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Felinos"
  ],

  palavrasChave: [
    "pif",
    "peritonite infecciosa felina",
    "coronavirus felino",
    "gato",
    "felino"
  ],

  imagem: "/images/doencas/pif.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "raiva",

  nome: "Raiva",

  agente: "Vírus da raiva",

  categoria: "Virais",

  icone: "🦠",

  zoonose: true,

  vacina: true,

  eutanasia: true,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Mamíferos"
  ],

  palavrasChave: [
    "raiva",
    "virus da raiva",
    "cão",
    "cao",
    "morcego"
  ],

  imagem: "/images/doencas/raiva-2.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "variola-bovina",

  nome: "Varíola bovina",

  agente: "Orthopoxvirus",

  categoria: "Virais",

  icone: "🦠",

  zoonose: true,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Bovinos",
    "Humanos"
  ],

  palavrasChave: [
    "variola bovina",
    "orthopoxvirus",
    "boi",
    "vaca",
    "gado"
  ],

  imagem: "/images/doencas/variola-bovina.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},
// 🦠 PROTOZOOSES


{
  id: "leishmaniose",

  nome: "Leishmaniose",

  agente: "Leishmania spp.",

  categoria: "Protozooses",

  icone: "🔬",

  zoonose: true,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Cães",
    "Humanos"
  ],

  palavrasChave: [
    "leishmaniose",
    "leishmania",
    "cão",
    "cao",
    "cachorro",
    "canino",
    "mosquito palha",
    "flebotomineo"
  ],

  imagem: "/images/doencas/leishmaniose.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},






// 🪱 HELMINTOSAS


{
  id: "dirofilariose",

  nome: "Dirofilariose",

  agente: "Dirofilaria immitis",

  categoria: "Helmintoses",

  icone: "🪱",

  zoonose: true,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Cães"
  ],

  palavrasChave: [
    "dirofilariose",
    "dirofilaria",
    "verme do coração",
    "cão",
    "cao",
    "cachorro",
    "mosquito"
  ],

  imagem: "/images/doencas/dirofilariose.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "haemoncose",

  nome: "Haemoncose",

  agente: "Haemonchus contortus",

  categoria: "Helmintoses",

  icone: "🪱",

  zoonose: false,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Ovinos",
    "Caprinos"
  ],

  palavrasChave: [
    "haemoncose",
    "haemonchus",
    "haemonchus contortus",
    "ovelha",
    "ovino",
    "carneiro",
    "cabra",
    "caprino",
    "anemia",
    "verme"
  ],

  imagem: "/images/doencas/haemoncose.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "monieziose",

  nome: "Monieziose",

  agente: "Moniezia spp.",

  categoria: "Helmintoses",

  icone: "🪱",

  zoonose: false,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Ovinos",
    "Caprinos"
  ],

  palavrasChave: [
    "monieziose",
    "moniezia",
    "tenia",
    "tênia",
    "ovelha",
    "ovino",
    "cabra",
    "caprino"
  ],

  imagem: "/images/doencas/monieziose.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "tricostrongilose",

  nome: "Tricostrongilose",

  agente: "Trichostrongylus spp.",

  categoria: "Helmintoses",

  icone: "🪱",

  zoonose: false,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Ovinos",
    "Caprinos"
  ],

  palavrasChave: [
    "tricostrongilose",
    "trichostrongylus",
    "ovelha",
    "ovino",
    "cabra",
    "caprino",
    "verminose"
  ],

  imagem: "/images/doencas/tricostrongilose.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},
// 🕷️ ECTOPARASITOSES


{
  id: "anaplasmose",

  nome: "Anaplasmose",

  agente: "Anaplasma spp.",

  categoria: "Ectoparasitoses",

  icone: "🕷️",

  zoonose: false,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Cães",
    "Bovinos",
  ],

  palavrasChave: [
    "anaplasmose",
    "anaplasma",
    "carrapato",
    "Cães",
    "Bovinos",
    "Vaca",
  ],

  imagem: "/images/doencas/anaplasmose.jpg",

  visaoGeral: "",
  etiologia: "O agente etiológico da anaplasmose faz parte da Ordem Rickettsiales, Família Anaplasmataceae, Gênero Anaplasma com as espécies: Anaplasma marginale, é o mais relevante apresentando alta patogenicidade nos ruminantes domésticos e silvestres; A. centrale, normalmente causa doença subclínica com evolução benigna, raramente os animais evoluem para óbito; A. caudatum têm baixa casuística, possuindo baixa representatividade; A. ovis, acomete principalmente pequenos ruminantes (caprinos e ovinos). Em 2001, foi proposta uma reorganização da Ordem Rickettsiales e foram incluídas no gênero Anaplasma algumas espécies de Ehrlichia. Dessa forma, passaram a ser incluídas no gênero as spécies A. phagocytophilum, que é uma zoonose, acometendo humanos, cães, bovinos, caprinos, ovinos e equinos e A. bovis, recentemente descrito acometendo bovinos em Campos dos Goytacazes.",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "A prevenção da anaplasmose baseia-se principalmente no controle rigoroso e contínuo de carrapatos, uso de produtos antiparasitários adequados e na inspeção constante do pet ou do ambiente. Não há vacina comercial ampla e eficaz contra a bactéria no Brasil.",

  referencias: [],

  casosClinicos: [],

},





{
  id: "babesiose",

  nome: "Babesiose",

  agente: "Babesia spp.",

  categoria: "Ectoparasitoses",

  icone: "🕷️",

  zoonose: false,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Bovinos",
    "Cães"
  ],

  palavrasChave: [
    "babesiose",
    "babesia",
    "carrapato",
    "boi",
    "vaca",
    "gado",
    "cão",
    "cao"
  ],

  imagem: "/images/doencas/babesiose-2.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "erliquiose",

  nome: "Erliquiose",

  agente: "Ehrlichia spp.",

  categoria: "Ectoparasitoses",

  icone: "🕷️",

  zoonose: false,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Cães"
  ],

  palavrasChave: [
    "erliquiose",
    "ehrlichia",
    "carrapato",
    "cão",
    "cao",
    "cachorro"
  ],

  imagem: "/images/doencas/erliquiose.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},






// 🧬 PRIONICAS


{
  id: "cwd",

  nome: "Doença Debilitante Crônica (CWD)",

  agente: "Príon (PrPSc)",

  categoria: "Prionicas",

  icone: "🧬",

  zoonose: false,

  vacina: false,

  eutanasia: true,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Cervídeos"
  ],

  palavrasChave: [
    "cwd",
    "doença debilitante crônica",
    "cervo",
    "cervideo",
    "alce",
    "prion",
    "príon"
  ],

  imagem: "/images/doencas/cwd.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "bse",

  nome: "Encefalopatia Espongiforme Bovina (BSE)",

  agente: "Príon (PrPSc)",

  categoria: "Prionicas",

  icone: "🧬",

  zoonose: true,

  vacina: false,

  eutanasia: true,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Bovinos"
  ],

  palavrasChave: [
    "encefalopatia espongiforme bovina",
    "bse",
    "vaca louca",
    "prion",
    "príon",
    "bovino",
    "gado",
    "vaca"
  ],

  imagem: "/images/doencas/bse.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},





{
  id: "scrapie",

  nome: "Scrapie",

  agente: "Príon (PrPSc)",

  categoria: "Prionicas",

  icone: "🧬",

  zoonose: false,

  vacina: false,

  eutanasia: true,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Ovinos",
    "Caprinos"
  ],

  palavrasChave: [
    "scrapie",
    "prion",
    "príon",
    "ovelha",
    "ovino",
    "carneiro",
    "cabra",
    "caprino"
  ],

  imagem: "/images/doencas/scrapie.jpg",

  visaoGeral: "",
  etiologia: "",
  patogenia: "",
  epidemiologia: "",
  sinaisClinicos: "",
  diagnostico: "",
  tratamento: "",
  prevencao: "",

  referencias: [],

  casosClinicos: [],

},


];