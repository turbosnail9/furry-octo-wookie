module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "WearHacks 2014",
      description: "",
      date: "26-28 September",
      venue: "La Commune",
      address: "440 Place Jacques Cartier",
      neighborhood: "H2Y 3B3",
      city: "Montréal",
      state: "QC"
    },

    // The Call To Action button at the header,
    // If you don"t want this, just remove the callToAction property.
    callToAction: {
      text: "Register Here!",
      link: "https://www.eventbrite.ca/e/wearhacks-2014-tickets-12179086977"
    },

    // Site info
    site: {
      theme: "front-in-poa",
      url: "http://wearhacks.com/",
      googleanalytics: "UA-52494250-1"
    },

    // Active sections on the website
    // to deactivate comment out with "//"
    // you can also change order here and it will reflect on page
    sections: [
      "about",
      "faq",
      "speakers",
      //"presenter",
      //"schedule",
      "location",
      "sponsors",
      "organizers", 
      "collaborate" 
    ],

    navigation: [
      "home",
      "about",
      "faq",
      "speakers",
      //"schedule",
      "location",
      "sponsors",
      "organizers",
      "collaborate"
    ],

    // Labels which you can translate to other languages
    labels: {
      home: "Home",
      about: "About",
      faq: "FAQ",
      speakers: "Mentors",
      schedule: "Schedule",
      location: "Venue",
      sponsors: "Sponsors",
      organizers: "Organizers",
      collaborate: "Contact"
    },

    // List of speakers
    speakers: [
      {
        name: "Alexander Lynn",
        image: "images/speakers/alexlynn.jpg",
        bio: "Alex plays a key role in building out the <a href=\"http://realventures.com/en/\">Real Ventures</a> brand, all while acting as a resource to portfolio companies and thinking about where <a href=\"http://founderfuel.com/en/\">FounderFuel</a> is heading next. Before this, he helped world-class brands innovate at Sid Lee and founded TEDxMontreal. In his spare time he drinks tea, reads books, designs things and travels",
        comment: "",
        company: "Real Ventures",
        twitter: "AlexandreLynn",
        github: ""
      },
      {
        name: "Yasir Siddiqui",
        image: "images/speakers/yasir.jpg",
        bio: "Yasir Siddiqui is passionate about startups and technology. In fact, Yasir is one of the cofounders of <a href=\"http://hardwareguild.com/\">Hardware Guild</a> with a mission to create a hub for hardware entrepreneurs and supports. In addition, Yasir is a mentor to about a dozen hardware startups in Montreal. Previously, he has about seven years of experience in IT sales, IT strategy and Business consulting primarily in the aviation industry. Moreover, he has launched three startups: two service businesses and a non-for-profit.  Fun fact: Yasir\'s first startup was in Pakistan when he was still in high school.",
        comment: "",
        company: "Hardware Guild",
        twitter: "",
        github: ""
      }
      //{
      //  name: "Alex Daskalov",
      //  gravatar: "572696200604e59baa59ee90d61f7d02",
      //  bio: "Mais de 8 anos de experiência em desenvolvimento Web, apaixonado por JavaScript, curador da BrazilJS Conf e um dos criadores e líderes da BrazilJS Foundation. Trabalha atualmente no Terra criando ferramentas e APIs JavaScript e pesquisando novas tecnologias, como HTML5 e todo o seu guarda-chuva, Node.JS e, é claro, JavaScript",
      //  comment: "Apoiado na evolução do desenvolvimento front-end e como um verdadeiro <a href=\"http://jaydson.org/cultura-maldita-no-desenvolvimento-de-software/\" target=\"_blank\">exterminador <del>do futuro</del> da cultura maldita</a>, Jaydson vai falar sobre a revolução a qual liderou em nome de produtos mais robustos, escaláveis e de qualidade.",
      //  company: "BackTrack",
     //   twitter: "jaydson",
     //   github: "jaydson"
     // }
    ],

    // The entire schedule
    schedule: [
      {
        date: "Sep 26",
        time: "18:00",
        name: "Check-in",
        image: "images/schedule/check-in.svg"
      },
      {
        time: "18:50",
        speaker: "Randal Maia",
        name: "Acelere, faça amigos e aprenda com seu guia de estilos",
        description: "Sabe aquele momento em que o designer entrega milhões de telas e você sente que não vai dar conta de todas as tarefas? Nesta talk, quero falar sobre como acelerar seu processo de desenvolvimento, fazer amigos dentro da sua equipe, compartilhar seu conhecimento e ter seu próprio guia de estilos."
      },
      {
        time: "19:30",
        speaker: "Eduardo Gouvêa",
        name: "Festival da boa vizinhança: UX - Front end",
        description: "Hoje em dia, profissionais de UX são bastante requeridos nas empresas que focam em serviços e produtos digitais. E como fica a interação entre essa área de UX e os desenvolvedores no final do processo? Nesta talk, quero falar sobre a importância de planejar a Experiência do Usuário e como ela afeta e influencia o front-end e vice-versa."
      },
      {
        time: "20:00",
        name: "Coffee",
        image: "images/schedule/coffee.svg"
      },
      {
        time: "20:20",
        speaker: "Reinaldo Ferraz",
        name: "Acessibilidade na web modo Jedi Master",
        description: "Já conhece o básico de acessibilidade na Web? Então está na hora de partir do modo Padawan para Jedi Master entendendo o potencial do HTML5 para acessibilidade e como utilizar WAI-ARIA para manipular elementos e enriquecer sua aplicação Web."
      },
      {
        date: "Sep 27",
        time: "11:10",
        speaker: "Cynthia Zanoni",
        name: "E que tal descobrir que você entende muito de SEO?",
        description: "SEO é visto como um diferencial competitivo no mercado, \"coisa\" de analista ou produtor de conteúdo. Mas já parou para pensar o quanto você é importante no processo de otimização? Vamos traçar um Roadmap sobre otimização e você vai descobrir que manja mais de SEO do que imaginava. Esqueça os clichês sobre posicionamento e vamos otimizar!"
      },
      {
        time: "11:30",
        speaker: "Bruno Azevedo",
        name: "Não seja um desenvolvedor Chucro! Como economizar tempo e melhorar os seus projetos utilizando Grunt",
        description: "Um guia prático de utilização da ferramenta Grunt. Veremos como o nosso desenvolvimento pode se tornar mais fácil e quanto tempo podemos economizar automatizado tarefas repetitivas."
      },
      {
        time: "12:00",
        name: "Almoço",
        image: "images/schedule/lunch.svg"
      },
      {
        time: "13:30",
        speaker: "Franz Figueroa",
        name: "Em breve",
        description: "Em breve"
      },
      {
        date: "Sep 28",
        time: "14:20",
        speaker: "Átila Fassina",
        name: "Responsive Web Workflow",
        description: "Trabalhar com Web Design Responsivo pode ser confuso, é um cenário em constante e rápida evolução, cheio de diferentes opções para escolher e se adaptar, novas tendências. Não existe bala de prata, mas nessa talk vamos avaliar práticas sugeridas e escolher nossas metodologias com um toolset básico para montar um projeto com nossas próprias guidelines."
      },
      {
        time: "15:10",
        speaker: "Glauber Ramos",
        name: "Técnicas e organização de CSS",
        description: "Nessa talk falarei sobre técnicas e organização de CSS, como podemos usar pré-processadores hoje em dia, variáveis, nesting e mixins. Diferentes técnicas de organização de CSS como SMACSS, BEM, DRY CSS e OOCSS. Normalize, grids semânticos, dicas de CSS e como utilizar boas práticas utilizadas pelos frameworks mais famosos (Bootstrap, Inuit, Pure, Foundation) para criar seu próprio framework."
      },
      {
        time: "16:00",
        name: "Coffee",
        image: "images/schedule/coffee.svg"
      },
      {
        time: "16:30",
        speaker: "Jaydson Gomes",
        name: "Processo de Desenvolvimento FrontEnd - Do caos ao Sublime",
        description: "O mundo muda constantemente. Na tecnologia isso é mais evidente, o avanço é exponêncial, e quase não conseguimos acompanhar o que há de mais novo na área em que atuamos. No desenvolvimento de software, a mudança pode influenciar diretamente no sucesso do mesmo. Novas tecnologias, novas ferramentas, novas linguagens, tudo isso deve ser considerado. O JavaScript ocupou o lugar de linguagem mais querida e popular no mundo, depois de passar anos sendo incompreendida. Esta mudança é reflexo do avanço da linguagem, das ferramentas e de todas as tecnologias que a cercam. O modo de se desenvolver código client-side mudou, e para melhor. O ambiente de desenvolvimento não é mais o mesmo, hoje temos um arsenal de ferramentas que nos ajudam a criar aplicações robustas, escaláveis e de qualidade. Praticamente tudo que existe para melhorar o desenvolvimento de software em alguma outra linguagem, também existe para JavaScript. Testes unitários, testes funcionais, ferramentas de build, validação de sintaxe, validação de convenções, integração contínua, etc. Todos os itens acima, e muitos outros, são essenciais em qualquer tipo de software, e atualmente temos o poder de tornar nossas aplicações JavaScript muito mais confiáveis do que há alguns anos. O objetivo da palestra é apresentar as principais ferramentas, tecnologias e técnicas disponíveis para o desenvolvimento de aplicações client-side, além de mostrar na prática, como mudamos completamente o processo de desenvolvimento FrontEnd em um dos maiores portais da América Latina, o Terra."
      },
      {
        time: "17:30",
        speaker: "Vitor Carlos",
        name: "Press Start",
        description: "Quer fazer um game para web e não tem nem noção por onde começar? I know that feels, bro. Vamos ver então como estruturar um projeto de game, conhecer conceitos básicos de game design, rever algumas tecnologias disponíveis e conhecer técnicas para contornar as limitações dos games na nossa plataforma favorita, que é a web! :)"
      },
      {
        time: "18:20",
        name: "Closing",
        image: "images/schedule/closing.svg"
      }
    ],

    // List of Sponsors
    
    
    sponsorssingularity: [
       {
         name: "Hacking Health",
         logo: "images/sponsors/HH-Logo-vertcial-B-Red.png",
         url: "http://www.hackinghealth.ca/"
       }
    ],
    sponsorsoptimus: [
      
       {
         name: "Thalmic Labs",
         logo: "images/sponsors/thalmic_labs_logo.jpg",
         url: "https://www.thalmic.com/en/myo/"
       }
    ],
    sponsorst1000: [
      {
        name: "La Commune",
        logo: "images/sponsors/LaCommunelogo.png",
        url: "http://www.lacommune.ca/index.php/en/"
      },
      
      {
		    name: "Estimote",
		    logo: "images/sponsors/estimote-logo.png",
		    url: "http://estimote.com/"
	    }
    ],
    sponsorsr2d2: [
      //{
      //  name: "FreshMint",
      //   logo: "images/sponsors/freshmint.jpg",
      //   url: "http://www.freshmint.com/"
      //},
      {
        name: "Google",
         logo: "images/sponsors/google.png",
         url: "https://www.google.ca/intl/en/about/"
      },
      {
        name: "Nod",
         logo: "images/sponsors/NodLogo1.png",
         url: "https://www.hellonod.com/"
      }  
    ],

 	  sponsorswalle: [
      {
        name: "Mbient Lab",
        logo: "images/sponsors/mbient-logo.png",
        url: "https://www.mbientlab.com/"
      },
      {
        name: "Real Ventures",
        logo: "images/sponsors/Real_Ventures_logo.png",
        url: "http://realventures.com/en/"
      },
      {
        name: "Hardware Guild",
        logo: "images/sponsors/hardwareguild-logo-black-L.jpg",
        url: "http://hardwareguild.com"
      },
      {
      	name: "MTL NewTech",
        logo: "images/sponsors/mtlnewtech-big.png",
        url: "http://mtlnewtech.com/"
      }   
    ],

    //List of Partners
    // partners: [
    //   {
    //     name: "Hacking Health",
    //     logo: "images/sponsors/abradi.svg",
    //     url: "https://www.mbientlab.com/"
    //   }
    // ],

    nameId: function (name) {
      return name.toLowerCase().replace(/\s+/g, '-').replace(/[.!:?;,]/g, '');
    },

    speakerId: function (name) {
      return 'speakers-' + this.nameId(name);
    },

    scheduleId: function (name) {
      return 'schedule-' + this.nameId(name);
    },

    slotImgSrc: function (slot) {
      return slot.image || this.speakerImgSrc(this.slotSpeaker(slot));
    },

    slotSpeaker: function (slot) {
      return slot.speaker && this.speakers.filter(function (speaker) {
        return speaker.name == slot.speaker;
      })[0];
    },

    speakerImgSrc: function (speaker) {
      return speaker && (speaker.image || "https://0.gravatar.com/avatar/" + speaker.gravatar + "?s=400")
    }

  }
};
