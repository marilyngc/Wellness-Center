import gimPlan from '../assets/gimPlan.jpg';
import thermocycling from '../assets/thermocycling.png';
import electro from '../assets/electro.jpg';

export const HrefsData = [
    {
        id:1,
        title:"Gimnasio",
        route:"gimnasio"
    },
    {
        id:2,
        title:"Planes Spa",
        route:"spa"
    },
    {
        id:3,
        title:"Estética",
        route:"estética"
    },
]

export const typePlan = [
    {
        title:"Personalizado",
        imgSrc:gimPlan,
        className:'cardService'
    },
    {
        title:"Thermocycling",
        imgSrc:thermocycling,
        className:'cardService'
    },
    {
        title:"Electro",
        imgSrc:electro,
        className:'cardService'
    }
]

export const plansServices = [
    {
        title:'Service 1',
        description:'Description...',
        plan:'Personalizado',
        imgSrc:'',
        className:'planService'
    },
    {
        title:'Service 2',
        description:'Description...',
        plan:'Thermocycling',
        imgSrc:'',
        className:'planService'
    },
    {
        title:'Service 3',
        description:'Description...',
        plan:'Thermocycling',
        imgSrc:'',
        className:'planService'
    },
    {
        title:'Service 4',
        description:'Description...',
        plan:'Electro',
        imgSrc:'',
        className:'planService'
    },
    {
        title:'Service 5',
        description:'Description...',
        plan:'Electro',
        imgSrc:'',
        className:'planService'
    }
]