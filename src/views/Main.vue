<template>
    <v-content>
        <v-toolbar>
            <v-toolbar-title>TSD Opener</v-toolbar-title>
        </v-toolbar>

        <div>
            <v-text-field v-model="suffix" label="filtering"/>
        </div>

        <v-content v-if="this.items != null">
            <div v-for="(indexes, name, index) in this.items" :key="name"
                 :class="`panel${index % 2}`"
                 v-if="suffix === '' || name.startsWith(suffix)"
            >
                <div @click="onClick(index)">
                    {{ name }} [{{ indexes.length }}]
                </div>

                <v-content v-if="selectedIndex === index">
                    <ImagesPanel :indexes="indexes" maxWidth="150"/>

                    <div class="close-panel" @click="onClick(index)">
                        Close
                    </div>
                </v-content>
            </div>
        </v-content>
        <v-content v-else>
            Loading...
        </v-content>
    </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ImagesPanel from '@/components/ImagesPanel.vue';

@Component({
    components: {
        ImagesPanel,
    },
})
export default class Main extends Vue {
    private items: { [name in string]: number[] } | null = null;
    private selectedIndex = -1;
    private suffix: string = "";

    public created() {
        setTimeout(() => {
            const i = import('../assets/data_harddrop_nohold.json');
            i.then((data: any) => {
                this.items = data.default as any;
            }).catch(console.error);
        }, 10);
    }

    private onClick(index: number) {
        if (this.selectedIndex != index) {
            this.selectedIndex = index;
        } else {
            this.selectedIndex = -1;
        }
    }
}
</script>

<style scoped>
.panel0 {
    margin: 2px;
    padding: 2px 2px 2px 10px;
    background: #fff;
    font-size: calc(85% + 0.7vw);
}

.panel1 {
    margin: 2px;
    padding: 2px 2px 2px 10px;
    background: #d5e8de;
    font-size: calc(85% + 0.7vw);
}

.close-panel {
    border: solid 3px #666;
    margin: 10px 5px;
    height: 30px;
    width: 150px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
