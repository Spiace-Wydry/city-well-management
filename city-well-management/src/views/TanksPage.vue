<script setup lang="ts">
import TankCard from "../components/TankCard.vue";

</script>

<template>
    <div class="container">
        <div class="chart">CHART</div>
        <div class="buttons">
            <QBtn color="primary">DODAJ ZBIORNIk</QBtn>
            <QBtn color="primary">ZAMÓW ZBIORNIK</QBtn>
        </div>
        <div class="tanks">
            <TankCard />
            <TankCard />
            <TankCard />
        </div>
    </div>
</template>

<style lang="scss">
.container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr auto;
    width: 100%;
    height: 100%;
    padding: 15px;
}

.chart {
    background-color: aqua;
}

.buttons {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
}

.tanks {
    margin: 10px;
    grid-column: 1 / span 2;
    grid-row: 2;
    height: auto;
    display: flex;
    gap: 1em;
}
</style>