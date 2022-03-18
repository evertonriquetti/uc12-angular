import { Component, OnInit } from '@angular/core';
import { VagasServiceService } from 'src/app/services/vagas-service.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {
  vagas! : Vagas[];

  constructor(private vagasServicos : VagasServiceService) { }

  ngOnInit(): void {
    this.vagasServicos.read().subscribe(itens=>{
      this.vagas = itens;
    })
  }

}
