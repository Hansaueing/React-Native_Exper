package com.myproject.reactpackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.myproject.image.ImagePickerModule;
import com.myproject.mytoast.MyReactNativeToast;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class AnExampleReactPackage implements ReactPackage{
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new MyReactNativeToast(reactContext));
        modules.add(new ImagePickerModule(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
