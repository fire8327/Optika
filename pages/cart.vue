<template>
    <div class="flex max-lg:flex-col gap-8 md:gap-10 xl:gap-12" v-if="carts.length>0">
        <div class="flex flex-col gap-10 w-[70%]">
            <CartCard v-for="cart in carts" v-bind="cart"></CartCard>
        </div>
        <div class="flex flex-col gap-6 w-[30%] border-2 border-[#0C669C] rounded-md bg-white px-12 py-10 text-lg">
            <p class="text-2xl">Детали заказа</p>
            <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between gap-2">
                    <label class="flex items-center gap-2 cursor-pointer"><input name="delivery" value="delivery" type="radio" v-model="detailsForm.delivery">Доставка</label>
                    <p class="text-[#3BBAC2]">300 ₽</p>
                </div>
                <div class="flex items-center justify-between gap-2">
                    <label class="flex items-center gap-2 cursor-pointer"><input name="delivery" value="pickup" type="radio" v-model="detailsForm.delivery">Самовывоз</label>
                    <p class="text-[#3BBAC2]">0 ₽</p>
                </div>
            </div>
            <textarea class="px-4 py-2 rounded-md border border-[#3BBAC2]" placeholder="Укажите адрес доставки" v-if="detailsForm.delivery == 'delivery'" v-model="detailsForm.address"></textarea>
            <p v-if="detailsForm.delivery == 'pickup'">Самовывоз по адресу: Кронштадтский бул., 37Б</p>
            <div class="flex flex-col gap-2">
                <input class="px-4 py-2 rounded-md border border-[#3BBAC2]" v-model="detailsForm.code" placeholder="Укажите промокод" type="text">
                <button @click="checkCode" class="px-4 py-2 rounded-md border border-[#3BBAC2] text-[#3BBAC2] text-center">Применить</button>
                <p class="text-base" :class="detailsForm.codeType ? 'text-emerald-800' : 'text-[#E71616]'" v-if="detailsForm.codeTitle">{{ detailsForm.codeTitle }}</p>
            </div>
            <div class="flex items-center justify-between gap-2">
                <p class="">Итого:</p>
                <p class="text-[#3BBAC2] text-3xl">0 ₽</p>
            </div>
            <button class="px-4 py-2 rounded-md bg-[#3BBAC2] text-white text-center">Оформить заказ</button>
        </div>
    </div>
    <div class="w-full lg:w-3/4 lg:mx-auto top-1/2 -translate-y-1/2 rounded-xl border-2 border-[#0C669C] p-4 flex flex-col gap-4 items-center justify-center relative h-fit bg-white" v-else>
        <p class="text-xl">Корзина пуста...</p>
        <p class="text-lg opacity-70">Перейдите в каталог для добавления товаров</p>
        <NuxtLink to="/catalog" class="px-4 py-2 rounded-xl bg-[#3BBAC2] text-white">В каталог</NuxtLink>
    </div>
</template>

<script setup>
    /* название страницы */
    useServerSeoMeta({
        title: 'Корзина',
        lang: 'ru'
    })


    /* создание формы */
    const detailsForm = ref({
        delivery: "",
        address: "",
        code: "",
        codeType: false,
        codeTitle: "",
        sum: 0
    })


    /* проверка входа */
    const {id} = storeToRefs(useUserStore())


    /* подключение к БД */
    const supabase = useSupabaseClient()
    const { data: carts, error } = await supabase
    .from('cart')
    .select(`*, products (*)`)
    .eq('status', 'В корзине')
    .eq('userId', `${id.value}`)


    /* проверка промокода */
    function checkCode() {
        if (detailsForm.value.code == "123") {
            detailsForm.value.codeType = true
            detailsForm.value.codeTitle = 'Промокод активирован 😀'
        } else {
            detailsForm.value.codeType = false
            detailsForm.value.codeTitle = 'Промокод не найден 😯'
        }
    }
</script>
