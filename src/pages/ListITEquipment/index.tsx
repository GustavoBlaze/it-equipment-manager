import React, { useState, useMemo } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { Header, EquipmentCard } from '../../components';
import useEquipments from '../../hooks/useEquipments';
export default function ListITEquipment() {
  const { equipments, deleteEquipment } = useEquipments();

  return (
    <View style={styles.container}>
      <Header title="Equipamentos de TI" />

      <View style={styles.content}>
        <FlatList
          data={equipments}
          renderItem={({ item }) => (
            <EquipmentCard equipment={item} onDelete={() => deleteEquipment(item.id)} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  content: {
    padding: 16,
  },
});
