<template>
    <v-container>
        <h3>開幕直後の7ミノで組めるTSD一覧</h3>

        <v-container>
            「ツモ順」と「そのツモ順で組めるTSDの地形」が載っています。<br>
            比較的、ページが重いのでご注意ください。
        </v-container>

        <h4>メニューの説明</h4>

        <ul class="menu-description">
            <li>Softdrop = オンのとき、Tミノ以外でソフトドロップが必要な地形も表示します</li>
            <li>Hold = オンのとき、Tミノ以外をホールドしないと組めない地形も表示します</li>
            <li>AirTSD = オンのとき、Tミノが地面から離れている地形も表示します</li>
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
