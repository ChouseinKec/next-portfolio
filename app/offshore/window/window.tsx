import { ReactElement } from "react";
import styles from './window.module.css';

interface Window {
    title: string;
    children: ReactElement;
}
const Window: React.FC<Window> = ({ title, children }) => {
    return (
        <section id={title} className={styles.window}>
            <div className={styles.container}>
                {children}
            </div>
        </section>
    )
}


export default Window;
