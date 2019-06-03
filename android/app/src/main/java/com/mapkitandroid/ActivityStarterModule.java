package com.mapkitandroid;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class ActivityStarterModule extends ReactContextBaseJavaModule {

    public ActivityStarterModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "ActivityStarter";
    }

    @ReactMethod
    void startMapActivity() {
        Activity activity = getCurrentActivity();
        if (activity != null) {
            Intent intent = new Intent(activity, TestMapActivity.class);
            activity.startActivity(intent);
        }
    }

    @ReactMethod
    void startExampleActivity() {
        Activity activity = getCurrentActivity();
        if (activity != null) {
            Intent intent = new Intent(activity, ExampleActivity.class);
            activity.startActivity(intent);
        }
    }
}
