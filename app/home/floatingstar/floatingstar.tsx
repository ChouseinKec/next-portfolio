'use client';

import React from 'react';
import styles from './floatingstar.module.scss';

export interface FloatingStarProps {
    count?: number;
    className?: string;
}

const FloatingStar: React.FC<FloatingStarProps> = ({ count = 100, className }) => {
    const stars = Array.from({ length: count }).map((_, idx) => (
        <div key={`floating-star-${idx}`} className={styles.star}></div>
    ));

    return (
        <div
            className={`${styles.stars} ${className || ''}`}
        >
            {stars}
        </div>
    );
};

export default FloatingStar;
