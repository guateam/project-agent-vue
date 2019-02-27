<template>
    <div class="notice">
        <v-list two-line>
            <template v-for="(item, index) in list1">
                <v-subheader v-if="item.header" :key="item.header">
                    {{ item.header }}
                </v-subheader>
                <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                <v-list-tile v-else :key="item.title" avatar @click="$router.push('./approval')">
                    <v-list-tile-avatar>
                        <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>

        <v-divider></v-divider>

        <v-list two-line>
            <template v-for="(item, index) in list2">
                <v-subheader v-if="item.header" :key="item.header">
                    {{ item.header }}
                </v-subheader>
                <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                <v-list-tile v-else :key="item.title" avatar @click="$router.push('./callme')">
                    <v-list-tile-avatar>
                        <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </div>
</template>

<script>
    export default {
        name: "Notice",
        props: ['list1','list2']
    }
</script>

<style scoped>

</style>
