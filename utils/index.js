export function clearSpaces(text) {
   return text.replaceAll(' ', '');
}

// Function to format currency
export function formatCurrency(amount) {
   return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Function to format phone numbers
export function formatPhone(phone) {
   if (!phone) return '';
   const numericString = phone.replace(/\D/g, '');
   let formattedString = '';
   if (numericString.length === 12) {
      formattedString = numericString.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5');
   } else if (numericString.length === 10) {
      formattedString = numericString.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
   } else if (numericString.length === 7) {
      formattedString = numericString.replace(/(\d{3})(\d{4})/, '$1-$2');
   } else {
      formattedString = phone;
   }
   return formattedString;
}

//

export function prepareQuestions(text) {
   if (!text || typeof text !== 'string') {
      throw new Error("Kirish matni bo'sh yoki noto'g'ri.");
   }
   const questions = text
      .trim()
      .split('++++')
      .map((questionBlock) => {
         const lines = questionBlock
            .trim()
            .split('====')
            .map((line) => line.trim());

         // Savol matnini olish
         const questionText = lines[0];

         // Kerakli shartlarni bajarish
         if (!questionText) {
            throw new Error(`Savol matni bo'sh.`);
         }

         if (lines.length < 3) {
            throw new Error(`Savol "${questionText}"da kamida 2 variant bo'lishi kerak.`);
         }

         // Variantlarni olish
         const options = lines.slice(1).map((optionLine) => {
            // Agar variant @ belgisidan boshlansa xato

            // Agar variant # bilan boshlanmasa, to'g'ri javob emasligini belgilash
            const is_correct = optionLine.startsWith('#');

            // Variantning matnini olib, bo'sh bo'lmaganligini tekshirish
            if (optionLine.trim() === '' || (is_correct && optionLine.length === 1)) {
               throw new Error(`Variant bo'sh bo'lmasligi yoki faqat # dan iborat bo'lmasligi kerak: "${optionLine}".`);
            }

            return { text: optionLine.replace(/^#\s*/, ''), is_correct }; // # belgisini olib tashlab, to'g'ri javoblarni belgilaymiz
         });

         // Faqat bitta to'g'ri javob mavjudligini tekshirish
         const correctAnswers = options.filter((option) => option.is_correct);
         if (correctAnswers.length === 0) {
            throw new Error(`Savolda hech qanday to'g'ri javob mavjud emas: "${questionText}".`);
         }
         if (correctAnswers.length > 1) {
            throw new Error(`Savolda faqat bitta to'g'ri javob bo'lishi kerak: "${questionText}".`);
         }

         return {
            question_text: questionText,
            options
         };
      });

   return questions;
}

//
export function prepareMathView(string) {
   if (string) {
      return string
         .replace(/\$\$(.*?)\$\$/gs, (match) => {
            // Matematik formulani o'z holida saqlash
            return match;
         })
         .replace(/\\item\s*/g, '') // \item belgilarini olib tashlash
         .replace(/\\\\/g, ''); // \\ belgilarini olib tashlash
   }
   return '';
}
