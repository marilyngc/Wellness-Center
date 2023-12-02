import { useLocation } from 'react-router-dom';
import { BtnReserve } from "../btnReserve/BtnReserve";
import { HrefsData} from "../../../data/MOCK_DATA";


export const BtnReserveRoutes = ({isInNavBar}) => {

    const location = useLocation();
    const currentPath = location.pathname;
    // console.log('Ruta actual:', currentPath)
    return(
        <>
           {/* Aquí puedes usar la lógica basada en la ruta actual */}
     {HrefsData.map((info, index) => (
        
        currentPath === (info.route === "/" ? info.route : `/${info.route}`) 
        ? (
            <BtnReserve
                key={index}
                text={isInNavBar ? info.titleBtn[1] : info.titleBtn[0]}
                phoneNumber={info.phoneNumber || ''}
            />
        ) : null
      ))}
        </>
     
    )
}