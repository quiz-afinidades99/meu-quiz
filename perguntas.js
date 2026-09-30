/* ==========================================================
   QUIZ DE AFINIDADES +18
   80 perguntas | 8 categorias | 4 alternativas
   Interface, navegação, pontuação e resultado
   ========================================================== */

(() => {
  "use strict";

  // Evita inicialização duplicada
  if (window.__quizAfinidadesInicializado) return;
  window.__quizAfinidadesInicializado = true;

  const PERGUNTAS = [
    // 1. MENAGE E FANTASIAS A TRÊS
    { categoria: "Ménage e fantasias a três", pergunta: "Você convidaria um homem para fazer sexo oral em sua esposa ou parceira enquanto você assiste?" },
    { categoria: "Ménage e fantasias a três", pergunta: "Você teria vontade de fazer um ménage a trois com sua parceira e outra pessoa?" },
    { categoria: "Ménage e fantasias a três", pergunta: "Você gostaria de ver sua parceira beijando e seduzindo outra pessoa, com o consentimento de todos?" },
    { categoria: "Ménage e fantasias a três", pergunta: "Você aceitaria participar de uma experiência íntima com dois homens e uma mulher?" },
    { categoria: "Ménage e fantasias a três", pergunta: "Você teria curiosidade de assistir sua parceira em uma fantasia erótica com outra mulher?" },
    { categoria: "Ménage e fantasias a três", pergunta: "Você gostaria de experimentar uma noite de ménage com regras e limites definidos pelo casal?" },
    { categoria: "Ménage e fantasias a três", pergunta: "Você teria interesse em conhecer outro casal para conversar sobre fantasias compartilhadas?" },
    { categoria: "Ménage e fantasias a três", pergunta: "Você toparia uma experiência de troca de casais em um ambiente privado e consensual?" },
    { categoria: "Ménage e fantasias a três", pergunta: "Você gostaria que sua parceira escolhesse uma terceira pessoa para uma fantasia combinada entre vocês?" },
    { categoria: "Ménage e fantasias a três", pergunta: "Você teria vontade de participar de uma festa adulta para casais liberais, respeitando os limites de cada um?" },

    // 2. CUCKOLD, CIÚME E VOYEURISMO
    { categoria: "Cuckold, ciúme e voyeurismo", pergunta: "Você sentiria excitação ao assistir sua esposa ou parceira em uma experiência íntima consensual com outro homem?" },
    { categoria: "Cuckold, ciúme e voyeurismo", pergunta: "Você teria curiosidade de explorar a fantasia cuckold, conversando primeiro sobre os limites emocionais do casal?" },
    { categoria: "Cuckold, ciúme e voyeurismo", pergunta: "Você gostaria de assistir sua parceira sendo cortejada e seduzida por outra pessoa em uma encenação?" },
    { categoria: "Cuckold, ciúme e voyeurismo", pergunta: "Você teria interesse em uma fantasia de ciúme encenado, com palavras e limites previamente combinados?" },
    { categoria: "Cuckold, ciúme e voyeurismo", pergunta: "Você gostaria de ouvir sua parceira contar uma fantasia envolvendo outra pessoa?" },
    { categoria: "Cuckold, ciúme e voyeurismo", pergunta: "Você teria curiosidade de assistir a uma encenação erótica entre adultos, com sua parceira como participante?" },
    { categoria: "Cuckold, ciúme e voyeurismo", pergunta: "Você aceitaria conversar sobre a fantasia de sua parceira ter liberdade para explorar desejos fora do relacionamento?" },
    { categoria: "Cuckold, ciúme e voyeurismo", pergunta: "Você gostaria de observar sua parceira em uma apresentação sensual privada, sabendo que tudo foi combinado?" },
    { categoria: "Cuckold, ciúme e voyeurismo", pergunta: "Você teria interesse em uma fantasia em que sua parceira assume o protagonismo e escolhe as regras da experiência?" },
    { categoria: "Cuckold, ciúme e voyeurismo", pergunta: "Você gostaria de explorar o voyeurismo consensual em um espaço adulto privado, com todos cientes e de acordo?" },

    // 3. BRINQUEDOS E PRAZER ANAL
    { categoria: "Brinquedos e prazer anal", pergunta: "Você teria vontade de experimentar brinquedos eróticos para estimulação anal, respeitando os limites e a segurança?" },
    { categoria: "Brinquedos e prazer anal", pergunta: "Você teria curiosidade de usar um plug anal desenvolvido para uso íntimo seguro?" },
    { categoria: "Brinquedos e prazer anal", pergunta: "Você gostaria de escolher brinquedos de estimulação anal junto com sua parceira?" },
    { categoria: "Brinquedos e prazer anal", pergunta: "Você teria interesse em explorar o prazer anal masculino com acessórios apropriados e consentimento?" },
    { categoria: "Brinquedos e prazer anal", pergunta: "Você gostaria de experimentar uma massagem sensual com acessórios próprios para uso íntimo?" },
    { categoria: "Brinquedos e prazer anal", pergunta: "Você teria curiosidade de conversar abertamente sobre pegging, incluindo a possibilidade de sua parceira assumir esse papel?" },
    { categoria: "Brinquedos e prazer anal", pergunta: "Você teria vontade de experimentar um vibrador ou outro brinquedo íntimo em uma experiência a dois?" },
    { categoria: "Brinquedos e prazer anal", pergunta: "Você gostaria de explorar diferentes tipos de brinquedos eróticos, começando pelos mais simples?" },
    { categoria: "Brinquedos e prazer anal", pergunta: "Você teria interesse em incluir acessórios de estimulação anal nas fantasias do casal?" },
    { categoria: "Brinquedos e prazer anal", pergunta: "Você gostaria de montar uma coleção de brinquedos eróticos para experimentar com sua parceira?" },

    // 4. DOMINAÇÃO, SUBMISSÃO E BDSM
    { categoria: "Dominação, submissão e BDSM", pergunta: "Você gostaria de assumir o papel dominante em uma brincadeira erótica consensual?" },
    { categoria: "Dominação, submissão e BDSM", pergunta: "Você teria curiosidade de experimentar o papel submisso e deixar sua parceira conduzir a experiência?" },
    { categoria: "Dominação, submissão e BDSM", pergunta: "Você gostaria de experimentar algemas acolchoadas e acessórios de bondage próprios para adultos?" },
    { categoria: "Dominação, submissão e BDSM", pergunta: "Você teria interesse em uma fantasia em que sua parceira dita as regras de uma noite sensual?" },
    { categoria: "Dominação, submissão e BDSM", pergunta: "Você gostaria de explorar jogos de poder com palavras de segurança e limites previamente definidos?" },
    { categoria: "Dominação, submissão e BDSM", pergunta: "Você teria curiosidade de experimentar vendas nos olhos e estímulos sensoriais durante uma brincadeira íntima?" },
    { categoria: "Dominação, submissão e BDSM", pergunta: "Você gostaria de experimentar uma fantasia de autoridade e submissão interpretada por adultos?" },
    { categoria: "Dominação, submissão e BDSM", pergunta: "Você teria interesse em conhecer o universo BDSM e descobrir quais práticas combinam com seus limites?" },
    { categoria: "Dominação, submissão e BDSM", pergunta: "Você gostaria de experimentar uma dinâmica em que sua parceira assume o controle da sedução?" },
    { categoria: "Dominação, submissão e BDSM", pergunta: "Você teria curiosidade de conversar sobre fantasias de dominação, submissão e disciplina consensual?" },

    // 5. EXIBICIONISMO, FOTOS E SEDUÇÃO
    { categoria: "Exibicionismo, fotos e sedução", pergunta: "Você gostaria de fazer um ensaio fotográfico sensual com sua parceira, somente para uso privado?" },
    { categoria: "Exibicionismo, fotos e sedução", pergunta: "Você teria interesse em gravar vídeos íntimos consensuais com sua parceira, mantendo a privacidade protegida?" },
    { categoria: "Exibicionismo, fotos e sedução", pergunta: "Você gostaria de receber fotos sensuais da sua parceira durante o dia?" },
    { categoria: "Exibicionismo, fotos e sedução", pergunta: "Você teria curiosidade de experimentar uma fantasia de exibicionismo em ambiente privado e seguro?" },
    { categoria: "Exibicionismo, fotos e sedução", pergunta: "Você gostaria de assistir sua parceira fazer uma dança sensual especialmente para você?" },
    { categoria: "Exibicionismo, fotos e sedução", pergunta: "Você teria interesse em compartilhar fantasias de fotos sensuais com outros adultos, apenas com autorização explícita?" },
    { categoria: "Exibicionismo, fotos e sedução", pergunta: "Você gostaria de explorar uma fantasia de sedução em que sua parceira toma a iniciativa?" },
    { categoria: "Exibicionismo, fotos e sedução", pergunta: "Você teria curiosidade de participar de uma festa adulta com regras rigorosas de privacidade e consentimento?" },
    { categoria: "Exibicionismo, fotos e sedução", pergunta: "Você gostaria de experimentar roupas íntimas provocantes ou figurinos sensuais para surpreender sua parceira?" },
    { categoria: "Exibicionismo, fotos e sedução", pergunta: "Você teria interesse em explorar fantasias de observação e apresentação sensual, exclusivamente em locais privados e autorizados?" },

    // 6. FETICHES E PREFERÊNCIAS
    { categoria: "Fetiches e preferências", pergunta: "Você sente curiosidade por fantasias envolvendo pés, massagens e acessórios específicos?" },
    { categoria: "Fetiches e preferências", pergunta: "Você teria interesse em explorar fantasias envolvendo lingerie, meias e saltos altos?" },
    { categoria: "Fetiches e preferências", pergunta: "Você gostaria de experimentar roupas de couro, látex ou outros materiais associados a fetiches?" },
    { categoria: "Fetiches e preferências", pergunta: "Você teria curiosidade de explorar fantasias com uniformes e figurinos adultos?" },
    { categoria: "Fetiches e preferências", pergunta: "Você gostaria de experimentar jogos sensoriais com tecidos, texturas e temperaturas confortáveis e seguras?" },
    { categoria: "Fetiches e preferências", pergunta: "Você teria interesse em explorar perfumes, aromas e estímulos sensoriais na sedução?" },
    { categoria: "Fetiches e preferências", pergunta: "Você gostaria de descobrir e compartilhar fetiches que ainda não revelou à sua parceira?" },
    { categoria: "Fetiches e preferências", pergunta: "Você teria curiosidade de experimentar fantasias com máscaras, acessórios e personagens?" },
    { categoria: "Fetiches e preferências", pergunta: "Você gostaria de explorar fantasias envolvendo roupas sensuais e diferentes estilos de sedução?" },
    { categoria: "Fetiches e preferências", pergunta: "Você teria interesse em conversar sobre um fetiche específico que desperta sua curiosidade, mesmo que ainda não queira realizá-lo?" },

    // 7. ENCENAÇÕES E FANTASIAS
    { categoria: "Encenações e fantasias", pergunta: "Você gostaria de encenar um encontro entre desconhecidos com sua parceira?" },
    { categoria: "Encenações e fantasias", pergunta: "Você teria curiosidade de experimentar uma fantasia de encontro secreto em um hotel?" },
    { categoria: "Encenações e fantasias", pergunta: "Você gostaria de interpretar personagens sedutores em uma brincadeira íntima?" },
    { categoria: "Encenações e fantasias", pergunta: "Você teria interesse em uma fantasia de casal em que sua parceira é a sedutora e você é o pretendente?" },
    { categoria: "Encenações e fantasias", pergunta: "Você gostaria de criar uma história erótica fictícia e encená-la com sua parceira?" },
    { categoria: "Encenações e fantasias", pergunta: "Você teria curiosidade de experimentar uma fantasia de encontro proibido, inteiramente fictícia e combinada?" },
    { categoria: "Encenações e fantasias", pergunta: "Você gostaria de explorar jogos de sedução com figurinos, cenários e personagens adultos?" },
    { categoria: "Encenações e fantasias", pergunta: "Você teria interesse em uma brincadeira de perguntas íntimas para revelar desejos secretos?" },
    { categoria: "Encenações e fantasias", pergunta: "Você gostaria de experimentar uma noite temática em que cada pessoa escolhe uma fantasia consensual?" },
    { categoria: "Encenações e fantasias", pergunta: "Você teria curiosidade de explorar fantasias que envolvam trocar os papéis habituais do casal?" },

    // 8. INTIMIDADE, EXPERIMENTAÇÃO E DESEJOS
    { categoria: "Intimidade, experimentação e desejos", pergunta: "Você gostaria de dedicar uma noite inteira à exploração de fantasias que ambos desejam realizar?" },
    { categoria: "Intimidade, experimentação e desejos", pergunta: "Você teria interesse em conversar sem constrangimento sobre desejos sexuais considerados ousados?" },
    { categoria: "Intimidade, experimentação e desejos", pergunta: "Você gostaria de experimentar uma experiência íntima planejada em conjunto, com liberdade para interromper a qualquer momento?" },
    { categoria: "Intimidade, experimentação e desejos", pergunta: "Você teria curiosidade de descobrir quais fantasias sua parceira guarda em segredo?" },
    { categoria: "Intimidade, experimentação e desejos", pergunta: "Você gostaria de explorar massagens sensuais, preliminares e novas formas de intimidade?" },
    { categoria: "Intimidade, experimentação e desejos", pergunta: "Você teria interesse em experimentar jogos de provocação, desafios e recompensas combinados entre adultos?" },
    { categoria: "Intimidade, experimentação e desejos", pergunta: "Você gostaria de conversar sobre a possibilidade de incluir outra pessoa em uma fantasia, sem qualquer obrigação de realizá-la?" },
    { categoria: "Intimidade, experimentação e desejos", pergunta: "Você teria curiosidade de experimentar algo que sempre teve vontade de propor, mas nunca teve coragem de conversar?" },
    { categoria: "Intimidade, experimentação e desejos", pergunta: "Você gostaria de criar uma lista compartilhada de fantasias, separando as que aceitaria, as que despertam curiosidade e as que não deseja realizar?" },
    { categoria: "Intimidade, experimentação e desejos", pergunta: "Você teria interesse em explorar novas experiências sexuais com diálogo, confiança, proteção e consentimento contínuo?" }
  ];

  const OPCOES = [
    { valor: 1, texto: "Não gosto", cor: "#dc2626" },
    { valor: 2, texto: "Tenho curiosidade", cor: "#eab308" },
    { valor: 3, texto: "Tenho interesse", cor: "#f97316" },
    { valor: 4, texto: "Gosto muito", cor: "#16a34a" }
  ];

  const ESTILOS = `
    #quiz-afinidades-app {
      width: 100%;
      color: #f9fafb;
      font-family: inherit;
    }
    #quiz-afinidades-app .qa-card {
      max-width: 720px;
      margin: 0 auto;
      padding: 24px;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 16px;
      background: rgba(20,20,27,.96);
      box-shadow: 0 12px 40px rgba(0,0,0,.25);
    }
    #quiz-afinidades-app .qa-title {
      font-size: 1.45rem;
      font-weight: 800;
      margin: 0 0 10px;
      line-height: 1.35;
    }
    #quiz-afinidades-app .qa-muted {
      color: #c4c4cc;
      line-height: 1.6;
    }
    #quiz-afinidades-app .qa-progress {
      height: 8px;
      background: #383842;
      border-radius: 20px;
      overflow: hidden;
      margin: 14px 0 22px;
    }
    #quiz-afinidades-app .qa-progress-fill {
      height: 100%;
      background: linear-gradient(90deg,#a855f7,#ec4899);
      transition: width .2s ease;
    }
    #quiz-afinidades-app .qa-option {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 15px;
      border: 2px solid #444450;
      border-radius: 11px;
      background: #292933;
      color: #fff;
      font-size: 1rem;
      text-align: left;
      cursor: pointer;
      transition: background .15s, border-color .15s;
    }
    #quiz-afinidades-app .qa-option:hover {
      background: #373744;
    }
    #quiz-afinidades-app .qa-option[aria-pressed="true"] {
      border-color: #c084fc;
      background: #44245b;
    }
    #quiz-afinidades-app .qa-dot {
      width: 13px;
      height: 13px;
      min-width: 13px;
      border-radius: 50%;
    }
    #quiz-afinidades-app .qa-actions {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 22px;
    }
    #quiz-afinidades-app .qa-btn {
      padding: 12px 22px;
      border: 1px solid #666;
      border-radius: 9px;
      background: #34343e;
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
    }
    #quiz-afinidades-app .qa-btn:disabled {
      opacity: .4;
      cursor: not-allowed;
    }
    #quiz-afinidades-app .qa-btn-primary {
      background: #16a34a;
      border-color: #16a34a;
      color: #fff;
    }
    #quiz-afinidades-app .qa-result {
      padding: 20px;
      border-radius: 12px;
      background: #292933;
      margin: 18px 0;
    }
    #quiz-afinidades-app .qa-result h3 {
      margin: 0 0 10px;
      color: #d8b4fe;
    }
    #quiz-afinidades-app .qa-category {
      margin: 12px 0;
      padding: 12px;
      border: 1px solid #484854;
      border-radius: 9px;
      background: #25252e;
    }
    #quiz-afinidades-app .qa-category-bar {
      height: 7px;
      border-radius: 10px;
      background: #484854;
      overflow: hidden;
      margin-top: 8px;
    }
    #quiz-afinidades-app .qa-category-fill {
      height: 100%;
      background: linear-gradient(90deg,#a855f7,#ec4899);
    }
    #quiz-afinidades-app .qa-error {
      color: #fca5a5;
      min-height: 1.4em;
      margin-top: 12px;
    }
    @media(max-width:480px) {
      #quiz-afinidades-app .qa-card { padding: 16px; }
      #quiz-afinidades-app .qa-btn { flex: 1; }
    }
  `;

  function inicializar() {
    const botaoInicio =
      document.getElementById("btn-iniciar") ||
      Array.from(document.querySelectorAll("button")).find((b) =>
        /iniciar\s+question[aá]rio/i.test(b.textContent.trim())
      );

    let area =
      document.getElementById("area-perguntas") ||
      document.getElementById("quiz-container") ||
      document.getElementById("questionario");

    if (!area && botaoInicio) {
      area = document.createElement("div");
      area.id = "area-perguntas";
      botaoInicio.insertAdjacentElement("afterend", area);
    }

    if (!botaoInicio || !area) {
      console.error(
        "Quiz +18: não encontrei o botão de início ou a área de perguntas. " +
        "Verifique se existe um botão 'Iniciar Questionário' e um elemento #area-perguntas."
      );
      return;
    }

    if (!document.getElementById("qa-estilos")) {
      const estilo = document.createElement("style");
      estilo.id = "qa-estilos";
      estilo.textContent = ESTILOS;
      document.head.appendChild(estilo);
    }

    area.innerHTML = "";
    area.hidden = true;

    let indice = 0;
    let respostas = Array(PERGUNTAS.length).fill(null);
    let iniciado = false;

    const app = document.createElement("div");
    app.id = "quiz-afinidades-app";
    area.appendChild(app);

    function escapar(texto) {
      return String(texto).replace(/[&<>"']/g, (caractere) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[caractere]);
    }

    function renderizarPergunta() {
      const item = PERGUNTAS[indice];
      const progresso = ((indice + 1) / PERGUNTAS.length) * 100;

      app.innerHTML = `
        <section class="qa-card" aria-live="polite">
          <p class="qa-muted">
            Questionário adulto +18 · ${indice + 1} de ${PERGUNTAS.length}
          </p>
          <div class="qa-progress" aria-label="Progresso do questionário">
            <div class="qa-progress-fill" style="width:${progresso}%"></div>
          </div>

          <p class="qa-muted">
            Categoria: <strong>${escapar(item.categoria)}</strong>
          </p>

          <h2 class="qa-title">${escapar(item.pergunta)}</h2>
          <p class="qa-muted">
            Escolha a alternativa que melhor representa sua preferência.
            Não existem respostas certas ou erradas.
          </p>

          <div style="display:grid;gap:10px;margin-top:20px">
            ${OPCOES.map((opcao) => `
              <button
                type="button"
                class="qa-option"
                data-valor="${opcao.valor}"
                aria-pressed="${respostas[indice] === opcao.valor}"
              >
                <span class="qa-dot" style="background:${opcao.cor}"></span>
                <span>${opcao.texto}</span>
              </button>
            `).join("")}
          </div>

          <p id="qa-erro" class="qa-error" role="alert"></p>

          <div class="qa-actions">
            <button
              type="button"
              class="qa-btn"
              id="qa-voltar"
              ${indice === 0 ? "disabled" : ""}
            >Voltar</button>
            <button
              type="button"
              class="qa-btn qa-btn-primary"
              id="qa-proximo"
            >${indice === PERGUNTAS.length - 1 ? "Ver meu resultado" : "Próxima"}</button>
          </div>
        </section>
      `;

      app.querySelectorAll("[data-valor]").forEach((botao) => {
        botao.addEventListener("click", () => {
          respostas[indice] = Number(botao.dataset.valor);
          renderizarPergunta();
        });
      });

      app.querySelector("#qa-voltar").addEventListener("click", () => {
        if (indice > 0) {
          indice--;
          renderizarPergunta();
        }
      });

      app.querySelector("#qa-proximo").addEventListener("click", () => {
        if (respostas[indice] === null) {
          app.querySelector("#qa-erro").textContent =
            "Selecione uma das quatro alternativas para continuar.";
          return;
        }

        if (indice < PERGUNTAS.length - 1) {
          indice++;
          renderizarPergunta();
        } else {
          renderizarResultado();
        }
      });
    }

    function renderizarResultado() {
      const soma = respostas.reduce((total, valor) => total + valor, 0);
      const media = soma / PERGUNTAS.length;

      let perfil;
      let descricao;

      if (media < 1.75) {
        perfil = "Perfil reservado";
        descricao =
          "Suas respostas indicam preferência por manter limites mais definidos em relação às fantasias apresentadas. Curiosidade não significa obrigação de experimentar.";
      } else if (media < 2.5) {
        perfil = "Perfil curioso";
        descricao =
          "Suas respostas indicam abertura para conhecer algumas fantasias, embora muitas ainda possam estar apenas no campo da curiosidade.";
      } else if (media < 3.25) {
        perfil = "Perfil explorador";
        descricao =
          "Suas respostas demonstram interesse por diferentes experiências e disposição para conversar sobre desejos e possibilidades.";
      } else {
        perfil = "Perfil de alta afinidade";
        descricao =
          "Suas respostas indicam afinidade elevada com várias das fantasias apresentadas. O diálogo e os limites individuais continuam essenciais.";
      }

      const categorias = [...new Set(PERGUNTAS.map((p) => p.categoria))]
        .map((categoria) => {
          const indices = PERGUNTAS
            .map((p, i) => p.categoria === categoria ? i : -1)
            .filter((i) => i !== -1);
          const pontos = indices.reduce((s, i) => s + respostas[i], 0);
          const mediaCategoria = pontos / indices.length;
          return { categoria, media: mediaCategoria };
        })
        .sort((a, b) => b.media - a.media);

      const favoritas = PERGUNTAS
        .map((p, i) => ({ ...p, resposta: respostas[i] }))
        .filter((p) => p.resposta === 4);

      const curiosidades = PERGUNTAS
        .map((p, i) => ({ ...p, resposta: respostas[i] }))
        .filter((p) => p.resposta === 2 || p.resposta === 3);

      app.innerHTML = `
        <section class="qa-card" aria-live="polite">
          <h2 class="qa-title">Seu resultado +18</h2>
          <p class="qa-muted">
            Você concluiu as ${PERGUNTAS.length} perguntas.
            Este resultado representa suas respostas, não um diagnóstico.
          </p>

          <div class="qa-result">
            <h3>${perfil}</h3>
            <p>${descricao}</p>
            <p><strong>Pontuação total:</strong> ${soma} / ${PERGUNTAS.length * 4}</p>
            <p><strong>Média geral:</strong> ${media.toFixed(2).replace(".", ",")} / 4</p>
          </div>

          <h3>Suas afinidades por categoria</h3>
          ${categorias.map((c) => `
            <div class="qa-category">
              <strong>${escapar(c.categoria)}</strong>
              <span style="float:right">${c.media.toFixed(1).replace(".", ",")} / 4</span>
              <div class="qa-category-bar">
                <div class="qa-category-fill" style="width:${c.media / 4 * 100}%"></div>
              </div>
            </div>
          `).join("")}

          <h3 style="margin-top:22px">Fantasias que você marcou como “Gosto muito”</h3>
          ${
            favoritas.length
              ? `<ul>${favoritas.map((p) =>
                  `<li style="margin-bottom:8px">${escapar(p.pergunta)}</li>`
                ).join("")}</ul>`
              : `<p class="qa-muted">Você não marcou nenhuma fantasia como “Gosto muito”.</p>`
          }

          <h3 style="margin-top:22px">Fantasias que despertam curiosidade ou interesse</h3>
          ${
            curiosidades.length
              ? `<ul>${curiosidades.map((p) =>
                  `<li style="margin-bottom:8px">${escapar(p.pergunta)} <span class="qa-muted">(${OPCOES[p.resposta - 1].texto})</span></li>`
                ).join("")}</ul>`
              : `<p class="qa-muted">Nenhuma fantasia foi marcada como curiosidade ou interesse.</p>`
          }

          <p class="qa-muted" style="margin-top:20px;font-size:.9rem">
            Este questionário é recreativo e destinado exclusivamente a adultos.
            Fantasias não representam consentimento. Qualquer experiência real
            depende da vontade livre, explícita e contínua de todas as pessoas.
          </p>

          <div class="qa-actions">
            <button type="button" class="qa-btn" id="qa-revisar">
              Revisar respostas
            </button>
            <button type="button" class="qa-btn qa-btn-primary" id="qa-refazer">
              Refazer questionário
            </button>
          </div>
        </section>
      `;

      app.querySelector("#qa-revisar").addEventListener("click", () => {
        indice = 0;
        renderizarPergunta();
      });

      app.querySelector("#qa-refazer").addEventListener("click", () => {
        indice = 0;
        respostas = Array(PERGUNTAS.length).fill(null);
        renderizarPergunta();
      });

      app.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    botaoInicio.addEventListener("click", (evento) => {
      evento.preventDefault();

      // Verifica eventual aceite de privacidade já presente na página
      const checkboxPrivacidade = Array.from(
        document.querySelectorAll('input[type="checkbox"]')
      ).find((checkbox) => {
        const texto = (
          checkbox.closest("label")?.textContent ||
          checkbox.parentElement?.textContent ||
          ""
        ).toLowerCase();

        return texto.includes("privacidade") ||
               texto.includes("respostas") ||
               texto.includes("dados");
      });

      if (checkboxPrivacidade && !checkboxPrivacidade.checked) {
        alert("Leia e aceite a política de privacidade antes de iniciar.");
        return;
      }

      if (!iniciado) {
        iniciado = true;
        botaoInicio.hidden = true;
        area.hidden = false;
        indice = 0;
        respostas = Array(PERGUNTAS.length).fill(null);
        renderizarPergunta();
        area.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    console.info(
      "Quiz de Afinidades +18 inicializado com " +
      PERGUNTAS.length + " perguntas."
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializar, { once: true });
  } else {
    inicializar();
  }
})();
