// utils.js
export function prepareQuestionsKatex(text) {
   // $ va \ belgilarini olib tashlash
   let cleanedText = text.replace(/[$\\]+/g, '');



   // Agar ifoda bo'sh bo'lsa, uni qaytaring
   return cleanedText || '';
}
