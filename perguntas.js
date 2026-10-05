/* ==========================================================
   QUIZ DE AFINIDADES +18
   80 perguntas | Login Supabase | Página contínua
   ========================================================== */

(() => {
  "use strict";

  if (window.__quizAfinidadesInicializado) return;
  window.__quizAfinidadesInicializado = true;

  /* ==========================================================
     80 PERGUNTAS
     ========================================================== */

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

  /* ==========================================================
     ESTILOS
     ========================================================== */

  const ESTILOS = `
    #quiz-afinidades-app {
      width: 100%;
      color: #f9fafb;
      font-family: inherit;
    }

    #quiz-afinidades-app .qa-card {
      width: 100%;
      margin: 0 auto;
      padding: 20px;
      box-sizing: border-box;
    }

    #quiz-afinidades-app .qa-question {
      margin: 0 0 24px;
      padding: 20px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 14px;
      background: rgba(20,20,27,.96);
      box-shadow: 0 6px 20px rgba(0,0,0,.15);
    }

    #quiz-afinidades-app .qa-number {
      color: #c4c4cc;
      font-size: .9rem;
      margin-bottom: 8px;
    }

    #quiz-afinidades-app .qa-category {
      color: #c4c4cc;
      font-size: .9rem;
      margin-bottom: 10px;
    }

    #quiz-afinidades-app .qa-question h3 {
      margin: 0 0 18px;
      line-height: 1.5;
      font-size: 1.08rem;
    }

    #quiz-afinidades-app .qa-options {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 10px;
    }

    #quiz-afinidades-app .qa-option {
      min-height: 58px;
      padding: 10px 8px;
      border: 2px solid #444450;
      border-radius: 10px;
      background: #292933;
      color: #fff;
      font-size: .92rem;
      cursor: pointer;
      transition: .15s;
    }

    #quiz-afinidades-app .qa-option:hover {
      background: #373744;
    }

    #quiz-afinidades-app .qa-option.selected {
      border-color: #16a34a;
      background: #164e2b;
      font-weight: 700;
    }

    #quiz-afinidades-app .qa-dot {
      display: block;
      width: 10px;
      height: 10px;
      margin: 0 auto 6px;
      border-radius: 50%;
    }

    #quiz-afinidades-app .qa-final {
      width: 100%;
      margin: 20px 0 40px;
      padding: 16px 22px;
      border: 0;
      border-radius: 10px;
      background: #16a34a;
      color: white;
      font-size: 1.05rem;
      font-weight: 700;
      cursor: pointer;
    }

    #quiz-afinidades-app .qa-error {
      color: #fca5a5;
      min-height: 1.4em;
      margin: 10px 0;
    }

    #quiz-afinidades-app .qa-result {
      padding: 22px;
      border-radius: 14px;
      background: #292933;
      margin-bottom: 20px;
    }

    #quiz-afinidades-app .qa-result h2 {
      margin-top: 0;
    }

    #quiz-afinidades-app .qa-category-result {
      margin: 12px 0;
      padding: 14px;
      border: 1px solid #484854;
      border-radius: 9px;
      background: #25252e;
    }

    #quiz-afinidades-app .qa-bar {
      height: 8px;
      margin-top: 8px;
      border-radius: 10px;
      background: #484854;
      overflow: hidden;
    }

    #quiz-afinidades-app .qa-bar-fill {
      height: 100%;
      background: linear-gradient(90deg,#a855f7,#ec4899);
    }

    #quiz-afinidades-app .qa-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    #quiz-afinidades-app .qa-btn {
      padding: 12px 20px;
      border: 1px solid #666;
      border-radius: 9px;
      background: #34343e;
      color: white;
      font-weight: 700;
      cursor: pointer;
    }

    #quiz-afinidades-app .qa-primary {
      background: #16a34a;
      border-color: #16a34a;
    }

    @media (max-width: 700px) {
      #quiz-afinidades-app .qa-options {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 420px) {
      #quiz-afinidades-app .qa-options {
        grid-template-columns: 1fr;
      }
    }
  `;

  /* ==========================================================
     FUNÇÕES AUXILIARES
     ========================================================== */

  function escapar(texto) {
    return String(texto).replace(/[&<>"']/g, caractere => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[caractere]);
  }

  /* ==========================================================
     AUTENTICAÇÃO SUPABASE
     ========================================================== */

  let supabaseClient = null;

  function iniciarSupabase() {
    if (
      window.supabase &&
      window.SUPABASE_URL &&
      window.SUPABASE_PUBLISHABLE_KEY
    ) {
      supabaseClient = window.supabase.createClient(
        window.SUPABASE_URL,
        window.SUPABASE_PUBLISHABLE_KEY
      );
    }
  }

  async function atualizarTelaLogin() {
    const telaLogin = document.getElementById("tela-login");
    const telaQuiz = document.getElementById("tela-quiz");

    if (!telaLogin || !telaQuiz) return;

    if (!supabaseClient) {
      telaLogin.hidden = false;
      telaQuiz.hidden = true;
      mostrarMensagemLogin(
        "Não foi possível conectar ao sistema de login. Verifique o Supabase.",
        true
      );
      return;
    }

    const { data } = await supabaseClient.auth.getSession();

    if (data.session) {
      telaLogin.hidden = true;
      telaQuiz.hidden = false;

      const usuario = data.session.user;
      const nome =
        usuario.user_metadata?.name ||
        usuario.user_metadata?.full_name ||
        usuario.email ||
        "Usuário";

      const campoUsuario = document.getElementById("usuario-logado");

      if (campoUsuario) {
        campoUsuario.textContent = `Olá, ${nome}`;
      }
    } else {
      telaLogin.hidden = false;
      telaQuiz.hidden = true;
    }
  }

  function mostrarMensagemLogin(mensagem, erro = false) {
    const campo = document.getElementById("mensagem-login");

    if (!campo) return;

    campo.textContent = mensagem;
    campo.style.color = erro ? "#fca5a5" : "#86efac";
  }

  async function entrarComGoogle() {
    if (!supabaseClient) {
      mostrarMensagemLogin("Sistema de login ainda não está conectado.", true);
      return;
    }

    const redirectTo =
      window.location.origin + window.location.pathname;

    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo
      }
    });

    if (error) {
      mostrarMensagemLogin(error.message, true);
    }
  }

  async function cadastrarUsuario() {
    if (!supabaseClient) {
      mostrarMensagemLogin("Sistema de login ainda não está conectado.", true);
      return;
    }

    const nome = document.getElementById("cadastro-nome")?.value.trim();
    const email = document.getElementById("cadastro-email")?.value.trim();
    const senha = document.getElementById("cadastro-senha")?.value;
    const confirmar = document.getElementById("cadastro-confirmar")?.value;

    if (!nome || !email || !senha || !confirmar) {
      mostrarMensagemLogin("Preencha todos os campos do cadastro.", true);
      return;
    }

    if (senha.length < 6) {
      mostrarMensagemLogin(
        "A senha precisa ter pelo menos 6 caracteres.",
        true
      );
      return;
    }

    if (senha !== confirmar) {
      mostrarMensagemLogin("As senhas não são iguais.", true);
      return;
    }

    mostrarMensagemLogin("Criando sua conta...");

    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password: senha,
      options: {
        data: {
          name: nome
        }
      }
    });

    if (error) {
      mostrarMensagemLogin(error.message, true);
      return;
    }

    if (data.session) {
      mostrarMensagemLogin("Conta criada com sucesso!");
      await atualizarTelaLogin();
    } else {
      mostrarMensagemLogin(
        "Conta criada. Verifique seu e-mail para confirmar o cadastro."
      );
    }
  }

  async function entrarComEmail() {
    if (!supabaseClient) {
      mostrarMensagemLogin("Sistema de login ainda não está conectado.", true);
      return;
    }

    const email = document.getElementById("login-email")?.value.trim();
    const senha = document.getElementById("login-senha")?.value;

    if (!email || !senha) {
      mostrarMensagemLogin("Informe seu e-mail e sua senha.", true);
      return;
    }

    mostrarMensagemLogin("Entrando...");

    const { error } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password: senha
      });

    if (error) {
      mostrarMensagemLogin(
        "E-mail ou senha incorretos.",
        true
      );
      return;
    }

    await atualizarTelaLogin();
  }

  async function sair() {
    if (supabaseClient) {
      await supabaseClient.auth.signOut();
    }

    location.reload();
  }

  /* ==========================================================
     QUESTIONÁRIO
     ========================================================== */

  let respostas = Array(PERGUNTAS.length).fill(null);

  function localizarElementos() {
    const botaoInicio = document.getElementById("btn-iniciar");
    const area = document.getElementById("area-perguntas");

    if (!botaoInicio || !area) {
      console.error("Elementos do questionário não encontrados.");
      return null;
    }

    return { botaoInicio, area };
  }

  function renderizarQuestionario(area) {
    const app = document.createElement("div");
    app.id = "quiz-afinidades-app";

    area.innerHTML = "";
    area.appendChild(app);

    app.innerHTML = `
      <section class="qa-card">

        <h2>Questionário de Afinidades +18</h2>

        <p>
          Responda às 80 perguntas abaixo.
          As perguntas estão todas nesta página.
        </p>

        <p>
          Escolha uma das quatro alternativas em cada pergunta.
        </p>

        <div id="qa-lista-perguntas">

          ${PERGUNTAS.map((item, indice) => `
            <article class="qa-question" id="qa-pergunta-${indice}">

              <div class="qa-number">
                Pergunta ${indice + 1} de ${PERGUNTAS.length}
              </div>

              <div class="qa-category">
                Categoria: <strong>${escapar(item.categoria)}</strong>
              </div>

              <h3>
                ${escapar(item.pergunta)}
              </h3>

              <div class="qa-options">

                ${OPCOES.map(opcao => `
                  <button
                    type="button"
                    class="qa-option"
                    data-indice="${indice}"
                    data-valor="${opcao.valor}"
                  >
                    <span
                      class="qa-dot"
                      style="background:${opcao.cor}"
                    ></span>

                    ${escapar(opcao.texto)}
                  </button>
                `).join("")}

              </div>

            </article>
          `).join("")}

        </div>

        <p id="qa-erro" class="qa-error"></p>

        <button
          type="button"
          id="qa-finalizar"
          class="qa-final"
        >
          Finalizar e Ver Resultado
        </button>

      </section>
    `;

    app.querySelectorAll(".qa-option").forEach(botao => {

      botao.addEventListener("click", () => {

        const indice = Number(botao.dataset.indice);
        const valor = Number(botao.dataset.valor);

        respostas[indice] = valor;

        const opcoes = app.querySelectorAll(
          `.qa-option[data-indice="${indice}"]`
        );

        opcoes.forEach(opcao => {
          opcao.classList.toggle(
            "selected",
            Number(opcao.dataset.valor) === valor
          );
        });

        const erro = document.getElementById("qa-erro");

        if (erro) {
          erro.textContent = "";
        }
      });

    });

    document
      .getElementById("qa-finalizar")
      .addEventListener("click", () => {

        const primeiraSemResposta =
          respostas.findIndex(valor => valor === null);

        if (primeiraSemResposta !== -1) {

          const erro = document.getElementById("qa-erro");

          erro.textContent =
            `Você ainda não respondeu à pergunta ${primeiraSemResposta + 1}.`;

          document
            .getElementById(`qa-pergunta-${primeiraSemResposta}`)
            .scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

          return;
        }

        renderizarResultado(app);
      });
  }

  /* ==========================================================
     RESULTADO
     ========================================================== */

  function renderizarResultado(app) {

    const soma = respostas.reduce(
      (total, valor) => total + valor,
      0
    );

    const media = soma / PERGUNTAS.length;

    let perfil;
    let descricao;

    if (media < 1.75) {

      perfil = "Perfil reservado";

      descricao =
        "Suas respostas indicam preferência por manter limites mais definidos em relação às fantasias apresentadas.";

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

    const categorias =
      [...new Set(PERGUNTAS.map(p => p.categoria))]
      .map(categoria => {

        const indices =
          PERGUNTAS
            .map((p, i) =>
              p.categoria === categoria ? i : -1
            )
            .filter(i => i !== -1);

        const pontos =
          indices.reduce(
            (total, i) => total + respostas[i],
            0
          );

        return {
          categoria,
          media: pontos / indices.length
        };

      })
      .sort((a, b) => b.media - a.media);

    const favoritas =
      PERGUNTAS
        .map((p, i) => ({
          ...p,
          resposta: respostas[i]
        }))
        .filter(p => p.resposta === 4);

    const curiosidades =
      PERGUNTAS
        .map((p, i) => ({
          ...p,
          resposta: respostas[i]
        }))
        .filter(
          p => p.resposta === 2 || p.resposta === 3
        );

    app.innerHTML = `
      <section class="qa-card">

        <div class="qa-result">

          <h2>🎯 Seu resultado</h2>

          <h2>${escapar(perfil)}</h2>

          <p>${escapar(descricao)}</p>

          <p>
            <strong>Pontuação total:</strong>
            ${soma} / ${PERGUNTAS.length * 4}
          </p>

          <p>
            <strong>Média geral:</strong>
            ${media.toFixed(2).replace(".", ",")} / 4
          </p>

        </div>

        <h3>Suas afinidades por categoria</h3>

        ${categorias.map(categoria => `

          <div class="qa-category-result">

            <strong>
              ${escapar(categoria.categoria)}
            </strong>

            <span style="float:right">
              ${categoria.media.toFixed(1).replace(".", ",")} / 4
            </span>

            <div class="qa-bar">

              <div
                class="qa-bar-fill"
                style="width:${(categoria.media / 4) * 100}%"
              ></div>

            </div>

          </div>

        `).join("")}

        <h3 style="margin-top:30px">
          ❤️ Você marcou "Gosto muito"
        </h3>

        ${
          favoritas.length
            ? `
              <ul>
                ${favoritas.map(p =>
                  `<li style="margin-bottom:8px">
                    ${escapar(p.pergunta)}
                  </li>`
                ).join("")}
              </ul>
            `
            : `
              <p>
                Você não marcou nenhuma fantasia como
                "Gosto muito".
              </p>
            `
        }

        <h3 style="margin-top:30px">
          🔎 Curiosidades e interesses
        </h3>

        ${
          curiosidades.length
            ? `
              <ul>
                ${curiosidades.map(p =>
                  `<li style="margin-bottom:8px">
                    ${escapar(p.pergunta)}
                    —
                    ${escapar(OPCOES[p.resposta - 1].texto)}
                  </li>`
                ).join("")}
              </ul>
            `
            : `
              <p>
                Nenhuma fantasia foi marcada como
                curiosidade ou interesse.
              </p>
            `
        }

        <p style="margin-top:30px;font-size:.9rem;color:#c4c4cc">
          Este questionário é recreativo e destinado
          exclusivamente a adultos.
          Fantasias não representam consentimento.
          Qualquer experiência real depende da vontade
          livre, explícita e contínua de todas as pessoas.
        </p>

        <div class="qa-actions">

          <button
            type="button"
            id="qa-refazer"
            class="qa-btn qa-primary"
          >
            Refazer questionário
          </button>

        </div>

      </section>
    `;

    document
      .getElementById("qa-refazer")
      .addEventListener("click", () => {

        respostas =
          Array(PERGUNTAS.length).fill(null);

        const elementos = localizarElementos();

        if (elementos) {
          renderizarQuestionario(elementos.area);

          window.scrollTo({
            top: elementos.area.offsetTop,
            behavior: "smooth"
          });
        }

      });

    window.scrollTo({
      top: app.offsetTop,
      behavior: "smooth"
    });
  }

  /* ==========================================================
     INICIALIZAÇÃO
     ========================================================== */

  function inicializar() {

    iniciarSupabase();

    const estilo = document.createElement("style");
    estilo.id = "qa-estilos";

    if (!document.getElementById("qa-estilos")) {
      estilo.textContent = ESTILOS;
      document.head.appendChild(estilo);
    }

    /* ---------- LOGIN ---------- */

    const google =
      document.getElementById("btn-google");

    const cadastrar =
      document.getElementById("btn-cadastrar");

    const entrar =
      document.getElementById("btn-entrar");

    const sairBotao =
      document.getElementById("btn-sair");

    if (google) {
      google.addEventListener(
        "click",
        entrarComGoogle
      );
    }

    if (cadastrar) {
      cadastrar.addEventListener(
        "click",
        cadastrarUsuario
      );
    }

    if (entrar) {
      entrar.addEventListener(
        "click",
        entrarComEmail
      );
    }

    if (sairBotao) {
      sairBotao.addEventListener(
        "click",
        sair
      );
    }

    if (supabaseClient) {

      supabaseClient.auth.onAuthStateChange(
        () => {
          atualizarTelaLogin();
        }
      );

    }

    atualizarTelaLogin();

    /* ---------- QUESTIONÁRIO ---------- */

    const elementos =
      localizarElementos();

    if (!elementos) return;

    const {
      botaoInicio,
      area
    } = elementos;

    area.hidden = true;

    botaoInicio.addEventListener(
      "click",
      evento => {

        evento.preventDefault();

        const checkbox =
          document.getElementById("chk-lgpd");

        if (checkbox && !checkbox.checked) {

          alert(
            "Leia e aceite a política de privacidade antes de iniciar."
          );

          return;
        }

        botaoInicio.hidden = true;

        area.hidden = false;

        respostas =
          Array(PERGUNTAS.length).fill(null);

        renderizarQuestionario(area);

        area.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

    console.info(
      "Quiz de Afinidades inicializado com " +
      PERGUNTAS.length +
      " perguntas."
    );
  }

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      inicializar,
      { once: true }
    );

  } else {

    inicializar();

  }

})();
