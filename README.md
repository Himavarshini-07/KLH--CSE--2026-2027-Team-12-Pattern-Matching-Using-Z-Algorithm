# Pattern-Matching-Using-Z-Algorithm
#   Team Members
# 2520030141 - Rayanki Himavarshini
# 2520030514 - Naliveni Sai Pranavi
# 2520030587 - Jampani Sai Spoorthi
# Pattern Matching Using Z-Algorithm

## 3. Supervisor

Supervisor Name

## 4. Abstract

Project abstract

## 5. Problem Statement
Pattern matching is the process of finding all occurrences of a pattern string within a larger text string. Given a text `T` of length `n` and a pattern `P` of length `m`, the objective of this project is to identify all starting positions where `P` occurs exactly in `T`.

Traditional brute-force pattern matching may repeatedly compare the same characters and has a worst-case time complexity of `O(n × m)`. This becomes inefficient for large or repetitive texts.

Therefore, this project uses the **Z-Algorithm** to perform exact pattern matching efficiently with a guaranteed time complexity of `O(n + m)`.

## 2. Design Methodology & Technical Soundness

The project follows a modular design based on the Z-Algorithm.

### Methodology

```text
Input Text + Pattern
        ↓
Pattern + "$" + Text
        ↓
Z-Array Construction
        ↓
Z-Box [L, R] Optimization
        ↓
Check Z[i] == Pattern Length
        ↓
Record Matching Positions
        ↓
Display Results
```

### Technical Approach

The pattern, a unique separator, and the text are combined into one string:

 
S = Pattern + "$" + Text
 
A Z-array is constructed for `S`. Each `Z[i]` represents the length of the longest substring starting at position `i` that matches the prefix of `S`.

The algorithm maintains a Z-box `[L, R]` to reuse previously calculated matching information and reduce unnecessary character comparisons.

Whenever:

```text
Z[i] == length(Pattern)
```

the corresponding position represents an occurrence of the pattern in the original text.

### Complexity

* **Time Complexity:** `O(n + m)`
* **Space Complexity:** `O(n + m)`

The linear-time performance is maintained by reusing information from previously computed Z-values.

---

## 3. Implementation Progress Against Planned Milestones

| Milestone | Planned Work                   | Status         |
| --------- | ------------------------------ | -------------- |
| 1         | Topic Selection                | ✅ Completed    |
| 2         | Problem Definition             | ✅ Completed    |
| 3         | Z-Algorithm Study              | ✅ Completed    |
| 4         | System Design & Methodology    | ✅ Completed    |
| 5         | Pseudocode & Flowchart         | ✅ Completed    |
| 6         | Java Implementation            | 🔄 In Progress |
| 7         | Test Case Implementation       | 🔄 In Progress |
| 8         | Complexity Analysis            | 🔄 In Progress |
| 9         | Documentation & README         | 🔄 In Progress |
| 10        | GitHub Repository Organization | 🔄 In Progress |
| 11        | Final Demonstration            | ⏳ Planned      |
| 12        | Final Presentation             | ⏳ Planned      |

**Current Phase:** Implementation, Testing and Documentation.

> Update the status according to the actual progress of the team before submission.

---

## 4. Repository Discipline – Commit History, Structure & Documentation

The project repository follows a structured organization to make the code easy to understand, maintain and evaluate.

### Repository Structure

```text
Pattern-Matching-Z-Algorithm/
│
├── README.md
│
├── src/
│   ├── Main.java
│   ├── ZAlgorithm.java
│   └── PatternMatcher.java
│
├── test/
│   └── TestCases.txt
│
├── docs/
│   ├── Abstract.docx
│   ├── Project_Report.docx
│   └── Flowchart.png
│
└── PPT/
    └── Pattern_Matching_Z_Algorithm.pptx
```

### Suggested Commit History

```text
Initial project setup
Added problem definition
Added Z-Algorithm methodology
Added pseudocode and flowchart
Implemented Z-array construction
Added pattern matching module
Added Main class and input/output
Added test cases
Added complexity analysis
Updated README documentation
Added project presentation
Final testing and cleanup
```

### Repository Guidelines

* Use meaningful commit messages.
* Commit changes regularly.
* Maintain separate folders for source code, tests and documentation.
* Keep the README updated.
* Avoid unnecessary files in the repository.
* Ensure the final code is tested before submission.

---

## 5. Demonstration, Presentation & Response to Queries

### Demonstration

The project will be demonstrated using a sample text and pattern.

**Input:**

```text
Text: ABCDABCDABEABCDABD
Pattern: ABCD
```

The program creates:

```text
S = ABCD$ABCDABCDABEABCDABD
```

The Z-array is constructed using the Z-box technique.

The program then checks whether each Z-value is equal to the pattern length.

**Output:**

```text
Pattern found at index: 0
Pattern found at index: 4
Pattern found at index: 14

Total occurrences: 3
```

### Presentation Points

During the presentation, the team will explain:

1. What pattern matching is.
2. Limitations of naive pattern matching.
3. Why the Z-Algorithm is used.
4. Construction of the Z-array.
5. Z-box technique.
6. System architecture.
7. Java implementation.
8. Test cases and output.
9. Time and space complexity.
10. Applications, limitations and future scope.

### Expected Questions

 

## 6. Individual Contribution & Team Coordination

### Member 1 – Algorithm & Core Implementation

Responsibilities:

* Studied the Z-Algorithm.
* Defined the algorithmic approach.
* Prepared pseudocode and flowchart.
* Implemented Z-array construction.
* Implemented the Z-box technique.
* Developed the core Java implementation.
* Explained the technical working of the algorithm.

### Member 2 – Testing, Analysis & Documentation

Responsibilities:

* Designed test cases.
* Tested multiple and overlapping pattern occurrences.
* Tested no-match and repetitive-string cases.
* Verified program outputs.
* Performed time and space complexity analysis.
* Compared Naive Search, KMP and Z-Algorithm.
* Prepared technical documentation.

### Member 3 – Integration, Repository & Presentation

Responsibilities:

* Organized the project repository.
* Maintained GitHub commit history.
* Integrated project modules.
* Prepared README and execution instructions.
* Maintained project documentation.
* Prepared demonstration and presentation.
* Coordinated final project submission.

### Team Coordination

All three members contribute to:

* Project discussions
* Code review
* Testing
* Presentation preparation
* Demonstration
* Viva/question preparation
* Final documentation

The team follows regular communication and task division to ensure that implementation, testing, documentation and presentation progress together.

---

## 7. Current Project Status

**Project:** Pattern Matching Using Z-Algorithm

**Current Phase:** Implementation, Testing and Documentation

### Completed

* Problem definition
* Objectives
* Z-Algorithm study
* Design methodology
* System architecture
* Pseudocode
* Flowchart
* Initial Java implementation

### In Progress

* Complete testing
* Performance analysis
* README documentation
* GitHub repository organization

### Planned

* Final integration
* Final demonstration
* Presentation
* Viva preparation
* Final submission

### Expected Outcome

The completed system will accept a text and pattern from the user, efficiently identify all exact occurrences of the pattern using the Z-Algorithm, and display their starting positions with `O(n + m)` time complexity.
