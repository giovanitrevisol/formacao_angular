/**
 * variaveis
 */

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "felipe";
let idade: number = 30;
let altura: number = 1.9;

// tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
  name: "Giovani",
  cidade: "RS",
  idade: 31,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 189.99,
  unidades: 4,
};

/**
 * arrays
 */

let dados: string[] = ["Givoani", "Lara", "Jack"];
let dados2: Array<string> = ["Giovani", "Lara", "Jack"];

let infos: (string | number)[] = [322, "Giovani"];

/**
 * Tuplas
 */
let boleto: [string, number, number] = ["agua conta", 199.9, 32342342];

/**
 * arrays métodos (são os mesmos do Javascript)
 */
dados.pop();

/**
 * Datas
 */
let aniversario: Date = new Date("2025-03-10 08:00");
console.log(aniversario.toString());
