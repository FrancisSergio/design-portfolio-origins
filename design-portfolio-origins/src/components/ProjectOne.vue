<template lang="pug">
div.project-page-one

    section
        div.relative
            img(src="../assets/thumbnail-01.jpg", alt="alt").panorama
            div.big-presenter.absolute.bg-white.p4.ml8
                div.flex.space-between.mb4.mt4
                    p.p.bold Studium
                    p.p.bold.mx4 01
                h1.h00.mb6 Exploring Vue.js
                div.flex.mb4
                    h4.h3.mr4.column-1 Some Text in this column. Some Text in this column
                    p.pxl.mx4.column-1 Another column.Some Text in this column. Some Text in this column. Some Text in this column
                    p.pxl.mx4.column-1 Yet Another column. Some Text in this column. Some Text in this column. Some Text in this column

    section.page-body.ml8.p4
        h2.h1.bold.column-2.mb6 Functionality in no time!
        div.flex.mb4
            h4.h3.mr4.column-1 Some Text in this column. Some Text in this column
            p.pxl.mx4.column-1 Another column.Some Text in this column. Some Text in this column. Some Text in this column
            p.pxl.mx4.column-1 Yet Another column. Some Text in this column. Some Text in this column. Some Text in this column
        div.flex.mb8
            h4.h3.mr4.column-1 
            p.pxl.mx4.column-1 Another column.Some Text in this column. Some Text in this column. Some Text in this column. This text is larger than the others. Yeah. Can you see it? Placeholder-Text! Another column.Some Text in this column. Some Text in this column. Some Text in this column. This text is larger than the others. Yeah. Can you see it? Placeholder-Text!
            p.pxl.mx4.column-1 
        img(src="../assets/thumbnail-01.jpg", alt="alt").page-image.mb8.wide
        div.flex.mb8
            p.h2.mr4.column-2 Another column.Some Text in this column. Some Text in this column. Some Text in this column. This text is larger than the others. Yeah. Can you see it? Placeholder-Text 
            .mx4.column-1
        div.flex.mb6 
            p.pxl.column-1 Another column.Some Text in this column. Some Text in this column. Some Text in this column. This text is larger than the others. Yeah. Can you see it? Placeholder-Text! Another column.Some Text in this column. Some Text in this column. Some Text in this column. This text is larger than the others. Yeah. Can you see it? Placeholder-Text!
            img(src="../assets/thumbnail-01.jpg", alt="alt").page-image.mb6.column-1.mx4


</template>

<script>



export default {

}
</script>

<style lang="scss">

.panorama{
    width: 100%;
    height: 99vh;
    object-fit: cover;
}

.big-presenter{
    width: 70%;
    bottom: -10%;
    box-shadow: 0px 32px 32px 5px rgba(0, 0, 0, 0.5);
}

.column-1{
    width: 33%;
}

.column-2{
    width: 66%;
}

.wide{
    width: 110%;
    margin-left: -5%;
}

.page-body{
    margin-top: 12rem;
    width: 70%;
}

.page-image{
    height: 24rem;
    object-fit: cover;
}



</style>