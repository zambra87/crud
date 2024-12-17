<template>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.mail }}
        <button @click="emitDeleteUser(user.id)">Eliminar</button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      users: {
        type: Array,
        required: true
      }
    },
    methods: {
      emitDeleteUser(userId) {
        this.$emit('delete-user', userId);
      }
    }
  };
  </script>