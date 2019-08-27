<template>
  <div class="votings"> 
      <h1 class="text-primary">Votings</h1> 
      
    <ComVoting />
   
  </div>
</template>

<script>

import ComVoting from '@/components/ComVoting.vue'

export default {
  name: 'votings',
  components: {
   ComVoting
  }
}
</script>
