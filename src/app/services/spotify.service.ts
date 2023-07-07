import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA8M1WQ5takJ8A0EkVC8VjhBxjmmGxRXqV6JsA31_XGGqCF67Nw_KLTquyYuJjdtGmXIkeZGJp9TZL3-E0EyB63cN247SPbBfIpR8rtNTWVB68Wplg',
    });
    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
