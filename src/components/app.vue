<template>
  <div id="app">
  <h1>  Welcome to Single Page Application </h1>
  <router-view :employees="etable"></router-view> 
  <!-- <form-component v-if="" :employees="etable"></form-component> -->
  <!-- <registration  :employees="etable" :path="epath"></registration> -->

  </div>
</template>




<script>

/*import FormComponent from './FormComponent.vue';
import Registration from './registration.vue';
*/
 export default {
/*  components : {
    'form-component' : FormComponent,
    'registration' : Registration
  },*/
  data() {
    return {
      etable : [],
    }
  }
  
 }

</script>
