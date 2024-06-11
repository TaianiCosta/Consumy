<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Auth } from '../auth'
import { ref } from 'vue'
import UserProfile from '../components/UserProfile.vue'

const auth = new Auth()

const currentUser = ref(auth.currentUser())

const signOut = function () {
  auth.signOut(() => {
    currentUser.value = auth.currentUser()
  })
}
</script>

<template>
  <main>
    <h1>Delivery: Welcome</h1>

    <tenplate v-if="currentUser">
      <h3>Hi, {{ currentUser.email }}</h3>
      <br />
      <nav>
        <a @click="signOut">Sing Out</a>
      </nav>
    </tenplate>

    <template v-else>
      <nav>
        <RouterLink :to="{ name: 'signin' }"> Sign In </RouterLink>
      </nav>
    </template>
  </main>
</template>
