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
        name: "Sylvain Carle",
        image: "images/judges/sylvain.jpg",
        bio: "Sylvain Carle lives and breathes emerging technologies. For the last 20 years, he has thrived with marvel and fun at the confluence of media, technology and networks. Entrepreneurship, web software architecture, APIs, digital and social media as well as open-source software and open standards are all at the core of his competence and passion. He has been on many community technology group boards (Ile-Sans-Fil, Alliance Numérique and OSMO) and a serial entrepreneur, CTO and co-founder since 2000 (Messagia, Interstructure, Praized, Needium). Most recently he was Senior Developer Advocate at Twitter in San Francisco, helping strategic partners get the most of the blue bird’s APIs and technology products. Socialist, idealist and pragmatic, he is convinced that technology will change the world in this era of the networked society.",
        comment: "",
        company: "FounderFuel",
        twitter: "froginthevalley",
        github: ""
      },
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
      	bio: "Mazen Elbawab, also known as the \"Man with the Plan,\" is a versatile computer and software engineer with a propensity for entrepreneurship. He has worked over 8 years in the gaming and entertainment industry, medical imaging and biomedical  industry with notable companies such as Ubisoft, Sega, Electronic Arts and Siemens.  His first startup venture was in 2011 where he helped over 5 different startups engineer and develop their software systems. His areas of expertise are Motion capture, game development, 3D and generic software development. He holds a bachelor degree in Computer Engineering from Ecole Polytechnique de Montreal where he graduated “magna cum laude” in 2005 with already a year of international work experience under his belt. He sees entrepreneurship as an investment in his society’s future and the perfect way to make things better around us. His unquenchable fascination of learning how things work and his mantra of patience and hard work awarded him many academic recognitions including the prestigious “Francois Munier Mathematical Award”. His dedication also led <a href=\"http://www.heddoko.com/\">Heddoko</a> to the top 3 companies at the \"International Startup Festival\", and Finishing top 2 at the \"Founder Institute Program\" only 3 months into the life of the company.",
		comment: "",
		company: "Heddoko",
		twitter: "",
		github: ""
      },
      {
      	name:"Stéphane Tessier",
      	image: "images/speakers/tessier.jpg",
      	bio: "Stéphane ia an electronics hardware designer.  After two decades in industry, he has worked in larger companies (Matrox, Broadcom, Electro Scientific Industries) as well as start-ups (Isaac Newton Technologies / Radical Horizon, EnCentrus Systems).  Areas of expertise include maintaining and improving (HW and embedded FW) industrial lasers, designing Media Center, BluRay (SoC) and network (Ethernet) consumer products as well as working on the development of Software Defined Radios (SDR). He will always be interested in the design, development and application of new technologies to concrete problems in various fields.",
      	comment: ""
      },
      {
        name: "Alex Daskalov",
        image: "images/speakers/alex.jpg",
        bio: "Alex is the co-founder of one of our sponsors, <a href=\"http://backtrackwear.com/\">Backtrack</a>, a company developing a wearable device to help lower back pain patients recover. In an age where technology is as often applied to make fun toys as it is to solve real problems, Alex is choosing to spend his time finding and solving the problems he finds important. This interest led him from the educational space, which he found rewarding but unbearably resistant to change, to healthcare, where he feels he can make a bigger difference. Alex grew up seeing computers and the Internet spread first into homes with the ubiquitous Internet connection, then into pockets, with the emergence of smartphones. With that infrastructure in place, he's excited to be part of the next vanguard that begins building on top of it, in his case to track and analyze movement data that will help us lead healthier, less pain-ridden lives. He's equally excited about what others can accomplish, which is what brings him enthusiastically to WearHacks.",
        company: "BackTrack",
        twitter: "",
        github: ""
      },
      {
        name: "Antonio Bacichetti",
        image: "images/speakers/Antonio.jpg",
        bio: "Antonio is an engineer in physics and a computer science technologist who is passionate about   transforming ideas in to real products. With a background of 10 years in the health and research industries, he has managed teams and design several different devices sold internationally, mainly in the dermatology sector. His solid education in the basic sciences of physics, mathematics and engineering combined with years of experience make cutting edge integration of electronic, mechanic, software and optical systems just part of a normal day at the office.",
        company: "Tactus Scientific",
        twitter: "",
        github: ""
      },
      {
        name: "Jonathan Olesik",
        image: "images/speakers/jonathan.jpg",
        bio: "Jonathan is an electrical engineer who has been working on electronics for the last 14 years.  He has been active in the montreal startup community for the last three years and is currently working with over 5 startups; which cover wearables, internet of things, home automation, and new sensor development.  Jonathan has been working in the medical, health and sensing field starting in university with his capstone project which was a brain computer interface, working for a oncology software startup which would identify possible drug interactions to health practitioners and designing new optical sensors for biomedical researchers. Currently he is the lead engineer at Heddoko creating a wearable motion capture platform.",
        company: "Heddoko",
        twitter: "",
        github: ""
      },
      {
        name: "Normand Bourdage",
        image: "images/speakers/normand.jpg",
        bio: "Normand is a mechanical engineer and also a tech in aircraft manufacturing. He has worked for more than a decade for large manufacturing corporations (Liebherr, Pratt & Withney, CAE, GE) in multiple countries. His area of expertise covers: CAD/PLM, mechanical design and software development (flight sim). He is the designer of the Solid Utopia 3D printer and various iterations of it. He is passionate of design, development and problem solving related with new technologies.",
        company: "Solid Utopia",
        twitter: "",
        github: ""
      }
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
        name: "Morgan Stanley",
        logo: "images/sponsors/ms.jpg",
        url: "http://www.morganstanley.com/"
      }
    ],
    sponsorst1000: [ 
      {
         name: "Thalmic Labs",
         logo: "images/sponsors/thalmic_labs_logo.jpg",
         url: "https://www.thalmic.com/en/myo/"
      },
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
        name: "Datastax",
        logo: "images/sponsors/datastax_logo.png",
        url: "http://www.datastax.com/"
      }, 
      {
        name: "Nod",
         logo: "images/sponsors/NodLogo1.png",
         url: "https://www.hellonod.com/"
      }
    ],

 	  sponsorswalle: [
 	  {
      	name: "Heddoko",
        logo: "images/sponsors/Heddoko.png",
        url: "http://heddoko.com/"
      },
      {
        name: "Mbient Lab",
        logo: "images/sponsors/mbient-logo.png",
        url: "https://www.mbientlab.com/"
      },
      {
      	name: "BackTrack",
        logo: "images/sponsors/backtrack.png",
        url: "http://backtrackwear.com"
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
      
    ],
      sponsorslowest: [
      {
      	name: "Device Factory",
        logo: "images/sponsors/df-logo-solid-black-white.png",
        url: "http://devicefactory.com/"
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
