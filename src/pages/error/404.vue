<template>
    <view>
        <view style="text-align: center;">
            <text style="font-size: 25px;color: #333;">
                404 Page Not Found
            </text>
        </view>
        <view>
            <text style="font-size: 18px;color: #999;">
                {{errMsg}}
            </text>
        </view>
    </view>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend ({
        data() {
            return {
              errMsg: ''
            }
        },
        onLoad(query:any) {
            this.errMsg = query.errMsg || ''
        },
        methods: {

        }
    })
</script>

<style>

</style>