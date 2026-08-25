# Marina Costa — Home Cleaning (Hyannis Port, MA)

Onepage estática para diarista autônoma em Cape Cod. Objetivo: **captar clientes
novos na cidade**, convertendo em ligação ou WhatsApp.

> ⚠️ **Este é um MOCKUP.** Nome, telefone, foto e **todos os depoimentos são
> fictícios**, criados só para apresentar o layout. Veja
> [`ANTES-DE-PUBLICAR.md`](ANTES-DE-PUBLICAR.md) antes de colocar no ar.

---

## Stack

**HTML + CSS + 15 linhas de JS. Sem build, sem framework, sem backend.**

O motivo é simples: como os leads chegam por **ligação e WhatsApp**, não existe
formulário, logo não existe endpoint, logo não existe servidor. Next.js aqui só
adicionaria build, dependências e superfície de manutenção sem entregar nada.

```
index.html  →  git push  →  Cloudflare Pages  →  marina-cleaning.pages.dev
```

Se um dia entrar formulário, blog ou páginas por cidade, migra para Astro sem
reescrever o conteúdo.

### Hospedagem grátis, sem domínio

**Recomendado — Cloudflare Pages** (você já tem conta e DNS lá):

1. `git init && git add . && git commit -m "feat: site inicial"`
2. Criar repo no GitHub e dar push
3. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
4. Build command: *(vazio)* · Build output directory: `/`
5. Sai em `https://<nome>.pages.dev` — grátis, HTTPS, banda ilimitada

**Alternativa — Vercel:** mesmo fluxo, framework preset "Other", sem build
command. Sai em `https://<nome>.vercel.app`.

Domínio próprio depois é só apontar o DNS — o site não muda.

### Rodar local

```bash
python3 -m http.server 8000    # http://localhost:8000
```

---

## Estrutura da página

```
Hero (headline com cidade + Call/WhatsApp)
  ↓  Faixa de confiança (5+ anos · mesma pessoa · local · EN/PT)
  ↓  Serviços (Regular · Deep · Move In/Out · Vacation Rentals ★)
  ↓  Why Choose Me (4 pilares de confiança)
  ↓  About (foto + texto em primeira pessoa)
  ↓  Reviews (5 depoimentos)
  ↓  Service Area (10 cidades + ZIPs)
  ↓  FAQ (7 objeções reais)
  ↓  CTA final
  ↓  Footer
  +  Barra fixa no mobile: Call | WhatsApp
```

### Decisões de conteúdo

- **Vacation Rentals é o card destacado.** Em Cape Cod metade das casas é segunda
  residência ou aluguel de temporada. Turnover de Airbnb e abertura/fechamento
  sazonal (maio/outubro) pagam melhor e têm menos concorrência que faxina
  regular. É o diferencial local — por isso ganhou selo e destaque visual.
- **H1 cita as cidades.** Busca local é "house cleaning near me" / "house
  cleaning Hyannis". A cidade precisa estar no H1, no `<title>` e no JSON-LD.
- **Sem preço na página, mas com FAQ de preço.** A resposta convida para a
  ligação em vez de travar o lead. Se ela quiser filtrar mais, é só trocar por
  uma faixa real ("most homes range $X–$Y").
- **`HouseCleaningService` em JSON-LD** no fim do `index.html` — ajuda o Google a
  ligar o site ao Google Business Profile.

---

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | A página inteira + JSON-LD |
| `styles.css` | Design system em tokens no `:root` |
| `main.js` | Sombra do header ao rolar |
| `ANTES-DE-PUBLICAR.md` | Checklist obrigatório antes do ar |

## Fotos

Os blocos de foto são placeholders desenhados em CSS (`.photo-slot`), com o
briefing da imagem no atributo `data-label`. Para trocar, substitua o `<figure>`
por um `<img>` mantendo o `aspect-ratio` da classe.

São 3 slots: **hero**, **retrato (About)** e **mapa (Service Area)**.
