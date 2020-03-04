<template lang="pug">
div
    Navbar

    section.vh100
        div.flex.flex-center.flex-column.align-center
            img(src="../assets/uglymockup.png", alt="alt").col-m.mt8
            //div.verticalstrich.mt8.mr4.bg-black
            div.mt4
                h2.h0.black.italic.mb8 Coolest Directors&ndash;&emsp14; Webentwicklung 101
    section
        div.border-y.pt4.pb4
            div.flex.col-m.mx-auto
                p.p.lh2.col-m.pr2 Hinter dem Namen "Coolest Directors" verbirgt sich eine Reihe kleinerer Programmierarbeiten, die ich während meines Praktikums beim Unternehmen Color und Code anfertigte. Durch sie erhielt ich einen ersten Einblick in die Arbeit eines Web-Developers. Der Fokus dieser Arbeiten liegt daher nicht so sehr beim Gestalterischen, sondern auf der Funktionalität der verschiedenen Applikationen. Die Arbeiten sind dabei als "Pionierprojekte", Proof of
                p.p.lh2.col-m.pl2 Concepts zu verstehen. In der Web-Branche ist es entscheidend, sich schnell den Gebrauch neuester Technologien anzueignen. Meine Aufgabe im Unternehmen war es daher, mich mit dem vergleichsweise neuen JavaScript-Framework Vue.js auseinanderzusetzen und einen Einblick in dessen Ökosystem zu erhalten und neue Web-Lösungen zu entwickeln, welche dann in späteren Projekten mit Kunden umgesetzt wurden. 

    section.mx12.mb6.flex.flex-center
        div.col-x.flex.mt12.mb2
                div.col-m
                    img(src="../assets/vuelogo.svg", alt="alt").vuelogo
                div.col-33.m-auto
                        div.stoerer.bg-black.mb2                          
                        p.p.lh2.mb2 Das erste Projekt, dass ich mit Vue.js umsetzte, war eine einfache CRUD-Applikation. Also eine Anwendung für die Eintragung, Bearbeitung und Löschung von Daten. Als Demo sollte hier eine Datenbank von Regisseuren dienen. Der Nutzer kann Vor- und Nachnamen des Regisseurs eingeben und ein Foto hinzufügen. Danach erscheint eine neue Karte im Roaster.
                        button.btn-new.color-w App ansehen
        //p.p.lh-2.col-33.m-auto.ml4 

    section.mx12.mb12
                div.col-33.pl8
                    //div.vertical
                    h2.h2.black.italic.mb2 Technische Umsetzung mit Firebase.
                    p.p.mb4.lh2 Mein Name ist Francesco Huber und ich bin ein junger aufstrebender Designer, Coder, Musiker. Ich stehe noch am Anfang meiner Karriere und bin dabei, so vieles zu entdecken. Über meine Fähigkeiten, aber vor allem mich selbst. <br> <br> Mein ganzes Leben lang war ich von musischen Aktivitäten begeistert. Von daher lag es auf der Hand, dass meine Karriere sich in eben diesen Bahnen entflten würde. Im Webdesign kommt alles zusammen: Der Einsatz von kreativer Kommunikation, den Erfordernissen einer klugen Lösungsfindung und die Relevanz von neuen Medien. Schau dir meine bisherigen Werke an.
                
    section.mx12.mb12
        div.flex
                div.col-33
                div.col-33
                div.col-33
                    //div.vertical
                    h2.h2.black.italic.mb2 CSS-Animationen
                    p.p.mb4.lh2.lh2 Mein Name ist Francesco Huber und ich bin ein junger aufstrebender Designer, Coder, Musiker. Ich stehe noch am Anfang meiner Karriere und bin dabei, so vieles zu entdecken. Über meine Fähigkeiten, aber vor allem mich selbst. <br> <br> Mein ganzes Leben lang war ich von musischen Aktivitäten begeistert. Von daher lag es auf der Hand, dass meine Karriere sich in eben diesen Bahnen entflten würde. Im Webdesign kommt alles zusammen: Der Einsatz von kreativer Kommunikation, den Erfordernissen einer klugen Lösungsfindung und die Relevanz von neuen Medien. Schau dir meine bisherigen Werke an.    
    
    section.mb24
        h3.h0.black.italic.text-center.mb8.color-w.bg-black.p6 DAS DESIGN
    
    section.mx4.linksection
        div.centered-links.flex-column.flex.relative(v-on:mouseover="grey = true", v-on:mouseleave="grey=false").color-w
            div.linkstroke
            router-link(to="/Leinwandgrenzen").megalink NEXT PROJECT
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

.vuelogo{
    width: 24rem;
    margin-left: 30%;
}

.testv{
    z-index: -1;
    width: 100%;
}


.cd{
    border-radius: .75rem;
}

.hand{
    width: 80%;
    height: 80%;
    top: 15%;
    right: -35%;
    z-index: 8;
}
  

</style>