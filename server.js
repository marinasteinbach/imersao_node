import fastify from 'fastify';
const servidor = fastify ();
const obterReceitas = [
    {id: 1, nome: 'Bolo de fuba', ingredientes: 5  },
    {id: 2, nome: 'Bolo de chocolate', ingredientes:6},
    {id: 3, nome: 'Panqueca', ingredientes:3}
]
servidor.get('/usuarios', () => {
    return obterReceitas
})
const rece = [
    {id: 1, nome: 'Bolo de fuba', ingredientes: 5 },
    {id: 2, nome: 'Bolo de chocolate', ingredientes:6},
    {id: 3, nome: 'Panqueca', ingredientes:3}
]
servidor.get('/receitas', () => {
    return rece
})
servidor.listen({
    port:3000
})