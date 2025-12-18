'use client';

import React from 'react';
import styles from './fallingstar.module.scss';

export interface FallingStarProps {
    count?: number;
    className?: string;
    degree?: number;
}

const FallingStar: React.FC<FallingStarProps> = ({ count = 10, degree = -45, className }) => {
    const stars = Array.from({ length: count }).map((_, idx) => (
        <div key={`falling-star-${idx}`} className={styles.star}></div>
    ));

    return (
        <div className={`${styles.stars} ${className || ''}`} style={{ transform: `rotate(${degree}deg)` }}>
            {stars}
        </div>
    );
};

export default FallingStar;
