import React from 'react';
import {Button, TextInput, View} from 'react-native';

export function App(): JSX.Element {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <TextInput style={{flex: 10}} accessibilityLabel={'input'} />
      <Button accessibilityLabel={'go'} title={'Go'} />
      <TextInput style={{flex: 10}} accessibilityLabel={'output'} />
    </View>
  );
}
