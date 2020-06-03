/*
 *
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
 *
 */
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { AlertType } from 'src/app/models/internal/alert-type';
import { AlertConfig } from 'src/app/models/internal/alert-config';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    // For demonstration purposes for the PR.

    // const alertConfig: AlertConfig = {
    //   type: AlertType.info,
    //   preMessage: 'Premessage content',
    //   mainMessage: 'This is the main message of an alert',
    //   dismissible: false
    // };
    // this.alertService.pushAlert(alertConfig);
  }
}
