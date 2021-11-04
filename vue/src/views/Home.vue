<template>
  <!--Decoration -->
  <DecorationDots/>
  <DecorationLines/>
  <DecorationCircleLg/>
  <DecorationCircleMd/>
  <DecorationCircleSm/>

<!-- Header-->
<header>
  <Navigation />
  <PageTitle :totalStorage='totalStorage'
             :totalValue='totalValue'
             
             />
  <!-- <Options :owner='owner' :accountId='accountId'/> -->
</header>

<Footer/>

</template>

<script>
import DecorationDots from  '@/components/DecorationDots.vue'
import DecorationLines from '@/components/DecorationLines.vue'
import DecorationCircleLg from '@/components/DecorationCircleLg.vue'
import DecorationCircleMd from '@/components/DecorationCircleMd.vue'
import DecorationCircleSm from '@/components/DecorationCircleSm.vue'
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
// import Options from '@/components/Options.vue'
import Footer from '@/components/Footer.vue'
import {wallet } from '@/services/near'
import { useNCD } from "@/composables/near"

export default {
  name: 'App',
  components: {
    DecorationDots,
    DecorationLines,
    DecorationCircleLg,
    DecorationCircleMd,
    DecorationCircleSm,
    Navigation,
    PageTitle,
    // Options,
    Footer
  },
  setup(){
    const accountId = wallet.getAccountId();
    const  { totalStorage, totalValue}  = useNCD();

    return  {
        accountId,
        totalStorage,
        totalValue,
        
    }
  }
}
</script>