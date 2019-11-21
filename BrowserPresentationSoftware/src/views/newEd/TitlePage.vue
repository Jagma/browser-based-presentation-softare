<template>
    <div>
        <p v-if="title != null" id="title">{{title}}</p>
        <p v-if="subtitle != null" id="subtitle">{{subtitle}}</p>
        <p v-if="author != null" id="author">{{author}}</p>
        <p v-if="audience != null" id="audience">{{audience}}</p>
        <p v-if="organization != null" id="organization">{{organization}}</p>
        <p v-if="location != null" id="location">{{location}}</p>
        <p v-if="date != null" id="date">{{date}}</p>

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
/*@import '../../Themes/Stellenbosch.css';
*/
</style>