<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>TSD Opener</v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="checkbox">
                <v-checkbox v-model="harddrop" label="Harddrop"/>
            </div>

            <div class="checkbox">
                <v-checkbox v-model="hold" label="Hold"/>
            </div>

            <div class="checkbox">
                <v-checkbox v-model="airTSD" label="AirTSD"/>
            </div>
        </v-app-bar>

        <v-content>
            <ListPanel :harddrop="harddrop" :hold="hold" :airTSD="airTSD"/>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListPanel from '@/components/ListPanel.vue';

@Component({
    components: {
        ListPanel,
    },
})
export default class Main extends Vue {
    private harddrop: boolean = true;
    private hold: boolean = false;
    private airTSD: boolean = true;
}
</script>

<style scoped>
.checkbox {
    height: 25px;
    max-height: 25px;
    min-height: 25px;
    margin: 0px 5px;
}
</style>
