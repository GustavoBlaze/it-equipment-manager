import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Header, Input, Button } from '../../components';
import useEquipments from '../../hooks/useEquipments';
export default function ITEquipment() {
  const { addNewEquipment } = useEquipments();

  const [numPatrimony, setNumPatrimony] = useState('');
  const [numSerie, setNumSerie] = useState('');
  const [brandName, setBrandName] = useState('');
  const [modelName, setModelName] = useState('');
  const [costCenter, setCostCenter] = useState('');
  const [user, setUser] = useState('');
  const [sector, setSector] = useState('');
  const [type, setType] = useState('Desktop');

  function handleSubmit() {
    const data = {
      id: String(new Date().getTime()),
      numPatrimony,
      numSerie,
      brandName,
      modelName,
      costCenter,
      user,
      sector,
      type,
    };

    console.log(data);

    const hasAllFieldFilled = Object.values(data).every(Boolean);

    if (!hasAllFieldFilled) {
      console.error('Preencha todos os campos');
      return;
    }

    addNewEquipment(data);

    setNumPatrimony('');
    setNumSerie('');
    setBrandName('');
    setModelName('');
    setCostCenter('');
    setUser('');
    setSector('');
    setType('Desktop');
  }

  return (
    <View style={styles.container}>
      <Header title="Cadastro de Equipamentos de TI" />

      <View style={styles.content}>
        <Input
          label="Número do património"
          value={numPatrimony}
          style={styles.inputStyle}
          onChangeText={setNumPatrimony}
        />
        <Input
          label="Número de série"
          value={numSerie}
          style={styles.inputStyle}
          onChangeText={setNumSerie}
        />
        <Input
          label="Marca"
          value={brandName}
          onChangeText={setBrandName}
          style={styles.inputStyle}
        />
        <Input
          label="Modelo"
          value={modelName}
          onChangeText={setModelName}
          style={styles.inputStyle}
        />
        <Input
          label="Centro de custo"
          value={costCenter}
          onChangeText={setCostCenter}
          style={styles.inputStyle}
        />
        <Input
          label="Usuário"
          value={user}
          onChangeText={setUser}
          style={styles.inputStyle}
        />
        <Input
          label="Setor"
          value={sector}
          onChangeText={setSector}
          style={styles.inputStyle}
        />
        <Input
          label="Tipo"
          value={type}
          onChangeText={setType}
          style={styles.inputStyle}
          type="select"
          options={
            [
              { label: 'Desktop', value: 'Desktop' },
              { label: 'Notebook', value: 'Notebook' },
              { label: 'Monitor', value: 'Monitor' },
            ]
          }
        />

        <View style={styles.buttonWrapper}>
          <Button text="Incluir" onPress={handleSubmit} />
        </View>
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
  inputStyle: {
    marginBottom: 16,
  },
  buttonWrapper: {
    marginTop: 16,
  },
});
