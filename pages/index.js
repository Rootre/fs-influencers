import Head from 'next/head';

import Influencers from 'Components/Influencers';

import 'Sass/influencers.scss';

function Index() {
    return (
        <div>
            <Head>
                <title>Influencers | Footshop</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Influencers/>
        </div>
    )
}

export default Index;