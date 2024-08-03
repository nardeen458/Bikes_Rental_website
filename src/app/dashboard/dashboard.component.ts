import { Component, ElementRef,HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(private elementRef: ElementRef) { }

  getDropdownMenuHeight(): number {
    const dropdownMenus = this.elementRef.nativeElement.querySelectorAll('.category-dropdown-menu,.user-dropdown-menu,.bike-dropdown-menu,.rental-dropdown-menu');
    let maxHeight = 0;
    dropdownMenus.forEach((menu: HTMLElement) => {
      maxHeight = Math.max(maxHeight, menu.offsetHeight);
    });
    return Math.min(maxHeight + 5, -10); // add 5px to the maximum height, but cap at 20px
  }

    toggleDropdown(event: Event) {
      const target = event.target as HTMLElement;
      const dropdownMenu = target.nextElementSibling as HTMLElement;
      const allDropdownMenus = document.querySelectorAll('.dropdown-menu');
      allDropdownMenus.forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.classList.remove('show');
        }
      });
      dropdownMenu.classList.toggle('show');
    }

    ngAfterViewInit() {
      const dropdownMenuItems = document.querySelectorAll('.dropdown-menu a.dropdown-item');
      dropdownMenuItems.forEach((item) => {
        item.addEventListener('click', () => {
          const dropdownMenu = item.closest('.dropdown-menu');
          if (dropdownMenu) {
            dropdownMenu.classList.remove('show');
          }
        });
      });
    }

    logout(){
      localStorage.removeItem("userdata");
    }
}

