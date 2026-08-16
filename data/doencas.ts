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

  tags?: string[];


      informacoes?: {

        titulo: string;

        texto: string;

      }[];

    }[];

    };

    pncebt?: {

  introducao: string;

  blocos: {

    emoji: string;

    titulo: string;

    descricao: string;

    texto: string;

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
    src: "/images/doencas/brucelose/prevalencia-brucelose.png",
    titulo: "Prevalência de focos da brucelose bovina nas UF.",
    categoria: "Mapa",
    descricao:
"Prevalência de focos da brucelose bovina nas UF."  },

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
      "Teste do Anel em Leite (TAL). Método de triagem utilizado para identificação de animais infectados."
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
  "imuno-histoquimica",
  "anel-leite"
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


 tags:[
   "OBRIGATÓRIA",
   "🐄 3 a 8 meses",
 ],
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
pncebt: {

introducao:
"O Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose Animal (PNCEBT) estabelece medidas sanitárias para controle das enfermidades, com foco na identificação de animais positivos e no saneamento dos rebanhos.",


blocos:[


{
emoji:"🔎",
titulo:"Identificação dos animais positivos",

descricao:
      "Fluxo adotado após a identificação de animais suspeitos ou positivos.",

texto:
"O diagnóstico inicia com o Teste do Antígeno Acidificado Tamponado (AAT), utilizado como teste de triagem. Animais reagentes no AAT devem ser submetidos aos testes confirmatórios previstos pelo PNCEBT, como o 2-Mercaptoetanol (2-ME) e/ou Teste de Fixação de Complemento. Após a confirmação, o animal é classificado como positivo e segue para as medidas sanitárias de eliminação."
},


{
emoji:"⚠️",
titulo:"Destino dos animais positivos",

descricao:
 "Retirada dos animais infectados para interromper a cadeia de transmissão.",

texto:
 "Animais confirmados positivos para brucelose devem ser eliminados por meio de sacrifício sanitário. A retirada deve ocorrer dentro do prazo estabelecido pelo Serviço Veterinário Oficial. Após a eliminação, o animal não retorna ao sistema produtivo, evitando a manutenção da fonte de infecção no rebanho."

},


{
emoji:"🚫",
titulo:"Restrição e investigação da propriedade",
descricao:
  "Medidas adotadas após a confirmação de um foco de brucelose.",

texto:
      "Após a confirmação de animais positivos, a propriedade é considerada foco e permanece sob acompanhamento do Serviço Veterinário Oficial. Os animais do rebanho devem ser investigados, especialmente aqueles que tiveram contato com os positivos. A movimentação de animais pode ser restringida até o cumprimento das medidas sanitárias estabelecidas."

},


{
emoji:"🧼",
titulo:"Controle sanitário do rebanho",

descricao:
"Medidas adotadas para impedir a disseminação da enfermidade.",

texto:
"O controle envolve investigação de focos, controle de entrada de animais, isolamento de suspeitos, higiene das instalações e monitoramento sanitário contínuo.Após o cumprimento das exigências sanitárias e comprovação do controle da enfermidade, o foco pode ser encerrado e a propriedade retorna à condição sanitária adequada."
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
id:"leptospirose",

nome:"Leptospirose",

agente:"Leptospira spp.",

categoria:"Bacterianas",

icone:"🦠",

zoonose:true,

vacina:true,

eutanasia:false,

notificacaoObrigatoria:false,


hospedeiros:[
"Cães",
"Ruminantes",
"Suínos",
"Humanos"
],


palavrasChave:[

"leptospirose",
"leptospira",
"cão",
"bovino",
"suíno",
"urina",
"zoonose"

],


imagem:"/images/doencas/leptospirose.jpg",





visaoGeral:{

introducao:

"A leptospirose é uma doença infectocontagiosa causada por bactérias do gênero Leptospira, com grande importância veterinária e em saúde pública devido ao seu potencial zoonótico. Pode acometer diferentes espécies animais, causando alterações sistêmicas, reprodutivas e perdas econômicas.",


cards:[


{
emoji:"⭐",

titulo:"Destaques",

itens:[

"Doença bacteriana de distribuição mundial",

"Importante zoonose transmitida principalmente pela urina de animais infectados",

"Relacionada a alterações renais, hepáticas e reprodutivas",

"Associada a ambientes úmidos e presença de água contaminada"

]

},



{
emoji:"🦠",

titulo:"Características",

itens:[

"Bactéria espiralada pertencente ao gênero Leptospira",

"Apresenta mobilidade e capacidade de penetrar tecidos do hospedeiro",

"Possui diferentes sorovares associados a diferentes espécies animais",

"Maior sobrevivência em ambientes úmidos"

]

},



{
emoji:"💡",

titulo:"Informações relevantes",

itens:[

"Animais infectados podem eliminar a bactéria pela urina",

"A transmissão ocorre principalmente pelo contato com água ou solo contaminado",

"Apresenta importância ocupacional para profissionais expostos"

]

}


]


},

etiologia: {

  introducao:
    "A leptospirose é uma enfermidade infectocontagiosa causada por bactérias do gênero Leptospira. São microrganismos helicoidais, móveis e capazes de infectar diferentes espécies animais. A presença de diferentes sorovares está relacionada à adaptação da bactéria aos seus principais hospedeiros e influencia a epidemiologia e as manifestações clínicas da doença.",


  blocos: [

    {
      emoji: "🦠",

      titulo:
        "Agente etiológico",

      itens: [

        "Bactérias pertencentes ao gênero Leptospira.",

        "As principais espécies de importância veterinária incluem Leptospira interrogans, Leptospira kirschneri e Leptospira borgpetersenii.",

        "Apresentam formato helicoidal, mobilidade característica e capacidade de adaptação a diferentes hospedeiros."
      ]
    },


    {
      emoji: "🔬",

      titulo:
        "Principais sorovares de importância veterinária",

      itens: [

        "Canicola → sorovar adaptado aos cães, associado principalmente à leptospirose canina.",

        "Icterohaemorrhagiae → relacionado principalmente aos roedores, importantes reservatórios da bactéria e fonte de infecção para diferentes espécies.",

        "Pomona → importante em suínos e bovinos, associado principalmente a alterações reprodutivas.",

        "Hardjo → sorovar adaptado aos bovinos, relacionado principalmente a problemas reprodutivos em rebanhos.",

        "Grippotyphosa → associado a diferentes espécies animais e encontrado em ambientes com presença de reservatórios."
      ]
    },


    {
      emoji: "🐾",

      titulo:
        "Relação entre sorovares e hospedeiros",

      itens: [

        "Cães → Canicola e Icterohaemorrhagiae apresentam grande importância na leptospirose canina.",

        "Bovinos → Hardjo e Pomona estão relacionados principalmente a problemas reprodutivos.",

        "Suínos → Pomona apresenta importância devido às alterações reprodutivas e perdas produtivas.",

        "Roedores → Icterohaemorrhagiae possui relação com reservatórios ambientais e manutenção da bactéria."
      ]
    }

  ],


 tabelas: [

  {
    titulo:
      "Principais hospedeiros e sorovares relacionados",

    emoji:
      "🐾",

    colunas: [
      "Espécie",
      "Sorovares de importância",
      "Relação com a doença"
    ],

    linhas: [

      [
        "🐕 Cães",
        "Canicola e Icterohaemorrhagiae",
        "Relacionados à leptospirose canina, podendo causar alterações renais, hepáticas e manifestações sistêmicas."
      ],

      [
        "🐄 Bovinos",
        "Hardjo e Pomona",
        "Associados principalmente a problemas reprodutivos, como abortamentos e redução dos índices produtivos."
      ],

      [
        "🐖 Suínos",
        "Pomona",
        "Relacionados a alterações reprodutivas e perdas econômicas na produção."
      ],

      [
        "🐀 Roedores",
        "Icterohaemorrhagiae",
        "Importantes reservatórios, contribuindo para a manutenção da bactéria no ambiente."
      ]

    ]

  }

],
  

},
patogenia:{

introducao:

"A leptospirose ocorre após a entrada da bactéria no organismo, seguida de disseminação pelo sangue e colonização de diferentes tecidos. A capacidade de persistência principalmente nos rins favorece a eliminação do agente pela urina e manutenção do ciclo de transmissão.",


blocos:[


{

emoji:"🚪",

titulo:"Entrada do agente",

texto:

"A bactéria penetra no organismo principalmente através de mucosas, pele lesionada ou contato direto com ambientes contaminados por urina de animais infectados."

},



{

emoji:"🩸",

titulo:"Disseminação sanguínea",

texto:

"Após a entrada no hospedeiro ocorre leptospiremia, permitindo a distribuição da bactéria para diferentes órgãos e tecidos."

},



{

emoji:"🧬",

titulo:"Colonização dos órgãos",

texto:

"A Leptospira apresenta tropismo por determinados tecidos, principalmente rins, fígado e órgãos relacionados ao sistema reprodutivo."

},



{

emoji:"💧",

titulo:"Eliminação pela urina",

texto:

"Após a colonização renal, animais infectados podem eliminar a bactéria pela urina, contaminando o ambiente e favorecendo novas infecções."

}


]


},




epidemiologia:{

introducao:

"A leptospirose apresenta distribuição mundial e sua ocorrência está relacionada à presença de animais reservatórios, condições ambientais favoráveis e contato entre hospedeiros suscetíveis.",


blocos:[


{

emoji:"🌎",

titulo:"Distribuição",

texto:

"A enfermidade possui ocorrência mundial, sendo mais frequente em regiões com clima quente e úmido, onde a sobrevivência da bactéria no ambiente é favorecida."

},



{

emoji:"🐀",

titulo:"Reservatórios",

texto:

"Roedores e outros animais podem atuar como reservatórios, mantendo a bactéria no ambiente e eliminando o agente pela urina."

},



{

emoji:"💧",

titulo:"Ambiente",

texto:

"Locais com água parada, enchentes, solo úmido e matéria orgânica favorecem a permanência da Leptospira fora do hospedeiro."

},



{

emoji:"🔄",

titulo:"Transmissão",

texto:

"A transmissão ocorre principalmente pelo contato com urina, água ou solo contaminado. A bactéria penetra através de mucosas ou lesões na pele."

},



{

emoji:"👩‍⚕️",

titulo:"Importância zoonótica",

texto:

"Por ser uma zoonose, a leptospirose representa risco para médicos veterinários, trabalhadores rurais e pessoas expostas a ambientes contaminados."

}


]


},





sinaisClinicos:{

introducao:

"As manifestações clínicas da leptospirose variam conforme a espécie acometida, o sorovar envolvido e a resposta imunológica do hospedeiro. Alguns animais podem apresentar infecção subclínica.",


blocos:[


{

emoji:"🐕",

titulo:"Cães",

itens:[

"Febre",

"Apatia e anorexia",

"Vômitos e alterações gastrointestinais",

"Alterações renais",

"Icterícia",

"Insuficiência renal ou hepática em casos graves"

]

},



{

emoji:"🐄",

titulo:"Bovinos",

itens:[

"Abortamentos",

"Infertilidade",

"Queda na produção leiteira",

"Nascimento de animais fracos",

"Retorno ao cio",

"Problemas reprodutivos"

]

},



{

emoji:"🐖",

titulo:"Suínos",

itens:[

"Abortamentos",

"Natimortalidade",

"Infertilidade",

"Redução dos índices reprodutivos",

"Problemas relacionados à reprodução"

]

},



{

emoji:"⚠️",

titulo:"Características da infecção",

itens:[

"Animais podem permanecer sem sinais clínicos aparentes",

"A eliminação urinária mantém a contaminação ambiental",

"A gravidade depende da espécie e do sorovar envolvido"

]

}


]


},
diagnostico:{

introducao:

"O diagnóstico da leptospirose envolve a associação entre histórico epidemiológico, sinais clínicos e exames laboratoriais. Os métodos podem identificar diretamente o agente ou avaliar a resposta imunológica do hospedeiro.",


metodos:[

"mat",

"pcr",

"elisa",

"cultura-bacteriologica",

"imuno-histoquimica"

]

},





tratamento:{

introducao:

"O tratamento da leptospirose tem como objetivo eliminar o agente, reduzir a disseminação da bactéria e controlar as alterações sistêmicas causadas pela infecção.",


blocos:[


{

emoji:"💊",

titulo:"Terapia antimicrobiana",

texto:

"O uso de antimicrobianos é indicado para reduzir a presença da bactéria no organismo e diminuir a eliminação do agente pelos animais infectados."

},



{

emoji:"🩺",

titulo:"Tratamento de suporte",

texto:

"Animais com alterações renais, hepáticas ou sistêmicas podem necessitar de suporte intensivo conforme a gravidade do quadro clínico."

},



{

emoji:"🐕",

titulo:"Cuidados em animais infectados",

texto:

"O manejo dos animais deve considerar o risco de transmissão, adotando medidas de isolamento e higiene para reduzir a contaminação ambiental."

},



{

emoji:"🌎",

titulo:"Controle da fonte de infecção",

texto:

"A identificação de animais infectados e redução da eliminação bacteriana são medidas importantes para interromper o ciclo da doença."

}


]


},






prevencao:{

introducao:

"A prevenção da leptospirose depende da integração entre vacinação, controle ambiental, manejo sanitário e redução do contato com fontes contaminadas.",


blocos:[

{
 emoji:"💉",
 titulo:"Vacinação",
 texto:"A vacinação auxilia na redução da ocorrência de casos clínicos e contribui para o controle da leptospirose nas diferentes espécies animais.",
 destaque:true,

 tags:[
   "📅 Reforço anual",
   "🐕 Cães",
   "🐄 Ruminantes",
   "🐖 Suínos"
 ],

 informacoes:[
   {
     titulo:"Frequência",
     texto:"A vacinação deve seguir o protocolo recomendado para cada espécie, geralmente com reforços anuais conforme orientação veterinária."
   },
   {
     titulo:"Espécies vacinadas",
     texto:"Disponível para cães, ruminantes e suínos, auxiliando na redução da ocorrência da enfermidade."
   }
 ]
},



{

emoji:"🐀",

titulo:"Controle de reservatórios",

texto:

"O controle de roedores e outros possíveis reservatórios reduz a manutenção da bactéria no ambiente."

},



{

emoji:"💧",

titulo:"Manejo ambiental",

texto:

"A redução de ambientes favoráveis à sobrevivência da Leptospira, como locais úmidos e água contaminada, auxilia na prevenção."

},



{

emoji:"🧼",

titulo:"Biossegurança",

texto:

"O uso de equipamentos de proteção individual e cuidados durante o manejo de animais infectados reduzem o risco zoonótico."

}


]


},


casosClinicos: [

  {
    id: "leptospirose-caso-01",

    titulo:
      "Leptospirose canina com comprometimento renal e hepático",

    especie:
      "Canino",

    idade:
      "Adulto",

    historico:
      "Animal atendido com histórico de apatia, redução do apetite, vômitos e alterações compatíveis com doença sistêmica. Durante a investigação clínica, foi considerada a possibilidade de infecção por Leptospira spp.",

    sinais: [
      "Apatia",
      "Anorexia",
      "Vômitos",
      "Icterícia",
      "Alterações renais"
    ],

    exames:
      "Foram realizados exames laboratoriais e testes específicos para investigação da infecção por Leptospira spp., incluindo métodos sorológicos.",

    diagnostico:
      "Leptospirose canina associada à infecção por Leptospira spp.",

    discussao:
      "A leptospirose em cães apresenta grande importância clínica devido ao potencial de causar alterações renais e hepáticas. O diagnóstico deve considerar a associação entre histórico, sinais clínicos, alterações laboratoriais e exames específicos."
  },



  {
    id: "leptospirose-caso-02",

    titulo:
      "Leptospirose bovina associada a perdas reprodutivas",

    especie:
      "Bovino",

    idade:
      "Fêmea adulta em idade reprodutiva",

    historico:
      "Rebanho bovino apresentou aumento de problemas reprodutivos, incluindo ocorrência de abortamentos e redução dos índices produtivos. A investigação epidemiológica indicou suspeita de enfermidade infecciosa associada à circulação de Leptospira spp.",

    sinais: [
      "Aborto no terço final da gestação",
      "Nascimento de bezerros fracos",
      "Falhas reprodutivas",
      "Redução da produtividade"
    ],

    exames:
      "Foram realizados exames sorológicos para investigação da presença de anticorpos contra Leptospira spp.",

    diagnostico:
      "Leptospirose bovina associada à infecção por Leptospira spp.",

    discussao:
      "A leptospirose bovina apresenta grande impacto econômico devido aos prejuízos reprodutivos. A investigação deve envolver avaliação clínica, epidemiológica e exames laboratoriais para identificação dos animais infectados."
  },



  {
    id: "leptospirose-caso-03",

    titulo:
      "Leptospirose em suínos com alterações reprodutivas",

    especie:
      "Suíno",

    idade:
      "Matriz adulta em fase reprodutiva",

    historico:
      "Granja apresentou aumento de alterações reprodutivas, incluindo perdas gestacionais e redução do desempenho reprodutivo das matrizes. A leptospirose foi considerada como uma das possíveis causas infecciosas.",

    sinais: [
      "Abortamentos",
      "Natimortalidade",
      "Nascimento de leitões fracos",
      "Alterações reprodutivas"
    ],

    exames:
      "Foram realizados exames laboratoriais, incluindo testes sorológicos, para investigação da infecção por Leptospira spp.",

    diagnostico:
      "Leptospirose suína associada à infecção por Leptospira spp.",

    discussao:
      "Em suínos, a leptospirose possui importância principalmente pelos impactos reprodutivos. O controle envolve diagnóstico adequado, medidas de biossegurança, controle ambiental e programas de prevenção."
  }

],

imagens:[

{
src:"/images/doencas/leptospirose/01-leptospira-microscopia.jpg",

titulo:"Leptospira spp. em microscopia",

categoria:"Agente etiológico",

descricao:
"Imagem representativa da bactéria do gênero Leptospira, caracterizada pelo formato helicoidal e mobilidade."


},


{
src:"/images/doencas/leptospirose/02-ciclo-transmissao.jpg",

titulo:"Ciclo de transmissão da leptospirose",

categoria:"Epidemiologia",

descricao:
"Representação das principais vias de transmissão da Leptospira envolvendo animais infectados, ambiente contaminado e hospedeiros suscetíveis."


},


{
src:"/images/doencas/leptospirose/03-ambiente-contaminado.jpg",

titulo:"Ambiente favorável à transmissão",

categoria:"Epidemiologia",

descricao:
"Locais úmidos, com presença de água contaminada ou matéria orgânica, favorecem a sobrevivência da bactéria no ambiente."


},


{
src:"/images/doencas/leptospirose/04-leptospirose-canina.jpg",

titulo:"Leptospirose em cães",

categoria:"Sinais clínicos",

descricao:
"Representação da ocorrência da doença em cães, espécie frequentemente acometida na rotina clínica veterinária."


},


{
src:"/images/doencas/leptospirose/05-alteracoes-renais.jpg",

titulo:"Comprometimento renal",

categoria:"Patogenia",

descricao:
"A Leptospira apresenta tropismo pelos rins, podendo causar alterações renais e favorecer a eliminação do agente pela urina."


},


{
src:"/images/doencas/leptospirose/06-diagnostico-mat.jpg",

titulo:"Teste de Aglutinação Microscópica (MAT)",

categoria:"Diagnóstico",

descricao:
"Método sorológico utilizado para detecção de anticorpos contra diferentes sorovares de Leptospira."


},


{
src:"/images/doencas/leptospirose/07-vacinacao-leptospirose.jpg",

titulo:"Vacinação contra leptospirose ovina, bovina, caprina e suína",

categoria:"Prevenção",

descricao:
"A vacinação é uma das principais medidas preventivas, auxiliando na redução da ocorrência de casos clínicos."

},


{
src:"/images/doencas/leptospirose/08-vacinacao-leptospirose.jpg",

titulo:"Vacinação contra leptospirose canina",

categoria:"Prevenção",

descricao:
"A vacinação é uma das principais medidas preventivas, auxiliando na redução da ocorrência de casos clínicos."
}
],

referencias:[




{

titulo:

"Updated ACVIM consensus statement on leptospirosis in dogs",

autores:

"Sykes et al.",

fonte:

"J Vet Intern Med",

ano:

"2023",

link:"https://pmc.ncbi.nlm.nih.gov/articles/PMC10658540/"

},



{

titulo:

"Guia de Vigilância em Saúde - Leptospirose",

autores:

"Ministério da Saúde",

fonte:

"Manual técnico",

ano:

"Atualizado",

link:"https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-3-6a-edicao/"

}


],
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