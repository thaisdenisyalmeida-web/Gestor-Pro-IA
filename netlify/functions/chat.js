// Dentro do seu try/catch na função do Netlify
const response = await fetch("https://api.groq.com/openai/v1/chat/completions", { ... });

// Adicione isso para debugar:
const responseText = await response.text(); 
console.log("Resposta bruta da Groq:", responseText);

if (!response.ok) {
  return {
    statusCode: response.status,
    body: JSON.stringify({ error: `Erro na API: ${response.status} - ${responseText}` })
  };
}

const data = JSON.parse(responseText);
