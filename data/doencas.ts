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
  src:"/images/doencas/brucelose/03-brucelose-fluxograma.jpg",

  titulo:
  "Fluxograma do diagnóstico da brucelose bovina no PNCEBT",

  categoria:
  "Diagnóstico",

  descricao:
  "Fluxo diagnóstico da brucelose bovina conforme o Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose Animal (PNCEBT), demonstrando as etapas de realização dos testes de tuberculinização, identificação de animais reagentes e adoção das medidas sanitárias de controle."
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
      "O agente pode se disseminar para diferentes tecidos, apresentando tropismo por órgãos associados ao sistema reprodutivo."
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
  "fluorescencia-polarizada",
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
"A vacina RB51 é a única alternativa autorizada para regularizar fêmeas bovinas com mais de 8 meses de idade que perderam o prazo da vacinação obrigatória. Como ela não interfere nos testes de diagnóstico da brucelose, seu uso em animais mais velhos é exclusivo para fêmeas que não foram vacinadas com a B19 quando bezerras."
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
id:"clostridioses",

nome:"Clostridioses",

agente:"Clostridium spp.",

categoria:"Bacterianas",

icone:"🧫",

zoonose:false,

vacina:true,

eutanasia:false,

notificacaoObrigatoria:false,


hospedeiros:[

"Bovinos",

"Ovinos",

"Caprinos",

"Suínos",

"Equinos"

],


palavrasChave:[

"clostridioses",

"clostridium",

"botulismo",

"tétano",

"manqueira",

"carbúnculo sintomático",

"enterotoxemia",

"gangrena gasosa"

],


imagem:"/images/doencas/clostridioses.jpg",



imagens:[


{
src:"/images/doencas/clostridioses/01-clostridium-microscopia.jpg",

titulo:"Clostridium spp.",

categoria:"Agente etiológico",

descricao:
"Bactérias do gênero Clostridium caracterizadas por serem Gram positivas, anaeróbias e formadoras de esporos."
},



{
src:"/images/doencas/clostridioses/02-tetano-equino.jpg",

titulo:
"Tétano em equino",

categoria:
"Apresentação clínica",

descricao:
"Animal apresentando sinais compatíveis com tétano, incluindo rigidez muscular, dificuldade locomotora e postura característica causada pela neurotoxina produzida por Clostridium tetani."
},

{
src:"/images/doencas/clostridioses/04-botulismo-bovino.jpg",

titulo:
"Botulismo em bovino",

categoria:
"Apresentação clínica",

descricao:
"Quadro clínico de botulismo caracterizado por fraqueza muscular progressiva e paralisia flácida causada pela ação da toxina botulínica."
},

{
src:"/images/doencas/clostridioses/05-carbunculo-sintomatico.jpg",

titulo:
"Carbúnculo sintomático",

categoria:
"Apresentação clínica",

descricao:
"Lesão muscular associada ao Clostridium chauvoei, caracterizada por inflamação, necrose e produção de gás nos tecidos musculares."
},

{
src:"/images/doencas/clostridioses/03-necrose-muscular.jpg",

titulo:"Necrose muscular associada às clostridioses",

categoria:"Lesão patológica",

descricao:
"Lesões musculares causadas pela ação de toxinas produzidas por determinadas espécies de Clostridium."
},


{
src:"/images/doencas/clostridioses/04-vacinacao-clostridioses.jpg",

titulo:"Vacinação contra clostridioses",

categoria:"Prevenção",

descricao:
"A vacinação é uma das principais medidas preventivas contra enfermidades causadas por Clostridium spp."
}


],



visaoGeral:{

introducao:

"As clostridioses compreendem um grupo de enfermidades causadas por bactérias do gênero Clostridium spp., caracterizadas principalmente pela produção de toxinas. Apresentam grande importância na medicina veterinária devido à rápida evolução dos quadros clínicos e elevada mortalidade.",


cards:[


{
emoji:"🦠",

titulo:"Características",

itens:[

"Bactérias Gram positivas",

"Formadoras de esporos",

"Anaeróbias",

"Produtoras de diferentes tipos de toxinas"

]

},


{
emoji:"☠️",

titulo:"Mecanismo de ação",

itens:[

"Produção de toxinas letais",

"Toxinas com ação neurológica",

"Toxinas responsáveis por necrose e lesões teciduais"

]

},


{
emoji:"🐄",

titulo:"Principais apresentações",

itens:[

"Botulismo",

"Tétano",

"Carbúnculo sintomático",

"Enterotoxemias",

"Gangrenas gasosas"

]

}


]


},



etiologia:{


introducao:

"As bactérias do gênero Clostridium são bacilos Gram positivos, anaeróbios obrigatórios e capazes de formar esporos resistentes. A doença ocorre principalmente pela multiplicação bacteriana e produção de toxinas em condições favoráveis.",


listas:[


{

emoji:"🧫",

titulo:"Características do agente",

itens:[

"Bactérias Gram positivas",

"Formato de bastonete",

"Produzem endósporos",

"Possuem capacidade de sobrevivência ambiental prolongada"

]

},



{

emoji:"☠️",

titulo:"Principais espécies envolvidas",

itens:[

"Clostridium botulinum → Botulismo",

"Clostridium tetani → Tétano",

"Clostridium chauvoei → Carbúnculo sintomático",

"Clostridium perfringens → Enterotoxemias",

"Clostridium septicum → Gangrena gasosa"

]

}


]


},
patogenia:{

introducao:

"As clostridioses apresentam diferentes mecanismos patogênicos de acordo com a espécie de Clostridium envolvida. De maneira geral, ocorre multiplicação bacteriana em ambientes favoráveis, seguida pela produção de toxinas responsáveis pelas alterações clínicas.",


blocos:[


{
emoji:"🌱",

titulo:"Entrada e permanência dos esporos",

texto:

"Os esporos de Clostridium podem permanecer no ambiente por longos períodos. A infecção ocorre pela ingestão de alimentos contaminados, penetração através de ferimentos ou multiplicação de bactérias presentes naturalmente no organismo."
},



{
emoji:"🧫",

titulo:"Germinação e multiplicação bacteriana",

texto:

"Em condições favoráveis, como baixa disponibilidade de oxigênio, alterações teciduais ou desequilíbrio intestinal, os esporos germinam e as bactérias passam a se multiplicar."
},



{
emoji:"☠️",

titulo:"Produção de toxinas",

texto:

"As toxinas produzidas pelos Clostridium são responsáveis pelos principais efeitos patológicos, podendo causar alterações neurológicas, necrose muscular, hemólise ou lesões intestinais."
},



{
emoji:"⚠️",

titulo:"Evolução clínica",

texto:

"Devido à ação rápida das toxinas, algumas clostridioses apresentam evolução aguda e elevada mortalidade, principalmente quando o diagnóstico e tratamento são tardios."
}



]


},




epidemiologia:{


introducao:

"As clostridioses possuem distribuição mundial e estão relacionadas principalmente à presença dos esporos no ambiente e aos fatores que favorecem sua multiplicação no hospedeiro.",


blocos:[


{
emoji:"🌎",

titulo:"Distribuição",

texto:

"Os agentes do gênero Clostridium apresentam ampla distribuição ambiental, principalmente em solos, água e matéria orgânica."
},



{
emoji:"🌱",

titulo:"Reservatório ambiental",

texto:

"Os esporos permanecem no ambiente por longos períodos, constituindo uma importante fonte de infecção para os animais."
},



{
emoji:"🐄",

titulo:"Espécies acometidas",

texto:

"Diferentes espécies animais podem ser afetadas, incluindo bovinos, ovinos, caprinos, suínos e equinos, dependendo do agente envolvido."
},



{
emoji:"⚠️",

titulo:"Fatores predisponentes",

texto:

"Alterações alimentares, ferimentos, manejo inadequado, presença de tecidos necrosados e condições de anaerobiose favorecem o desenvolvimento da enfermidade."
}



]


},





sinaisClinicos:{


introducao:

"As manifestações clínicas das clostridioses variam conforme a espécie bacteriana e a toxina produzida. Os principais quadros incluem doenças neurológicas, musculares e digestivas.",


blocos:[



{
emoji:"🧠",

titulo:"Botulismo",

itens:[

"Paralisia flácida progressiva",

"Fraqueza muscular",

"Dificuldade de locomoção",

"Decúbito",

"Paralisia respiratória em casos graves"

]

},




{
emoji:"⚡",

titulo:"Tétano",

itens:[

"Rigidez muscular",

"Hiperexcitabilidade",

"Contrações musculares",

"Protrusão da terceira pálpebra",

"Opistótono"

]

},




{
emoji:"💪",

titulo:"Carbúnculo sintomático e mionecroses",

itens:[

"Aumento de volume muscular",

"Crepitação na musculatura",

"Dor local",

"Necrose muscular",

"Morte rápida"

]

},




{
emoji:"🩸",

titulo:"Enterotoxemias",

itens:[

"Diarreia",

"Dor abdominal",

"Sinais neurológicos",

"Morte súbita",

"Alterações intestinais"

]

}



]


},
diagnostico:{

introducao:

  "O diagnóstico clínico é fundamental nas clostridioses, pois muitas formas da doença apresentam evolução muito rápida e podem levar o animal à morte em curto período. A avaliação do histórico, dos sinais clínicos e dos achados epidemiológicos é essencial para estabelecer a suspeita e iniciar o manejo terapêutico imediatamente, não sendo possível aguardar a realização de testes confirmatórios antes da intervenção. Os exames laboratoriais podem auxiliar na investigação diagnóstica, mas não devem atrasar a instituição do tratamento.",


metodos:[

"cultura-bacteriologica",

"microscopia",

"pcr",

"elisa"

]

},




tratamento:{

introducao:

"O tratamento das clostridioses apresenta limitações devido à rápida ação das toxinas e evolução aguda de muitos quadros. A abordagem depende da enfermidade específica e do estágio clínico do animal.",


blocos:[


{

emoji:"💊",

titulo:"Terapia antimicrobiana",

texto:

"O uso de antimicrobianos pode ser indicado em algumas situações, principalmente quando há suspeita de infecção bacteriana ativa. A escolha deve considerar a espécie acometida e avaliação veterinária."

},



{

emoji:"🩺",

titulo:"Tratamento de suporte",

texto:

"Animais acometidos podem necessitar de suporte clínico, incluindo controle da dor, hidratação e manejo das alterações sistêmicas."

},



{

emoji:"💉",

titulo:"Antitoxinas",

texto:

"Em algumas enfermidades, como tétano e botulismo, o uso de antitoxinas específicas pode auxiliar quando administrado em fases iniciais do quadro."

},



{

emoji:"🧹",

titulo:"Controle da fonte de infecção",

texto:

"A remoção de tecidos contaminados, limpeza de ferimentos e manejo adequado do ambiente são importantes para reduzir novas ocorrências."

}


]


},





prevencao:{

introducao:

"A prevenção das clostridioses é baseada principalmente na vacinação, manejo sanitário adequado e redução dos fatores predisponentes.",


blocos:[


{

emoji:"💉",

titulo:"Vacinação",

destaque:true,

texto:

"A vacinação é a principal estratégia de prevenção contra diversas clostridioses. Os protocolos devem seguir a espécie animal, idade e situação epidemiológica da propriedade.",


tags:[

"💉 Principal medida preventiva",

"🐄 Bovinos",

"🐑 Pequenos ruminantes"

],


informacoes:[


{

titulo:"Importância",

texto:

"As vacinas estimulam a produção de anticorpos contra toxinas produzidas pelos Clostridium, reduzindo a ocorrência de quadros graves."

}

]

},




{

emoji:"🌱",

titulo:"Manejo ambiental",

texto:

"Evitar contaminação de alimentos e água, realizar descarte adequado de animais mortos e reduzir condições favoráveis à multiplicação bacteriana."

},




{

emoji:"🩹",

titulo:"Cuidados com ferimentos",

texto:

"A limpeza e tratamento adequado de feridas reduzem o risco de infecções por espécies associadas a tecidos necrosados, como Clostridium tetani."

},




{

emoji:"🐄",

titulo:"Manejo sanitário",

texto:

"O acompanhamento do rebanho, vacinação correta e adoção de medidas de biossegurança são fundamentais para reduzir perdas."

}



]


},




referencias:[


{

titulo:

"Clostridial Diseases of Animals",

autores:

"Veterinary Microbiology and Infectious Diseases",

fonte:

"Literatura veterinária",

ano:

"Atualizado",

link: "https://onlinelibrary.wiley.com/doi/book/10.1002/9781118728291"

},


{

titulo:

"Clostridial Diseases",

autores:

"Merck Veterinary Manual",

fonte:

"Manual veterinário",

ano:

"Atualizado",

link: "https://www.vet.cornell.edu/animal-health-diagnostic-center/programs/nyschap/modules-documents/clostridial-diseases"
}


],




casosClinicos:[


{

id:"clostridioses-caso-01",

titulo:

"Carbúnculo sintomático em bovino jovem",

especie:

"Bovino",

idade:

"Animal jovem",

historico:

"Animal apresentou aumento de volume muscular, dificuldade de locomoção e evolução rápida do quadro clínico.",

sinais:[

"Aumento de volume muscular",

"Crepitação",

"Claudicação",

"Morte súbita"

],

exames:

"Investigação baseada em achados clínicos, epidemiológicos e exames laboratoriais.",

diagnostico:

"Carbúnculo sintomático associado à infecção por Clostridium chauvoei.",

discussao:

"O carbúnculo sintomático apresenta evolução rápida e alta mortalidade. A vacinação é a principal medida de prevenção."

},



{

id:"clostridioses-caso-02",

titulo:

"Tétano em equino após ferimento",

especie:

"Equino",

idade:

"Adulto",

historico:

"Animal apresentou ferimento prévio seguido de rigidez muscular progressiva.",

sinais:[

"Rigidez muscular",

"Hiperexcitabilidade",

"Dificuldade locomotora"

],

exames:

"Diagnóstico baseado principalmente na avaliação clínica e histórico do animal.",

diagnostico:

"Tétano associado à infecção por Clostridium tetani.",

discussao:

"O tétano está relacionado à produção de neurotoxina pelo agente e pode ser prevenido por vacinação e cuidados com ferimentos."

}

]


},






{
id:"garrotilho",

nome:"Garrotilho",

agente:"Streptococcus equi",

categoria:"Bacterianas",

icone:"🐴",

zoonose:false,

vacina:true,

eutanasia:false,

notificacaoObrigatoria:false,


hospedeiros:[

"Equídeos"

],


palavrasChave:[

"garrotilho",

"streptococcus equi",

"equino",

"linfadenite",

"rinofaringite equina"

],


imagem:"/images/doencas/garrotilho.jpg",

imagens:[

{
src:"/images/doencas/garrotilho/01-streptococcus-equi.jpg",

titulo:
"Streptococcus equi",

categoria:
"Agente etiológico",

descricao:
"Imagem ilustrativa do agente bacteriano Streptococcus equi, responsável pelo desenvolvimento do garrotilho em equídeos."

},


{
src:"/images/doencas/garrotilho/02-linfonodos-aumentados.jpg",

titulo:
"Aumento dos linfonodos submandibulares",

categoria:
"Sinais clínicos",

descricao:
"Animal apresentando aumento de volume na região dos linfonodos associado à formação de abscessos característica do garrotilho."

},


{
src:"/images/doencas/garrotilho/03-secrecao-nasal.jpg",

titulo:
"Secreção nasal purulenta",

categoria:
"Sinais clínicos",

descricao:
"Secreção nasal purulenta observada em equinos acometidos pela infecção por Streptococcus equi."

},


{
src:"/images/doencas/garrotilho/04-abscesso-linfonodo.jpg",

titulo:
"Abscesso em linfonodo regional",

categoria:
"Patogenia",

descricao:
"Formação de abscesso em linfonodos regionais devido à multiplicação bacteriana e resposta inflamatória."

},


{
src:"/images/doencas/garrotilho/05-transmissao-equinos.jpg",

titulo:
"Transmissão entre equídeos",

categoria:
"Epidemiologia",

descricao:
"O contato entre animais infectados e suscetíveis favorece a disseminação do agente dentro das propriedades."
}

],

visaoGeral:{

introducao:

"O garrotilho, também conhecido como linfadenite ou rinofaringite equina, é uma doença infectocontagiosa purulenta causada por Streptococcus equi. A enfermidade acomete principalmente o trato respiratório superior de equídeos jovens, podendo causar formação de abscessos em linfonodos regionais.",


cards:[


{
emoji:"⭐",

titulo:"Destaques",

itens:[

"Doença bacteriana altamente contagiosa entre equídeos",

"Acomete principalmente animais jovens",

"Caracterizada por secreção nasal, febre e linfadenomegalia",

"Também conhecida como 'strangles' devido ao estrangulamento causado pela compressão dos linfonodos"

]

},



{
emoji:"🦠",

titulo:"Características",

itens:[

"Agente pertencente ao gênero Streptococcus",

"Bactéria Gram positiva com presença de cápsula",

"Produção de abscessos purulentos em linfonodos regionais",

"Pode permanecer no ambiente associado a secreções contaminadas"

]

},



{
emoji:"🐴",

titulo:"Importância clínica",

itens:[

"Possui grande impacto em propriedades com criação de equídeos",

"Pode causar disseminação rápida entre animais suscetíveis",

"Animais recuperados podem desenvolver imunidade, porém alguns podem permanecer portadores"

]

}

]


},



etiologia:{

introducao:

"O garrotilho é causado pela bactéria Streptococcus equi, um diplococo Gram positivo responsável por infecção purulenta do trato respiratório superior dos equídeos.",



blocos:[


{

emoji:"🦠",

titulo:"Agente etiológico",

itens:[

"Streptococcus equi",

"Bactéria em formato de diplococo Gram positivo",

"Possui cápsula contendo proteína M, relacionada aos mecanismos de evasão do sistema imune"

]

},



{

emoji:"🔬",

titulo:"Características bacterianas",

itens:[

"Apresenta colônias beta-hemolíticas puntiformes em ágar sangue",

"Pode sobreviver por semanas em pus dessecado",

"Apresenta sensibilidade a penicilinas, cefalosporinas, eritromicina e sulfa + trimetoprim",

"Resistência descrita aos aminoglicosídeos"

]

}


]

},



epidemiologia:{

introducao:

"O garrotilho apresenta distribuição mundial e pode acometer todos os equídeos, sendo observado principalmente em animais jovens.",


blocos:[


{

emoji:"🌎",

titulo:"Distribuição",

texto:

"Doença presente mundialmente, com ocorrência principalmente em locais onde há concentração de equídeos."

},


{

emoji:"🐴",

titulo:"Hospedeiros",

texto:

"Todos os equídeos são suscetíveis, sendo os animais jovens mais frequentemente acometidos."

},


{

emoji:"💧",

titulo:"Transmissão",

texto:

"A transmissão ocorre principalmente pelo contato com secreções nasais, fômites contaminados e materiais provenientes de animais infectados."

},


{

emoji:"🧫",

titulo:"Portadores",

texto:

"Equídeos aparentemente saudáveis podem atuar como portadores assintomáticos, contribuindo para a manutenção da bactéria."

}

]


},

patogenia:{

introducao:

"A infecção ocorre após a entrada de Streptococcus equi pelas vias respiratórias, seguida de colonização da mucosa nasal e faríngea. A bactéria invade tecidos linfáticos regionais, causando inflamação e formação de abscessos nos linfonodos.",


blocos:[


{

emoji:"👃",

titulo:"Entrada do agente",

texto:

"A bactéria penetra principalmente através da mucosa nasal ou oral durante o contato com secreções contaminadas de animais infectados."

},



{

emoji:"🦠",

titulo:"Colonização respiratória",

texto:

"Após a entrada no organismo, Streptococcus equi coloniza a mucosa da nasofaringe e inicia processo inflamatório local."

},



{

emoji:"🧬",

titulo:"Disseminação para linfonodos",

texto:

"O agente alcança os linfonodos regionais, principalmente submandibulares e retrofaríngeos, promovendo formação de abscessos purulentos."

},



{

emoji:"💥",

titulo:"Formação de abscessos",

texto:

"A maturação dos abscessos causa aumento de volume dos linfonodos e pode levar à drenagem espontânea de secreção purulenta."

}


]


},




sinaisClinicos:{

introducao:

"As manifestações clínicas do garrotilho estão relacionadas principalmente ao comprometimento do trato respiratório superior e à resposta inflamatória causada pela infecção bacteriana.",


blocos:[


{

emoji:"🐴",

titulo:"Sinais respiratórios",

itens:[

"Secreção nasal purulenta",

"Corrimento nasal bilateral",

"Tosse",

"Dificuldade respiratória em casos graves"

]

},



{

emoji:"🌡️",

titulo:"Sinais sistêmicos",

itens:[

"Febre",

"Apatia",

"Redução do apetite",

"Depressão"

]

},



{

emoji:"🟣",

titulo:"Alterações nos linfonodos",

itens:[

"Aumento dos linfonodos submandibulares",

"Formação de abscessos",

"Dor e aumento de volume na região da cabeça e pescoço"

]

},



{

emoji:"⚠️",

titulo:"Complicações",

itens:[

"Empiema das bolsas guturais",

"Abscessos metastáticos em órgãos internos",

"Púrpura hemorrágica após infecção"

]

}


]


},





diagnostico:{

introducao:

"O diagnóstico do garrotilho é realizado pela associação entre histórico clínico, sinais apresentados pelo animal e identificação de Streptococcus equi em amostras biológicas.",


metodos:[

"cultura-bacteriologica",

"pcr",

"isolamento bacteriano",

"endoscopia das bolsas guturais"

]


},






tratamento:{

introducao:

"O tratamento do garrotilho depende da fase da doença e da gravidade dos sinais clínicos. O manejo adequado auxilia na recuperação e reduz a disseminação entre animais.",


blocos:[


{

emoji:"💊",

titulo:"Terapia antimicrobiana",

texto:

"O uso de antimicrobianos pode ser indicado principalmente em fases iniciais da infecção ou em casos com complicações, conforme avaliação veterinária."

},



{

emoji:"🩺",

titulo:"Tratamento de suporte",

texto:

"O suporte clínico inclui controle da febre, anti-inflamatórios quando indicados e cuidados com alimentação e hidratação."

},



{

emoji:"🧼",

titulo:"Manejo dos abscessos",

texto:

"Abscessos maduros podem necessitar de drenagem e higienização adequada para evitar contaminação ambiental."

},



{

emoji:"🚧",

titulo:"Isolamento",

texto:

"Animais infectados devem ser isolados para reduzir a transmissão para outros equídeos."

}


]


},






prevencao:{

introducao:

"A prevenção do garrotilho depende principalmente de medidas de biossegurança, isolamento de animais infectados e controle da entrada de novos animais na propriedade.",


blocos:[


{

emoji:"💉",

titulo:"Vacinação",

texto:

"A vacinação pode auxiliar na redução da ocorrência e gravidade dos casos, sendo indicada conforme avaliação veterinária e situação epidemiológica.",

destaque:true,

tags:[

"💉 Programa vacinal",

"🐴 Equídeos"

],


informacoes:[

{

titulo:"Importância",

texto:

"A vacinação contribui para reduzir sinais clínicos e perdas associadas à enfermidade."

}

]

},



{

emoji:"🚧",

titulo:"Isolamento de animais",

texto:

"Animais suspeitos ou positivos devem permanecer separados para evitar contato com animais saudáveis."

},



{

emoji:"🧼",

titulo:"Higiene e desinfecção",

texto:

"A limpeza de instalações, equipamentos e utensílios reduz a permanência da bactéria no ambiente."

},



{

emoji:"🐎",

titulo:"Quarentena",

texto:

"Novos animais introduzidos na propriedade devem passar por período de observação antes do contato com o plantel."

}


]


},





casosClinicos:[


{

id:"garrotilho-caso-01",

titulo:

"Garrotilho em potro jovem com sinais respiratórios",

especie:

"Equino",

idade:

"Animal jovem",

historico:

"Potro apresentou febre, secreção nasal purulenta e aumento de volume na região dos linfonodos mandibulares após contato com outros equinos.",

sinais:[

"Febre",

"Secreção nasal purulenta",

"Aumento dos linfonodos",

"Apatia"

],


exames:

"Foi realizada coleta de secreção nasal para isolamento bacteriano e confirmação da presença de Streptococcus equi.",


diagnostico:

"Garrotilho associado à infecção por Streptococcus equi.",


discussao:

"O garrotilho apresenta alta transmissibilidade entre equídeos. O diagnóstico precoce e isolamento dos animais acometidos são fundamentais para controlar surtos."

},



{

id:"garrotilho-caso-02",

titulo:

"Surto de garrotilho em propriedade de equinos",

especie:

"Equídeos",

idade:

"Animais jovens e adultos",

historico:

"Propriedade apresentou aumento de animais com secreção nasal, febre e aumento dos linfonodos após introdução de novos animais no plantel.",

sinais:[

"Febre",

"Corrimento nasal",

"Tosse",

"Linfonodos aumentados"

],


exames:

"Foi realizada investigação clínica e coleta de amostras respiratórias para identificação bacteriana.",


diagnostico:

"Infecção por Streptococcus equi compatível com quadro de garrotilho.",


discussao:

"A introdução de animais portadores é uma importante forma de entrada da doença nas propriedades. Medidas de quarentena e biossegurança são essenciais."

}
],
referencias:[

{
titulo:
"Streptococcus equi Infectious Disease Guidelines",

autores:
"American Association of Equine Practitioners (AAEP)",

fonte:
"AAEP",

ano:
"2020",

link:
"https://aaep.org/wp-content/uploads/2024/03/Strangles_DZ_Guidelines_FINAL_2020.pdf"

},


{
titulo:
"Streptococcus equi Infections in Horses: Guidelines for Treatment, Control, and Prevention of Strangles",

autores:
"Boyle AG et al.",

fonte:
"Journal of Veterinary Internal Medicine",

ano:
"2018",

link:
"https://pubmed.ncbi.nlm.nih.gov/29424487/"
}


],
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

  imagens:[


{

src:"/images/doencas/mormo/01-burkholderia-mallei.jpg",

titulo:
"Burkholderia mallei",

categoria:
"Agente etiológico",

descricao:
"Imagem representativa da bactéria Burkholderia mallei, agente causador do mormo em equídeos."


},



{

src:"/images/doencas/mormo/02-equino-mormo.jpg",

titulo:
"Equino acometido pelo mormo",

categoria:
"Apresentação clínica",

descricao:
"Equino apresentando alterações compatíveis com infecção por Burkholderia mallei."


},



{

src:"/images/doencas/mormo/03-lesoes-cutaneas.jpg",

titulo:
"Lesões cutâneas do mormo",

categoria:
"Sinais clínicos",

descricao:
"Lesões nodulares e alterações cutâneas associadas à forma cutânea da enfermidade."


},



{

src:"/images/doencas/mormo/04-secrecao-nasal.jpg",

titulo:
"Secreção nasal",

categoria:
"Sinais clínicos",

descricao:
"Secreção nasal associada ao comprometimento respiratório causado pelo agente."


},








{

src:"/images/doencas/mormo/07-diagnostico-mormo.jpg",

titulo:
"Diagnóstico do mormo",

categoria:
"Diagnóstico",

descricao:
"Testes laboratoriais utilizados na investigação de animais suspeitos."


},




],

 visaoGeral: {

introducao:

"O mormo é uma doença infectocontagiosa causada pela bactéria Burkholderia mallei, caracterizada principalmente por alterações respiratórias, cutâneas e linfáticas em equídeos. Possui grande importância sanitária devido ao seu potencial zoonótico, elevada capacidade de transmissão e necessidade de controle oficial.",


cards:[


{
emoji:"⭐",

titulo:"Destaques",

itens:[

"Doença bacteriana de notificação obrigatória",

"Principalmente acomete equídeos, especialmente cavalos",

"Apresenta potencial zoonótico, podendo infectar humanos",

"Pode causar formas respiratória, cutânea e disseminada"

]

},



{
emoji:"🦠",

titulo:"Características",

itens:[

"Causada pela bactéria Burkholderia mallei",

"Bactéria Gram-negativa, intracelular facultativa",

"Apresenta capacidade de sobrevivência no hospedeiro",

"Pode causar infecções crônicas ou agudas"

]

},



{
emoji:"🐴",

titulo:"Importância sanitária",

itens:[

"Possui impacto significativo na movimentação e comércio de equídeos",

"Animais positivos representam fonte de infecção",

"O controle envolve diagnóstico, isolamento e medidas oficiais",

"Não existe vacina comercial disponível"

]

}


]


},



etiologia:{


introducao:

"O mormo é causado pela bactéria Burkholderia mallei, um bacilo Gram-negativo pertencente ao complexo Burkholderia. O agente apresenta adaptação principalmente aos equídeos e possui capacidade de causar infecções persistentes.",



blocos:[



{

emoji:"🦠",

titulo:"Agente etiológico",

itens:[

"Burkholderia mallei",

"Bactéria Gram-negativa, imóvel e não formadora de esporos",

"Pertencente à família Burkholderiaceae",

"Apresenta capacidade de sobreviver no interior de células do hospedeiro"

]

},



{

emoji:"🔬",

titulo:"Características bacterianas",

itens:[

"Apresenta crescimento lento em meios laboratoriais",

"Pode apresentar colônias pequenas, lisas e translúcidas",

"Possui mecanismos de evasão da resposta imunológica",

"Relacionada ao desenvolvimento de infecções crônicas"

]

},



{

emoji:"🐴",

titulo:"Hospedeiros",

itens:[

"Equídeos são os principais hospedeiros naturais",

"Equinos apresentam maior importância epidemiológica",

"Pode acometer muares e asininos",

"Humanos podem desenvolver infecção após contato com animais infectados"

]

}


]


},
  epidemiologia:{


introducao:

"O mormo apresenta distribuição mundial e possui maior importância em regiões onde há criação e movimentação intensa de equídeos. A transmissão está relacionada principalmente ao contato direto ou indireto com secreções de animais infectados.",


blocos:[


{

emoji:"🌎",

titulo:"Distribuição",

texto:

"A enfermidade ocorre em diferentes regiões do mundo, sendo considerada uma doença de importância sanitária internacional devido ao impacto na criação de equídeos e ao risco zoonótico."

},



{

emoji:"🐴",

titulo:"Hospedeiros",

texto:

"Os equídeos, principalmente cavalos, são os principais hospedeiros da Burkholderia mallei. Muares e asininos também podem apresentar infecção."

},



{

emoji:"💧",

titulo:"Transmissão",

texto:

"A transmissão ocorre principalmente pelo contato com secreções de animais infectados, especialmente secreções nasais e lesões cutâneas contendo a bactéria."

},



{

emoji:"🧫",

titulo:"Fonte de infecção",

texto:

"Animais infectados, principalmente aqueles com formas respiratórias ou cutâneas da doença, representam importantes fontes de disseminação do agente."

},



{

emoji:"⚠️",

titulo:"Importância zoonótica",

texto:

"A infecção humana ocorre principalmente por contato direto com animais infectados ou materiais contaminados, sendo considerada uma enfermidade ocupacional para profissionais expostos."

}


]


},



patogenia:{


introducao:

"Após a entrada da Burkholderia mallei no organismo, ocorre multiplicação bacteriana e disseminação para diferentes tecidos. A evolução da doença depende da resposta imunológica do hospedeiro e da capacidade do agente de persistir no organismo.",


blocos:[


{

emoji:"🚪",

titulo:"Entrada do agente",

texto:

"A bactéria penetra principalmente através das mucosas respiratórias ou por lesões na pele durante o contato com secreções ou materiais contaminados."

},



{

emoji:"🫁",

titulo:"Infecção respiratória",

texto:

"Após a entrada pelas vias respiratórias, a bactéria pode se multiplicar nos tecidos pulmonares, causando lesões inflamatórias e formação de nódulos."

},



{

emoji:"🧬",

titulo:"Disseminação pelo organismo",

texto:

"A Burkholderia mallei pode alcançar diferentes órgãos através da circulação sanguínea e linfática, levando ao desenvolvimento de lesões sistêmicas."

},



{

emoji:"🩸",

titulo:"Formação de lesões",

texto:

"A infecção pode causar formação de nódulos, abscessos e inflamações nos vasos linfáticos, principalmente em pele, linfonodos e sistema respiratório."

},



{

emoji:"🔄",

titulo:"Evolução crônica",

texto:

"Alguns animais podem apresentar evolução lenta da doença, permanecendo como fontes de infecção e contribuindo para a manutenção do agente na população."

}


]


},


  sinaisClinicos:{


introducao:

"O mormo apresenta manifestações clínicas variáveis, podendo ocorrer formas respiratórias, cutâneas ou disseminadas. A intensidade dos sinais depende da evolução da infecção e da resposta do organismo do animal.",


blocos:[


{

emoji:"🫁",

titulo:"Forma respiratória",

itens:[

"Secreção nasal serosa ou purulenta",

"Tosse",

"Dificuldade respiratória",

"Febre",

"Lesões pulmonares"

]

},



{

emoji:"🩸",

titulo:"Forma cutânea",

itens:[

"Presença de nódulos subcutâneos",

"Formação de úlceras na pele",

"Aumento dos vasos linfáticos",

"Lesões semelhantes a cordões linfáticos"

]

},



{

emoji:"🐴",

titulo:"Sinais gerais",

itens:[

"Perda de peso progressiva",

"Apatia",

"Redução do desempenho",

"Debilidade do animal"

]

},



{

emoji:"⚠️",

titulo:"Evolução da doença",

itens:[

"Pode apresentar evolução aguda ou crônica",

"Animais crônicos podem permanecer como fonte de infecção",

"Alguns animais podem apresentar poucos sinais clínicos"

]

}


]


},
diagnostico: {

  introducao:
  "O diagnóstico do mormo deve ser realizado por meio da associação entre avaliação epidemiológica, sinais clínicos e testes laboratoriais específicos. Devido à importância sanitária da enfermidade, a confirmação diagnóstica deve seguir os protocolos oficiais estabelecidos pelo Serviço Veterinário Oficial.",


  metodos:[

    "maleina",
    "fixacao-complemento",
    "pcr",
    "cultura-bacteriologica"

  ]

},

  tratamento:{


introducao:

"O tratamento do mormo não é recomendado nos programas oficiais de controle sanitário devido ao risco de permanência de animais portadores e manutenção da bactéria no ambiente. As medidas adotadas são direcionadas principalmente ao controle e erradicação da enfermidade.",


blocos:[


{

emoji:"🚫",

titulo:"Animais positivos",

texto:

"Animais diagnosticados como positivos devem seguir as medidas sanitárias determinadas pelos órgãos oficiais, incluindo isolamento e eliminação sanitária quando indicada."

},



{

emoji:"🧼",

titulo:"Desinfecção e controle ambiental",

texto:

"A higienização de instalações, equipamentos e materiais que tiveram contato com animais infectados é fundamental para reduzir a disseminação da Burkholderia mallei."

},



{

emoji:"🐴",

titulo:"Isolamento dos animais suspeitos",

texto:

"Animais com suspeita clínica devem ser separados dos demais equídeos até a conclusão da investigação diagnóstica."

}


]


},




prevencao:{


introducao:

"A prevenção do mormo depende de medidas de biossegurança, controle sanitário dos equídeos e identificação precoce de animais infectados.",


blocos:[


{

emoji:"🔬",

titulo:"Diagnóstico e vigilância",

texto:

"A realização de exames em animais suspeitos e destinados à movimentação auxilia na identificação de animais infectados e reduz a disseminação da doença.",

destaque:true,

tags:[

"🔬 Testagem oficial",

"🐴 Equídeos",

"⚠️ Controle sanitário"

]

},



{

emoji:"🚚",

titulo:"Controle de movimentação",

texto:

"O controle do trânsito de equídeos e a exigência de documentação sanitária são medidas importantes para evitar a introdução da doença em propriedades livres."

},



{

emoji:"🧼",

titulo:"Biossegurança",

texto:

"A limpeza e desinfecção de instalações, equipamentos e utensílios reduzem o risco de transmissão entre animais."

},



{

emoji:"🐎",

titulo:"Quarentena",

texto:

"Novos animais introduzidos na propriedade devem permanecer em observação e passar por avaliação sanitária antes do contato com o plantel."

}


]


},

  referencias:[


{

titulo:

"Glanders (Malleus)",

autores:

"World Organisation for Animal Health (WOAH)",

fonte:

"WOAH - Terrestrial Animal Health Code",

ano:

"Atualizado",

link:

"https://www.woah.org/en/disease/glanders/"

},



{

titulo:

"Manual de Testes Diagnósticos e Vacinas para Animais Terrestres - Glanders",

autores:

"World Organisation for Animal Health (WOAH)",

fonte:

"WOAH Manual of Diagnostic Tests and Vaccines for Terrestrial Animals",

ano:

"Atualizado",

link:

"https://www.woah.org/en/what-we-do/standards/codes-and-manuals/terrestrial-manual-online-access/"

},



{

titulo:

"Programa Nacional de Sanidade dos Equídeos (PNSE)",

autores:

"Ministério da Agricultura e Pecuária (MAPA)",

fonte:

"Programa oficial de sanidade animal",

ano:

"Atualizado",

link:

"https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal"

}


],



casosClinicos:[


{

id:"mormo-caso-01",


titulo:

"Equino com sinais respiratórios suspeitos de mormo",


especie:

"Equino",


idade:

"Animal adulto",


historico:

"Animal apresentou histórico de perda progressiva de condição corporal, secreção nasal persistente e alteração respiratória. Durante a investigação clínica foi considerada a possibilidade de enfermidade infecciosa com comprometimento respiratório.",


sinais:[

"Secreção nasal purulenta",

"Tosse",

"Febre",

"Perda de peso"

],


exames:

"Foram realizados exames laboratoriais específicos para investigação da infecção por Burkholderia mallei, conforme protocolos oficiais.",


diagnostico:

"Mormo equino associado à infecção por Burkholderia mallei.",


discussao:

"O mormo deve ser considerado em equídeos com sinais respiratórios persistentes associados a histórico epidemiológico compatível. A confirmação diagnóstica é fundamental devido às medidas sanitárias necessárias para controle da enfermidade."

},




{

id:"mormo-caso-02",


titulo:

"Equino com lesões cutâneas e alterações linfáticas",


especie:

"Equino",


idade:

"Animal adulto",


historico:

"Animal apresentou formação de nódulos cutâneos e aumento de volume em vasos linfáticos superficiais. O caso foi encaminhado para investigação devido à suspeita de enfermidade infecciosa.",


sinais:[

"Nódulos subcutâneos",

"Lesões ulceradas",

"Aumento dos vasos linfáticos",

"Alterações de pele"

],


exames:

"Foi realizada investigação laboratorial associada à avaliação clínica e epidemiológica do animal.",


diagnostico:

"Infecção compatível com mormo causada por Burkholderia mallei.",


discussao:

"A forma cutânea do mormo apresenta lesões características relacionadas ao comprometimento dos vasos linfáticos. A identificação de animais infectados é essencial para impedir a disseminação da doença."

},




{

id:"mormo-caso-03",


titulo:

"Investigação sanitária em propriedade com suspeita de mormo",


especie:

"Equídeos",


idade:

"Animais adultos",


historico:

"Após a introdução de novos animais na propriedade, foram observados sinais clínicos suspeitos em alguns equídeos. Foi realizada investigação sanitária para identificação de possíveis animais infectados.",


sinais:[

"Alterações respiratórias",

"Secreção nasal",

"Redução do desempenho",

"Suspeita epidemiológica"

],


exames:

"Foram realizados testes diagnósticos oficiais para investigação da presença de Burkholderia mallei.",


diagnostico:

"Caso compatível com mormo em equídeos.",


discussao:

"O controle do mormo depende da vigilância sanitária, diagnóstico dos animais suspeitos e adoção de medidas de controle para evitar a disseminação dentro das propriedades."

}


],

},

{
id:"tuberculose",

nome:"Tuberculose",

agente:"Mycobacterium bovis",

categoria:"Bacterianas",

icone:"🦠",

zoonose:true,

vacina:false,

eutanasia:true,

notificacaoObrigatoria:true,

hospedeiros:[
"Bovinos",
"Bubalinos",
"Suínos",
"Caprinos",
"Ovinos",
"Equinos",
"Cães",
"Gatos"
],

palavrasChave:[
"Tuberculose bovina",
"Mycobacterium bovis",
"Micobactérias",
"PNCEBT",
"Tuberculinização",
"PPD",
"Granuloma",
"BAAR"
],

imagem:"/images/doencas/tuberculose.jpg",


visaoGeral:{

introducao:
"A tuberculose bovina é uma enfermidade infectocontagiosa crônica causada principalmente por Mycobacterium bovis, caracterizada pela formação de lesões granulomatosas denominadas tubérculos. Apresenta grande importância na Medicina Veterinária devido aos impactos econômicos, sanitários e ao seu potencial zoonótico.",


cards:[

{
titulo:"Importância Sanitária",
emoji:"⚠️",
itens:[

"Doença de evolução crônica",

"Pode permanecer assintomática por longos períodos",

"Possui caráter zoonótico",

"Envolve programas oficiais de controle"

]
},


{
titulo:"Principais Hospedeiros",
emoji:"🐄",
itens:[

"Bovinos e bubalinos",

"Outros mamíferos domésticos",

"Animais silvestres podem atuar como reservatórios"

]
},


{
titulo:"Características",
emoji:"🔬",
itens:[

"Formação de granulomas",

"Tropismo por pulmões e linfonodos",

"Agente de crescimento lento",

"Classificado como BAAR"

]
}

]

},



etiologia:{

introducao:
"A tuberculose animal é causada por bactérias pertencentes ao gênero Mycobacterium, sendo Mycobacterium bovis a principal espécie envolvida nos bovinos. O agente pertence ao complexo Mycobacterium tuberculosis e apresenta características particulares que favorecem sua resistência ambiental.",


listas:[


{
titulo:"Classificação Taxonômica",
emoji:"🧬",

itens:[

"Família: Mycobacteriaceae",

"Gênero: Mycobacterium",

"Espécie principal: Mycobacterium bovis",

"Complexo Mycobacterium tuberculosis"

]

},


{
titulo:"Características do Agente",
emoji:"🔬",

itens:[

"Bacilo álcool-ácido resistente (BAAR)",

"Parede celular rica em lipídios",

"Coloração positiva pelo método de Ziehl-Neelsen",

"Crescimento lento em meios laboratoriais"

]

},


{
titulo:"Resistência Ambiental",
emoji:"🌎",

itens:[

"Instalações: até 2 anos",

"Fezes: até 2 anos",

"Solo: até 2 anos",

"Pastagens: até 2 anos",

"Água: até 1 ano",

"Carcaças: até 10 meses"

]

}

]

},



patogenia:{

introducao:
"A infecção ocorre principalmente pela inalação de aerossóis contendo Mycobacterium bovis. Também pode ocorrer pela ingestão de água, alimentos ou leite contaminados. Após a entrada do agente ocorre uma resposta inflamatória que leva à formação dos granulomas tuberculosos.",


blocos:[


{
emoji:"1️⃣",

titulo:"Entrada do agente",

texto:
"O agente penetra principalmente pelas vias respiratória ou digestiva, atingindo inicialmente pulmões, intestino ou tecidos associados."
},


{
emoji:"2️⃣",

titulo:"Multiplicação bacteriana",

texto:
"Após a entrada, ocorre multiplicação intracelular principalmente dentro de macrófagos, iniciando o processo inflamatório."
},


{
emoji:"3️⃣",

titulo:"Resposta imunológica",

texto:
"O organismo recruta células de defesa como macrófagos, linfócitos e células gigantes, tentando conter a disseminação bacteriana."
},


{
emoji:"4️⃣",

titulo:"Formação do granuloma",

texto:
"Ocorre formação do tubérculo, constituído por centro de necrose caseosa, células inflamatórias e cápsula fibrosa."
},


{
emoji:"5️⃣",

titulo:"Disseminação",

texto:
"Quando o sistema imunológico não consegue controlar a infecção, ocorre disseminação pela via linfática ou sanguínea, podendo causar tuberculose miliar."
}

]

},
epidemiologia:{

introducao:
"A tuberculose apresenta distribuição mundial e possui grande relevância em sistemas de produção animal devido às perdas econômicas, restrições comerciais e riscos à saúde pública. A manutenção da enfermidade está relacionada principalmente à presença de animais infectados, falhas no controle sanitário e introdução de animais positivos nos rebanhos.",


blocos:[


{
emoji:"🌎",

titulo:"Distribuição",

texto:
"A enfermidade ocorre mundialmente, sendo considerada uma das principais doenças infecciosas dos bovinos. A prevalência apresenta relação com fatores como manejo, densidade animal e eficiência dos programas de controle."
},


{
emoji:"🐄",

titulo:"Fonte de Infecção",

texto:
"Os principais reservatórios são os animais infectados, especialmente bovinos, que eliminam o agente principalmente por secreções respiratórias."
},


{
emoji:"💨",

titulo:"Transmissão",

texto:
"A principal via de transmissão é respiratória, através da inalação de aerossóis contendo Mycobacterium bovis. Também pode ocorrer transmissão digestiva pela ingestão de leite, água ou alimentos contaminados."
},


{
emoji:"🔄",

titulo:"Fatores de Risco",

texto:
"Alta densidade animal, introdução de animais sem diagnóstico, contato com animais infectados e falhas nas medidas de biossegurança favorecem a disseminação da doença."
},


{
emoji:"🦌",

titulo:"Reservatórios",

texto:
"Além dos animais domésticos, algumas espécies silvestres podem atuar como reservatórios, dificultando a erradicação da enfermidade."
}


]

},




sinaisClinicos:{

introducao:
"A tuberculose apresenta evolução lenta e muitos animais permanecem sem sinais clínicos aparentes. Quando presentes, os sinais estão relacionados principalmente ao comprometimento pulmonar e à evolução sistêmica da doença.",


blocos:[


{
emoji:"🐄",

titulo:"Sinais Gerais",

itens:[

"Emagrecimento progressivo",

"Perda de condição corporal",

"Fraqueza",

"Redução da produtividade",

"Febre discreta ou ausente"

]

},



{
emoji:"🫁",

titulo:"Comprometimento Respiratório",

itens:[

"Tosse seca persistente",

"Dificuldade respiratória",

"Dispneia",

"Ruídos respiratórios alterados"

]

},



{
emoji:"🧬",

titulo:"Alterações Linfonodais",

itens:[

"Aumento de linfonodos",

"Linfonodos firmes ou aumentados",

"Alterações principalmente em linfonodos da cabeça e tórax"

]

},



{
emoji:"⚠️",

titulo:"Casos Avançados",

itens:[

"Caquexia",

"Debilidade intensa",

"Disseminação sistêmica",

"Possível morte do animal"

]

}



]

},
diagnostico:{

introducao:
"O diagnóstico da tuberculose envolve principalmente métodos indiretos baseados na resposta imunológica do animal e métodos diretos capazes de demonstrar a presença do agente. No Brasil, os testes de tuberculinização são utilizados como métodos oficiais dentro do PNCEBT.",


metodos:[
"teste-prega-caudal",

"teste-cervical-simples",

"teste-cervical-comparativo",

"hipersensibilidade-tardia",

"cultura-bacteriologica",

"pcr"

]


},
tratamento: {

  introducao:
  "A tuberculose bovina não possui tratamento recomendado dentro dos programas oficiais de controle sanitário. A utilização de animais infectados tratados favorece a permanência da fonte de infecção no rebanho e dificulta a erradicação da enfermidade.",


  blocos:[


    {

      emoji:"🚫",

      titulo:"Ausência de tratamento oficial",

      texto:
      "Animais diagnosticados como positivos para tuberculose devem ser destinados à eliminação sanitária, conforme estabelecido pelo Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose Animal (PNCEBT). O tratamento não é utilizado como estratégia de controle da doença nos rebanhos."
    },


    {

      emoji:"🐄",

      titulo:"Eliminação dos animais positivos",

      texto:
      "A retirada dos animais infectados é fundamental para interromper a cadeia de transmissão e reduzir a manutenção do Mycobacterium bovis dentro da propriedade."
    },


    {

      emoji:"🧬",

      titulo:"Controle da infecção",

      texto:
      "Como o agente apresenta capacidade de permanecer no organismo e causar infecção crônica, o controle depende principalmente da identificação dos animais positivos, saneamento do rebanho e adoção de medidas sanitárias."
    },


    {

      emoji:"📋",

      titulo:"Acompanhamento sanitário",

      texto:
      "Após a identificação de animais reagentes, a propriedade deve seguir as orientações do Serviço Veterinário Oficial, realizando investigação epidemiológica e medidas previstas pelo PNCEBT."
    }


  ]

},
prevencao:{

introducao:
"A prevenção da tuberculose bovina baseia-se principalmente em medidas de biossegurança, diagnóstico periódico dos animais e eliminação dos indivíduos positivos, reduzindo a circulação do agente dentro dos rebanhos.",


blocos:[


{
emoji:"🔬",

titulo:"Diagnóstico periódico",

texto:
"Realização de testes oficiais de tuberculinização em animais do rebanho para identificação precoce de indivíduos infectados.",

informacoes:[

{
titulo:"Testes utilizados",

texto:
"Os testes de hipersensibilidade cutânea utilizando PPD bovina são os principais métodos empregados no controle oficial da enfermidade."
}

]

},



{
emoji:"🚫",

titulo:"Eliminação de animais positivos",

texto:
"Animais reagentes devem ser retirados do rebanho para impedir a manutenção da cadeia de transmissão.",

destaque:true

},



{
emoji:"🐄",

titulo:"Controle da entrada de animais",

texto:
"A aquisição de animais deve ser realizada somente de propriedades com controle sanitário conhecido, evitando introdução de indivíduos infectados.",

informacoes:[

{
titulo:"Quarentena",

texto:
"Animais recém-adquiridos devem permanecer separados até avaliação sanitária adequada."
}

]

},



{
emoji:"🧼",

titulo:"Biossegurança",

texto:
"Medidas de higiene, manejo adequado e redução da concentração animal auxiliam na diminuição do risco de transmissão."

}

]

},

pncebt:{

introducao:
"O Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose Animal (PNCEBT) foi instituído pelo Ministério da Agricultura com objetivo de reduzir a prevalência e a incidência dessas enfermidades nos rebanhos brasileiros, promovendo melhoria da saúde animal e proteção da saúde pública.",


blocos:[


{
emoji:"🎯",

titulo:"Objetivos do PNCEBT",

descricao:
"Controle e erradicação",

texto:
"Estabelecer medidas sanitárias para identificação, controle e eliminação de animais positivos para brucelose e tuberculose."

},



{
emoji:"🧪",

titulo:"Diagnóstico da Tuberculose",

descricao:
"Testes oficiais",

texto:
"O diagnóstico oficial é realizado principalmente por testes alérgicos utilizando tuberculina (PPD), avaliando a resposta imunológica celular do animal."

},




{
emoji:"🚨",

titulo:"Destino dos animais positivos",

descricao:
"Controle sanitário",

texto:
"Animais reagentes devem ser isolados e encaminhados para eliminação conforme legislação vigente, evitando a permanência da fonte de infecção no rebanho."

}


]
},
imagens:[

{
src:"/images/doencas/tuberculose/1-tuberculose.jpg",
titulo:"Tuberculose bovina",
categoria:"Lesões macroscópicas",
descricao:"Animal acometido pela infecção por Mycobacterium bovis."
},

{
  src:
  "/images/doencas/tuberculose/10-animal-reagente-tuberculose.jpg",

  titulo:
  "Animal reagente ao teste de tuberculose bovina",

  categoria:
  "Diagnóstico",

  descricao:
  "Bovino identificado como reagente durante investigação sanitária para tuberculose bovina. A marcação no animal auxilia na identificação dos indivíduos positivos conforme as medidas previstas pelo Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose Animal (PNCEBT)."
},
{
src:"/images/doencas/tuberculose/02-pulmao.jpg",
titulo:"Granulomas pulmonares",
categoria:"Patologia",
descricao:"Lesões granulomatosas características da tuberculose."
},

{
src:"/images/doencas/tuberculose/07-cultura-bacteriologica.jpg",

titulo:
"Cultura bacteriológica",

categoria:
"Diagnóstico laboratorial",

descricao:
"O isolamento bacteriano permite a identificação do agente e pode ser realizado a partir de amostras como linfonodos, pulmões e lesões sugestivas."
},


{
src:"/images/doencas/tuberculose/06-ciclo-transmissao.jpg",

titulo:
"Ciclo de transmissão da tuberculose bovina",

categoria:
"Epidemiologia",

descricao:
"Representação da transmissão do Mycobacterium bovis entre animais, principalmente por contato com secreções respiratórias e ambientes contaminados."
},

{
  src:"/images/doencas/tuberculose/fluxograma-tuberculose.jpg",

  titulo:
  "Fluxograma do diagnóstico da tuberculose bovina no PNCEBT",

  categoria:
  "Diagnóstico",

  descricao:
  "Fluxo diagnóstico da tuberculose bovina conforme o Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose Animal (PNCEBT), demonstrando as etapas de realização dos testes de tuberculinização, identificação de animais reagentes e adoção das medidas sanitárias de controle."
},
{
src:"/images/doencas/tuberculose/06-teste-prega-caudal.jpg",
titulo:"Teste da prega caudal",
categoria:"Diagnóstico",
descricao:"Aplicação de tuberculina para avaliação da resposta imunológica."
}

],

referencias:[

{
titulo:
"Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose Animal (PNCEBT)",

autores:
"Ministério da Agricultura e Pecuária (MAPA)",

fonte:
"Manual Técnico do PNCEBT",

ano:
"Atualizado",

link:
"https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/pncebt"
},





],

casosClinicos: [

{
id:"tuberculose-caso-01",

titulo:
"Tuberculose bovina em rebanho leiteiro com alterações respiratórias crônicas",

especie:
"Bovino",

idade:
"Fêmea adulta em lactação",

historico:
"Propriedade leiteira apresentou redução progressiva da produção, animais com emagrecimento crônico e histórico de tosse persistente. Durante a investigação sanitária, foi realizada avaliação dos animais por testes de tuberculinização conforme o PNCEBT.",

sinais:[

"Emagrecimento progressivo",

"Tosse crônica",

"Queda na produção leiteira",

"Debilidade",

"Alterações respiratórias"

],

exames:

"Foi realizado Teste Cervical Simples (TCS) como triagem, seguido de Teste Cervical Comparativo (TCC) nos animais reagentes para confirmação conforme os critérios do PNCEBT.",


diagnostico:

"Tuberculose bovina associada à infecção por Mycobacterium bovis.",


discussao:

"A tuberculose bovina apresenta evolução geralmente crônica e pode permanecer sem sinais clínicos aparentes. Em rebanhos leiteiros, a identificação de animais infectados por meio da tuberculinização é fundamental para reduzir a disseminação do Mycobacterium bovis e permitir a adoção das medidas sanitárias previstas pelo PNCEBT."

},



{
id:"tuberculose-caso-02",

titulo:
"Identificação de animal reagente em rebanho de corte",

especie:
"Bovino",

idade:
"Animal adulto",

historico:
"Durante avaliação sanitária de rotina em uma propriedade de bovinos de corte, um animal apresentou reação positiva ao teste de tuberculinação. O rebanho foi submetido à investigação para identificação de possíveis animais infectados.",

sinais:[

"Ausência de sinais clínicos aparentes",

"Animal identificado durante teste sanitário",

"Suspeita de infecção crônica"

],

exames:

"Foi realizado Teste da Prega Caudal (TPC) como método de triagem, com confirmação por teste complementar conforme protocolo oficial.",


diagnostico:

"Animal reagente para tuberculose bovina causada por Mycobacterium bovis.",


discussao:

"A tuberculose bovina pode ocorrer de forma subclínica, permitindo que animais aparentemente saudáveis mantenham a circulação do agente no rebanho. Por esse motivo, os testes oficiais de diagnóstico são essenciais para programas de controle sanitário."

},



{
id:"tuberculose-caso-03",

titulo:
"Investigação epidemiológica após identificação de foco de tuberculose bovina",

especie:
"Bovinos",

idade:
"Animais adultos",

historico:
"Após a identificação de animais reagentes em uma propriedade, foi realizada investigação epidemiológica do rebanho. Foram avaliados animais em contato e adotadas medidas sanitárias para controle da enfermidade.",

sinais:[

"Animais sem sinais clínicos evidentes",

"Presença de animais reagentes",

"Histórico de contato entre animais"

],

exames:

"Foram realizados testes de tuberculinização nos animais do rebanho e investigação complementar com exames laboratoriais em amostras provenientes de lesões sugestivas.",


diagnostico:

"Foco de tuberculose bovina associado à presença de Mycobacterium bovis.",


discussao:

"O controle da tuberculose bovina depende da identificação dos animais infectados, eliminação dos positivos e acompanhamento sanitário da propriedade. A retirada dos animais reagentes é uma medida essencial para interromper a cadeia de transmissão."

}

],
},


// 🦠 VIRAIS


{
  id: "anemia-infecciosa-equina",
  nome: "Anemia Infecciosa Equina",
  agente: "Vírus da Anemia Infecciosa Equina (EIAV)",
  categoria: "Virais",
  icone: "🦠",
  zoonose: false,
  vacina: false,
  eutanasia: true,
  notificacaoObrigatoria: true,
  hospedeiros: [
    "Equinos",
    "Asininos",
    "Muares",
    "Zebras"
  ],
  palavrasChave: [
    "anemia infecciosa equina",
    "AIE",
    "EIAV",
    "lentivírus",
    "Retroviridae",
    "teste de Coggins",
    "imunodifusão em gel de ágar",
    "sideroleucócitos",
    "tabanídeos"
  ],
  imagem: "/images/doencas/anemia-infecciosa-equina.jpg",

  imagens: [
    {
      src: "/images/doencas/anemia-infecciosa-equina/animal-infectado.jpg",
      titulo: "Equino com anemia infecciosa equina",
      categoria: "Sinais clínicos",
      descricao: "Animal infectado pelo vírus da anemia infecciosa equina, que pode apresentar manifestações clínicas variáveis ou permanecer assintomático."
    },
    {
      src: "/images/doencas/anemia-infecciosa-equina/edema-membros.jpg",
      titulo: "Edema dos membros",
      categoria: "Sinais clínicos",
      descricao: "Edema, especialmente nas regiões inferiores dos membros, observado em animais com manifestações clínicas da doença."
    },
    {
      src: "/images/doencas/anemia-infecciosa-equina/mucosas-ictéricas.jpg",
      titulo: "Mucosas pálidas ou ictéricas",
      categoria: "Sinais clínicos",
      descricao: "Alterações na coloração das mucosas associadas à anemia e à destruição de hemácias."
    },
    {
      src: "/images/doencas/anemia-infecciosa-equina/tabanideo.jpg",
      titulo: "Tabanídeo",
      categoria: "Transmissão",
      descricao: "Insetos hematófagos que atuam como vetores mecânicos do vírus, transportando sangue contaminado entre animais."
    },
    {
      src: "/images/doencas/anemia-infecciosa-equina/teste-coggins.jpg",
      titulo: "Teste de Coggins",
      categoria: "Diagnóstico",
      descricao: "Imunodifusão em gel de ágar (IDGA), utilizada para detectar anticorpos contra o vírus da anemia infecciosa equina."
    }
  ],

  visaoGeral: {
    introducao: "A Anemia Infecciosa Equina (AIE) é uma doença viral persistente que acomete equídeos, caracterizada pela destruição de hemácias, viremia e episódios recorrentes de febre. Pode apresentar manifestações clínicas agudas, subagudas ou crônicas, mas sua forma latente, na qual o animal aparentemente saudável permanece infectado, é bastante frequente. Os animais infectados tornam-se portadores permanentes do vírus e representam fontes de infecção para outros equídeos.",
    cards: [
      {
        emoji: "🦠",
        titulo: "Agente etiológico",
        itens: [
          "Vírus da Anemia Infecciosa Equina (EIAV)",
          "Família Retroviridae",
          "Gênero Lentivirus",
          "Vírus envelopado de RNA"
        ]
      },
      {
        emoji: "🐎",
        titulo: "Hospedeiros",
        itens: [
          "Equinos",
          "Asininos",
          "Muares",
          "Outros equídeos"
        ]
      },
      {
        emoji: "🪰",
        titulo: "Transmissão",
        itens: [
          "Insetos hematófagos",
          "Agulhas e instrumentos contaminados",
          "Transmissão transplacentária",
          "Contato com sangue infectado"
        ]
      },
      {
        emoji: "🔬",
        titulo: "Diagnóstico",
        itens: [
          "Imunodifusão em Gel de Ágar (IDGA)",
          "Teste de Coggins",
          "ELISA",
          "Sorologia"
        ]
      },
      {
        emoji: "⚠️",
        titulo: "Importância sanitária",
        itens: [
          "Doença de notificação obrigatória",
          "Não possui tratamento específico",
          "Não existe vacina eficaz disponível",
          "Animais infectados permanecem portadores por toda a vida"
        ]
      }
    ]
  },

  etiologia: {
    introducao: "O agente etiológico da Anemia Infecciosa Equina é o vírus da Anemia Infecciosa Equina (EIAV), pertencente à família Retroviridae e ao gênero Lentivirus. É um vírus envelopado, com capsídeo de simetria icosaédrica e material genético constituído por RNA de fita simples. Como outros retrovírus, apresenta a enzima transcriptase reversa, responsável pela conversão do RNA viral em DNA.",
    listas: [
      {
        titulo: "Classificação viral",
        emoji: "🧬",
        itens: [
          "Família: Retroviridae",
          "Gênero: Lentivirus",
          "Agente: Vírus da Anemia Infecciosa Equina (EIAV)",
          "Material genético: RNA de fita simples",
          "Capsídeo: simetria icosaédrica",
          "Envelope: presente",
          "Diâmetro aproximado: 80 a 100 nm"
        ]
      },
      {
        titulo: "Características do vírus",
        emoji: "🔬",
        itens: [
          "Apresenta envelope lipoproteico.",
          "Possui transcriptase reversa.",
          "Estabelece infecção persistente no hospedeiro.",
          "Apresenta elevada variabilidade genética.",
          "Permanece associado às células sanguíneas durante a infecção."
        ]
      },
      {
        titulo: "Sensibilidade",
        emoji: "🧪",
        itens: [
          "Sensível ao éter e a desinfetantes adequados.",
          "É inativado pela luz solar.",
          "É sensível à fervura.",
          "É inativado por valores extremos de pH."
        ]
      },
      {
        titulo: "Cultivo viral",
        emoji: "🧫",
        itens: [
          "Pode ser cultivado em células de origem equina.",
          "O material de aula também cita células HeLa e BHK."
        ]
      }
    ]
  },

  patogenia: {
    introducao: "Após a entrada do vírus no organismo, ocorre disseminação pela corrente sanguínea, com infecção de células do sistema mononuclear fagocitário e persistência viral. A resposta imunológica e a replicação viral contribuem para episódios de viremia, febre, destruição de hemácias e alterações hematológicas.",
    blocos: [
      {
        emoji: "1️⃣",
        titulo: "Entrada do vírus",
        texto: "O vírus penetra no organismo principalmente por meio da picada de insetos hematófagos ou pela introdução de sangue contaminado através de instrumentos e materiais utilizados nos procedimentos veterinários."
      },
      {
        emoji: "2️⃣",
        titulo: "Disseminação sanguínea",
        texto: "Após a entrada, o vírus alcança a corrente sanguínea, estabelecendo viremia. O período de incubação descrito no material varia de 7 a 21 dias."
      },
      {
        emoji: "3️⃣",
        titulo: "Disseminação sistêmica",
        texto: "O agente alcança órgãos e tecidos, incluindo fígado, rins, pulmões, linfonodos, baço e medula óssea, contribuindo para as alterações sistêmicas."
      },
      {
        emoji: "4️⃣",
        titulo: "Hemólise e alterações hematológicas",
        texto: "A destruição de hemácias provoca liberação de hemoglobina, que pode ser degradada e armazenada na forma de hemossiderina. Macrófagos contendo hemossiderina podem ser identificados como sideroleucócitos."
      },
      {
        emoji: "5️⃣",
        titulo: "Infecção persistente",
        texto: "Mesmo após a recuperação dos sinais clínicos, o animal permanece infectado por toda a vida, podendo apresentar novos episódios de viremia e febre. Os portadores assintomáticos continuam sendo fontes de infecção."
      }
    ]
  },

  epidemiologia: {
    introducao: "A AIE apresenta distribuição mundial e acomete equídeos de diferentes idades. A transmissão está diretamente relacionada à presença de sangue infectado, principalmente pela ação de insetos hematófagos e pelo compartilhamento de instrumentos contaminados. Animais portadores assintomáticos possuem grande importância epidemiológica, pois podem disseminar o vírus sem apresentar manifestações clínicas evidentes.",
    blocos: [
      {
        emoji: "🌎",
        titulo: "Distribuição",
        texto: "A doença possui ocorrência mundial, sendo especialmente importante em regiões com presença de vetores hematófagos e dificuldades de controle sanitário dos rebanhos."
      },
      {
        emoji: "🪰",
        titulo: "Vetores mecânicos",
        texto: "Tabanídeos, como mutucas, e moscas hematófagas, como Stomoxys calcitrans, atuam como vetores mecânicos. Ao se alimentarem de um animal infectado e posteriormente picarem outro equídeo, podem transportar sangue contaminado."
      },
      {
        emoji: "🐎",
        titulo: "Animais portadores",
        texto: "Os equídeos infectados permanecem portadores do vírus durante toda a vida, mesmo quando não apresentam sinais clínicos. Por isso, os animais assintomáticos representam importante fonte de infecção."
      },
      {
        emoji: "🩸",
        titulo: "Transmissão direta",
        texto: "Pode ocorrer por meio de sangue contaminado, transmissão intrauterina, ingestão de leite de éguas infectadas e, em determinadas circunstâncias, contato de sangue com mucosas."
      },
      {
        emoji: "💉",
        titulo: "Transmissão indireta",
        texto: "O compartilhamento de agulhas, seringas, instrumentos cirúrgicos, materiais odontológicos e outros fômites contaminados representa importante risco de transmissão. A utilização de materiais descartáveis ou devidamente esterilizados é fundamental."
      },
      {
        emoji: "⚠️",
        titulo: "Morbidade e mortalidade",
        texto: "A evolução clínica é variável. Animais podem apresentar episódios agudos graves, mas muitos permanecem assintomáticos durante longos períodos. A mortalidade depende da apresentação clínica e da gravidade da infecção."
      }
    ]
  },

  sinaisClinicos: {
    introducao: "A apresentação clínica da AIE é variável, podendo ocorrer nas formas aguda, subaguda, crônica ou latente. Os episódios febris podem ser recorrentes, acompanhados de anemia, fraqueza, emagrecimento e edemas. A forma latente é frequente, sendo caracterizada pela ausência de sinais clínicos evidentes, apesar da persistência da infecção.",
    blocos: [
      {
        emoji: "🌡️",
        titulo: "Forma aguda",
        itens: [
          "Febre súbita, podendo atingir 42 °C.",
          "Torpor e prostração.",
          "Debilidade intensa.",
          "Membros posteriores cambaleantes.",
          "Quedas e dificuldade de locomoção.",
          "Taquisfigmia e taquipneia.",
          "Urina escura.",
          "Fezes com estrias de sangue.",
          "Mucosas pálidas ou levemente ictéricas.",
          "Hemorragias puntiformes na face ventral da língua.",
          "Esplenomegalia.",
          "Edemas e emagrecimento.",
          "Pode evoluir para morte ou recuperação com infecção persistente."
        ]
      },
      {
        emoji: "🌡️",
        titulo: "Forma subaguda",
        itens: [
          "Acessos febris rápidos e recorrentes.",
          "Mucosas anêmicas ou ictéricas.",
          "Edemas.",
          "Períodos de aparente recuperação.",
          "Persistência da infecção por muitos anos."
        ]
      },
      {
        emoji: "🐎",
        titulo: "Forma crônica",
        itens: [
          "Ataques febris menos frequentes.",
          "Edemas discretos e dispersos.",
          "Emagrecimento progressivo.",
          "Fraqueza e debilidade.",
          "Infecção persistente."
        ]
      },
      {
        emoji: "🔎",
        titulo: "Forma latente",
        itens: [
          "Animais aparentemente saudáveis.",
          "Ausência de manifestações clínicas pronunciadas.",
          "Possibilidade de episódios febris esporádicos.",
          "Diagnóstico depende de exames laboratoriais.",
          "O animal continua sendo portador do vírus e fonte de infecção."
        ]
      }
    ]
  },

  diagnostico:{
  introducao: "O diagnóstico clínico da Anemia Infecciosa Equina é difícil, pois os sinais apresentados são inespecíficos e muitos animais infectados permanecem assintomáticos. A confirmação é realizada por meio de exames laboratoriais sorológicos, que identificam anticorpos contra o vírus. O principal método é a Imunodifusão em Gel de Ágar (IDGA), conhecida como teste de Coggins, considerado o teste padronizado para diagnóstico da doença.",
  metodos: [
    "fixacao-complemento",
    "imunodifusao"
  ]
},

  tratamento: {
    introducao: "Não existe tratamento específico ou cura para a Anemia Infecciosa Equina. Os animais infectados permanecem portadores do vírus durante toda a vida, mesmo quando apresentam recuperação clínica. Por esse motivo, o controle da doença é baseado na identificação dos animais positivos e na adoção das medidas sanitárias determinadas pelo Serviço Veterinário Oficial.",
    blocos: [
      {
        emoji: "🚫",
        titulo: "Ausência de tratamento específico",
        texto: "Não existe medicamento capaz de eliminar o vírus do organismo ou promover a cura da infecção. O controle clínico dos sinais não elimina a condição de portador."
      },
      {
        emoji: "⚠️",
        titulo: "Destino dos animais positivos",
        texto: "Os animais diagnosticados como positivos devem ser submetidos às medidas sanitárias previstas na legislação vigente, que podem incluir sacrifício sanitário ou isolamento permanente, conforme determinação do Serviço Veterinário Oficial."
      },
      {
        emoji: "🔒",
        titulo: "Isolamento",
        texto: "Até a definição das medidas sanitárias, os animais suspeitos ou positivos devem permanecer isolados, sem contato com outros equídeos, evitando a transmissão por insetos e materiais contaminados."
      }
    ]
  },

  prevencao: {
    introducao: "A prevenção da AIE depende da identificação dos animais infectados, do controle de vetores hematófagos e da adoção de medidas rigorosas de biossegurança. Não existe vacina eficaz disponível, portanto a vigilância sorológica e o controle da movimentação de equídeos são fundamentais para reduzir a disseminação da doença.",
    blocos: [
      {
        emoji: "🔬",
        titulo: "Testagem sorológica",
        texto: "A realização de exames laboratoriais é essencial para identificar animais infectados, inclusive aqueles que não apresentam sinais clínicos. A testagem deve seguir as exigências sanitárias para trânsito e participação em eventos agropecuários."
      },
      {
        emoji: "🪰",
        titulo: "Controle de vetores",
        texto: "O controle de tabanídeos e outras moscas hematófagas é importante para reduzir a transmissão mecânica. Medidas como dedetização, drenagem de áreas alagadas e manejo ambiental contribuem para diminuir a presença desses insetos."
      },
      {
        emoji: "💉",
        titulo: "Materiais e instrumentos",
        texto: "Não compartilhar agulhas, seringas, instrumentos cirúrgicos, materiais odontológicos ou qualquer equipamento que possa apresentar contaminação sanguínea. Utilizar materiais descartáveis sempre que possível e realizar esterilização adequada."
      },
      {
        emoji: "🚧",
        titulo: "Controle de trânsito",
        texto: "A movimentação de equídeos deve respeitar as exigências sanitárias vigentes, incluindo a apresentação de exames negativos quando exigidos. O trânsito de animais infectados deve ser impedido."
      },
      {
        emoji: "🧼",
        titulo: "Higienização e desinfecção",
        texto: "Realizar a limpeza e desinfecção de instalações, equipamentos e instrumentos utilizados no manejo dos animais, evitando a transmissão indireta por sangue contaminado."
      },
      {
        emoji: "💉",
        titulo: "Vacinação",
        texto: "Não existe vacina eficaz disponível para prevenção da AIE. O controle da doença depende da identificação dos portadores, da biossegurança e das medidas sanitárias oficiais."
      },
      {
        emoji: "📢",
        titulo: "Notificação obrigatória",
        texto: "A Anemia Infecciosa Equina é uma doença de notificação obrigatória. A suspeita ou confirmação deve ser comunicada ao Serviço Veterinário Oficial, responsável pela investigação e aplicação das medidas de controle previstas no Programa Nacional de Sanidade dos Equídeos (PNSE)."
      }
    ]
  },

  referencias: [
    {
      titulo: "Anemia infecciosa equina",
      autores: "World Organisation for Animal Health (WOAH)",
      fonte: "WOAH — Disease Information",
      ano: "2025",
      link: "https://www.woah.org/en/disease/equine-infectious-anaemia/"
    },
    {
      titulo: "Anemia infecciosa equina",
      autores: "Ministério da Agricultura e Pecuária (MAPA)",
      fonte: "Programa Nacional de Sanidade dos Equídeos",
      ano: "2026",
      link: "https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/sanidade-de-equideos"
    },
    {
      titulo: "Anemia infecciosa equina",
      autores: "Merck Veterinary Manual",
      fonte: "Merck Veterinary Manual",
      ano: "2025",
      link: "https://www.msdvetmanual.com/pt/generalized-conditions/anemia-infecciosa-equina/anemia-infecciosa-equina"
    },
    {
      titulo: "Instrução Normativa SDA nº 45, de 15 de junho de 2004",
      autores: "Ministério da Agricultura, Pecuária e Abastecimento",
      fonte: "Diário Oficial da União",
      ano: "2004",
      link: "https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/sanidade-de-equideos"
    },
    {
      titulo: "Equine Infectious Anemia Disease Guidelines",
      autores: "American Association of Equine Practitioners (AAEP)",
      fonte: "AAEP",
      ano: "2019",
      link: "https://aaep.org/wp-content/uploads/2024/03/EIADiseaseGuidelines2019.pdf"
    }
  ],

  casosClinicos: [
    {
      id: "anemia-infecciosa-equina-01",
      titulo: "Equino com febre, anemia e edema",
      especie: "Equino",
      idade: "Adulto",
      historico: "Um equino adulto apresenta episódios recorrentes de febre, prostração, emagrecimento progressivo e edema nos membros. O proprietário relata que o animal compartilha instalações e equipamentos de manejo com outros equídeos.",
      sinais: [
        "Febre recorrente.",
        "Prostração e debilidade.",
        "Mucosas pálidas.",
        "Edema dos membros.",
        "Emagrecimento.",
        "Taquisfigmia."
      ],
      exames: "Hemograma com possibilidade de eritropenia, leucopenia, redução da hemoglobina e do hematócrito. A investigação sorológica deve incluir IDGA (teste de Coggins) e, conforme indicação, ELISA.",
      diagnostico: "Anemia Infecciosa Equina, mediante confirmação sorológica.",
      discussao: "A associação entre episódios febris, anemia, emagrecimento e edema é compatível com a apresentação clínica da AIE. Entretanto, os sinais não são exclusivos da doença. A confirmação depende de exames sorológicos, e o animal infectado permanece portador do vírus mesmo após a melhora clínica."
    },
    {
      id: "anemia-infecciosa-equina-02",
      titulo: "Equino aparentemente saudável com teste positivo",
      especie: "Equino",
      idade: "Adulto",
      historico: "Um equino sem alterações clínicas aparentes é submetido a exame sorológico para emissão de documentação sanitária. O resultado apresenta positividade para anticorpos contra o vírus da Anemia Infecciosa Equina.",
      sinais: [
        "Ausência de sinais clínicos evidentes.",
        "Aparente estado geral saudável.",
        "Possibilidade de febre esporádica.",
        "Infecção persistente."
      ],
      exames: "Imunodifusão em Gel de Ágar (IDGA), conhecida como teste de Coggins, com resultado positivo.",
      diagnostico: "Anemia Infecciosa Equina em apresentação latente.",
      discussao: "A ausência de sinais clínicos não exclui a infecção. A forma latente possui grande importância epidemiológica, pois o animal permanece portador do vírus durante toda a vida e pode transmitir a doença a outros equídeos. O caso exige comunicação ao Serviço Veterinário Oficial e adoção das medidas sanitárias cabíveis."
    }
  ]
},

{
id:"cinomose",

nome:"Cinomose",

agente:"Vírus da cinomose canina (Canine Distemper Virus - CDV)",

categoria:"Virais",

icone:"🦠",

zoonose:false,

vacina:true,

eutanasia:false,

notificacaoObrigatoria:false,

hospedeiros:[
"Cães domésticos",
"Canídeos silvestres",
"Mustelídeos"
],

palavrasChave:[
"Cinomose canina",
"CDV",
"Morbillivirus",
"Doença viral canina",
"Neurológica"
],

imagem:"/images/doencas/cinomose.jpg",

imagens:[

{
src:"/images/doencas/cinomose/01-cinomose-clinica.jpg",
titulo:"Cão com sinais compatíveis com cinomose",
categoria:"Sinais clínicos",
descricao:"Animal apresentando manifestações clínicas associadas à infecção pelo vírus da cinomose canina."
},

{
src:"/images/doencas/cinomose/02-sistema-neurologico.jpg",
titulo:"Manifestação neurológica",
categoria:"Neurológico",
descricao:"Alterações neurológicas podem ocorrer devido ao comprometimento do sistema nervoso central."
}



],


visaoGeral:{

introducao:
"A cinomose é uma enfermidade viral altamente contagiosa que acomete principalmente cães, causada pelo vírus da cinomose canina (CDV). Apresenta distribuição mundial e possui elevada importância na clínica de pequenos animais devido à sua alta morbidade, possibilidade de evolução grave e comprometimento de múltiplos sistemas orgânicos.",


cards:[

{
titulo:"Importância",
emoji:"⚠️",
itens:[
"Alta capacidade de transmissão entre animais susceptíveis",
"Pode apresentar evolução multissistêmica",
"Possui grande impacto na clínica de cães jovens"
]
},


{
titulo:"Agente etiológico",
emoji:"🦠",
itens:[
"Canine Distemper Virus (CDV)",
"Família Paramyxoviridae",
"Gênero Morbillivirus"
]
},


{
titulo:"Transmissão",
emoji:"🌎",
itens:[
"Principalmente por aerossóis e secreções respiratórias",
"Contato direto entre animais infectados",
"Eliminação viral por secreções corporais"
]
}

]

},


etiologia:{

introducao:
"O vírus da cinomose canina pertence ao gênero Morbillivirus e apresenta características semelhantes a outros vírus da família Paramyxoviridae. É um vírus envelopado, contendo RNA fita simples de polaridade negativa.",


listas:[

{
titulo:"Características do vírus",
emoji:"🧬",
itens:[
"Vírus RNA fita simples negativo",
"Possui envelope lipídico",
"Apresenta baixa resistência ambiental devido ao envelope",
"Relacionado aos vírus do sarampo e peste bovina"
]
},


{
titulo:"Classificação viral",
emoji:"🔬",
itens:[
"Família: Paramyxoviridae",
"Gênero: Morbillivirus",
"Espécie: Canine morbillivirus"
]
}

]

},
patogenia:{

introducao:
"A infecção pelo vírus da cinomose inicia-se geralmente pela entrada do agente através das vias respiratórias. Após a infecção inicial, ocorre replicação viral nos tecidos linfoides, seguida de disseminação para diferentes órgãos e sistemas, podendo ocorrer comprometimento neurológico nos animais susceptíveis.",


blocos:[

{

emoji:"🫁",

titulo:"Entrada e replicação inicial",

texto:
"O vírus penetra principalmente pela via respiratória através da inalação de partículas virais presentes em secreções de animais infectados. Inicialmente ocorre replicação em macrófagos e células do sistema imunológico presentes nas tonsilas e linfonodos regionais."


},


{

emoji:"🛡️",

titulo:"Disseminação sistêmica e imunossupressão",

texto:
"Após a replicação inicial, o vírus dissemina-se pela corrente sanguínea associado às células mononucleares, atingindo órgãos linfoides como baço, timo e medula óssea. A infecção promove redução da resposta imunológica, favorecendo infecções secundárias."


},


{

emoji:"🌡️",

titulo:"Comprometimento multissistêmico",

texto:
"Com a progressão da doença, o vírus pode alcançar tecidos epiteliais, causando manifestações respiratórias, gastrointestinais e dermatológicas. A intensidade dos sinais clínicos depende principalmente da resposta imune do hospedeiro."


},


{

emoji:"🧠",

titulo:"Infecção do sistema nervoso central",

texto:
"Em alguns animais ocorre disseminação para o sistema nervoso central, levando à desmielinização e inflamação do tecido nervoso. O comprometimento neurológico pode ocorrer durante a fase aguda ou semanas após a recuperação dos sinais sistêmicos."

}

]

},



epidemiologia:{

introducao:
"A cinomose apresenta distribuição mundial e possui maior ocorrência em animais jovens não vacinados ou com protocolo vacinal inadequado. A elevada capacidade de transmissão torna a enfermidade importante em ambientes com grande concentração de cães.",


blocos:[

{

emoji:"🐕",

titulo:"Hospedeiros",

texto:
"O principal hospedeiro é o cão doméstico, porém diversas espécies de carnívoros silvestres podem ser infectadas, contribuindo para a manutenção do vírus na natureza."

},


{

emoji:"🌎",

titulo:"Distribuição",

texto:
"A doença ocorre mundialmente, sendo encontrada tanto em áreas urbanas quanto rurais. A circulação viral está relacionada à presença de animais susceptíveis e baixa cobertura vacinal."

},


{

emoji:"💧",

titulo:"Transmissão",

texto:
"A transmissão ocorre principalmente por contato direto com secreções respiratórias, oculares e outras secreções corporais de animais infectados. O vírus também pode ser transmitido por aerossóis em ambientes contaminados."

},


{

emoji:"🐶",

titulo:"Animais mais susceptíveis",

texto:
"Filhotes entre três e seis meses de idade apresentam maior risco devido à queda da imunidade materna e ausência ou falha na vacinação."

}

]

},



sinaisClinicos:{

introducao:
"A apresentação clínica da cinomose é variável e depende da cepa viral, idade do animal, estado imunológico e presença de infecções secundárias. A doença pode apresentar manifestações respiratórias, gastrointestinais, dermatológicas e neurológicas.",


blocos:[


{

emoji:"🫁",

titulo:"Respiratórios",

itens:[

"Secreção nasal e ocular",
"Tosse",
"Dispneia",
"Pneumonia secundária"

]

},


{

emoji:"🍽️",

titulo:"Gastrointestinais",

itens:[

"Vômitos",
"Diarreia",
"Desidratação",
"Perda de peso"

]

},


{

emoji:"🐾",

titulo:"Dermatológicos",

itens:[

"Hiperqueratose dos coxins plantares",
"Hiperqueratose do plano nasal",
"Lesões cutâneas em alguns animais"

]

},


{

emoji:"🧠",

titulo:"Neurológicos",

itens:[

"Mioclonias",
"Convulsões",
"Ataxia",
"Paralisia",
"Alterações comportamentais"

]

}

]

},
diagnostico:{

introducao:
"O diagnóstico da cinomose deve ser realizado associando histórico clínico, sinais apresentados pelo animal e exames laboratoriais. Devido à grande variedade de manifestações clínicas, a confirmação laboratorial é importante principalmente em casos com sinais inespecíficos ou neurológicos.",


metodos:[

"pcr",

"imunocromatografia",

"elisa",

"microscopia"

]

},



tratamento:{

introducao:
"Não existe tratamento antiviral específico amplamente disponível para eliminar o vírus da cinomose. O tratamento é baseado principalmente em terapia de suporte, controle das manifestações clínicas e prevenção de complicações secundárias.",


blocos:[

{

emoji:"💧",

titulo:"Terapia de suporte",

texto:
"O suporte clínico tem como objetivo manter as funções fisiológicas do animal, incluindo fluidoterapia para correção da desidratação, suporte nutricional adequado e controle das alterações metabólicas."

},


{

emoji:"💊",

titulo:"Controle das infecções secundárias",

texto:
"Devido à imunossupressão causada pelo vírus, infecções bacterianas secundárias são frequentes. O uso de antimicrobianos pode ser indicado conforme avaliação veterinária e suspeita clínica."

},


{

emoji:"🧠",

titulo:"Controle dos sinais neurológicos",

texto:
"Animais com comprometimento neurológico podem necessitar de medicamentos anticonvulsivantes, controle de espasmos musculares e cuidados intensivos para melhorar o conforto e qualidade de vida."

},


{

emoji:"🩺",

titulo:"Prognóstico",

texto:
"O prognóstico depende da resposta imunológica do animal, gravidade dos sinais clínicos e presença de alterações neurológicas. Animais que desenvolvem sinais neurológicos apresentam maior risco de sequelas permanentes."

}

]

},



prevencao:{

introducao:
"A prevenção da cinomose é baseada principalmente na vacinação adequada, associada a medidas de controle sanitário para reduzir a circulação viral entre animais susceptíveis.",


blocos:[


{

emoji:"💉",

titulo:"Vacinação",

texto:
"A vacinação é a principal ferramenta de prevenção da cinomose. O protocolo deve seguir orientação veterinária, respeitando idade, histórico vacinal e condições individuais do animal.",


informacoes:[

{
titulo:"Vacinas utilizadas",

texto:
"As vacinas múltiplas (como V8 e V10) geralmente incluem antígenos contra o vírus da cinomose canina."
}

]

},



{

emoji:"🐕",

titulo:"Controle da transmissão",

texto:
"Animais suspeitos ou infectados devem ser isolados para reduzir o contato com animais susceptíveis, principalmente filhotes não vacinados."

},



{

emoji:"🏠",

titulo:"Medidas ambientais",

texto:
"A limpeza adequada dos ambientes auxilia no controle de agentes infecciosos, embora o vírus apresente baixa resistência ambiental devido à presença de envelope lipídico."

}

]

},



casosClinicos:[

{

id:"cinomose-01",

titulo:"Cinomose com evolução neurológica em cão jovem",

especie:"Canino",

idade:"5 meses",

historico:
"Filhote sem protocolo vacinal completo apresentado com histórico de apatia, secreção ocular e nasal progressiva.",

sinais:[

"Secreção ocular mucopurulenta",
"Tosse",
"Redução do apetite",
"Mioclonias",
"Convulsões"

],

exames:
"Teste imunocromatográfico associado à PCR para detecção viral.",

diagnostico:
"Cinomose canina com comprometimento neurológico.",

discussao:
"O caso demonstra a importância da vacinação preventiva e da identificação precoce dos sinais clínicos, principalmente devido ao risco de evolução para manifestações neurológicas."

}

],



referencias:[

{

titulo:"Canine Distemper Virus",

autores:"Greene CE",

fonte:"Infectious Diseases of the Dog and Cat",

ano:"2012"

},


{

titulo:"Canine distemper virus: current knowledge and perspectives",

autores:"Martella V et al.",

fonte:"Veterinary Microbiology",

ano:"2008"

},


{

titulo:"Cinomose canina",

autores:"Quinn PJ et al.",

fonte:"Veterinary Microbiology and Microbial Disease",

ano:"2011"

}

]

},



{
  id: "coronavirose-canina",

  nome: "Coronavirose Canina",

  agente: "Coronavírus entérico canino (CCoV)",

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
    "coronavirose canina",
    "coronavirus canino",
    "coronavírus canino",
    "CCoV",
    "coronavirus entérico",
    "coronavírus entérico",
    "enterite",
    "diarreia",
    "cão",
    "cao",
    "cachorro",
    "canino"
  ],

  imagem: "/images/doencas/coronavirose-canina.jpg",

imagens: [
  {
    src: "/images/doencas/coronavirose/coronavirus-canino.jpg",
    titulo: "Coronavírus canino (CCoV)",
    categoria: "Agente etiológico",
    descricao:
      "Representação do coronavírus entérico canino, agente responsável pela coronavirose canina."
  },
  
 
  {
    src: "/images/doencas/coronavirose/imuno-histoquimica.jpg",
    titulo: "Detecção de antígenos virais",
    categoria: "Diagnóstico",
    descricao:
      "Imagem ilustrativa de técnica de imuno-histoquímica para identificação de antígenos virais em tecido intestinal."
  }
],


  visaoGeral: {
    introducao:
      "A coronavirose canina é uma enfermidade viral entérica causada pelo coronavírus canino (CCoV). Apresenta características semelhantes às da parvovirose canina, compartilhando formas de transmissão, predisposição e aspectos gerais da infecção. A doença acomete o trato intestinal e pode provocar diarreia por má absorção.",

    cards: [
      {
        titulo: "Características gerais",
        emoji: "🦠",
        itens: [
          "Enfermidade viral que acomete o trato intestinal",
          "Causada pelo coronavírus entérico canino (CCoV)",
          "Apresenta semelhanças com a parvovirose canina",
          "Período de incubação de 18 a 73 horas"
        ]
      },
      {
        titulo: "Transmissão",
        emoji: "🔄",
        itens: [
          "Ocorre principalmente pela via fecal-oral",
          "Relacionada à ingestão de material contaminado por fezes",
          "Pode ocorrer por contato com ambientes e fômites contaminados"
        ]
      },
      {
        titulo: "Evolução",
        emoji: "⚠️",
        itens: [
          "Provoca inflamação das vilosidades intestinais",
          "Pode causar diarreia por má absorção",
          "A diarreia geralmente não apresenta sangue",
          "As formas moderadas podem apresentar recuperação espontânea entre oito e dez dias"
        ]
      }
    ]
  },

  etiologia: {
    introducao:
      "A coronavirose canina é causada pelo coronavírus entérico canino (CCoV), agente viral associado às alterações intestinais características da enfermidade.",

    listas: [
      {
        titulo: "Agente etiológico",
        emoji: "🦠",
        itens: [
          "Coronavírus entérico canino",
          "Sigla: CCoV",
          "Associado à infecção do trato intestinal"
        ]
      }
    ]
  },

  epidemiologia: {
    introducao:
      "A disseminação da coronavirose canina está relacionada à ingestão de material contaminado por fezes. A enfermidade apresenta características epidemiológicas semelhantes às da parvovirose canina, incluindo formas de transmissão e predisposição.",

    blocos: [
      {
        emoji: "🔄",
        titulo: "Transmissão",
        texto:
          "A transmissão ocorre principalmente pela via fecal-oral, por meio da ingestão de fezes ou materiais contaminados pelo coronavírus canino."
      },
      {
        emoji: "⏱️",
        titulo: "Período de incubação",
        texto:
          "O período de incubação varia de 18 a 73 horas, permitindo o desenvolvimento relativamente rápido da infecção após a exposição ao agente."
      },
      {
        emoji: "🧫",
        titulo: "Resistência ambiental",
        texto:
          "O coronavírus canino pode permanecer no ambiente por semanas a meses, favorecendo a manutenção da contaminação em locais frequentados por animais infectados."
      },
      {
        emoji: "🐕",
        titulo: "Predisposição",
        texto:
          "A enfermidade apresenta predisposição semelhante à observada na parvovirose canina, conforme as características epidemiológicas descritas para as duas infecções."
      }
    ]
  },

  patogenia: {
    introducao:
      "Após a ingestão de material contaminado, o coronavírus canino infecta o trato intestinal, provocando inflamação das vilosidades intestinais, especialmente no jejuno e no íleo. Essas alterações comprometem a absorção intestinal e favorecem o desenvolvimento de diarreia.",

    blocos: [
      {
        emoji: "1️⃣",
        titulo: "Entrada do agente",
        texto:
          "A infecção ocorre pela ingestão fecal-oral de partículas virais presentes em fezes ou materiais contaminados."
      },
      {
        emoji: "2️⃣",
        titulo: "Acometimento intestinal",
        texto:
          "O vírus atinge o jejuno e o íleo, provocando inflamação das vilosidades intestinais."
      },
      {
        emoji: "3️⃣",
        titulo: "Comprometimento da absorção",
        texto:
          "A inflamação das vilosidades compromete a capacidade de absorção intestinal, levando ao desenvolvimento de diarreia por má absorção."
      },
      {
        emoji: "4️⃣",
        titulo: "Infecções secundárias",
        texto:
          "As alterações na integridade intestinal podem favorecer a ocorrência de infecções secundárias."
      },
      {
        emoji: "5️⃣",
        titulo: "Evolução clínica",
        texto:
          "Nas formas moderadas, os animais geralmente apresentam recuperação espontânea após oito a dez dias."
      }
    ]
  },

  sinaisClinicos: {
    introducao:
      "A coronavirose canina apresenta manifestações relacionadas ao comprometimento intestinal. A principal alteração descrita é a diarreia decorrente da má absorção, geralmente sem presença de sangue.",

    blocos: [
      {
        emoji: "💩",
        titulo: "Alterações intestinais",
        itens: [
          "Diarreia por má absorção",
          "Inflamação das vilosidades intestinais",
          "Diarreia geralmente sem presença de sangue"
        ]
      },
      {
        emoji: "⚠️",
        titulo: "Possíveis complicações",
        itens: [
          "Infecções secundárias associadas às alterações intestinais"
        ]
      },
      {
        emoji: "🩺",
        titulo: "Evolução",
        itens: [
          "As formas moderadas geralmente apresentam recuperação espontânea",
          "A recuperação pode ocorrer entre oito e dez dias"
        ]
      }
    ]
  },

  diagnostico: {
    introducao:
      "O diagnóstico clínico presuntivo considera a rotina clínica, o histórico, os sinais apresentados pelo animal e o hemograma. A investigação laboratorial pode ser realizada por meio de testes de detecção de antígenos virais nas fezes.",

    metodos: [
      "elisa",
      "imunocromatografia",
      "pcr"
    ]
  },

  tratamento: {
    introducao:
      "O tratamento da coronavirose canina é baseado em medidas de suporte, seguindo os princípios terapêuticos utilizados na parvovirose canina. A abordagem busca auxiliar na recuperação do animal e controlar as consequências das alterações intestinais.",

    blocos: [
      {
        emoji: "💧",
        titulo: "Fluidoterapia",
        texto:
          "Utilizada para auxiliar na reposição de líquidos e na manutenção do equilíbrio hidroeletrolítico, especialmente diante das perdas provocadas pela diarreia."
      },
      {
        emoji: "💊",
        titulo: "Controle de infecções secundárias",
        texto:
          "A antibioticoterapia pode ser utilizada quando houver indicação para o controle de infecções bacterianas secundárias."
      },
      {
        emoji: "🩺",
        titulo: "Tratamento de suporte",
        texto:
          "A abordagem terapêutica deve considerar o estado clínico do animal e as alterações decorrentes do comprometimento intestinal."
      }
    ]
  },

  prevencao: {
    introducao:
      "A prevenção da coronavirose canina envolve medidas de higiene, controle da contaminação ambiental, isolamento dos animais infectados e vacinação, seguindo as medidas profiláticas apresentadas para a parvovirose canina.",

    blocos: [
      {
        emoji: "🧼",
        titulo: "Controle ambiental",
        texto:
          "Realizar a limpeza e a desinfecção de instalações, equipamentos e superfícies, reduzindo a presença de material contaminado no ambiente."
      },
      {
        emoji: "🚧",
        titulo: "Isolamento dos animais",
        texto:
          "Animais infectados devem ser isolados para reduzir a disseminação do agente e a contaminação de outros animais."
      },
      {
        emoji: "💉",
        titulo: "Vacinação",
        texto:
          "Tem-se a inclusão do componente contra coronavírus na composição de vacinas polivalentes caninas, juntamente com outros agentes infecciosos."
      }
    ]
  },

  referencias: [
    {
    titulo: "Canine coronavirus: Review",
    autores: "Júlia Sobreira; Alexandre de Pina Costa",
    fonte: "Pubvet, v. 16, n. 02",
    ano: "2022",
    link: "https://doi.org/10.31533/pubvet.v16n02a1029.1-8"
  },
  {
    titulo: "Canine Enteric Coronaviruses: Emerging Viral Pathogens with Distinct Recombinant Spike Proteins",
    autores: "Beth N. Licitra; Gerald E. Duhamel; Gary R. Whittaker",
    fonte: "Viruses, v. 6, n. 8, p. 3363–3376",
    ano: "2014",
    link: "https://doi.org/10.3390/v6083363"
  },
  {
    titulo: "Development of a nested PCR assay for the detection of canine coronavirus",
    autores: "Pratelli et al.",
    fonte: "Journal of Virological Methods",
    ano: "1999",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7119595/"
  },
  {
    titulo: "Quantitation of canine coronavirus RNA in the faeces of dogs by TaqMan RT-PCR",
    autores: "Decaro et al.",
    fonte: "Journal of Virological Methods, v. 119, n. 2, p. 145–150",
    ano: "2004",
    link: "https://doi.org/10.1016/j.jviromet.2004.03.012"
  }
  ],

  
casosClinicos: [
  {
    id: "coronavirose-giardiase-filhote",
    titulo: "Coronavirose e giardíase em filhote",
    especie: "Canina",
    idade: "2 meses e 13 dias",
    historico:
      "Filhote proveniente de canil, encaminhado ao hospital veterinário com queixa de diarreia.",
    sinais: [
      "Diarreia",
      "Alterações clínicas inespecíficas",
      "Alterações hematológicas inespecíficas"
    ],
    exames:
      "Exame coproparasitológico para pesquisa de Giardia spp. e teste rápido para coronavírus canino.",
    diagnostico:
      "Investigação de giardíase e coronavirose canina.",
    discussao:
      "O caso demonstra a importância do diagnóstico específico, uma vez que diferentes agentes podem provocar manifestações gastrointestinais semelhantes. A associação de exames laboratoriais auxilia na identificação dos agentes envolvidos. Relato baseado em estudo publicado pelo Instituto Federal Goiano em 2025."
  },
  {
    id: "coronavirose-surto-canil-grecia",
    titulo: "Surto de coronavirose em canil",
    especie: "Canina",
    idade: "Filhotes de diferentes idades",
    historico:
      "Surto de enterite em filhotes alojados em um canil na Grécia.",
    sinais: [
      "Diarreia",
      "Anorexia",
      "Fraqueza",
      "Depressão",
      "Desidratação",
      "Um óbito registrado"
    ],
    exames:
      "RT-PCR em amostras fecais, identificando coronavírus canino tipo II em 11 filhotes. Um dos animais também apresentou infecção concomitante por parvovírus canino.",
    diagnostico:
      "Coronavirose canina, com identificação molecular do CCoV tipo II.",
    discussao:
      "O relato evidencia a importância da investigação laboratorial em surtos de gastroenterite, especialmente pela possibilidade de coinfecções. A maioria dos filhotes apresentou melhora após o tratamento, embora tenha ocorrido um óbito. Caso publicado em 2010 no Journal of Veterinary Diagnostic Investigation."
  }
],


},







{
  id: "estomatite-vesicular",

  nome: "Estomatite Vesicular",

  agente: "Vesiculovirus (família Rhabdoviridae)",

  categoria: "Virais",

  icone: "🦠",

  zoonose: true,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Bovinos",
    "Equinos",
    "Suínos",
    "Roedores",
    "Cervídeos",
    "Javalis",
    "Aves"
  ],

  palavrasChave: [
    "estomatite vesicular",
    "vesiculovírus",
    "vesículas",
    "febre vesicular",
    "febre dos equídeos",
    "Rhabdoviridae",
    "New Jersey",
    "Indiana",
    "bovinos",
    "equinos",
    "suínos"
  ],

  imagem: "/images/doencas/estomatite-vesicular.jpg",

imagens: [
  {
    src: "/images/doencas/estomatite-vesicular/01-lesoes-orais.jpg",
    titulo: "Lesões vesiculares na cavidade oral",
    categoria: "Apresentação clínica",
    descricao:
      "Vesículas e ulcerações na mucosa oral, características da estomatite vesicular."
  },
  {
    src: "/images/doencas/estomatite-vesicular/02-lesoes.jpg",
    titulo: "Lesões em animais com estomatite vesicular",
    categoria: "Apresentação clínica",
    descricao:
      "Lesões vesiculares e inflamatórias na região dos cascos, tetos e úbere, que podem provocar coronite, manqueira comprometer a ordenha e favorecer o desenvolvimento de mastite."
  },
  

  {
    src: "/images/doencas/estomatite-vesicular/05-agente-etiologico.jpg",
    titulo: "Vírus da estomatite vesicular",
    categoria: "Agente etiológico",
    descricao:
      "Representação do Vesiculovirus, vírus envelopado com RNA pertencente à família Rhabdoviridae."
  }
],


  visaoGeral: {
    introducao:
      "A estomatite vesicular é uma enfermidade viral febril, de curso geralmente subagudo, caracterizada pela formação de vesículas em diferentes regiões do corpo, principalmente na boca, nos cascos e nos tetos. Apresenta tendência à recuperação espontânea, mas pode causar prejuízos produtivos e possui importância sanitária devido à semelhança clínica com a febre aftosa.",

    cards: [
      {
        emoji: "⭐",
        titulo: "Destaques",
        itens: [
          "Doença viral de caráter vesicular",
          "Acomete principalmente bovinos, equinos e suínos",
          "Apresenta tendência à recuperação espontânea",
          "Possui importância para a saúde pública por seu potencial zoonótico",
          "Deve ser diferenciada da febre aftosa"
        ]
      },
      {
        emoji: "🦠",
        titulo: "Características",
        itens: [
          "Vírus RNA envelopado",
          "Pertence à família Rhabdoviridae",
          "Gênero Vesiculovirus",
          "Principais tipos: New Jersey e Indiana",
          "Não apresenta imunidade cruzada entre os diferentes tipos e subtipos"
        ]
      },
      {
        emoji: "⚠️",
        titulo: "Importância sanitária",
        itens: [
          "Pode provocar redução da produção leiteira",
          "As lesões nos cascos podem causar manqueira",
          "Pode apresentar transmissão por artrópodes e fômites",
          "É uma enfermidade de notificação obrigatória e imediata"
        ]
      }
    ]
  },

  etiologia: {
    introducao:
      "A estomatite vesicular é causada por vírus do gênero Vesiculovirus, pertencentes à família Rhabdoviridae. São vírus envelopados, com genoma de RNA e morfologia característica em formato de bala.",

    listas: [
      {
        emoji: "🧬",
        titulo: "Classificação taxonômica",
        itens: [
          "Família: Rhabdoviridae",
          "Gênero: Vesiculovirus",
          "Espécie: vírus da estomatite vesicular",
          "Genoma: RNA",
          "Vírus envelopado com capsídeo de simetria helicoidal"
        ]
      },
      {
        emoji: "🔬",
        titulo: "Principais tipos virais",
        itens: [
          "New Jersey",
          "Indiana",
          "Subtipo Indiana-1 ou Alagoas",
          "Subtipo Indiana-2 ou Cocal",
          "Subtipo Indiana-3 ou Argentina"
        ]
      },
      {
        emoji: "🧫",
        titulo: "Características do agente",
        itens: [
          "Formato semelhante a uma bala",
          "Envelope lipoproteico com espículas de glicoproteínas",
          "Tamanho aproximado de 175 a 220 nm",
          "Apresenta sensibilidade a temperaturas elevadas, luz ultravioleta e determinados desinfetantes",
          "Não apresenta imunidade cruzada entre os diferentes tipos e subtipos"
        ]
      }
    ]
  },

  patogenia: {
    introducao:
      "Após a entrada do vírus no organismo, ocorre multiplicação viral e disseminação, podendo resultar em lesões vesiculares na cavidade oral, nos membros e na região dos tetos e úbere. O período de incubação descrito no material é de aproximadamente sete dias.",

    blocos: [
      {
        emoji: "🚪",
        titulo: "Entrada do vírus",
        texto:
          "A infecção pode ocorrer por diferentes vias, incluindo contato direto com animais infectados, exposição a aerossóis, ingestão de alimentos contaminados e contato com fômites. A transmissão também pode ocorrer por meio de artrópodes vetores."
      },
      {
        emoji: "🩸",
        titulo: "Disseminação viral",
        texto:
          "Após a entrada no organismo, o vírus pode alcançar a circulação sanguínea e disseminar-se para diferentes regiões, onde ocorre multiplicação viral e desenvolvimento de lesões."
      },
      {
        emoji: "🫧",
        titulo: "Formação das vesículas",
        texto:
          "A multiplicação viral nos tecidos epiteliais provoca a formação de vesículas, principalmente na boca, nas narinas, nos cascos e nos tetos e úbere."
      },
      {
        emoji: "🐄",
        titulo: "Evolução e recuperação",
        texto:
          "A enfermidade apresenta tendência à recuperação espontânea, geralmente em torno de dez dias. Entretanto, alguns animais podem desenvolver sequelas, como manqueira e mastite."
      },
      {
        emoji: "🛡️",
        titulo: "Imunidade",
        texto:
          "Após a infecção, pode ocorrer imunidade tipo-específica, com duração aproximada de seis a doze meses, sem proteção cruzada entre diferentes tipos virais."
      }
    ]
  },

  epidemiologia: {
    introducao:
      "A estomatite vesicular apresenta ocorrência em diferentes espécies animais e possui importância epidemiológica devido às possibilidades de transmissão direta e indireta. Além dos animais domésticos, diferentes espécies silvestres podem ser infectadas.",

    blocos: [
      {
        emoji: "🌎",
        titulo: "Hospedeiros suscetíveis",
        texto:
          "Bovinos, equinos, suínos, ratos, roedores silvestres, cervídeos e javalis podem ser infectados. A infecção também pode ocorrer em aves, como galinhas, patos e gansos."
      },
      {
        emoji: "🦟",
        titulo: "Transmissão por vetores",
        texto:
          "A transmissão pode ocorrer por artrópodes, incluindo mosquitos do gênero Lutzomyia e moscas, como Drosophila melanogaster."
      },
      {
        emoji: "🔄",
        titulo: "Outras vias de transmissão",
        texto:
          "A disseminação também pode ocorrer por aerossóis, contato direto, alimentos contaminados e fômites, como ordenhadeiras, bebedouros e utensílios. O vírus não penetra pela pele íntegra."
      },
      {
        emoji: "👤",
        titulo: "Importância zoonótica",
        texto:
          "A infecção humana é rara e pode provocar manifestações semelhantes às de um quadro gripal, incluindo febre, calafrios e dores musculares, além de lesões vesiculares."
      },
      {
        emoji: "📊",
        titulo: "Morbidade e mortalidade",
        texto:
          "O material descreve morbidade aproximada de 50% e mortalidade de 0%, com tendência à recuperação espontânea."
      }
    ]
  },

  sinaisClinicos: {
    introducao:
      "As manifestações clínicas estão relacionadas principalmente à formação de vesículas e úlceras, acompanhadas de sinais sistêmicos. A localização das lesões pode comprometer a alimentação, a locomoção e a produção leiteira.",

    blocos: [
      {
        emoji: "🌡️",
        titulo: "Sinais gerais",
        itens: [
          "Febre",
          "Anorexia",
          "Sialorreia",
          "Rinorreia seromucosa"
        ]
      },
      {
        emoji: "🫧",
        titulo: "Lesões vesiculares",
        itens: [
          "Formação de vesículas na cavidade oral",
          "Vesículas e úlceras em diferentes regiões do corpo",
          "Lesões nas narinas",
          "Lesões nos tetos e no úbere",
          "Lesões na região dos cascos"
        ]
      },
      {
        emoji: "🐄",
        titulo: "Alterações produtivas",
        itens: [
          "Redução acentuada da produção leiteira",
          "Dificuldade de alimentação devido às lesões orais",
          "Desconforto durante a ordenha",
          "Possibilidade de desenvolvimento de mastite"
        ]
      },
      {
        emoji: "🐎",
        titulo: "Alterações locomotoras",
        itens: [
          "Lesões na região dos cascos",
          "Coronite",
          "Manqueira",
          "Possibilidade de perda dos cascos em uma pequena proporção dos animais"
        ]
      },
      {
        emoji: "⚠️",
        titulo: "Possíveis sequelas",
        itens: [
          "Mastite",
          "Manqueira persistente",
          "Comprometimento dos cascos"
        ]
      }
    ]
  },

  diagnostico: {
    introducao:
      "O diagnóstico deve considerar a avaliação clínica, epidemiológica e laboratorial. Como as lesões vesiculares podem ser semelhantes às observadas em outras enfermidades de importância sanitária, é fundamental realizar o diagnóstico diferencial e a confirmação laboratorial.",

    metodos: [
      "fixacao-complemento",
      "pcr"
    ]
  },

  tratamento: {
    introducao:
      "A enfermidade apresenta tendência à recuperação espontânea, não sendo descrito tratamento antiviral específico. As medidas terapêuticas são direcionadas principalmente ao controle das complicações e sequelas decorrentes das lesões.",

    blocos: [
      {
        emoji: "🩺",
        titulo: "Tratamento de suporte",
        texto:
          "O manejo clínico deve priorizar o conforto do animal, a manutenção da alimentação e da hidratação e o acompanhamento da evolução das lesões."
      },
      {
        emoji: "🐄",
        titulo: "Manejo das sequelas",
        texto:
          "O tratamento das complicações deve ser direcionado conforme a alteração apresentada, especialmente nos casos de mastite e comprometimento dos cascos."
      },
      {
        emoji: "🧼",
        titulo: "Cuidados sanitários",
        texto:
          "Os animais doentes devem permanecer isolados, com redução do contato com outros animais e higienização dos equipamentos e utensílios utilizados no manejo."
      }
    ]
  },

  prevencao: {
    introducao:
      "A prevenção da estomatite vesicular envolve medidas de biossegurança, isolamento dos animais infectados, controle de possíveis vetores e redução das fontes de contaminação ambiental.",

    blocos: [
      {
        emoji: "💉",
        titulo: "Vacinação",
        destaque: true,
        texto:
          "Vacinas inativadas específicas podem ser utilizadas em regiões endêmicas quando a enfermidade representa um problema zoossanitário. No Brasil, não é realizada vacinação rotineira contra a estomatite vesicular.",
        tags: [
          "VACINAÇÃO EM REGIÕES ENDÊMICAS",
          "🇧🇷 NÃO VACINADO ROTINEIRAMENTE NO BRASIL"
        ]
      },
      {
        emoji: "🚧",
        titulo: "Isolamento dos animais doentes",
        texto:
          "Animais infectados devem ser isolados para reduzir a possibilidade de transmissão direta e indireta para os demais animais."
      },
      {
        emoji: "🦟",
        titulo: "Controle de vetores",
        texto:
          "O controle de artrópodes e a drenagem de áreas alagadiças são medidas importantes para reduzir a exposição aos possíveis vetores."
      },
      {
        emoji: "🧼",
        titulo: "Higienização de instalações",
        texto:
          "Ordenhadeiras, bebedouros, utensílios e demais equipamentos devem ser higienizados e desinfetados adequadamente, reduzindo a transmissão por fômites."
      },
      {
        emoji: "📋",
        titulo: "Notificação e vigilância",
        texto:
          "A suspeita de estomatite vesicular deve ser comunicada imediatamente ao Serviço Veterinário Oficial, permitindo a investigação e a adoção das medidas sanitárias necessárias."
      }
    ]
  },

  referencias: [
    {
      titulo: "Vesicular stomatitis",
      autores: "World Organisation for Animal Health (WOAH)",
      fonte: "Manual of Diagnostic Tests and Vaccines for Terrestrial Animals",
      ano: "2024",
      link: "https://www.woah.org/fileadmin/Home/eng/Health_standards/tahm/3.01.23_VESICULAR_STOMATITIS.pdf"
    },
    {
      titulo: "Lista de doenças de notificação obrigatória ao Serviço Veterinário Oficial",
      autores: "Ministério da Agricultura e Pecuária (MAPA)",
      fonte: "Instrução Normativa nº 50, de 24 de setembro de 2013",
      ano: "2013",
      link: "https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/qualidade-dos-servicos-veterinarios/arquivos/sistema-de-informacao-em-saude-animal/in_50_2013_doencas_notif_obrigatoria.pdf"
    }
  ],

casosClinicos: [
  {
    id: "estomatite-vesicular-caso-01",
    titulo: "Lesões vesiculares e queda na produção leiteira",
    especie: "Bovino",
    idade: "Fêmea adulta",
    historico:
      "Uma vaca leiteira apresenta redução significativa da produção de leite, febre e dificuldade para se alimentar. O produtor relata o aparecimento de lesões na boca e nos tetos, além de salivação excessiva.",
    sinais: [
      "Febre",
      "Anorexia",
      "Sialorreia intensa",
      "Vesículas e ulcerações na cavidade oral",
      "Lesões nos tetos e no úbere",
      "Redução da produção leiteira"
    ],
    exames:
      "Coleta de líquido e epitélio das vesículas para investigação laboratorial. A confirmação pode envolver isolamento viral em cultivo celular e testes sorológicos, como soroneutralização e fixação de complemento.",
    diagnostico:
      "Estomatite vesicular.",
    discussao:
      "A presença de lesões vesiculares na cavidade oral e nos tetos, associada à febre e à redução da produção leiteira, é compatível com estomatite vesicular. Entretanto, a febre aftosa deve ser considerada no diagnóstico diferencial. A confirmação laboratorial e a notificação ao Serviço Veterinário Oficial são fundamentais."
  },
  {
    id: "estomatite-vesicular-caso-02",
    titulo: "Manqueira associada a lesões vesiculares",
    especie: "Equino",
    idade: "Adulto",
    historico:
      "Um equino apresenta dificuldade de locomoção, febre e desconforto durante a alimentação. Durante o exame clínico, são observadas lesões vesiculares na cavidade oral e alterações inflamatórias na região dos cascos.",
    sinais: [
      "Febre",
      "Anorexia",
      "Sialorreia",
      "Vesículas e ulcerações na boca",
      "Coronite",
      "Manqueira"
    ],
    exames:
      "Coleta de material das vesículas para investigação laboratorial, incluindo isolamento viral, soroneutralização e fixação de complemento.",
    diagnostico:
      "Estomatite vesicular.",
    discussao:
      "A associação entre lesões orais e alterações nos cascos pode ocorrer na estomatite vesicular. A presença de equinos acometidos é um dado epidemiológico importante, pois essa espécie não é acometida pela febre aftosa, auxiliando no diagnóstico diferencial. A confirmação, entretanto, depende de investigação laboratorial."
  },
  {
    id: "estomatite-vesicular-caso-03",
    titulo: "Lesões vesiculares em criação de suínos",
    especie: "Suíno",
    idade: "Adulto",
    historico:
      "Em uma propriedade de criação de suínos, alguns animais apresentam febre, dificuldade de locomoção e lesões vesiculares na região da boca e dos cascos. O responsável relata o aparecimento de novos animais com sinais semelhantes.",
    sinais: [
      "Febre",
      "Anorexia",
      "Sialorreia",
      "Vesículas na cavidade oral",
      "Lesões na região dos cascos",
      "Manqueira"
    ],
    exames:
      "Coleta de líquido e epitélio das vesículas para investigação laboratorial e identificação do agente viral.",
    diagnostico:
      "Suspeita de estomatite vesicular, com necessidade de confirmação laboratorial.",
    discussao:
      "A ocorrência de lesões vesiculares em suínos exige atenção especial ao diagnóstico diferencial com outras enfermidades vesiculares, principalmente a febre aftosa e a doença vesicular dos suínos. A suspeita deve ser imediatamente comunicada ao Serviço Veterinário Oficial, que conduzirá a investigação e as medidas sanitárias pertinentes."
  }
],

},





{
  id: "febre-aftosa",
  nome: "Febre Aftosa",
  agente: "Vírus da febre aftosa (FMDV)",
  categoria: "Virais",
  icone: "🦠",
  zoonose: false,
  vacina: true,
  eutanasia: true,
  notificacaoObrigatoria: true,
  hospedeiros: [
    "Bovinos",
    "Bubalinos",
    "Suínos",
    "Ovinos",
    "Caprinos",
    "Outros animais de casco fendido"
  ],
  palavrasChave: [
    "febre aftosa",
    "FMDV",
    "aftovírus",
    "doença vesicular",
    "vesículas",
    "erosões",
    "claudicação",
    "sialorreia",
    "Picornaviridae"
  ],
  imagem: "/images/doencas/febre-aftosa.jpg",

  imagens: [
    {
      src: "/images/doencas/febre-aftosa/lesoes-orais.jpg",
      titulo: "Lesões vesiculares na cavidade oral",
      categoria: "Sinais clínicos",
      descricao: "Vesículas e erosões que podem acometer língua, gengivas, lábios e mucosa oral."
    },
    {
      src: "/images/doencas/febre-aftosa/lesoes-lingua.jpg",
      titulo: "Lesões na língua",
      categoria: "Sinais clínicos",
      descricao: "Vesículas rompidas e áreas erosivas na superfície da língua."
    },
    {
      src: "/images/doencas/febre-aftosa/lesoes-casco.jpg",
      titulo: "Lesões nos cascos",
      categoria: "Sinais clínicos",
      descricao: "Lesões vesiculares e erosivas no rodete coronário e no espaço interdigital, associadas à claudicação."
    },
    {
      src: "/images/doencas/febre-aftosa/lesoes-ubere.jpg",
      titulo: "Lesões no úbere",
      categoria: "Sinais clínicos",
      descricao: "Lesões vesiculares e ulcerativas que podem comprometer a produção de leite."
    },
    {
      src: "/images/doencas/febre-aftosa/miocardite-bezerro.jpg",
      titulo: "Comprometimento cardíaco em bezerros",
      categoria: "Patologia",
      descricao: "A degeneração do miocárdio pode produzir o aspecto conhecido como coração tigrado."
    }
  ],

  visaoGeral: {
    introducao: "A febre aftosa é uma doença viral generalizada, aguda e altamente contagiosa, que acomete principalmente animais de casco fendido. Caracteriza-se pelo desenvolvimento de vesículas e erosões na mucosa oral, no espaço interdigital, no rodete coronário dos cascos e no úbere. Apresenta elevada morbidade e grande impacto econômico, especialmente pela rápida disseminação e pelas perdas na produção animal.",
    cards: [
      {
        emoji: "🦠",
        titulo: "Agente etiológico",
        itens: [
          "Vírus da febre aftosa (FMDV)",
          "Família Picornaviridae",
          "Gênero Aphthovirus",
          "Vírus de RNA de fita simples"
        ]
      },
      {
        emoji: "🐄",
        titulo: "Principais hospedeiros",
        itens: [
          "Bovinos e bubalinos",
          "Suínos",
          "Ovinos e caprinos",
          "Outros animais de casco fendido"
        ]
      },
      {
        emoji: "⚠️",
        titulo: "Transmissão",
        itens: [
          "Contato direto com animais infectados",
          "Secreções e excreções contaminadas",
          "Aerossóis",
          "Fômites, veículos, equipamentos e roupas"
        ]
      },
      {
        emoji: "🔬",
        titulo: "Diagnóstico",
        itens: [
          "Investigação clínica e epidemiológica",
          "RT-PCR em tempo real",
          "Testes sorológicos",
          "Isolamento e identificação viral"
        ]
      },
      {
        emoji: "📢",
        titulo: "Importância sanitária",
        itens: [
          "Doença de notificação obrigatória",
          "Elevado potencial de disseminação",
          "Impacto econômico e comercial",
          "Investigação realizada pelo Serviço Veterinário Oficial"
        ]
      }
    ]
  },

  etiologia: {
    introducao: "O agente etiológico é o vírus da febre aftosa (FMDV), pertencente à família Picornaviridae e ao gênero Aphthovirus. É um vírus pequeno, não envelopado, com RNA de fita simples e capsídeo de simetria icosaédrica. Apresenta diferentes sorotipos, que possuem características antigênicas próprias.",
    listas: [
      {
        titulo: "Classificação viral",
        emoji: "🧬",
        itens: [
          "Família: Picornaviridae",
          "Gênero: Aphthovirus",
          "Espécie: vírus da febre aftosa (FMDV)",
          "Genoma: RNA de fita simples",
          "Capsídeo: simetria icosaédrica",
          "Tamanho aproximado: 20 a 25 nm",
          "Ausência de envelope viral"
        ]
      },
      {
        titulo: "Sorotipos",
        emoji: "🔬",
        itens: [
          "O",
          "A",
          "C",
          "SAT 1",
          "SAT 2",
          "SAT 3",
          "Asia 1"
        ]
      },
      {
        titulo: "Características de resistência",
        emoji: "🧪",
        itens: [
          "Resiste ao éter e ao clorofórmio.",
          "Pode permanecer viável durante o congelamento.",
          "É sensível ao formol, à soda e a condições extremas de pH.",
          "É inativado pela luz solar e por temperaturas elevadas.",
          "Pode sobreviver em materiais orgânicos, como fezes e sangue, especialmente em condições de alta umidade e baixa incidência solar."
        ]
      },
      {
        titulo: "Cultivo viral",
        emoji: "🧫",
        itens: [
          "Pode ser cultivado em células de língua de bovinos.",
          "Também pode ser cultivado em células de rins de diferentes espécies.",
          "Células permanentes BHK podem ser utilizadas.",
          "Produz efeito citopático devido à replicação citocida."
        ]
      }
    ]
  },

  patogenia: {
    introducao: "A infecção ocorre pela entrada do vírus através das mucosas ou de áreas de pele lesionada. Após a multiplicação inicial, o agente alcança a corrente circulatória, disseminando-se pelo organismo e provocando o aparecimento de lesões vesiculares em diferentes regiões.",
    blocos: [
      {
        emoji: "1️⃣",
        titulo: "Entrada do vírus",
        texto: "O vírus penetra no organismo pelas mucosas ou por áreas de pele lesionada, iniciando a multiplicação local e o desenvolvimento das aftas primárias."
      },
      {
        emoji: "2️⃣",
        titulo: "Viremia primária",
        texto: "Após a multiplicação inicial, o vírus alcança a corrente sanguínea, caracterizando a viremia primária, e é disseminado para órgãos e tecidos."
      },
      {
        emoji: "3️⃣",
        titulo: "Multiplicação viral",
        texto: "O agente realiza novas etapas de multiplicação nos tecidos, retornando à circulação sanguínea e promovendo uma segunda disseminação viral."
      },
      {
        emoji: "4️⃣",
        titulo: "Aftas secundárias",
        texto: "Ocorre o desenvolvimento de lesões vesiculares secundárias, principalmente na cavidade oral, nos cascos e no úbere."
      },
      {
        emoji: "⏱️",
        titulo: "Período de incubação",
        texto: "O período de incubação descrito é de aproximadamente 48 horas a 7 dias, podendo variar conforme as condições de exposição e do hospedeiro."
      }
    ]
  },

  epidemiologia: {
    introducao: "A febre aftosa apresenta elevada capacidade de disseminação entre animais suscetíveis, podendo provocar surtos com morbidade próxima de 100%. Sua ocorrência possui grande importância para a pecuária, devido às perdas produtivas e às restrições sanitárias e comerciais.",
    blocos: [
      {
        emoji: "🌎",
        titulo: "Distribuição geográfica",
        texto: "A doença apresenta distribuição mundial, com ocorrência historicamente registrada em diferentes regiões. Os sorotipos O e A são descritos como os mais frequentes em termos gerais."
      },
      {
        emoji: "🐄",
        titulo: "Morbidade e mortalidade",
        texto: "A morbidade pode alcançar 100% dos animais suscetíveis. A mortalidade é geralmente mais elevada em animais jovens, podendo ocorrer devido ao comprometimento cardíaco, enquanto os adultos apresentam menor risco de morte."
      },
      {
        emoji: "💧",
        titulo: "Eliminação viral",
        texto: "Animais infectados eliminam o vírus pela saliva, pelo conteúdo das vesículas, pelo leite, pelas fezes, pelo sêmen e pela urina. A eliminação pode ocorrer antes mesmo da manifestação dos sinais clínicos."
      },
      {
        emoji: "🌬️",
        titulo: "Transmissão",
        texto: "A transmissão ocorre por contato direto com animais infectados, pela via respiratória ou digestiva e por meio de aerossóis. Materiais contaminados, como instalações, veículos, rações, equipamentos, cordas, roupas e produtos de origem animal, também podem atuar na disseminação."
      },
      {
        emoji: "👤",
        titulo: "Participação humana na transmissão",
        texto: "A infecção humana é rara e a doença não representa risco significativo à saúde pública. Entretanto, pessoas podem atuar como veículos mecânicos de transmissão, transportando o vírus em roupas, calçados e equipamentos contaminados."
      },
      {
        emoji: "🇧🇷",
        titulo: "Situação sanitária do Brasil",
        texto: "O Brasil recebeu, em maio de 2025, o reconhecimento internacional como país livre de febre aftosa sem vacinação. A vigilância epidemiológica e a notificação imediata de qualquer suspeita de doença vesicular são fundamentais para evitar a reintrodução do vírus."
      }
    ]
  },

  sinaisClinicos: {
    introducao: "Os sinais clínicos são caracterizados principalmente por febre e pelo aparecimento de vesículas que se rompem, formando erosões e úlceras dolorosas. As lesões comprometem principalmente a cavidade oral, os cascos e o úbere, causando dificuldade de alimentação, locomoção e redução da produtividade.",
    blocos: [
      {
        emoji: "🌡️",
        titulo: "Sinais gerais",
        itens: [
          "Febre, podendo atingir 41 °C.",
          "Taquisfigmia.",
          "Anorexia.",
          "Polidipsia.",
          "Redução da produtividade."
        ]
      },
      {
        emoji: "👅",
        titulo: "Lesões na cavidade oral",
        itens: [
          "Vesículas nos lábios, língua, gengivas, bochechas, focinho e narinas.",
          "Rompimento das vesículas, formando úlceras dolorosas.",
          "Edema de língua, podendo ocorrer exteriorização.",
          "Sialorreia intensa.",
          "Disfagia e dificuldade de apreensão dos alimentos.",
          "Diminuição dos movimentos ruminais."
        ]
      },
      {
        emoji: "🐾",
        titulo: "Lesões nos membros",
        itens: [
          "Vesículas e úlceras no rodete coronário.",
          "Lesões no espaço interdigital.",
          "Dor e sensibilidade nos cascos.",
          "Claudicação e dificuldade de locomoção."
        ]
      },
      {
        emoji: "🥛",
        titulo: "Lesões no úbere",
        itens: [
          "Vesículas e úlceras no úbere e nos tetos.",
          "Dor durante a ordenha.",
          "Redução da produção de leite."
        ]
      },
      {
        emoji: "🐂",
        titulo: "Outros sinais reprodutivos",
        itens: [
          "Anestro.",
          "Abortos podem ocorrer, embora sejam raros.",
          "Podem ocorrer partos distócicos de bezerros mortos."
        ]
      },
      {
        emoji: "🐄",
        titulo: "Manifestação em bezerros",
        itens: [
          "Degeneração do miocárdio, podendo produzir o aspecto conhecido como coração tigrado.",
          "Dificuldade de locomoção.",
          "Emagrecimento.",
          "Morte súbita, que pode ocorrer em 12 a 30 horas nos casos de comprometimento cardíaco grave."
        ]
      }
    ]
  },

  diagnostico: {
    introducao: "O diagnóstico inicial considera o histórico epidemiológico, a elevada capacidade de disseminação e a presença de lesões vesiculares em animais suscetíveis. Entretanto, a febre aftosa não pode ser diferenciada com segurança de outras doenças vesiculares apenas pela avaliação clínica. A confirmação deve ser realizada por exames laboratoriais em laboratórios oficiais autorizados pelo Serviço Veterinário Oficial (SVO). Em caso de suspeita, a notificação ao SVO deve ser imediata.",
    metodos: [
      "pcr"
    ]
  },

  tratamento: {
    introducao: "Devido à elevada morbidade e à rápida disseminação, a terapêutica individual possui pouca importância no controle da febre aftosa. As medidas de contenção sanitária são prioritárias. Quando indicado pelas autoridades veterinárias, o tratamento é sintomático e voltado ao cuidado das lesões e à prevenção de complicações secundárias.",
    blocos: [
      {
        emoji: "🚫",
        titulo: "Isolamento e contenção",
        texto: "Os animais suspeitos devem ser isolados e a propriedade deve seguir as orientações do Serviço Veterinário Oficial. A movimentação de animais, pessoas e materiais deve ser controlada para evitar a disseminação do agente."
      },
      {
        emoji: "🩹",
        titulo: "Cuidados com as lesões",
        texto: "O material de aula descreve a lavagem das lesões e a utilização de soluções tópicas, desinfetantes, sprays, pastas e ataduras como medidas sintomáticas."
      },
      {
        emoji: "💉",
        titulo: "Medidas sanitárias oficiais",
        texto: "Em caso de confirmação, as medidas de controle são determinadas pelo Serviço Veterinário Oficial e podem incluir eliminação de animais infectados e contatos, destruição de carcaças, desinfecção e vigilância epidemiológica."
      }
    ]
  },

  prevencao: {
    introducao: "A prevenção da febre aftosa depende de vigilância epidemiológica, biossegurança, controle do trânsito de animais e produtos de origem animal e notificação imediata de suspeitas. A vacinação é uma ferramenta utilizada em diferentes estratégias internacionais, mas não é realizada rotineiramente no Brasil desde a transição para o status de país livre da doença sem vacinação, reconhecido em maio de 2025.",
    blocos: [
      {
        emoji: "📢",
        titulo: "Notificação obrigatória",
        texto: "Qualquer suspeita de doença vesicular deve ser comunicada imediatamente ao Serviço Veterinário Oficial. A notificação é obrigatória para médicos-veterinários, produtores e demais cidadãos. A presença de salivação excessiva, claudicação e lesões na boca, patas ou úbere deve ser investigada imediatamente."
      },
      {
        emoji: "🚧",
        titulo: "Controle de trânsito",
        texto: "O controle da entrada e saída de animais, produtos de origem animal, veículos e equipamentos é fundamental para impedir a introdução e a disseminação do vírus."
      },
      {
        emoji: "🧼",
        titulo: "Biossegurança e desinfecção",
        texto: "A higienização de instalações, veículos, equipamentos, roupas e calçados reduz o risco de transmissão indireta. O controle de acesso às propriedades também é uma medida importante."
      },
      {
        emoji: "🔍",
        titulo: "Vigilância epidemiológica",
        texto: "A identificação precoce de sinais clínicos, a investigação de vínculos epidemiológicos e a coleta de amostras pelo SVO são essenciais para a detecção de possíveis focos."
      },
      {
        emoji: "💉",
        titulo: "Vacinação",
        texto: "As vacinas contra a febre aftosa podem ser mono, bi ou trivalentes e devem considerar os sorotipos circulantes. O material de aula apresenta esquemas de vacinação utilizados em programas anteriores. No Brasil, a vacinação rotineira foi suspensa com o reconhecimento do status de país livre de febre aftosa sem vacinação. A vacinação de emergência poderá ser adotada pelas autoridades sanitárias, caso necessário."
      },
      {
        emoji: "⚠️",
        titulo: "Medidas em caso de foco",
        texto: "A confirmação da doença exige medidas oficiais de contenção, que podem incluir interdição da unidade epidemiológica, eliminação de animais infectados e contatos, destruição de carcaças, desinfecção e vigilância nas áreas envolvidas."
      }
    ]
  },

  referencias: [
    {
      titulo: "Febre Aftosa",
      autores: "Ministério da Agricultura e Pecuária (MAPA)",
      fonte: "Programa Nacional de Vigilância para a Febre Aftosa",
      ano: "2025",
      link: "https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/febre-aftosa"
    },
    {
      titulo: "Vigilância à Febre Aftosa",
      autores: "Ministério da Agricultura e Pecuária (MAPA)",
      fonte: "Programa Nacional de Vigilância para a Febre Aftosa",
      ano: "2026",
      link: "https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/febre-aftosa/combate-febre-aftosa"
    },
    {
      titulo: "Ficha Técnica — Febre Aftosa",
      autores: "Ministério da Agricultura e Pecuária (MAPA)",
      fonte: "Secretaria de Defesa Agropecuária",
      ano: "2025",
      link: "https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/febre-aftosa/ficha-tecnica_febre-aftosa_out_2025.pdf"
    },
    {
      titulo: "Foot and mouth disease",
      autores: "World Organisation for Animal Health (WOAH)",
      fonte: "WOAH — Disease information",
      ano: "2025",
      link: "https://www.woah.org/en/disease/foot-and-mouth-disease/"
    },
    {
      titulo: "Manual de procedimentos para atendimento a suspeitas de febre aftosa e outras doenças vesiculares",
      autores: "Organização Pan-Americana da Saúde (OPAS) / PANAFTOSA",
      fonte: "OPAS",
      ano: "2025",
      link: "https://www.paho.org/pt/documentos/manual-procedimentos-para-atendimento-suspeitas-febre-aftosa-e-outras-doencas"
    }
  ],

  casosClinicos: [
    {
      id: "febre-aftosa-01",
      titulo: "Bovinos com lesões vesiculares e claudicação",
      especie: "Bovino",
      historico: "Uma propriedade apresenta aumento repentino de animais com salivação intensa, dificuldade de alimentação e claudicação. Os primeiros animais afetados desenvolveram febre e, posteriormente, lesões vesiculares na cavidade oral e nos membros.",
      sinais: [
        "Febre.",
        "Sialorreia intensa.",
        "Vesículas na língua e nos lábios.",
        "Lesões no espaço interdigital e no rodete coronário.",
        "Claudicação.",
        "Redução da produção de leite."
      ],
      exames: "Amostras de epitélio, líquido vesicular e swabs podem ser encaminhadas pelo SVO para detecção do RNA viral por RT-PCR em tempo real. Exames sorológicos, como ELISA 3ABC, EITB e virusneutralização, podem ser utilizados conforme a finalidade da investigação.",
      diagnostico: "Suspeita de febre aftosa, com necessidade de confirmação laboratorial oficial.",
      discussao: "A ocorrência de sinais vesiculares em vários animais suscetíveis, associada à rápida disseminação e à claudicação, exige investigação imediata de doença vesicular. A avaliação clínica isolada não confirma a febre aftosa, sendo indispensável a atuação do Serviço Veterinário Oficial."
    },
    {
      id: "febre-aftosa-02",
      titulo: "Morte súbita em bezerros",
      especie: "Bovino",
      historico: "Em uma propriedade com circulação de doença vesicular, bezerros jovens apresentam dificuldade de locomoção, prostração e morte súbita. A avaliação anatomopatológica evidencia alterações compatíveis com degeneração do miocárdio.",
      sinais: [
        "Morte súbita.",
        "Dificuldade de locomoção.",
        "Emagrecimento.",
        "Comprometimento cardíaco.",
        "Possível aspecto de coração tigrado."
      ],
      exames: "A investigação deve seguir os procedimentos oficiais, com coleta de amostras apropriadas para detecção do agente e confirmação laboratorial.",
      diagnostico: "Suspeita de febre aftosa com comprometimento cardíaco em animais jovens.",
      discussao: "Em animais jovens, a febre aftosa pode apresentar evolução grave devido à degeneração do miocárdio, podendo ocorrer morte antes mesmo do desenvolvimento de lesões vesiculares evidentes. A suspeita deve ser comunicada imediatamente ao SVO."
    }
  ]
},


{
  id: "panleucopenia-felina",

  nome: "Panleucopenia Felina",

  agente: "Parvovírus felino (FPV)",

  categoria: "Virais",

  icone: "🦠",

  zoonose: false,

  vacina: true,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Felinos domésticos",
    "Felinos selvagens"
  ],

  palavrasChave: [
    "panleucopenia",
    "panleucopenia felina",
    "parvovirose felina",
    "parvovirus felino",
    "parvovírus felino",
    "FPV",
    "gato",
    "gatos",
    "felino",
    "felinos",
    "enterite felina",
    "leucopenia"
  ],

  imagem: "/images/doencas/panleucopenia-felina.jpg",
  imagens: [
  {
    src: "/images/doencas/panleucopenia/parvovirus-felino.jpg",
    titulo: "Parvovírus felino",
    categoria: "Agente etiológico",
    descricao:
      "Representação do agente viral responsável pela panleucopenia felina."
  },
  {
    src: "/images/doencas/panleucopenia/manifestacao-clinica.jpg",
    titulo: "Manifestações clínicas",
    categoria: "Sinais clínicos",
    descricao:
      "Felino com sinais clínicos compatíveis com a panleucopenia, como depressão, desidratação e alterações gastrointestinais."
  },
  {
    src: "/images/doencas/panleucopenia/hipoplasia-cerebelar.jpg",
    titulo: "Hipoplasia cerebelar",
    categoria: "Alteração congênita",
    descricao:
      "Alteração neurológica que pode ocorrer em filhotes infectados durante o desenvolvimento fetal."
  },
  {
    src: "/images/doencas/panleucopenia/diagnostico-laboratorial.jpg",
    titulo: "Diagnóstico laboratorial",
    categoria: "Diagnóstico",
    descricao:
      "Exames laboratoriais utilizados na investigação da infecção pelo parvovírus felino."
  }
],

  visaoGeral: {
    introducao:
      "A panleucopenia felina é uma enfermidade viral causada pelo parvovírus felino, que acomete felídeos domésticos e selvagens. Apresenta distribuição mundial e pode provocar quadros clínicos graves, especialmente em animais não vacinados, com elevada morbidade e mortalidade.",

    cards: [
      {
        emoji: "🐱",
        titulo: "Hospedeiros",
        itens: [
          "Acomete felídeos domésticos e selvagens",
          "Possui distribuição mundial",
          "Animais com mais de um ano apresentam soroprevalência de aproximadamente 75%, conforme o material da aula"
        ]
      },
      {
        emoji: "⚠️",
        titulo: "Importância clínica",
        itens: [
          "Pode apresentar elevada morbidade e mortalidade",
          "Formas clínicas graves são observadas principalmente em animais não vacinados",
          "A letalidade indicada na aula para animais não vacinados entre três e cinco meses é de 50% a 90%"
        ]
      },
      {
        emoji: "🦠",
        titulo: "Características da infecção",
        itens: [
          "Causada pelo parvovírus felino",
          "Acomete tecidos linfoides, medula óssea e criptas intestinais",
          "Pode provocar imunossupressão e alterações gastrointestinais",
          "Também pode ocorrer transmissão vertical"
        ]
      }
    ]
  },

  etiologia: {
    introducao:
      "A panleucopenia felina é causada pelo parvovírus felino (FPV), agente responsável pela infecção de felídeos domésticos e selvagens.",

    listas: [
      {
        titulo: "Agente etiológico",
        emoji: "🦠",
        itens: [
          "Parvovírus felino (FPV)",
          "Responsável pela panleucopenia felina",
          "Acomete felídeos domésticos e selvagens"
        ]
      }
    ]
  },

  epidemiologia: {
    introducao:
      "A panleucopenia felina apresenta distribuição mundial e sua ocorrência está relacionada principalmente à ausência de vacinação. A transmissão pode acontecer de maneira direta ou indireta, por contato com animais infectados, secreções e materiais contaminados.",

    blocos: [
      {
        emoji: "🌎",
        titulo: "Distribuição",
        texto:
          "A enfermidade apresenta distribuição mundial, com ocorrência controlada principalmente por meio da vacinação."
      },
      {
        emoji: "🐈",
        titulo: "Soroprevalência",
        texto:
          "Segundo o material da aula, aproximadamente 75% dos animais com mais de um ano apresentam soroprevalência para o agente."
      },
      {
        emoji: "⚠️",
        titulo: "Susceptibilidade",
        texto:
          "Os animais não vacinados apresentam maior risco de desenvolver a forma clínica da enfermidade. O material destaca animais entre três e cinco meses como grupo de atenção, com letalidade indicada entre 50% e 90%."
      },
      {
        emoji: "🔄",
        titulo: "Transmissão",
        texto:
          "A transmissão pode ocorrer de forma direta ou indireta, pelo contato com animais infectados ou suas secreções, especialmente as fezes. A disseminação também acontece pela via oro-fecal e por meio de fômites."
      },
      {
        emoji: "🧫",
        titulo: "Resistência ambiental",
        texto:
          "O vírus apresenta resistência no ambiente, favorecendo a manutenção da contaminação e a disseminação da enfermidade."
      },
      {
        emoji: "🤰",
        titulo: "Transmissão vertical",
        texto:
          "A transmissão vertical pode ocorrer durante a gestação, provocando abortos ou malformações congênitas, dependendo da fase em que a infecção é estabelecida."
      }
    ]
  },

  patogenia: {
    introducao:
      "Após a exposição oro-nasal, o parvovírus felino alcança inicialmente os tecidos linfoides da orofaringe. Em seguida, ocorre viremia, com disseminação para a medula óssea, órgãos linfoides e criptas intestinais. A infecção provoca alterações hematológicas, imunossupressão e lesões nos tecidos acometidos.",

    blocos: [
      {
        emoji: "1️⃣",
        titulo: "Exposição e entrada do agente",
        texto:
          "Após a exposição oro-nasal, o vírus alcança os tecidos linfoides localizados principalmente na região da orofaringe."
      },
      {
        emoji: "2️⃣",
        titulo: "Viremia e disseminação",
        texto:
          "Entre dois e sete dias, ocorre viremia, permitindo a disseminação viral para a medula óssea, órgãos linfoides e criptas intestinais."
      },
      {
        emoji: "3️⃣",
        titulo: "Comprometimento hematológico",
        texto:
          "A infecção provoca linfopenia e neutropenia, comprometendo as células de defesa do organismo."
      },
      {
        emoji: "4️⃣",
        titulo: "Lesões nos tecidos linfoides",
        texto:
          "Ocorrem necrose e atrofia dos linfonodos, contribuindo para o desenvolvimento de imunossupressão."
      },
      {
        emoji: "5️⃣",
        titulo: "Comprometimento intestinal",
        texto:
          "A infecção das criptas intestinais compromete a renovação das células do epitélio intestinal, favorecendo as alterações gastrointestinais características da enfermidade."
      }
    ]
  },

  sinaisClinicos: {
    introducao:
      "A panleucopenia felina pode apresentar evolução clínica grave, com manifestações sistêmicas e gastrointestinais. Os sinais iniciais incluem depressão profunda, hipertermia, vômitos e desidratação. Nos dias seguintes, podem surgir alterações hematológicas e complicações sistêmicas.",

    blocos: [
      {
        emoji: "🌡️",
        titulo: "Manifestações iniciais",
        itens: [
          "Depressão profunda",
          "Hipertermia",
          "Vômitos",
          "Desidratação",
          "Possibilidade de morte"
        ]
      },
      {
        emoji: "🩸",
        titulo: "Manifestações posteriores (3 a 4 dias)",
        itens: [
          "Panleucopenia, com contagem inferior a 2.000 leucócitos, conforme o material da aula",
          "Diarreia hemorrágica ou não hemorrágica",
          "Dor abdominal",
          "Coagulação intravascular disseminada (CID)",
          "Hipotermia",
          "Coma"
        ]
      },
      {
        emoji: "🐾",
        titulo: "Manifestações em neonatos",
        itens: [
          "Alterações neurológicas",
          "Possibilidade de malformações congênitas associadas à transmissão vertical"
        ]
      },
      {
        emoji: "🧠",
        titulo: "Alterações congênitas",
        itens: [
          "Hipoplasia cerebelar",
          "Atrofia do nervo óptico",
          "Retinopatia",
          "Hidroencefalia",
          "Possibilidade de aborto, dependendo da fase gestacional em que ocorre a infecção"
        ]
      }
    ]
  },

  diagnostico: {
    introducao:
      "O diagnóstico clínico presuntivo considera o histórico do animal, os sinais clínicos e a presença de leucopenia. A investigação laboratorial pode ser realizada por meio de sorologia (ELISA) e PCR, utilizando amostras de fezes ou sangue.",

    metodos: [
      "elisa",
      "pcr"
    ]
  },

  tratamento: {
    introducao:
      "O tratamento da panleucopenia felina é baseado em terapia de suporte, buscando controlar as alterações provocadas pela infecção e manter as condições clínicas do animal. O prognóstico é desfavorável, especialmente nos quadros graves.",

    blocos: [
      {
        emoji: "🩺",
        titulo: "Terapia de suporte",
        texto:
          "O tratamento é direcionado ao suporte clínico do paciente, considerando as alterações sistêmicas e gastrointestinais provocadas pela enfermidade."
      },
      {
        emoji: "💧",
        titulo: "Controle das alterações clínicas",
        texto:
          "O suporte deve considerar as perdas líquidas e as consequências da desidratação, dos vômitos e das alterações gastrointestinais."
      },
      {
        emoji: "⚠️",
        titulo: "Prognóstico",
        texto:
          "A enfermidade apresenta prognóstico desfavorável, principalmente em animais não vacinados e nos casos de evolução clínica grave."
      }
    ]
  },

  prevencao: {
    introducao:
      "A prevenção da panleucopenia felina é baseada principalmente na vacinação, utilizando vacina viva atenuada. A imunização é fundamental para reduzir a ocorrência das formas clínicas graves da enfermidade.",

    blocos: [
      {
        emoji: "💉",
        titulo: "Vacinação",
        destaque: true,
        texto:
          "A prevenção é realizada por meio da vacina viva atenuada contra o parvovírus felino, componente da vacina tríplice felina.",
        tags: [
          "VACINA VIVA ATENUADA",
          "V3",
          "V4",
          "V5"
        ],
        informacoes: [
          {
            titulo: "Primeira dose",
            texto:
              "Aplicação entre seis e oito semanas de idade."
          },
          {
            titulo: "Segunda dose",
            texto:
              "Aplicação entre dez e doze semanas de idade."
          },
          {
            titulo: "Revacinação",
            texto:
              "O material da aula indica revacinação anual por meio da tríplice felina."
          }
        ]
      }
    ]
  },

  referencias: [
  
  {
    titulo: "Feline Panleukopenia",
    autores: "Lena DeTar",
    fonte: "Merck Veterinary Manual",
    ano: "2025",
    link: "https://www.merckvetmanual.com/digestive-system/infectious-diseases-of-the-gastrointestinal-tract-in-small-animals/feline-panleukopenia"
  },
  {
    titulo: "Guideline for Feline Panleukopenia",
    autores: "European Advisory Board on Cat Diseases (ABCD)",
    fonte: "ABCD Cats & Vets",
    ano: "2025",
    link: "https://www.abcdcatsvets.org/guideline-for-feline-panleukopenia/"
  },
  {
    titulo: "2024 Guidelines for the Vaccination of Dogs and Cats",
    autores: "World Small Animal Veterinary Association (WSAVA)",
    fonte: "WSAVA",
    ano: "2024",
    link: "https://wsava.org/global-guidelines/vaccination-guidelines/"
  }
],

  casosClinicos: [
    {
      id: "panleucopenia-felina-caso-01",
      titulo: "Filhote felino com manifestações gastrointestinais",
      especie: "Felina",
      idade: "4 meses",
      historico:
        "Caso didático fictício elaborado com base nas manifestações clínicas apresentadas na aula. Filhote felino não vacinado é atendido com histórico de depressão progressiva, vômitos e redução da ingestão alimentar.",
      sinais: [
        "Depressão profunda",
        "Hipertermia",
        "Vômitos",
        "Desidratação",
        "Diarreia",
        "Dor abdominal"
      ],
      exames:
        "Hemograma evidenciando leucopenia. Investigação laboratorial complementar por ELISA e PCR em amostras de fezes ou sangue.",
      diagnostico:
        "Panleucopenia felina, causada pelo parvovírus felino (FPV).",
      discussao:
        "O caso didático demonstra a apresentação da panleucopenia felina em um filhote não vacinado. A associação entre histórico, manifestações clínicas e leucopenia auxilia na suspeita diagnóstica, enquanto ELISA e PCR são utilizados na investigação laboratorial. A possibilidade de evolução grave reforça a importância da vacinação preventiva."
    }
  ]

},





{
  id: "parvovirose",

  nome: "Parvovirose canina",

  agente: "Carnivore protoparvovirus 2 (CPV-2)",

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
    "parvovirose canina",
    "parvovírus",
    "parvovirus",
    "CPV-2",
    "enterite",
    "gastroenterite hemorrágica",
    "cão",
    "cao",
    "cachorro",
    "canino"
  ],

  imagem: "/images/doencas/parvovirose.jpg",
  imagens: [
  {
    src: "/images/doencas/parvovirose/filhote-gastroenterite-hemorragica.jpg",
    titulo: "Filhote com gastroenterite hemorrágica",
    categoria: "Apresentação clínica",
    descricao:
      "Imagem de um cão jovem com síndrome de gastroenterite hemorrágica."
  },
  {
    src: "/images/doencas/parvovirose/intestino-aspecto-macroscopico-a.jpg",
    titulo: "Aspecto macroscópico intestinal – imagem A",
    categoria: "Alterações intestinais",
    descricao:
      "Imagem macroscópica intestinal de parvovirose canina."
  },
 
  {
    src: "/images/doencas/parvovirose/snap-parvo-teste-antigeno.jpg",
    titulo: "Teste rápido de antígeno para parvovírus canino",
    categoria: "Diagnóstico",
    descricao:
      "Dispositivos de teste rápido para diagnóstico da parvovirose feito com amostra de fezes ou swab retal."
  }
],

  visaoGeral: {
    introducao:
      "A parvovirose canina é uma enfermidade viral que causa enterite e representa uma importante causa de diarreia em cães. A doença geralmente apresenta maior gravidade em animais com menos de seis meses de idade, com alta morbidade e mortalidade, especialmente entre seis semanas e seis meses.",

    cards: [
      {
        titulo: "Animais mais acometidos",
        emoji: "🐶",
        itens: [
          "Maior gravidade em cães com menos de seis meses",
          "Maior incidência entre seis semanas e seis meses de idade",
          "A doença independe de raça e sexo"
        ]
      },
      {
        titulo: "Importância clínica",
        emoji: "⚠️",
        itens: [
          "Alta morbidade e mortalidade",
          "Pode evoluir rapidamente para gastroenterite hemorrágica",
          "Os quadros graves podem resultar em sepse, coagulação intravascular disseminada e morte"
        ]
      },
      {
        titulo: "Janela de susceptibilidade",
        emoji: "🛡️",
        itens: [
          "Os anticorpos maternos conferem proteção por aproximadamente duas a quatro semanas",
          "Entre quatro e seis semanas pode ocorrer a chamada janela de susceptibilidade",
          "Protocolos vacinais incorretos podem favorecer a ocorrência da doença"
        ]
      }
    ]
  },

  etiologia: {
    introducao:
      "O agente etiológico da parvovirose canina é o Carnivore protoparvovirus 2 (CPV-2), pertencente à família Parvoviridae e ao gênero Protoparvovirus.",

    listas: [
      {
        titulo: "Classificação viral",
        emoji: "🧬",
        itens: [
          "Família: Parvoviridae",
          "Gênero: Protoparvovirus",
          "Agente: Carnivore protoparvovirus 2 (CPV-2)"
        ]
      },
      {
        titulo: "Características do vírus",
        emoji: "🔬",
        itens: [
          "Vírus não envelopado",
          "Capsídeo icosaédrico",
          "Genoma constituído por DNA de fita simples (ssDNA)",
          "Possui proteína do capsídeo (CP), relacionada à virulência"
        ]
      }
    ]
  },

  epidemiologia: {
    introducao:
      "A parvovirose apresenta elevada importância epidemiológica, principalmente entre cães jovens. A disseminação está relacionada à eliminação viral nas fezes, à contaminação ambiental e à resistência do agente no ambiente.",

    blocos: [
      {
        emoji: "🐕",
        titulo: "Faixa etária",
        texto:
          "A maior incidência ocorre entre seis semanas e seis meses de idade. A doença geralmente é mais grave em cães com menos de seis meses."
      },
      {
        emoji: "🧫",
        titulo: "Soroprevalência",
        texto:
          "A soroprevalência em centros urbanos pode variar de 60% a 95%."
      },
      {
        emoji: "🌎",
        titulo: "Resistência ambiental",
        texto:
          "O vírus apresenta elevada resistência ambiental, podendo permanecer no ambiente por mais de seis meses."
      },
      {
        emoji: "⚠️",
        titulo: "Susceptibilidade",
        texto:
          "A ausência de imunidade natural e protocolos vacinais incorretos favorecem a ocorrência da doença, especialmente durante a janela de susceptibilidade."
      }
    ]
  },

  patogenia: {
    introducao:
      "Após a exposição oro-nasal, o vírus alcança inicialmente os tecidos linfoides da orofaringe. Em seguida, ocorre viremia, permitindo sua disseminação para a medula óssea, órgãos linfoides, jejuno, íleo e outros tecidos.",

    blocos: [
      {
        emoji: "1️⃣",
        titulo: "Exposição e disseminação inicial",
        texto:
          "Após a exposição oro-nasal, o vírus alcança os tecidos linfoides, especialmente os localizados na orofaringe."
      },
      {
        emoji: "2️⃣",
        titulo: "Viremia",
        texto:
          "Ocorre disseminação viral pela corrente sanguínea, atingindo a medula óssea, os órgãos linfoides, o jejuno, o íleo e outros tecidos."
      },
      {
        emoji: "3️⃣",
        titulo: "Comprometimento hematológico e imunológico",
        texto:
          "A infecção pode provocar linfopenia, neutropenia e atrofia do timo, resultando em imunossupressão."
      },
      {
        emoji: "4️⃣",
        titulo: "Lesão intestinal",
        texto:
          "No jejuno e no íleo ocorre necrose das criptas intestinais, comprometendo a renovação do epitélio e favorecendo a diarreia por má absorção e as infecções secundárias."
      },
      {
        emoji: "5️⃣",
        titulo: "Evolução grave",
        texto:
          "Nas formas severas, podem ocorrer sepse e coagulação intravascular disseminada (CID), podendo levar o animal à morte."
      }
    ]
  },

  sinaisClinicos: {
    introducao:
      "A parvovirose pode apresentar diferentes síndromes clínicas, sendo a gastroenterite hemorrágica uma das manifestações mais importantes. A evolução pode ser muito rápida, especialmente nos animais jovens não vacinados.",

    blocos: [
      {
        emoji: "❤️",
        titulo: "Miocardite",
        itens: [
          "Ocorre somente em neonatos",
          "Pode estar associada à infecção intrauterina",
          "Pode provocar morte por arritmia ou insuficiência cardíaca congestiva",
          "É uma manifestação rara"
        ]
      },
      {
        emoji: "🩸",
        titulo: "Gastroenterite hemorrágica",
        itens: [
          "Mais associada a cães jovens não vacinados",
          "Súbita prostração",
          "Anorexia",
          "Vômitos frequentes",
          "Sialorreia",
          "Febre",
          "Dor abdominal",
          "Diarreia hemorrágica"
        ]
      },
      {
        emoji: "⚠️",
        titulo: "Complicações",
        itens: [
          "Desidratação",
          "Hipovolemia",
          "Hipoglicemia",
          "Choque"
        ]
      }
    ]
  },

 diagnostico: {
  introducao:
    "O diagnóstico pode ser inicialmente presuntivo, considerando o histórico, os sinais clínicos e o hemograma. A confirmação laboratorial pode ser realizada por métodos de detecção de antígenos virais, anticorpos ou material genético do agente.",

  metodos: [
    "pcr",
    "elisa",
    "imunocromatografia",
    "hemaglutinacao"
  ]
},

  tratamento: {
    introducao:
      "O tratamento é baseado em medidas de suporte, com o objetivo de controlar as alterações sistêmicas e as consequências da gastroenterite.",

    blocos: [
      {
        emoji: "💧",
        titulo: "Fluidoterapia",
        texto:
          "Indicada para auxiliar na correção da desidratação e da hipovolemia."
      },
      {
        emoji: "💊",
        titulo: "Antibioticoterapia",
        texto:
          "Utilizada para o controle de infecções secundárias."
      },
      {
        emoji: "🤢",
        titulo: "Controle dos vômitos",
        texto:
          "Uso de medicamentos antieméticos como parte do tratamento de suporte."
      },
      {
        emoji: "⚖️",
        titulo: "Correção metabólica",
        texto:
          "Controle da hipoglicemia e da hipocalemia."
      },
      {
        emoji: "🩸",
        titulo: "Transfusão",
        texto:
          "A transfusão sanguínea e de plasma é apresentada como possibilidade terapêutica."
      }
    ]
  },

  prevencao: {
    introducao:
      "A profilaxia da parvovirose envolve medidas de controle ambiental e vacinação, considerando a elevada resistência do vírus no ambiente.",

    blocos: [
      {
        emoji: "🧼",
        titulo: "Controle ambiental",
        texto:
          "Realizar isolamento e tratamento dos animais acometidos, além de limpeza e desinfecção de equipamentos e instalações."
      },
      {
        emoji: "🧴",
        titulo: "Desinfecção",
        texto:
          "Uso de hipoclorito de sódio a 0,3%, com tempo mínimo de contato de dez minutos, além da limpeza a vapor."
      },
      {
        emoji: "💉",
        titulo: "Vacinação",
        texto:
          "A vacinação é realizada com vacina viva atenuada polivalente, incluindo componentes contra cinomose, adenovírus canino tipos 1 e 2, parvovírus, coronavírus, parainfluenza canina e leptospirose (quatro sorovares)."
      },
      {
        emoji: "🐶",
        titulo: "Primovacinação de filhotes",
        texto:
          "O protocolo é composto por três doses: a primeira entre seis e doze semanas de idade; a segunda quatro semanas depois; e a terceira mais quatro semanas depois. Em alguns casos, pode ser indicada uma quarta dose. É necessário reforço anual."
      }
    ]
  },

  referencias: [{
  titulo: "Parvovirose canina: diagnóstico e manejo",
  autores:
    "Martins, S. S.; Vargas, T. M. da S.; Santos, D. G. dos; Amorim, N. T. S.; Morais, B. G. de; Silva, J. E. M. da; Benitez, M. M.; Nascimento, J. da S.; Ribeiro, S. da S.",
  fonte:
    "Brazilian Journal of Implantology and Health Sciences, v. 6, n. 8, p. 4433–4439",
  ano: "2024",
  link: "https://doi.org/10.36557/2674-8169.2024v6n8p4433-4439"
}],

  casosClinicos: [
    {
      id: "parvovirose-caso-01",
      titulo: "Filhote com gastroenterite hemorrágica",
      especie: "Canina",
      idade: "Filhote, com menos de seis meses",
      historico:
        "Cão jovem, não vacinado, apresenta início súbito de prostração, anorexia e vômitos frequentes, evoluindo com diarreia hemorrágica.",
      sinais: [
        "Prostração",
        "Anorexia",
        "Vômitos frequentes",
        "Sialorreia",
        "Febre",
        "Dor abdominal",
        "Diarreia hemorrágica"
      ],
      exames:
        "A investigação pode incluir hemograma e testes laboratoriais: ELISA para antígeno fecal, SNAP Parvo Test, hemaglutinação e isolamento viral em células MDCK.",
      diagnostico:
        "Suspeita clínica de parvovirose canina, com investigação laboratorial para confirmação.",
      discussao:
        "O caso ilustra a apresentação de gastroenterite hemorrágica em um cão jovem não vacinado. A evolução pode ocorrer entre 12 e 24 horas A lesão intestinal pode provocar desidratação, hipovolemia, hipoglicemia e choque, reforçando a importância da avaliação e do suporte clínico."
    }
  ]
},



{
  id: "pif",

  nome: "PIF (Peritonite Infecciosa Felina)",

  agente: "Coronavírus felino (FCoV)",

  categoria: "Virais",

  icone: "🦠",

  zoonose: false,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Felinos domésticos",
    "Felinos selvagens"
  ],

  palavrasChave: [
    "pif",
    "peritonite infecciosa felina",
    "coronavirus felino",
    "fcov",
    "fipv",
    "fecv",
    "gato",
    "felino",
    "ascite",
    "efusiva",
    "não efusiva",
    "gs-441524",
    "remdesivir"
  ],

  imagem: "/images/doencas/pif.jpg",
imagens: [
  {
    src: "/images/doencas/pif/01-pif-efusiva.jpg",
    titulo: "PIF na forma efusiva",
    categoria: "Apresentação clínica",
    descricao:
      "Felino com distensão abdominal associada ao acúmulo de líquido na cavidade peritoneal, característica da forma efusiva da Peritonite Infecciosa Felina."
  },
  {
    src: "/images/doencas/pif/02-efusao-abdominal.jpg",
    titulo: "Efusão abdominal",
    categoria: "Necropsia",
    descricao:
      "Acúmulo de líquido na cavidade abdominal, podendo provocar aumento do volume abdominal e desconforto no animal."
  },
  {
    src: "/images/doencas/pif/03-efusao-pleural.jpg",
    titulo: "Efusão pleural",
    categoria: "Achado clínico",
    descricao:
      "Presença de líquido no espaço pleural, podendo causar dificuldade respiratória e comprometimento da expansão pulmonar."
  },
  {
    src: "/images/doencas/pif/04-pif-nao-efusiva.jpg",
    titulo: "PIF na forma não efusiva",
    categoria: "Necropsia",
    descricao:
      "Forma não efusiva da doença, caracterizada pela formação de lesões inflamatórias granulomatosas em diferentes órgãos."
  },
  {
    src: "/images/doencas/pif/05-lesoes-granulomatosas.jpg",
    titulo: "Lesões granulomatosas",
    categoria: "Lesão macroscópica",
    descricao:
      "Lesões inflamatórias granulomatosas que podem acometer órgãos como rins, fígado, linfonodos e outros tecidos."
  },
  {
    src: "/images/doencas/pif/06-pif-ocular.jpg",
    titulo: "Manifestação ocular",
    categoria: "Apresentação clínica",
    descricao:
      "Alterações oculares associadas à PIF, incluindo uveíte e outras manifestações inflamatórias intraoculares."
  },
  {
    src: "/images/doencas/pif/07-pif-neurologica.jpg",
    titulo: "Manifestação neurológica",
    categoria: "Apresentação clínica",
    descricao:
      "Comprometimento do sistema nervoso central, podendo provocar alterações de coordenação, equilíbrio e comportamento."
  },
  {
    src: "/images/doencas/pif/08-coronavirus-felino.jpg",
    titulo: "Coronavírus felino",
    categoria: "Agente etiológico",
    descricao:
      "Representação microscópica do coronavírus felino, agente relacionado ao desenvolvimento da Peritonite Infecciosa Felina."
  }
],
  visaoGeral: {
    introducao:
      "A Peritonite Infecciosa Felina (PIF) é uma doença infecciosa sistêmica e imunomediada que acomete felinos domésticos e selvagens. Está associada à infecção pelo coronavírus felino (FCoV), vírus amplamente disseminado entre populações de gatos. A doença se desenvolve quando ocorrem alterações que favorecem a infecção de células do sistema mononuclear fagocitário, desencadeando uma resposta inflamatória intensa e comprometendo diferentes órgãos e sistemas. Embora historicamente apresentasse prognóstico desfavorável, o desenvolvimento de terapias antivirais modificou significativamente sua evolução, tornando possível a recuperação de muitos animais.",

    cards: [
      {
        titulo: "Características da doença",
        emoji: "🦠",
        itens: [
          "Associada à infecção pelo coronavírus felino (FCoV)",
          "Não é considerada uma zoonose",
          "Pode provocar inflamação sistêmica e comprometimento de diferentes órgãos",
          "Apresenta maior ocorrência em ambientes com elevada densidade populacional de felinos",
          "A infecção pelo coronavírus felino não significa necessariamente desenvolvimento de PIF"
        ]
      },
      {
        titulo: "Formas clínicas",
        emoji: "⚠️",
        itens: [
          "Forma efusiva (úmida): caracterizada pelo acúmulo de líquido nas cavidades corporais",
          "Forma não efusiva (seca): caracterizada principalmente por lesões inflamatórias piogranulomatosas",
          "Forma mista: apresenta características das formas efusiva e não efusiva"
        ]
      },
      {
        titulo: "Importância clínica",
        emoji: "🐈",
        itens: [
          "Acomete principalmente gatos jovens, embora possa ocorrer em animais de qualquer idade",
          "Pode provocar alterações abdominais, respiratórias, neurológicas, oculares, hepáticas e renais",
          "O diagnóstico exige associação entre histórico, manifestações clínicas e exames complementares",
          "Existem tratamentos antivirais que modificaram significativamente o prognóstico da doença"
        ]
      }
    ]
  },

  etiologia: {
    introducao:
      "A PIF está associada ao coronavírus felino (FCoV), vírus envelopado pertencente à família Coronaviridae, cujo material genético é constituído por RNA de fita simples de sentido positivo. A doença está relacionada à capacidade de determinadas variantes virais infectarem monócitos e macrófagos, favorecendo a disseminação sistêmica e o desenvolvimento da resposta inflamatória característica.",

    listas: [
      {
        titulo: "Características do agente etiológico",
        emoji: "🦠",
        itens: [
          "Coronavírus felino (FCoV)",
          "Família Coronaviridae",
          "Gênero Alphacoronavirus",
          "Vírus envelopado",
          "Material genético constituído por RNA de fita simples de sentido positivo",
          "Apresenta nucleocapsídeo"
        ]
      },
      {
        titulo: "Variantes do coronavírus felino",
        emoji: "🔬",
        itens: [
          "Coronavírus entérico felino (FECV): associado principalmente à infecção intestinal, geralmente com manifestações leves ou subclínicas",
          "Variantes associadas à PIF: apresentam características que favorecem a infecção e a replicação em monócitos e macrófagos",
          "A denominação FIPV é tradicionalmente utilizada para se referir às variantes associadas à doença"
        ]
      },
      {
        titulo: "Características da infecção",
        emoji: "🧬",
        itens: [
          "A infecção pelo coronavírus felino é relativamente comum entre gatos",
          "A maioria dos animais infectados não desenvolve PIF",
          "Alterações virais e fatores relacionados ao hospedeiro participam do desenvolvimento da doença",
          "A resposta imunológica possui papel importante na formação das lesões inflamatórias"
        ]
      }
    ]
  },

  patogenia: {
    introducao:
      "A patogenia da PIF envolve a infecção inicial pelo coronavírus felino, geralmente restrita ao trato gastrointestinal, seguida pelo desenvolvimento de variantes capazes de infectar células do sistema mononuclear fagocitário. A disseminação de monócitos e macrófagos infectados desencadeia uma resposta inflamatória intensa, responsável pelas lesões vasculares, piogranulomatosas e pelo comprometimento de diferentes órgãos.",

    blocos: [
      {
        emoji: "🍽️",
        titulo: "Entrada e infecção inicial",
        texto:
          "A infecção ocorre principalmente pela via fecal-oral, por meio da ingestão de partículas virais presentes em fezes contaminadas. Após a entrada no organismo, o coronavírus alcança o trato gastrointestinal, onde ocorre sua replicação inicial nas células do epitélio intestinal."
      },
      {
        emoji: "🧫",
        titulo: "Replicação intestinal",
        texto:
          "O coronavírus felino apresenta tropismo pelas células intestinais e pode provocar infecção assintomática ou alterações gastrointestinais leves. Os animais infectados podem eliminar partículas virais pelas fezes, contribuindo para a manutenção e disseminação do agente no ambiente."
      },
      {
        emoji: "🧬",
        titulo: "Alterações virais e infecção celular",
        texto:
          "Em uma parcela dos animais infectados, alterações genéticas e biológicas do vírus favorecem a infecção de monócitos e macrófagos. Essas células passam a permitir a disseminação do agente para além do trato gastrointestinal."
      },
      {
        emoji: "🩸",
        titulo: "Disseminação sistêmica",
        texto:
          "Os monócitos e macrófagos infectados disseminam o agente pelo organismo, alcançando diferentes tecidos e órgãos. A interação entre as células infectadas, o vírus e o sistema imunológico favorece o desenvolvimento de processos inflamatórios sistêmicos."
      },
      {
        emoji: "⚠️",
        titulo: "Resposta inflamatória e lesões",
        texto:
          "A resposta inflamatória desencadeia vasculite, perivasculite e formação de lesões piogranulomatosas. O comprometimento vascular aumenta a permeabilidade dos vasos sanguíneos, favorecendo o extravasamento de líquidos para cavidades corporais e o desenvolvimento de lesões em órgãos como fígado, rins, linfonodos, olhos e sistema nervoso central."
      },
      {
        emoji: "💧",
        titulo: "Desenvolvimento das formas clínicas",
        texto:
          "Quando predominam as alterações vasculares e o extravasamento de líquidos, ocorre a forma efusiva, caracterizada pelo acúmulo de efusões abdominal ou torácica. Nos casos em que predominam as lesões inflamatórias localizadas nos tecidos, manifesta-se a forma não efusiva. Alguns animais apresentam características de ambas as apresentações."
      }
    ]
  },

  epidemiologia: {
    introducao:
      "A PIF acomete felinos domésticos e selvagens e apresenta maior ocorrência em populações submetidas a condições que favorecem a circulação do coronavírus felino. A infecção é especialmente frequente em ambientes com elevada densidade populacional, como gatis e abrigos. Entretanto, apenas uma parcela dos animais infectados desenvolve a doença clínica, resultado da interação entre características virais, fatores individuais e resposta imunológica do hospedeiro.",

    blocos: [
      {
        emoji: "🌎",
        titulo: "Distribuição e ocorrência",
        texto:
          "O coronavírus felino apresenta distribuição ampla na população de gatos. Sua circulação é favorecida em ambientes coletivos, nos quais existe contato frequente entre os animais e compartilhamento de instalações. A presença do coronavírus é muito mais comum do que o desenvolvimento da PIF, que ocorre apenas em uma parcela dos animais infectados."
      },
      {
        emoji: "🐈",
        titulo: "Faixa etária e suscetibilidade",
        texto:
          "A PIF é observada com maior frequência em gatos jovens, especialmente nos primeiros anos de vida. Entretanto, animais adultos e idosos também podem desenvolver a doença. A suscetibilidade depende de diferentes fatores, incluindo características genéticas, condições imunológicas e exposição ao coronavírus felino."
      },
      {
        emoji: "🏠",
        titulo: "Fatores de risco",
        texto:
          "A elevada densidade populacional, o compartilhamento de caixas de areia, a introdução frequente de novos animais, as condições inadequadas de higiene e situações de estresse podem favorecer a circulação do coronavírus felino e aumentar a exposição dos animais."
      },
      {
        emoji: "💩",
        titulo: "Transmissão",
        texto:
          "A principal via de transmissão do coronavírus felino é a fecal-oral, por meio da ingestão de partículas virais eliminadas nas fezes de animais infectados. A contaminação pode ocorrer pelo contato com caixas de areia, superfícies e utensílios contaminados. A PIF propriamente dita não é considerada uma doença diretamente contagiosa na mesma forma que a infecção pelo coronavírus entérico."
      },
      {
        emoji: "📊",
        titulo: "Infecção e desenvolvimento da PIF",
        texto:
          "A maioria dos gatos infectados pelo coronavírus felino não desenvolve PIF. O surgimento da doença depende de alterações relacionadas ao vírus e da resposta imunológica do hospedeiro. Por esse motivo, a presença de anticorpos contra o coronavírus ou a detecção do agente não significa, isoladamente, que o animal desenvolverá a doença."
      }
    ]
  },

  sinaisClinicos: {
    introducao:
      "As manifestações clínicas da PIF são variáveis e dependem da forma de apresentação, dos órgãos acometidos e da resposta imunológica do animal. Os sinais iniciais geralmente são inespecíficos, podendo incluir febre persistente, perda de peso e redução do apetite. Com a progressão da doença, podem surgir alterações abdominais, respiratórias, oculares, neurológicas e sistêmicas.",

    blocos: [
      {
        emoji: "🌡️",
        titulo: "Sinais gerais",
        itens: [
          "Febre persistente ou recorrente",
          "Perda de peso progressiva",
          "Anorexia ou redução do apetite",
          "Letargia e apatia",
          "Debilidade",
          "Desidratação",
          "Retardo no crescimento de animais jovens"
        ]
      },
      {
        emoji: "💧",
        titulo: "Forma efusiva (úmida)",
        itens: [
          "Aumento progressivo do volume abdominal",
          "Ascite devido ao acúmulo de líquido na cavidade abdominal",
          "Efusão pleural",
          "Dificuldade respiratória",
          "Icterícia em alguns animais",
          "Comprometimento progressivo do estado geral"
        ]
      },
      {
        emoji: "🧬",
        titulo: "Forma não efusiva (seca)",
        itens: [
          "Lesões piogranulomatosas em diferentes órgãos",
          "Alterações hepáticas",
          "Comprometimento renal",
          "Aumento de linfonodos",
          "Alterações pancreáticas",
          "Perda de peso e febre persistente",
          "Alterações neurológicas e oculares"
        ]
      },
      {
        emoji: "👁️",
        titulo: "Alterações oculares",
        itens: [
          "Uveíte anterior",
          "Alterações na coloração da íris",
          "Presença de precipitados ceráticos",
          "Alterações na câmara anterior do olho",
          "Hifema ou hipópio em alguns casos",
          "Comprometimento da visão"
        ]
      },
      {
        emoji: "🧠",
        titulo: "Alterações neurológicas",
        itens: [
          "Ataxia",
          "Convulsões",
          "Alterações comportamentais",
          "Paresia ou paralisia",
          "Alterações de equilíbrio e coordenação",
          "Alterações de consciência"
        ]
      },
      {
        emoji: "⚠️",
        titulo: "Forma mista",
        itens: [
          "Associação de características das formas efusiva e não efusiva",
          "Presença de efusões associadas a lesões piogranulomatosas",
          "Manifestações clínicas variáveis conforme os órgãos acometidos"
        ]
      }
    ]
  },

  diagnostico: {
    introducao:
      "O diagnóstico da PIF é complexo e deve considerar a associação entre histórico clínico, manifestações apresentadas, exames laboratoriais e métodos complementares. Não existe um único teste capaz de confirmar todos os casos de maneira isolada. A interpretação dos resultados deve ser realizada em conjunto pelo médico-veterinário, considerando os diagnósticos diferenciais e a apresentação clínica do paciente.",

    metodos: [
      "avaliacao-clinica",
      "hemograma",
      "bioquimica-serica",
      "analise-efusao",
      "citologia",
      "sorologia",
      "pcr",
      "histopatologia",
      "imuno-histoquimica"
    ]
  },

  tratamento: {
    introducao:
      "O tratamento da PIF foi significativamente modificado com o desenvolvimento de medicamentos antivirais capazes de inibir a replicação do coronavírus felino. Atualmente, a doença é considerada tratável e muitos animais podem alcançar a recuperação clínica. A escolha do protocolo deve considerar a apresentação da doença, a gravidade do quadro, a disponibilidade dos medicamentos e as condições individuais do paciente, sempre sob acompanhamento médico-veterinário.",

    blocos: [
      {
        emoji: "💊",
        titulo: "GS-441524",
        texto:
          "O GS-441524 é um análogo de nucleosídeo que atua inibindo a replicação viral e representa uma das principais opções terapêuticas para a PIF. Apresenta resultados expressivos em diferentes formas clínicas da doença e pode ser administrado por via oral. A escolha da dose e da duração do tratamento depende da avaliação veterinária e da resposta do paciente."
      },
      {
        emoji: "💉",
        titulo: "Remdesivir",
        texto:
          "O remdesivir é um antiviral relacionado ao GS-441524, sendo seu pró-fármaco. Pode ser utilizado em determinadas situações, especialmente em animais gravemente enfermos ou que não conseguem receber medicação oral. A via de administração e a transição para outras apresentações devem ser definidas pelo médico-veterinário."
      },
      {
        emoji: "🧬",
        titulo: "Outras opções antivirais",
        texto:
          "O molnupiravir e seu metabólito ativo EIDD-1931 também são descritos no tratamento da PIF. Entretanto, a disponibilidade varia entre países e existem preocupações relacionadas a possíveis efeitos adversos e propriedades mutagênicas. Por isso, quando disponível, o GS-441524 é geralmente preferido como opção terapêutica."
      },
      {
        emoji: "🩺",
        titulo: "Tratamento de suporte",
        texto:
          "O tratamento de suporte é importante para controlar as alterações provocadas pela doença e melhorar as condições clínicas do paciente. Pode incluir fluidoterapia quando indicada, suporte nutricional, controle de náuseas e vômitos, analgesia, manejo da febre e tratamento das alterações neurológicas, oculares ou de outros órgãos acometidos."
      },
      {
        emoji: "📊",
        titulo: "Acompanhamento clínico",
        texto:
          "O acompanhamento periódico permite avaliar a resposta terapêutica e identificar possíveis complicações. Devem ser monitorados o peso corporal, apetite, temperatura, estado geral, resolução das efusões e parâmetros laboratoriais, especialmente proteínas séricas, albumina, globulinas e bilirrubina. A duração do tratamento deve ser individualizada conforme a evolução clínica e laboratorial."
      },
      {
        emoji: "⚠️",
        titulo: "Prognóstico",
        texto:
          "Historicamente, a PIF apresentava prognóstico muito desfavorável e frequentemente era considerada uma doença fatal. Entretanto, a introdução dos antivirais modificou significativamente esse cenário. Atualmente, muitos gatos tratados adequadamente alcançam remissão e recuperação clínica, embora a resposta varie conforme a gravidade, a forma de apresentação e o momento de início da terapia."
      }
    ]
  },

  prevencao: {
    introducao:
      "A prevenção da PIF está relacionada principalmente ao controle da circulação do coronavírus felino nos ambientes onde vivem os gatos. Como a transmissão ocorre predominantemente pela via fecal-oral, as medidas preventivas devem priorizar higiene, manejo populacional adequado, redução da contaminação ambiental e diminuição de situações de estresse.",

    blocos: [
      {
        emoji: "🧼",
        titulo: "Higiene das instalações",
        destaque: true,
        texto:
          "A limpeza frequente das caixas de areia, comedouros, bebedouros e superfícies é fundamental para reduzir a contaminação ambiental por partículas virais e diminuir a exposição dos animais ao coronavírus felino.",
        tags: [
          "🧼 Higienização",
          "🏠 Ambiente limpo",
          "🐈 Manejo sanitário"
        ],
        informacoes: [
          {
            titulo: "Caixas de areia",
            texto:
              "As caixas de areia devem ser higienizadas frequentemente, com remoção regular das fezes, e posicionadas longe dos locais destinados à alimentação e hidratação."
          },
          {
            titulo: "Utensílios e superfícies",
            texto:
              "Comedouros, bebedouros e superfícies compartilhadas devem ser higienizados regularmente para reduzir a possibilidade de contaminação fecal-oral."
          }
        ]
      },
      {
        emoji: "🐈",
        titulo: "Controle populacional",
        texto:
          "Evitar a superlotação e reduzir a densidade de animais em gatis, abrigos e residências com múltiplos gatos são medidas importantes para diminuir a circulação do coronavírus felino. Sempre que possível, devem ser disponibilizados recursos individuais ou em quantidade adequada para os animais."
      },
      {
        emoji: "🏠",
        titulo: "Manejo de novos animais",
        texto:
          "A introdução de novos gatos deve ser realizada de maneira planejada, com avaliação veterinária e cuidados sanitários. A organização dos ambientes e dos recursos disponíveis auxilia na redução do contato com fezes contaminadas e na prevenção da disseminação do coronavírus."
      },
      {
        emoji: "🧘",
        titulo: "Redução do estresse",
        texto:
          "A manutenção de um ambiente estável, com locais de descanso, esconderijos, enriquecimento ambiental e recursos suficientes, contribui para o bem-estar dos felinos. A redução de situações estressantes é especialmente importante em ambientes coletivos."
      },
      {
        emoji: "💉",
        titulo: "Vacinação",
        texto:
          "Existe uma vacina intranasal contra a PIF disponível em alguns países, mas sua eficácia é questionada e sua utilização apresenta limitações, especialmente porque muitos gatos já tiveram contato com o coronavírus antes da idade indicada para vacinação. Por esse motivo, a vacinação não é recomendada como estratégia de prevenção de rotina pelas diretrizes ABCD."
      }
    ]
  },

  referencias: [
    {
      titulo:
        "Update on Treatment of Feline Infectious Peritonitis: European Advisory Board on Cat Diseases (ABCD) Guidelines",
      autores: "Tasker, S. et al.",
      fonte: "Viruses, v. 18, n. 4, artigo 452",
      ano: "2026",
      link: "https://doi.org/10.3390/v18040452"
    },
    {
      titulo:
        "Guideline for Feline Infectious Peritonitis",
      autores: "European Advisory Board on Cat Diseases (ABCD)",
      fonte: "ABCD",
      ano: "2026",
      link: "https://www.abcdcatsvets.org/guideline-for-feline-infectious-peritonitis/"
    },
    {
      titulo:
        "Feline Infectious Peritonitis: ABCD Guidelines",
      autores: "Tasker, S. et al.",
      fonte: "Viruses, v. 15, n. 9, artigo 1847",
      ano: "2023",
      link: "https://doi.org/10.3390/v15091847"
    }
  ],

  casosClinicos: [
    {
      id: "pif-caso-01",

      titulo:
        "Felino jovem com distensão abdominal e suspeita de PIF efusiva",

      especie: "Felino",

      idade: "8 meses",

      historico:
        "Caso clínico hipotético elaborado para fins didáticos. Gato jovem atendido com histórico de perda de peso progressiva, redução do apetite, apatia e aumento gradual do volume abdominal. Durante a avaliação clínica, foi identificada suspeita de acúmulo de líquido na cavidade abdominal.",

      sinais: [
        "Perda de peso progressiva",
        "Anorexia",
        "Apatia",
        "Febre persistente",
        "Distensão abdominal"
      ],

      exames:
        "Hemograma com anemia não regenerativa. Na avaliação bioquímica, foram identificadas hiperglobulinemia e redução da relação albumina/globulina (A:G). A análise do líquido abdominal revelou efusão com elevada concentração proteica e características compatíveis com processo inflamatório.",

      diagnostico:
        "Suspeita de Peritonite Infecciosa Felina na forma efusiva. Os achados clínicos e laboratoriais são sugestivos, mas não confirmam isoladamente a doença. A investigação deve ser complementada por exames específicos, considerando as características da efusão e os diagnósticos diferenciais.",

      discussao:
        "A forma efusiva da PIF está associada ao desenvolvimento de vasculite e ao aumento da permeabilidade vascular, favorecendo o acúmulo de líquido nas cavidades corporais. A associação entre idade, sinais clínicos, alterações hematológicas, hiperglobulinemia e redução da relação A:G pode aumentar a suspeita diagnóstica. Entretanto, nenhum desses achados é definitivo isoladamente. A interpretação conjunta dos resultados e a realização de exames complementares são fundamentais para uma investigação adequada. Caso clínico hipotético elaborado para fins educativos."
    }
  ]
},








{
  id: "raiva",

  nome: "Raiva",

  agente: "Vírus da raiva (gênero Lyssavirus)",

  categoria: "Virais",

  icone: "🦠",

  zoonose: true,

  vacina: true,

  eutanasia: true,

  notificacaoObrigatoria: true,

  hospedeiros: [
    "Cães",
    "Gatos",
    "Bovinos",
    "Equinos",
    "Morcegos",
    "Animais silvestres",
    "Humanos"
  ],

  palavrasChave: [
    "raiva",
    "virus da raiva",
    "lyssavirus",
    "rhabdoviridae",
    "cão",
    "cao",
    "cachorro",
    "gato",
    "felino",
    "bovino",
    "morcego",
    "zoonose",
    "raiva furiosa",
    "raiva paralitica",
    "raiva paralítica",
    "encefalite viral"
  ],

  imagem: "/images/doencas/raiva-2.jpg",

  imagens: [
    {
      src: "/images/doencas/raiva/virus-raiva.jpg",
      titulo: "Vírus da raiva",
      categoria: "Agente etiológico",
      descricao:
        "Representação do vírus da raiva, pertencente à família Rhabdoviridae e ao gênero Lyssavirus, um vírus envelopado com formato característico de projétil."
    },
    {
      src: "/images/doencas/raiva/transmissao-mordedura.jpg",
      titulo: "Transmissão",
      categoria: "Transmissão",
      descricao:
        "Representação dos cilcos de transmissão da raiva."
    },
   
    {
      src: "/images/doencas/raiva/raiva-furiosa.jpg",
      titulo: "Raiva furiosa",
      categoria: "Sinais clínicos",
      descricao:
        "Representação de alterações comportamentais e neurológicas que podem ocorrer na forma furiosa da raiva, incluindo agitação, irritabilidade e desorientação."
    },
    {
      src: "/images/doencas/raiva/raiva-paralitica.jpg",
      titulo: "Raiva paralítica",
      categoria: "Sinais clínicos",
      descricao:
        "Representação de alterações motoras associadas à forma paralítica da raiva, como dificuldade de deglutição e paralisia progressiva."
    },
    {
      src: "/images/doencas/raiva/imunofluorescencia.jpg",
      titulo: "Imunofluorescência direta",
      categoria: "Diagnóstico laboratorial",
      descricao:
        "Representação da técnica de imunofluorescência direta utilizada para detectar antígenos do vírus da raiva em amostras de tecido nervoso."
    },
    {
      src: "/images/doencas/raiva/corpusculos-negri.jpg",
      titulo: "Corpúsculos de Negri",
      categoria: "Achado histopatológico",
      descricao:
        "Inclusões intracitoplasmáticas que podem ser observadas em neurônios de animais infectados pelo vírus da raiva. Sua ausência não exclui a infecção."
    }
  ],

  visaoGeral: {
    introducao:
      "A raiva é uma zoonose viral de evolução aguda e progressiva, caracterizada pelo comprometimento do sistema nervoso central. Acomete mamíferos domésticos e silvestres e apresenta elevada letalidade após o aparecimento dos sinais clínicos. Sua importância envolve tanto a saúde animal quanto a saúde pública.",

    cards: [
      {
        emoji: "⚠️",
        titulo: "Características gerais",
        itens: [
          "Zoonose viral de evolução aguda e progressiva",
          "Acomete mamíferos domésticos e silvestres",
          "Provoca encefalite progressiva",
          "Apresenta letalidade extremamente elevada após o início dos sinais clínicos"
        ]
      },
      {
        emoji: "🦠",
        titulo: "Agente etiológico",
        itens: [
          "Família Rhabdoviridae",
          "Gênero Lyssavirus",
          "Vírus envelopado com RNA",
          "Apresenta tropismo pelo tecido nervoso"
        ]
      },
      {
        emoji: "🧠",
        titulo: "Importância clínica",
        itens: [
          "Provoca alterações comportamentais e neurológicas",
          "Pode apresentar forma furiosa ou paralítica",
          "A evolução é geralmente fatal",
          "Representa importante risco ocupacional e zoonótico"
        ]
      }
    ]
  },

  etiologia: {
    introducao:
      "A raiva é causada por vírus do gênero Lyssavirus, pertencente à família Rhabdoviridae. São vírus envelopados, com genoma constituído por RNA de fita simples e polaridade negativa, apresentando tropismo pelo sistema nervoso.",

    listas: [
      {
        emoji: "🦠",
        titulo: "Classificação viral",
        itens: [
          "Família: Rhabdoviridae",
          "Gênero: Lyssavirus",
          "Genoma: RNA de fita simples",
          "Polaridade do RNA: negativa",
          "Morfologia característica: formato de projétil",
          "Vírus envelopado"
        ]
      },
      {
        emoji: "🧬",
        titulo: "Estrutura viral",
        itens: [
          "Nucleoproteína (N): envolve e protege o material genético",
          "Fosfoproteína (P): participa da replicação viral",
          "Proteína de matriz (M): participa da organização e montagem viral",
          "Glicoproteína (G): presente no envelope e relacionada à ligação e entrada nas células",
          "RNA polimerase viral (L): participa da transcrição e replicação do genoma"
        ]
      }
    ]
  },

  epidemiologia: {
    introducao:
      "A raiva possui distribuição geográfica ampla e é mantida por diferentes ciclos epidemiológicos, que envolvem animais domésticos e silvestres. A transmissão entre espécies contribui para a manutenção do vírus na natureza e representa risco contínuo para a saúde pública.",

    blocos: [
      {
        emoji: "🌎",
        titulo: "Distribuição e hospedeiros",
        texto:
          "Todos os mamíferos são suscetíveis à infecção pelo vírus da raiva. A participação de cada espécie na transmissão varia de acordo com a região, o comportamento e a dinâmica epidemiológica local."
      },
      {
        emoji: "🏙️",
        titulo: "Ciclo urbano",
        texto:
          "O ciclo urbano está historicamente associado à transmissão entre cães e outros animais domésticos. A vacinação de cães e gatos é uma das principais estratégias para reduzir a circulação viral e prevenir casos humanos."
      },
      {
        emoji: "🦇",
        titulo: "Ciclo silvestre",
        texto:
          "O ciclo silvestre envolve diferentes espécies de animais selvagens. No Brasil, os morcegos hematófagos, especialmente Desmodus rotundus, possuem grande importância epidemiológica na transmissão da raiva aos herbívoros."
      },
      {
        emoji: "🐄",
        titulo: "Raiva dos herbívoros",
        texto:
          "Bovinos e equinos podem ser infectados principalmente por meio de mordeduras de morcegos hematófagos. A doença apresenta impacto sanitário e econômico para a produção animal."
      },
      {
        emoji: "🔄",
        titulo: "Transmissão",
        texto:
          "A principal via de transmissão é a inoculação de saliva contaminada, geralmente por mordeduras. O contato da saliva com mucosas ou feridas também pode resultar em infecção. A transmissão por outras vias é considerada menos comum."
      },
      {
        emoji: "⏳",
        titulo: "Período de incubação",
        texto:
          "O período de incubação é variável e pode durar semanas ou meses. Depende de fatores como espécie, quantidade de vírus inoculada, local da exposição e distância entre o ponto de entrada e o sistema nervoso central."
      }
    ]
  },

  patogenia: {
    introducao:
      "Após a inoculação, o vírus da raiva pode permanecer inicialmente nos tecidos próximos ao local de entrada e alcançar terminações nervosas periféricas. A partir daí, ocorre disseminação pelo sistema nervoso até o encéfalo, onde há replicação viral e comprometimento neurológico progressivo.",

    blocos: [
      {
        emoji: "🐾",
        titulo: "Inoculação viral",
        texto:
          "A infecção ocorre principalmente quando a saliva de um animal infectado é inoculada por meio de mordedura. O vírus entra em contato com tecidos e terminações nervosas presentes na região lesionada."
      },
      {
        emoji: "🧠",
        titulo: "Disseminação neural",
        texto:
          "O vírus alcança os nervos periféricos e progride em direção ao sistema nervoso central por transporte axonal retrógrado. Essa disseminação ocorre principalmente pelas estruturas nervosas, sem depender de uma fase de viremia."
      },
      {
        emoji: "🧬",
        titulo: "Replicação no sistema nervoso central",
        texto:
          "Após alcançar o encéfalo, o vírus se replica em neurônios e provoca disfunção neurológica. O comprometimento de diferentes regiões do sistema nervoso está relacionado à variedade de manifestações clínicas."
      },
      {
        emoji: "🔄",
        titulo: "Disseminação periférica",
        texto:
          "Após a replicação no sistema nervoso central, o vírus pode alcançar outros tecidos por disseminação neural centrífuga, incluindo as glândulas salivares, possibilitando a eliminação viral pela saliva."
      },
      {
        emoji: "⚠️",
        titulo: "Comprometimento neurológico",
        texto:
          "A infecção provoca disfunção neuronal progressiva, podendo resultar em alterações comportamentais, incoordenação, paralisia, dificuldade de deglutição e comprometimento de funções vitais."
      }
    ]
  },

  sinaisClinicos: {
    introducao:
      "A apresentação clínica da raiva é variável e pode envolver alterações comportamentais, neurológicas e motoras. Classicamente, são descritas uma fase prodrômica e duas apresentações principais: forma furiosa e forma paralítica. Nem todos os animais apresentam todas as manifestações.",

    blocos: [
      {
        emoji: "⚠️",
        titulo: "Período prodrômico",
        itens: [
          "Alterações repentinas de comportamento",
          "Ansiedade, inquietação ou isolamento",
          "Mudanças de docilidade para agressividade ou o contrário",
          "Febre e alterações de apetite",
          "Lambedura ou mordedura do local de inoculação",
          "Fotofobia e alterações pupilares"
        ]
      },
      {
        emoji: "😾",
        titulo: "Raiva furiosa",
        itens: [
          "Agitação e irritabilidade",
          "Agressividade incomum",
          "Aumento da resposta a estímulos externos",
          "Desorientação e incoordenação",
          "Comportamento de ingestão de objetos não alimentares",
          "Vocalização anormal",
          "Salivação excessiva"
        ]
      },
      {
        emoji: "🐕",
        titulo: "Raiva paralítica",
        itens: [
          "Fraqueza muscular progressiva",
          "Dificuldade de locomoção",
          "Paralisia flácida",
          "Alteração da vocalização",
          "Paralisia da musculatura da laringe",
          "Dificuldade de deglutição",
          "Mandíbula caída",
          "Salivação excessiva"
        ]
      },
      {
        emoji: "🧠",
        titulo: "Manifestações neurológicas avançadas",
        itens: [
          "Ataxia",
          "Paralisia progressiva",
          "Convulsões",
          "Comprometimento de nervos cranianos",
          "Dificuldade respiratória",
          "Coma e morte"
        ]
      }
    ]
  },

  diagnostico: {
    introducao:
      "A suspeita de raiva deve considerar o histórico epidemiológico, a exposição potencial e a presença de alterações neurológicas ou comportamentais. Entretanto, os sinais clínicos não são suficientes para confirmar a doença. O diagnóstico definitivo em animais depende de exames laboratoriais realizados em amostras apropriadas, seguindo protocolos de biossegurança.",

    metodos: [
      "Imunofluorescência direta (IFD): detecta antígenos virais em tecido nervoso e é um dos principais métodos de diagnóstico laboratorial.",
      "RT-PCR: detecta o RNA viral e pode ser utilizada na confirmação laboratorial.",
      "Imuno-histoquímica: permite a identificação de antígenos virais em tecidos por meio de marcação específica.",
      "Teste rápido de imunohistoquímica direta (dRIT): método utilizado para detecção de antígenos virais em tecido nervoso.",
      "Histopatologia: pode demonstrar corpúsculos de Negri, inclusões intracitoplasmáticas características, mas sua ausência não exclui a doença."
    ]
  },

  tratamento: {
    introducao:
      "Não existe tratamento curativo estabelecido para animais com raiva clínica. Após o aparecimento dos sinais clínicos, a doença apresenta evolução quase sempre fatal. Diante de uma suspeita, devem ser adotadas medidas imediatas de biossegurança, comunicação aos órgãos responsáveis e investigação laboratorial conforme as normas oficiais.",

    blocos: [
      {
        emoji: "⚠️",
        titulo: "Conduta diante da suspeita",
        texto:
          "Animais com sinais compatíveis devem ser considerados suspeitos e avaliados conforme os protocolos do Serviço Veterinário Oficial e da vigilância em saúde. A manipulação desprotegida deve ser evitada e a suspeita deve ser comunicada imediatamente às autoridades competentes."
      },
      {
        emoji: "🧤",
        titulo: "Biossegurança",
        texto:
          "O contato com saliva, tecido nervoso e outros materiais potencialmente contaminados representa risco de exposição. Procedimentos devem ser realizados por profissionais capacitados, utilizando equipamentos de proteção individual e seguindo protocolos específicos."
      },
      {
        emoji: "🔬",
        titulo: "Confirmação laboratorial",
        texto:
          "A confirmação deve ser realizada por laboratório habilitado, com coleta, acondicionamento e transporte de amostras conforme as normas de biossegurança e vigilância epidemiológica."
      }
    ]
  },

  prevencao: {
    introducao:
      "A prevenção da raiva depende da vacinação de animais domésticos, da vigilância epidemiológica, do controle de reservatórios e da redução do contato com animais silvestres. A integração dessas medidas é essencial para proteger a saúde animal e humana.",

    blocos: [
      {
        emoji: "💉",
        titulo: "Vacinação de cães e gatos",
        destaque: true,
        texto:
          "A vacinação antirrábica é a principal estratégia de prevenção da raiva em animais domésticos. Deve seguir as recomendações do programa oficial de vacinação e as orientações do médico-veterinário.",
        tags: [
          "VACINAÇÃO",
          "PREVENÇÃO"
        ]
      },
      {
        emoji: "🐄",
        titulo: "Vacinação de herbívoros",
        texto:
          "Em áreas de risco, a vacinação de bovinos, equinos e outros herbívoros é uma medida importante para prevenir a raiva transmitida por morcegos hematófagos, conforme as orientações do programa oficial de controle."
      },
      {
        emoji: "🦇",
        titulo: "Vigilância de morcegos",
        texto:
          "A identificação de abrigos e a vigilância de morcegos hematófagos contribuem para o monitoramento da circulação viral. O manejo desses animais deve ser realizado por equipes autorizadas, evitando manipulação direta pela população."
      },
      {
        emoji: "🌳",
        titulo: "Controle do contato com animais silvestres",
        texto:
          "Deve-se evitar o contato de animais domésticos e pessoas com animais silvestres, especialmente morcegos encontrados caídos, debilitados ou com comportamento incomum."
      },
      {
        emoji: "📢",
        titulo: "Notificação e vigilância epidemiológica",
        texto:
          "Casos suspeitos devem ser comunicados aos serviços de vigilância e às autoridades veterinárias competentes, permitindo investigação, coleta de amostras e adoção de medidas de controle."
      },
      {
        emoji: "🧤",
        titulo: "Prevenção da exposição humana",
        texto:
          "Mordeduras, arranhaduras ou contato de saliva de animal suspeito com mucosas ou feridas devem ser avaliados imediatamente por um serviço de saúde. A profilaxia pós-exposição deve seguir a orientação das autoridades sanitárias."
      }
    ]
  },

  referencias: [
    {
      titulo: "Rabies",
      autores: "World Organisation for Animal Health (WOAH)",
      fonte: "WOAH – Disease Information",
      ano: "s.d.",
      link: "https://www.woah.org/en/disease/rabies/"
    },
    {
      titulo: "Rabies: Infection with Rabies Virus and Other Lyssaviruses",
      autores: "World Organisation for Animal Health (WOAH)",
      fonte: "Manual of Diagnostic Tests and Vaccines for Terrestrial Animals",
      ano: "2023",
      link: "https://www.woah.org/fileadmin/Home/eng/Health_standards/tahm/3.01.19_RABIES.pdf"
    },
    {
      titulo: "Rabies in Animals",
      autores: "Merck Veterinary Manual",
      fonte: "Merck Veterinary Manual",
      ano: "s.d.",
      link: "https://www.merckvetmanual.com/nervous-system/rabies/rabies-in-animals"
    },
    {
      titulo: "Manual de Diagnóstico Laboratorial da Raiva",
      autores: "Brasil. Ministério da Saúde. Secretaria de Vigilância em Saúde",
      fonte: "Ministério da Saúde",
      ano: "2008",
      link: "https://bvsms.saude.gov.br/bvs/publicacoes/manual_diagnostico_laboratorial_raiva.pdf"
    },
    {
      titulo: "Information for Veterinarians – Rabies",
      autores: "Centers for Disease Control and Prevention (CDC)",
      fonte: "CDC",
      ano: "2025",
      link: "https://www.cdc.gov/rabies/hcp/veterinarians/"
    },
    {
      titulo: "Rabies",
      autores: "World Health Organization (WHO)",
      fonte: "WHO – Fact Sheets",
      ano: "2026",
      link: "https://www.who.int/news-room/fact-sheets/detail/rabies"
    }
  ],

  casosClinicos: [
    {
      id: "raiva-canina-furiosa",
      titulo: "Alteração comportamental e agressividade em cão",
      especie: "Canina",
      idade: "4 anos",
      historico:
        "Caso clínico fictício para fins didáticos. Um cão sem histórico vacinal conhecido foi levado para avaliação após apresentar mudança repentina de comportamento. Segundo o tutor, o animal, anteriormente dócil, passou a demonstrar irritabilidade, inquietação e comportamento agressivo. O tutor também relatou que o cão havia se envolvido em uma briga com um animal desconhecido alguns dias antes.",
      sinais: [
        "Agitação e irritabilidade",
        "Agressividade incomum",
        "Desorientação",
        "Resposta exagerada a estímulos externos",
        "Incoordenação motora"
      ],
      exames:
        "Diante da suspeita epidemiológica e clínica, o caso deve ser comunicado à vigilância competente. A confirmação laboratorial pode envolver imunofluorescência direta e testes moleculares em amostras apropriadas de tecido nervoso.",
      diagnostico:
        "Suspeita de raiva na forma furiosa, com necessidade de confirmação laboratorial.",
      discussao:
        "O caso demonstra a importância de reconhecer alterações comportamentais agudas como possíveis manifestações neurológicas da raiva. A forma furiosa pode apresentar agitação, irritabilidade, agressividade e respostas exacerbadas a estímulos. O histórico de contato com animal desconhecido e a ausência de vacinação reforçam a suspeita, mas não confirmam a doença. A avaliação deve priorizar a segurança das pessoas e dos animais, sem manipulação desprotegida do paciente."
    },
    {
      id: "raiva-bovina-paralitica",
      titulo: "Paralisia progressiva em bovino",
      especie: "Bovina",
      idade: "3 anos",
      historico:
        "Caso clínico fictício para fins didáticos. Em uma propriedade rural, um bovino apresentou alterações progressivas de comportamento e dificuldade de locomoção. O responsável relatou a presença de morcegos na região e a identificação de possíveis marcas de mordedura no animal. A vacinação antirrábica não estava atualizada.",
      sinais: [
        "Dificuldade de locomoção",
        "Incoordenação motora",
        "Fraqueza muscular progressiva",
        "Dificuldade de deglutição",
        "Paralisia progressiva"
      ],
      exames:
        "A suspeita deve ser encaminhada ao Serviço Veterinário Oficial para investigação epidemiológica e confirmação laboratorial. A imunofluorescência direta e a RT-PCR podem ser utilizadas para detecção do vírus em amostras apropriadas de tecido nervoso.",
      diagnostico:
        "Suspeita de raiva bovina na forma paralítica, associada à possível exposição a morcegos hematófagos.",
      discussao:
        "A raiva dos herbívoros apresenta grande importância no meio rural, especialmente em regiões com circulação de morcegos hematófagos. A forma paralítica pode provocar comprometimento motor progressivo e dificuldade de deglutição. O histórico epidemiológico é fundamental para orientar a suspeita, mas não substitui a confirmação laboratorial. O caso também destaca a importância da vigilância e da vacinação dos animais em áreas de risco."
    },
    {
      id: "raiva-exposicao-morcego",
      titulo: "Contato de gato doméstico com morcego",
      especie: "Felina",
      idade: "2 anos",
      historico:
        "Caso clínico fictício para fins didáticos. Um gato com acesso à rua foi encontrado em contato direto com um morcego no quintal da residência. O tutor não sabia informar se o felino havia sido mordido ou se possuía vacinação antirrábica atualizada. O animal não apresentava alterações clínicas no momento do atendimento.",
      sinais: [
        "Animal aparentemente assintomático",
        "Histórico de contato direto com morcego",
        "Ausência de informações seguras sobre a vacinação",
        "Possibilidade de exposição à saliva do animal silvestre"
      ],
      exames:
        "A ausência de sinais clínicos não exclui a possibilidade de exposição. A conduta deve seguir os protocolos oficiais de vigilância e avaliação de risco, considerando o contato com o morcego e o histórico vacinal do felino.",
      diagnostico:
        "Exposição suspeita ao vírus da raiva, sem confirmação de infecção no momento da avaliação.",
      discussao:
        "Este caso demonstra que a investigação da raiva não deve se limitar aos animais que já apresentam sinais neurológicos. O contato direto com morcegos representa uma situação epidemiologicamente importante, mesmo quando o animal doméstico está aparentemente saudável. É fundamental comunicar o ocorrido aos serviços de vigilância, evitar a manipulação do morcego e seguir as orientações oficiais para avaliação do animal e das pessoas potencialmente expostas."
    }
  ]
},







{
  id: "variola-bovina",

  nome: "Varíola Bovina",

  agente: "Poxvírus (família Poxviridae)",

  categoria: "Virais",

  icone: "🦠",

  zoonose: true,

  vacina: true,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Bovinos",
    "Humanos",
    "Bubalinos",
    "Camelos",
    "Elefantes",
    "Roedores",
    "Felinos",
    "Outras espécies domésticas"
  ],

  palavrasChave: [
    "varíola bovina",
    "cowpox",
    "vaccinia",
    "pseudocowpox",
    "poxvírus",
    "Poxviridae",
    "Orthopoxvirus",
    "Parapoxvirus",
    "varíola mamária",
    "úbere",
    "tetos",
    "corpúsculos de Guarnieri",
    "corpúsculos de Paschen",
    "zoonose"
  ],

  imagem: "/images/doencas/variola-bovina.jpg",

  imagens: [
    
    {
      src: "/images/doencas/variola/02-papula.jpg",
      titulo: "Lesões",
      categoria: "Evolução das lesões",
      descricao:
      "Lesões em bovinos por varíola"
    },
  
    
    {
      src: "/images/doencas/variola/06-cicatriz.jpg",
      titulo: "Cicatrização",
      categoria: "Evolução das lesões",
      descricao:
        "Aspecto da pele após a resolução das lesões, com formação de cicatrizes."
    },
   
    {
      src: "/images/doencas/variola/08-virus-pox.jpg",
      titulo: "Poxvírus",
      categoria: "Agente etiológico",
      descricao:
        "Representação do agente viral, pertencente à família Poxviridae, com genoma de DNA de fita dupla."
    }
  ],

  visaoGeral: {
    introducao:
      "A varíola bovina é uma enfermidade viral zoonótica que acomete principalmente bovinos, sendo caracterizada pelo desenvolvimento de lesões cutâneas, especialmente no úbere e nos tetos. As lesões podem evoluir de máculas e pápulas para vesículas, pústulas, ulcerações e crostas. Em alguns casos, a infecção pode apresentar distribuição generalizada.",

    cards: [
      {
        emoji: "⭐",
        titulo: "Destaques",
        itens: [
          "Enfermidade viral de importância veterinária e zoonótica",
          "Acomete principalmente a região do úbere e dos tetos",
          "Pode apresentar evolução de lesões cutâneas em diferentes estágios",
          "A transmissão pode ocorrer durante a ordenha",
          "Possui importância ocupacional devido ao risco de infecção dos ordenhadores"
        ]
      },
      {
        emoji: "🦠",
        titulo: "Características",
        itens: [
          "Agente pertencente à família Poxviridae",
          "Vírus com DNA de fita dupla",
          "Multiplicação viral no citoplasma",
          "Formação de corpúsculos de inclusão de Guarnieri",
          "Diferentes poxvírus podem estar envolvidos nas apresentações denominadas varíola bovina"
        ]
      },
      {
        emoji: "⚠️",
        titulo: "Importância zoonótica",
        itens: [
          "Transmissão ao ser humano pelo contato com lesões contaminadas",
          "Ordenhadores e profissionais que manipulam animais infectados apresentam risco ocupacional",
          "Pode provocar lesões cutâneas nas mãos e em outras regiões expostas",
          "Exige medidas de higiene e biossegurança durante o manejo"
        ]
      }
    ]
  },

  etiologia: {
    introducao:
      "A varíola bovina está associada a vírus da família Poxviridae. O material didático diferencia as formas vaccinia, varíola original bovina e varíola mamária, relacionadas a diferentes grupos de poxvírus.",

    listas: [
      {
        emoji: "🧬",
        titulo: "Classificação taxonômica",
        itens: [
          "Família: Poxviridae",
          "Grupo: vírus DNA de fita dupla",
          "Vaccinia: gênero Orthopoxvirus",
          "Varíola original bovina: gênero Orthopoxvirus",
          "Varíola mamária ou pseudovaríola: gênero Parapoxvirus"
        ]
      },
      {
        emoji: "🔬",
        titulo: "Características morfológicas",
        itens: [
          "Genoma de DNA de fita dupla",
          "Vírus envelopado",
          "Formato de paralelepípedo com bordas arredondadas",
          "Tamanho aproximado de 300 a 450 nm",
          "Multiplicação no citoplasma das células hospedeiras"
        ]
      },
      {
        emoji: "🧫",
        titulo: "Inclusões citoplasmáticas",
        itens: [
          "Corpúsculos de Guarnieri: inclusões citoplasmáticas associadas à replicação viral",
          "Corpúsculos elementares de Paschen: estruturas virais descritas no interior dos corpúsculos de Guarnieri no material didático"
        ]
      },
      {
        emoji: "🦠",
        titulo: "Principais formas virais descritas",
        itens: [
          "Vaccinia: associada ao gênero Orthopoxvirus, podendo infectar o homem e diferentes espécies domésticas",
          "Cowpox ou varíola original bovina: associada ao gênero Orthopoxvirus, com capacidade de infectar bovinos e outras espécies",
          "Varíola mamária ou pseudovaríola: associada ao gênero Parapoxvirus, também denominada paravaccínia"
        ]
      },
      {
        emoji: "🧪",
        titulo: "Resistência e sensibilidade",
        itens: [
          "Apresenta resistência a álcool, éter, clorofórmio e acetona, conforme o material didático",
          "É sensível a desinfetantes comuns",
          "Apresenta sensibilidade à luz solar e à fervura"
        ]
      }
    ]
  },

  patogenia: {
    introducao:
      "A infecção ocorre pela penetração do vírus através da pele lesionada ou das mucosas. Após a entrada no organismo, o agente se multiplica no citoplasma das células, provocando alterações teciduais e o desenvolvimento progressivo de lesões cutâneas.",

    blocos: [
      {
        emoji: "🚪",
        titulo: "Entrada do vírus",
        texto:
          "O vírus penetra principalmente através de lesões na pele ou pelas mucosas. O contato com animais infectados, secreções e materiais contaminados favorece a transmissão."
      },
      {
        emoji: "🧬",
        titulo: "Multiplicação viral",
        texto:
          "Após penetrar no organismo, o vírus invade as células suscetíveis e realiza sua multiplicação no citoplasma, formando inclusões citoplasmáticas denominadas corpúsculos de Guarnieri."
      },
      {
        emoji: "🫧",
        titulo: "Desenvolvimento das lesões",
        texto:
          "O processo infeccioso provoca alterações cutâneas que evoluem progressivamente de máculas para pápulas, vesículas e pústulas."
      },
      {
        emoji: "🩹",
        titulo: "Ulceração e formação de crostas",
        texto:
          "Com a progressão das lesões, ocorre ruptura das estruturas vesiculares e pustulares, formando úlceras que podem apresentar crostas, com ou sem hemorragias."
      },
      {
        emoji: "🛡️",
        titulo: "Recuperação e imunidade",
        texto:
          "Após a resolução da enfermidade, pode ocorrer imunidade duradoura. O material didático descreve imunidade vitalícia após a doença, com proteção cruzada entre vaccinia e cowpox, mas proteção escassa ou praticamente nula na varíola mamária."
      }
    ]
  },

  epidemiologia: {
    introducao:
      "A varíola bovina apresenta distribuição mundial, podendo ocorrer em diferentes espécies animais e no ser humano. Sua transmissão está relacionada principalmente ao contato direto com lesões e materiais contaminados, especialmente durante as atividades de ordenha.",

    blocos: [
      {
        emoji: "🌎",
        titulo: "Distribuição",
        texto:
          "A enfermidade apresenta distribuição mundial, com ocorrência de surtos em diferentes regiões. Os vírus envolvidos podem apresentar diferentes hospedeiros e padrões de disseminação."
      },
      {
        emoji: "🐄",
        titulo: "Hospedeiros suscetíveis",
        texto:
          "O material didático descreve a infecção em bovinos, humanos e diferentes espécies animais. A varíola original bovina pode infectar também búfalos, camelos, elefantes, roedores e felinos."
      },
      {
        emoji: "🤝",
        titulo: "Transmissão por contato direto",
        texto:
          "A transmissão ocorre pelo contato direto com lesões presentes na pele ou nas mucosas, especialmente quando há solução de continuidade nos tecidos."
      },
      {
        emoji: "🥛",
        titulo: "Transmissão durante a ordenha",
        texto:
          "As mãos dos ordenhadores podem atuar na disseminação do agente entre os animais. O contato com lesões contaminadas durante a ordenha representa uma importante via de transmissão."
      },
      {
        emoji: "🦟",
        titulo: "Transmissão indireta",
        texto:
          "Artrópodes também são citados como possíveis participantes da transmissão. Mãos e materiais contaminados podem favorecer a disseminação entre animais e propriedades."
      },
      {
        emoji: "👤",
        titulo: "Importância zoonótica",
        texto:
          "O ser humano pode adquirir a infecção pelo contato com lesões de animais infectados, especialmente durante a ordenha e a manipulação do úbere e dos tetos."
      }
    ]
  },

  sinaisClinicos: {
    introducao:
      "A manifestação clínica mais característica é o aparecimento de lesões cutâneas, principalmente no úbere e nos tetos. A evolução ocorre em diferentes estágios, podendo apresentar febre irregular e dor nas regiões afetadas.",

    blocos: [
      {
        emoji: "🌡️",
        titulo: "Sinais gerais",
        itens: [
          "Febre irregular",
          "Desconforto",
          "Dor na região dos tetos e do úbere"
        ]
      },
      {
        emoji: "🔴",
        titulo: "Fase inicial",
        itens: [
          "Máculas",
          "Alterações na coloração da pele",
          "Início das lesões cutâneas"
        ]
      },
      {
        emoji: "🫧",
        titulo: "Evolução das lesões",
        itens: [
          "Pápulas",
          "Vesículas",
          "Pústulas",
          "Ulcerações",
          "Formação de crostas"
        ]
      },
      {
        emoji: "🐄",
        titulo: "Localização das lesões",
        itens: [
          "Úbere",
          "Tetos",
          "Pele adjacente",
          "Possibilidade de apresentação generalizada, embora menos frequente"
        ]
      },
      {
        emoji: "🩹",
        titulo: "Fase de resolução",
        itens: [
          "Formação de crostas",
          "Lesões com ou sem hemorragias",
          "Desprendimento das crostas",
          "Cicatrização"
        ]
      }
    ]
  },

  diagnostico: {
    introducao:
      "O diagnóstico considera o histórico epidemiológico e a avaliação das lesões cutâneas. A confirmação pode ser realizada por métodos histopatológicos, isolamento viral e técnicas de identificação do agente. A presença de corpúsculos de inclusão citoplasmáticos é um achado importante na avaliação histopatológica. A PCR também é utilizada atualmente para identificação e diferenciação dos poxvírus.",

    metodos: [
      "pcr"
    ]
  },

  tratamento: {
    introducao:
      "O tratamento é direcionado principalmente aos cuidados com as lesões cutâneas e à prevenção de infecções secundárias. O material didático descreve a utilização de pomadas ou sprays com antibióticos e medidas de higiene durante o manejo dos animais.",

    blocos: [
      {
        emoji: "🩺",
        titulo: "Cuidados com as lesões",
        texto:
          "As lesões devem ser acompanhadas durante sua evolução, com cuidados locais para favorecer a cicatrização e evitar traumatismos adicionais."
      },
      {
        emoji: "💊",
        titulo: "Tratamento tópico",
        texto:
          "O material didático descreve a utilização de pomadas ou sprays contendo antibióticos como medida terapêutica para o cuidado das lesões e prevenção de complicações bacterianas secundárias."
      },
      {
        emoji: "🥛",
        titulo: "Manejo durante a ordenha",
        texto:
          "Deve-se ter cuidado durante a ordenha dos animais acometidos, evitando traumatizar as lesões e reduzindo o contato dos profissionais com as áreas infectadas."
      },
      {
        emoji: "🧼",
        titulo: "Higiene e biossegurança",
        texto:
          "A higienização das mãos, dos equipamentos e das instalações é importante para reduzir a disseminação do agente entre os animais e evitar a transmissão ao ser humano."
      }
    ]
  },

  prevencao: {
    introducao:
      "A prevenção da varíola bovina envolve medidas de biossegurança, controle da entrada de animais, higienização durante a ordenha e redução do contato com lesões contaminadas. A proteção dos trabalhadores também é fundamental devido ao caráter zoonótico da enfermidade.",

    blocos: [
      {
        emoji: "💉",
        titulo: "Vacinação",
        destaque: true,
        texto:
          "O material didático descreve a utilização de vírus original inativado ou de vaccinia em estratégias de imunização. Também informa que a obrigatoriedade da vacinação contra varíola bovina foi extinta no Brasil pela Portaria nº 55, de 29 de janeiro de 1980. A indicação de vacinação deve considerar a situação epidemiológica e as orientações sanitárias vigentes.",
        tags: [
          "IMUNIZAÇÃO ESPECÍFICA",
          "🇧🇷 OBRIGATORIEDADE EXTINTA EM 1980"
        ]
      },
      {
        emoji: "🚧",
        titulo: "Quarentena de animais recém-chegados",
        texto:
          "Animais recém-introduzidos na propriedade devem permanecer em quarentena e ser avaliados antes de serem incorporados ao rebanho, reduzindo o risco de introdução de agentes infecciosos."
      },
      {
        emoji: "🥛",
        titulo: "Higienização durante a ordenha",
        texto:
          "O úbere e os tetos devem ser higienizados e desinfetados entre as ordenhas. As mãos dos ordenhadores e os equipamentos utilizados devem receber atenção especial."
      },
      {
        emoji: "🧤",
        titulo: "Proteção dos trabalhadores",
        texto:
          "O contato direto com lesões deve ser evitado. Recomenda-se o uso de luvas e outros equipamentos de proteção individual durante a manipulação de animais suspeitos ou infectados."
      },
      {
        emoji: "🧼",
        titulo: "Desinfecção das instalações",
        texto:
          "A limpeza e a desinfecção de equipamentos, utensílios e superfícies utilizadas durante a ordenha contribuem para reduzir a transmissão indireta."
      },
      {
        emoji: "🔍",
        titulo: "Identificação de animais suspeitos",
        texto:
          "Animais com lesões cutâneas sugestivas devem ser avaliados e manejados separadamente até a investigação diagnóstica, evitando a disseminação da enfermidade."
      }
    ]
  },

  referencias: [
    {
      titulo: "Varíola de bovinos em bovinos",
      autores: "Merck Veterinary Manual",
      fonte: "Manual MSD de Veterinária",
      ano: "2024",
      link: "https://www.msdvetmanual.com/pt/integumentary-system/doen%C3%A7as-causadas-por-var%C3%ADola/var%C3%ADola-de-bovinos-em-bovinos"
    },
    {
      titulo: "Pseudovaríola em bovinos",
      autores: "Paul Gibbs",
      fonte: "Manual MSD de Veterinária",
      ano: "2024",
      link: "https://www.msdvetmanual.com/pt/integumentary-system/pox-diseases/pseudocowpox-in-cattle"
    },
    {
      titulo: "Poxviruses diagnosed in cattle from Distrito Federal, Brazil (2015–2018)",
      autores: "Estudo retrospectivo de casos diagnosticados pelo Serviço Veterinário Oficial",
      fonte: "Transboundary and Emerging Diseases",
      ano: "2020",
      link: "https://pubmed.ncbi.nlm.nih.gov/31971341/"
    },
    {
      titulo: "Action Plan for FMD Response to the Notification of Suspected Vesicular Disease – Appendix 7: Cowpox",
      autores: "Ministério da Agricultura e Pecuária",
      fonte: "Plano de ação para resposta a doenças vesiculares",
      ano: "2009",
      link: "https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/arquivos-das-publicacoes-de-saude-animal/action-plan-for-fmd-response-to-the-notification-of-suspected-vesicular-disease-vol_1-2009.pdf"
    }
  ],

  casosClinicos: [
    {
      id: "variola-bovina-caso-01",
      titulo: "Lesões cutâneas no úbere e nos tetos",
      especie: "Bovino",
      idade: "Fêmea adulta em lactação",
      historico:
        "Uma vaca leiteira apresenta dor durante a ordenha e alterações cutâneas no úbere e nos tetos. O produtor relata que as lesões começaram como pequenas manchas avermelhadas e evoluíram progressivamente ao longo dos dias.",
      sinais: [
        "Febre irregular",
        "Dor nos tetos e no úbere",
        "Máculas",
        "Pápulas",
        "Vesículas",
        "Pústulas",
        "Ulcerações e formação de crostas"
      ],
      exames:
        "A avaliação inclui exame clínico das lesões e investigação histopatológica para identificação de alterações celulares e corpúsculos de inclusão. A confirmação etiológica pode envolver PCR, isolamento viral em cultivo celular ou inoculação em ovos embrionados, conforme o agente investigado.",
      diagnostico:
        "Suspeita de varíola bovina, com necessidade de identificação laboratorial do poxvírus envolvido.",
      discussao:
        "A evolução das lesões cutâneas, associada à localização no úbere e nos tetos, é compatível com uma infecção por poxvírus. A confirmação laboratorial é importante para diferenciar os agentes envolvidos, uma vez que vaccinia, cowpox e pseudocowpox podem apresentar manifestações clínicas semelhantes."
    },
    {
      id: "variola-bovina-caso-02",
      titulo: "Disseminação de lesões após introdução de novos animais",
      especie: "Bovino",
      idade: "Vacas adultas",
      historico:
        "Em uma propriedade leiteira, diferentes vacas passam a apresentar lesões cutâneas nos tetos e no úbere após a introdução de animais recém-chegados. O produtor relata que não foi realizado período de quarentena e que os equipamentos de ordenha são compartilhados entre os animais.",
      sinais: [
        "Lesões cutâneas nos tetos",
        "Pápulas",
        "Vesículas",
        "Pústulas",
        "Ulcerações",
        "Formação de crostas"
      ],
      exames:
        "Investigação epidemiológica do rebanho, avaliação clínica e coleta de material das lesões para diagnóstico laboratorial. A PCR pode ser utilizada para identificação do agente, complementada por exame histopatológico.",
      diagnostico:
        "Suspeita de infecção por poxvírus associada à varíola bovina.",
      discussao:
        "A introdução de animais sem quarentena e o compartilhamento de equipamentos podem favorecer a disseminação de agentes infecciosos dentro da propriedade. A investigação deve identificar o vírus envolvido e orientar as medidas de controle, incluindo isolamento dos animais afetados, higienização dos equipamentos e acompanhamento dos demais indivíduos."
    },
    {
      id: "variola-bovina-caso-03",
      titulo: "Infecção zoonótica associada à atividade de ordenha",
      especie: "Bovino",
      idade: "Fêmea adulta",
      historico:
        "Uma vaca apresenta lesões ulceradas e crostas nos tetos, causando desconforto durante a ordenha. Após alguns dias de contato frequente com o animal, um funcionário apresenta lesões cutâneas nas mãos, especialmente nas regiões que tiveram contato direto com as áreas afetadas.",
      sinais: [
        "Lesões nos tetos",
        "Vesículas e pústulas",
        "Ulcerações",
        "Formação de crostas",
        "Dor durante a ordenha"
      ],
      exames:
        "No animal, recomenda-se avaliação das lesões e investigação laboratorial por PCR e histopatologia. A avaliação das lesões cutâneas do trabalhador deve ser realizada por profissional de saúde, considerando a possibilidade de transmissão zoonótica.",
      diagnostico:
        "Suspeita de infecção por poxvírus com possível transmissão zoonótica.",
      discussao:
        "A transmissão de poxvírus de bovinos para seres humanos pode ocorrer pelo contato direto com lesões contaminadas. Ordenhadores e profissionais que manipulam animais infectados apresentam risco ocupacional. O caso reforça a importância do uso de luvas, da higienização das mãos e da desinfecção dos equipamentos utilizados na ordenha."
    }
  ]
},




// 🦠 PROTOZOOSES



{
  id: "leishmaniose",

  nome: "Leishmaniose",

  agente: "Protozoários do gênero Leishmania, principalmente Leishmania infantum na leishmaniose visceral canina.",

  categoria: "Protozooses",

  icone: "🔬",

  zoonose: true,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Cães",
    "Gatos",
    "Humanos",
    "Mamíferos silvestres"
  ],

  palavrasChave: [
    "leishmaniose",
    "leishmania",
    "leishmania infantum",
    "leishmaniose visceral",
    "leishmaniose tegumentar",
    "leishmaniose canina",
    "cão",
    "cao",
    "cachorro",
    "canino",
    "gato",
    "felino",
    "mosquito-palha",
    "flebotomíneo",
    "calazar",
    "zoonose"
  ],

  imagem: "/images/doencas/leishmaniose.jpg",
  imagens: [
  {
    src: "/images/doencas/leishmaniose/01-lesoes-cutaneas.jpg",
    titulo: "Lesões cutâneas",
    categoria: "Apresentação clínica",
    descricao:
      "Cão com manifestações dermatológicas associadas à leishmaniose visceral, incluindo alopecia, descamação e alterações cutâneas."
  },
  {
    src: "/images/doencas/leishmaniose/02-amastigotas.jpg",
    titulo: "Formas amastigotas de Leishmania",
    categoria: "Diagnóstico",
    descricao:
      "Visualização microscópica de formas amastigotas de Leishmania infantum no interior de macrófago."
  },
  {
    src: "/images/doencas/leishmaniose/03-ciclo-biologico.jpg",
    titulo: "Ciclo biológico da Leishmania",
    categoria: "Epidemiologia",
    descricao:
      "Representação do ciclo do parasito envolvendo o flebotomíneo e os hospedeiros mamíferos."
  },
  {
    src: "/images/doencas/leishmaniose/04-manifestacoes-clinicas.jpg",
    titulo: "Manifestações clínicas",
    categoria: "Apresentação clínica",
    descricao:
      "Diferentes manifestações dermatológicas e sistêmicas observadas em cães com leishmaniose."
  }
],

  visaoGeral: {
    introducao:
      "A leishmaniose é uma enfermidade parasitária causada por protozoários do gênero Leishmania, que acomete seres humanos, animais domésticos e silvestres. Apresenta grande importância para a medicina veterinária e para a saúde pública, especialmente devido à participação dos cães no ciclo epidemiológico da leishmaniose visceral causada por Leishmania infantum.",

    cards: [
      {
        emoji: "⭐",
        titulo: "Destaques",
        itens: [
          "Enfermidade parasitária de caráter zoonótico",
          "Transmitida principalmente por fêmeas de flebotomíneos infectadas",
          "Apresenta diferentes manifestações clínicas, desde infecções assintomáticas até doença sistêmica grave",
          "Possui importância epidemiológica e impacto na saúde pública",
          "O cão doméstico apresenta papel relevante no ciclo da leishmaniose visceral"
        ]
      },
      {
        emoji: "🦠",
        titulo: "Características",
        itens: [
          "Protozoário intracelular obrigatório",
          "Pertence à família Trypanosomatidae",
          "Apresenta formas promastigotas e amastigotas",
          "As formas amastigotas são encontradas principalmente no interior de células do sistema fagocítico mononuclear",
          "Pode acometer diferentes órgãos e tecidos"
        ]
      },
      {
        emoji: "⚠️",
        titulo: "Importância clínica",
        itens: [
          "Pode provocar alterações dermatológicas, oculares, renais e hematológicas",
          "A doença renal é uma das principais complicações associadas à evolução grave da leishmaniose visceral canina",
          "Existem animais infectados sem manifestações clínicas",
          "A confirmação laboratorial é fundamental para o diagnóstico"
        ]
      }
    ]
  },

  etiologia: {
    introducao:
      "A leishmaniose é causada por protozoários do gênero Leishmania, pertencentes à família Trypanosomatidae. Diferentes espécies estão associadas às apresentações clínicas e epidemiológicas da doença. Nas Américas, Leishmania infantum e Leishmania braziliensis estão entre as espécies frequentemente identificadas em cães.",

    listas: [
      {
        emoji: "🦠",
        titulo: "Principais espécies de Leishmania",
        itens: [
          "Leishmania infantum – principal agente associado à leishmaniose visceral nas Américas",
          "Leishmania braziliensis – associada principalmente à leishmaniose tegumentar",
          "Leishmania amazonensis – relacionada a manifestações cutâneas e outras apresentações clínicas",
          "Leishmania guyanensis – associada à leishmaniose tegumentar",
          "Leishmania panamensis – identificada em diferentes regiões das Américas",
          "Leishmania mexicana – associada principalmente à leishmaniose cutânea"
        ]
      },
      {
        emoji: "🔬",
        titulo: "Formas evolutivas",
        itens: [
          "Promastigota: forma alongada e flagelada, encontrada no tubo digestório do flebotomíneo e responsável pela infecção do hospedeiro vertebrado",
          "Amastigota: forma arredondada ou oval, sem flagelo externo livre, encontrada no interior de células do hospedeiro vertebrado"
        ]
      }
    ],

    tabelas: [
      {
        emoji: "🧬",
        titulo: "Características das formas evolutivas",
        colunas: [
          "Forma",
          "Características",
          "Localização"
        ],
        linhas: [
          [
            "Promastigota",
            "Alongada e flagelada",
            "Flebotomíneo"
          ],
          [
            "Amastigota",
            "Arredondada ou oval, intracelular",
            "Células do hospedeiro vertebrado"
          ]
        ]
      }
    ],

    blocos: [
      {
        emoji: "🧫",
        titulo: "Localização intracelular",
        itens: [
          "As formas amastigotas apresentam tropismo por células do sistema fagocítico mononuclear, especialmente macrófagos.",
          "A multiplicação intracelular contribui para a persistência do parasito no organismo."
        ]
      }
    ]
  },

  patogenia: {
    introducao:
      "A infecção ocorre principalmente durante o repasto sanguíneo de fêmeas de flebotomíneos infectadas. Após a inoculação das formas promastigotas, os parasitos são fagocitados por células do hospedeiro, transformam-se em amastigotas e passam a se multiplicar intracelularmente.",

    blocos: [
      {
        emoji: "🦟",
        titulo: "Inoculação do parasito",
        texto:
          "Durante o repasto sanguíneo, a fêmea infectada do flebotomíneo inocula formas promastigotas metacíclicas na pele do hospedeiro vertebrado."
      },
      {
        emoji: "🧫",
        titulo: "Fagocitose e transformação",
        texto:
          "As formas promastigotas são fagocitadas principalmente por macrófagos. No interior dessas células, transformam-se em formas amastigotas, adaptadas à sobrevivência intracelular."
      },
      {
        emoji: "🔬",
        titulo: "Multiplicação intracelular",
        texto:
          "As formas amastigotas multiplicam-se por divisão binária dentro das células hospedeiras. Com o aumento da carga parasitária, ocorre comprometimento celular e liberação de parasitos capazes de infectar novas células."
      },
      {
        emoji: "🩸",
        titulo: "Disseminação sistêmica",
        texto:
          "Os parasitos podem disseminar-se pelo organismo, principalmente por meio de células do sistema fagocítico mononuclear, atingindo órgãos como linfonodos, baço, fígado e medula óssea."
      },
      {
        emoji: "⚠️",
        titulo: "Resposta imunológica e lesões",
        texto:
          "A resposta imunológica do hospedeiro influencia a evolução da infecção. A produção exacerbada de anticorpos e a formação de imunocomplexos podem contribuir para lesões inflamatórias, especialmente nos rins, articulações, olhos e pele."
      },
      {
        emoji: "🩺",
        titulo: "Comprometimento orgânico",
        texto:
          "A evolução da doença pode provocar dermatopatias, alterações oftálmicas, anemia, hipergamaglobulinemia, glomerulonefrite, proteinúria e doença renal crônica, podendo evoluir para quadros graves."
      }
    ]
  },

  epidemiologia: {
    introducao:
      "A leishmaniose apresenta distribuição em diferentes regiões do mundo, especialmente em áreas tropicais e subtropicais. Nas Américas, a enfermidade possui importância epidemiológica devido à circulação de diferentes espécies de Leishmania, à presença de vetores flebotomíneos e à participação de hospedeiros domésticos e silvestres.",

    blocos: [
      {
        emoji: "🌎",
        titulo: "Distribuição geográfica",
        texto:
          "A leishmaniose ocorre em diferentes países das Américas. No Brasil, a leishmaniose visceral apresenta ampla distribuição geográfica, com registros em diversas regiões."
      },
      {
        emoji: "🦟",
        titulo: "Vetores",
        texto:
          "A transmissão ocorre principalmente por fêmeas infectadas de flebotomíneos. No Brasil, Lutzomyia longipalpis é o principal vetor de Leishmania infantum, embora outras espécies também possam participar da transmissão em determinadas regiões."
      },
      {
        emoji: "🐕",
        titulo: "Reservatórios e hospedeiros",
        texto:
          "Os cães domésticos possuem importante participação no ciclo epidemiológico da leishmaniose visceral. Outros mamíferos domésticos e silvestres também podem participar dos ciclos de transmissão, dependendo da espécie de Leishmania e da região."
      },
      {
        emoji: "🔄",
        titulo: "Ciclo de transmissão",
        texto:
          "O flebotomíneo infecta-se ao realizar o repasto sanguíneo em um hospedeiro contendo formas amastigotas. No intestino do vetor, os parasitos transformam-se em promastigotas e passam por multiplicação e diferenciação até atingirem a forma infectante."
      },
      {
        emoji: "🩸",
        titulo: "Vias secundárias de transmissão",
        texto:
          "Além da transmissão vetorial, existem relatos de transmissão vertical, venérea e por transfusão sanguínea em cães. Essas vias são importantes na epidemiologia e devem ser consideradas nas medidas de controle."
      },
      {
        emoji: "🏙️",
        titulo: "Fatores de risco",
        texto:
          "A expansão urbana, as alterações ambientais, o desmatamento, a presença de matéria orgânica e a adaptação dos vetores aos ambientes modificados podem favorecer a aproximação entre flebotomíneos, animais e seres humanos."
      },
      {
        emoji: "🌱",
        titulo: "Saúde Única",
        texto:
          "A leishmaniose representa um importante exemplo de interação entre saúde animal, humana e ambiental. O controle depende da vigilância epidemiológica, educação em saúde, proteção dos animais contra vetores e ações integradas entre os setores envolvidos."
      }
    ]
  },

  sinaisClinicos: {
    introducao:
      "A leishmaniose canina apresenta manifestações clínicas variadas, podendo ocorrer infecção assintomática, doença localizada ou comprometimento sistêmico. Não existe sinal clínico patognomônico, e as alterações podem ocorrer isoladamente ou em associação.",

    blocos: [
      {
        emoji: "🐕",
        titulo: "Manifestações gerais",
        itens: [
          "Emagrecimento progressivo",
          "Apatia e fraqueza",
          "Hiporexia ou anorexia",
          "Linfadenomegalia generalizada",
          "Hepatomegalia e esplenomegalia",
          "Caquexia em casos avançados"
        ]
      },
      {
        emoji: "🧴",
        titulo: "Dermatopatias",
        itens: [
          "Dermatite descamativa",
          "Alopecia, principalmente periocular",
          "Dermatite ulcerativa",
          "Dermatite papular ou nodular",
          "Hiperqueratose nasal e digital",
          "Despigmentação nasal",
          "Vasculite de ponta de orelha",
          "Onicogrifose"
        ]
      },
      {
        emoji: "👁️",
        titulo: "Alterações oftálmicas",
        itens: [
          "Blefarite",
          "Conjuntivite",
          "Uveíte",
          "Ceratite",
          "Cerato-conjuntivite seca",
          "Esclerite e episclerite",
          "Glaucoma em casos graves"
        ]
      },
      {
        emoji: "🩸",
        titulo: "Alterações hematológicas",
        itens: [
          "Anemia normocítica e normocrômica",
          "Trombocitopatias",
          "Hipergamaglobulinemia",
          "Hipoalbuminemia",
          "Alterações inflamatórias e imunomediadas"
        ]
      },
      {
        emoji: "🩺",
        titulo: "Alterações renais",
        itens: [
          "Proteinúria",
          "Hematúria",
          "Azotemia",
          "Glomerulonefrite",
          "Nefrite intersticial",
          "Doença renal crônica",
          "Insuficiência renal em quadros avançados"
        ]
      },
      {
        emoji: "🦴",
        titulo: "Alterações locomotoras",
        itens: [
          "Poliartrite",
          "Miosite",
          "Osteomielite",
          "Dor e dificuldade de locomoção",
          "Atrofia muscular",
          "Perda de massa muscular"
        ]
      },
      {
        emoji: "⚠️",
        titulo: "Infecção assintomática",
        itens: [
          "Alguns animais infectados não apresentam sinais clínicos.",
          "A ausência de manifestações não exclui a infecção.",
          "Animais infectados e assintomáticos podem apresentar importância epidemiológica."
        ]
      }
    ]
  },

  diagnostico: {
  introducao:
    "O diagnóstico da leishmaniose canina deve ser realizado por meio da associação entre avaliação clínica, histórico epidemiológico e exames laboratoriais. A escolha dos métodos depende da apresentação clínica, do estágio da infecção e da finalidade da investigação. A identificação de anticorpos, isoladamente, não deve ser interpretada como comprovação de doença clínica.",

  metodos: [
    "exame-parasitologico-direto",
    "citologia",
    "histopatologia",
    "imuno-histoquimica",
    "rifi",
    "elisa",
    "imunocromatografia",
    "pcr"
  ]
},

  tratamento: {
    introducao:
      "O tratamento da leishmaniose canina deve ser individualizado, considerando a confirmação da infecção, o estadiamento clínico, as alterações laboratoriais e o comprometimento dos órgãos. Os protocolos podem combinar fármacos leishmanicidas, leishmaniostáticos e imunomoduladores. O tratamento deve ser realizado sob acompanhamento permanente do médico-veterinário, pois a melhora clínica não significa necessariamente eliminação completa do parasito.",

    blocos: [
      {
        emoji: "💊",
        titulo: "Miltefosina",
        texto:
          "A miltefosina é um fármaco com ação leishmanicida utilizado no tratamento da leishmaniose canina. No Brasil, apresenta registro para essa finalidade. Pode promover melhora clínica e redução da carga parasitária, mas exige acompanhamento devido à possibilidade de efeitos adversos gastrointestinais, como vômitos, diarreia e redução do apetite."
      },
      {
        emoji: "💊",
        titulo: "Marbofloxacina",
        texto:
          "A marbofloxacina é um fármaco utilizado em protocolos terapêuticos para leishmaniose canina no Brasil. Sua utilização deve considerar o estadiamento do paciente, a avaliação clínica e o risco de desenvolvimento de resistência bacteriana."
      },
      {
        emoji: "🧪",
        titulo: "Alopurinol",
        texto:
          "O alopurinol apresenta ação leishmaniostática e pode ser utilizado em associação com outros medicamentos. Atua reduzindo a multiplicação parasitária, contribuindo para o controle da infecção. Seu uso prolongado exige monitoramento devido ao risco de formação de urólitos de xantina e alterações renais."
      },
      {
        emoji: "🛡️",
        titulo: "Imunomodulação",
        texto:
          "A imunomodulação pode integrar os protocolos terapêuticos, buscando melhorar a resposta imunológica do hospedeiro. A escolha dos medicamentos deve considerar as condições clínicas do animal e as evidências disponíveis."
      },
      {
        emoji: "📊",
        titulo: "Tratamento conforme o estadiamento",
        texto:
          "A escolha do protocolo depende da classificação do animal em relação à exposição, infecção e presença de doença clínica. Animais expostos ou infectados sem manifestações clínicas podem exigir monitoramento individualizado, enquanto pacientes com doença clínica necessitam de avaliação terapêutica conforme a gravidade e o comprometimento renal."
      },
      {
        emoji: "🔬",
        titulo: "Acompanhamento terapêutico",
        texto:
          "O acompanhamento deve incluir exame físico, hemograma, perfil bioquímico renal e hepático, proteínas séricas, urinálise, relação proteína-creatinina urinária e, quando indicado, sorologia quantitativa, PCR quantitativa e exames de imagem. O monitoramento permite avaliar a evolução clínica, identificar recidivas e acompanhar possíveis efeitos adversos."
      },
      {
        emoji: "⚠️",
        titulo: "Considerações importantes",
        texto:
          "A melhora clínica não representa necessariamente cura parasitológica. O tratamento não elimina obrigatoriamente a capacidade de transmissão do animal. As medidas de proteção contra flebotomíneos devem ser mantidas durante todo o acompanhamento."
      }
    ]
  },

  prevencao: {
    introducao:
      "A prevenção da leishmaniose depende principalmente da redução do contato entre os flebotomíneos e os hospedeiros. As medidas incluem proteção individual dos animais, controle vetorial, manejo ambiental, vigilância epidemiológica e educação em saúde. A prevenção deve ser integrada, considerando a interface entre saúde humana, animal e ambiental.",

    blocos: [
      {
        emoji: "🦟",
        titulo: "Controle do vetor",
        destaque: true,
        texto:
          "A utilização de produtos tópicos com ação repelente ou inseticida contra flebotomíneos é uma das principais estratégias de prevenção da leishmaniose canina. Coleiras impregnadas com deltametrina e outros produtos com eficácia documentada podem reduzir a exposição dos animais ao vetor.",
        tags: [
          "PREVENÇÃO VETORIAL",
          "PROTEÇÃO CONTÍNUA"
        ],
        informacoes: [
          {
            titulo: "Produtos tópicos",
            texto:
              "A escolha deve considerar a espécie, a idade, o peso do animal, as indicações de bula e a eficácia demonstrada contra flebotomíneos."
          },
          {
            titulo: "Atenção aos felinos",
            texto:
              "Gatos apresentam sensibilidade a determinados piretroides, especialmente à permetrina. Produtos destinados a cães não devem ser utilizados em gatos sem indicação específica para essa espécie. A flumetrina associada à imidacloprida possui formulação disponível para felinos."
          }
        ]
      },
      {
        emoji: "🌱",
        titulo: "Manejo ambiental",
        texto:
          "A limpeza de quintais e instalações, remoção de folhas, frutos e matéria orgânica acumulada e manutenção de ambientes adequados contribuem para reduzir condições favoráveis ao desenvolvimento de flebotomíneos."
      },
      {
        emoji: "🏠",
        titulo: "Proteção dos animais",
        texto:
          "Recomenda-se reduzir a exposição dos animais aos vetores, especialmente durante o período crepuscular e noturno, além de utilizar barreiras físicas e produtos repelentes adequados."
      },
      {
        emoji: "🔬",
        titulo: "Vigilância e diagnóstico precoce",
        texto:
          "A triagem e o acompanhamento de animais em áreas de transmissão permitem identificar precocemente a exposição e a infecção. A investigação deve integrar avaliação clínica e exames laboratoriais."
      },
      {
        emoji: "🩸",
        titulo: "Controle da transmissão secundária",
        texto:
          "Cães infectados, independentemente da presença de sinais clínicos, devem ser excluídos de programas de doação de sangue e reprodução, considerando os relatos de transmissão transfusional, vertical e venérea."
      },
      {
        emoji: "📢",
        titulo: "Educação em saúde",
        texto:
          "A orientação dos responsáveis pelos animais e da comunidade sobre a transmissão, os vetores, os sinais clínicos e as medidas de prevenção é essencial para o controle da enfermidade."
      },
      {
        emoji: "💉",
        titulo: "Vacinação",
        texto:
          "Segundo as Diretrizes Brasileish de 2025, não havia vacina contra a leishmaniose canina disponível na América Latina. A prevenção deve priorizar as medidas de proteção contra flebotomíneos e o manejo epidemiológico."
      },
      {
        emoji: "🌎",
        titulo: "Saúde Única",
        texto:
          "O controle da leishmaniose exige integração entre medicina veterinária, saúde pública e gestão ambiental, com vigilância dos casos humanos e animais, controle vetorial e participação da comunidade."
      }
    ]
  },

  referencias: [
    {
      titulo:
        "Diretrizes Brasileish para o diagnóstico, tratamento e prevenção da leishmaniose canina na América Latina – Edição 2025",

      autores:
        "Brasileish – Grupo de Estudos sobre Leishmaniose Animal",

      fonte:
        "Revista Clínica Veterinária",

      ano:
        "2025",

      link:
        "https://www.revistaclinicaveterinaria.com.br/wp-content/uploads/2025/11/Diretrizes-Brasileish-2025.pdf"
    },
    {
      titulo:
        "Manual de Vigilância e Controle da Leishmaniose Visceral",

      autores:
        "Brasil. Ministério da Saúde",

      fonte:
        "Ministério da Saúde",

      ano:
        "2026",

      link:
        "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2026/manual-de-vigilancia-e-controle-da-leishmaniose-visceral.pdf"
    },
    {
      titulo:
        "Leishmaniasis worldwide and global estimates of its incidence",

      autores:
        "Alvar J. et al.",

      fonte:
        "PLoS ONE",

      ano:
        "2012",

      link:
        "https://doi.org/10.1371/journal.pone.0035671"
    },
    {
      titulo:
        "Canine leishmaniosis",

      autores:
        "LeishVet",

      fonte:
        "LeishVet – Guidelines",

      ano:
        "2024",

      link:
        "https://www.leishvet.org/leishmaniose-canina-e-felina/"
    }
  ],

  casosClinicos: [
    {
      id: "leishmaniose-caso-01",

      titulo:
        "Cão com alterações dermatológicas e emagrecimento progressivo",

      especie:
        "Canino",

      idade:
        "Adulto",

      historico:
        "Um cão proveniente de região endêmica é atendido apresentando emagrecimento progressivo, apatia e alterações dermatológicas. O responsável relata evolução gradual dos sinais clínicos, incluindo perda de pelos na região periocular e crescimento acentuado das unhas.",

      sinais: [
        "Alopecia periocular",
        "Dermatite descamativa",
        "Onicogrifose",
        "Emagrecimento progressivo",
        "Linfadenomegalia"
      ],

      exames:
        "O hemograma e o perfil bioquímico demonstram alterações compatíveis com processo inflamatório crônico. A investigação sorológica é associada à pesquisa parasitológica em amostra de linfonodo e à PCR para detecção de DNA de Leishmania spp.",

      diagnostico:
        "Leishmaniose canina associada à infecção por Leishmania infantum.",

      discussao:
        "A associação entre manifestações dermatológicas, alterações sistêmicas e histórico epidemiológico levanta forte suspeita de leishmaniose. A confirmação deve envolver exames laboratoriais, pois os sinais clínicos não são patognomônicos. A avaliação renal é fundamental para o estadiamento e a definição da conduta terapêutica."
    },
    {
      id: "leishmaniose-caso-02",

      titulo:
        "Cão infectado com comprometimento renal",

      especie:
        "Canino",

      idade:
        "Adulto",

      historico:
        "Um cão de área endêmica apresenta apatia, redução do apetite, emagrecimento e alterações dermatológicas. Durante a investigação clínica, são identificadas alterações laboratoriais sugestivas de comprometimento renal.",

      sinais: [
        "Hiporexia",
        "Emagrecimento",
        "Apatia",
        "Alterações dermatológicas",
        "Linfadenomegalia"
      ],

      exames:
        "A investigação inclui hemograma, perfil bioquímico, urinálise, relação proteína-creatinina urinária e testes para pesquisa de Leishmania spp. A avaliação demonstra proteinúria e alterações de parâmetros relacionados à função renal. Exames parasitológicos e/ou moleculares são utilizados para confirmação da infecção.",

      diagnostico:
        "Leishmaniose visceral canina com comprometimento renal associado.",

      discussao:
        "O comprometimento renal é uma das complicações mais importantes da leishmaniose visceral canina e pode estar relacionado à deposição de imunocomplexos e à inflamação renal. O estadiamento clínico e a avaliação da função renal são essenciais para determinar o prognóstico e orientar o tratamento. O acompanhamento laboratorial periódico é indispensável."
    }
  ]
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

{
  id: "rhodococcus-equi",

  nome: "Rhodococcus equi",

  agente: "Rhodococcus equi",

  categoria: "Bacterianas",

  icone: "🧫",

  zoonose: true,

  vacina: false,

  eutanasia: false,

  notificacaoObrigatoria: false,

  hospedeiros: [
    "Equinos",
    "Potros",
    "Humanos"
  ],

  palavrasChave: [
    "Rhodococcus equi",
    "rodococose",
    "pneumonia em potros",
    "potros",
    "VapA",
    "pneumonia granulomatosa",
    "abscessos pulmonares"
  ],

  imagem: "/images/doencas/rhodococcus/rhodococcus-equi.jpg",
  imagens: [

    {
      src: "/images/doencas/rhodococcus/pneumonia1.jpeg",
      titulo: "Pneumonia por Rhodococcus equi",
      categoria: "Apresentação clínica",
      descricao:
        "Pulmão de potro apresentando pneumonia grave associada à infecção por Rhodococcus equi, com múltiplos nódulos e áreas de abscessação."
    },

    {
      src: "/images/doencas/rhodococcus/abscessos-pulmonares.jpg",
      titulo: "Abscessos pulmonares",
      categoria: "Lesões macroscópicas",
      descricao:
        "Lesões pulmonares multifocais a coalescentes contendo material branco-amarelado, características descritas em potros naturalmente infectados."
    },

  

    {
      src: "/images/doencas/rhodococcus/enterocolite.jpg",
      titulo: "Enterocolite ulcerativa",
      categoria: "Lesões extrapulmonares",
      descricao:
        "Lesões de tiflocolite ulcerativa associadas à infecção natural por Rhodococcus equi."
    },

  

    {
      src: "/images/doencas/rhodococcus/histologia.jpg",
      titulo: "Pneumonia piogranulomatosa",
      categoria: "Histopatologia",
      descricao:
        "Achados histológicos compatíveis com pneumonia piogranulomatosa, com presença de macrófagos e bactérias cocobacilares."
    }

  ],
  visaoGeral: {

    introducao:
      "A rodococose é uma doença de distribuição mundial causada por Rhodococcus equi, associada principalmente à ocorrência de pneumonia grave em potros com menos de seis meses de idade. A enfermidade apresenta elevada importância veterinária devido à mortalidade e às perdas econômicas relacionadas à pneumonia.",

    cards: [

      {
        emoji: "⭐",

        titulo: "Destaques",

        itens: [
          "Doença de distribuição mundial",
          "Importante causa de pneumonia grave em potros",
          "Pode apresentar elevada mortalidade",
          "Está associada a importantes perdas econômicas na criação de equinos",
          "Potros de um a seis meses de idade são especialmente acometidos"
        ]
      },

      {
        emoji: "🦠",

        titulo: "Características",

        itens: [
          "Causada por Rhodococcus equi",
          "Microrganismo intracelular",
          "Apresenta ampla capacidade de adaptação ambiental",
          "Pode sobreviver no interior de células do hospedeiro",
          "A proteína VapA apresenta importante papel na virulência"
        ]
      },

      {
        emoji: "🐴",

        titulo: "Importância",

        itens: [
          "Possui grande importância na criação de potros",
          "A pneumonia pode ser grave e muitas vezes fatal",
          "Também pode atuar como patógeno oportunista em humanos"
        ]
      }

    ]

  },
  casosClinicos: [

    {
      id: "rhodococcus-equi-caso-01",

      titulo:
        "Pneumonia por Rhodococcus equi em potro jovem",

      especie:
        "Equino",

      idade:
        "Potros entre 1 e 6 meses",

      historico:
        "Potros jovens de uma propriedade com histórico de infecção por Rhodococcus equi apresentaram sinais respiratórios progressivos. A enfermidade evoluiu com comprometimento pulmonar e formação de lesões piogranulomatosas.",

      sinais: [
        "Febre",
        "Tosse",
        "Taquipneia",
        "Dispneia",
        "Depressão",
        "Anorexia",
        "Perda de peso",
        "Secreção nasal"
      ],

      exames:
        "A investigação pode incluir avaliação clínica e epidemiológica, radiografia ou ultrassonografia torácica, lavado traqueal ou broncoalveolar para citologia e cultura, além de PCR para detecção de fatores de virulência, como o plasmídeo VapA.",

      diagnostico:
        "Pneumonia por Rhodococcus equi, com formação de abscessos e pneumonia piogranulomatosa.",

      discussao:
        "O diagnóstico precoce é fundamental, pois a doença pode evoluir de forma progressiva antes que os sinais respiratórios se tornem evidentes. A associação entre histórico da propriedade, idade do potro, sinais clínicos e exames complementares aumenta a segurança diagnóstica."
    },

    {
      id: "rhodococcus-equi-caso-02",

      titulo:
        "Infecção por Rhodococcus equi com manifestações extrapulmonares",

      especie:
        "Equino",

      idade:
        "Potros jovens",

      historico:
        "Animal jovem apresentou quadro compatível com infecção por Rhodococcus equi, associado a manifestações sistêmicas e alterações extrapulmonares.",

      sinais: [
        "Febre",
        "Depressão",
        "Perda de peso",
        "Diarreia",
        "Aumento ou alteração articular",
        "Alterações locomotoras"
      ],

      exames:
        "A investigação pode incluir exames de imagem, cultura bacteriana, citologia, PCR e avaliação anatomopatológica das lesões quando disponível.",

      diagnostico:
        "Infecção por Rhodococcus equi com manifestações extrapulmonares.",

      discussao:
        "Embora a pneumonia seja a principal manifestação da infecção por Rhodococcus equi, podem ocorrer lesões extrapulmonares, incluindo enterocolite, linfadenite, artrite, osteomielite e abscessos em outros órgãos."
    }

  ],
  etiologia: {

    introducao:
      "Rhodococcus equi é a espécie do gênero Rhodococcus com maior potencial patogênico para animais, incluindo humanos. O microrganismo apresenta características que permitem sua adaptação tanto ao solo quanto ao organismo de mamíferos.",

    blocos: [

      {
        emoji: "🦠",

        titulo: "Agente etiológico",

        itens: [
          "Rhodococcus equi",
          "Pertence ao grupo dos actinomicetos nocardioformes",
          "Apresenta comportamento de microrganismo intracelular",
          "É capaz de estabelecer um nicho no interior das células do hospedeiro"
        ]
      },

      {
        emoji: "🌱",

        titulo: "Características ambientais",

        itens: [
          "É habitante do solo",
          "Pode atuar como microrganismo saprófito do intestino de herbívoros",
          "Multiplica-se facilmente em solos que recebem esterco",
          "Apresenta ampla disseminação em propriedades de criação de equinos",
          "Pode permanecer viável no ambiente por até 12 meses"
        ]
      },

      {
        emoji: "🧬",

        titulo: "Determinante de virulência",

        itens: [
          "A proteína de superfície VapA apresenta papel central na virulência",
          "O gene vapA está localizado em um plasmídio de virulência",
          "Cepas que não possuem o plasmídio de virulência são incapazes de sobreviver e se replicar adequadamente no interior de macrófagos",
          "A expressão de vapA está relacionada às condições encontradas no interior do fagossomo"
        ]
      }

    ]

  },

  epidemiologia: {

    introducao:
      "A rodococose apresenta distribuição mundial e pode ocorrer de forma endêmica, esporádica ou não ser registrada em determinadas propriedades. A ocorrência está relacionada à densidade de potros, ao manejo da propriedade e a fatores ambientais.",

    blocos: [

      {
        emoji: "🌎",

        titulo: "Distribuição",

        texto:
          "A doença apresenta distribuição mundial e é considerada uma das enfermidades mais severas na criação de potros no Brasil."
      },

      {
        emoji: "🐴",

        titulo: "Potros",

        texto:
          "Potros infectados constituem importante fonte de infecção em propriedades com histórico da doença."
      },

      {
        emoji: "💩",

        titulo: "Eliminação do agente",

        texto:
          "Potros infectados podem disseminar grandes quantidades de R. equi virulento nas fezes até aproximadamente a sétima semana de vida."
      },

      {
        emoji: "🌫️",

        titulo: "Principal via de infecção",

        texto:
          "A infecção ocorre principalmente pela inalação de partículas de poeira contaminadas com a bactéria."
      },

      {
        emoji: "🏇",

        titulo: "Fatores relacionados ao manejo",

        texto:
          "Superlotação, manutenção de animais de diferentes idades no mesmo lote, permanência prolongada dos potros em um mesmo local, baixa cobertura de pasto e ausência de monitoramento após o nascimento contribuem para a instalação e manutenção da doença."
      },

      {
        emoji: "☀️",

        titulo: "Fatores ambientais",

        texto:
          "Temperaturas mais elevadas e baixa ocorrência de chuva favorecem condições de maior empoeiramento e estão associadas a maior risco de propriedades se tornarem endêmicas."
      }

    ]

  },

  patogenia: {

    introducao:
      "A patogenia do R. equi está relacionada principalmente à capacidade do microrganismo de sobreviver e se multiplicar no interior de macrófagos, interferindo na maturação normal do fagossomo.",

    blocos: [

      {
        emoji: "🫁",

        titulo: "Entrada no organismo",

        texto:
          "A infecção ocorre principalmente pela inalação de partículas de poeira contaminadas. O trato alimentar e a pele lesionada também podem atuar como portas de entrada."
      },

      {
        emoji: "🧬",

        titulo: "Sobrevivência intracelular",

        texto:
          "R. equi estabelece um nicho intracelular e é capaz de sobreviver no interior de células da linhagem monócito-macrófago."
      },

      {
        emoji: "🦠",

        titulo: "Evasão intracelular",

        texto:
          "A virulência está relacionada à capacidade de inibir a fusão do lisossomo ao fagossomo e manter condições que favorecem sua sobrevivência e replicação."
      },

      {
        emoji: "🧬",

        titulo: "VapA",

        texto:
          "A proteína VapA, codificada pelo gene vapA localizado no plasmídio de virulência, apresenta papel essencial na prevenção da acidificação do fagossomo e na sobrevivência intracelular da bactéria."
      },

      {
        emoji: "🫁",

        titulo: "Lesões pulmonares",

        texto:
          "A evolução da infecção está associada à formação de abscessos pulmonares, característica importante da pneumonia causada por R. equi."
      }

    ]

  },

  sinaisClinicos: {

    introducao:
      "Os potros podem ser infectados nos primeiros dias de vida, enquanto os sinais clínicos geralmente aparecem por volta da quinta semana. A manifestação inicial pode ser inaparente, com ou sem alterações respiratórias.",

    blocos: [

      {
        emoji: "🫁",

        titulo: "Alterações respiratórias",

        itens: [
          "Aumento progressivo da frequência respiratória",
          "Dificuldade respiratória",
          "Taquipneia",
          "Dispneia",
          "Tosse, que pode estar presente ou não",
          "Descarga nasal, que pode estar presente ou não",
          "Sons pulmonares anormais"
        ]
      },

      {
        emoji: "🔥",

        titulo: "Forma grave",

        itens: [
          "Massiva abscedação pulmonar",
          "Hipertermia",
          "Taquipneia",
          "Depressão",
          "Anorexia",
          "Decúbito",
          "Respiração abdominal",
          "Cianose",
          "Possibilidade de morte"
        ]
      },

      {
        emoji: "💩",

        titulo: "Manifestações intestinais",

        itens: [
          "Diarreia severa",
          "Tifocolite ulcerativa",
          "Alterações intestinais associadas à ingestão de fezes contendo grandes quantidades da bactéria"
        ]
      },

      {
        emoji: "👁️",

        titulo: "Outras manifestações",

        itens: [
          "Polisinovite",
          "Uveíte",
          "Panoftalmite",
          "Nefrite",
          "Abscedação hepática e renal",
          "Artrite purulenta",
          "Linfangites ulcerativas",
          "Osteomielite",
          "Serosite",
          "Abscedação intravertebral",
          "Ulceração cutânea",
          "Abortamentos e placentites podem ocorrer ocasionalmente"
        ]
      }

    ]

  },

  diagnostico: {

    introducao:
      "O diagnóstico precoce da rodococose é fundamental para a sobrevivência do potro. O diagnóstico deve associar informações clínico-epidemiológicas aos métodos complementares, especialmente o isolamento da bactéria em fluido traqueobrônquico ou a detecção do DNA bacteriano por PCR.",

    metodos: [
      "cultura-bacteriologica",
      "pcr"
    ]

  },

  tratamento: {

    introducao:
      "A mortalidade por rodococose em potros foi drasticamente reduzida com a utilização da associação entre eritromicina e rifampicina. Outras opções de macrolídeos também são utilizadas em associação à rifampicina.",

    blocos: [

      {
        emoji: "💊",

        titulo: "Antimicrobianos",

        texto:
          "A eritromicina associada à rifampicina foi utilizada com sucesso no tratamento da rodococose. Azitromicina ou claritromicina também podem ser utilizadas em associação à rifampicina."
      },

      {
        emoji: "⚠️",

        titulo: "Efeitos adversos",

        texto:
          "A eritromicina apresenta absorção oral variável em potros e pode causar efeitos adversos, principalmente diarreia e hipertermia."
      },

      {
        emoji: "🫁",

        titulo: "Suporte",

        texto:
          "Anti-inflamatórios não esteroidais podem ser utilizados em potros hipertérmicos, letárgicos e anoréxicos. A oxigenioterapia é indicada em potros com angústia respiratória."
      },

      {
        emoji: "🚫",

        titulo: "Nebulização",

        texto:
          "A nebulização deve ser evitada, pois é altamente estressante para os animais e não apresenta o efeito desejado."
      },

      {
        emoji: "⚠️",

        titulo: "Resistência antimicrobiana",

        texto:
          "A ocorrência de isolados resistentes aos antimicrobianos de eleição representa uma limitação importante para o sucesso da terapia."
      }

    ]

  },

  prevencao: {

    introducao:
      "O monitoramento clínico e as modificações no manejo da propriedade apresentam papel importante no controle da rodococose.",

    blocos: [

      {
        emoji: "🔎",

        titulo: "Monitoramento",

        texto:
          "O monitoramento clínico dos potros permite identificar precocemente alterações comportamentais e funcionais e indicar a realização de exames complementares."
      },

      {
        emoji: "🐴",

        titulo: "Inspeção dos potros",

        texto:
          "A inspeção clínica pode identificar precocemente sinais como dispneia, tosse não produtiva e sons pulmonares anormais."
      },

      {
        emoji: "🏇",

        titulo: "Manejo",

        texto:
          "Modificações no manejo da propriedade podem contribuir para reduzir a ocorrência da rodococose."
      },

      {
        emoji: "🌱",

        titulo: "Ambiente",

        texto:
          "Condições ambientais relacionadas ao empoeiramento e à manutenção de pastagens devem ser consideradas no controle da enfermidade."
      }

    ]

  },

  referencias: [

    {
      titulo:
        "Rhodococcus equi Parte 1 - epidemiologia, manifestações clínicas, diagnóstico e tratamento",

      autores:
        "Ana Carolina Rusca Correa Porto; Wilson Roberto Fernandes; Maria Cristina Roque Barreira",

      fonte:
        "Ciência Rural, v.41, n.12, p.2143-2150",

      ano:
        "2011",

      link:
        "https://doi.org/10.1590/S0103-84782011001200017"
    }

  ]

},
];