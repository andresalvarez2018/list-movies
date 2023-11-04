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
  private  numeroAleatorio: number = 0

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

  PeliculasRecomendations(): Observable<any> {
    this.numeroAleatorio = Math.floor(Math.random() * 50) + 1;
    return this.http
      .get(this.urlBase + '/movies', {
        headers: this.headers,
        params: { page: this.numeroAleatorio },
      })
      .pipe(map((resp: any) => resp.results));
  }
}
