# Formulário de contato

## Estado atual

O formulário possui somente a interface e a validação no navegador. Nenhum backend, provedor de e-mail ou serviço de formulários está conectado. Ao concluir uma submissão válida, a página informa que nenhum dado foi enviado e orienta o uso do WhatsApp.

Campos implementados:

- nome obrigatório;
- WhatsApp opcional;
- e-mail opcional;
- pelo menos um dos dois canais de retorno é obrigatório;
- mensagem breve obrigatória, limitada a 600 caracteres;
- campo invisível de honeypot para prevenção básica contra robôs.

O formulário orienta explicitamente o visitante a não informar dados clínicos ou informações sensíveis sobre saúde.

## Antes de habilitar o envio

É necessário definir e aprovar:

1. o destinatário responsável por receber e responder às mensagens;
2. um provedor transacional ou serviço de formulários;
3. a Política de Privacidade e a base adequada para tratamento dos dados;
4. prazo de retenção e procedimento de exclusão;
5. proteção contra abuso e limite de requisições;
6. mensagens reais de sucesso, erro e prazo de resposta.

## Arquitetura recomendada

1. Criar um Route Handler em `src/app/api/contact/route.ts`.
2. Receber somente requisições `POST` com JSON.
3. Repetir toda a validação no servidor; a validação do navegador não é uma barreira de segurança.
4. Rejeitar o honeypot preenchido e aplicar limite de requisições por origem, sem registrar o conteúdo enviado.
5. Chamar um único provedor de envio aprovado usando uma chave secreta armazenada em variável de ambiente.
6. Nunca expor a chave ao navegador nem usar prefixo público para ela.
7. Não armazenar as mensagens em banco de dados sem necessidade operacional e política definida.
8. Retornar respostas genéricas e seguras, sem reproduzir dados pessoais em logs ou mensagens de erro.
9. Atualizar `ContactForm.tsx` para enviar os dados ao endpoint, exibir estado de carregamento e apresentar sucesso somente após confirmação real do servidor.

## Configuração futura

Quando o provedor for escolhido, documentar as variáveis necessárias em `.env.example`, sem valores reais. O segredo deve existir apenas nos ambientes local, preview e produção configurados de forma segura.

Antes da publicação, testar submissões válidas e inválidas, indisponibilidade do provedor, repetição excessiva, navegação por teclado e leitura das mensagens de estado por tecnologia assistiva.
