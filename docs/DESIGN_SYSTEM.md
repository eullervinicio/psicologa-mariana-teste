# Design System — Landing Page da Dra. Mariana Alves

## 1. Conceito visual

### Direção central

**Serenidade editorial com presença humana.**

O sistema combina a solidez de um azul-petróleo profundo, o calor contido de um terracota queimado e fundos claros levemente minerais. A tipografia une uma serifada editorial nos títulos a uma fonte sem serifa muito legível nos textos e controles.

O resultado deve transmitir cuidado e competência sem parecer clínico, informal ou excessivamente delicado. A personalidade virá da composição, da tipografia e da fotografia real — não de muitos adornos.

### Princípios

1. **Clareza antes da decoração:** cada decisão visual deve apoiar leitura, orientação ou contato.
2. **Calma com contraste:** a interface pode ser suave sem usar textos apagados ou ações ambíguas.
3. **Elegância contida:** poucos recursos, aplicados com consistência e espaço.
4. **Humanidade autêntica:** fotografia real, linguagem visual natural e ausência de clichês terapêuticos.
5. **Conversão respeitosa:** o WhatsApp recebe destaque suficiente, sem animações insistentes ou repetição excessiva.
6. **Mobile como referência:** a experiência deve permanecer completa, legível e confortável em telas pequenas.

## 2. Paleta principal

A paleta principal usa azul-petróleo para comunicar confiança, estabilidade e profundidade sem recorrer ao azul hospitalar tradicional.

| Token        | Cor       | Uso recomendado                                    |
| ------------ | --------- | -------------------------------------------------- |
| Petróleo 950 | `#0E2C2E` | Rodapé, fundos escuros especiais                   |
| Petróleo 900 | `#173F43` | Marca, títulos sobre fundos claros, seções escuras |
| Petróleo 800 | `#23565A` | Hover de elementos primários, ícones de destaque   |
| Petróleo 700 | `#316B6E` | Elementos informativos e detalhes controlados      |
| Petróleo 500 | `#679597` | Ilustrações abstratas mínimas, divisores especiais |
| Petróleo 200 | `#C4DAD7` | Fundos sutis, estados selecionados suaves          |
| Petróleo 100 | `#E1ECEA` | Cards tonais e áreas de apoio                      |
| Petróleo 50  | `#F2F6F5` | Fundo alternativo de seção                         |

### Regras de uso

- Petróleo 900 é a cor institucional principal.
- Petróleo 950 deve aparecer em áreas pequenas ou no rodapé, evitando uma página visualmente pesada.
- Petróleo 500 e tons mais claros não devem ser usados em texto corrido sobre fundo claro.
- Grandes superfícies coloridas devem usar somente Petróleo 950, 900, 100 ou 50.

## 3. Paleta secundária

O terracota queimado adiciona proximidade e calor. Ele diferencia as ações de contato da identidade institucional sem adquirir aparência promocional.

| Token         | Cor       | Uso recomendado                                    |
| ------------- | --------- | -------------------------------------------------- |
| Terracota 800 | `#873C2D` | Hover e active de CTA                              |
| Terracota 700 | `#A4513E` | CTA principal e links de alta intenção             |
| Terracota 600 | `#B8644F` | Pequenos acentos gráficos                          |
| Terracota 300 | `#DDAF9F` | Detalhes discretos e indicadores decorativos       |
| Terracota 100 | `#F3DED7` | Fundo de destaque suave                            |
| Terracota 50  | `#FBF3F0` | Fundo muito leve para contato ou aviso não crítico |

### Cor auxiliar mineral

Uma pequena família mineral pode apoiar informações neutras. Ela não constitui uma terceira cor de marca.

| Token       | Cor       | Uso recomendado                               |
| ----------- | --------- | --------------------------------------------- |
| Mineral 300 | `#C9C0B4` | Detalhes editoriais raros                     |
| Mineral 100 | `#ECE7DF` | Separadores quentes e superfícies secundárias |
| Mineral 50  | `#F7F4EF` | Alternância sutil de fundo                    |

### Regras de uso

- Terracota 700 é reservado principalmente a ações e pequenos pontos de ênfase.
- Não usar terracota em grandes áreas simultaneamente com fotografia quente; o conjunto pode ficar excessivamente terroso.
- Não combinar petróleo, terracota e mineral em proporções iguais. A proporção visual recomendada é aproximadamente 70% neutros, 20% petróleo e 10% terracota.

## 4. Cores de fundo

| Token                 | Cor       | Aplicação                              |
| --------------------- | --------- | -------------------------------------- |
| Fundo base            | `#FCFBF8` | Corpo principal da página              |
| Fundo branco          | `#FFFFFF` | Cards, FAQ e superfícies elevadas      |
| Fundo frio            | `#F2F6F5` | Alternância de seções e abordagem      |
| Fundo quente          | `#F7F4EF` | Sobre a psicóloga ou blocos editoriais |
| Fundo terracota suave | `#FBF3F0` | Contato final, se usado com moderação  |
| Fundo escuro          | `#173F43` | Rodapé ou seção final escura           |

### Alternância de seções

- Não alternar a cor em todas as seções.
- Usar o fundo base como padrão.
- Aplicar fundos alternativos apenas para organizar mudanças reais de assunto.
- Limitar a página a, no máximo, três famílias visíveis de fundo: base, alternativo claro e escuro.
- Evitar caixas dentro de caixas com tonalidades quase idênticas.

## 5. Cores de texto

| Token                | Cor       | Aplicação                                             |
| -------------------- | --------- | ----------------------------------------------------- |
| Texto principal      | `#173033` | Corpo de texto e informações essenciais               |
| Título institucional | `#173F43` | Títulos e marca sobre fundo claro                     |
| Texto secundário     | `#536568` | Textos auxiliares e descrições                        |
| Texto discreto       | `#6B7879` | Metadados não essenciais, somente em tamanho adequado |
| Texto inverso        | `#FFFFFF` | Texto sobre petróleo 900 ou CTA                       |
| Texto inverso suave  | `#DDE9E7` | Informações secundárias sobre fundo escuro            |
| Link                 | `#23565A` | Links em texto corrido                                |
| Link hover           | `#173F43` | Hover de links                                        |
| Erro                 | `#9C3D35` | Mensagens de erro e validação                         |
| Sucesso              | `#27624E` | Confirmações de envio                                 |

### Contrastes de referência

| Combinação                         | Contraste aproximado |
| ---------------------------------- | -------------------: |
| Texto principal sobre fundo base   |              13,47:1 |
| Texto secundário sobre fundo base  |               5,92:1 |
| Petróleo 900 sobre branco          |              11,48:1 |
| CTA terracota 700 com texto branco |               5,49:1 |
| CTA terracota 800 com texto branco |               7,74:1 |

Textos essenciais nunca devem usar opacidade como único recurso para parecer secundários. Preferir uma cor sólida prevista no sistema.

## 6. Cor dos CTAs

### CTA principal

- Fundo: Terracota 700 — `#A4513E`.
- Texto e ícone: branco — `#FFFFFF`.
- Hover: Terracota 800 — `#873C2D`.
- Active: `#743225`.
- Focus ring: Terracota 300 — `#DDAF9F`.
- Disabled: fundo `#D8CECA`, texto `#756E6B`.

### CTA secundário

- Fundo: transparente.
- Texto: Petróleo 900 — `#173F43`.
- Borda: Petróleo 200 — `#C4DAD7`.
- Hover: fundo Petróleo 50 — `#F2F6F5`.
- Active: fundo Petróleo 100 — `#E1ECEA`.

### Link textual

- Texto: Petróleo 800 — `#23565A`.
- Sublinhado com espessura de 1 pixel e distância confortável.
- Hover: Petróleo 900 — `#173F43`.

### Regra de prioridade

Em um mesmo campo visual, deve existir somente um CTA preenchido. Ações secundárias usam botão contornado ou link textual.

## 7. Cores de bordas e divisores

| Token          | Cor       | Aplicação                                     |
| -------------- | --------- | --------------------------------------------- |
| Borda suave    | `#DCE4E2` | Cards e FAQ                                   |
| Borda padrão   | `#C9D6D3` | Campos e componentes interativos              |
| Borda forte    | `#91AAA7` | Hover ou elementos que exigem maior definição |
| Divisor quente | `#E4DED5` | Separadores sobre fundos quentes              |
| Borda de erro  | `#B64C43` | Campos inválidos                              |

### Regras

- Usar bordas somente quando elas ajudarem a reconhecer limites ou interação.
- Separar grupos de conteúdo preferencialmente com espaço, alinhamento e mudança de fundo.
- Não contornar todos os blocos da página.
- Evitar bordas mais escuras que o conteúdo secundário.

## 8. Tipografia

### Família de títulos

**Newsreader** — serifada editorial.

Usos:

- headline principal;
- títulos de seção;
- títulos do contato final;
- destaques editoriais curtos.

Pesos recomendados:

- 400 para títulos amplos;
- 500 para títulos que precisam de mais firmeza;
- itálico apenas em uma citação editorial curta, caso exista conteúdo real para isso.

Fallback: Georgia, `Times New Roman`, serif.

### Família de interface e leitura

**Inter** — sem serifa neutra e altamente legível.

Usos:

- parágrafos;
- navegação;
- botões;
- rótulos;
- FAQ;
- informações profissionais;
- formulários e mensagens de estado.

Pesos recomendados:

- 400 para texto corrido;
- 500 para navegação, rótulos e botões;
- 600 para subtítulos funcionais e pequenos destaques.

Fallback: Arial, Helvetica, sans-serif.

### Regras tipográficas

- Não usar mais de duas famílias.
- Não usar pesos 700 ou 800 em títulos serifados.
- Não usar caixa alta em frases ou títulos longos.
- Textos de contexto podem usar caixa alta somente com 13–14 px, peso 600 e espaçamento entre letras de `0.08em`.
- Limitar parágrafos a aproximadamente 60–72 caracteres por linha.
- Evitar centralizar textos com mais de três linhas.

## 9. Hierarquia tipográfica

| Nível               | Família    | Desktop | Tablet | Mobile | Peso | Entrelinha |
| ------------------- | ---------- | ------: | -----: | -----: | ---: | ---------: |
| Display / H1        | Newsreader |   64 px |  52 px |  40 px |  400 |  1,05–1,10 |
| H2                  | Newsreader |   46 px |  40 px |  34 px |  400 |       1,12 |
| H3                  | Newsreader |   32 px |  29 px |  26 px |  500 |       1,18 |
| H4 / título de card | Inter      |   20 px |  20 px |  19 px |  600 |       1,35 |
| Subtítulo hero      | Inter      |   20 px |  19 px |  18 px |  400 |       1,55 |
| Corpo destacado     | Inter      |   18 px |  18 px |  17 px |  400 |       1,65 |
| Corpo padrão        | Inter      |   16 px |  16 px |  16 px |  400 |       1,65 |
| Navegação           | Inter      |   15 px |  15 px |  16 px |  500 |        1,4 |
| Botão               | Inter      |   16 px |  16 px |  16 px |  600 |        1,2 |
| Rótulo              | Inter      |   14 px |  14 px |  14 px |  600 |        1,4 |
| Metadado            | Inter      |   13 px |  13 px |  13 px |  500 |       1,45 |

### Escala fluida

H1 e H2 podem variar suavemente entre os valores mobile e desktop. Textos de corpo e controles não devem ser reduzidos abaixo dos tamanhos indicados.

### Comprimentos recomendados

- H1: até 12 palavras ou cerca de 3 linhas no celular.
- H2: até 2 linhas no desktop e 3 no celular.
- Subtítulo do hero: largura máxima de 620 px.
- Parágrafo editorial: largura máxima de 680–720 px.
- Texto de card: preferencialmente até 4 linhas antes de uma quebra estrutural.

## 10. Sistema de espaçamentos

Base: múltiplos de 4 px com ritmo principal de 8 px.

| Token     |  Valor | Uso típico                              |
| --------- | -----: | --------------------------------------- |
| Espaço 1  |   4 px | Ajustes mínimos e agrupamento de ícone  |
| Espaço 2  |   8 px | Rótulo e texto auxiliar                 |
| Espaço 3  |  12 px | Conteúdo compacto                       |
| Espaço 4  |  16 px | Espaço interno mínimo e grupos de texto |
| Espaço 5  |  24 px | Entre elementos relacionados            |
| Espaço 6  |  32 px | Cards e blocos internos                 |
| Espaço 7  |  40 px | Grupos de conteúdo maiores              |
| Espaço 8  |  48 px | Subdivisões de seção                    |
| Espaço 9  |  64 px | Seções compactas no mobile              |
| Espaço 10 |  80 px | Seções em tablet                        |
| Espaço 11 |  96 px | Seções padrão no desktop                |
| Espaço 12 | 128 px | Seções editoriais amplas no desktop     |

### Ritmo de seção

- Desktop: 96–128 px na vertical.
- Tablet: 80–96 px.
- Mobile: 64–80 px.
- Hero: pode usar 112–144 px no desktop, desde que as informações essenciais permaneçam visíveis no primeiro campo.
- Contato final: 80–96 px, evitando aparência de banner publicitário.

### Espaçamento interno

- Card grande: 32 px desktop, 24 px mobile.
- Card compacto: 24 px desktop, 20 px mobile.
- Botão: 14 px vertical e 22–24 px horizontal.
- Campo: 14–16 px vertical e 16 px horizontal.

## 11. Larguras máximas

| Contexto            | Largura máxima |
| ------------------- | -------------: |
| Container amplo     |       1.280 px |
| Container principal |       1.200 px |
| Conteúdo editorial  |         720 px |
| Texto do hero       |         620 px |
| FAQ                 |         840 px |
| Formulário opcional |         640 px |

### Margens laterais

- Desktop: mínimo de 48 px.
- Tablet: 32 px.
- Mobile: 20 px.
- Telas muito estreitas: nunca menos de 16 px.

O conteúdo não deve ocupar toda a largura em monitores grandes. O espaço vazio faz parte da composição e melhora a leitura.

## 12. Sistema de grid

### Desktop — 1.200 px ou mais

- 12 colunas.
- Gutter de 24 px.
- Container máximo de 1.200 px, com possibilidade de 1.280 px apenas para fotografia ou composição ampla.
- Hero sugerido: texto em 6 colunas e fotografia em 5, com 1 coluna de respiro estrutural.
- Seção “Sobre”: fotografia em 5 e conteúdo em 6 colunas.
- Conteúdo editorial: 7 a 8 colunas, nunca 12.

### Tablet — 768 a 1.199 px

- 8 colunas.
- Gutter de 20 px.
- Hero pode permanecer em duas áreas equilibradas até o ponto em que o texto ou a foto percam conforto.
- Cards de temas: 2 colunas.
- Cards de modalidade: 2 colunas quando houver largura suficiente.

### Mobile — até 767 px

- 4 colunas.
- Gutter de 16 px.
- Conteúdo principal ocupa as 4 colunas.
- Cards e modalidades usam uma coluna.
- Não criar rolagem horizontal para cards.
- Ordem de leitura deve seguir a ordem do documento.

### Regras de alinhamento

- Títulos, parágrafos e cards devem compartilhar linhas estruturais claras.
- Permitir assimetria editorial controlada no hero e na seção “Sobre”.
- Não deslocar elementos apenas para parecer criativo; todo desalinhamento deve reforçar hierarquia.

## 13. Border radius

| Token        |  Valor | Aplicação                                      |
| ------------ | -----: | ---------------------------------------------- |
| Pequeno      |   8 px | Campos, tags e controles compactos             |
| Médio        |  14 px | Botões e FAQ                                   |
| Grande       |  20 px | Cards principais                               |
| Extra grande |  28 px | Fotografias e blocos de destaque               |
| Circular     | 999 px | Avatares, badges e botões realmente circulares |

### Regras

- Não aplicar o mesmo raio grande em todos os elementos.
- Botões não devem parecer cápsulas excessivamente arredondadas; usar 14 px como padrão.
- Fotografias podem ter raio de 24–28 px para suavidade, sem recortes orgânicos artificiais.
- Cards aninhados devem usar raio menor do que o contêiner externo.

## 14. Sombras

Sombras serão raras e quase imperceptíveis. A separação principal virá de fundo, espaço e borda.

| Token            | Sombra                                | Aplicação                                    |
| ---------------- | ------------------------------------- | -------------------------------------------- |
| Sombra suave     | `0 8px 28px rgba(14, 44, 46, 0.07)`   | Card elevado ou fotografia                   |
| Sombra flutuante | `0 12px 36px rgba(14, 44, 46, 0.10)`  | Cabeçalho fixo após rolagem ou menu móvel    |
| Sombra de foco   | `0 0 0 4px rgba(221, 175, 159, 0.42)` | Apoio visual de foco, combinada com contorno |

### Regras

- No máximo um nível de sombra por elemento.
- Cards comuns não recebem sombra.
- Não usar sombras pretas, duras ou com grande deslocamento.
- Não combinar borda forte e sombra no mesmo card.

## 15. Estilo de cards

### Card editorial

- Fundo branco ou transparente.
- Sem sombra.
- Padding de 24–32 px.
- Título alinhado à esquerda.
- Pequeno marcador tipográfico ou ícone funcional opcional.
- Borda somente quando necessária: 1 px em Borda suave.
- Radius de 20 px.

Uso: temas de acompanhamento, princípios da TCC e etapas.

### Card tonal

- Fundo Petróleo 50 ou Mineral 50.
- Sem borda e sem sombra.
- Radius de 20 px.
- Conteúdo curto.

Uso: modalidades online e presencial ou informações práticas.

### Card de credencial

- Fundo transparente.
- Divisão por linhas sutis ou alinhamento, não por múltiplas caixas.
- Título em 14 px, corpo em 16 px.

Uso: formação, especializações e registro profissional.

### Card de contato

- Fundo Petróleo 900 ou Terracota 50.
- Alto contraste e uma única ação preenchida.
- Radius de 28 px.
- Padding de 40–56 px desktop e 28 px mobile.

### Regras gerais

- Não usar ícone, título, descrição e link em todos os cards por padrão.
- Não elevar visualmente cada item de lista.
- Evitar mosaicos com muitos cartões pequenos.
- Cards da mesma família devem manter altura semelhante apenas quando isso não criar espaços vazios artificiais.

## 16. Estilo de botões

### Dimensões

- Altura mínima padrão: 52 px.
- Altura mínima compacta: 44 px, somente no cabeçalho desktop.
- Padding horizontal: 22–24 px.
- Espaço entre ícone e texto: 8 px.
- Área de toque mínima: 44 × 44 px.

### Tipografia

- Inter, 16 px, peso 600.
- Sem caixa alta.
- Sem espaçamento artificial entre letras.

### Botão principal

- Fundo Terracota 700.
- Texto branco.
- Radius de 14 px.
- Ícone do WhatsApp ou seta externa opcional, sempre acompanhado de texto.
- Sem sombra no estado padrão.

### Botão secundário

- Fundo transparente.
- Borda de 1 px em Petróleo 200.
- Texto Petróleo 900.

### Botão móvel persistente

- Preferir formato retangular com texto, não um círculo isolado.
- Largura adaptada ao conteúdo ou quase integral, conforme o contexto.
- Deve respeitar as áreas seguras do dispositivo.
- Não usar pulsação, brilho, vibração visual ou badge de notificação falso.

## 17. Estados interativos

### Hover

- Mudança de cor suave em 160–200 ms.
- Botões podem deslocar no máximo 1 px para cima, mas a mudança de cor é suficiente e preferível.
- Links recebem sublinhado mais evidente.
- Cards interativos podem alterar fundo ou borda; cards informativos não devem reagir ao cursor.

### Focus visible

- Contorno de 2 px em Petróleo 900.
- Offset de 3 px.
- Halo externo suave em Terracota 300 quando necessário.
- Nunca remover o foco sem substituição equivalente.

### Active

- Cor um tom mais escuro.
- Sem mudanças bruscas de tamanho.
- Feedback imediato ao toque.

### Disabled

- Contraste reduzido, mas texto ainda legível.
- Cursor e comportamento coerentes com indisponibilidade.
- Não usar somente opacidade abaixo de 50%.

### Movimento reduzido

- Respeitar a preferência de redução de movimento.
- Remover deslocamentos e transições não essenciais.
- Manter mudanças de estado por cor, borda e texto.

## 18. Formulários

O formulário é um recurso opcional e secundário. Caso seja adotado:

### Campos

- Altura mínima de 52 px.
- Fundo branco.
- Borda padrão de 1 px.
- Radius de 8 px.
- Texto de 16 px para evitar zoom automático em celulares.
- Rótulo sempre visível acima do campo.
- Placeholder com função de exemplo, nunca como substituto do rótulo.

### Focus

- Borda Petróleo 800.
- Contorno externo de 3 px em Petróleo 100.

### Erro

- Borda Erro.
- Mensagem textual abaixo do campo.
- Ícone opcional acompanhado de texto.
- Não comunicar erro apenas pela cor.

### Sucesso

- Fundo claro neutro ou verde muito suave.
- Título objetivo e próximo passo explícito.
- Não usar confete ou animação celebratória.

## 19. FAQ

- Fundo branco ou transparente.
- Uma linha divisória suave entre perguntas.
- Pergunta em Inter, 17–18 px, peso 600.
- Resposta em 16 px, entrelinha 1,65, largura confortável.
- Ícone de expansão em Petróleo 800.
- Área clicável com altura mínima de 56 px.
- Radius aplicado ao grupo ou ao item em hover, não necessariamente a cada pergunta fechada.
- Abertura com movimento breve de 180–240 ms, removido quando houver preferência por movimento reduzido.

## 20. Ícones

### Estilo

- Ícones lineares, com cantos levemente arredondados.
- Traço de 1,5 a 1,75 px.
- Tamanhos padrão: 20 px em controles, 24 px em cards e 28 px em destaques raros.
- Mesma biblioteca e mesma espessura em toda a página.

### Uso recomendado

- WhatsApp.
- Menu e fechar.
- Seta de navegação.
- Videochamada para atendimento online.
- Localização para atendimento presencial.
- Expandir e recolher FAQ.
- Confirmação, alerta ou erro em estados reais.

### Evitar

- Ícones decorativos para cada emoção ou dificuldade.
- Cérebro, coração anatômico, quebra-cabeça ou símbolos hospitalares.
- Emojis como elementos permanentes da interface.
- Ícones dentro de círculos coloridos repetidos em todos os cards.
- Mistura entre ícones preenchidos e lineares.

## 21. Tratamento de fotografias

### Direção fotográfica

A fotografia deve mostrar a profissional com naturalidade, presença e segurança. A imagem principal precisa parecer autoral e atual, não uma cena genérica de consultório.

### Recomendações

- Luz natural ou difusa, sem iluminação branca hospitalar.
- Expressão serena e acessível, evitando poses excessivamente sorridentes ou rígidas.
- Enquadramento de meio corpo ou retrato ambiental.
- Olhar para a câmera em pelo menos uma imagem para reforçar presença.
- Ambiente real, organizado e discreto, se houver autorização.
- Roupa de cores sólidas e sóbrias, sem jaleco.
- Espaço negativo planejado para a composição do hero.
- Diversidade de enquadramento entre imagem principal e eventual imagem da seção “Sobre”.

### Tratamento de cor

- Temperatura levemente quente e natural.
- Saturação moderada.
- Contraste suave, preservando tons de pele.
- Sombras abertas, sem efeito lavado.
- Nenhum filtro petróleo ou terracota aplicado sobre o rosto.
- Consistência de balanço de branco entre as imagens.

### Recorte

- Hero desktop: proporção aproximada de 4:5 ou 5:6.
- Hero mobile: 4:5, com ponto focal protegido.
- Sobre: 3:4 ou 4:5.
- Radius de 24–28 px.
- Não usar máscaras em forma de arco, flor ou mancha orgânica.

### Quantidade

- Uma fotografia forte é suficiente.
- Uma segunda fotografia pode ser usada na seção “Sobre” apenas se acrescentar contexto real.
- Não criar galerias ou repetir o mesmo retrato em diferentes recortes.

## 22. Elementos decorativos

### Permitidos

- Linhas finas e curtas como separadores editoriais.
- Pequenos campos de cor em Petróleo 100 ou Terracota 100.
- Numeração discreta nas etapas do atendimento.
- Textura muito leve semelhante a papel, somente se não prejudicar desempenho ou legibilidade.

### Limites

- No máximo um motivo decorativo recorrente.
- Nenhum ornamento deve competir com títulos, fotografia ou CTA.
- Não usar gradientes chamativos. Se uma transição tonal for necessária, ela deve ocorrer entre dois tons muito próximos e ocupar uma área limitada.
- Não usar blobs, folhas, ondas ou círculos abstratos apenas para preencher espaço.

## 23. Cabeçalho e navegação

### Desktop

- Altura entre 72 e 80 px.
- Fundo base com leve transparência apenas se a legibilidade permanecer total.
- Nome alinhado à esquerda, navegação ao centro ou à direita e CTA na extremidade.
- Ao fixar após rolagem, aplicar borda inferior suave ou Sombra flutuante, nunca ambas com grande intensidade.

### Mobile

- Altura entre 64 e 72 px.
- Nome abreviado visualmente somente se o nome completo continuar acessível.
- Menu simples com área de toque adequada.
- CTA persistente separado do menu apenas se não sobrecarregar o primeiro campo visual.

### Estados

- Item atual pode receber sublinhado ou mudança para Petróleo 900.
- Não usar pílulas em todos os links de navegação.

## 24. Regras por breakpoint

### Desktop — 1.200 px ou mais

- Usar composições em duas colunas no hero e na seção “Sobre”.
- Preservar grandes áreas de respiro sem ultrapassar os containers definidos.
- H1 até 64 px.
- Seções com 96–128 px de espaçamento vertical.
- Cards em até três colunas quando o conteúdo for curto e comparável.
- Navegação completa visível.

### Notebook e tablet horizontal — 992 a 1.199 px

- Grid de 8 colunas ou 12 colunas reduzidas, mantendo gutter de 20–24 px.
- H1 entre 48 e 56 px.
- Reduzir espaços verticais antes de reduzir texto.
- Manter hero em duas colunas somente se cada coluna tiver largura funcional.

### Tablet vertical — 768 a 991 px

- Grid de 8 colunas.
- Hero pode empilhar texto e fotografia.
- Fotografia não deve ultrapassar 560 px de largura.
- Cards em duas colunas.
- Cabeçalho pode migrar para menu compacto se os links perderem espaço.

### Mobile — 375 a 767 px

- Grid de 4 colunas.
- Margens de 20 px.
- H1 de 38–42 px conforme a largura.
- H2 de 32–36 px.
- Uma coluna para todo conteúdo principal.
- Botão principal pode ocupar toda a largura quando isso facilitar o toque.
- FAQ expansível.
- Cards com padding de 20–24 px.
- Espaçamento de seção entre 64 e 80 px.

### Mobile estreito — abaixo de 375 px

- Margens mínimas de 16 px.
- H1 de 36–38 px.
- Evitar palavras isoladas por quebras artificiais.
- Botões em largura total.
- Remover ornamentos opcionais antes de comprimir conteúdo.
- Nunca reduzir texto de corpo abaixo de 16 px.

## 25. Acessibilidade visual e interação

- Preservar contraste mínimo adequado em texto, controles, bordas de campo e foco.
- Manter corpo de texto em 16 px ou mais.
- Permitir ampliação de texto a 200% sem sobreposição ou perda de conteúdo.
- Não comunicar significado somente por cor.
- Oferecer texto alternativo objetivo para fotografias informativas.
- Ícones de ação precisam de nome acessível.
- Estados de hover nunca devem ser o único indicador de interação.
- Elementos clicáveis precisam de foco visível.
- Áreas de toque devem ter pelo menos 44 × 44 px.
- Evitar texto sobre fotografia; quando inevitável, usar superfície sólida de apoio em vez de sombra pesada.
- Respeitar redução de movimento e preferências do sistema.

## 26. Aplicação por seção

| Seção         | Fundo                        | Composição                        | Destaque visual             |
| ------------- | ---------------------------- | --------------------------------- | --------------------------- |
| Cabeçalho     | Fundo base                   | Linha única                       | Nome e CTA compacto         |
| Hero          | Fundo base                   | Texto + fotografia                | H1 serifado e CTA terracota |
| Identificação | Petróleo 50                  | Introdução + cards editoriais     | Títulos e respiro           |
| Sobre         | Fundo quente                 | Fotografia + texto                | Credenciais organizadas     |
| Abordagem     | Fundo base                   | Texto editorial + três princípios | Numeração ou linha sutil    |
| Atendimento   | Petróleo 50                  | Etapas + duas modalidades         | Informação prática e CTA    |
| FAQ           | Fundo base                   | Coluna única estreita             | Perguntas expansíveis       |
| Contato final | Petróleo 900 ou Terracota 50 | Bloco concentrado                 | Uma ação principal          |
| Rodapé        | Petróleo 950                 | Colunas simples                   | Identificação e links       |

### Observação sobre o contato final

Se o contato final usar Petróleo 900, o rodapé deve usar Petróleo 950 com separação clara de conteúdo e pouco contraste tonal. Se isso tornar a base da página pesada, o contato final deve usar Terracota 50 e o rodapé permanecer escuro.

## 27. Coerência e restrições

### Fazer

- Usar tipografia como principal recurso de personalidade.
- Manter o terracota reservado às ações e pequenos acentos.
- Demonstrar confiança por alinhamento, consistência e legibilidade.
- Dar espaço para a fotografia profissional respirar.
- Usar cards apenas quando facilitarem a leitura ou comparação.
- Manter o mesmo padrão de CTA ao longo da página.

### Não fazer

- Usar azul-claro clínico como cor dominante.
- Criar um arco-íris de cores suaves para diferenciar cards.
- Aplicar sombra em todos os componentes.
- Misturar muitos raios, estilos de ícone ou pesos tipográficos.
- Usar fundos bege em todas as seções.
- Inserir ornamentos botânicos genéricos como identidade principal.
- Aplicar degradês saturados ou efeitos luminosos.
- Transformar cada parágrafo em um card.
- Usar textos cinza muito claros para parecer sofisticado.
- Dar ao botão de WhatsApp animações pulsantes.

## 28. Tokens essenciais consolidados

| Categoria           | Decisão principal                      |
| ------------------- | -------------------------------------- |
| Cor institucional   | Petróleo 900 — `#173F43`               |
| CTA                 | Terracota 700 — `#A4513E`              |
| Fundo base          | `#FCFBF8`                              |
| Texto principal     | `#173033`                              |
| Texto secundário    | `#536568`                              |
| Borda padrão        | `#C9D6D3`                              |
| Títulos             | Newsreader                             |
| Interface e corpo   | Inter                                  |
| Corpo padrão        | 16 px / entrelinha 1,65                |
| H1                  | 40–64 px                               |
| Container principal | 1.200 px                               |
| Leitura editorial   | 720 px                                 |
| Grid                | 12 / 8 / 4 colunas                     |
| Radius de card      | 20 px                                  |
| Radius de botão     | 14 px                                  |
| Sombra padrão       | Ausente; usar somente quando funcional |
| Espaço de seção     | 64–128 px conforme o viewport          |

## 29. Critérios de aprovação visual

O Design System estará corretamente aplicado quando:

- a página parecer profissional e humana antes de parecer “delicada”;
- a leitura for confortável em celular e desktop;
- o CTA estiver claro sem dominar todas as seções;
- os tons suaves preservarem contraste suficiente;
- a fotografia parecer real e integrada, não decorativa;
- cards, bordas e sombras forem usados com contenção;
- a hierarquia continuar evidente mesmo sem cor;
- o layout suportar ampliação de texto e navegação por teclado;
- a identidade não depender de clichês visuais de psicologia;
- a composição parecer autoral e consistente, não uma coleção de componentes prontos.
