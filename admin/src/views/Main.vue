<template>
  <el-container>
    <el-aside width="200px" >
      <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
          style="height:100%"
      >
        <el-submenu :index="index + 1" v-for="(submenus,index) in items" :key="'a' + index">
          <template #title>
            {{submenus.title}}
          </template>
          <el-menu-item v-for="(item,subiIndex) in submenus.items" :key="'b' + subiIndex" :index="item.path">
            {{item.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        全栈学习-后台管理界面
      </el-header>
      <el-main>
        <router-view>

        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
export default defineComponent({
  name: "Main",
  data() {
    return {
      items:[
        {
          title:'内容管理',
          items:[
            {
              title:'首页',
              path:'/'
            },
            {
            title:'课程管理',
            path:'/course/list'
          },{
            title:'课时管理',
            path:'/episode/list'
          }
          ]
        },
        {
          title:'运营管理',
          items:[
            {
              title:'用户管理',
              path:'/user/list'
            }
          ]
        }
      ]
    }
  },
  methods:{
    handleOpen,
    handleClose
  }
})
</script>

<style scoped>

</style>