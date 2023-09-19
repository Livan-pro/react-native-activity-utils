package pro.livan.activityutils;

import android.view.WindowManager;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = ActivityUtilsModule.NAME)
public class ActivityUtilsModule extends ReactContextBaseJavaModule {
  public static final String NAME = "ActivityUtils";

  public ActivityUtilsModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void setFlags(ReadableMap params, Promise promise) {
    final var activity = getCurrentActivity();

    if (activity == null) {
      promise.reject("Missing activity in setFlags");
      return;
    }

    if (params.hasKey("turnScreenOn")) {
      boolean value = params.getBoolean("turnScreenOn");
      activity.setTurnScreenOn(value);
    }

    if (params.hasKey("showWhenLocked")) {
      boolean value = params.getBoolean("showWhenLocked");
      activity.setShowWhenLocked(value);
    }

    if (params.hasKey("keepScreenOn")) {
      boolean value = params.getBoolean("keepScreenOn");

      UiThreadUtil.runOnUiThread(new Runnable() {
        @Override
        public void run() {
          final var activity = getCurrentActivity();

          if (activity == null) {
            promise.reject("Missing activity in keepScreenOn");
            return;
          }

          final var window = activity.getWindow();
          if (window == null) {
            promise.reject("Missing window in keepScreenOn");
            return;
          }

          if (value) {
            window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
          } else {
            window.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
          }
        }
      });
    }

    promise.resolve(null);
  }
}
