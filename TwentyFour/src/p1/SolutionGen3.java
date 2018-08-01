package p1;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SolutionGen3 {

    public static int min(int[] ints) {
        int min = ints[0];
        for (int i = 1; i < ints.length; i++) {
            if (ints[i] < min) {
                min = ints[i];
            }
        }
        return min;
    }
    
    public static char delim = ',';

    public static void main(String[] args) {
        int cap = 14;
        int count = 0;
        double sum = 24;
        boolean[][][][] test = new boolean[cap][cap][cap][cap];
        String[][][][] solutions = new String[cap][cap][cap][cap];
        int[][][][] lowestDifficulty = new int[cap][cap][cap][cap];
        System.out.println("Card1" + delim + "Card2" + delim + "Card3" + delim + "Card4" + delim + "Lv");
        for (int c1 = 1; c1 < cap; c1++) {
            for (int c2 = 1; c2 < cap; c2++) {
                for (int c3 = 1; c3 < cap; c3++) {
                    for (int c4 = 1; c4 < cap; c4++) {
                        double i = c1;
                        double j = c2;
                        double k = c3;
                        double l = c4;
                        /*
                         * 1 is addition
                         * 2 is subtraction
                         * 3 is multiplication
                         * 4 is division
                         * so 123 is c1 + c2 - c3 * c4)
                         */
                        solutions[c1][c2][c3][c4] = "";
                        if (i + j + k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("1");
                            solutions[c1][c2][c3][c4] += "111" + delim;
                        }
                        if (i + j + k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("2");
                            solutions[c1][c2][c3][c4] += "112" + delim;
                        }
                        if (i + j + k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("3");
                            solutions[c1][c2][c3][c4] += "113" + delim;
                        }
                        if (i + j + k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("4");
                            solutions[c1][c2][c3][c4] += "114" + delim;
                        }
                        
                        if (i + j - k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("5");
                            solutions[c1][c2][c3][c4] += "121" + delim;
                        }
                        if (i + j - k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("6");
                            solutions[c1][c2][c3][c4] += "122" + delim;
                        }
                        if (i + j - k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("7");
                            solutions[c1][c2][c3][c4] += "123" + delim;
                        }
                        if (i + j - k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("8");
                            solutions[c1][c2][c3][c4] += "124" + delim;
                        }
                        
                        if (i + j * k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("9");
                            solutions[c1][c2][c3][c4] += "131" + delim;
                        }
                        if (i + j * k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("10");
                            solutions[c1][c2][c3][c4] += "132" + delim;
                        }
                        if (i + j * k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("11");
                            solutions[c1][c2][c3][c4] += "133" + delim;
                        }
                        if (i + j * k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("12");
                            solutions[c1][c2][c3][c4] += "134" + delim;
                        }
                        
                        if (i + j / k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("13");
                            solutions[c1][c2][c3][c4] += "141" + delim;
                        }
                        if (i + j / k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("14");
                            solutions[c1][c2][c3][c4] += "142" + delim;
                        }
                        if (i + j / k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("15");
                            solutions[c1][c2][c3][c4] += "143" + delim;
                        }
                        if (i + j / k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("16");
                            solutions[c1][c2][c3][c4] += "144" + delim;
                        }
                        
                        
                        if (i - j + k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("17");
                            solutions[c1][c2][c3][c4] += "211" + delim;
                        }
                        if (i - j + k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("18");
                            solutions[c1][c2][c3][c4] += "212" + delim;
                        }
                        if (i - j + k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("19");
                            solutions[c1][c2][c3][c4] += "213" + delim;
                        }
                        if (i - j + k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("20");
                            solutions[c1][c2][c3][c4] += "214" + delim;
                        }
                        
                        if (i - j - k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("21");
                            solutions[c1][c2][c3][c4] += "221" + delim;
                        }
                        if (i - j - k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("22");
                            solutions[c1][c2][c3][c4] += "222" + delim;
                        }
                        if (i - j - k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("23");
                            solutions[c1][c2][c3][c4] += "223" + delim;
                        }
                        if (i - j - k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("24");
                            solutions[c1][c2][c3][c4] += "224" + delim;
                        }
                        
                        if (i - j * k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("25");
                            solutions[c1][c2][c3][c4] += "231" + delim;
                        }
                        if (i - j * k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("26");
                            solutions[c1][c2][c3][c4] += "232" + delim;
                        }
                        if (i - j * k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("27");
                            solutions[c1][c2][c3][c4] += "233" + delim;
                        }
                        if (i - j * k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("28");
                            solutions[c1][c2][c3][c4] += "234" + delim;
                        }
                        
                        if (i - j / k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("29");
                            solutions[c1][c2][c3][c4] += "241" + delim;
                        }
                        if (i - j / k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("30");
                            solutions[c1][c2][c3][c4] += "242" + delim;
                        }
                        if (i - j / k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("31");
                            solutions[c1][c2][c3][c4] += "243" + delim;
                        }
                        if (i - j / k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("32");
                            solutions[c1][c2][c3][c4] += "244" + delim;
                        }
                        
                        
                        if (i * j + k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("33");
                            solutions[c1][c2][c3][c4] += "311" + delim;
                        }
                        if (i * j + k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("34");
                            solutions[c1][c2][c3][c4] += "312" + delim;
                        }
                        if (i * j + k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("35");
                            solutions[c1][c2][c3][c4] += "313" + delim;
                        }
                        if (i * j + k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("36");
                            solutions[c1][c2][c3][c4] += "314" + delim;
                        }
                        
                        if (i * j - k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("37");
                            solutions[c1][c2][c3][c4] += "321" + delim;
                        }
                        if (i * j - k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("38");
                            solutions[c1][c2][c3][c4] += "322" + delim;
                        }
                        if (i * j - k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("39");
                            solutions[c1][c2][c3][c4] += "323" + delim;
                        }
                        if (i * j - k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("40");
                            solutions[c1][c2][c3][c4] += "324" + delim;
                        }
                        
                        if (i * j * k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("41");
                            solutions[c1][c2][c3][c4] += "331" + delim;
                        }
                        if (i * j * k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("42");
                            solutions[c1][c2][c3][c4] += "332" + delim;
                        }
                        if (i * j * k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("43");
                            solutions[c1][c2][c3][c4] += "333" + delim;
                        }
                        if (i * j * k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("44");
                            solutions[c1][c2][c3][c4] += "334" + delim;
                        }
                        
                        if (i * j / k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("45");
                            solutions[c1][c2][c3][c4] += "341" + delim;
                        }
                        if (i * j / k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("46");
                            solutions[c1][c2][c3][c4] += "342" + delim;
                        }
                        if (i * j / k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("47");
                            solutions[c1][c2][c3][c4] += "343" + delim;
                        }
                        if (i * j / k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("48");
                            solutions[c1][c2][c3][c4] += "344" + delim;
                        }
                        
                        
                        if (i / j + k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("49");
                            solutions[c1][c2][c3][c4] += "411" + delim;
                        }
                        if (i / j + k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("50");
                            solutions[c1][c2][c3][c4] += "412" + delim;
                        }
                        if (i / j + k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("51");
                            solutions[c1][c2][c3][c4] += "413" + delim;
                        }
                        if (i / j + k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("52");
                            solutions[c1][c2][c3][c4] += "414" + delim;
                        }
                        
                        if (i / j - k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            solutions[c1][c2][c3][c4] += "421" + delim;
                            //System.out.println("53");
                        }
                        if (i / j - k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("54");
                            solutions[c1][c2][c3][c4] += "422" + delim;
                        }
                        if (i / j - k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("55");
                            solutions[c1][c2][c3][c4] += "423" + delim;
                        }
                        if (i / j - k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("56");
                            solutions[c1][c2][c3][c4] += "424" + delim;
                        }
                        
                        if (i / j * k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("57");
                            solutions[c1][c2][c3][c4] += "431" + delim;
                        }
                        if (i / j * k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("58");
                            solutions[c1][c2][c3][c4] += "432" + delim;
                        }
                        if (i / j * k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("59");
                            solutions[c1][c2][c3][c4] += "433" + delim;
                        }
                        if (i / j * k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("60");
                            solutions[c1][c2][c3][c4] += "434" + delim;
                        }
                        
                        if (i / j / k + l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("61");
                            solutions[c1][c2][c3][c4] += "441" + delim;
                        }
                        if (i / j / k - l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("62");
                            solutions[c1][c2][c3][c4] += "442" + delim;
                        }
                        if (i / j / k * l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("63");
                            solutions[c1][c2][c3][c4] += "443" + delim;
                        }
                        if (i / j / k / l == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("64");
                            solutions[c1][c2][c3][c4] += "444" + delim;
                        }
                        if (test[c1][c2][c3][c4]) {
                            System.out.print(c1 + "" + delim + c2 + "" + delim + c3 + "" + delim + c4);
                            solutions[c1][c2][c3][c4] = solutions[c1][c2][c3][c4].replaceAll("\t$", "");
                            String[] temp = solutions[c1][c2][c3][c4].split("" + delim);
                            int[] diff = new int[temp.length];
                            for (int x = 0; x < temp.length; x++) {
//                                searches for multiplications and divisions
                                Pattern multDiv = Pattern.compile("[34]");
                                Matcher matcher = multDiv.matcher(temp[x]);
                                int mults = 0;
                                while (matcher.find()) {
                                    mults++;
                                }
                                diff[x] = 0;
                                diff[x] += mults;
                                
//                                counts unique types of operations
                                int ops = 0;
                                if (temp[x].contains("1")) {
                                    ops++;
                                }
                                if (temp[x].contains("2")) {
                                    ops++;
                                }
                                if (temp[x].contains("3")) {
                                    ops++;
                                }
                                if (temp[x].contains("4")) {
                                    ops++;
                                }
                                diff[x] += ops;
                            }
                            lowestDifficulty[c1][c2][c3][c4] = min(diff);
                            System.out.print("" + delim + lowestDifficulty[c1][c2][c3][c4]);
                            // System.out.print("" + delim + solutions[c1][c2][c3][c4]);
                            System.out.println();
                            count++;
                        }
                    }
                }
            }
        }
        // System.out.println(count);
    }
}
