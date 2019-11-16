<template>
    <div>
        <h1 v-if="title != null" id="title">{{title}}</h1>
        <h2 v-if="subtitle != null" id="subtitle">{{subtitle}}</h2>
        <h2 v-if="author != null" id="author">{{author}}</h2>
        <h2 v-if="audience != null" id="audience">{{audience}}</h2>
        <h2 v-if="organization != null" id="organization">{{organization}}</h2>
        <h2 v-if="location != null" id="location">{{location}}</h2>
        <h2 v-if="date != null" id="date">{{date}}</h2>

    </div>
</template>

<script>
export default {
    data(){
        return{
            jsonObject: this.projectJSON,
            title: this.projectJSON.title,
            subtitle : this.projectJSON.subtitle,
            author: this.projectJSON.author,
            audience: this.projectJSON.audience,
            organization: this.projectJSON.organization,
            location: this.projectJSON.location,
            date: this.projectJSON.date,
        }
    },
    props: ['projectJSON']
}
</script>

<style>
@import '../../Themes/Stellenbosch.css';

</style>