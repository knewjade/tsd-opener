<template>
    <v-container>
        <h3>開幕直後の7ミノで組めるTSD一覧</h3>

        <v-container>
            「ツモ順」と「そのツモ順で組めるTSDの地形」が載っています。<br>
            比較的、ページが重いのでご注意ください。
        </v-container>

        <h4>メニューの説明</h4>

        <ul class="menu-description">
            <li>Harddrop = オンのとき、T以外をハードドロップのみで組める地形を表示します</li>
            <li>Hold = オンのとき、T以外をホールドしないと組めない地形も表示します</li>
            <li>AirTSD = オンのとき、Tが地面から離れている地形も表示します</li>
        </ul>

        <v-container>
            <router-link to="/main">メイン画面にすすむ</router-link>
        </v-container>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style scoped>
.menu-description {
    margin-left: 40px;
}
</style>
