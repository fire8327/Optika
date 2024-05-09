<template>
    <div class="flex flex-col gap-6">
        <div class="flex items-center gap-2 text-xl md:text-2xl xl:text-3xl font-Comfortaa font-normal">
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
            <p>Редактирование товара</p>
            <span class="w-8 h-0.5 bg-black rounded-full"></span>
        </div>
        <FormKit @submit="updProduct" type="form" form-class="flex flex-col gap-6 full" :actions="false" messages-class="hidden">
            <div class="flex flex-col gap-6 items-center w-full">
                <FormKit v-model="productForm.title" validation="required" outer-class="$remove:mb-4 w-full" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="px-4 py-2 border border-[#3BBAC2] rounded-xl focus:outline-none w-full" name="Наименование" placeholder="Наименование товара" type="text"/>                    
                <FormKit v-model="productForm.price" validation="required|number" outer-class="$remove:mb-4 w-full" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="px-4 py-2 border border-[#3BBAC2] rounded-xl focus:outline-none w-full" name="Цена" placeholder="Цена" type="text"/>                    
                <FormKit v-model="productForm.type" validation="required" outer-class="$remove:mb-4 w-full" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="px-4 py-2 border border-[#3BBAC2] rounded-xl focus:outline-none w-full" name="Тип" placeholder="Тип товара" type="select" :options="['Готовые очки','Оправы','Линзы','Контактные линзы','Солнцезащитные очки']"/>                    
                <FormKit v-model="productForm.age" validation="required" outer-class="$remove:mb-4 w-full" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="px-4 py-2 border border-[#3BBAC2] rounded-xl focus:outline-none w-full" name="Возрастная категория" placeholder="Возрастная категория" type="select" :options="['Для детей','Для взрослых']"/>                    
                <FormKit v-model="productForm.brand" validation="required" outer-class="$remove:mb-4 w-full" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="px-4 py-2 border border-[#3BBAC2] rounded-xl focus:outline-none w-full" name="Бренд" placeholder="Бренд" type="text"/>                    
                <FormKit v-model="productForm.color" validation="required" outer-class="$remove:mb-4 w-full" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="px-4 py-2 border border-[#3BBAC2] rounded-xl focus:outline-none w-full" name="Цвет" placeholder="Цвет товара" type="text"/>                    
                <div class="flex flex-col gap-6 w-full">
                    <div class="flex flex-col gap-2 rounded-xl border border-[#3BBAC2] p-4" v-for="characteristic in characteristics">
                        <button @click="deleteCharacteristic(characteristics.indexOf(characteristic))" type="button" class="px-4 py-2 rounded-xl text-white bg-[#3BBAC2] w-fit self-end">
                            <Icon class="text-2xl" name="material-symbols:delete-forever"/>
                        </button>
                        <div class="flex items-start max-md:flex-col gap-2">
                            <FormKit v-model="characteristic.title" validation="required" outer-class="$remove:mb-4 w-full md:w-1/2" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="px-4 py-2 border border-[#3BBAC2] rounded-xl focus:outline-none w-full" :name="`Наименование${characteristics.indexOf(characteristic)}`" placeholder="Наименование характеристики" type="text"/>                    
                            <FormKit v-model="characteristic.value" validation="required" outer-class="$remove:mb-4 w-full md:w-1/2" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="px-4 py-2 border border-[#3BBAC2] rounded-xl focus:outline-none w-full" :name="`Значение${characteristics.indexOf(characteristic)}`" placeholder="Значение характеристики" type="text"/>                    
                        </div>
                    </div>
                </div>
                <button @click="addCharacteristic" type="button" class="px-4 py-2 rounded-xl text-white bg-[#3BBAC2] mx-auto">
                    <Icon class="text-2xl" name="material-symbols:exposure-plus-1"/>
                </button>
                <FormKit @change="imageToBase" multiple="true" accept=".png,.jpg,.jpeg,.svg,.webp,.bmp" type="file" name="Фото" messages-class="text-[#E9556D] font-Comfortaa text-base mt-2" outer-class="w-full" inner-class="px-4 py-2 border border-[#3BBAC2] rounded-xl focus:outline-none w-full bg-white"/>      
                <FormKit type="submit" input-class="bg-[#3BBAC2] rounded-full font-semibold text-white text-center max-md:px-6 py-2 hover:opacity-80 transition-all duration-300 $remove:focus-visible:outline-blue-600 $remove:focus-visible:outline-offset-2 $remove:bg-blue-600 $remove:focus-visible:outline-2 $remove:inline-flex $remove:text-sm">Обновить</FormKit>
            </div>
        </FormKit>
    </div>
</template>

<script setup>
    /* название страницы */
    useServerSeoMeta({
        title: 'Админ-панель',
        lang: 'ru'
    })


    /* подключение БД */
    const supabase = useSupabaseClient() 


    /* создание сообщений и роутера */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())
    const router = useRouter()
    const route = useRoute()


    /* товар */
    const { data: products } = await supabase
    .from('products')
    .select(`*`)
    .eq('id', `${route.params.id}`)


    /* добавление фото */
    let formImages = []   
    if(products[0].image) {
        formImages[0] = products[0].image 
    } 
    if(products[0].image1) {
        formImages[1] = products[0].image1 
    }
    if(products[0].image2) {
        formImages[2] = products[0].image2 
    } 

    const imageToBase = (el) => {
        const files = el.target.files
        console.log(files)
        for (let i = 0; i < files.length; i++) {                   
            let reader = new FileReader()
            reader.onloadend = () => {
                formImages.push(reader.result)
            }
            reader.readAsDataURL(files[i])
        }
    }


    /* управление характеристиками */
    const characteristics = ref([]) 
    if(products[0].characteristic) {
        characteristics.value = products[0].characteristic
    } else {
        characteristics.value = [{
            title: "",
            value: ""
        }]
    }

    const addCharacteristic = () => {
        characteristics.value.push({
            title: "",
            value: ""
        })
    }

    const deleteCharacteristic = (id) => {
        if(characteristics.value.length > 1) {
            characteristics.value.splice(id, 1)
        }
    }


    /* обновление товара */    
    const productForm = ref({
        title: products[0].title,
        price: products[0].price,
        type: products[0].type,
        brand: products[0].brand,
        color: products[0].color,
        age: products[0].age
    })

    const updProduct = async () => {        
        const { data, error } = await supabase
        .from('products')
        .update([
            { image: `${formImages[0]}`, image2: `${formImages[1]}`, image3: `${formImages[2]}`, title: `${productForm.value.title}`, price: `${productForm.value.price}`, type: `${productForm.value.type}`, brand: `${productForm.value.brand}`, color: `${productForm.value.color}`, age: `${productForm.value.age}`, characteristic: characteristics.value },
        ])
        .eq('id',`${route.params.id}`)
        .select()
          
        if(data) {
            console.log(data[0])
            messageTitle.value = 'Товар обновлён!', messageType.value = true 
            setTimeout(() => {
                router.push('/admin')
                messageTitle.value = null
            }, 3000) 
        } else {
            messageTitle.value = 'Произошла ошибка!', messageType.value = false 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
        }
    }
</script>