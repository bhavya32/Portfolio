<template>
    <div style="margin-top: 30px; overflow: auto; max-height: calc(100vh - 70px); padding-right: 20px;">
        <h1>Some of my work - </h1>
        <div id="project" class="project">
            <h2>1. WhatsAPI</h2><br>
            <img src="@/assets/whatsapi.png" alt="WhatsAPI" width="100%" height="auto">
            <p><a href='https://bhavyasoftwares.com'>WhatsAPI</a> is a WhatsApp API that allows you to send messages, files, and automate replies on WhatsApp.
                With the help of this, the customers could directly access their account details from WhatsApp, including their ledgers, last invoices, warranty and much more.                        
                <br><br> The selling point was that the small businesses like retail shops can't afford to make their own dashboard for customers. The response was very positive, but new registrations are disabled and the source code is private as it being against the WhatsApp T&C.
            </p><br>

            <!-- fetch the tech stacks used and render it to icons-->
            <h2>Tech Stack - </h2>
            <div class="techstack">
                
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/color/96/mysql-logo.png" alt="mysql-logo"/>
                    <span>MySQL</span>
                </div>
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/fluency/96/node-js.png" alt="node-js"/>
                    <span>Node.js</span>
                </div>   
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/office/96/php.png" alt="php"/>
                    <span>PHP</span>
                </div>   
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/fluency/96/visual-basic.png" alt="visual-basic"/>
                    <span>VB.Net</span>
                </div>   
            </div>
        </div>
        <div id="project" class="project">
            <h2>2. POS Order Management System</h2><br>
            <img src="@/assets/pos.png" alt="WhatsAPI" width="100%" height="auto">
            <p>
                This is an order management system for specific business needs. It aims to minimize the possibility of errors and to make the process of order management more efficient.
                <br><br>
                All the weigh scales are digitalized and automatically sync the weight to respective order using unique identifiers. This eliminates data entry errors and time wastage. The customers can also track the status of their order in real time which estimately reduced the call volume by 30%.
                <br><br>
                As the order is completed, it can be directly fed to the main ERP at single click.
                <br><br>
                Github Links -
                <ul>
                    <li><a href="https://github.com/bhavya32/Order-Management-Flask">Flask Backend</a></li>
                    <li><a href="https://github.com/bhavya32/POS-Weight-Management">Raspberry Pi Weigh Scale plugin</a></li>
                </ul>
            </p><br>

            <!-- fetch the tech stacks used and render it to icons-->
            <h2>Tech Stack - </h2>
            <div class="techstack">
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/color/96/postgreesql.png" alt="postgreesql"/>
                    <span>PostgreSQL</span>
                </div>
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/fluency/96/python.png" alt="python"/>
                    <span>Python</span>
                </div>
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/nolan/96/flask.png" alt="flask"/>
                    <span>Flask</span>
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
                    <img width="96" height="96" src="https://img.icons8.com/nolan/96/arduino.png" alt="arduino"/>
                    <span>Arduino</span>
                </div>
                        
            </div>
        </div>
        <div id="project" class="project">
            <h2>3. WA-Calls </h2><br>
            <img src="@/assets/wacalls.png" alt="WhatsAPI" width="100%" height="auto">
            <p>
                This was a reverse engineering project, which exposed the API to WhatsApp Calls. This was the first open source github repo, which allowed you to accept, make and reject WhatsApp calls from Node.JS. 
                It also shed light on the flow of WhatsApp calls and how they work.
                <br><br>
                The packets were captured by editing the WhatsApp Desktop source, and carefully recreated, on top of the lib Baileys.
                The incoming calls could automatically be accepted, saved audio played, and also make outgoing calls. 
                It was a fun project, and I learned a lot about the WebRTC protocol. 
                <br><br>
                Open Source at - <a href="https://github.com/bhavya32/WA-Calls">Github</a> This was a research project and not for commercial usage (against WhatsApp T&C).
                
            </p><br>

            <!-- fetch the tech stacks used and render it to icons-->
            <h2>Tech Stack - </h2>
            <div class="techstack">
                <div class="icon">
                    <img src="@/assets/typescript.svg" alt="TypeScript" />
                    <span>TypeScript</span>
                </div>
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/nolan/96/rust-programming-language--v1.png" alt="rust-programming-language--v1"/>
                    <span>Rust</span>
                </div>
                        
            </div>
        </div>
        <div id="project" class="project">
            <h2>4. SKIStats</h2><br>
            <img src="@/assets/skistats.jpg" alt="WhatsAPI" width="100%" height="auto">
            <p>SKIStats was one of my first IoT projects for my own business. Its a very simple temperature control and alert system, designed for
                cold chain industry. It aggregates stats like temperature and humidity from multiple sensors in differnt cold chambers.
                <br><br>
                It proved to be very helpful in maintaining the quality of the stored products and also in reducing the electricity bills.
                It also enhanced the customer's trust as they could monitor the temperature of their products in real time. 
                <br><br>
                The data is wired to the nearest hubs and then synced to the cloud using SIM800L (GSM module).
            </p><br>

            <!-- fetch the tech stacks used and render it to icons-->
            <h2>Tech Stack - </h2>
            <div class="techstack">
                
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/color/96/mysql-logo.png" alt="mysql-logo"/>
                    <span>PostgreSQL</span>
                </div>
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/fluency/96/node-js.png" alt="node-js"/>
                    <span>Node.js</span>
                </div>   
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/nolan/96/arduino.png" alt="arduino"/>
                    <span>Arduino</span>
                </div> 
            </div>
        </div>
        <div id="project" class="project">
            <h2>5. This Portfolio</h2><br>
            <img src="@/assets/website.png" alt="WhatsAPI" width="100%" height="auto">
            <p>
                This portfolio website is made using Vue.js and Vuetify. It was my first time working with VueJS and it was quite different from regular HTML, CSS and JS.
                <br><br>
                The theme is minimalist as I am not a designer. I have tried to keep it simple and clean. 
                Its open source at - <a href="https://github.com/bhavya32/Portfolio">Github</a>
            </p><br>

            <!-- fetch the tech stacks used and render it to icons-->
            <h2>Tech Stack - </h2>
            <div class="techstack">
                
                
                <div class="icon">
                    <img width="96" height="96" src="https://img.icons8.com/color/96/vue-js.png" alt="vue-js"/>
                    <span>Vue.js</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    title: "Project 2",
                    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    title: "Project 3",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
            ]
        };
    }
};
</script>
<style scoped>

.techstack {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 70px;
}
.project {
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
}
.icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 20px;
}

.icon img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

::-webkit-scrollbar{
	width: 3px;
}

::-webkit-scrollbar-track-piece{
	background-color: #5f5a5a;
}

::-webkit-scrollbar-thumb{
	background-color: #b5b3b3;
	
	outline-offset: -2px;
	
}

::-webkit-scrollbar-thumb:hover{
	background-color: #909090;
}
</style>

