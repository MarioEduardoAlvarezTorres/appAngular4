import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [],
})
export class SearchComponent {
  searchs: any[] = [];

  constructor(private spotifyService: SpotifyService) {}
  search(termino: string) {
    this.spotifyService.getSearch(termino).subscribe((data: any) => {
      this.searchs = data;
    });
  }
}
