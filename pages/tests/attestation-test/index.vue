<template>
   <div class="flex flex-1 flex-col gap-4">
      <div class="flex items-center justify-between">
         <h1 class="text-lg font-medium md:text-2xl">Attestatsiya uchun test yaratish bo'limi</h1>
      </div>

      <div class="flex-1 rounded-lg border border-dashed shadow-sm p-4">
         <div>
            <h2 class="text-base font-medium mb-4">Umumiy qism</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               <ClientOnly>
                  <NumberField id="durationTest1" v-model="rawTests.duration" :min="60" class="grid gap-2">
                     <Label for="durationTest">Umumiy test vaqti</Label>
                     <NumberFieldContent>
                        <NumberFieldDecrement />
                        <NumberFieldInput />
                        <NumberFieldIncrement />
                     </NumberFieldContent>
                  </NumberField>
               </ClientOnly>

               <ClientOnly>
                  <NumberField id="durationTest" v-model="rawTests.questions_count" :min="30" class="grid gap-2">
                     <Label for="durationTest">Savollar soni</Label>
                     <NumberFieldContent>
                        <NumberFieldDecrement />
                        <NumberFieldInput />
                        <NumberFieldIncrement />
                     </NumberFieldContent>
                  </NumberField>
               </ClientOnly>

               <div class="grid gap-2">
                  <VField name="type" rules="required" v-model="rawTests.type">
                     <Label for="type"> Test turi</Label>
                     <Input disabled v-model="rawTests.type" class="h-9" />
                  </VField>
               </div>
            </div>
         </div>
         <Separator class="my-4" />
         <VForm @submit="handleSubmitForm" v-slot="{ errors }">
            <div class="grid items-start grid-cols-12 gap-4">
               <div class="grid gap-2 col-span-12 lg:col-span-4 sm:col-span-6">
                  <VField name="science" rules="required" v-model="rawTests.science">
                     <Label for="science"> Fanni tanlang </Label>
                     <Select v-model="rawTests.science">
                        <SelectTrigger class="w-full">
                           <SelectValue placeholder="Fanni tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectGroup>
                              <SelectItem v-for="science in sciences.data" :key="science._id" :value="science._id">
                                 {{ science.name_uz }}
                              </SelectItem>
                           </SelectGroup>
                        </SelectContent>
                     </Select>
                     <span class="text-sm text-destructive font-medium">{{ errors.science }}</span>
                  </VField>
               </div>
               <div class="grid gap-2 col-span-12 lg:col-span-4 sm:col-span-6">
                  <VField name="part" rules="required" v-model="rawTests.science">
                     <Label for="part"> Bo'limni tanlang </Label>
                     <Select v-model="rawTests.part" :disabled="rawTests.science === ''">
                        <SelectTrigger class="w-full">
                           <SelectValue placeholder="Bo'limni tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectGroup>
                              <SelectItem v-for="part in parts.data" :key="part._id" :value="part._id">
                                 {{ part.name_uz }}
                              </SelectItem>
                           </SelectGroup>
                        </SelectContent>
                     </Select>
                     <span class="text-sm text-destructive font-medium">{{ errors.part }}</span>
                  </VField>
               </div>
               <div class="grid gap-2 col-span-12 lg:col-span-4 sm:col-span-6">
                  <VField name="subject" rules="required" v-model="rawTests.subject">
                     <Label for="subject"> Mavzuni tanlang </Label>
                     <Select v-model="rawTests.subject" :disabled="rawTests.part === ''">
                        <SelectTrigger class="w-full">
                           <SelectValue placeholder="Mavzuni tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectGroup>
                              <SelectItem v-for="subject in subjects.data" :key="subject._id" :value="subject._id">
                                 {{ subject.name_uz }}
                              </SelectItem>
                           </SelectGroup>
                        </SelectContent>
                     </Select>
                     <span class="text-sm text-destructive font-medium">{{ errors.subject }}</span>
                  </VField>
               </div>
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
import { ref, reactive } from 'vue';
import { useSciencesStore } from '@/stores/sciences.js';
import { useTestsStore } from '@/stores/test.js';
import { useCustomToast } from '@/composables/useCustomToast.js';
import { useKatex } from '@/composables/useKatex.js';

const scienceStore = useSciencesStore();
const testsStore = useTestsStore();

const { getSciences, getSectionByScienceId, getSubjectSectionById } = scienceStore;
const { createTest } = testsStore;

const { loading } = storeToRefs(testsStore);

const { showToast } = useCustomToast();

const rawTests = reactive({
   questions: [],
   science: '',
   subject: '',
   part: '',
   banner_photo: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/image-avatar%2Fimage-4.png?alt=media&',
   type: 'teacher',
   duration: '120',
   questions_count: '40'
});

const parts = ref([]);
const subjects = ref([]);

const text = ref('');

const mathView = ref(false);

const errorQuestion = ref('');

const katex = ref(`$f(x)=x \cdot 5^{x}$ funksiyaning hosilasini toping.\\

A) $f^{\prime}(x)=2 \cdot 5^{x} \ln 5^{x}$\\

B) $f^{\prime}(x)=5^{x} \ln 5^{x}-5^{x}$\\

C) $f^{\prime}(x)=5^{x} \ln 5^{x+1}$\\

D) $f^{\prime}(x)=5^{x} \ln 5^{x}+5^{x}$`);

function prepareMathView(string) {
   if (string) {
      let clearedFromFigures = string.replace(/<figure .*?>.*?<\/figure>/g, '');
      let clearedFromDelimiters = clearedFromFigures.replace(/\$/g, '');
      let preparedSpaces = clearedFromDelimiters.replace(/\s/g, ' \\space ');
      let nbspRemoved = preparedSpaces.replace(/&nbsp;/gi, '');
      let pStartRemoved = nbspRemoved.replace(/<p>/gi, '');
      let pEndRemoved = pStartRemoved.replace(/<\/p>/gi, '');
      return pEndRemoved.replace(/<[^>]*>/g, '');
   }
   return '';
}

const toggleMathView = () => {
   try {
      if (mathView.value) {
         rawTests.questions = [];
         rawTests.questions = prepareQuestions(text.value);
         katex.value = prepareMathView(text.value);
      }
   } catch (error) {
      errorQuestion.value = error.message;
   }
};

const handleSubmitForm = async () => {
   try {
      rawTests.questions = prepareQuestions(text.value);

      const testData = {
         subject: rawTests.subject,
         part: rawTests.part,
         theme: rawTests.theme,
         banner_photo: rawTests.banner_photo,
         type: rawTests.type,
         duration: Number(rawTests.duration),
         questions_count: Number(rawTests.questions_count),
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

watch(
   () => rawTests.science,
   async (newScienceId) => {
      parts.value = await getSectionByScienceId(newScienceId);
   }
);

watch(
   () => rawTests.part,
   async (newSubjectId) => {
      subjects.value = await getSubjectSectionById(newSubjectId);
   }
);

const { data: sciences } = await useAsyncData('sciences', async () => {
   return await getSciences();
});
</script>
x
