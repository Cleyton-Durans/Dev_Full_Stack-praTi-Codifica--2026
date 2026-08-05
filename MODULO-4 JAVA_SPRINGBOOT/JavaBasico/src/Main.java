public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Wold! Welcome to Java!");

        /*
        * Tipos Primitivos -> Guarda o valor diretamente - São 8 Byte, Short, int, float
        * Tipos Por Referência -> Guarda o endereço d e um objeto, String, Arrays...
        *
        * byte    - 8 bits
        * short   - 16 bits
        * int     - 32 bits
        * long    - 64 bits
        * float   - 32 bits ~ 7 casas de precisão
        * double  - 64 bits
        * Char    - 16 bits
        * boolean - true or false
        *
        * */

        byte idade = 35;
        short ano = 2026;
        int populacao = 213000;
        long distancia = 10000000000L; // (Sufixo L)
        float altura = 1.75F; // (Sufixo F)
        double pi = 3.1415926535;
        char inicial = 'J'; // (Aspas simples)
        boolean ativo = true;
        String nome = "Cleyto Durans";

    System.out.println("Idade: " + idade + "|  altura " + altura  );
    System.out.println("nome: " + nome );
    System.out.println(nome.length());
    System.out.println(nome.toUpperCase());
    System.out.println(nome.toLowerCase());

    System.out.println("__________________________");

    String a = "Java";
    String b = "Java";
    String C = new String("Java");

    Integer teste = 10;

    System.out.println( a == b );
    System.out.println( a == C );
    System.out.println(a.equals(C));


    final double TAXA_JUROS = 0.5; // Faz com que torna uma constante inalterável

    }
}