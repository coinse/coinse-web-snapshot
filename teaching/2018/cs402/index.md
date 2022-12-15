---
layout: page
title: CS402 Introduction to Logic for Computer Science (Spring 2018)
---

### Lecturer
Shin Yoo [shin.yoo@kaist.ac.kr](mailto:shin.yoo@kaist.ac.kr)

### Syllabus

This course is about basics of logic used in computer programming. Topics covered in this course are: propositional and predicate logic, as well as basic temporal logic. We will also try to incorporate practical application of logic systems using various tools.

### Evaluation

* Coursework: 30%
* Midterm Exam: 30%
* Final Exam: 30%
* Class Participation: 10%

### Teaching Assistant

- Seongmin Lee ([bohrok@kaist.ac.kr](mailto:bohrok@kaist.ac.kr))
- Office hour: Room 401 at N1, Tuesday & Thursday, 2:00-4:30PM


### References

The majority of the course follows the outline of Ben-Ari, but we will also use Huth and Ryan as the reference for natural deduction.

- "Mathematical Logic for Computer Science" by M.Ben-Ari, 3rd Edition, Springer
- "Logic in Computer Science" by M.Huth and M.Ryan, Cambridge university press (Chapter 2-3)

### Lecture Schedule

I have three trips that I am already committed to in Spring 2018. I was invited to speak at the 58th CREST Open Workshop on 27th February. I am the Program Co-chair for ICST 2018, which takes place from 9th to 13th of April. Finally, I am attending the biggest software engineering conference, ICSE 2018, in the last week of May to present papers and conduct meetings. I will try my best to keep the disruptions to the minimum; there may be one or two guest lectures where appropriate.

The following schedule is tentative and we have have new topics for 2018. Stay tuned.

- 27 Feb: **No Lecture ([CREST Open Workshop](http://crest.cs.ucl.ac.uk/cow/58/))**
- 01 Mar: **No Lecture (Independence Day)**
- 06 Mar: Introduction to Logic
- 08 Mar: Propositional Logic - Semantics [Part 1][slide03], [Part 2][slide04]
- 13 Mar: [Propositional Logic - Semantics Part 3][slide05]
- 15 Mar: [Propositional Logic - Normal Forms][slide06]
- 20 Mar: [MiniSAT and SAT Encoding][slide07] + Coursework 1, [Propositional Logic - Natural Deduction][slide08]
- 22 Mar: [Propositional Logic - Gentzen System][slide09]
- 27 Mar: [Propositional Logic - Hilbert System][slide10] 
    + [Proofs of some derived rules in Hilbert][hdr]
- 29 Mar: [Soundness and Completeness of Hilbert System][slide11]
- 03 Apr: [Propositional Logic - Resolution][slide12]
- 05 Apr: [Predicate Logic - Semantics Part 1][slide13]
- 10 Apr: **No Lecture ([ICST 2018](http://www.es.mdh.se/icst2018/))**
- 13 Apr: **No Lecture ([ICST 2018](http://www.es.mdh.se/icst2018/))**
- **17 Apr: Midterm Exam**
- 24 Apr: [Predicate Logic - Semantics Part 2][slide14]
- 26 Apr: [Predicate Logic - Semantic Tableaux][slide15]
- 01 May: [Predicate Logic - Natural Deduction][slide16]
- 03 May: [Predicate Logic - Deductive systems][slide17]
- 08 May: Predicate Logic - [Normal Forms][slide18]
- 10 May: [Predicate Logic - Undecidability][slide19]
- 15 May: Z3 Tutorial, Coursework 2
    + [Guide to Z3 Solver](https://rise4fun.com/z3/tutorial)
    + [Example soot.sh script][soot.sh] - this is an example: modify it to suit your OS/environment
- 17 May: [Temporal Logic - Semantics and Tableux Part 1][slide20]
- 22 May: No Lecture (Happy Birthday, Buddha!)
- 24 May: [Temporal Logic - Semantics and Tableux Part 2][slide21]
- 29 May: **No Lecture ([ICSE 2018](https://www.icse2018.org))**
- 31 May: **Guest Lecture by [Prof. Hongseok Yang](https://sites.google.com/view/hongseokyang/home) - Datalog**
- 05 Jun: [Linear Temporal Logic - Deductive System][slide22]
- 07 Jun: [Linear Temporal Logic - Completeness and Soundness][slide23]
- **12 Jun: Final Exam**

### Coursework

- Coursework 1: [CNF and Nonogram][cw1]
- Coursework 2: [SMT Solver and Simple Program Verification][cw2] Use the [public test cases]({{site.baseurl}}/assets/files/teaching/2017/cs402/public_tests.zip) to test your implementation.

[slide01]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide01-handout.pdf
[slide02]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide02-handout.pdf
[slide03]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide03-handout.pdf
[slide04]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide04-handout.pdf
[slide05]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide05-handout.pdf
[slide06]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide06-handout.pdf
[slide07]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide07-handout.pdf
[slide08]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide08-handout.pdf
[slide09]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide09-handout.pdf
[slide10]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide10-handout.pdf
[slide11]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide11-handout.pdf
[slide12]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide12-handout.pdf
[slide13]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide13-handout.pdf
[slide14]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide14-handout.pdf
[slide15]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide15-handout.pdf
[slide16]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide16-handout.pdf
[slide17]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide17-handout.pdf
[slide18]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide18-handout.pdf
[slide19]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide19-handout.pdf
[slide20]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide20-handout.pdf
[slide21]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide21-handout.pdf
[slide22]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide22-handout.pdf
[slide23]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cs402-slide23-handout.pdf

[cw1]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cw1.pdf
[cw2]: {{site.baseurl}}/assets/files/teaching/2018/cs402/cw2.pdf
[soot.sh]: {{site.baseurl}}/assets/files/teaching/2018/cs402/soot.sh
[hdr]: {{site.baseurl}}/assets/files/teaching/2018/cs402/hilbert_system_derived_rules.pdf

[godel]: http://www.cs.toronto.edu/~hehner/God.pdf
