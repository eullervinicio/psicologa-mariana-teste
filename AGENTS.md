# Manual permanente para agentes

Este arquivo orienta qualquer agente que trabalhe neste projeto. A Landing Page apresenta uma psicóloga e direciona contatos para o WhatsApp. Credibilidade, clareza, acessibilidade, privacidade e respeito ao visitante têm prioridade sobre efeitos visuais ou técnicas de conversão agressivas.

## 1. Fontes de verdade

Antes de qualquer alteração importante, leia os documentos relevantes em `docs/`:

- `docs/BRIEFING.md`: objetivo, público, posicionamento e restrições gerais;
- `docs/ESTRATEGIA.md`: jornada, objeções, confiança e conversão;
- `docs/ESTRUTURA.md`: ordem, função e conteúdo das seções;
- `docs/COPY.md`: textos, CTAs, FAQ, microcopy e pendências editoriais;
- `docs/DESIGN_SYSTEM.md`: cores, tipografia, grid, componentes e responsividade;
- `docs/ARQUITETURA.md`: stack, pastas, renderização, assets, SEO e deploy.

Não presuma que um resumo anterior continua atualizado. Confira os arquivos no início da tarefa e releia integralmente qualquer documento diretamente afetado.

Em caso de dúvida ou aparente conflito:

1. siga o pedido atual do usuário;
2. preserve as decisões específicas do documento responsável pelo tema;
3. não altere silenciosamente uma decisão de produto, conteúdo, design ou arquitetura;
4. peça confirmação quando a escolha exigir informações profissionais, legais ou operacionais ainda não fornecidas.

## 2. Escopo e segurança das alterações

- Modifique apenas o que for necessário para o pedido atual.
- Não faça refatorações, atualizações de dependências ou mudanças visuais não relacionadas.
- Preserve alterações existentes do usuário e não reverta arquivos sem autorização.
- Inspecione o estado atual antes de editar; não suponha que a estrutura planejada já foi implementada.
- Prefira mudanças pequenas, compreensíveis e fáceis de revisar.
- Não publique, conecte serviços, configure domínio ou crie recursos externos sem solicitação explícita.
- Não remova conteúdo ou assets por parecerem inutilizados sem confirmar suas referências e o escopo do pedido.
- Registre novas decisões permanentes no documento correspondente em `docs/` quando o usuário solicitar ou quando isso fizer parte clara da tarefa.

## 3. Conteúdo e responsabilidade profissional

- Não invente nome, CRP, formação, especialização, experiência, endereço, horários, honorários, políticas, prazo de resposta ou formas de atendimento.
- Não substitua dados da Dra. Mariana Alves sem autorização explícita.
- Trate os dados atuais como fictícios até confirmação do usuário.
- Não publique textos entre colchetes de `docs/COPY.md`; eles representam informações pendentes.
- Não diagnostique o visitante.
- Não prometa cura, resultado, prazo ou transformação garantida.
- Não use medo, urgência artificial, escassez de vagas, contadores ou pressão comercial.
- Não use textos genéricos, clichês de saúde mental ou slogans grandiosos.
- Preserve o tom humano, acolhedor, profissional, claro, elegante e natural.
- Não exponha relatos clínicos, dados sensíveis ou informações pessoais em mensagens, métricas, logs ou URLs.
- Depoimentos, avaliações, casos clínicos, números de pacientes e credenciais só podem aparecer após autorização e validação apropriadas.
- Conteúdo sobre urgência, emergência, privacidade ou obrigações profissionais deve ser validado antes da publicação.

## 4. Estrutura da experiência

Preserve a jornada definida:

1. Cabeçalho;
2. Apresentação principal;
3. Identificação com o visitante;
4. Sobre a psicóloga;
5. Abordagem terapêutica;
6. Como funciona o atendimento;
7. Perguntas frequentes;
8. Contato final;
9. Rodapé.

Regras:

- Não crie seções redundantes para áreas de atuação, modalidades, confiança ou contato sem necessidade aprovada.
- Mantenha o WhatsApp como conversão principal.
- Use CTAs nos momentos definidos, sem repetir um botão ao final de toda seção.
- Preserve a autonomia do visitante e explique o que acontece após o contato.
- Não adicione formulário ao primeiro lançamento. A microcopy de formulário está reservada para uma fase futura.
- Não adicione blog, CMS, depoimentos, mapas, carrosséis, widgets ou novas rotas sem demanda real.

## 5. Identidade visual

- Siga `docs/DESIGN_SYSTEM.md`; ele é a referência visual obrigatória.
- Preserve o conceito “serenidade editorial com presença humana”.
- Use os tokens definidos, evitando cores, sombras, raios e espaçamentos isolados.
- Mantenha azul-petróleo como cor institucional e terracota como acento de conversão.
- Preserve Newsreader para títulos e Inter para interface e leitura, salvo alteração aprovada.
- Evite cores saturadas, gradientes chamativos, sombras fortes e excesso de bordas.
- Não transforme cada conteúdo em card.
- Não use aparência hospitalar, visual infantil ou estética de template genérico.
- Não use cérebro, quebra-cabeça, jaleco, sofrimento encenado ou ornamentos botânicos genéricos como identidade.
- Use somente fotografias autorizadas, naturais e coerentes com o tratamento definido.
- Não gerar, substituir ou editar a imagem da profissional sem autorização específica.

## 6. Arquitetura técnica

Siga `docs/ARQUITETURA.md`:

- Next.js com App Router e TypeScript estrito;
- conteúdo pré-renderizado no build;
- Server Components por padrão;
- JavaScript no cliente somente quando HTML e CSS não forem suficientes;
- CSS global para tokens e CSS Modules para escopo local;
- conteúdo e dados recorrentes centralizados e tipados;
- imagens locais com `next/image`;
- fontes locais com `next/font/local`;
- npm e `package-lock.json`;
- deploy na Vercel por integração Git.

Não configure exportação estática pura, backend, banco de dados, CMS ou runtime dinâmico sem necessidade aprovada.

## 7. Dependências e componentes

- Evite dependências novas. Antes de instalar algo, verifique se a plataforma, o navegador ou o código existente já resolvem o problema.
- Não adicione bibliotecas de UI, ícones, animação, estado, formulário, validação, HTTP, analytics ou SEO por conveniência.
- Qualquer nova dependência deve ter benefício claro, escopo necessário e custo de manutenção justificado.
- Preserve as versões e o lockfile existentes, salvo quando a tarefa exigir mudança.
- Não execute inicializadores sobre um projeto existente.
- Priorize componentes reutilizáveis quando houver pelo menos duas utilizações realmente equivalentes.
- Evite abstrações prematuras como componentes genéricos para cada `div`, grid, texto ou card.
- Componentes devem ter responsabilidade clara, nomes descritivos e propriedades estritamente necessárias.
- Não duplique telefone, mensagem do WhatsApp, credenciais ou copy em vários arquivos.
- Mantenha o código simples, tipado, legível e próximo dos padrões do framework.

## 8. WhatsApp e dados

- Todos os CTAs devem usar a mesma fonte de número e mensagem.
- Gere a URL do WhatsApp em uma função única.
- Use um link real, funcional sem JavaScript e com nome acessível.
- Não use widget, SDK ou chat incorporado de terceiros.
- Não inclua informação sensível na mensagem predefinida.
- Não trate o WhatsApp como canal de urgência ou emergência.
- O número só pode ser trocado após confirmação do usuário.
- Se métricas forem aprovadas, nunca registre telefone, mensagem ou conteúdo potencialmente sensível.

## 9. Acessibilidade

A acessibilidade é requisito de entrega, não melhoria opcional.

- Use HTML semântico e landmarks adequados.
- Mantenha uma única `h1` e hierarquia coerente de títulos.
- Inclua link para pular ao conteúdo.
- Use links para navegação e botões para ações.
- Garanta operação completa por teclado.
- Preserve foco visível.
- Mantenha áreas de toque com pelo menos 44 × 44 px.
- Não use cor como único indicador de significado ou estado.
- Forneça texto alternativo útil para imagens informativas e vazio para imagens decorativas.
- Controles com ícones precisam de nome acessível.
- Corpo de texto não deve ficar abaixo de 16 px.
- O layout deve suportar zoom de 200% e telas de 320 px sem perda de conteúdo.
- Respeite `prefers-reduced-motion`.
- Prefira controles nativos, como `details` e `summary`, quando atenderem à experiência.

## 10. Responsividade

- Desenvolva mobile-first.
- Preserve a mesma ordem semântica entre mobile e desktop.
- Não duplique markup para diferentes breakpoints.
- Siga os grids de 4, 8 e 12 colunas do Design System.
- Evite rolagem horizontal, conteúdo cortado e CTAs encobertos.
- Não esconda no mobile informações essenciais ou a única fotografia informativa.
- Defina `sizes`, dimensões e ponto focal adequados para imagens responsivas.
- Valide o cabeçalho, menu, FAQ, CTAs e rodapé em telas pequenas.
- Remova ornamentos opcionais antes de comprimir texto ou controles.

## 11. SEO

- Preserve conteúdo principal no HTML inicial.
- Mantenha título, descrição, canonical, idioma e metadados coerentes com a copy aprovada.
- Preserve `robots` e sitemap corretos para o ambiente.
- Ambientes de preview não devem competir com a URL de produção em indexação.
- Use cidade, profissão, modalidade e abordagem de forma natural, sem repetição artificial.
- Mantenha links rastreáveis e textos descritivos.
- Dados estruturados devem refletir somente informações verdadeiras e visíveis.
- Não invente avaliações, notas, endereço ou credenciais em JSON-LD.
- Não adicione FAQ schema apenas para tentar obter destaque em buscas.
- Não crie imagem social ou metadado de imagem sem asset aprovado.
- Ao alterar copy, estrutura, domínio ou assets principais, revise também os metadados relacionados.

## 12. Performance

- Preserve a página predominantemente estática.
- Evite Client Components sem necessidade.
- Não adicione scripts de terceiros bloqueantes.
- Não use vídeo, carrossel, mapa incorporado, preloader ou animações pesadas.
- Priorize apenas a imagem LCP; carregue imagens abaixo da dobra sob demanda.
- Reserve dimensões para evitar mudanças de layout.
- Use somente pesos de fonte necessários.
- Não mantenha imagens originais excessivamente grandes em produção.
- Proteja as metas de Core Web Vitals: LCP até 2,5 s, INP abaixo de 200 ms e CLS abaixo de 0,1.
- Se a mudança aumentar JavaScript, imagens ou fontes, meça seu impacto antes de concluir.

## 13. Estilo de implementação

- Prefira soluções nativas do Next.js, React, HTML e CSS.
- Use TypeScript estrito e evite `any` sem justificativa documentada.
- Centralize constantes compartilhadas.
- Use nomes que expressem função, não aparência circunstancial.
- Mantenha arquivos pequenos o suficiente para leitura, sem fragmentar excessivamente.
- Remova código morto criado pela própria alteração.
- Não deixe comentários que apenas repetem o código.
- Comente decisões não óbvias, restrições ou cuidados de privacidade.
- Não introduza placeholders visíveis, dados falsos adicionais ou texto de demonstração em produção.
- Preserve os padrões existentes antes de criar um padrão novo.

## 14. Testes e validação

Após qualquer alteração, execute verificações proporcionais ao risco. No mínimo:

- revisar o diff e confirmar que somente o escopo solicitado mudou;
- executar verificação de tipos;
- executar lint;
- executar build de produção;
- testar links e âncoras afetados;
- testar todos os CTAs de WhatsApp afetados;
- verificar ausência de imports, assets e rotas quebradas.

Quando houver alteração visual ou de interação, também:

- validar mobile, tablet e desktop;
- navegar apenas com teclado;
- verificar foco visível;
- testar zoom de 200% e largura de 320 px;
- verificar contraste e redução de movimento;
- conferir ausência de overflow e mudanças inesperadas de layout.

Quando houver alteração de conteúdo ou SEO, também:

- conferir títulos e hierarquia;
- revisar metadados, canonical, robots, sitemap e JSON-LD relacionados;
- confirmar que nenhum placeholder ou dado inventado foi publicado;
- revisar o texto no contexto completo da página.

Não declare sucesso se os testes relevantes não foram executados. Se algum teste não puder ser realizado, informe claramente a limitação.

## 15. Prevenção de regressões

- Compare o comportamento antes e depois da mudança.
- Preserve contratos de componentes e dados sempre que possível.
- Não altere estilos globais para corrigir um caso local sem avaliar o impacto geral.
- Verifique cabeçalho, hero, FAQ, contato e rodapé após mudanças em tokens ou layout.
- Revise as versões mobile e desktop após qualquer alteração estrutural.
- Não corrija um problema de acessibilidade criando outro problema visual, nem o inverso.
- Mantenha fallback funcional quando JavaScript falhar.
- Evite mudar simultaneamente arquitetura, copy e design quando o pedido tratar de apenas uma dessas áreas.

## 16. Git, deploy e entrega

- Não faça commit, push ou deploy sem solicitação explícita.
- Não altere configuração da Vercel ou domínio fora do escopo solicitado.
- Preserve `package-lock.json` e use instalação reproduzível.
- Nunca inclua segredos ou arquivos `.env` reais no repositório.
- Antes de deploy autorizado, validar build, conteúdo, SEO, acessibilidade, responsividade e WhatsApp.
- Use preview para revisão antes de produção.
- A branch de produção deve conter apenas conteúdo aprovado e dados reais.
- Ao concluir, informe arquivos alterados, verificações executadas e qualquer pendência relevante.

## 17. Checklist rápido antes de finalizar

- Li os documentos relevantes em `docs/`?
- Alterei somente o que foi pedido?
- Preservei identidade visual, estrutura e copy aprovadas?
- Evitei informações profissionais inventadas?
- Mantive WhatsApp, acessibilidade, responsividade e SEO funcionando?
- Evitei dependências e JavaScript desnecessários?
- Preservei performance e privacidade?
- Testei o escopo alterado e revisei o diff?
- Deixei alguma pendência ou limitação claramente registrada?

Se qualquer resposta for “não”, a tarefa ainda não está pronta para entrega.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Git e commits automáticos

Após concluir com sucesso qualquer alteração solicitada neste projeto:

1. Faça automaticamente `git add` SOMENTE dos arquivos modificados pela tarefa atual.
2. Crie automaticamente um commit Git.
3. Use uma mensagem de commit curta e descritiva, relacionada exatamente à alteração realizada.
4. Não espere que eu peça para fazer o commit.
5. Não me peça para executar o commit manualmente.
6. Não inclua no commit alterações antigas ou não relacionadas à tarefa atual.
7. Se a tarefa falhar, estiver incompleta ou houver erro que impeça uma implementação correta, NÃO faça commit.
8. Não faça commits intermediários desnecessários; normalmente faça um único commit ao concluir a tarefa.
9. Após o commit, informe apenas de forma breve qual commit foi criado.

## Economia de tokens

Para alterações pequenas:

- faça o menor diff possível;
- não analise o projeto inteiro sem necessidade;
- abra somente os arquivos necessários;
- não faça refatorações fora do escopo;
- não execute verificações pesadas quando não forem necessárias;
- evite explicações longas.

## Push automático para produção

Após concluir com sucesso qualquer alteração solicitada neste projeto:

1. Siga normalmente as regras existentes de `git add` e commit automático.
2. Após criar o commit, faça automaticamente push para a branch `main`.
3. Use o remoto Git já configurado no projeto.
4. Não espere que eu peça para fazer o push.
5. Não me peça para executar o push manualmente.
6. Não use `--force` ou `--force-with-lease`.
7. Nunca sobrescreva alterações remotas de forma destrutiva.
8. Se houver conflito Git, divergência de branch, falha de autenticação ou qualquer erro durante o push:
   - NÃO force nenhuma operação;
   - pare;
   - informe brevemente o problema.
9. Se a implementação estiver incompleta ou apresentar erro relevante, NÃO faça push.
10. Não faça commits ou pushes intermediários desnecessários.
11. Normalmente faça apenas:
    alteração → git add dos arquivos da tarefa → commit → push para main.
12. Como a branch `main` está conectada à Vercel, não execute deploy manual da Vercel. O push deverá disparar o deploy automaticamente.
13. Após um push bem-sucedido, responda de forma curta informando:

- commit criado;
- confirmação de push para `main`.

14. Após isso, PARE.

## Segurança do Git

- Nunca executar `git reset --hard`.
- Nunca executar `git clean -fd`.
- Nunca fazer force push.
- Nunca apagar commits existentes.
- Nunca incluir no commit arquivos ou alterações não relacionados à tarefa atual.
