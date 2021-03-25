<template>
  <div class="button" @click="$router.go(-1)">
    <Icon :icon="['fas', 'user-secret']" /> BACK
  </div>
</template>

<script>
export default {
  name: "BackButton",
};
</script>

<style scoped></style>
