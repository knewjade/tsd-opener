<template>
    <v-container>
        <v-text-field v-model="suffix" label="filtering"/>

        <v-container v-if="this.items != null && this.fumens != null">
            <div v-for="(item, index) in this.items"
                 :key="item.name"
                 :class="`panel${index % 2}`"
                 v-if="suffix === '' || item.name.startsWith(suffixUpperCase)"
            >
                <div @click="onClick(index)">
                    {{ item.name }} [{{ item.indexes.length }}]
                </div>

                <v-container v-if="selectedIndex === index">
                    <ImagesPanel :indexes="item.indexes" :fumens="fumens" maxWidth="150" :airTSD="airTSD"/>

                    <div class="close-panel" @click="onClick(index)">
                        Close
                    </div>
                </v-container>
            </div>
        </v-container>

        <v-container v-if="this.message != null">
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

function getFumens() {
    return import('../assets/data_fumen.json').then((data) => {
        return data.fumens.map((line) => ({
            data: line[0],
            mirror: line[1],
        }));
    });
}

@Component({
    components: {
        ImagesPanel,
    },
})
export default class ListPanel extends Vue {
    @Prop() private hold!: boolean;
    @Prop() private harddrop!: boolean;
    @Prop() private airTSD!: boolean;
    @Prop() private mirror!: boolean;

    private items: Array<{ name: string, indexes: number[] }> | null = null;
    private fumens: Array<{ data: string, mirror: number }> | null = null;
    private selectedIndex = -1;
    private suffix: string = '';
    private message: string | null = null;

    public created() {
        this.reload();
    }

    get suffixUpperCase() {
        return this.suffix.toUpperCase();
    }

    @Watch('hold')
    private onChangedHold() {
        this.reload();
    }

    @Watch('harddrop')
    private onChangedHarddrop() {
        this.reload();
    }

    @Watch('airTSD')
    private onChangedAirTSD() {
        this.reload();
    }

    @Watch('mirror')
    private onChangedMirror() {
        this.reload();
    }

    private reload() {
        this.fumens = null;
        this.items = null;
        this.message = 'Loading...';
        setTimeout(() => {
            const promise = getData(this.hold, this.harddrop);

            getFumens().then((fumens: any) => {
                promise.then((data: any) => {
                    const items = data.default as { [name in string]: number[] };
                    const keys = Object.keys(items).sort((a, b) => a.localeCompare(b));
                    const filtered: Array<{ name: string, indexes: number[] }> = [];

                    const mirrorFilter = (indexes: number[]) => {
                        if (this.mirror) {
                            return indexes;
                        }

                        const indexSet = new Set<number>();
                        const nextIndexes: number[] = [];

                        for (const index of indexes) {
                            if (!indexSet.has(fumens[index].mirror)) {
                                nextIndexes.push(index);
                                indexSet.add(index);
                            }
                        }

                        return nextIndexes;
                    };

                    const createIndexes = (indexes: number[]) => {
                        if (this.airTSD) {
                            return mirrorFilter(indexes);
                        }
                        return mirrorFilter(indexes.filter((v) => v < 82));
                    };

                    for (const key of keys) {
                        filtered.push({ name: key, indexes: createIndexes(items[key]) });
                    }

                    this.fumens = fumens;
                    this.items = filtered;
                    this.message = null;
                });
            }).catch((error) => {
                this.message = error.toString();
            });
        }, 0);
    }

    private onClick(index: number) {
        if (this.selectedIndex !== index) {
            this.selectedIndex = index;
        } else {
            this.selectedIndex = -1;
        }
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
