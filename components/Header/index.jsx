import React from 'react';

import Breadcrumbs from 'Components/Breadcrumbs';

import styles from './style.scss';

function Header() {
    return (
        <div className={styles.wrapper}>
            <Breadcrumbs/>
            <h1>Influencers</h1>
            <div className={styles.content}>
                <p>Zde bude seo copy, které uživatelům vysvětlí o co tady jde. Lorem ipsum dolor</p>
            </div>
        </div>
    )
}

export default Header;