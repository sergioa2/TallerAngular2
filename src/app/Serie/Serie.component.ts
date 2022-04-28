import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';


@Component({
  selector: 'app-Serie',
  templateUrl: './Serie.component.html',
  styleUrls: ['./Serie.component.css']
})
export class SerieComponent implements OnInit {

//  public n: number = 76;
  private seriesC: Array<Serie>=[];

  public getSeries():Array<Serie>{
    return this.seriesC;
  }

  constructor(private serieService: SerieService) {
  }

  ngOnInit() {
    //this.seriesC=this.getSeriesData();
    //console.log('init');
    this.getSeriesServicio();
  }

  getSeriesData(): Array<Serie> {
    return dataSeries;
  }

  getSeriesServicio()
  {
    this.serieService.getSeries().subscribe(
      series => {this.seriesC = series;}
      );
  }

  calcularPromedioSeasons():number{
    let totalSeasons:number = 0;
    for(let serie of this.seriesC)
    {
        totalSeasons+=serie.seasons
    }
    return totalSeasons/this.seriesC.length;
}

}
