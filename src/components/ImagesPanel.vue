<template>
    <div class="wrapper">
        <div v-for="value in this.indexes" :key="value" class="field-card">
            <a :href="`https://harddrop.com/fumen/?v115@${fumens[value].data}`" target="_blank">
                <v-img
                        :alt="`field${padding(value, 3)}`"
                        :src="`figs/${padding(value, 3)}.png`"
                        :max-width="maxWidth"
                />
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    @Prop() private indexes!: number[];
    @Prop() private fumens!: Array<{ data: string, mirror: number }>;
    @Prop() private maxWidth!: number;

    private padding(value: number, length: number) {
        return ('000' + value).slice(-length);
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
}

.field-card {
    margin: 2px;
    padding: 2px;
}
</style>
