const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "voce gosta de praticar eportes?",
    alternativas:[
        {
        texto:"sim",
        afirmacao:"afirmação"
        },
        {
       texto:"não",
       afirmacao:"afirmação"
        }

    ]
},

{
    
        enunciado: "Com que frequecia?",
        alternativas:[{
            texto:"frequentemente",
            afirmacao:"afirmação"
        },
        {        
           texto:"raramente",
           afirmacao:"afirmação"
        }        
        ]
    },
    

    {
    
        enunciado: "quantas vzes por semana?",
        alternativas:[
            {
            texto:"todos o dias",
            afirmacao:"afrimação"
            },
            {
            texto:"uma vez ou mais por semana",
            afirmacao:"afirmação"
            }
        ]
    },
    
    {
    
        enunciado: "você se sente saudavel exercitando seu corpo?",
        alternativas:[
            {
            texto:"sim",
            afirmacao:"afirmação"
        },
        {
            texto:"não",
            afirmacao:"afirmação"
        }
        ]
    },

    {
    
        enunciado: "Qual dos benefícios a seguir você considera mais relevante quando se pratica esportes para a saúde??",
        alternativas:[
            {
            texto:"Melhora da saúde cardiovascular e aumento da resistência física",
            afirmacao:"afirmação"
            },
        {
            texto:"aumento do estresse e diminuição da flexibilidade",
            afirmacao:"afirmação"
        }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "joãozinho gosta de praticar esportes, frequentemente por semana, todos os dias, ele c sente saudavel exercitando seu corpo, isso melhora sua saúde cardiovascular e aumenta a resistencia fisica";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
    }
    
    function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
    }
     }

     function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada. afirmacoes;
        historiaFinal += afirmacoes + "" ;
        atual++;
        mostraPergunta();

     }

     function mostraResultado(){
        caixaPerguntas.textContent = "Em 2025...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
     }
    
     mostraPergunta();