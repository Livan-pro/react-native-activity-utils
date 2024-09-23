import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-activity-utils' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const isAndroid = Platform.OS === 'android';

const ActivityUtils = isAndroid
  ? NativeModules.ActivityUtils
    ? NativeModules.ActivityUtils
    : new Proxy(
        {},
        {
          get() {
            throw new Error(LINKING_ERROR);
          },
        }
      )
  : null;

export async function setFlags(params: boolean): Promise<void> {
  if (!isAndroid) throw new Error('Implemented only on Android!');
  await ActivityUtils.setFlags(params);
}
