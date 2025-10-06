let pagamento="credito"
const precoNormal=100
let parcela=3
let precoPago = precoNormal


switch(pagamento){
    case "debito":
        precoPago=precoNormal-(precoPago*0.1)
        console.log("O preço pago foi: ",precoPago)
        break
    
    case "dinheiro","pix":
        precoPago=precoNormal-(precoPago*0.15)
        console.log("O preço pago foi: ",precoPago)
        break
    case "credito":
        if (parcela<=2){
        precoPago=precoNormal/parcela
        console.log("O preço pago foi: ",precoPago)
        }else{
            console.log("O preço pago foi: ", precoPago=(precoNormal+(precoNormal*0.10)/parcela), " dividido em ",parcela, " parcelas")
        }

}

