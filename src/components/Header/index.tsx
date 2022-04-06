import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type HeaderProps = {
  title?: string;
};

export default function Header({ title, children }: HeaderProps) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 16,
    paddingVertical: 24,
    backgroundColor: '#fff',
    borderBottomColor: '#e2e8f0',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 22,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#0f172a',
  },
});
