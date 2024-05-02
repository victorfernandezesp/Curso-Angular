/*
    ===== Código de TypeScript =====
*/

interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Samsung Galaxy S10",
  price: 699,
};

const tablet: Product = {
  description: "iPad Air",
  price: 499,
};
interface TaxCalculatorOptions {
  tax: number;
  products: Product[];
}

function taxCalculator(options: TaxCalculatorOptions): number[] {
  let total = 0;
  options.products.forEach((product) => {
    total += product.price;
  });
  return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculator(
  {
    products: shoppingCart,
    tax: tax,
  }
);

const [total, taxAmount] = result;

console.log("Total: ", total);
console.log("Tax: ", taxAmount);
export {};
