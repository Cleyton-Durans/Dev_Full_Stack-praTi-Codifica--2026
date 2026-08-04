/* 6.  Crie um array de objetos representando músicas, cada uma com título, artista e 
duração em segundos. Use for...of para exibir cada música no formato "Artista — 
Título  (mm:ss)".  Ao  final,  use  forEach  para  somar  a  duração  total e exiba-a no 
mesmo formato. */

let musicas = [
    { titulo: "Song 1", artista: "Artista A", duracao: 210 },
    { titulo: "Song 2", artista: "Artista B", duracao: 185 },
    { titulo: "Song 3", artista: "Artista C", duracao: 240 }
];

// Exibir músicas com for...of
console.log("=== Lista de Músicas ===");

for (let musica of musicas) {
    let minutos = Math.floor(musica.duracao / 60);
    let segundos = musica.duracao % 60;

    // formata segundos com 2 dígitos
    let tempoFormatado = `${minutos}:${segundos.toString().padStart(2, "0")}`;

    console.log(`${musica.artista} — ${musica.titulo} (${tempoFormatado})`);
}

// Somar duração total com forEach
let duracaoTotal = 0;

musicas.forEach(musica => {
    duracaoTotal += musica.duracao;
});

// Converter duração total
let minTotal = Math.floor(duracaoTotal / 60);
let segTotal = duracaoTotal % 60;

let tempoTotalFormatado = `${minTotal}:${segTotal.toString().padStart(2, "0")}`;

console.log("\n=== Duração Total ===");
console.log(`${tempoTotalFormatado}`);