<script setup lang="ts">
import { RouterView } from "vue-router";
import { useQuasar } from "quasar";
const $q = useQuasar();
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
      <NavigationItem>
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
