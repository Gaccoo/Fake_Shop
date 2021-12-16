<template>
  <div class="shop-section">
    <Sidebar class="sidebar" />
    <div class="shop-list">
      <h2 v-if="isLoading">Loading...</h2>
      <ItemCard
        v-else
        v-for="item in allShopData"
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
    allShopData() {
      const allShopData = this.$store.state.shopData;
      return allShopData.filter((item) =>
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
    console.log(this.data);
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
