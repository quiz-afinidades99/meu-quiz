// Configuração do Supabase - SEUS DADOS JÁ CONFIGURADOS
const supabaseUrl = 'https://supabase.co';
const supabaseKey = 'sb_publishable_ziGqT-rTJ6yGfWEyaJ2xIQ_5QGLTrER'; // <-- Garanta que a sua chave gigante esteja aqui dentro

// Inicializa a conexão com o Supabase
const { createClient } = window['@supabase/supabase-js'] || {};
const supabase = (typeof createClient === 'function') ? createClient(supabaseUrl, supabaseKey) : null;

// Função para buscar as perguntas do banco de dados ao carregar a página
async function carregarPerguntas() {
    const areaPerguntas = document.getElementById('area-perguntas');
    
    if (!supabase) {
        areaPerguntas.innerHTML = '<p style="color:red;">Erro: Conexão com o banco de dados não configurada.</p>';
        return;
    }

    // Busca as perguntas na tabela 'perguntas'
    const { data, error } = await supabase.from('perguntas').select('*');

    if (error) {
        areaPerguntas.innerHTML = '<p style="color:red;">Erro ao carregar as perguntas do banco.</p>';
        console.error(error);
        return;
    }

    // Se tudo der certo, limpa o "Carregando..." e mostra as perguntas
    areaPerguntas.innerHTML = '';
    data.forEach((item, index) => {
        const div = document.createElement('div');
        div.style.marginBottom = '15px';
        div.innerHTML = `<p><strong>${index + 1}.</strong> ${item.enunciado}</p>`;
        areaPerguntas.appendChild(div);
    });
}

// Executa a função assim que a página abre
document.addEventListener('DOMContentLoaded', carregarPerguntas);
