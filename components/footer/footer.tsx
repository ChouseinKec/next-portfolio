import styles from './footer.module.css';
import Toolbar from '../toolbar/toolbar';

const Footer: React.FC = () => {

    return (
        <footer className={`${styles.footer} footer`}>


            <div className={styles.rights}>
                <p>
                    ®2025 Chousein Kechagia - All Rights Reserved
                </p>
            </div>


            <div className={styles.links}>

                <Toolbar id='about-site' label='About Site'>
                    <div className={styles.text}>
                        <p>
                            This portfolio is designed to showcase my front-end development skills by taking an unconventional approach. While the project uses Next.js and React for structure and component logic, all user-facing interactions—such as tabs, modals, and animations—are implemented using only HTML and CSS, without client-side JavaScript logic.
                        </p>

                        <p>
                            This demonstrates how much can be achieved with core web technologies alone, while still maintaining the power and organization of modern frameworks like React.
                        </p>

                        <p>
                            This method may not be ideal for large-scale production apps, but it highlights creative problem-solving and a strong foundation in web fundamentals.
                        </p>

                        <p>
                            For more visit <a href="https://github.com/ChouseinKec/next-portfolio" target='_blank'>Github</a> .
                        </p>
                    </div>
                </Toolbar>

            </div>


        </footer>)
};


export default Footer;
