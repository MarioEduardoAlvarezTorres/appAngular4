import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBr96h4_re2uTubhMBRa5uzGNmfqHeAYgQvWHc5tI2xPE17d2EjomZMenqso67YOVGZRLsRsSG99-3uBlE1WWw6jt4O0AkDIfs49ipCJka_gKqDeFg',
    });
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', {
        headers,
      })
      .pipe(map((data: any) => data['albums'].items));
  }

  getSearch(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBr96h4_re2uTubhMBRa5uzGNmfqHeAYgQvWHc5tI2xPE17d2EjomZMenqso67YOVGZRLsRsSG99-3uBlE1WWw6jt4O0AkDIfs49ipCJka_gKqDeFg',
    });
    return this.http
      .get(
        `https://api.spotify.com/v1/search?q=${termino}&type=artist%2Calbum%2Ctrack`,
        {
          headers,
        }
      )
      .pipe(map((data: any) => data['artists'].items));
  }
}
