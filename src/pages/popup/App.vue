<script setup lang="ts">
chrome.runtime.onInstalled.addListener(() => {
  // chrome.browserAction.setBadgeText({ text: "1" });
  chrome.action.setBadgeText({
    text: 'OFF',
  });
});
</script>

<template>
  <div class="page">Popup</div>
</template>

<style lang="scss" scoped>
.page {
  width: 300px;
  padding: 15px;
}
</style>
