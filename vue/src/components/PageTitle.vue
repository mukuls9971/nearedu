<template>
  <div class="w-full mt-9 px-5 md:px-9">
            <div class="w-full xl:w-1/2 mx-auto bg-white rounded-md shadow-2xl py-6">
                <h2 class="text-center font-medium text-gray-800 text-3xl mx-4">This page was created not for the game
                    just for testing
                </h2>
            </div>
        </div>
        <div class="w-full sm:block md:block lg:flex xl:flex px-5 mt-9 md:px-9">
            <!-- Lottery info block -->
            <div class="w-full bg-white rounded-md px-5 py-6 shadow-2xl">
                <!-- Block info title -->
                <p class="text-sm font-medium text-gray-400">Info about NCD</p>
                <div class="sm:block md:block lg:block xl:flex sm:pr-5 xl:pr-0 text-gray-900">
                    <div class="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <p class="ml-3">Total Storage</p>
                        <p class="ml-auto">{{totalStorage}}</p>
                    </div>
               
                </div>
                <!-- Onew row -->
                <div class="sm:block md:block lg:block xl:flex sm:pr-5 xl:pr-0 text-gray-900">
                    <div class="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <p class="ml-3">Total Value</p>
                        <p class="ml-auto">{{totalValue}}</p>
                    </div>
               
                </div>
           
            
         
            </div>
         
          
        </div>
</template>

<script>
export default {
     props: {
        totalStorage: {
            typeof:Number,
            required:true
        },
        totalValue: {
            typeof:Number,
            required:true
        },
       
       
    },
}
</script>