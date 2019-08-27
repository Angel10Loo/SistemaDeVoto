<template>
  <div class="states"> 
      <h1 class="text-primary">States</h1> 
      
    <ComStates />
   
  </div>
</template>

<script>

import ComStates from '@/components/ComStates.vue'

export default {
  name: 'states',
  components: {
   ComStates
  }
}
</script>
