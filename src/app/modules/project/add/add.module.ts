/*
 *  Digital Excellence Copyright (C) 2020 Brend Smits
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published
 *   by the Free Software Foundation version 3 of the License.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty
 *   of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *   See the GNU Lesser General Public License for more details.
 *
 *   You can find a copy of the GNU Lesser General Public License
 *   along with this program, in the LICENSE.md file in the root project directory.
 *   If not, see https://www.gnu.org/licenses/lgpl-3.0.txt
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { FinalComponent } from 'src/app/modules/project/add/main/wizard/wizardPages/default_/final/wizardfinal.component';
import { LinkComponent } from 'src/app/modules/project/add/main/wizard/wizardPages/default_/link/wizardlink.component';
import { DescriptionComponent } from 'src/app/modules/project/add/main/wizard/wizardPages/default_/description/wizarddescription.component';
import { ColabComponent } from 'src/app/modules/project/add/main/wizard/wizardPages/default_/colab/wizardcolab.component';
import { ProjectModule } from '../project.module';
import { AddRoutingModule } from './add-routing.module';
import { PickFlowPageComponent } from './main/wizard/wizardPages/dynamic/pick-flow-page/pick-flow-page.component';
import { MainComponent } from './main/main.component';
import { WizardComponent } from './main/wizard/wizard.component';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { UsernameComponent } from './main/wizard/wizardPages/dynamic/username/username.component';
import { AvailableProjectsPageComponent } from './main/wizard/wizardPages/dynamic/available-projects-page/available-projects-page.component';
import { StepHeaderComponent } from './main/wizard/step-header/step-header.component';
import { ProjectImageComponent } from './main/wizard/wizardPages/default_/project-image/project-image.component';
import { ProjectCollaboratorsComponent } from './main/wizard/wizardPages/default/project-collaborators/project-collaborators.component';
import { ProjectLinkComponent } from './main/wizard/wizardPages/default/project-link/project-link.component';
import { ProjectDescriptionComponent } from './main/wizard/wizardPages/default/project-description/project-description.component';
import { ProjectIconComponent } from './main/wizard/wizardPages/default/project-icon/project-icon.component';
import { ProjectNameComponent } from './main/wizard/wizardPages/default/project-name/project-name.component';

@NgModule({
  declarations: [
    LinkComponent,
    ProjectNameComponent,
    DescriptionComponent,
    ColabComponent,
    FinalComponent,
    PickFlowPageComponent,
    MainComponent,
    WizardComponent,
    UsernameComponent,
    AvailableProjectsPageComponent,
    StepHeaderComponent,
    ProjectImageComponent,
    ProjectCollaboratorsComponent,
    ProjectLinkComponent,
    ProjectDescriptionComponent,
    ProjectIconComponent,
    ProjectNameComponent,

  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    QuillModule,
    ProjectModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    WizardComponent
  ],
  providers: [
    BsModalRef
  ]
})
export class AddModule { }
