import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TextInputProps,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

interface IPickerOption {
  label: string;
  value: string;
}

interface InputProps extends TextInputProps {
  label?: string;
  style?: object;
  type?: 'text' | 'select';
  options?: IPickerOption[];
}

export default function Input({
  label,
  style,
  type = 'text',
  options,
  ...rest
}: InputProps) {
  return (
    <View style={[styles.container, style].filter(Boolean)}>
      {label && <Text style={styles.label}>{label}</Text>}
      {type === 'text' ? (
        <TextInput style={styles.input} {...rest} />
      ) : (
        <Picker
          style={styles.input}
          selectedValue={rest?.value}
          onValueChange={rest?.onChangeText}
        >
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            ></Picker.Item>
          ))}
        </Picker>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  input: {
    borderColor: '#e2e8f0',
    borderWidth: 1,
    padding: 16,
    borderRadius: 4,
    fontSize: 16,
    color: '#334155',
  },
});
