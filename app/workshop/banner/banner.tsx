import styles from './banner.module.scss';
import { Workshop as Scene } from '../../../components/sprite/sprite';

const Banner: React.FC = () => {

    return (

        <section className={styles.banner}>
            <Scene styles={styles} className={'bannerBackground'} variation={'background'} />
            <Scene styles={styles} className={'bannerBench'} />

            <div className={styles.links}>

                <a className={styles.linksLink} href="#prototype" data-index="cnc" />
                <a className={styles.linksLink} href="#prototype" data-index="3d" />

                <a className={styles.linksLink} href="#design" data-index="onshape" />
                <a className={styles.linksLink} href="#design" data-index="blender" />

                <a className={styles.linksLink} href="#programming" data-index="visual" />

                <a className={styles.linksLink} href="#haos" data-index="haos" />
                <a className={styles.linksLink} href="#production" data-index="unraid" />

                <a className={styles.linksLink} href="#robotics" data-index="fixit" />
                <a className={styles.linksLink} href="#robotics" data-index="xplorer" />

            </div>



        </section>
    )
};

export default Banner;
