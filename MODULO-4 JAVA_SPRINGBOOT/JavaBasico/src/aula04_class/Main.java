package aula04_class;

public class Main {
    public static void main(String[] args) {
        // Criando o objeto da calculadora
        Calculadora calc =  new Calculadora();

        double a;
        double b;

        //chamando os métodos
        double resultado = calc.somar( a=1, b=2);
        System.out.printf("Resultado: %.1f + %.1f = %.1f ", a, b,  resultado );
    }
}
