<template>
  <div class="item-card">
      <div class="image-wrapper">
    <img class="image" :src="data.image" alt="not found">
    </div>
      <div class="button-wrapper">
        <button class="button gold">ADD TO CART</button>
        <button class="button">BUY</button>
      </div>
    <div class="item-info">
        <div class="price">
          <p>{{data.price.toFixed(2)}}$</p>
          <p class="dim">/ piece</p>
        </div>
    <span>{{data.title}}</span>
    </div>

  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent ({
  name: "ItemCard",
  props: ['data']

})
</script>

<style lang="scss" scoped>

.item-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  gap: 20px;
  cursor: pointer;
}

.image-wrapper {
  width: 200px;
  height: 200px;
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

.item-info {
  display: flex;
  flex-direction: column;
  gap: 5px;

  & .price {
    display: flex;
    justify-content: center;
    padding: 5px;
    gap: 10px;
  }
  & .dim {
    font-size: 10px;
    opacity: .7;
  }
}

.button-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & .button {
    width: 100%;
    padding: 5px 0;
    background-color: #42b983;
    color: #fff;
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;

    &.gold {
      background-color: goldenrod;
    }

  }

}


</style>
