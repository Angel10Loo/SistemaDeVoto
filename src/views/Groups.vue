<template>
  <div class="groups"> 
      <h1 class="text-primary">Groups</h1> 
      
    <ComGroups />
   
  </div>
</template>

<script>

import ComGroups from '@/components/ComGroups.vue'

export default {
  name: 'groups',
  components: {
   ComGroups
  }
}
</script>
