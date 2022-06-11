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
            Studnia miejska - Kraków
          </RouterLink>
        </QToolbarTitle>
      </QToolbar>
    </QHeader>

    <QDrawer v-model="drawerOpen" show-if-above side="left" bordered behavior="desktop">
      <div class="app-drawer">
        <h4 style="margin-left: 1em;">Kraków</h4>
        <div class="app-drawer-containter">
          <div class="app-drawer-content">
            <p class="nav-section-title">Moje miasto</p>
            <NavigationItem label="Zbiorniki" icon="fas fa-solid fa-glass-water" @hide="drawerOpen = true" to="tanks" />
            <NavigationItem label="Dodaj zbiornik" icon="fas fa-solid fa-circle-plus" @hide="drawerOpen = true"
              to="tanks" />
            <NavigationItem label="Zgłoszenia" icon="fas fa-solid fa-circle-exclamation" @hide="drawerOpen = true"
              to="tanks" />
            <p class="nav-section-title">Informacje</p>
            <NavigationItem label="Alerty" icon="fas fa-solid fa-bell" @hide="drawerOpen = true" to="tanks" />
            <NavigationItem label="Pogoda" icon="fas fa-solid fa-cloud-sun" @hide="drawerOpen = true" to="tanks" />
            <p class="nav-section-title">Dodatkowe informacje</p>
            <NavigationItem label="Okoliczne zasoby wodne" icon="fas fa-solid fa-water" @hide="drawerOpen = true"
              to="tanks" />
            <NavigationItem label="Wododawcy" icon="fas fa-solid fa-person" @hide="drawerOpen = true" to="tanks" />
          </div>
        </div>
      </div>
    </QDrawer>
    <QPageContainer>
      <router-view />
    </QPageContainer>
  </QLayout>
</template>
<i class="fa-solid fa-water"></i>
<style lang="scss">
.nav-section-title {
  margin-left: 1em;
  font-size: 20px;
}

.link {
  text-decoration: none;
  color: inherit;
}

.app-drawer {
  background-color: #F2F2F2;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.app-drawer-containter {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.app-drawer-content {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
