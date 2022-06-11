<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="chart"></div>
        <div class="buttons">
            <QBtn color="primary">DODAJ ZBIORNIk</QBtn>
            <QBtn color="primary">ZAMÓW ZBIORNIK</QBtn>
        </div>
    </div>
</template>

<style lang="scss">
.container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    height: 100%;
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
</style>