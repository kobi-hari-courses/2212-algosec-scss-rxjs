import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  keyword$: Observable<string> = of('moshe');
  results$: Observable<string[]> = of(['moshe', 'moshesh']);
  

  constructor(
    private route: ActivatedRoute, 
    private searchService: SearchService) { }

  ngOnInit(): void {
    this.keyword$ = this.route.params.pipe(
      map(prms => prms['keyword'] as string)
    );

    this.results$ = this.keyword$.pipe(
      switchMap(kw => this.searchService.search(kw))
    )
  }

}
