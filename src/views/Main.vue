<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>TSD Opener</v-toolbar-title>

            <v-spacer/>

            <div class="checkbox">
                <v-checkbox v-model="softdrop" label="Softdrop"/>
            </div>

            <div class="checkbox">
                <v-checkbox v-model="hold" label="Hold"/>
            </div>

            <div class="checkbox">
                <v-checkbox v-model="airTSD" label="AirTSD"/>
            </div>

            <div class="checkbox">
                <v-checkbox v-model="mirror" label="Mirror"/>
            </div>
        </v-app-bar>

        <v-content>
            <ListPanel :harddrop="!softdrop" :hold="hold" :airTSD="airTSD" :mirror="mirror"/>
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
    private softdrop: boolean = false;
    private hold: boolean = false;
    private airTSD: boolean = true;
    private mirror: boolean = true;
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
