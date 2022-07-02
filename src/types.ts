import { ReactNode } from "react";

export interface Foods {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  available: boolean;
}

export interface PropsFood {
  food: Foods;
  handleDelete: (id: number) => void;
  handleEditFood: (food: Foods) => void;
}

export interface InputProps {
  name: string;
  //definido rest props operator
  [x: string]: any;
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

export interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: Foods) => void;
}

export interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (data: Foods) => void;
  editingFood?: Foods;
}