<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavigationItem from "./components/NavigationItem.vue";
import { ref } from "vue";

const drawerOpen = ref(false);
const toggleDrawer = () => (drawerOpen.value = !drawerOpen.value);
</script>

<template>
  <QLayout view="hHh lpR fFf">
    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <div class="fancy-border">
          <QBtn dense flat icon="menu" @click="toggleDrawer" />
        </div>
        <QToolbarTitle>
          <RouterLink to="/" class="link">
            <QAvatar rounded>
              <img src="./assets/Logo.svg" />
            </QAvatar>
            Studnia miejska
          </RouterLink>
        </QToolbarTitle>
      </QToolbar>
    </QHeader>

    <QDrawer v-model="drawerOpen" show-if-above side="left" bordered>
      <NavigationItem label="Test" icon="fas fa-regular fa-close" to="test" />
    </QDrawer>

    <QPageContainer>
      <router-view />
    </QPageContainer>
  </QLayout>
</template>

<style lang="scss">
.fancy-border {
}

.link {
  text-decoration: none;
  color: inherit;
}
</style>
