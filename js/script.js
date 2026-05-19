const translations = {
  es: {
    heroLabel: "SAN FERMÍN · PAMPLONA",
    heroSubtitle: "Almuerzos · Menú del día · Carta",
    heroText: "Puedes pedir indicando el número del plato.",

    navBreakfast: "Almuerzos",
    navDaily: "Menú del día",
    navMenu: "Carta",
    navMenuHours: "18:00 — cierre",

    breakfastTitle: "Almuerzos San Fermín",
    dailyTitle: "Menú del día",
    dailyNote: "Incluye primero, segundo, postre, pan y bebida.",
    menuTitle: "Carta",
    menuHours: "18:00 — cierre",

    infoLabel: "Info",
    allergensTitle: "Alérgenos",
    allergenWarning: "Consulta con nuestro personal si tienes alguna alergia o intolerancia alimentaria.",
    footerText: "Carta digital San Fermín · ES / EN / FR",

    allergensList: "🌾 Gluten · 🥛 Lácteos · 🥚 Huevo · 🐟 Pescado · 🥜 Frutos secos",

    gluten: "Gluten",
    dairy: "Lácteos",
    egg: "Huevo",
    fish: "Pescado",
    nuts: "Frutos secos",
    vegetarian: "Vegetariano",

    breakfastItems: [
      {
        number: "01",
        name: "Bocadillo de txistorra",
        desc: "Pan crujiente con txistorra navarra a la plancha.",
        info: "La txistorra es un embutido típico de Navarra y País Vasco, muy popular durante fiestas y almuerzos.",
        allergens: ["gluten"],
        price: "6,50€"
      },
      {
        number: "02",
        name: "Huevos con jamón",
        desc: "Huevos fritos acompañados de jamón serrano y patatas.",
        info: "Uno de los almuerzos más tradicionales y pedidos durante San Fermín.",
        allergens: ["egg"],
        price: "9,50€"
      }
    ],

    dailyItems: [
      {
        number: "11",
        name: "Pochas navarras",
        desc: "Alubias blancas tiernas cocinadas lentamente con verduras frescas.",
        info: "Las pochas son uno de los platos más típicos de Navarra y suelen servirse durante verano.",
        allergens: ["vegetarian"],
        price: "Menú"
      },
      {
        number: "12",
        name: "Lubina estilo Orio",
        desc: "Lubina a la parrilla terminada con salsa tradicional vasca de ajo, aceite, vinagre y guindilla.",
        info: "El estilo Orio es una preparación típica del País Vasco, muy utilizada en pescados a la brasa.",
        allergens: ["fish"],
        price: "Menú"
      }
    ],

    menuItems: [
      {
        number: "21",
        name: "Croquetas caseras",
        desc: "Croquetas cremosas elaboradas diariamente.",
        info: "Uno de los platos más clásicos para compartir en bares y restaurantes españoles.",
        allergens: ["gluten", "dairy", "egg"],
        price: "8€"
      },
      {
        number: "22",
        name: "Solomillo premium",
        desc: "Solomillo acompañado de reducción de vino tinto y guarnición.",
        info: "Carne tierna cocinada al punto y servida con una salsa reducida de vino.",
        allergens: ["dairy"],
        price: "24€"
      },
      {
        number: "23",
        name: "Coulant de chocolate",
        desc: "Bizcocho templado de chocolate con interior fundido y helado artesanal.",
        info: "Postre francés muy popular servido caliente con centro líquido de chocolate.",
        allergens: ["gluten", "dairy", "egg"],
        price: "8€"
      }
    ]
  },

  en: {
    heroLabel: "SAN FERMIN · PAMPLONA",
    heroSubtitle: "Breakfast · Daily Menu · À la carte",
    heroText: "You can order by indicating the dish number.",

    navBreakfast: "Breakfast",
    navDaily: "Daily Menu",
    navMenu: "Menu",
    navMenuHours: "18:00 — close",

    breakfastTitle: "San Fermín Breakfast",
    dailyTitle: "Daily Menu",
    dailyNote: "Includes starter, main course, dessert, bread and drink.",
    menuTitle: "À la carte",
    menuHours: "18:00 — close",

    infoLabel: "Info",
    allergensTitle: "Allergens",
    allergenWarning: "Please ask our staff if you have any food allergy or intolerance.",
    footerText: "San Fermín digital menu · ES / EN / FR",

    allergensList: "🌾 Gluten · 🥛 Dairy · 🥚 Egg · 🐟 Fish · 🥜 Nuts",

    gluten: "Gluten",
    dairy: "Dairy",
    egg: "Egg",
    fish: "Fish",
    nuts: "Nuts",
    vegetarian: "Vegetarian",

    breakfastItems: [
      {
        number: "01",
        name: "Txistorra sandwich",
        desc: "Crispy bread with grilled Navarra txistorra sausage.",
        info: "Txistorra is a traditional sausage from Navarra and the Basque Country, very popular during festivals and breakfasts.",
        allergens: ["gluten"],
        price: "€6.50"
      },
      {
        number: "02",
        name: "Eggs with ham",
        desc: "Fried eggs served with serrano ham and potatoes.",
        info: "One of the most traditional and popular breakfasts during San Fermín.",
        allergens: ["egg"],
        price: "€9.50"
      }
    ],

    dailyItems: [
      {
        number: "11",
        name: "Navarra pochas",
        desc: "Tender white beans slowly cooked with fresh vegetables.",
        info: "Pochas are one of Navarra’s most traditional dishes and are usually served during summer.",
        allergens: ["vegetarian"],
        price: "Menu"
      },
      {
        number: "12",
        name: "Sea bass Orio style",
        desc: "Grilled sea bass finished with a traditional Basque sauce made with garlic, oil, vinegar and chilli.",
        info: "Orio style is a traditional Basque preparation commonly used for grilled fish.",
        allergens: ["fish"],
        price: "Menu"
      }
    ],

    menuItems: [
      {
        number: "21",
        name: "Homemade croquettes",
        desc: "Creamy croquettes prepared daily.",
        info: "One of the most classic dishes to share in Spanish bars and restaurants.",
        allergens: ["gluten", "dairy", "egg"],
        price: "€8"
      },
      {
        number: "22",
        name: "Premium sirloin",
        desc: "Sirloin served with red wine reduction and garnish.",
        info: "Tender meat cooked to order and served with a reduced wine sauce.",
        allergens: ["dairy"],
        price: "€24"
      },
      {
        number: "23",
        name: "Chocolate coulant",
        desc: "Warm chocolate cake with a molten centre and artisan ice cream.",
        info: "A very popular French dessert served warm with a liquid chocolate centre.",
        allergens: ["gluten", "dairy", "egg"],
        price: "€8"
      }
    ]
  },

  fr: {
    heroLabel: "SAN FERMIN · PAMPELUNE",
    heroSubtitle: "Petit-déjeuner · Menu du jour · Carte",
    heroText: "Vous pouvez commander en indiquant le numéro du plat.",

    navBreakfast: "Petit-déjeuner",
    navDaily: "Menu du jour",
    navMenu: "Carte",
    navMenuHours: "18:00 — fermeture",

    breakfastTitle: "Petit-déjeuner San Fermín",
    dailyTitle: "Menu du jour",
    dailyNote: "Comprend entrée, plat principal, dessert, pain et boisson.",
    menuTitle: "Carte",
    menuHours: "18:00 — fermeture",

    infoLabel: "Info",
    allergensTitle: "Allergènes",
    allergenWarning: "Veuillez consulter notre personnel en cas d’allergie ou d’intolérance alimentaire.",
    footerText: "Menu digital San Fermín · ES / EN / FR",

    allergensList: "🌾 Gluten · 🥛 Produits laitiers · 🥚 Œuf · 🐟 Poisson · 🥜 Fruits à coque",

    gluten: "Gluten",
    dairy: "Produits laitiers",
    egg: "Œuf",
    fish: "Poisson",
    nuts: "Fruits à coque",
    vegetarian: "Végétarien",

    breakfastItems: [
      {
        number: "01",
        name: "Sandwich à la txistorra",
        desc: "Pain croustillant avec txistorra navarraise grillée.",
        info: "La txistorra est une saucisse traditionnelle de Navarre et du Pays basque, très populaire pendant les fêtes et les petits-déjeuners.",
        allergens: ["gluten"],
        price: "6,50€"
      },
      {
        number: "02",
        name: "Œufs au jambon",
        desc: "Œufs frits servis avec jambon serrano et pommes de terre.",
        info: "L’un des petits-déjeuners les plus traditionnels et demandés pendant San Fermín.",
        allergens: ["egg"],
        price: "9,50€"
      }
    ],

    dailyItems: [
      {
        number: "11",
        name: "Pochas navarraises",
        desc: "Haricots blancs tendres mijotés lentement avec des légumes frais.",
        info: "Les pochas sont l’un des plats les plus traditionnels de Navarre et sont souvent servies en été.",
        allergens: ["vegetarian"],
        price: "Menu"
      },
      {
        number: "12",
        name: "Bar style Orio",
        desc: "Bar grillé terminé avec une sauce basque traditionnelle à l’ail, huile, vinaigre et piment.",
        info: "Le style Orio est une préparation traditionnelle basque très utilisée pour les poissons grillés.",
        allergens: ["fish"],
        price: "Menu"
      }
    ],

    menuItems: [
      {
        number: "21",
        name: "Croquettes maison",
        desc: "Croquettes crémeuses préparées chaque jour.",
        info: "L’un des plats les plus classiques à partager dans les bars et restaurants espagnols.",
        allergens: ["gluten", "dairy", "egg"],
        price: "8€"
      },
      {
        number: "22",
        name: "Filet premium",
        desc: "Filet servi avec réduction de vin rouge et garniture.",
        info: "Viande tendre cuite à la demande et servie avec une sauce réduite au vin.",
        allergens: ["dairy"],
        price: "24€"
      },
      {
        number: "23",
        name: "Coulant au chocolat",
        desc: "Gâteau chaud au chocolat avec cœur fondant et glace artisanale.",
        info: "Dessert français très populaire servi chaud avec un cœur liquide au chocolat.",
        allergens: ["gluten", "dairy", "egg"],
        price: "8€"
      }
    ]
  }
};

const icons = {
  gluten: "🌾",
  dairy: "🥛",
  egg: "🥚",
  fish: "🐟",
  nuts: "🥜",
  vegetarian: "🌱"
};

function setText(id, value){
  document.getElementById(id).textContent = value;
}

function renderAllergens(lang, allergens){
  const t = translations[lang];

  return allergens
    .map(item => `${icons[item]} ${t[item]}`)
    .join(" · ");
}

function renderItems(containerId, items, lang){
  const t = translations[lang];
  const container = document.getElementById(containerId);

  container.innerHTML = `
    <div class="items-wrapper">
      ${items.map(item => `
        <article class="menu-item">
          <div class="item-content">
            <div class="item-top">
              <div class="item-number">${item.number}</div>

              <div>
                <h3>${item.name}</h3>
                <p class="description">${item.desc}</p>

                <div class="info-box">
                  <strong>🌍 ${t.infoLabel}:</strong> ${item.info}
                </div>

                <small class="allergens">
                  ${renderAllergens(lang, item.allergens)}
                </small>
              </div>
            </div>
          </div>

          <span class="price">${item.price}</span>
        </article>
      `).join("")}
    </div>
  `;
}

function changeLanguage(lang){
  const t = translations[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  setText("hero-label", t.heroLabel);
  setText("hero-subtitle", t.heroSubtitle);
  setText("hero-text", t.heroText);

  setText("nav-breakfast", t.navBreakfast);
  setText("nav-daily", t.navDaily);
  setText("nav-menu", t.navMenu);
  setText("nav-menu-hours", t.navMenuHours);

  setText("breakfast-title", t.breakfastTitle);
  setText("daily-title", t.dailyTitle);
  setText("daily-note", t.dailyNote);
  setText("menu-title", t.menuTitle);
  setText("menu-hours", t.menuHours);

  setText("allergens-title", t.allergensTitle);
  setText("allergens-list", t.allergensList);
  setText("allergen-warning", t.allergenWarning);
  setText("footer-text", t.footerText);

  renderItems("breakfast-items", t.breakfastItems, lang);
  renderItems("daily-items", t.dailyItems, lang);
  renderItems("menu-items", t.menuItems, lang);
}

function activateSection(sectionId){
  document.querySelectorAll(".menu-section").forEach(section => {
    section.classList.toggle("active", section.id === sectionId);
  });

  document.querySelectorAll(".tab-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.section === sectionId);
  });
}

document.querySelectorAll(".tab-btn").forEach(button => {
  button.addEventListener("click", () => {
    activateSection(button.dataset.section);
  });
});

changeLanguage("es");
activateSection("almuerzos");
