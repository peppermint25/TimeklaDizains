import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';

import { AboutMeMainComponent } from './about-me/about-me-main/about-me-main.component';
import { ChoirComponent } from './about-me/choir/choir.component';
import { UniversityComponent } from './about-me/university/university.component';

import { EducationMainComponent } from './education/education-main/education-main.component';
import { HighSchoolComponent } from './education/high-school/high-school.component';
import { SecondarySchoolComponent } from './education/secondary-school/secondary-school.component';
import { PrimarySchoolComponent } from './education/primary-school/primary-school.component';

import { ChoirMainComponent } from './choir/choir-main/choir-main.component';
import { PrimarySchoolChoirComponent } from './choir/primary-school-choir/primary-school-choir.component';
import { HighSchoolChoirComponent } from './choir/high-school-choir/high-school-choir.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about-me/choir', pathMatch: 'full'},
  { path: '', component: HomeComponent, children: [
    { path: 'about-me', component: AboutMeMainComponent, children: [
      { path: '', redirectTo: 'choir', pathMatch: 'full'},
      { path: 'choir', component: ChoirComponent},
      { path: 'university', component: UniversityComponent}
    ]},
    { path: 'education', component: EducationMainComponent, children: [
      { path: '', redirectTo: 'primary-school', pathMatch: 'full'},
      { path: 'high-school', component: HighSchoolComponent },
      { path: 'secondary-school', component: SecondarySchoolComponent },
      { path: 'primary-school', component: PrimarySchoolComponent }
    ]},
    { path: 'choir', component: ChoirMainComponent, children: [
      { path: '', redirectTo: 'primary-school-choir', pathMatch: 'full'},
      { path: 'primary-school-choir', component: PrimarySchoolChoirComponent },
      { path: 'high-school-choir', component: HighSchoolChoirComponent }
    ]
    }
  ]
  },
];