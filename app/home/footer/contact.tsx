'use client';
import styles from './contact.module.scss';


interface Contact {
    title: string;
    subtitle?: string;
    links?: { label: string; url: string; icon?: string }[];
    className?: string;
}

const Contact: React.FC<Contact> = ({ title, subtitle, links, className }) => {
    return (
        <div className={`${styles.contact} ${className || ''}`}>
            <div className={styles.contactContent}>
                <h2 className={styles.contactTitle}>{title}</h2>
                {subtitle && <p className={styles.contactSubtitle}>{subtitle}</p>}


                {links && links.length > 0 && (
                    <div className={styles.contactLinks}>
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className={styles.contactLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};


export default Contact;