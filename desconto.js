let pagamento="credito"
const precoNormal=100
let parcela=3
let precoPago = precoNormal


switch(pagamento){
    case "dinheiro":
    case "pix":
    case "debito":
        console.log("O preço pago foi: ",aplicarDesconto(precoNormal,pagamento))
        break

    case "credito":
        if (parcela<=2){
        precoPago=precoNormal/parcela
        console.log("O preço pago foi: ",precoPago)
        }else{
            console.log("O preço pago foi: ", precoPago=(precoNormal+(precoNormal*1.10)/parcela), " dividido em ",parcela, " parcelas")
        }

}

function aplicarDesconto(precoNormal,pagamento){
    switch(pagamento){
        case "debito":
            return precoNormal-(precoNormal*0.1)
            
        case "dinheiro":
        case "pix":
            return precoNormal-(precoNormal*0.15)
        default:
            return precoNormal
    }
}
