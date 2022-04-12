import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IEquipmentDTO } from '../DTOs';

interface IEquipmentContext {
  equipments: IEquipmentDTO[];
  addNewEquipment: (equipment: IEquipmentDTO) => Promise<void>;
  deleteEquipment: (equipmentId: string) => Promise<void>;
}

const EquipmentContext = createContext<IEquipmentContext>();

const StorageKey = '@ti:equipments';

function EquipmentProvider({ children }) {
  const [equipments, setEquipments] = useState<IEquipmentDTO[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(StorageKey)
      .then((data) => (data ? JSON.parse(data) : []))
      .then(setEquipments);
  }, []);

  function addNewEquipment(equipment: IEquipmentDTO) {
    const updatedArray = [...equipments, equipment];
    setEquipments(updatedArray);
    return AsyncStorage.setItem(StorageKey, JSON.stringify(updatedArray));
  }

  function deleteEquipment(equipmentId: string) {
    const updatedArray = equipments.filter((item) => item.id !== equipmentId);

    console.log({updatedArray});

    setEquipments(updatedArray);
    return AsyncStorage.setItem(StorageKey, JSON.stringify(updatedArray));
  }

  return (
    <EquipmentContext.Provider
      value={{ equipments, addNewEquipment, deleteEquipment }}
    >
      {children}
    </EquipmentContext.Provider>
  );
}

export { EquipmentContext, EquipmentProvider };
