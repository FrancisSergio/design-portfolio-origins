<template lang="pug">
div.navigation.color-w
    div.flex.space-between.mt3.mx3
        div.h3.light.logo Logo
        div.links.flex.space-between
            p.h3.light Explore
            p.h3.light Projects
            p.h3.light Person
        router-link(to="/").burger.flex-column
            div.inner-burger
                div.stroke.bg-white
                div.stroke.bg-white
                div.stroke.bg-white
</template>

<script>


export default {

}
</script>

<style lang="scss">

.logo{
    width: 100px;
}

.burger{
    width: 100px;
}

.inner-burger{
    float: right; 
}

.links{
    min-width: 500px;
}



.stroke{
    width: 1.75rem;
    height: 2px;
    margin-bottom: 0.5rem;
}

</style>