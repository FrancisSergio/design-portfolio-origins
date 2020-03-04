<template lang="pug">
div
    div.navbar.absolute.top0.flex.align-center.col-x.space-between.pt1.nav-bg.pb1
        div.logomark.flex.align-center.ml3
            img(src="../assets/Venn.svg").logovenn
            p.h3.color-d.ml2.bold Francesco Huber
        div.navig.flex.mr6
            router-link(to="").h3.mr2 Portfolio
            router-link(to="").h3.mr2 Kontakt
            router-link(to="").h3 About



</template>

<script>


export default {
    data(){
        return{
        }
    },
}
</script>

<style lang="scss">
    .nav-bg{
        background-color: rgba(255, 255, 255, 0.5)
    }



</style>