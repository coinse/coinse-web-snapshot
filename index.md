---
layout: default
---

<!-- <div id="slideshow">
	<div>
		<img src="{{ site.baseurl }}/assets/images/chairs.jpg" width="100%" />
		<h2><span>COINSE Laboratory</span></h2>
	</div>
	<!-- <div>
		<img src="{{ site.baseurl }}/assets/images/chairs.jpg" width="100%" />
		<h2><span>Come join us!</span></h2>
	</div>
</div> -->

<h1>Computational Intelligence for Software Engineering Lab</h1>

<div class="page-contents-col-wrapper">
<div class="interview-ad gradient">
<strong>MSc Recruiting Autumn 2022:</strong> We are looking for new members! <br/>
<button type="button" class="apply-btn" onclick="window.open('./interviews')"> Apply to COINSE </button>
</div>
</div>

<br/>
Our research focuses on the exciting intersection between software engineering and machine intelligence.

<div class="page-contents-col-wrapper">
<h2 class="page-heading">Recent Updates</h2>

<div class="news-box">
    {% for post in site.posts limit:6 %}
      <div class="news-item">
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        {{post.excerpt | remove: '<p>' | remove: '</p>' }} <a href="{{ post.url | prepend: site.baseurl }}">[more...]</a>
      </div>
    {% endfor %}

</div>
</div>

<div class="page-contents-col-wrapper">
	<div class="page-contents-col-1">
		<h2>Latest Publications</h2>
		{% bibliography  --query @*[year>=2017] --max 7 --sort_by year,month --order descending %}	
	</div>
	<div class="page-contents-col-2">
		<!-- <h3>News</h3> -->
		{% twitter https://twitter.com/coinselab maxwidth=200 maxheight=430 %}
	</div>
</div>
