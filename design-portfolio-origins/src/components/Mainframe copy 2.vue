<template lang="pug">
div
    Navbar

    section.vh100.align-center.flex.flex-column.flex-center
        //img(src="../assets/wave_02.svg", alt="alt" ).waave.absolute
        //video( src="../assets/vid_1.mp4" loop="loop" autoplay="autoplay").background-video
        div.flex.design-container.baseline
            h2.mydesign MY DESIGN
            div.strokey.bg-black
        div.flex.baseline.design-container.mr12
            div.strokey.bg-black
            h2.journey JOURNEY

        button(v-on:click="scrollDown()").btn-new.mt12.pxl.color-w.bold Get Inspired

    section.mb12.border-y.bg-black.color-w
        div.p6
            div.quote.text-center
                p.h1.black.italic.mx-auto Man kann alles lernen. Alles, was man dafür benötigt, ist Zeit.


    section.mx12.mb12.relative
        
        //div.absolute.aside.flex.flex-column
            div.verticalstroke
            p.pxl.black Was ich mache
        div.flex.skill-container
            div.skill-design.col-m.ml12.mr2.flex.flex-column.align-center
                img(src="../assets/pen_03.svg", alt="alt" ).pen.mb4
                p.h3.black.text-center.mb2 Design
                p.pxl.lh1-5.px4.text-center Ein gutes Gestaltungskonzept ist sos wichtig wie nie zuvor. In der Praxis hilft Design dabei, die Werte des Unternehmens zu kommunizieren und eine langfristige Bindung zum Kunden aufzubauen.
            div.skill-coding.col-m.mr12.ml2.flex.flex-column.align-center
                img(src="../assets/computer.svg", alt="alt" ).pen.mb4
                p.h3.black.text-center.mb2 Coding
                p.pxl.lh1-5.px4.text-center Im digitalen Zeitalter organisieren sich Menschen über das Internet. Die Zukunft des Gestalters spielt sich in meinen Augen definitv im Netz ab. Im Front-End-Developing werden optimale Benutzer- oberflächen erstellt.
            
    section.mb12.flex
        //div.col-33
            img(src="../assets/portrait_02.jpg", alt="alt" ).cover.profil
        

        img(src="../assets/portrait_03.jpg", alt="alt" ).left
    
        div.col-33.aboutme.ml4.mt4
                //div.vertical
                h2.h3.black.mb1 Hallo.
                h3.h0.thin.italic.mb4 Ich probiere mal aus, wie das hier aussieht.
                p.pxl.mb4.lh2 Mein Name ist Francesco Huber und ich bin ein junger aufstrebender Designer, Coder, Musiker. Ich stehe noch am Anfang meiner Karriere und bin dabei, so vieles zu entdecken. Über meine Fähigkeiten, aber vor allem mich selbst. <br> <br> Mein ganzes Leben lang war ich von musischen Aktivitäten begeistert. Von daher lag es auf der Hand, dass meine Karriere sich in eben diesen Bahnen entflten würde. Im Webdesign kommt alles zusammen: Der Einsatz von kreativer Kommunikation, den Erfordernissen einer klugen Lösungsfindung und die Relevanz von neuen Medien. Schau dir meine bisherigen Werke an.
                div.btn-new.p.bold.color-w Mehr erfahren  
    
    section.mx4.linksection
        h3(id="projekte").pxl.black.projects Projekte
        div.centered-links.flex-column.flex.relative(v-on:mouseover="grey = true", v-on:mouseleave="grey=false").color-w
            div.linkstroke
            router-link(to="/Vuejs").megalink COOLEST DIRECTORS
            div.linkstroke
            router-link(to="/Leinwandgrenzen").megalink LEINWANDGRENZEN
            div.linkstroke
            router-link(to="/Gruencool").megalink GRÜNCOOL 2019
            div.linkstroke
            router-link(to="/Dystopia").megalink DYSTOPIA BOOKLET
            div.linkstroke

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

    .bg-test{
        background-color: #ff5c5c
    }

    .color-test{
        color: #ff5c5c;
    }

    .waave{
        animation: moveDown 2s linear infinite;

    }

    .border-y{
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }

    @keyframes moveDown{
        0%{
            margin-top: 0;
        }
        100%{
            margin-top: 89.4px;
        }
    }

    .verticalstroke{
        height: 100%;
        width: 1px;
        margin-left: 5rem;

        background-color: black;
    }
    .aside{
        height: 100%;
        margin-left: -6rem;

        p{
            white-space: nowrap;
            transform: rotate(270deg);
            margin-top: 5rem;
            
            
            
        }
    }

    .pen{
        height: 14rem;
        width: 14rem;
    }
    .vertical{
        width: 1px; 
        height: 100%;
        background-color: black;
        float: left;
        margin-left: -4rem;
    }

    .bigcirc{
        height: 18rem;
        width: 18rem;
    }

    .smallcirc{
        height: 12rem;
        width: 12rem;
    }


    .profil{
        width: 100%;
        height: 100%;
        border-radius: 100%;
        display: inline-block;
    }


    .btn-new{
        background-color: black;
        cursor: pointer;
        display: inline-block;
        padding: .8rem 1.5rem;
        border: 1px solid black;

        &:hover{
            background-color: white;
            color: black;
        }
    }


    .circle{
       
        border-radius: 100%;
        border: 1px solid black;
    }


    .design-container{
        width: 100%;
    }

    .strokey{
        box-sizing: border-box;
        width: 100%;
        height: 1px;
    }

    .mydesign, .journey{
        font-size: 8rem;
        margin: 0;
        font-weight: 900;
        font-style: italic;
        display: inline-block;
        white-space: nowrap;
        text-shadow:  1px  1px 1px black,
                  1px -1px 1px black,
                 -1px  1px 1px black,
                 -1px -1px 1px black;
        color: #fff;
    }

    .mydesign{
        float: left;
        margin-left: 12rem; 
        //animation: floatLeft 30s alternate infinite;
    }

    @keyframes floatLeft{
        0%{
            margin-left: 12rem;
        }
        100%{ margin-left: 24rem;}
    }

    .journey{
        float: right;
        margin-right: 12rem;
        //animation: floatRight 30s alternate infinite;
    }

    @keyframes floatRight{
        0%{
            margin-right: 18rem;
        }
        100%{ margin-right: 12rem;}
    }

    .linksection{
        text-align: center;
        height: 100vh;
        margin-bottom: 14.5rem;
    }

    .projects{
        padding-bottom: 4rem;
    }

    .megalink{
        font-size: 8.5rem;
        font-weight: 900;
        padding-bottom: 2rem;
        background-color: #fff;
        padding-top: 2rem;
        position: relative;
        transition: .4s all;
        text-shadow:  1px  1px 1px black,
                  1px -1px 1px black,
                 -1px  1px 1px black,
                 -1px -1px 1px black;

        &:hover{
            color: black;
            //background-image: url('../assets/thumbnail_03.jpg');
            //background-size: cover;
        }
    }

    .centered-links{

            img{
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all .4s;
        }

        
    }

    .vue{
        opacity: 1 !important;
    }

    .leinwand{
        opacity: 1 !important;
    }

    .cool{
        opacity: 1 !important;
    }

    .blocks{
        opacity: 1 !important;
    }

    .grey{
        color: rgba(0, 0, 0, 0.3)
    }

    .linkstroke{
        height: 1px;
        width: 100%;
        background-color: black;
    }



    .picture{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% - 8rem);
        height: calc(100% - 8rem);
        background-color: black;
        z-index: -1;
    }

    .decostroke{
        width: 130%;
        height: 2px; 
       
    }


    .abouttext{
        width: 50%;
        text-align: center;

        p, h2, h3{
            text-align: left;
        }

        p{
            padding-right: 4rem;
        }

        .btn{
            margin: 0 auto;
            margin-top: 4rem;
        }
    }

    .profilepic{
        width: 50%;

        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
            float: right;
        }
    }

    .textbox{
        width: 65%;
        margin: 0 auto;
        background-color: white;
        top: 90%;
        left: 50%;
        transform: translate(-50%, 0);
    }
 

    .mega{
        margin: 0;

        z-index: 10;
        font-size: 6rem;
        font-style: italic;
        color: black;
        font-weight: 900;
        width: 100%;
        text-align: center;

        &:before{
            content: " ";
            display: block;
            background-color:white;
            opacity: 0.8;
            width: 60%;
            height: 60%;
            position: absolute;
            top: -9.5%;
            left: 51%;
            transform: translate(-50%, 0);
            z-index: -1;
        }

        &:after{
            content: " ";
            display: block;
            opacity: 0.8;
            background-color:white;
            width: 60%;
            height: 60%;
            position: absolute;
            top: 50%;
            left: 49%;
            transform: translate(-50%, 0);
            z-index: -1;
        }



    }

    .background-image{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .background-video{
        position: absolute; 
        top: 0;
        left: 0;
        opacity: 0.5;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .btn-landing-page{
        color: white;
        text-align: center;
        cursor: pointer;
        font-weight: 700;
        font-size: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);


           &:before{
            content: " ";
            display: block;
            background-color:black;
            min-width: 130%;
            max-width: 130%;
            max-height: 80%;
            min-height: 80%;
            position: absolute;
            top: -20%;
            left: 50%;
            transform: translate(-50%, 0);
            z-index: -1;
            transition: all .3s;
        }

        &:hover:before{
                left: 55%;
            }


        &:after{
            content: " ";
            display: block;
            background-color: black;
            min-width: 130%;
            max-width: 130%;
            max-height: 80%;
            min-height: 80%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 0);
            z-index: -1;
            transition: all .3s;

        }

        &:hover:after{
                left: 45%;
            }
        

    }



    .btn{
        color: white;
        cursor: pointer;
        display: inline-block;
        font-size: 1.5rem;
        font-weight: 700;
        position: relative;

        &:before{
            content: " ";
            display: block;
            background-color:black;
            position: absolute;
            z-index: -1;
            height: 80%;
            width: 130%;
            left: 50%;
            top: -30%;
            transform: translate(-50%, 0);
            transition: all .3s;
        }

        &:hover:before{
                left: 55%;
            }


        &:after{
            content: " ";
            display: block;
            background-color: black;
            position: absolute;
            z-index: -1;
            height: 80%;
            width: 130%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, 0);
            transition: all .3s;

        }

        &:hover:after{
                left: 45%;
            }
        
    }

</style>