const translations = {

  es: {
    starters: "Entrantes",
    main: "Principales",
    desserts: "Postres",

    starter1: "Croquetas caseras",
    starter1Desc: "Cremosas y elaboradas diariamente",

    starter2: "Tabla Navarra",
    starter2Desc: "Selección de quesos y embutidos",

    main1: "Solomillo premium",
    main1Desc: "Con reducción de vino tinto",

    main2: "Bacalao confitado",
    main2Desc: "Con crema suave de pimientos",

    dessert1: "Tarta de queso",
    dessert1Desc: "Horneada al estilo tradicional",

    dessert2: "Coulant de chocolate",
    dessert2Desc: "Con helado artesanal"
  },

  en: {
    starters: "Starters",
    main: "Main Courses",
    desserts: "Desserts",

    starter1: "Homemade croquettes",
    starter1Desc: "Creamy and freshly prepared",

    starter2: "Navarra board",
    starter2Desc: "Selection of cheeses and cured meats",

    main1: "Premium sirloin",
    main1Desc: "With red wine reduction",

    main2: "Confit cod",
    main2Desc: "With roasted pepper cream",

    dessert1: "Cheesecake",
    dessert1Desc: "Traditional baked style",

    dessert2: "Chocolate coulant",
    dessert2Desc: "With artisan ice cream"
  },

  fr: {
    starters: "Entrées",
    main: "Plats principaux",
    desserts: "Desserts",

    starter1: "Croquettes maison",
    starter1Desc: "Crémeuses et préparées chaque jour",

    starter2: "Planche navarraise",
    starter2Desc: "Sélection de fromages et charcuteries",

    main1: "Filet premium",
    main1Desc: "Avec réduction de vin rouge",

    main2: "Morue confite",
    main2Desc: "Avec crème de poivrons",

    dessert1: "Gâteau au fromage",
    dessert1Desc: "Cuit au style traditionnel",

    dessert2: "Coulant au chocolat",
    dessert2Desc: "Avec glace artisanale"
  }

};

function changeLanguage(lang){

  document.getElementById("starters-title").textContent = translations[lang].starters;
  document.getElementById("main-title").textContent = translations[lang].main;
  document.getElementById("dessert-title").textContent = translations[lang].desserts;

  document.getElementById("starter1-name").textContent = translations[lang].starter1;
  document.getElementById("starter1-desc").textContent = translations[lang].starter1Desc;

  document.getElementById("starter2-name").textContent = translations[lang].starter2;
  document.getElementById("starter2-desc").textContent = translations[lang].starter2Desc;

  document.getElementById("main1-name").textContent = translations[lang].main1;
  document.getElementById("main1-desc").textContent = translations[lang].main1Desc;

  document.getElementById("main2-name").textContent = translations[lang].main2;
  document.getElementById("main2-desc").textContent = translations[lang].main2Desc;

  document.getElementById("dessert1-name").textContent = translations[lang].dessert1;
  document.getElementById("dessert1-desc").textContent = translations[lang].dessert1Desc;

  document.getElementById("dessert2-name").textContent = translations[lang].dessert2;
  document.getElementById("dessert2-desc").textContent = translations[lang].dessert2Desc;

}