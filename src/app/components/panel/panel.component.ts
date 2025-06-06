import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/services/all.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  email: string = 'test@test.com';
  signatures: any[] = [
    {
      id: 1,
      name: 'Física',
      teacher: 'Cristian Santana',
      credits: 3,
      status: 'inactive',
      selected: false,
      users: ["Cristian Santana", "Daniel Santana"]
    },
    {
      id: 2,
      name: 'Física Quantica',
      teacher: 'Cristian Santana',
      credits: 3,
      status: 'active',
      selected: false,
      users: ["Cristian Santana", "Daniel Santana"]
    },
    {
      id: 3,
      name: 'Física Electromagnetica',
      teacher: 'Cristian Santana',
      credits: 3,
      status: 'active',
      selected: false,
      users: ["Cristian Santana", "Daniel Santana"]
    },
    {
      id: 4,
      name: 'Física Avanzada',
      teacher: 'Cristian Santana',
      credits: 3,
      status: 'active',
      selected: false,
      users: ["Cristian Santana", "Daniel Santana"]
    },
    {
      id: 5,
      name: 'Física Nuclear',
      teacher: 'Cristian Santana',
      credits: 3,
      status: 'active',
      selected: false,
      users: ["Cristian Santana", "Daniel Santana"]
    }
  ];
  signatureSelecteds: any[] = [];

  constructor(private service: AllService, private router: Router) { }

  ngOnInit(): void {
    this.getSignatures();
  }

  getSignatures() {
    this.service.getSignatures().subscribe((data: any) => {
      this.signatures = data.signatures;
    }, err => {
      return Swal.fire('', err.message, 'error');
    });
  }

  selectSignature(signature: any) {
    if (!signature.selected) {
      let pos = this.signatures.indexOf(signature);
      this.signatures[pos].selected = true;
      this.signatureSelecteds.push(signature);
    } else {
      let pos = this.signatures.indexOf(signature);
      this.signatures[pos].selected = false;
      let pos2 = this.signatureSelecteds.indexOf(signature);
      this.signatureSelecteds.splice(pos2, 1);
    }
  }

  saveSing() {
    let signatrues = [];
    for (const s of this.signatureSelecteds) {
      signatrues.push(s.id);
    }
    let body = {
      email: this.email,
      signatures: signatrues
    };
    this.service.saveSing(body).subscribe((data: any) => {
      return Swal.fire('', data.message, 'success');
    }, err => {
      return Swal.fire('', err.message, 'error');
    });
  }

}
