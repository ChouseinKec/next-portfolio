'use client';
import React from 'react';
import styles from './divider.module.scss';

interface SectionDivider {
    title?: string;
    subtitle?: string;
    type?: 'about' | 'timeline' | 'skills' | 'contact';
}

export const SectionDivider: React.FC<SectionDivider> = ({ title, subtitle, type = 'timeline' }) => {
    return (
        <div className={styles.divider} data-type={type}>
            {title && (
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        <span> &lt; </span>
                        <span>{title}</span>
                        <span> /&gt; </span>
                    </h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    <div className={styles.line} />
                </div>
            )}
        </div>
    );
};

interface Stats {
    label: string;
    value: number | string;
    suffix?: string;
}

export const StatsCounter: React.FC<{ stats: Stats[] }> = ({ stats }) => {
    return (
        <div className={styles.stats}>
            {stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                    <div className={styles.statLabel}>{stat.label}</div>
                    <div className={styles.statValue}>
                        {stat.value}
                        {stat.suffix && <span className={styles.statSuffix}>{stat.suffix}</span>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SectionDivider;
