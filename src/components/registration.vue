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

        <!-- <router-link to="/" > -->
          <button type="submit"> Add </button>
        <!-- </router-link> -->

      </div>
    </form>
  </div>
</template>


<script>
export default {
  name : 'registration',
  data(){
    return {
      name: '',
      age: '',
      email: '',
      employees : []
    }
  },
  methods: {
/*  	addEmployees : function(){
  		alert("all fields required");
  		console.log(this.employees);
  	},
*/
    addEmployees : function() {
      this.$validator.validateAll().then((result) => {
        if (result) {
  		    this.employees.push({ name : this.name, age : this.age,  email : this.email });
          alert('From Submitted!');
          this.$router.push('/');
          return;
    } 
  })
}
}
}
</script>

