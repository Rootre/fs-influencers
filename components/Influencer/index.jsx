import React from 'react';

function Influencer({image, link, name}) {
    return (
        <div className={'influencer'}>
            <div className={'container'} style={{backgroundImage: `url(${image})`}}>
                <div className={'info'}>
                    <h2>{name}</h2>
                    <a href={link}>Prozkoumat</a>
                </div>
            </div>
        </div>
    )
}

export default Influencer;