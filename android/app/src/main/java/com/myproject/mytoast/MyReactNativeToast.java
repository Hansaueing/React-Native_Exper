package com.myproject.mytoast;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.util.HashMap;
import java.util.Map;

public class MyReactNativeToast extends ReactContextBaseJavaModule{

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public MyReactNativeToast(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyReactNativeToast";
    }

    @ReactMethod
    public void show(String message, int duration){
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    @ReactMethod
    public void showLog(String message){
        Log.i("React-native", message);
    }

    @ReactMethod
    public void measureLayout(int tag, int ancestorTag,
            Callback successCallback,Callback errorCallback){
        try {
            successCallback.invoke(String.valueOf(tag),String.valueOf(ancestorTag),"measureLayout Success!!!");
        }catch (IllegalViewOperationException e){
            errorCallback.invoke("Error");
        }
    }

    @ReactMethod
    public void measureLayoutPromise(int tag, int ancestorTag, Promise promise){
        try{
            WritableMap map = Arguments.createMap();
            map.putString("First","Hello");
            map.putString("Last","World");
            promise.resolve(map);
        }catch (Exception e){
            promise.reject(e);
        }
    }


    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }
}
