import React from 'react';
import styles from './about.module.css';



interface About {
    id?: string;
}

const About: React.FC<About> = ({ id = 'about' }) => {
    return (
        <section id={id} className={styles.about} >
            <div className={styles.text}>
                <p>
                    <span>
                        Hello, I am <b>Chousein Kechagia</b> from <b>Greece</b>. I possess a deep passion for continuous learning, guided by the philosophy of <b>&quot;understanding rather than memorizing&quot;</b>. This mindset drives me to explore subjects in depth, rapidly and efficiently, allowing me to grasp the fundamental principles of how things work.
                    </span>
                </p>

                <p>
                    <span>
                        My primary interests include <b>web development, robotics, home automation, and networking</b>.
                        While I do not consider myself a professional in all these areas, I am primarily self-taught and continually dedicate my free time to research, learn and build new things.
                    </span>
                </p>
            </div>
        </section>
    )
};

export default About;
