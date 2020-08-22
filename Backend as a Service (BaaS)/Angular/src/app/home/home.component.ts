import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { baseURL } from '../shared/baseurl';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { //ensure that this animation happends when route changes occur
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
      flyInOut(), expand()
  ]
})
export class HomeComponent implements OnInit {
  
  dish: Dish;
  promotion: Promotion; 
  leader: Leader; 
  baseURL: String;

  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
  ) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish()
    .subscribe(dish => this.dish = dish,
    errmess => this.dishErrMess = <any>errmess);

    this.promotionService.getFeaturedPromotion()
    .subscribe(promotion => this.promotion = promotion,
    errmess => this.promoErrMess = <any>errmess);

    this.leaderService.getFeaturedLeader()
    .subscribe((leader) => this.leader = leader,
    errmess => this.leaderErrMess = <any>errmess);

    this.baseURL = baseURL;
  }

}
