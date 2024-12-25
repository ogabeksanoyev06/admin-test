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

export const directions = [
   {
      id: '1',
      dirid: '60510100',
      name: 'Biologiya',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '2',
      dirid: '60710200',
      name: 'Biotexnologiya',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '3',
      dirid: '60810200',
      name: 'Agrokimyo va tuproqshunoslik',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '4',
      dirid: '60810300',
      name: 'Tuproq bonitirovkasi va yer degredatsiyasi',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '5',
      dirid: '60810400',
      name: 'Agronomiya',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '6',
      dirid: '60810600',
      name: 'Qishloq xoʻjaligi ekinlari seleksiyasi va urugʻchiligi',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '7',
      dirid: '60810800',
      name: 'Zooinjeneriya',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '8',
      dirid: '60810900',
      name: 'Ipakchilik va tutchilik',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '9',
      dirid: '60811000',
      name: 'Meva-sabzavotchilik va uzumchilik',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '10',
      dirid: '60811100',
      name: 'Dorivor oʻsimliklarni yetishtirish va qayta ishlash texnologiyasi',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '11',
      dirid: '60820100',
      name: 'Oʻrmonchilik va aholi yashash joylarini koʻkalamzorlashtirish',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '12',
      dirid: '60830100',
      name: 'Suv bioresurslari va akvakultura',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '13',
      dirid: '60840100',
      name: 'Veterinariya meditsinasi',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '14',
      dirid: '60840200',
      name: 'Veterinariya farmatsevtikasi',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '15',
      dirid: '60840300',
      name: 'Veterinariya sanitariya ekspertizasi',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '16',
      dirid: '60910100',
      name: 'Stomatologiya',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '17',
      dirid: '60910200',
      name: 'Davolash ishi',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '18',
      dirid: '60910300',
      name: 'Pediatriya ishi',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '19',
      dirid: '60910600',
      name: 'Oliy hamshiralik ishi',
      subject: 'Biologiya (3,1)  Kimyo(2,1)'
   },
   {
      id: '1',
      dirid: '60110200',
      name: 'Maktabgacha taʼlim',
      subject: 'Biologiya (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '2',
      dirid: '60110300',
      name: 'Maxsus pedagogika: logopediya',
      subject: 'Biologiya (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '3',
      dirid: '60110300',
      name: 'Maxsus pedagogika: olegofrenopedagogika',
      subject: 'Biologiya (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '4',
      dirid: '60110300',
      name: 'Maxsus pedagogika: surdopedagogika',
      subject: 'Biologiya (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '5',
      dirid: '60110300',
      name: 'Maxsus pedagogika: tiflopedagogika',
      subject: 'Biologiya (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '6',
      dirid: '60310300',
      name: 'Psixologiya',
      subject: 'Biologiya (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '7',
      dirid: '60920100',
      name: 'Ijtimoiy ish',
      subject: 'Biologiya (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '2',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: arab tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '3',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: dariy tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '4',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: fors tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '5',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: hind tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '6',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: indonez tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '7',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: ispan tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '8',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: italyan tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '9',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: koreys tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '10',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: malay tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '11',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: mumtoz sharq tillari: fors tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '12',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: turk tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '13',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: urdu tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '14',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: uygʻur tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '15',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: xitoy tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '16',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: yapon tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '17',
      dirid: '60230200',
      name: 'Tarjima nazariyasi va amaliyoti: arab tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '18',
      dirid: '60230200',
      name: 'Tarjima nazariyasi va amaliyoti: italyan tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '19',
      dirid: '60230200',
      name: 'Tarjima nazariyasi va amaliyoti: koreys tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '20',
      dirid: '60230200',
      name: 'Tarjima nazariyasi va amaliyoti: turk tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '21',
      dirid: '60230200',
      name: 'Tarjima nazariyasi va amaliyoti: xitoy tili',
      subject: 'Chet tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '1',
      dirid: '61040100',
      name: 'Havodagi harakatni boshqarish',
      subject: 'Fizika (3,1) Chet tili(2,1)'
   },
   {
      id: '2',
      dirid: '61040300',
      name: 'Havo kemalarining parvoz ekspluatatsiyasi',
      subject: 'Fizika (3,1) Chet tili(2,1)'
   },
   {
      id: '1',
      dirid: '60111300',
      name: 'Texnologik taʼlim',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '2',
      dirid: '60530500',
      name: 'Fizika',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '3',
      dirid: '60530600',
      name: 'Mexanika va matematik modellashtirish',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '4',
      dirid: '60530700',
      name: 'Astronomiya',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '5',
      dirid: '60710500',
      name: 'Elektr muhandisligi',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '6',
      dirid: '60710700',
      name: 'Elektronika va asbobsozlik',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '7',
      dirid: '60710800',
      name: 'Metrologiya va standartlashtirish',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '8',
      dirid: '60710900',
      name: 'Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '9',
      dirid: '60711000',
      name: 'Mexatronika va robototexnika',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '10',
      dirid: '60711100',
      name: 'Biotibbiyot muhandisligi',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '11',
      dirid: '60711500',
      name: 'Aviatsiya muhandisligi',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '12',
      dirid: '60711700',
      name: 'Aerokosmik texnologiyalar',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '13',
      dirid: '60720800',
      name: 'Konchilik ishi',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '14',
      dirid: '60720900',
      name: 'Foydali qazilma konlari geologiyasi, qidiruv va razvedkasi',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '15',
      dirid: '60721000',
      name: 'Gidrogeologiya va muhandislik geologiyasi',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '16',
      dirid: '60721100',
      name: 'Neft va gaz ishi',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '17',
      dirid: '60721200',
      name: 'Konchilik elektr mexanikasi',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   {
      id: '18',
      dirid: '60811400',
      name: 'Meliorativ gidrogeologiya',
      subject: 'Fizika (3,1) Matematika (2,1)'
   },
   // {
   //    id: '1',
   //    dirid: '60110900',
   //    name: 'Xorijiy til va adabiyoti: fransuz tili',
   //    subject: 'Fransuz tili (3,1) Ona tili va adabiyoti (2,1)'
   // },
   // {
   //    id: '2',
   //    dirid: '60230100',
   //    name: 'Filologiya va tillarni oʻqitish: fransuz tili',
   //    subject: 'Fransuz tili (3,1) Ona tili va adabiyoti (2,1)'
   // },
   // {
   //    id: '3',
   //    dirid: '60230200',
   //    name: 'Tarjima nazariyasi va amaliyoti: fransuz tili',
   //    subject: 'Fransuz tili (3,1) Ona tili va adabiyoti (2,1)'
   // },
   {
      id: '1',
      dirid: '60530200',
      name: 'Geografiya',
      subject: 'Geografiya (3,1) Matematika (2,1)'
   },
   {
      id: '1',
      dirid: '60420100',
      name: 'Yurisprudensiya',
      subject: 'Huquqshunoslik (3,1) Chet tili (2,1)\n'
   },
   // {
   //    id: '1',
   //    dirid: '60110900',
   //    name: 'Xorijiy til va adabiyoti: ingliz tili',
   //    subject: 'Ingliz tili (3,1) Ona tili va adabiyoti (2,1)'
   // },
   // {
   //    id: '2',
   //    dirid: '60230100',
   //    name: 'Filologiya va tillarni oʻqitish: ingliz tili',
   //    subject: 'Ingliz tili (3,1) Ona tili va adabiyoti (2,1)'
   // },
   // {
   //    id: '3',
   //    dirid: '60230200',
   //    name: 'Tarjima nazariyasi va amaliyoti: ingliz tili',
   //    subject: 'Ingliz tili (3,1) Ona tili va adabiyoti (2,1)'
   // },
   {
      id: '1',
      dirid: '60320100',
      name: 'Jurnalistika',
      subject: 'Kasbiy (ijodiy) imtihon (3,1) Chet tili(2,1)\n'
   },
   {
      id: '2',
      dirid: '60320200',
      name: 'Axborot xizmati va jamoatchilik bilan aloqalar',
      subject: 'Kasbiy (ijodiy) imtihon (3,1) Chet tili(2,1)\n'
   },
   // {
   //    id: '1',
   //    dirid: '60110300',
   //    name: 'Maxsus pedagogika: surdotarjimonlik faoliyati',
   //    subject: 'Kasbiy (ijodiy) imtihon (3,1) Ona tili va adabiyoti (2,1)'
   // },
   {
      id: '1',
      dirid: '60520200',
      name: 'Ekologiya va atrof-muhit muhofazasi',
      subject: 'Kimyo (3,1) Biologiya(2,1)'
   },
   {
      id: '2',
      dirid: '60711800',
      name: 'Atrof-muhit muhandisligi',
      subject: 'Kimyo (3,1) Biologiya(2,1)'
   },
   {
      id: '3',
      dirid: '60720100',
      name: 'Oziq-ovqat texnologiyasi',
      subject: 'Kimyo (3,1) Biologiya(2,1)'
   },
   {
      id: '4',
      dirid: '60720200',
      name: 'Parfyumeriya-kosmetika mahsulotlari texnologiyasi',
      subject: 'Kimyo (3,1) Biologiya(2,1)'
   },
   {
      id: '5',
      dirid: '60810500',
      name: 'Oʻsimliklar himoyasi va karantini',
      subject: 'Kimyo (3,1) Biologiya(2,1)'
   },
   {
      id: '6',
      dirid: '60810700',
      name: 'Qishloq xoʻjalik mahsulotlarini saqlash va qayta ishlash texnologiyasi',
      subject: 'Kimyo (3,1) Biologiya(2,1)'
   },
   {
      id: '7',
      dirid: '60910400',
      name: 'Tibbiy profilaktika ishi',
      subject: 'Kimyo (3,1) Biologiya(2,1)'
   },
   {
      id: '8',
      dirid: '60910700',
      name: 'Fundamental tibbiyot',
      subject: 'Kimyo (3,1) Biologiya(2,1)'
   },
   {
      id: '9',
      dirid: '60910800',
      name: 'Farmatsiya',
      subject: 'Kimyo (3,1) Biologiya(2,1)'
   },
   {
      id: '10',
      dirid: '60910900',
      name: 'Sanoat farmatsiyasi',
      subject: 'Kimyo (3,1) Biologiya(2,1)'
   },
   {
      id: '1',
      dirid: '60530100',
      name: 'Kimyo',
      subject: 'Kimyo (3,1) Matematika (2,1)\n'
   },
   {
      id: '2',
      dirid: '60710100',
      name: 'Kimyo muhandisligi',
      subject: 'Kimyo (3,1) Matematika (2,1)\n'
   },
   {
      id: '3',
      dirid: '60710300',
      name: 'Matbaa va qadoqlash muhandisligi',
      subject: 'Kimyo (3,1) Matematika (2,1)\n'
   },
   {
      id: '4',
      dirid: '60711200',
      name: 'Metallurgiya muhandisligi',
      subject: 'Kimyo (3,1) Matematika (2,1)\n'
   },
   {
      id: '5',
      dirid: '60720300',
      name: 'Materialshunoslik',
      subject: 'Kimyo (3,1) Matematika (2,1)\n'
   },
   {
      id: '6',
      dirid: '60720500',
      name: 'Gazni chuqur qayta ishlash texnologiyasi',
      subject: 'Kimyo (3,1) Matematika (2,1)\n'
   },
   {
      id: '7',
      dirid: '60720600',
      name: 'Neftʼ va neft-gazni qayta ishlash texnologiyasi',
      subject: 'Kimyo (3,1) Matematika (2,1)\n'
   },
   {
      id: '8',
      dirid: '60721400',
      name: 'Noyob va radioaktiv metallar rudalarini qazib olish, qayta ishlash texnikasi va texnologiyasi',
      subject: 'Kimyo (3,1) Matematika (2,1)\n'
   },
   {
      id: '1',
      dirid: '60410100',
      name: 'Iqtisodiyot',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '2',
      dirid: '60410200',
      name: 'Buxgalteriya hisobi',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '3',
      dirid: '60410300',
      name: 'Soliqlar va soliqqa tortish',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '4',
      dirid: '60410400',
      name: 'Bojxona ishi',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '5',
      dirid: '60410500',
      name: 'Moliya va moliyaviy texnologiyalar',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '6',
      dirid: '60410600',
      name: 'Bank ishi',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '7',
      dirid: '60410700',
      name: 'Statistika',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '8',
      dirid: '60410800',
      name: 'Menejment',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '9',
      dirid: '60410900',
      name: 'Biznesni boshqarish',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '10',
      dirid: '60411000',
      name: 'Inson resurslarini boshqarish',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '11',
      dirid: '60411100',
      name: 'Jahon iqtisodiyoti va xalqaro iqtisodiy munosabatlar',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '12',
      dirid: '60411200',
      name: 'Marketing',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '13',
      dirid: '60411300',
      name: 'Savdo ishi',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '14',
      dirid: '60411400',
      name: 'Mamlakatshunoslik',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '15',
      dirid: '61010400',
      name: 'Logistika',
      subject: 'Matematika (3,1) Chet tili (2,1)\n'
   },
   {
      id: '1',
      dirid: '60530300',
      name: 'Geologiya',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '2',
      dirid: '60540100',
      name: 'Matematika',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '3',
      dirid: '60540200',
      name: 'Amaliy matematika',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '4',
      dirid: '60610100',
      name: 'Axborot tizimlari va texnologiyalari',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '5',
      dirid: '60610200',
      name: 'Axborot xavfsizligi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '6',
      dirid: '60610300',
      name: 'Kompyuter injiniringi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '7',
      dirid: '60610400',
      name: 'Dasturiy injiniring',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '8',
      dirid: '60610500',
      name: 'Sunʼiy intellekt',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '9',
      dirid: '60610600',
      name: 'Telekommunikatsiya texnologiyalari',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '10',
      dirid: '60610700',
      name: 'Televizion texnologiyalar',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '11',
      dirid: '60610800',
      name: 'Pochta aloqasi texnologiyasi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '12',
      dirid: '60610900',
      name: 'Radioelektron qurilmalar va tizimlar',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '13',
      dirid: '60611000',
      name: 'Simsiz aloqa va teleradioeshittirish injiniringi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '14',
      dirid: '60611100',
      name: 'Infokommunikatsiya injiniringi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '15',
      dirid: '60611200',
      name: 'Kiberxavfsizlik injiniringi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '16',
      dirid: '60710400',
      name: 'Energetika muhandisligi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '17',
      dirid: '60710600',
      name: 'Gidroenergetika',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '18',
      dirid: '60711300',
      name: 'Metallar texnologiyalari',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '19',
      dirid: '60711400',
      name: 'Transport vositalari muhandisligi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '20',
      dirid: '60711600',
      name: 'Kosmik texnologiyalar',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '21',
      dirid: '60712300',
      name: 'Mexanika muhandisligi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '22',
      dirid: '60720400',
      name: 'Texnologik mashinalar va jihozlar',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '23',
      dirid: '60720400',
      name: 'Texnologik mashinalar va jihozlar: yogʻochga ishlov berish texnologiyasi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '24',
      dirid: '60720700',
      name: 'Yengil sanoat muhandisligi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '25',
      dirid: '60721300',
      name: 'Geologiya-qidiruv ishlari texnikasi va texnologiyasi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '26',
      dirid: '60721500',
      name: 'Geodeziya va geoinformatika',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '27',
      dirid: '60721700',
      name: 'Kadastr',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '28',
      dirid: '60730200',
      name: 'Kommunal infratuzilmani tashkil etish va boshqarish',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '29',
      dirid: '60730300',
      name: 'Qurilish muhandisligi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '30',
      dirid: '60730400',
      name: 'Muhandislik kommunikatsiyalari qurilish va ekspluatatsiyasi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '31',
      dirid: '60730500',
      name: 'Yoʻl muhandisligi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '32',
      dirid: '60730600',
      name: 'Gidrotexnika va geotexnika muhandisligi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '33',
      dirid: '60730700',
      name: 'Qiymat injiniringi va koʻchmas mulkni boshqarish',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '34',
      dirid: '60730900',
      name: 'Shahar qurilishi va loyihalash',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '35',
      dirid: '60810100',
      name: 'Qishloq xoʻjaligini mexanizatsiyalashtirish',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '36',
      dirid: '60811200',
      name: 'Suv xoʻjaligi va melioratsiya',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '37',
      dirid: '60811300',
      name: 'Gidrotexnika inshootlari va nasos stansiyalaridan foydalanish',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '38',
      dirid: '60811500',
      name: 'Suv taʼminoti muhandislik tizimlari',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '39',
      dirid: '60811600',
      name: 'Yer kadastri va yer tuzish',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '40',
      dirid: '61020100',
      name: 'Hayot faoliyati xavfsizligi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '41',
      dirid: '61020200',
      name: 'Mehnat muhofazasi va texnika xavfsizligi',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '42',
      dirid: '61040200',
      name: 'Yoʻl harakatini tashkil etish',
      subject: 'Matematika (3,1) Fizika (2,1)\n'
   },
   {
      id: '1',
      dirid: '60520100',
      name: 'Meteorologiya va iqlimshunoslik',
      subject: 'Matematika (3,1) Geografiya (2,1)\n'
   },
   {
      id: '2',
      dirid: '60530400',
      name: 'Gidrologiya',
      subject: 'Matematika (3,1) Geografiya (2,1)\n'
   },
   {
      id: '3',
      dirid: '60530800',
      name: 'Seysmologiya va seysmometriya',
      subject: 'Matematika (3,1) Geografiya (2,1)\n'
   },
   {
      id: '4',
      dirid: '60721600',
      name: 'Kartografiya va masofadan zondlash',
      subject: 'Matematika (3,1) Geografiya (2,1)\n'
   },
   {
      id: '1',
      dirid: '60111000',
      name: 'Chaqiriqqacha harbiy taʼlim',
      subject: 'Matematika (3,1) Kasbiy (ijodiy) imtihon (2,1)'
   },
   {
      id: '1',
      dirid: '60310400',
      name: 'Sotsiologiya',
      subject: 'Matematika (3,1) Ona tili va adabiyoti (2,1)'
   },
   {
      id: '2',
      dirid: '60320400',
      name: 'Kutubxona-axborot faoliyati',
      subject: 'Matematika (3,1) Ona tili va adabiyoti (2,1)'
   },
   {
      id: '3',
      dirid: '60730100',
      name: 'Arxitektura',
      subject: 'Matematika (3,1) Ona tili va adabiyoti (2,1)'
   },
   {
      id: '4',
      dirid: '60730800',
      name: 'Arxitektura yodgorliklari rekonstruksiyasi va restavratsiyasi',
      subject: 'Matematika (3,1) Ona tili va adabiyoti (2,1)'
   },
   {
      id: '1',
      dirid: '60110900',
      name: 'Xorijiy til va adabiyoti: nemis tili',
      subject: 'Nemis tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '2',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: nemis tili',
      subject: 'Nemis tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '3',
      dirid: '60230200',
      name: 'Tarjima nazariyasi va amaliyoti: nemis tili',
      subject: 'Nemis tili (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '1',
      dirid: '60230300',
      name: 'Noshirlik ishi',
      subject: 'Ona tili va adabiyoti (3,1) Chet tili (2,1)\n'
   },
   {
      id: '1',
      dirid: '60110400',
      name: 'Boshlangʻich taʼlim',
      subject: 'Ona tili va adabiyoti (3,1) Matematika (2,1)'
   },
   {
      id: '2',
      dirid: '60230400',
      name: 'Kompyuter lingvistikasi',
      subject: 'Ona tili va adabiyoti (3,1) Matematika (2,1)'
   },
   {
      id: '1',
      dirid: '60110700',
      name: 'Oʻzbek tili va adabiyoti',
      subject: 'Oʻzbek tili va adabiyoti (3,1) Chet tili (2,1)'
   },
   {
      id: '2',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: oʻzbek tili',
      subject: 'Oʻzbek tili va adabiyoti (3,1) Chet tili (2,1)'
   },
   {
      id: '1',
      dirid: '60110800',
      name: 'Ona tili va adabiyoti: qirgʻiz tili',
      subject: 'Qirgʻiz tili va adabiyoti (3,1) Tarix (2,1)'
   },
   {
      id: '1',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: qoraqalpoq tili',
      subject: 'Qoraqalpoq tili va adabiyoti (3,1) Chet tili (2,1)'
   },
   {
      id: '1',
      dirid: '60110800',
      name: 'Ona tili va adabiyoti: qoraqalpoq tili',
      subject: 'Qoraqalpoq tili va adabiyoti (3,1) Tarix (2,1)'
   },
   {
      id: '1',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: qozoq tili',
      subject: 'Qozoq tili va adabiyoti (3,1) Chet tili (2,1)'
   },
   {
      id: '1',
      dirid: '60110800',
      name: 'Ona tili va adabiyoti: qozoq tili',
      subject: 'Qozoq tili va adabiyoti (3,1) Tarix (2,1)\n'
   },
   {
      id: '1',
      dirid: '60230200',
      name: 'Tarjima nazariyasi va amaliyoti: rus tili',
      subject: 'Rus tili (3,1) Oʻzbek tili va adabiyoti (2,1)'
   },
   {
      id: '1',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: rus tili',
      subject: 'Rus tili va adabiyoti (3,1) Chet tili (2,1)'
   },
   {
      id: '1',
      dirid: '60110800',
      name: 'Ona tili va adabiyoti: rus tili',
      subject: 'Rus tili va adabiyoti (3,1) Tarix (2,1)'
   },
   {
      id: '1',
      dirid: '60310100',
      name: 'Siyosatshunoslik',
      subject: 'Tarix (3,1) Chet tili (2,1)'
   },
   {
      id: '2',
      dirid: '60310200',
      name: 'Xalqaro munosabatlar',
      subject: 'Tarix (3,1) Chet tili (2,1)'
   },
   {
      id: '3',
      dirid: '60420200',
      name: 'Davlat va jamiyat boshqaruvi',
      subject: 'Tarix (3,1) Chet tili (2,1)'
   },
   {
      id: '4',
      dirid: '61010100',
      name: 'Turizm va mehmondoʻstlik',
      subject: 'Tarix (3,1) Chet tili (2,1)'
   },
   {
      id: '1',
      dirid: '60220300',
      name: 'Tarix',
      subject: 'Tarix (3,1) Geografiya (2,1)\n'
   },
   {
      id: '2',
      dirid: '60220400',
      name: 'Arxeologiya',
      subject: 'Tarix (3,1) Geografiya (2,1)\n'
   },
   {
      id: '3',
      dirid: '60220600',
      name: 'Antropologiya va etnologiya',
      subject: 'Tarix (3,1) Geografiya (2,1)\n'
   },
   {
      id: '1',
      dirid: '60220100',
      name: 'Dinshunoslik',
      subject: 'Tarix (3,1) Kasbiy (ijodiy) imtihon (2,1)\n'
   },
   {
      id: '2',
      dirid: '60220200',
      name: 'Islomshunoslik',
      subject: 'Tarix (3,1) Kasbiy (ijodiy) imtihon (2,1)\n'
   },
   {
      id: '1',
      dirid: '60320300',
      name: 'Arxivshunoslik',
      subject: 'Tarix (3,1) Matematika (2,1)\n'
   },
   {
      id: '1',
      dirid: '60110100',
      name: 'Pedagogika',
      subject: 'Tarix (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '2',
      dirid: '60111100',
      name: 'Milliy gʻoya, maʼnaviyat asoslari va huquq taʼlimi',
      subject: 'Tarix (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '3',
      dirid: '60210300',
      name: 'Muzeyshunoslik: muzey menejmenti va madaniy turizm',
      subject: 'Tarix (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '4',
      dirid: '60210300',
      name: 'Muzeyshunoslik: muzey predmetlari ekspertizasi, konservatsiyalash va taʼmirlash',
      subject: 'Tarix (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '5',
      dirid: '60211800',
      name: 'Madaniyatshunoslik',
      subject: 'Tarix (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '6',
      dirid: '60220500',
      name: 'Falsafa',
      subject: 'Tarix (3,1) Ona tili va adabiyoti (2,1)\n'
   },
   {
      id: '1',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: tojik tili',
      subject: 'Tojik tili va adabiyoti (3,1) Chet tili (2,1)\n'
   },
   {
      id: '1',
      dirid: '60110800',
      name: 'Ona tili va adabiyoti: tojik tili',
      subject: 'Tojik tili va adabiyoti (3,1) Tarix (2,1)'
   },
   {
      id: '1',
      dirid: '60230100',
      name: 'Filologiya va tillarni oʻqitish: turkman tili',
      subject: 'Turkman tili va adabiyoti (3,1) Chet tili (2,1)'
   },
   {
      id: '1',
      dirid: '60110800',
      name: 'Ona tili va adabiyoti: turkman tili',
      subject: 'Turkman tili va adabiyoti (3,1) Tarix (2,1)'
   }
];

export const classesData = [
   { id: 1, number: 1 },
   { id: 2, number: 2 },
   { id: 3, number: 3 },
   { id: 4, number: 4 },
   { id: 5, number: 5 },
   { id: 6, number: 6 },
   { id: 7, number: 7 },
   { id: 8, number: 8 },
   { id: 9, number: 9 },
   { id: 10, number: 10 },
   { id: 11, number: 11 }
];
