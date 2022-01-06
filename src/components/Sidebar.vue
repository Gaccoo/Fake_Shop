<template>
  <div class="sidebar">
    <div class="categories">
      <span :class="category ? 'category' : 'category active'" @click="setActiveCategory(undefined)"
        >ALL PRODUCTS</span
      >
      <span
        v-for="item in categories"
        :class="category === item ? 'category active' : 'category'"
        :key="item"
        @click="setActiveCategory(item)"
      >
        {{ formatName(item) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  data: () => ({
    data: undefined,
    isLoading: true,
  }),
  computed: {
    categories() {
      return this.$store.getters.getShopCategories;
    },
    category() {
      return this.$route.query.category as undefined | string;
    }
  },
  mounted() {
    this.data = this.$store.getters.getShopCategories;
    this.$store
      .dispatch("getShopCategories")
      .then(() => {
        this.isLoading = false;
        console.log("Data received");
      })
      .catch(() => console.error("Network Error"))
      .finally(() => {
        console.log("DONE");
      });
  },
  methods: {
    formatName(value: string) {
      return value.toUpperCase();
    },
    setActiveCategory(category: string) {
      this.$router.replace({ query: { category: category } });
    },
    removeActiveCategory() {
      this.$router.replace({ name: "Shop" });
    },
  },
  watch: {
    $route() {
      const category = this.$route.query.category;
      this.$store.dispatch("actionCategory", category);
    },
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  align-self: flex-start;
}

.categories {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}

.category {
  width: 100%;
  padding: 10px 40px;
  font-size: 14px;
  border-bottom: 1px solid #999;
  cursor: pointer;
  transition: 0.5s;

  &.category:hover {
    border-left: 10px solid #42b983;
  }

  &.active {
    border-left: 10px solid #25694a;
  }
}
</style>
