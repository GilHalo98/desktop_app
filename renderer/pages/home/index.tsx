import React from 'react';
import Head from 'next/head';

import SideBar from '../../components/sidebar/sidebar';

export default function HomePage() {
    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={0} />
            </main>
        </React.Fragment>
    );
};
