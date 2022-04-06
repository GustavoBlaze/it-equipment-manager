import { useContext } from "react";
import { EquipmentContext } from "../contexts/equipments";

export default function hook() {
  const context = useContext(EquipmentContext);

  if (!context) {
    throw new Error("useEquipments must be used within an EquipmentProvider");
  }

  return context;

}
