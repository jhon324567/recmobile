# Jhonnatan | Estrategista Digital — Link-in-Bio

## Problem Statement
Site link-in-bio estilo luxo/premium (azul marinho + dourado) inspirado em draelianecosta.netlify.app com animações brilhantes nos botões e linhas douradas brilhosas no fundo. Paleta do cliente (azul noturno + dourado).

## Architecture
- Frontend-only React (FastAPI backend intocado)
- Playfair Display (display) + Manrope (body)
- Canvas animado para linhas douradas shimmer
- CSS puro para border gradient rotativo, sheen sweep, glow pulsante

## Implemented (2026-12)
- Capa: celular dourado com foto do Jhonnatan, corners dourados + glow pulsante
- Título e subtítulo com hierarquia luxo
- 4 botões: 3 WhatsApp (5562995282327) com mensagens prontas + 1 Instagram (portfólio)
- Fundo: canvas com 14 linhas douradas diagonais animadas + noise grain + vignette radial
- Rodapé: frase "Resultado não é sorte. É estratégia aplicada." com gradiente animado
- Responsivo mobile-first (breakpoint 480px)
- `prefers-reduced-motion` respeitado

## Backlog (P1/P2)
- P2: Adicionar tracking de cliques nos botões (Google Analytics ou PostHog)
- P2: Seção "Depoimentos" em carrossel com prova social
- P2: Logo do "Método Audience" como marca d'água sutil (caso cliente queira)
- P2: Versão PT/EN toggle

## Files
- /app/frontend/src/App.js — página única + Canvas shimmer
- /app/frontend/src/App.css — estilos luxo (navy + gold)
- /app/frontend/public/index.html — fonts, title, meta
