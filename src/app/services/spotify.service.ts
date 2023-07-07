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
        'Bearer BQDZUs5Ctkuq_2BPYOipVECyeEXtz5xcO4_elIlyw0DE2axnqOWM5oD1bGbjZ3XTo-acRcxbUhMVCTe3BRV_5CZg9-LAinCVWBfT6qV7j2EZREPpa-o',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }
}
