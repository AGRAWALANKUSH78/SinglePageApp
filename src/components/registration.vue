<template>
  <div>
    <form @submit.prevent="addEmployees">
        <div> 
          <input name="name" type="text" v-model="employee.name" placeholder="Name" v-validate="'required'"/>
          <p v-show="errors.has('name')"> {{ errors.first('name') }}</p>  
        </div><br>
        <div>
          <input name="age" type="text" v-model="employee.age" placeholder="Age" v-validate="'required|min_value:0'"/> 
          <p v-show="errors.has('age')"> {{ errors.first('age') }}</p>            
        </div><br>
        <div>
          <input name="email" type="text" v-model="employee.email" placeholder="Email-Id" v-validate="'required|email'"/> 
          <p v-show="errors.has('email')"> {{ errors.first('email') }}</p>            
        </div><br>
        <div>
          <button type="submit"> {{button}} </button>
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
      employee : {
        name: '',
        age: '',
        email: '',
      },
      button : 'Add'
    }
  },
  created (){
    if(this.$route.params.index >= 0) {
      this.setData();
    }
  },
  methods : {
    addEmployees : function() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          if(this.button == 'Add') {
            this.employees.push(this.employee);
            this.$router.push('/');
            return;
          } else {
            this.updateData(this.$route.params.index);
          }
        } 
      })      
    },
    updateData : function(index) {
      var updateEntry = confirm("Update Entry");
      if(updateEntry){
        this.employees.splice(index, 1, this.employee);
        this.$router.push('/');
      } else {
        this.$router.push('/');
      }
    },
    setData : function() {
      const index = this.$route.params.index;
      this.button = 'Update';
      this.employee = this.employees[index];
    }
  }
}
</script>


