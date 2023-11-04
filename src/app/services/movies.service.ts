import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesServices {
  private urlBase = 'https://moviesdatabase.p.rapidapi.com/api';
  private headers = {
    'X-RapidAPI-Key': '7f83f0201fmsh7ee961522e2f506p134133jsn51f0887c813b',
    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
  };

  constructor(private http: HttpClient) {}

  buscarPeliculas(): Observable<any> {
    return this.http
      .get(this.urlBase + '/movies', { headers: this.headers })
      .pipe(map((resp: any) => resp.results));
  }

  buscarPeliculasTitle(string: any): Observable<any> {
    return this.http
      .get(this.urlBase + '/movies', {
        headers: this.headers,
        params: { query: string },
      })
      .pipe(map((resp: any) => resp.results));
  }

  listYear(): Observable<any> {
    return this.http
      .get(this.urlBase + '/years', { headers: this.headers })
      .pipe(map((resp: any) => resp.results));
  }
}
