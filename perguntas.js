// Configuração do Supabase
const supabaseUrl = 'https://supabase.co';
const supabaseKey = 'sb_publishable_ziGqT-rTJ6yGfWEyaJ2xIQ_5QGLTrER';

// Inicializa a conexão com o Supabase de forma segura
const supabase = (typeof supabase !== 'undefined' && supabase.createClient) 
    ? supabase.createClient(supabaseUrl, supabaseKey) 
    : (typeof window['@supabase/supabase-js'] !== 'undefined') 
        ? window['@supabase/supabase-js'].createClient(supabaseUrl, supabaseKey)
        : null;

// Função para buscar as perguntas do banco de dados ao carregar a página
async function carregarPerguntas() {
    const areaPerguntas = document.getElementById('area-perguntas');
    
    if (!supabase) {
        areaPerguntas.innerHTML = '<p style="color:red;">Erro: Conexão com o banco de dados não configurada corretamente.</p>';
        return;
    }

    // Busca as perguntas na tabela 'perguntas'
    const { data, error } = await supabase.from('perguntas').select('*');

    if (error) {
        areaPerguntas.innerHTML = '<p style="color:red;">Erro ao carregar as perguntas do banco.</p>';
        console.error(error);
        return;
    }

    // Se tudo der certo, limpa a mensagem antiga e mostra as perguntas
    areaPerguntas.innerHTML = '';
    
    if (data.length === 0) {
        areaPerguntas.innerHTML = '<p style="color:gray;">Nenhuma pergunta encontrada no banco de dados.</p>';
        return;
    }

    data.forEach((item, index) => {
        const div = document.createElement('div');
        div.style.marginBottom = '15px';
        div.style.textAlign = 'left';
        div.innerHTML = `<p style="color:white; margin:0;"><strong>${index + 1}.</strong> ${item.enunciado}</p>`;
        areaPerguntas.appendChild(div);
    });
}

// Executa a função assim que a página abre
document.addEventListener('DOMContentLoaded', carregarPerguntas);
