---
layout: page
title: CS489 Computer Ethics and Social Issues (Autumn 2021)
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
Time: 09:00-10:15, Mondays and Wednesdays
Location: Online/Zoom (link to be distributed later)

### Lecturer

Shin Yoo [shin.yoo@kaist.ac.kr](mailto:shin.yoo@kaist.ac.kr)
Office: E3-1 Room 2405

### Communication

We will use a dedicated Slack workspace. Invitation links will be distributed later.

### Syllabus

This course is concerned with a broad range of ethical issues that are closely related to, or have their origins at, computing technology and their uses. The aim of the course is not to find *the* answer to these problems. Rather, we will examine them from various angles together and discuss what we can do.

Another very important apsect of this course is that we will go through concrete technology that can help us while dealing with these issues. For example, instead of just saying that privacy is important, we will also look at techniques that allow you to effetively hide your data. Instead of just saying that a society should be fair, we will look at techniques that test large software systems for fairness. 

### Evaluation

- 30% Course Participation
- 40% Courseworks
- 30% Course Project

All courseworks and projects will be partially **peer-evaluated**: 50% of the scores will be based on evaluation from your peers, and the remaining 50% will come from the lecturer. This also means that, for each coursework and the project, you not only have to submit your deliverable, but also have to grade a reasonable number of submissions from others.

### Prerequisite

- **Active Class Participation**: a non-trivial part of this course is in-class presentation and discussion. If you just sit quietly, you will not gain much from this course. Class participation is 30% of the whole grade. Also note that **the entire class is in English**, including the language you submit your assignment in.
- **Strong programming skills**: you are required to develop an **individual** course project. There will be also a number of hands-on sessions where we will program together during the class.
- Unix/Linux-savvy: you should be familiar with the usual build tools and Unix/Linux command line environments.
- Git-aware: you will be required to submit a GitHub repository as part of your project deliverables.

### Teaching Assistant

- [Gabin An](https://coinse.kaist.ac.kr/members/gabin/)

</div>

<div id="Schedule" class="tabcontent" markdown="1">
### Lecture Schedule

The schedule below is still **tentative** for now and may change, given that we do not know the exact class size yet. Empty spots will be filled as we move along.

- 08/30: [Introduction & Admin](/assets/files/teaching/cs489/cs489-slide00.pdf)
- 09/01: [Perspectives on Ethics](/assets/files/teaching/cs489/cs489-slide01.pdf)
- 09/06: 
- 09/08: [Professional Computer Ethics](/assets/files/teaching/cs489/cs489-slide02.pdf)
- 09/13: [Technology and Public Discourse](/assets/files/teaching/cs489/cs489-slide03.pdf)
  + [YouTube, the Great Radicalizer](https://coinse.kaist.ac.kr/assets/files/teaching/cs489/Tufekci.pdf)
- 09/15: [Right to be forgotten](/assets/files/teaching/cs489/cs489-slide05.pdf) / [Automation](/assets/files/teaching/cs489/cs489-slide06.pdf)
- 09/20: Chuseok Holiday
- 09/22: Chuseok Holiday
- 09/27: [Fairness, Accountability, and Transparency](/assets/files/teaching/cs489/20210927-FAccT-CS489.pdf) (Guest Lecture: [Dr. Juho Kim, KIXLab, School of Computing, KAIST](http://juhokim.com))
- 09/29: Class Debate #1: Technology and Pandemic
  + [An open letter to developers of Mask Alimi (in Korean)](https://www.facebook.com/permalink.php?story_fbid=1039608496422939&id=100011213958452) ([here](/assets/files/teaching/cs489/openletter.pdf)'s the mostly machine translated English version)
  + [COVID-19 and Contact Tracing Apps: Ethical Challenges for a Social Experiment on a Global Scale](https://link.springer.com/article/10.1007/s11673-020-10016-9#Sec2), Lucivero et al., Journal of Bioethical Inquiry, 2020.
- 10/04: Day off for National Foundation Day
- 10/06: [Ethical Issues in Research](/assets/files/teaching/cs489/cs489-slide04.pdf)
- 10/11: Day off for Hangeul Proclamation Day
- 10/13: [AI and Ethics](/assets/files/teaching/cs489/cs489-slide07.pdf)
- 10/18: No Lecture (Midterm Exam Week)
- 10/20: No Lecture (Midterm Exam Week)
- 10/25: [Intellectual Property, Copyright, and Provenance](/assets/files/teaching/cs489/cs489-slide09.pdf)
- 10/27: [k-Anonymity and Secure Multiparty Computation](/assets/files/teaching/cs489/cs489-slide08.pdf)
  + [Protecting respondents identities in microdata release](https://ieeexplore.ieee.org/document/971193)
  + [Learning Without Peeking: Secure Multi-party Computation Genetic Programming](https://link.springer.com/chapter/10.1007/978-3-319-99241-9_13)
- 11/01: Project Presentations - each team has 5 minutes to explain the topic they chose, as well as how it will be evaluated
- 11/03: Guest Lecture: Introduction to Homomorphic Encryption by Prof. Donghoon Hyun, Dept. of Mathematics, SNU
- 11/08: [Environmental Impacts](/assets/files/teaching/cs489/cs489-slide10.pdf)
    + [What do programmers know about software energy consumption?](https://www.computer.org/csdl/magazine/so/2016/03/mso2016030083/13rRUNvgz83)
    + [Data-Oriented Characterization of Application-Level Energy Optimization](https://link.springer.com/chapter/10.1007/978-3-662-46675-9_21)
- 11/10: Open Floor - Hypocratic Oaths for Computer Scientists1
- 11/15: Paper Presentations - Team 9, 2, 4
- 11/17: Class Debate #2: Humane Data Labelling
    + [The Online Hell of Amazon's Mechanical Turk - The Atlantic](/assets/files/teaching/cs489/mturk_atlantic.pdf)
    + [Inmates in Finland are training AI as part of prison labor - The Verge](/assets/files/teaching/cs489/inmates_verge.pdf)
- 11/22: Paper Presentations - Team 6, 3, 5
- 11/24: Class Debate #3: [Embedded EthiCS](/assets/files/teaching/cs489/debate_3.pdf)
- 11/29: Paper Presentations - Team 7, 1, 8
- 12/01: No Lecture (Undergraduate Admission Interview)
- 12/06: Project Presentations 
- 12/08: Project Presentations 
- 12/13: No Lecture (Final Exam Week)
- 12/15: No Lecture (Final Exam Week)
</div>


<div id="Assignments" class="tabcontent" markdown="1">
## Assignments

To be announced.

### **Assignment 1: Ethics, Computers, and Our lives**

Pick a media coverage (e.g., a newspaper or magazine article) of an event that you think is related to both computer science and ethics. Write a minimum 1,000 words essay to describe what the ethical issue is, how it is related to computer science, and what your opinion is. Include a link to the article you chose: the article itself can be in either Korean or English (if you really have to choose something in other language, please contact me and explain why). 

**Due on 8th September before the class begins**. Submit a PDF via KLMS (Assignment 1).

### **Assignment 2: The Use of Macro Programs**

We are increasingly converting various services to online. When a mass scale infrastructure level service migrates to online space, we often face inconveniences such as waiting, service error, etc. As programmers, our instinct when faced with a boring and repetitive task is to automate it. The result is a series of macro programs that would either buy train tickets, do online course registration, book a vaccine appointment, or buy facial masks for you. Is this fundamentally cheating, or a valid use of a powerful tool (=computers and software) that are given to us? Should we sometimes accept personal level inefficiency just to become a good citizen? Write a minimum 1,000 words essay to express your opinion on this.

**Due on 29th September before the class begins**. Submit a PDF via KLMS (Assignment 2).

### **Assignment 3: Hippocratic Oath for Computer Scientists**

Some people think that computer scientists should take what corresponds to [Hippocratic oath](https://en.wikipedia.org/wiki/Hippocratic_Oath) that physicians take: you can read about the argument [here](https://www.theguardian.com/science/2019/aug/16/mathematicians-need-doctor-style-hippocratic-oath-says-academic-hannah-fry). Your assignment is to draft your own version of such an oath. Also briefly discuss your thoughts about how taking such an oath can affect CS majors.

**Due on 13th October before the class begins**. Submit a PDF via KLMS (Assignment 3).

### **Assignment 4: Thoughts on Gig Economy**

Write a minimum 1,000 words essay detailing your thoughts about [gig economy](https://en.wikipedia.org/wiki/Gig_worker). Technology has contributed a lot to enable this new form of work. Some people actively argue that it is the inevitable future of jobs (e.g. [The online jobs revolution: Freelance is future of work](https://www.the-star.co.ke/sasa/lifestyle/2020-05-08-the-online-jobs-revolution-freelance-is-future-of-work/)). Others think it is closer to exploitation and needs to be resisted (e.g. [Strike 2.0: how gig economy workers are using tech to fight back](https://www.theguardian.com/books/2019/aug/31/the-new-resistance-how-gig-economy-workers-are-fighting-back?CMP=Share_iOSApp_Other)). Where do you stand? How can technology help make it fairer and more just?

**Due on 10th November before the class begins**. Submit a PDF via KLMS (Assignment 4).

</div>

<div id="Projects" class="tabcontent" markdown="1">

### Project Aim

The aim of the term project is to put the practical knowledge obtained during the course to an actual use. Any project topic is acceptable, as long as it directly touches on the theme of ethics. 

- You can develop an app (e.g., Ethical Decision Making [AppStore](https://apps.apple.com/us/app/ethical-decision-making/id799710217), [Google Play](https://play.google.com/store/apps/details?id=com.mcae.decision&hl=en)).
- You can write tools/frameworks that promote/implement certain ethical issues (e.g., secure deep learning using homomorphic encryption) and evaluate it empirically.
- You can design a human experiment about a topic related to ethics (e.g., something akin to The Moral Machine).

Choices are endless, but it has to involve some technical depths. There will be an opportunity to present the initial ideas and get feedback (Project sales pitch sessions).

- Project pitch: 5 minute presentation explaining what your project is. **1st of November**.
- Project final presentation: 15 minute presentation about the final outcome of your project. **6th and 8th December**.

**The submission of course project is by the end of 19th December 2021.** Every **individual** should submit the following through KLMS:

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
