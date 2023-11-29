let nodes = [];
let edges = [];

const container = document.getElementById('network');
const options = {};
const network = new vis.Network(container, { nodes, edges }, options);

function adicionarNodos() {
    const numNodesInput = document.getElementById('numNodes');
    const numNodes = parseInt(numNodesInput.value, 10);

    if (!isNaN(numNodes) && numNodes > 0) {
        // Adicionar novos nós aleatórios
        for (let i = 0; i < numNodes; i++) {
            const newNodeId = nodes.length + 1;
            nodes.push({ id: newNodeId, label: `Investidor ${newNodeId}` });

            // Conectar o novo nó a um nó existente aleatório
            if (nodes.length > 1) {
                const targetNodeId = Math.floor(Math.random() * (nodes.length - 1)) + 1;
                edges.push({ from: newNodeId, to: targetNodeId });
            }
        }

        // Atualizar o grafo
        network.setData({ nodes, edges });

        // Limpar o campo de entrada
        numNodesInput.value = '';
    }
}
