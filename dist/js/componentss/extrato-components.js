import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/contas.js";
import { formatarMoeda, formatarData } from "../utls/formatters.js";
const elementosRegistrosTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementosRegistrosTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let gruposTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of gruposTransacao.transacoes) {
            htmlTransacaoItem += `
            <div class="transacao-item">
            <div class="transacao-info">
                <span class="tipo">${transacao.tipoTransacao}</span>
                <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
            </div>
            <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
        </div>
            `;
        }
        htmlRegistroTransacoes += `
        <div class = "transacoes-group>
        <strong class"mes-group">${gruposTransacao.label}</strong>
        ${htmlTransacaoItem}
        </div>
        `;
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = `<div>Não há transações registradas.</div>`;
    }
    elementosRegistrosTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
const ExtratoComponent = {
    atualizar() {
        renderizarExtrato();
    }
};
export default ExtratoComponent;
