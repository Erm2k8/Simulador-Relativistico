# Projeto Three.js - Efeito Terrel

Este projeto usa a biblioteca [Three.js](https://threejs.org/) para criar uma simulação 3D interativa, com foco inicial na rotação e modificação de objetos (como um cubo) e efeitos visuais como um fundo estrelado. O objetivo futuro é implementar o **efeito Terrel**, que visa demonstrar como objetos se comportam à medida que se aproximam da velocidade da luz, com um foco em efeitos visuais e físicos baseados na teoria da relatividade.

## Funcionalidades Atuais

- **Cubo 3D**: Um cubo que pode ser manipulado, com sua escala alterada conforme a velocidade (relacionada com a luz, `c`).
- **Fundo Estrelado**: Um efeito de fundo com estrelas em movimento, criando uma atmosfera cósmica.
- **Controle de Velocidade**: Um controle deslizante que permite ajustar a "velocidade da luz" no projeto (em porcentagem de `c`), o que afeta a escala do cubo.
- **Rotação do Cubo**: O cubo pode ser rotacionado ao ser tocado na tela ou com um controle que ativa ou desativa a rotação.

## Tecnologias Utilizadas

- **Three.js**: Biblioteca JavaScript para renderização 3D.
- **HTML/CSS**: Estruturação e estilo da interface.
- **JavaScript**: Lógica de animação, interação e controle.

## Instalação

Para rodar o projeto localmente, basta clonar este repositório e abrir o arquivo `index.html` em um navegador moderno.

### Passos para rodar o projeto:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Erm2k8/Simulador-Relativistico.git

2. Navegue até o projeto:
   ```bash
   cd Simulador-Relativistico

3. Abra o arquivo index.html em um navegador:
   ```bash
   open index.html  # Para macOS
   start index.html # Para Windows

## Desenvolvimento Futuro/Em andamento
No futuro, o foco do projeto será a implementação do efeito Terrel. Este efeito, baseado na teoria da relatividade, simula como um objeto (como o cubo) se comporta quando se aproxima da velocidade da luz, incluindo distorções no tempo e espaço, e efeitos visuais como dilatação do tempo e contração do comprimento. O objetivo é proporcionar uma experiência visual e educativa, demonstrando fenômenos físicos de forma interativa.

