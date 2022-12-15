---
layout: page
title: CS489 Computer Ethics and Social Issues (Autumn 2019)
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
Time: 10:30-11:45, Tuesdays and Thursdays 
Location: N1, Room 111

### Lecturer

Shin Yoo [shin.yoo@kaist.ac.kr](mailto:shin.yoo@kaist.ac.kr)
Office: E3-1 Room 2405

### Communication

All class announcements, as well as Q&A, will take place using a dedicated Slack workspace. **You are required to join if you want to continue this course.** It is strongly recommended that you install either a desktop or a mobile client, to get notifications. **Actual workspace link will be provided soon.**

### Syllabus

This course is concerned with a broad range of ethical issues that are closely related to, or have their origins at, computing technology and their uses. The aim of the course is not to find *the* answer to these problems. Rather, we will examine them from various angles together and discuss what we can do.

Another very important apsect of this course is that we will go through concrete technology that can help us while dealing with these issues. For example, instead of just saying that privacy is important, we will also look at techniques that allow you to effetively hide your data. Instead of just saying that a society should be fair, we will look at techniques that test large software systems for fairness. 

### Prerequisite

- **Active Class Participation**: a non-trivial part of this course is in-class presentation and discussion. If you just sit quietly, you will not gain much from this course. Also, note that class participation is 30% of the whole grade.
- **Strong programming skills**: you are required to develop an **individual** course project. There will be also a number of hands-on sessions where we will program together during the class.
- Unix/Linux-savvy: you should be familiar with the usual build tools and Unix/Linux command line environments.
- Git-aware: you will be required to submit a github repository as part of your project deliverables.
- Ideally, a laptop you can bring to the classroom. **If this becomes a problem, let me know**.

### Evaluation

- 30% Course Participation
- 40% Courseworks
- 30% Course Project

### Teaching Assistant

- [Jinhan Kim](https://coinse.kaist.ac.kr/members/jinhan/), jinhankim@kaist.ac.kr
- Office hour: Tuesday 14:30-17:30 @ E3-1, Room 2443.

</div>

<div id="Schedule" class="tabcontent" markdown="1">
### Lecture Schedule

These dates and topics are tentative.

- 09/03: [Introduction & Admin](/assets/files/teaching/2019/cs489/cs489-slide00.pdf)
- 09/05: [Perspectives on Ethics](/assets/files/teaching/2019/cs489/cs489-slide01.pdf)
- 09/10: [Professional Computer Ethics](/assets/files/teaching/2019/cs489/cs489-slide02.pdf)
- 09/12: **No Lecture: Chuseok Holiday**
- 09/17: [Technology and Public Discourse](/assets/files/teaching/2019/cs489/cs489-slide03.pdf)
  + [YouTube, the Great Radicalizer](https://coinse.kaist.ac.kr/assets/files/teaching/2019/cs489/Tufekci.pdf)
- 09/19: [Ethical Issues in Research](/assets/files/teaching/2019/cs489/cs489-slide04.pdf)
- 09/24: Paper Seminar - Double Blind, Gender Discrimination, etc
    + [Reviewer bias in single- vs. double-blind peer review](https://www.pnas.org/content/114/48/12708) ([Presentation from Team 1](/assets/files/teaching/2019/cs489/team1_presentation.pdf))
    + [Gender differences and bias in open source: pull request acceptance of women versus men](https://peerj.com/articles/cs-111/) ([Presentation from Team 2](/assets/files/teaching/2019/cs489/team2_presentation.pdf))
    + [Race and the beauty premium: Mechanical Turk workers’ evaluations of Twitter accounts](https://www.tandfonline.com/doi/full/10.1080/1369118X.2018.1543443) ([Presentation from Shin](/assets/files/teaching/2019/cs489/groggel_presentation.pdf))
- 09/26: [Fairness, Accountability, and Transparency](/assets/files/teaching/2019/cs489/cs489-fat-juhokim.pdf) (Guest Lecture: [Dr. Juho Kim, KIXLab, School of Computing, KAIST](http://juhokim.com))
- 10/01: Paper Seminar - Fairness Testing
    + [A comparative study of fairness-enhancing interventions in machine learning](https://dl.acm.org/citation.cfm?id=3287589)
    + [Fairness testing: testing software for discrimination](https://dl.acm.org/citation.cfm?id=3106277)
    + [Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification](http://proceedings.mlr.press/v81/buolamwini18a.html), [IBM Response](http://gendershades.org/docs/ibm.pdf)
- 10/03: **No Lecture: National Foundation Day**
- 10/08: Project Sales Pitch (Team 1, 4, 7, 10, 13, 16)
- 10/10: Project Sales Pitch (Team 2, 5, 8, 11, 14, 17)
- 10/15: Project Sales Pitch (Team 3, 6, 9, 12, 15, 18)
- 10/17: [Right to be forgotten](/assets/files/teaching/2019/cs489/cs489-slide05.pdf) / [Automation](/assets/files/teaching/2019/cs489/cs489-slide06.pdf)
- 10/22: **No Lecture: Midterm Week**
- 10/24: **No Lecture: Midterm Week**
- 10/29: [AI and Ethics](/assets/files/teaching/2019/cs489/cs489-slide07.pdf)
- 10/31: Paper Seminar - AI Ethics
    + [The Moral Machine Experiment](https://www.nature.com/articles/s41586-018-0637-6)
    + [Avoiding the intrinsic unfairness of the trolley problem](https://dl.acm.org/citation.cfm?id=3194770.3194772)
    + [Artificial Intelligence as a Socratic Assistant for Moral Enhancement](https://link.springer.com/article/10.1007%2Fs12152-019-09401-y)
- 11/05: Workshop - Our Hippocratic Oaths
- 11/07: Paper Seminar - Fake News Detection
    + [Analyzing Biases in Perception of Truth in News Stories and Their Implications for Fact Checking](https://dl.acm.org/citation.cfm?id=3287581)
    + [Computational Fact Checking from Knowledge Networks](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0128193)
    + [Exposing DeepFake videos by detecting face warping artifacts](https://arxiv.org/abs/1811.00656), [Exposing Deep Fakes using inconsistent head poses](https://arxiv.org/abs/1811.00661)
- 11/12: [k-Anonymity and Secure Multiparty Computation](/assets/files/teaching/2019/cs489/cs489-slide08.pdf)
  + [Protecting respondents identities in microdata release](https://ieeexplore.ieee.org/document/971193)
  + [Learning Without Peeking: Secure Multi-party Computation Genetic Programming](https://link.springer.com/chapter/10.1007/978-3-319-99241-9_13)
- 11/14: [Intellectual Property, Copyright, and Provenance](/assets/files/teaching/2019/cs489/cs489-slide09.pdf)
- 11/19: Paper Seminar - Clone Detection and Code Provenance
    + [License integration patterns: Addressing license mismatches in component-based development](https://dl.acm.org/citation.cfm?id=1555035)
    + [A method to detect license inconsistencies in large-scale open source projects](https://ieeexplore.ieee.org/document/7180091)
    + [Software bertillonage](https://link.springer.com/article/10.1007/s10664-012-9199-7)
- 11/21: Homomorphic Encryption (Guest Lecture: [Prof. Jeong-hee Chun, Dept. of Mathematics, Seoul National University](https://en.wikipedia.org/wiki/Cheon_Jung-hee))
- 11/26: Environmental Impacts
- 11/28: **No Lecture: KAIST Undergraduate Admission Interview Day**
- 12/03: Paper Seminar - Energy Testing
    + [Modeling, Profiling, and Debugging the Energy Consumption of Mobile Devices](https://dl.acm.org/citation.cfm?id=2840723)
    + [Monitoring energy hotspots in software](https://link.springer.com/article/10.1007/s10515-014-0171-1)
    + [Reducing energy consumption using genetic improvement](https://dl.acm.org/citation.cfm?id=2754752)
- 12/05: Project Presentation (Team 1, 4, 7, 10)
- 12/10: Project Presentation (Team 2, 5, 8, 11, 14, 17)
- 12/12: Project Presentation (Team 6, 9, 12, 18, 16)  
- 12/17: *No Lecture: Midterm Week*
- 12/19: *No Lecture: Midterm Week*
</div>


<div id="Assignments" class="tabcontent" markdown="1">
## Assignments

### **Assignment 1: My Perspective on Ethics**

Write a 500~1,000 words essay with the theme of "my perspective on ethics". Feel free to choose a topic that meets the theme: you can pick a specific technical or social issue, or try to describe your broader ethical view.

**Due on 10th September**. Submit a PDF via KLMS (Assignment 1).

### **Assignment 2: Opinion Piece #1**

Write a 500~1,000 words essay after reading the following article: [Inmates in Finland are training AI as part of prison labor](https://www.theverge.com/2019/3/28/18285572/prison-labor-finland-artificial-intelligence-data-tagging-vainu). Your essay should explicitly state whether you support or disagree with the practice outlined in the article.

**Due on 24th September**. Submit a PDF via KLMS (Assignment 2).

### **Assignment 3: Hippocratic Oath for Computer Scientists**

Some people think that computer scientists should take what corresponds to [Hippocratic oath](https://en.wikipedia.org/wiki/Hippocratic_Oath) that physicians take: you can read about the argument [here](https://www.theguardian.com/science/2019/aug/16/mathematicians-need-doctor-style-hippocratic-oath-says-academic-hannah-fry?CMP=Share_iOSApp_Other). Your assignment is to draft your own version of such an oath. 

**Due on 22nd October**. Submit a PDF via KLMS (Assignment 3).

### **Assignment 4: Opinion Piece #2**

Write a 500~1,000 words essay that either supports or rejects the following statement: "social networking and automated contents recommendation are making people more radical". A related article can be found [here](/assets/files/teaching/2019/cs489/Tufekci.pdf). Your essay should explicitly state your view.

**Due on 12th November**. Submit a PDF via KLMS (Assignment 4).

### **Assignment 5: Universal Basic Income**

Write a 500~1,000 words essay detailing your thoughts about [Universal Basic Income](https://en.wikipedia.org/wiki/Basic_income). Do thorough background research so that you can back your claim (pro or against) as much as possible.

**Due on 3rd December**. Submit a PDF via KLMS (Assignment 5).

</div>

<div id="Projects" class="tabcontent" markdown="1">

### Project Aim

The aim of the ter project is to put the practical knowledge obtained during the course to an actual use. Any project topic is acceptable, as long as it directly touches on the theme of ethics. 

- You can develop an app (e.g., Ethical Decision Making [AppStore](https://apps.apple.com/us/app/ethical-decision-making/id799710217), [Google Play](https://play.google.com/store/apps/details?id=com.mcae.decision&hl=en)).
- You can write tools/frameworks that promote/implement certain ethical issues (e.g., secure deep learning using homomorphic encryption) and evaluate it empirically.
- You can design a human experiment about a topic related to ethics (e.g., something akin to The Moral Machine).

Choices are endless, but it has to involve some technical depths. There will be an opportunity to present the initial ideas and get feedback (Project sales pitch sessions).

**The submission of course project is by 23:59:59 of 20th December 2019.** Every **individual** should submit the following through KLMS:

- **Group report**: this should be a detailed report of your project, in whatever format that you think is the best. 
- **A GitHub repo link**: As announced at the beginning of the course, you should also submit a **GitHub repository** that contains everything about your project. The link should be included in the group report.
- **Individual report**: this report should contain two parts - first, describe what your own contribution to the project was, and second, evaluate your team members using on a scale of 0 to 10, with a brief justification for your evaluation.

</div>

<div id="Reading List" class="tabcontent" markdown="1">

### Recommended Reading List

This list is not an obligation, but contains highly recommended readings if you want to widen your views around the issues we will handle throughout the course. 

- [The People vs. Tech: How Internet is killing democracy (and how we save it)](https://www.penguin.co.uk/books/111/1116305/the-people-vs-tech/9781785039065.html), Jamie Bartlett
- [Spotify Teardown: Inside the Black Box of Streaming Music](https://mitpress.mit.edu/books/spotify-teardown), Maria Eriksson, Rasmus Fleischer, Anna Johansson, Pelle Snickars, and Patrick Vonderau
- [The Most Human Human](https://brianchristian.org/the-most-human-human/), Brian Christian / [가장 인간적인 인간](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=17470932), 브라이언 크리스천
- [Would you kill the fat man? The trolley problem and what your answer tells us about right and wrong](https://press.princeton.edu/titles/10074.html), David Edmonds / [저 뚱뚱한 남자를 죽이시겠습니까? 당신이 피할 수 없는 도덕적 딜레마에 대한 질문](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=52115511), 데이비드 에드먼즈

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