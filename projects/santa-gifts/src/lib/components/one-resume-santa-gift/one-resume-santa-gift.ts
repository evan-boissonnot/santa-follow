import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Gift } from '../../models/gift';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-one-resume-santa-gift',
  imports: [],
  templateUrl: './one-resume-santa-gift.html',
  styleUrl: './one-resume-santa-gift.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneResumeSantaGift {
  private readonly router = inject(Router);
  item = input.required<Gift>();

  /**
   * Navigate to edit one gift
   * @param id Gift id
   */
  goToEditOne(id: number): void {
    this.router.navigate(['/gifts/edit', id]);
  }
}
