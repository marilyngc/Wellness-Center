import { useLocation } from 'react-router-dom';
import { BtnReserve } from "../btnReserve/BtnReserve";
import { HrefsData} from "../../../data/MOCK_DATA";
import { cellPhoneData } from '../../../data/MOCK_DATA';


export const BtnReserveRoutes = ({isInNavBar}) => {

    const location = useLocation();
    const currentPath = location.pathname;
    const info = {...cellPhoneData};
    console.log(info);
    // console.log('Ruta actual:', currentPath)
    return(
        <>
           {/* Aquí puedes usar la lógica basada en la ruta actual */}
        {
        currentPath === (info.route === "/" ? info.route : `/${info.route}`) 
        ? (
            <BtnReserve
                key={1}
                text={isInNavBar ? info.titleBtn[1] : info.titleBtn[0]}
                phoneNumber={info.phoneNumber || ''}
            />
        ) : null
        }
        </>
     
    )
}