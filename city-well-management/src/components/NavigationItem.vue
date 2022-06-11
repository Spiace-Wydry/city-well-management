<script setup lang="ts">
import { useRouter } from "vue-router";
import { defineProps } from "vue";

var router = useRouter();

var props = defineProps<{
    label: string;
    icon?: string;
    to: string;
}>();
</script>

<template>
    <QItem dense v-ripple clickable @click="router.push(props.to)" class="item">
        <QItemSection avatar>
            <QIcon :name="props.icon" />
        </QItemSection>
        <QItemSection>
            {{ props.label }}
        </QItemSection>
    </QItem>
</template>

<style lang="scss">
.item {
    width: 90%;
    background-color: $primary;
    border-radius: 0em 1em 1em 0em;
}
</style>