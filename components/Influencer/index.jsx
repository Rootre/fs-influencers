import React from 'react';

import styles from './style.scss';

function Influencer({image, link, name}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container} style={{backgroundImage: `url(${image})`}}>
                <div className={styles.info}>
                    <h2>{name}</h2>
                    <a href={link}>Prozkoumat</a>
                </div>
            </div>
        </div>
    )
}

export default Influencer;