<template>
    <div class="flex max-lg:flex-col gap-6">
        <div class="flex flex-col border-2 border-[#0C669C]/60 p-4 rounded-lg lg:w-1/4 gap-6 h-fit">
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Comfortaa font-normal">Цена</p>
                <div class="flex items-center gap-1">
                    <input v-model="filters.minPrice" class="w-1/2 rounded-l-md border border-[#3BBAC2] px-4 py-2" placeholder="От" type="text">
                    <input v-model="filters.maxPrice" class="w-1/2 rounded-r-md border border-[#3BBAC2] px-4 py-2" placeholder="До" type="text">
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Comfortaa font-normal">Категория</p>
                <select class="rounded-md border border-[#3BBAC2] px-4 py-2" name="age" v-model="filters.age">
                    <option :value="age" v-for="age in selectAge">{{ age }}</option>
                </select>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Comfortaa font-normal">Тип</p>
                <select class="rounded-md border border-[#3BBAC2] px-4 py-2" name="type" v-model="filters.type">
                    <option :value="type" v-for="type in selectType">{{ type }}</option>
                </select>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Comfortaa font-normal">Бренд</p>
                <label class="flex items-center gap-2 text-lg" v-for="brand in inputBrand">
                    <input type="checkbox" :value="brand" class="w-5 h-5" v-model="filters.brands">
                    {{ brand }}
                </label>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Comfortaa font-normal">Цвет</p>
                <label class="flex items-center gap-2 text-lg" v-for="color in inputColor">
                    <input type="checkbox" :value="color" class="w-5 h-5" v-model="filters.colors">
                    {{ color }}
                </label>
            </div>
            <div class="flex flex-col gap-2">
                <button @click="filterProducts" class="px-4 py-2 rounded-md text-white w-full text-center bg-[#3BBAC2]">Применить</button>
                <button @click="cancelFilters" class="px-4 py-2 rounded-md text-[#3BBAC2] w-full text-center border border-[#3BBAC2]">Отменить</button>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 h-fit lg:grid-cols-3 lg:w-3/4 gap-4">
            <Card v-for="product in products" v-bind="product"></Card>
        </div>
    </div>
</template>

<script setup>
    /* название страницы */
    useServerSeoMeta({
        title: 'Каталог',
        lang: 'ru'
    })


    /* подключение к БД */
    const supabase = useSupabaseClient()
    const { data: productsData, error } = await supabase
    .from('products')
    .select('*')
    .order('title', { ascending: true })   

    
    /* модификация данных и поиск */
    const store = useProductStore()
    const products = computed(() => store.filteredProducts)
    onMounted(() => {
        store.setProducts(productsData)
    })
    

    /* управление select'ами и input'ами */
    const selectAge = ['Все', ...new Set(productsData.map(item => item.age))]
    const selectType = ['Все', ...new Set(productsData.map(item => item.type))]
    const inputBrand = [...new Set(productsData.map(item => item.brand))]
    const inputColor = [...new Set(productsData.map(item => item.color))]
       

    /* создание фильтров */    
    const filters = ref({
        minPrice: "",
        maxPrice: "",
        age: 'Все',
        type: 'Все',
        brands: [],
        colors: []
    })


    /* фильтрация */    
    const filterProducts = () => {
        const filtered = productsData.filter(el => {
            if (filters.value.minPrice && el.price < filters.value.minPrice) return false
            if (filters.value.maxPrice && el.price > filters.value.maxPrice) return false
            if (filters.value.type !== 'Все' && el.type !== filters.value.type) return false
            if (filters.value.age !== 'Все' && el.age !== filters.value.age) return false
            if (filters.value.brands.length && !filters.value.brands.includes(el.brand)) return false
            if (filters.value.colors.length && !filters.value.colors.includes(el.color)) return false
            return true
        })
        store.setProducts(filtered)
    }  
    
    const cancelFilters = () => {
        filters.value = {
            minPrice: "",
            maxPrice: "",
            age: 'Все',
            type: 'Все',
            brands: [],
            colors: []
        }
        store.setProducts(productsData)
    }

    /* добавление в БД */
    /* const addBD = async () => {        
        const { data, error } = await supabase
        .from('products')
        .insert([
            {
                image: "https://www.optic-city.ru/image/cache/rss/1/9/5/3/1/5/9/item_1953159/1953159_0-810x540.jpg.webp",
                title: "Очки Boss 1428 0OC",
                age: "Для взрослых",
                type: "Готовые очки",
                brand: "Boss",
                color: "Зелёный",
                price: 14599
            },
            {
                image: "https://www.optic-city.ru/image/cache/rss/1/8/1/7/8/3/5/item_1817835/1817835_0-810x540.jpg.webp",
                title: "Очки RayBan 5228 5014 (55)",
                age: "Для взрослых",
                type: "Готовые очки",
                brand: "RayBan",
                color: "Чёрный",
                price: 15749
            },
            {
                image: "https://www.optic-city.ru/image/cache/rss/1/9/1/3/4/7/1/item_1913471/1913471_0-810x540.jpg.webp",
                title: "Очки PRODESIGN 1762 1 9631",
                age: "Для взрослых",
                type: "Готовые очки",
                brand: "PRODESIGN",
                color: "Зелёный",
                price: 19899
            }
        ])
        .select()          
    } */
</script>

