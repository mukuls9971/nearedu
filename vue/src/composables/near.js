import { ref, onMounted } from "vue";
// import {wallet} from '@/services/near'
import {
    getTotal,
    getStorage,
    
  } from "../services/near";

  // const FeeStrategies = ['Free','Constant','Linear','Exponential']
  // const accountId = wallet.getAccountId();

  export const useNCD = () => {
      const  totalStorage = ref('')
      const  totalValue = ref('')
      const err = ref(null);

      onMounted(async () => {
          try {
            updateValues()
          }
          catch (e) {
              err.value = e;
              console.log('error');
          }
      })

      const updateValues = async () => {
        totalStorage.value = await getStorage()
        totalValue.value = await getTotal()
        
      }

      
      return {
        totalStorage,
        totalValue,
      
      };
  };