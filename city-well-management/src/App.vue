<script setup lang="ts">
import { RouterView } from "vue-router";
import { useQuasar } from "quasar";
import NavigationItem from "./components/NavigationItem.vue";
import { ref } from "vue";

const $q = useQuasar();
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value;
</script>

<template>
  <QLayout view="hHh lpR fFf">

    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <QBtn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <QToolbarTitle>
          <QAvatar>
            <img src="./assets/Logo.svg" />
          </QAvatar>
          <RouterView link="/" class="header">
            Studnia miejska
          </RouterView>
        </QToolbarTitle>
      </QToolbar>
    </QHeader>

    <QDrawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <NavigationItem label="Test" icon="fa-close"/>
    </QDrawer>

    <QPageContainer>
      <router-view />
    </QPageContainer>

  </QLayout>
</template>

<style lang="scss">
.header {
  color: azure;
  margin-left: 10px;
}
</style>
