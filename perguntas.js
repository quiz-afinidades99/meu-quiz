// Configurações de Conexão com o seu banco do Supabase
const supabaseUrl = 'https://gfdunfrpfjbbibwhmhsa.supabase.co';
const supabaseKey = 'sb_publishable_ziGqT-rTJ6yGfWEyaJ2xIQ_5QGLTrER';

// Cria o cliente de conexão usando a biblioteca carregada pelo HTML
const supabaseClient = window.supabase
    ? window.supabase.createClient(supabaseUrl, supabaseKey)
    : null;

// Função principal que busca e exibe as perguntas na tela
async function carregarPerguntas() {
    const areaPerguntas = document.getElementById('area-perguntas');
    
   if (!supabaseClient) {
        areaPerguntas.innerHTML = '<p style="color:red;">Erro interno: Conexão com o Supabase falhou no carregamento.</p>';
        return;
    }

    // Puxa todas as linhas cadastradas na tabela 'perguntas'
    const { data, error } = await supabaseClient.from('perguntas').select('*');

    if (error) {
        areaPerguntas.innerHTML = '<p style="color:red;">Erro: Não foi possível ler as perguntas do banco de dados.</p>';
        console.error("Detalhes do erro do Supabase:", error);
        return;
    }

    // Limpa o texto "Carregando..."
    areaPerguntas.innerHTML = '';
    
    if (!data || data.length === 0) {
        areaPerguntas.innerHTML = '<p style="color:gray;">Nenhuma pergunta cadastrada na tabela do Supabase.</p>';
        return;
    }

    // Monta a lista de perguntas na tela do usuário
    data.forEach((item, index) => {
        const div = document.createElement('div');
        div.style.marginBottom = '15px';
        div.style.textAlign = 'left';
        div.innerHTML = `<p style="color:white; margin:0;"><strong>${index + 1}.</strong> ${item.enunciado}</p>`;
        areaPerguntas.appendChild(div);
    });
}

// Inicializa a busca assim que a estrutura do site carregar
document.addEventListener('DOMContentLoaded', carregarPerguntas);
