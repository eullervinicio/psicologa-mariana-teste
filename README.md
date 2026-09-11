# Landing Page — Dra. Mariana Alves

Landing Page fictícia para psicóloga, voltada à apresentação do atendimento e ao contato pelo WhatsApp.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- CSS Modules
- ESLint

## Executar localmente

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Para validar e executar o build de produção:

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Estrutura principal

- `src/app/`: página, layout, estilos globais e metadados.
- `src/components/`: componentes de layout, seções, formulário e elementos de interface.
- `src/content/`: textos e configurações reutilizáveis.
- `src/lib/`: funções auxiliares.
- `src/types/`: tipos compartilhados.
- `docs/`: briefing e decisões do projeto.

## Imagens

As imagens otimizadas ficam em `src/assets/images/`. Os arquivos originais são preservados em `src/assets/images/source/`. As fontes locais ficam em `src/assets/fonts/`.

## Publicação

O projeto pode ser conectado a um repositório e publicado na Vercel usando o fluxo padrão para aplicações Next.js.

## Observação

Dra. Mariana Alves é uma personagem fictícia. CRP, telefone, endereço e demais dados utilizados também são fictícios e devem ser substituídos antes de reutilizar este projeto para um cliente real.
