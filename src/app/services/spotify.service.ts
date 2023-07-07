import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBr96h4_re2uTubhMBRa5uzGNmfqHeAYgQvWHc5tI2xPE17d2EjomZMenqso67YOVGZRLsRsSG99-3uBlE1WWw6jt4O0AkDIfs49ipCJka_gKqDeFg',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  getSearch(termino: string) {
    return this.getQuery(
      `search?q=${termino}&type=artist%2Calbum%2Ctrack`
    ).pipe(map((data: any) => data['albums'].items));
  }
}
