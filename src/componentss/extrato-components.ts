import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/contas.js";
import { GrupoTransacao } from "../types/grupoTransacao.js";
import { formatarMoeda, formatarData} from "../utls/formatters.js";

const elementosRegistrosTransacoesExtrato:HTMLElement =  document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();

function renderizarExtrato():void{
    const gruposTransacoes:GrupoTransacao[]= Conta.getGruposTransacoes();
    elementosRegistrosTransacoesExtrato.innerHTML="";
    let htmlRegistroTransacoes : string ="";

    for (let gruposTransacao of gruposTransacoes)
    {
        let htmlTransacaoItem: string = "";
        for(let transacao of gruposTransacao.transacoes)
        {
            htmlTransacaoItem += `
            <div class="transacao-item">
            <div class="transacao-info">
                <span class="tipo">${transacao.tipoTransacao}</span>
                <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
            </div>
            <time class="data">${formatarData(transacao.data,FormatoData.DIA_MES)}</time>
        </div>
            `;
        }
        htmlRegistroTransacoes+=`
        <div class = "transacoes-group>
        <strong class"mes-group">${gruposTransacao.label}</strong>
        ${htmlTransacaoItem}
        </div>
        `;
    }
    if(htmlRegistroTransacoes ===""){
        htmlRegistroTransacoes=`<div>Não há transações registradas.</div>`
    }
    elementosRegistrosTransacoesExtrato.innerHTML = htmlRegistroTransacoes;

}
const ExtratoComponent ={
    atualizar():void {
        renderizarExtrato();
    }
}
export default ExtratoComponent;