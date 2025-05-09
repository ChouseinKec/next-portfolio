import { ReactElement } from 'react';
import styles from './album.module.css'
import Image from 'next/image'
interface Window {
    children: ReactElement;
    title: string;
    urls: string[];
}
const Album: React.FC<Window> = ({ urls, title, children }) => {

    return (
        <section id={title} className={styles.album}>
            <p className={styles.text}>
                {children}
            </p>

            {/* Gallery */}
            <div className={styles.gallery} >

                {urls.map((x, i) =>
                    <a href={x} key={i} target='_blank'>
                        <Image
                            className={styles.image}
                            data-index={i + 1}
                            src={x}
                            width={100}
                            height={100}
                            alt='Picture of the author'
                        />
                    </a>
                )}
            </div>
        </section>
    )
};

export default Album;
