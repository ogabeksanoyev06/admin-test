import renderMathInElement from 'katex/dist/contrib/auto-render';
import 'katex/dist/katex.min.css';

export function useKatex() {
   const renderMath = (element) => {
      renderMathInElement(element, {
         delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
         ]
      });
   };

   return {
      renderMath
   };
}
