// The toy collection shown on the site.
//
// To add a toy:
//   1. Copy its photo(s) into public/img/ (simple file names, no spaces, e.g. 'ganesha-front.jpeg').
//   2. Add a line below with a new id (the next number), the name, the category and the photo(s).
//      The first photo is shown on the card; all photos are shown in the popup.
//   3. Rebuild and push.
//
// Toys with the same category are grouped under the same filter button.

export interface Toy {
  id: number;
  name: string;
  category: string;
  images: string[];
  price: string;
}

export const TOYS: Toy[] = [
  { id: 1, name: 'Dancing Doll', category: 'Dolls', images: ['img/dancin-doll.jpeg'], price: '₹450' },
  { id: 2, name: 'Lord Krishna', category: 'Divine', images: ['img/krishna.jpeg'], price: '₹800' },
  { id: 3, name: 'Pallaki (Palanquin)', category: 'Traditional', images: ['img/pallakai.jpeg'], price: '₹1200' },
  { id: 4, name: 'Lord Venkateswara', category: 'Divine', images: ['img/lord-venkateswara.jpeg'], price: '₹1500' },
  { id: 5, name: 'Seetha Rama', category: 'Divine', images: ['img/seetha-ram.jpeg'], price: '₹950' },
  { id: 6, name: 'Ambbari Elephant', category: 'Animals', images: ['img/Ambbari.jpeg'], price: '₹1100' },
  { id: 7, name: 'Bullock Cart', category: 'Village Life', images: ['img/Bulla-coat.jpeg'], price: '₹600' },
  { id: 8, name: 'Village Market', category: 'Sets', images: ['img/Market.jpeg'], price: '₹2200' },
  { id: 9, name: 'Dasavataram Set', category: 'Divine Sets', images: ['img/dasaavartaram.jpeg'], price: '₹3500' },
  { id: 10, name: 'Traditional Marriage', category: 'Sets', images: ['img/Marriage.jpeg'], price: '₹2800' },
  { id: 11, name: 'Rama in Boat', category: 'Divine', images: ['img/rama-boat.jpeg'], price: '₹1300' },
  { id: 12, name: 'Lord Hanuman', category: 'Divine', images: ['img/Anjayana.jpeg'], price: '₹750' },
  { id: 13, name: 'Village Hut', category: 'Village Life', images: ['img/HUT.jpeg'], price: '₹400' },
  { id: 14, name: 'Village House', category: 'Village Life', images: ['img/House.jpeg'], price: '₹550' },
  { id: 15, name: 'Temple', category: 'Architecture', images: ['img/temple.jpeg'], price: '₹1800' },
  { id: 16, name: 'White Elephant', category: 'Animals', images: ['img/White-elephant.jpeg'], price: '₹900' },
  { id: 17, name: 'Lord Balaji', category: 'Divine', images: ['img/venstwara.jpeg'], price: '₹1600' },
  { id: 18, name: 'Authentic Set', category: 'Special', images: ['img/WhatsApp Image 2026-09-25 at 2.40.22 PM (1).jpeg'], price: '₹1250' },
];
