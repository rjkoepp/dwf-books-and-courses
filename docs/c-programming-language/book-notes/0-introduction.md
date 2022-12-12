---
title: Introduction
hide_title: false
sidebar_label: Introduction
description: Notes on the introduction.
draft: false
tags: [Introduction]
keywords: [C]
image: https://github.com/farlowdw.png
hide_table_of_contents: true
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BibRef from '@site/src/components/BibRef';

<details><summary> Preface</summary>

The computing world has undergone a revolution since the publication of
*The C Programming Language* in 1978. Big computers are much bigger, and
personal computers have capabilities that rival the mainframes of a decade ago.
During this time, C has changed too, although only modestly, and it has spread
far beyond its origins as the language of the UNIX operating system.

The growing popularity of C, the changes in the language over the years,
and the creation of compilers by groups not involved in its design, combined to
demonstrate a need for a more precise and more contemporary definition of the
language than the first edition of this book provided. In 1983, the American
National Standards Institute (ANSI) established a committee whose goal was to
produce "an unambiguous and machine-independent definition of the language
C," while still retaining its spirit. The result is the ANSI standard for C.

The standard formalizes constructions that were hinted at but not described
in the first edition, particularly structure assignment and enumerations. It provides
a new form of function declaration that permits cross-checking of definition
with use. It specifies a standard library, with an extensive set of functions
for performing input and output, memory management, string manipulation,
and similar tasks. It makes precise the behavior of features that were not
spelled out in the original definition, and at the same time states explicitly
which aspects of the language remain machine-dependent.

This second edition of *The C Programming Language* describes C as defined
by the ANSI standard. Although we have noted the places where the language
has evolved, we have chosen to write exclusively in the new form. For the most
part, this makes no significant difference; the most visible change is the new
form of function declaration and definition. Modern compilers already support
most features of the standard.

We have tried to retain the brevity of the first edition. C is not a big
language, and it is not well served by a big book. We have improved the exposition
of critical features, such as pointers, that are central to C programming.
We have refined the original examples, and have added new examples in several
chapters. For instance, the treatment of complicated declarations is augmented
by programs that convert declarations into words and vice versa. As before, all
examples have been tested directly from the text, which is in machine-readable
form.

[Appendix A](/docs/c-programming-language/book-notes/appendix-a-reference-manual), the reference manual, is not the standard, but our attempt to
convey the essentials of the standard in a smaller space. It is meant for easy
comprehension by programmers, but not as a definition for compiler writers &#8212; that
role properly belongs to the standard itself. [Appendix B](/docs/c-programming-language/book-notes/appendix-b-standard-library) is a summary of
the facilities of the standard library. It too is meant for reference by programmers,
not implementers. [Appendix C](/docs/c-programming-language/book-notes/appendix-c-summary-of-changes) is a concise summary of the changes from
the original version.

As we said in the preface to the first edition, C "wears well as one's experience
with it grows." With a decade more experience, we still feel that way.
We hope that this book will help you to learn C and to use it well.

We are deeply indebted to friends who helped us to produce this second edition.
Jon Bentley, Doug Gwyn, Doug Mcilroy, Peter Nelson, and Rob Pike
gave us perceptive comments on almost every page of draft manuscripts. We
are grateful for careful reading by AI Abo, Dennis Allison, Joe Campbell, G. R.
Emlin, Karen Fortgang, Allen Holub, Andrew Hume, Dave Kristol, John
Linderman, Dave Prosser, Gene Spafford, and Chris Van Wyk. We also
received helpfpl suggestions from Bill Cheswick, Mark Kernighan, Andy
Koenig, Robin Lake, Tom London, Jim Reeds, Clovis Tondo, and Peter Weinberger.
Dave Prosser answered many detailed questions about the ANSI standard.
We used Bjarne Stroustrup's C++ translator extensively for local testing
of our programs, and Pave Kristof provided us with an ANSI C compiler for
final testing; Rich Drechsler helped greatly with typesetting.

Our sincere thanks to all.

</details>

<details><summary> Preface to the First Edition</summary>

C is a general-purpose programming language which features economy of
expression, modern control flow and data structures, and a rich set of operators.
C is not a "very high level" language, nor a "big" one, and is not specialized to
any particular area of application. But its absence of restrictions and its generality
make it more convenient and effective for many tasks than supposedly
more powerful languages.

C was originally designed for and implemented on the UNIX operating system
on the DEC PDP-11, by Dennis Ritchie. The operating system, the C com·
piler, and essentially all UNIX applications programs (including all of the
software used to prepare this book) are written in C. Production compilers also
exist for several other machines, including the IBM System/370, the Honeywell
6000, and the Interdata 8/32. C is not tied to any particular hardware or system,
however, and it is easy to write programs that will run without change on
any machine that supports C.

This book is meant to help the reader learn how to program in C. It contains
a tutorial introduction to get new users started as soon as possible,
separate chapters on each major feature, and a reference manual. Most of the
treatment is based on reading, writing and revising examples, rather than on
mere statements of rules. For the most part, the examples are complete, real
programs, rather than isolated fragments. All examples have been tested
directly from the text, which is in machine-readable form. Besides showing how
to make effective use of the language, we have also tried where possible to illustrate
useful algorithms and principles of good style and sound design.

The book is not an introductory programming manual; it assumes some familiarity
with basic programming concepts like variables, assignment statements,
loops, and functions. Nonetheless, a novice programmer should be able to read
along and pick up the language, although access to a more knowledgeable colleague
will help.

In our experience, C has proven to be a pleasant, expressive, and versatile
language for a wide variety of programs. It is easy to learn, and it wears well
as one's experience with it grows. We hope that this book will help you to use it
well.

The thoughtful criticisms and suggestions of many friends and colleagues
have added greatly to this book and to our pleasure in writing it. In particular,
Mike Bianchi, Jim Blue, Stu Feldman, Doug Mcilroy, Bill Roome, Bob Rosin,
and Larry Rosier all read multiple versions with care. We are also indebted to
AI Abo, Steve Bourne, Dan Dvorak, Chuck Haley, Debbie Haley, Marion
Harris, Rick Holt, Steve Johnson, John Mashey, Bob Mitze, Ralph Muha, Peter
Nelson, Elliot Pinson, Bill Plauger, Jerry Spivack, Ken Thompson, and Peter
Weinberger for helpful comments at various stages, and to Mike Lesk and Joe
Ossanna for invaluable assistance with typesetting.

</details>

C is a general-purpose programming language. It has been closely associated
with the UNIX system where it was developed, since both the system and
most of the programs that run on it are written in C. The language, however, is
not tied to any one operating system or machine; and although it has been
called a "system programming language" because it is useful for writing compilers
and operating systems, it has been used equally well to write major programs
in many different domains.

Many of the important ideas of C stem from the language BCPL, developed
by Martin Richards. The influence of BCPL on C proceeded indirectly through
the language B, which was written by Ken Thompson in 1970 for the first
UNIX system on the DEC PDP-7.

BCPL and B are "typeless" languages. By contrast, C provides a variety of
data types. The fundamental types are characters, and integers and floating-point
numbers of several sizes. In addition, there is a hierarchy of derived data
types created with pointers, arrays, structures, and unions. Expressions are
formed from operators and operands; any expression, including an assignment or
a function call, can be a statement. Pointers provide for machine-independent
address arithmetic.

C provides the fundamental control-flow constructions required for well-structured
programs: statement grouping, decision making (`if-else`), selecting
one of a set of possible cases (`switch`), looping with the termination test at the
top (`while`, `for`) or at the bottom (`do`), and early loop exit (`break`).

Functions may return values of basic types, structures, unions, or pointers.
Any function may be called recursively. Local variables are typically
"automatic," or created anew with each invocation. Function definitions may
not be nested but variables may be declared in a block-structured fashion. The
functions of a C program may exist in separate source files that are compiled
separately. Variables may be internal to a function, external but known only
within a single source file, or visible to the entire program.

A preprocessing step performs macro substitution on program text, inclusion
of other source files, and conditional compilation.

C is a relatively "low level" language. This characterization is not
pejorative; it simply means that C deals with the same sort of objects that most
computers do, namely characters, numbers, and addresses. These may be combined
and moved about with the arithmetic and logical operators implemented
by real machines.

C provides no operations to deal directly with composite objects such as
character strings, sets, lists, or arrays. There are no operations that manipulate
an entire array or string, although structures may be copied as a unit. The
language does not define any storage allocation facility other than static definition
and the stack discipline provided by the local variables of functions; there is
no heap or garbage collection. Finally, C itself provides no input/output facilities;
there are no READ or WRITE statements, and no built-in file access
methods. All of these higher-level mechanisms must be provided by explicitly-called
functions. Most C implementations have included a reasonably standard
collection of such functions.

Similarly, C offers only straightforward, single-thread control flow: tests,
loops, grouping, and subprograms, but not multiprogramming, parallel operations,
synchronization, or coroutines.

Although the absence of some of these features may seem like a grave deficiency
("You mean I have to call a function to compare two character
strings?"), keeping the language down to modest size has real benefits. Since C
is relatively small, it can be described in a small space, and learned quickly. A
programmer can reasonably expect to know and understand and indeed regularly
use the entire language.

For many years, the definition of C was the reference manual in the first
edition of *The C Programming Language*. In 1983, the American National
Standards Institute (ANSI) established a committee to provide a modern,
comprehensive definition of C. The resulting definition, the ANSI standard, or
"ANSI C," was completed late in 1988. Most of the features of the standard
are already supported by modern compilers.

The standard is based on the original reference manual. The language is
relatively little changed; one of the goals of the standard was to make sure that
most existing programs would remain valid, or, failing that, that compilers could
produce warnings of new behavior.

For most programmers, the most important change is a new syntax for
declaring and defining functions. A function declaration can now include a
description of the arguments of the function; the definition syntax changes to
match. This extra information makes it much easier for compilers to detect
errors caused by mismatched arguments; in our experience, it is a very useful
addition to the language.

There are other small-scale language changes. Structure assignment and
enumerations, which had been widely available, are now officially part of the
language. Floating-point computations may now be done in single precision.
The properties of arithmetic, especially for unsigned types, are clarified. The
preprocessor is more elaborate. Most of these changes will have only minor
effects on most programmers.

A second significant contribution of the standard is the definition of a library
to accompany C. It specifies functions for accessing the operating system (for
instance, to read and write files), formatted input and output, memory allocation,
string manipulation, and the like. A collection of standard headers provides
uniform access to declarations of functions and data types. Programs that
use this library to interact with a host system are assured of compatible
behavior. Most of the library is closely modeled on the "standard I/O library"
of the UNIX system. This library was described in the first edition, and has
been widely used on other systems as well. Again, most programmers will not
see much change.

Because the data types and control structures provided by C are supported
directly by most computers, the run-time library required to implement self-contained
programs is tiny. The standard library functions are only called
explicitly, so they can be avoided if they are not needed. Most can be written in
C, and except for the operating system details they conceal, are themselves portable.

Although C matches the capabilities of many computers, it is independent of
any particular machine architecture. With a little care it is easy to write portable
programs, that is, programs that can be run without change on a variety of
hardware. The standard makes portability issues explicit, and prescribes a set
of constants that characterize the machine on which the program is run.

C is not a strongly-typed language, but as it has evolved, its type-checking
has been strengthened. The original definition of C frowned on, but permitted,
the interchange of pointers and integers; this has long since been eliminated, and
the standard now requires the proper declarations and explicit conversions that
had already been enforced by good compilers. The new function declarations
are another step in this direction. Compilers will warn of most type errors, and
there is no automatic conversion of incompatible data types. Nevertheless, C
retains the basic philosophy that programmers know what they are doing; it only
requires that they state their intentions explicitly.

C, like any other language, has its blemishes. Some of the operators have
the wrong precedence; some parts of the syntax could be better. Nonetheless, C
has proven to be an extremely effective and expressive language for a wide
variety of programming applications.

The book is organized as follows. Chapter 1 is a tutorial on the central part
of C. The purpose is to get the reader started as quickly as possible, since we
believe strongly that the way to learn a new language is to write programs in it.
The tutorial does assume a working knowledge of the basic elements of programming;
there is no explanation of computers, of compilation, nor of the
meaning of an expression like `n = n + 1`. Although we have tried where possible to
show useful programming techniques, the book is not intended to be a reference
work on data structures and algorithms; when forced to make a choice, we have
concentrated on the language.

Chapters 2 through 6 discuss various aspects of C in more detail, and rather
more formally, than does Chapter 1, although the emphasis is still on examples
of complete programs, rather than isolated fragments. Chapter 2 deals with the
basic data types, operators and expressions. Chapter 3 treats control flow:
`if-else`, `switch`, `while`, `for`, etc. Chapter 4 covers functions and program
structur &#8212; external variables, scope rules, multiple source files, and so on &#8212; and
also touches on the preprocessor. Chapter 5 discusses pointers and address
arithmetic. Chapter 6 covers structures and unions.

Chapter 7 describes the standard library, which provides a common interface
to the operating system. This library is defined by the ANSI standard and is
meant to be supported on all machines that support C, so programs that use it
for input, output, and other operating system access can be moved from one system
to another without change.

Chapter 8 describes an interface between C programs and the UNIX operating
system, concentrating on input/output, the file system, and storage allocation.
Although some of this chapter is specific to UNIX systems, programmers
who use other systems should still find useful material here, including some
insight into how one version of the standard library is implemented, and suggestions
on portability.

Appendix A contains a language reference manual. The official statement of
the syntax and semantics of C is the ANSI standard itself. That document,
however, is intended foremost for compiler writers. The reference manual here
conveys the definition of the language more concisely and without the same
legalistic style. Appendix B is a summary of the standard library, again for
users rather than implementers. Appendix C is a short summary of changes
from the original language. In cases of doubt, however, the standard and one's
own compiler remain the final authorities on the language.
