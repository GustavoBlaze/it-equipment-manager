import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { EquipmentProvider } from './src/contexts/equipments';

import ITEquipment from './src/pages/ITEquipment';
import ListITEquipment from './src/pages/ListITEquipment';
import SearchITEquipment from './src/pages/SearchITEquipment';

export default function App() {
  return (
    <SafeAreaView>
      <EquipmentProvider>
        {/* <ITEquipment /> */}
        {/* <ListITEquipment/> */}
        <SearchITEquipment/>
      </EquipmentProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
