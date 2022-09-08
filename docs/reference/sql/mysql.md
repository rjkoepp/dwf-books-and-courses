---
title: MySQL Reference
hide_title: false
sidebar_label: MySQL
description: A collection of reference points for MySQL
draft: false
tags: [sql]
keywords: [sql]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [MySQL Functions](https://www.mysqltutorial.org/mysql-functions.aspx)

### Aggregates

See [the official docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html) for more information. The `Docs` link for each function points to that function's reference in the official docs. The `Tutorial` link for each function, if there is one, points to that function's reference on the MySQL tutorial site.

| Aggregate function | Docs | Tutorial | Description |
| :-- | :-- | :-- | :-- |
| `AVG()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_avg) | [Tutorial](https://www.mysqltutorial.org/mysql-avg/) | Return the average value of the argument |
| `COUNT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_count) | [Tutorial](https://www.mysqltutorial.org/mysql-count/) | Return a count of the number of rows returned |
| `GROUP_CONCAT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_group-concat) | [Tutorial](https://www.mysqltutorial.org/mysql-group_concat/) | Return a concatenated string |
| `MAX()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_max) | [Tutorial](https://www.mysqltutorial.org/mysql-max-function/) | Return the maximum value |
| `MIN()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_min) | [Tutorial](https://www.mysqltutorial.org/mysql-min/) | Return the minimum value |
| `STDDEV()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_stddev) | [Tutorial](https://www.mysqltutorial.org/mysql-standard-deviation/) | Return the population standard deviation |
| `SUM()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_sum) | [Tutorial](https://www.mysqltutorial.org/mysql-sum/) | Return the sum |
| `BIT_AND()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_bit-and) | | Return bitwise AND |
| `BIT_OR` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_bit-or) | | Return bitwise OR |
| `BIT_XOR` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_bit-xor) | | Return bitwise XOR |
| `COUNT(DISTINCT)` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_count-distinct) | | Return the count of a number of different values |
| `JSON_ARRAYAGG()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_json-arrayagg) | | Return result set as a single JSON array |
| `JSON_OBJECTAGG()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_json-objectagg) | | Return result set as a single JSON object |
| `STD()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_std) | | Return the population standard deviation |
| `STDDEV_POP()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_stddev-pop) | | Return the population standard deviation |
| `STDDEV_SAMP()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_stddev-samp) | | Return the sample standard deviation |
| `VAR_POP()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_var-pop) | | Return the population standard variance |
| `VAR_SAMP()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_var-samp) | | Return the sample variance |
| `VARIANCE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_variance) | | Return the population standard variance |

### Strings

See [the official docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html) for more information. The `Docs` link for each function points to that function's reference in the official docs. The `Tutorial` link for each function, if there is one, points to that function's reference on the MySQL tutorial site.

| Aggregate function | Docs | Tutorial | Description |
| :-- | :-- | :-- | :-- |
| `CONCAT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_concat) | [Tutorial](https://www.mysqltutorial.org/sql-concat-in-mysql.aspx) | Return concatenated string |
| `FIND_IN_SET()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_find-in-set) | [Tutorial](https://www.mysqltutorial.org/mysql-find_in_set/) | Index (position) of first argument within second argument |
| `FORMAT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_format) | [Tutorial](https://www.mysqltutorial.org/mysql-format-function/) | Return a number formatted to specified number of decimal places |
| `INSTR()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_instr) | [Tutorial](https://www.mysqltutorial.org/mysql-instr/) | Return the index of the first occurrence of substring |
| `LEFT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_left) | [Tutorial](https://www.mysqltutorial.org/mysql-left-function/) | Return the leftmost number of characters as specified |
| `LENGTH()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_length) | [Tutorial](https://www.mysqltutorial.org/mysql-string-length/) | Return the length of a string in bytes |
| `LOWER()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lower) | [Tutorial](https://www.mysqltutorial.org/mysql-string-functions/mysql-lower/) | Return the argument in lowercase |
| `LTRIM()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ltrim) | [Tutorial](https://www.mysqltutorial.org/mysql-string-functions/mysql-ltrim-function/) | Remove leading spaces |
| `REPLACE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_replace) | [Tutorial](https://www.mysqltutorial.org/mysql-string-replace-function.aspx) | Replace occurrences of a specified string |
| `RIGHT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_right) | [Tutorial](https://www.mysqltutorial.org/mysql-string-functions/mysql-right-function/) | Return the specified rightmost number of characters |
| `RTRIM()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_rtrim) | [Tutorial](https://www.mysqltutorial.org/mysql-string-functions/mysql-rtrim-function/) | Remove trailing spaces |
| `SUBSTRING()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring) | [Tutorial](https://www.mysqltutorial.org/mysql-substring.aspx) | Return the substring as specified |
| `SUBSTRING_INDEX()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring-index) | [Tutorial](https://www.mysqltutorial.org/mysql-string-functions/mysql-substring_index-function/) | Return a substring from a string before the specified number of occurrences of the delimiter |
| `TRIM()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_trim) | [Tutorial](https://www.mysqltutorial.org/mysql-trim/) | Remove leading and trailing spaces |
| `UPPER()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_upper) | [Tutorial](https://www.mysqltutorial.org/mysql-string-functions/mysql-upper/) | Convert to uppercase |
| `ASCII()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ascii) | | Return numeric value of left-most character |
| `BIN()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_bin) | | Return a string containing binary representation of a number |
| `BIT_LENGTH()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_bit-length) | | Return length of argument in bits |
| `CHAR()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char) | | Return the character for each integer passed |
| `CHAR_LENGTH()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char-length) | | Return number of characters in argument |
| `CHARACTER_LENGTH()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_character-length) | | Synonym for `CHAR_LENGTH()` |
| `CONCAT_WS()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_concat-ws) | | Return concatenate with separator |
| `ELT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_elt) | | Return string at index number |
| `EXPORT_SET()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_export-set) | | Return a string such that for every bit set in the value bits, you get an on string and for every unset bit, you get an off string |
| `FIELD()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_field) | | Index (position) of first argument in subsequent arguments |
| `FROM_BASE64()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_from-base64) | | Decode base64 encoded string and return result |
| `HEX()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_hex) | | Hexadecimal representation of decimal or string value |
| `INSERT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_insert) | | Insert substring at specified position up to specified number of characters |
| `LCASE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lcase) | | Synonym for `LOWER()` |
| `LIKE` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html#operator_like) | | Simple pattern matching |
| `LOAD_FILE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_load-file) | | Load the named file |
| `LOCATE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_locate) | | Return the position of the first occurrence of substring |
| `LPAD()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lpad) | | Return the string argument, left-padded with the specified string |
| `MAKE_SET()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_make-set) | | Return a set of comma-separated strings that have the corresponding bit in bits set |
| `MATCH` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/fulltext-search.html#function_match) | | Perform full-text search |
| `MID()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_mid) | | Return a substring starting from the specified position |
| `NOT LIKE` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html#operator_not-like) | | Negation of simple pattern matching |
| `NOT REGEXP` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#operator_not-regexp) | | Negation of REGEXP |
| `OCT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_oct) | | Return a string containing octal representation of a number |
| `OCTET_LENGTH()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_octet-length) | | Synonym for `LENGTH()` |
| `ORD()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ord) | | Return character code for leftmost character of the argument |
| `POSITION()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_position) | | Synonym for `LOCATE()` |
| `QUOTE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_quote) | | Escape the argument for use in an SQL statement |
| `REGEXP` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#operator_regexp) | | Whether string matches regular expression |
| `REGEXP_INSTR()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#function_regexp-instr) | | Starting index of substring matching regular expression |
| `REGEXP_LIKE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#function_regexp-like) | | Whether string matches regular expression |
| `REGEXP_REPLACE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#function_regexp-replace) | | Replace substrings matching regular expression |
| `REGEXP_SUBSTR()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#function_regexp-substr) | | Return substring matching regular expression |
| `REPEAT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_repeat) | | Repeat a string the specified number of times |
| `REVERSE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_reverse) | | Reverse the characters in a string |
| `RLIKE` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#operator_regexp) | | Whether string matches regular expression |
| `RPAD()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_rpad) | | Append string the specified number of times |
| `SOUNDEX()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_soundex) | | Return a soundex string |
| `SOUNDS LIKE` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#operator_sounds-like) | | Compare sounds |
| `SPACE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_space) | | Return a string of the specified number of spaces |
| `STRCMP()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html#function_strcmp) | | Compare two strings |
| `SUBSTR()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substr) | | Return the substring as specified |
| `TO_BASE64()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_to-base64) | | Return the argument converted to a base-64 string |
| `UCASE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ucase) | | Synonym for `UPPER()` |
| `UNHEX()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_unhex) | | Return a string containing hex representation of a number |
| `WEIGHT_STRING()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_weight-string) | | Return the weight string for a string |

### Math

See [the official docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html) for more information. The `Docs` link for each function points to that function's reference in the official docs. The `Tutorial` link for each function, if there is one, points to that function's reference on the MySQL tutorial site.

| Function | Docs | Tutorial | Description |
| :-- | :-- | :-- | :-- |
| `ABS()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_abs) | [Tutorial](https://www.mysqltutorial.org/mysql-math-functions/mysql-abs/) | Return the absolute value |
| `CEIL()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_ceil) | [Tutorial](https://www.mysqltutorial.org/mysql-math-functions/mysql-ceil/) | Return the smallest integer value not less than the argument |
| `FLOOR()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_floor) | [Tutorial](https://www.mysqltutorial.org/mysql-math-functions/mysql-floor/) | Return the largest integer value not greater than the argument |
| `MOD()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_mod) | [Tutorial](https://www.mysqltutorial.org/mysql-math-functions/mysql-mod/) | Return the remainder |
| `ROUND()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_round) | [Tutorial](https://www.mysqltutorial.org/mysql-math-functions/mysql-round/) | Round the argument |
| `TRUNCATE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_truncate) | [Tutorial](https://www.mysqltutorial.org/mysql-math-functions/mysql-truncate/) | Truncate to specified number of decimal places |
| `ACOS()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_acos) | | Return the arc cosine |
| `ASIN()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_asin) | | Return the arc sine |
| `ATAN()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_atan) | | Return the arc tangent |
| `ATAN2(), ATAN()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_atan2) | | Return the arc tangent of the two arguments |
| `CEILING()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_ceiling) | | Return the smallest integer value not less than the argument |
| `CONV()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_conv) | | Convert numbers between different number bases |
| `COS()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_cos) | | Return the cosine |
| `COT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_cot) | | Return the cotangent |
| `CRC32()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_crc32) | | Compute a cyclic redundancy check value |
| `DEGREES()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_degrees) | | Convert radians to degrees |
| `EXP()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_exp) | | Raise to the power of |
| `LN()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_ln) | | Return the natural logarithm of the argument |
| `LOG()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_log) | | Return the natural logarithm of the first argument |
| `LOG10()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_log10) | | Return the base-10 logarithm of the argument |
| `LOG2()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_log2) | | Return the base-2 logarithm of the argument |
| `PI()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_pi) | | Return the value of pi |
| `POW()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_pow) | | Return the argument raised to the specified power |
| `POWER()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_power) | | Return the argument raised to the specified power |
| `RADIANS()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_radians) | | Return argument converted to radians |
| `RAND()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_rand) | | Return a random floating-point value |
| `SIGN()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_sign) | | Return the sign of the argument |
| `SIN()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_sin) | | Return the sine of the argument |
| `SQRT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_sqrt) | | Return the square root of the argument |
| `TAN()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_tan) | | Return the tangent of the argument |

### Dates

See [the official docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html) for more information. The `Docs` link for each function points to that function's reference in the official docs. The `Tutorial` link for each function, if there is one, points to that function's reference on the MySQL tutorial site. Immediately below are date formatting specifiers (which can all be seen in the MySQL docs under [`DATE_FORMAT`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-format)).

<details><summary> Date format specifiers and descriptions</summary>

| Specifier | Description |
| :-- | :-- |
| `%a` | Abbreviated weekday name (`Sun..Sat`) |
| `%b` | Abbreviated month name (`Jan..Dec`) |
| `%c` | Month, numeric (`0..12`) |
| `%D` | Day of the month with English suffix (`0th`, `1st`, `2nd`, `3rd`, `…`) |
| `%d` | Day of the month, numeric (`00..31`) |
| `%e` | Day of the month, numeric (`0..31`) |
| `%f` | Microseconds (`000000..999999`) |
| `%H` | Hour (`00..23`) |
| `%h` | Hour (`01..12`) |
| `%I` | Hour (`01..12`) |
| `%i` | Minutes, numeric (`00..59`) |
| `%j` | Day of year (`001..366`) |
| `%k` | Hour (`0..23`) |
| `%l` | Hour (`1..12`) |
| `%M` | Month name (`January..December`) |
| `%m` | Month, numeric (`00..12`) |
| `%p` | AM or PM |
| `%r` | Time, 12-hour (`hh:mm:ss` followed by `AM` or `PM`) |
| `%S` | Seconds (`00..59`) |
| `%s` | Seconds (`00..59`) |
| `%T` | Time, 24-hour (`hh:mm:ss`) |
| `%U` | Week (`00..53`), where Sunday is the first day of the week; `WEEK()` mode `0` |
| `%u` | Week (`00..53`), where Monday is the first day of the week; `WEEK()` mode `1` |
| `%V` | Week (`01..53`), where Sunday is the first day of the week; `WEEK()` mode `2`; used with `%X` |
| `%v` | Week (`01..53`), where Monday is the first day of the week; `WEEK()` mode `3`; used with `%x` |
| `%W` | Weekday name (`Sunday..Saturday`) |
| `%w` | Day of the week (`0=Sunday..6=Saturday`) |
| `%X` | Year for the week where Sunday is the first day of the week, numeric, four digits; used with `%V` |
| `%x` | Year for the week, where Monday is the first day of the week, numeric, four digits; used with `%v` |
| `%Y` | Year, numeric, four digits |
| `%y` | Year, numeric (two digits) |
| `%%` | A literal `%` character |
| `%x` | `x`, for any `“x”` not listed above |

</details>

| Function | Docs | Tutorial | Description |
| :-- | :-- | :-- | :-- |
| `CURDATE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_curdate) | [Tutorial](https://www.mysqltutorial.org/mysql-curdate/) | Return the current date |
| `DATE_ADD()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-add) | [Tutorial](https://www.mysqltutorial.org/mysql-date_add/) | Add time values (intervals) to a date value |
| `DATE_FORMAT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-format) | [Tutorial](https://www.mysqltutorial.org/mysql-date_format/) | Format date as specified |
| `DATE_SUB()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-sub) | [Tutorial](https://www.mysqltutorial.org/mysql-date_sub/) | Subtract a time value (interval) from a date |
| `DATEDIFF()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_datediff) | [Tutorial](https://www.mysqltutorial.org/mysql-datediff.aspx) | Subtract two dates |
| `DAY()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_day) | [Tutorial](https://www.mysqltutorial.org/mysql-day/) | Synonym for `DAYOFMONTH()` |
| `DAYNAME()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayname) | [Tutorial](https://www.mysqltutorial.org/mysql-dayname/) | Return the name of the weekday |
| `DAYOFWEEK()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayofweek) | [Tutorial](https://www.mysqltutorial.org/mysql-dayofweek/) | Return the weekday index of the argument |
| `EXTRACT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_extract) | [Tutorial](https://www.mysqltutorial.org/mysql-extract/) | Extract part of a date |
| `LAST_DAY` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_last-day) | [Tutorial](https://www.mysqltutorial.org/mysql-last_day/) | Return the last day of the month for the argument |
| `MONTH()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_month) | [Tutorial](https://www.mysqltutorial.org/mysql-month/) | Return the month from the date passed |
| `NOW()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_now) | [Tutorial](https://www.mysqltutorial.org/mysql-now/) | Return the current date and time |
| `STR_TO_DATE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_str-to-date) | [Tutorial](https://www.mysqltutorial.org/mysql-str_to_date/) | Convert a string to a date |
| `SYSDATE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_sysdate) | [Tutorial](https://www.mysqltutorial.org/mysql-sysdate/) | Return the time at which the function executes |
| `TIMEDIFF()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timediff) | [Tutorial](https://www.mysqltutorial.org/mysql-timediff/) | Subtract time |
| `TIMESTAMPDIFF()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timestampdiff) | [Tutorial](https://www.mysqltutorial.org/mysql-timestampdiff/) | Subtract an interval from a datetime expression |
| `WEEK()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_week) | [Tutorial](https://www.mysqltutorial.org/mysql-week/) | Return the week number |
| `WEEKDAY()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_weekday) | [Tutorial](https://www.mysqltutorial.org/mysql-weekday/) | Return the weekday index |
| `YEAR()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_year) | [Tutorial](https://www.mysqltutorial.org/mysql-year/) | Return the year |
| `ADDDATE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_adddate) | | Add time values (intervals) to a date value |
| `ADDTIME()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_addtime) | | Add time |
| `CONVERT_TZ()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_convert-tz) | | Convert from one time zone to another |
| `CURRENT_DATE(), CURRENT_DATE` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_current-date) | | Synonyms for `CURDATE()` |
| `CURRENT_TIME(), CURRENT_TIME` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_current-time) | | Synonyms for `CURTIME()` |
| `CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_current-timestamp) | | Synonyms for `NOW()` |
| `CURTIME()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_curtime) | | Return the current time |
| `DATE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date) | | Extract the date part of a date or datetime expression |
| `DAYOFMONTH()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayofmonth) | | Return the day of the month (0-31) |
| `DAYOFYEAR()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayofyear) | | Return the day of the year (1-366) |
| `FROM_DAYS()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_from-days) | | Convert a day number to a date |
| `FROM_UNIXTIME()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_from-unixtime) | | Format Unix timestamp as a date |
| `GET_FORMAT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_get-format) | | Return a date format string |
| `HOUR()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_hour) | | Extract the hour |
| `LOCALTIME(), LOCALTIME` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_localtime) | | Synonym for `NOW()` |
| `LOCALTIMESTAMP, LOCALTIMESTAMP()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_localtimestamp) | | Synonym for `NOW()` |
| `MAKEDATE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_makedate) | | Create a date from the year and day of year |
| `MAKETIME()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_maketime) | | Create time from hour, minute, second |
| `MICROSECOND()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_microsecond) | | Return the microseconds from argument |
| `MINUTE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_minute) | | Return the minute from the argument |
| `MONTHNAME()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_monthname) | | Return the name of the month |
| `PERIOD_ADD()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_period-add) | | Add a period to a year-month |
| `PERIOD_DIFF()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_period-diff) | | Return the number of months between periods |
| `QUARTER()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_quarter) | | Return the quarter from a date argument |
| `SEC_TO_TIME()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_sec-to-time) | | Converts seconds to 'hh:mm:ss' format |
| `SECOND()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_second) | | Return the second (0-59) |
| `SUBDATE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_subdate) | | Synonym for `DATE_SUB()` when invoked with three arguments |
| `SUBTIME()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_subtime) | | Subtract times |
| `TIME()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_time) | | Extract the time portion of the expression passed |
| `TIME_FORMAT()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_time-format) | | Format as time |
| `TIME_TO_SEC()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_time-to-sec) | | Return the argument converted to seconds |
| `TIMESTAMP()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timestamp) | | With a single argument, this function returns the date or datetime expression; with two arguments, the sum of the arguments |
| `TIMESTAMPADD()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timestampadd) | | Add an interval to a datetime expression |
| `TO_DAYS()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_to-days) | | Return the date argument converted to days |
| `TO_SECONDS()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_to-seconds) | | Return the date or datetime argument converted to seconds since Year 0 |
| `UNIX_TIMESTAMP()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_unix-timestamp) | | Return a Unix timestamp |
| `UTC_DATE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_utc-date) | | Return the current UTC date |
| `UTC_TIME()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_utc-time) | | Return the current UTC time |
| `UTC_TIMESTAMP()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_utc-timestamp) | | Return the current UTC date and time |
| `WEEKOFYEAR()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_weekofyear) | | Return the calendar week of the date (1-53) |
| `YEARWEEK()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_yearweek) | | Return the year and week |

### Comparison

See [the official docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html) for more information. The `Docs` link for each function points to that function's reference in the official docs. The `Tutorial` link for each function, if there is one, points to that function's reference on the MySQL tutorial site.

| Function | Docs | Tutorial | Description |
| :-- | :-- | :-- | :-- |
| `COALESCE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#function_coalesce) | [Tutorial](https://www.mysqltutorial.org/mysql-coalesce/) | Return the first non-NULL argument |
| `GREATEST()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#function_greatest) | [Tutorial](https://www.mysqltutorial.org/mysql-greatest-least/) | Return the largest argument |
| `IS NULL` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_is-null) | [Tutorial](https://www.mysqltutorial.org/mysql-isnull-function/) | NULL value test |
| `LEAST()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#function_least) | [Tutorial](https://www.mysqltutorial.org/mysql-greatest-least/) | Return the smallest argument |
| `>` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_greater-than) | | Greater than operator |
| `>=` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_greater-than-or-equal) | | Greater than or equal operator |
| `<` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_less-than) | | Less than operator |
| `<>, !=` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_not-equal) | | Not equal operator |
| `<=` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_less-than-or-equal) | | Less than or equal operator |
| `<=>` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_equal-to) | | NULL-safe equal to operator |
| `=` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_equal) | | Equal operator |
| `BETWEEN ... AND ...` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_between) | | Whether a value is within a range of values |
| `IN()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_in) | | Whether a value is within a set of values |
| `INTERVAL()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#function_interval) | | Return the index of the argument that is less than the first argument |
| `IS` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_is) | | Test a value against a boolean |
| `IS NOT` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_is-not) | | Test a value against a boolean |
| `IS NOT NULL` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_is-not-null) | | NOT NULL value test |
| `ISNULL()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#function_isnull) | | Test whether the argument is NULL |
| `LIKE` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html#operator_like) | | Simple pattern matching |
| `NOT BETWEEN ... AND ...` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_not-between) | | Whether a value is not within a range of values |
| `NOT IN()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_not-in) | | Whether a value is not within a set of values |
| `NOT LIKE` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html#operator_not-like) | | Negation of simple pattern matching |
| `STRCMP()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html#function_strcmp) | | Compare two strings |

### Window Functions

See [the official docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html) for more information. The `Docs` link for each function points to that function's reference in the official docs. The `Tutorial` link for each function points to that function's reference on the MySQL tutorial site.

| Function | Docs | Tutorial | Description |
| :-- | :-- | :-- | :-- |
| `CUME_DIST()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_cume-dist) | [Tutorial](https://www.mysqltutorial.org/mysql-window-functions/mysql-cume_dist-function/) | Cumulative distribution value |
| `DENSE_RANK()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_dense-rank) | [Tutorial](https://www.mysqltutorial.org/mysql-window-functions/mysql-dense_rank-function/) | Rank of current row within its partition, without gaps |
| `FIRST_VALUE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_first-value) | [Tutorial](https://www.mysqltutorial.org/mysql-window-functions/mysql-first_value-function/) | Value of argument from first row of window frame |
| `LAG()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_lag) | [Tutorial](https://www.mysqltutorial.org/mysql-window-functions/mysql-lag-function/) | Value of argument from row lagging current row within partition |
| `LAST_VALUE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_last-value) | [Tutorial](https://www.mysqltutorial.org/mysql-window-functions/mysql-last_value-function/) | Value of argument from last row of window frame |
| `LEAD()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_lead) | [Tutorial](https://www.mysqltutorial.org/mysql-window-functions/mysql-lead-function/) | Value of argument from row leading current row within partition |
| `NTH_VALUE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_nth-value) | [Tutorial](https://www.mysqltutorial.org/mysql-window-functions/mysql-nth_value-function/) | Value of argument from N-th row of window frame |
| `NTILE()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_ntile) | [Tutorial](https://www.mysqltutorial.org/mysql-window-functions/mysql-ntile-function/) | Bucket number of current row within its partition. |
| `PERCENT_RANK()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_percent-rank) | [Tutorial](https://www.mysqltutorial.org/mysql-window-functions/mysql-percent_rank-function/) | Percentage rank value |
| `RANK()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_rank) | [Tutorial](https://www.mysqltutorial.org/mysql-window-functions/mysql-rank-function/) | Rank of current row within its partition, with gaps |
| `ROW_NUMBER()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_row-number) | [Tutorial](https://www.mysqltutorial.org/mysql-window-functions/mysql-row_number-function/) | Number of current row within its partition |

## Control Flow Functions and Expressions

See [the official docs](https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html) for more information. The `Docs` link for each function points to that function's reference in the official docs. The `Tutorial` link for each function, if there is one, points to that function's reference on the MySQL tutorial site.

| Function | Docs | Tutorial | Description |
| :-- | :-- | :-- | :-- |
| `CASE` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html#operator_case) | [Tutorial](https://www.mysqltutorial.org/mysql-case-function/) | Case operator |
| `IF()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html#function_if) | [Tutorial](https://www.mysqltutorial.org/mysql-if-function.aspx) | If/else construct |
| `IFNULL()` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html#function_ifnull) | [Tutorial](https://www.mysqltutorial.org/mysql-ifnull/) | Null if/else construct |
| `NULLIF` | [Docs](https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html#function_nullif) | [Tutorial](https://www.mysqltutorial.org/mysql-nullif/) | Return NULL if expr1 = expr2 |
