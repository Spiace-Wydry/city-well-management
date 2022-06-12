<script setup lang="ts">
import { useRouter } from "vue-router";

var router = useRouter();

var props = defineProps<{
    label: string;
    icon?: string;
    to: string;
}>();
</script>

<template>
    <QItem dense v-ripple clickable @click="router.push(props.to)" class="item text-white">
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
    border-radius: 0px 12px 12px 0px;
}
</style>