'use client';
import styles from './banner.module.scss';

// Components
import { Server, Astronaut, Arc, Cables, Floor, Spaceship, Cat, Hose } from '@/components/sprite/sprite';

const Banner: React.FC = () => {

    return (
        <section className={styles.banner}>

            {/* Spaceship */}
            < Spaceship styles={styles} className={'spaceship'} />

            {/* Text */}
            <div className={styles.text} >
                <h1 className={styles.textTitle}>
                    Hi, i am

                    <p>
                        <span className={styles.textTitleBracket}> &#10100; </span>
                        <span className={styles.textTitleContent}> </span>
                        <span className={styles.textTitleBracket}> &#10101; </span>
                    </p>

                </h1>
                <span>Feel free to</span>
                <div className={styles.textTriax}>
                    <div className={styles.textTriaxDownload}>
                        <a target='_blank' href='https://demo.chouseinkechagia.com'> Try Triax</a>
                    </div>
                </div>
                <span>-or-</span>
                <button className={styles.textContact}>
                    <span className={styles.textContactName}>Contact Me</span>
                    <span className={styles.textContactGalaxy} />
                    <div className={styles.textContactEmail}><span>chouseinkechagia&#64;outlook&#46;com</span></div>
                </button>

            </div>

            <div className={styles.svg}>
                {/* Cat */}
                <Cat styles={styles} className={'cat'} />

                {/* Servers */}
                <div className={styles.servers} >
                    <Server styles={styles} className={'server'} variation={2} />
                    <Server styles={styles} className={'server'} variation={1} />
                    <Server styles={styles} className={'server'} variation={2} />
                    <Server styles={styles} className={'server'} variation={1} />

                    {/* Cables */}
                    <Cables styles={styles} className={'cables'} />
                </div>

                {/* Arc - Back */}
                <Arc styles={styles} className={'arc'} variation='back' />

                {/* Hose */}
                <Hose styles={styles} className={'hose'} />

                {/* Astronaut */}
                <Astronaut styles={styles} className={'astronaut'} />

                {/* Arc - Front */}
                <Arc styles={styles} className={'arc'} variation='front' />

                {/* Floor Lines */}
                <Floor styles={styles} className={'floor'} />


            </div>

            <div className={styles.links}>
                <a className={styles.github} href='https://github.com/ChouseinKec/triax-page' target='_blank' />
            </div>

            <div className={styles.useragent} >
                ⚠️ Your browser doesn&apos;t support CSS Animation Timeline.
                Some scroll-triggered animations may not display as intended.
                For the optimal experience, please consider using a Chromium-based browser
                (Chrome, Edge, or Opera).
            </div>
        </section >
    )
};

export default Banner;
