# TODO — Porto Troca de Óleo

## Revisão da usuária — pendente
- [ ] Aguardar a avaliação da usuária sobre layout, informações comerciais e imagens. Não publicar nem considerar a etapa aprovada ou encerrada antes de essa revisão acontecer.

## Projeto isolado e protótipo
- [x] Criar uma landing page responsiva da Porto Troca de Óleo, empresa de troca de óleo automotivo em Louveira, São Paulo, em projeto novo separado do sistema Larissa Matos; não reutilizar nem modificar arquivos da Larissa.
- [x] Entregar primeiro um protótipo visual completo, profissional, moderno e refinado, navegável no Preview, com foco em confiança, conversão via WhatsApp e localização da loja. A página está em prévia e não foi publicada.
- [ ] Após permitir à usuária revisar layout, informações comerciais e imagens, incorporar as revisões e só então considerar a etapa aprovada/encerrada; não publicar antes dessa revisão.
- [x] Não criar ações falsas; cada CTA tem destino/ação definida e recursos não implementados estão identificados como protótipo.

## Identidade visual e imagens
- [x] Usar branco #FFFFFF, cinza muito claro #F5F5F3, preto #17191C, amarelo #FFD400, texto secundário #626873 e borda #E2E4E7. Predominam fundos claros; preto é usado para texto, contraste, rodapé e alguns cards, e amarelo para CTAs, ícones e destaques. Evitar site totalmente escuro, gradientes fortes, glassmorphism, excesso de sombra/enfeites, repetição de cartões e animações.
- [x] Aplicar fundo preto #17191C a alguns cards, com texto claro e detalhes/ícones amarelos, mantendo a predominância de superfícies claras no restante da página.
- [x] Aplicar sans moderna e legível (Inter ou Manrope), espaçamento consistente, alinhamento rigoroso, bordas discretas, raios leves e ícones lineares. Preferir fotografias automotivas realistas e sem aparência artificial.
- [x] Substituir a representação tipográfica provisória pelo logo oficial enviado pela usuária, sem redesenhar ou alterar as cores da arte; usá-lo em tamanho proporcional e legível.
- [x] Buscar e selecionar fotografias reais automotivas apropriadas antes de compor a interface; inserir imagens proporcionais e otimizadas, com texto alternativo pertinente. As fontes e licenças estão anotadas em `assets/SOURCES.md`.

## Navegação e apresentação principal
- [x] Criar cabeçalho branco com o logo oficial fornecido à esquerda, âncoras para Início, Serviços, Avaliações, Localização e Contato, botão amarelo “Chamar no WhatsApp” e menu compacto funcional em mobile.
- [x] Criar hero claro com texto à esquerda e fotografia à direita de profissional realizando troca de óleo, óleo sendo colocado no motor, ambiente bem iluminado e organizado e detalhes amarelos/pretos; não escurecer toda a dobra.
- [x] Manter exatamente a copy do hero: apoio “PORTO TROCA DE ÓLEO”; H1 “Seu carro em boas mãos.”; destaque amarelo “Troca de óleo com qualidade e confiança.”; descrição “Mais desempenho, economia e cuidado para o seu veículo.”; CTA “Chamar no WhatsApp” com ícone WhatsApp. Incluir diferenciais curtos “Produtos de qualidade”, “Atendimento ágil” e “Atendimento para diferentes marcas de veículos”.

## Serviços e diferenciais
- [x] Exibir serviços em fundo claro com título “Tudo o que seu carro precisa, em um só lugar.”, texto “Serviços para ajudar a manter seu veículo em boas condições.”, ícones lineares amarelos e cards compactos para troca de óleo do motor, filtro de óleo, filtro de ar, filtro de combustível, filtro de cabine, revisões e lubrificação. Aplicar fundo escuro em alguns cards e manter os demais claros. Identificar claramente os itens como sugestões/conteúdo provisório a confirmar, sem afirmar disponibilidade. Incluir CTA “Consultar serviços pelo WhatsApp”.
- [x] Exibir diferenciais com fotografia realista de profissional trabalhando em veículo e bloco claro, título “Mais que uma troca de óleo, é cuidado com o seu veículo.” e quatro atributos: qualidade nos produtos, atendimento atencioso, agilidade no serviço e compromisso com o cliente. Não inventar certificados, garantias, experiência ou qualificações.

## Avaliações, localização e contato
- [x] Criar seção de avaliações com título “O que nossos clientes dizem”. Não inventar nota média Google, quantidade, nomes, fotos, estrelas nem depoimentos. Até confirmar dados reais, exibir somente placeholders demonstrativos/pendentes claramente identificados, sem apresentá-los como verdadeiros. Reservar estrutura para ícone Google, nota/quantidade após confirmação, depoimentos autorizados, nome público permitido, estrelas compatíveis e link para avaliações originais.
- [x] Criar localização em duas colunas no desktop com título “Estamos em Louveira - SP”, endereço “Avenida Paulo Prado, 765 — Santo Antônio, Louveira - SP.”, ícone de local, incorporação oficial e responsiva do Google Maps quando possível e link/botão amarelo “Ver rota no Google Maps” para https://www.google.com/maps/search/?api=1&query=Porto+Super+Troca+de+Oleo+Louveira+SP. Não simular mapa interativo com imagem.
- [x] Exibir contato com WhatsApp (19) 97113-7681, Instagram @portotrocadeoleo, endereço resumido Louveira - SP e horário marcado como provisório até confirmação. Criar botões reais de WhatsApp, Instagram e Google Maps. WhatsApp: https://wa.me/5519971137681. Sempre que possível, usar a mensagem inicial “Olá! Gostaria de saber mais sobre os serviços da Porto Troca de Óleo.”
- [x] Criar botão flutuante do WhatsApp fixo durante a rolagem, verde WhatsApp ou cor compatível, com alvo de toque confortável, rótulo acessível, destino acima e posicionamento que não cubra conteúdo ou botões; o botão cede espaço quando há conteúdo relevante sob ele.
- [x] Criar rodapé compacto predominantemente preto com o logo oficial fornecido em uma área que preserve o contraste, links âncora, WhatsApp, Instagram, endereço resumido e copyright com ano atualizado quando implementado.

## Responsividade, acessibilidade e preparação técnica
- [x] Adaptar cuidadosamente a desktop 1440×900, tablet 768 px e mobile 390×844: layout fluido, sem rolagem horizontal, menu mobile funcional, tipografia responsiva, imagens proporcionais sem distorção, cards empilhados em telas estreitas, mapa adaptado, CTAs fáceis de achar e boa área de toque. Mobile não deve ser mera redução do desktop.
- [x] Considerar WCAG 2.2 AA: contraste, HTML semântico, hierarquia de títulos, alt em imagens pertinentes, navegação por teclado e foco visível, nomes acessíveis para botões/links/ícones, movimento reduzido e informação que não dependa somente da cor.
- [x] Definir `app.config.ts` com um `logoUrl` literal HTTPS durável apontando para o logo oficial fornecido, para os metadados da marca do projeto.
- [x] Planejar/implementar HTML5, CSS3 e JavaScript com seções/componentes reutilizáveis, SVG para ícones, imagens otimizadas, links reais de WhatsApp/Instagram/Maps, SEO básico e metadados da empresa, carregamento rápido e experiência desktop/mobile.
- [x] Manter todas as seções na ordem do briefing e as prioridades: proposta clara; CTA WhatsApp; serviços; confiança com avaliações reais apenas; localização/contato; experiência acessível e responsiva. Tratar horários, serviços e avaliações como não confirmados e usar placeholders explicitamente rotulados.
