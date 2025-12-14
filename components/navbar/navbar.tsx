import { ReactElement } from 'react';
import styles from './navbar.module.css';
interface Navbar {
    children: ReactElement | ReactElement[];
}
const Navbar: React.FC<Navbar> = ({ children }) => {

    return (
        <nav className={styles.navbar}>

            <a className={styles.logo} href={`/`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="54" viewBox="0 0 71 54" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M36.5562 13.1176C33.8064 11.1548 30.4401 10 26.8041 10C17.5235 10 10 17.5235 10 26.8041C10 36.0848 17.5235 43.6082 26.8041 43.6082C30.3818 43.6082 33.6984 42.4902 36.4234 40.5844L29.8392 33.5483C28.9132 33.9657 27.8858 34.1979 26.8041 34.1979C22.7206 34.1979 19.4103 30.8876 19.4103 26.8041C19.4103 22.7206 22.7206 19.4103 26.8041 19.4103C27.9295 19.4103 28.9961 19.6617 29.9509 20.1114L36.5562 13.1176Z" fill="white" />
                    <path d="M39.2778 13.5289L32.5562 20.7546V33.0217L39.2778 40.2474V31.5093L40.9582 30.165L51.8809 42.6H60.451L45.4954 25.9639L59.7789 11.6804H51.3768L39.2778 23.7794V13.5289Z" fill="white" />
                </svg>
            </a>


            <div className={styles.links}>
                {children}
            </div>
        </nav>

    )
};


export default Navbar;
