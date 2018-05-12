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
      list: [
        { id: 1, item: "Foo" },
        { id: 2, item: "Bar" }
      ]
    }
  }
}
</script>
