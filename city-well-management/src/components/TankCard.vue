<script setup lang="ts">

</script>

<template>
    <QCard class="tank-card">
        <QImg src="../assets/zachod.jpg"></QImg>
        <QCardSection>
            <div class="name">Bagry</div>
            <div class="description">Zalew Bagry, Kraków</div>
            <div class="water-level">Poziom wody 70%</div>
        </QCardSection>
    </QCard>
</template>

<style lang="scss">
.tank-card {
    width: 100%;
    max-width: 350px;
}

.name {
    font-weight: 600;
    font-size: 30px;
}

.description {
    color: #000000B2;
    font-size: 24px;
}

.water-level {
    font-size: 26px;
    font-weight: 500;
}
</style>