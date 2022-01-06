<template>
  <div class="popup" @click="closePopup">
    <div class="popup-container">
      <div class="close-button">BACK</div>
      <div class="column">
        <div class="image-wrapper">
          <img class="image" :src="activeItem.image" alt="" />
        </div>
      </div>
      <div class="column">
        <div class="item-wrapper">
          <h3>{{ activeItem.price }}$</h3>
          <h2>{{ activeItem.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Popup",
  computed: {
    activeItem(): Product {
      const store = this.$store;
      const activeID = store.getters.getActiveItem;
      return store.getters.getShopData.find(
        (item: Product) => item.id === activeID
      );
    },
  },
  methods: {
    closePopup() {
      this.$store.dispatch("actionActiveItem", undefined);
    },
  },
});
</script>

<style lang="scss" scoped>
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
}

.popup-container {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  width: 80%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  position: relative;
}
.column {
  width: 100%;
}

.image-wrapper {
  width: 100%;
  height: 80%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 20px;
  }
}
.close-button {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  font-weight: 800;
}

.item-wrapper {
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
