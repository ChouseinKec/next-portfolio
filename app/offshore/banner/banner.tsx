import styles from './banner.module.css';
import { Cloud } from '../../../components/sprite/sprite';

const Banner: React.FC = () => {

    return (
        <section className={styles.banner}>
            <h1 className={styles.bannerTitle}>OFFSHORE</h1>
            <span className={styles.bannerSubtitle}>(Dost GmbH)</span>

            <Cloud styles={styles} className={'bannerCloud1'} variation={1} />
            <Cloud styles={styles} className={'bannerCloud2'} />
            <Cloud styles={styles} className={'bannerCloud3'} />
            <Cloud styles={styles} className={'bannerCloud4'} variation={2} />
            <Cloud styles={styles} className={'bannerCloud5'} variation={2} />
            <Cloud styles={styles} className={'bannerCloud6'} variation={3} />

        </section>
    )
};

export default Banner;
