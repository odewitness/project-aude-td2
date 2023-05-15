<template>
<i-layout vertical>
    <i-layout-aside>
        <i-checkbox-group v-model="checked" color="light">
        <i-checkbox value="apple">Apple</i-checkbox>
        <i-checkbox value="banana">Banana</i-checkbox>
        <i-checkbox value="strawberry">Strawberry</i-checkbox>
        <i-checkbox value="mango">Mango</i-checkbox>
        </i-checkbox-group>
    </i-layout-aside>

    <i-layout>

        <i-layout-content>
            Content
            
        </i-layout-content>

        <i-layout-footer>
            Footer
        </i-layout-footer>
    </i-layout>
</i-layout>
</template>

<script>
export default {
  name: 'LayoutV1',
  props: {
    msg: String
  }
}
 import{getMakeupData} from '@/services/api/countriesAPI.js'
 console.log(getMakeupData)
</script>

<style>
.layout-aside {
  width: 12rem;
}
</style>