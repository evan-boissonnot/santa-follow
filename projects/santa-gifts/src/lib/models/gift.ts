export interface Gift {
  id: string;
  name: string;
  description: string;
}

export type GiftList = Gift[];

export const emptyGiftList: GiftList = [];

export type AddGift = Omit<Gift, 'id'>;

