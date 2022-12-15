---
layout: page
title: CS453 Automated Software Testing
---

### Lecturer
Shin Yoo [shin.yoo@kaist.ac.kr](mailto:shin.yoo@kaist.ac.kr)
Office: E3-1 Room 2405

### Syllabus

This course is concerned with a broad range of software testing technique, with a heavy emphasis on automation, tools, and frameworks, as well as the research output behind them. The topic will include, but are not limited to: black box testing/combinatorial testing, random testing, concepts of coverage, structural testing, mutation testing, regression testing, testability transformation, automated debugging, etc.

### Evaluation

* Coursework: 30%
* Midterm Exam: 30%
* Project: 30%
* Class Participation: 10%

### Teaching Assistant

- Jeongju Sohn ([kasio555@kaist.ac.kr](emailto:kasio555@kaist.ac.kr))
- Jinhan Kim ([jinhankim@kaist.ac.kr](emailto:jinhankim@kaist.ac.kr))

### References

We do not have a *textbook* per se, and the course will be based on slides and other reading material that are deemed appropriate. However, if you want to get broader sense for some of the topics dealt by this course, I recommend the following books and publications.

- Paul Ammann and Jeff Offutt. Introduction to Software Testing (2nd Ed.)
- Andreas Zeller. Why Programs Fail (2nd Ed.)
- Y. Jia and M. Harman. [An analysis and survey of the development of mutation testing](http://ieeexplore.ieee.org/document/5487526/). IEEE transactions on software engineering, 37(5):649–678.
- P. McMinn. [Search-based software test data generation: A survey](http://onlinelibrary.wiley.com/doi/10.1002/stvr.294/abstract). Software Testing, Verification and Reliability, 14(2):105–156, June 2004.

### Lecture Schedule

I have three trips that I am already committed to in Spring 2018. I was invited to speak at the 58th CREST Open Workshop on 27th February. I am the Program Co-chair for ICST 2018, which takes place from 9th to 13th of April. Finally, I am attending the biggest software engineering conference, ICSE 2018, in the last week of May to present papers and conduct meetings. I will try my best to keep the disruptions to the minimum; there may be one or two guest lectures where appropriate.

Since this is the first year I take over CS453, the list of topics and papers to read are flexible and may change.

- 27 Feb: **No Lecture ([CREST Open Workshop](http://crest.cs.ucl.ac.uk/cow/58/))**
- 01 Mar: **No Lecture (Independence Day)**
- 06 Mar: [Introduction][slide00] & [Testing Fundamentals][slide01]
- 08 Mar: [Black Box Testing & Combinatorial Interaction Testing][slide02]
- 13 Mar: [Testing Finite State Machines][slide03]
- 15 Mar: [Control and Data Flow][slide04]
- 20 Mar: [Random and Adaptive Random Testing][slide05]
    - [Randoop](https://randoop.github.io/randoop/): a random unit test generation tool for Java
    - [Hypothesis](https://github.com/HypothesisWorks/hypothesis-python)
- 22 Mar: [Search Based Test Data Generation][slide06]
    + [EvoSuite](http://www.evosuite.org): a Search Based Test Data Generation tool for Java
    + [AVMFramework](http://avmframework.org): a reference implementation of Alternating Variable Method
- 27 Mar: [Mutation Testing][slide07]
    + [PIT](http://pitest.org): a practical mutation testing tool for Java
- 29 Mar: [Regression Testing][slide08]
- 03 Apr: [Fault Localisation][slide09]
- 05 Apr: [Untestable Programs and Metamorphic Testing][slide10]
- 10 Apr: **No Lecture ([ICST 2018](http://www.es.mdh.se/icst2018/))**
- 13 Apr: **No Lecture ([ICST 2018](http://www.es.mdh.se/icst2018/))**
- **19 Apr: Midterm Exam (exact time to be announced)**
- 24 Apr: Project Pitch #1 - Team 1, 3, 5, 7
- 26 Apr: Project Pitch #2 - Team 2, 4, 6, 8
- 01 May: Mutation Testing Hands-on with Code Defender
- 03 May: Paper Presentation - Team #1, Team #2
- 08 May: Paper Presentation - Team #3, Team #4
- 10 May: Paper Presentation - Team #5, Team #6
- 15 May: Paper Presentation - Team #7, Team #8
- 17 May: Web Testing Automation Hands-on
    + [Selenium](https://www.seleniumhq.org) and [Firefox Driver](https://github.com/mozilla/geckodriver/releases)
    + [Capybara](http://teamcapybara.github.io/capybara/), [Poltergeist](https://github.com/teampoltergeist/poltergeist) and [PhantomJS](http://phantomjs.org)
    + [SikuliX](http://sikulix.com)
- 22 May: No Lecture (Happy Birthday, Buddha!)
- 24 May: Random Testing & Delta Debugging Hands-on
    + [Randoop](https://github.com/randoop/randoop) and [its manual](https://randoop.github.io/randoop/manual/)
- 29 May: **No Lecture ([ICSE 2018](https://www.icse2018.org))**
- 31 May: Invited Lecture - Concurrency Fault: Detection and Testing, [Dr. Shin Hong](http://hongshin.github.io), Handong University
- **14 Jun**: **Project Presentation: All Teams (6PM)**

### Teams
- Team 1: 20173222 박수민, 20173566 조영준, 20173493 임현수
- Team 2: 20183334 안가빈, 20140543 조성빈, 20120615 옥지수
- Team 3: 20173076 김범준, 20174293 배병일, 20160138 김유진, 20140400 이문영
- Team 4: 20120613 오진석, 20130578 정기량, 20140367 원정호
- Team 5: 20130065 김동낙, 20150186 김재욱, 20081322 이한길
- Team 6: 20183664 현상원, 20176323 Andreas, 20186070 Caroline
- Team 7: 20140512 정민규, 20150031 강현우, 20186038 Bilgehan
- Team 8: 20183202 박건우, 20184174 Phan Duy Loc, 20150574 이아청

### Coursework

- **Coursework #1**: [What does a fault look like, and what can we do about them automatically?][cw1] Due by 23:59, 22 March 2018 - Submit via KLMS
- **Coursework #2**: [Search Based Test Data Generation][cw2] Due by 23:59, 12 April 2018 - Submit via KLMS
- **Coursework #3**: [Practical Mutation Testing][cw3] Due by 23:59 31 May 2018 - Submit via KLMS

### Team Project Deliverables

Each student should submit the following:
- the team report
- the individual report
- the implementation: we will either accept KLMS upload, or a public repository link in the report (e.g. github or bitbucket repo)
- 
The team report should include:
- a precise description of the problem you attempted to solve
- a clear description of how you tried to solve the problem
- a result of experimental comparison of before and after: in other words, what benefits did your solution bring?

Additionally, each individual member should submit a separate individual report:
- details of what you have contributed to the project
- peer assessment of your team members (yourself not included)

Presentation is on **14th June at 6pm** in the same classroom. Each group will have 20 minutes.

### Paper List
- A. Machiry, R. Tahiliani, and M. Naik. [Dynodroid: An input generation system for android apps](https://dl.acm.org/citation.cfm?id=2491450). In Proceedings of the 2013 9th Joint Meeting on Foundations of Software Engineering, ESEC/FSE 2013, pages 224–234, New York, NY, USA, 2013. ACM.
- J. Zhang, J. Chen, D. Hao, Y. Xiong, B. Xie, L. Zhang, and H. Mei. [Search-based inference of polynomial metamorphic relations](https://dl.acm.org/citation.cfm?id=2642994). In Proceedings of the 29th ACM/IEEE International Conference on Automated Software Engineering, ASE ’14, pages 701–712, New York, NY, USA, 2014. ACM.
- R. Abraham and M. Erwig. [Mutation operators for spreadsheets](http://ieeexplore.ieee.org/document/4609389/). IEEE Transactions on Software Engineering, 35(1):94–108, 2009.
- S. Elbaum, G. Rothermel, and J. Penix. [Techniques for improving regression testing in continuous integration development environments](https://dl.acm.org/citation.cfm?id=2635910). In Proceedings of the 22Nd ACM SIGSOFT International Symposium on Foundations of Software Engineering, FSE 2014, pages 235–245, New York, NY, USA, 2014. ACM.
- M. Harman and P. McMinn. [A theoretical and empirical analysis of evolutionary testing and hill climbing for structural test data generation](https://dl.acm.org/citation.cfm?id=1273475). In Proceedings of the International Symposium on Software Testing and Analysis (ISSTA 2007), pages pp. 73–83. ACM Press, July 2007.
- J. Ding, X. Kang, and X. H. Hu. [Validating a deep learning framework by metamorphic testing](http://ieeexplore.ieee.org/document/7961649/). In 2017 IEEE/ACM 2nd International Workshop on Metamorphic Testing (MET), pages 28–34, May 2017.
- Q. Zhu, A, Panichella, and A. Zaidman. [An Investigation of Compression Techniques to Speed up Mutation Testing](http://orbilu.uni.lu/handle/10993/33866). In 2018 IEEE International Conference on Software Testinv, Validation, and Verification (ICST 2018), to appear.
- L. Mariani, C. Monni, M. Pezzè, O. Riganelli and R. Xin. [Localizing Faults in Cloud Systems](https://arxiv.org/abs/1803.00356). In 2018 IEEE International Conference on Software Testinv, Validation, and Verification (ICST 2018), to appear.
- C. Timperley, A. Afzal, D. Katz, J. M. Hernandez and C. Le Goues. 
[Crashing simulated planes is cheap: Can simulation detect robotics bugs early?](https://easychair.org/publications/preprint/DBdN). In 2018 IEEE International Conference on Software Testinv, Validation, and Verification (ICST 2018), to appear.
- J. Bell, O. Legunsen, M. Hilton, L. Eloussi, T. Yung, D. Marinov. [DeFlaker: Automatically Detecting Flaky Tests](http://www.jonbell.net/icse18-deflaker.pdf). In 2018 International Conference on Software Engineering (ICSE 2018), to appear.


[slide00]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cs453slide00.pdf
[slide01]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cs453slide01.pdf
[slide02]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cs453slide02.pdf
[slide03]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cs453slide03.pdf
[slide04]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cs453slide04.pdf
[slide05]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cs453slide05.pdf
[slide06]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cs453slide06.pdf
[slide07]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cs453slide07.pdf
[slide08]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cs453slide08.pdf
[slide09]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cs453slide09.pdf
[slide10]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cs453slide10.pdf

[cw1]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cw1.pdf
[cw2]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cw2.pdf
[cw3]:{{site.baseurl}}/assets/files/teaching/2018/cs453/cw3.pdf