---
layout: page
title: CS453 Automated Software Testing, Spring 2019
---

<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'Syllabus')" id="defaultOpen">Syllabus</button>
  <button class="tablinks" onclick="openTab(event, 'Schedule')">Schedule</button>
  <button class="tablinks" onclick="openTab(event, 'Assignments')">Assignments</button>
  <button class="tablinks" onclick="openTab(event, 'Projects')">Projects</button>
  <button class="tablinks" onclick="openTab(event, 'Reading List')">Reading List</button>
</div>

<!-- Tab content -->
<div id="Syllabus" class="tabcontent" markdown="1">
### Lectures
Time: 1:00-2:15, Tuesdays and Thursdays
Location: E11, Room 401

### Lecturer

Shin Yoo [shin.yoo@kaist.ac.kr](mailto:shin.yoo@kaist.ac.kr)
Office: E3-1 Room 2405

### Communication

All class announcements, as well as Q&A, will take place using a dedicated Slack workspace. **You are required to join [cs453-2019.slack.com](cs453-2019.slack.com)** if you want to continue this course. It is strongly recommended that you install either a desktop or a mobile client, to get notifications. **Email the lecturer or one of the TAs to get the invitation link, if you do not have one.**

### Syllabus

This course is concerned with a broad range of software testing techniques, with a heavy emphasis on automation, tools, and frameworks, as well as the research outputs behind them. The topic will include, but are not limited to: black box testing/combinatorial testing, random testing, concepts of coverage, structural testing, mutation testing, regression testing, testability transformation, automated debugging, etc.

### Prerequisite

- **Strong programming skills**: you are required to actively contribute to group and individual project, which involves serious implementation. There will be also a number of hands-on sessions where we will program together during the class.
- Unix/Linux-savvy: you should be familiar with the usual build tools and Unix/Linux command line environments.
- Git-aware: you will be required to submit a github repository as part of your project deliverable.
- Ideally, CS350 Introduction to Software Engineering.
- Also, ideally, a laptop you can bring to the classroom. **If this becomes a problem, let me know**.

### Evaluation

- Coursework: 30%
- Midterm Exam: 30%
- Project: 30%
- Class Participation: 10%

### Teaching Assistant

- [Jinhan Kim](https://coinse.kaist.ac.kr/members/jinhan/) [jinhankim@kaist.ac.kr](mailto:jinhankim@kaist.ac.kr)
- [Seongmin Lee](https://coinse.kaist.ac.kr/members/seongmin/) [bohrok@kaist.ac.kr](mailto:bohrok@kaist.ac.kr)

### References

We do not have a *textbook* per se, and the course will be based on slides and other reading material that are deemed appropriate. However, if you want to get broader sense for some of the topics dealt by this course, I recommend the following books and publications.

- Paul Ammann and Jeff Offutt. Introduction to Software Testing (2nd Ed.)
- Andreas Zeller. Why Programs Fail (2nd Ed.)
- Y. Jia and M. Harman. [An analysis and survey of the development of mutation testing](http://ieeexplore.ieee.org/document/5487526/). IEEE transactions on software engineering, 37(5):649–678.
- P. McMinn. [Search-based software test data generation: A survey](http://onlinelibrary.wiley.com/doi/10.1002/stvr.294/abstract). Software Testing, Verification and Reliability, 14(2):105–156, June 2004.
</div>

<div id="Schedule" class="tabcontent" markdown="1">
### Lecture Schedule

I have a few trips I am obliged to make in Spring 2019: 

- [IEEE International Conference on Software Testing, Verification and Validation (ICST 2019)](http://icst2019.xjtu.edu.cn) (22-27 April), for which I am the Steering Committee Chair.
- [ACM International Conference on Software Engineering (ICSE 2019)](https://conf.researchr.org/home/icse-2019) (25-31 May), for which our group is presenting a paper. I am also part of the organisation team for [ICSE 2020](https://conf.researchr.org/home/icse-2020), which is in Seoul.
- I am committed as an external reviewer for a PhD defence in University of Oslo, Norway, on 2nd April.

We will do our best to minimise the disruption to the learning experience. The following schedule are tentative, and may change.

- 26 Feb: [Introduction][slide00] & [Testing Fundamentals][slide01]
- 28 Feb: [Black Box Testing & Combinatorial Interaction Testing][slide02]
- 05 Mar: [Testing Finite State Machines][slide03]
- 07 Mar: [Control and Data Flow][slide04]
- 12 Mar: [Random and Adaptive Random Testing][slide05]
  - [Randoop](https://randoop.github.io/randoop/): a random unit test generation tool for Java
  - [Hypothesis](https://github.com/HypothesisWorks/hypothesis-python)
- 14 Mar: [Search Based Test Data Generation][slide06]
  - [EvoSuite](http://www.evosuite.org): a Search Based Test Data Generation tool for Java
  - [AVMFramework](http://avmframework.org): a reference implementation of Alternating Variable Method
- 19 Mar: [Mutation Testing][slide07]
  - [PIT](http://pitest.org): a practical mutation testing tool for Java
- 21 Mar: Mutation Testing Hands-on with Code Defender
- 26 Mar: [Regression Testing][slide08]
- 28 Mar: [Fault Localisation][slide09]
- 02 Apr: _No Lecture (Lecturer Away for a PhD Defense)_
- 04 Apr: _No Lecture (Lecturer Away for a PhD Defense)_
- 09 Apr: [Untestable Programs and Metamorphic Testing][slide10]
- 12 Apr: [Testing Deep Neural Networks][slide11]
- 16 Apr: **Mid-term Exam: E11 Room 401 1:00-3:00PM**
- 23 Apr: _No Lecture ([ICST 2019](http://icst2019.xjtu.edu.cn))_
- 25 Apr: _No Lecture ([ICST 2019](http://icst2019.xjtu.edu.cn))_
- 30 Apr: Group Project Proposal
- 02 May: Random Testing & Delta Debugging Hands-on
  - [Randoop](https://github.com/randoop/randoop) and [its manual](https://randoop.github.io/randoop/manual/)
- 07 May: Web Testing Automation Hands-on
  - [Selenium](https://www.seleniumhq.org) and [Firefox Driver](https://github.com/mozilla/geckodriver/releases)
  - [Capybara](http://teamcapybara.github.io/capybara/), [Poltergeist](https://github.com/teampoltergeist/poltergeist) and [PhantomJS](http://phantomjs.org)
  - [SikuliX](http://sikulix.com)
- 09 May: Paper Reading
  + Team 9: [Guiding deep learning system testing using surprise adequacy](https://arxiv.org/abs/1808.08444)
  + Team 1: [Practical GUI Testing of Android Applications via Model Abstraction and Refinement](http://moon.nju.edu.cn/people/xiaoxingma/pubs/2019-ICSE-TGu-APE.pdf)
- 14 May: Paper Reading
  + Team 3: [DeFlaker: Automatically Detecting Flaky Tests](http://www.jonbell.net/icse18-deflaker.pdf)
  + Team 10: [Which generated test failures are fault revealing? Prioritizing failures based on inferred precondition violations using PAF](https://dl.acm.org/citation.cfm?doid=3236024.3236058)
- 16 May: Paper Reading
  + Team 6: [An Investigation of Compression Techniques to Speed up Mutation Testing](http://orbilu.uni.lu/handle/10993/33866)   
  + Team 7: [Redefining prioritization: Continuous prioritization for continuous integration](https://dl.acm.org/citation.cfm?id=3180213)
- 21 May: Paper Reading - Team 2, 4
  + Team 2: [A theoretical and empirical analysis of evolutionary testing and hill climbing for structural test data generation](https://dl.acm.org/citation.cfm?id=1273475)
  + Team 4: [Automatically translating bug reports into test cases for mobile apps](https://dl.acm.org/citation.cfm?id=3213869)
- 23 May: Paper Reading - Team 5, 8
  + Team 5: [Mining Historical Test Logs to Predict Bugs and Localize Faults in the Test Logs](https://users.encs.concordia.ca/~pcr/paper/Amar2019ICSE-draft.pdf)
  + Team 8: [DeepXplore: Automated whitebox testing of deep learning systems](http://www.cs.columbia.edu/~junfeng/papers/deepxplore-sosp17.pdf)
- 28 May: _No Lecture ([ICSE 2019](https://conf.researchr.org/home/icse-2019))_
- 30 May: _No Lecture ([ICSE 2019](https://conf.researchr.org/home/icse-2019))_
- 04 Jun: **Project Presentation**
- 06 Jun: **No Lecture (Memorial Day)**
</div>


<div id="Assignments" class="tabcontent" markdown="1">
### Assignments

- **Coursework #1**: [What does a fault look like, and what can we do about them automatically?][cw1] Due by 23:59, 12 March 2019 - Submit via KLMS

- **Coursework #2**: [Practical Mutation Testing][cw2] Due by 23:59 2nd April 2019 - Submit via KLMS
 
- **Coursework #3**: [Search Based Test Data Generation][cw3] Due by 23:59, 14 May 2019 - Submit via KLMS

</div>

<div id="Projects" class="tabcontent" markdown="1">

### Project Aim

All teams should develop and/or implement an automated software testing technique based on an idea discussed during the course. I would encourage teams to pursue a novel idea, but a faithful reproduction of a state-of-the-art technique with solid evaluation would also do. If you are uncertain about your team's idea, I will be happy to discuss it.

### Proposal

All teams will give a short, max 8 minute presentation on 30th April to explain their project topics. I expect **three things to be described clearly** in the talk:

- A testing problem the team aims to solve
- The technique the team is proposing
- A way of evaluation to show the proposed technique works and is competent

### Paper Presentation

All teams also should prepare a 30 minute presentation about a paper. **Choose the paper your group wants to present, from the Reading List on this page, and let the lecturer/TAs know by 23rd April 2019**.

### Team Project Deliverables

Each team should submit the following:

- the team report
- the implementation: a public repository link in the report (e.g. github or bitbucket repo)

The team report should include:

- a precise description of the problem you attempted to solve
- a clear description of how you tried to solve the problem
- a result of experimental comparison of before and after: in other words, what benefits did your solution bring?

Additionally, each individual member should submit a separate individual report via KLMS:

- details of what you have contributed to the project
- peer assessment of your team members (yourself not included)

Final presentation date for groups will be announced later, as we may need more than a single session for this.

### Teams

- Team 1: Azret Kenzhaliev, Azamat Smagulov, Anuar Talipov, Shynar Torekhan
- Team 2: Diba Vosta, Truc Anh Nguyen Phan, Yunju Park
- Team 3: Ohjun Kwon, Jongguk Jeon, Seungjun Jeong
- Team 4: Junghwan Park, Hyunki Kim, Doyeon Kim
- Team 5: Chaehun Park, Seungwon Yoon, HyungRok Ham
- Team 6: Woojin Lee, Peerapon Akkapusit, Chae-Ryn Chang
- Team 7: Seunghyun Hwang, Juyeon Yoon, Suchan Park
- Team 8: Sujin Jang, Sungmin Kang, Jaehwang Jung, Seungho Choi
- Team 9: Seunghun Shin, Geon Heo, Woohyun Sung, Hansol Seo
- Team 10: Sungweon Jeon, Sungha Eom, Sanguk Park, Robert Sand
</div>

<div id="Reading List" class="tabcontent" markdown="1">

### Paper List

- J. Liang, S. Elbaum, and G. Rothermel. [Redefining prioritization: Continuous prioritization for continuous integration](https://dl.acm.org/citation.cfm?id=3180213). In Proceedings of the 40th International Conference on Software Engineering, ICSE ’18, pages 688–698, New York, NY, USA, 2018. ACM.

- M. Harman and P. McMinn. [A theoretical and empirical analysis of evolutionary testing and hill climbing for structural test data generation](https://dl.acm.org/citation.cfm?id=1273475). In Proceedings of the International Symposium on Software Testing and Analysis (ISSTA 2007), pages pp. 73–83. ACM Press, July 2007.

- K. Pei, Y. Cao, J. Yang, and S. Jana. [DeepXplore: Automated whitebox testing of deep learning systems](http://www.cs.columbia.edu/~junfeng/papers/deepxplore-sosp17.pdf). In Proceedings of the 26th Symposium on Operating Systems Principles, SOSP ’17, pages 1–18, New York, NY, USA, 2017. ACM.

- Q. Zhu, A, Panichella, and A. Zaidman. [An Investigation of Compression Techniques to Speed up Mutation Testing](http://orbilu.uni.lu/handle/10993/33866). In 2018 IEEE International Conference on Software Testinv, Validation, and Verification (ICST 2018), to appear.

- J. Bell, O. Legunsen, M. Hilton, L. Eloussi, T. Yung, D. Marinov. [DeFlaker: Automatically Detecting Flaky Tests](http://www.jonbell.net/icse18-deflaker.pdf). In 2018 International Conference on Software Engineering (ICSE 2018)

- A. Amar and P. Rigby, [Mining Historical Test Logs to Predict Bugs and Localize Faults in the Test Logs](https://users.encs.concordia.ca/~pcr/paper/Amar2019ICSE-draft.pdf). In 2019 International Conference on Software Engineering (ICSE 2019), to appear.

- T. Gu, C. Sun, X. Ma, C. Cao, C. Xu, Y. Yang, Q. Zhang, J. Lu, and Z. Su, [Practical GUI Testing of Android Applications via Model Abstraction and Refinement](http://moon.nju.edu.cn/people/xiaoxingma/pubs/2019-ICSE-TGu-APE.pdf). In 2019 International Conference on Software Engineering (ICSE 2019), to appear.

- M. Fazzini, M. Prammer, M. d’Amorim, and A. Orso. [Automatically translating bug reports into test cases for mobile apps](https://dl.acm.org/citation.cfm?id=3213869). In Proceedings of the 27th ACM SIGSOFT International Symposium on Software Testing and Analysis, ISSTA 2018, pages 141–152, New York, NY, USA, 2018. ACM.

- M. M. Almasi, H. Hemmati, G. Fraser, P. McMinn, and J. Benefelds. [Search-based detection of deviation failures in the migration of legacy spreadsheet applications](https://dl.acm.org/citation.cfm?id=3213861). In Proceedings of the 27th ACM SIGSOFT International Symposium on Software Testing and Analysis, ISSTA 2018, pages 266–275, 2018. ACM.

- M. Kim, S.-C. Cheung, and S. Kim. [Which generated test failures are fault revealing? Prioritizing failures based on inferred precondition violations using PAF](https://dl.acm.org/citation.cfm?doid=3236024.3236058). In Proceedings of the 2018 26th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering, ESEC/FSE 2018, pages 679–690, New York, NY, USA, 2018. ACM.

- J. Kim, R. Feldt, and S. Yoo. [Guiding deep learning system testing using surprise adequacy](https://arxiv.org/abs/1808.08444). In Proceedings of the 41th International Conference on Software Engineering, ICSE 2019, 2019.

</div>

<script>

if (window.location.href == sessionStorage.getItem('lastVisitedUrl')) {
    // When this page is lastly visited: Reopen the lastly visted tab
    try {
        i = sessionStorage.getItem('currentButtonIndex')
        document.getElementsByClassName("tablinks")[i].click()
    } catch (e) { 
        document.getElementById("defaultOpen").click();
    }
} else {
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
}
    
</script>

[slide00]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide00.pdf
[slide01]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide01.pdf
[slide02]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide02.pdf
[slide03]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide03.pdf
[slide04]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide04.pdf
[slide05]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide05.pdf
[slide06]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide06.pdf
[slide07]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide07.pdf
[slide08]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide08.pdf
[slide09]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide09.pdf
[slide10]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide10.pdf
[slide11]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cs453slide11.pdf
[cw1]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cw1.pdf
[cw2]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cw2.pdf
[cw3]: {{site.baseurl}}/assets/files/teaching/2019/cs453/cw3.pdf
