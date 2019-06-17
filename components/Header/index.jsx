import React from 'react';

import Breadcrumbs from 'Components/Breadcrumbs';

function Header() {
    return (
        <div className={'header'}>
            <Breadcrumbs/>
            <h1>Influencers</h1>
            <div className={'content'}>
                <p>Zde bude seo copy, které uživatelům vysvětlí o co tady jde. Lorem ipsum dolor</p>
            </div>
        </div>
    )
}

export default Header;