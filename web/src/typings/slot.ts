export type Slot = {
  slot: number;
  name?: string;
  count?: number;
  weight?: number;
  metadata?: {
    [key: string]: any;
  };
  durability?: number;
};

export type SlotWithItem = Slot & {
  name: string;
  count: number;
  weight: number;
  type: string;
  durability?: number;
  price?: number;
  currency?: string;
  ingredients?: { [key: string]: number };
  duration?: number;
  image?: string;
  grade?: number | number[];
};
