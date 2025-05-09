import React, { ReactElement } from 'react';
import { Workshop as Scene } from '../../components/sprite/sprite';
import styles from './workshop.module.css';
import Navbar from '../../components/navbar/navbar';
import Banner from './banner/banner';
import Window from './window/window';
import FloorPlan from './floorplan/floorplan';
import Gallery from './gallery/gallery';
import { Tabs, Tab } from './tabs/tabs';
import './global.css';


interface Section {
    title: string;
    children: ReactElement;
}
const Section: React.FC<Section> = ({ title, children }) => {
    return (

        <div id={title} className={styles.section} data-section={title} >
            {children}
        </div>

    )
}

interface Container {
    title: string;
    children: ReactElement;
}
const Container: React.FC<Container> = ({ title, children }) => {
    return (
        <div className={styles.container} data-container={title} >
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}


export default function Workshop() {

    return (
        <>
            <Navbar>
                <a href='#programming'>Programing</a>
                <a href='#production'>Production</a>
                <a href='#prototype'>Prototype</a>
                <a href='#robotics'>Robotics</a>
                <a href='#design'>Design</a>

            </Navbar>

            <Banner />
            <div className='placeholder' />

            <div className={styles.modal}>
                <a className={styles.modal__button} href="#main" />

                <div className={styles.modal__hands} />

                <div className={styles.sections}>

                    <Section title='robotics' >
                        <>
                            {/* Robot */}
                            <Container title={'FixIT'}>
                                <>
                                    <Scene styles={styles} className={'svg'} variation={'fixit'} />

                                    <Window className={styles.window} title={'Description'} border={'top-left'}>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </Window>

                                    <Window className={styles.window} title={'Actuators'} border={'top-right-reverse'}>
                                        <>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                                            </p>

                                            <ul>
                                                <li>
                                                    <b> Lorem Ipsum is simply dummy text of the:</b>
                                                    <ul>
                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>

                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <b> Lorem Ipsum is simply dummy text of the:</b>
                                                    <ul>
                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <b> Lorem Ipsum is simply dummy text of the:</b>
                                                    <ul>
                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>

                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>
                                                    </ul>
                                                </li>


                                                <li>
                                                    <b> Lorem Ipsum is simply dummy text of the:</b>
                                                    <ul>
                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </>
                                    </Window>

                                    <Window className={styles.window} title={'Gallery'} border={'top-right'}>
                                        <Gallery prefix='fixit' images={['/workshop/fixit/fixit (2).jpg', '/workshop/fixit/fixit (3).jpg', '/workshop/fixit/fixit (4).jpg', '/workshop/fixit/fixit (1).jpg', '/workshop/fixit/fixit (5).jpg']} />
                                    </Window>

                                    <Window className={styles.window} title={'MCU'} border={'top-left-reverse'}>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                                        </p>
                                    </Window>

                                    <Window className={styles.window} title={'Cameras'} border={'top-center'}>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                                        </p>
                                    </Window>
                                </>
                            </Container>

                            {/* Controller */}
                            <Container title={'Controller'}>
                                <>
                                    <Scene styles={styles} className={'svg'} variation={'controller'} />

                                    <Window className={styles.window} title={'Communication'} border={'top-left'}>
                                        <>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                                            </p>

                                            <ul >
                                                <li>
                                                    Lorem Ipsum is simply dummy text:
                                                    <ul>
                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>

                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>

                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>
                                                    </ul>
                                                </li>


                                                <li>
                                                    Lorem Ipsum is simply dummy text:
                                                    <ul>
                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>

                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>

                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    Lorem Ipsum is simply dummy text:
                                                    <ul>
                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>

                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>

                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    Lorem Ipsum is simply dummy text:
                                                    <ul>
                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>

                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>

                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </>
                                    </Window>

                                    <Window className={styles.window} title={'Control'} border={'top-center'}>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                         </p>

                                    </Window>

                                    <Window className={styles.window} title={'Monitor'} border={'top-right'}>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                         </p>


                                    </Window>
                                </>
                            </Container>

                            {/* Robot */}
                            <Container title={'XPlorer'}>
                                <>
                                    <Scene styles={styles} className={'svg'} variation={'xplorer'} />

                                    <Window className={styles.window} title={'Description'} border={'top-left'}>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                         </p>

                                    </Window>

                                    <Window className={styles.window} title={'Actuators'} border={'top-right-reverse'}>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                         </p>


                                    </Window>

                                    <Window className={styles.window} title={'Gallery'} border={'top-right'}>
                                        <Gallery prefix={'xplorer'} images={['/workshop/xplorer/xplorer (3).png', '/workshop/xplorer/xplorer (2).png', '/workshop/xplorer/xplorer (3).png', '/workshop/xplorer/xplorer (4).png', '/workshop/xplorer/xplorer (5).png', '/workshop/xplorer/xplorer (6).png', '/workshop/xplorer/xplorer (7).png', '/workshop/xplorer/xplorer (8).png', '/workshop/xplorer/xplorer (9).png']} />
                                    </Window>

                                    <Window className={styles.window} title={'MCU'} border={'top-left-reverse'}>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                         </p>

                                    </Window>
                                </>
                            </Container>

                            {/* Controller */}
                            <Container title={'Case'}>
                                <>
                                    <Scene styles={styles} className={'svg'} variation={'case'} />

                                    <Window className={styles.window} title={'Communication'} border={'top-left-straight'}>
                                        <>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                            </p>

                                            <ul >
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                                </li>

                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                                </li>
                                            </ul>
                                        </>
                                    </Window>

                                    <Window className={styles.window} title={'Control'} border={'top-center'}>
                                        <>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                            </p>

                                            <ul>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                                </li>
                                            </ul>

                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                            </p>
                                        </>
                                    </Window>

                                    <Window className={styles.window} title={'Monitor'} border={'top-right-reverse'}>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                        </p>


                                    </Window>
                                </>
                            </Container>
                        </>
                    </Section>

                    <Section title='prototype'>
                        <>
                            {/* CNC */}
                            <Container title={'CNC'}>
                                <>
                                    <Scene styles={styles} className={'svg'} variation={'cnc'} />

                                    <Window className={styles.window} title={'Gallery'} border={'top-right'}>
                                        <Gallery prefix='cnc' images={['/workshop/cnc/cnc (4).jpg', '/workshop/cnc/cnc (3).jpg', '/workshop/cnc/cnc (2).jpg', '/workshop/cnc/cnc (1).jpg']} />
                                    </Window>

                                    <Window className={styles.window} title={'Description'} border={'top-left'}>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>

                                    </Window>

                                </>
                            </Container>

                            {/* 3D */}
                            <Container title={'3D'}>
                                <>
                                    <Scene styles={styles} className={'svg'} variation={'3d'} />

                                    <Window className={styles.window} title={'Gallery'} border={'top-left'}>
                                        <Gallery prefix='3d' images={['/workshop/3d/3d (1).png', '/workshop/3d/3d (2).png', '/workshop/3d/3d (3).png', '/workshop/3d/3d (4).png', '/workshop/3d/3d (5).png', '/workshop/3d/3d (6).png']} />
                                    </Window>

                                    <Window className={styles.window} title={'Description'} border={'top-right'}>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>

                                    </Window>

                                </>
                            </Container>
                        </>
                    </Section>

                    <Section title='production'>
                        <>
                            {/* Dell */}
                            <Container title={'Unraid'}>
                                <>
                                    <Scene styles={styles} className={'svg'} variation={'dell'} />

                                    <Window className={styles.window} title={'Description'} border={'top-left-straight'}>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                         </p>

                                    </Window>

                                    <Window className={styles.window} title={'Applications'} border={'top-center'}>

                                        <Tabs>
                                            <Tab title={'Frigate'} defaultChecked={true}>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                                 </p>
                                            </Tab>

                                            <Tab title={'pfSense'}>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap                                                </p>
                                            </Tab>

                                            <Tab title={'Mosquito'}>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                                 </p>
                                            </Tab>

                                            <Tab title={'Nextcloud'}>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,                                                </p>
                                            </Tab>
                                        </Tabs>

                                    </Window>

                                </>
                            </Container>

                            {/* Solar */}
                            <Container title={'Solar'}>
                                <>
                                    <Scene styles={styles} className={'svg'} variation={'solar'} />

                                    <Window className={styles.window} title={'Description'} border={'top-right-straight'}>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>

                                    </Window>
                                </>
                            </Container>

                        </>
                    </Section>

                    <Section title='haos'>
                        <Container title={'Home Assistant'}>
                            <>
                                <FloorPlan />

                                <Window className={styles.window} title={'Description'} border={'top-right-straight'}>
                                    <>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                         </p>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                         </p>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                         </p>
                                    </>
                                </Window>
                            </>
                        </Container>
                    </Section>

                    <Section title='programming'>
                        <Container title={'Programming'}>
                            <Window className={styles.window} title={'Description'} border={'top-right-straight'}>
                                <>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                     </p>

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                     </p>

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                     </p>

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                     </p>
                                </>
                            </Window>
                        </Container>
                    </Section>

                    <Section title='design'>
                        <Container title={'Design'}>
                            <>
                                <Window className={styles.window} title={'Gallery'} border={'top-right-straight'}>
                                    <Gallery prefix='design' images={['/workshop/design/blender.png', '/workshop/design/onshape.png', '/workshop/design/figma.png']} />
                                </Window>


                                <Window className={styles.window} title={'Blender'} border={'top-right-straight'}>

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                     </p>

                                </Window>

                                <Window className={styles.window} title={'Onshape'} border={'top-left-straight'}>

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                     </p>

                                </Window>

                                <Window className={styles.window} title={'Figma'} border={'top-center'}>

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                     </p>

                                </Window>
                            </>
                        </Container>


                    </Section>
                </div>

            </div>

            <div className={'rotate-device'}>
                <div>
                    <p>
                        For an optimal viewing experience, please switch to landscape orientation.
                        <br />
                        Thank you for your understanding.
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="92" viewBox="0 0 84 92" fill="none">
                        <rect x="19.3125" y="1.00671" width="43.5117" height="89.7474" rx="4" stroke="white" strokeWidth="2" />
                        <path d="M36.4307 5.94922H43.0977M45.6516 5.94922H46.719" stroke="white" strokeWidth="2" />
                        <circle cx="41.168" cy="83.5557" r="1.81445" fill="white" />
                        <path d="M11.7157 71.7365C11.7157 71.7365 1.39746 61.6186 1.39746 45.9418C1.39746 30.2651 11.7157 20.1472 11.7157 20.1472M11.7157 20.1472L5.71629 22.144M11.7157 20.1472L12.3202 26.7577" stroke="white" strokeWidth="2" />
                        <path d="M72.0021 20.1472C72.0021 20.1472 82.3203 30.2651 82.3203 45.9418C82.3203 61.6186 72.0021 71.7365 72.0021 71.7365M72.0021 71.7365L78.0015 69.7396M72.0021 71.7365L71.3976 65.126" stroke="white" strokeWidth="2" />
                    </svg>
                </div>
            </div>

        </>
    )

}