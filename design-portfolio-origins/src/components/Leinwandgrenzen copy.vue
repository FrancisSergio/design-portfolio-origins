<template lang="pug">
div
    Navbar

    
    section.vh100
        div.flex.flex-center.flex-column.align-center
            img(src="../assets/book_mockup.png", alt="alt").col-m
            //div.verticalstrich.mt8.mr4.bg-black
            div
                h2.h0.black.italic.mb8 Leinwandgrenzen &ndash;&emsp14;Ein Buch gestalten
    section
        div.border-y.pt4.pb4
            div.flex.col-m.mx-auto
                p.p.lh2.col-m.pr2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. it amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invid.
                p.p.lh2.col-m.pl2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmtur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

    section.mb12
        div.mx12
            div.col-x.flex.mt12.mb2
                img(src="../assets/Bookpages/p-highlight_01.jpg", alt="alt").p-highlight-01.p-highlight
                div.col-33.m-auto
                    div.col-62.mx-auto
                        div.stoerer.bg-black.mb2
                        p.p.lh-2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
            div.col-x.flex.flex-end
                div.col-33.m-auto
                    div.col-62.mx-auto
                        div.flex.flex-end
                            div.stoerer.bg-black.mb2
                        p.p.lh-2.text-right Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                img(src="../assets/Bookpages/p-highlight_02.jpg", alt="alt").p-highlight-02.p-highlight.mb2.mr12
            div.col-x
                img(src="../assets/Bookpages/p-highlight_03.jpg", alt="alt").p-highlight-03.p-highlight.mb2.ml12
            div.col-x
                img(src="../assets/Bookpages/p-highlight_04.jpg", alt="alt").col-x.mb2.shadow
            div.col-x.flex.flex-end
                img(src="../assets/Bookpages/p-highlight_05.jpg", alt="alt").p-highlight-05.p-highlight.mb6.mr12
            div.colx.flex.flex-center
                p.btn-new.pxl.color-w.bold.mb12 Ganzes Buch ansehen

            
    section.mb24
        h3.h0.black.italic.text-center.mb8.color-w.bg-black.p6 DAS DESIGN
        div.mx12
            div.flex.baseline.mb8
                p.pxl.black.mr2.nowrap Schriften
                div.horistroke
            div.flex.mb8.flex-center
                div.col-33.text-right
                    p.h2.minion.mb1 Minion Pro Regular  
                    p.h2.minion.italic.mb1 Minion Pro Italic     
                    p.h2.light Inter Light
                    p.h2 Inter Regular
                    p.h2.bold Inter Bold
                div.mx4
                p.p.lh2.col-33 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmtur sadipscing elitr, sed diam nonumy eirmod temporLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmtur sadipscing elitr, sed diam nonumy eirmod tempor
            
            div.flex.baseline.mb8
                p.pxl.black.mr2.nowrap Farben
                div.horistroke

            div.flex.mb8.flex-center
                div.col-33.flex.flex-end
                    div.mr2
                        div.farbquadrat.fq-primary.mb1
                        p.p #123456
                    div.mr2
                        div.farbquadrat.fq-second.mb1
                        p.p #123456
                    div.mr2    
                        div.farbquadrat.bg-white.mb1
                        p.p #123456
                    div
                        div.farbquadrat.bg-black.mb1
                        p.p #123456
                div.mx4
                p.p.lh2.col-33 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmtur sadipscing elitr, sed diam nonumy eirmod temporLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmtur sadipscing elitr, sed diam nonumy eirmod tempor

            div.flex.baseline.mb8
                p.pxl.black.mr2.nowrap Absatz
                div.horistroke
            div.flex.mb8.flex-center
                div.col-33.text-right
                    p.h2.minion Minion Pro Regular       
                    p.h2.light Inter Light
                    p.h2 Inter Regular
                    p.h2.bold Inter Bold
                div.mx4
                p.p.lh2.col-33 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmtur sadipscing elitr, sed diam nonumy eirmod temporLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmtur sadipscing elitr, sed diam nonumy eirmod tempor
                
        
    section.mx4.linksection
        div.centered-links.flex-column.flex.relative(v-on:mouseover="grey = true", v-on:mouseleave="grey=false").color-w
            div.linkstroke
            router-link(to="/Gruencool").megalink NEXT PROJECT
            div.linkstroke
            router-link(to="", v-on:click.native="backToStart()").megalink BACK TO START
            div.linkstroke


</template>

<script>
import Navbar from './Navbar.vue'

export default {
    components: {
        Navbar
        
    },
    data(){
        return{
            page: 1
        }
    },
    methods: {
        pageBack(){
            this.page -= 1
            console.log(this.page)
        },
        pageUp(){
            this.page ++
            console.log(this.page)

        },
        backToStart(){
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }

}
</script>

<style lang="scss">

@import "https://use.typekit.net/pps8hpt.css";
@import 'https://fonts.googleapis.com/css?family=EB+Garamond&display=swap';

.stoerer{
    width: 2rem;
    height: .3rem;
}


.border-bottom{
    border-bottom: 1px solid black;
}


.bg-light{
    background-color: rgb(255, 240, 240)
}

.p-highlight{
    width: 50%;
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.1);
}



.col-62{
    width: 62%;
}

.wave{
    position: absolute; 
    width: 100%;
    height: 120%;
    top: 8%;
    left: -36%;
    transform: rotate(0.5deg);
}

.format{
    height: 8rem;
    width: 12rem;
    border: 1px solid black;
}

.farbquadrat{
    height: 4rem;
    width: 4rem;
    box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.1); 
}

.fq-primary{
    background-color: #D84689;
}

.fq-second{
    background-color: #6F6F6E;
}

.minion{
    font-family: minion-pro, serif;
    font-weight: 400;
    font-style: normal;
}

.garamond{
    font-family: 'EB Garamond';
    font-weight: 400;
    font-style: normal;
}

.horistroke{
    height: 1px;
    background-color: black;
    width: 100%;
}

.verticalstrich{
    width: 1px;
    height: 48rem; 
}

.bookcontainer{
    width: 100%;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
}


.buchseite{
    object-fit: cover;
    width: 99.9%;
    margin: 0 auto;
    display: none;
}

.visble{
    display: block;
}

.page-visible{
    opacity: 1;
}



.look{
    height: 24rem;

    img{
        object-fit: cover;
    }
}

.showcase{ 
    width: 100%;
    height: 500px;
    background-color: grey;
    }

.arrow{
    height: 2rem;
}

.understroke{
    height: 2px;
}

.bookoscope{
    height: 38rem;
    position: absolute;
    top: 20%;
    left: 10%;
}

.tiny{
    top: 50%;
    right: 0;
}


</style>