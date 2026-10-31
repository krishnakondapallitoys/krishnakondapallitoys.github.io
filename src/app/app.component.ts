import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Toy {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
}

// WhatsApp number in international format, digits only (country code + number, no '+' or spaces)
const WHATSAPP_NUMBER = '919999999999';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Krishna Toys';

  toys: Toy[] = [
    { id: 1, name: 'Dancing Doll', image: 'img/dancin-doll.jpeg', price: '₹450', category: 'Dolls' },
    { id: 2, name: 'Lord Krishna', image: 'img/krishna.jpeg', price: '₹800', category: 'Divine' },
    { id: 3, name: 'Pallaki (Palanquin)', image: 'img/pallakai.jpeg', price: '₹1200', category: 'Traditional' },
    { id: 4, name: 'Lord Venkateswara', image: 'img/lord-venkateswara.jpeg', price: '₹1500', category: 'Divine' },
    { id: 5, name: 'Seetha Rama', image: 'img/seetha-ram.jpeg', price: '₹950', category: 'Divine' },
    { id: 6, name: 'Ambbari Elephant', image: 'img/Ambbari.jpeg', price: '₹1100', category: 'Animals' },
    { id: 7, name: 'Bullock Cart', image: 'img/Bulla-coat.jpeg', price: '₹600', category: 'Village Life' },
    { id: 8, name: 'Village Market', image: 'img/Market.jpeg', price: '₹2200', category: 'Sets' },
    { id: 9, name: 'Dasavataram Set', image: 'img/dasaavartaram.jpeg', price: '₹3500', category: 'Divine Sets' },
    { id: 10, name: 'Traditional Marriage', image: 'img/Marriage.jpeg', price: '₹2800', category: 'Sets' },
    { id: 11, name: 'Rama in Boat', image: 'img/rama-boat.jpeg', price: '₹1300', category: 'Divine' },
    { id: 12, name: 'Lord Hanuman', image: 'img/Anjayana.jpeg', price: '₹750', category: 'Divine' },
    { id: 13, name: 'Village Hut', image: 'img/HUT.jpeg', price: '₹400', category: 'Village Life' },
    { id: 14, name: 'Village House', image: 'img/House.jpeg', price: '₹550', category: 'Village Life' },
    { id: 15, name: 'Temple', image: 'img/temple.jpeg', price: '₹1800', category: 'Architecture' },
    { id: 16, name: 'White Elephant', image: 'img/White-elephant.jpeg', price: '₹900', category: 'Animals' },
    { id: 17, name: 'Lord Balaji', image: 'img/venstwara.jpeg', price: '₹1600', category: 'Divine' },
    { id: 18, name: 'Authentic Set', image: 'img/WhatsApp Image 2026-09-25 at 2.40.22 PM (1).jpeg', price: '₹1250', category: 'Special' },
  ];

  selectedToy: Toy | null = null;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.selectedToy) {
      this.closeModal();
    }
    this.menuOpen = false;
  }

  openModal(toy: Toy) {
    this.selectedToy = toy;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  whatsappLink(toy?: Toy): string {
    const message = toy
      ? `Hello Krishna Toys, I am interested in the "${toy.name}" (${toy.category}). Could you share the price and availability?`
      : 'Hello Krishna Toys, I would like to know more about your Kondapalli toys.';
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  closeModal() {
    this.selectedToy = null;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
}
