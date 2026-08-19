package aula05_class;

public class Calculadora {

    public double somar(double a, double b){
        return a + b;
    }

    public double subtrair(double a, double b){
        return a - b;
    }

    public double multiplicar(double a, double b){
        return a * b;
    }

    public double dividir(double a, double b){
        if (b == 0){
            System.out.print("Erro: Divisão por zerp não é permitido!");
            return Double.NaN;
        }
        return a / b;
    }

    public double potencia(double a, double b){
        return Math.pow(a, b);
    }


}
