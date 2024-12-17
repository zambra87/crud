<template>
    <form @submit.prevent="emitAddUser">
      <input v-model="name" placeholder="Nombre del usuario" required />
      <input v-model="mail" placeholder="Correo del usuario" required />
      <button type="submit">Agregar Usuario</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        mail: ''
      };
    },
    methods: {
      emitAddUser() {
        this.$emit('add-user', { name: this.name, mail: this.mail });
        this.name = '';
        this.mail = '';
      }
    }
  };
  </script>