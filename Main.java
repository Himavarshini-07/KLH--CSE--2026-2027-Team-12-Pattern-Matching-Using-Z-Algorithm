import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("==========================================");
        System.out.println("     PATTERN MATCHING USING Z-ALGORITHM");
        System.out.println("==========================================");

        System.out.print("Enter Text: ");
        String text = scanner.nextLine();

        System.out.print("Enter Pattern: ");
        String pattern = scanner.nextLine();

        if (pattern.length() == 0) {
            System.out.println("Pattern cannot be empty.");
            scanner.close();
            return;
        }

        if (text.length() == 0) {
            System.out.println("Text cannot be empty.");
            scanner.close();
            return;
        }

        // Create combined string
        String combined = pattern + "$" + text;

        System.out.println("\nCombined String:");
        System.out.println(combined);

        // Calculate Z-array
        int[] z = ZAlgorithm.calculateZ(combined);

        System.out.println("\nZ-Array:");

        for (int value : z) {
            System.out.print(value + " ");
        }

        System.out.println();

        // Find pattern occurrences
        List<Integer> positions =
                PatternMatcher.findPattern(text, pattern);

        System.out.println("\nPattern Matching Result:");

        if (positions.isEmpty()) {

            System.out.println("Pattern not found.");

        } else {

            for (int position : positions) {
                System.out.println(
                        "Pattern found at index: " + position
                );
            }

            System.out.println(
                    "Total occurrences: " + positions.size()
            );
        }

        scanner.close();
    }
}