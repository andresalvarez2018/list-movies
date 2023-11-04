import { Component, OnInit } from '@angular/core';
import { MoviesServices } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies!: any[];
  listYears!: any[];
  selectTitle: any;

  searchForm = new FormGroup({
    movieTitle: new FormControl(''),
  });

  constructor(
    private moviesServicesService: MoviesServices,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.selectTitle = this.dataService.getMovieTitle();
  }

  ngOnInit(): void {
    this.moviesServicesService.buscarPeliculas().subscribe((response) => {
      this.movies = response;
      console.log(response);
    });

    this.moviesServicesService.listYear().subscribe((response) => {
      this.listYears = response;
      console.log(response);

    });
  }

  buscarPeliculas(event: any) {
    event.preventDefault();
    const title = this.searchForm.value.movieTitle;
    this.moviesServicesService
      .buscarPeliculasTitle(title)
      .subscribe((response) => {
        this.movies = response;
      });
  }
}
