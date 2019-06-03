package com.mapkitandroid;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.yandex.mapkit.MapKitFactory;

import javax.annotation.Nonnull;

public class MapKitManager extends SimpleViewManager<MapKitView> {

    private final static String API_KEY = "86cc8eeb-845f-4a35-9403-e69da3dac69a";

    @Nonnull
    @Override
    public String getName() {
        return "MapKit";
    }

    @Nonnull
    @Override
    protected MapKitView createViewInstance(@Nonnull ThemedReactContext reactContext) {

        MapKitFactory.setApiKey(API_KEY);
        MapKitFactory.initialize(reactContext);
        MapKitView mapKitView = new MapKitView(reactContext);
        return mapKitView;
    }
}
