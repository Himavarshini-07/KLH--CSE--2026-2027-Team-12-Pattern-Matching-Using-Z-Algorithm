import java.util.ArrayList;
import java.util.List;

public class PatternMatcher {

    public static List<Integer> findPattern(String text, String pattern) {

        List<Integer> positions = new ArrayList<>();

        if (pattern.length() == 0 || text.length() == 0) {
            return positions;
        }

        // Pattern + separator + Text
        String combined = pattern + "$" + text;

        // Calculate Z-array
        int[] z = ZAlgorithm.calculateZ(combined);

        int patternLength = pattern.length();

        // Check Z values
        for (int i = 0; i < z.length; i++) {

            if (z[i] == patternLength) {

                // Convert combined-string index to text index
                int position = i - patternLength - 1;

                positions.add(position);
            }
        }

        return positions;
    }
}