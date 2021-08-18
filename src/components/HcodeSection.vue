<template>

    <div>
        
        <div class="container">

            <div class="row mt-5">
                <h3>Você está vendo notícias do: {{ championShip }}</h3>
            </div>

        </div>
        
        <component :is="currentComponent"></component>

        <div class="container">

            <div class="row my-club mt-5">

                <div class="col-6">
                    <h2>Seu clube é: {{ myClub }}</h2>
                </div>

                <div class="col-6">
                    <HcodeInput v-model="myClub" />
                </div>

            </div>

        </div>

    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import HcodeSectionBanner from './HcodeSectionBanner'
import HcodeInput from './HcodeInput'

export default {
    components: {
        HcodeSectionBanner,
        HcodeSectionNews: () => import('./HcodeSectionNews'),
        HcodeInput
    },
    data() {
        return {
            
        }
    },
    props: {
        currentComponent: String
    },
    computed: {
        // get properties from state
        // championShip() {
        //     return this.$store.state.championship
        // },
        // myClub() {
        //     return this.$store.state.clubName
        // },
        ...mapGetters({ 
            // getters acessam os dados diretamento do state e retornam:
            // getters é usado para acessar determinado atributo de um obj,
            // fazer um filter, retornar um .length, alterar texto, inserir
            championShip: 'getChampionship', 
            myClub: 'getClubName'
        })
    }
}
</script>

<style scoped>

</style>