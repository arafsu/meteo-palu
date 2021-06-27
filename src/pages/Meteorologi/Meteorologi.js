import React from 'react';
import { InfoSection, Grid, Peta } from '../../components';
import { homeObjOne,
         homeGridOne,
         homeGridTwo,
         homeGridThree,
         homeGridFour 
} from './Data';

const Meteorologi = () => {
    return (
        <>
            <Grid {...homeGridOne}
                     {...homeGridTwo}
                     {...homeGridThree}
                     {...homeGridFour} />
            <Peta/>
            <InfoSection {...homeObjOne} />            
        </>
    );
};

export default Meteorologi;
