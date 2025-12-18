'use client';

import React from 'react';

export type Region = [number, number, number, number];

export interface CityLightsProps {
    total?: number;
    waterPercent?: number;
    sizeRange?: [number, number];
    landRegions?: Region[];
    className?: string;
    fill?: string;
}

const DEFAULT_LAND_REGIONS: Region[] = [
    [12, 30, 28, 46],
    [30, 46, 40, 60],
    [44, 32, 56, 40],
    [48, 40, 56, 52],
    [58, 30, 76, 48],
    [66, 52, 76, 62],
];

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const CityLights: React.FC<CityLightsProps> = ({ total = 140, waterPercent = 0.25, sizeRange = [0.05, 0.15], landRegions = DEFAULT_LAND_REGIONS, className, fill = '#ffd896', }) => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const dots = React.useMemo(
        () => {
            if (!isMounted) return [];
            return Array.from({ length: total }).map((_, idx) => {
                const useLand = Math.random() > waterPercent;
                const region = useLand
                    ? landRegions[Math.floor(Math.random() * landRegions.length)]
                    : [0, 0, 100, 100];

                const [x1, y1, x2, y2] = region;
                const cx = rand(x1, x2);
                const cy = rand(y1, y2);
                const r = rand(sizeRange[0], sizeRange[1]);
                const opacity = rand(0.4, 0.85);

                return (
                    <circle
                        key={`light-${idx}`}
                        cx={cx}
                        cy={cy}
                        r={r}
                        fill={fill}
                        opacity={opacity}
                    />
                );
            });
        },
        [isMounted, total, waterPercent, sizeRange, landRegions, fill]
    );

    return (
        <svg width={'auto'} height={'auto'} className={className} viewBox="0 0 100 100" preserveAspectRatio="none">
            {dots}
        </svg>
    );
};

export default CityLights;
