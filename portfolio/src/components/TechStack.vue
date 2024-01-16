<template>
    <h1> Skillset </h1><br>
    <div class="skholder">
        <div class="icon">
            <img width="96" height="96" src="https://img.icons8.com/fluency/96/python.png" alt="python"/>
            <span>Python</span>
        </div>
        <div class="icon">
            <img width="96" height="96" src="https://img.icons8.com/fluency/96/node-js.png" alt="node-js"/>
            <span>Node.js</span>
        </div>
        <div class="icon">
            <img width="96" height="96" src="https://img.icons8.com/nolan/96/rust-programming-language--v1.png" alt="rust-programming-language--v1"/>
            <span>Rust</span>
        </div>
        <div class="icon">
            <img src="@/assets/typescript.svg" alt="TypeScript" />
            <span>TypeScript</span>
        </div>
        <div class="icon">
            <img width="96" height="96" src="https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
            <span>Java</span>
        </div>
        <div class="icon">
            <img width="96" height="96" src="https://img.icons8.com/color/96/postgreesql.png" alt="postgreesql"/>
            <span>PostgreSQL</span>
        </div>
        <div class="icon">
            <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo"/>
            <span>MongoDB</span>
        </div>
        <div class="icon">
            <img width="96" height="96" src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/96/external-internet-of-things-big-data-kmg-design-outline-color-kmg-design.png" alt="external-internet-of-things-big-data-kmg-design-outline-color-kmg-design"/>
            <span>IoT</span>
        </div>
        <div class="icon">
            <img width="96" height="96" src="https://img.icons8.com/color/96/vue-js.png" alt="vue-js"/>
            <span>Vue.js</span>
        </div>
        
    </div>
</template>

<style scoped>
.icon {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 20px;
}

.icon img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
.skholder {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 70px;
}
</style>
