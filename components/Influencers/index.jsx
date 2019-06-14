import React from 'react';

import Header from 'Components/Header';
import Influencer from 'Components/Influencer';

import styles from './style.scss';

const data = [
    {
        image: '/static/images/influencers/yzomandias.jpg',
        link: '#',
        name: 'Yzomandias',
    },
    {
        image: '/static/images/influencers/sharlota.jpg',
        link: '#',
        name: 'Sharlota',
    },
    {
        image: '/static/images/influencers/karolina.jpg',
        link: '#',
        name: 'Karolína Mališová',
    },
    {
        image: '/static/images/influencers/gabi.jpg',
        link: '#',
        name: 'Gabi Heclová',
    },
    {
        image: '/static/images/influencers/renne.jpg',
        link: '#',
        name: 'Renne Dang',
    },
    {
        image: '/static/images/influencers/makyna.jpg',
        link: '#',
        name: 'Makyna016',
    },
];

function Influencers() {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.influencers}>
                {data.map(influencer => (
                    <Influencer {...influencer}/>
                ))}
            </div>
        </div>
    )
}

export default Influencers;