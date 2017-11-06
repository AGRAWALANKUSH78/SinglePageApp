<template>
  <div id="app">
    <h1>  Welcome to Single Page Application </h1>
    <router-view :employees="etable"></router-view> 
  </div>
</template>

<script>
 export default {
  data() {
    return {
      etable : [],
    }
  }
  
 }

</script>
