package p1;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SolutionGen2 {

    public static int min(int[] ints) {
        int min = ints[0];
        for (int i = 1; i < ints.length; i++) {
            if (ints[i] < min) {
                min = ints[i];
            }
        }
        return min;
    }
    
    public static void main(String[] args) {
        int cap = 10;
        int count = 0;
        double sum = 24;
        boolean[][][][] test = new boolean[cap][cap][cap][cap];
        String[][][][] solutions = new String[cap][cap][cap][cap];
        int[][][][] lowestDifficulty = new int[cap][cap][cap][cap];
        for (int c1 = 1; c1 < cap; c1++) {
            for (int c2 = 1; c2 < cap; c2++) {
                for (int c3 = 1; c3 < cap; c3++) {
                    for (int c4 = 1; c4 < cap; c4++) {
                        double i = c1;
                        double j = c2;
                        double k = c3;
                        double l = c4;
                        solutions[c1][c2][c3][c4] = "";
                        if ((((i + j) + k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("1");
                            solutions[c1][c2][c3][c4] += "111,";
                        }
                        if ((((i + j) + k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("2");
                            solutions[c1][c2][c3][c4] += "112,";
                        }
                        if ((((i + j) + k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("3");
                            solutions[c1][c2][c3][c4] += "113,";
                        }
                        if ((((i + j) + k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("4");
                            solutions[c1][c2][c3][c4] += "114,";
                        }
                        
                        if ((((i + j) - k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("5");
                            solutions[c1][c2][c3][c4] += "121,";
                        }
                        if ((((i + j) - k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("6");
                            solutions[c1][c2][c3][c4] += "122,";
                        }
                        if ((((i + j) - k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("7");
                            solutions[c1][c2][c3][c4] += "123,";
                        }
                        if ((((i + j) - k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("8");
                            solutions[c1][c2][c3][c4] += "124,";
                        }
                        
                        if ((((i + j) * k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("9");
                            solutions[c1][c2][c3][c4] += "131,";
                        }
                        if ((((i + j) * k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("10");
                            solutions[c1][c2][c3][c4] += "132,";
                        }
                        if ((((i + j) * k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("11");
                            solutions[c1][c2][c3][c4] += "133,";
                        }
                        if ((((i + j) * k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("12");
                            solutions[c1][c2][c3][c4] += "134,";
                        }
                        
                        if ((((i + j) / k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("13");
                            solutions[c1][c2][c3][c4] += "141,";
                        }
                        if ((((i + j) / k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("14");
                            solutions[c1][c2][c3][c4] += "142,";
                        }
                        if ((((i + j) / k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("15");
                            solutions[c1][c2][c3][c4] += "143,";
                        }
                        if ((((i + j) / k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("16");
                            solutions[c1][c2][c3][c4] += "144,";
                        }
                        
                        
                        if ((((i - j) + k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("17");
                            solutions[c1][c2][c3][c4] += "211,";
                        }
                        if ((((i - j) + k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("18");
                            solutions[c1][c2][c3][c4] += "212,";
                        }
                        if ((((i - j) + k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("19");
                            solutions[c1][c2][c3][c4] += "213,";
                        }
                        if ((((i - j) + k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("20");
                            solutions[c1][c2][c3][c4] += "214,";
                        }
                        
                        if ((((i - j) - k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("21");
                            solutions[c1][c2][c3][c4] += "221,";
                        }
                        if ((((i - j) - k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("22");
                            solutions[c1][c2][c3][c4] += "222,";
                        }
                        if ((((i - j) - k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("23");
                            solutions[c1][c2][c3][c4] += "223,";
                        }
                        if ((((i - j) - k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("24");
                            solutions[c1][c2][c3][c4] += "224,";
                        }
                        
                        if ((((i - j) * k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("25");
                            solutions[c1][c2][c3][c4] += "231,";
                        }
                        if ((((i - j) * k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("26");
                            solutions[c1][c2][c3][c4] += "232,";
                        }
                        if ((((i - j) * k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("27");
                            solutions[c1][c2][c3][c4] += "233,";
                        }
                        if ((((i - j) * k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("28");
                            solutions[c1][c2][c3][c4] += "234,";
                        }
                        
                        if ((((i - j) / k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("29");
                            solutions[c1][c2][c3][c4] += "241,";
                        }
                        if ((((i - j) / k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("30");
                            solutions[c1][c2][c3][c4] += "242,";
                        }
                        if ((((i - j) / k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("31");
                            solutions[c1][c2][c3][c4] += "243,";
                        }
                        if ((((i - j) / k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("32");
                            solutions[c1][c2][c3][c4] += "244,";
                        }
                        
                        
                        if ((((i * j) + k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("33");
                            solutions[c1][c2][c3][c4] += "311,";
                        }
                        if ((((i * j) + k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("34");
                            solutions[c1][c2][c3][c4] += "312,";
                        }
                        if ((((i * j) + k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("35");
                            solutions[c1][c2][c3][c4] += "313,";
                        }
                        if ((((i * j) + k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("36");
                            solutions[c1][c2][c3][c4] += "314,";
                        }
                        
                        if ((((i * j) - k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("37");
                            solutions[c1][c2][c3][c4] += "321,";
                        }
                        if ((((i * j) - k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("38");
                            solutions[c1][c2][c3][c4] += "322,";
                        }
                        if ((((i * j) - k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("39");
                            solutions[c1][c2][c3][c4] += "323,";
                        }
                        if ((((i * j) - k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("40");
                            solutions[c1][c2][c3][c4] += "324,";
                        }
                        
                        if ((((i * j) * k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("41");
                            solutions[c1][c2][c3][c4] += "331,";
                        }
                        if ((((i * j) * k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("42");
                            solutions[c1][c2][c3][c4] += "332,";
                        }
                        if ((((i * j) * k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("43");
                            solutions[c1][c2][c3][c4] += "333,";
                        }
                        if ((((i * j) * k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("44");
                            solutions[c1][c2][c3][c4] += "334,";
                        }
                        
                        if ((((i * j) / k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("45");
                            solutions[c1][c2][c3][c4] += "341,";
                        }
                        if ((((i * j) / k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("46");
                            solutions[c1][c2][c3][c4] += "342,";
                        }
                        if ((((i * j) / k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("47");
                            solutions[c1][c2][c3][c4] += "343,";
                        }
                        if ((((i * j) / k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("48");
                            solutions[c1][c2][c3][c4] += "344,";
                        }
                        
                        
                        if ((((i / j) + k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("49");
                            solutions[c1][c2][c3][c4] += "411,";
                        }
                        if ((((i / j) + k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("50");
                            solutions[c1][c2][c3][c4] += "412,";
                        }
                        if ((((i / j) + k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("51");
                            solutions[c1][c2][c3][c4] += "413,";
                        }
                        if ((((i / j) + k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("52");
                            solutions[c1][c2][c3][c4] += "414,";
                        }
                        
                        if ((((i / j) - k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            solutions[c1][c2][c3][c4] += "421,";
                            //System.out.println("53");
                        }
                        if ((((i / j) - k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("54");
                            solutions[c1][c2][c3][c4] += "422,";
                        }
                        if ((((i / j) - k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("55");
                            solutions[c1][c2][c3][c4] += "423,";
                        }
                        if ((((i / j) - k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("56");
                            solutions[c1][c2][c3][c4] += "424,";
                        }
                        
                        if ((((i / j) * k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("57");
                            solutions[c1][c2][c3][c4] += "431,";
                        }
                        if ((((i / j) * k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("58");
                            solutions[c1][c2][c3][c4] += "432,";
                        }
                        if ((((i / j) * k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("59");
                            solutions[c1][c2][c3][c4] += "433,";
                        }
                        if ((((i / j) * k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("60");
                            solutions[c1][c2][c3][c4] += "434,";
                        }
                        
                        if ((((i / j) / k) + l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("61");
                            solutions[c1][c2][c3][c4] += "441,";
                        }
                        if ((((i / j) / k) - l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("62");
                            solutions[c1][c2][c3][c4] += "442,";
                        }
                        if ((((i / j) / k) * l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("63");
                            solutions[c1][c2][c3][c4] += "443,";
                        }
                        if ((((i / j) / k) / l) == sum) {
                            test[c1][c2][c3][c4] = true;
                            //System.out.println("64");
                            solutions[c1][c2][c3][c4] += "444,";
                        }
                        if (test[c1][c2][c3][c4]) {
                            System.out.println(c1 + "\t" + c2 + "\t" + c3 + "\t" + c4);
                            solutions[c1][c2][c3][c4] = solutions[c1][c2][c3][c4].replaceAll(",$", "");
                            String[] temp = solutions[c1][c2][c3][c4].split(",");
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
                            System.out.println(lowestDifficulty[c1][c2][c3][c4]);
                            System.out.println(solutions[c1][c2][c3][c4]);
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
