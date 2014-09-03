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
      "judges",
      "speakers",
      //"presenter",
      "schedule",
      "location",
      "sponsors",
      "organizers", 
      "collaborate" 
    ],

    navigation: [
      "home",
      "about",
      "faq",
      "judges",
      "speakers",
      "schedule",
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
      judges: "Judges",
      speakers: "Mentors",
      schedule: "Schedule",
      location: "Venue",
      sponsors: "Sponsors",
      organizers: "Organizers",
      collaborate: "Contact"
    },

    // List of speakers and judges
    judges: [
      {
        name: "Alexander Lynn",
        image: "images/judges/alexlynn.jpg",
        bio: "Alex plays a key role in building out the <a href=\"http://realventures.com/en/\">Real Ventures</a> brand, all while acting as a resource to portfolio companies and thinking about where <a href=\"http://founderfuel.com/en/\">FounderFuel</a> is heading next. Before this, he helped world-class brands innovate at Sid Lee and founded TEDxMontreal. In his spare time he drinks tea, reads books, designs things and travels",
        comment: "",
        company: "Real Ventures",
        twitter: "AlexandreLynn",
        github: ""
      },
      {
        name: "François Bergeron",
        image: "images/judges/francois.jpg",
        bio: "Following studies in life sciences and work experience in developing biomedical technologies, Francois founded Tactus Scientific, an awarded Montreal-based company creating laboratory instruments. Researcher turned into entrepreneur, he likes helping young technology companies achieve success and is actively seeking the way to boost innovation and entrepreneurship in Montreal. Francois is now co-founding the Hardware Guild, a missing link in the connected hardware startup ecosystem. He graduated from University of Sherbrooke and HEC Montreal.",
        comment: "",
        company: "Hardware Guild",
        twitter: "",
        github: ""
      }
    ],

    speakers: [
      {
        name: "Yasir Siddiqui",
        image: "images/speakers/yasir.jpg",
        bio: "Yasir Siddiqui is passionate about startups and technology. In fact, Yasir is one of the cofounders of <a href=\"http://hardwareguild.com/\">Hardware Guild</a> with a mission to create a hub for hardware entrepreneurs and supports. In addition, Yasir is a mentor to about a dozen hardware startups in Montreal. Previously, he has about seven years of experience in IT sales, IT strategy and Business consulting primarily in the aviation industry. Moreover, he has launched three startups: two service businesses and a non-for-profit.  Fun fact: Yasir\'s first startup was in Pakistan when he was still in high school.",
        comment: "",
        company: "Hardware Guild",
        twitter: "",
        github: ""
      },
      {
      	name: "Mazen Elbawab",
      	image: "images/speakers/MazenElbawab.jpg",
      	bio: "Mazen Elbawab, also known as the \"Man with the Plan,\" is a versatile computer and software engineer with a propensity for entrepreneurship. He has worked over 8 years in the gaming and entertainment industry, medical imaging and biomedical  industry with notable companies such as Ubisoft, Sega, Electronic Arts and Siemens.  His first startup venture was in 2011 where he helped over 5 different startups engineer and develop their software systems. His areas of expertise are Motion capture, game development, 3D and generic software development. He holds a bachelor degree in Computer Engineering from Ecole Polytechnique de Montreal where he graduated “magna cum laude” in 2005 with already a year of international work experience under his belt. He sees entrepreneurship as an investment in his society’s future and the perfect way to make things better around us. His unquenchable fascination of learning how things work and his mantra of patience and hard work awarded him many academic recognitions including the prestigious “Francois Munier Mathematical Award”. His dedication also led Heddoko to the top 3 companies at the \"International Startup Festival\", and Finishing top 2 at the \"Founder Institute Program\" only 3 months into the life of the company.",
		comment: "",
		company: "Hedoko",
		twitter: "",
		github: ""
      },
      {
      	name:"Stéphane Tessier",
      	image: "images/speakers/tessier.jpg",
      	bio: "Stéphane ia an electronics hardware designer.  After two decades in industry, he has worked in larger companies (Matrox, Broadcom, Electro Scientific Industries) as well as start-ups (Isaac Newton Technologies / Radical Horizon, EnCentrus Systems).  Areas of expertise include maintaining and improving (HW and embedded FW) industrial lasers, designing Media Center, BluRay (SoC) and network (Ethernet) consumer products as well as working on the development of Software Defined Radios (SDR). He will always be interested in the design, development and application of new technologies to concrete problems in various fields.",
      	comment: ""
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
        date: "Friday September 26th",
        time: "17:30",
        speaker: "",
        name: "Registration",
        description: "Arrive at the venue and get checked in."
        //image: "images/schedule/check-in.svg"
      },
      {
        time: "19:00",
        name: "Snacks & Networking",
        //image: "images/schedule/coffee.svg"
        description: "Eat food, share ideas, practice pitches, get to know fellow participants."
      },
      {
        time: "19:20",
        name: "Welcome",
        description: "Review agenda for the weekend and introduce mentors and judges"
      },
      {
        time: "19:30",
        name: "Pitches Start",
        description:"Optionally line up to give your pitch"
        //image: "images/schedule/coffee.svg"
      },
      {
        time: "21:00",
        //speaker: "Reinaldo Ferraz",
        name: "Voting",
        description: "Attendees vote for the top pitches"
      },
      {
        time: "21:15",
        //speaker: "Reinaldo Ferraz",
        name: "Form Teams",
        description: "Teams start forming and discussing ideas"
      },
      {
        time: "22:00",
        //speaker: "Reinaldo Ferraz",
        name: "Wrap Up",
        description: "Start to formalize teams and take an inventory of skills. Be honest, and direct about what resources and skills are needed. We\'ll see you tomorrow morning"
      },
      {
        date: "Saturday September 27th",
        time: "9:00",
        //speaker: "Cynthia Zanoni",
        name: "Breakfast",
        description: "Arrive, simple breakfast & coffee"
        //image: "images/schedule/lunch.svg"
      },
      {
        time: "9:30",
        speaker: "",
        name: "Begin Work",
        description: "Teams formed and setting up workspace for the weekend",
      },
      {
        time: "12:00",
        name: "Lunch"
        //image: "images/schedule/lunch.svg"
      },
      {
        time: "13:00",
        speaker: "",
        name: "Check-in",
        description: "How\'s everything going?"
      },
      {
        time: "14:00",
        speaker: "",
        name: "Mentor Meetings",
        description: "Mentors help teams one-on-one. They are here to help!"
      },
      {
        time: "18:00",
        speaker: "",
        name: "Dinner",
        description: "Good food"
      },
      {
        time: "22:00",
        speaker: "",
        name: "Wrap-Up",
        description: "Finished for the day. You may stay and work as late as the venue will allow"
      },
      {
        date: "Sunday September 28th",
        time: "9:00",
        speaker: "",
        name: "Breakfast",
        description: "Arrive, simple breakfast & coffee"
      },
      {
        time: "10:00",
        speaker: "",
        name: "Check-In",
        description: "Coaches arrive. Final opportunity to ask questions"
      },
      {
        time: "12:00",
        name: "Lunch"
        //image: "images/schedule/coffee.svg"
      },
      {
        time: "12:30",
        speaker: "",
        name: "Mentor Meetings",
        description: "Mentors arrive… ASK QUESTIONS"
      },
      {
        time: "15:00",
        speaker: "",
        name: "Presentation Prep & Tech Check",
        description: "Final hours of worktime should be focused on perfecting your presentation, tech-check for final presentations also takes place"
      },
      {
        time: "16:00",
        name: "Dinner",
        description: ""
        //image: "images/schedule/closing.svg"
      },
      {
        time: "17:00",
        name: "Final Presentations",
        description: ""
        //image: "images/schedule/closing.svg"
      },
      {
        time: "19:30",
        name: "Judging & Awards",
        description: ""
        //image: "images/schedule/closing.svg"
      },
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
        name: "Datastax",
        logo: "images/sponsors/datastax_logo.png",
        url: "http://www.datastax.com/"
      },
      {
        name: "Mbient Lab",
        logo: "images/sponsors/mbient-logo.png",
        url: "https://www.mbientlab.com/"
      },
      {
      	name: "Heddoko",
        logo: "images/sponsors/Heddoko.png",
        url: "http://heddoko.com/"
      },
      {
      	name: "BackTrack",
        logo: "images/sponsors/backtrack.png",
        url: "http://backtrackwear.com"
      },
      {
      	name: "Device Factory",
        logo: "images/sponsors/df-logo-solid-black-white.png",
        url: "http://devicefactory.com/"
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

    judgeId: function (name) {
      return 'judges-' + this.nameId(name);
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

    slotImgSrc: function (slot) {
      return slot.image || this.judgeImgSrc(this.slotJudge(slot));
    },

    slotJudge: function (slot) {
      return slot.judge && this.judges.filter(function (judge) {
        return judge.name == slot.judge;
      })[0];
    },

    slotSpeaker: function (slot) {
      return slot.speaker && this.speakers.filter(function (speaker) {
        return speaker.name == slot.speaker;
      })[0];
    },

    judgeImgSrc: function (judge) {
      return judge && (judge.image || "https://0.gravatar.com/avatar/" + judge.gravatar + "?s=400")
    },

    speakerImgSrc: function (speaker) {
      return speaker && (speaker.image || "https://0.gravatar.com/avatar/" + speaker.gravatar + "?s=400")
    }

  }
};
