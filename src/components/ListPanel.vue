<template>
    <v-container>
        <v-text-field v-model="suffix" label="filtering"/>

        <v-container v-if="this.items != null">
            <div v-for="(item, index) in this.items" :key="name"
                 :class="`panel${index % 2}`"
                 v-if="suffix === '' || item.name.startsWith(suffixUpperCase)"
            >
                <div @click="onClick(index)">
                    {{ item.name }} [{{ item.indexes.length }}]
                </div>

                <v-container v-if="selectedIndex === index">
                    <ImagesPanel :indexes="indexes" maxWidth="150" :airTSD="airTSD"/>

                    <div class="close-panel" @click="onClick(index)">
                        Close
                    </div>
                </v-container>
            </div>
        </v-container>
        <v-container v-else>
            Loading...
        </v-container>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import ImagesPanel from '@/components/ImagesPanel.vue';

function getData(hold: boolean, harddrop: boolean) {
    if (hold) {
        if (harddrop) {
            return import('../assets/data_harddrop_hold.json');
        } else {
            return import('../assets/data_softdrop_hold.json');
        }
    } else {
        if (harddrop) {
            return import('../assets/data_harddrop_nohold.json');
        } else {
            return import('../assets/data_softdrop_nohold.json');
        }
    }
}

@Component({
    components: {
        ImagesPanel,
    },
})
export default class ListPanel extends Vue {
    @Prop() hold!: boolean;
    @Prop() harddrop!: boolean;
    @Prop() airTSD!: boolean;

    private items: { name: string, indexes: number[] }[] | null = null;
    private selectedIndex = -1;
    private suffix: string = "";

    @Watch('hold')
    onChangedHold() {
        this.reload();
    }

    @Watch('harddrop')
    onChangedHarddrop() {
        this.reload();
    }

    @Watch('airTSD')
    onChangedAirTSD() {
        this.reload();
    }

    public created() {
        this.reload();
    }

    private reload() {
        this.items = null;
        setTimeout(() => {
            const i = getData(this.hold, this.harddrop);
            i.then((data: any) => {
                const items = data.default as { [name in string]: number[] };
                const keys = Object.keys(items).sort((a, b) => a.localeCompare(b));
                const filtered: { name: string, indexes: number[] }[] = [];

                if (this.airTSD) {
                    for (const key of keys) {
                        filtered.push({ name: key, indexes: items[key] });
                    }
                } else {
                    for (const key of keys) {
                        filtered.push({ name: key, indexes: items[key].filter(v => v < 82) });
                    }
                }

                this.items = filtered;
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

    get suffixUpperCase() {
        return this.suffix.toUpperCase();
    }
}
</script>

<style scoped>
.panel0 {
    margin: 0px 2px;
    padding: 2px 2px 2px 10px;
    background: #fff;
    font-size: calc(85% + 0.7vw);
}

.panel1 {
    margin: 0px 2px;
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
