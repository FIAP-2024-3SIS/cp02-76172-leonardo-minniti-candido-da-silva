import { Component, Input } from '@angular/core';
import { Animal } from '../model/animal';

@Component({
  selector: 'app-animal-item',
  standalone: true,
  imports: [],
  templateUrl: './animal-item.component.html',
  styleUrl: './animal-item.component.css'
})
export class AnimalItemComponent {
  /**
   * Construtor para inicializar a classe Animal
   */
  constructor() {
    /*
    this.animal = new Animal();
    this.animal.nome = "Mingau";
    this.animal.especie = "Felino";
    this.animal.idade = 18;
    this.animal.sexo = "macho"
    */
  }

  /** propriedade animal; criada e disponivel para uso no html, permitindo ler(.ts) e escrever(bind no html) */
  //@Input() animal: Animal;
  @Input() animal: Animal = new Animal("", "", 0, "");
}
