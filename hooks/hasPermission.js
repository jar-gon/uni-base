import { sellerStore } from '@/stores';

const seller = sellerStore();
export const hasPermission = seller.hasPermission;
