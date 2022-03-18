import { Component, OnInit } from '@angular/core';

import { PETS } from '../mock-pets';
import { PetService } from '../pet.service'

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})

export class PetsComponent implements OnInit {
  pets = PETS;
  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
      .subscribe(pets => this.pets = pets);
  }
}
