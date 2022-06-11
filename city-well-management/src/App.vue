<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavigationItem from "./components/NavigationItem.vue";
import { ref } from "vue";

const drawerOpen = ref(true);
const toggleDrawer = () => (drawerOpen.value = !drawerOpen.value);
</script>

<template>
  <QLayout view="lHh lpR lFf">
    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <!-- <div class="fancy-border">
          <QBtn dense flat icon="menu" @click="toggleDrawer" />
        </div> -->
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
      <NavigationItem label="Zbiorniki" icon="fas fa-solid fa-glass-water" to="tanks" />
    </QDrawer>

    <QPageContainer>
      <router-view />
    </QPageContainer>
  </QLayout>
</template>

<style lang="scss">
.link {
  text-decoration: none;
  color: inherit;
}
</style>
