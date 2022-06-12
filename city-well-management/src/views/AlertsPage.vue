<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref } from 'vue';

var quasar = useQuasar();


const date = ref("");
const text = ref("");

const onAlertSend = () => {
    quasar.notify(
        {
            type: 'positive',
            message: 'Udało się wysłać :)'
        }
    )
}

</script>

<template>
    <div class="container">
        <div class="alerts">
            <div class="date">Sobota 11.06</div>
            <div class="alert">
                <div class="fancy-check" />
                <span class="alert-text">Przywrócono ruch tramwajowy na ulicy Cystersów</span>
            </div>
            <div class="alert">
                <div class="fancy-check" />
                <span class="alert-text">Zakłócenia w ruchu tramwajowy na ulicy Cystersów</span>
            </div>
            <div class="alert">
                <div class="fancy-check" />
                <span class="alert-text">Woda cieknie przy ulicy al. Pokoju</span>
            </div>
            <div class="alert">
                <div class="fancy-check" />
                <span class="alert-text">Duże opady deszczu w mieście</span>
            </div>
            <div class="alert">
                <div class="fancy-check" />
                <span class="alert-text">Przywrócono ruch tramwajowy na ulicy Cystersów</span>
            </div>
            <div class="date">Piątek 10.06</div>
            <div class="alert">
                <div class="fancy-check" />
                <span class="alert-text">Przywrócono ruch tramwajowy na ulicy al. Pokoju</span>
            </div>
            <div class="alert">
                <div class="fancy-check" />
                <span class="alert-text">Zakłócenia w ruchu tramwajowym na ulicy al. Pokoju</span>
            </div>
            <div class="alert">
                <div class="fancy-check" />
                <span class="alert-text">Przywrócono działanie odprowadzania wody do kanalizacji w dzielnicach: <br>
                    - Dębniki <br>
                    - Grzegórzki <br>
                    - Bieżanów Prokocim</span>
            </div>
            <div class="alert">
                <div class="fancy-check" />
                <span class="alert-text">Problem z odprowadzaniem wody do kanalizacji w dzielnicach: <br>
                    - Grzegórzki <br>
                    - Dębniki <br>
                    - Bieżanów Prokocim</span>
            </div>
            <div class="date">Czwartek 09.06</div>
            <div class="alert">
                <div class="fancy-check" />
                <span class="alert-text">Problemy z funkcjonowaniem kanalizacji w mieście</span>
            </div>
            <div class="alert">
                <div class="fancy-check" />
                <span class="alert-text">Duże opady deszczu w mieście</span>
            </div>
        </div>
        <div class="left-panel">
            <QInput filled v-model="date" mask="date" :rules="['date']" bg-color="white" dense label="Data alertu">
                <template v-slot:append>
                    <QIcon name="event" class="cursor-pointer">
                        <QPopupProxy cover transition-show="scale" transition-hide="scale">
                            <QDate v-model="date">
                                <div class="row items-center justify-end">
                                    <QBtn v-close-popup label="Close" color="primary" flat />
                                </div>
                            </QDate>
                        </QPopupProxy>
                    </QIcon>
                </template>
            </QInput>
            <QInput v-model="text" filled type="textarea" bg-color="white" dense />
            <QBtn style="width: 100%;" color="primary" @click="onAlertSend">Wyślij</QBtn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.left-panel {
    background-color: #F2F2F2;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.date {
    font-size: 30px;
    font-weight: 600;
}

.alert {
    background-color: #F2F2F2;
    margin: 10px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .fancy-check {
        background-color: $primary;
        border-radius: 12px 0px 0px 12px;
        width: 20px;
        align-self: stretch;
        min-height: 42px;
    }

    .alert-text {
        margin-left: 10px;
    }
}
</style>