import BibRef from '@site/src/components/BibRef';

`malloc` accepts a size request without checking its plausibility;
`free` believes that the block it is asked to free contains a valid size field.
Improve these routines so they take more pains with error checking. <BibRef id='KR1988' pages='p. 189'></BibRef>