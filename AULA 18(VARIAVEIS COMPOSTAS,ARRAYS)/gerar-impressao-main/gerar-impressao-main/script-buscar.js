//gerarRelatorio()

function gerarRelatorio() {
    let relatorio = {
        dados: [
            {
                numeroNF: '123456',
                dataEmissao: '01/09/2021',
                razaoSocial: 'Amazing LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 200,00'
            },
            {
                numeroNF: '546',
                dataEmissao: '01/10/2021',
                razaoSocial: 'ByeBye LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 10000,00'
            },
            {
                numeroNF: '1255',
                dataEmissao: '01/09/2021',
                razaoSocial: 'Saudades LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 2200,00'
            }
        ]
    }

    let janela = window.open();
    for (let i in relatorio.dados)
     {
        janela.document.write("Número NF........: ", relatorio.dados[i].numeroNF, '<br>');
        janela.document.write("Data Emissão.....: ", relatorio.dados[i].dataEmissao, '<br>');
        janela.document.write("Razão Social......: ", relatorio.dados[i].razaoSocial, '<br>');
        janela.document.write("Chave Acesso....: ", relatorio.dados[i].chaveAcesso, '<br>');
        janela.document.write("Valor NF............: ", relatorio.dados[i].valorNF, '<br><br>');
    }
    janela.print();
    janela.close();
}

    //     // console.log(relatorio.dados[i].numeroNF);
    //     // console.log(relatorio.dados[i].dataEmissao);
    //     // console.log(relatorio.dados[i].razaoSocial);
    //     // console.log(relatorio.dados[i].chaveAcesso);
    //     // console.log(relatorio.dados[i].valorNF);        
    //     // console.log('');