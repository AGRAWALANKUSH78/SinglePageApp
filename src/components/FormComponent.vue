<template>
  <div>
    <router-link to="/add" >
    <button> Add Employee</button>
    </router-link>
    <table>
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
      employees: []
    }
  },
  methods: {
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