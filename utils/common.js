import { sellerStore } from '@/stores';
import { GetInitInfo, GetSeller } from '@/api';

export const initBase = () => {
  Promise.all([GetInitInfo(), GetSeller()]).then(([initInfo, sellerInfo]) => {
    if (initInfo.code === '0' && sellerInfo.code === '0') {
      const seller = sellerStore();
      seller.setPermission(initInfo.data.permission);
      seller.setSellerInfo(sellerInfo.data);
    }
  });
};
