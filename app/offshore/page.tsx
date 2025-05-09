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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </Window>

            {/* Cable Loop */}
            <Window title={'cable'}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </Window>

            {/* Bolting Campaign */}
            <Window title={'bolting'}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </Window>

            <Album title={'album'} urls={['/offshore/offshore (1).jpg', '/offshore/offshore (2).jpg', '/offshore/offshore (3).jpg']}>
                <>
                    {/* Text */}
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </>
            </Album>

            <Turbine styles={styles} className={'turbine'} />
            <Underwater styles={styles} className={'underwater'} />
        </>
    )

}