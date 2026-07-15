# 📏 Conversor Universal de Medidas

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![Tecnologias](https://img.shields.io/badge/tecnologias-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)
![Licença](https://img.shields.io/badge/licença-MIT-green)

---

## 📌 Sobre o Projeto

O **Conversor Universal de Medidas** é uma aplicação web desenvolvida para realizar conversões entre diferentes sistemas de medição utilizados principalmente na área de **metrologia, manutenção industrial, mecânica e usinagem**.

O sistema permite converter valores entre:

- Milímetros (mm)
- Polegadas Decimais
- Polegadas Fracionárias

Além disso, realiza aproximações de frações utilizadas em instrumentos de medição como:

- Paquímetro
- Micrômetro
- Relógio comparador
- Ferramentas de precisão

---

# 🎯 Objetivo

Desenvolver uma ferramenta simples, rápida e precisa capaz de auxiliar profissionais, estudantes e técnicos na conversão de medidas entre sistemas métrico e imperial.

O projeto busca aproximar conceitos de:

- Metrologia Industrial
- Matemática aplicada
- Desenvolvimento Web
- Engenharia de Software

---

# ⚙️ Funcionalidades

## Conversões disponíveis

✅ Milímetros → Polegada Decimal

Exemplo:

```
25.4 mm
=
1"
```

---

✅ Polegada Decimal → Milímetros

Exemplo:

```
0.375"
=
9.525 mm
```

---

✅ Polegada Fracionária → Milímetros

Exemplo:

```
3/8"
=
9.525 mm
```

---

✅ Polegada Fracionária Mista

Exemplo:

```
1 1/2"
=
38.1 mm
```

---

# 🔢 Sistema de Frações

O sistema possui um módulo matemático capaz de trabalhar com:

- Frações simples
- Frações mistas
- Simplificação automática
- Conversão decimal para fração

Exemplos:

```
0.375
↓
3/8"
```

```
2.375
↓
2 3/8"
```

---

# 📐 Aproximações Industriais

O sistema calcula aproximações utilizadas na indústria:

| Precisão | Exemplo |
|---|---|
| 1/8" | 0.125 |
| 1/16" | 0.0625 |
| 1/32" | 0.03125 |
| 1/64" | 0.015625 |
| 1/128" | 0.0078125 |

---

# 🏗️ Arquitetura do Projeto

```
Conversor Universal de Medidas

│
├── index.html
│
├── css
│   │
│   ├── variables.css
│   ├── style.css
│   └── responsive.css
│
└── js
    │
    ├── utils.js
    ├── fractions.js
    ├── validation.js
    ├── converter.js
    └── app.js
```

---

# 🧩 Organização dos JavaScript

## utils.js

Responsável por:

- Funções matemáticas auxiliares
- Arredondamentos
- Constantes do sistema


---

## fractions.js

Motor matemático de frações:

- Conversão fração ↔ decimal
- Simplificação
- Fração mista
- Aproximações


---

## validation.js

Responsável pela validação dos dados:

- Campos vazios
- Valores inválidos
- Formatos incorretos


---

## converter.js

Motor principal:

- Recebe valores
- Executa cálculos
- Retorna resultados


---

## app.js

Controlador da interface:

- Eventos dos botões
- Comunicação com HTML
- Atualização dos resultados


---

# 🛠️ Tecnologias Utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript ES6+

## Recursos utilizados

- Manipulação DOM
- Funções matemáticas
- Arquitetura modular
- Responsividade
- Organização por camadas

---

# 📚 Fórmulas Utilizadas

## Polegada para Milímetros

```
mm = polegada × 25.4
```

Exemplo:

```
1 × 25.4

= 25.4 mm
```

---

## Milímetros para Polegadas

```
polegada = mm ÷ 25.4
```

Exemplo:

```
25.4 ÷ 25.4

= 1"
```

---

# 🚀 Como Executar o Projeto

Clone o repositório:

```bash
git clone https://github.com/seuusuario/conversor-universal-medidas.git
```

Entre na pasta:

```bash
cd conversor-universal-medidas
```

Abra o arquivo:

```
index.html
```

ou utilize a extensão:

```
Live Server
```

no Visual Studio Code.

---

# 🌐 Deploy

O projeto pode ser publicado utilizando:

- GitHub Pages
- Netlify
- Vercel

---

# 📸 Preview

Adicionar futuramente:

- Screenshot da aplicação
- Demonstração das conversões
- Interface responsiva

---

# 📈 Próximas Melhorias

Planejamento futuro:

- [ ] Histórico de conversões
- [ ] Botão copiar resultado
- [ ] Exportação PDF
- [ ] Modo escuro
- [ ] Conversão de outras unidades
- [ ] PWA para uso offline
- [ ] Banco de dados de medidas industriais

---

# 👨‍💻 Desenvolvedor

**Johny Viana Pereira**

Projeto desenvolvido para estudo e aplicação prática de:

- Engenharia de Software
- Desenvolvimento Frontend
- Metrologia Industrial

---

⭐ Se este projeto foi útil, considere deixar uma estrela no repositório.