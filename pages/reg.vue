<template>
    <div class="flex flex-col justify-center items-center grow relative py-5 rounded-lg xl:gap-20 md:gap-16 gap-10 text-center bg-[url(/img/auth/login.png)] bg-white/80 bg-cover border border-[#0C669C]/80">
        <div class="flex flex-col gap-4">
            <p class="text-xl md:text-2xl xl:text-3xl text-[#0C669C] font-semibold">Регистрация</p>
            <p class="text-sm xl:text-base text-black/80">Добро пожаловать! Зарегистрируйте аккаунт.</p>
        </div>
        <FormKit type="form" @submit="reg" messages-class="text-[#E71616]" form-class="flex flex-col gap-6 md:gap-8 xl:gap-10 w-full" :actions="false">
            <div class="flex flex-col gap-4">
                <div class="flex max-lg:flex-col max-lg:px-4 lg:items-start gap-6 w-full justify-center">
                    <FormKit v-model="regForm.name" validation="required|length:2" outer-class="$remove:mb-4 lg:w-1/3" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full border border-[#0C669C] px-4 py-1 w-full focus:outline-none focus:ring-0 focus:appearance-none rounded-full" name="Имя" placeholder="Имя" type="text"/>
                    <FormKit v-model="regForm.surname" validation="required|length:2" outer-class="$remove:mb-4 lg:w-1/3" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full border border-[#0C669C] px-4 py-1 w-full focus:outline-none focus:ring-0 focus:appearance-none rounded-full" name="Фамилия" placeholder="Фамилия" type="text"/>
                </div>
                <div class="flex max-lg:flex-col max-lg:px-4 lg:items-start gap-6 w-full justify-center">
                    <FormKit v-model="regForm.email" validation="required|length:6|email" outer-class="$remove:mb-4 lg:w-1/3" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full border border-[#0C669C] px-4 py-1 w-full focus:outline-none focus:ring-0 focus:appearance-none rounded-full" name="Почта" placeholder="Почта" type="text"/>
                    <FormKit v-model="regForm.password" validation="required|length:6" outer-class="$remove:mb-4 lg:w-1/3" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full border border-[#0C669C] px-4 py-1 w-full focus:outline-none focus:ring-0 focus:appearance-none rounded-full" name="Пароль" placeholder="••••••" type="password"/>
                </div>
            </div>
            <FormKit type="submit" input-class="bg-[#0C669C] rounded-full text-white text-center md:w-1/4 max-md:px-6 py-2 hover:opacity-80 transition-all duration-300 $remove:focus-visible:outline-blue-600 $remove:focus-visible:outline-offset-2 $remove:bg-blue-600 $remove:focus-visible:outline-2 $remove:inline-flex $remove:text-sm">Регистрация</FormKit>
            <div class="flex items-center justify-center gap-5">
                <div class="h-px w-1/6 bg-black/70"></div>
                <p class="text-[#0C669C]">Либо</p>
                <div class="h-px w-1/6 bg-black/70"></div>
            </div>
            <NuxtLink to="/auth" class="bg-[#3BBAC2] rounded-full mx-auto text-white text-center lg:w-1/4 max-lg:px-6 py-2 hover:opacity-80 transition-all duration-300">У меня уже есть аккаунт</NuxtLink>
            <button type="button" @click="messageTitle = null" class="fixed top-10 right-10 z-[11] cursor-pointer flex items-center gap-4 px-6 py-2 rounded-2xl w-fit text-white shadow-[0_0_20px_-7px]" :class="messageType ? ' bg-emerald-800' : 'bg-red-500'" v-if="messageTitle">
                <span>{{messageTitle}}</span>
                <Icon name="material-symbols:close-rounded" class="text-xl"/>
            </button>
        </FormKit>
    </div>
</template>

<script setup>
useServerSeoMeta({
    title: 'Регистрация',
    lang: 'ru'
})

const supabase = useSupabaseClient()
const regForm = ref({
    name:"",
    surname:"",
    email:"",
    password:""
})

const userStore = useUserStore()
const { messageTitle, messageType } = storeToRefs(useMessagesStore())
const router = useRouter()
const reg = async() => {
    let { data: users, error: usersError } = await supabase
    .from('users')
    .select("*")
    .eq('email', `${regForm.value.email}`)

    if (users[0]) {
        regForm.value.email = ""
        messageTitle.value = 'Такая почта уже используется!', messageType.value = false
        setTimeout(() => {
            messageTitle.value = null
        }, 3000)
    } else {
        const { data, error } = await supabase
        .from('users')
        .insert([
            { name: regForm.value.name, surname: regForm.value.surname, email: regForm.value.email, password: regForm.value.password, role: 'user'},
        ])
        .select()
        if (data) {
            console.log(data[0])
            messageTitle.value = 'Успешная регистрация!', messageType.value = true 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
            router.push('/auth')
        }
    }
}  
</script>
