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
import { Component, OnInit } from '@angular/core';
import { WizardStepBaseComponent } from 'src/app/modules/project/add/main/wizard/wizardPages/wizard-step-base/wizard-step-base.component';
import { CallToActionOptionService } from 'src/app/services/call-to-action-option.service';
import { CallToActionOption } from 'src/app/models/domain/call-to-action-option';
import { ProjectAdd } from 'src/app/models/resources/project-add';
import { WizardService } from 'src/app/services/wizard.service';

@Component({
  selector: 'app-project-call-to-action',
  templateUrl: './project-call-to-action.component.html',
  styleUrls: ['./project-call-to-action.component.scss', '../../shared-wizard-styles.scss']
})
export class ProjectCallToActionComponent extends WizardStepBaseComponent implements OnInit {

  /**
   * Local copy of all call-to-action options
   */
  public callToActionOptions: Array<CallToActionOption>;

  /**
   * The selected call to action option
   */
  public selectedCallToActionOptionId: number;

  /**
   * Hold a copy of the project temporarily to prevent the service from listening to every change
   */
  private project: ProjectAdd;

  constructor(private wizardService: WizardService,
              private callToActionOptionService: CallToActionOptionService) {
    super();
  }

  ngOnInit(): void {
    this.project = this.wizardService.builtProject;
    this.callToActionOptionService.getAll().subscribe(options => {
      this.callToActionOptions = options;
    });
  }

  /**
   * Method which triggers when the button to the next page is pressed
   */
  public onClickNext() {
    const selectedCallToAction = this.callToActionOptions.find(cta => cta.id === this.selectedCallToActionOptionId);
    this.project.callToAction = {
      id: selectedCallToAction.id,
      optionValue: selectedCallToAction.value,
      value: selectedCallToAction.optionValue
    };
    super.onClickNext();
  }

  /**
   * Method that is triggered when any of the url input fields changes
   * @param event The change event
   * @param callToActionId The id of the call-to-action-option that was changed
   */
  public urlChange(event: Event, callToActionId: number) {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    console.log(value);
    this.callToActionOptions = this.callToActionOptions.map(callToActionOption =>
        callToActionOption.id === callToActionId
            ? {
              ...callToActionOption,
              optionValue: value
            } : callToActionOption
    );
  }
}
