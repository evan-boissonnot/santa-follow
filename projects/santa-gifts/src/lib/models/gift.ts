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

