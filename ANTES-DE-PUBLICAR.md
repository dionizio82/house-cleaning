# Antes de publicar

Tudo neste site é **fictício**. Nada aqui pode ir ao ar como está.

## 🔴 Obrigatório — risco real se não trocar

- [ ] **Os 5 depoimentos são inventados.** Eu os escrevi para o mockup ter volume
      visual. Publicar review falso nos EUA é *deceptive advertising* — a FTC
      passou a aplicar multa civil por review fabricada desde 2024. Ou você
      substitui pelos depoimentos reais dos clientes dela (com autorização),
      ou **remove a seção inteira** até existirem.
      → `index.html`, seção `#reviews`
- [ ] **Telefone `(508) 555-0142` é fictício** (faixa 555-01XX é reservada para
      ficção). Trocar em 6 lugares: header, hero, CTA final, footer, barra
      mobile e JSON-LD. Os links `wa.me/15085550142` também.
- [ ] **"5+ years"** — confirmar que bate com a realidade dela.
- [ ] **"English & Portuguese"** — confirmar.
- [ ] **Nome "Marina Costa"** — trocar pelo nome real. Sugestão: usar
      **primeiro nome + inicial do sobrenome**. Nome completo + rosto + telefone
      + cidade é um perfil bastante completo de uma mulher que trabalha sozinha
      e entra na casa de estranhos.
- [ ] **Nenhuma menção a *insured*, *bonded* ou *background check*** foi incluída
      de propósito. Só adicione se ela realmente tiver — e aí destaque, porque
      converte muito.

## 🟡 Importante antes de divulgar

- [ ] **Número separado.** Telefone pessoal exposto na web vira alvo de robocall
      e de agência vendendo lead. Google Voice é grátis e dá número americano com
      transcrição de recado — e permite trocar depois sem mexer no site.
- [ ] **Google Business Profile.** É daí que vem a maioria dos clientes de
      diarista local, não do site. O site é a prova de legitimidade que fecha a
      conversão depois. Mesmo nome, mesmo telefone, mesma cidade nos dois.
- [ ] **Fotos reais.** 3 slots. Sem elas o site tem cara de template.
      Briefing no `data-label` de cada `<figure>`:
      - Hero: ela em sala clara, recém-limpa, luz natural, sem uniforme
      - About: retrato dela, simpático, luz natural
      - Service Area: mapa do Google centrado em Hyannis Port
- [ ] **Mapa.** Trocar o placeholder pelo embed do Google Maps.
- [ ] **Verificar as cidades e os ZIPs** da seção Service Area com ela — a lista
      é um chute geográfico razoável, não uma escolha dela.
- [ ] **A FAQ responde por ela.** Produtos próprios, cancelamento em 24h, aceitar
      pets, turnover no mesmo dia — confirmar cada resposta.
- [ ] **`<link rel="canonical">`** aponta para `example.com`. Trocar pela URL
      real (ou remover enquanto não houver domínio).

## 🟢 Depois que estiver no ar

- [ ] Google Analytics ou Cloudflare Web Analytics (esse é grátis e sem cookie —
      dispensa banner de LGPD/GDPR)
- [ ] Link "leave a review" do Google Business Profile no rodapé
- [ ] Se um dia entrar formulário: privacy policy + consentimento de SMS (TCPA)
- [ ] Se quiser ranquear por cidade: `/house-cleaning/hyannis`,
      `/house-cleaning/centerville` etc.
