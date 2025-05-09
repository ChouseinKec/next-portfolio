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
                    <p>
                        This site is built with Next.js and designed to highlight my knowledge in Front-End Web Development. To demonstrate my understanding of HTML and CSS, I chose an unconventional design approach, implementing all features—such as animations, tabs, and modals—using only HTML and CSS, without relying on JavaScript. While this approach may not be ideal for production sites, it showcases the ability to create dynamic and interactive experiences purely with foundational web technologies. Feel free to explore the code on my <a href="https://github.com/ChouseinKec/next-portfolio" target='_blank'>Github</a> .
                    </p>
                </Toolbar>

            </div>


        </footer>)
};


export default Footer;
