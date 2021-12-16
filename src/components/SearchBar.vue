<template>
  <form class="form" @submit.prevent="setSearch">
    <input class="input window" v-model="searchValue" type="text" placeholder="Search...">
    <input class="input button" type="submit" value="Go">
  </form>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent ({
  name: "SearchBar",
  data: () => ({
    searchValue: '',
  }),
  methods: {
    setSearch() {
      this.$store.dispatch('actionSearchValue', this.searchValue)
    }
  }
})
</script>

<style scoped>

.form {
  width: 600px;
  display: flex;
}
  .input {
    padding: 10px 40px;
  }

  .button {
    background-color: #42b983;
    border: 2px solid #42b983;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  .window {
    border-radius: 5px 0 0 5px;
    border: 2px solid #42b983;
    flex-grow: 1;
  }
</style>
