package p1;

public class SolutionGen {

    public static void main(String[] args) {
        int cap = 10;
        int count = 0;
        double sum = 24;
        boolean[][][][] test = new boolean[cap][cap][cap][cap];
        for (int c1 = 1; c1 < cap; c1++) {
            for (int c2 = 1; c2 < cap; c2++) {
                for (int c3 = 1; c3 < cap; c3++) {
                    for (int c4 = 1; c4 < cap; c4++) {
                        double i = c1;
                        double j = c2;
                        double k = c3;
                        double l = c4;
                        if ((((i + j) + k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("1");
                        }
                        if ((((i + j) + k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("2");
                        }
                        if ((((i + j) + k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("3");
                        }
                        if ((((i + j) + k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("4");
                        }
                        
                        if ((((i + j) - k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("5");
                        }
                        if ((((i + j) - k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("6");
                        }
                        if ((((i + j) - k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("7");
                        }
                        if ((((i + j) - k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("8");
                        }
                        
                        if ((((i + j) * k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("9");
                        }
                        if ((((i + j) * k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("10");
                        }
                        if ((((i + j) * k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("11");
                        }
                        if ((((i + j) * k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("12");
                        }
                        
                        if ((((i + j) / k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("13");
                        }
                        if ((((i + j) / k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("14");
                        }
                        if ((((i + j) / k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("15");
                        }
                        if ((((i + j) / k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("16");
                        }
                        
                        
                        if ((((i - j) + k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("17");
                        }
                        if ((((i - j) + k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("18");
                        }
                        if ((((i - j) + k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("19");
                        }
                        if ((((i - j) + k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("20");
                        }
                        
                        if ((((i - j) - k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("21");
                        }
                        if ((((i - j) - k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("22");
                        }
                        if ((((i - j) - k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("23");
                        }
                        if ((((i - j) - k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("24");
                        }
                        
                        if ((((i - j) * k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("25");
                        }
                        if ((((i - j) * k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("26");
                        }
                        if ((((i - j) * k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("27");
                        }
                        if ((((i - j) * k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("28");
                        }
                        
                        if ((((i - j) / k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("29");
                        }
                        if ((((i - j) / k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("30");
                        }
                        if ((((i - j) / k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("31");
                        }
                        if ((((i - j) / k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("32");
                        }
                        
                        
                        if ((((i * j) + k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("33");
                        }
                        if ((((i * j) + k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("34");
                        }
                        if ((((i * j) + k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("35");
                        }
                        if ((((i * j) + k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("36");
                        }
                        
                        if ((((i * j) - k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("37");
                        }
                        if ((((i * j) - k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("38");
                        }
                        if ((((i * j) - k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("39");
                        }
                        if ((((i * j) - k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("40");
                        }
                        
                        if ((((i * j) * k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("41");
                        }
                        if ((((i * j) * k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("42");
                        }
                        if ((((i * j) * k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("43");
                        }
                        if ((((i * j) * k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("44");
                        }
                        
                        if ((((i * j) / k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("45");
                        }
                        if ((((i * j) / k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("46");
                        }
                        if ((((i * j) / k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("47");
                        }
                        if ((((i * j) / k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("48");
                        }
                        
                        
                        if ((((i / j) + k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("49");
                        }
                        if ((((i / j) + k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("50");
                        }
                        if ((((i / j) + k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("51");
                        }
                        if ((((i / j) + k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("52");
                        }
                        
                        if ((((i / j) - k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("53");
                        }
                        if ((((i / j) - k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("54");
                        }
                        if ((((i / j) - k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("55");
                        }
                        if ((((i / j) - k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("56");
                        }
                        
                        if ((((i / j) * k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("57");
                        }
                        if ((((i / j) * k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("58");
                        }
                        if ((((i / j) * k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("59");
                        }
                        if ((((i / j) * k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("60");
                        }
                        
                        if ((((i / j) / k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("61");
                        }
                        if ((((i / j) / k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("62");
                        }
                        if ((((i / j) / k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("63");
                        }
                        if ((((i / j) / k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            System.out.println("64");
                        }
                        if (test[c1][c2][c3][c4]) {
                            System.out.println(c1 + "\t" + c2 + "\t" + c3 + "\t" + c4);
                            System.out.println();
                            count++;
                        }
                    }
                }
            }
        }
        System.out.println(count);
    }
}
