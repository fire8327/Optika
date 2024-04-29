<template>
    <div class="flex flex-col gap-6">
        <div class="flex items-center gap-2 text-xl md:text-2xl xl:text-3xl">
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
            <p>Админ панель</p>
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
        </div>
        <NuxtLink class="px-4 py-2 text-white bg-emerald-800 rounded-md w-fit" to="">Добавить товар</NuxtLink>
    </div>
    <div class="flex flex-col gap-6">
        <button @click="isProductsShow = !isProductsShow" class="flex items-center gap-2 text-xl md:text-2xl xl:text-3xl">
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
            <span>Список товаров</span>
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
        </button>
        <div class="flex flex-col gap-6 rounded-lg overflow-hidden text-left bg-gray-200 transition-all duration-500" :class="isProductsShow ? 'h-full' : 'h-0'">
            <div class="w-full gap-x-6 grid grid-cols-6 bg-[#0C669C] px-6 py-2 text-white">
                <p class="col-span-1">ID</p>
                <p class="col-span-1">Название</p>
                <p class="col-span-2">Изображение</p>
                <p class="col-span-1">Цена</p>
                <p class="col-span-1">Изменить/Удалить</p>
            </div>
            <div class="w-full gap-x-6 grid grid-cols-6 px-6 py-2">
                <p class="col-span-1">ID</p>
                <p class="col-span-1">Название</p>
                <p class="col-span-2">Изображение</p>
                <p class="col-span-1">Цена</p>
                <div class="flex items-center gap-2 col-span-1 max-xl:flex-col">
                    <button class="px-2 py-2 text-white bg-amber-500 rounded-md w-fit max-xl:w-full">Изменить</button>
                    <button class="px-2 py-2 text-white bg-rose-500 rounded-md w-fit max-xl:w-full">Удалить</button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <button @click="isOrdersShow = !isOrdersShow" class="flex items-center gap-2 text-xl md:text-2xl xl:text-3xl">
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
            <span>Заказы</span>
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
        </button>
        <div class="flex flex-col gap-6 rounded-lg overflow-hidden text-left bg-gray-200 transition-all duration-500" :class="isOrdersShow ? 'h-full' : 'h-0'">
            <div class="w-full gap-x-6 grid grid-cols-6 bg-[#0C669C] px-6 py-2 text-white">
                <p>ID</p>
                <p>Название</p>
                <p>Дата</p>
                <p>Цена</p>
                <p>ФИО</p>
                <p>Отменить</p>
            </div>
            <div class="w-full gap-x-6 grid grid-cols-6 px-6 py-2">
                <p>ID</p>
                <p>Название</p>
                <p>Время и дата</p>
                <p>Цена</p>
                <p>ФИО</p>
                <button class="px-2 py-2 text-white bg-rose-500 rounded-md w-fit max-xl:w-full">Отменить</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    /* название страницы */
    useServerSeoMeta({
        title: 'Админ-панель',
        lang: 'ru'
    })


    /* показ форм */
    const isProductsShow = ref(true)
    const isOrdersShow = ref(false)
</script>
