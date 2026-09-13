import { Routes } from '@angular/router';

import { OverviewPage } from './overview-page/overview-page';
import { ExerciseCreating } from './exercise-creating/exercise-creating';
import { ExerciseFromevent } from './exercise-fromevent/exercise-fromevent';
import { ExerciseMulticast } from './exercise-multicast/exercise-multicast';
import { ExerciseUnsubscribe } from './exercise-unsubscribe/exercise-unsubscribe';
import { ExerciseChat } from './exercise-chat/exercise-chat';
import { ExerciseHigherorder } from './exercise-higherorder/exercise-higherorder';
import { ExerciseDragdrop } from './exercise-dragdrop/exercise-dragdrop';

export const routes: Routes = [
  { path: '', redirectTo: 'exercises', pathMatch: 'full' },
  { path: 'exercises', children: [
    { path: '', component: OverviewPage },
    { path: 'creating', component: ExerciseCreating },
    { path: 'fromevent', component: ExerciseFromevent },
    { path: 'multicast', component: ExerciseMulticast },
    { path: 'unsubscribe', component: ExerciseUnsubscribe },
    { path: 'chat', component: ExerciseChat },
    { path: 'higherorder', component: ExerciseHigherorder },
    { path: 'dragdrop', component: ExerciseDragdrop },
  ] }
];
