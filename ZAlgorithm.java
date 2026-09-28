public class ZAlgorithm {

    // Function to construct the Z-array
    public static int[] calculateZ(String str) {

        int n = str.length();
        int[] z = new int[n];

        int L = 0;
        int R = 0;

        for (int i = 1; i < n; i++) {

            // If i is outside the current Z-box
            if (i > R) {

                L = R = i;

                while (R < n && str.charAt(R) == str.charAt(R - L)) {
                    R++;
                }

                z[i] = R - L;
                R--;

            } else {

                // i is inside the current Z-box
                int k = i - L;

                // Reuse previously calculated Z value
                if (z[k] < R - i + 1) {

                    z[i] = z[k];

                } else {

                    L = i;

                    while (R < n && str.charAt(R) == str.charAt(R - L)) {
                        R++;
                    }

                    z[i] = R - L;
                    R--;
                }
            }
        }

        return z;
    }
}