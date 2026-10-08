 Pattern Matching Using Z-Algorithm
1. Project Title
Pattern Matching Using Z-Algorithm
An Efficient Linear-Time Algorithm for Exact String Matching
2. Team Members
Member	Roll No.	Main Responsibility
Naliveni Sai Pranavi	2520030514	Algorithm & Core Implementation
Jampani Sai Spoorthi	2520030587	Testing, Analysis & Documentation
Member 3	Roll No.	UI/Execution, Presentation & Repository


3. Supervisor
Ch. Anuradha
Department: Computer Science & Engineering
Academic Year: 2026–2027
4. Abstract
Pattern Matching Using Z-Algorithm is a string-processing project designed to efficiently locate all occurrences of a pattern within a given text. Traditional brute-force pattern matching can require O(n × m) time in the worst case because it repeatedly compares characters. This project uses the Z-Algorithm, which combines the pattern, a separator, and the text into a single string and constructs a Z-array to identify matching positions. By using the Z-box technique and reusing previously computed information, the algorithm achieves O(n + m) time complexity. The project is implemented in Java and demonstrates the complete process from input and preprocessing to pattern detection and result generation.    Pasted markdown
5. Problem Statement
Traditional pattern matching methods repeatedly compare characters, which can lead to unnecessary comparisons and higher execution time. The project aims to find all occurrences of a pattern P in a text T efficiently using the Z-Algorithm.    Pasted markdown
6. Objectives
- Efficient pattern detection
- Reduce unnecessary comparisons
- Achieve O(n + m) time complexity
- Identify all occurrences of a pattern
- Analyze algorithm performance
7. Technologies Used
- Java
- Data Structures and Algorithms
- Git/GitHub
8. Algorithm
The Z-Algorithm uses a Z-array to store the length of the substring starting at each position that matches the prefix of the combined string.
The combined string is:
Pattern + "$" + Text

A pattern occurrence is identified when:
Z[i] == Pattern Length

The algorithm uses the Z-box [L,R] to reuse previously calculated matching information.    Pasted markdown
9. Methodology
Pattern + "$" + Text
          ↓
      Z-Array
          ↓
Check Z[i] == Pattern Length
          ↓
   Matching Positions

10. Project Structure
Pattern-Matching-Z-Algorithm/
│
├── README.md
│
├── src/
│   ├── Main.java
│   ├── ZAlgorithm.java
│   └── PatternMatcher.java
│
├── docs/
│   ├── Abstract.docx
│   ├── Project_Report.docx
│   └── Flowchart.png
│
├── test/
│   └── TestCases.txt
│
└── PPT/
    └── Pattern_Matching_Z_Algorithm.pptx

11. Setup Instructions
1. Install Java JDK.
2. Clone/download the project.
3. Open the project in VS Code / IntelliJ / Eclipse.
4. Compile the Java files.
5. Run Main.java.
6. Enter the Text.
7. Enter the Pattern.
8. View all matching positions.    Pasted markdown
12. Sample Input
Text: ABCDABCDABEABCDABD
Pattern: ABCD

13. Sample Output
Pattern found at index: 0
Pattern found at index: 4
Pattern found at index: 14

The sample project specifies the matching positions as 0, 4, and 14.    Pasted markdown
14. Test Cases
Test Case	Text	Pattern	Expected Output
Single occurrence	ABCDAB	ABC	0
Multiple occurrences	ABCDABCD	ABCD	0, 4
No occurrence	ABCDEFG	XYZ	No match
Overlapping occurrence	AAAAA	AAA	0, 1, 2
Pattern = Text	HELLO	HELLO	0


   Pasted markdown
15. Complexity
Algorithm	Worst Case
Naive	O(n × m)
KMP	O(n + m)
Z-Algorithm	O(n + m)


Z-Algorithm Time Complexity: O(n + m)
Space Complexity: O(n + m)    Pasted markdown
16. Applications
- Search engines
- Text editors
- DNA sequence matching
- Plagiarism detection
- Cybersecurity
- Bioinformatics    Pasted markdown
17. Advantages
- Linear-time pattern matching
- Avoids unnecessary repeated comparisons
- Efficient for large text inputs
- Simple and systematic implementation
- Useful in various text-processing applications
18. Limitations
- Supports exact pattern matching
- Requires preprocessing
- Requires additional memory of O(n + m)    Pasted markdown
19. Future Scope
- GUI-based interface
- File and directory searching
- Multiple-pattern searching
- Real-time search
- AI/NLP integration    Pasted markdown
20. Current Phase Status
Phase	Task	Status
Phase 1	Topic Selection	✅ Completed
Phase 2	Problem Definition	✅ Completed
Phase 3	Algorithm Study	✅ Completed
Phase 4	Z-Algorithm Design	✅ Completed
Phase 5	Pseudocode & Flowchart	✅ Completed
Phase 6	Java Implementation	🔄 In Progress
Phase 7	Test Cases	🔄 In Progress
Phase 8	Performance Analysis	⏳ Planned
Phase 9	README & Documentation	🔄 In Progress
Phase 10	GitHub Repository	🔄 In Progress
Phase 11	Final Demonstration	⏳ Planned
Phase 12	Final Presentation	⏳ Planned


This status table is intended to be updated according to your team's actual progress.    Pasted markdown
21. Team Work Division
Member 1 — Algorithm + Core Implementation
- Problem definition
- Z-Algorithm study
- Z-array and Z-box
- Java implementation
- Pseudocode
- Flowchart
- Technical explanation
Member 2 — Testing + Analysis + Documentation
- Test cases
- Output verification
- Complexity analysis
- Naive vs KMP vs Z comparison
- README
- Project documentation
Member 3 — Integration + Repository + Presentation
- Project integration
- Execution setup
- GitHub repository
- Commit history
- PPT
- Demo
- Presentation
This division follows the three-member responsibility structure in the uploaded material.    Pasted markdown    Pasted markdown
22. Conclusion
The Pattern Matching Using Z-Algorithm project demonstrates an efficient approach for finding pattern occurrences in a text. By using the Z-array and Z-box technique, the algorithm achieves O(n + m) time complexity and reduces unnecessary character comparisons. The project provides practical understanding of string processing, algorithm design, implementation, testing, and complexity analysis.
23. References
- Cormen et al. — Introduction to Algorithms
- Dan Gusfield — Algorithms on Strings, Trees, and Sequences
- GeeksforGeeks
- Oracle Java Documentation
- Competitive Programmer’s Handbook
