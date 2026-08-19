package aula07_interfaces;

/**
 * Pagamento em boleto com taxa fixa maior.
 */
public final class Boleto {

    @Override
    public double calcularTaxa(double valor) {
        return 2.99;
    }
}