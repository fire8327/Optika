<template>
    <div class="flex max-lg:flex-col gap-6">
        <div class="flex flex-col border-2 border-[#0C669C] p-4 rounded-lg lg:w-1/4 gap-6">
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Comfortaa font-normal">Цена</p>
                <div class="flex items-center gap-1">
                    <input class="w-1/2 rounded-l-md border border-[#3BBAC2] px-4 py-2" placeholder="От" type="text">
                    <input class="w-1/2 rounded-r-md border border-[#3BBAC2] px-4 py-2" placeholder="До" type="text">
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Comfortaa font-normal">Возраст</p>
                <select class="rounded-md border border-[#3BBAC2] px-4 py-2" name="">
                    <option value="1">Для взрослых</option>
                    <option value="2">Для детей</option>
                </select>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Comfortaa font-normal">Тип</p>
                <select class="rounded-md border border-[#3BBAC2] px-4 py-2" name="">
                    <option value="1">Солнцезащитные</option>
                    <option value="2">Оправы</option>
                </select>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Comfortaa font-normal">Бренд</p>
                <label class="flex items-center gap-2 text-lg">
                    <input type="checkbox" name="brand" class="w-5 h-5">
                    Бренд 1
                </label>
                <label class="flex items-center gap-2 text-lg">
                    <input type="checkbox" name="brand" class="w-5 h-5">
                    Бренд 2
                </label>
                <label class="flex items-center gap-2 text-lg">
                    <input type="checkbox" name="brand" class="w-5 h-5">
                    Бренд 3
                </label>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Comfortaa font-normal">Цвет</p>
                <label class="flex items-center gap-2 text-lg">
                    <input type="checkbox" name="color" class="w-5 h-5">
                    Цвет 1
                </label>
                <label class="flex items-center gap-2 text-lg">
                    <input type="checkbox" name="color" class="w-5 h-5">
                    Цвет 2
                </label>
                <label class="flex items-center gap-2 text-lg">
                    <input type="checkbox" name="color" class="w-5 h-5">
                    Цвет 3
                </label>
            </div>
            <div class="flex flex-col gap-2">
                <button class="px-4 py-2 rounded-md text-white w-full text-center bg-[#3BBAC2]">Применить</button>
                <button class="px-4 py-2 rounded-md text-[#3BBAC2] w-full text-center border border-[#3BBAC2]">Сбросить</button>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 h-fit lg:grid-cols-3 lg:w-3/4 gap-4">
            <Card v-for="card in cards" v-bind="card"></Card>
        </div>
    </div>
</template>

<script setup>
    /* название страницы */
    useServerSeoMeta({
        title: 'Каталог',
        lang: 'ru'
    })
    

const cards=[
    {
        image: "https://www.optic-city.ru/image/cache/rss/1/9/5/3/1/5/9/item_1953159/1953159_0-810x540.jpg.webp",
        title: "Очки Boss 1428 0OC",
        price: 14599
    },
    {
        image: "https://www.optic-city.ru/image/cache/rss/1/8/1/7/8/3/5/item_1817835/1817835_0-810x540.jpg.webp",
        title: "Очки RayBan 5228 5014 (55)",
        price: 15749
    },
    {
        image: "https://www.optic-city.ru/image/cache/rss/1/9/1/3/4/7/1/item_1913471/1913471_0-810x540.jpg.webp",
        title: "Очки PRODESIGN 1762 1 9631",
        price: 19899
    }
]
</script>

