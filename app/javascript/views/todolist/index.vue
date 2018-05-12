<template>
  <div>
    <h1>Todo Lists</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="todo in list" >
          <td>{{ todo.id }}</td>
          <td>{{ todo.item }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      list: []
    }
  },

  created: function() {
   this.fetchTodoLists();
  },

  methods: {
    fetchTodoLists: function() {
       const resource = this.$resource('/todolists.json');
       resource.get()
        .then(response => {
           this.list = response.data
        });
    }
  }
}
</script>
