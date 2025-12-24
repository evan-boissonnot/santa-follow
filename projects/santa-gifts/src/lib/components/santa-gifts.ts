import { Component, inject } from '@angular/core';
import { GetListGiftsBusiness } from '../services/get-list-gifts.business';
import { GetListGiftsInfra } from '../services/get-list-gifts.infra';
import { fakeGetListGiftsInfra } from '../services/__mocks__/fake-get-list-gifts.infra';
import { Router } from '@angular/router';
import { OneResumeSantaGift } from './one-resume-santa-gift/one-resume-santa-gift';

@Component({
  selector: 'lib-santa-gifts',
  imports: [OneResumeSantaGift],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-red-50 via-green-50 to-white py-8 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-red-700 mb-3 flex items-center justify-center gap-3">
            <span class="text-5xl">🎁</span>
            <span>Les Cadeaux du Père Noël</span>
            <span class="text-5xl">🎅</span>
          </h1>
          <p class="text-gray-600 text-lg mb-6">Découvrez tous les merveilleux cadeaux de cette année</p>

          <!-- Add Gift Button -->
          <button
            class="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 via-red-600 to-green-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 animate-pulse hover:animate-none border-4 border-yellow-300"
            style="background-size: 200% 100%"
            (click)="goNewAddNewOne()"
          >
            <span class="text-3xl group-hover:rotate-12 transition-transform duration-300">🎁</span>
            <span class="relative">
              Ajouter un cadeau magique
              <span class="absolute -top-1 -right-2 flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
            </span>
            <span class="text-3xl group-hover:-rotate-12 transition-transform duration-300">✨</span>
          </button>
        </div>

        @let list = value();

        <!-- Loading State -->
        @if (isLoading()) {
          <div class="text-center py-12">
            <div class="inline-block animate-bounce text-6xl mb-4">🎄</div>
            <p class="text-xl text-red-600 font-medium">Chargement des cadeaux magiques...</p>
          </div>
        }

        <!-- Gifts Grid -->
        @if (list.length > 0) {
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            @for(gift of list; track gift.id) {
              <lib-one-resume-santa-gift [item]="gift" (toDelete)="deleteOne($event)" />
            }
          </div>
        }

        <!-- Empty State -->
        @if (list.length === 0 && !isLoading()) {
          <div class="text-center py-16 bg-white rounded-2xl shadow-xl border-2 border-dashed border-red-300 max-w-2xl mx-auto">
            <div class="text-8xl mb-6 animate-pulse">🎅</div>
            <h2 class="text-2xl font-bold text-red-700 mb-3">Pas de cadeau reçu du père noël</h2>
            <p class="text-gray-600 text-lg mb-6">Le traîneau est peut-être en route... Soyez patient !</p>
            <div class="flex justify-center gap-4 text-4xl">
              <span class="animate-bounce" style="animation-delay: 0s">🎄</span>
              <span class="animate-bounce" style="animation-delay: 0.2s">⭐</span>
              <span class="animate-bounce" style="animation-delay: 0.4s">🔔</span>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
  providers: [
    GetListGiftsBusiness,
    { provide: GetListGiftsInfra, useValue: fakeGetListGiftsInfra }
  ]
})
export class SantaGifts {
  private readonly router = inject(Router);
  private readonly getListGiftsBusiness = inject(GetListGiftsBusiness);
  protected readonly value = this.getListGiftsBusiness.value;
  protected readonly isLoading = this.getListGiftsBusiness.isLoading;
  protected readonly error = this.getListGiftsBusiness.error;

  goNewAddNewOne(): void {
    this.router.navigate(['/gifts/add-new-one']);
  }

  deleteOne(id: number): void {
    this.value.update((currentList) => currentList.filter(gift => gift.id !== id));
    // Ajouter ici la logique pour supprimer le cadeau via un service business
  }
}
