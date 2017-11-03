<template>
  <div>
    <form>
      <div>      
          <input name="name" type="text" v-model="name" placeholder="Name" v-validate="'required'"/>

          <input name="age" type="text" v-model="age" placeholder="Age" v-validate="'required|min_value:0'"/> 

          <input name="email" type="text" v-model="email" placeholder="Email-Id" v-validate="'required|email'"/> 
        
          <button @click.prevent="addEmployees"> Add </button>

          <p v-show="errors.has('name')"> {{ errors.first('name') }}</p>  
          <p v-show="errors.has('age')"> {{ errors.first('age') }}</p>    
          <p v-show="errors.has('email')"> {{ errors.first('email') }}</p>
      </div>
    </form>

</div>
</template>

<script>
export default {
  name : 'entry',
  data(){
    return {
      name: '',
      age: '',
      email: '',
      employees : []
    }
  },
  methods: {
    addEmployees: function(){
      console.log(this.fields.age);
     if(this.fields.age.valid && this.fields.name.valid && this.fields.email.valid) {
            this.employees.push({ name : this.name, age : this.age,  email : this.email });
            this.name = '';
            this.age = '';
            this.email = '';
            this.submission = 'Add';
      }  else {alert("all fields required");} 
    }
}
</script>