<script setup lang="ts">
import { RouterLink } from "vue-router";
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
        <QToolbarTitle>
          <RouterLink to="/" class="link">
            <QAvatar>
              <img src="./assets/Logo.svg" />
            </QAvatar>
              Studnia miejska
          </RouterLink>
        </QToolbarTitle>
        <div class="fancy-border">
          <QBtn dense flat icon="menu" @click="toggleLeftDrawer" color="black"/>
        </div>
      </QToolbar>
    </QHeader>

    <QDrawer show-if-above v-model="leftDrawerOpen" side="right" bordered>
      <NavigationItem label="Test" icon="fas fa-regular fa-close" to="test"/>
    </QDrawer>

    <QPageContainer>
      <router-view />
    </QPageContainer>

  </QLayout>
</template>

<style lang="scss">
.fancy-border {
  background-color: white;
  border-radius: 0px 0px 0px 24px;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.link {
  text-decoration: none; 
  color: inherit;
}
</style>
