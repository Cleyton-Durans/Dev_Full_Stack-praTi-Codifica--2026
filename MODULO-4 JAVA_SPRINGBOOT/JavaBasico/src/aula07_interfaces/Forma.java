package aula07_interfaces;

/**
 * Contrato para formas geometricas planas.
 */
public interface Forma {

    /**
     * Calcula area da forma.
     *
     * @return area
     */
    double calcularArea();

    /**
     * Calcula perimetro da forma.
     *
     * @return perimetro
     */
    double calcularPerimetro();
}