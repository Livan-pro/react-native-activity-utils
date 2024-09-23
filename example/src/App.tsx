import React, { useState } from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { setFlags } from 'react-native-activity-utils';

export default function App() {
  const [isTurnScreenOn, setIsTurnScreenOn] = useState(false);
 

  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          setIsTurnScreenOn((prevValue: boolean) => {
            setFlags(!prevValue);
            return !prevValue;
          })
        }
        title={`turnScreenOn: ${isTurnScreenOn}`}
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
