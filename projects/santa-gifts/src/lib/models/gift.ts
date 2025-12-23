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

export const giftSchema = schema<NewGift>(context => {
  required(context.title);
  minLength(context.description, 100);
});

