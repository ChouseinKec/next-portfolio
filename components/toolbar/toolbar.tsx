import { ReactElement } from 'react';
import styles from './toolbar.module.css';

interface Modal {
    id: string;
    label: string;
    children: ReactElement;
}

const github: React.FC<Modal> = ({ id, label, children }) => {

    return (
        <div className={styles.modal} >
            <input className={styles.inputOpen} id={`${id}__open`} name={id} type="radio" />
            <label htmlFor={`${id}__open`}>{label}</label>

            <div className={styles.window}>
                <input className={styles.inputClose} id={`${id}__close`} name={id} type="radio" />
                <label htmlFor={`${id}__close`}>X</label>

                {children}
            </div>
        </div>
    )

};


export default github;
