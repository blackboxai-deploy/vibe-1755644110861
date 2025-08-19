export async function POST(request) {
  try {
    const { prompt } = await request.json();
    
    // Configuração da API customizada para geração de imagens
    const response = await fetch('https://oi-server.onrender.com/chat/completions', {
      method: 'POST',
      headers: {
        'customerId': 'richardsabinoss@gmail.com',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer xxx'
      },
      body: JSON.stringify({
        model: 'replicate/black-forest-labs/flux-1.1-pro',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return Response.json({ 
      success: true, 
      imageUrl: data.choices?.[0]?.message?.content || data.url || data.image_url
    });

  } catch (error) {
    console.error('Erro na geração da imagem:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}