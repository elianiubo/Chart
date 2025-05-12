
class Votant {
  #nom;
  #edat;
  #partit;
  constructor(nom, edat, partit) {
    this.#nom = nom;
    this.#edat = edat;
    this.#partit = partit;
  }
  get nom() {
    return this.#nom;
  }
  set nom(nouNom) {
    this.#nom = nouNom;
  }
  get edat() {
    return this.#edat;
  }
  set edat(novaEdat) {
    this.#nom = novaEdat;
  }
  get partit() {
    return this.#partit;
  }
  set partit(nouPartit) {
    this.#partit = nouPartit;
  }


}
class Estudiant extends Votant {
  #centreEducatiu;
  constructor(nom, edat, partit, centreEducatiu) {
    super(nom, edat, partit);
    this.#centreEducatiu = centreEducatiu;
  }
  get centreEducatiu() {
    return this.#centreEducatiu;
  }
  set centreEducatiu(nouCentre) {
    this.#centreEducatiu = nouCentre;
  }
  info() {
    return `Soc Estudiant i estudio a ${this.#centreEducatiu}`;
  }

}
class Treballador extends Votant {
  #empresa;
  constructor(nom, edat, partit, empresa) {
    super(nom, edat, partit);
    this.#empresa = empresa;
  }
  get empresa() {
    return this.#empresa;
  }
  set empresa(novaEmpresa) {
    this.#empresa = novaEmpresa;
  }
  info() {
    return `Soc Treballador i treballo a ${this.#empresa}`;
  }


}
class Jubilat extends Votant {
  #pensio;
  constructor(nom, edat, partit, pensio) {
    super(nom, edat, partit);
    this.#pensio = pensio
  }
  get pensio() {
    return this.#pensio;
  }
  set pensio(novaPensio) {
    this.#pensio = novaPensio
  }
  info() {
    return `Soc Jubilat i cobro  ${this.#pensio}`;
  }


}

class Simulador {
  #noms = ["Sofía", "Martín", "Valentina", "Mateo", "Lucía", "Matías", "Valeria", "Sebastián", "María", "Nicolás", "Emma", "Joaquín", "Isabella", "Juan", "Mía", "Diego", "Camila", "Emilia", "Felipe", "Renata", "Carlos", "Victoria", "Pedro", "Julia", "Manuel", "Alejandra", "Javier", "Sara", "Adrián", "Elena", "Miguel", "Aitana", "Francisco", "Claudia", "Daniel", "Laura", "Alejandro", "Carmen", "Leo", "Ana", "Pablo", "Alicia", "José", "Lola", "David", "Natalia", "Álvaro", "Jimena", "Fernando", "Adriana", "Rafael", "Rocío", "Hugo", "Inés", "Mario", "Pilar", "Iker", "Diana", "Andrés", "Eva", "Iván", "Beatriz", "Jorge", "Alba", "Rubén", "Teresa", "Óscar", "Celia", "Gonzalo", "Silvia", "Santiago", "Miranda", "Enrique", "Abril", "Bruno", "Marta", "Raul", "Rosa", "Víctor", "Luna", "Marcos", "Ángela", "Sergio", "Luisa", "Antonio", "Esther", "Ángel", "Clara", "Ignacio", "Elisa"];
  #cognoms = ["García", "Fernández", "González", "Rodríguez", "López", "Martínez", "Sánchez", "Pérez", "Martín", "Gómez", "Ruiz", "Hernández", "Jiménez", "Díaz", "Moreno", "Álvarez", "Muñoz", "Romero", "Alonso", "Gutiérrez", "Navarro", "Torres", "Domínguez", "Vázquez", "Ramos", "Gil", "Ramírez", "Serrano", "Blanco", "Molina", "Morales", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Marín", "Sanz", "Iglesias", "Núñez", "Medina", "Garrido", "Cortés", "Castillo", "Santos", "Lozano", "Guerrero", "Cano", "Prieto", "Méndez", "Cruz", "Calvo", "Herrera", "Gallego", "Vidal", "León", "Marquez", "Peña", "Herrero", "Flores", "Cabrera", "Campos", "Vega", "Fuentes", "Carrasco", "Diez", "Reyes", "Caballero", "Nieto", "Aguilar", "Pascual", "Santana", "Herrero", "Montero", "Esteban", "Parra", "Bravo", "Giménez", "Rojas", "Lara", "Rivas", "Estrada", "Vila", "Mora", "Soler", "Gallardo", "Pardo"];
  #partits = ["PP", "PSOE", "VOX", "Sumar", "ERC", "JUNTS", "EH_Bildu", "EAJ_PNV", "BNG", "CCa", "UPN"];
  #perfils = ["Estudiant", "Treballador", "Jubilat"];
  #centres = ["Institut Montserrat", "Escola del Mar", "Col·legi Sant Jordi", "Institut L'Estel", "Escola Verge de Montserrat", "Col·legi Sant Antoni", "Institut La Salle", "Escola Mare de Déu", "Col·legi Sant Pere", "Institut Sant Josep", "Escola del Sol", "Col·legi Santa Maria", "Institut Sant Miquel", "Escola de l'Àngel", "Col·legi Sant Gabriel", "Institut Sant Francesc", "Escola del Pilar", "Col·legi Sant Elm", "Institut Sant Antoni", "Escola Sant Vicenç"];
  #votants = [];

  // El constructor del simulador construeix l'array amb 1000 votants
  constructor() {
    for (let i = 0; i < 1000; i++) {
      const Votant = this.#generateRandomVotant();
      this.#votants.push(Votant);
    }
  }

  get votants() {
    return this.#votants;
  }

  resumPartits() {
    
    let vots = {
      EH_Bildu: 95,
      ERC: 99,
      EAJ_PNV: 93,
      Sumar: 88,
      VOX: 100,
      PP: 90,
      CCa: 78,
      BNG: 58,
      PSOE: 100,
      JUNTS: 104,
      UPN: 95
    };

    return vots;
  }

  resumPerfils() {

    let perfils = {
      Jubilat: {
        BNG: 12,
        CCa: 32,
        EAJ_PNV: 33,
        EH_Bildu: 18,
        ERC: 32,
        JUNTS: 34,
        PP: 26,
        PSOE: 38,
        Sumar: 36,
        UPN: 31,
        VOX: 34
      },
      Treballador: {
        BNG: 25,
        CCa: 23,
        EAJ_PNV: 37,
        EH_Bildu: 41,
        ERC: 35,
        JUNTS: 33,
        PP: 36,
        PSOE: 39,
        Sumar: 19,
        UPN: 31,
        VOX: 35
      },
      Estudiant: {
        BNG: 21,
        CCa: 23,
        EAJ_PNV: 23,
        EH_Bildu: 36,
        ERC: 32,
        JUNTS: 37,
        PP: 28,
        PSOE: 23,
        Sumar: 33,
        UPN: 33,
        VOX: 31
      }
    };




    return perfils;
  }


  #generateRandomVotant() {

    const index = Math.floor(Math.random() * this.#perfils.length);
    const perfil = this.#perfils[index];

    const nomInd = Math.floor(Math.random() * this.#noms.length);
    const cognomsInd = Math.floor(Math.random() * this.#cognoms.length);
    const partitInd = Math.floor(Math.random() * this.#partits.length);

    const nom = `${this.#noms[nomInd]} ${this.#cognoms[cognomsInd]}`;
    const edat = Math.floor(Math.random() * 70) + 18; // Edad entre 18 y 87 años
    const partit = this.#partits[partitInd];

    let additionalInfo = '';

    switch (perfil) {
      case "Estudiant":
        const centreInd = Math.floor(Math.random() * this.#centres.length);
        const centreEducatiu = this.#centres[centreInd];
        additionalInfo = ` ${centreEducatiu}`;
        break;

      case "Treballador":
       
        additionalInfo = `Empresari/a ${nom}`;
        break;

      case "Jubilat":
        const pensio = Math.floor(Math.random() * 2000) + 1000; // Pensión entre 1000 y 2999 euros
        additionalInfo = `${pensio}`;
        break;

      default:
        
    }
    const votantData = {
      nom: nom,
      edat: edat,
      partit: partit,
      centreEducatiu: perfil === "Estudiant" ? additionalInfo : "",
      empresa: perfil === "Treballador" ? additionalInfo : "",
      pensio: perfil === "Jubilat" ? additionalInfo : ""
    };

    //Return the Votant object
    switch (perfil) {
      case "Estudiant":
        return new Estudiant(nom, edat, partit, additionalInfo);

      case "Treballador":
        return new Treballador(nom, edat, partit, additionalInfo);

      case "Jubilat":
        return new Jubilat(nom, edat, partit, additionalInfo);

      default:
        throw new Error("Perfil no reconocido");
    }
  }

}
