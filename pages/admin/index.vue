<template>
    <div class="flex flex-col gap-6">
        <div class="flex items-center gap-2 text-xl md:text-2xl xl:text-3xl font-Comfortaa font-normal">
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
            <p>Добавление товара</p>
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
        </div>
        <NuxtLink class="px-4 py-2 text-white bg-emerald-800 rounded-md w-fit" to="">Добавить товар</NuxtLink>
    </div>
    <div class="flex flex-col gap-6">
        <button @click="isProductsShow = !isProductsShow" class="flex items-center gap-2 text-xl md:text-2xl xl:text-3xl font-Comfortaa font-normal w-fit">
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
            <span>Список товаров</span>
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
        </button>

        <!-- <div class="flex flex-col gap-6 rounded-lg overflow-hidden text-left bg-gray-200 transition-all duration-500" :class="isProductsShow ? 'h-full' : 'h-0'">
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
        </div> -->
    </div>
    <div class="flex flex-col gap-6">
        <button @click="isOrdersShow = !isOrdersShow" class="flex items-center gap-2 text-xl md:text-2xl xl:text-3xl font-Comfortaa font-normal w-fit">
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
            <span>Заказы</span>
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
        </button>
        <div class="flex flex-col gap-8 text-lg rounded-xl relative lg:w-1/2 transition-all duration-500 overflow-hidden" :class="isOrdersShow ? 'h-full border border-[#3BBAC2] p-4' : 'h-0'" v-for="order in ordersArray">
            <div class="flex flex-col gap-4">
                <p><span class="font-Comfortaa">Номер заказа:</span> <span class="font-bold">{{ order[0].orderId }}</span></p>
                <p><span class="font-Comfortaa">Статус заказа:</span> <span class="font-bold">{{ order[0].status }}</span></p>
                <p><span class="font-Comfortaa">Адрес:</span> <span class="font-bold">{{ order[0].address }}</span></p>
                <p><span class="font-Comfortaa">Итоговая цена:</span> <span class="font-bold">{{ order[0].sum.toLocaleString() }} ₽</span></p>
            </div>
            <div class="flex flex-col gap-4 rounded-xl shadow-[0px_0px_13px_-7px_black] p-4" v-for="o in order">
                <p><span class="font-Comfortaa">Наименование товара/услуги:</span> <span class="font-bold">{{ o.products.title }}</span></p>
                <img :src="o.products.image" alt="" class="rounded-xl w-[160px]">
                <p><span class="font-Comfortaa">Количество товара:</span> <span class="font-bold">{{ o.count }}</span></p>
                <p><span class="font-Comfortaa">Цена за единицу:</span> <span class="font-bold">{{ o.products.price.toLocaleString() }} ₽</span></p>
            </div>
            <button v-if="order[0].status == 'Новый'" @click="cancelOrder(order[0].orderId)" class="absolute top-4 right-4 text-red-500">
                <Icon class="text-3xl" name="ic:baseline-close"/>
            </button>
            <button v-if="order[0].status == 'Новый'" @click="completeOrder(order[0].orderId)" class="absolute top-4 right-14 text-[#569E0B]">
                <Icon class="text-3xl" name="mdi:check"/>
            </button>
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


    /* подключение БД */
    const supabase = useSupabaseClient() 


    /* создание сообщений и роутера */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())
    const router = useRouter()


    /* список заказов и проверка номеров */ 
    const orderNumbers = []
    const { data: carts } = await supabase
    .from('cart')
    .select(`*, products (*), users (*)`)
    .order('status', { ascending: true })
    carts.forEach(el => {
        if(orderNumbers.indexOf(el.orderId) === -1) {
            orderNumbers.push(el.orderId)
        }
    })

    const ordersArray = ref([])
    for (let i = 0; i < orderNumbers.length; i++) {
        const array = []
        carts.forEach(el => {
            if(el.orderId == orderNumbers[i]) {
                array.push(el)
            }
        })
        ordersArray.value.push(array)
    }


    /* заказы */
    const cancelOrder = async (orderId) => {
        const { data, error } = await supabase
        .from('cart')
        .update({ status: 'Отменён'})
        .eq('orderId', `${orderId}`)
        .eq('status', `Новый`)
        .select()
          
        if(data) {
            console.log(data[0])
            messageTitle.value = 'Заказ отменён!', messageType.value = true 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
            setTimeout(() => {
                router.go()
                messageTitle.value = null
            }, 1500) 
        } else {
            messageTitle.value = 'Произошла ошибка!', messageType.value = false 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
        }
    }

    const completeOrder = async (orderId) => {
        const { data, error } = await supabase
        .from('cart')
        .update({ status: 'Выполнен'})
        .eq('orderId', `${orderId}`)
        .eq('status', `Новый`)
        .select()
          
        if(data) {
            console.log(data[0])
            messageTitle.value = 'Заказ выполнен!', messageType.value = true 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
            setTimeout(() => {
                router.go()
                messageTitle.value = null
            }, 1500) 
        } else {
            messageTitle.value = 'Произошла ошибка!', messageType.value = false 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
        }
    }
</script>
