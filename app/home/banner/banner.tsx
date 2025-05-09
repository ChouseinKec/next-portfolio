'use client';
import styles from './banner.module.css';

// Components
import { Server, Astronaut, Arc, Cables, Floor, Spaceship, Cat } from '@/components/sprite/sprite';

const Banner: React.FC = () => {
    return (
        <>
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
                    <div className={styles.textCV}>
                        <div className={styles.textCVDownload}>
                            <a href={'/CK-CV-Public.pdf'} target='_blank'> Download CV </a>
                        </div>
                    </div>
                    <span>-or-</span>
                    <button className={styles.textContact}>
                        <span className={styles.textContactName}>Contact Me</span>
                        <span className={styles.textContactGalaxy} />
                        <div className={styles.textContactEmail}><span>chouseinkechagia&#64;outlook&#46;com</span></div>
                    </button>

                </div>

                {/* Window */}
                <Cat styles={styles} className={'cat'} />

                {/* Servers */}
                <div className={styles.servers} >
                    <Server styles={styles} className={'server'} variation={2} />
                    <Server styles={styles} className={'server'} variation={1} />
                    <Server styles={styles} className={'server'} variation={2} />
                    <Server styles={styles} className={'server'} variation={1} />
                </div>

                {/* Arc - Back */}
                <Arc styles={styles} className={'arc'} variation='back' />

                {/* Astronaut */}
                <Astronaut styles={styles} className={'astronaut'} />

                {/* Arc - Front */}
                <Arc styles={styles} className={'arc'} variation='front' />

                {/* Floor Lines */}
                <Floor styles={styles} className={'floor'} />

                {/* Cables */}
                <Cables styles={styles} className={'cables'} />


                <div className={styles.links}>
                    <a className={styles.github} href='https://github.com/ChouseinKec/' target='_blank' />
                </div>
            </section>
            {/* Working On */}

        </>
    )
};

export default Banner;
