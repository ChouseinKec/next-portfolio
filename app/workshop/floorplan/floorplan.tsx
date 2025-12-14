import styles from './floorplan.module.scss';
import Image from 'next/image'


const FloorPlan = () => {
    return (
        <div className={styles.floorplan}>
            <div className={styles.plan}>

                <div className={styles.inputs}>
                    {/* Bathroom Led */}
                    <div className={styles.input}>
                        <label htmlFor='bathroom-led'>Bathroom Led</label>
                        <input id={'bathroom-led'} type='checkbox' defaultChecked={true} />
                    </div>

                    {/* Bathroom Light */}
                    <div className={styles.input}>
                        <label htmlFor='bathroom-light'>Bathroom Light</label>
                        <input id={'bathroom-light'} type='checkbox' />
                    </div>

                    {/* Bedroom Led */}
                    <div className={styles.input}>
                        <label htmlFor='bedroom-led'>Bedroom Led</label>
                        <input id={'bedroom-led'} type='checkbox' defaultChecked={true} />
                    </div>

                    {/* Entrance Led */}
                    <div className={styles.input}>
                        <label htmlFor='entrance-led'>Entrance Led</label>
                        <input id={'entrance-led'} type='checkbox' />
                    </div>

                    {/* Kitchen Led */}
                    <div className={styles.input}>
                        <label htmlFor='kitchen-led'>Kitchen Led</label>
                        <input id={'kitchen-led'} type='checkbox' defaultChecked={true} />
                    </div>

                    {/* Kitchen Spots */}
                    <div className={styles.input}>
                        <label htmlFor='kitchen-spots'>Kitchen Spots</label>
                        <input id={'kitchen-spots'} type='checkbox' />
                    </div>

                    {/* Livingroom Led */}
                    <div className={styles.input}>
                        <label htmlFor='livingroom-led'>Livingroom Led</label>
                        <input id={'livingroom-led'} type='checkbox' defaultChecked={true} />
                    </div>

                    {/* Livingroom Light */}
                    <div className={styles.input}>
                        <label htmlFor='livingroom-light'>Livingroom Light</label>
                        <input id={'livingroom-light'} type='checkbox' />
                    </div>

                    {/* Livingroom TV */}
                    <div className={styles.input}>
                        <label htmlFor='livingroom-tv'>Livingroom TV</label>
                        <input id={'livingroom-tv'} type='checkbox' defaultChecked={true} />
                    </div>

                    {/* Livingroom Aquariums */}
                    <div className={styles.input}>
                        <label htmlFor='livingroom-aquariums'>Livingroom Aquariums</label>
                        <input id={'livingroom-aquariums'} type='checkbox' />
                    </div>

                    {/* Plants UV */}
                    <div className={styles.input}>
                        <label htmlFor='kitchen-uv'>Plants UV</label>
                        <input id={'kitchen-uv'} type='checkbox' defaultChecked={true} />
                    </div>

                    {/* Workshop Led */}
                    <div className={styles.input}>
                        <label htmlFor='workshop-led'>Workshop Led</label>
                        <input id={'workshop-led'} type='checkbox' defaultChecked={true} />
                    </div>

                    {/* Workshop Light */}
                    <div className={styles.input}>
                        <label htmlFor='workshop-light'>Workshop Light</label>
                        <input id={'workshop-light'} type='checkbox' />
                    </div>
                </div>


                {/* Day */}
                <Image
                    src={'/workshop/floorplan/day.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Aquarium */}
                <Image
                    className={styles.livingroomAquariums}
                    src={'/workshop/floorplan/day-aquarium-led.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Bathroom Led */}
                <Image
                    className={styles.bathroomLed}
                    src={'/workshop/floorplan/day-bathroom-led.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Bathroom Light */}
                <Image
                    className={styles.bathroomLight}
                    src={'/workshop/floorplan/day-bathroom-light.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Bedroom Led */}
                <Image
                    className={styles.bedroomLed}
                    src={'/workshop/floorplan/day-bedroom-led.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Entrance Led */}
                <Image
                    className={styles.entranceLed}
                    src={'/workshop/floorplan/day-entrance-led.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Kitchen Led */}
                <Image
                    className={styles.kitchenLed}
                    src={'/workshop/floorplan/day-kitchen-led.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Kitchen Spots */}
                <Image
                    className={styles.kitchenSpots}
                    src={'/workshop/floorplan/day-kitchen-spots.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Livingroom Led TV */}
                <Image
                    className={styles.livingroomLed}
                    src={'/workshop/floorplan/day-livingroom-led-tv.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Livingroom Led Window */}
                <Image
                    className={styles.livingroomLed}
                    src={'/workshop/floorplan/day-livingroom-led-window.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Livingroom Light */}
                <Image
                    className={styles.livingroomLight}
                    src={'/workshop/floorplan/day-livingroom-light.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Livingroom TV On */}
                <Image
                    className={styles.livingroomTV}
                    src={'/workshop/floorplan/day-livingroom-tv-on.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Plants UV */}
                <Image
                    className={styles.kitchenUV}
                    src={'/workshop/floorplan/day-plants-uv.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Workshop Light*/}
                <Image
                    className={styles.workshopLight}
                    src={'/workshop/floorplan/day-workshop-lamp.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />

                {/* Workshop Led*/}
                <Image
                    className={styles.workshopLed}
                    src={'/workshop/floorplan/day-workshop-led.png'}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                />
            </div>
        </div>
    )
}

export default FloorPlan;
