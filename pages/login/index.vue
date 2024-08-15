<template>
   <div class="max-w-[450px] w-full relative my-4 rounded-md shadow-custom">
      <div class="flex flex-col p-8 gap-6">
         <div class="flex flex-col items-center text-center gap-4">
            <NuxtLink to="/" class="text-center">
               <span class="whitespace-nowrap text-lg font-bold">TalimPro</span>
            </NuxtLink>
            <div class="flex flex-col gap-1">
               <h4 class="text-lg font-semibold">Ta'limProga xush kelibsiz!</h4>
               <p>Kirish uchun login va parolingizni kiriting.</p>
            </div>
         </div>

         <VForm @submit="loginToSystem" v-slot="{ errors }">
            <div class="flex flex-col gap-4">
               <div class="flex flex-col gap-2">
                  <VField name="login" rules="required" v-model="form.login">
                     <Label for="login" class="flex items-center gap-0.5">
                        <svg class="w-4 h-4" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M6 21.3252V19.3252C6 18.2643 6.42143 17.2469 7.17157 16.4968C7.92172 15.7466 8.93913 15.3252 10 15.3252H14C15.0609 15.3252 16.0783 15.7466 16.8284 16.4968C17.5786 17.2469 18 18.2643 18 19.3252V21.3252M8 7.3252C8 8.38606 8.42143 9.40348 9.17157 10.1536C9.92172 10.9038 10.9391 11.3252 12 11.3252C13.0609 11.3252 14.0783 10.9038 14.8284 10.1536C15.5786 9.40348 16 8.38606 16 7.3252C16 6.26433 15.5786 5.24691 14.8284 4.49677C14.0783 3.74662 13.0609 3.3252 12 3.3252C10.9391 3.3252 9.92172 3.74662 9.17157 4.49677C8.42143 5.24691 8 6.26433 8 7.3252Z"
                              stroke="hsl(var(--primary))"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                        Login
                     </Label>
                     <Input v-model="form.login" id="login" type="text" placeholder="Loginni kiriting" />
                     <span class="text-sm text-destructive font-medium">{{ errors.login }}</span>
                  </VField>
               </div>
               <div class="flex flex-col gap-2">
                  <VField name="password" rules="required" v-model="form.password">
                     <Label for="password" class="flex items-center gap-0.5">
                        <svg class="w-4 h-4" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M8 11.3252V7.3252C8 6.26433 8.42143 5.24691 9.17157 4.49677C9.92172 3.74662 10.9391 3.3252 12 3.3252C13.0609 3.3252 14.0783 3.74662 14.8284 4.49677C15.5786 5.24691 16 6.26433 16 7.3252V11.3252M5 13.3252C5 12.7948 5.21071 12.2861 5.58579 11.911C5.96086 11.5359 6.46957 11.3252 7 11.3252H17C17.5304 11.3252 18.0391 11.5359 18.4142 11.911C18.7893 12.2861 19 12.7948 19 13.3252V19.3252C19 19.8556 18.7893 20.3643 18.4142 20.7394C18.0391 21.1145 17.5304 21.3252 17 21.3252H7C6.46957 21.3252 5.96086 21.1145 5.58579 20.7394C5.21071 20.3643 5 19.8556 5 19.3252V13.3252ZM11 16.3252C11 16.5904 11.1054 16.8448 11.2929 17.0323C11.4804 17.2198 11.7348 17.3252 12 17.3252C12.2652 17.3252 12.5196 17.2198 12.7071 17.0323C12.8946 16.8448 13 16.5904 13 16.3252C13 16.06 12.8946 15.8056 12.7071 15.6181C12.5196 15.4306 12.2652 15.3252 12 15.3252C11.7348 15.3252 11.4804 15.4306 11.2929 15.6181C11.1054 15.8056 11 16.06 11 16.3252Z"
                              stroke="hsl(var(--primary))"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                        Parol
                     </Label>
                     <div class="relative">
                        <Input v-model="form.password" id="password" :type="passwordField ? 'text' : 'password'" placeholder="Parolni kiriting" class="pr-8" />
                        <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer" @click="passwordSee">
                           <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="!passwordField">
                              <path
                                 d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z"
                                 stroke="#292D32"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                              <path
                                 d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77"
                                 stroke="#292D32"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                              <path
                                 d="M8.41992 19.5302C9.55992 20.0102 10.7699 20.2702 11.9999 20.2702C15.5299 20.2702 18.8199 18.1902 21.1099 14.5902C22.0099 13.1802 22.0099 10.8102 21.1099 9.40018C20.7799 8.88018 20.4199 8.39018 20.0499 7.93018"
                                 stroke="#292D32"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                              <path
                                 d="M15.5104 12.7002C15.2504 14.1102 14.1004 15.2602 12.6904 15.5202"
                                 stroke="#292D32"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                              <path d="M9.47 14.5298L2 21.9998" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M22.0003 2L14.5303 9.47" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                           <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="passwordField">
                              <path
                                 d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
                                 stroke="#292D32"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                              <path
                                 d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z"
                                 stroke="#292D32"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                              />
                           </svg>
                        </span>
                     </div>
                     <span class="text-sm text-destructive font-medium">{{ errors.password || '' }}</span>
                  </VField>
               </div>
            </div>
            <Button type="submit" class="w-full mt-3">Tizimga kirish</Button>
         </VForm>
      </div>
   </div>
</template>

<script setup>
definePageMeta({
   layout: 'auth'
});

const authStore = useAuthStore();
const { login } = authStore;

const passwordField = ref(false);

const form = reactive({
   login: '',
   password: ''
});

const passwordSee = () => {
   passwordField.value = !passwordField.value;
};

function loginToSystem() {
   login(form);
}
</script>
