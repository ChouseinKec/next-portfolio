import Image from 'next/image'
import styles from './gallery.module.css';

interface Video {
    imageUrl: string;
    videoUrl: string;
}


interface Gallery {
    images: string[];
    video?: Video;
    prefix: string;
}
const Gallery: React.FC<Gallery> = ({ images, video, prefix }) => {

    return (
        <div className={styles.gallery}>

            <div className={styles.video}>
                <a className={styles.image} href={video ? video.videoUrl : images[0]} target={'_blank'}>
                    <Image
                        src={video ? video.imageUrl : images[0]}
                        width={400}
                        height={400}
                        alt={`Video of ${prefix}`}
                    />
                </a>
            </div>

            <div className={styles.images}>
                {images.map((x, i) =>
                    <a className={styles.image} href={x} target={'_blank'} key={`${prefix}-${i}`} >
                        <Image
                            src={x}
                            width={100}
                            height={100}
                            alt={`Image of ${prefix}(${i})`}
                        />
                    </a>
                )}
            </div>

        </div>

    )
}

export default Gallery;