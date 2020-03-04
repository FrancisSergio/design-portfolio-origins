<template lang="pug">
div
    Navbar

    section.mb12
        img(src="../assets/book_mockup.jpg").lein-bg
        div.bg-second.greet.p4
            div.flex.col-x
                div.col-m
                    h1.h05.bold.mb1 Grüncool 2019
                    p.h2 Klimaschutz gestalten
                div.flex.roboto
                    div.col-33.mr8
                        p.h05.mb4 100
                        p.h2 Stunden
                    div.col-33.mr8
                        p.h05.mb4 100
                        p.h2 Stunden
                    div.col-33
                        p.h05.mb4 100
                        p.h2 Stunden
    
    section.mb12
        div.mx12
            h3.h2.mb2 Aktivivismus visualisieren.
            div.flex.pr8
                p.pxl.lh2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                div.mx2
                p.pxl.lh2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


</template>

<script>
import Navbar from './Navbar.vue'

export default {
    components: {
        Navbar
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