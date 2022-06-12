<script setup lang="ts">


const props = defineProps<{
    image: string,
    title: string,
    address: string,
    description: string
}>();

</script>

<template>
    <div class="report">
        <QImg :src="props.image" min-height="184px" min-width="220px" class="report-image" />
        <div class="card-description">
            <div class="card-title">{{ props.title }}</div>
            <div class="address">
                <QIcon name="fas fa-solid fa-location-dot" />
                <div class="address-text">{{ props.address }}</div>
            </div>
            <div class="details">{{ props.description }}</div>
        </div>
        <div class="buttons-container">
            <QBtn round flat icon="fas fa-solid fa-circle-xmark" color="red" />
            <QBtn round flat icon="fas fa-solid fa-circle-check" color="green" />
        </div>
    </div>
</template>

<style lang="scss">
.report {
    display: flex;
    flex-direction: row;
    background-color: #F5F5F5;
    height: 226px;
    border-radius: 24px;
    margin: 24px;
}

.report-image {
    margin: 20px;
}

.card-description {
    margin: 20px;
}

.card-title {
    font-size: 30px;
    font-weight: 500;
}

.address {
    display: flex;
    color: #000000B2;
    align-items: center;
    gap: 12px;
}

.details {
    font-weight: 500;
}

.buttons-container {
    width: 100px;
    position: relative;

    &::before {
        width: 1px;
        height: 226px;
        background-color: #00000066;
        content: "";
        position: absolute;
        top: 0px;
    }
}
</style>