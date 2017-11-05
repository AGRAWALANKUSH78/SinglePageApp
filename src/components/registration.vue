<template>
  <div>
    <form @submit.prevent="addEmployees">
      <div>
        <div> 
          <input name="name" type="text" v-model="name" placeholder="Name" v-validate="'required'"/>
          <p v-show="errors.has('name')"> {{ errors.first('name') }}</p>  
        </div><br>
        <div>
          <input name="age" type="text" v-model="age" placeholder="Age" v-validate="'required|min_value:0'"/> 
          <p v-show="errors.has('age')"> {{ errors.first('age') }}</p>            
        </div><br>
        <div>
          <input name="email" type="text" v-model="email" placeholder="Email-Id" v-validate="'required|email'"/> 
          <p v-show="errors.has('email')"> {{ errors.first('email') }}</p>            
        </div><br>
          <button type="submit"> Add </button>
      </div>
    </form><br>
  </div>
</template>


<script>

export default {
  name : 'registration',
  props : ['employees'],  
  data(){
    return {
      name: '',
      age: '',
      email: '',
    }
  },
  methods: {
    addEmployees : function() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.employees.push({ name : this.name, age : this.age,  email : this.email });
          alert('From Submitted!');
          console.log(this.$route.path);
          this.$router.push('/');
          return;
    } 
  })
}
}
}
</script>


