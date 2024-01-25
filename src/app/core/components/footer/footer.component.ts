import { Component, OnInit } from '@angular/core';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  text:any;

  constructor(private searchBarService: SearchBarService){}

  ngOnInit(): void {
    this.searchBarService.searchTerm.subscribe(d => this.text = d)
  }


}
