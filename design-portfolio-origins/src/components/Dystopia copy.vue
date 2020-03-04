<template lang="pug">
div
    Navbar

    section.mb12
        div.flex.flex-center
            //div.verticalstrich.mt8.mr4.bg-black
            div.pt8.mt4.col-m
                h2.h0.black.italic.mb8 Dystopia<br> &ndash;&emsp14;Ein CD-Booklet designen

        div.border-y.pt4.pb4
            div.flex.col-m.mx-auto
                p.p.lh2.col-m.pr2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. it amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invid.
                p.p.lh2.col-m.pl2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmtur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


    section.mb12
        div.mx12
            div.col-x.flex.mb4
                img(src="../assets/Booklet/DB_02.jpg", alt="alt").col-33.shadow.mr8
                div.col-33.mt12
                    div.stoerer.bg-black.mb2
                    p.p.lh-2.col-62 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
            
            div.col-x.flex.mb4
                div.col-33
                img(src="../assets/Booklet/DB_03.jpg", alt="alt").col-33.shadow.mr4
                img(src="../assets/Booklet/DB_04.jpg", alt="alt").col-33.shadow

            div.col-x.flex.mb4
                img(src="../assets/Booklet/DB_05.jpg", alt="alt").col-33.shadow.mr4
                img(src="../assets/Booklet/DB_06.jpg", alt="alt").col-33.shadow
                div.col-33
            


    section.mx4.linksection
        div.centered-links.flex-column.flex.relative(v-on:mouseover="grey = true", v-on:mouseleave="grey=false").color-w
            div.linkstroke
            router-link(to="/Vuejs").megalink NEXT PROJECT
            div.linkstroke
            router-link(to="", v-on:click.native="backToStart()").megalink BACK TO START
            div.linkstroke
     

            
        

</template>

<script>
import Navbar from './Navbar.vue'

export default {

    components: {
        Navbar,
    },

    data(){
        return{
            crud: false
        }
    },

    methods:{
        backToStart(){
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }

}
</script>

<style lang="scss">


</style>