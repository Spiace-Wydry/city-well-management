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
    <QItem v-ripple clickable :active="props.label === 'Outbox'" @click="router.push(props.to)">
        <QItemSection avatar>
            <QIcon :name="props.icon" />
        </QItemSection>
        <QItemSection>
            {{ props.label }}
        </QItemSection>
    </QItem>
</template>
