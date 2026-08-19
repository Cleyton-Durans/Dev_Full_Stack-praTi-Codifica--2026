package aula07_interfaces;

/**
 * Pagamento em cartao com taxa percentual.
 */
public final class CartaoCredito {

    @Override
    public double calcularTaxa(double valor) {
        return valor * 0.029;
    }
}