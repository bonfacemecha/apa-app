<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref, defineProps, onMounted, computed } from "vue";
import axios from 'axios';

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

const categories = ref([]);
        const selectedCategory = ref(null);

        const categories = ref([]);
        const total = ref(0);
        const selectedCategory = ref('');

        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://api.chucknorris.io/jokes/categories');
                categories.value = response.data; // Set categories
                // Optionally fetch jokes for the first category by default
                if (categories.value.length) {
                    selectedCategory.value = categories.value[0];
                    fetchJokes(selectedCategory.value);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };


        const jokes = ref([]);

        const fetchJokes = async () => {
            try {
                const response = await axios.get('https://api.chucknorris.io/jokes/search?query=food');
                jokes.value = response.data.result; // Adjust based on the actual response structure
            } catch (error) {
                console.error('Error fetching jokes:', error);
            }
        };

        // Fetch jokes on component mount
        onMounted(fetchJokes);

</script>

<template>

    <Head title="Welcome" />

    <div
        class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
            <Link v-if="$page.props.auth.user" :href="route('dashboard')"
                class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
            Dashboard</Link>

            <template v-else>
                <Link :href="route('login')"
                    class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Log in</Link>

                <Link v-if="canRegister" :href="route('register')"
                    class="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Register</Link>
            </template>
        </div>



        <div class="max-w-7xl mx-auto p-6 lg:p-8">





<!-- <div>
        <h1>Food Jokes</h1>
        <ul>
            <li v-for="joke in jokes" :key="joke.id">
                {{ joke.created_at }} 
            </li>
        </ul>
    </div> -->


    <h1 class="text-3xl font-bold mb-4">Chuck Norris Jokes</h1>
        <div class="flex space-x-4 mb-4">
            <button
                v-for="category in categories"
                :key="category"
                @click="fetchJokes(category)"
                class="px-4 py-2 font-semibold text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                :class="{ 'bg-blue-700': selectedCategory === category }"
            >
                {{ category }}
            </button>
        </div>


            <div>
        <!-- <h1 class="text-3xl font-bold mb-4">Food Jokes</h1> -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
                href="#"
                v-for="joke in jokes"
                :key="joke.id"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <img
                    class="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    :src="joke.icon_url"
                    alt="Joke Icon"
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Category</h5>
                    <span class="text-sm text-gray-600 dark:text-gray-400">{{ joke.created_at }}</span>
                    <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Id: {{ joke.id }}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Update: {{ joke.updated_at }}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ joke.value }}</p>
                </div>
            </a>
        </div>
    </div>

        </div>
    </div>
</template>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
