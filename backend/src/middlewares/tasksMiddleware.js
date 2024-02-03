/*
 * Middleware: Validadores de Campos
 * 
 * Estes middlewares garantem que os campos 'title' e 'status' estejam presentes e não vazios
 * no corpo das requisições antes de prosseguirem para as funções principais do controlador.
 * São úteis para assegurar a integridade dos dados e adicionar uma camada de validação.
 */ 

// Middleware para validar o campo 'title' no corpo da requisição
const validateFieldBody = (req,res,next)=>{
    const {body} = req;
    // Verifica se o campo 'title' está presente no corpo da requisição
    if(body.title === undefined){
       return res.status(400).json({message:'the fild "title" is required'});
    }
   // Verifica se o campo 'title' não está vazio
    if(body.title === ''){
       return res.status(400).json({message:'"title" cannot be empty'});
    }
   // Se ambas as verificações passarem, chama a função next() para prosseguir para o próximo middleware ou rota
    next();
};
// Middleware para validar o campo 'status' no corpo da requisição
const validateFieldStatus = (req,res,next)=>{
   const {body} = req;
   // Verifica se o campo 'status' está presente no corpo da requisição
   if(body.status === undefined){
      return res.status(400).json({message:'the fild "status" is required'});
   }
   // Verifica se o campo 'status' não está vazio
   if(body.status === ''){
      return res.status(400).json({message:'"status" cannot be empty'});
   }
    // Se ambas as verificações passarem, chama a função next() para prosseguir para o próximo middleware ou rota
   next();
};
// Exporta os middlewares para uso em outros arquivos
module.exports ={
  validateFieldBody,
  validateFieldStatus
}