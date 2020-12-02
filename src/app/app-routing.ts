import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HeatmapComponent} from '../app/heatmap/heatmap.component';
import { ClipsComponent } from '../app/clips/clips.component'; 
import { SettingsComponent} from '../app/settings/settings.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'heatmap', component: HeatmapComponent },
  { path: 'clips', component: ClipsComponent },
  { path: 'settings', component: SettingsComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }