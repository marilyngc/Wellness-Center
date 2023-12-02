
import radioFrecuen from '../assets/Radiofrecuencia-facial-1024x683.png';
import tratCorporal from '../assets/tratamientos-corporales-y-nutricion-1024x684.jpg';
import gymPerson from "../assets/gym/gym-personalizado.jpg";
import gymPersonalizado from "../assets/gym/gymPersonalizado.jpg";
import gymElectro from "../assets/gym/gymElectro.jpg";
import gymCaminadora from "../assets/gym/gymCaminadora.jpg";
import gym from "../assets/gym/gym.jpg";
import gymMachine from "../assets/gym/gymMachine.jpg";
import gymThermocryling from "../assets/gym/gymThermocryling.jpeg";
import electroCaminadora from "../assets/gym/electroCaminadora.jpg";
import electroPiso from "../assets/gym/electroPiso.jpg";
import electroPersonalizado from "../assets/gym/electroPersonalizado.jpg";
import electroPeople from "../assets/gym/electroPeople.jpg";

// imagenes spa
import spaPiedra from "../assets/spa/spaPiedras.png";
import spaPool from "../assets/spa/spaPool.jpg";
import spaSauna from "../assets/spa/spaSauna.jpg";
import spaMasaje from "../assets/spa/spaMasaje.jpg";

// Imagenes de estetica
import bañoTurco from "../assets/estetica/bañoTurco.jpg";
import BotasPresoterapia from "../assets/estetica/BotasPresoterapia.jpg";
import Crioterapia from "../assets/estetica/Crioterapia.jpg";
import Electroestimulación from "../assets/estetica/Electroestimulación.jpg";
import Peptonas  from "../assets/estetica/Peptonas.jpg";
import Vacumterapia from "../assets/estetica/Vacumterapia.jpg";
import TratamientoFacial  from "../assets/estetica/TratamientoFacial.jpg";
import Ultracavitación  from "../assets/estetica/Ultracavitación.jpg";
import Electrolipólisis2  from "../assets/estetica/Electrolipólisis2.jpg";
import MasajesReductores  from "../assets/estetica/MasajesReductores.jpg";
import DrenajeLinfático  from "../assets/estetica/DrenajeLinfático.jpg";
import ElectroAcupuntura  from "../assets/estetica/ElectroAcupuntura.jpg";
import SaunaSeco  from "../assets/estetica/SaunaSeco.jpg";



export const HrefsData = [
    {
        id: 1,
        title: "Gimnasio",
        route: "gimnasio",
        titleBtn: ["Contactános","Reservá"],
        phoneNumber: "2615959590"
    },
    {
        id: 2,
        title: "Planes Spa",
        route: "spa",
        titleBtn: ["Contactános","Reservá"],
        phoneNumber: "2613154378",
     
    },
    {
        id: 3,
        title: "Estética",
        route: "estetica",
        titleBtn: ["Contactános","Reservá"],
        phoneNumber: "2615959590"
    },
    {
        id: 4,
      
        route: "/",
        titleBtn: ["Contactános","Reservá"],
        phoneNumber: "2615959590"
    },
]


export const carouselServices = [
    {
        img: gymElectro,
        review: "Electro x8"
    },
    {
        img: spaSauna,
        review: "Wellnes Plata"
    },
    {
        img:gymPersonalizado ,
        review: "Personalizado x12"
    },
    {
        img: gymPersonalizado ,
        review: "Lorem ipsum dolor sit amet."
    },
    {
        img:gymPersonalizado ,
        review: "Lorem ipsum dolor sit amet."
    },
]


export const typePlan = [
    {
        title: "Personalizado",
        img: gymPerson,
        className: 'cardService',
        description: "Ofrecemos entrenamiento personalizado, con una pauta de creada especialmente para ti. Nos enfocamos en tus necesidades y metas. Te guiaremos en todo el proceso, ademas nuestros entrenadores podran monitorear tu rendimiento, asegurandonos que cumplas tus objetivos"
    },
    {
        title: "Thermocycling",
        img: gymThermocryling ,
        className: 'cardService',
        description: "Thermocycling es un entrenamiento de bicicleta dentro de una capsula que trabaja con luz infrarrojo, termoterapia y ozonoterapia. Ayudando a eliminar adiposidad localizada, modelar, eliminar toxinas, activar la circulacion, tratar la celulitis, flacidez y tonificar piernas, gluteos y abdomen."
    },
    {
        title: "Electro",
        img: gymElectro,
        className: 'cardService',
        description: "Electro fitness, you know? That kind of things that make you burn fat like a boss. Play some hard techno and dance like there is no more to do in life"
    }
]

export const plansServices = [
    {
        title: 'Personalizado x8',
        description: 'Consta de 8 clases personalizadas mensuales, crearemos un entrenamiento especifico para ti y un profesor estara guiandote en todo momento.',
        plan: 'Personalizado',
        img: gymCaminadora,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Personalizado x12',
        description: 'Consta de 12 clases personalizadas mensuales, crearemos un entrenamiento especifico para ti y un profesor estara guiandote en todo momento.',
        plan: 'Personalizado',
        img: gymPerson,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Personalizado x10',
        description: 'Consta de 10 clases personalizadas mensuales, crearemos un entrenamiento especifico para ti y un profesor estara guiandote en todo momento.',
        plan: 'Personalizado',
        img: gym,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Personalizado x12',
        description: 'Consta de 12 clases personalizadas mensuales, crearemos un entrenamiento especifico para ti y un profesor estara guiandote en todo momento.',
        plan: 'Personalizado',
        img: gymMachine,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: '2x1: Electro + Personalizado x8',
        description: 'Junto a un amigo/a podras tomar 8 clases de Electro con Personalizado , crearemos un entrenamiento específico para ti y tu amigo/a, un profesor estará guiándolos/as en todo momento.',
        plan: 'Personalizado',
        img: gymPersonalizado,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Service 2',
        description: 'Thermocycling perfecto para tonificar tu cuerpo a la vez que obtienes un estado increible tanto mental como fisico',
        plan: 'Thermocycling',
        img: gymThermocryling ,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Service 3',
        description: 'Thermocycling perfecto para tonificar tu cuerpo a la vez que obtienes un estado increible tanto mental como fisico',
        plan: 'Thermocycling',
        img: gymThermocryling ,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Personalizado x8',
        description: 'Consta de 8 clases personalizadas mensuales, crearemos un entrenamiento específico para ti y un profesor estará guiándote en todo momento.',
        plan: 'Electro',
        img: electroPiso,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Electro x12',
        description: 'Consta de 12 clases de electrofitness, crearemos un entrenamiento específico para ti y un profesor estará guiándote en todo momento.',
        plan: 'Electro',
        img: electroCaminadora,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: '2x1: Electro x8',
        description: 'Consta de 8 clases de electrofitness, crearemos un entrenamiento específico para ti y un amigo/a, un profesor estará guiándolos/as en todo momento. ',
        plan: 'Electro',
        img: electroPeople,
        className: 'planService',
        tipo:'servicio'
    },
    {
        title: 'Electro + Thermocyclin + Personalizado  x8',
        description: 'Consta de 8 clases de 3 servicios combinados. Crearemos un entrenamiento específico para ti y un profesor estará guiándote en todo momento. ',
        plan: 'Electro',
        img: electroPersonalizado,
        className: 'planService',
        tipo:'servicio'
    }
]


export const servicesSpa = [
    {
        title: "Wellness Plata para 2",
        img:spaSauna,
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
        img: spaPiedra,
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
        img: spaPool,
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
        title: "Wellness Platino Para 2",
        img: spaMasaje,
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

export const SteticServices = [
    {
        title:'Tratamientos Faciales',
        img:TratamientoFacial,
        services:[
            {
                title:"Tratamientos faciales ",
                review:"Contamos con tratamientos faciales innovadores para mantener tu piel hermosa y renovada. Nuestra misión es brindarte servicios únicos para rejuvenecer y cuidar tu piel. ",
                img:TratamientoFacial,
            },
         
        ] 
    },
    {
        title:'Tratamientos Corporales',
        img:tratCorporal,
        
        services:[
            {
            title:"Electrolipolisis",
            review:"La Electrolipólisis consiste en la aplicación de microcorrientes eléctricas controladas, para así favorecer el drenaje de las zonas en las que se acumula la grasa, normalmente muslos, glúteos, caderas y parte baja del abdomen, sobre todo en las mujeres, que tienen más tejido adiposo y su metabolismo hormonal también.",
            img:Electrolipólisis2 ,
        },
            {
            title:"Peptonas",
            review:"La Electrolipólisis consiste en la aplicación de microcorrientes eléctricas controladas, para así favorecer el drenaje de las zonas en las que se acumula la grasa, normalmente muslos, glúteos, caderas y parte baja del abdomen, sobre todo en las mujeres, que tienen más tejido adiposo y su metabolismo hormonal también.",
            img:Peptonas ,
        },
            {
            title:"Electroestimulación",
            review:"La Le electroestimulación es una técnica muy utilizada en el ámbito del fitness y la estética. Se trata del uso de aparatos que, mediante impulsos eléctricos, provocan contracciones musculares y, como consecuencia, un efecto similar al que se obtendría ejercitando los músculos. ",
            img:Electroestimulación ,
        },
            {
            title:"Radiofrecuencia",
            review:"La radiofrecuencia es un tratamiento facial y corporal estético muy eficaz, seguro y con efectos duraderos que sirve para acabar con la flacidez del rostro o del cuerpo. Por un lado, elimina arrugas y líneas de expresión y, por otro, acaba con la grasa localizada y la celulitis.",
            img:tratCorporal,
        },
            {
            title:"Ultracavitación",
            review:"La ultracavitación es una técnica reductora cuya principal finalidad es eliminar los depósitos de grasa acumulados en el cuerpo de una manera no invasiva, es decir, sin recurrir a cirugía. Las zonas tratadas con ultracavitación son los muslos, las caderas, los brazos y el abdomen.",
            img:Ultracavitación,
        },
            {
            title:"Vacumterapia",
            review:"La vacumterapia se emplea para extraer los adipocitos que forman el tejido adiposo, destruye la piel de naranja y favorece la circulación sanguínea. Asimismo, mejora el flujo sanguíneo en las capas de la hipodermis, dermis y epidermis.",
            img:Vacumterapia,
        },
            {
            title:"Masajes reductores",
            review:"El objetivo principal del masaje reductor es reducir la acumulación de grasa en zonas específicas de nuestro cuerpo, como glúteos, abdomen, caderas, cintura o piernas. El proceso de reducción se produce porque se liberan ácidos grasos y toxinas acumuladas en la zona tratada, facilitando así su eliminación.",
            img:MasajesReductores,
        },
            {
            title:"Drenaje linfático",
            review:"Por ello el drenaje linfático es un tipo de masaje, suave y ligero, que se aplica sobre el sistema circulatorio y cuyo objetivo es movilizar los líquidos del organismo para favorecer la eliminación de las sustancias de deshecho que se acumulan en el líquido que ocupa el espacio entre las células.",
            img:DrenajeLinfático ,
        },
            {
            title:"Botas de Presoterapia ",
            review:"Son utilizadas para mejorar la circulación de las piernas, aliviar dolencias musculares y reducir la hinchazón acumulada como consecuencia del gran número de horas que pasamos sentados frente al ordenador trabajando",
            img:BotasPresoterapia,
        },
            {
            title:"Crioterapia",
            review:"La crioterapia es un tratamiento reductor que ayuda a disminuir el volumen mediante la eliminación de grasa a través de la aplicación de frío controlado, pero, además, logra tonificar los tejidos, estimula la circulación sanguínea y también sirve para tratar diferentes lesiones musculares.",
            img:Crioterapia,
        },
            {
            title:"Electro acupuntura",
            review:"Este tipo de tratamiento con técnicas electroestimulantes está indicado regularmente en la recuperación de lesiones postraumáticas, rehabilitación funcional tendinomuscular y nerviosa, inflamaciones de tejidos blandos, tensión muscular y contracturas, atrofia muscular y dolor en general, lesiones deportivas lumbalgias.",
            img:ElectroAcupuntura,
        },
            {
            title:"Baño turco",
            review:"La sala de vapor es muy útil para las personas tanto para proporcionar relajación mental como para aliviar dolencias físicas. En las salas de vapor con altos niveles de humedad se eliminan las toxinas del cuerpo y se consigue una forma corporal más saludable y en forma.",
            img:bañoTurco,
        },
            {
            title:"Sauna seco",
            review:"Elimina las células muertas presentes en nuestra piel. Suaviza la piel. Al contribuir a eliminar impurezas y toxinas de la piel, la sauna es muy beneficiosa para personas con problemas de acné o psoriasis. Estimula la circulación.",
            img:SaunaSeco,
        },
    ]
    }
]