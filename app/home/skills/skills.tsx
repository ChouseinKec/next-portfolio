import React, { CSSProperties, ReactElement, useMemo } from 'react';
import Image from 'next/image'
import styles from './skills.module.scss';

interface TextCircular {
    className?: string;
    text: string;
}
const TextCircular: React.FC<TextCircular> = ({ text }) => {
    const letters: string[] = text.split('');
    const _style: CSSProperties = {
        ['--text-total' as string]: letters.length
    }

    return (
        <p className={styles.textCircular} style={_style}>
            {letters.map((letter, index) => {
                return <span key={letter + index} className={styles.textCircularLetter} style={{ ['--index' as string]: index }}> {letter}  </span>;
            })}
        </p>
    )
}


interface Rating {
    rating: number;
    maxStars?: number;

}
const Rating: React.FC<Rating> = ({ rating, maxStars = 5 }) => {

    const memoizedStars = useMemo(() => {
        const getState = (index: number) => {
            // If index is smaller 
            if (index <= Math.floor(rating)) return 'full';

            // If there is half left and index is equal to
            if (rating % 1 !== 0 && index === Math.ceil(rating)) return 'half';

            return 'none';
        }

        return Array.from({ length: maxStars }, (_, index) => (
            <span key={index} className={`${styles.ratingStar}`} data-state={getState(index + 1)} />
        ));
    }, [rating, maxStars]);

    return (
        <div className={styles.rating}>
            {memoizedStars}
        </div>
    )
}


interface List {
    items: ListItem[];
}
const List: React.FC<List> = ({ items }) => {
    const memoizedItems = useMemo(() => {
        return items.map(item => (
            <ListItem
                property={item.property}
                key={item.property}
                content={item.content}
            />
        ));
    }, [items]);

    return (
        <ul className={styles.list} >
            {memoizedItems}
        </ul>
    )
}


interface ListItem {
    className?: string;
    property: string;
    content: ReactElement;
}
const ListItem: React.FC<ListItem> = ({ property, content }) => {
    return (
        <li className={styles.listItem}>
            <label>{property}:</label>
            {content}
        </li>
    )
}


interface Details {
    listItems: ListItem[];
    direction?: number;
}
const Details: React.FC<Details> = ({ listItems, direction = 1 }) => {
    const _style: CSSProperties = {
        ['--details-direction' as string]: direction,
    }

    return (
        <div className={styles.planetDetails} style={_style}>
            <List items={listItems} />
        </div>
    )
}


interface Planet {
    planetImage: string;
    planetName: string;
    planetIndex?: number;

    details: Details;
}
const Planet: React.FC<Planet> = ({ planetImage, planetName, planetIndex, details }) => {
    const _style: CSSProperties = {
        ['--planet-index' as string]: planetIndex,
    }


    return (
        <div className={styles.planet} style={_style}>

            <div className={styles.planetImage}>
                <Image
                    src={`/logos/${planetImage}.png`}
                    width={100}
                    height={100}
                    alt={`Logo of ${planetName}`}
                />
            </div>

            <TextCircular text={planetName} />

            <Details
                listItems={details.listItems}
                direction={details.direction}
            />

        </div>
    )
}


interface Orbit {
    orbitIndex: number;
    orbitPlanets: Planet[];
}
const Orbit: React.FC<Orbit> = ({ orbitPlanets, orbitIndex }) => {
    const _style: CSSProperties = {
        ['--orbit-planets' as string]: orbitPlanets.length,
        ['--orbit-index' as string]: orbitIndex,
    }

    // Modify planet.details to insert auto calculated direction value to it
    const planetDetails = useMemo(() => {
        return orbitPlanets.map((planet, index) => {
            const direction = orbitPlanets.length === 1
                ? 1 // Core planet
                : (index + 1 <= orbitPlanets.length / 2 ? 1 : -1); // Outer planets

            return { ...planet, details: { ...planet.details, direction }, };
        });
    }, [orbitPlanets]);

    return (
        <div className={styles.orbit} style={_style}>
            <div className={styles.stars} />
            {planetDetails.map((planet, index) =>
                <Planet
                    key={`${planet.planetIndex}-${planet.planetName}`}
                    planetImage={planet.planetImage}
                    planetName={planet.planetName}
                    planetIndex={planet.planetIndex ? planet.planetIndex : index}
                    details={planet.details}

                />
            )}
        </div>
    )

}


interface Skills {
    id?: string;
}
const Skills: React.FC<Skills> = ({ id = 'skills' }) => {
    const _style: CSSProperties = {
        ['--galaxy-orbits' as string]: 5,
    }

    const memoizedData = useMemo(() => [
        {
            orbitIndex: 0,
            orbitPlanets: [
                {
                    planetImage: 'js',
                    planetName: 'JavaScript',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={4} /> },
                            { property: 'Learn More', content: <a href="/workshop#programming">Programming</a> }
                        ]
                    }

                }
            ]
        },

        {
            orbitIndex: 1,
            orbitPlanets: [
                {
                    planetImage: 'css',
                    planetName: 'CSS-3',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={4} /> },
                            { property: 'Learn More', content: <a href="/workshop#programming">Programming</a> }
                        ]
                    }

                },

                {
                    planetImage: 'html',
                    planetName: 'HTML-5',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={4} /> },
                            { property: 'Learn More', content: <a href="/workshop#programming">Programming</a> }
                        ]
                    }

                }
            ]
        },

        {
            orbitIndex: 2,
            orbitPlanets: [
                {
                    planetImage: 'php',
                    planetName: 'PHP',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={2} /> },
                            { property: 'Learn More', content: <a href="/workshop#programming">Programming</a> }
                        ]
                    }

                },

                {
                    planetImage: 'react',
                    planetName: 'React',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={3.5} /> },
                            { property: 'Learn More', content: <a href="/workshop#programming">Programming</a> }
                        ]
                    }

                },

                {
                    planetImage: 'woocommerce',
                    planetName: 'WooCommerce',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={2} /> },
                            { property: 'Learn More', content: <a href="/workshop#programming">Programming</a> }
                        ]
                    }

                },

                {
                    planetImage: 'wordpress',
                    planetName: 'WordPress',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={2.5} /> },
                            { property: 'Learn More', content: <a href="/workshop#programming">Programming</a> }
                        ]
                    }

                }
            ]
        },

        {
            orbitIndex: 3,
            orbitPlanets: [
                {
                    planetImage: 'figma',
                    planetName: 'Figma',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={3.5} /> },
                            { property: 'Learn More', content: <a href="/workshop#design">Design</a> }
                        ]
                    }

                },

                {
                    planetImage: 'onshape',
                    planetName: 'OnShape',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={3} /> },
                            { property: 'Learn More', content: <a href="/workshop#design">Design</a> }
                        ]
                    }

                },

                {
                    planetImage: 'blender',
                    planetName: 'Blender',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={3} /> },
                            { property: 'Learn More', content: <a href="/workshop#design">Design</a> }
                        ]
                    }

                },

                {
                    planetImage: 'git',
                    planetName: 'Unity 3D',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={2.5} /> },
                            { property: 'Learn More', content: <a href="/workshop#design">Design</a> }
                        ]
                    }

                }
            ]
        },

        {
            orbitIndex: 4,
            orbitPlanets: [
                {
                    planetImage: 'pfsense',
                    planetName: 'PfSense',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={2.5} /> },
                            { property: 'Learn More', content: <a href="/workshop#production">Production</a> }
                        ]
                    }

                },

                {
                    planetImage: 'unraid',
                    planetName: 'Unraid',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={2.5} /> },
                            { property: 'Learn More', content: <a href="/workshop#production">Production</a> }
                        ]
                    }

                },

                {
                    planetImage: 'linux',
                    planetName: 'Linux',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={2.5} /> },
                            { property: 'Learn More', content: <a href="/workshop#production">Production</a> }
                        ]
                    }

                },

                {
                    planetImage: 'c++',
                    planetName: 'C++',
                    details: {
                        listItems: [
                            { property: 'Experience', content: <Rating rating={2} /> },
                            { property: 'Learn More', content: <a href="/workshop#programming">Programming</a> }
                        ]
                    }

                }
            ]
        },

        {
            orbitIndex: 5,
            orbitPlanets: []
        }

    ], []);

    return (
        <section id={id} className={styles.galaxy} style={_style} >
            {
                memoizedData.map((orbit) =>
                    <Orbit {...orbit} key={orbit.orbitIndex} />
                )
            }
        </section>
    )
};

export default Skills;
