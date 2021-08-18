<template>
    
    <input 
        type="text" 
        :value="clubName" 
        @keyup="updateClubName($event.target.value)" 
        class="form-control" 
        placeholder="Digite seu clube"
    />

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        // quando o objeto tem o mesmo nome não precisa nomear ex:
        // ...mapGetters({ nameQualquer: 'clubName' })
        ...mapGetters({
            clubName: 'getClubName'
        })
        
    },

    methods: {
        ...mapActions(['updateClubName'])
    }
}
</script>

<style scoped>

</style>