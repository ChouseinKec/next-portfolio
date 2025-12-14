import { ReactElement } from "react";
import styles from './window.module.css';

interface Window {
    title: string;
    children: ReactElement;
    border: string;
    className: string;
}
const Window: React.FC<Window> = ({ title, children, border, className }) => {
    return (

        <div className={`${styles.window} ${className}`} data-window={title} data-border={border} >
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.content}>
                {children}
            </div>
        </div>

    )
}


export default Window;
