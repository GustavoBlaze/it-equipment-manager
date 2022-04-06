import React, { useState, useMemo } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { Header, Input, Button, EquipmentCard } from '../../components';
import useEquipments from '../../hooks/useEquipments';
export default function SearchITEquipment() {
  const { equipments, deleteEquipment } = useEquipments();
  const [inputText, setInputText] = useState('');
  const [search, setSearch] = useState('');

  const filteredEquipments = useMemo(() => {
    const searchRg = new RegExp(search, 'i');

    return equipments.filter(({ user }) => {
      return searchRg.test(user);
    });
  }, [equipments, search]);

  const handleSearch = () => {
    setSearch(inputText);
  };

  return (
    <View style={styles.container}>
      <Header title="Pesquisar equipamentos">
        <View style={styles.searchContainer}>
          <Input
            value={inputText}
            onChangeText={setInputText}
            label="Nome do usuário"
            style={styles.searchInput}
          />

          <Button
            text="Pesquisar"
            style={styles.button}
            onPress={handleSearch}
          />
        </View>
      </Header>

      <View style={styles.content}>
        <FlatList
          data={filteredEquipments}
          renderItem={({ item }) => <EquipmentCard equipment={item} />}
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

  searchContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  searchInput: {
    flex: 1,
    marginRight: 16,
  },

  button: {
    height: 52,
    width: 'fit-content',
    alignSelf: 'flex-end',
  },

  content: {
    padding: 16,
  },
});
