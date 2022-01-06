<template>
  <div class="shop-section">
    <Sidebar class="sidebar" />
    <div class="shop-list">
      <h4 v-if="isLoading">Unloading your items from warehouse...</h4>
      <ItemCard
        v-else
        v-for="item in shopDataToShow"
        :key="item.id"
        :data="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemCard from "@/components/ItemCard.vue";
import Sidebar from "@/components/Sidebar.vue";

export default defineComponent({
  name: "Shop",
  components: { ItemCard, Sidebar },
  data: () => ({
    isLoading: true,
    data: undefined,
  }),
  computed: {
    shopDataToShow() {
      const store = this.$store;
      const category = this.$route.query.category as undefined | string;
      const shopDataToShow = store.state.shopData;

      if (!category) {
        return shopDataToShow.filter((item) =>
          item.title
            .toLowerCase()
            .includes(this.$store.state.searchQueue.toLowerCase())
        );
      }

      return shopDataToShow
        .filter((item) => item.category === category)
        .filter((item) =>
          item.title
            .toLowerCase()
            .includes(this.$store.state.searchQueue.toLowerCase())
        );
    },
  },
  mounted() {
    this.data = this.$store.getters.getShopData;
    this.$store.dispatch("getShopData").then(() => {
      this.isLoading = false;
    });
  },
});
</script>

<style lang="scss">
.shop-section {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
}

.sidebar {
  background-color: #fff;
}

.shop-list {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-auto-rows: 400px;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}
</style>
