import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   private movieTitle: string = '';

  setMovieTitle(title: string | null | undefined) {
    if (title !== null && title !== undefined) {
      this.movieTitle = title;
    }
  }

  getMovieTitle() {
    return this.movieTitle;
  }
}
