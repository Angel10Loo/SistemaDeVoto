<template>
  <div class="Contact">
    <h2>Contactanos</h2>
    <CompContact/>
  </div>
</template>

<script>
// @ is an alias to /src
import CompContact from '@/components/CompContact.vue'

export default {
  name: 'Contact',
  components: {
    CompContact
  }
}
</script>