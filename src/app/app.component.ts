import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GA_MEASUREMENT_ID, SITE_URL, WHATSAPP_NUMBER } from './site-config';
import { TOYS, Toy } from './toys';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Krishna Toys';

  toys: Toy[] = TOYS;
  categories: string[] = ['All', ...new Set(TOYS.map(toy => toy.category))];
  selectedCategory = 'All';
  searchTerm = '';

  selectedToy: Toy | null = null;
  imageIndex = 0;
  menuOpen = false;

  private touchStartX = 0;

  get filteredToys(): Toy[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.toys.filter(toy =>
      (this.selectedCategory === 'All' || toy.category === this.selectedCategory) &&
      (!term || toy.name.toLowerCase().includes(term) || toy.category.toLowerCase().includes(term))
    );
  }

  ngOnInit() {
    this.loadAnalytics();
  }

  ngAfterViewInit() {
    // Sections render after page load, so jump to a #section in the URL ourselves
    const id = location.hash.slice(1);
    const sharedToy = this.toys.find(toy => id === `toy-${toy.id}`);
    if (sharedToy) {
      setTimeout(() => {
        document.getElementById('collection')?.scrollIntoView();
        this.openModal(sharedToy);
      });
    } else if (id) {
      setTimeout(() => document.getElementById(id)?.scrollIntoView());
    }
  }

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.track('filter_category', { category });
  }

  onSearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  clearFilters(searchInput: HTMLInputElement) {
    searchInput.value = '';
    this.searchTerm = '';
    this.selectedCategory = 'All';
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.selectedToy) {
      this.closeModal();
    }
    this.menuOpen = false;
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft() {
    if (this.selectedToy) {
      this.prevImage();
    }
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight() {
    if (this.selectedToy) {
      this.nextImage();
    }
  }

  private loadAnalytics() {
    if (!GA_MEASUREMENT_ID) {
      return;
    }
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
  }

  track(event: string, params: Record<string, string> = {}) {
    window.gtag?.('event', event, params);
  }

  openModal(toy: Toy) {
    this.selectedToy = toy;
    this.imageIndex = 0;
    this.track('toy_view', { toy_name: toy.name, toy_category: toy.category });
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  closeModal() {
    this.selectedToy = null;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  prevImage() {
    const count = this.selectedToy?.images.length ?? 0;
    if (count > 1) {
      this.imageIndex = (this.imageIndex - 1 + count) % count;
    }
  }

  nextImage() {
    const count = this.selectedToy?.images.length ?? 0;
    if (count > 1) {
      this.imageIndex = (this.imageIndex + 1) % count;
    }
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const distance = event.changedTouches[0].clientX - this.touchStartX;
    if (distance > 50) {
      this.prevImage();
    } else if (distance < -50) {
      this.nextImage();
    }
  }

  whatsappLink(toy?: Toy): string {
    const message = toy
      ? `Hello Krishna Toys, I am interested in the "${toy.name}" (${toy.category}). Could you share the price and availability?`
      : 'Hello Krishna Toys, I would like to know more about your Kondapalli toys.';
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  shareLink(toy: Toy): string {
    const message = `Look at this handmade Kondapalli toy from Krishna Toys: ${toy.name}\n${SITE_URL}#toy-${toy.id}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
}
