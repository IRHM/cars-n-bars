<template>
  <div class="button" @click="$router.go(-1)">
    <Icon
      icon="angle-left"
      size="2x"
      style="padding-right: 5px; font-weight: bold;"
    />
    <strong>Back</strong>
  </div>
</template>

<script>
export default {
  name: "BackButton",
};
</script>

<style scoped></style>
