# Arquitetura Técnica — Landing Page da Dra. Mariana Alves

## 1. Resumo da decisão

A solução recomendada é uma aplicação **Next.js com App Router e TypeScript**, renderizada estaticamente no build e publicada na Vercel. A página utilizará componentes de servidor por padrão, HTML semântico, CSS nativo modular e o mínimo possível de JavaScript no navegador.

O primeiro lançamento não terá formulário. O WhatsApp será o único canal de conversão, conforme definido no briefing, na estratégia e na estrutura da página. Isso reduz dependências, tratamento de dados pessoais, pontos de falha e custos de manutenção.

### Resultado esperado

- Uma única página pública e rastreável.
- Conteúdo presente no HTML inicial.
- Excelente desempenho e estabilidade visual.
- SEO técnico simples e completo.
- Interações acessíveis com recursos nativos do navegador.
- Deploy automático e com previews na Vercel.
- Manutenção concentrada em arquivos de conteúdo e tokens visuais.

## 2. Stack recomendada

### Base

| Camada             | Escolha                              | Justificativa                                                                               |
| ------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| Framework          | Next.js com App Router               | Integração direta com Vercel, renderização estática, metadados, imagens e fontes otimizadas |
| Linguagem          | TypeScript em modo estrito           | Segurança de tipos para conteúdo, configurações e propriedades dos componentes              |
| Biblioteca de UI   | React, fornecido pelo Next.js        | Base necessária do framework; sem biblioteca adicional de componentes                       |
| Estilos            | CSS global para tokens + CSS Modules | Escopo local, baixo custo, sem runtime e sem dependência de framework CSS                   |
| Fontes             | `next/font/local`                    | Arquivos locais, sem requisição externa, menor risco de mudança de layout                   |
| Imagens            | `next/image` com arquivos locais     | Dimensões conhecidas, formatos modernos e carregamento responsivo na Vercel                 |
| Pacotes            | npm com `package-lock.json`          | Fluxo conhecido pela Vercel e instalação reproduzível                                       |
| Hospedagem         | Vercel                               | Deploy de Next.js sem configuração especial, HTTPS e previews por branch                    |
| Controle de versão | Git                                  | Histórico, revisão e gatilho para deploy automático                                         |

### Dependências de produção

Manter apenas:

- `next`;
- `react`;
- `react-dom`.

### Dependências de desenvolvimento

Manter somente o necessário para:

- TypeScript;
- tipos do React e Node;
- ESLint e configuração oficial compatível com a versão escolhida do Next.js;
- formatação, somente se o projeto adotar formalmente uma ferramenta.

Não adicionar, no primeiro lançamento:

- Tailwind CSS;
- biblioteca de componentes;
- biblioteca de ícones;
- biblioteca de animação;
- gerenciador de estado;
- cliente HTTP;
- biblioteca de formulário;
- biblioteca de validação;
- CMS;
- pacote específico para SEO;
- pacote de analytics.

### Política de versões

Na implementação, instalar a versão estável atual do Next.js e as versões compatíveis de React e Node.js, registradas no lockfile. Não usar versões beta, canary ou release candidate. Definir em `package.json` a versão mínima de Node suportada pela versão estável selecionada.

## 3. Por que Next.js, e não uma solução mais complexa

A página tem uma rota, conteúdo relativamente estável e apenas duas interações relevantes: navegação por âncoras e abertura do WhatsApp. Next.js atende esse escopo sem exigir backend e traz recursos integrados para imagens, fontes e metadados.

A documentação oficial destaca que o módulo de fontes remove requisições externas e reduz mudanças de layout, enquanto o componente de imagens evita deslocamento de conteúdo e serve formatos modernos. A Metadata API gera as tags do documento a partir do App Router. Essas capacidades reduzem a necessidade de pacotes externos. Fontes: [otimização de fontes](https://nextjs.org/docs/app/getting-started/fonts), [checklist de produção](https://nextjs.org/docs/app/guides/production-checklist) e [metadados](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).

### Decisão sobre exportação estática

Não configurar `output: "export"` no primeiro momento.

O Next.js já pode pré-renderizar esta página como conteúdo estático durante o build, mantendo na Vercel a otimização nativa de imagens. Uma exportação puramente estática exigiria um loader personalizado para conservar a otimização de `next/image`, segundo a [documentação de static export](https://nextjs.org/docs/pages/guides/static-exports). Isso adicionaria configuração sem benefício real para o deploy escolhido.

A aplicação continuará sem dependência de banco ou renderização dinâmica. O uso do runtime da Vercel ficará limitado às capacidades internas do framework e, futuramente, a um endpoint de formulário apenas se ele for realmente necessário.

## 4. Estratégia de renderização

### Página principal

- Pré-renderizada no build.
- Conteúdo entregue no HTML inicial.
- Nenhuma busca de dados em tempo de requisição.
- Nenhum estado global.
- Nenhum carregamento de conteúdo após a montagem.

### Componentes de servidor

Todos os componentes devem permanecer como Server Components, exceto quando uma interação não puder ser resolvida com HTML e CSS nativos.

### JavaScript no cliente

Objetivo: não enviar JavaScript próprio para as seções de conteúdo.

- WhatsApp: link normal.
- Navegação por âncoras: links normais.
- FAQ: elementos nativos `details` e `summary`.
- Menu móvel: preferencialmente estrutura nativa acessível; usar um pequeno Client Component somente se os testes mostrarem que a solução nativa não atende à experiência necessária.
- Animações: CSS, discretas e respeitando redução de movimento.

### Benefício

Essa abordagem melhora o tempo de carregamento, reduz hidratação, elimina dependências de estado e mantém o conteúdo acessível mesmo quando scripts falham.

## 5. Estrutura de pastas

Estrutura recomendada:

```text
/
├── docs/
│   ├── ARQUITETURA.md
│   ├── BRIEFING.md
│   ├── COPY.md
│   ├── DESIGN_SYSTEM.md
│   ├── ESTRATEGIA.md
│   └── ESTRUTURA.md
├── public/
│   └── icons/
│       └── whatsapp.svg
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── icon.png
│   │   ├── layout.tsx
│   │   ├── opengraph-image.jpg
│   │   ├── page.module.css
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── inter-latin.woff2
│   │   │   ├── newsreader-latin.woff2
│   │   │   └── LICENSES.md
│   │   └── images/
│   │       ├── mariana-hero.jpg
│   │       └── mariana-sobre.jpg
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Container.tsx
│   │   │   ├── Footer.module.css
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.module.css
│   │   │   └── Header.tsx
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ApproachSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── NeedsSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   └── sections.module.css
│   │   └── ui/
│   │       ├── ButtonLink.module.css
│   │       ├── ButtonLink.tsx
│   │       ├── SectionHeading.module.css
│   │       ├── SectionHeading.tsx
│   │       └── WhatsAppLink.tsx
│   ├── content/
│   │   ├── landing-page.ts
│   │   └── site-config.ts
│   ├── lib/
│   │   ├── structured-data.ts
│   │   └── whatsapp.ts
│   └── types/
│       └── content.ts
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

### Ajustes conforme o escopo real

- `mariana-sobre.jpg` só existirá se houver uma segunda fotografia aprovada.
- `opengraph-image.jpg` só deverá existir quando uma imagem social específica for criada e aprovada. Metadados de texto podem ser publicados sem ela.
- `.env.example` poderá ficar vazio ou ser omitido no primeiro lançamento, pois o número de WhatsApp não é segredo e pode ficar na configuração de conteúdo.
- Não criar pastas vazias ou componentes preventivos.

## 6. Arquitetura de componentes

### Componentes de layout

#### `Container`

Controla largura máxima e margens laterais. Aceita apenas as variações realmente previstas no Design System: principal, amplo e editorial.

#### `Header`

Contém identificação, navegação e CTA compacto. Deve usar links semânticos e permanecer simples. A versão móvel só se torna um Client Component se houver necessidade comprovada de controlar abertura, foco e fechamento do menu por JavaScript.

#### `Footer`

Reúne identificação profissional, navegação, contato e links legais. Sem lógica ou estado.

### Componentes de seção

Cada seção corresponde à arquitetura de conteúdo aprovada:

- `HeroSection`;
- `NeedsSection`;
- `AboutSection`;
- `ApproachSection`;
- `ProcessSection`, incluindo etapas e modalidades;
- `FaqSection`;
- `ContactSection`.

Os componentes de seção organizam semântica e composição. Eles recebem conteúdo tipado ou importam o objeto da seção; não devem conter números de telefone, textos repetidos ou tokens de cor escritos diretamente.

### Componentes reutilizáveis

#### `ButtonLink`

Link estilizado como botão para navegação ou destino externo. Deve preservar o elemento `a`, em vez de simular um link com `button`.

#### `WhatsAppLink`

Especialização fina do `ButtonLink`. Recebe rótulo, posição de rastreamento opcional e variante visual; a URL é sempre produzida pela mesma função.

#### `SectionHeading`

Agrupa texto de contexto, título e introdução opcional com hierarquia consistente.

### Regra contra abstração excessiva

Não criar componentes genéricos como `Card`, `Stack`, `Grid`, `Text` ou `IconBox` antes de haver duas ou mais utilizações realmente equivalentes. A composição visual específica pode permanecer no componente da seção.

## 7. Organização dos estilos

### `globals.css`

Responsável por:

- reset mínimo;
- tokens de cor;
- tokens de tipografia;
- espaçamentos;
- containers;
- radius e sombras;
- estilos de elementos globais;
- foco visível;
- redução de movimento;
- regras básicas de acessibilidade.

### CSS Modules

- Um módulo por componente de layout ou UI reutilizável.
- Um único `sections.module.css` pode atender as seções enquanto elas compartilham padrões reais.
- Separar um módulo por seção somente quando o arquivo comum ficar difícil de navegar.
- Usar Grid e Flexbox nativos.
- Usar `clamp()` para títulos e espaçamentos fluidos.
- Mobile-first, acrescentando mudanças nos breakpoints definidos pelo Design System.

### O que evitar

- Valores hexadecimais repetidos fora dos tokens.
- Estilos inline para composição.
- Classes utilitárias criadas manualmente em grande quantidade.
- Seletores profundamente aninhados.
- `!important`, exceto em caso documentado de acessibilidade ou integração externa.
- JavaScript para decisões que CSS responsivo resolve.

## 8. Dados reutilizáveis e conteúdo

### `site-config.ts`

Concentrará dados usados em diferentes áreas:

- nome profissional;
- profissão;
- CRP;
- cidade e estado;
- modalidades;
- URL canônica;
- telefone do WhatsApp em formato internacional;
- mensagem inicial;
- e-mail, se aprovado;
- redes profissionais, se aprovadas;
- prazo de resposta, se confirmado.

### `landing-page.ts`

Concentrará conteúdo estruturado:

- navegação;
- hero;
- temas de acompanhamento;
- apresentação;
- credenciais;
- princípios da TCC;
- etapas;
- modalidades;
- informações práticas;
- FAQ;
- contato final;
- rodapé.

### Tipagem

`types/content.ts` definirá somente os formatos que evitam inconsistências, como:

- item de navegação;
- tema de acompanhamento;
- credencial;
- etapa;
- modalidade;
- pergunta frequente.

### Regras

- Não usar CMS no primeiro lançamento.
- Não manter a mesma copy duplicada no JSX e nos arquivos de conteúdo.
- Conteúdo exclusivo e muito curto pode permanecer no componente se nunca for reutilizado; a centralização não deve gerar complexidade artificial.
- Dados marcados como pendentes em `COPY.md` não entram na versão pública até serem validados.
- Alterações editoriais devem exigir modificação em poucos arquivos previsíveis.

## 9. Assets

### Fotografias

Armazenar fotografias importadas pelo código em `src/assets/images/`. O import estático permite que o framework conheça as dimensões e ajuda a evitar mudança de layout.

Nomes devem ser descritivos e estáveis:

- `mariana-hero.jpg`;
- `mariana-sobre.jpg`.

Não usar nomes como `IMG_1048.jpg`, `foto-final-2.jpg` ou múltiplas cópias da mesma imagem.

### Ícones

Ícones estáticos simples ficam em `public/icons/`.

- Manter apenas os ícones realmente usados.
- Usar SVG otimizado e confiável.
- Não instalar biblioteca de ícones para cinco ou seis símbolos.
- Ícones funcionais precisam de nome acessível quando não estiverem acompanhados de texto.
- Ícones decorativos devem ser ignorados por tecnologias assistivas.

### Fontes

- Armazenar WOFF2 em `src/assets/fonts/`.
- Usar somente os pesos necessários.
- Registrar origem e licença em `LICENSES.md`.
- Carregar Newsreader para títulos e Inter para interface e leitura.
- Preferir subconjunto latino que preserve integralmente o português.

### Arquivos públicos

Usar `public/` apenas para arquivos que precisam de URL direta e nome estável, como ícones simples ou arquivos de verificação de domínio. Metadados com convenções do App Router permanecem em `src/app/`.

## 10. Tratamento de imagens

### Processo antes da inclusão

1. Selecionar somente fotografia autorizada.
2. Corrigir enquadramento e cor sem alterar características pessoais.
3. Remover metadados desnecessários, inclusive EXIF de localização.
4. Gerar um arquivo-fonte em qualidade suficiente, sem dimensões excessivas.
5. Validar o ponto focal em desktop e celular.

### Renderização

- Usar `next/image`.
- Declarar `sizes` coerente com o grid real.
- Reservar proporção e dimensões para impedir CLS.
- Priorizar apenas a imagem que for realmente o LCP do hero.
- Carregar imagens abaixo da dobra sob demanda.
- Usar `object-fit` e `object-position` definidos por imagem, não um recorte genérico.
- Manter `alt` descritivo na fotografia profissional; imagens meramente decorativas usam texto alternativo vazio.

O Next.js oferece otimização automática de imagens na Vercel, incluindo prevenção de layout shift e formatos modernos, conforme o [checklist oficial de produção](https://nextjs.org/docs/app/guides/production-checklist). O Google recomenda nomes descritivos e texto alternativo contextualizado, sem repetição artificial de palavras-chave: [boas práticas de SEO para imagens](https://developers.google.com/search/docs/appearance/google-images).

### Orçamento recomendado

- Uma imagem principal no hero.
- No máximo uma segunda imagem na seção “Sobre”.
- Evitar imagem de fundo em tela cheia.
- Evitar PNG para fotografias.
- Avaliar qualidade visual pelo tamanho efetivamente renderizado, não manter originais enormes em produção.

## 11. Integração com WhatsApp

### Funcionamento

Todos os CTAs utilizarão o formato oficial de link direto baseado em número internacional, com a mensagem inicial codificada na URL.

### Fonte única

A função em `lib/whatsapp.ts` será responsável por:

- normalizar o número para somente dígitos;
- codificar a mensagem;
- produzir a mesma URL em todos os CTAs;
- impedir divergências entre cabeçalho, hero, atendimento, FAQ e contato final.

### Dados

- Número: `site-config.ts`.
- Mensagem: `site-config.ts`.
- Rótulo do botão: definido pelo contexto da seção.
- O número não é segredo e não precisa de variável de ambiente.

### Comportamento

- Usar link real e funcional sem JavaScript.
- Informar no nome acessível que o destino é o WhatsApp.
- Se abrir nova aba, avisar por texto acessível e aplicar atributos de segurança adequados.
- Não incluir relato clínico ou campo sensível na mensagem predefinida.
- Não usar widget flutuante de terceiros.
- Não incorporar chat, rastreador ou SDK do WhatsApp.

### Rastreamento

No primeiro lançamento, não adicionar analytics apenas para contar cliques. Se métricas forem aprovadas posteriormente, registrar somente o evento e a posição do CTA, sem mensagem, telefone ou qualquer conteúdo potencialmente sensível.

## 12. Formulário

### Decisão para o primeiro lançamento

**Não implementar formulário.**

Motivos:

- o objetivo já define WhatsApp como canal principal;
- o documento de estrutura recomenda evitar um formulário redundante;
- o formulário exigiria destino de mensagens, validação, proteção contra spam, política de retenção, consentimento e tratamento de falhas;
- a coleta de nome e contato amplia responsabilidade sobre dados pessoais;
- manter dois canais principais pode confundir a jornada e a operação.

A microcopy existente em `COPY.md` fica reservada para uma fase futura.

### Arquitetura futura, se houver necessidade comprovada

Caso o formulário seja aprovado posteriormente:

- usar formulário HTML nativo com melhoria progressiva;
- processar em Server Action ou Route Handler do próprio Next.js;
- validar novamente no servidor, sem depender apenas do navegador;
- manter os campos mínimos: nome, contato, assunto e mensagem opcional;
- não solicitar informações clínicas ou de saúde;
- adicionar consentimento e Política de Privacidade revisados;
- incluir limite de requisições, honeypot e proteção contra abuso;
- enviar a mensagem por um único provedor transacional aprovado;
- não armazenar conteúdo em banco sem necessidade operacional e política definida;
- exibir estados de envio, sucesso e erro já descritos na copy;
- registrar falhas técnicas sem gravar o conteúdo sensível da mensagem.

Nenhum pacote de formulário ou validação deve ser instalado antes dessa decisão.

## 13. SEO técnico

### Conteúdo e semântica

- Um único `h1`.
- Hierarquia sequencial de títulos.
- `header`, `nav`, `main`, `section`, `address` quando apropriado e `footer`.
- Links com texto descritivo.
- Conteúdo principal presente no HTML.
- Cidade, modalidade, profissão e abordagem presentes de forma natural.
- Sem blocos invisíveis de palavras-chave.

O Google recomenda conteúdo visível no DOM, HTML semântico, títulos e descrições claros, sitemap e links rastreáveis: [guia técnico de SEO](https://developers.google.com/search/docs/fundamentals/get-started-developers).

### Metadata API

Definir no layout ou na página:

- título;
- descrição;
- `metadataBase` com domínio definitivo;
- URL canônica;
- idioma `pt-BR`;
- Open Graph textual;
- Twitter/X textual;
- política de indexação;
- ícones.

Usar a copy proposta em `COPY.md` após validação editorial. A Metadata API do Next.js gera as tags correspondentes no documento e suporta convenções próprias para ícones, robots, sitemap e imagens sociais: [documentação oficial](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).

### Sitemap e robots

- `sitemap.ts` terá somente a URL canônica da página enquanto o projeto possuir uma rota pública.
- `robots.ts` permitirá indexação em produção.
- Ambientes de preview devem permanecer protegidos ou sem indexação por configuração da plataforma, evitando conteúdo duplicado.
- Atualizar `lastModified` somente quando houver mudança real, não a cada build.

O App Router possui convenção específica para gerar sitemap: [documentação de sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap).

### Dados estruturados

Adicionar JSON-LD somente com informações reais e visíveis na página.

- `Person` para a profissional.
- `ProfessionalService` ou o subtipo local mais adequado apenas após confirmar endereço, telefone e natureza do estabelecimento.
- Informar nome, URL, profissão, cidade, telefone público e imagem somente quando validados.
- Não incluir avaliações, notas, número de pacientes ou credenciais não exibidas.
- Não implementar marcação de FAQ apenas para tentar obter destaque em buscas.

Dados estruturados ajudam mecanismos de busca a compreender o conteúdo, mas não garantem resultados enriquecidos. O Google recomenda JSON-LD e exige que a marcação represente o conteúdo visível: [diretrizes gerais](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) e [dados de negócio local](https://developers.google.com/search/docs/appearance/structured-data/local-business).

### SEO local

Após publicação com dados reais:

- configurar domínio próprio;
- verificar o site no Google Search Console;
- enviar sitemap;
- criar ou revisar o Perfil da Empresa no Google, se aplicável ao atendimento presencial;
- manter nome, contato e localização consistentes entre site e perfis oficiais.

O Google recomenda Search Console, dados estruturados coerentes e um Perfil da Empresa verificado para estabelecer a presença oficial: [orientações para dados de negócio](https://developers.google.com/search/docs/appearance/establish-business-details).

## 14. Acessibilidade

### Estrutura

- Link “Pular para o conteúdo”.
- Landmarks semânticos.
- Uma ordem de leitura coerente entre desktop e mobile.
- Títulos que representem o assunto das seções.
- Navegação por teclado em todos os controles.

### Componentes

- Links usados para navegação; botões usados para ações.
- FAQ com `details` e `summary` ou implementação equivalente plenamente acessível.
- Menu móvel com controle de foco e estado anunciado, caso use JavaScript.
- Ícones nunca serão a única forma de identificar uma ação importante.
- Fotografias informativas terão texto alternativo objetivo.

### Visual

- Aplicar os contrastes definidos em `DESIGN_SYSTEM.md`.
- Corpo de texto com pelo menos 16 px.
- Foco visível.
- Área de toque mínima de 44 × 44 px.
- Suporte a ampliação de 200% sem perda de informação.
- Não comunicar estados apenas por cor.

### Movimento

- Respeitar `prefers-reduced-motion`.
- Não usar rolagem controlada por biblioteca.
- Evitar parallax, revelações em cascata e animações essenciais à compreensão.

### Validação

- Teste por teclado.
- Teste com leitor de tela em pelo menos um ambiente.
- Auditoria automatizada como apoio, não como única verificação.
- Testes em zoom de 200%, alto contraste e largura de 320 px.

## 15. Performance

### Metas

Usar como referência em dados de campo:

- LCP até 2,5 segundos;
- INP abaixo de 200 milissegundos;
- CLS abaixo de 0,1.

Esses são os limiares recomendados pelo Google para uma boa experiência nos Core Web Vitals: [documentação oficial](https://developers.google.com/search/docs/appearance/core-web-vitals).

### Orçamento técnico inicial

- JavaScript próprio no cliente: próximo de zero.
- Nenhum script de terceiros bloqueando renderização.
- Uma imagem priorizada no primeiro campo visual.
- No máximo duas famílias tipográficas e somente os pesos utilizados.
- Nenhum vídeo, carrossel ou mapa incorporado.
- Nenhum widget externo de WhatsApp.
- Sem preloader ou tela de abertura.

### Controles

- Reservar dimensões de imagens para evitar CLS.
- Carregar fontes localmente e com estratégia que não bloqueie o conteúdo.
- Evitar reexportações amplas e dependências utilitárias.
- Analisar o bundle se JavaScript do cliente crescer.
- Testar em rede móvel simulada e aparelho intermediário.
- Não perseguir pontuação removendo semântica, acessibilidade ou conteúdo essencial.

## 16. Responsividade

### Mobile-first

Os estilos partem de uma coluna e evoluem para os grids definidos em `DESIGN_SYSTEM.md`.

- Mobile: 4 colunas, margem de 20 px e seções empilhadas.
- Tablet: 8 colunas, margem de 32 px e cards em até duas colunas.
- Desktop: 12 colunas, container principal de 1.200 px.

### Imagens

- Definir recortes e ponto focal por breakpoint.
- Não esconder a única fotografia informativa no mobile.
- Não carregar uma segunda imagem quando ela estiver apenas oculta por CSS.

### Conteúdo

- Manter a mesma ordem semântica em todas as telas.
- Evitar duplicação de markup para desktop e mobile.
- Não usar carrossel em telas pequenas.
- CTA pode ocupar a largura disponível no mobile.
- Botão persistente só será adotado após validar que não encobre FAQ, rodapé ou controles do navegador.

## 17. Segurança e privacidade

### Primeiro lançamento

- Não coletar dados no site.
- Não expor variáveis secretas.
- Não adicionar cookies não essenciais.
- Não usar pixel de publicidade.
- Não enviar conteúdo sensível em eventos de métricas.
- Informar claramente que o WhatsApp é um serviço externo e um canal de informações e agendamento.

### Configuração

- Arquivos `.env*` reais devem permanecer ignorados pelo Git.
- Apenas valores destinados ao navegador recebem prefixo público, caso surja essa necessidade.
- Cabeçalhos de segurança devem ser configurados de forma compatível com fontes, imagens e links externos realmente usados.
- Dependências devem ser revisadas e atualizadas deliberadamente, sem atualizações automáticas não testadas em produção.

## 18. Estratégia de deploy na Vercel

### Fluxo recomendado

1. Inicializar repositório Git.
2. Hospedar o repositório no provedor escolhido.
3. Importar o repositório como projeto na Vercel.
4. Permitir detecção automática do Next.js.
5. Usar `main` como branch de produção.
6. Gerar preview para branches e pull requests.
7. Revisar conteúdo, responsividade, acessibilidade e links no preview.
8. Fazer merge em `main` somente após aprovação.
9. Associar domínio próprio e definir a URL canônica.
10. Validar HTTPS, sitemap, robots e Search Console após publicação.

A integração Git da Vercel cria previews por branch ou pull request e publica a branch de produção após o merge: [documentação de deploy via Git](https://vercel.com/docs/git). Next.js possui deploy com configuração mínima na plataforma: [Next.js na Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs).

### Configuração de build

- Framework preset: Next.js, detectado automaticamente.
- Instalação: `npm ci` quando o lockfile estiver presente.
- Build: script padrão `next build`.
- Diretório de saída: gerenciado pelo framework.
- Região de funções: irrelevante no primeiro lançamento estático.

### Ambientes

#### Local

Desenvolvimento e validações iniciais.

#### Preview

Revisão visual, editorial e funcional. Não deve ser tratado como URL pública definitiva nem indexado.

#### Production

Somente conteúdo aprovado, domínio canônico e dados reais.

### Variáveis de ambiente

Nenhuma variável é necessária no primeiro lançamento se o número do WhatsApp estiver em `site-config.ts`.

Se formulário, analytics ou serviço externo forem aprovados depois:

- separar valores por ambiente;
- nunca expor chaves secretas ao cliente;
- documentar cada variável em `.env.example` sem incluir seu valor real.

### Rollback

Manter deploys imutáveis da Vercel e histórico Git. Em caso de problema, promover um deploy anterior validado ou reverter o commit, sem editar diretamente os arquivos de produção.

## 19. Qualidade e validação antes do deploy

### Build

- Instalação reproduzível com lockfile.
- Build de produção sem erro.
- Verificação de tipos.
- Lint sem erros relevantes.
- Ausência de imports e assets quebrados.

### Conteúdo

- Nenhum texto entre colchetes publicado.
- Dados profissionais confirmados.
- Links de WhatsApp testados em celular e desktop.
- Mensagem predefinida correta e editável.
- Informações de urgência e privacidade aprovadas.

### SEO

- Título, descrição e canonical corretos.
- Uma única H1.
- Sitemap e robots acessíveis.
- JSON-LD validado, se adotado.
- Preview sem indexação e produção indexável.
- Imagens com nomes e textos alternativos adequados.

### Acessibilidade

- Navegação completa por teclado.
- Foco visível.
- Ordem de títulos coerente.
- FAQ operável.
- Zoom de 200%.
- Leitor de tela.
- Contraste e áreas de toque.

### Performance

- Lighthouse como diagnóstico local e no preview.
- PageSpeed Insights após publicação.
- Teste de layout em rede lenta.
- Ausência de mudança visual causada por fontes ou imagens.
- Verificação dos Core Web Vitals em dados reais quando houver tráfego suficiente.

## 20. Evolução prevista

### Fase 1 — recomendada

- Landing Page estática.
- WhatsApp.
- SEO técnico.
- Dados estruturados mínimos e validados.
- Sem formulário, CMS ou analytics.

### Fase 2 — somente com necessidade comprovada

- Métricas de conversão com solução compatível com privacidade.
- Formulário complementar.
- Política de Privacidade ampliada.
- Provedor transacional para mensagens.

### Fase 3 — apenas se o conteúdo crescer

- Páginas institucionais separadas.
- Conteúdo educativo ou blog.
- CMS, somente se a profissional realmente publicar com frequência.
- Sitemap com múltiplas rotas.

Não preparar infraestrutura das fases futuras dentro da Fase 1.

## 21. Decisões finais

| Tema                  | Decisão                                                    |
| --------------------- | ---------------------------------------------------------- |
| Stack                 | Next.js App Router + TypeScript                            |
| Renderização          | Estática no build                                          |
| Componentes           | Server Components por padrão                               |
| JavaScript do cliente | Mínimo; possivelmente nenhum na página inicial             |
| Estilos               | CSS global com tokens + CSS Modules                        |
| UI externa            | Nenhuma biblioteca                                         |
| Ícones                | SVGs locais selecionados                                   |
| Fontes                | Newsreader e Inter locais via `next/font/local`            |
| Conteúdo              | Objetos TypeScript tipados                                 |
| Imagens               | Imports locais + `next/image`                              |
| Conversão             | Links diretos para WhatsApp                                |
| Formulário            | Fora do primeiro lançamento                                |
| SEO                   | Metadata API, canonical, sitemap, robots e JSON-LD factual |
| Analytics             | Fora do primeiro lançamento                                |
| Deploy                | Git integrado à Vercel, previews e produção em `main`      |
| Manutenção            | Conteúdo centralizado, dependências mínimas e sem CMS      |

## 22. Critério de sucesso técnico

A arquitetura estará bem aplicada quando a página puder ser construída, mantida e publicada sem infraestrutura desnecessária; entregar conteúdo completo no HTML; funcionar integralmente por teclado; carregar rapidamente em uma conexão móvel; preservar estabilidade visual; apresentar metadados corretos; e direcionar ao WhatsApp sem depender de scripts ou widgets de terceiros.
