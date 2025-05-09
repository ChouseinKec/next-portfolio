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
        title: "Title",
        titleSubFix: "Subtitle",
        dateFrom: 2000,
        dateTo: 2010,
        country: "Country",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        id: "programming",
        svg: <Programming styles={styles} className={'vector'} />,
        title: "Title",
        titleSubFix: "Subtitle",
        dateFrom: 2000,
        dateTo: 2010,
        country: "Country",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: "/workshop#programming"
    },

    {
        id: "robotics",
        svg: <Robotics styles={styles} className={'vector'} />,
        title: "Title",
        titleSubFix: "Subtitle",
        dateFrom: 2000,
        dateTo: 2010,
        country: "Country",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: "/workshop#robotics"
    },

    {
        id: "offshore",
        svg: <Offshore styles={styles} className={'vector'} />,
        title: "Title",
        titleSubFix: "Subtitle",
        dateFrom: 2000,
        dateTo: 2010,
        country: "Country",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: "/offshore"
    },

    {
        id: "freelance",
        svg: <Freelance styles={styles} className={'vector'} />,
        title: "Title",
        titleSubFix: "Subtitle",
        dateFrom: 2000,
        dateTo: 2010,
        country: "Country",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
