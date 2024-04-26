<template>
    <p class="text-3xl">Доставка</p>
    <div class="grid lg:grid-cols-2 gap-4 text-white w-full">
        <div class="flex items-center bg-gradient-to-b from-[#028ECE] to-[#3BBAC2]/80 h-[300px] rounded-md border border-[#3BBAC2]">
            <div class="flex flex-col">
                <p class="text-2xl px-4 2">Стандартная доставка</p>
                <img class="w-[200px] h-[200px]" src="/img/delivery/car.png" alt="">
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0" name="icon-park-outline:delivery"/>
                    <p class="text-xl">Доставка курьером до двери</p>
                </div>
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0" name="material-symbols:alarm-outline"/>
                    <p class="text-xl">Срок доставки от 1 до 3 дней</p>
                </div>
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0" name="solar:wallet-money-outline"/>
                    <p class="text-xl">199 ₽</p>
                </div>
            </div>
        </div>
        <div class="flex items-center bg-gradient-to-b from-[#028ECE] to-[#3BBAC2]/80 h-[300px] rounded-md border border-[#3BBAC2]">
            <div class="flex flex-col">
                <p class="text-2xl px-4 2">Экспресс доставка</p>
                <img class="w-[200px] h-[200px]" src="/img/delivery/car.png" alt="">
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0" name="icon-park-outline:delivery"/>
                    <p class="text-xl">Доставка курьером до двери</p>
                </div>
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0" name="material-symbols:alarm-outline"/>
                    <p class="text-xl">Срок доставки от 1 часа</p>
                </div>
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0" name="solar:wallet-money-outline"/>
                    <p class="text-xl">399 ₽</p>
                </div>
            </div>
        </div>
    </div>
    <p class="text-3xl">Самовывоз</p>
    <div class="grid lg:grid-cols-2 gap-4 text-white w-full">
        <div class="flex items-center bg-gradient-to-b from-[#028ECE] to-[#3BBAC2]/80 h-[300px] rounded-md border border-[#3BBAC2]">
            <div class="flex flex-col">
                <p class="text-2xl px-4 2">Пункт выдачи</p>
                <img class="w-[200px] h-[200px]" src="/img/delivery/car.png" alt="">
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0 text-[#0C669C]" name="icon-park-outline:delivery"/>
                    <p class="text-xl">Доставка курьером до двери</p>
                </div>
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0 text-[#0C669C]" name="material-symbols:alarm-outline"/>
                    <p class="text-xl">Срок доставки от 1 до 3 дней</p>
                </div>
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0 text-[#0C669C]" name="solar:wallet-money-outline"/>
                    <p class="text-xl">99 ₽</p>
                </div>
            </div>
        </div>
        <div class="flex items-center bg-gradient-to-b from-[#028ECE] to-[#3BBAC2]/80 h-[300px] rounded-md border border-[#3BBAC2]">
            <div class="flex flex-col">
                <p class="text-2xl px-4 py-2">В магазине</p>
                <img class="w-[200px] h-[200px]" src="/img/delivery/car.png" alt="">
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0 text-[#0C669C]" name="icon-park-outline:delivery"/>
                    <p class="text-xl">Доставка курьером до двери</p>
                </div>
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0 text-[#0C669C]" name="material-symbols:alarm-outline"/>
                    <p class="text-xl">Срок доставки от 1 часа</p>
                </div>
                <div class="flex items-center gap-2">
                    <Icon class="text-3xl shrink-0 text-[#0C669C]" name="solar:wallet-money-outline"/>
                    <p class="text-xl">0 ₽</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useServerSeoMeta({
    title: 'Доставка',
    lang: 'ru'
})
</script>
