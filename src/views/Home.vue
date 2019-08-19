<template>
    <v-content>
        <h3>開幕直後の7ミノで組めるTSD一覧</h3>

        <div>
            「ツモ順」と「そのツモ順で組めるTSD」が載っています。<br/>
        </div>

        <router-link to="/main">メイン画面にすすむ</router-link>
    </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>
