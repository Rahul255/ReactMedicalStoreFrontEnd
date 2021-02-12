import React from 'react';
import GoogleFontLoader from 'react-google-font-loader'

import HomeComponent from './HomeComponent';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Overlay from './Overlay';

class MainComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GoogleFontLoader
                fonts={[
                    {
                    font: 'Roboto',
                    weights: [400, 700],
                     },
                ]}
                subsets={['latin', 'cyrillic-ext']}
                />
                <GoogleFontLoader
                fonts={[
                    {
                    font: 'Material+Icons'
                     },
                ]}
                />
                <Overlay/>
                <Navbar/>
                <Sidebar/>
                <HomeComponent/>
            </React.Fragment>
        )
    }
}

export default MainComponent;