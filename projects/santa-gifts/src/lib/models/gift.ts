import { minLength, required, schema } from "@angular/forms/signals";

export interface Gift {
  id: number;
  title: string;
  description: string
}

export type GiftList = Gift[];
export const emptyGiftList: GiftList = [];

export type NewGift = Omit<Gift, 'id'>;
export const emptyNewGift: NewGift = {
  title: '',
  description: ''
};



export const newGiftSchema = schema<NewGift>(context => {
  required(context.title, { message: 'Le titre est obligatoire' });
  minLength(context.description, 100, { message: 'La description doit contenir au moins 100 caractères' });
});

export const giftSchema = schema<Gift>(context => {
  required(context.title, { message: 'Le titre est obligatoire' });
  minLength(context.description, 100, { message: 'La description doit contenir au moins 100 caractères' });
});

