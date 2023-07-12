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
        'Bearer BQBbOIdjAux3L2PHAR7WowlirSWsD-GwpkMVbcl30OT2FcdMAGcWXmhXHZ2Ofnm0MGtmyLnti44FV4GntUmSjmSMldC6BGi0XKewmahl5uOa_qwkQMk',
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
