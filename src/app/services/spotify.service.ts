import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  tokenAlmacenado: any;
  constructor(private http: HttpClient) {
    const data = {
      grant_type: 'client_credentials',
      client_id: 'eb96b2a734db49ff8079d33d34c6a609',
      client_secret: '43962d7058874c01a8c53f346f4bf659',
    };

    this.getToken(data);
    console.log(this.tokenAlmacenado);
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: `Bearer BQD-Te1hM1Q7kU6wNGR4EdQy1lYa8zvrYqRkq7J7ZaDbpZyfezZAz3fna64iAg6yQ91jif0srstFMCjJRe3xp_jtI5GQV9MJXVeEfpVVbNfekaa2tnc`,
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  getSearch(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(
      map((data: any) => data['artists'].items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => data['tracks'])
    );
  }

  async getToken(data: any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    const body = new URLSearchParams();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        body.set(key, data[key]);
      }
    }

    this.http
      .post('https://accounts.spotify.com/api/token', body.toString(), {
        headers,
      })
      .subscribe((data: any) => {
        this.tokenAlmacenado = data.access_token;
      });
  }
}
