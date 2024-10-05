<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Stajor o'qituvchilar uchun test yaratish bo'limi</h1>
      </div>
      {{ route }}
      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <VForm @submit="handleSubmitForm" v-slot="{ errors }">
            <div class="grid items-start grid-cols-12 gap-4">
               <div class="grid gap-2 col-span-12">
                  <VField name="questions" rules="required" v-model="text">
                     <Label class="flex items-center justify-between">
                        Savollarni kiriting
                        <div class="flex items-center space-x-2">
                           <Switch v-model:checked="mathView" @update:checked="toggleMathView" id="mathView" />
                           <Label for="mathView">Matematik ko'rish</Label>
                        </div>
                     </Label>
                     <Textarea
                        size="3"
                        class="min-h-[400px]"
                        placeholder="Question 1
====
Variant 1
====
Variant 2
====
#Variant 3 correct
====
Variant 4
++++
Question 2"
                        v-model="text"
                     />
                     <code> Savollar togri ekanini tekshirish uchun Matematik ko'rishni yoqing </code>
                     <span class="text-sm text-destructive font-medium">{{ errors.questions }}</span>
                  </VField>
               </div>
            </div>
            <Button type="submit" class="mt-3" :disabled="loading">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  font-size="48"
                  class="animate-spin iconify iconify--ph w-5 h-5"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  v-if="loading"
               >
                  <path
                     fill="#fff"
                     d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
                  ></path>
               </svg>
               Saqlash
            </Button>
         </VForm>
      </div>
      <div class="flex flex-col gap-4" v-if="mathView">
         <h2 class="text-lg font-medium md:text-2xl">Test savollari</h2>
         <h3 class="text-lg font-medium md:text-xl text-destructive">{{ errorQuestion }}</h3>
         <ul v-for="(question, i) in rawTests.questions" :key="i">
            <h3 class="text-base font-medium" v-katex:auto>{{ i + 1 + '. ' + question.question_text }}</h3>
            <li v-for="option in question.options" class="p-2 border-b" :class="{ 'bg-secondary': option.is_correct }" v-katex:auto>
               {{ option.text }}
            </li>
         </ul>
      </div>
   </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useTestsStore } from '@/stores/test.js';
import { useCustomToast } from '@/composables/useCustomToast.js';

const route = useRoute();

const testsStore = useTestsStore();

const { createTest } = testsStore;

const { loading } = storeToRefs(testsStore);

const { showToast } = useCustomToast();

const rawTests = reactive({
   questions: [],
   banner_photo: ''
});

const text = ref('');

const mathView = ref(false);

const errorQuestion = ref('');

const toggleMathView = () => {
   if (mathView.value) {
      rawTests.questions = prepareQuestions(prepareMathView(text.value));
   } else {
      rawTests.questions = [];
   }
};

const handleSubmitForm = async () => {
   try {
      const testData = {
         test_type: route.params.slug,
         subject: route.params.parts,
         part: route.params.subject,
         theme: rawTests.tests,
         banner_photo: rawTests.banner_photo,
         questions: rawTests.questions
      };
      const response = await createTest(testData);
      if (response.status === 'success') {
         showToast("Test muvaffaqiyatli qo'shildi!", 'success');
         resetForm();
      }
   } catch (error) {
      if (error.response && error.response.data) {
         const errorMessage = error.response.data.error || 'Nomalum xato';
         showToast(`${errorMessage}`, 'error');
      } else {
         showToast(`Test yaratishda xato: ${error.message}`, 'error');
      }
   }
};

const resetForm = () => {
   rawTests.questions = [];
   text.value = '';
   mathView.value = false;
   errorQuestion.value = '';
};
</script>
