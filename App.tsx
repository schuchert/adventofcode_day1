import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export function App(): JSX.Element {
  const [text, onChangeText] = React.useState('Enter your test data here');
  const [titleText, setTitleText] = React.useState('');

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <TextInput
        textAlignVertical={'top'}
        multiline={true}
        style={{
          fontSize: 40,
          flex: 10,
          borderWidth: 3,
          padding: 5,
        }}
        accessibilityLabel={'input'}
        onChangeText={onChangeText}
        value={text}
      />
      <View
        style={{
          flex: 1,
          borderWidth: 3,
          padding: 3,
          justifyContent: 'center',
          gap: 10,
        }}>
        <Button
          accessibilityLabel={'clear'}
          title={'Clear'}
          onPress={() => {
            onChangeText('');
            setTitleText('');
          }}
        />
        <Button
          accessibilityLabel={'go'}
          title={'Go'}
          onPress={() => {
            setTitleText(text);
          }}
        />
      </View>
      <Text
        style={{flex: 10, borderWidth: 3, padding: 5, fontSize: 40}}
        accessibilityLabel={'output'}>
        {titleText}
      </Text>
    </View>
  );
}
