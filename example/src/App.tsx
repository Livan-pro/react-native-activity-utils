import React, { useState } from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { setFlags } from 'react-native-activity-utils';

export default function App() {
  const [turnScreenOn, setTurnScreenOn] = useState(false);
  const [showWhenLocked, setShowWhenLocked] = useState(false);
  const [keepScreenOn, setKeepScreenOn] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          setTurnScreenOn((prevValue) => {
            setFlags({ turnScreenOn: !prevValue });
            return !prevValue;
          })
        }
        title={`turnScreenOn: ${turnScreenOn}`}
      />
      <Button
        onPress={() =>
          setShowWhenLocked((prevValue) => {
            setFlags({ showWhenLocked: !prevValue });
            return !prevValue;
          })
        }
        title={`showWhenLocked: ${showWhenLocked}`}
      />
      <Button
        onPress={() =>
          setKeepScreenOn((prevValue) => {
            setFlags({ keepScreenOn: !prevValue });
            return !prevValue;
          })
        }
        title={`keepScreenOn: ${keepScreenOn}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
