<template>
    <main>
        <section class="section-home">
            <div class="container home">
                <div class="home-text">
                    <h1>{{ text }}</h1>
                </div>
                <span>
                    {{ store.getValue }}
                </span>
                <button @click="store.toogleValue()">
                    +
                </button>
            </div>
        </section>
    </main>
</template>

<script setup>
import { useHomeStore } from "../store/home";
const text = "Click e conte!!";
const store = useHomeStore();
</script>
<style scoped>
    main {
        height: 100%;
    }

    .section-home {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .home {
        padding: 80px 100px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;
        justify-content: center;
    }

    .home-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    h1 {
        text-align: center;
        background-color: rgb(236, 232, 11);
        font-size:3.2rem;
        color: rgb(17, 0, 23);
        font-weight: 800;
        font-style: oblique;
    }

    span {
        font-size: 1.4rem;
        font-weight: 700;
        font-style: oblique;
        color:rgb(236, 232, 11);
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        background-color: transparent;
        color: rgb(236, 232, 11);
        font-size: 1.6rem;
        padding: 36px;
        font-weight: bold;
        border-radius: 50%;
        font-style: oblique;
        border: 4px solid rgb(236, 232, 11);
        cursor: pointer;
    }

    button:hover {
        border: 4px solid rgb(236, 232, 11);
        background-color: rgb(236, 232, 11);
        color: rgb(17, 0, 23);
    }
</style>