import { Component, inject } from '@angular/core';
import { GetListGiftsBusiness } from './services/get-list-gifts.business';
import { GetListGiftsInfra } from './services/get-list-gifts.infra';
import { fakeGetListGiftsInfra } from './services/__mocks__/fake-get-list-gifts.infra';

@Component({
  selector: 'lib-santa-gifts',
  imports: [],
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
              <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-red-200 overflow-hidden group">
                <!-- Card Header -->
                <div class="bg-gradient-to-r from-red-600 to-green-600 p-4 text-center">
                  <span class="text-4xl group-hover:scale-125 transition-transform duration-300 inline-block">🎁</span>
                </div>

                <!-- Card Content -->
                <div class="p-5">
                  <h3 class="text-xl font-bold text-red-700 mb-3 text-center group-hover:text-green-700 transition-colors">
                    {{ gift.name }}
                  </h3>
                  <p class="text-gray-600 text-center leading-relaxed">
                    {{ gift.description }}
                  </p>
                </div>

                <!-- Card Footer -->
                <div class="bg-gradient-to-r from-green-50 to-red-50 px-5 py-3 text-center">
                  <span class="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <span>✨</span>
                    <span>Cadeau magique</span>
                    <span>✨</span>
                  </span>
                </div>
              </div>
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
  private readonly getListGiftsBusiness = inject(GetListGiftsBusiness);
  protected readonly value = this.getListGiftsBusiness.value;
  protected readonly isLoading = this.getListGiftsBusiness.isLoading;
  protected readonly error = this.getListGiftsBusiness.error;
}
