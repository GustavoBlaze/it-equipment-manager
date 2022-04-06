import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TouchableOpacityProps,
} from 'react-native';

import Button from '../Button';
import { IEquipmentDTO } from '../../DTOs';

interface IEquipmentCardProps {
  equipment: IEquipmentDTO;
  onDelete?: () => void;
}

const labels = {
  id: 'ID',
  numPatrimony: 'Nº Patrimônio',
  numSerie: 'Nº Série',
  brandName: 'Marca',
  modelName: 'Modelo',
  costCenter: 'Centro de Custo',
  user: 'Usuário',
  sector: 'Setor',
  type: 'Tipo',
};

const timeoutMap = {

}

export default function EquipmentCard({
  equipment,
  onDelete,
}: IEquipmentCardProps) {
  const [deletingProcess, setDeletingProcess] = useState(false);

  const handleDelete = () => {
    if (deletingProcess) {
      clearTimeout(timeoutMap[equipment.id]);
      onDelete?.();
      return;
    }

    setDeletingProcess(true);

    timeoutMap[equipment.id] = setTimeout(() => {
      setDeletingProcess(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      {
        <>
          {Object.entries(equipment).map(([key, value]) => (
            <View key={key} style={styles.attributeLine}>
              <Text style={styles.attributeName}>{`${labels[key]}: `}</Text>
              <Text style={styles.attributeValue}>{value}</Text>
            </View>
          ))}
        </>
      }

      {onDelete && (
        <View style={styles.buttonWrapper}>
          <Button
            text={deletingProcess ? 'Tem certeza?' : 'Excluir'}
            onPress={handleDelete}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 16,
    backgroundColor: '#fff',
    borderColor: '#e2e8f0',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
  },
  attributeLine: {
    flexDirection: 'row',
    display: 'flex',
  },
  attributeName: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#0f172a',
  },
  attributeValue: {
    fontSize: 16,
    lineHeight: 24,
    color: '#0f172a',
  },
  buttonWrapper: {
    marginTop: 16,
  },
});
