<template>
  <div id="app">
    <h1>Gestión de Usuarios</h1>
    <AddUserForm @add-user="addUser" />

    <UserList :users="users" @delete-user="deleteUser" />
  </div>
</template>

<script>
import { getFirestore, collection, onSnapshot, addDoc, doc, deleteDoc } from 'firebase/firestore';
import firebaseApp from './firebaseconfig'; 
import AddUserForm from './components/AddUserForm.vue'; // Formulario
import UserList from './components/UserList.vue'; // Lista de usuarios

export default {
  name: 'App',
  components: {
    AddUserForm,
    UserList
  },
  data() {
    return {
      users: [] 
    };
  },
  mounted() {
    const db = getFirestore(firebaseApp);
    const usersRef = collection(db, 'users');
    onSnapshot(usersRef, (snapshot) => {
      this.users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
    });
  },
  methods: {
    // Método para agregar un usuario a Firebase
    async addUser(newUser) {
      if (newUser.name.trim() === '' || newUser.mail.trim() === '') return;

      const db = getFirestore(firebaseApp);
      const usersRef = collection(db, 'users');
      await addDoc(usersRef, { name: newUser.name, mail: newUser.mail });
    },
    // Método para eliminar un usuario de Firebase
    async deleteUser(userId) {
      const db = getFirestore(firebaseApp);
      const userRef = doc(db, 'users', userId);
      await deleteDoc(userRef);
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 2rem;
}

h1 {
  margin-bottom: 1rem;
}

form input {
  margin: 0.5rem;
  padding: 0.5rem;
}

button {
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #369870;
}
</style>
