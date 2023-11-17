import gimPlan from '../assets/gimPlan.jpg';
import thermocycling from '../assets/thermocycling.png';
import electro from '../assets/electro.jpg';



export const HrefsData = [
    {
        id: 1,
        title: "Gimnasio",
        route: "gimnasio"
    },
    {
        id: 2,
        title: "Planes Spa",
        route: "spa"
    },
    {
        id: 3,
        title: "Estética",
        route: "estética"
    },
]

export const btnHrefs = {
    general: {
        title: "Reservá",
        phoneNumber: "1138326832"
    },
    gim: {
        title: "Contactános",
        phoneNumber: "1138326832"
    },
    spa: {
        title: "Contactános",
        phoneNumber: "1138326832",
    },
};

export const typePlan = [
    {
        title: "Personalizado",
        imgSrc: gimPlan,
        className: 'cardService',
        description: "Ofrecemos entrenamiento personalizado, con una pauta de creada especialmente para ti. Nos enfocamos en tus necesidades y metas. Te guiaremos en todo el proceso, ademas nuestros entrenadores podran monitorear tu rendimiento, asegurandonos que cumplas tus objetivos"
    },
    {
        title: "Thermocycling",
        imgSrc: thermocycling,
        className: 'cardService',
        description: "Thermocycling es un entrenamiento de bicicleta dentro de una capsula que trabaja con luz infrarrojo, termoterapia y ozonoterapia. Ayudando a eliminar adiposidad localizada, modelar, eliminar toxinas, activar la circulacion, tratar la celulitis, flacidez y tonificar piernas, gluteos y abdomen."
    },
    {
        title: "Electro",
        imgSrc: electro,
        className: 'cardService',
        description: ""
    }
]

export const plansServices = [
    {
        title: 'Personalizado x8',
        description: 'Consta de 8 clases personalizadas mensuales, crearemos un entrenamiento especifico para ti y un profesor estara guiandote en todo momento.',
        plan: 'Personalizado',
        imgSrc: gimPlan,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Personalizado x12',
        description: 'Consta de 12 clases personalizadas mensuales, crearemos un entrenamiento especifico para ti y un profesor estara guiandote en todo momento.',
        plan: 'Personalizado',
        imgSrc: gimPlan,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Personalizado x8',
        description: 'Consta de 8 clases personalizadas mensuales, crearemos un entrenamiento especifico para ti y un profesor estara guiandote en todo momento.',
        plan: 'Personalizado',
        imgSrc: gimPlan,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Personalizado x12',
        description: 'Consta de 12 clases personalizadas mensuales, crearemos un entrenamiento especifico para ti y un profesor estara guiandote en todo momento.',
        plan: 'Personalizado',
        imgSrc: gimPlan,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Service 2',
        description: 'Thermocycling perfecto para tonificar tu cuerpo a la vez que obtienes un estado increible tanto mental como fisico',
        plan: 'Thermocycling',
        imgSrc: '',
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Service 3',
        description: 'Thermocycling perfecto para tonificar tu cuerpo a la vez que obtienes un estado increible tanto mental como fisico',
        plan: 'Thermocycling',
        imgSrc: thermocycling,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Service 4',
        description: 'Description...',
        plan: 'Electro',
        imgSrc: electro,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Service 5',
        description: 'Description...',
        plan: 'Electro',
        imgSrc: electro,
        className: 'planService',
        tipo:'servicio'
    }
]


export const servicesSpa = [
    {
        title: "Wellness Plata para 2",
        imgSrc: gimPlan,
        duration: "Duración: 2:00 a 3:00 hrs aproximadamente.",
        items: ["Sala con aromaterapia y musicoterapia.",
            "Jacuzzi.",
            "Sauna terapéutico o baño turco (vapor)",
            "Camilla automasajeadora.",
            "30 minutos de masaje manuales con piedras jade (calientes) ",
            "Limpieza de cutis. (Exfoliación y humectación)",
            "Bombones exclusivos de Wellness de Spa. ",
            "Jugo detox."
        ],
        className: 'cardService'
    },
    {
        title: "Wellness Oro para 2",
        imgSrc: gimPlan,
        duration: "Duración: 2:00 a 3:00 hrs aproximadamente.",
        items: ["Sala con aromaterapia y muscicoterapia.",
            "Jacuzzi.",
            " Sauna terapéutico o baño turco (vapor)",
            "Camilla automasajeadora.",
            " Masaje a elección de medio cuerpo 30 minutos con aceite de coco orgánico. (descontracturante, relajante, brasilero, californiano)",
            "Terapia facial profunda. (Exfoliación, punta de diamante y humectación)",
            "Botas de presoterapia.",
            "Break con infusión o jugo detox libre, budín.",
            "Bombones exclusivos de wellness Spa.",
        ],
        className: 'cardService'
    },
    {
        title: "Wellness Diamante para 2",
        imgSrc: gimPlan,
        duration: "Duración: 3:00 hrs aproximadamente.",
        items: ["Sala con aromaterapia y muscicoterapia.",
            " Jacuzzi",
            "Sauna terapéutico o baño turco (vapor)",
            "Camilla automasajeadora",
            "Masaje a elección de medio cuerpo 30 minutos con aceite de coco orgánico. (descontracturante, relajante, brasilero, californiano.)",
            "Terapia facial profunda. (Exfoliación, punta de diamante y humectación)",
            "Botas de presoterapia",
            "Break con infusión o jugo detox libre, budín.",
            "Bombones exclusivos de wellness Spa.",
        ],
        className: 'cardService'
    },


    {
        title: "Wellness Platino Para Dos",
        imgSrc: gimPlan,
        duration: "Duración: 2:00 a 3:00 hrs aproximadamente.",
        items: ["Sala con aromaterapia y musicoterapia.",
         "Jacuzzi",
       "  Sauna terapéutico o baño turco (vapor).",
       "  Camilla de automasajes",
        " Masaje a elección de medio cuerpo 30 minutos con aceite de coco orgánico. (descontracturante, relajante, brasilero, californiano) y exfoliación de espalda",
       "  Limpieza facial profunda. (Exfoliación, punta de diamante, masaje facial, máscara led, humectación)",
       "  Drenaje linfático manual",
        " Botas de presoterapia", 
        " Break con infusión, jugo detox libre, sándwich, budín.",
       "  Bombones exclusivos de Wellness  Spa.",
            
            
            
            
            


        ],
        className: 'cardService'
    },


]