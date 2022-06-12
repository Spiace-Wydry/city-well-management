<script setup lang="ts">
import Report from "../components/Report.vue";
import dom1 from '../assets/dom1.jpg'
import dom2 from '../assets/dom2.jpg'
import dom3 from '../assets/dom3.jpg'


</script>

<template>
    <Report :image="dom1" title="Dom mi zalało" address="Listkowa 124, 30-123 Kraków"
        description="Było ciemno i deszczowo, woda zbierała się od ponad dwóch dni, mój pies Reksio już dawno mnie zostawił i odpłynął, powinienem zrobić to samo, ale niestety posłuchałem swojego sumienia i postanowiłem pozostać przy moim domu, woda na początku zaczeła spokojnie podchodzić pod próg mego domu, po kilku godzinach wody było już tyle, że zaczeła wlewać mi się do mieszkania i zalewać podłogę," />
    <Report :image="dom2" title="Zalana piwnica" address="Listkowa 124, 30-123 Kraków"
        description="Dzisiejszy dzień był smutny i ponury, woda zbierała się od ponad dwóch dni, mój pies Burek już dawno mnie zostawił i odpłynął, powinienem zrobić to samo, ale niestety posłuchałem swojego sumienia i postanowiłem pozostać przy moim domu, woda na początku zaczeła spokojnie podchodzić pod próg mego domu, po kilku godzinach wody było już tyle, że zaczeła wlewać mi się do mieszkania i zalewać podłogę," />
    <Report :image="dom3" title="Pęknieta rura" address="Listkowa 124, 30-123 Kraków"
        description="Było zimno i glęboko, nikt nie czyta przykładowych opisów w aplikacjach, mój pies Azor już dawno mnie zostawił i uciekł z moim byłym, powinienem zrobić to samo, ale niestety nie chcą mnie już widzieć, postanowiłem pozostać przy planach morderstwa, woda na początku zaczeła spokojnie podchodzić pod próg mego domu, po kilku godzinach wody było już tyle, że zaczeła wlewać mi się do mieszkania i zalewać podłogę," />

</template>

<style lang="scss">
</style>