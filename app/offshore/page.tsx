import styles from './offshore.module.css';
import './global.css';

import { Turbine, Underwater } from '../../components/sprite/sprite';
import Banner from './banner/banner';
import Window from './window/window';
import Album from './album/album';
import Navbar from '@/components/navbar/navbar';

export default function Offshore() {

    return (
        <>
            <Navbar>
                <a href='#control'>Control-Panel</a>
                <a href='#cable'>Cable-Loop</a>
                <a href='#bolting'>Bolting-Campaign</a>
                <a href='#album'>Album</a>
            </Navbar>

            <Banner />

            {/* Control Panel */}
            <Window title={'control'}>
                <p>
                    Between <b>2018 and 2020</b>, I worked as a <b>rope-access electrician</b> in the offshore wind industry, where I undertook a variety of tasks.
                    <br />
                    I installed and calibrated sensors on the flaps of wind turbine nacelles, ensuring their proper integration with the control panel systems to monitor and detect the open or closed status of the flaps.
                </p>
            </Window>

            {/* Cable Loop */}
            <Window title={'cable'}>
                <p>
                    I conducted routine maintenance on cable loops, which included inspections to identify and repair minor damages.
                    In cases where cables were extensively damaged, I led the replacement of the entire cable.
                </p>
            </Window>

            {/* Bolting Campaign */}
            <Window title={'bolting'}>
                <p>
                    Additionally, I participated in bolting campaigns, where my primary responsibility was to inspect and verify the torque and condition of various bolts.
                </p>
            </Window>

            <Album title={'album'} urls={['/offshore/offshore (1).jpg', '/offshore/offshore (2).jpg', '/offshore/offshore (3).jpg']}>
                <>
                    {/* Text */}
                    Below, you will find a selection of videos and images showcasing the training and work i undertook.
                    <br />
                    Please note that due to photography restrictions on-site, i am unable to share all.
                </>
            </Album>

            <Turbine styles={styles} className={'turbine'} />
            <Underwater styles={styles} className={'underwater'} />
        </>
    )

}