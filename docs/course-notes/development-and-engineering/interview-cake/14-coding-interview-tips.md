---
title: Coding Interview Tips
hide_title: false
sidebar_label: 14 - Coding Interview Tips
description: Coding Interview Tips.
draft: false
tags: [Interview Cake]
keywords: [interviewing]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How The Coding Interview Works

Here are the usual steps:

1. First, you'll do a **non-technical phone screen**.
2. Then, you'll do one or a few **technical phone interviews**.
3. Finally, the last step is an **onsite interview**.

Some companies also throw in a **take-home code test**-—sometimes before the technical phone interviews, sometimes after.

Let's walk through each of these steps.

### The non-technical phone screen

This first step is a quick call with a recruiter—-usually just 10–20 minutes. It's very casual. Don't expect technical questions. The recruiter probably won't be a programmer. The main goal is to gather info about your job search. Stuff like:

1. **Your timeline.** Do you need to sign an offer in the next week? Or are you trying to start your new job in three months?
2. **What's most important to you in your next job.** Great team? Flexible hours? Interesting technical challenges? Room to grow into a more senior role?
3. **What stuff you're most interested in working on.** Front end? Back end? Machine learning?

Be honest about all this stuff—-that'll make it easier for the recruiter to get you what you want.

One exception to that rule: **If the recruiter asks you about your salary expectations on this call, best not to answer.** Just say you'd rather talk about compensation after figuring out if you and the company are a good fit. This'll put you in a better negotiating position later on.

### The technical phone interview(s)

The next step is usually one or more hour-long technical phone interviews.

Your interviewer will call you on the phone or tell you to join them on Skype or Google Hangouts. Make sure you can take the interview in a quiet place with a great internet connection. **Consider grabbing a set of headphones with a good microphone or a bluetooth earpiece.** Always test your hardware beforehand!

The interviewer will want to watch you code in real time. Usually that means using a web-based code editor like [Coderpad](https://coderpad.io/demo/) or [collabedit](http://collabedit.com/6cmuj). Run some practice problems in these tools ahead of time, to get used to them. Some companies will just ask you to share your screen through Google Hangouts or Skype.

*Turn off notifications* on your computer before you get started-—especially if you're sharing your screen!

Technical phone interviews usually have three parts:

1. Beginning chitchat (5–10 minutes)
2. Technical challenges (30–50 minutes)
3. Your turn to ask questions (5–10 minutes)

The beginning chitchat is half just to help your relax, and half actually part of the interview. The interviewer might ask some open-ended questions like:

1. Tell me about yourself.
2. Tell me about something you've built that you're particularly proud of.
3. I see this project listed on your resume—-tell me more about that.

You should be able to talk at length about the major projects listed on your resume. What went well? What didn't? How would you do things differently now?

Then come the technical challenges-—the real meat of the interview. You'll spend most of the interview on this. You might get one long question, or several shorter ones.

What kind of questions can you expect? It depends.

Startups tend to ask questions aimed towards building or debugging code. ("Write a function that takes two rectangles and figures out if they overlap."). They'll care more about progress than perfection.

Larger companies will want to test your general know-how of data structures and algorithms ("Write a function that checks if a binary tree is ‘balanced' in $O(n)$ time."). They'll care more about how you solve and optimize a problem.

With these types of questions, the most important thing is to be communicating with your interviewer throughout. You'll want to "think out loud" as you work through the problem. For more info, check out our more detailed step-by-step tips for coding interviews.

If the role requires specific languages or frameworks, some companies will ask trivia-like questions ("In Python, what's the ‘global interpreter lock'?").

After the technical questions, your interviewer will open the floor for you to ask them questions. Take some time before the interview to comb through the company's website. Think of a few specific questions about the company or the role. This can really make you stand out.

When you're done, they should give you a timeframe on when you'll hear about next steps. If all went well, you'll either get asked to do another phone interview, or you'll be invited to their offices for an onsite.

### The onsite interview

An onsite interview happens in person, at the company's office. If you're not local, it's common for companies to pay for a flight and hotel room for you.

The onsite usually consists of 2–6 individual, one-on-one technical interviews (usually in a small conference room). Each interview will be about an hour and have the same basic form as a phone screen—-technical questions, bookended by some chitchat at the beginning and a chance for you to ask questions at the end.

The major difference between onsite technical interviews and phone interviews though: you'll be coding on a whiteboard.

This is awkward at first. No autocomplete, no debugging tools, no delete button...ugh. The good news is, after some practice you get used to it. Before your onsite, practice writing code on a whiteboard (in a pinch, a pencil and paper are fine). Some tips:

1. **Start in the top-most left corner of the whiteboard.** This gives you the most room. You'll need more space than you think.
2. **Leave a blank line between each line as you write your code.** Makes it much easier to add things in later.
3. **Take an extra second to decide on your variable names.** Don't rush this part. It might seem like a waste of time, but using more descriptive variable names ultimately saves you time because it makes you less likely to get confused as you write the rest of your code.

If a technical phone interview is a sprint, an onsite is a marathon. The day can get really long. Best to keep it open—-don't make other plans for the afternoon or evening.

When things go well, you'll wrap-up by chatting with the CEO or some other director. This is half an interview, half the company trying to impress you. They may invite you to get drinks with the team after hours.

All told, a long day of onsite interviews could look something like this:

- 10am-12pm: two back-to-back technical interviews, each about an hour.
- 12pm-1pm: one or several engineers will take you to lunch, perhaps in the company's fancy office cafeteria.
- 1pm-4pm: three back-to-back technical interviews, each about an hour.
- 4pm-5pm: interview with the CEO or some sort of director.
- 5pm-8pm: drinks and dinner with the company

If they let you go after just a couple interviews, it's usually a sign that they're going to pass on you. That's okay—-it happens!

There are are a lot of easy things you can do the day before and morning of your interview to put yourself in the best possible mindset. Check out our piece on what to do in the 24 hours before your onsite coding interview.

### The take-home code test

Code tests aren't ubiquitous, but they seem to be gaining in popularity. They're far more common at startups, or places where your ability to deliver right away is more important than your ability to grow.

You'll receive a description of an app or service, a rough time constraint for writing your code, and a deadline for when to turn it in. The deadline is usually negotiable.

Here's an example problem:

> Write a basic "To-Do" app. Unit test the core functionality. As a bonus, add a "reminders" feature. Try to spend no more than 8 hours on it, and send in what you have by Friday with a small write-up.

Take a crack at the "bonus" features if they include any. At the very least, write up how you would implement it.

If they're hiring for people with knowledge of a particular framework, they might tell you what tech to use. Otherwise, it'll be up to you. Use what you're most comfortable with. You want this code to show you at your best.

Some places will offer to pay you for your time. It's rare, but some places will even invite you to work with them in their office for a few days, as a "trial."

## General Coding Interview Advice

### Chitchat like a pro

Before diving into code, most interviewers like to chitchat about your background. They're looking for:

- **Metacognition about coding.** Do you think about how to code well?
- **Ownership/leadership.** Do you see your work through to completion? Do you fix things that aren't quite right, even if you don't have to?
- **Communication.** Would chatting with you about a technical problem be useful or painful?

You should have at least one:

- example of an interesting technical problem you solved
- example of an interpersonal conflict you overcame
- example of leadership or ownership
- story about what you should have done differently in a past project
- piece of trivia about your favorite language, and something you do and don't like about said language
- question about the company's product/business
- question about the company's engineering strategy (testing, Scrum, etc)

**Nerd out about stuff.** Show you're proud of what you've done, you're amped about what they're doing, and you have opinions about languages and workflows.

### Communicate

Once you get into the coding questions, communication is key. A candidate who needed some help along the way but communicated clearly can be even better than a candidate who breezed through the question.

**Understand what kind of problem it is.** There are two types of problems:

1. **Coding.** The interviewer wants to see you write clean, efficient code for a problem.
2. **Chitchat.** The interviewer just wants you to talk about something. These questions are often either (1) high-level system design ("How would you build a Twitter clone?") or (2) trivia ("What is hoisting in Javascript?"). Sometimes the trivia is a lead-in for a "real" question e.g., "How quickly can we sort a list of integers? Good, now suppose instead of integers we had..."

If you start writing code and the interviewer just wanted a quick chitchat answer before moving on to the "real" question, they'll get frustrated. Just ask, "Should we write code for this?"

**Make it feel like you're on a team.** The interviewer wants to know what it feels like to work through a problem with you, so make the interview feel collaborative. Use "we" instead of "I," as in, "If we did a breadth-first search we'd get an answer in $O(n)$ time." If you get to choose between coding on paper and coding on a whiteboard, always choose the whiteboard. That way you'll be situated next to the interviewer, facing the problem (rather than across from her at a table).

**Think out loud.** Seriously. Say, "Let's try doing it this way—not sure yet if it'll work." If you're stuck, just say what you're thinking. Say what might work. Say what you thought could work and why it doesn't work. This also goes for trivial chitchat questions. When asked to explain Javascript closures, "It's something to do with scope and putting stuff in a function" will probably get you 90% credit.

**Say you don't know.** If you're touching on a fact (e.g., language-specific trivia, a hairy bit of runtime analysis), don't try to appear to know something you don't. Instead, say "I'm not sure, but I'd guess `$thing`, because...". The because can involve ruling out other options by showing they have nonsensical implications, or pulling examples from other languages or other problems.

**Slow the eff down.** Don't confidently blurt out an answer right away. If it's right you'll still have to explain it, and if it's wrong you'll seem reckless. You don't win anything for speed and you're more likely to annoy your interviewer by cutting her off or appearing to jump to conclusions.

### Get unstuck

Sometimes you'll get stuck. Relax. It doesn't mean you've failed. Keep in mind that the interviewer usually cares more about your ability to cleverly poke the problem from a few different angles than your ability to stumble into the correct answer. When hope seems lost, keep poking.

**Draw pictures.** Don't waste time trying to think in your head—-think on the board. Draw a couple different test inputs. Draw how you would get the desired output by hand. Then think about translating your approach into code.

**Solve a simpler version of the problem.** Not sure how to find the 4th largest item in the set? Think about how to find the 1st largest item and see if you can adapt that approach.

**Write a naive, inefficient solution and optimize it later.** Use brute force. Do whatever it takes to get some kind of answer.

**Think out loud more.** Say what you know. Say what you thought might work and why it won't work. You might realize it actually does work, or a modified version does. Or you might get a hint.

**Wait for a hint.** Don't stare at your interviewer expectantly, but do take a brief second to "think"—-your interviewer might have already decided to give you a hint and is just waiting to avoid interrupting.

**Think about the bounds on space and runtime.** If you're not sure if you can optimize your solution, think about it out loud. For example:

- "I have to at least look at all of the items, so I can't do better than $O(n)$."
- "The brute force approach is to test all possibilities, which is $O(n^2)$."
- "The answer will contain $n^2$ items, so I must at least spend that amount of time."

### Get your thoughts down

It's easy to trip over yourself. Focus on getting your thoughts down first and worry about the details at the end.

- **Call a helper function and keep moving.** If you can't immediately think of how to implement some part of your algorithm, big or small, just skip over it. Write a call to a reasonably-named helper function, say "this will do X" and keep going. If the helper function is trivial, you might even get away with never implementing it.

- **Don't worry about syntax.** Just breeze through it. Revert to English if you have to. Just say you'll get back to it.

- **Leave yourself plenty of room.** You may need to add code or notes in between lines later. Start at the top of the board and leave a blank line between each line.

- **Save off-by-one checking for the end.** Don't worry about whether your for loop should have "`<`" or "`<=`." Write a checkmark to remind yourself to check it at the end. Just get the general algorithm down.

- **Use descriptive variable names.** This will take time, but it will prevent you from losing track of what your code is doing. Use `names_to_phone_numbers` instead of `nums`. Imply the type in the name. Functions returning booleans should start with "`is_*`". Vars that hold a list should end with "`s`." Choose standards that make sense to you and stick with them.

### Clean up when you're done

- **Walk through your solution by hand, out loud, with an example input.** Actually write down what values the variables hold as the program is running-—you don't win any brownie points for doing it in your head. This'll help you find bugs and clear up confusion your interviewer might have about what you're doing.

- **Look for off-by-one errors.** Should your `for` loop use a "`<=`" instead of a "`<`"?

- **Test edge cases.** These might include empty sets, single-item sets, or negative numbers. Bonus: mention unit tests!

- **Don't be boring.** Some interviewers won't care about these cleanup steps. If you're unsure, say something like, "Then I'd usually check the code against some edge cases—-should we do that next?"

### Practice

In the end, there's no substitute for running practice questions.

- **Actually write code with pen and paper.** Be honest with yourself. It'll probably feel awkward at first. Good. You want to get over that awkwardness now so you're not fumbling when it's time for the real interview.

## Imposter Syndrome

- "It's a fluke that I got this job interview..."
- "I studied for weeks, but I'm still not prepared..."
- "I'm not actually good at this. They're going to see right through me..."

If any of these thoughts resonate with you, you're not alone. They are so common they have a name: impostor syndrome. It's that feeling like you're on the verge of being exposed for what you really are—-an impostor. A fraud. 

**Impostor syndrome is like kryptonite to coding interviews.** It makes you give up and go silent. You might stop asking clarifying questions because you're afraid they'll sound too basic. Or you might neglect to think out loud at the whiteboard, fearing you'll say something wrong and sound incompetent. You know you should speak up, but the fear of looking like an impostor makes that really, really hard.

**Here's the good news: you're not an impostor.** You just feel like an impostor because of some common cognitive biases about learning and knowledge. Once you understand these cognitive biases-—where they come from and how they work—you can slowly fix them. You can quiet your worries about being an impostor and keep those negative thoughts from affecting your interviews.

### Everything you could know

Here's how impostor syndrome works. Software engineering is a massive field. There's a huge universe of things you *could* know. *Huge*.

<div align='center'>
  <img width="325px" src={require('@site/static/img/course-notes/cake/c14/f1.png').default} />
</div>

In comparison to the vast world of things you *could* know, the stuff you *actually* know is just a tiny sliver:

<div align='center'>
  <img width="325px" src={require('@site/static/img/course-notes/cake/c14/f2.png').default} />
</div>

That's the first problem. It feels like you don't really know that much, because you only know a tiny sliver of all the stuff there is to know.

### The expanding universe

It gets worse: **counterintuitively, as you learn more, your sliver of knowledge feels like it's *shrinking***.

That's because you brush up against more and more things you don't know yet. Whole *disciplines* like machine learning, theory of computation, and embedded systems. Things you can't just pick up in an afternoon. Heavy bodies of knowledge that take *months* to understand.

So the universe of things you *could* know seems to keep expanding faster and faster-—much faster than your tiny sliver of knowledge is growing. It feels like you'll never be able to keep up.

### What everyone else knows

Here's another common cognitive bias: we assume that because something is easy for us, it must be easy for everyone else. So when we look at our own skills, we assume they're not unique. But when we look at *other* people's skills, we notice the skills they have that we don't have.

The result? We think everyone's knowledge is a superset of our own:

<div align='center'>
  <img width="325px" src={require('@site/static/img/course-notes/cake/c14/f3.png').default} />
</div>

This makes us feel like everyone else is ahead of us. Like we're always a step behind. But the truth is more like this:

<div align='center'>
  <img width="325px" src={require('@site/static/img/course-notes/cake/c14/f4.png').default} />
</div>

There's a whole area of stuff *you know* that neither Aysha nor Bruno knows. An area you're probably blind to, because you're so focused on the stuff you don't know.

We've all had flashes of realizing this. For me, it was seeing the back end code wizard on my team—-the one that always made me feel like an impostor—-spend an hour trying to center an image on a webpage.

### It's a problem of focus

Focusing on what you don't know causes you to underestimate what you *do* know. And that's what causes impostor syndrome.

By looking at the vast (and *expanding*) universe of things you *could* know, you feel like you hardly know anything.

And by looking at what Aysha and Bruno know that you don't know, you feel like you're a step behind.

And interviews make you *really* focus on what you don't know. You focus on what could go wrong. The knowledge gaps your interviewers might find. The questions you might not know how to answer.

But remember:

Just because Aysha and Bruno know some things you don't know, doesn't mean you don't also know things Aysha and Bruno don't know.

And more importantly, everyone's body of knowledge is just a teeny-tiny sliver of everything they could learn. We *all* have gaps in our knowledge. We *all* have interview questions we won't be able to answer.

You're not a step behind. You just have a lot of stuff you don't know yet. Just like everyone else.

## Why You Hit Dead Ends

### Listening vs. holding your train of thought

Finally! After a while of shooting in the dark and frantically fiddling with sample inputs on the whiteboard, you've came up with an algorithm for solving the coding question your interviewer gave you.

Whew. Such a relief to have a clear path forward. To not be flailing anymore.

Now you're cruising, getting ready to code up your solution.

When suddenly, your interviewer throws you a curve ball.

"What if we thought of the problem this way?"

You feel a tension we've all felt during the coding interview:

***"Try to listen to what they're saying...but don't lose your train of thought...ugh, I can't do both!"***

This is a make-or-break moment in the coding interview. And so many people get it wrong.

Most candidates end up only half understanding what their interviewer is saying. Because they're only half listening. Because they're desperately clinging to their train of thought.

And it's easy to see why. For many of us, completely losing track of what we're doing is one of our *biggest* coding interview fears. So we devote half of our mental energy to clinging to our train of thought.

To understand why that's so wrong, we need to understand the difference between what *we* see during the coding interview and what *our interviewer* sees.

### The programming interview maze

Working on a coding interview question is like walking through a giant maze.

You don't know anything about the shape of the maze until you start wandering around it. You might know vaguely where the solution is, but you don't know how to get there.

<div align='center'>
  <img width="325px" src={require('@site/static/img/course-notes/cake/c14/f5.png').default} />
</div>

As you wander through the maze, you might find a promising path (an approach, a way to break down the problem). You might follow that path for a bit.

<div align='center'>
  <img width="325px" src={require('@site/static/img/course-notes/cake/c14/f6.png').default} />
</div>

Suddenly, your interviewer suggests a different path:

<div align='center'>
  <img width="325px" src={require('@site/static/img/course-notes/cake/c14/f7.png').default} />
</div>

But from what you can see so far of the maze, your approach has already gotten you halfway there! Losing your place on your current path would mean a huge step backwards. Or so it seems.

*That* is why people hold onto their train of thought instead of listening to their interviewer. Because from what they can see, it looks like they're getting somewhere!

But here's the thing: **your interviewer knows the whole maze**. They've asked this question 100 times.

I'm not exaggerating: if you interview candidates for a year, you can easily end up asking the same question over 100 times.

So if your interviewer is suggesting a certain path, you can bet it leads to an answer.

<div align='center'>
  <img width="325px" src={require('@site/static/img/course-notes/cake/c14/f8.png').default} />
</div>

And your seemingly great path? There's probably a dead end just ahead that you haven't seen yet:

<div align='center'>
  <img width="325px" src={require('@site/static/img/course-notes/cake/c14/f9.png').default} />
</div>

Or it could just be a much longer route to a solution than you think it is. That actually happens pretty often—-there's an answer there, but it's more complicated than you think.

<div align='center'>
  <img width="325px" src={require('@site/static/img/course-notes/cake/c14/f10.png').default} />
</div>

### Hitting a dead end is okay. Failing to listen is not.

Your interviewer probably won't *fault* you for going down the wrong path at first. They've seen really smart engineers do the same thing. They understand it's because you only have a partial view of the maze.

They might have let you go down the wrong path for a bit to see if you could keep your thinking organized without help. But now they want to rush you through the part where you discover the dead end and double back. Not because they don't believe you can manage it yourself. But because they want to make sure you have enough time to finish the question.

But here's something they *will* fault you for: failing to listen to them. Nobody wants to work with an engineer who doesn't listen.

So when you find yourself in that crucial coding interview moment, when you're torn between holding your train of thought and considering the idea your interviewer is suggesting...remember this:

**Listening to your interviewer is the *most* important thing.**

Take what they're saying and run with it. Think of the next steps that follow from what they're saying.

Even if it means completely leaving behind the path you were on. Trust the route your interviewer is pointing you down.

Because they can see the whole maze.

## Tips for Getting Unstuck

Getting stuck during a coding interview is rough.

If you weren't in an interview, you might take a break or ask Google for help. But the clock is ticking, and you don't have Google.

You just have an empty whiteboard, a smelly marker, and an interviewer who's looking at you expectantly. And all you can think about is how stuck you are.

You need a lifeline for these moments-—like a little box that says "In Case of Emergency, Break Glass."

Inside that glass box? A list of tricks for getting unstuck. Here's that list of tricks.

### When you're stuck on getting started

1\. **Write a sample input on the whiteboard and turn it into the correct output "by hand."**

Notice the *process* you use. Look for patterns, and think about how to implement your process in code.

Trying to reverse a string? Write "hello" on the board. Reverse it "by hand"-—draw arrows from each character's current position to its desired position.

<div align='center'>
  <img width="275px" src={require('@site/static/img/course-notes/cake/c14/f11.png').default} />
</div>

Notice the pattern: it looks like we're *swapping* pairs of characters, starting from the outside and moving in. Now we're halfway to an algorithm.

2\. **Solve a simpler version of the problem.** Remove or simplify one of the requirements of the problem. Once you have a solution, see if you can adapt that approach for the original question.

Trying to find the k-largest element in a set? Walk through finding the *largest* element, then the *second largest*, then the *third largest*. Generalizing from there to find the k-largest isn't so bad.

3\. Start with an inefficient solution. Even if it feels *stupidly inefficient*, it's often helpful to start with *something* that'll return the right answer. From there, you just have to optimize your solution. Explain to your interviewer that this is only your first idea, and that you suspect there are faster solutions.

Suppose you were given two lists of sorted numbers and asked to find the median of both lists combined. It's messy, but you could simply:

1. Concatenate the arrays together into a new array.
2. Sort the new array.
3. Return the value at the middle index.

Notice that you could've also arrived at this algorithm by using trick (2): Solve a simpler version of the problem. "How would I find the median of one sorted list of numbers? Just grab the item at the middle index. Now, can I adapt that approach for getting the median of *two* sorted lists?"

### When you're stuck on finding optimizations

1\. **Look for repeat work.** If your current solution goes through the same data multiple times, you're doing unnecessary repeat work. See if you can save time by looking through the data just once.

Say that inside one of your loops, there's a brute-force operation to find an element in an array. You're repeatedly looking through items that you don't have to. Instead, you could convert the array to a lookup table to dramatically improve your runtime.

2\. **Look for hints in the specifics of the problem.** Is the input array sorted? Is the binary tree balanced? Details like this can carry huge hints about the solution. If it didn't matter, your interviewer wouldn't have brought it up. It's a strong sign that the best solution to the problem exploits it.

Suppose you're asked to find the first occurrence of a number in a sorted array. The fact that the array is *sorted* is a strong hint—-take advantage of that fact by using a binary search.

Sometimes interviewers leave the question deliberately vague because they want you to *ask questions* to unearth these important tidbits of context. So ask some questions at the beginning of the problem.

3\. **Throw some data structures at the problem.** Can you save time by using the fast lookups of a hash table? Can you express the relationships between data points as a graph? Look at the requirements of the problem and ask yourself if there's a data structure that has those properties.

4\. **Establish bounds on space and runtime.** Think out loud about the parameters of the problem. Try to get a sense for how fast your algorithm *could possibly be*:

- "I have to at least look at all the items, so I can't do better than $O(n)$ time".
- "The brute force approach is to test all possibilities, which is $O(n^2)$ time. So the question is whether or not I can beat that time."
- "The answer will contain $n^2$ items, so I must at least spend that amount of time."

### When All Else Fails

1\. **Make it clear where you are.** State what you know, what you're trying to do, and highlight the gap between the two. The clearer you are in expressing *exactly* where you're stuck, the easier it is for your interviewer to help you.

2\. Pay attention to your interviewer. If she asks a question about something you just said, there's probably a hint buried in there. Don't worry about losing your train of thought—-drop what you're doing and dig into her question.

### Relax. You're supposed to get stuck.

Interviewers choose hard problems on purpose. They want to see how you poke at a problem you don't immediately know how to solve.

Seriously. If you don't get stuck and just breeze through the problem, your interviewer's evaluation might just say "Didn't get a good read on candidate's problem-solving process-—maybe she'd already seen this interview question before?"

On the other hand, if you *do* get stuck, use one of these tricks to get unstuck, and communicate clearly with your interviewer throughout...*that* is how you get an evaluation like, "Great problem-solving skills. Hire."

## The 24 Hours Before Your Interview

**The twenty-four hours before your onsite are about finding ways to maximize your performance.** Ideally, you wanna be having one of *those days*, where elegant code flows effortlessly from your fingertips, and bugs dare not speak your name for fear you'll squash them.

**You need to get your mind and body in The Zone™** before you interview, and we've got some simple suggestions to help.

### Don't study all night—sleep!

**Interviewing sleep deprived could be [worse than getting drunk beforehand](https://www.huffingtonpost.com/lissette-calveiro/studies-show-sleep-deprivation-performance-is-similar-to-being-under-the-influence-of-alcohol_b_9562992.html).** Make it your mission to get a full night of sleep, because you want all the brain power you can get.

In fact, try to get *two* nights of good sleep before interviewing, since [sleep debt lasts a few days](https://www.seventhgeneration.com/blog/cost-sleep-debt-can-you-recover).

**As soon as the sun goes down, put down the practice problems and focus on relaxing.** If sleeping isn't your strongest skill, try these sleepytime guidelines:

- Exercise *lightly* earlier in the day.
- Don't drink caffeine in the afternoon, and don't drink alcohol at all.
- Avoid bright screens in the evening. Dim your screen once the sun sets.
- Eat a *light* dinner, ideally one with noggin-friendly foods, like salmon, beans, and vegetables.
- Before bed, turn on a boring podcast, listen to some calming music, or read a book.

**The most important thing is to not stay up late practicing new or difficult problems.** That'll only put your brain on a train to Los Anxiousness. Instead, you should...

### Practice stuff you rock at

**To cultivate your confidence, practice questions that you can already solve handily.** Sure, feel free to *start* the day with a new problem, but by the afternoon you should be building momentum with the questions you know best.

Giving yourself a few wins like this helps your brain simulate a stellar session at the whiteboard. You'll go to sleep dreaming of data structures, and you'll wake up with a self-esteem stimulus that makes you stand out in your interview.

### Imagine your best day

**Picture the ideal version of your day.** It's a positive visualization exercise. This might sound like some hippie shit, but it's something athletes and entrepreneurs do all the time.

Check out [our guided meditation that helps you visualize yourself breezing through a full day of onsite interviews](https://www.interviewcake.com/coding-interview-meditation). It takes about 12 minutes, and it goes a long way.

If guided meditations aren't your thing, you can do it yourself. Grab a piece of paper and *write out* everything that'll happen during a successful day of interviews. Here's some inspiration to get you started:

- **Greet your interviewer(s).** Play through some small talk. Maybe you make a little joke they find funny.
- **Crush your first question.** The first question comes your way, and you write out the answer deftly. Your interviewer's face looks impressed.
- **Overcome a tough question.** You get to a trickier part of a problem. You feel some adrenaline, but you keep calm. You ask a few clarifying questions and carry on to a solution.
- **End the day on a high note.** Your last interview of the day involves talking to a director or VP, and the conversation is lively. You leave the building smiling and feeling great about the whole experience.

**Visualizing a successful day will build your confidence.** You're training your brain to expect success and feel more comfortable during your interview.

### Walk through your problem solving process

**Reinforcing problem-solving patterns goes a longer way than practicing new problems** in the hours leading up to your interview. Notice how our coding interview tips article gives you a handy process for solving algorithmic problems:

1. **Brainstorm an algorithm.** Draw out sample inputs and play around with them while talking and thinking out loud. Don't start writing code until you and your interviewer feel good about your algorithm.
2. **Barf out your algorithm in code.** Focus on getting it all down first, and jot down notes next to the things you wanna go back and double-check later.
3. **Debug your code.** Walk through your code with sample input, look for off-by-one-errors and other bugs.

This high-level, "What's my problem solving *process*" is great to keep thinking about the morning of your interview. And speaking of that morning...

### Precompute your morning

**Decision fatigue is real.** It's why successful people like Mark Zuckerberg and Barack Obama always wear the same thing—-to minimize the number of decisions they make each morning. Luckily, it's easy to avoid decision fatigue once you're aware of it!

**Plan the boring stuff ahead of time.** Here are a few suggestions to get you started:

- **Pack your bag.** Include a snack and water bottle.
- **Lay out some nice clothes.** Dress a tiny step above what others in the office are wearing (usually they'll be sporting jeans and a t-shirt).
- **Plan your breakfast.** For your brain's sake, try to include eggs, berries, and avocado.
- **Choose your route** to the office. Expect traffic. Scope out the parking situation if you're driving.
- **Tarantino your morning.** Work backwards from about 30 minutes before your interview, and figure out what time you need to wake up.
- **Set an alarm (or ten).** Remember that you want time in the morning to chill, eat a leisurely breakfast, and sip on a cup of coffee (if that's your cup of ... tea).
- **Brainstorm a pump-up routine.** Come up with a few things to get you stoked. If you're not sure what your morning pump-up routine looks like, we've got you covered ...

### Get pumped

The morning of your interview, you wanna get energized! The right pump-up routine should make you excited, confident, and ready to tackle your interview head-on.

**Get your body moving.** Do sun salutations and a few jumping jacks. Light exercise increases the blood flow to your brain and helps [clear your mind](https://www.scientificamerican.com/article/why-do-you-think-better-after-walk-exercise/).

**Power pose and read your positive visualization.** It might feel strange at first, but [it works](https://jamesclear.com/body-language-how-to-be-confident)! You'll prime yourself to feel more confident heading into your interview.

**Listen to pump-up music.** If you're like me, the intro to Backstreet's Back should do the trick. If you're not like me (i.e., you're unwilling to admit you like the Backstreet Boys), you probably have an equally awesome song in mind.

Here are some inspirational 90s jams, just in case you need them: [Backstreet Boys - Everybody](https://www.youtube.com/watch?list=PLV5pfPihcrT-KqeDgNH5emZQ28Mv2F5Nz&v=6M6samPEMpM&feature=emb_title)

## Beating Behavioral Questions

### "Show, don't tell"

You've probably heard this advice before. Maybe it was your 10th grade English teacher. Maybe it was career services in college. "Remember: *show*, don't tell."

And it's good advice. When it comes to answering behavioral questions (like "Tell me about yourself") in coding interviews, the difference between a good answer and a *great* answer comes down to *showing* rather than telling.

The problem is, people who give you the advice of "Show, don't tell" ... are *themselves* failing to follow it. They're *telling* you to show, but they should be *showing you how to show*. That's the hardest part!

So here are three specific tips for showing more and telling less.

### 1. Sprinkle in specific details

Imagine two responses to the stock interview question "Tell me about yourself."

First:

> I started programming about two years ago with some personal projects. I eventually got a job at a small tech company in my home town, and I've been working there about a year and a half. I like my job, but I'm looking for a new challenge, which I think your company could provide.

Then:

> I got started programming because I wanted to build a social network for cats. That didn't take off, but the prototype helped me get a job at a small tech company in my home town.
> 
> Last month, I read an awesome article on Hacker News about the social network your company is building. The scaling challenges you face seem like they'll help me grow faster and stronger than my current role will.

The second response says *a lot* more about the candidate.

Why? Because of the *specific details*. An interviewer won't remember the tenth person to say "I'm looking for a new challenge." They *will* remember the person who tried to build a social network for cats and read about their company on Hacker News.

So don't skimp on the details. **Look out for opportunities to use specifics**, especially if they're at all quirky, funny, surprising, or otherwise *memorable*.

### 2. Tell a story from your life

Take another common question: "Why do you want to work here?"

People tend to just cross-reference their values with those of the company or team they're interviewing with:

> I'm really interested in technical blogging and open source. So I like that your company has some open-source work and contributes back to the community.

That's a fine response. But to really wow your interviewer, try adding a specific story around those values:

> A couple years ago, when I was still new to programming, I was working on this tricky bug. I found a post on a company blog where an engineer explained how her team solved the issue. She included a code snippet she'd open-sourced. I appreciated that she took the time to write about her team's experience and share their solution. It helped me!
> 
> That's how I first started getting into open source. I really wanna work with more engineers like that—-who write about their work and try to help others in the community. So I was excited to see all the stuff your team shares on your blog and on the company's Github profile.

The second response just sounds more genuine. It shows a personal connection to open source and technical blogging, instead of just *telling* it.

Anyone can look up a company's core values and repeat them during an interview. It's more meaningful to **tell a story from your life** that shows how those values benefited you or taught you something.

### 3. Use someone else's voice

This one's a neat trick. Consider one more standard behavioral question: "What's your biggest strength?"

You might tell the interviewer:

> I work well with others. Even under tough circumstances, I make sure my coworkers feel supported.

But a lightly detailed story is better suited to show this strength:

> I have a coworker, Ana, who's been an engineer for almost a decade. We worked together on this really tough, messy project.
>
> Towards the end, she told me, "For such a hellish project, you really made things feel sane." I think this is my biggest strength-—I work well with others, even under tough circumstances.

When you respond with a story, you can **refer to what *other* people have said about your best qualities**. In this case, a ten-year tech veteran said you made a project feel less awful. That kind of praise is a lot more credible when it comes from someone else.

### Practice, practice, practice

Remember these specific tricks for showing rather than telling:

1. **Use specific, memorable details.** "Social network for cats" instead of "a personal project."
2. **Tell a story from your life.** "I was trying to solve a tricky bug..." instead of "I value open source contributions."
3. Use someone else's voice. "'You really made things feel sane‘" instead of "I work well with others."

Try these tactics out on the questions below. Keep in mind, sometimes it's easiest to start with a "tell" response, then spruce it up to "show."

- Tell me your biggest weakness as an engineer.
- Describe a tricky bug you've encountered.
- What's the biggest project you've shipped?
- What's your favorite programming language? Why?
- How do you overcome interpersonal conflicts with coworkers?

## Managing Your Interview Timeline

### The exploding offer dilemma

Here's the situation you wanna avoid: You've just started interviewing with a company you're really excited about. Another company you've been talking to for a while sends you an "exploding offer"-—an offer that expires in a week or even 24 hours. You have to respond to the exploding offer before your final round of interviews at the first company.

**You don't wanna have to decide between a real offer and a potential offer.** Either decision has a big downside:

- If you accept the offer in front of you, you're moving forward with a nagging "What if?"—-especially if you were excited about the other company.
- If you reject the real offer, it's possible the other company won't end up extending you an offer in the end. You could end up with nothing.

It's also bad for negotiation. The best way to get negotiating leverage with one company is to have an offer from another company. If your offers aren't open at the same time, you lose that leverage.

### Work backwards from a signing date

So you want to do everything you can to ensure your offers come in at the same time. But how do you do that? The key is to work backwards:

**Pick a "signing date" and stick to it.** This is the date that you plan to make a final decision and sign an offer. This includes some allowed time for *negotiating* once you have all your offers in hand (more on that later).

Share your chosen signing date with every company as soon as you start talking to them. You may even want to ask them to *confirm* that they'll be able to work with your timeline. This way a company is much less likely to give you an offer that explodes before that date-—they already know your timeline, so if they can't work with it they should tell you up front.

What if a company *does* give you an offer that explodes before your signing date, even though you told them about it early on? Don't panic. Politely remind them that you've been clear about your timeline from the beginning. Explain that you'd like to make your final decision on the date you've already shared with them.

If they still won't budge, you might be better off passing on that company—if they're comfortable squeezing you this early on in your relationship, that's a bad sign for how they'd treat you as an employee.

Now, some companies have policies about not having open offers for more than X days. So what if you're going through the interview process with one of those companies and it looks like you're moving too fast and the offer would come in too early and explode before the signing date you chose?

No problem. Most companies are happy to "pause" or slow down your interview process so the offer comes in later. This way both parties can get what they want: the company can follow their usual "offers explode after X days" policy, and you can have the offer still open on your pre-planned signing date.

### How far out should my signing date be?

It depends. At a high level, you should **allow as much time as you can afford to**. Most people underestimate how long their job search is going to take. And when you end up in a time crunch at the end, it means less time at the negotiation stage. So allowing an extra week for your job search could literally mean earning tens of thousands of dollars more in your final salary.

If you have a current job or are a full-time student, try to allow more time by starting the process earlier.

Of course, some of us will be in situations where we really need to start our new job as soon as possible. That's fine. Do what works for you.

Keep in mind that you're shooting for having enough time to practice and get through the whole interview process with multiple companies if you can. Think through how much time you can devote to each of these steps:

- Studying (1–8 weeks)
- Phone screens (1–3 weeks)
- Onsites (1–3 weeks)
- Negotiation (1–2 weeks)

One more consideration: if you have the means, **consider leaving yourself some time for a vacation before starting your new job**. Job hunting is stressful. And that window of time between signing a new offer and starting a new job can be a rare window of low stress and low responsibility in your life.

Many companies are happy to accommodate this by setting your start date a few weeks after your signing date-—just ask. Many offers include a signing bonus, which could help offset the cost of this extra time without a salary. But again, this'll depend on your means—-not everyone can afford to take this extra time off.

### Cast a wide net

**Interview with multiple companies.** Exactly how many companies depends on your situation, but the point is to avoid putting all your eggs in one basket. You want multiple offers by the end, so you can negotiate the best offer possible.

A good rule of thumb: send out applications to more places than you're currently planning. If you end up getting too many interviews...well that's a good problem to have! You can always "pause" or simply cancel the interview process with some companies.

**Schedule your favorite companies last.** Get interview practice with the places you aren't as excited about. You'll be in your prime by the time you interview with your top choices, so long as you don't burn out.

**Jot down your impressions after each interview.** You'll be surprised how much different companies can start to melt together after a couple weeks of interviewing.

### Avoid burnout

If you're casting a wide net and allowing several weeks for your job search, you need to be careful about burnout. The interview process is a marathon, not a sprint.

**Space out your onsites.** Onsites are draining. Try to keep at least a two day buffer between them—one day to recover after your last onsite, and one day to get ready for the next.

**Don't travel too much.** You can quickly burn yourself out bopping across the country. When you have to travel for an interview, try to wait a few days before you travel again.

Batch interviews that are in cities you have to fly to. Try to avoid flying to the same city multiple times—-though sometimes traveling to the same place twice is better than trying to cram three or more onsites into a short span of time.
