import React from 'react';
import GoogleFontLoader from 'react-google-font-loader'

import HomeComponent from './HomeComponent';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Overlay from './Overlay';
import "adminbsb-materialdesign/css/themes/all-themes.css";

class MainComponent extends React.Component {
    render() {
        if (window.screen.width > 1150){
            document.getElementById("root").className = "theme-red";
        }
        else {
            document.getElementById("root").className = "theme-red ls-closed";
        }


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