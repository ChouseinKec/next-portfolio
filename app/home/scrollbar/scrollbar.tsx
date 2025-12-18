'use client';

import React from 'react';
import styles from './styles.module.scss';

export interface ScrollbarSection {
    id: string;
    label: string;
    icon: React.ReactNode;
}

interface ScrollbarProps {
    sections: ScrollbarSection[];
}

const Scrollbar: React.FC<ScrollbarProps> = ({ sections }) => {
    return (
        <div className={styles.scrollbar}>
            {/* Background line */}
            <div className={styles.line} />

            {/* Progress fill - animated by scroll via animation-timeline */}
            <div className={styles.progressFill} />

            {/* Section dots */}
            <div className={styles.dotsContainer}>
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={styles.dot}
                        title={section.label}
                        aria-label={`Go to ${section.label}`}
                        data-section={section.id}
                    >

                        <span className={styles.label}>{section.label}</span>
                        <div className={styles.icon}>{section.icon}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};



export default Scrollbar;
