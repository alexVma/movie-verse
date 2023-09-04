import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SeriesComponent } from "./components/series/series.component";
import { SerieComponent } from "./components/serie/serie.component";

const routes: Routes = [
   // {
     //   path: '',  children: [
            {
                path: '', component: SeriesComponent
            },
           /* {
                path: '', redirectTo: 'series', pathMatch: 'full'
            },*/
            {
                path: 'serie/:id', component: SerieComponent
            }
    //    ]
   // }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeriesRoutingModule {}

