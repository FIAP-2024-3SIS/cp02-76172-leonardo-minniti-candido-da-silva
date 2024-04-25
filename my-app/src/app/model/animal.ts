export class Animal {

/**   *   */
constructor(
  nome: string,
  especie: string,
  idade: number,
  sexo: string) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
        this.sexo = sexo;
}

  public nome: string = "";
  public especie: string = "";
  public idade: number = 0;
  public sexo: string = "";

  /** propriedade publica sem valor o linter reclama....por isso inicializamos com valor default */


}
