import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  style?: object;
};

export default function Button({ text, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, style].filter(Boolean)} {...rest}>
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    paddingHorizontal: 24,
    backgroundColor: '#0f172a',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
