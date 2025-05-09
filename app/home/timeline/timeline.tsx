import React, { ReactNode } from 'react';

import { Education, Programming, Robotics, Offshore, Freelance, Connector } from '@/components/sprite/sprite';
import styles from './timeline.module.css';


interface timeline {
    id: string;
    svg: ReactNode;
    title: string;
    titleSubFix: string;
    dateFrom: number;
    dateTo: number;
    country: string;
    content: string;
    link?: string;
}
const DATA: timeline[] = [
    {
        id: "education",
        svg: <Education styles={styles} className={'vector'} />,
        title: "Education",
        titleSubFix: "Mechatronics",
        dateFrom: 2013,
        dateTo: 2016,
        country: "Turkey",
        content: "I completed my high school education in Greece and then pursued a degree as a Mechatronic Technician in Turkey.",
    },
    {
        id: "programming",
        svg: <Programming styles={styles} className={'vector'} />,
        title: "Codenorm GmbH",
        titleSubFix: "Programming",
        dateFrom: 2016,
        dateTo: 2017,
        country: "Germany",
        content: "After graduating, I completed a 6-month internship at Codenorm GmbH, where I began my web development journey by learning HTML, CSS, JavaScript, Bootstrap, jQuery,AJAX,Docker and Git.",
        link: "/workshop#programming"
    },

    {
        id: "robotics",
        svg: <Robotics styles={styles} className={'vector'} />,
        title: "Dost GmbH",
        titleSubFix: "Robotics",
        dateFrom: 2017,
        dateTo: 2018,
        country: "Germany",
        content: "At Dost GmbH, i contributed to projects like custom small robots, which deepened my expertise in electronics, PCB design, 3D modeling, 3D printing, C++, and C#",
        link: "/workshop#robotics"
    },

    {
        id: "offshore",
        svg: <Offshore styles={styles} className={'vector'} />,
        title: "Dost GmbH",
        titleSubFix: "Offshore",
        dateFrom: 2018,
        dateTo: 2020,
        country: "Germany",
        content: "I worked as a rope-access electrician in the offshore wind industry, performing tasks like bolting campaigns, installing and calibrating sensors, and maintaining cable loops.",
        link: "/offshore"
    },

    {
        id: "freelance",
        svg: <Freelance styles={styles} className={'vector'} />,
        title: "Freelance",
        titleSubFix: "Autodidact",
        dateFrom: 2020,
        dateTo: 2024,
        country: "Greece",
        content: "In 2020, I returned to Greece to complete my mandatory military service, which coincided with the COVID-19 pandemic. During this time, I continued to stay productive by working on freelance projects and expanding my skill set.",
        link: "/workshop"
    }
]

interface Vector {
    timeline: timeline;
}
const Vector: React.FC<Vector> = ({ timeline, }) => {
    return (
        <div className={styles.image}>
            {timeline.svg}
        </div>
    )
}

interface Text {
    timeline: timeline;
}

const Text: React.FC<Text> = ({ timeline }) => {
    return (
        <div className={styles.text}>

            <p className={styles.textTitle}>
                {timeline.title}
                <span>({timeline.titleSubFix})</span>
            </p>

            <p className={styles.textDate}>{timeline.dateFrom} - {timeline.country} - {timeline.dateTo}</p>

            <p className={styles.textContent}>
                {timeline.content}
            </p>

            {timeline.link &&
                <a className={styles.textMore} href={timeline.link} >
                    <span>[</span>
                    <p>Learn More</p>
                    <span>]</span>
                </a>
            }

        </div >
    )

}

interface Timeline {
    id?: string;
}
const Timeline: React.FC<Timeline> = ({ id = 'timeline' }) => {
    return (
        <section id={id} className={styles.timeline}>
            {
                DATA.map(timeline =>
                    <div key={timeline.id} id={timeline.id} className={styles.line}>

                        <Vector timeline={timeline} />

                        <Text timeline={timeline} />

                        <Connector styles={styles} className={'connector'} />

                    </div>
                )
            }

        </section>
    )
};

export default Timeline;
