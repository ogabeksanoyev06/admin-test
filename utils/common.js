export const clearSpaces = (text) => {
   return text.replaceAll(' ', '');
};

// Function to format currency
export const formatCurrency = (amount) => {
   return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

// Function to format phone numbers
export const formatPhone = (phone) => {
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
};
