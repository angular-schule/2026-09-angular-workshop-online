import { Component } from '@angular/core';

import { ExerciseEntry, exercisesList } from '../exercises';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: './overview-page.html',
  imports: [RouterLink, DatePipe]
})
export class OverviewPage {
  readonly exercises: ExerciseEntry[] = exercisesList;
  readonly generationDate = 1789303814385;
}
