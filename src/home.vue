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
    <table v-if="employees.length > 0" >
      <tr>
        <th>Index</th>
        <th>employees</th>
        <th>Age</th>
        <th>Email-Id</th>
        <th>Action</th>
      </tr>
      <tr v-for="(employee, index) in employees">
        <td>{{ index }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.age }}</td>
        <td>{{ employee.email }}</td>
        <router-link :to="`/update/${index}`">
        <button @click.prevent="editEmployeeDetails(index)" >Edit</button>
        </router-link>
        <button @click.prevent="deleteEmployeeDetails(index)" >Delete</button>
      </tr>
    </table>
</div>
</template>

<script>
export default {
  name : 'FormComponent',
  data(){
    return {
      name: '',
      age: '',
      email: '',
      employees: []
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
    },
    deleteEmployeeDetails(index){
      var deleteEntry = confirm("Delete Entry");
      if(deleteEntry){
        this.employees.splice(index, 1);
      };      
    },
    editEmployeeDetails : function(index){
      this.name = this.employees[index].name;
      this.age = this.employees[index].age;
      this.email = this.employees[index].email;
      this.employees.splice(index, 1);
      console.log("write a code for editing");
    }
  },

}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing : antialiased;
  -moz-osx-font-smoothing : grayscale;
  text-align: center;
  color : #2c3e50;
  margin-top: 60px;}
</style>