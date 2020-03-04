<template lang="pug">
div.overflow-hidden
    Navbar

    section.mb8.vh100.relative
        div.intro.mt12.ml8
            h1.h05.bold.color-d.mb3.pt2 Visuelles Stroytelling <br> - analog und digital.
            h3.h2.color-d.mb8 Ich helfe dabei, Projekten eine visuelle Identität <br> zu geben und sie sprechen zu lassen.
            div.flex
                button.btn-fresh.mr3.h3.bold Meine Projekte
                button.btn-fresh-ghost.h3.bold Über mich
        img(src="../assets/Venn.svg").bg-shape
        img(src="../assets/desktop-sketch.svg").desktop-sketch
    
    section.mb12
        div.flex.mb12
            div.col-m.relative
                img(src="../assets/Venn.svg").persovenn
            div.col-m
                div.col-m
                    h3.h1.mb3.bold Hallo.
                    h4.h2.mb3 Ich bin ein junger Student, der davon träumt, Designer zu sein.
                    p.h3.mb3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                    button.btn-fresh.h3.bold Mehr erfahren
        div.mx8.flex.shadow.flex-middle
            div.col-33.text-center.p4
                img(src="../assets/Venn.svg")
                h4.h3.mb1 Kreativ
                p.p.mx4 Ich bin immer an der Fingung von neuen Lösungen interessiert.
            div.col-33.text-center.p4
                img(src="../assets/Venn.svg")
                h4.h3.mb1 Kreativ
                p.p.mx4 Ich bin immer an der Fingung von neuen Lösungen interessiert.
            div.col-33.text-center.p4
                img(src="../assets/Venn.svg")
                h4.h3.mb1 Kreativ
                p.p.mx4 Ich bin immer an der Fingung von neuen Lösungen interessiert.

    section.mb8
        h3.h05.bold.ml8.mb8 EINE AUSWAHL <br> MEINER PROJEKTE 

        div.col-x.relative
            img(src="../assets/code.jpg").pronail
            div.absolute.bg-white.p4.thumbsquare-r
                h4.h1.bold.mb4 Coolest Directors
                p.h3.mb3 Meine ersten Schritte in der Welt des Codngs. Überwiegend technische Lösungen.
                router-link(to="/Vuejs").btn-fresh.h3.bold Projekt ansehen
        div.col-x.relative
            img(src="../assets/book_mockup.jpg").pronail
            div.absolute.p4.thumbsquare-l.color-w.bg-primary
                h4.h1.bold.mb3 Leinwandgrenzen
                p.h3.mb3 Meine ersten Schritte in der Welt des Codngs. Überwiegend technische Lösungen.
                router-link(to="/Leinwandgrenzen").btn-fresh-w.h3.bold Projekt ansehen
        div.col-x.relative
            img(src="../assets/glasses.jpg").pronail
            div.absolute.bg-white.p4.thumbsquare-r
                h4.h1.bold.mb4 Grüncool 2019
                p.h3.mb3 Meine ersten Schritte in der Welt des Codngs. Überwiegend technische Lösungen.
                router-link(to="/Gruencool").btn-fresh.h3.bold Projekt ansehen
        div.col-x.relative
            img(src="../assets/glasses.jpg").pronail
            div.absolute.p4.thumbsquare-l.color-w.bg-primary
                h4.h1.bold.mb3 Dystopia Booklet
                p.h3.mb3 Meine ersten Schritte in der Welt des Codngs. Überwiegend technische Lösungen.
                router-link(to="/Dystopia").btn-fresh-w.h3.bold Projekt ansehen

    section.mb8
        div.mx12.bg-second.color-dblue.p4.shadow.overflow-hidden.relative
            p.h3.bold.mb1 Dir gefällt, was Du siehst?
            h4.h1.bold.mb1 Kontaktiere mich.
            p.h3.mb1.col-m.mb4.pr6.b-box Ich freue mich immer neue Aufträge und jegliche Form von konstruktivem Feedback.
            p.h3.mb2.bold Mail: FrancescoHuber@gmx.de
            p.h3.mb2.bold Tel: 0176 / 81 70 43 72
            img(src="../assets/Venn.svg").contactvenn


    
    Footer


</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

export default {

    components: {
        Navbar, 
        Footer
    },

    data(){
        return{
           
        }
    },

    methods:{
        scrollDown(){
            let elem = document.getElementById("projekte");
            //history.pushState (null, null, hash);
             elem.scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
        }
    }

}
</script>

<style lang="scss">

    .contactvenn{
        position: absolute; 
        width: 1000px;
        top: -150px;
        right: 0;
    }

    .thumbsquare-r{
        height: 24rem;
        width: 28rem;
        bottom: 3rem;
        right: 3rem;
    }

    .thumbsquare-l{
        height: 24rem;
        width: 28rem;
        bottom: 3rem;
        left: 3rem;
    }


    .pronail{
        width: 100%;
        height: 600px;
        object-fit: cover;
    }

    .persovenn{
        position: absolute; 
        width: 800px;
        top: -40%;
        left: 10%;
        transform: rotate(180deg);
    }

    .desktop-sketch{
        position: absolute; 
        top: 0%;
        width: 600px;
        right: 10%;
    }

    .bg-shape{
        position: absolute; 
        right: -7%;
        top: -20%;
        width: 70%;

    }

    .btn-fresh{
        padding: 1rem 3rem;
        background-color: #54AAFF;
        color: white;
        border: 0;
    }

    
    .btn-fresh-ghost{
        padding: 1rem 3rem;
        box-sizing: border-box;
        background-color: white;
        color: #54AAFF;
        border: 5px solid #54AAFF;
    }

    .btn-fresh-w{
        padding: 1rem 3rem;
        box-sizing: border-box;
        background-color: #54AAFF;
        color: white;
        border: 5px solid white;
    }
 

</style>