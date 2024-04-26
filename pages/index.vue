<template>
    <div class="relative w-full -mt-10 col-span-full grid-container py-10 bg-[#0C669C]">
        <div class="absolute w-full h-full top-0 bg-[url(/img/hero/bg.png)] bg-bottom left-0 col-span-full"></div>
        <Swiper :loop="true" :space-between="20" :modules="[SwiperPagination, SwiperAutoplay, SwiperNavigation]" :pagination="{ clickable: true }" :autoplay="{delay:3500}" :navigation="{enabled: true}" class="w-full md:h-[calc(100vh/2)] z-[1] rounded-md shadow-[0px_0px_13px_-9px_black] overflow-hidden">
            <SwiperSlide class="w-full">
                <NuxtLink class="w-full">
                    <img class="object-cover aspect-video w-full" src="/img/hero/3.jpg" alt="">
                </NuxtLink>
            </SwiperSlide>
            <SwiperSlide class="w-full">
                <NuxtLink class="w-full">
                    <img class="object-cover aspect-video w-full" src="/img/hero/4.jpg" alt="">
                </NuxtLink>
            </SwiperSlide>
            <SwiperSlide class="w-full">
                <NuxtLink class="w-full">
                    <img class="object-cover aspect-video w-full" src="/img/hero/5.jpg" alt="">
                </NuxtLink>
            </SwiperSlide>
        </Swiper>
    </div>
    <div class="flex items-center justify-center py-4 px-10 w-full rounded-md gap-16 max-lg:flex-col max-lg:gap-8 bg-gradient-to-r from-[#0C669C] to-[#3BBAC2] text-white -mt-6">
        <NuxtLink>
            Оправы
        </NuxtLink>
        <NuxtLink>
            Линзы
        </NuxtLink>
        <NuxtLink>
            Контактные линзы
        </NuxtLink>
        <NuxtLink>
            Готовые очки
        </NuxtLink>
        <NuxtLink>
            Солнцезащитные очки
        </NuxtLink>
    </div>
    
    <div class="flex flex-col gap-6">
        <div class="flex items-center gap-2 text-xl md:text-2xl xl:text-3xl">
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
            <p>Хиты продаж</p>
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card v-for="card in cards" v-bind="card"></Card>
        </div>
    </div>
    <Reviews></Reviews>
    <div class="flex flex-col gap-6">
        <div class="flex items-center gap-2 text-xl md:text-2xl xl:text-3xl">
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
            <p>Наши преимущества</p>
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white">
            <div class="flex flex-col bg-[#218CAD] rounded-md px-6 py-6">
                <div class="flex items-center justify-between">
                    <p class="text-2xl">Большой ассортимент</p>
                    <Icon class="text-5xl mr-6" name="material-symbols:shopping-bag-outline"/>
                </div>
                <p class="text-md opacity-70">У нас в магазине оптики огромный выбор оправ и линз для всех возрастов и стилей. Найдите идеальные очки, подчеркивающие вашу уникальность!</p>
            </div>
            <div class="flex flex-col bg-[#197299] rounded-md px-6 py-6">
                <div class="flex items-center justify-between">
                    <p class="text-2xl">Гарантия качества</p>
                    <Icon class="text-5xl mr-6" name="material-symbols:google-guarantee"/>
                </div>
                <p class="text-md opacity-70">Мы гарантируем высокое качество продукции в магазине оптики. Каждая пара очков проходит строгий контроль, чтобы обеспечить надежность и комфорт для ваших глаз.</p>
            </div>
            <div class="flex flex-col bg-[#218CAD] rounded-md px-6 py-6">
                <div class="flex items-center justify-between">
                    <p class="text-2xl">Доступные цены</p>
                    <Icon class="text-5xl mr-6" name="solar:sale-bold"/>
                </div>
                <p class="text-md opacity-70">Отличное качество по доступным ценам! Найдите стильные и комфортные очки по выгодным предложениям в нашем магазине оптики.</p>
            </div>
        </div>
    </div>
    <Feedback></Feedback>
    <button type="button" @click="messageTitle = null" class="fixed top-10 right-10 z-[11] cursor-pointer flex items-center gap-4 px-6 py-2 rounded-2xl w-fit text-white shadow-[0_0_20px_-7px]" :class="messageType ? ' bg-emerald-800' : 'bg-red-500'" v-if="messageTitle">
        <span>{{messageTitle}}</span>
        <Icon name="material-symbols:close-rounded" class="text-xl"/>
    </button>
</template>

<script setup>
useServerSeoMeta({
    title: 'Оптика',
    lang: 'ru'
})

const { messageTitle, messageType } = storeToRefs(useMessagesStore())

const cards=[
    {
        image: "https://www.optic-city.ru/image/cache/rss/1/9/5/3/1/5/9/item_1953159/1953159_0-810x540.jpg.webp",
        title: "Очки Boss 1428 0OC",
        price: 14599,
        id: 1
    },
    {
        image: "https://www.optic-city.ru/image/cache/rss/1/8/1/7/8/3/5/item_1817835/1817835_0-810x540.jpg.webp",
        title: "Очки RayBan 5228 5014 (55)",
        price: 15749,
        id: 2
    },
    {
        image: "https://www.optic-city.ru/image/cache/rss/1/9/1/3/4/7/1/item_1913471/1913471_0-810x540.jpg.webp",
        title: "Очки PRODESIGN 1762 1 9631",
        price: 19899,
        id: 3
    }
]
</script>

