<template lang="pug">
div.landing-page

    Navbar

    .img-overlay
    img(src="../assets/glasses.jpg", alt="alt").background-image

    img(src="../assets/arrow.svg", alt="alt").arrow

    section.site-intro
        h1.site-heading.h00.light.color-w My Design Journey

    section.project-one.flex.mt24
        div.presenter.relative.color-b
            div.project-heading.p4.bg-white.absolute.mr8
                div.flex.space-between.mb2
                    p.p Studium
                    p.p 01
                h3.h1 Exploring Vue.js
            img(src="../assets/thumbnail-01.jpg", alt="alt").thumbnail
        div.intro.color-b
            div.p4.pl8.pr8
                h4.h3.color-b.mb3.mt4.bold What I've learnt
                p.h3.mb3.light Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                router-link(to="/ProjectOne").btn.btn-white Click me!

    section.project-two.flex.mt24
        div.intro.color-b.intro-right
            div.p4.pr8.pl8
                h4.h2.color-b.mb3.mt4.bold What I've learnt
                p.h3.mb3.light Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                router-link(to="/").btn.btn-white Click me!
        div.presenter.relative.color-b
            div.project-heading.ph-right.p4.bg-white.absolute
                div.flex.space-between.mb2
                    p.p Code
                    p.p 02
                h3.h1 My Design Journey
            img(src="../assets/thumbnail-01.jpg", alt="alt").thumbnail





</template>

<script>
import Navbar from './Navbar.vue'

export default {
    components: {
        Navbar
    }

}
</script>

<style lang="scss">

.arrow{
    height: 80px;
    position: absolute; 
    left: 50%;
    bottom: 5%;
    transform: translate(-50%, -50%);
}

.landing-page{
    width: 100%;
}

.img-overlay{
    position: absolute; 
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-color:rgba(0, 0, 0, 0.2)
}

.background-image{
    position: absolute; 
    top:0;
    z-index: -2;
    width: 100%;
    height: 100vh;
    object-fit: cover;
}

.site-intro{
    height: 90vh;
    width: 100%;
}

.site-heading{
    text-align: center;
    padding: 2rem;
    width: 800px;
    margin: 0 auto !important;
    margin-top: 20rem !important;
    border: 4px solid white;
}

.presenter{
    width: 61.8%;
}

.intro{
    width: 38.2%;


}

.intro-right{
    position: relative;
    
}

.thumbnail{
    height: 600px;
    width: 100%;
    object-fit: cover;
}

.project-heading{
    width: 45%;
    top: -6rem;
    right: 0;
    box-shadow: 0px 32px 32px 5px rgba(0, 0, 0, 0.5)
}

.ph-right{
        left: 0;
        margin-left: 8rem;
    }

</style>