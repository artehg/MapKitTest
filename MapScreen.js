import React, { PureComponent } from 'react';
import MapKit from './MapKit';

export default class MapScreen extends PureComponent {
    render(){
        return (
            <MapKit style={{flex: 1}}/>
        )
    }
}
