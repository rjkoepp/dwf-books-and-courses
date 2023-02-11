import BibRef from '@site/src/components/BibRef';

Extend `atof` to handle scientific notation of the form

```
123.45e-6
```

where a floating-point number may be followed by `e` or `E` and an optionally
signed exponent. <BibRef id='KR1988' pages='p. 73'></BibRef>