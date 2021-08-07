import { Component, OnInit } from '@angular/core';
import { Animais, Animal } from '../animais'
import { Observable } from 'rxjs'
import { AnimaisService } from '../animais.service'
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animalID!:number
  animal$!: Observable<Animais>

  constructor(private animaisService: AnimaisService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.animalID = this.activatedRoute.snapshot.params.animalID
    this.animal$ = this.animaisService.buscaPorId(this.animalID)
  }

}
