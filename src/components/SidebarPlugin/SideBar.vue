<template>
  <div class="sidebar" :data-color="activeColor" :data-image="backgroundImage" :style="sidebarStyle">
    <div class="logo">
      <a class="simple-text logo-mini">
        <img :src="imgLogo" alt="">
      </a>
      <a target="_blank" class="simple-text logo-normal" style="font-weight: bold; letter-spacing: 1px">
        {{title}}
      </a>
    </div>
    <div class="sidebar-wrapper">
      <slot name="content"></slot>
      <md-list class="nav">
        <slot>
          <sidebar-link v-for="(link,index) in sidebarLinks"
                        :key="link.name + index"
                        :to="link.path"
                        :link="link">
          </sidebar-link>
        </slot>
      </md-list>
    </div>
  </div>
</template>
<script>
import SidebarLink from './SidebarLink.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default{
  components: {
    SidebarLink,
    MobileMenu
  },
  props: {
    title: {
      type: String,
      default: 'Ventanilla Administrativa'
    },
    backgroundImage: {
      type: String,
      default: require('@/assets/img/sidebar-2.jpg')
    },
    imgLogo: {
      type: String,
      default: require('@/assets/img/vue-logo.png')
    },
    activeColor: {
      type: String,
      default: 'orange',
      validator: (value) => {
        let acceptedValues = ['', 'purple', 'blue', 'green', 'orange', 'red']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide () {
    return {
      autoClose: this.autoClose
    }
  },
  computed: {
    sidebarStyle () {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      }
    }
  }
}
</script>
<style>
  @media screen and (min-width: 991px) {
    .nav-mobile-menu{
      display: none;
    }
  }
</style>
