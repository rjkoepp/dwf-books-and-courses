import BibRef from '@site/src/components/BibRef';

Write a routine `bfree(p, n)` that will free an arbitrary block `p`
of `n` characters into the free list maintained by `malloc` and `free`. By using
`bfree`, a user can add a static or external array to the free list at any time. <BibRef id='KR1988' pages='p. 189'></BibRef>