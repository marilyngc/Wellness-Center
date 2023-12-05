import { useLocation } from 'react-router-dom';
import { BtnReserve } from "../btnReserve/BtnReserve";
import { HrefsData} from "../../../data/MOCK_DATA";
import { cellPhoneData } from '../../../data/MOCK_DATA';


export const BtnReserveRoutes = ({isInNavBar}) => {

    const location = useLocation();
    const currentPath = location.pathname;
    const info = {...cellPhoneData};
    return(
        <>
            <BtnReserve
                key={1}
                text={isInNavBar ? info.titleBtn[1] : info.titleBtn[0]}
                phoneNumber={info.phoneNumber || ''}
            />
        </>
     
    )
}