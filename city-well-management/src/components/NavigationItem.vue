<script setup lang="ts">
import { RouterView } from "vue-router";
import { defineProps } from 'vue';

var props = defineProps<{
  label: string
  icon?: string
}>()

</script>

<template>
<QItem clickable :active="props.label === 'Outbox'" v-ripple>
    <QItemSection avatar>
        <QIcon :name="props.icon" />
    </QItemSection>
    <QItemSection>
        {{ props.label }}
    </QItemSection>
</QItem>
</template>