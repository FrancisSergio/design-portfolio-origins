<template lang="pug">
div

    div(v-on:mouseleave="expand = false").navbar-wrapper
            div(v-bind:class="{ expand: expand }").menu

            
            router-link(to="/", v-bind:class="{expandblack: expand}").logo.h3.light Francesco Huber
            
            div
                div.flex.flex-column.dunno
                    p.h3.mb4 Home
                    p.h3.mb4 Projekte
                    p.h3.mb4 About
                    p.h3.mb4 Kontakt
                div(v-on:click="toggleExpand()").inner-burger.flex.burger.flex-column
                    div.stroke.bg-black
                    div.stroke.bg-black
                    div.stroke.bg-black
</template>

<script>


export default {
    data(){
        return{
            expand: false
        }
    },
    methods:{
        toggleExpand(){
            this.expand = !this.expand
        }
    }
}
</script>

<style lang="scss">

.dunno{
    margin-top: -400px;
    margin-bottom: 47px;
    margin-left: 290px;
}

.logo{
    position: fixed; 
    top: 0;
    z-index: 9999;
    left: 0;
    color: #fff;
    background-color: #000;
    padding: .9rem 2rem;
    transition: padding .6s
}

.expandblack{
    padding-bottom: 508px;
}

.menu{
    overflow: hidden;
    box-sizing: border-box;
    height: 0px;
    transition: height .6s;
}

.expand{
    height: 493px;
}

.navbar-wrapper{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 999;
    background-color: white;
    padding-bottom: 1rem;
    //border-bottom: 1px solid black;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1)
}

.burger{
    justify-content: center;
    width: 1.3rem;
    margin: 0 auto;
    margin-top: 1.3rem;

    &:hover{
        cursor: pointer;
    }
}

.stroke{
    width: 1.3rem;
    height: 2px;
    margin-bottom: 0.35rem;
}

</style>