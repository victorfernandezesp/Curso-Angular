/*
    ===== Código de TypeScript =====
*/

// crear interfaz SuperHero

interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}
interface Address {
  street: string;
  country: string;
  city: string;
}

const superHeroe: SuperHero = {
  name: "Spiderman",
  age: 30,
  address: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },
  showAddress() {
    return this.name + ", " + this.address.city + ", " + this.address.country;
  },
};

// const muestra = superHeroe.showAddress();
// console.log(muestra);

//  destructuración de SuperHero
const { name, age, address } = superHeroe;
const { street, country, city } = address;

console.log(name, age);
console.log(street, country, city);

export {};
