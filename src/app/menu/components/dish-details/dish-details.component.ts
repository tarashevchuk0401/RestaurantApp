import {Component, Inject, InjectionToken, OnDestroy, OnInit} from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';
import {ActivatedRoute} from '@angular/router';
import {Dish} from 'src/app/shared/types/dish.interface';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss'],
})
export class DishDetailsComponent implements OnInit, OnDestroy {
  dishId: string = this.activatedRoute.snapshot.params['id'];
  dish: Dish | null = null;

  subject$: Subject<void> = new Subject();

  constructor(private dataBaseService: DataBaseService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataBaseService
      .getDishById(this.dishId)
      .pipe(takeUntil(this.subject$))
      .subscribe((data: Dish) => (this.dish = data));
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }
}
