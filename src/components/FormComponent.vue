<template>
  <div >
    <router-link to="/add" >
      <button> Add Employee</button>
    </router-link>
    <table class="pretty-table">
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
        <button @click.prevent="editEmployeeDetails(index)" > Edit </button>
        <button @click.prevent="deleteEmployeeDetails(index)" > Delete </button>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name : 'FormComponent',
  props : ['employees'],
  data(){
    return {

    }
  },
  methods: {
    deleteEmployeeDetails(index){
      this.$router.push(`/delete/${index}`);
      var deleteEntry = confirm("Delete Entry");
      if(deleteEntry){
        this.employees.splice(index, 1);
        this.$router.push('/');
      } else {
      this.$router.push('/');
      }   
    },
    editEmployeeDetails : function(index){
      this.$router.push(`/update/${index}`);
    }
  }
}
</script>