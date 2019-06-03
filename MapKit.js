import React, { PureComponent } from "react";
import { View, requireNativeComponent } from "react-native";

const MapKitNativeComponent = requireNativeComponent("MapKit");

export default class MapKit extends PureComponent {
  render() {
    return (
        <View style={{flex: 1, backgroundColor: "#f1f2f3"}}>
            <MapKitNativeComponent {...this.props }/>
        </View>
    )
  }
}
