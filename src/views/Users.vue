<template>
  <div class="users"> 
      <h1 class="text-primary">Users</h1> 
      
    <ComTblUsers />
   
  </div>
</template>

<script>

import ComTblUsers from '@/components/ComTblUsers.vue'

export default {
  name: 'users',
  components: {
   ComTblUsers
  }
}
</script>
