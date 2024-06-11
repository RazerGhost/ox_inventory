export type ItemData = {
  name: string;
  label: string;
  stack: boolean;
  usable: boolean;
  close: boolean;
  count: number;
  type: string;
  description?: string;
  buttons?: string[];
  ammoName?: string;
  image?: string;
};
