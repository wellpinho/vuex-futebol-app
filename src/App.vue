<template>

  <div id="app">

    <HcodeHeader
      @select-championship="changeChampionship"
      @change-component="changeComponent"
    />

    <HcodeSection
      :championship="championship"
      :current-component="currentSectionComponent"
    />
    
    <HcodeFooter />

  </div>

</template>

<script>
import { mapActions } from 'vuex'
import HcodeHeader from './components/HcodeHeader'
import HcodeFooter from './components/HcodeFooter'
import HcodeSection from './components/HcodeSection'

export default {
  name: 'App',
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection
  },
  data() {
    return {
      currentSectionComponent: 'HcodeSectionBanner'
    }
  },
  methods: {
    //changeChampionship(value) {
      // mutation usam o commit e passando nome do método criado nele
      // valu é passado o valor logo acima
      // this.$store.commit('setChampioship', value)

    ...mapActions({
      // get action method and say for mutation work!
      changeChampionship: 'changeChampioship' 
    }),

    changeComponent(value) {

      let component;
      
      switch (value) {
        case 'home':
        default:
          component = 'HcodeSectionBanner';

        break;

        case 'news':
            component = 'HcodeSectionNews'
        break;
      }

      this.currentSectionComponent = component;

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap')
</style>
