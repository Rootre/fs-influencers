import React from 'react';

import styles from './style.scss';

function Breadcrumbs() {
    return (
        <ul className={styles.wrapper}>
            <li><a href="/">Hlavní stránka</a></li>
            <li><span>Influencers</span></li>
        </ul>
    )
}

export default Breadcrumbs;