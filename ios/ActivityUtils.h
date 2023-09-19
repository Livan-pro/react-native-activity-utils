
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNActivityUtilsSpec.h"

@interface ActivityUtils : NSObject <NativeActivityUtilsSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ActivityUtils : NSObject <RCTBridgeModule>
#endif

@end
