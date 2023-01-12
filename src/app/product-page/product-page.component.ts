import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  id?: string;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id = params['id'])
  }


}
